import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

    // offer
    getDiscount() {
      let url = this.apiUrl + '/pv-api/discount/';
      return this.http.get(url)
    }
    getDiscountById(id: number): Observable<any> {
      let url = this.apiUrl + '/pv-api/discount/?id='
      return this.http.get<any>(`${url}${id}`)
    }
    DiscountIsActive(id: any, data) {
      let url = this.apiUrl + '/pv-api/discount/?id=';
      return this.http.patch(`${url}${id}`, data);
    }
    addDiscount(data: any) {
      let url = this.apiUrl + '/pv-api/discount/';
      return this.http.post(url, data)
    }
    updateDiscount(data: any, id: number) {
      let url = this.apiUrl + '/pv-api/discount/?id=';
      return this.http.put(`${url}${id}`, data)
    }
    deleteDiscount(id: number) {
      let url = this.apiUrl + '/pv-api/discount/?id=';
      return this.http.delete(`${url}${id}`)
    }
}
