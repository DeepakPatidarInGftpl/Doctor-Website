import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-reciept-voucher',
  templateUrl: './add-reciept-voucher.component.html',
  styleUrls: ['./add-reciept-voucher.component.scss']
})
export class AddRecieptVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder, private posService: PosDashboardService, private toastr: ToastrService, private router: Router,
    private transactionService:TransactionService) { }
  recieptAdvanceForm!: FormGroup
  get f() {
    return this.recieptAdvanceForm.controls;
  }
  recieptAgainstForm!: FormGroup

  get g() {
    return this.recieptAdvanceForm.controls;
  }
  customerControlName = 'customer';
  customerControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  filteredCustomer: Observable<any[]>;

  recieptVoucherForm!: FormGroup;
  get h() {
    return this.recieptVoucherForm.controls;
  }
  ngOnInit(): void {
    this.recieptAdvanceForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      receipt_method: new FormControl('Advance', [Validators.required]),
      payment_mode: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bill_no: new FormControl(''),
      card_detail: new FormGroup({
        payment_account: new FormControl("",),
        customer_bank_name: new FormControl('',),
        card_payment_amount: new FormControl('',),
        card_holder_name: new FormControl('',),
        cart_transactions_no: new FormControl('',),
      }),
      bank_detail: new FormGroup({
        payment_account: new FormControl(''),
        account_no: new FormControl('')
      }),
      upi_detail: new FormGroup({
        upi_no: new FormControl(''),
        payment_account: new FormControl('')
      }),
    })

    this.recieptAgainstForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      receipt_method: new FormControl('Against Bill', [Validators.required]),
      payment_mode: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bill_no: new FormControl('',),
      card_detail: new FormGroup({
        payment_account: new FormControl("",),
        customer_bank_name: new FormControl('',),
        card_payment_amount: new FormControl('',),
        card_holder_name: new FormControl('',),
        cart_transactions_no: new FormControl('',),
      }),
      bank_detail: new FormGroup({
        payment_account: new FormControl(''),
        account_no: new FormControl('')
      }),
      upi_detail: new FormGroup({
        upi_no: new FormControl(''),
        payment_account: new FormControl('')
      }),
    })

    const defaultDate = new Date().toISOString().split('T')[0]; 
    this.recieptVoucherForm = this.fb.group({
      receipt_type: new FormControl(''),
      customer: new FormControl(''),
      date: new FormControl(defaultDate),
      receipt_voucher_no: new FormControl(''),
      mode_type: new FormControl(''),
      amount: new FormControl(''),
      note: new FormControl(''),
      payer: new FormControl(''), // account foreign key
      // against bill
      bank_payment: new FormControl(''),
      transaction_id: new FormControl(''),
      transaction_date: new FormControl(''),
      receipt_voucher_cart: this.fb.array([]),
    })

    this.filteredCustomer = this.customerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.getBank();
    this.getAccount()
  }
  //
  cart(): FormGroup {
    return this.fb.group({
      sale_bill: new FormControl(0),
      original_amount: new FormControl(0),
      paid_amount: new FormControl(0),
      pending_amount: new FormControl(0),
      payment:new FormControl(0),
    })
  }
  getCart(): FormArray {
    return this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.cart())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }

  setRadioValue(value: string) {
    this.recieptVoucherForm.get('mode_type').setValue(value);
  }
 
  //
  bankList: any
  getBank() {
    this.posService.getCompanyBank().subscribe(res => {
      this.bankList = res;
    })
  }
  accountList: any[]=[];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }


  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'number' ? value.toString().toLowerCase() : value.toLowerCase();
    const filteredCustomer = include
      ? this.accountList.filter(account => account.account_id.toString().toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account.account_id.toString().toLowerCase().includes(filterValue));
    if (!include && filteredCustomer.length === 0) {
      filteredCustomer.push({ name: "No data found" }); 
    }
    return filteredCustomer;
  }

  get customer() {
    return this.recieptAdvanceForm.get('customer') as FormControl;
  }

  oncheck(event: any) {
    const selectedItemId = event; 
    this.recieptVoucherForm.patchValue({
      customer: selectedItemId
    });
  }
  salesList: any;
  getSles(id: any) {
    this.posService.getReceiptOrder(id).subscribe(res => {
      this.salesList = res;
    })
  }
  loaders = false
  addRes: any;
  onSubmit() {
    console.log(this.recieptVoucherForm.value);
    if (this.recieptAdvanceForm.valid) {
      const formData = new FormData();
      formData.append('customer', this.recieptAdvanceForm.get('customer')?.value);
      formData.append('receipt_method', this.recieptAdvanceForm.get('receipt_method')?.value);
      formData.append('payment_mode', this.recieptAdvanceForm.get('payment_mode')?.value);
      formData.append('amount', this.recieptAdvanceForm.get('amount')?.value);
      formData.append('description', this.recieptAdvanceForm.get('description')?.value);
      formData.append('bill_no', this.recieptAdvanceForm.get('bill_no')?.value);

      const selectedPaymentMode = this.f['payment_mode'].value;
      switch (selectedPaymentMode) {
        case 'Card':
          formData.append('card_detail', JSON.stringify(this.f['card_detail'].value));
          break;
        case 'Bank':
          formData.append('bank_detail', JSON.stringify(this.f['bank_detail'].value));
          break;
        case 'UPI':
          formData.append('upi_detail', JSON.stringify(this.f['upi_detail'].value));
          break;
        default:
          break;
      }

      this.loaders = true;
      this.posService.receiptPayment(formData).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.isSuccess) {
            this.toastr.success(res.msg);
            // this.recieptAdvanceForm.reset();
            this.router.navigate(['//bank/reciept'])
          } else {
            this.loaders = false
            this.toastr.error(res.msg);

          }
        },
        (err) => {
          this.loaders = false;
          this.toastr.error(err.error.payment_account[0], 'Payment Account')
        }
      );
    } else {
      // console.log('error');

      this.recieptAdvanceForm.markAllAsTouched();
    }
  }
  onAgainstSubmit() {
    // console.log(this.recieptAdvanceForm.value);
    if (this.recieptAdvanceForm.valid) {
      const formData = new FormData();
      formData.append('customer', this.recieptAdvanceForm.get('customer')?.value);
      formData.append('receipt_method', this.recieptAdvanceForm.get('receipt_method')?.value);
      formData.append('payment_mode', this.recieptAdvanceForm.get('payment_mode')?.value);
      formData.append('amount', this.recieptAdvanceForm.get('amount')?.value);
      formData.append('description', this.recieptAdvanceForm.get('description')?.value);
      formData.append('bill_no', this.recieptAdvanceForm.get('bill_no')?.value);

      const selectedPaymentMode = this.f['payment_mode'].value;
      switch (selectedPaymentMode) {
        case 'Card':
          formData.append('card_detail', JSON.stringify(this.f['card_detail'].value));
          break;
        case 'Bank':
          formData.append('bank_detail', JSON.stringify(this.f['bank_detail'].value));
          break;
        case 'UPI':
          formData.append('upi_detail', JSON.stringify(this.f['upi_detail'].value));
          break;
        default:
          break;
      }

      this.loaders = true;
      this.posService.receiptPayment(formData).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.isSuccess) {
            this.toastr.success(res.msg);
            // this.recieptAdvanceForm.reset();
            this.router.navigate(['//bank/reciept'])
            // this.ngOnInit();
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
          }
        },
        (err) => {
          this.loaders = false;
          this.toastr.error(err.error.payment_account[0], 'Payment Account')
        }
      );
    } else {
      // console.log('error');

      this.recieptAdvanceForm.markAllAsTouched();
    }
  }
  get receipt_method() {
    return this.recieptAdvanceForm.get('receipt_method')
  }
  get payment_mode() {
    return this.recieptAdvanceForm.get('payment_mode')
  }
  get amount() {
    return this.recieptAdvanceForm.get('amount')
  }
  get description() {
    return this.recieptAdvanceForm.get('description')
  }
  get bill_no() {
    return this.recieptAdvanceForm.get('bill_no')
  }

}
