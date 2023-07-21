import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosCartService {
  apiUrl = `${environment.api}`;

  currentItems:any[] = [];
  private cartItems: any[] = [];
  private orders: any[] = [];

  constructor(private http: HttpClient) { 
    const orders = localStorage.getItem('orders');
    const items = localStorage.getItem('cartItems');
    if (items) {
      this.cartItems = JSON.parse(items);
    }
    if(orders) {
      this.orders = JSON.parse(orders);
    }
  }

  getCurrentItems(): any[] {
    return this.currentItems;
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getOrders(): any[] {
    return this.orders;
  }

  addToCurrent(item: any): void {
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);

     if (index !== -1) {
      this.currentItems[index].quantity += 1;
    } else {
      this.currentItems.push(item);
    }
  }

  increaseCurrent(item: any):void {
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);
    
    if (index !== -1) {
      this.currentItems[index].quantity += 1;
    }
  }

  decreaseCurrent(item: any):void {
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);
    
    if (index !== -1) {
      if(this.currentItems[index].quantity == 1){
        this.removeFromCurrent(item);
      } else {
        this.currentItems[index].quantity -= 1;
      }
    }
    
  }

  removeFromCurrent(item: any): void {
    
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);
    if (index !== -1) {
      this.currentItems.splice(index, 1);
    }
  }

  clearCurrent(): void {
    this.currentItems = [];
  }

  addToCart(item: any): void {
    const found = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (found) {
      found.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  increase(item: any):void {
    const found = this.cartItems.find(cartItem => cartItem.id === item.id);
    found.quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decrease(item: any):void {
    const found = this.cartItems.find(cartItem => cartItem.id === item.id);
    if(found.quantity == 1){
      this.removeFromCart(found);
    } else {
      found.quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
  }

  generateOrder(order: any) {
    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  addCustomer(data:any) {
    let url = this.apiUrl + '/pv-api/pos/Addcustomers/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getCustomer(data:any) {
    let url = this.apiUrl + '/pv-api/pos/customer_filter/?search=' + data;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getAdditionalCharge() {
    let url = this.apiUrl + '/pv-api/pos/additional_charge_pos/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getTaxes(){
    let url = this.apiUrl + '/pv-api/pos/tax_pos/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  generateOrderNew(data:any) {
    let url = this.apiUrl + '/pv-api/pos/pos_new_order/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
}
