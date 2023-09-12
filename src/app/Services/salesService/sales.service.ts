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

}
