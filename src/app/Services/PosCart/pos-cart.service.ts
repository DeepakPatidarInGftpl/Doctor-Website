import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosCartService {
  apiUrl = `${environment.api}`;

  currentItems: any[] = [];
  private cartItems: any[] = [];
  private orders: any[] = [];

  constructor(private http: HttpClient) {
    const orders = localStorage.getItem('orders');
    const items = localStorage.getItem('cartItems');
    if (items) {
      this.cartItems = JSON.parse(items);
    }
    if (orders) {
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

  increaseCurrent(item: any): void {
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);
    if (index !== -1) {
      this.currentItems[index].quantity += 1;
    }
  }

  decreaseCurrent(item: any): void {
    const index = this.currentItems.findIndex(currentItem => currentItem.id === item.id && currentItem.batch[0].id === item.batch[0].id);

    if (index !== -1) {
      if (this.currentItems[index].quantity == 1) {
        this.removeFromCurrent(item);
      } else {
        this.currentItems[index].quantity -= 1;
      }
    }

  }

  removeFromCurrent(item: any): void {
    console.warn(item, 'service');

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

  increase(item: any): void {
    const found = this.cartItems.find(cartItem => cartItem.id === item.id);
    found.quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decrease(item: any): void {
    const found = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (found.quantity == 1) {
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

  addCustomer(data: any) {
    let url = this.apiUrl + '/pv-api/pos/Addcustomers/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getCustomer(data: any) {
    let url = this.apiUrl + '/pv-api/pos/customer_filter/?search=' + data;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getAllCustomer() {
    let url = this.apiUrl + '/pv-api/pos/customer_filter/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getAllProducts() {
    let url = this.apiUrl + '/pv-api/pos/all_products/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getAllCustomers() {
    let url = this.apiUrl + '/pv-api/pos/all_customers/';
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

  getTaxes() {
    let url = this.apiUrl + '/pv-api/pos/tax_pos/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getCompanyBank() {
    let url = this.apiUrl + '/pv-api/pos/company_bank/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getPaymentTerms() {
    let url = this.apiUrl + '/pv-api/pos/payment_terms_pos/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  generateOrderNew(data: any) {
    let url = this.apiUrl + '/pv-api/pos/pos_new_order/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  receiptPayment(data: any) {
    let url = this.apiUrl + '/pv-api/pos/receipt_advance_payment_or_againest_bill/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  purchasePayment(data: any) {
    let url = this.apiUrl + '/pv-api/pos/party_advance_payment_or_againest_bill/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  expensePayment(data: any) {
    let url = this.apiUrl + '/pv-api/pos/expance/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getPOSOrders(page, pageSize) {
    let url = this.apiUrl + `/pv-api/pos/pos_orders/?page=${page}&page_size=${pageSize}`;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getPOSOrderDetails(id: any) {
    let url = this.apiUrl + '/pv-api/pos/pos_order_detail/?order_id=' + id;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getExpensePayments() {
    let url = this.apiUrl + '/pv-api/pos/expance/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getPurchasePayments() {
    let url = this.apiUrl + '/pv-api/pos/all_payments/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getSalesPayments() {
    let url = this.apiUrl + '/pv-api/pos/all_receipts/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getReceiptDueOrder(id: any) {
    let url = this.apiUrl + '/pv-api/pos/receipt_due_order/?customer_id=' + id;
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //20-04
  productSearch(val: any) {
    let url = this.apiUrl + '/pv-api/pos/product_search/?search=';
    return this.http.get(`${url}${val}`)
  }

  paymentModesLogo() {
    let url = this.apiUrl + '/pv-api/web/payment_modes_logo/';
    return this.http.get(`${url}`)
  }

  addPosPaymentVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/pos/payment_voucher/';
    return this.http.post(url, data)
  }

  addPosCreditNoteList(data: any) {
    let url = this.apiUrl + '/pv-api/pos/credit_note/';
    return this.http.post(url, data)
  }

  addPosExpenseVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/pos/expence_voucher/';
    return this.http.post(url, data)
  }

  addPosRecieptVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/pos/recipt_voucher/';
    return this.http.post(url, data)
  }

  getPosPaymentVoucher() {
    let url = this.apiUrl + '/pv-api/pos/payment_voucher/';
    return this.http.get(url)
  }

  getPosCreditNoteList() {
    let url = this.apiUrl + '/pv-api/pos/credit_note/';
    return this.http.get(url)
  }

  getPosExpenseVoucher() {
    let url = this.apiUrl + '/pv-api/pos/expence_voucher/';
    return this.http.get(url)
  }

  getPosRecieptVoucher() {
    let url = this.apiUrl + '/pv-api/pos/recipt_voucher/';
    return this.http.get(url)
  }

  getPosCreditNoteByAccountId(accountId: any) {
    let url = this.apiUrl + '/pv-api/pos/credit_note/?account_id=' + accountId;
    return this.http.get(url)
  }

  getPosCreditLimitByUserId(userId) {
    let url = this.apiUrl + '/pv-api/get_credit_limit/?user_by_credit_id=' + userId;
    return this.http.get(url)
  }

  posOrderReturn(data: any) {
    let url = this.apiUrl + '/pv-api/pos/pos_order_return/';
    return this.http.post(url, data);
  }
}
