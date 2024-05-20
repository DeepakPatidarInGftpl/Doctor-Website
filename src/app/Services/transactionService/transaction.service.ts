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
  //20-5
  getDebitNoteFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/debit_note/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
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
  //20-5
  getCreditNoteFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/credit_note/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
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
  //20-5
  getJournalVoucherFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/jounal_voucher/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
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
   //20-5
   getCountraVoucherFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/countra_voucher/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
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

  // Reciept voucher
  //20-5
  getRecieptVoucherFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/receipt_voucher/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }

  getRecieptVoucher() {
    let url = this.apiUrl + '/pv-api/receipt_voucher/';
    return this.http.get(url)
  }
  getRecieptVoucherById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/receipt_voucher/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  RecieptVoucherIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/receipt_voucher/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addRecieptVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/receipt_voucher/';
    return this.http.post(url, data)
  }
  updateRecieptVoucher(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/receipt_voucher/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteRecieptVoucher(id: number) {
    let url = this.apiUrl + '/pv-api/receipt_voucher/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // payment voucher
  getPaymentVoucherFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/payment_voucher/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
   getPaymentVoucher() {
    let url = this.apiUrl + '/pv-api/payment_voucher/';
    return this.http.get(url)
  }
  getPaymentVoucherById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/payment_voucher/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  PaymentVoucherIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/payment_voucher/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addPaymentVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/payment_voucher/';
    return this.http.post(url, data)
  }
  updatePaymentVoucher(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/payment_voucher/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deletePaymentVoucher(id: number) {
    let url = this.apiUrl + '/pv-api/payment_voucher/?id=';
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
  getPaymentVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=PaymentVoucher';
    return this.http.get(url)
  } 
  getExpenceVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=ExpensesVoucher';
    return this.http.get(url)
  } 
  getMaterialConsuptionPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=MaterialConsumption';
    return this.http.get(url)
  }
  // account service
  getAccount() {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get(url)
  }
  // sale bill
  getSalesBill() {
    let url = this.apiUrl + '/pv-api/sale_bill/';
    return this.http.get(url)
  }
  // purchase bill
  getPurchaseBill(){
    let url =this.apiUrl+'/pv-api/purchase_bill/';
    return this.http.get(url);
  }
 // supplier 
  getSupplier() {
    let url = this.apiUrl + '/pv-api/supplier/';
    return this.http.get(url)
  }

  // expense voucher 11-1
  //20-5
  getExpensVoucherFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/expense_voucher/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
  getExpensVoucher() {
    let url = this.apiUrl + '/pv-api/expense_voucher/';
    return this.http.get(url)
  }
  getExpensVoucherById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/expense_voucher/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  ExpensVoucherIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/expense_voucher/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addExpensVoucher(data: any) {
    let url = this.apiUrl + '/pv-api/expense_voucher/';
    return this.http.post(url, data)
  }
  updateExpensVoucher(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/expense_voucher/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteExpensVoucher(id: number) {
    let url = this.apiUrl + '/pv-api/expense_voucher/?id=';
    return this.http.delete(`${url}${id}`)
  }

  //material consumption
  //20-5
  getMaterialConsuptionFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/material_consumption/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
  getMaterialConsuption() {
    let url = this.apiUrl + '/pv-api/material_consumption/';
    return this.http.get(url)
  }
  getMaterialConsuptionById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/material_consumption/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  MaterialConsuptionIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/material_consumption/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addMaterialConsuption(data: any) {
    let url = this.apiUrl + '/pv-api/material_consumption/';
    return this.http.post(url, data)
  }
  updateMaterialConsuption(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/material_consumption/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteMaterialConsuption(id: number) {
    let url = this.apiUrl + '/pv-api/receipt_voucher/?id=';
    return this.http.delete(`${url}${id}`)
  }
  getUser() {
    let url = this.apiUrl + '/pv-api/contact-user/';
    return this.http.get(url)
  }
  getScrapEntryVoucherPrefix(){
    let url =this.apiUrl+'/pv-api/prefix/?id=ScarpEntry';
    return this.http.get(url)
  }
  getScrapEntryFy(fy:any,branch:any) {
    console.log(branch,'branch');
    console.log(branch.length,'branch');
    let url = this.apiUrl + '/pv-api/scarp_entry/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length> 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
  getScrapEntry() {
    let url = this.apiUrl + '/pv-api/scarp_entry/';
    return this.http.get(url);
  }
  getScrapEntryById(id:number) {
    let url = this.apiUrl + '/pv-api/scarp_entry/?id=';
    return this.http.get(`${url}${id}`);
  }
  
  addScrapEntry(data: any) {
    let url = this.apiUrl + '/pv-api/scarp_entry/';
    return this.http.post<any>(url, data,)
  }
     // variant search
     searchProduct(query: any) {
      let url = this.apiUrl + '/pv-api/variant-search/?search=';
      return this.http.get(url + query);
    }
}
