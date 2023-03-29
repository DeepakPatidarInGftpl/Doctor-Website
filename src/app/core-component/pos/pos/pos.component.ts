import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, Observer, fromEvent, merge, Subscription, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { SyncServiceService } from 'src/app/Services/sync-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})



export class PosComponent implements OnInit {
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

  selectedOptions: any[] = [];
  autocompleteControl = new FormControl();
  //filteredOptions$: Observable<any[]> | undefined;
  filteredOptions$:any;
  customers:any = [];
  cartItems: any[] = [];
  addMoreDetails: any;
  userCompleteControl = new FormControl('');
  streets: string[] = ['Jason Roy', 'Sam Curran', 'Cameron Green', 'Alex Hales', 'Johnny Bairstow'];
  filteredStreets: Observable<string[]>;
  currentCustomer:any;
  changeAmount:any;
  tenderedAmount: any;
  dueAmount:any;
  online: any;
  loader: any;


  constructor(private toastr: ToastrService, private syncService: SyncServiceService, private http: HttpClient, private cartService:PosCartService) { 
    // this.cartItems = this.cartService.getCartItems();
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
    this.filteredStreets = this.userCompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
    this.filteredOptions$ = this.options;
    this.autocompleteControl.valueChanges.subscribe(value => {
      this.filterArray(value);
    });

    // ).pipe(
    //   startWith(''),
    //   map(value => this.filterOptions(value))
    // );
    this.http.get('/assets/data.json').subscribe(data => {
      console.log(data);
      this.customers = data;
    });
    this.addMoreDetails = false;
    console.log(this.addMoreDetails);
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

  optionSelected(event){
    const selectedOption = event.option.value;
    let product = {
            id: selectedOption.id,
            name: selectedOption.name,
            price: selectedOption.price,
            quantity: 1
          }
    this.addToCart(product);
    this.selectedOptions.push(product);
    this.autocompleteControl.setValue('');
  }

  optionSelected1(event){
    this.currentCustomer = event.option.value;
    console.log('clcik')
    console.log(event);
  }

  removeOption(index: number) {
    console.log('removed');
    this.selectedOptions.splice(index, 1);
  }

  addToCart(product: any): void {
    this.cartService.addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  }

  increaseQty(item){
    this.cartService.increase(item);
  }

  decreaseQty(item){
    this.cartService.decrease(item);
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  displayFn(item: any): string {
    return item ? item.name : '';
  }

  addMoreDetailsHandler() {
    return this.addMoreDetails = !this.addMoreDetails;
  }

  totalAmount(){
    let cartItems = this.cartService.getCartItems();
    let totalPrice = 0;
    for(let cart of cartItems){
      totalPrice += cart.price * cart.quantity;
    }
    return totalPrice;
  }

  tenderedAmt(event){
    let tenderedAmt = event.target.value;
    this.tenderedAmount = tenderedAmt;
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
    this.toastr.success('Created Online', 'Order', {
      timeOut: 5000
    });
    document.getElementById("exampleModal5Close").click();
  } else {
    let cartItems = this.cartService.getCartItems();
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
    this.cartService.clearCart();
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
