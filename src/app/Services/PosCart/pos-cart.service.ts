import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosCartService {

  private cartItems: any[] = [];
  private orders: any[] = [];

  constructor() { 
    const orders = localStorage.getItem('orders');
    const items = localStorage.getItem('cartItems');
    if (items) {
      this.cartItems = JSON.parse(items);
    }
    if(orders) {
      this.orders = JSON.parse(orders);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getOrders(): any[] {
    return this.orders;
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
}
