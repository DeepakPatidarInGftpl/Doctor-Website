import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  
  //sales order
  getSalesOrder() {
    let url = this.apiUrl + '/pv-api/sale_order/';
    return this.http.get(url)
  }
  getSalesOrderById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/sale_order/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SalesOrderIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/sale_order/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addSalesOrder(data: any) {
    let url = this.apiUrl + '/pv-api/sale_order/';
    return this.http.post(url, data)
  }
  updateSalesOrder(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/sale_order/?sale_order_id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteSalesOrder(id: number) {
    let url = this.apiUrl + '/pv-api/sale_order/?id=';
    return this.http.delete(`${url}${id}`)
  }

   //sales Estimates
   getSalesEstimate() {
    let url = this.apiUrl + '/pv-api/estimate/';
    return this.http.get(url)
  }
  getSalesEstimateById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/estimate/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SalesEstimateIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/estimate/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addSalesEstimate(data: any) {
    let url = this.apiUrl + '/pv-api/estimate/';
    return this.http.post(url, data)
  }
  updateSalesEstimate(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/estimate/?estimate_id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteSalesEstimate(id: number) {
    let url = this.apiUrl + '/pv-api/estimate/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // sales bill
   getSalesBill() {
    let url = this.apiUrl + '/pv-api/sale_bill/';
    return this.http.get(url)
  }
  getSalesBillById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/sale_bill/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SalesBillIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/sale_bill/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addSalesBill(data: any) {
    let url = this.apiUrl + '/pv-api/sale_bill/';
    return this.http.post(url, data)
  }
  updateSalesBill(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/sale_bill/?sale_bill_id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteSalesBill(id: number) {
    let url = this.apiUrl + '/pv-api/sale_bill/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // material outward

  
  // sales bill
  getSalesMaterialOutward() {
    let url = this.apiUrl + '/pv-api/material_outward/';
    return this.http.get(url)
  }
  getSalesMaterialOutwardById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/material_outward/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SalesMaterialOutwardIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/material_outward/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addSalesMaterialOutward(data: any) {
    let url = this.apiUrl + '/pv-api/material_outward/';
    return this.http.post(url, data)
  }
  updateSalesMaterialOutward(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/material_outward/?material_outward_id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteSalesMaterialOutward(id: number) {
    let url = this.apiUrl + '/pv-api/material_outward/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // sales Return
  getSaleReturn() {
    let url = this.apiUrl + '/pv-api/sale_return/';
    return this.http.get(url)
  }
  getSaleReturnById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/sale_return/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SaleReturnIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/sale_return/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addSaleReturn(data: any) {
    let url = this.apiUrl + '/pv-api/sale_return/';
    return this.http.post(url, data)
  }
  updateSaleReturn(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/sale_return/?sale_return_id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteSaleReturn(id: number) {
    let url = this.apiUrl + '/pv-api/sale_return/?id=';
    return this.http.delete(`${url}${id}`)
  }  

  // search product
  getSearchProductById(id:any){
    let url =this.apiUrl+'/pv-api/variant-search/?search='
    return this.http.get(`${url}${id}`)
  }
  getSearchProduct(){
    let url =this.apiUrl+'/pv-api/variant-search/'
    return this.http.get(url)
  }
  filterVariant( category: any, subcategory: any, search: any): Observable<any> {
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


  // sale prefix
  getSaleOrderPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=SaleOrder';
    return this.http.get(url)
  }
  getSaleBillPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=SaleBill';
    return this.http.get(url)
  }
  getSaleReturnPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=SaleReturn';
    return this.http.get(url)
  }
  getEstimatePrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=Estimate';
    return this.http.get(url)
  }  
  getMaterialOutwardPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=MaterialOutward';
    return this.http.get(url)
  } 
  getAdvanceBookingPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=AdvanceBooking';
    return this.http.get(url)
  }  

  getUser() {
    let url = this.apiUrl + '/pv-api/contact-user/';
    return this.http.get(url)
  }

  // advance booking 
  
   //sales Estimates
   getAdvanceBooking() {
    let url = this.apiUrl + '/pv-api/advance_booking/';
    return this.http.get(url)
  }
  getAdvanceBookingById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/advance_booking/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  AdvanceBookingIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/advance_booking/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addAdvanceBooking(data: any) {
    let url = this.apiUrl + '/pv-api/advance_booking/';
    return this.http.post(url, data)
  }
  updateAdvanceBooking(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/advance_booking/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteAdvanceBooking(id: number) {
    let url = this.apiUrl + '/pv-api/advance_booking/?id=';
    return this.http.delete(`${url}${id}`)
  }
}
