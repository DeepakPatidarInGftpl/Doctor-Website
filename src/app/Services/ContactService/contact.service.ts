import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  //supplier

  getSupplier() {
    let url = this.apiUrl + '/pv-api/supplier/';
    return this.http.get(url)
  }
  getSupplierById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/supplier/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  SupplierIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/supplier/?id=';
    return this.http.patch(`${url}${id}`, data);
  }

  addSupplier(data:any) {
    let url = this.apiUrl + '/pv-api/supplier/';
    return this.http.post(url, data)
  }
  updateSupplier(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/supplier/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteSupplier(id: number) {
    let url = this.apiUrl + '/pv-api/supplier/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // vendor

  getVendor() {
    let url = this.apiUrl + '/pv-api/vendor/';
    return this.http.get(url)
  }
  getVendorById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/vendor/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  VendorIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/vendor/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addVendor(data:any) {
    let url = this.apiUrl + '/pv-api/vendor/';
    return this.http.post(url, data)
  }
  updateVendor(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/vendor/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteVendor(id: number) {
    let url = this.apiUrl + '/pv-api/vendor/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // Pament terms
  
  getPaymentTerms() {
    let url = this.apiUrl + '/pv-api/payment_terms/';
    return this.http.get(url)
  }
  getPaymentTermsById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/payment_terms/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  PaymentTermsIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/payment_terms/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addPaymentTerms(data:any) {
    let url = this.apiUrl + '/pv-api/payment_terms/';
    return this.http.post(url, data)
  }
  updatePaymentTerms(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/payment_terms/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deletePaymentTerms(id: number) {
    let url = this.apiUrl + '/pv-api/payment_terms/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // type of gst
  getTypeOfGst(){
    let url = this.apiUrl+'/pv-api/types_of_gst/';
    return this.http.get(url);
  }

  // transport apis

  getTransport() {
    let url = this.apiUrl + '/pv-api/transport/';
    return this.http.get(url)
  }
  getTransportById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/transport/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  TransportIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/transport/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addTransport(data:any) {
    let url = this.apiUrl + '/pv-api/transport/';
    return this.http.post(url, data)
  }
  updateTransport(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/transport/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteTransport(id: number) {
    let url = this.apiUrl + '/pv-api/transport/?id=';
    return this.http.delete(`${url}${id}`)
  }

//Employee

getEmployee() {
  let url = this.apiUrl + '/pv-api/employee/';
  return this.http.get(url)
}
getEmployeeById(id: number): Observable<any> {
  let url = this.apiUrl + '/pv-api/employee/?id='
  return this.http.get<any>(`${url}${id}`)
}
EmployeeIsActive(id: any, data) {
  let url = this.apiUrl + '/pv-api/employee/?id=';
  return this.http.patch(`${url}${id}`, data);
}
addEmployee(data:any) {
  let url = this.apiUrl + '/pv-api/employee/';
  return this.http.post(url, data)
}
updateEmployee(data: any, id: number) {
  let url = this.apiUrl + '/pv-api/employee/?id=';
  return this.http.put(`${url}${id}`,data)
}
deleteEmployee(id: number) {
  let url = this.apiUrl + '/pv-api/employee/?id=';
  return this.http.delete(`${url}${id}`)
}

// Customer apis

getCustomer() {
  let url = this.apiUrl + '/pv-api/customer/';
  return this.http.get(url)
}
getCustomerById(id: number): Observable<any> {
  let url = this.apiUrl + '/pv-api/customer/?id='
  return this.http.get<any>(`${url}${id}`)
}
CustomerIsActive(id: any, data) {
  let url = this.apiUrl + '/pv-api/customer/?id=';
  return this.http.patch(`${url}${id}`, data);
}
addCustomer(data:any) {
  let url = this.apiUrl + '/pv-api/customer/';
  return this.http.post(url, data)
}
updateCustomer(data: any, id: number) {
  let url = this.apiUrl + '/pv-api/customer/?id=';
  return this.http.put(`${url}${id}`,data)
}
deleteCustomer(id: number) {
  let url = this.apiUrl + '/pv-api/customer/?id=';
  return this.http.delete(`${url}${id}`)
}
}
