import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-countra-voucher',
  templateUrl: './add-countra-voucher.component.html',
  styleUrls: ['./add-countra-voucher.component.scss']
})

export class AddCountraVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder, private renderer: Renderer2,
    private transactionService: TransactionService, private coreService: CoreService,
    private toastr: ToastrService, private router: Router, private commonService: CommonServiceService) { }
  countraVoucherForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';

  get f() {
    return this.countraVoucherForm.controls;
  }
  fromAccountControl = new FormControl();
  filteredFromAccount: Observable<any[]>;

  toAccountControl = new FormControl();
  filteredToAccount: Observable<string[]>;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.countraVoucherForm = this.fb.group({
      date: new FormControl(defaultDate,),
      countra_voucher_no: new FormControl('',),
      from_account: new FormControl('', [Validators.required]),
      to_account: new FormControl('', [Validators.required]),
      amount: new FormControl(0,),
      note: new FormControl('', [Validators.required])
    })
    this.getAccount();
    this.getprefix();

    this.filteredFromAccount = this.fromAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.fromAccountControl.value, true))
    );

    this.filteredToAccount = this.toAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterr(this.toAccountControl.value, true)),
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);
  }

  dateValidation(financialYear) {
    const dateControl = this.countraVoucherForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getCountraVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.countraVoucherForm.get('countra_voucher_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }

  accountList: any[] = [];
  toAccountList: any[] = []
  getAccount() {
    this.transactionService.getAccountByAlies().subscribe((res: any) => {
      console.log(res);
      this.accountList = res;
      this.toAccountList = res;
    })
  }

  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.toString()?.toLowerCase();
      const filteredFromAccount = this.accountList.filter(account => {
        const accountIdIncludes = account?.account_id?.toLowerCase().includes(filterValue);
        const titleIncludes = account?.title?.toLowerCase().includes(filterValue);
        const companyNameIncludes = account?.company_name?.toLowerCase().includes(filterValue);
        return include
          ? (accountIdIncludes || titleIncludes || companyNameIncludes)
          : (!accountIdIncludes && !titleIncludes && !companyNameIncludes);
      });
    if (!include && filteredFromAccount.length === 0) {
      filteredFromAccount.push({ account: "No data found" });
    }
    return filteredFromAccount;
  }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.toString()?.toLowerCase();
    const filteredToAccount = this.toAccountList.filter(account => {
      const accountIdIncludes = account?.account_id?.toLowerCase().includes(filterValue);
      const titleIncludes = account?.title?.toLowerCase().includes(filterValue);
      const companyNameIncludes = account?.company_name?.toLowerCase().includes(filterValue);
      return include
        ? (accountIdIncludes || titleIncludes || companyNameIncludes)
        : (!accountIdIncludes && !titleIncludes && !companyNameIncludes);
    });
    if (!include && filteredToAccount.length === 0) {
      filteredToAccount.push({ account: "No data found" });
    }
    return filteredToAccount;
  }

  oncheck(data: any) {
    console.log(data);
    const selectedItemId = data.id;
    this.countraVoucherForm.patchValue({
      from_account: selectedItemId,
    });
  }
  oncheck1(data: any) {
    console.log(data);
    const selectedItemId = data.id;
    this.countraVoucherForm.patchValue({
      to_account: selectedItemId,
    });
  }
  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    const amount = this.countraVoucherForm.get('amount').value;
    if(amount < 0) {
      this.toastr.error('Countra voucher amount must be greater than 0.');
    }
    if (this.countraVoucherForm.valid) {
      this.loaders = true;
      this.transactionService.addCountraVoucher(this.countraVoucherForm.value).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.countraVoucherForm.reset()
          this.router.navigate(['//transaction/countravoucherList'])
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.countraVoucherForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get from_account() {
    return this.countraVoucherForm.get('from_account')
  }
  get date() {
    return this.countraVoucherForm.get('date')
  }

  get countra_voucher_no() {
    return this.countraVoucherForm.get('countra_voucher_no')
  }
  get to_account() {
    return this.countraVoucherForm.get('to_account')
  }
  get note() {
    return this.countraVoucherForm.get('note')
  }
  get amount() {
    return this.countraVoucherForm.get('amount')
  }

}

