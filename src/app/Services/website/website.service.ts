import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

   // blur bg when modal open & transfer data to another components
   public checkBlurSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
   public CheckBlur$: Observable<any> = this.checkBlurSubject.asObservable();
   setCheckBlur(CheckBlur: any) {
     this.checkBlurSubject.next(CheckBlur);
   }
   
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  // trending products
  getVariant() {
    let url = this.apiUrl + '/pv-api/product_variant/';
    return this.http.get(url)
  }
  getTrendingProducts() {
    let url = this.apiUrl + '/pv-api/trending_product/';
    return this.http.get(url);
  }
  addTrendingProducts(data: any) {
    let url = this.apiUrl + '/pv-api/trending_product/';
    return this.http.post(url, data);
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
    return this.http.put(`${url}${id}`, data)
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
    return this.http.delete(`${url}${id}`)
  }

  // deal of the day
  getDealOfTheDay() {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/';
    return this.http.get(url);
  }
  addDealOfTheDay(data: any) {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/';
    return this.http.post(url, data);
  }
  getDealOfTheDayById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  DealOfTheDayIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateDealOfTheDay(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteDealOfTheDay(id: number) {
    let url = this.apiUrl + '/pv-api/deals_of_the_day/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // store_address

  getAddressStore() {
    let url = this.apiUrl + '/pv-api/store_address/';
    return this.http.get(url);
  }
  addAddressStore(data: any) {
    let url = this.apiUrl + '/pv-api/store_address/';
    return this.http.post(url, data);
  }
  getAddressStoreById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/store_address/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  AddressStoreIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/store_address/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateAddressStore(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/store_address/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteAddressStore(id: number) {
    let url = this.apiUrl + '/pv-api/store_address/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // coupon dashboard
  getFooter() {
    let url = this.apiUrl + '/pv-api/footer/';
    return this.http.get(url);
  }
  addFooter(data: any) {
    let url = this.apiUrl + '/pv-api/footer/';
    return this.http.post(url, data);
  }
  getFooterById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/footer/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  FooterIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/footer/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateFooter(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/footer/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteFooter(id: number) {
    let url = this.apiUrl + '/pv-api/footer/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // coupon dashboard 
  getCoupon() {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/';
    return this.http.get(url);
  }
  addCoupon(data: any) {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/';
    return this.http.post(url, data);
  }
  getCouponById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  CouponIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateCoupon(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteCoupon(id: number) {
    let url = this.apiUrl + '/pv-api/coupon_dashboard/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // reason dashboard 
  getReason() {
    let url = this.apiUrl + '/pv-api/reason/';
    return this.http.get(url);
  }
  addReason(data: any) {
    let url = this.apiUrl + '/pv-api/reason/';
    return this.http.post(url, data);
  }
  getReasonById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/reason/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  ReasonIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/reason/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateReason(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/reason/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteReason(id: number) {
    let url = this.apiUrl + '/pv-api/reason/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // about banner 
  getaboutBanner() {
    let url = this.apiUrl + '/pv-api/about_banner/';
    return this.http.get(url);
  }
  addaboutBanner(data: any) {
    let url = this.apiUrl + '/pv-api/about_banner/';
    return this.http.post(url, data);
  }
  getaboutBannerById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/about_banner/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  aboutBannerIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/about_banner/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateaboutBanner(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/about_banner/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteaboutBanner(id: number) {
    let url = this.apiUrl + '/pv-api/about_banner/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // about footer banner 
  getaboutFooterBanner() {
    let url = this.apiUrl + '/pv-api/about_footer_banner/';
    return this.http.get(url);
  }
  addaboutFooterBanner(data: any) {
    let url = this.apiUrl + '/pv-api/about_footer_banner/';
    return this.http.post(url, data);
  }
  getaboutFooterBannerById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/about_footer_banner/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  aboutFooterBannerIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/about_footer_banner/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateaboutFooterBanner(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/about_footer_banner/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteaboutFooterBanner(id: number) {
    let url = this.apiUrl + '/pv-api/about_footer_banner/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // new arrival banner 
  getnewArrivalBanner() {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/';
    return this.http.get(url);
  }
  addnewArrivalBanner(data: any) {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/';
    return this.http.post(url, data);
  }
  getnewArrivalBannerById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  newArrivalBannerIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updatenewArrivalBanner(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deletenewArrivalBanner(id: number) {
    let url = this.apiUrl + '/pv-api/new_arrivals_banner/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // rating and review
  getratingAndReview() {
    let url = this.apiUrl + '/pv-api/rating_and_review_dashboard/';
    return this.http.get(url);
  }
  updateratingAndReview(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/rating_and_review_dashboard/?id=';
    return this.http.put(`${url}${id}`, data)
  }

  //product order
  getProductOrder(){
    let url =this.apiUrl+'/pv-api/website_orders_dashboard/';
    return this.http.get(url)
  }
  getProductOrderById(id:any){
    let url =this.apiUrl+'/pv-api/website_orders_dashboard/?id=';
    return this.http.get(`${url}${id}`)
  }
  getProductOrderByStatus(status:any){
    let url =this.apiUrl+'/pv-api/website_orders_dashboard/?status=';
    return this.http.get(`${url}${status}`)
  }

  // get branch
  addAcceptOrder(data:any){
    let url = this.apiUrl+'/pv-api/order_accept/';
    return this.http.post(url,data)
  }
  rejectOrder(id:any){
    let url = this.apiUrl+'/pv-api/order_reject/?id=';
    return this.http.post(`${url}${id}`,'')
  }
  getServiceAvility(pincode:any){
    let url = this.apiUrl+'/pv-api/serviceability/?delivery_postcode=';
    return this.http.get(`${url}${pincode}`)
  }
  //awd 
  addAWD(data:any){
    let url = this.apiUrl+'/pv-api/assign_awd/';
    return this.http.post(url,data);
  }
  //label download
  downloadLabel(data:any){
    let url = this.apiUrl+'/pv-api/generate_label/';
    return this.http.post(url,data);
  }
  //invoice download
  downloadInvoice(data:any){
    let url = this.apiUrl+'/pv-api/generate_invoice/';
    return this.http.post(url,data);
  }
  // cancel order
  cancelOrder(data:any){
    let url = this.apiUrl+'/pv-api/order_cancel_shiprocket/';
    return this.http.post(url,data);
  }
  //update address
  addAddress(data:any){
    let url = this.apiUrl+'/pv-api/update_customer_address/';
    return this.http.post(url,data);
  }
  //download manifest
  downloadManifest(data:any){
    let url = this.apiUrl+'/pv-api/generate_manifest/';
    return this.http.post(url,data);
  }
  //update order
  updateOrder(data:any){
    let url = this.apiUrl+'/pv-api/order_update_shiprocket/';
    return this.http.post(`${url}`,data);
  }
  // complete status
  completeOrder(id:any,data:any){
    let url = this.apiUrl+'/pv-api/complete_status/?id=';
    return this.http.post(`${url}${id}`,data);
  }

  //order Return ->   27-5
  getorderReturn(status:any,from_date:any,to_date:any, ){
    let url = this.apiUrl+'/pv-api/website_return_orders_dashboard/';
    const queryParams: any[] = [];
    if (status) {
      queryParams.push(`status=${status}`);
    }
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get(url);
  }
  getwebsiteReturnOrder(){
    let url =this.apiUrl+'/pv-api/website_return_orders_dashboard/';
    return this.http.get(url)
  }
  getwebsiteReturnOrderById(id:any){
    let url =this.apiUrl+'/pv-api/website_return_orders/?id=';
    return this.http.get(`${url}${id}`)
  }
  getwebsiteReturnOrderByStatus(status:any){
    let url =this.apiUrl+'/pv-api/website_return_orders/?status=';
    return this.http.get(`${url}${status}`)
  }
  addacceptreturn (data:any){
    let url = this.apiUrl+'/pv-api/return_order_accept/';
    return this.http.post(url,data)
  }
  rejectreturn(id:any){
    let url = this.apiUrl+'/pv-api/return_order_reject/?id=';
    return this.http.post(`${url}${id}`,'')
  }
// 
addAWDReturn(data:any){
  let url = this.apiUrl+'/pv-api/return_order_awd/';
  return this.http.post(url,data);
}
// material recieved
getMaterialRecievedById(id:any){
  let url =this.apiUrl+'/pv-api/return_order_material_received/?id=';
  return this.http.post(`${url}${id}`,'')
}
}
