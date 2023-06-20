import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  // trending products
  getVariant(){
    let url = this.apiUrl+'/pv-api/product_variant/';
    return this.http.get(url)
  }
  getTrendingProducts(){
    let url =this.apiUrl+'/pv-api/trending_product/';
    return this.http.get(url);
  }
  addTrendingProducts(data:any){
    let url = this.apiUrl+'/pv-api/trending_product/';
    return this.http.post(url,data);
  }
  getTrendingProductsById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/trending_product/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  TrendingProductsIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/trending_product/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateTrendingProducts(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/trending_product/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteTrendingProducts(id: number) {
    let url = this.apiUrl + '/pv-api/trending_product/?id=';
    return this.http.delete(`${url}${id}`)
  }

   // banner
   getBanner() {
    let url = this.apiUrl + '/pv-api/banner/';
    return this.http.get(url)
  }
  getBannerbById(id: any) {
    let url = this.apiUrl + '/pv-api/banner/?id=';
    return this.http.get(`${url}${id}`)
  }
  addBanner(data: any) {
    let url = this.apiUrl + '/pv-api/banner/';
    return this.http.post(url, data)
  }
  updateBanner(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/banner/?id=';
    return this.http.put(`${url}${id}`, data)
  }

  deleteBanner(id: any) {
    let url = this.apiUrl + '/pv-api/banner/?id=';
    return this.http.delete(`${url}${id}`)
  }
  bannerIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/banner/?id=';
    return this.http.patch(`${url}${id}`, data);
  }

  // /pv-api/footer_features/
  getFooterFeature() {
    let url = this.apiUrl + '/pv-api/footer_features/';
    return this.http.get(url)
  }
  getFooterFeatureById(id) {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.get(`${url}${id}`)
  }
  footerIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  addFooterFeature(data: any) {
    let url = this.apiUrl + '/pv-api/footer_features/';
    return this.http.post(url, data);
  }
  updateFooterFeature(data: any, id: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.put<any>(`${url}${id}`, data)
  }
  deleteFooterFeature(id: number) {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.delete(`${url}${id}`)
  }
  deletesize(id: number) {
    let url = this.apiUrl + '/pv-api/size/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
}
