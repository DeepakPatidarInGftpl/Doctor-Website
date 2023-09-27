import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  
  //debit
  getDebitNote() {
    let url = this.apiUrl + '/pv-api/debit_note/';
    return this.http.get(url)
  }
  getDebitNoteById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/debit_note/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  DebitNoteIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addDebitNote(data: any) {
    let url = this.apiUrl + '/pv-api/debit_note/';
    return this.http.post(url, data)
  }
  updateDebitNote(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteDebitNote(id: number) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // /pv-api/credit_note/
  getCreditNote() {
    let url = this.apiUrl + '/pv-api/credit_note/';
    return this.http.get(url)
  }
  getCreditNoteById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/credit_note/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  CreditNoteIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/credit_note/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addCreditNote(data: any) {
    let url = this.apiUrl + '/pv-api/credit_note/';
    return this.http.post(url, data)
  }
  updateCreditNote(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/credit_note/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteCreditNote(id: number) {
    let url = this.apiUrl + '/pv-api/credit_note/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // Journal voucher
  getJournalVoucher() {
    let url = this.apiUrl + '/pv-api/jounal_voucher/';
    return this.http.get(url)
  }
  getJournalVoucherById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/jounal_voucher/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  JournalVoucherIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/jounal_voucher/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addJournalVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/jounal_voucher/';
    return this.http.post(url, data)
  }
  updateJournalVoucher(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/jounal_voucher/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteJournalVoucher(id: number) {
    let url = this.apiUrl + '/pv-api/jounal_voucher/?id=';
    return this.http.delete(`${url}${id}`)
  }

   // Countra voucher
   getCountraVoucher() {
    let url = this.apiUrl + '/pv-api/countra_voucher/';
    return this.http.get(url)
  }
  getCountraVoucherById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/countra_voucher/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  CountraVoucherIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/countra_voucher/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addCountraVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/countra_voucher/';
    return this.http.post(url, data)
  }
  updateCountraVoucher(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/countra_voucher/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteCountraVoucher(id: number) {
    let url = this.apiUrl + '/pv-api/countra_voucher/?id=';
    return this.http.delete(`${url}${id}`)
  }


  //prefix
  getJournalVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=JournalVoucher';
    return this.http.get(url)
  }
  getDebitNotePrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=DebitNote';
    return this.http.get(url)
  }
  getCreditNotePrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=CreditNote';
    return this.http.get(url)
  }
  getCountraVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=CountraVoucher';
    return this.http.get(url)
  }  
  getReceiptVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=ReceiptVoucher';
    return this.http.get(url)
  } 

  // account service
  getAccount() {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get(url)
  }
}
