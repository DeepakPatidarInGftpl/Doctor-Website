import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-credit-note',
  templateUrl: './add-credit-note.component.html',
  styleUrls: ['./add-credit-note.component.scss']
})
export class AddCreditNoteComponent implements OnInit {
  constructor(private fb: FormBuilder, private transactionService: TransactionService, private saleService: SalesService, private toastr: ToastrService, private router: Router) { }
  debitNoteForm!: FormGroup;

  get f() {
    return this.debitNoteForm.controls;
  }
  fromAccountControl = new FormControl();
  filteredFromAccount: Observable<any[]>;
  //salebill
  billControl = new FormControl();
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; 
    this.debitNoteForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate, [Validators.required]),
      credit_note_no: new FormControl('',),
      sale_bill_no: new FormControl(''),
      reason: new FormControl(''),
      roundoff: new FormControl(''),
      tax: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      note: new FormControl('',),
      total: new FormControl(''),
      status: new FormControl('')
    })

    this.getAccount();
    this.getprefix();
    this.getSaleBill();

    this.filteredFromAccount = this.fromAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getCreditNotePrefix().subscribe((res: any) => {
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
  accountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }

  saleBillList: any[] = [];
  FiltersaleBillList: any[] = [];
  getSaleBill() {
    this.saleService.getSalesBill().subscribe((res: any) => {
      this.saleBillList = res;
      // this.FiltersaleBillList = res;
    })
  }

  getFilterBill(data: any) {
    this.FiltersaleBillList = this.saleBillList.filter(salebill => {
      if (salebill && salebill?.customer_bill_no) {
        const aliasLower = salebill?.customer_bill_no.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.FiltersaleBillList);
  }

  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredFromAccount = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
    if (!include && filteredFromAccount.length === 0) {
      filteredFromAccount.push({ account: "No data found" });
    }
    return filteredFromAccount;
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
  oncheck(event: any) {
    this.debitNoteForm.patchValue({
      account: event.id
    })
  }
  oncheck2(data: any) {
    console.log(data);
    this.debitNoteForm.patchValue({
      sale_bill_no: data.id
    })
  }

  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    if (this.debitNoteForm.valid) {
      this.loaders = true;
      const formdata = new FormData();
      formdata.append('account', this.debitNoteForm.get('account')?.value);
      formdata.append('sale_bill_no', this.debitNoteForm.get('sale_bill_no')?.value);
      formdata.append('date', this.debitNoteForm.get('date')?.value);
      formdata.append('credit_note_no', this.debitNoteForm.get('credit_note_no')?.value);
      formdata.append('reason', this.debitNoteForm.get('reason')?.value);
      formdata.append('roundoff', this.debitNoteForm.get('roundoff')?.value);
      formdata.append('note', this.debitNoteForm.get('note')?.value);
      formdata.append('tax', this.debitNoteForm.get('tax')?.value);
      formdata.append('total', this.debitNoteForm.get('total')?.value);

      this.transactionService.addCreditNote(formdata).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.debitNoteForm.reset()
          this.router.navigate(['//transaction/creditnoteList'])
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

  get account() {
    return this.debitNoteForm.get('account')
  }
  get date() {
    return this.debitNoteForm.get('date')
  }
  get credit_note_no() {
    return this.debitNoteForm.get('credit_note_no')
  }
  get reason() {
    return this.debitNoteForm.get('reason')
  }
  get sale_bill_no() {
    return this.debitNoteForm.get('sale_bill_no')
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
  get roundoff() {
    return this.debitNoteForm.get('roundoff')
  }

}
