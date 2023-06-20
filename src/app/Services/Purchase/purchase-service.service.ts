import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

   //supplier
   getSupplier() {
    let url = this.apiUrl + '/pv-api/supplier/';
    return this.http.get(url)
  }

  // purchase 

  getPurchase(){
    let url =this.apiUrl+'/pv-api/purchase_order/';
    return this.http.get(url);
  }
  addPurchase(data:any){
    let url = this.apiUrl+'/pv-api/purchase_order/';
    return this.http.post(url,data);
  }
  getPurchaseById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_order/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  PurchaseIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/purchase_order/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updatePurchase(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/purchase_order/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deletePurchase(id: number) {
    let url = this.apiUrl + '/pv-api/purchase_order/?id=';
    return this.http.delete(`${url}${id}`)
  }
  searchProduct(query: any) {
    let url = this.apiUrl + '/pv-api/product_search/?search=';
    return this.http.get(url + query);
  }
  productVariant(){
    let url = this.apiUrl+'/pv-api/product_variant/';
    return this.http.get(url)
  }
  
  //material-inward
  getMaterial(){
    let url =this.apiUrl+'/pv-api/material_inward/';
    return this.http.get(url);
  }
  addMaterial(data:any){
    let url = this.apiUrl+'/pv-api/material_inward/';
    return this.http.post(url,data);
  }
  getMaterialById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/material_inward/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  MaterialIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateMaterial(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteMaterial(id: number) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.delete(`${url}${id}`)
  }
  
  // purchase-bill
    
  getPurchaseBill(){
    let url =this.apiUrl+'/pv-api/purchase_bill/';
    return this.http.get(url);
  }
  addPurchaseBill(data:any){
    let url = this.apiUrl+'/pv-api/purchase_bill/';
    return this.http.post(url,data);
  }
  getPurchaseBillById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  PurchaseBillIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updatePurchaseBill(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deletePurchaseBill(id: number) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.delete(`${url}${id}`)
  }


  // debit notes
  getDebitNotes(){
    let url =this.apiUrl+'/pv-api/debit_note/';
    return this.http.get(url);
  }
  addDebitNotes(data:any){
    let url = this.apiUrl+'/pv-api/debit_note/';
    return this.http.post(url,data);
  }
  getDebitNotesById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/debit_note/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  DebitNotesIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateDebitNotes(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteDebitNotes(id: number) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.delete(`${url}${id}`)
  }
}
