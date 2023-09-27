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

  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id')
    const defaultDate = new Date().toISOString().split('T')[0];
    this.countraVoucherForm = this.fb.group({
      date: new FormControl(defaultDate, [Validators.required]),
      countra_voucher_no: new FormControl('',),
      from_account: new FormControl(''),
      to_account: new FormControl(''),
      amount: new FormControl(''),
      note: new FormControl('',)
    })
    this.getAccount();
    this.getprefix();

    this.filteredFromAccount = this.fromAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.transactionService.getCountraVoucherById(this.id).subscribe(res => {
      console.log(res);
      this.countraVoucherForm.patchValue({
        date:res?.date,
        countra_voucher_no:res?.countra_voucher_no,
        from_account:res?.from_account?.id,
        to_account:res?.to_account?.id,
        amount:res?.amount,
        note:res?.note
      })
    })

  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getCountraVoucherPrefix().subscribe((res: any) => {
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

  oncheck(data: any) {
    console.log(data);
    const selectedItemId = data.id;
    this.countraVoucherForm.patchValue({
      from_account: selectedItemId,
    });
  }
  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    if (this.countraVoucherForm.valid) {
      this.loaders = true;
      this.transactionService.updateCountraVoucher(this.countraVoucherForm.value,this.id).subscribe(res => {
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
      // console.log('hhhhhh');
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

