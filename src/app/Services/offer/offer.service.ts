import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // variant search
  searchProduct(query: any) {
    let url = this.apiUrl + '/pv-api/variant-search/?search=';
    return this.http.get(url + query);
  }

  getSubcatByBrand(id: any) {
    let url = this.apiUrl + '/pv-api/brands_wise_subcategory/?brands_id=';
    return this.http.get<any>(`${url}${id}`)
  }

  getAllCoupons() {
    let url = this.apiUrl + '/pv-api/coupons/';
    return this.http.get<any>(`${url}`)
  }

  addCoupon(data: any) {
    let url = this.apiUrl + '/pv-api/coupons/';
    return this.http.post<any>(`${url}`, data);
  }

  updateCoupon(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/coupons/?id=' + id;
    return this.http.put<any>(`${url}`, data);
  }

  deleteCoupon(id: number) {
    let url = this.apiUrl + '/pv-api/coupons/?id=' + id;
    return this.http.delete<any>(`${url}`);
  }

  exportSampleOfferFile(): Observable<any> {
    let url = this.apiUrl + '/pv-api/sample_files_export/?table_name=Coupon';
    return this.http.get<any>(`${url}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }),
      responseType: 'blob' as 'json'
    })
  }

  importOfferFile(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/coupon_files_import/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  offerValidation(value) {
    let url = this.apiUrl + '/pv-api/coupons_validation/?coupon_code=' + value;
    return this.http.get<any>(`${url}`);
  }
}
