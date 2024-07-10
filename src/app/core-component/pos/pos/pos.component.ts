import { Component, OnInit, HostListener, Inject, OnDestroy, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable, Observer, fromEvent, merge, Subscription, OperatorFunction, of } from 'rxjs';
import { map, startWith, filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize, catchError, mapTo, concatMap } from 'rxjs/operators';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { SyncServiceService } from 'src/app/Services/sync-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';
import { Modal } from 'bootstrap';
import { BillHoldService } from 'src/app/Services/BillHold/bill-hold.service';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { OfferService } from 'src/app/Services/offer/offer.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as bootstrap from 'bootstrap';
import { ConnectionService, ConnectionState } from 'ng-connection-service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})


export class PosComponent implements OnInit, OnDestroy {
  selectedPaymentsOption: string = 'sales';

  salesPayments: any = [];
  purchasePayments: any = [];
  expensePayments: any = [];
  isFormSubmitted = false;
  isExpanseModalShown = false;
  isReceiptModalShown = false;
  isCreditNoteModalShown = false;
  isPaymentModalShown = false;
  isSyncLoading = false;
  accountListData: any;
  selectedCustomerAccountId: any;
  selectedCustomerUserId: any;
  selectedAccountCreditData: any;
  creditLimitData: any[] = [];
  isPayLaterModalShown = false;
  isInternetConnection = false;
  subscription = new Subscription();
  customerList: any;
  productList: any;
  selectedOrderData: any;
  saleReturnData: any;

  page: number = 1;

  heldBills: any[] = [];

  streetcontrol = new FormControl('');
  applyCredit = new FormControl(0);
  //options: string[] = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;
  connectionStatus: string;
  addMorePayment: FormArray;
  payment_terms: any;
  due_date: any;
  selectedReminder: string = '';
  isModalShown: boolean = false;
  textY: any;
  totalTaxableAmount: number = 0;
  totalCGST: number = 0;
  totalSGST: number = 0;

  options = [
    { id: 1, name: 'Option 1', value: 'option1', price: 10 },
    { id: 2, name: 'Option 2', value: 'option2', price: 20 },
    { id: 3, name: 'Option 3', value: 'option3', price: 30 },
    { id: 4, name: 'Option 4', value: 'option4', price: 40 },
    { id: 5, name: 'Option 5', value: 'option5', price: 50 },
  ];

  gstType = [
    { label: 'UnRegistered', value: 'UnRegistered' },
    { label: 'Registered Regular', value: 'Registered Regular' },
    { label: 'Registered Composition', value: 'Registered Composition' },
    { label: 'Input Service Distributor', value: 'Input Service Distributor' },
    { label: 'Ecommerce Operator', value: 'Ecommerce Operator' },
  ]

  voucherType = [
    { id: 1, label: 'Sales', value: 'sales' },
    { id: 2, label: 'Purchase', value: 'purchase' },
    { id: 3, label: 'Expense', value: 'expense' },
    // { id: 4, label: 'Cash in Hand', value: 'cash in hand'}
  ];

  voucherType2 = [
    { id: 1, label: 'Receipt', value: 'sales' },
    { id: 2, label: 'Payments', value: 'purchase' },
    { id: 3, label: 'Expense', value: 'expense' },
    // { id: 4, label: 'Cash in Hand', value: 'cash in hand'}
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

  selectedOptions: any[] = [];
  productsAutocompleteControl = new FormControl();
  redeemCreditControl = new FormControl();
  //filteredOptions$: Observable<any[]> | undefined;
  filteredOptions$: any;
  customers: any = [];
  cartItems: any[] = [];
  addMoreDetails: any;
  customerAutoCompleteControl = new FormControl('');
  chargesAutoCompleteControl = new FormControl('');
  customerAutoCompleteControl2 = new FormControl('');
  saleInvoice = new FormControl('');

  streets: string[] = ['Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow'];
  filteredStreets: Observable<string[]>;
  currentCustomer: any | null;
  currentCustomerPayment: any | null;
  changeAmount: any;
  tenderedAmount: number = 0;
  dueAmount: any;
  online: any;
  loader: any;
  minLengthTerm = 1;
  errorMsg!: string;
  isLoading = false;
  filteredProducts: any;
  cusMinLengthTerm = 3;
  cusErrorMsg!: string;
  cusIsLoading = false;
  partyErrorMsg!: string;
  filteredParty: any;
  filteredPartyExpense: any;
  partyIsLoading: boolean = false
  chargesErrorMsg!: string;
  chargesIsLoading = false;
  filteredPaymentAccount: Observable<any[]>[] = [];
  filteredCustomer: any;
  filteredCustomer2: any;
  filteredCharges!: Observable<any[]>;
  currentItems: any[] = [];
  customerForm: FormGroup;
  registrationForm: FormGroup;
  upiPaymentMethodForm: FormGroup;
  cardPaymentMethodForm: FormGroup;
  bankPaymentMethodForm: FormGroup;
  payLaterMethodForm: FormGroup;
  receiptPaymentForm: FormGroup;
  expensePaymentForm: FormGroup;
  salesPaymentForm: FormGroup;
  purchasePaymentForm: FormGroup;
  customerRegistrationNumberSame: boolean = false;
  currentCountry: any;
  currentState: any;
  stateList: any;
  currentCities: any;
  cityList: any;
  currentProduct: any;
  currentBatch: any;
  additionalChargesList: any = [];
  taxesList: any = [];
  receiptSales: any = [];
  companyBankList: any = [];
  paymentTermsList: any = [];
  currentOrderAdditionalCharges: any = [];
  accountList: any[] = [];
  accountListAlies: any[] = [];
  paymentModeList: any;
  companyDetails: any;
  creditLimitList: any;
  creditLimit: any;
  currentAdditionalCharges: any = [];
  activeBill: any;

  posOrders: any = [];
  currentCartIndex: number = 0;
  currentCartIndex1: number = -1;
  currentRoundOff: any;
  orderDetails: any;
  paymentForm: FormGroup;
  cartTotalPrice: number;
  userAccoutId: any;
  holdBillActive: boolean = false;
  cartProductTotalAmout: any;
  creditRedeemTotalAmount: any;
  isErrorMessageShown: any;
  private receiptTypeSubscriptions: Subscription[] = [];


  constructor(private transactionService: TransactionService, private router: Router, private billHoldService: BillHoldService, public fb: FormBuilder, private toastr: ToastrService, private syncService: SyncServiceService, private http: HttpClient, private cartService: PosCartService,
    private offerService: OfferService, private coreService: CoreService, private companyService: CompanyService, private connectionService: ConnectionService, private contactService: ContactService) {
    // this.cartItems = this.cartService.getCartItems();
    this.currentItems = this.cartService.getCurrentItems();
    this.customerForm = this.fb.group({
      name: [''],
      mobile_no: [''],
      whatsapp_no: [''],
      date_of_birth: [''],
      anniversary_date: [''],
      address_line_1: [''],
      state: [''],
      city: [''],
      gst_type: [''],
      gstin: ['']
    });

  }

  calculateAmountTotal(): number {
    let total = 0;
    this.addMorePaymentData.controls.forEach(control => {
      const amount = control.get('amount')?.value || 0;
      total += parseFloat(amount);
    });
    return total;
  }

  addMorePaymentDetails() {
    const currentTotalAmount = this.totalAmount();
    const currentAmount = this.calculateCurrentAmount();
    if (currentAmount < currentTotalAmount) {
      const remainingAmount = currentTotalAmount - currentAmount;
      const pendingAmout = remainingAmount % 1 !== 0 ? remainingAmount.toFixed(2) : remainingAmount;
      const newPayment = this.addNewPayment(pendingAmout);
      this.addMorePaymentData.push(newPayment);
      this.subscribeToReceiptTypeChange(newPayment);

      // const index = this.addMorePaymentData.length - 1;
      // this.subscribeToUserAccountIdChange(newPayment, index);
    }
  }

  removePaymentDetails(index: number) {
    this.addMorePaymentData.removeAt(index);
    this.filteredPaymentAccount.splice(index, 1);
  }

  calculateCurrentAmount(): number {
    return this.addMorePaymentData.controls.reduce((sum, group) => {
      const amount = group.get('amount').value;
      if (amount) {
        const parsedAmount = parseFloat(amount);
        const roundedAmount = Math.round(parsedAmount * 100) / 100;
        return sum + roundedAmount;
      } else {
        return sum;
      }
    }, 0);
  }

  get addMorePaymentData() {
    return this.paymentForm.get('addMorePayment') as FormArray;
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code == KEY_CODE.F9) {
      var clicking = <HTMLElement>document.querySelector('.bankF9');
      clicking.click();
    }
    if (event.code == KEY_CODE.UP_ARROW) {
      // Your row selection code
      // console.log(event);
    }
    if (event.code == KEY_CODE.F5) {
      var clicking = <HTMLElement>document.querySelector('.upiF5');
      clicking.click();
    }
    if (event.code == KEY_CODE.F6) {
      var clicking = <HTMLElement>document.querySelector('.holdF6');
      clicking.click();
    }
    if (event.code == KEY_CODE.F11) {
      var clicking = <HTMLElement>document.querySelector('.plF11');
      clicking.click();
    }
    if (event.code == KEY_CODE.F3) {
      var clicking = <HTMLElement>document.querySelector('.cardF3');
      clicking.click();
    }
    if (event.code == KEY_CODE.F4) {
      var clicking = <HTMLElement>document.querySelector('.cashF4');
      clicking.click();
    }
    if (event.code == KEY_CODE.F12) {
      var clicking = <HTMLElement>document.querySelector('.mpF12');
      clicking.click();
    }
    if (event.code == KEY_CODE.F7) {
      var clicking = <HTMLElement>document.querySelector('.cpF7');
      clicking.click();
    }
    if (event.code == KEY_CODE.F10) {
      var clicking = <HTMLElement>document.querySelector('.upF10');
      clicking.click();
    }
    if (event.code == KEY_CODE.F8) {
      var clicking = <HTMLElement>document.querySelector('.cashprintF8');
      clicking.click();
    }
  }

