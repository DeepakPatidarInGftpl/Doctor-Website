import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-debit-note',
  templateUrl: './update-debit-note.component.html',
  styleUrls: ['./update-debit-note.component.scss']
})
export class UpdateDebitNoteComponent implements OnInit {

  constructor(private fb: FormBuilder, private transactionService: TransactionService,
    private purchaseService: PurchaseServiceService, private toastr: ToastrService,
    private router: Router, private Arout: ActivatedRoute, private contactService: ContactService, private commonService: CommonServiceService, private coreService: CoreService) { }
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

  id: any
  getRes: any;
  companyName!: string;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');
    this.billControl.setValue('Loading...');

    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.debitNoteForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      debit_note_no: new FormControl('',),
      purchase_bill: new FormControl('', [Validators.required]),
      reason: new FormControl(''),
      amount: new FormControl(''),
      tax: new FormControl('', [Validators.required]),
      note: new FormControl('',),
      total: new FormControl(''),
    })

    this.getTaxSlabList();

    this.transactionService.getDebitNoteById(this.id).subscribe(res => {
      this.getRes = res;
      this.companyName = res.party?.company_name;
      this.debitNoteForm.patchValue(this.getRes);
      this.debitNoteForm.get('party')?.patchValue(res.party.id);
      this.debitNoteForm.get('purchase_bill')?.patchValue(res?.purchase_bill?.id);
      const userId = res?.party?.userid?.id;
      this.purchaseService.getPurchaseBillByUserId(userId).subscribe((res: any) => {
        this.purchaseList = res;
      })
    setTimeout(() => {
      if(!!this.taxSlabList?.length){
        const taxTitle = this.getTaxTitleByPercentage(res?.tax);
        if (taxTitle) {
          this.debitNoteForm.controls['tax'].setValue(taxTitle);
          this.calculateTaxAmout();
        }
      }
    }, 2000);

      // this.debitNoteForm.get('debit_note_no')?.patchValue(res?.debit_note_no?.id); //20-5
      this.contactService.getSupplierById(res.party.id).subscribe(res => {

        this.supplierControl.setValue(res.company_name);
        this.billControl.setValue(this.getRes?.purchase_bill?.supplier_bill_no);


        //patch local-date
        const formattedDate = new Date(this.getRes.date).toISOString().slice(0, 16);
        this.debitNoteForm.get('date')?.patchValue(formattedDate);
      })
    })

    // this.getPurchaseBill();
    this.getprefix();

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);

    this.supplierControl.valueChanges.subscribe((res) => {
      const isFieldChanged = res !== this.companyName;
      if (res.length >= 3 && isFieldChanged) {
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

  getTaxTitleByPercentage(taxPercentage: number): string {
    for (let taxSlab of this.taxSlabList) {
        for (let amountTaxSlab of taxSlab?.amount_tax_slabs) {
            if (amountTaxSlab.tax.tax_percentage === Number(taxPercentage)) {
                return taxSlab?.slab_title;
            }
        }
    }
    return '';
}

  dateValidation(financialYear) {
    const dateControl = this.debitNoteForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getDebitNotePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.data
      } else {
        this.toastr.error(res.msg)
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }
  amounts: any;
  taxs: number;
  totals: number;
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

  getTaxSlabList() {
    this.coreService.getTaxSlab().subscribe((res: any) => {
      console.log(res);
      this.taxSlabList = res;
    })
  }

  onChangePercentage(event) {
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
    console.warn(this.selectedTaxPercentage)
  }

  purchaseList: any[] = []
  filterPurchaseBill: any[] = []
  getPurchaseBill() {
    this.purchaseService.getPurchaseBill().subscribe((res: any) => {
      this.purchaseList = res;
      this.filterPurchaseBill = res;
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


  oncheck(event: any, data: any) {
    console.log(event);
    this.debitNoteForm.patchValue({
      party: event
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
    console.log(this.debitNoteForm.value)
    console.log(this.debitNoteForm)
    const totalAmount = this.debitNoteForm.get('amount')?.value;
    const total = this.debitNoteForm.get('total')?.value;
    if(!totalAmount || Number(totalAmount) < 1) {
      this.toastr.error('DebitNote voucher amount must be greater than 0.');
      return;
    }
    if(!total || total < 0) {
      this.toastr.error('DebitNote voucher total must be greater than 0.');
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
      formdata.append('tax', (this.selectedTaxPercentage ?? 0));
      formdata.append('total', this.debitNoteForm.get('total')?.value);
      this.transactionService.updateDebitNote(formdata, this.id).subscribe(res => {
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
