import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})



export class PosComponent implements OnInit {
  //options: string[] = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
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


  constructor(private http: HttpClient, private cartService:PosCartService) { 
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
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.customers = data;
    // })
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
    this.autocompleteControl.setValue('');
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
