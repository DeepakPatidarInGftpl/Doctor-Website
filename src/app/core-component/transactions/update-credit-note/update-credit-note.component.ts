import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-credit-note',
  templateUrl: './update-credit-note.component.html',
  styleUrls: ['./update-credit-note.component.scss']
})
export class UpdateCreditNoteComponent implements OnInit {

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private coreService: CoreService, private toastr: ToastrService, private router: Router,
    private Aroute: ActivatedRoute) { }
  debitNoteForm!: FormGroup;

  get f() {
    return this.debitNoteForm.controls;
  }
  id: any;
  ngOnInit(): void {
    this.id = this.Aroute.snapshot.paramMap.get('id');

    this.debitNoteForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      credit_note_no: new FormControl('',),
      sale_bill_no: new FormControl(''),
      reason: new FormControl(''),
      roundoff: new FormControl(''),
      tax: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      note: new FormControl('',),
      total: new FormControl(''),
      status: new FormControl('')
    })
    this.transactionService.getCreditNoteById(this.id).subscribe(res => {
    console.log(res);
    this.debitNoteForm.patchValue(res);

    })
    this.getAccount()
  }
  amounts: number;
  taxs: number;
  totals: number;
  calculateTax() {
    if (this.taxs) {
      let taxAmount = (this.amounts * this.taxs) / 100;
      this.totals = this.amounts + taxAmount;
    } else {
      this.totals = this.amounts
    }
  }
  accountList: any
  getAccount() {
    this.coreService.getAccount().subscribe(res => {
      this.accountList = res
    })
  }

  oncheck(event: any) {
    console.log(event);
    this.debitNoteForm.patchValue({
      party: event
    })
  }

  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    if (this.debitNoteForm.valid) {
      this.loaders = true;
      this.transactionService.updateCreditNote(this.debitNoteForm.value,this.id).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.Is_Success == "True") {
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

