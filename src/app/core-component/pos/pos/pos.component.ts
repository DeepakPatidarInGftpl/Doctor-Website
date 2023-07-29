import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer, fromEvent, merge, Subscription, OperatorFunction } from 'rxjs';
import { map, startWith, filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize, catchError } from 'rxjs/operators';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { SyncServiceService } from 'src/app/Services/sync-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';
import { Modal } from 'bootstrap';
import { BillHoldService } from 'src/app/Services/BillHold/bill-hold.service';



@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})


export class PosComponent implements OnInit {
  selectedPaymentsOption: string = 'sales'; 
  
  salesPayments:any = [];
  purchasePayments:any = [];
  expensePayments:any = [];

  page: number = 1;

  heldBills: any[] = [];

  streetcontrol = new FormControl('');

  

  //options: string[] = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;
  connectionStatus: string;
  options = [
    { id: 1, name: 'Option 1', value: 'option1', price: 10 },
    { id: 2, name: 'Option 2', value: 'option2', price: 20 },
    { id: 3, name: 'Option 3', value: 'option3', price: 30 },
    { id: 4, name: 'Option 4', value: 'option4', price: 40 },
    { id: 5, name: 'Option 5', value: 'option5', price: 50 },
  ];

  gstType = [
    {label: 'UnRegistered', value: 'UnRegistered'},
    {label: 'Registered Regular', value: 'Registered Regular'},
    {label: 'Registered Composition', value: 'Registered Composition'},
    {label: 'Input Service Distributor', value: 'Input Service Distributor'},
    {label: 'Ecommerce Operator', value: 'Ecommerce Operator'},
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
    {id: 1, label: 'Advance Payment', value: 'Advance'},
    {id: 2, label: 'Against Bill', value: 'Against Bill'}
  ];

  paymentMode = [
    {id: 1, label: 'UPI', value: 'UPI'},
    {id: 2, label: 'Card', value: 'Card'},
    {id: 3, label: 'Cash', value: 'Cash'},
    {id: 4, label: 'Bank', value: 'Bank'}
  ]

  selectedOptions: any[] = [];
  productsAutocompleteControl = new FormControl();
  //filteredOptions$: Observable<any[]> | undefined;
  filteredOptions$:any;
  customers:any = [];
  cartItems: any[] = [];
  addMoreDetails: any;
  customerAutoCompleteControl = new FormControl('');
  chargesAutoCompleteControl = new FormControl('');
  customerAutoCompleteControl2 = new FormControl('');

  streets: string[] = ['Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow', 'Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow'];
  filteredStreets: Observable<string[]>;
  currentCustomer:any | null;
  currentCustomerPayment:any | null;
  changeAmount:any;
  tenderedAmount: number = 0;
  dueAmount:any;
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
  partyIsLoading:boolean = false
  chargesErrorMsg!:string;
  chargesIsLoading = false;
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
  currentState:any;
  stateList:any;
  currentCities:any;
  cityList:any;
  currentProduct: any;
  currentBatch:any;
  additionalChargesList:any = [];
  taxesList:any = [];
  receiptSales:any = [];
  companyBankList:any = [];
  paymentTermsList: any = [];
  currentOrderAdditionalCharges:any = [];

  currentAdditionalCharges:any = [];
  activeBill: any;

  posOrders:any = [];


