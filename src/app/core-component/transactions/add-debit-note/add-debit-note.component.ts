import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-debit-note',
  templateUrl: './add-debit-note.component.html',
  styleUrls: ['./add-debit-note.component.scss']
})
export class AddDebitNoteComponent implements OnInit {
  constructor(private fb: FormBuilder, private transactionService: TransactionService,
    private purchaseService: PurchaseServiceService, private toastr: ToastrService, private router: Router, private commonService: CommonServiceService, private coreService: CoreService) { }
  debitNoteForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  taxSlabList: any[] = [];
  selectedPercentageData: any;
  selectedTaxPercentage: any;

  get f() {
    return this.debitNoteForm.controls;
  }

  supplierControl = new FormControl();
  filteredSuppliers: Observable<any[]>;
  //
  billControl = new FormControl();

  ngOnInit(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.debitNoteForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDateTime, [Validators.required]),
      debit_note_no: new FormControl('',),
      purchase_bill: new FormControl('', [Validators.required]),
      reason: new FormControl(''),
      amount: new FormControl(0),
      tax: new FormControl(''),
      note: new FormControl('',),
      total: new FormControl(0),
    })

    this.getPurchaseBill();
    this.getprefix()
    this.getTaxSlabList();

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getSuuplier(res);
      } else {
        this.suppliers = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })
  }

  dateValidation(financialYear) {
    const dateControl = this.debitNoteForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  getTaxSlabList() {
    this.coreService.getTaxSlab().subscribe((res: any) => {
      console.log(res);
      this.taxSlabList = res;
    })
  }

  onChangePercentage(event) {
    console.log(event);
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    const selectedPrefix = this.taxSlabList.find(prefix => prefix?.slab_title === (selectedValue));

    if (selectedPrefix) {
      this.selectedPercentageData = selectedPrefix;
    }
    console.log(selectedPrefix);
    this.calculateTaxAmout();
  }

  calculateTaxAmout() {
    const amountControl = this.debitNoteForm.get('total')?.value;
    if (this.selectedPercentageData?.variable_tax) {
      if (this.selectedPercentageData?.amount_tax_slabs[1]?.from_amount < amountControl) {
        const taxPercentage = this.selectedPercentageData?.amount_tax_slabs[1]?.tax?.tax_percentage;
        this.selectedTaxPercentage = taxPercentage;
      } else {
        const taxPercentage = this.selectedPercentageData?.amount_tax_slabs[0]?.tax?.tax_percentage;
        this.selectedTaxPercentage = taxPercentage;
      }
    } else {
      const taxPercentage = this.selectedPercentageData?.amount_tax_slabs[0]?.tax?.tax_percentage;
      this.selectedTaxPercentage = taxPercentage;
    }
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getDebitNotePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.debitNoteForm.get('debit_note_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }
  amounts: any = 0;
  taxs: any = 0;
  totals: any = 0;
  calculateTax() {
    if (this.taxs) {
      // let taxAmount = (this.amounts * this.taxs) / 100;
      let taxAmount = this.amounts - (this.amounts * (100 / (100 + this.taxs)))
      let total = this.amounts + taxAmount;
      this.totals = total.toFixed(2);
    } else {
      this.totals = this.amounts.toFixed(2)

    }

  }

  suppliers: any[] = [];

  getSuuplier(query) {
    this.purchaseService.getSupplier(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.suppliers = res;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(this.supplierControl?.value, true))
      );
    })
  }

  purchaseList: any[] = []
  filterPurchaseBill: any[] = []
  getPurchaseBill() {
    this.purchaseService.getPurchaseBill().subscribe((res: any) => {
      this.purchaseList = res;
    })
  }

  getFilterBill(data: any) {
    this.filterPurchaseBill = this.purchaseList.filter(salebill => {
      if (salebill && salebill?.supplier_bill_no) {
        const aliasLower = salebill?.supplier_bill_no.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.filterPurchaseBill);
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier?.company_name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier?.company_name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      filteredSuppliers.push({ company_name: "No data found" });
    }
    return filteredSuppliers;
  }

  oncheck(id: any, data: any) {
    console.log(data);
    this.debitNoteForm.patchValue({
      party: id
    })

    const userId = data?.userid?.id;
    this.purchaseService.getPurchaseBillByUserId(userId).subscribe((res: any) => {
      this.purchaseList = res;
    })
  }
  oncheck2(data: any) {
    console.log(data);
    this.debitNoteForm.patchValue({
      purchase_bill: data.id
    })
  }
  get supplier() {
    return this.debitNoteForm.get('party') as FormControl;
  }
  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    const totalAmount = this.debitNoteForm.get('total')?.value;
    if(totalAmount < 0) {
      this.toastr.error('Payment voucher amount must be greater than 0.');
      return;
    }
    if (this.debitNoteForm.valid) {
      this.loaders = true;
      const formdata = new FormData();
      formdata.append('party', this.debitNoteForm.get('party')?.value);
      formdata.append('purchase_bill', this.debitNoteForm.get('purchase_bill')?.value);
      formdata.append('date', this.debitNoteForm.get('date')?.value);
      formdata.append('debit_note_no', this.debitNoteForm.get('debit_note_no')?.value);
      formdata.append('reason', this.debitNoteForm.get('reason')?.value);
      formdata.append('amount', this.debitNoteForm.get('amount')?.value);
      formdata.append('note', this.debitNoteForm.get('note')?.value);
      formdata.append('tax', this.selectedTaxPercentage);
      formdata.append('total', this.debitNoteForm.get('total')?.value);

      this.transactionService.addDebitNote(formdata).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.debitNoteForm.reset()
          this.router.navigate(['//transaction/debitnoteList'])
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.debitNoteForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get debit_note_no() {
    return this.debitNoteForm.get('debit_note_no')
  }
  get date() {
    return this.debitNoteForm.get('date')
  }
  get purchase_bill() {
    return this.debitNoteForm.get('purchase_bill')
  }
  get reason() {
    return this.debitNoteForm.get('reason')
  }
  get amount() {
    return this.debitNoteForm.get('amount')
  }
  get tax() {
    return this.debitNoteForm.get('tax')
  }
  get note() {
    return this.debitNoteForm.get('note')
  }
  get total() {
    return this.debitNoteForm.get('total')
  }
}

