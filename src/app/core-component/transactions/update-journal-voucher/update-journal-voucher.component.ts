import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-journal-voucher',
  templateUrl: './update-journal-voucher.component.html',
  styleUrls: ['./update-journal-voucher.component.scss']
})
export class UpdateJournalVoucherComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private transactionService: TransactionService,
    private Arout: ActivatedRoute
  ) {
  }
  journalvoucherForm!: FormGroup;
  get f() {
    return this.journalvoucherForm.controls;
  }
  id: any
  editRes: any;
  myControls: FormArray;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.myControls = new FormArray([]);

    this.journalvoucherForm = this.fb.group({
      date: new FormControl(defaultDate, [Validators.required]),
      journal_voucher_no: new FormControl('', [Validators.required]),
      journal_voucher_cart: this.fb.array([]),
      total_credit: new FormControl(0),
      total_debit: new FormControl(0),
      description: new FormControl(''),
    });

    this.transactionService.getJournalVoucherById(this.id).subscribe(res => {
      this.editRes = res;
      this.journalvoucherForm.patchValue(this.editRes);

      if(this.editRes?.cart?.length>0){
        this.journalvoucherForm.setControl('journal_voucher_cart', this.udateCart(this.editRes?.cart));
      }else{
        this.isCart=true;
      }
    })
    this.getAccount();
    this.getprefix();
   
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getJournalVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.prefix
      } else {
        this.toastrService.error(res.msg)
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }

  udateCart(add: any): FormArray {
    console.log(add);
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      if (j?.amount_type == 'Credit') {
        this.creditAmount[i] = j?.amount;
        console.log(this.debitAmount[i]);
      } else if (j?.amount_type == 'Debit') {
        this.debitAmount[i] = j?.amount;
        console.log(this.creditAmount[i]);
      }
      formarr.push(this.fb.group({
        from_account: j.from_account?.id,
        amount_type: j?.amount_type,
        amount: j?.amount,
        description: j?.description,
      }))
      this.myControls.push(new FormControl(j.from_account?.account_id));
    })
    return formarr
  }
  accountList: any[] = [];
  filterAccount: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
      this.filterAccount = res
    })
  }

  getFilter(data: any) {
    this.filterAccount = this.accountList.filter(account => {
      if (account && account.account_id) {
        const aliasLower = account.account_id.toLowerCase();
        return aliasLower.includes(data);
      }
      return false; 
    });
    console.log(this.filterAccount);
  }
  oncheck(data:any,index:number) {
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      from_account: data?.id,
    });
  }
  cart(): FormGroup {
    return this.fb.group({
      from_account: new FormControl('', [Validators.required]),
      amount_type: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      description: ('')
    })
  }
  getCart(): FormArray {
    return this.journalvoucherForm.get('journal_voucher_cart') as FormArray;
  }
  isCart=false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart=false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
   if(this.journalvoucherForm?.value?.journal_voucher_cart?.length==0){
    this.isCart==true;
   }
  }

  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }

  addRes: any;
  dateError = null;
  loaders = false;

  submit() {
    console.log(this.journalvoucherForm.value);
    console.log(this.debitAmount);
    console.log(this.creditAmount);
    let debit = 0
    this.debitAmount.forEach((res: any) => {
      debit += +res
    })
    let credit = 0
    this.creditAmount.forEach((res: any) => {
      credit += +res
    })
    if (debit == credit) {
      console.log(credit, debit);
      if (this.journalvoucherForm.valid) {
        this.loaders = true;
        let formdata: any = new FormData();
        formdata.append('date', this.journalvoucherForm.get('date')?.value);
        formdata.append('journal_voucher_no', this.journalvoucherForm.get('journal_voucher_no')?.value);
        formdata.append('total_credit', this.journalvoucherForm.get('total_credit')?.value);
        formdata.append('total_debit', this.journalvoucherForm.get('total_debit')?.value);
        formdata.append('description', this.journalvoucherForm.get('description')?.value);

        const cartArray = this.journalvoucherForm.get('journal_voucher_cart') as FormArray;
        const cartData = [];
        cartArray.controls.forEach((address) => {
          const cartGroup = address as FormGroup;
          const cartObject: any = {};
          Object.keys(cartGroup.controls).forEach((key) => {
            const control = cartGroup.controls[key];
            if (key === 'amount_type' || key === 'description') {
              cartObject[key] = control.value;
            } else if (!isNaN(control.value)) {
              cartObject[key] = parseFloat(control.value);
            } else {
              cartObject[key] = control.value;
            }
          });
          cartData.push(cartObject);
        });
        formdata.append('journal_voucher_cart', JSON.stringify(cartData));
        this.transactionService.updateJournalVoucher(formdata, this.id).subscribe(res => {
          this.loaders = false;
          this.addRes = res
          if (this.addRes.success) {
            this.toastrService.success(this.addRes.msg)
            this.journalvoucherForm.reset()
            this.router.navigate(['//transaction/journalvoucherList'])
          } else {
            this.loaders = false;
          }
        }, err => {
          this.loaders = false;
        })
      } else {
        this.journalvoucherForm.markAllAsTouched()
      }
    } else {
      console.log(debit, credit);
      this.toastrService.warning('Debit and credit amount total should be same')
      this.journalvoucherForm.markAllAsTouched()
    }
  }
  get date() {
    return this.journalvoucherForm.get('date')
  }
  get total_debit() {
    return this.journalvoucherForm.get('total_debit')
  }
  get total_credit() {
    return this.journalvoucherForm.get('total_credit')
  }
  get note() {
    return this.journalvoucherForm.get('description')
  }
  get journal_voucher_no() {
    return this.journalvoucherForm.get('journal_voucher_no')
  }
  from_account(index: number) {
    return this.getCart().controls[index].get('from_account');
  }
  amount_type(index: number) {
    return this.getCart().controls[index].get('amount_type');
  }
  amount(index: number) {
    return this.getCart().controls[index].get('amount');
  }

  debitAmount: number[] = [];
  creditAmount: number[] = [];
  debit(i: number, dr: number) {
    this.creditAmount[i] = 0;
    this.debitAmount[i] = dr;
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(i) as FormGroup;
    cart.patchValue({
      amount: this.debitAmount[i]
    })
  }
  credit(i: number, cr: number) {
    this.creditAmount[i] = cr;
    this.debitAmount[i] = 0;
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(i) as FormGroup;
    cart.patchValue({
      amount: this.creditAmount[i]
    })
  }

  calculateTotalDebit(): number {
    let debit = 0
    this.debitAmount.forEach((res: any) => {
      debit += +res
    })
    return debit
  }
  calculateTotalCredit(): number {
    let credit = 0
    this.creditAmount.forEach((res: any) => {
      credit += +res
    })
    return credit
  }
}

