import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer, fromEvent, merge, Subscription, of } from 'rxjs';
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
  styleUrls: ['./pos.component.scss']
})



export class PosComponent implements OnInit {
  heldBills: any[] = [];
  

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

  selectedOptions: any[] = [];
  productsAutocompleteControl = new FormControl();
  //filteredOptions$: Observable<any[]> | undefined;
  filteredOptions$:any;
  customers:any = [];
  cartItems: any[] = [];
  addMoreDetails: any;
  customerAutoCompleteControl = new FormControl('');
  chargesAutoCompleteControl = new FormControl('');

  streets: string[] = ['Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow'];
  filteredStreets: Observable<string[]>;
  currentCustomer:any | null;
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
  chargesErrorMsg!:string;
  chargesIsLoading = false;
  filteredCustomer: any;
  filteredCharges!: Observable<any[]>;
  currentItems: any[] = [];
  customerForm: FormGroup;
  registrationForm: FormGroup;
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
  currentOrderAdditionalCharges:any = [];

  currentAdditionalCharges:any = [];
  activeBill: any;


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

    

    // ).pipe(
    //   startWith(''),
    //   map(value => this.filterOptions(value))
    // );
    
    this.addMoreDetails = false;
    console.log(this.addMoreDetails);
    this.coreService.getCountry().subscribe({
      next: (response) => {
        console.log(response, 'countries')
        this.currentCountry = response[0];
        this.coreService.getStateByCountryId(response[0].id).subscribe({
          next: (response) => {
            console.log(response, 'state');
            this.stateList = response
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

        let total = this.additionalChargesList[acindex].value;
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
    this.customerAutoCompleteControl.setValue('');
    console.log(event.option.value, 'cus');
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
    return item ? item.product_title : '';
  }

  displayCus(item: any): string {
    return item ? item.mobile_no : '';
  }

  displayCharge(item: any): string {
    return item ? item.additional_charge : '';
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
    return amt;
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
      //this.currentItems = selectedBill.currentItems;
      // Remove the selected bill from the list of held bills
      this.billHoldService.removeFromHold(billId);
      // Update the local heldBills array
      this.heldBills = this.billHoldService.getHeldBills();
    }
  }

  removeFromHold(billId: number) {
    this.billHoldService.removeFromHold(billId);
    this.heldBills = this.billHoldService.getHeldBills();
  }

  holdBill() {
    if(this.currentItems.length > 0){
      let activeBill:any = {};
      activeBill.currentItems = this.currentItems;
      if(this.currentOrderAdditionalCharges.length > 0){
        activeBill.currentOrderAdditionalCharges = this.currentOrderAdditionalCharges;
      } else {
        activeBill.currentOrderAdditionalCharges = [];
      }
      this.billHoldService.addToHold(activeBill);
      this.cartService.clearCurrent();
      this.currentItems = this.cartService.getCurrentItems();
      this.currentOrderAdditionalCharges = [];
      // this.totalAmount();
      // this.totalMrp();
      // this.totalQty();
      // Clear or reset the activeBill for a new transaction
      // this.activeBill = ...
    } 
  }

  discardCurrentBill() {
      this.cartService.clearCurrent();
      this.currentItems = this.cartService.getCurrentItems();
      this.currentOrderAdditionalCharges = [];
      this.currentCustomer = null;
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
    formData.append('total_tax', JSON.stringify(0));
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
