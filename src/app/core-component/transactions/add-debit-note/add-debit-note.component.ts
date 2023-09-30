import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-debit-note',
  templateUrl: './add-debit-note.component.html',
  styleUrls: ['./add-debit-note.component.scss']
})
export class AddDebitNoteComponent implements OnInit {
  constructor(private fb: FormBuilder, private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private toastr: ToastrService, private router: Router) { }
  debitNoteForm!: FormGroup;

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
      amount: new FormControl(''),
      tax: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      note: new FormControl('',),
      total: new FormControl(''),
    })

    this.getSupplier();
    this.getPurchaseBill();
    this.getprefix()

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getDebitNotePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.prefix
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
  getSupplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      console.log(res);
      this.suppliers = res
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
      if (salebill && salebill?.refrence_bill_no) {
        const aliasLower = salebill?.refrence_bill_no.toLowerCase();
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
      ? this.suppliers.filter(supplier => supplier.company_name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.company_name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      filteredSuppliers.push({ company_name: "No data found" });
    }
    return filteredSuppliers;
  }

  oncheck(data: any) {
    console.log(data);
    this.debitNoteForm.patchValue({
      party: data
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
      formdata.append('tax', this.debitNoteForm.get('tax')?.value);
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
      // console.log('hhhhhh');
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

