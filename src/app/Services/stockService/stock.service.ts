import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  // stock transfer

  getStockTransfer() {
    let url = this.apiUrl + '/pv-api/stock_transfer/';
    return this.http.get(url)
  }
  getStockTransferById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/stock_transfer/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  StockTransferIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/stock_transfer/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addStockTransfer(data: any) {
    let url = this.apiUrl + '/pv-api/stock_transfer/';
    return this.http.post(url, data)
  }
  updateStockTransfer(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/stock_transfer/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteStockTransfer(id: number) {
    let url = this.apiUrl + '/pv-api/stock_transfer/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // stock transfer request

  getStockTransferRequest() {
    let url = this.apiUrl + '/pv-api/transfer_request/';
    return this.http.get(url)
  }
  getStockTransferRequestById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/transfer_request/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  StockTransferRequestIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/transfer_request/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addStockTransferRequest(data: any) {
    let url = this.apiUrl + '/pv-api/transfer_request/';
    return this.http.post(url, data)
  }
  updateStockTransferRequest(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/transfer_request/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteStockTransferRequest(id: number) {
    let url = this.apiUrl + '/pv-api/transfer_request/?id=';
    return this.http.delete(`${url}${id}`)
  }



  //prfix

  getStockTransferPrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=StockTransfer';
    return this.http.get(url)
  }
  getStockTransferRequestPrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=StockTransferRequest';
    return this.http.get(url)
  }

  // search product
  getSearchProductById(id: any) {
    let url = this.apiUrl + '/pv-api/variant-search/?search='
    return this.http.get(`${url}${id}`)
  }
  getSearchProduct() {
    let url = this.apiUrl + '/pv-api/variant-search/'
    return this.http.get(url)
  }
  filterVariant(category: any, subcategory: any, search: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/sales_product_filter/';
    const queryParams: any[] = [];

    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (search) {
      queryParams.push(`search=${search}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCategory() {
    let url = this.apiUrl + '/pv-api/product-category/';
    return this.http.get(url)
  }
  //category wise subcategory
  getSubcategoryByCategory(id: any) {
    let url = this.apiUrl + '/pv-api/category_wise_subcategory/?category_id=';
    return this.http.get<any>(`${url}${id}`);
  }
  // branch 
  getBranch() {
    let url = this.apiUrl + '/pv-api/branch/';
    return this.http.get(url)
  }
}
