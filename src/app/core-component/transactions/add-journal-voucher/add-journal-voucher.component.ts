import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-journal-voucher',
  templateUrl: './add-journal-voucher.component.html',
  styleUrls: ['./add-journal-voucher.component.scss']
})
export class AddJournalVoucherComponent implements OnInit {
  toaster: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private transactionService: TransactionService,
    private commonService: CommonServiceService) {
  }
  journalvoucherForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  myControls: FormArray;
  get f() {
    return this.journalvoucherForm.controls;
  }
  filteredFromAccountList : any[] = [];
  filteredFromAccount: Observable<any[]>;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.journalvoucherForm = this.fb.group({
      date: new FormControl(defaultDate,),
      journal_voucher_no: new FormControl('',),
      journal_voucher_cart: this.fb.array([]),
      total_credit: new FormControl(0),
      total_debit: new FormControl(0),
      description: new FormControl(''),
    });
    this.myControls = new FormArray([]);
    this.getAccount();
    this.getprefix();
    this.addCart();

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);
  }

  dateValidation(financialYear) {
    const dateControl = this.journalvoucherForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  subscribeToControlValueChanges(index: number) {
    const control = this.myControls.at(index);
    control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    ).subscribe((res)=> {
      console.log(res);
    });
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getJournalVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.journalvoucherForm.get('journal_voucher_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toaster.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }
  accountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }
  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value?.toLowerCase() : value?.toString().toLowerCase();
    this.filteredFromAccountList = this.accountList.filter(account => {
      const accountIdIncludes = account?.account_id?.toLowerCase().includes(filterValue);
      const titleIncludes = account?.title?.toLowerCase().includes(filterValue);
      const companyNameIncludes = account?.company_name?.toLowerCase().includes(filterValue);
      
      return include
        ? (accountIdIncludes || titleIncludes || companyNameIncludes)
        : (!accountIdIncludes && !titleIncludes && !companyNameIncludes);
    });
    if (!include && this.filteredFromAccountList?.length === 0) {
      // filteredFromAccount.push({ account: "No data found" });
      this.filteredFromAccountList = [];
    }
    return this.filteredFromAccountList;
  }
  oncheck(data: any, index: number) {
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      from_account: data?.id,
    });
  }
  cart(): FormGroup {
    return this.fb.group({
      from_account: new FormControl('', [Validators.required]),
      amount_type: new FormControl(''),
      amount: new FormControl(0, [Validators.required]),
      description: ('')
    })
  }
  getCart(): FormArray {
    return this.journalvoucherForm.get('journal_voucher_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
    
    this.myControls.push(new FormControl(''));
    this.subscribeToControlValueChanges(this.myControls.length - 1);
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    this.myControls.removeAt(i);
    if (this.journalvoucherForm?.value?.journal_voucher_cart?.length == 0) {
      this.isCart = true;
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
        formdata.append('description', (this.journalvoucherForm.get('description')?.value) ?? '');

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
        this.transactionService.addJournalVoucher(formdata).subscribe(res => {
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
        this.toastrService.error('Please Fill All The Required Fields')
      }
    } else {
      console.log(debit, credit);
      this.toastrService.error('Debit and credit amount total should be same')
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
  // amount_type(index: number) {
  //   return this.getCart().controls[index].get('amount_type');
  // }
  amount(index: number) {
    return this.getCart().controls[index].get('amount');
  }

  debitAmount: number[] = [];
  creditAmount: number[] = [];
  debit(i: number, dr: number) {
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(i) as FormGroup;
    cart.patchValue({
      amount_type: "Debit",
    });
    this.creditAmount[i] = 0;
    this.debitAmount[i] = dr;
  }
  credit(i: number, cr: number) {
    const cart = (this.journalvoucherForm.get('journal_voucher_cart') as FormArray).at(i) as FormGroup;
    cart.patchValue({
      amount_type: "Credit",
    });
    this.creditAmount[i] = cr;
    this.debitAmount[i] = 0;
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