  isModalOpen: any;
  ngOnInit(): void {
    // blur bg when modal open
    if (this.companyService.CheckBlur$) {
      this.companyService.CheckBlur$.subscribe((res: any) => {
        console.log(res);
        if (res !== null) {
          if (res) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          } else if (res == false) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          }
        }

      })
    }
    //end
    this.isQPQ[0] = false;
    this.isQPP[0] = false;
    this.isDiscountSelect[0] = false;
    this.isInvoiceFree[0] = false;
    this.isFreePriceRange[0] = false;
    this.isQtyPerQty[0] = false;
    this.isQtyPerPercentage[0] = false;
    this.getExpense();
    this.getPayment();
    this.getReciept();
    this.getCreditNote();
    this.getCustomerList();
    this.getAllProductList();
    this.filteredStreets = this.streetcontrol.valueChanges.pipe(
      startWith(''),
      map(value => this.__filter(value || '')),
    );

    this.applyCredit.valueChanges.subscribe((res: any) => {
      if (res <= this.selectedAccountCreditData[0]?.pending_amount) {
        this.creditRedeemTotalAmount = this.creditRedeemTotalAmount - res;
        this.isErrorMessageShown = false;
      } else {
        this.isErrorMessageShown = true;
      }
    })

    this.heldBills = this.billHoldService.getHeldBills();

    console.log(this.heldBills);

    this.subscription.add(
      this.connectionService.monitor().pipe(
        tap((newState: ConnectionState) => {
          if (newState.hasNetworkConnection && newState.hasInternetAccess) {
            this.isInternetConnection = true;
            if (this.showSyncButton()) {
              document.getElementById("exampleModal7").classList.add('show');
              this.isModalOpen = true;
            }
          } else {
            this.isInternetConnection = false;
          }
        })
      ).subscribe()
    );

    this.monitorInternetConnection();

    this.registrationForm = this.fb.group({
      name: [''],
      mobile_no: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      whatsapp_no: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      date_of_birth: [''],
      anniversary_date: [''],
      email: ['', [Validators.email]],
      gstin: [''],
      gst_type: [''],
      address_line_1: [''],
      address_line_2: [''],
      state: ['28', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['841226', [Validators.pattern(/^[0-9]{6}$/)]]
    });

    this.upiPaymentMethodForm = this.fb.group({
      payment_account: ['', [Validators.required]],
      upi_id: ['', [Validators.required]],
      transaction_id: ['']
    });

    this.bankPaymentMethodForm = this.fb.group({
      payment_account: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
    });

    this.cardPaymentMethodForm = this.fb.group({
      payment_account: ['', [Validators.required]],
      customer_bank_name: ['', [Validators.required]],
      card_payment_amount: ['', [Validators.required]],
      card_holder_name: ['', [Validators.required]],
      cart_transactions_no: ['', [Validators.required]],
    });

    this.payLaterMethodForm = this.fb.group({
      day: ['', [Validators.required]],
      date: ['', [Validators.required]],
      is_send_reminder: ['', [Validators.required]],
    });

    this.expensePaymentForm = this.fb.group({
      non_gst: [false],
      payment_account: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      party: ['', [Validators.required]],
    })

    this.salesPaymentForm = this.fb.group({
      payment_type: ['', [Validators.required]],
      payment_account: ['', [Validators.required]],
      payment_mode: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      sales: [''],
      upi_id: [''],
      customer_bank_name: [''],
      card_payment_amount: [''],
      card_holder_name: [''],
      cart_transactions_no: [''],
      account_no: [''],
    })

    this.purchasePaymentForm = this.fb.group({
      payment_type: ['', [Validators.required]],
      payment_account: ['', [Validators.required]],
      payment_mode: ['', [Validators.required]],
      party: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      sales: [''],
      upi_id: [''],
      customer_bank_name: [''],
      card_payment_amount: [''],
      card_holder_name: [''],
      cart_transactions_no: [''],
      account_no: [''],
    })

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

    this.salesPaymentForm.get('payment_type').valueChanges.subscribe((value) => {
      if (value === 'Against Bill') {
        this.salesPaymentForm.get('sales').setValidators(Validators.required);
      } else {
        this.salesPaymentForm.get('sales').clearValidators();
      }
      this.salesPaymentForm.get('sales').updateValueAndValidity();
    });

    this.salesPaymentForm.get('payment_mode').valueChanges.subscribe((value) => {
      if (value === 'UPI') {
        this.salesPaymentForm.get('customer_bank_name').clearValidators();
        this.salesPaymentForm.get('card_payment_amount').clearValidators();
        this.salesPaymentForm.get('card_holder_name').clearValidators();
        this.salesPaymentForm.get('cart_transactions_no').clearValidators();
        this.salesPaymentForm.get('account_no').clearValidators();

        this.salesPaymentForm.get('upi_id').setValidators(Validators.required);
        this.salesPaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Card') {
        this.salesPaymentForm.get('upi_id').clearValidators();
        this.salesPaymentForm.get('account_no').clearValidators();

        this.salesPaymentForm.get('customer_bank_name').setValidators(Validators.required);
        this.salesPaymentForm.get('card_payment_amount').setValidators(Validators.required);
        this.salesPaymentForm.get('card_holder_name').setValidators(Validators.required);
        this.salesPaymentForm.get('cart_transactions_no').setValidators(Validators.required);
        this.salesPaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Bank') {
        this.salesPaymentForm.get('upi_id').clearValidators();
        this.salesPaymentForm.get('customer_bank_name').clearValidators();
        this.salesPaymentForm.get('card_payment_amount').clearValidators();
        this.salesPaymentForm.get('card_holder_name').clearValidators();
        this.salesPaymentForm.get('cart_transactions_no').clearValidators();

        this.salesPaymentForm.get('payment_account').setValidators(Validators.required);
        this.salesPaymentForm.get('account_no').setValidators(Validators.required);
      } else {
        this.salesPaymentForm.get('upi_id').clearValidators();
        this.salesPaymentForm.get('payment_account').clearValidators();
        this.salesPaymentForm.get('customer_bank_name').clearValidators();
        this.salesPaymentForm.get('card_payment_amount').clearValidators();
        this.salesPaymentForm.get('card_holder_name').clearValidators();
        this.salesPaymentForm.get('cart_transactions_no').clearValidators();
        this.salesPaymentForm.get('account_no').clearValidators();
      }
      this.salesPaymentForm.get('upi_id').updateValueAndValidity();
      this.salesPaymentForm.get('payment_account').updateValueAndValidity();
      this.salesPaymentForm.get('customer_bank_name').updateValueAndValidity();
      this.salesPaymentForm.get('card_payment_amount').updateValueAndValidity();
      this.salesPaymentForm.get('card_holder_name').updateValueAndValidity();
      this.salesPaymentForm.get('cart_transactions_no').updateValueAndValidity();
      this.salesPaymentForm.get('account_no').updateValueAndValidity();
    });

    this.purchasePaymentForm.get('payment_type').valueChanges.subscribe((value) => {
      if (value === 'Against Bill') {
        this.purchasePaymentForm.get('sales').setValidators(Validators.required);
      } else {
        this.purchasePaymentForm.get('sales').clearValidators();
      }
      this.purchasePaymentForm.get('sales').updateValueAndValidity();
    });

    this.purchasePaymentForm.get('payment_mode').valueChanges.subscribe((value) => {
      if (value === 'UPI') {
        this.purchasePaymentForm.get('customer_bank_name').clearValidators();
        this.purchasePaymentForm.get('card_payment_amount').clearValidators();
        this.purchasePaymentForm.get('card_holder_name').clearValidators();
        this.purchasePaymentForm.get('cart_transactions_no').clearValidators();
        this.purchasePaymentForm.get('account_no').clearValidators();

        this.purchasePaymentForm.get('upi_id').setValidators(Validators.required);
        this.purchasePaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Card') {
        this.purchasePaymentForm.get('upi_id').clearValidators();
        this.purchasePaymentForm.get('account_no').clearValidators();

        this.purchasePaymentForm.get('customer_bank_name').setValidators(Validators.required);
        this.purchasePaymentForm.get('card_payment_amount').setValidators(Validators.required);
        this.purchasePaymentForm.get('card_holder_name').setValidators(Validators.required);
        this.purchasePaymentForm.get('cart_transactions_no').setValidators(Validators.required);
        this.purchasePaymentForm.get('payment_account').setValidators(Validators.required);
      } else if (value === 'Bank') {
        this.purchasePaymentForm.get('upi_id').clearValidators();
        this.purchasePaymentForm.get('customer_bank_name').clearValidators();
        this.purchasePaymentForm.get('card_payment_amount').clearValidators();
        this.purchasePaymentForm.get('card_holder_name').clearValidators();
        this.purchasePaymentForm.get('cart_transactions_no').clearValidators();

        this.purchasePaymentForm.get('payment_account').setValidators(Validators.required);
        this.purchasePaymentForm.get('account_no').setValidators(Validators.required);
      } else {
        this.purchasePaymentForm.get('upi_id').clearValidators();
        this.purchasePaymentForm.get('payment_account').clearValidators();
        this.purchasePaymentForm.get('customer_bank_name').clearValidators();
        this.purchasePaymentForm.get('card_payment_amount').clearValidators();
        this.purchasePaymentForm.get('card_holder_name').clearValidators();
        this.purchasePaymentForm.get('cart_transactions_no').clearValidators();
        this.purchasePaymentForm.get('account_no').clearValidators();
      }
      this.purchasePaymentForm.get('upi_id').updateValueAndValidity();
      this.purchasePaymentForm.get('payment_account').updateValueAndValidity();
      this.purchasePaymentForm.get('customer_bank_name').updateValueAndValidity();
      this.purchasePaymentForm.get('card_payment_amount').updateValueAndValidity();
      this.purchasePaymentForm.get('card_holder_name').updateValueAndValidity();
      this.purchasePaymentForm.get('cart_transactions_no').updateValueAndValidity();
      this.purchasePaymentForm.get('account_no').updateValueAndValidity();
    });

    window.addEventListener('online', () => {
      this.isInternetConnection = true;
      if (this.showSyncButton()) {
        document.getElementById("exampleModal7").classList.add('show');
        this.isModalOpen = true;
      }
    })

    window.addEventListener('offline', () => {
      this.isInternetConnection = false;
    })

    // this.httpClient.get("assets/data.json").subscribe(data =>{
    // console.log(data);
    //   this.customers = data;
    // })
    this.syncService.checkOnlineStatus();
    this.loader = false;
    // this.onlineEvent = fromEvent(window, 'online');
    // this.offlineEvent = fromEvent(window, 'offline');

    // this.subscriptions.push(this.onlineEvent.subscribe(e => {
    //   this.connectionStatusMessage = 'Back to online';
    //   this.connectionStatus = 'online';
    // console.log('Online...');
    //   // this.loader = true;
    //   // setTimeout(function() { 
    //   //   this.loader = false
    //   //  }, 2000);

    // }));

    // this.subscriptions.push(this.offlineEvent.subscribe(e => {
    //   this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
    //   this.connectionStatus = 'offline';
    // console.log('Offline...');
    //   // this.loader = true;
    //   // setTimeout(function() { 
    //   //   this.loader = false
    //   //  }, 2000);
    // }));



    // this.createOnline$().subscribe(isOnline => {
    //   console.log('online now',isOnline)
    //   this.online = isOnline;
    //   this.loader = isOnline;
    // });
    // this.filteredStreets = this.customerAutoCompleteControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
    this.cartItems = this.cartService.getCartItems();
    // console.log(this.cartItems);


    // this.filteredOptions$ = this.options;
    // this.productsAutocompleteControl.valueChanges.subscribe(value => {
    //   this.filterArray(value);
    // });

    const token = localStorage.getItem('token');

    let api_token = token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${api_token}`
    });

    const requestOptions = { headers: headers };
    this.productsAutocompleteControl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res?.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.errorMsg = "";
          this.filteredProducts = [];
          this.isLoading = true;
        }),
        switchMap(value => {
          if (this.isInternetConnection) {
            return this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/product_search/?search=${value}`, requestOptions)
              .pipe(
                catchError(err => {
                  this.errorMsg = 'No Products Found';
                  this.isLoading = false;
                  return [];
                }),
                finalize(() => {
                  this.isLoading = false;
                })
              );
          } else {
            const products = localStorage.getItem('productsList');
            const productsList = JSON.parse(products);
            const filteredStaticData = productsList.filter(product =>
              (product?.product?.title?.toLowerCase()?.includes(value?.toLowerCase())) ||
              (product?.variant_name?.toLowerCase()?.includes(value?.toLowerCase())) ||
              (product?.batch[0]?.selling_price_offline?.toString().toLowerCase()?.includes(value?.toLowerCase()))
            );
            return of(filteredStaticData).pipe(
              catchError(err => {
                this.errorMsg = 'No Products Found';
                this.isLoading = false;
                return [];
              }),
              finalize(() => {
                this.isLoading = false;
              })
            );
          }
        })
      )
      .subscribe((data: any) => {
        // console.log('data', data)
        // if(data.variants.length > 0){
        //   this.filteredProducts = data.variants;
        // }
        if (data.length > 0) {
          this.filteredProducts = data;
        } else {
          this.filteredProducts = [];
          this.errorMsg = "No Products Available"
        }
        // if (data['Search'] == undefined) {
        //   this.errorMsg = data['Error'];
        //   this.filteredProducts = [];
        //   console.log('if');
        // } else {
        //   this.errorMsg = "";
        //   this.filteredProducts = data['Search'];
        //   console.log('else');
        // }
        // console.log(this.filteredProducts, 'fil');
        // console.log(this.errorMsg, 'errmg');
      });

    this.initializePaymentForm();
    this.getAccount();
    this.getAccountByAlies('cash-in-hand', 0);
    this.getCompanyDetails();
    // this.subscribeToUserAccountIdChanges();

    this.cartService.paymentModesLogo().subscribe((res) => {
      this.paymentModeList = res;
    })

    this.customerAutoCompleteControl.valueChanges
      .pipe(
        filter((res: any) => {
          console.log(res);
          this.userAccoutId = res?.account;
          return res !== null && res?.length >= this.cusMinLengthTerm;
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.cusErrorMsg = "";
          this.filteredCustomer = [];
          this.cusIsLoading = true;
        }),
        switchMap(value => {
          if (this.isInternetConnection) {
            return this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/customer_filter/?search=${value}`, requestOptions)
              .pipe(
                catchError(err => {
                  this.cusErrorMsg = 'No Customer Found';
                  this.cusIsLoading = false;
                  return of([]);
                }),
                finalize(() => {
                  this.cusIsLoading = false;
                })
              );
          } else {
            const customer = localStorage.getItem('customerList');
            const customerList = JSON.parse(customer);
            const filteredStaticData = customerList.filter(customer =>
              customer.mobile_no.includes(value) ||
              customer.address.some(addr =>
                addr.city.city.toLowerCase().includes(value.toLowerCase()) ||
                addr.state.state.toLowerCase().includes(value.toLowerCase())
              )
            );
            return of(filteredStaticData).pipe(
              catchError(err => {
                this.cusErrorMsg = 'No Customer Found';
                this.cusIsLoading = false;
                return of([]);
              }),
              finalize(() => {
                this.cusIsLoading = false;
              })
            );
          }
        })
      )
      .subscribe((data: any) => {
        if (data.length > 0) {
          console.log(data);
          this.filteredCustomer = data;
        } else {
          this.filteredCustomer = [];
          this.cusErrorMsg = 'No Customers Found';
        }
      });

    this.salesPaymentForm.get('customer').valueChanges
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


    this.purchasePaymentForm.get('party').valueChanges
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


    this.expensePaymentForm.get('party').valueChanges
      .pipe(
        filter(res => {
          return res !== null && res?.length >= this.cusMinLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.partyErrorMsg = "";
          this.filteredPartyExpense = [];
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
          this.filteredPartyExpense = data;
        } else {
          this.filteredPartyExpense = [];
          this.partyErrorMsg = 'No Party Found';
        }

      });


    this.addMoreDetails = false;
    // console.log(this.addMoreDetails);
    this.coreService.getCountry().subscribe({
      next: (response) => {
        // console.log(response, 'countries')
        this.currentCountry = response[0];
        this.coreService.getStateByCountryId(response[0].id).subscribe({
          next: (response) => {
            // console.log(response, 'state');
            this.stateList = response;
            const defaultState = this.stateList.filter((val) => val?.state === 'Bihar');
            this.state.setValue(defaultState[0]?.id);
            this.currentState = defaultState[0]?.id;
            this.coreService.getCityByStateId(defaultState[0]?.id).subscribe({
              next: (response) => {
                // console.log(response, 'city');
                const defaultCity = response.filter((val) => val?.city === 'Samastipur');
                this.city.setValue(defaultCity[0].id)
                this.currentCities = defaultCity[0].id
                this.cityList = response
              },
              error: (error) => {
                // console.log('state', error)
              }
            })

          },
          error: (error) => {
            // console.log('state', error)
          }
        })
      },
      error: (error) => {
        // console.log('country', error);
      }
    });

    this.cartService.getAdditionalCharge().subscribe({
      next: (response) => {
        // console.log(response, 'addt charge')
        this.additionalChargesList = response;
      },
      error: (error) => {
        // console.log('addt charge', error);
      }
    })

    this.cartService.getTaxes().subscribe({
      next: (response) => {
        // console.log(response, 'taxes')
        this.taxesList = response;
      },
      error: (error) => {
        // console.log('taxes', error);
      }
    })

    this.cartService.getCompanyBank().subscribe({
      next: (response) => {
        // console.log(response, 'company bank')
        this.companyBankList = response;
      },
      error: (error) => {
        // console.log('company bank', error);
      }
    })

    this.cartService.getPaymentTerms().subscribe({
      next: (response) => {
        // console.log(response, 'payment terms')
        this.paymentTermsList = response;
      },
      error: (error) => {
        // console.log('payment terms', error);
      }
    })

    this.cartService.getPOSOrders().subscribe({
      next: (response) => {
        // console.log(response, 'pos orders')
        this.posOrders = response;
      },
      error: (error) => {
        // console.log('pos orders', error);
      }
    })

    this.cartService.getExpensePayments().subscribe({
      next: (response) => {
        // console.log(response, 'expense payments')
        this.expensePayments = response;
      },
      error: (error) => {
        // console.log('expense payments', error);
      }
    })

    this.cartService.getSalesPayments().subscribe({
      next: (response) => {
        // console.log(response, 'sales payments')
        this.salesPayments = response;
      },
      error: (error) => {
        // console.log('sales payments', error);
      }
    })

    this.cartService.getPurchasePayments().subscribe({
      next: (response) => {
        // console.log(response, 'purchase payments')
        this.purchasePayments = response;
      },
      error: (error) => {
        // console.log('purchase payments', error);
      }
    })


  }


  getCompanyDetails() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyDetails = res[0];
      localStorage.setItem('companyDetails', JSON.stringify(this.companyDetails));
    })
  }

  // productInputValue() {
  //   let pValue = this.productsAutocompleteControl.value;
  //   return pValue.length < 3 ? true : false;
  // }

  onInputKeydown(event: KeyboardEvent): void {
    // Check if the backspace key is pressed (keyCode 8) and the input is empty
    if (event.key === 'Backspace' && this.productsAutocompleteControl.value === '') {
      // Clear the selection or perform other actions as needed
      // console.log('Backspace key pressed, clear previous selection here.');
    }
  }

  clearValidatorsReceipt() {
    // for (let index = 0; index < this.receiptPaymentForm.controls[length]; index++) {
    //   const element = array[index];

    // }
    // Object.keys(this.receiptPaymentForm.controls).forEach(key => {
    //   const control = this.receiptPaymentForm.controls[key];
    //   control.clearValidators();
    //   control.updateValueAndValidity();
    // });
  }

  monitorInternetConnection() {
    const online$ = fromEvent(window, 'online').pipe(mapTo(true));
    const offline$ = fromEvent(window, 'offline').pipe(mapTo(false));
    const internet$ = merge(online$, offline$).pipe(
      startWith(navigator.onLine)
    );

    this.subscription.add(
      internet$.subscribe(isOnline => {
        this.isInternetConnection = isOnline;
      })
    );
  }

  private __filter(value: string): string[] {
    const filterValue = this.__normalizeValue(value);
    return this.streets.filter(street => this.__normalizeValue(street).includes(filterValue));
  }

  private __normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  filterArray(value: string) {
    this.filteredOptions$ = this.options.filter(option => option.name.toLowerCase().includes(value?.toLowerCase()));
  }

  filterOptions(value: any): any[] {
    // console.log('fil', value.name);
    // console.log('options', this.options[0].name);
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  clearValidators() {
    const formControls = this.receiptPaymentForm.controls;
    Object.keys(formControls).forEach(key => {
      const control = formControls[key];
      control.clearValidators();
      control.updateValueAndValidity();
    });
  }

  initializePaymentForm() {
    this.paymentForm = this.fb.group({
      addMorePayment: this.fb.array([this.addNewPayment(this.totalAmount())])
    });
  }

  addNewPayment(amount): FormGroup {
    return this.fb.group({
      mode_type: "AgainstBill",
      user_account_id: new FormControl(this.userAccoutId),
      payment_account: new FormControl('', Validators.required),
      receipt_type: new FormControl('', Validators.required),
      // payment_mode: new FormControl(''),
      // transaction_date: new FormControl(''),
      // transaction_id: new FormControl(''),
      note: new FormControl(''),
      amount: new FormControl(amount, Validators.required)
    });
  }

  subscribeToReceiptTypeChange(group: FormGroup) {
    const receiptTypeControl = group.get('receipt_type');
    if (receiptTypeControl) {
      const subscription = receiptTypeControl.valueChanges.subscribe(value => {
        this.toggleAdditionalControls(group, value);
      });
      this.receiptTypeSubscriptions.push(subscription);
    }
  }

  receiptTypeChange(event, index: number) {
    const selectedReceiptType = event.target.value;
    const paymentGroup = this.addMorePaymentData.at(index) as FormGroup;
    const aliesType = event.target.value === 'Cash' ? 'cash-in-hand' : 'bank-accounts';
    this.getAccountByAlies(aliesType, index);
    this.toggleAdditionalControls(paymentGroup, selectedReceiptType);
  }

  toggleAdditionalControls(group: FormGroup, receiptType: string) {
    const controlNames = ['payment_mode', 'transaction_date', 'transaction_id', 'day', 'date', 'is_send_reminder'];
    controlNames.forEach(controlName => {
      if (group.get(controlName)) {
        group.removeControl(controlName);
      }
    });

    if (receiptType === 'Bank') {
      group.addControl('payment_mode', new FormControl('', Validators.required));
      group.addControl('transaction_date', new FormControl('', Validators.required));
      group.addControl('transaction_id', new FormControl('', Validators.required));
      group.removeControl('day');
      group.removeControl('date');
      group.removeControl('is_send_reminder');
    } else if (receiptType === 'PayLater') {
      group.addControl('day', new FormControl('', Validators.required));
      group.addControl('date', new FormControl('', Validators.required));
      group.addControl('is_send_reminder', new FormControl(true));
      group.removeControl('payment_account');
      group.removeControl('payment_mode');
      group.removeControl('transaction_date');
      group.removeControl('transaction_id');
    } else {
      group.removeControl('payment_mode');
      group.removeControl('transaction_date');
      group.removeControl('transaction_id');
      group.removeControl('day');
      group.removeControl('date');
      group.removeControl('is_send_reminder');
    }
  }

  onSelectDay(selectedDay: string, index: number) {
    const paymentGroup = this.addMorePaymentData.at(index) as FormGroup;
    const dateFormControl = paymentGroup.get('date');
    const selectedDayNumber = parseInt(selectedDay, 10);

    if (!isNaN(selectedDayNumber)) {
      const currentDate = new Date();
      const selectedDate = new Date(currentDate.setDate(currentDate.getDate() + selectedDayNumber));
      const formattedDate = selectedDate.toISOString().split('T')[0];
      dateFormControl.setValue(formattedDate);
      dateFormControl.disable();
    } else {
      dateFormControl.setValue('');
      dateFormControl.enable();
    }
  }

  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
      console.log(this.accountList);
    })
  }

  getAccountByAlies(value: string, index: number) {
    this.transactionService.getAccoutAlies(value).subscribe((res: any) => {
      this.accountListData = res;
      const paymentGroup = this.addMorePaymentData.at(index) as FormGroup;
      paymentGroup.get('payment_account').setValue('');
      this.accountListAlies[index] = res;
    });
  }

  // optionSelected(event) {
  //   console.log(event.option)
  //   const selectedOption = event.option.value;
  //   if (!this.selectedOptions.includes(selectedOption)) {
  //     let product = {
  //       id: selectedOption.id,
  //       name: selectedOption.name,
  //       price: selectedOption.price,
  //       quantity: 1
  //     }
  //     this.selectedOptions.push(product);
  //     this.autocompleteControl.setValue('');
  //   }
  // }

  setIndexForNotes(index: number) {
    if (this.currentCartIndex1 == index) {
      this.currentCartIndex1 = -1;
    } else {
      this.currentCartIndex1 = index;
    }
  }

  setIndexForProductDetails(index: number) {
    this.playBeepSound();
    this.currentCartIndex = index;
  }

  // add row to current additional charges
  addRowToCAC() {
    this.playBeepSound();
    let newObject = { additional_charge: "", value: 0, value_type: "percentage", tax: "", total: 0 };
    this.currentOrderAdditionalCharges.push(newObject);
  }

  // update row in current additional charges
  updateRowInCAC(index: number) {
    // console.log(this.currentOrderAdditionalCharges, 'coac');
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
    }
  }


  // delete row in current additional charges
  deleteRowInCAC(index: number, event: Event) {
    event.stopPropagation();
    this.playBeepSound();
    if (!this.currentOrderAdditionalCharges || this.currentOrderAdditionalCharges.length === 0) {
      return;
    }
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      this.currentOrderAdditionalCharges.splice(index, 1);
      // console.log("Element deleted successfully!");
    } else {
      // console.log("Invalid index. Element not deleted.");
    }
    this.updateRowInCAC(index)
  }

  // update additional charges of an element in current order additional charges
  updateACInCAC(index: number, event: Event) {
    let value = (event.target as HTMLSelectElement).value;
    const acindex = this.additionalChargesList.findIndex(currentItem => currentItem.id == value);

    if (acindex !== -1) {
      if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
        if (this.currentOrderAdditionalCharges[index].tax) {

          const tindex = this.taxesList.findIndex(currentItem => currentItem.id == this.currentOrderAdditionalCharges[index].tax);
          let total = this.additionalChargesList[acindex].value;
          let percentage = this.taxesList[tindex].tax_percentage;
          let result = ((percentage / 100) * total) + total;
          this.currentOrderAdditionalCharges[index].additional_charge = value;
          this.currentOrderAdditionalCharges[index].value = this.additionalChargesList[acindex].value;
          this.currentOrderAdditionalCharges[index].total = result;
        } else {
          this.currentOrderAdditionalCharges[index].additional_charge = value;
          this.currentOrderAdditionalCharges[index].value = this.additionalChargesList[acindex].value;
          this.currentOrderAdditionalCharges[index].total = this.additionalChargesList[acindex].value;
        }

      }
    }
    this.currentTotalAdditionalCharges()

  }


  getProductDisc(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let discPercentage = batch.additional_discount;
    if (discPercentage < 0 || originalAmount < 0) {
      return Number(0);
    } else {
      let discAmount = (discPercentage / 100) * originalAmount;
      return (discAmount)
    }
  }

  getProductAddDisc(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let addDiscPercentage = batch.additional_discount;
    if (addDiscPercentage < 0 || originalAmount < 0) {
      return Number(0);
    } else {
      let addDiscAmount = (addDiscPercentage / 100) * originalAmount;
      return (addDiscAmount)
    }
  }

  getProductTax(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch?.sale_tax || 0;
    let discAmt = this.getProductDisc(batch);
    let addDiscAmt = this.getProductAddDisc(batch);
    originalAmount = originalAmount - (discAmt + addDiscAmt);
    if (taxPercentage < 0 || originalAmount < 0) {
      return 0;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return (taxAmount)
    }
  }

  getPriceAfterTaxes(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch.sale_tax || 0;
    if (taxPercentage < 0 || originalAmount < 0) {
      return originalAmount;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return (taxAmount + originalAmount)
    }
  }

  getPriceAfterTaxes2(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch.sale_tax || 0;
    let discAmt = this.getProductDisc(batch);
    let addDiscAmt = this.getProductAddDisc(batch);
    originalAmount = originalAmount - (discAmt + addDiscAmt);

    if (taxPercentage < 0 || originalAmount < 0) {
      return originalAmount;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return (taxAmount + originalAmount)
    }
  }

  getNetAmount(batch: any, qty: number) {
    let priceAfterTaxes = this.getPriceAfterTaxes(batch);
    return (priceAfterTaxes * qty);
  }

  totalTaxAmount() {
    let cartItems = this.cartService.getCurrentItems();
    let totalPrice = 0;
    for (let cart of cartItems) {
      if (cart?.batch) {
        totalPrice += this.getProductTax(cart?.batch[0]) * cart?.quantity;
      }
    }
    return Number(totalPrice).toFixed(2);
  }

  totalDiscAmount() {
    let cartItems = this.cartService.getCurrentItems();
    let totalPrice = 0;
    for (let cart of cartItems) {
      if (cart?.batch) {
        totalPrice += (this.getProductDisc(cart?.batch[0]) + this.getProductAddDisc(cart?.batch[0])) * cart?.quantity;
      }
    }
    return Number(totalPrice).toFixed(2);
  }

  getNetAmount2(batch: any, qty: number) {
    let priceAfterTaxes = this.getPriceAfterTaxes2(batch);
    return (priceAfterTaxes * qty);
  }

  finalAmount() {
    const numbere = this.totalAmount();
    const integerPart = Math.ceil(numbere);
    // return integerPart;
    return integerPart - this.totalDiscountRupees(); //20-04-1am
  }

  totalAmount() {
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalPrice = 0 + this.currentTotalAdditionalCharges();
    for (let cart of cartItems) {
      if (cart?.batch) {
        // totalPrice += this.getPriceAfterTaxes(cart?.batch[0]) * cart?.quantity;
        totalPrice += this.getNetAmount2(cart?.batch[0], cart?.quantity);
        this.cartTotalPrice = totalPrice;
      }
    }
    return Number(totalPrice.toFixed(2));
  }

  multiplePay() {
    const latestAmount = this.totalAmount();
    this.initializePaymentForm();
    this.patchLatestAmount(latestAmount);
  }

  patchLatestAmount(amount: number): void {
    if (this.addMorePaymentData && this.addMorePaymentData.length > 0) {
      this.addMorePaymentData.at(0).patchValue({ amount: amount.toFixed(2) });
    }
  }

  // update tax of an element in current order additional charges
  updateTaxInCAC(index: number, event: Event) {
    let value = (event.target as HTMLSelectElement).value;
    const tindex = this.taxesList.findIndex(currentItem => currentItem.id == value);
    if (tindex !== -1) {
      if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
        if (this.currentOrderAdditionalCharges[index].additional_charge) {
          const acindex = this.additionalChargesList.findIndex(currentItem => currentItem.id == this.currentOrderAdditionalCharges[index].additional_charge);

          // let total = this.additionalChargesList[acindex].value;
          let total = this.currentOrderAdditionalCharges[index].value;
          let percentage = this.taxesList[tindex].tax_percentage;
          let result = ((percentage / 100) * total) + total;

          this.currentOrderAdditionalCharges[index].tax = value;
          this.currentOrderAdditionalCharges[index].total = result;
        } else {
          let total = this.currentOrderAdditionalCharges[index].total;
          let percentage = this.taxesList[tindex].tax_percentage;
          const result = (percentage / 100) * total;

          this.currentOrderAdditionalCharges[index].tax = value;
          this.currentOrderAdditionalCharges[index].total = result;
        }

      }
    }
    this.currentTotalAdditionalCharges()
  }



  // update value of an element in current order additional charges
  updateValueInCAC(index: number, event: Event) {
    let valuee = (event.target as HTMLInputElement).value;
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      if (this.currentOrderAdditionalCharges[index].tax) {
        const tindex = this.taxesList.findIndex(currentItem => currentItem.id == this.currentOrderAdditionalCharges[index].tax);
        let total = Number(valuee);
        let percentage = this.taxesList[tindex].tax_percentage;
        let result = ((percentage / 100) * total) + total;
        this.currentOrderAdditionalCharges[index].value = Number(valuee);
        this.currentOrderAdditionalCharges[index].total = result;
      } else {
        this.currentOrderAdditionalCharges[index].value = Number(valuee);
        this.currentOrderAdditionalCharges[index].total = Number(valuee);
      }
    }
    this.currentTotalAdditionalCharges();
  }

  // update value type of an element in current order additional charges
  updateValueTypeInCAC(index: number, valueType: any) {

    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      if (valueType === 'percentage') {
        this.currentOrderAdditionalCharges[index].value_type = 'rupee';
      } else {
        this.currentOrderAdditionalCharges[index].value_type = 'percentage';
      }
    }
    this.updateRowInCAC(index)
  }

  // current total additional charges
  currentTotalAdditionalCharges() {

    let total = 0;
    if (this.currentOrderAdditionalCharges.length > 0) {
      for (let index = 0; index < this.currentOrderAdditionalCharges.length; index++) {
        const element = this.currentOrderAdditionalCharges[index];
        total += element.total;
      }
    } else {
      total = 0;
    }
    return total;
  }

  getCustomerList() {
    this.cartService.getAllCustomers().subscribe((res) => {
      this.customerList = res;
      localStorage.setItem('customerList', JSON.stringify(this.customerList));
    })
  }

  getAllProductList() {
    this.cartService.getAllProducts().subscribe((res) => {
      this.productList = res;
      console.log(res);
      localStorage.setItem('productsList', JSON.stringify(this.productList));
    })
  }

  confirmBatch() {
    this.playBeepSound();
    let product1;
    let product = this.currentProduct.batch;
    let batch = this.currentBatch;
    let newbatch = [];
    for (let index = 0; index < product.length; index++) {
      const element = product[index];
      if (element.id == batch) {
        newbatch.push(element);
      }
    }
    // this.currentProduct.batch = newbatch;
    let selectedOption = this.currentProduct;
    selectedOption.batch = newbatch

    product1 = {
      ...selectedOption,
      quantity: 1,
      notes: '',
      discount: 0,
      type: ''
    }

    this.addToCurrent(product1);
    this.selectedOptions.push(product1);
    this.productsAutocompleteControl.setValue('');
    //add batch in discount
    this.selectBtch.forEach((res: any) => {
      if (res.id == this.currentBatch) {
        this.discount.push(res);
        console.log(this.discount, 'discount confirm');
      }
    })
    this.currentItems = this.cartService.getCurrentItems();
    console.log(this.currentItems, 'items confirm bach');

    this.allDiscount();//10-04
    //end
    var myModalEl = document.getElementById('batchModal')
    var modal = Modal.getInstance(myModalEl)
    modal.hide();
  }

  optionSelected(event) {
    this.playBeepSound();
    let product1;
    const selectedOption = event.option.value;
    // console.log('prod', selectedOption?.batch);
    if (selectedOption?.batch?.length > 1) {
      // console.log('length > 1');
      this.currentProduct = selectedOption;
      const element = document.getElementById('batchModal') as HTMLElement;
      const myModal = new Modal(element);
      myModal.show();
    } else {
      // console.log('length < 1');
      product1 = {
        ...selectedOption,
        quantity: 1,
        notes: '',
        discount: 0,
        type: ''
      }
      this.addToCurrent(product1);
      this.selectedOptions.push(product1);
      this.productsAutocompleteControl.setValue('');
      //add batch in discount
      this.discount.push(selectedOption?.batch[0]);
      this.currentItems = this.cartService.getCurrentItems();
      console.log(this.currentItems, 'items confirm bach');
      this.allDiscount();//10-04
      //end
    }
    this.filteredProducts = [];

  }

  async syncOfflineOrder() {
    this.isSyncLoading = true;
    this.isModalOpen = true;
    document.getElementById("exampleModal7").classList.remove('show');
    const orderData = localStorage.getItem('orders');
    let orderList = JSON.parse(orderData);
    const syncedOrders = [];

    for (let index = 0; index < orderList.length; index++) {
      const order = orderList[index];
      const formData = new FormData();
      formData.append('customer', order.customer);
      formData.append('additional_charge', order.additional_charge);
      formData.append('total_amount', order.total_amount);
      formData.append('payment_mode', 'Cash');
      formData.append('total_tax', order.total_tax);
      formData.append('cart_data', order.cart_data);
      formData.append('total_qty', order.total_qty);
      formData.append('total_discount', order.total_discount);
      formData.append('subtotal', JSON.stringify(order.subtotal));
      formData.append('Roundoff', order.Roundoff);
      formData.append('card_detail', '');
      formData.append('Multipay', '');
      formData.append('PayLatter', '');
      formData.append('bank_detail', '');
      formData.append('upi_detail', '');

      try {
        await this.cartService.generateOrderNew(formData).pipe(
          tap((res) => {
            syncedOrders.push(index);
          })
        ).toPromise();
      } catch (error) {
        console.error('Error syncing order:', error);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    orderList = orderList.filter((_, index) => !syncedOrders.includes(index));
    if (orderList.length > 0) {
      localStorage.setItem('orders', JSON.stringify(orderList));
    } else {
      localStorage.removeItem('orders');
    }
    this.isSyncLoading = false;
    this.isModalOpen = false;
  }

  optionSelectedCharge(event) {
    const selectedOption = event.option.value;
    // console.log('charge', selectedOption);
  }

  optionSelected1(event) {
    this.playBeepSound();
    this.currentCustomer = event.option.value;
    this.selectedCustomerAccountId = event.option.value?.account;
    this.selectedCustomerUserId = event.option.value?.userid;
    this.getPosCreditLimit();
    // console.log(event.option.value, 'cus');
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

  optionSelectedParty(event) {

  }

  optionSelectedPartyExpense(event) {

  }

  removeOption(index: number) {
    // console.log('removed');
    this.selectedOptions.splice(index, 1);
  }

  removeOptionCurrent(item) {
    console.log(item, 'remove item');
    this.playBeepSound();
    const index = this.selectedOptions.findIndex(currentItem => currentItem.id === item.id);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
    this.cartService.removeFromCurrent(item);
    //remove discount 20-4 12:14am
    if (item.id == 0) {
      this.discount.forEach((dis: any) => {
        if (dis.id == 0) {
          this.discount = this.discount.filter(d => d.id !== 0);
          console.log(this.discount);
        }
      });
    }
  }

  removeFromCurrent(item) {

    // console.log('removed');
    // this.selectedOptions.splice(index, 1);
    this.cartService.removeFromCurrent(item)
  }


  addToCurrent(product: any): void {
    this.cartService.addToCurrent(product);
  }

  increaseQtyCurrent(item, i: number) {
    this.playBeepSound()
    this.cartService.increaseCurrent(item);
    this.discountQty(i);//11-04
  }

  decreaseQtyCurrent(item, i: number) {
    this.playBeepSound();
    this.cartService.decreaseCurrent(item);
    this.RemoveDiscountByQty(i); //17-04
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  increaseQty(item) {
    this.cartService.increase(item);
  }

  decreaseQty(item) {
    this.cartService.decrease(item);
  }

  removeFromCart(item: any): void {
    //this.cartService.removeFromCart(item);
    //this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }


  displayFn(item: any): string {
    return item ? `${item?.product?.title} ${item?.variant_name} | ${item?.batch[0]?.selling_price_offline}` : '';
  }

  displayCus(item: any): string {
    return item ? `Ph: ${item?.mobile_no} Address: ${item?.address[item?.address?.length - 1]?.city?.city}, ${item?.address[item?.address?.length - 1]?.state?.state}` : '';
  }

  displayCus1(item: any): string {
    return item ? item?.mobile_no : '';
  }

  displayParty(item: any): string {
    return item ? item?.mobile_no : '';
  }

  displayCharge(item: any): string {
    return item ? item?.additional_charge : '';
  }

  addMoreDetailsHandler() {
    return this.addMoreDetails = !this.addMoreDetails;
  }

  totalMrp() {
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalPrice = 0;
    for (let cart of cartItems) {
      if (cart?.batch) {
        totalPrice += cart?.batch[0]?.mrp * cart?.quantity;
      }
    }
    return totalPrice;
  }


  getRoundOff() {
    const number = this.totalAmount();
    const decimalPart = number % 1;
    if (decimalPart !== 0) {
      const remainingPart = 1 - decimalPart;
      return remainingPart.toFixed(2);
    } else {
      return (0).toFixed(2)
    }
  }

  getTaxAmt(batch: any) {
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch.sale_tax || 0;
    if (taxPercentage < 0 || originalAmount < 0) {
      return 0;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return taxAmount;
    }
  }


  totalQty() {
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalQty = 0;
    for (let cart of cartItems) {
      if (cart?.batch) {
        totalQty += cart?.quantity;
      }
    }
    return totalQty;
  }

  tenderedAmt(event) {
    let tenderedAmt = event.target.value;
    this.tenderedAmount = tenderedAmt;
  }

  changeTenderedAmt(value: any) {
    let newAmt = Number(value);
    this.tenderedAmount += newAmt;
  }

  changeAmt() {
    let amt = +this.tenderedAmount - this.totalAmount();
    return amt.toFixed(2);
  }

  generateOrder1() {
    return this.syncService.checkOnlineStatus();
  }

  closeSyncModal() {
    this.isModalOpen = false;
    return document.getElementById("exampleModal7").classList.remove('show');
  }

  onSaleInvoice(event) {
    const orderId = event.target.value;
    const filteredData = this.posOrders.filter((val) => val?.id === Number(orderId));
    this.selectedOrderData = filteredData;
    this.currentCustomer = filteredData[0]?.customer;
    const customerData = this.customerList.filter((val) => val?.id === filteredData[0]?.customer?.id);
    const newCustomer: any = {
      address: [
        {
          city: { city: filteredData[0]?.customer?.address[0]?.city?.city },
          state: { state: filteredData[0]?.customer?.address[0]?.state?.state }
        }],
      mobile_no: filteredData[0]?.customer?.mobile_no
    }
    this.customerAutoCompleteControl.setValue(newCustomer)
    console.log(filteredData);
    console.log(customerData);

    const formattedArray = filteredData[0]?.cart?.map(item => ({
      id: item?.variant?.id,
      variant_name: item.variant.variant_name,
      sku: item?.variant?.sku,
      product: {
        id: item.variant.product.id,
        title: item.variant.product.title,
        product_store: item.variant.product.product_store,
        hsncode: item.variant.product.hsncode,
        brand: item.variant.product.brand,
        category: item.variant.product.category
      },
      batch: item.variant.batch,
      quantity: item.qty,
      notes: item.remarks,
      discount: parseFloat(item.discount)
    }));
    console.log(formattedArray);
    this.currentItems = formattedArray;

    this.currentItems.forEach(product => {
      this.addToCurrent(product);
    });
  }

  generateOrder() {
    if (navigator.onLine) {
      this.selectedOptions = [];
      this.currentCustomer = '';
      this.toastr.success('Created Online', 'Order', {
        timeOut: 5000
      });
      document.getElementById("exampleModal5Close").click();
    } else {
      let cartItems = this.selectedOptions;
      let change = this.changeAmt();
      let tendered = this.tenderedAmount;
      let total = this.totalAmount();
      let customer = this.currentCustomer;
      this.toastr.success('Created Offline', 'Order', {
        timeOut: 5000
      });

      let cartData = this.setItemsArr();
      const orderData = {
        customer: JSON.stringify(this.currentCustomer?.id),
        additional_charge: JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())),
        total_amount: JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())),
        payment_mode: 'Cash',
        total_tax: JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())),
        cart_data: JSON.stringify(cartData),
        total_qty: this.totalCartQuantity(),
        total_discount: '0',
        subtotal: this.calculateSubTotal(),
        Roundoff: this.getRoundOff(),
        card_detail: '',
        Multipay: '',
        PayLatter: '',
        bank_detail: '',
        upi_detail: ''
      }
      this.cartService.generateOrder(orderData);
      this.selectedOptions = [];
      this.currentCustomer = '';
      this.customerAutoCompleteControl.setValue('');
      this.saleInvoice.setValue('');
      this.discardCurrentBill();
      this.tenderedAmount = 0;
      document.getElementById("exampleModal5Close").click();
    }
  }

  createOnline$() {
    return merge(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }

  showSyncButton() {
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      return (navigator.onLine && (orders.length > 0));
    } else {
      return false
    }
  }

  checkSubmitCus() {

  }

  getCityNameById(cityId: number): string {
    const city = this.cityList.find(c => c.id === cityId);
    return city ? city.city : '';
  }

  getStateNameById(stateId: number): string {
    const state = this.stateList.find(s => s.id === stateId);
    return state ? state.state : '';
  }

  saleReturn() {
    if (this.selectedOrderData && !!this.saleInvoice.value) {
      let cartData = this.setItemsArr();
      let saleReturnCart: any;

      if (cartData?.length > 0) {
        saleReturnCart = cartData.map(item => ({
          barcode: item.variant,
          item_name: item.title,
          qty: item.qty,
          price: parseFloat(item.unit_cost).toFixed(2),
          discount: parseFloat(item.discount).toFixed(2),
          tax: parseFloat(item.tax_amount).toFixed(2),
          amount: parseFloat(item.unit_cost) * item.qty - parseFloat(item.discount) + parseFloat(item.tax_amount),
          total: parseFloat(item.net_cost).toFixed(2)
        }));
      } else {
        saleReturnCart = []
      }

      let formData: any = new FormData();
      formData.append('customer', JSON.stringify(this.currentCustomer?.id));
      formData.append('return_date', this.formatedDate(new Date()));
      formData.append('pos_bill', JSON.stringify(this.selectedOrderData[0]?.id));
      formData.append('note', '');
      formData.append('total_qty', this.totalCartQuantity());
      formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
      formData.append('total_discount', '0');
      formData.append('subtotal', this.calculateSubTotal());
      formData.append('roundoff', this.getRoundOff());
      formData.append('total', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
      formData.append('flat_discount', '0');
      formData.append('sale_return_cart', JSON.stringify(saleReturnCart));

      this.cartService.posOrderReturn(formData).subscribe((res: any) => {
        console.log(res);
        this.saleReturnData = res;
        this.customerAutoCompleteControl.setValue('');
        this.saleInvoice.setValue('');
        this.discardCurrentBill();
        this.generatePdf(res?.data, 'posReturn');

      })
    } else {
      return;
    }
  }

  submitCustomerForm() {
    let address = {
      "address_line_1": this.registrationForm.get('address_line_1').value,
      "address_line_2": this.registrationForm.get('address_line_2').value,
      "country": Number(this.currentCountry.id),
      "state": Number(this.registrationForm.get('state').value),
      "city": Number(this.registrationForm.get('city').value),
      "pincode": this.registrationForm.get('pincode').value,
      "address_type": ""
    }
    let formData: any = new FormData();
    formData.append('name', this.registrationForm.get('name').value || this.registrationForm.get('mobile_no').value);
    formData.append('mobile_no', this.registrationForm.get('mobile_no').value || '');
    formData.append('whatsapp_no', this.registrationForm.get('whatsapp_no').value || '');
    formData.append('date_of_birth', this.registrationForm.get('date_of_birth').value || '');
    formData.append('anniversary_date', this.registrationForm.get('anniversary_date').value || '');
    formData.append('email', this.registrationForm.get('email').value || '');
    formData.append('gstin', this.registrationForm.get('gstin').value || '');
    formData.append('gst_type', this.registrationForm.get('gst_type').value || '');
    //formData.append('address', '');

    if (this.address_line_1.value && this.address_line_2.value && this.state.value && this.city.value && this.pincode.value) {
      formData.append('address', JSON.stringify(address))
    } else {
      formData.append('address', '');
    }

    this.cartService
      .addCustomer(formData)
      .subscribe({
        next: (response: any) => {
          if (response.isSuccess) {
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.addCusModal');
            clicking.click();
            this.addMoreDetails = false;
            // this.city.setValue(this.cityList[0].id)
            // this.currentCities = this.cityList[0].id;
            // this.state.setValue(this.stateList[0].id);
            // this.currentState = this.stateList[0].id;

            const newCustomer: any = {
              address: [
                {
                  city: { city: this.getCityNameById(this.registrationForm.get('city').value) },
                  state: { state: this.getStateNameById(this.registrationForm.get('state').value) }
                }],
              mobile_no: this.registrationForm.get('mobile_no').value
            }
            this.customerAutoCompleteControl.setValue(newCustomer)
            this.registrationForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          // console.log(error)
          this.toastr.error(error.message);
        },
      });

    // for(let x of formData){
    // console.log('formdata cus', x);
    // }
    // this.http
    //   .post('https://pv.greatfuturetechno.com/pv-api/customer/', formData)
    //   .subscribe({
    //     next: (response) => console.log(response),
    //     error: (error) => console.log(error),
    //   });
  }

  markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  closePayLaterModal() {
    this.isModalShown = false;
  }

  payLater() {
    if (this.creditLimit === 0) {
      this.toastr.error("You don't have credit Limit to done pay Later.");
      return;
    } else if (this.totalAmount() > this.creditLimit) {
      this.toastr.error("Your total amount exceeds your credit limit, so Pay Later is not available.");
      this.isPayLaterModalShown = false;
      return;
    }

    this.isPayLaterModalShown = true;
    setTimeout(() => {
      this.showModal('payLaterMethodModal');
    }, 0);
  }

  showModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  submitMultiPayLater() {
    this.isFormSubmitted = true;
    let pay_later_data = {
      "day": this.payment_terms,
      "date": this.due_date,
      "is_send_reminder": this.selectedReminder
    };

    if (this.payment_terms && this.due_date && this.selectedReminder) {
      const formData = new FormData();
      const paymentDataArray = this.addMorePaymentData.value;
      console.log(JSON.stringify(paymentDataArray));

      if (this.currentItems.length > 0) {
        if (this.currentCustomer === null || this.currentCustomer === undefined) {
          this.toastr.error('Please Select/Add a Customer!');
        } else {
          let cartData = this.setItemsArr();
          formData.append('customer', JSON.stringify(this.currentCustomer.id));
          formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
          formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
          formData.append('payment_mode', 'Multiple Pay');
          formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
          formData.append('cart_data', JSON.stringify(cartData));
          formData.append('PayLatter', JSON.stringify(pay_later_data));
          formData.append('payment', JSON.stringify(paymentDataArray));

          this.cartService.generateOrderNew(formData).subscribe((res: any) => {
            console.log(res);
            this.toastr.success(res?.msg)
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.paymentForm.reset();
            this.payment_terms = '';
            this.due_date = '';
            this.selectedReminder = '';
            this.saleInvoice.setValue('');
            var clicking = <HTMLElement>document.querySelector('.multiPayLaterModalClose');
            clicking.click();
            var clicking = <HTMLElement>document.querySelector('.paymentModal');
            clicking.click();
            this.isFormSubmitted = false;
          })
        }
      }
    } else {
      return;
    }
  }

  proceedToPay() {
    this.markFormGroupTouched(this.paymentForm);

    if (!this.paymentForm.valid) {
      return;
    }

    let totalCartValue = this.totalAmount();
    let totalAmountTotal = this.calculateAmountTotal();
    let totalPendingAmount = totalCartValue - totalAmountTotal;

    if (totalCartValue !== totalAmountTotal) {
      if (this.creditLimit !== 0) {
        if (this.creditLimit >= totalPendingAmount) {
          this.isModalShown = true;
          document.body.classList.add('modal-open');
        } else {
          this.toastr.error("Your total amount exceeds your credit limit, so Pay Later is not available.");
        }
      } else {
        this.toastr.error("You don't have credit Limit to done pay Later.");
      }
    } else {
      this.isModalShown = false;
      document.body.classList.remove('modal-open');
      if (!this.paymentForm.valid) {
        return;
      } else {
        const formData = new FormData();
        const paymentDataArray = this.addMorePaymentData.value;
        console.log(JSON.stringify(paymentDataArray));

        if (this.currentItems.length > 0) {
          if (this.currentCustomer === null || this.currentCustomer === undefined) {
            this.toastr.error('Please Select/Add a Customer!');
          } else {
            let cartData = this.setItemsArr();
            formData.append('customer', JSON.stringify(this.currentCustomer.id));
            formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
            formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
            formData.append('payment_mode', 'Multipay');
            formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
            formData.append('cart_data', JSON.stringify(cartData));
            formData.append('PayLatter', '');
            formData.append('payment', JSON.stringify(paymentDataArray));

            this.cartService.generateOrderNew(formData).subscribe((res: any) => {
              console.log(res);
              this.toastr.success(res?.msg)
              this.customerAutoCompleteControl.setValue('');
              this.saleInvoice.setValue('');
              this.discardCurrentBill();
              this.paymentForm.reset();
              var clicking = <HTMLElement>document.querySelector('.paymentModal');
              clicking.click();
            })
          }
        }
      }
    }
  }

  ngOnDestroy() {
    this.receiptTypeSubscriptions.forEach(sub => sub.unsubscribe());
    this.subscription.unsubscribe();
  }

  // private subscribeToUserAccountIdChanges() {
  //   this.addMorePaymentData.controls.forEach((group, index) => {
  //     this.subscribeToUserAccountIdChange(group as FormGroup, index);
  //   });
  // }

  // private subscribeToUserAccountIdChange(group: FormGroup, index: number) {
  //   debugger
  //   const accountControl = group.get('payment_account');
  //   if (accountControl) {
  //     accountControl.valueChanges.subscribe(value => {
  //       console.log('Payment Account Value Changed:', value);
  //     });

  //     this.filteredPaymentAccount[index] = accountControl.valueChanges.pipe(
  //       startWith(''),
  //       map(value => this._filterUserId(value))
  //     );
  //   }
  // }

  modalClose(event) {
    if (event) {
      var clicking = <HTMLElement>document.querySelector('.posPaymentVoucher');
      clicking.click();
      this.isPaymentModalShown = false;
    }
  }

  expenseModalClose(event) {
    if (event) {
      var clicking = <HTMLElement>document.querySelector('.posExpenseVoucher');
      clicking.click();
      this.isExpanseModalShown = false;
    }
  }

  receiptModalClose(event) {
    if (event) {
      var clicking = <HTMLElement>document.querySelector('.posReceiptVoucher');
      clicking.click();
      this.isReceiptModalShown = false;
    }
  }

  creditNoteModalClose(event) {
    if (event) {
      var clicking = <HTMLElement>document.querySelector('.posCreditNote');
      clicking.click();
      this.isCreditNoteModalShown = false;
    }
  }

  onSelectPaymentAccount(value: string, index: number) {
    const formGroup = this.addMorePaymentData.at(index) as FormGroup;
    formGroup.get('payment_account').setValue(value);
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  oncheckBank(data: any) {
  }

  onStateChange(event: any) {
    this.currentState = event.target.value;
    const selectedState = event.target.value;
    // const stateCode = this.stateList.find(state => state.id == selectedState.id);
    // console.log(stateCode.id, '...');
    this.coreService.getCityByStateId(selectedState).subscribe({
      next: (res) => {
        // console.log(res, 'cites');
        this.cityList = res;
        this.currentCities = this.cityList?.id
      },
      error: (err) => {
        // console.log('cities', err);
      }
    })

  }

  onCityChange(event: any) {
    this.currentCities = event.target.value;
  }



  onSubmit() {
    this.playBeepSound();
    if (this.registrationForm.invalid) {
      // console.log('invalid');
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.controls[key].markAsTouched();
      });
      return;
    }
    if (this.customerRegistrationNumberSame) {
      this.toastr.error("Mobile number already exists.")
      return;
    }
    // if(this.address_line_1.value !== '' || this.address_line_2.value !== '' || this.state.value !== '' || this.city.value !== '' || this.pincode.value !== ''){
    //   this.setAddressValidators();
    //   Object.keys(this.registrationForm.controls).forEach(key => {
    //     this.registrationForm.controls[key].markAsTouched();
    //   });
    //   return;
    // } else {
    //   this.clearAddressValidators();
    //   Object.keys(this.registrationForm.controls).forEach(key => {
    //     this.registrationForm.controls[key].markAsTouched();
    //   });
    //   return;
    // }


    // Form is valid, proceed with submission
    // console.log(this.registrationForm.value);
    this.submitCustomerForm();
    // Perform additional actions like API calls or data processing here
  }

  get name() { return this.registrationForm.get('name'); }
  get mobile_no() { return this.registrationForm.get('mobile_no'); }
  get whatsapp_no() { return this.registrationForm.get('whatsapp_no'); }
  get date_of_birth() { return this.registrationForm.get('date_of_birth'); }

  get anniversary_date() { return this.registrationForm.get('anniversary_date'); }
  get email() { return this.registrationForm.get('email'); }
  get gstin() { return this.registrationForm.get('gstin'); }
  get gst_type() { return this.registrationForm.get('gst_type'); }
  get address_line_1() { return this.registrationForm.get('address_line_1'); }
  get address_line_2() { return this.registrationForm.get('address_line_2'); }
  get country() { return this.registrationForm.get('country'); }
  get state() { return this.registrationForm.get('state'); }
  get city() { return this.registrationForm.get('city'); }
  get pincode() { return this.registrationForm.get('pincode'); }

  get upi_id() { return this.upiPaymentMethodForm.get('upi_id'); }
  get transaction_id() { return this.upiPaymentMethodForm.get('transaction_id'); }
  get payment_account_upi() { return this.upiPaymentMethodForm.get('payment_account'); }

  get account_no() { return this.bankPaymentMethodForm.get('account_no') };
  get payment_account_bank() { return this.bankPaymentMethodForm.get('payment_account') };


  get upi_id_receipt() { return this.receiptPaymentForm.get('upi_id'); }
  get transaction_id_receipt() { return this.receiptPaymentForm.get('transaction_id'); }
  get payment_account_receipt() { return this.receiptPaymentForm.get('payment_account'); }


  get payment_account_card() { return this.cardPaymentMethodForm.get('payment_account'); }
  get customer_bank_name() { return this.cardPaymentMethodForm.get('customer_bank_name'); }
  get card_payment_amount() { return this.cardPaymentMethodForm.get('card_payment_amount'); }
  get card_holder_name() { return this.cardPaymentMethodForm.get('card_holder_name'); }
  get cart_transactions_no() { return this.cardPaymentMethodForm.get('cart_transactions_no'); }


  get pay_later_day() { return this.payLaterMethodForm.get('day'); }
  get pay_later_date() { return this.payLaterMethodForm.get('date'); }
  get is_send_reminder() { return this.payLaterMethodForm.get('is_send_reminder'); }

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


  get expense_nongst() { return this.expensePaymentForm.get('non_gst') };
  get expense_party() { return this.expensePaymentForm.get('party') };
  get expense_amount() { return this.expensePaymentForm.get('amount') };
  get expense_remark() { return this.expensePaymentForm.get('remark') };
  get expense_payment_account() { return this.expensePaymentForm.get('payment_account') };

  get sales_amount() { return this.salesPaymentForm.get('amount') };
  get sales_remark() { return this.salesPaymentForm.get('remark') };
  get sales_payment_account() { return this.salesPaymentForm.get('payment_account') };
  get sales_payment_type() { return this.salesPaymentForm.get('payment_type') };
  get sales_payment_mode() { return this.salesPaymentForm.get('payment_mode') };
  get sales_sales() { return this.salesPaymentForm.get('sales') };

  get sales_customer_bank_name() { return this.salesPaymentForm.get('customer_bank_name') };
  get sales_card_payment_amount() { return this.salesPaymentForm.get('card_payment_amount') };
  get sales_card_holder_name() { return this.salesPaymentForm.get('card_holder_name') };
  get sales_cart_transactions_no() { return this.salesPaymentForm.get('cart_transactions_no') };

  get sales_account_no() { return this.salesPaymentForm.get('account_no') };
  get sales_upi_id() { return this.salesPaymentForm.get('upi_id'); }
  get sales_customer() { return this.salesPaymentForm.get('customer'); }

  get purchase_amount() { return this.purchasePaymentForm.get('amount') };
  get purchase_remark() { return this.purchasePaymentForm.get('remark') };
  get purchase_payment_account() { return this.purchasePaymentForm.get('payment_account') };
  get purchase_payment_type() { return this.purchasePaymentForm.get('payment_type') };
  get purchase_payment_mode() { return this.purchasePaymentForm.get('payment_mode') };
  get purchase_sales() { return this.purchasePaymentForm.get('sales') };

  get purchase_customer_bank_name() { return this.purchasePaymentForm.get('customer_bank_name') };
  get purchase_card_payment_amount() { return this.purchasePaymentForm.get('card_payment_amount') };
  get purchase_card_holder_name() { return this.purchasePaymentForm.get('card_holder_name') };
  get purchase_cart_transactions_no() { return this.purchasePaymentForm.get('cart_transactions_no') };

  get purchase_account_no() { return this.purchasePaymentForm.get('account_no') };
  get purchase_upi_id() { return this.purchasePaymentForm.get('upi_id'); }
  get purchase_party() { return this.purchasePaymentForm.get('party'); }


  handleMobileInputChange(event: any) {
    const inputValue = event.target.value;
    if (this.mobile_no.valid) {
      this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/mobile_no_check_of_customer/?search=${inputValue}`).subscribe({
        next: (response: any) => {
          // console.log(response, 'mobile check');
          if (response.Same) {
            this.customerRegistrationNumberSame = true;
          } else {
            this.customerRegistrationNumberSame = false;
          }
        },
        error: (err) => {
          // console.log(err, 'mobile check');
        }
      })
    }
  }

  onGstTypeChange() {
    const optionValue = this.gst_type.value;

    if (optionValue === 'Registered Regular') {
      this.gstin.setValidators([Validators.required]);
    } else {
      this.gstin.clearValidators();
    }

    this.gstin.updateValueAndValidity();
  }

  onAddress1Change() {
    const optionValue = this.address_line_1.value;

    if (optionValue === 'Registered Regular') {
      this.gstin.setValidators([Validators.required]);
    } else {
      this.gstin.clearValidators();
    }

    this.gstin.updateValueAndValidity();
  }

  setAddressValidators() {
    this.address_line_1.setValidators(Validators.required);
    this.address_line_2.setValidators(Validators.required);
    this.state.setValidators(Validators.required);
    this.city.setValidators(Validators.required);
    this.pincode.setValidators([Validators.required, Validators.pattern(/^[0-9]{6}$/)]);

    this.address_line_1.updateValueAndValidity();
    this.address_line_2.updateValueAndValidity();
    this.state.updateValueAndValidity();
    this.city.updateValueAndValidity();
    this.pincode.updateValueAndValidity();
  }

  clearAddressValidators() {
    this.address_line_1.clearValidators();
    this.address_line_2.clearValidators();
    this.state.clearValidators();
    this.city.clearValidators();
    this.pincode.clearValidators();
    this.pincode.setValidators(Validators.pattern(/^[0-9]{6}$/));

    this.address_line_1.updateValueAndValidity();
    this.address_line_2.updateValueAndValidity();
    this.state.updateValueAndValidity();
    this.city.updateValueAndValidity();
    this.pincode.updateValueAndValidity();
  }

  resumeBill(billId: number) {
    this.playBeepSound();
    // Implement logic to retrieve and resume the selected bill
    const selectedBill = this.heldBills.find((bill) => bill.id === billId);
    if (selectedBill) {
      // Assign the properties of the selected bill to the active bill
      //this.billHoldService.setActiveBill(selectedBill);
      this.cartService.clearCurrent();
      this.currentItems = this.cartService.getCurrentItems();
      for (let index = 0; index < selectedBill.currentItems.length; index++) {
        const element = selectedBill.currentItems[index];
        this.cartService.addToCurrent(element);
      }
      if (selectedBill.currentOrderAdditionalCharges.length > 0) {
        this.currentOrderAdditionalCharges = selectedBill.currentOrderAdditionalCharges
      } else {
        this.currentOrderAdditionalCharges = [];
      }
      this.currentCustomer = selectedBill.currentCustomer;
      //this.currentItems = selectedBill.currentItems;
      // Remove the selected bill from the list of held bills
      this.billHoldService.removeFromHold(billId);
      // Update the local heldBills array
      this.heldBills = this.billHoldService.getHeldBills();
      var clicking = <HTMLElement>document.querySelector('.holdClose');
      clicking.click();
    }
  }

  removeFromHold(billId: number) {
    this.playBeepSound();
    this.billHoldService.removeFromHold(billId);
    this.heldBills = this.billHoldService.getHeldBills();
    var clicking = <HTMLElement>document.querySelector('.holdClose');
    clicking.click();
  }

  holdBill(value?) {
    this.playBeepSound();
    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let activeBill: any = {};
        activeBill.currentItems = this.currentItems;
        if (this.currentOrderAdditionalCharges.length > 0) {
          activeBill.currentOrderAdditionalCharges = this.currentOrderAdditionalCharges;
        } else {
          activeBill.currentOrderAdditionalCharges = [];
        }
        if (value === 'print') {
          this.holdBillActive = true;
        }
        activeBill.totalAmt = this.totalAmount();
        activeBill.currentCustomer = this.currentCustomer;
        this.billHoldService.addToHold(activeBill);
        // this.cartService.clearCurrent();
        // this.currentItems = this.cartService.getCurrentItems();
        // this.currentOrderAdditionalCharges = [];
        // this.currentCustomer = null;
        this.discardCurrentBill();
        this.customerAutoCompleteControl.setValue('');
        this.saleInvoice.setValue('');
      }
    } else {
      this.toastr.error("Please Items To Cart!");
    }
  }


  discardCurrentBill() {
    this.cartService.clearCurrent();
    this.currentItems = this.cartService.getCurrentItems();
    this.currentOrderAdditionalCharges = [];
    this.currentCustomer = null;
  }

  receiptFormSubmit() {
    if (this.receiptPaymentForm.invalid) {
      // console.log('invalid');
      Object.keys(this.receiptPaymentForm.controls).forEach(key => {
        const control = this.receiptPaymentForm.controls[key];
        if (control.invalid) {
          // console.log(key);
        }

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

  applyCreditRedeem() {
    const creditLimit = {
      credit_note_id: this.selectedAccountCreditData[0]?.credit_note_no,
      applyCredit: this.applyCredit.value
    }
    this.creditLimitData.push(creditLimit);
    var clicking = <HTMLElement>document.querySelector('.creditRedeemClose');
    clicking.click();
  }

  formSubmitExpense() {
    this.playBeepSound();
    if (this.expensePaymentForm.invalid) {
      // console.log('invalid');
      Object.keys(this.expensePaymentForm.controls).forEach(key => {
        const control = this.expensePaymentForm.controls[key];
        if (control.invalid) {
          // console.log(key);
        }

        this.expensePaymentForm.controls[key].markAsTouched();
      });
      return;
    }

    let formData = new FormData();

    formData.append('party', this.expense_party?.value?.id);
    formData.append('amount', this.expense_amount.value);
    formData.append('remarks', this.expense_remark.value);
    formData.append('non_gst', this.expense_nongst.value);
    formData.append('payment_account', this.expense_payment_account.value);

    this.cartService.expensePayment(formData).subscribe({
      next: (response: any) => {
        // console.log('response receipt', response);
        if (response.isSuccess) {
          // this.discardCurrentBill();
          this.toastr.success(response.msg)
          var clicking = <HTMLElement>document.querySelector('.expenseModalClose');
          clicking.click();
          this.expensePaymentForm.reset();
          this.expense_nongst.setValue(false);
          this.cartService.getExpensePayments().subscribe({
            next: (response) => {
              // console.log(response, 'expense payments')
              this.expensePayments = response;
            },
            error: (error) => {
              // console.log('expense payments', error);
            }
          })
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
    this.playBeepSound();
    if (this.purchasePaymentForm.invalid) {
      // console.log('invalid');
      Object.keys(this.purchasePaymentForm.controls).forEach(key => {
        const control = this.purchasePaymentForm.controls[key];
        if (control.invalid) {
          // console.log(key);
        }

        this.purchasePaymentForm.controls[key].markAsTouched();
      });
      return;
    }

    let formData = new FormData();

    if (this.purchase_payment_mode.value === 'UPI') {
      let upi_data = {
        "upi_no": Number(this.purchase_upi_id.value),
        "payment_account": Number(this.purchase_payment_account.value)
      };

      if (this.purchase_payment_type.value == 'Advance') {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      } else {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', this.purchase_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      }

    } else if (this.payment_mode.value === 'Bank') {

      let bank_data = {
        "payment_account": Number(this.purchase_payment_account.value),
        "account_no": this.purchase_account_no.value,
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', this.purchase_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      }

    } else if (this.payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.purchase_payment_account.value),
        "customer_bank_name": this.purchase_customer_bank_name.value,
        "card_payment_amount": this.purchase_card_payment_amount.value,
        "card_holder_name": this.purchase_card_holder_name.value,
        "cart_transactions_no": this.purchase_cart_transactions_no.value
      };

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', this.purchase_sales.value);
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }
    } else {

      if (this.payment_type.value == 'Advance') {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('party', this.purchase_party?.value?.id);
        formData.append('receipt_method', this.purchase_payment_type.value);
        formData.append('payment_mode', this.purchase_payment_mode.value);
        formData.append('amount', this.purchase_amount.value);
        formData.append('description', this.purchase_remark.value);
        formData.append('bill_no', this.purchase_sales.value);
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
          if (response.isSuccess) {
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.purchaseModalClose');
            clicking.click();
            this.purchasePaymentForm.reset();
            this.cartService.getPurchasePayments().subscribe({
              next: (response) => {
                // console.log(response, 'purchase payments')
                this.purchasePayments = response;
              },
              error: (error) => {
                // console.log('purchase payments', error);
              }
            })
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
    this.playBeepSound();
    if (this.salesPaymentForm.invalid) {
      // console.log('invalid');
      Object.keys(this.salesPaymentForm.controls).forEach(key => {
        const control = this.salesPaymentForm.controls[key];
        if (control.invalid) {
          // console.log(key);
        }

        this.salesPaymentForm.controls[key].markAsTouched();
      });
      return;
    }

    let formData = new FormData();

    if (this.sales_payment_mode.value === 'UPI') {
      let upi_data = {
        "upi_no": Number(this.sales_upi_id.value),
        "payment_account": Number(this.sales_payment_account.value)
      };

      if (this.sales_payment_type.value == 'Advance') {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      } else {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', this.sales_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));
      }

    } else if (this.sales_payment_mode.value === 'Bank') {

      let bank_data = {
        "payment_account": Number(this.sales_payment_account.value),
        "account_no": this.sales_account_no.value,
      };

      if (this.sales_payment_type.value == 'Advance') {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', this.sales_sales.value);
        formData.append('card_detail', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');
      }

    } else if (this.sales_payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.sales_payment_account.value),
        "customer_bank_name": this.sales_customer_bank_name.value,
        "card_payment_amount": this.sales_card_payment_amount.value,
        "card_holder_name": this.sales_card_holder_name.value,
        "cart_transactions_no": this.sales_cart_transactions_no.value
      };

      if (this.sales_payment_type.value == 'Advance') {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', this.sales_sales.value);
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      }
    } else {

      if (this.sales_payment_type.value == 'Advance') {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', '');
        formData.append('card_detail', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');
      } else {
        formData.append('customer', this.sales_customer?.value?.id);
        formData.append('receipt_method', this.sales_payment_type.value);
        formData.append('payment_mode', this.sales_payment_mode.value);
        formData.append('amount', this.sales_amount.value);
        formData.append('description', this.sales_remark.value);
        formData.append('bill_no', this.sales_sales.value);
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
          if (response.isSuccess) {
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.salesModalClose');
            clicking.click();
            this.salesPaymentForm.reset();
            this.cartService.getSalesPayments().subscribe({
              next: (response) => {
                // console.log(response, 'sales payments')
                this.salesPayments = response;
              },
              error: (error) => {
                // console.log('sales payments', error);
              }
            })
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


  payLaterGenerateOrder() {
    this.playBeepSound();
    if (this.payLaterMethodForm.invalid) {
      // console.log('invalid');
      Object.keys(this.payLaterMethodForm.controls).forEach(key => {
        this.payLaterMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = this.setItemsArr();

        let pay_later_data = {
          "day": Number(this.pay_later_day.value),
          "date": this.pay_later_date.value,
          "is_send_reminder": this.is_send_reminder.value == 'false' ? 'False' : 'True',
        };



        // console.log(cartData, 'cash', pay_later_data);
        const formData = new FormData();
        formData.append('customer', JSON.stringify(this.currentCustomer.id));
        formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
        formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
        formData.append('payment_mode', 'Paylater');
        formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
        formData.append('cart_data', JSON.stringify(cartData));
        formData.append('card_detail', '');
        formData.append('Multipay', '');
        formData.append('PayLatter', JSON.stringify(pay_later_data));
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');


        this.cartService
          .generateOrderNew(formData)
          .subscribe({
            next: (response: any) => {
              // console.log('response order', response);
              if (response.isSuccess) {
                this.customerAutoCompleteControl.setValue('');
                this.saleInvoice.setValue('');
                this.discardCurrentBill();
                this.toastr.success(response.msg)
                setTimeout(() => {
                  this.generatePdf(response?.order, 'payLater');
                }, 1000);
                var clicking = <HTMLElement>document.querySelector('.payLaterModalClose');
                clicking.click();
                this.payLaterMethodForm.reset();
                this.cartService.getPOSOrders().subscribe({
                  next: (response) => {
                    // console.log(response, 'pos orders')
                    this.posOrders = response;
                  },
                  error: (error) => {
                    // console.log('pos orders', error);
                  }
                })
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

    } else {
      this.toastr.error('Please Add Items To Cart');
    }


  }

  onPaymentTermChange(value) {
    this.payment_terms = value;
  }

  cardPaymentGenerateOrder(type: any) {
    this.playBeepSound();
    if (this.cardPaymentMethodForm.invalid) {
      // console.log('invalid');
      Object.keys(this.cardPaymentMethodForm.controls).forEach(key => {
        this.cardPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = this.setItemsArr();

        let card_data = {
          "payment_account": this.payment_account_card.value,
          "customer_bank_name": this.customer_bank_name.value,
          "card_payment_amount": this.card_payment_amount.value,
          "card_holder_name": this.card_holder_name.value,
          "cart_transactions_no": this.cart_transactions_no.value
        };
        // console.log(cartData, 'card');
        const formData = new FormData();
        formData.append('customer', JSON.stringify(this.currentCustomer.id));
        formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
        formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
        formData.append('payment_mode', 'Card');
        formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
        formData.append('cart_data', JSON.stringify(cartData));
        formData.append('card_detail', JSON.stringify(card_data));
        formData.append('Multipay', '');
        formData.append('PayLatter', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');

        this.cartService
          .generateOrderNew(formData)
          .subscribe({
            next: (response: any) => {
              // console.log('response order', response);
              if (response.isSuccess) {
                this.customerAutoCompleteControl.setValue('');
                this.saleInvoice.setValue('');
                this.discardCurrentBill();
                this.toastr.success(response.msg)
                if (type == 'print') {
                  // window.open(`/pos/invoice/${response?.order?.id}`, '_blank');
                  setTimeout(() => {
                    this.generatePdf(response?.order, 'card');
                  }, 1000);
                  var clicking = <HTMLElement>document.querySelector('.cardPrintModalClose');
                  clicking.click();
                } else {
                  var clicking = <HTMLElement>document.querySelector('.cardModalClose');
                  clicking.click();
                }
                this.cardPaymentMethodForm.reset();
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

    } else {
      this.toastr.error('Please Add Items To Cart');
    }


  }

  getCustomer(id) {
    const customer: any = this.accountList.filter((val) => val?.id === id);
    return customer[0]?.created_by;
  }

  formatedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return `${formattedDate}`;
  }

  formatHours(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return `${formattedTime}`;
  }

  truncateWithEllipsis(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    }
    return str;
  }

  calculateSubTotal(): any {
    let subTotal = 0;
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      const unitCost = element.batch[0]?.selling_price_offline;
      const qty = element.quantity;

      const total = unitCost * qty;

      subTotal += total;
    }
    return subTotal;
  }

  // generatePdf(newWindow: Window) {
  //   const elementToCapture = document.getElementById('debitNote');
  //   elementToCapture.style.display = 'block';
  //   html2canvas(elementToCapture, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     const canvasWidth = canvas.width;
  //     const canvasHeight = canvas.height;
  //     const imgWidth = pdfWidth;
  //     const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;

  //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

  //     const pdfBlob = pdf.output('blob');
  //     const blobUrl = URL.createObjectURL(pdfBlob);
  //     newWindow.location.href = blobUrl;

  //     elementToCapture.style.display = 'none';
  //   });
  // }

  checkPageOverflow(doc: jsPDF) {
    const pageHeight = new jsPDF().internal.pageSize.height;
    if (this.textY > pageHeight - 20) { // 20 is a buffer before creating a new page
      doc.addPage();
      this.textY = 10;
    }
  }

  holdDataPdf() {
    const doc = new jsPDF();
    const title = 'Pramod Fashion Retail Limited';

    doc.addImage('assets/dummy/pos.png', 'PNG', 10, 10, 50, 15);

    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 15, 40);

    this.textY = 48;
    doc.setFontSize(10);
    debugger

    this.heldBills?.forEach((row) => {
      doc.text(`ORD: ${row?.id?.substring(0, 25) ?? '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`GSTIn: ${row?.currentCustomer?.gstin ? row?.currentCustomer?.gstin : '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`Customer Details`, 10, this.textY);
      this.textY += 5;
      doc.text(`${this.getCustomer(row?.currentCustomer?.account)}`, 10, this.textY);
      this.textY += 5;

      let addressLine1 = row?.currentCustomer?.address[0]?.address_line_1;
      let addressLine2 = row?.currentCustomer?.address[0]?.address_line_2;
      let fullAddress = `${addressLine1}, ${addressLine2}`;
      doc.text(fullAddress, 10, this.textY);

      this.textY += 10;

      doc.text(`City: ${row?.currentCustomer?.address[0]?.city?.city ?? '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`State: ${row?.currentCustomer?.address[0]?.state?.state ?? '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`Country: ${row?.currentCustomer?.address[0]?.country?.country_name ?? '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`Pincode: ${row?.currentCustomer?.address[0]?.pincode ?? '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`Email: ${row?.currentCustomer?.email ? row?.currentCustomer?.email : '--'}`, 10, this.textY);
      this.textY += 5;
      doc.text(`Mobile No: ${row?.currentCustomer?.mobile_no ?? '--'}`, 10, this.textY);
      this.textY += 10;

      doc.text('-------------------------------------------------------', 10, this.textY);
      this.textY += 5;
      doc.text('HSN', 10, this.textY);
      doc.text('Net Price', 25, this.textY);
      doc.text('Qty', 45, this.textY);
      doc.text('Value', 60, this.textY);
      this.textY += 5;
      doc.setFontSize(10);
      doc.setTextColor(33, 43, 54);
      doc.text('-------------------------------------------------------', 10, this.textY);
      this.textY += 5;

      row?.currentItems?.forEach((row) => {
        doc.text(row?.product?.hsncode?.hsn_code ? row?.product?.hsncode?.hsn_code.toString() : '--', 10, this.textY);
        doc.text(row.batch[0]?.selling_price_offline.toFixed(2).toString(), 25, this.textY);
        doc.text(row.quantity.toString(), 45, this.textY);
        doc.text((row.batch[0]?.selling_price_offline * row.quantity).toFixed(2).toString(), 60, this.textY);
        this.textY += 5;
        doc.text(row?.product?.title ? this.truncateWithEllipsis(row?.product?.title, 42) : '--', 10, this.textY);
        this.textY += 5;
      });

      doc.text('-------------------------------------------------------', 10, this.textY);
      this.textY += 5;

      doc.text(`Total Amount:`, 10, this.textY);
      doc.text(`${row?.totalAmt}`, 65, this.textY);
      this.textY += 5;
    });

    const newWindow = window.open('', '_blank');
    const pdfBlob = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);
    newWindow.location.href = blobUrl;
    this.holdBillActive = false;
  }

  holdAndPrint() {
    this.holdBill('print');
    if (this.holdBillActive) {
      setTimeout(() => { this.holdDataPdf() }, 1000);
    }
  }

  getPosCreditLimit() {
    if (this.isInternetConnection) {
      this.cartService.getPosCreditLimitByUserId(this.selectedCustomerUserId).subscribe((res: any) => {
        console.log(res);
        this.creditLimitList = res;
        this.creditLimit = res?.credit_Limit;
      })
    }
  }

  generatePdf(orderList, type?) {
    const doc = new jsPDF();
    const title = 'Pramod Fashion Retail Limited';

    doc.addImage('assets/dummy/pos.png', 'PNG', 10, 10, 50, 15);

    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 15, 40);

    this.textY = 48;

    doc.setFontSize(10);
    let companyData: any = localStorage.getItem('companyDetails');
    let companyDetails = JSON.parse(companyData);
    doc.text(`${companyDetails?.name ?? ''}`, 10, this.textY);
    this.textY += 5;
    doc.text(`${companyDetails?.address ?? ''}`, 10, this.textY);
    this.textY += 5;
    doc.text(`${companyDetails?.city?.city ?? ''}, ${companyDetails?.state?.state ?? ''}, ${companyDetails?.country
      ?.country_name ?? ''}, ${companyDetails?.pincode ?? ''}`, 10, this.textY);
    this.textY += 10;
    doc.text(`Customer Care: ${companyDetails?.phone ?? '--'}`, 10, this.textY);
    this.textY += 5;
    doc.text(`GSTIN: ${companyDetails?.gst ?? '--'}`, 10, this.textY);
    this.textY += 5;
    doc.text(`Place of Supply & State code: ${companyDetails?.state_code?.gst_code ?? ''} ${companyDetails?.state_code?.state_code ?? ''}`, 10, this.textY);

    this.textY += 10;
    doc.text('-------------------------------------------------------', 10, this.textY);

    this.textY += 10;

    // Customer Details
    doc.text(`Customer GSTIN: ${orderList?.customer?.gstin ? orderList?.customer?.gstin : 'URD'}`, 10, this.textY);

    this.textY += 5;
    doc.text(`Customer Details`, 10, this.textY);
    this.textY += 5;
    if (orderList?.customer?.account) {
      doc.text(`${orderList?.customer?.account ? this.getCustomer(orderList?.customer?.account) : ''}`, 10, this.textY);
      this.textY += 5;
    }
    const customerAddress = {
      address_line_1: orderList?.customer?.address[0]?.address_line_1 ?? '',
      address_line_2: orderList?.customer?.address[0]?.address_line_2 ?? '',
      city: orderList?.customer?.address[0]?.city?.city ?? '',
      state: orderList?.customer?.address[0]?.state?.state ?? '',
      country: orderList?.customer?.address[0]?.country?.country_name ?? '',
      pincode: orderList?.customer?.address[0]?.pincode ?? ''
    };

    let addressLine1 = customerAddress.address_line_1;
    let addressLine2 = customerAddress.address_line_2;
    let fullAddress = `${addressLine1}, ${addressLine2}`;
    doc.setFontSize(10);
    if (addressLine1 || addressLine2) {
      doc.text(addressLine1 || addressLine2 ? fullAddress : '', 10, this.textY);
      this.textY += 10;
    }
    doc.text(`City: ${!!customerAddress.city ? customerAddress.city : '--'}`, 10, this.textY);
    this.textY += 5;
    doc.text(`State: ${!!customerAddress.state ? customerAddress.state : '--'}`, 10, this.textY);
    this.textY += 5;
    doc.text(`Country: ${!!customerAddress.country ? customerAddress.country : '--'}`, 10, this.textY);
    this.textY += 5;
    doc.text(`Pincode: ${!!customerAddress.pincode ? customerAddress.pincode : '--'}`, 10, this.textY);
    this.textY += 10;
    doc.text('-------------------------------------------------------', 10, this.textY);

    this.textY += 10;
    doc.text(`TAX INVOICE`, 25, this.textY);
    this.textY += 10;
    if (type === 'posReturn') {
      doc.text(`POS Return No.:  ${orderList?.pos_return_no ?? ''}`, 10, this.textY);
    } else {
      doc.text(`Bill No.:  ${!!orderList?.bill_no ? orderList?.bill_no : '--'}`, 10, this.textY);
    }
    this.textY += 5;
    doc.text(`Date: ${this.formatDate(type === 'posReturn' ? orderList?.pos_bill?.created_date : orderList?.created_date)}   Time:${this.formatHours(type === 'posReturn' ? orderList?.pos_bill?.created_date : orderList?.created_date)}`, 10, this.textY);

    this.textY += 10;
    doc.text('-------------------------------------------------------', 10, this.textY);
    this.textY += 5;

    this.checkPageOverflow(doc);

    doc.text('HSN', 10, this.textY);
    doc.text('Net Price', 25, this.textY);
    doc.text('Qty', 45, this.textY);
    doc.text('Value', 60, this.textY);

    this.textY += 5;
    doc.setFontSize(10);
    doc.setTextColor(33, 43, 54);
    doc.text('-------------------------------------------------------', 10, this.textY);
    this.textY += 5;

    if (type === 'posReturn') {
      orderList?.pos_bill?.cart?.forEach((row) => {
        doc.text(row?.variant?.product?.hsncode?.hsn_code ? row?.variant?.product?.hsncode?.hsn_code.toString() : '--', 10, this.textY);
        doc.text(row.net_cost?.toString(), 25, this.textY);
        doc.text(row?.qty?.toString(), 45, this.textY);
        doc.text((row?.net_cost * row?.qty)?.toFixed(2)?.toString(), 60, this.textY);
        this.textY += 5;
        doc.text(row?.variant?.product?.title ? this.truncateWithEllipsis(row?.variant?.product?.title, 42) : '--', 10, this.textY);
        this.textY += 5;
      });
    } else {
      orderList?.cart?.forEach((row) => {
        if (type === 'Offline') {
          doc.text(row?.variant ? row?.variant?.toString() : '--', 10, this.textY);
        } else {
          doc.text(row?.variant?.product?.hsncode?.hsn_code ? row?.variant?.product?.hsncode?.hsn_code.toString() : '--', 10, this.textY);
        }
        doc.text(row?.net_cost?.toString(), 25, this.textY);
        doc.text(row?.qty?.toString(), 45, this.textY);
        doc.text((row?.net_cost * row?.qty)?.toFixed(2)?.toString(), 60, this.textY);
        this.textY += 5;
        if (type === 'Offline') {
          doc.text(row?.title ? this.truncateWithEllipsis(row?.title, 42) : '--', 10, this.textY);
        } else {
          doc.text(row?.variant?.product?.title ? this.truncateWithEllipsis(row?.variant?.product?.title, 42) : '--', 10, this.textY);
        }
        this.textY += 5;
      });
    }

    doc.text('-------------------------------------------------------', 10, this.textY);

    this.checkPageOverflow(doc);

    this.textY += 5;
    doc.text(`Item Count:`, 10, this.textY);
    doc.text(`${type === 'posReturn' ? orderList?.pos_bill?.get_item_count : orderList?.get_item_count}`, 65, this.textY);
    this.textY += 5;
    doc.text(`QTY:`, 10, this.textY);
    doc.text(`${orderList?.total_qty}`, 65, this.textY);
    this.textY += 5;
    doc.text(`SubTotal:`, 10, this.textY);
    doc.text(`${type === 'posReturn' ? orderList?.subtotal : orderList?.total_amount}`, 65, this.textY);
    this.textY += 5;
    doc.text(`Total discount:`, 10, this.textY);
    doc.text(`${orderList?.total_discount}`, 65, this.textY);
    this.textY += 5;
    doc.text(`Credit Redeem:`, 10, this.textY);
    if (type === 'Offline') {
      doc.text(`${orderList?.creditAvailable}`, 65, this.textY);
    } else {
      doc.text(`${type === 'posReturn' ? orderList?.pos_bill?.credit_redeem : orderList?.credit_redeem}`, 65, this.textY);
    }
    this.textY += 5;
    doc.text(`Total Tax Amount:`, 10, this.textY);
    doc.text(`${orderList?.total_tax}`, 65, this.textY);
    this.textY += 5;
    doc.text(`Total Amount:`, 10, this.textY);
    doc.text(`${type === 'posReturn' ? orderList?.pos_bill?.total_amount : orderList?.total_amount}`, 65, this.textY);
    this.textY += 5;
    if (type === 'upi') {
      doc.text(`Amount Paid By UPI:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending By UPI:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    } else if (type === 'bank') {
      doc.text(`Amount Paid By Bank:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending By Bank:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    } else if (type === 'cash' || type === 'Offline') {
      doc.text(`Amount Paid By Cash:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending By Cash:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    } else if (type === 'card') {
      doc.text(`Amount Paid By Card:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending By Card:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    } else if (type === 'payLater') {
      doc.text(`Amount Paid By PayLater:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending By PayLater:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    } else if (type === 'posReturn') {
      doc.text(`Amount Paid:`, 10, this.textY);
      doc.text(`${orderList?.pos_bill?.total_amount - orderList?.pos_bill?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending:`, 10, this.textY);
      doc.text(`${orderList?.pos_bill?.due_amount}`, 65, this.textY);
    }
    else {
      doc.text(`Amount Paid:`, 10, this.textY);
      doc.text(`${orderList?.total_amount - orderList?.due_amount}`, 65, this.textY);
      this.textY += 5;
      doc.text(`Amount Pending:`, 10, this.textY);
      doc.text(`${orderList?.due_amount}`, 65, this.textY);
    }

    this.textY += 5;
    doc.text('-------------------------------------------------------', 10, this.textY);

    this.checkPageOverflow(doc);

    if (type === 'Offline') {
    } else {
      this.textY += 5;
      doc.text(`GST bill details `, 10, this.textY);
      this.textY += 15;

      this.checkPageOverflow(doc);

      doc.text('-------------------------------------------------------', 10, this.textY);
      this.textY += 5;

      this.checkPageOverflow(doc);

      doc.text('Tax %', 10, this.textY);
      doc.text('Taxable', 25, this.textY);
      doc.text('CGST', 45, this.textY);
      doc.text('SGST', 60, this.textY);
      this.textY += 5;
      doc.text('Amount', 25, this.textY);

      this.textY += 5;
      doc.setFontSize(10);
      doc.setTextColor(33, 43, 54);
      doc.text('-------------------------------------------------------', 10, this.textY);

      this.textY += 5;

      if (type === 'posReturn') {
        orderList?.pos_bill?.tax_summary?.forEach((row) => {
          doc.text(row?.tax_percentage ? row?.tax_percentage.toString() : '0', 10, this.textY);
          doc.text(row?.taxable_amount?.toFixed(2).toString(), 25, this.textY);
          doc.text(row?.cgst?.toFixed(2)?.toString(), 45, this.textY);
          doc.text(row?.sgst?.toFixed(2)?.toString(), 60, this.textY);
          this.textY += 10;

          this.totalTaxableAmount += row.taxable_amount;
          this.totalCGST += row.cgst;
          this.totalSGST += row.sgst;
        });
      } else {
        orderList?.tax_summary?.forEach((row) => {
          doc.text(row?.tax_percentage ? row?.tax_percentage.toString() : '0', 10, this.textY);
          doc.text(row?.taxable_amount?.toFixed(2).toString(), 25, this.textY);
          doc.text(row?.cgst?.toFixed(2)?.toString(), 45, this.textY);
          doc.text(row?.sgst?.toFixed(2)?.toString(), 60, this.textY);
          this.textY += 10;

          this.totalTaxableAmount += row.taxable_amount;
          this.totalCGST += row.cgst;
          this.totalSGST += row.sgst;
        });
      }

      doc.text('Total', 10, this.textY);
      doc.text(`${this.totalTaxableAmount.toFixed(2)}`, 25, this.textY);
      doc.text(`${this.totalCGST.toFixed(2)}`, 45, this.textY);
      doc.text(`${this.totalSGST.toFixed(2)}`, 60, this.textY);
    }
    this.checkPageOverflow(doc);

    this.textY += 10;
    doc.text(`*  Thank You for Shopping with us  *`, 10, this.textY);
    this.textY += 5;
    doc.text(`Website: https://pramodfashion.com/`, 10, this.textY);
    this.textY += 5;
    doc.text(`Customer Care email: ${this.companyDetails?.email}`, 10, this.textY);

    const newWindow = window.open('', '_blank');

    const pdfBlob = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);

    newWindow.location.href = blobUrl;
  }

  bankPaymentGenerateOrder(type: any) {
    this.playBeepSound();
    if (this.bankPaymentMethodForm.invalid) {
      // console.log('invalid');
      Object.keys(this.bankPaymentMethodForm.controls).forEach(key => {
        this.bankPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = this.setItemsArr();
        let bank_data = {
          "account_no": Number(this.account_no.value),
          "payment_account": Number(this.payment_account_bank.value)
        };
        // console.log(cartData, 'cash', bank_data);
        const formData = new FormData();
        formData.append('customer', JSON.stringify(this.currentCustomer.id));
        formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
        formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
        formData.append('payment_mode', 'Bank');
        formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
        formData.append('cart_data', JSON.stringify(cartData));
        formData.append('card_detail', '');
        formData.append('Multipay', '');
        formData.append('PayLatter', '');
        formData.append('bank_detail', JSON.stringify(bank_data));
        formData.append('upi_detail', '');

        this.cartService
          .generateOrderNew(formData)
          .subscribe({
            next: (response: any) => {
              // console.log('response order', response);
              if (response.isSuccess) {
                this.customerAutoCompleteControl.setValue('');
                this.saleInvoice.setValue('');
                this.discardCurrentBill();
                this.toastr.success(response.msg)
                if (type == 'print') {
                  setTimeout(() => {
                    this.generatePdf(response?.order, 'bank');
                  }, 1000);
                  // window.open(`/pos/invoice/${response?.order?.id}`, '_blank');
                  var clicking = <HTMLElement>document.querySelector('.bankPrintModalClose');
                  clicking.click();
                } else {
                  var clicking = <HTMLElement>document.querySelector('.bankModalClose');
                  clicking.click();
                }
                this.bankPaymentMethodForm.reset();
                this.cartService.getPOSOrders().subscribe({
                  next: (response) => {
                    // console.log(response, 'pos orders')
                    this.posOrders = response;
                  },
                  error: (error) => {
                    // console.log('pos orders', error);
                  }
                })
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

    } else {
      this.toastr.error('Please Add Items To Cart');
    }


  }

  upiPaymentGenerateOrder(type: any) {
    this.playBeepSound()
    if (this.upiPaymentMethodForm.invalid) {
      // console.log('invalid');
      Object.keys(this.upiPaymentMethodForm.controls).forEach(key => {
        this.upiPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = this.setItemsArr();
        let upi_data = {
          "upi_no": Number(this.upi_id.value),
          "payment_account": Number(this.payment_account_upi.value)
        };



        // console.log(cartData, 'upi', upi_data);
        const formData = new FormData();
        formData.append('customer', JSON.stringify(this.currentCustomer.id));
        formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
        formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
        formData.append('payment_mode', 'UPI');
        formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
        formData.append('cart_data', JSON.stringify(cartData));
        formData.append('card_detail', '');
        formData.append('Multipay', '');
        formData.append('PayLatter', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', JSON.stringify(upi_data));

        this.cartService
          .generateOrderNew(formData)
          .subscribe({
            next: (response: any) => {
              // console.log('response order', response);
              if (response.isSuccess) {
                this.customerAutoCompleteControl.setValue('');
                this.saleInvoice.setValue('');
                this.discardCurrentBill();
                this.toastr.success(response.msg)
                if (type == 'print') {
                  setTimeout(() => {
                    this.generatePdf(response?.order, 'upi');
                  }, 1000);
                  // window.open(`/pos/invoice/${response?.order?.id}`, '_blank');
                  var clicking = <HTMLElement>document.querySelector('.upiPrintModalClose');
                  clicking.click();
                } else {
                  var clicking = <HTMLElement>document.querySelector('.upiModalClose');
                  clicking.click();
                }
                this.upiPaymentMethodForm.reset();
                this.cartService.getPOSOrders().subscribe({
                  next: (response) => {
                    // console.log(response, 'pos orders')
                    this.posOrders = response;
                  },
                  error: (error) => {
                    // console.log('pos orders', error);
                  }
                })
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

    } else {
      this.toastr.error('Please Add Items To Cart');
    }


  }

  cashPaymentGenerateOrder(type: any) {
    this.playBeepSound();
    if (this.currentItems.length > 0) {
      if (this.currentCustomer === null || this.currentCustomer === undefined) {
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = this.setItemsArr();

        const order = {
          cart: cartData,
          customer: this.currentCustomer,
          created_date: new Date().toISOString(),
          due_amount: JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())),
          total_amount: JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())),
          total_discount: '0',
          total_qty: this.totalCartQuantity(),
          total_tax: JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())),
          get_item_count: this.totalCartProductCount(),
          subtotal: this.calculateSubTotal(),
          creditAvailable: this.selectedAccountCreditData ? this.selectedAccountCreditData[0]?.pending_amount : 0,
          bill_no: ''
        }
        // console.log(cartData, 'cash');
        const formData = new FormData();
        formData.append('customer', JSON.stringify(this.currentCustomer.id));
        formData.append('additional_charge', JSON.stringify(this.getNumberInDecimalPlaces(this.currentTotalAdditionalCharges().toString())));
        formData.append('total_amount', JSON.stringify(this.getNumberInDecimalPlaces(this.finalAmount().toString())));
        formData.append('payment_mode', 'Cash');
        formData.append('total_tax', JSON.stringify(this.getNumberInDecimalPlaces(this.totalTaxAmount().toString())));
        formData.append('cart_data', JSON.stringify(cartData));
        formData.append('total_qty', this.totalCartQuantity());
        formData.append('total_discount', '0');
        formData.append('subtotal', this.calculateSubTotal());
        formData.append('Roundoff', this.getRoundOff());
        formData.append('card_detail', '');
        formData.append('Multipay', '');
        formData.append('PayLatter', '');
        formData.append('bank_detail', '');
        formData.append('upi_detail', '');

        if (this.isInternetConnection) {
          this.cartService
            .generateOrderNew(formData)
            .subscribe({
              next: (response: any) => {
                // console.log('response order', response);
                if (response.isSuccess) {
                  this.customerAutoCompleteControl.setValue('');
                  this.saleInvoice.setValue('');
                  this.discardCurrentBill();
                  this.tenderedAmount = 0;
                  this.toastr.success(response.msg)
                  this.orderDetails = response?.order;
                  if (type == 'print') {
                    // window.open(`/pos/invoice/${response?.order?.id}`, '_blank');
                    // this.generatePdf();
                    // const newWindow = window.open('', '_blank');
                    setTimeout(() => {
                      this.generatePdf(response?.order, 'cash');
                    }, 1000);
                    var clicking = <HTMLElement>document.querySelector('.cashPrintModalClose');
                    clicking.click();
                  } else {
                    var clicking = <HTMLElement>document.querySelector('.cashModalClose');
                    clicking.click();
                  }

                  this.cartService.getPOSOrders().subscribe({
                    next: (response) => {
                      // console.log(response, 'pos orders')
                      this.posOrders = response;
                    },
                    error: (error) => {
                      // console.log('pos orders', error);
                    }
                  })
                } else {
                  this.toastr.error(response.msg);
                }
              },
              error: (error) => {
                // console.log(error)
                this.toastr.error(error.message);
              },
            });
        } else {
          setTimeout(() => {
            this.customerAutoCompleteControl.setValue('');
            this.saleInvoice.setValue('');
            this.discardCurrentBill();
            this.tenderedAmount = 0;
            this.generatePdf(order, 'Offline');
          }, 1000);
          var clicking = <HTMLElement>document.querySelector('.cashPrintModalClose');
          clicking.click();
        }
      }
    } else {
      this.toastr.error('Please Add Items To Cart');
    }
  }

  setItemsArr() {
    let cart = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": element.batch[0].discount && element.batch[0].discount.length !== 0 ? element.batch[0].discount : 0,
        "add_discount": element.batch[0].additional_discount,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": Number(this.getNetAmount2(element?.batch[0], element?.quantity)).toFixed(2),
        "tax_amount": Number((this.getProductTax(element.batch[0])) * element.quantity).toFixed(2),
        "remarks": element.notes,
        "tax_percentage": element?.batch[0]?.sale_tax || 0,
        "title": element?.product?.title
      };
      cart.push(item);
    }
    return cart;
  }

  totalCartQuantity() {
    const totalQuantity = this.currentItems.reduce((sum, item) => sum + item.quantity, 0);
    return totalQuantity;
  }

  totalCartProductCount() {
    const totalCount = this.currentItems.length;
    return totalCount;
  }

  getDateForOrders(timestamp: any) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Note: Months are zero-based, so we add 1 to get the correct month number.
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return formattedDate;
  }

  getNumberInDecimalPlaces(stringValue: any) {
    const floatValue = parseFloat(stringValue);
    const roundedNumber = Math.round(floatValue * 100) / 100;
    return roundedNumber;
  }

  // Function to play the beep sound
  playBeepSound(type?): void {
    if (this.currentItems.length === 0 && type === 'btn') {
      this.toastr.error("Please Items To Cart!");
      return;
    }
    if ((this.currentCustomer === null || this.currentCustomer === undefined) && type === 'btn') {
      this.toastr.error('Please Select/Add a Customer!');
      return;
    }

    if (type === 'sale') {
      if (!this.saleInvoice.value) {
        return;
      }
    }
    const beepSound = new Audio('assets/dummy/beep.mp3');
    beepSound.play();
  }

  // 20-02
  expenseList: any;
  getExpense() {
    this.cartService.getPosExpenseVoucher().subscribe((res: any) => {
      this.expenseList = res;
    })
  }
  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  recieptList: any;
  getReciept() {
    this.cartService.getPosRecieptVoucher().subscribe((res: any) => {
      this.recieptList = res;
    })
  }
  paymentList: any;
  getPayment() {
    this.cartService.getPosPaymentVoucher().subscribe((res: any) => {
      this.paymentList = res;
    })
  }
  creditNoteList: any;
  getCreditNote() {
    this.cartService.getPosCreditNoteList().subscribe(res => {
      this.creditNoteList = res;
      console.log(res);
    })
  }

  redeemCredit() {
    this.cartProductTotalAmout = this.finalAmount();
    this.creditRedeemTotalAmount = this.finalAmount();
    this.cartService.getPosCreditNoteByAccountId(this.selectedCustomerAccountId).subscribe((res) => {
      this.selectedAccountCreditData = res;
      this.redeemCreditControl.setValue(`${res[0]?.credit_note_no} - ${res[0]?.total ?? 0}`);
      console.log(res);
    })
  }

  discount: any[] = []
  selectBtch: any[] = [];
  selectedBatch(val: any, i: any) {
    console.log(val);
    console.warn(this.currentBatch);
    //   this.discount.push(val);
    //  console.log( this.discount,'discount selectedBatch');
    this.selectBtch.push(val)
    // this.allDiscount()

  }

  discountTyp: any[] = [];
  isDiscountSelect: boolean[] = [];
  isInvoiceFree: boolean[] = [];
  isFreePriceRange: boolean[] = [];
  isQtyPerQty: boolean[] = [];
  isQtyPerPercentage: boolean[] = [];
  discountInvoice: any;
  productSelected: any;
  freePriceProductSelected: any;
  compulsoryDiscounts: any
  allDiscount() {
    console.log(this.discount, 'discount');
    this.discount.forEach((batch: any, i: number) => {
      if (batch.discount.length > 0) {
        batch?.discount.forEach((discount: any) => {
          if (!this.discountTyp[i]) {
            this.discountTyp[i] = [];
          }
          this.discountTyp[i].push(discount);
          // console.warn(this.discountTyp[i], 'discount selected based on index');
          // auto selected data of isComuplsory
          this.compulsoryDiscounts = this.discountTyp[i].filter(element => element.is_compulsory);
          console.log(this.compulsoryDiscounts);
          // this.discountTyp[i].forEach((element, j) => {
          //   if (element?.is_compulsory) {
          //     console.log(element, 'element');
          //     if (element?.discount_offer_type == 'Price-range-free-item') {
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Free Item';
          //       if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(element.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(element.end_price)) {
          //       this.isFreePriceRange[i]=true;
          //       let product1 = {
          //         product: {
          //           ...element?.free_items,
          //           id: element?.free_items?.id || 0,
          //           title: element?.free_items?.title || '',
          //         },
          //         batch: [
          //           {
          //             mrp: 0,
          //             cost_price: 0,
          //             selling_price_offline: 0,
          //             is_active: false,
          //             additional_discount: 0,
          //             discount: [
          //               {
          //                 discount_offer_type: "",
          //                 discount_parent_id: "",
          //                 discount_type: "",
          //                 end_price: "",
          //                 flat_discount: "",
          //                 id: "",
          //                 is_compulsory: false,
          //                 name: "",
          //                 start_price: ""
          //               }
          //             ]
          //           }
          //         ],
          //         variant_name: '',
          //         sku: '',
          //         quantity: 1,
          //         notes: '',
          //         discount: 0
          //       };
          //       this.freePriceProductSelected=product1;
          //     }
          //     } else if (element?.discount_offer_type == 'Price-range-discount') {
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Discount';
          //       if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(element.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(element.end_price)) {
          //         if (element?.discount_type == '%') {
          //           // console.log(this.currentItems[i]);
          //           let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(element?.flat_discount) / 100;
          //           // console.log(flatDisc);
          //           let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
          //           // console.warn(totalFlatDiscount);
          //           this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          //           this.currentItems[i].discount = flatDisc;
          //           // console.log(this.currentItems, 'current items');
          //         } else {
          //           let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(element?.flat_discount);
          //           // console.warn(totalFlatDiscount);
          //           this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          //           this.currentItems[i].discount = parseInt(element?.flat_discount);
          //           // console.log(this.currentItems, 'current items');
          //         }
          //       }
          //     } else if (element?.discount_offer_type == 'Free-item-on-invoice') {
          //       if (this.finalAmount() >= parseInt(element?.invoice_amount)) {
          //         this.isInvoiceFree[i]=true;
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Free Item Invoice';
          //       // console.warn(element);
          //       let product1 = {
          //         product: {
          //           ...element?.free_items,
          //           id: element?.free_items?.id || 0,
          //           title: element?.free_items?.title || '',
          //         },
          //         batch: [
          //           {
          //             mrp: 0,
          //             cost_price: 0,
          //             selling_price_offline: 0,
          //             additional_discount: 0,
          //             discount: [
          //               {
          //                 discount_offer_type: "",
          //                 discount_parent_id: "",
          //                 discount_type: "",
          //                 end_price: "",
          //                 flat_discount: "",
          //                 id: "",
          //                 is_compulsory: false,
          //                 name: "",
          //                 start_price: ""
          //               }
          //             ]
          //           }
          //         ],
          //         variant_name: '',
          //         sku: '',
          //         quantity: 1,
          //         notes: '',
          //         discount: 0
          //       };
          //     this.productSelected=product1;
          //       }
          //     } else if (element?.discount_offer_type == 'Discount-on-Invoice') {
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Discount Invoice';
          //       if (element?.discount_type == '%') {
          //         let flatDisc = this.finalAmount() * parseInt(element?.flat_discount) / 100;
          //         // console.log(flatDisc);
          //         let totalFlatDiscount = this.finalAmount() - flatDisc;
          //         // console.warn(totalFlatDiscount);
          //         this.discountInvoice = flatDisc;
          //       } else {
          //         let totalFlatDiscount = this.finalAmount() - parseInt(element?.flat_discount);
          //         // console.warn(totalFlatDiscount);
          //         this.discountInvoice = element?.flat_discount;
          //       }
          //     } else if (element?.discount_offer_type == 'Quantity-per-percentage') {
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Qty % Discount';
          //       this.isQtyPerPercentage[i]=true
          //       if (element?.discount_type == '%') {
          //         let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(element?.flat_discount) / 100;
          //         // console.log(flatDisc);
          //         let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
          //         // console.warn(totalFlatDiscount);
          //         this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          //         // this.currentItems[i].discount = flatDisc;
          //         // console.log(this.currentItems, 'current items');
          //       } else {
          //         let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(element?.flat_discount);
          //         // console.warn(totalFlatDiscount);
          //         this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          //         this.currentItems[i].discount = parseInt(element?.flat_discount);
          //         // console.log(this.currentItems, 'current items else');
          //       }
          //     } else if (element?.discount_offer_type == 'Quantity-per-quantity') {
          //       this.isDiscountSelect[i] = true;
          //       this.selectedDiscount[i] = 'Qty Per Qty';
          //       // console.warn(element);
          //       // console.warn(this.currentItems[i]?.quantity);
          //       if (this.currentItems[i]?.quantity >= parseInt(element?.purchase_qty)) {
          //         this.isQtyPerQty[i]=true;
          //         // this.cartService.increaseCurrent(this.currentItems[i]);
          //         // console.log(parseInt(element?.purchase_qty));
          //       }
          //     }

          //   }
          // });
        });
      } else {
        // if (this.discount.length - 1 == i) {
        //   this.toastr.error('Discount Not Available');
        // }
      }
      if (this.discountTyp[i]) {
        if (this.compulsoryDiscounts) {
          if (this.discount.length - 1 == i) {
            const lastCompulsoryDiscount = this.compulsoryDiscounts[this.compulsoryDiscounts.length - 1];
            // console.log(lastCompulsoryDiscount);
            if (lastCompulsoryDiscount?.is_compulsory) {
              // console.log(lastCompulsoryDiscount, 'lastCompulsoryDiscount');
              if (lastCompulsoryDiscount?.discount_offer_type == 'Price-range-free-item') {
                if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(lastCompulsoryDiscount.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(lastCompulsoryDiscount.end_price)) {
                  this.isDiscountSelect[i] = true;
                  this.selectedDiscount[i] = 'Free Item';
                  this.isFreePriceRange[i] = true;
                  let product1 = {
                    product: {
                      ...lastCompulsoryDiscount?.free_items,
                      id: lastCompulsoryDiscount?.free_items?.id || 0,
                      title: lastCompulsoryDiscount?.free_items?.title || '',
                      mrp: lastCompulsoryDiscount?.free_items.mrp
                    },
                    batch: [
                      {
                        id: 0,
                        mrp: 0,
                        cost_price: 0,
                        selling_price_offline: 0,
                        is_active: false,
                        additional_discount: 0,
                        typeBatch: 'Free Item',
                        discount: [
                          {
                            discount_offer_type: "",
                            discount_parent_id: "",
                            discount_type: "",
                            end_price: "",
                            flat_discount: "",
                            id: "",
                            is_compulsory: false,
                            name: "",
                            start_price: ""
                          }
                        ]
                      }
                    ],
                    type: 'Free Item',
                    variant_name: '',
                    sku: '',
                    id: 0,
                    quantity: 1,
                    notes: '',
                    discount: 0
                  };
                  this.freePriceProductSelected = product1;
                  this.discount.push(this.freePriceProductSelected?.batch[0]);
                  console.log(this.discount, 'discount');
                  this.addToCurrent(this.freePriceProductSelected);
                  this.currentItems = this.cartService.getCurrentItems();
                  console.log(this.currentItems, 'current items');
                }
              } else if (lastCompulsoryDiscount?.discount_offer_type == 'Price-range-discount') {
                if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(lastCompulsoryDiscount.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(lastCompulsoryDiscount.end_price)) {
                  this.isDiscountSelect[i] = true;
                  this.selectedDiscount[i] = 'Discount';
                  if (lastCompulsoryDiscount?.discount_type == '%') {
                    // console.log(this.currentItems[i]);
                    let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(lastCompulsoryDiscount?.flat_discount) / 100;
                    // console.log(flatDisc);
                    let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
                    // console.warn(totalFlatDiscount);
                    this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
                    this.currentItems[i].discount = flatDisc;
                    // console.log(this.currentItems, 'current items');
                  } else {
                    let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(lastCompulsoryDiscount?.flat_discount);
                    // console.warn(totalFlatDiscount);
                    this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
                    this.currentItems[i].discount = parseInt(lastCompulsoryDiscount?.flat_discount);
                    // console.log(this.currentItems, 'current items');
                  }
                }
              } else if (lastCompulsoryDiscount?.discount_offer_type == 'Free-item-on-invoice') {
                if (this.finalAmount() >= parseInt(lastCompulsoryDiscount?.invoice_amount)) {
                  this.isInvoiceFree[i] = true;
                  this.isDiscountSelect[i] = true;
                  this.selectedDiscount[i] = 'Free Item Invoice';
                  console.log(this.selectedDiscount[i]);
                  this.currentItems = this.cartService.getCurrentItems();
                  console.log(this.currentItems, 'current items');
                  console.log(this.discount, 'discount');
                  // console.warn(lastCompulsoryDiscount);
                  let product1 = {
                    product: {
                      ...lastCompulsoryDiscount?.free_items,
                      id: lastCompulsoryDiscount?.free_items?.id || 0,
                      title: lastCompulsoryDiscount?.free_items?.title || '',
                      mrp: lastCompulsoryDiscount?.free_items.mrp
                    },
                    batch: [
                      {
                        id: 0,
                        mrp: 0,
                        cost_price: 0,
                        selling_price_offline: 0,
                        additional_discount: 0,
                        typeBatch: 'Free Item Invoice',
                        discount: [
                          {
                            discount_offer_type: "",
                            discount_parent_id: "",
                            discount_type: "",
                            end_price: "",
                            flat_discount: "",
                            id: 0,
                            is_compulsory: false,
                            name: "",
                            start_price: ""
                          }
                        ]
                      }
                    ],
                    type: 'Free Item Invoice',
                    variant_name: '',
                    sku: '',
                    quantity: 1,
                    id: 0,
                    notes: '',
                    discount: 0
                  };
                  this.productSelected = product1;
                  // this.selectedDiscount[i+1] = 'Free Item'; 
                  this.addToCurrent(this.productSelected);
                  this.currentItems = this.cartService.getCurrentItems();
                  console.log(this.currentItems, 'current items');
                  this.discount.push(this.productSelected?.batch[0]);
                  console.log(this.discount, 'discount');
                }
              } else if (lastCompulsoryDiscount?.discount_offer_type == 'Discount-on-Invoice') {
                this.isDiscountSelect[i] = true;
                this.selectedDiscount[i] = 'Discount Invoice';
                if (lastCompulsoryDiscount?.discount_type == '%') {
                  let flatDisc = this.finalAmount() * parseInt(lastCompulsoryDiscount?.flat_discount) / 100;
                  // console.log(flatDisc);
                  let totalFlatDiscount = this.finalAmount() - flatDisc;
                  console.warn(totalFlatDiscount);
                  this.discountInvoice = flatDisc;
                  this.currentItems[i].type = 'Discount Invoice';
                } else {
                  let totalFlatDiscount = this.finalAmount() - parseInt(lastCompulsoryDiscount?.flat_discount);
                  console.warn(totalFlatDiscount);
                  this.discountInvoice = parseFloat(lastCompulsoryDiscount?.flat_discount);
                  this.currentItems[i].type = 'Discount Invoice';
                }
              } else if (lastCompulsoryDiscount?.discount_offer_type == 'Quantity-per-percentage') {
                this.isDiscountSelect[i] = true;
                this.selectedDiscount[i] = 'Qty % Discount';
                this.isQtyPerPercentage[i] = true;
                this.discountTypeSelect.push(lastCompulsoryDiscount);
                if (lastCompulsoryDiscount?.discount_type == '%') {
                  let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(lastCompulsoryDiscount?.flat_discount) / 100;
                  console.log(flatDisc);
                  let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
                  console.warn(totalFlatDiscount);
                  this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
                  this.currentItems[i].discount = flatDisc;
                  console.log(this.currentItems, 'current items');
                } else {
                  let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(lastCompulsoryDiscount?.flat_discount);
                  console.warn(totalFlatDiscount);
                  this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
                  this.currentItems[i].discount = parseInt(lastCompulsoryDiscount?.flat_discount);
                  console.log(this.currentItems, 'current items else');
                }
              } else if (lastCompulsoryDiscount?.discount_offer_type == 'Quantity-per-quantity') {
                this.isDiscountSelect[i] = true;
                this.selectedDiscount[i] = 'Qty Per Qty';
                this.discountTypeSelect.push(lastCompulsoryDiscount);
                console.warn(lastCompulsoryDiscount);
                console.warn(this.currentItems[i]?.quantity);
                if (this.currentItems[i]?.quantity >= parseInt(lastCompulsoryDiscount?.purchase_qty)) {
                  this.isQtyPerQty[i] = true;
                  this.cartService.increaseCurrent(this.currentItems[i]);
                  this.currentItems[i].type = 'Qty Per Qty';
                  console.log(parseInt(lastCompulsoryDiscount?.purchase_qty));
                }
              }
            }
          }
        }
      } else {
        // this.toastr.error('Discount Not Available');
      }
    });

  }
  isQPQ: boolean[] = [];
  isQPP: boolean[] = [];
  discountQty(i) {
    console.log(this.discountTyp);
    console.warn(this.discountTyp[i], 'based on index discountType');
    console.log(this.selectedDiscount[i]);
    console.log(this.currentItems[i], 'curent item');
    console.log(this.discountTypeSelect, 'discount type');
    console.log(this.discountTypeSelect[i], 'discount type');
    if (this.selectedDiscount) {
      // if (this.selectedDiscount == this.discountTyp[i]?.discount_offer_type) {
      if (this.selectedDiscount[i] == 'Qty Per Qty') {
        console.warn(this.currentItems[i]?.quantity);
        if (this.currentItems[i]?.quantity >= parseInt(this.discountTypeSelect[i]?.purchase_qty)) {
          this.cartService.increaseCurrent(this.currentItems[i]);
          console.log(parseInt(this.discountTypeSelect[i]?.purchase_qty));
        }
      } else if (this.selectedDiscount[i] == 'Qty % Discount') {
        if (this.discountTypeSelect[i]?.discount_type == '%') {
          console.log(this.currentItems[i]);
          let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(this.discountTypeSelect[i]?.flat_discount) / 100;
          console.log(flatDisc);
          this.flatDiscount[i] = flatDisc;
          let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
          console.warn(totalFlatDiscount);
          this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          this.currentItems[i].discount = flatDisc;
          console.log(this.currentItems, 'current items');
        } else {
          let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(this.discountTypeSelect[i]?.flat_discount);
          console.warn(totalFlatDiscount);
          this.flatDiscount[i] = this.discountTypeSelect[i]?.flat_discount;
          this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          // let flatPer=(parseInt(this.discountTypeSelect[i]?.flat_discount)/this.currentItems[i].batch[0].selling_price_offline)*100;
          this.currentItems[i].discount = this.discountTypeSelect[i]?.flat_discount;;
          console.log(this.currentItems, 'current items');
        }
      }
      // }
    }

  }
  //remove qty
  RemoveDiscountByQty(i) {
    console.log(this.discountTyp);
    console.warn(this.discountTyp[i], 'based on index discountType');
    console.log(this.selectedDiscount[i]);
    console.log(this.currentItems[i], 'curent item');
    console.log(this.discountTypeSelect, 'discount type');
    console.log(this.discountTypeSelect[i], 'discount type');

    if (this.selectedDiscount) {
      if (this.selectedDiscount[i].quantity > 1) {
        if (this.selectedDiscount[i] == 'Qty Per Qty') {
          console.warn(this.currentItems[i]?.quantity);
          // if (this.currentItems[i]?.quantity >= parseInt(this.discountTypeSelect[i]?.purchase_qty)) {
          //   this.cartService.increaseCurrent(this.currentItems[i]);
          //   console.log(parseInt(this.discountTypeSelect[i]?.purchase_qty));
          // }
        } else if (this.selectedDiscount[i] == 'Qty % Discount') {
          if (this.discountTypeSelect[i]?.discount_type == '%') {
            let totalPrice = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
            this.currentItems[i].batch[0].selling_price_offline = totalPrice;
            console.log(totalPrice);
            let flatdis = this.currentItems[i].discount * 100 / this.currentItems[i].batch[0].selling_price_offline;
            console.log(flatdis);
            this.currentItems[i].discount = flatdis;
            console.log(this.currentItems, 'current items');
          } else {
            let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline + this.currentItems[i].discount;
            this.flatDiscount[i] = this.discountTypeSelect[i]?.flat_discount;
            this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
            this.currentItems[i].discount = this.discountTypeSelect[i]?.flat_discount;;
            console.log(this.currentItems, 'current items');
          }
        }
      }
    }

  }

  flatDiscount: any[] = [];
  selectedDiscount: any[] = [];
  discountTypeSelect: any[] = [];
  selectDiscount(val, i) {
    this.isDiscountSelect[i] = true;
    this.closeModalDiscount(i);
    console.warn(val, 'selected discount' + i);
    if (val?.discount_offer_type == 'Price-range-free-item') {
      this.selectedDiscount[i] = 'Free Item';
      if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(val.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(val.end_price)) {
        //remove mathing item from array
        this.currentItems.forEach((dis: any) => {
          console.log(dis);
          if (dis.id == 0) {
            if (dis.type == 'Free Item Invoice') {
              // this.currentItems = this.currentItems.filter(d => d.id !== 0);
              this.removeOptionCurrent(dis)
              console.log(this.currentItems, 'current item');
            }
          }
          if (dis.discount > 0) {
            this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
            this.currentItems[i].discount = 0;
          }
          if (dis.quantity > 1) {
            if (dis.type == 'Qty Per Qty') {
              this.currentItems[i].quantity = 1;
            }
          }
          if (dis.type = 'Discount Invoice') {
            this.discountInvoice = 0;
          }
          if (this.discountTypeSelect[i]) {
            this.discountTypeSelect.splice(i, 1);
          }
          //remove free item batch
          dis.batch.forEach((batch) => {
            if (batch.typeBatch == 'Free Item Invoice') {
              this.removeOptionCurrent(dis)
            }
          });
        });
        //remove discount
        this.discount.forEach((res: any, i: any) => {
          if (res.id == 0) {
            if (res.typeBatch == 'Free Item Invoice') {
              this.discount.splice(i, 1);
            }
          }
        });
        //end discount
        //add into list
        console.warn(val);
        let product1 = {
          product: {
            ...val?.free_items,
            id: val?.free_items?.id || 0,
            title: val?.free_items?.title || '',
            mrp: val?.free_items?.mrp
          },
          batch: [
            {
              id: 0,
              mrp: 0,
              cost_price: 0,
              selling_price_offline: 0,
              is_active: false,
              additional_discount: 0,
              typeBatch: 'Free Item',
              discount: [
                {
                  discount_offer_type: "",
                  discount_parent_id: "",
                  discount_type: "",
                  end_price: "",
                  flat_discount: "",
                  id: 0,
                  is_compulsory: false,
                  name: "",
                  start_price: ""
                }
              ]
            }
          ],
          variant_name: '',
          sku: '',
          type: 'Free Item',
          quantity: 1,
          id: 0,
          notes: '',
          discount: 0
        };
        this.addToCurrent(product1);
        this.currentItems = this.cartService.getCurrentItems();
        this.discount.push(product1?.batch[0]);
        console.log(this.discount, 'discount');
        console.log(this.currentItems[i])
        console.log(this.currentItems, 'current items')
      }
    } else if (val?.discount_offer_type == 'Price-range-discount') {
      this.selectedDiscount[i] = 'Discount';
      if (this.currentItems[i]?.batch[0]?.selling_price_offline >= parseInt(val.start_price) && this.currentItems[i]?.batch[0]?.selling_price_offline <= parseInt(val.end_price)) {
        if (val?.discount_type == '%') {
          //remove mathing item from array
          this.currentItems.forEach((dis: any) => {
            console.log(dis);
            if (dis.id == 0) {
              if (dis.type == 'Free Item') {
                // this.currentItems = this.currentItems.filter(d => d.id !== 0);
                this.removeOptionCurrent(dis)
                console.log(this.currentItems, 'current item');
              }
            }
            if (dis.discount > 0) {
              this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
              this.currentItems[i].discount = 0;
            }
            if (dis.quantity > 1) {
              if (dis.type == 'Qty Per Qty') {
                this.currentItems[i].quantity = 1;
              }
            }
            if (dis.type = 'Discount Invoice') {
              this.discountInvoice = 0;
            }
            if (this.discountTypeSelect[i]) {
              this.discountTypeSelect.splice(i, 1);
            }
            //remove free item batch
            dis.batch.forEach((batch) => {
              if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
                this.removeOptionCurrent(dis)
              }
            });
          });
          //remove discount
          this.discount.forEach((res: any, i: any) => {
            if (res.id == 0) {
              if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
                this.discount.splice(i, 1);
              }
            }
          });
          console.warn(this.discount, 'discount after remove');
          //end remove
          //add
          console.log(this.currentItems[i]);
          let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(val?.flat_discount) / 100;
          console.log(flatDisc);
          let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
          console.warn(totalFlatDiscount);
          this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          this.currentItems[i].discount = flatDisc;
          console.log(this.currentItems, 'current items');
        } else {
          //remove mathing item from array
          this.currentItems.forEach((dis: any) => {
            console.log(dis);
            if (dis.id == 0) {
              if (dis.type == 'Free Item')
                // this.currentItems = this.currentItems.filter(d => d.id !== 0);
                this.removeOptionCurrent(dis)
              console.log(this.currentItems, 'current item');
            }
            if (dis.discount > 0) {
              this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
              this.currentItems[i].discount = 0;
            }
            if (dis.quantity > 1) {
              if (dis.type == 'Qty Per Qty') {
                this.currentItems[i].quantity = 1;
              }
            }
            if (dis.type = 'Discount Invoice') {
              this.discountInvoice = 0;
            }
            //remove free item batch
            dis.batch.forEach((batch) => {
              if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
                this.removeOptionCurrent(dis)
              }
            });
          });
          //remove discount
          this.discount.forEach((res: any, i: any) => {
            if (res.id == 0) {
              if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
                this.discount.splice(i, 1);
              }
            }
          });
          console.warn(this.discount, 'discount after remove');
          //end remove
          //add
          let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(val?.flat_discount);
          console.warn(totalFlatDiscount);
          this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
          this.currentItems[i].discount = parseInt(val?.flat_discount);
          console.log(this.currentItems, 'current items');

        }
      }
    } else if (val?.discount_offer_type == 'Free-item-on-invoice') {
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Free Item Invoice';
      if (this.finalAmount() >= parseInt(val?.invoice_amount)) {
        //remove mathing item from array
        this.currentItems.forEach((dis: any) => {
          console.log(dis);
          if (dis.id == 0) {
            if (dis.type == 'Free Item') {
              // this.currentItems = this.currentItems.filter(d => d.id !== 0);
              this.removeOptionCurrent(dis)
              console.log(this.currentItems, 'current item');
            }
          }
          if (dis.discount > 0) {
            this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
            this.currentItems[i].discount = 0;
          }
          if (dis.quantity > 1) {
            if (dis.type == 'Qty Per Qty') {
              this.currentItems[i].quantity = 1;
            }
          }
          if (dis.type = 'Discount Invoice') {
            this.discountInvoice = 0;
          }
          if (this.discountTypeSelect[i]) {
            this.discountTypeSelect.splice(i, 1);
          }
          //remove free item batch
          dis.batch.forEach((batch) => {
            if (batch.typeBatch == 'Free Item') {
              this.removeOptionCurrent(dis)
            }
          });
        });
        //remove discount
        this.discount.forEach((res: any, i: any) => {
          if (res.id == 0) {
            if (this.discount[i].typeBatch == 'Free Item') {
              this.discount.splice(i, 1);
            }
          }
        });
        console.warn(this.discount, 'discount after remove');
        //end remove
        //end discount
        //add
        console.warn(val);
        let product1 = {
          product: {
            ...val?.free_items,
            id: val?.free_items?.id || 0,
            title: val?.free_items?.title || '',
            mrp: val?.free_items?.mrp
          },
          batch: [
            {
              id: 0,
              mrp: 0,
              cost_price: 0,
              selling_price_offline: 0,
              is_active: false,
              additional_discount: 0,
              typeBatch: 'Free Item Invoice',
              discount: [
                {
                  discount_offer_type: "",
                  discount_parent_id: "",
                  discount_type: "",
                  end_price: "",
                  flat_discount: "",
                  id: 0,
                  is_compulsory: false,
                  name: "",
                  start_price: ""
                }
              ]
            }
          ],
          variant_name: '',
          sku: '',
          type: 'Free Item Invoice',
          quantity: 1,
          id: 0,
          notes: '',
          discount: 0
        };
        this.addToCurrent(product1);
        this.currentItems = this.cartService.getCurrentItems();
        this.discount.push(product1?.batch[0]);
        console.warn(product1?.batch[0], 'batch');
      }
    } else if (val?.discount_offer_type == 'Discount-on-Invoice') {
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Discount Invoice';
      console.log(val?.discount_offer_type, 'discont type');
      //remove mathing item from array
      this.currentItems.forEach((dis: any) => {
        console.log(dis);
        if (dis.id == 0) {
          if (dis.type == 'Free Item Invoice')
            // this.currentItems = this.currentItems.filter(d => d.id !== 0);
            this.removeOptionCurrent(dis)
          console.log(this.currentItems, 'current item');
        } else {
          this.currentItems = this.currentItems.filter(d => d.id !== 0);
          console.log(this.currentItems, 'current item');
        }
        if (dis.discount > 0) {
          this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
          this.currentItems[i].discount = 0;
        }
        if (dis.quantity > 1) {
          if (dis.type == 'Qty Per Qty') {
            this.currentItems[i].quantity = 1;
          }
        }
        if (dis.type = 'Discount Invoice') {
          this.discountInvoice = 0;
        }
        if (this.discountTypeSelect[i]) {
          this.discountTypeSelect.splice(i, 1);
        }
        //remove free item batch
        dis.batch.forEach((batch) => {
          if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
            this.removeOptionCurrent(dis)
          }
        });
      });
      console.warn(this.currentItems, 'discount after remove');
      //remove discount
      this.discount.forEach((res: any, i: any) => {
        if (res.id == 0) {
          if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
            this.discount.splice(i, 1);
          }
        }
      });
      console.warn(this.discount, 'discount after remove');
      //end remove
      if (this.finalAmount() >= parseInt(val?.invoice_amount)) {
        if (val?.discount_type == '%') {
          // add
          let flatDisc = this.finalAmount() * parseInt(val?.flat_discount) / 100;
          console.log(flatDisc, 'flat disc');
          let totalFlatDiscount = this.finalAmount() - flatDisc;
          console.warn(totalFlatDiscount);
          this.discountInvoice = flatDisc;
          this.currentItems[i].type = 'Discount Invoice';
        } else {
          let totalFlatDiscount = this.finalAmount() - parseInt(val?.flat_discount);
          //add
          console.warn(totalFlatDiscount);
          this.discountInvoice = parseInt(val?.flat_discount);
          this.currentItems[i].type = 'Discount Invoice';
        }
      }
    } else if (val?.discount_offer_type == 'Quantity-per-percentage') {
      this.selectedDiscount[i] = 'Qty % Discount';
      if (val?.discount_type == '%') {
        this.discountTypeSelect.push(val);
        //remove mathing item from array
        this.currentItems.forEach((dis: any) => {
          console.log(dis);
          if (dis.id == 0) {
            if (dis.type == 'Free Item Invoice') {
              // this.currentItems = this.currentItems.filter(d => d.id !== 0);
              this.removeOptionCurrent(dis)
              console.log(this.currentItems, 'current item');
            }
          } else {
            this.currentItems = this.currentItems.filter(d => d.id !== 0);
            console.log(this.currentItems, 'current item');
          }
          if (dis.discount > 0) {
            this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
            this.currentItems[i].discount = 0;
          }
          if (dis.quantity > 1) {
            if (dis.type == 'Qty Per Qty') {
              this.currentItems[i].quantity = 1;
            }
          }
          if (dis.type = 'Discount Invoice') {
            this.discountInvoice = 0;
          }
          //remove free item batch
          dis.batch.forEach((batch) => {
            console.log(batch);
            if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
              console.log(batch);
              this.removeOptionCurrent(dis)
            }
          });
        });
        //remove discount
        this.discount.forEach((res: any, i: any) => {
          if (res.id == 0) {
            if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
              this.discount.splice(i, 1);
            }
          }
        });
        console.warn(this.discount, 'discount after remove');
        //end remove
        //add
        console.log(this.currentItems[i]);
        let flatDisc = this.currentItems[i]?.batch[0]?.selling_price_offline * parseInt(val?.flat_discount) / 100;
        console.log(flatDisc);
        this.flatDiscount[i] = flatDisc;
        let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - flatDisc;
        console.warn(totalFlatDiscount);
        this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
        this.currentItems[i].discount = flatDisc;
        console.log(this.currentItems, 'current items');
      } else {
        let totalFlatDiscount = this.currentItems[i]?.batch[0]?.selling_price_offline - parseInt(val?.flat_discount);
        //remove mathing item from array
        this.currentItems.forEach((dis: any) => {
          console.log(dis);
          if (dis.id == 0) {
            if (dis.type == 'Free Item Invoice') {
              // this.currentItems = this.currentItems.filter(d => d.id !== 0);
              this.removeOptionCurrent(dis)
              console.log(this.currentItems, 'current item');
            }
          } else {
            this.currentItems = this.currentItems.filter(d => d.id !== 0);
            console.log(this.currentItems, 'current item');
          }
          if (dis.discount > 0) {
            this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
            this.currentItems[i].discount = 0;
          }
          if (dis.quantity > 1) {
            if (dis.type == 'Qty Per Qty') {
              this.currentItems[i].quantity = 1;
            }
          }
          if (dis.type = 'Discount Invoice') {
            this.discountInvoice = 0;
          }
          //remove free item batch
          dis.batch.forEach((batch) => {
            if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
              this.removeOptionCurrent(dis)
            }
          });
        });
        //remove discount
        this.discount.forEach((res: any, i: any) => {
          if (res.id == 0) {
            if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
              this.discount.splice(i, 1);
            }
          }
        });
        console.warn(this.discount, 'discount after remove');
        //end remove
        //add
        console.warn(totalFlatDiscount);
        this.flatDiscount[i] = val?.flat_discount;
        this.currentItems[i].batch[0].selling_price_offline = totalFlatDiscount;
        this.currentItems[i].discount = parseInt(val?.flat_discount);
        console.log(this.currentItems, 'current items');
      }
    } else if (val?.discount_offer_type == 'Quantity-per-quantity') {
      this.selectedDiscount[i] = 'Qty Per Qty';
      console.warn(val);
      console.warn(this.currentItems[i]?.quantity);
      this.discountTypeSelect.push(val);
      //remove mathing item from array
      this.currentItems.forEach((dis: any) => {
        console.log(dis);
        if (dis.id == 0) {
          if (dis.type == 'Free Item Invoice') {
            // this.currentItems = this.currentItems.filter(d => d.id !== 0);
            this.removeOptionCurrent(dis)
            console.log(this.currentItems, 'current item');
          }
        } else {
          this.currentItems = this.currentItems.filter(d => d.id !== 0);
          console.log(this.currentItems, 'current item');
        }
        if (dis.discount > 0) {
          this.currentItems[i].batch[0].selling_price_offline = this.currentItems[i].batch[0].selling_price_offline + this.currentItems[i].discount;
          this.currentItems[i].discount = 0;
        }
        if (dis.quantity > 1) {
          if (dis.type == 'Qty Per Qty') {
            this.currentItems[i].quantity = 1;
          }
        }
        if (dis.type = 'Discount Invoice') {
          this.discountInvoice = 0;
        }
        //remove free item batch
        dis.batch.forEach((batch) => {
          if (batch.typeBatch == 'Free Item' || batch.typeBatch == 'Free Item Invoice') {
            this.removeOptionCurrent(dis)
          }
        });
        console.log(this.currentItems, 'currentItems');

      });
      //remove discount
      this.discount.forEach((res: any, i: any) => {
        if (res.id == 0) {
          if (this.discount[i].typeBatch == 'Free Item' || this.discount[i].typeBatch == 'Free Item Invoice') {
            this.discount.splice(i, 1);
          }
        }
      });
      console.warn(this.discount, 'discount after remove');
      //end remove
      if (this.currentItems[i]?.quantity >= parseInt(val?.purchase_qty)) {
        //add
        this.cartService.increaseCurrent(this.currentItems[i]);
        this.currentItems[i].type = 'Qty Per Qty';
        console.log(parseInt(val?.purchase_qty));
      }
    }
  }
  // free item qty
  freeItemBatch(cart, i) {
    console.warn(cart);
    console.warn('index=>' + i);
    console.log(this.discount[i], 'discount');
    console.log(this.discount[i].discount, 'discount');
    if (this.discount[i].discount[0].id == 0) {
      this.cartService.productSearch(cart.product.sku).subscribe((res: any) => {
        if (res.length > 0) {
          console.warn(res[0].batch[0]?.discount, 'search result');
          console.log(this.discount[i]?.discount, 'discount batch');
          console.log(this.discount[i], 'discount');
          this.discount[i].discount = res[0].batch[0]?.discount; // store value into it
          console.log(this.discount, 'discount');
          // push value in discountType
          this.discount.forEach((batch: any, i: any) => {
            batch?.discount.forEach((discount: any) => {
              if (!this.discountTyp[i]) {
                this.discountTyp[i] = [];
              }
              this.discountTyp[i].push(discount);
              console.log(this.discountTyp[i]);
            });
          });
        }
      });
    }
  }
  //end
  discountCartIndex: any;
  openModalDiscount(i: number) {
    this.discountCartIndex = i;
    this.cartItems.forEach((res: any) => {
      res.batch((res: any) => {

      })
    })
    const modalId = `discountModal-${i}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModalDiscount(i) {
    console.log(i, 'index');
    const modal = document.getElementById(`discountModal-${i}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  totalDiscountRupees() {
    let cartItems = this.cartService.getCurrentItems();
    let totalDiscount = 0;
    cartItems.forEach(item => {
      totalDiscount += parseFloat(item?.discount) || 0;
    });
    if (this.discountInvoice) {
      totalDiscount += this.discountInvoice;
    }
    return totalDiscount;
  }



  amount = 100;
  f_d = 5;
  d = 0;

  addPer(type: string) {
    if (type === 'add') {
      // Calculate the percentage discount

      let per = this.amount * this.f_d / 100;

      // Add to the accumulated discount
      this.d = per;
      // Apply discount to the this.amount
      this.amount -= per;

      console.log(this.amount);
      console.log(this.d);
    } else {
      // Reverse the accumulated discount from the this.amount
      this.amount += this.d;
      if (this.d == this.f_d) {
        this.d = 0;
      } else {
        this.d = this.d * 100 / this.amount;
      }
      console.log(this.amount);
      console.log(this.d);
    }
  }

}

export enum KEY_CODE {
  // UP_ARROW = 38,
  // DOWN_ARROW = 40,
  // RIGHT_ARROW = 39,
  // LEFT_ARROW = 37,

  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',
  UP_ARROW = 'ArrowUp'
}

