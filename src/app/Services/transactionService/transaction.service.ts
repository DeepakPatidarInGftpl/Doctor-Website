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
}
