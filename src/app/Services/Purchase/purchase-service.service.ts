import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {
  getBranch() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  //supplier
  getSupplier(query) {
    let url = this.apiUrl + '/pv-api/supplier/?search=' + query;
    return this.http.get(url)
  };

  sale_and_purchase_qty_for_purchase_order(id:number):Observable<any>{
    let url = this.apiUrl + '/pv-api/sale_and_purchase_qty_for_purchase_order/?id='+id;
    return this.http.get(url)
  }


Ckqut(id:string,mrp:string){
  const URL =  this.apiUrl + '/pv-api/stock_check/';
  const ParemQuery = new URLSearchParams();

  ParemQuery.append('id',id)
  ParemQuery.append('mrp',mrp);

//  return this.http.get(URL+"?"+ParemQuery.toString())
return this.http.get<any>(URL + (ParemQuery.toString() ? '?' + ParemQuery.toString() : ''));

}




  // purchase 
  // getPurchaseFY(fy:any){
  //   let url =this.apiUrl+'/pv-api/purchase_order/?financial_year=';
  //   return this.http.get(`${url}${fy}`);
  // }
  getPurchaseFY(fy: any, branch: any) {
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    let url = this.apiUrl + '/pv-api/purchase_order/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
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
  getPurchase() {
    let url = this.apiUrl + '/pv-api/purchase_order/';
    return this.http.get(url);
  }

  getPurchaseOrderByUserId(id) {
    let url = this.apiUrl + '/pv-api/purchase_order/?user_id=' + id;
    return this.http.get(url);
  }

  addPurchase(data: any) {
    let url = this.apiUrl + '/pv-api/purchase_order/';
    return this.http.post(url, data);
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
    return this.http.put(`${url}${id}`, data)
  }
  deletePurchase(id: number) {
    let url = this.apiUrl + '/pv-api/purchase_order/?id=';
    return this.http.delete(`${url}${id}`)
  }
  searchProduct(query: any) {
    let url = this.apiUrl + '/pv-api/product_search/?search=';
    return this.http.get(url + query);
  }
  productVariant() {
    let url = this.apiUrl + '/pv-api/product_variant/';
    return this.http.get(url)
  }

  //material-inward
  // getMaterialFY(fy:any){
  //   let url =this.apiUrl+'/pv-api/material_inward/?financial_year=';
  //   return this.http.get(`${url}${fy}`);
  // }
  getMaterialFY(fy: any, branch: any) {
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    let url = this.apiUrl + '/pv-api/material_inward/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
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
  getMaterial() {
    let url = this.apiUrl + '/pv-api/material_inward/';
    return this.http.get(url);
  }
  addMaterial(data: any) {
    let url = this.apiUrl + '/pv-api/material_inward/';
    return this.http.post(url, data);
  }
  getMaterialById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/material_inward/?id='
    return this.http.get<any>(`${url}${id}`)
  }

  getMaterialByUserId(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/material_inward/?user_id='
    return this.http.get<any>(`${url}${id}`)
  }

  MaterialIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateMaterial(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteMaterial(id: number) {
    let url = this.apiUrl + '/pv-api/material_inward/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // purchase-bill
  // getPurchaseBillFY(fy:any){
  //   let url =this.apiUrl+'/pv-api/purchase_bill/?financial_year=';
  //   return this.http.get(`${url}${fy}`);
  // }
  getPurchaseBillFY(fy: any, branch: any) {
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    let url = this.apiUrl + '/pv-api/purchase_bill/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
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
  getPurchaseBill() {
    let url = this.apiUrl + '/pv-api/purchase_bill/';
    return this.http.get(url);
  }
  addPurchaseBill(data: any) {
    let url = this.apiUrl + '/pv-api/purchase_bill/';
    return this.http.post(url, data);
  }
  getPurchaseBillById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id='
    return this.http.get<any>(`${url}${id}`)
  }

  getPurchaseBillByUserId(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_bill/?user_id='
    return this.http.get<any>(`${url}${id}`)
  }

  PurchaseBillIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updatePurchaseBill(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deletePurchaseBill(id: number) {
    let url = this.apiUrl + '/pv-api/purchase_bill/?id=';
    return this.http.delete(`${url}${id}`)
  }


  // debit notes
  // getDebitNotes(){
  //   let url =this.apiUrl+'/pv-api/debit_note/';
  //   return this.http.get(url);
  // }
  getDebitNotes(fy: any, branch: any) {
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    let url = this.apiUrl + '/pv-api/debit_note/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
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
  addDebitNotes(data: any) {
    let url = this.apiUrl + '/pv-api/debit_note/';
    return this.http.post(url, data);
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
    return this.http.put(`${url}${id}`, data)
  }
  deleteDebitNotes(id: number) {
    let url = this.apiUrl + '/pv-api/debit_note/?id=';
    return this.http.delete(`${url}${id}`)
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

  //prefix

  getPurchaseOrderPrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=PurchaseOrder';
    return this.http.get(url)
  }
  getPurchaseBillPrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=PurchaseBill';
    return this.http.get(url)
  }
  getDebitNotePrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=PurchaseReturn';
    return this.http.get(url)
  }
  getMaterialInwardPrefix() {
    let url = this.apiUrl + '/pv-api/prefix/?id=MaterialInward';
    return this.http.get(url)
  }

  //productbySupplier
  productBySupplier() {
    let url = this.apiUrl + '/pv-api/purchase_product_filter/';
    return this.http.get(url)
  }
  getAdditionalCharge() {
    let url = this.apiUrl + '/pv-api/pos/additional_charge_pos/';
    return this.http.get(url)
  }
  getTax() {
    let url = this.apiUrl + '/pv-api/tax/';
    return this.http.get(url)
  }

  //purchaseReturn
  // getPurchaseReturnfy(fy:any){
  //   let url =this.apiUrl+'/pv-api/purchase_return/?financial_year=';
  //   return this.http.get(`${url}${fy}`);
  // }
  getPurchaseReturnfy(fy: any, branch: any) {
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    let url = this.apiUrl + '/pv-api/purchase_return/';
    const queryParams: any[] = [];
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
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
  getPurchaseReturn() {
    let url = this.apiUrl + '/pv-api/purchase_return/';
    return this.http.get(url);
  }
  addPurchaseReturn(data: any) {
    let url = this.apiUrl + '/pv-api/purchase_return/';
    return this.http.post(url, data);
  }
  getPurchaseReturnById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_return/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  PurchaseReturnIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/purchase_return/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updatePurchaseReturn(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/purchase_return/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deletePurchaseReturn(id: number) {
    let url = this.apiUrl + '/pv-api/purchase_return/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // filterVariant(sid: number,category:any,subcategory:any,search:any): Observable<any> {
  //   let url = this.apiUrl + '/pv-api/purchase_product_filter/'
  //   return this.http.get<any>(`${url}${sid}`)
  // }

  filterVariant(supplierid: number, category: any, subcategory: any, search: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/purchase_product_filter/';
    const queryParams: any[] = [];
    if (supplierid) {
      queryParams.push(`supplier=${supplierid}`);
    }
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

  purchaseReturnStatusUpdate(data) {
    let url = this.apiUrl + '/pv-api/purchase_return_status_update/';
    return this.http.post(url, data);
  }
}
