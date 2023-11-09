import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer, fromEvent, merge, Subscription, of } from 'rxjs';
import { map, startWith, filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize, catchError } from 'rxjs/operators';
import { SyncServiceService } from 'src/app/Services/sync-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';
import { BillHoldService } from 'src/app/Services/BillHold/bill-hold.service';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  constructor(private billHoldService: BillHoldService, public fb: FormBuilder, private toastr: ToastrService, private syncService: SyncServiceService, private http: HttpClient, private cartService: PosDashboardService, private coreService: CoreService) { }
  voucherType = [
    { id: 1, label: 'Sales', value: 'sales' },
    { id: 2, label: 'Purchase', value: 'purchase' },
    { id: 3, label: 'Expense', value: 'expense' },
    { id: 4, label: 'Cash in Hand', value: 'cash in hand' }
  ];

  paymentType = [
    { id: 1, label: 'Advance Payment', value: 'Advance' },
    { id: 2, label: 'Against Bill', value: 'Against Bill' }
  ];

  paymentMode = [
    { id: 1, label: 'UPI', value: 'UPI' },
    { id: 2, label: 'Card', value: 'Card' },
    { id: 3, label: 'Cash', value: 'Cash' },
    { id: 4, label: 'Bank', value: 'Bank' }
  ]

  receiptSales: any = [];
  companyBankList: any = [];
  receiptPaymentForm: FormGroup;
  filteredCustomer2: any;
  partyErrorMsg!: string;
  filteredParty: any;
  partyIsLoading: boolean = false
  cusMinLengthTerm = 3;
  cusErrorMsg!: string;
  cusIsLoading = false;
  customerAutoCompleteControl2 = new FormControl('');

  recieptForm: FormGroup
  ngOnInit(): void {
    this.recieptForm = this.fb.group({
      customer:new FormControl('',[Validators.required]),
      receipt_method:new FormControl('',[Validators.required]),
      payment_mode:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      bill_no:new FormControl('',[Validators.required]),
      card_detail:new FormControl('',[Validators.required]),
      bank_detail:new FormControl('',[Validators.required]),
      upi_detail:new FormControl('',[Validators.required])
    })

    let api_token = "4d586523c3dbbc989192bec34006e72a4edebf00";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${api_token}`
    });
    const requestOptions = { headers: headers };

    this.receiptPaymentForm = this.fb.group({
      voucher_type: ['', [Validators.required]],
      payment_type: [''],
      payment_mode: [''],
      receipt_sales: [''],
      amount_receipt: [''],
      customer_receipt: [''],
      party_receipt: [''],
      receipt_remark: [''],
      payment_account: [''],
      upi_id: [''],
      customer_bank_name: [''],
      card_payment_amount: [''],
      card_holder_name: [''],
      cart_transactions_no: [''],
      account_no: [''],
      non_gst: [false],
    })

    this.receiptPaymentForm.get('voucher_type').valueChanges.subscribe((value) => {
      if (value === 'sales') {
        this.receiptPaymentForm.get('payment_type').setValue(this.paymentType[0].value)
        this.receiptPaymentForm.get('payment_type').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_mode').setValidators(Validators.required);
        this.receiptPaymentForm.get('customer_receipt').setValidators(Validators.required);
        this.receiptPaymentForm.get('amount_receipt').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_account').setValidators(Validators.required);
        this.receiptPaymentForm.get('receipt_remark').setValidators(Validators.required);

      } else if (value === 'purchase') {
        this.receiptPaymentForm.get('payment_type').setValue(this.paymentType[0].value)
        this.receiptPaymentForm.get('payment_type').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_mode').setValidators(Validators.required);
        this.receiptPaymentForm.get('party_receipt').setValidators(Validators.required);
        this.receiptPaymentForm.get('receipt_remark').setValidators(Validators.required);
        this.receiptPaymentForm.get('amount_receipt').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_account').setValidators(Validators.required);

      } else if (value === 'expense') {
        this.receiptPaymentForm.get('upi_id').clearValidators();
        this.receiptPaymentForm.get('payment_account').setValidators(Validators.required);
        this.receiptPaymentForm.get('receipt_remark').setValidators(Validators.required);
        this.receiptPaymentForm.get('non_gst').setValidators(Validators.required);
        this.receiptPaymentForm.get('party_receipt').setValidators(Validators.required);
        this.receiptPaymentForm.get('amount_receipt').setValidators(Validators.required);

      } else {
        this.receiptPaymentForm.get('payment_type').clearValidators();
        this.receiptPaymentForm.get('payment_mode').clearValidators();
        this.receiptPaymentForm.get('customer_receipt').clearValidators();
        this.receiptPaymentForm.get('amount_receipt').clearValidators();
        this.receiptPaymentForm.get('payment_account').clearValidators();
        this.receiptPaymentForm.get('receipt_remark').clearValidators();
      }
      this.receiptPaymentForm.get('party_receipt').updateValueAndValidity();
      this.receiptPaymentForm.get('non_gst').updateValueAndValidity();
      this.receiptPaymentForm.get('payment_type').updateValueAndValidity();
      this.receiptPaymentForm.get('payment_mode').updateValueAndValidity();
      this.receiptPaymentForm.get('payment_account').updateValueAndValidity();
      this.receiptPaymentForm.get('customer_receipt').updateValueAndValidity();
      this.receiptPaymentForm.get('receipt_remark').updateValueAndValidity();
      this.receiptPaymentForm.get('amount_receipt').updateValueAndValidity();
    });
    this.receiptPaymentForm.get('payment_type').valueChanges.subscribe((value) => {
      this.receiptPaymentForm.get('payment_mode').setValue(this.paymentMode[0].value)
      if (value === 'Against Bill') {
        this.receiptPaymentForm.get('receipt_sales').setValidators(Validators.required);
      } else {
        this.receiptPaymentForm.get('receipt_sales').clearValidators();
      }
      this.receiptPaymentForm.get('receipt_sales').updateValueAndValidity();
    });
    this.receiptPaymentForm.get('payment_mode').valueChanges.subscribe((value) => {
      if (value === 'UPI') { // Show the conditional field only if Option 1 is selected
        this.receiptPaymentForm.get('upi_id').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Card') {
        this.receiptPaymentForm.get('customer_bank_name').setValidators(Validators.required);
        this.receiptPaymentForm.get('card_payment_amount').setValidators(Validators.required);
        this.receiptPaymentForm.get('card_holder_name').setValidators(Validators.required);
        this.receiptPaymentForm.get('cart_transactions_no').setValidators(Validators.required);
        this.receiptPaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Bank') {
        this.receiptPaymentForm.get('account_no').setValidators(Validators.required);
      } else {
        this.receiptPaymentForm.get('upi_id').clearValidators();
        this.receiptPaymentForm.get('payment_account').clearValidators();
        this.receiptPaymentForm.get('customer_bank_name').clearValidators();
        this.receiptPaymentForm.get('card_payment_amount').clearValidators();
        this.receiptPaymentForm.get('card_holder_name').clearValidators();
        this.receiptPaymentForm.get('cart_transactions_no').clearValidators();
        this.receiptPaymentForm.get('account_no').clearValidators();
      }
      this.receiptPaymentForm.get('upi_id').updateValueAndValidity();
      this.receiptPaymentForm.get('payment_account').updateValueAndValidity();
      this.receiptPaymentForm.get('customer_bank_name').updateValueAndValidity();
      this.receiptPaymentForm.get('card_payment_amount').updateValueAndValidity();
      this.receiptPaymentForm.get('card_holder_name').updateValueAndValidity();
      this.receiptPaymentForm.get('cart_transactions_no').updateValueAndValidity();
      this.receiptPaymentForm.get('account_no').updateValueAndValidity();
    });
    this.receiptPaymentForm.get('customer_receipt').valueChanges
      .pipe(
        filter(res => {
          return res !== null && res?.length >= this.cusMinLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.cusErrorMsg = "";
          this.filteredCustomer2 = [];
          this.cusIsLoading = true;
        }),
        switchMap(value => this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/customer_filter/?search=${value}`, requestOptions)
          .pipe(
            catchError(err => {
              // handleError(err);
              // console.log('err catch', err);
              this.cusErrorMsg = 'No Customer Found';
              this.cusIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.cusIsLoading = false
              // console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        // console.log('data', data)

        if (data.length > 0) {
          // console.log('data', data)
          this.filteredCustomer2 = data;
        } else {
          this.filteredCustomer2 = [];
          this.cusErrorMsg = 'No Customers Found';
        }

      });
    this.receiptPaymentForm.get('party_receipt').valueChanges
      .pipe(
        filter(res => {
          return res !== null && res?.length >= this.cusMinLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.partyErrorMsg = "";
          this.filteredParty = [];
          this.partyIsLoading = true;
        }),
        switchMap(value => this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/party_filter/?search=${value}`, requestOptions)
          .pipe(
            catchError(err => {
              // handleError(err);
              // console.log('err catch', err);
              this.partyErrorMsg = 'No Party Found';
              this.partyIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.partyIsLoading = false
              // console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        // console.log('data', data)

        if (data.length > 0) {
          // console.log('data', data)
          this.filteredParty = data;
        } else {
          this.filteredParty = [];
          this.partyErrorMsg = 'No Party Found';
        }

      });

    this.cartService.getCompanyBank().subscribe({
      next: (response) => {
        // console.log(response, 'company bank')
        this.companyBankList = response;
      },
      error: (error) => {
        // console.log('company bank', error);
      }
    })
  }
  optionSelectedParty(event) {

  }
  optionSelectedReceipt(event) {
    let customer = event.option.value;
    this.cartService.getReceiptDueOrder(customer.id).subscribe({
      next: (response) => {
        // console.log(response, 'receipt sales')
        this.receiptSales = response;
      },
      error: (error) => {
        // console.log('receipt sales', error);
      }
    })

  }

  displayCus(item: any): string {
    return item ? item.mobile_no : '';
  }

  displayParty(item: any): string {
    return item ? item.mobile_no : '';
  }

  get voucher_type() { return this.receiptPaymentForm.get('voucher_type') };
  get payment_type() { return this.receiptPaymentForm.get('payment_type') };
  get payment_mode() { return this.receiptPaymentForm.get('payment_mode') };
  get receipt_sales() { return this.receiptPaymentForm.get('receipt_sales') };
  get amount_receipt() { return this.receiptPaymentForm.get('amount_receipt') };
  get customer_receipt() { return this.receiptPaymentForm.get('customer_receipt') };
  get receipt_remark() { return this.receiptPaymentForm.get('receipt_remark') };
  get party_receipt() { return this.receiptPaymentForm.get('party_receipt') };

  get receipt_customer_bank_name() { return this.receiptPaymentForm.get('customer_bank_name') };
  get receipt_card_payment_amount() { return this.receiptPaymentForm.get('card_payment_amount') };
  get receipt_card_holder_name() { return this.receiptPaymentForm.get('card_holder_name') };
  get receipt_cart_transactions_no() { return this.receiptPaymentForm.get('cart_transactions_no') };

  get receipt_account_no() { return this.receiptPaymentForm.get('account_no') };
  get expense_non_gst() { return this.receiptPaymentForm.get('non_gst') };


  get upi_id_receipt() { return this.receiptPaymentForm.get('upi_id'); }
  get transaction_id_receipt() { return this.receiptPaymentForm.get('transaction_id'); }
  get payment_account_receipt() { return this.receiptPaymentForm.get('payment_account'); }


  receiptFormSubmit() {
    if (this.receiptPaymentForm.invalid) {
      // console.log('invalid');
      Object.keys(this.receiptPaymentForm.controls).forEach(key => {
        this.receiptPaymentForm.controls[key].markAsTouched();
      });
      return;
    }
    if (this.voucher_type.value === 'sales') {
      this.formSubmitReceipt();
    } else if (this.voucher_type.value === 'purchase') {
      this.formSubmitPurchase()
    } else {
      this.formSubmitExpense()
    }
  }

  formSubmitExpense() {

    let formData = new FormData();

    formData.append('party', this.party_receipt?.value?.id);
    formData.append('amount', this.amount_receipt.value);
    formData.append('remarks', this.receipt_remark.value);
    formData.append('non_gst', this.expense_non_gst.value);
    formData.append('payment_account', this.payment_account_receipt.value);

    this.cartService
      .expensePayment(formData)
      .subscribe({
        next: (response: any) => {
          // console.log('response receipt', response);
          if (response.success) {
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            this.receiptPaymentForm.reset();
            var clicking = <HTMLElement>document.querySelector('.receiptModalClose');
            clicking.click();

            this.expense_non_gst.value(false);
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          // console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  formSubmitPurchase() {

    let formData = new FormData();

    if (this.payment_mode.value === 'UPI') {
      let upi_data = {
        "upi_no": Number(this.upi_id_receipt.value),
        "payment_account": Number(this.payment_account_receipt.value)
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      } else {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      }

    } else if (this.payment_mode.value === 'Bank') {

      let bank_data = {
        "payment_account": Number(this.payment_account_receipt.value),
        "account_no": this.receipt_account_no.value,
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      }

    } else if (this.payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.payment_account_receipt.value),
        "customer_bank_name": this.receipt_customer_bank_name.value,
        "card_payment_amount": this.receipt_card_payment_amount.value,
        "card_holder_name": this.receipt_card_holder_name.value,
        "cart_transactions_no": this.receipt_cart_transactions_no.value
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }
    } else {
      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.party_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }

    }

    this.cartService
      .purchasePayment(formData)
      .subscribe({
        next: (response: any) => {
          // console.log('response receipt', response);
          if (response.success) {
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            this.receiptPaymentForm.reset();
            var clicking = <HTMLElement>document.querySelector('.receiptModalClose');
            clicking.click();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          // console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  formSubmitReceipt() {

    let formData = new FormData();

    if (this.payment_mode.value === 'UPI') {
      let upi_data = {
        "upi_no": Number(this.upi_id_receipt.value),
        "payment_account": Number(this.payment_account_receipt.value)
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      } else {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      }

    } else if (this.payment_mode.value === 'Bank') {

      let bank_data = {
        "payment_account": Number(this.payment_account_receipt.value),
        "account_no": this.receipt_account_no.value,
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      }

    } else if (this.payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.payment_account_receipt.value),
        "customer_bank_name": this.receipt_customer_bank_name.value,
        "card_payment_amount": this.receipt_card_payment_amount.value,
        "card_holder_name": this.receipt_card_holder_name.value,
        "cart_transactions_no": this.receipt_cart_transactions_no.value
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }
    } else {

      if (this.payment_type.value == 'Advance') {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.customer_receipt?.value?.id);
        formData.append('receipt_method', this.payment_type.value);
        formData.append('payment_mode', this.payment_mode.value);
        formData.append('amount', this.amount_receipt.value);
        formData.append('description', this.receipt_remark.value);
        formData.append('bill_no', this.receipt_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }

    }

    this.cartService
      .receiptPayment(formData)
      .subscribe({
        next: (response: any) => {
          // console.log('response receipt', response);
          if (response.success) {
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            this.receiptPaymentForm.reset();
            var clicking = <HTMLElement>document.querySelector('.receiptModalClose');
            clicking.click();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          // console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  saveAndNext() {
    // Check if all form fields are valid
    // if (this.isFormValid()) {
    //   this.tabGroup.selectedIndex = 1;
    // } else {
      // console.log('Please fill in all required fields before proceeding.');
    //   this.toastr.error('Please fill in all required fields before proceeding.')
    // }
  }

  isFormValid() {
    // this.productForm.markAllAsTouched();
    // return this.productForm.valid;
  }
}
