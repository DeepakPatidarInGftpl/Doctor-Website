import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-countra-voucher',
  templateUrl: './update-countra-voucher.component.html',
  styleUrls: ['./update-countra-voucher.component.scss']
})
export class UpdateCountraVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private Arout: ActivatedRoute, private toastr: ToastrService, private router: Router) { }
  countraVoucherForm!: FormGroup;

  get f() {
    return this.countraVoucherForm.controls;
  }
  fromAccountControl = new FormControl();
  filteredFromAccount: Observable<any[]>;

  toAccountControl = new FormControl();
  filteredToAccount: Observable<string[]>;

  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id')
    this.fromAccountControl.setValue('Loading...');
    this.toAccountControl.setValue('Loading...');
    const defaultDate = new Date().toISOString().split('T')[0];
    this.countraVoucherForm = this.fb.group({
      date: new FormControl(defaultDate, ),
      countra_voucher_no: new FormControl('',),
      from_account: new FormControl('',[Validators.required]),
      to_account: new FormControl('',[Validators.required]),
      amount: new FormControl(0),
      note: new FormControl('',)
    })
    this.getAccount();
    this.getprefix();

    this.filteredFromAccount = this.fromAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredToAccount = this.toAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterr(value, true)),
    );
    this.transactionService.getCountraVoucherById(this.id).subscribe(res => {
      console.log(res);
      this.countraVoucherForm.patchValue({
        date: res?.date,
        countra_voucher_no: res?.countra_voucher_no,
        from_account: res?.from_account?.id,
        to_account: res?.to_account?.id,
        amount: res?.amount,
        note: res?.note
      })

      this.fromAccountControl.setValue(res?.from_account?.account_id);
      this.toAccountControl.setValue(res?.to_account?.account_id);
    })

  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getCountraVoucherPrefix().subscribe((res: any) => {
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

  accountList: any[] = [];
  toAccountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
      this.toAccountList = res;
    })
  }

  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredFromAccount = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
    if (!include && filteredFromAccount.length === 0) {
      // console.log("No results found");
      filteredFromAccount.push({ account: "No data found" });
    }
    return filteredFromAccount;
  }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredToAccount = include
      ? this.toAccountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.toAccountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
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
    if (this.countraVoucherForm.valid) {
      this.loaders = true;
      this.transactionService.updateCountraVoucher(this.countraVoucherForm.value, this.id).subscribe(res => {
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