  constructor(private billHoldService: BillHoldService, public fb: FormBuilder, private toastr: ToastrService, private syncService: SyncServiceService, private http: HttpClient, private cartService:PosCartService, private coreService: CoreService) { 
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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.code == KEY_CODE.F9){
      // Your row selection code
      console.log(event);
    }
    if(event.code == KEY_CODE.F8){
      // Your row selection code
      console.log(event);
    }
    if(event.code == KEY_CODE.UP_ARROW){
      // Your row selection code
      console.log(event);
    }
  }

  ngOnInit(): void {
    
    this.filteredStreets = this.streetcontrol.valueChanges.pipe(
      startWith(''),
      map(value => this.__filter(value || '')),
    );

   
    this.heldBills = this.billHoldService.getHeldBills();

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
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.pattern(/^[0-9]{6}$/)]]
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
      } else if(value === 'Card') {
        this.salesPaymentForm.get('upi_id').clearValidators();
        this.salesPaymentForm.get('account_no').clearValidators();

        this.salesPaymentForm.get('customer_bank_name').setValidators(Validators.required);
        this.salesPaymentForm.get('card_payment_amount').setValidators(Validators.required);
        this.salesPaymentForm.get('card_holder_name').setValidators(Validators.required);
        this.salesPaymentForm.get('cart_transactions_no').setValidators(Validators.required);
        this.salesPaymentForm.get('payment_account').setValidators(Validators.required);
     } else if(value === 'Bank') {
        this.salesPaymentForm.get('upi_id').clearValidators();
        this.salesPaymentForm.get('customer_bank_name').clearValidators();
        this.salesPaymentForm.get('card_payment_amount').clearValidators();
        this.salesPaymentForm.get('card_holder_name').clearValidators();
        this.salesPaymentForm.get('cart_transactions_no').clearValidators();

      this.salesPaymentForm.get('payment_account').setValidators(Validators.required);
      this.salesPaymentForm.get('account_no').setValidators(Validators.required);
     }  else {
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
      } else if(value === 'Card') {
        this.purchasePaymentForm.get('upi_id').clearValidators();
        this.purchasePaymentForm.get('account_no').clearValidators();

        this.purchasePaymentForm.get('customer_bank_name').setValidators(Validators.required);
        this.purchasePaymentForm.get('card_payment_amount').setValidators(Validators.required);
        this.purchasePaymentForm.get('card_holder_name').setValidators(Validators.required);
        this.purchasePaymentForm.get('cart_transactions_no').setValidators(Validators.required);
        this.purchasePaymentForm.get('payment_account').setValidators(Validators.required);
     } else if(value === 'Bank') {
        this.purchasePaymentForm.get('upi_id').clearValidators();
        this.purchasePaymentForm.get('customer_bank_name').clearValidators();
        this.purchasePaymentForm.get('card_payment_amount').clearValidators();
        this.purchasePaymentForm.get('card_holder_name').clearValidators();
        this.purchasePaymentForm.get('cart_transactions_no').clearValidators();

      this.purchasePaymentForm.get('payment_account').setValidators(Validators.required);
      this.purchasePaymentForm.get('account_no').setValidators(Validators.required);
     }  else {
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
      if(this.showSyncButton){
        document.getElementById("exampleModal7").classList.add('show');      
      }
    })
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.customers = data;
    // })
    this.syncService.checkOnlineStatus();
    this.loader = false;
    // this.onlineEvent = fromEvent(window, 'online');
    // this.offlineEvent = fromEvent(window, 'offline');

    // this.subscriptions.push(this.onlineEvent.subscribe(e => {
    //   this.connectionStatusMessage = 'Back to online';
    //   this.connectionStatus = 'online';
    //   console.log('Online...');
    //   // this.loader = true;
    //   // setTimeout(function() { 
    //   //   this.loader = false
    //   //  }, 2000);

    // }));

    // this.subscriptions.push(this.offlineEvent.subscribe(e => {
    //   this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
    //   this.connectionStatus = 'offline';
    //   console.log('Offline...');
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
    console.log(this.cartItems);


    // this.filteredOptions$ = this.options;
    // this.productsAutocompleteControl.valueChanges.subscribe(value => {
    //   this.filterArray(value);
    // });
    

    let api_token = "4d586523c3dbbc989192bec34006e72a4edebf00";
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
        switchMap(value => this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/product_search/?search=${value}`, requestOptions)
          .pipe(
            catchError(err => {
              // handleError(err);
              console.log('err catch', err);
              this.errorMsg = 'No Products Found';
              this.isLoading = false;
              return [];
            }),
            finalize(() => {
              this.isLoading = false
              console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log('data', data)
        // if(data.variants.length > 0){
        //   this.filteredProducts = data.variants;
        // }
        if(data.length > 0){
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
        console.log(this.filteredProducts, 'fil');
        console.log(this.errorMsg, 'errmg');
      });
  
      this.customerAutoCompleteControl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res?.length >= this.cusMinLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(100),
        tap(() => {
          this.cusErrorMsg = "";
          this.filteredCustomer = [];
          this.cusIsLoading = true;
        }),
        switchMap(value => this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/customer_filter/?search=${value}`, requestOptions)
          .pipe(
            catchError(err => {
              // handleError(err);
              console.log('err catch', err);
              this.cusErrorMsg = 'No Customer Found';
              this.cusIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.cusIsLoading = false
              console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log('data', data)

        if(data.length > 0){
          console.log('data', data)
          this.filteredCustomer = data;
        } else {
          this.filteredCustomer = [];
          this.cusErrorMsg = 'No Customers Found';
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
              console.log('err catch', err);
              this.cusErrorMsg = 'No Customer Found';
              this.cusIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.cusIsLoading = false
              console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log('data', data)

        if(data.length > 0){
          console.log('data', data)
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
              console.log('err catch', err);
              this.partyErrorMsg = 'No Party Found';
              this.partyIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.partyIsLoading = false
              console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log('data', data)

        if(data.length > 0){
          console.log('data', data)
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
              console.log('err catch', err);
              this.partyErrorMsg = 'No Party Found';
              this.partyIsLoading = false;
              return [];
            }),
            finalize(() => {
              this.partyIsLoading = false
              console.log('search', value)
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log('data', data)

        if(data.length > 0){
          console.log('data', data)
          this.filteredPartyExpense = data;
        } else {
          this.filteredPartyExpense = [];
          this.partyErrorMsg = 'No Party Found';
        }
        
      });

    
    this.addMoreDetails = false;
    console.log(this.addMoreDetails);
    this.coreService.getCountry().subscribe({
      next: (response) => {
        console.log(response, 'countries')
        this.currentCountry = response[0];
        this.coreService.getStateByCountryId(response[0].id).subscribe({
          next: (response) => {
            console.log(response, 'state');
            this.stateList = response;
            this.state.setValue(response[0].id);
            this.currentState = response[0].id;
            this.coreService.getCityByStateId(response[0].id).subscribe({
              next: (response) => {
                console.log(response, 'city');
                this.city.setValue(response[0].id)
                this.currentCities = response[0].id
                this.cityList = response
              },
              error: (error) => {
                console.log('state', error)
              }
            })

          },
          error: (error) => {
            console.log('state', error)
          }
        })
      },
      error: (error) => {
        console.log('country', error);
      }
    });

    this.cartService.getAdditionalCharge().subscribe({
      next: (response) => {
        console.log(response, 'addt charge')
        this.additionalChargesList = response;
      },
      error: (error) => {
        console.log('addt charge', error);
      }
    })

    this.cartService.getTaxes().subscribe({
      next: (response) => {
        console.log(response, 'taxes')
        this.taxesList = response;
      },
      error: (error) => {
        console.log('taxes', error);
      }
    })

    this.cartService.getCompanyBank().subscribe({
      next: (response) => {
        console.log(response, 'company bank')
        this.companyBankList = response;
      },
      error: (error) => {
        console.log('company bank', error);
      }
    })

    this.cartService.getPaymentTerms().subscribe({
      next: (response) => {
        console.log(response, 'payment terms')
        this.paymentTermsList = response;
      },
      error: (error) => {
        console.log('payment terms', error);
      }
    })

    this.cartService.getPOSOrders().subscribe({
      next: (response) => {
        console.log(response, 'pos orders')
        this.posOrders = response;
      },
      error: (error) => {
        console.log('pos orders', error);
      }
    })

    this.cartService.getExpensePayments().subscribe({
      next: (response) => {
        console.log(response, 'expense payments')
        this.expensePayments = response;
      },
      error: (error) => {
        console.log('expense payments', error);
      }
    })

    this.cartService.getSalesPayments().subscribe({
      next: (response) => {
        console.log(response, 'sales payments')
        this.salesPayments = response;
      },
      error: (error) => {
        console.log('sales payments', error);
      }
    })

    this.cartService.getPurchasePayments().subscribe({
      next: (response) => {
        console.log(response, 'purchase payments')
        this.purchasePayments = response;
      },
      error: (error) => {
        console.log('purchase payments', error);
      }
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
      console.log('Backspace key pressed, clear previous selection here.');
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
    console.log('fil', value.name);
    console.log('options', this.options[0].name);
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


  // add row to current additional charges
  addRowToCAC(){
      let newObject = { additional_charge: "", value: 0, value_type: "percentage", tax: "", total: 0 };
      this.currentOrderAdditionalCharges.push(newObject);
  }

  // update row in current additional charges
  updateRowInCAC(index: number){
    console.log(this.currentOrderAdditionalCharges, 'coac');
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
    }
  }


  // delete row in current additional charges
  deleteRowInCAC(index:number, event: Event){
    event.stopPropagation();

    if (!this.currentOrderAdditionalCharges || this.currentOrderAdditionalCharges.length === 0) {
    return;
    }
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      this.currentOrderAdditionalCharges.splice(index, 1);
      console.log("Element deleted successfully!");
    } else {
      console.log("Invalid index. Element not deleted.");
    }
    this.updateRowInCAC(index)
  }

  // update additional charges of an element in current order additional charges
  updateACInCAC(index:number, event: Event){
    let value = (event.target as HTMLSelectElement).value;
    const acindex = this.additionalChargesList.findIndex(currentItem => currentItem.id == value);

    if (acindex !== -1) {
      if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
        if(this.currentOrderAdditionalCharges[index].tax){
 
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

  getPriceAfterTaxes(batch:any){
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch.sale_tax;
    if(taxPercentage < 0 || originalAmount < 0){
      return originalAmount;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return (taxAmount + originalAmount)
    }
  }

  getNetAmount(batch:any, qty:number){
    let priceAfterTaxes = this.getPriceAfterTaxes(batch);
    return (priceAfterTaxes * qty);
  }

   // update tax of an element in current order additional charges
   updateTaxInCAC(index:number, event: Event){
    let value = (event.target as HTMLSelectElement).value;
    const tindex = this.taxesList.findIndex(currentItem => currentItem.id == value);

    
    if (tindex !== -1) {
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      if(this.currentOrderAdditionalCharges[index].additional_charge){
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
   updateValueInCAC(index:number, event: Event){
    let valuee = (event.target as HTMLInputElement).value;
    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      if(this.currentOrderAdditionalCharges[index].tax){
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
   updateValueTypeInCAC(index:number, valueType:any){

    if (index >= 0 && index < this.currentOrderAdditionalCharges.length) {
      if(valueType === 'percentage'){
        this.currentOrderAdditionalCharges[index].value_type = 'rupee';
      } else {
        this.currentOrderAdditionalCharges[index].value_type = 'percentage';
      }
    }
    this.updateRowInCAC(index)
   }

   // current total additional charges
   currentTotalAdditionalCharges(){

    let total = 0;
    if(this.currentOrderAdditionalCharges.length > 0){
      for (let index = 0; index < this.currentOrderAdditionalCharges.length; index++) {
        const element = this.currentOrderAdditionalCharges[index];
        total += element.total;
      }
    } else {
      total = 0;
    }
    return total;
   }
   



  confirmBatch(){
    let product1;
    let product = this.currentProduct.batch;
    let batch = this.currentBatch;
    let newbatch = [];
    for (let index = 0; index < product.length; index++) {
      const element = product[index];
      if(element.id == batch){
        newbatch.push(element);
      }
    }
    // this.currentProduct.batch = newbatch;
    let selectedOption = this.currentProduct;
    selectedOption.batch = newbatch

    product1 = {
      ...selectedOption,
      quantity: 1,
    }

    this.addToCurrent(product1);
    this.selectedOptions.push(product1);
    this.productsAutocompleteControl.setValue('');
    var myModalEl = document.getElementById('batchModal')
    var modal = Modal.getInstance(myModalEl)
    modal.hide();
  }

  optionSelected(event){
    let product1;
    const selectedOption = event.option.value;
    console.log('prod', selectedOption?.batch);
    if(selectedOption.batch.length > 1){
      console.log('length > 1');
      this.currentProduct = selectedOption;
      const element = document.getElementById('batchModal') as HTMLElement;
      const myModal = new Modal(element);
      myModal.show();
    } else {
      console.log('length < 1');
      product1 = {
        ...selectedOption,
        quantity: 1,
      }
    this.addToCurrent(product1);
    this.selectedOptions.push(product1);
    this.productsAutocompleteControl.setValue('');
    }
    this.filteredProducts = [];
    
  }
  
  
  optionSelectedCharge(event){
    const selectedOption = event.option.value;
    console.log('charge', selectedOption);
  }

  optionSelected1(event){
    this.currentCustomer = event.option.value;
    console.log(event.option.value, 'cus');
  }

  optionSelectedReceipt(event){
    let customer = event.option.value;
    this.cartService.getReceiptDueOrder(customer.id).subscribe({
      next: (response) => {
        console.log(response, 'receipt sales')
        this.receiptSales = response;
      },
      error: (error) => {
        console.log('receipt sales', error);
      }
    })

  }

  optionSelectedParty(event){

  }

  optionSelectedPartyExpense(event){

  }

  removeOption(index: number) {
    console.log('removed');
    this.selectedOptions.splice(index, 1);
  }

  removeOptionCurrent(item) {
    const index = this.selectedOptions.findIndex(currentItem => currentItem.id === item.id);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
    this.cartService.removeFromCurrent(item);
  }

  removeFromCurrent(item) {
    console.log('removed');
    // this.selectedOptions.splice(index, 1);
    this.cartService.removeFromCurrent(item)
  }

  addToCurrent(product: any): void {
    this.cartService.addToCurrent(product);
  }

  increaseQtyCurrent(item){
    this.cartService.increaseCurrent(item);
  }

  decreaseQtyCurrent(item){
    this.cartService.decreaseCurrent(item);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  increaseQty(item){
    this.cartService.increase(item);
  }

  decreaseQty(item){
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
    return item ? `${item?.product_title} ${item?.variant_name} | ${item?.batch[0]?.selling_price_offline}` : '';
  }

  displayCus(item: any): string {
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

  totalAmount(){
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalPrice = 0 + this.currentTotalAdditionalCharges();
    for(let cart of cartItems){
      totalPrice += cart?.batch[0]?.selling_price_offline * cart?.quantity;
    }
    return totalPrice;
  }

  totalMrp(){
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalPrice = 0;
    for(let cart of cartItems){
      totalPrice += cart?.batch[0]?.mrp * cart?.quantity;
    }
    return totalPrice;
  }

  getTaxAmt(batch:any){
    let originalAmount = batch.selling_price_offline;
    let taxPercentage = batch.sale_tax;
    if(taxPercentage < 0 || originalAmount < 0){
      return 0;
    } else {
      let taxAmount = (taxPercentage / 100) * originalAmount;
      return taxAmount;
    }
  }

  totalTaxAmount(){
    let cartItems = this.cartService.getCurrentItems();
    let totalPrice = 0;
    for(let cart of cartItems){
      totalPrice += this.getTaxAmt(cart?.batch[0]) * cart?.quantity;
    }
    return Number(totalPrice).toFixed(2);
  }


  totalQty(){
    //let cartItems = this.cartService.getCartItems();
    let cartItems = this.cartService.getCurrentItems();
    //let cartItems = this.selectedOptions;
    let totalQty = 0;
    for(let cart of cartItems){
      totalQty += cart?.quantity;
    }
    return totalQty;
  }

  tenderedAmt(event){
    let tenderedAmt = event.target.value;
    this.tenderedAmount = tenderedAmt;
  }

  changeTenderedAmt(value:any){
    let newAmt = Number(value);
    this.tenderedAmount += newAmt;
  }

  changeAmt(){
    let amt = +this.tenderedAmount - this.totalAmount();
    return amt.toFixed(2);
  }

  generateOrder1(){
    return this.syncService.checkOnlineStatus();
  }

  closeSyncModal() {
    return document.getElementById("exampleModal7").classList.remove('show');      
  }

  generateOrder(){
    
  if(navigator.onLine){
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
    let order = {
      ChangeAmt: change,
      TenderedAmt: tendered,
      Total: total,
      CustomerName: customer,
      Items: cartItems
    }
    this.cartService.generateOrder(order);
    this.toastr.success('Created Offline', 'Order', {
      timeOut: 5000
    });
    this.selectedOptions = [];
    this.currentCustomer = '';
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
    if(orders){
      return (navigator.onLine && (orders.length > 0));
    } else {
      return false
    }
  }

  checkSubmitCus(){
    
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
    formData.append('name', this.registrationForm.get('name').value || '');
    formData.append('mobile_no', this.registrationForm.get('mobile_no').value || '');
    formData.append('whatsapp_no', this.registrationForm.get('whatsapp_no').value || '');
    formData.append('date_of_birth', this.registrationForm.get('date_of_birth').value || '');
    formData.append('anniversary_date', this.registrationForm.get('anniversary_date').value || '');
    formData.append('email', this.registrationForm.get('email').value || '');
    formData.append('gstin', this.registrationForm.get('gstin').value || '');
    formData.append('gst_type', this.registrationForm.get('gst_type').value || '');
    //formData.append('address', '');

    if(this.address_line_1.value && this.address_line_2.value && this.state.value && this.city.value && this.pincode.value){
      formData.append('address', JSON.stringify(address))
    } else {
      formData.append('address', '');
    }

     this.cartService
     .addCustomer(formData)
     .subscribe({
        next: (response:any) => {
          if(response.isSuccess){
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.addCusModal');
            clicking.click();
            this.registrationForm.reset()
            this.addMoreDetails = false;
            this.city.setValue(this.cityList[0].id)
            this.currentCities = this.cityList[0].id;
            this.state.setValue(this.stateList[0].id);
            this.currentState = this.stateList[0].id;
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });

    // for(let x of formData){
    //   console.log('formdata cus', x);
    // }
    // this.http
    //   .post('https://pv.greatfuturetechno.com/pv-api/customer/', formData)
    //   .subscribe({
    //     next: (response) => console.log(response),
    //     error: (error) => console.log(error),
    //   });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  onStateChange(event:any) {
    this.currentState = event.target.value;
    const selectedState = event.target.value;
    // const stateCode = this.stateList.find(state => state.id == selectedState.id);
    // console.log(stateCode.id, '...');
      this.coreService.getCityByStateId(selectedState).subscribe({
        next: (res) => {
          console.log(res, 'cites');
          this.cityList = res;
          this.currentCities = this.cityList?.id
        },
        error: (err) => {
          console.log('cities', err);
        }
      })

  }

  onCityChange(event:any) {
    this.currentCities = event.target.value;    
  }  



  onSubmit() {
    if (this.registrationForm.invalid) {
      console.log('invalid');
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.controls[key].markAsTouched();
      });
      return;
    }
    if(this.customerRegistrationNumberSame){
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
    console.log(this.registrationForm.value);
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

  get account_no() { return this.bankPaymentMethodForm.get('account_no')};
  get payment_account_bank() { return this.bankPaymentMethodForm.get('payment_account')};


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

  get voucher_type() { return this.receiptPaymentForm.get('voucher_type')};
  get payment_type() { return this.receiptPaymentForm.get('payment_type')};
  get payment_mode() { return this.receiptPaymentForm.get('payment_mode')};
  get receipt_sales() { return this.receiptPaymentForm.get('receipt_sales')};
  get amount_receipt() { return this.receiptPaymentForm.get('amount_receipt')};
  get customer_receipt() { return this.receiptPaymentForm.get('customer_receipt')};
  get receipt_remark() { return this.receiptPaymentForm.get('receipt_remark')};
  get party_receipt() { return this.receiptPaymentForm.get('party_receipt')};

  get receipt_customer_bank_name() { return this.receiptPaymentForm.get('customer_bank_name')};
  get receipt_card_payment_amount() { return this.receiptPaymentForm.get('card_payment_amount')};
  get receipt_card_holder_name() { return this.receiptPaymentForm.get('card_holder_name')};
  get receipt_cart_transactions_no() { return this.receiptPaymentForm.get('cart_transactions_no')};
  
  get receipt_account_no() { return this.receiptPaymentForm.get('account_no')};
  get expense_non_gst() { return this.receiptPaymentForm.get('non_gst')};


  get expense_nongst() { return this.expensePaymentForm.get('non_gst')};
  get expense_party() { return this.expensePaymentForm.get('party')};
  get expense_amount() { return this.expensePaymentForm.get('amount')};
  get expense_remark() { return this.expensePaymentForm.get('remark')};
  get expense_payment_account() { return this.expensePaymentForm.get('payment_account')};

  get sales_amount() { return this.salesPaymentForm.get('amount')};
  get sales_remark() { return this.salesPaymentForm.get('remark')};
  get sales_payment_account() { return this.salesPaymentForm.get('payment_account')};
  get sales_payment_type() { return this.salesPaymentForm.get('payment_type')};
  get sales_payment_mode() { return this.salesPaymentForm.get('payment_mode')};
  get sales_sales() { return this.salesPaymentForm.get('sales')};

  get sales_customer_bank_name() { return this.salesPaymentForm.get('customer_bank_name')};
  get sales_card_payment_amount() { return this.salesPaymentForm.get('card_payment_amount')};
  get sales_card_holder_name() { return this.salesPaymentForm.get('card_holder_name')};
  get sales_cart_transactions_no() { return this.salesPaymentForm.get('cart_transactions_no')};
  
  get sales_account_no() { return this.salesPaymentForm.get('account_no')};
  get sales_upi_id() { return this.salesPaymentForm.get('upi_id'); }
  get sales_customer() { return this.salesPaymentForm.get('customer'); }

  get purchase_amount() { return this.purchasePaymentForm.get('amount')};
  get purchase_remark() { return this.purchasePaymentForm.get('remark')};
  get purchase_payment_account() { return this.purchasePaymentForm.get('payment_account')};
  get purchase_payment_type() { return this.purchasePaymentForm.get('payment_type')};
  get purchase_payment_mode() { return this.purchasePaymentForm.get('payment_mode')};
  get purchase_sales() { return this.purchasePaymentForm.get('sales')};

  get purchase_customer_bank_name() { return this.purchasePaymentForm.get('customer_bank_name')};
  get purchase_card_payment_amount() { return this.purchasePaymentForm.get('card_payment_amount')};
  get purchase_card_holder_name() { return this.purchasePaymentForm.get('card_holder_name')};
  get purchase_cart_transactions_no() { return this.purchasePaymentForm.get('cart_transactions_no')};
  
  get purchase_account_no() { return this.purchasePaymentForm.get('account_no')};
  get purchase_upi_id() { return this.purchasePaymentForm.get('upi_id'); }
  get purchase_party() { return this.purchasePaymentForm.get('party'); }


  handleMobileInputChange(event: any) {
    const inputValue = event.target.value;
    if(this.mobile_no.valid){
      this.http.get(`https://pv.greatfuturetechno.com/pv-api/pos/mobile_no_check_of_customer/?search=${inputValue}`).subscribe({
      next: (response:any) => {
        console.log(response, 'mobile check');
        if(response.Same){
          this.customerRegistrationNumberSame = true;
        } else {
          this.customerRegistrationNumberSame = false;
        }
      },
      error: (err) => {
        console.log(err, 'mobile check');
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
      if(selectedBill.currentOrderAdditionalCharges.length > 0) {
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
    this.billHoldService.removeFromHold(billId);
    this.heldBills = this.billHoldService.getHeldBills();
    var clicking = <HTMLElement>document.querySelector('.holdClose');
    clicking.click();
  }

  holdBill() {
    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
      let activeBill:any = {};
      activeBill.currentItems = this.currentItems;
      if(this.currentOrderAdditionalCharges.length > 0){
        activeBill.currentOrderAdditionalCharges = this.currentOrderAdditionalCharges;
      } else {
        activeBill.currentOrderAdditionalCharges = [];
      }
      activeBill.totalAmt = this.totalAmount();
      activeBill.currentCustomer = this.currentCustomer;
      this.billHoldService.addToHold(activeBill);
      // this.cartService.clearCurrent();
      // this.currentItems = this.cartService.getCurrentItems();
      // this.currentOrderAdditionalCharges = [];
      // this.currentCustomer = null;
      this.discardCurrentBill();
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

  receiptFormSubmit(){
    if (this.receiptPaymentForm.invalid) {
      console.log('invalid');
      Object.keys(this.receiptPaymentForm.controls).forEach(key => {
        const control = this.receiptPaymentForm.controls[key];
        if (control.invalid) {
          console.log(key);
        }

        this.receiptPaymentForm.controls[key].markAsTouched();
      });
      return;
    }
    if(this.voucher_type.value === 'sales'){
      this.formSubmitReceipt();
    } else if(this.voucher_type.value === 'purchase') {
      this.formSubmitPurchase()
    } else {
      this.formSubmitExpense()
    }
  }

  formSubmitExpense(){ 
    if (this.expensePaymentForm.invalid) {
      console.log('invalid');
      Object.keys(this.expensePaymentForm.controls).forEach(key => {
        const control = this.expensePaymentForm.controls[key];
        if (control.invalid) {
          console.log(key);
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
    
    this.cartService
     .expensePayment(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response receipt', response);
          if(response.isSuccess){
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.expenseModalClose');
            clicking.click();
            this.expensePaymentForm.reset();
            this.expense_nongst.setValue(false);
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  formSubmitPurchase(){ 
    if (this.purchasePaymentForm.invalid) {
      console.log('invalid');
      Object.keys(this.purchasePaymentForm.controls).forEach(key => {
        const control = this.purchasePaymentForm.controls[key];
        if (control.invalid) {
          console.log(key);
        }

        this.purchasePaymentForm.controls[key].markAsTouched();
      });
      return;
    }

    let formData = new FormData();

    if(this.purchase_payment_mode.value === 'UPI'){
      let upi_data = {
        "upi_no": Number(this.purchase_upi_id.value),
        "payment_account": Number(this.purchase_payment_account.value)
      };

      if(this.purchase_payment_type.value == 'Advance'){
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

    } else if(this.payment_mode.value === 'Bank'){

      let bank_data = {
        "payment_account": Number(this.purchase_payment_account.value),
        "account_no": this.purchase_account_no.value,
      };

      if(this.payment_type.value == 'Advance'){
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

    } else if(this.payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.purchase_payment_account.value),
        "customer_bank_name": this.purchase_customer_bank_name.value,
        "card_payment_amount": this.purchase_card_payment_amount.value,
        "card_holder_name": this.purchase_card_holder_name.value,
        "cart_transactions_no": this.purchase_cart_transactions_no.value
      };

      if(this.payment_type.value == 'Advance'){
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

    if(this.payment_type.value == 'Advance'){
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
        next: (response:any) => {
          console.log('response receipt', response);
          if(response.isSuccess){
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.purchaseModalClose');
            clicking.click();
            this.purchasePaymentForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  formSubmitReceipt(){ 
    if (this.salesPaymentForm.invalid) {
      console.log('invalid');
      Object.keys(this.salesPaymentForm.controls).forEach(key => {
        const control = this.salesPaymentForm.controls[key];
        if (control.invalid) {
          console.log(key);
        }

        this.salesPaymentForm.controls[key].markAsTouched();
      });
      return;
    }

    let formData = new FormData();

    if(this.sales_payment_mode.value === 'UPI'){
      let upi_data = {
        "upi_no": Number(this.sales_upi_id.value),
        "payment_account": Number(this.sales_payment_account.value)
      };

      if(this.sales_payment_type.value == 'Advance'){
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

    } else if(this.sales_payment_mode.value === 'Bank'){

      let bank_data = {
        "payment_account": Number(this.sales_payment_account.value),
        "account_no": this.sales_account_no.value,
      };

      if(this.sales_payment_type.value == 'Advance'){
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

    } else if(this.sales_payment_mode.value === 'Card') {

      let card_data = {
        "payment_account": Number(this.sales_payment_account.value),
        "customer_bank_name": this.sales_customer_bank_name.value,
        "card_payment_amount": this.sales_card_payment_amount.value,
        "card_holder_name": this.sales_card_holder_name.value,
        "cart_transactions_no": this.sales_cart_transactions_no.value
      };

      if(this.sales_payment_type.value == 'Advance'){
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

    if(this.sales_payment_type.value == 'Advance'){
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
        next: (response:any) => {
          console.log('response receipt', response);
          if(response.isSuccess){
            // this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.salesModalClose');
            clicking.click();
            this.salesPaymentForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });

  }

  payLaterGenerateOrder(){
    if (this.payLaterMethodForm.invalid) {
      console.log('invalid');
      Object.keys(this.payLaterMethodForm.controls).forEach(key => {
        this.payLaterMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": 0,
        "add_discount": 0,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": this.getNetAmount(element?.batch[0], element?.quantity),
        "tax_amount": (this.getTaxAmt(element.batch[0])) * element.quantity,
        "remarks": "",
        "tax_percentage": element?.batch[0]?.sale_tax
      };
      cartData.push(item);
    }

    let pay_later_data = {      
      "day": Number(this.pay_later_day.value),
      "date": this.pay_later_date.value,
      "is_send_reminder": this.is_send_reminder.value == 'false' ? 'False' : 'True',
    };



    console.log(cartData, 'cash', pay_later_data);
    const formData = new FormData();
    formData.append('customer', JSON.stringify(this.currentCustomer.id));
    formData.append('additional_charge', JSON.stringify(this.currentTotalAdditionalCharges()));
    formData.append('total_amount', JSON.stringify(this.totalAmount()));
    formData.append('payment_mode', 'Paylater');
    formData.append('total_tax', JSON.stringify(Number(this.totalTaxAmount())));
    formData.append('cart_data', JSON.stringify(cartData));
    formData.append('card_detail', '');
    formData.append('Multipay', '');
    formData.append('PayLatter', JSON.stringify(pay_later_data));
    formData.append('bank_detail', '');
    formData.append('upi_detail', '');

    this.cartService
     .generateOrderNew(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response order', response);
          if(response.isSuccess){
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.payLaterModalClose');
            clicking.click();
            this.payLaterMethodForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });
      }
    
  } else {
    this.toastr.error('Please Add Items To Cart');
  }


  }

  cardPaymentGenerateOrder(){
    if (this.cardPaymentMethodForm.invalid) {
      console.log('invalid');
      Object.keys(this.cardPaymentMethodForm.controls).forEach(key => {
        this.cardPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": 0,
        "add_discount": 0,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": this.getNetAmount(element?.batch[0], element?.quantity),
        "tax_amount": (this.getTaxAmt(element.batch[0])) * element.quantity,
        "remarks": "",
        "tax_percentage": element?.batch[0]?.sale_tax
      };
      cartData.push(item);
    }

    let card_data = {
      "payment_account": this.payment_account_card.value,
      "customer_bank_name": this.customer_bank_name.value,
      "card_payment_amount": this.card_payment_amount.value,
      "card_holder_name": this.card_holder_name.value,
      "cart_transactions_no": this.cart_transactions_no.value
    };



    console.log(cartData, 'cash');
    const formData = new FormData();
    formData.append('customer', JSON.stringify(this.currentCustomer.id));
    formData.append('additional_charge', JSON.stringify(this.currentTotalAdditionalCharges()));
    formData.append('total_amount', JSON.stringify(this.totalAmount()));
    formData.append('payment_mode', 'Card');
    formData.append('total_tax', JSON.stringify(Number(this.totalTaxAmount())));
    formData.append('cart_data', JSON.stringify(cartData));
    formData.append('card_detail', JSON.stringify(card_data));
    formData.append('Multipay', '');
    formData.append('PayLatter', '');
    formData.append('bank_detail', '');
    formData.append('upi_detail', '');

    this.cartService
     .generateOrderNew(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response order', response);
          if(response.isSuccess){
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.cardModalClose');
            clicking.click();
            this.cardPaymentMethodForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });
      }
    
  } else {
    this.toastr.error('Please Add Items To Cart');
  }


  }

  bankPaymentGenerateOrder(){
    if (this.bankPaymentMethodForm.invalid) {
      console.log('invalid');
      Object.keys(this.bankPaymentMethodForm.controls).forEach(key => {
        this.bankPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": 0,
        "add_discount": 0,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": this.getNetAmount(element?.batch[0], element?.quantity),
        "tax_amount": (this.getTaxAmt(element.batch[0])) * element.quantity,
        "remarks": "",
        "tax_percentage": element?.batch[0]?.sale_tax
      };
      cartData.push(item);
    }

    let bank_data = {
      "account_no": Number(this.account_no.value),
      "payment_account": Number(this.payment_account_bank.value)
    };



    console.log(cartData, 'cash', bank_data);
    const formData = new FormData();
    formData.append('customer', JSON.stringify(this.currentCustomer.id));
    formData.append('additional_charge', JSON.stringify(this.currentTotalAdditionalCharges()));
    formData.append('total_amount', JSON.stringify(this.totalAmount()));
    formData.append('payment_mode', 'Bank');
    formData.append('total_tax', JSON.stringify(Number(this.totalTaxAmount())));
    formData.append('cart_data', JSON.stringify(cartData));
    formData.append('card_detail', '');
    formData.append('Multipay', '');
    formData.append('PayLatter', '');
    formData.append('bank_detail', JSON.stringify(bank_data));
    formData.append('upi_detail', '');

    this.cartService
     .generateOrderNew(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response order', response);
          if(response.isSuccess){
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.bankModalClose');
            clicking.click();
            this.bankPaymentMethodForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });
      }
    
  } else {
    this.toastr.error('Please Add Items To Cart');
  }


  } 

  upiPaymentGenerateOrder(){
    if (this.upiPaymentMethodForm.invalid) {
      console.log('invalid');
      Object.keys(this.upiPaymentMethodForm.controls).forEach(key => {
        this.upiPaymentMethodForm.controls[key].markAsTouched();
      });
      return;
    }

    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      console.log((this.getTaxAmt(element.batch[0]) * element.quantity), 'tax amt');
      console.log(this.getNetAmount(element?.batch[0], element?.quantity), 'net');

      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": 0,
        "add_discount": 0,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": Number(this.getNetAmount(element?.batch[0], element?.quantity)),
        "tax_amount": Number((this.getTaxAmt(element.batch[0])) * element.quantity),
        "remarks": "",
        "tax_percentage": Number(element?.batch[0]?.sale_tax)
      };
      cartData.push(item);
    }

    let upi_data = {
      "upi_no": Number(this.upi_id.value),
      "payment_account": Number(this.payment_account_upi.value)
    };



    console.log(cartData, 'cash', upi_data);
    const formData = new FormData();
    formData.append('customer', JSON.stringify(this.currentCustomer.id));
    formData.append('additional_charge', JSON.stringify(parseInt(this.currentTotalAdditionalCharges().toString())));
    formData.append('total_amount', JSON.stringify(parseInt(this.totalAmount().toString())));
    formData.append('payment_mode', 'UPI');
    formData.append('total_tax', JSON.stringify(Number(this.totalTaxAmount())));
    formData.append('cart_data', JSON.stringify(cartData));
    formData.append('card_detail', '');
    formData.append('Multipay', '');
    formData.append('PayLatter', '');
    formData.append('bank_detail', '');
    formData.append('upi_detail', JSON.stringify(upi_data));

    this.cartService
     .generateOrderNew(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response order', response);
          if(response.isSuccess){
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.upiModalClose');
            clicking.click();
            this.upiPaymentMethodForm.reset();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });
      }
    
  } else {
    this.toastr.error('Please Add Items To Cart');
  }


  }

  cashPaymentGenerateOrder(){
    if(this.currentItems.length > 0){
      if(this.currentCustomer === null || this.currentCustomer === undefined){
        this.toastr.error('Please Select/Add a Customer!');
      } else {
        let cartData = [];
    for (let index = 0; index < this.currentItems.length; index++) {
      const element = this.currentItems[index];
      let item = {
        "variant": element.id,
        "qty": element.quantity,
        "mrp": element.batch[0].mrp,
        "discount": 0,
        "add_discount": 0,
        "unit_cost": element.batch[0]?.selling_price_offline,
        "net_cost": this.getNetAmount(element?.batch[0], element?.quantity),
        "tax_amount": (this.getTaxAmt(element.batch[0])) * element.quantity,
        "remarks": "",
        "tax_percentage": element?.batch[0]?.sale_tax
      };
      cartData.push(item);
    }

    console.log(cartData, 'cash');
    const formData = new FormData();
    formData.append('customer', JSON.stringify(this.currentCustomer.id));
    formData.append('additional_charge', JSON.stringify(this.currentTotalAdditionalCharges()));
    formData.append('total_amount', JSON.stringify(this.totalAmount()));
    formData.append('payment_mode', 'Cash');
    formData.append('total_tax', JSON.stringify(Number(this.totalTaxAmount())));
    formData.append('cart_data', JSON.stringify(cartData));
    formData.append('card_detail', '');
    formData.append('Multipay', '');
    formData.append('PayLatter', '');
    formData.append('bank_detail', '');
    formData.append('upi_detail', '');

    this.cartService
     .generateOrderNew(formData)
     .subscribe({
        next: (response:any) => {
          console.log('response order', response);
          if(response.isSuccess){
            this.customerAutoCompleteControl.setValue('');
            this.discardCurrentBill();
            this.tenderedAmount = 0;
            this.toastr.success(response.msg)
            var clicking = <HTMLElement>document.querySelector('.cashModalClose');
            clicking.click();
          } else {
            this.toastr.error(response.msg);
          }
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(error.message);
        },
      });
      }
    
  } else {
    this.toastr.error('Please Add Items To Cart');
  }

}

getDateForOrders(timestamp:any){
  const dateObject = new Date(timestamp);

const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1; // Note: Months are zero-based, so we add 1 to get the correct month number.
const day = dateObject.getDate();

const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
return formattedDate;
}


}




export enum KEY_CODE {
  // UP_ARROW = 38,
  // DOWN_ARROW = 40,
  // RIGHT_ARROW = 39,
  // LEFT_ARROW = 37,
  F9 = 'F9',
  F8 = 'F8',
  UP_ARROW = 'ArrowUp'
}
