import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor(private fb: FormBuilder, private posService: PosDashboardService, private toastr: ToastrService, private router: Router) { }
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
  customers: any[] = [];
  filteredCustomer: Observable<any[]>;
  ngOnInit(): void {
    this.recieptAdvanceForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      receipt_method: new FormControl('Advance', [Validators.required]),
      payment_mode: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('',),
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
      description: new FormControl('',),
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
        account_no: new FormControl('',)
      }),
      upi_detail: new FormGroup({
        upi_no: new FormControl(''),
        payment_account: new FormControl('')
      }),
    })
    this.filteredCustomer = this.customerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.getBank();
    this.getCustomer()
  }

  bankList: any
  getBank() {
    this.posService.getCompanyBank().subscribe(res => {
      this.bankList = res;
    })
  }
  customerList: any;
  getCustomer() {
    this.posService.getCustomers().subscribe((res: any) => {
      // console.log(res);
      this.customers = res;
      // this.variants=res;
    })
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'number' ? value.toString().toLowerCase() : value.toLowerCase();
    const filteredCustomer = include
      ? this.customers.filter(supplier => supplier.mobile_no.toString().toLowerCase().includes(filterValue))
      : this.customers.filter(supplier => !supplier.mobile_no.toString().toLowerCase().includes(filterValue));
    if (!include && filteredCustomer.length === 0) {
      // console.log("No results found");
      filteredCustomer.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredCustomer;
  }

  get customer() {
    return this.recieptAdvanceForm.get('customer') as FormControl;
  }
  get account() {
    return this.recieptAdvanceForm.get('account_no')
  }
  get accountAgainst() {
    return this.recieptAgainstForm.get('account_no')
  }
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.getSles(selectedItemId)
    this.recieptAdvanceForm.patchValue({
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
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
            this.customers = [];

          }
        },
        (err) => {
          this.loaders = false;
          this.toastr.error(err?.error?.payment_account[0], 'Payment Account');
          this.toastr.error(err?.error?.account_no[0], 'Account No.');
        }
      );
    } else {
      this.recieptAdvanceForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
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
            this.customers = [];
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
        this.recieptAdvanceForm.markAllAsTouched();
        this.toastr.error('Please Fill All The Required Fields')
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
