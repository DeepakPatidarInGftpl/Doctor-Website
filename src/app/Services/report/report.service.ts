import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;
  //{{urls}}/api/reports/supplier/wise/purchase/?start_date=2022-01-19&end_date=2024-03-19&user_id=1

  getSaleInvoiceList(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/invoicelist/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getSaleSummaryList(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getPurchaseSummary(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockLedger(start_date: any, end_date: any, product_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/ledger/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product_id) {
      queryParams.push(`product_id=${product_id}`);

    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductHistory(start_date: any, end_date: any, product_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/history/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product_id) {
      queryParams.push(`product_id=${product_id}`);

    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductDaybook(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/daybook/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockAlert(start_date: any, end_date: any, category: any, subcategory: any, brand: any, cost_price: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/alert/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }

    if (cost_price) {
      queryParams.push(`cost_price=${cost_price}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getDayBook(date: any, voucher_type: any, account_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/day/book/';
    const queryParams: any[] = [];
    if (date) {
      queryParams.push(`date=${date}`);
    }
    if (voucher_type) {
      queryParams.push(`voucher_type=${voucher_type}`);
    }
    if (account_id) {
      queryParams.push(`account_id=${account_id}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleOverDue(date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/overdue/';
    const queryParams: any[] = [];
    if (date) {
      queryParams.push(`date=${date}`);
    }
    console.log(date);

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);

  }
  getAmountWiseSale(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/amountwise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTimeWiseSale(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/timewise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCategoryWiseSale(start_date: any, end_date: any, category: any, subcategory: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/categorywise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBrandWiseSale(start_date: any, end_date: any, brand: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/brandwise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductWiseSale(start_date: any, end_date: any, product: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/productwise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerWiseSale(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customerwise/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerOutstandingSale(start_date: any, end_date: any, customer_type: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customeroutstanding/sale/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (customer_type) {
      queryParams.push(`customer_type=${customer_type}`);

    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerWiseSaleOrder(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customer/wise/saleorder/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  // purchase 
  getPurchaseOverDue(date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/overdue/';
    const queryParams: any[] = [];
    if (date) {
      queryParams.push(`date=${date}`);
    }
    console.log(date);

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // {{urls}}/api/reports/purchase/outstanding_analysis/?start_date=1998-02-15&end_date=2024-01-05&supplier_id=
  getPurchaseOutstanding(start_date: any, end_date: any, supplier_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/outstanding_analysis/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (supplier_id) {
      queryParams.push(`supplier_id=${supplier_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getUser() {
    let url = this.apiUrl + '/pv-api/contact-user/';
    return this.http.get(url)
  }

  getSupplier() {
    let url = this.apiUrl + '/pv-api/supplier/';
    return this.http.get(url)
  }
  getProductWisePurchase(start_date: any, end_date: any, product: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/wise/purchase';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCategoryWisePurchase(start_date: any, end_date: any, category: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/category/wise/purchase/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }


    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBrandWisePurchase(start_date: any, end_date: any, brand: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/brand/wise/purchase/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPriceWisePurchase(start_date: any, end_date: any, price: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/price/wise/purchase/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (price) {
      queryParams.push(`price=${price}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPurchaseRegister(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/register/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getDiscountWisePurchase(start_date: any, end_date: any, discount: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/discount/wise/purchase/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (discount) {
      queryParams.push(`discount=${discount}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierWise(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/wise/purchase/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getDebitNoteRegister(start_date: any, end_date: any, voucher_no: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/debitnote/register/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (voucher_no) {
      queryParams.push(`voucher_no=${voucher_no}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierOutstanding(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/outstanding/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSalesByProduct(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/salesby/product/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockSummary(start_date: any, end_date: any, category: any, subcategory: any, brand: any, product: any, variant: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }

    if (product) {
      queryParams.push(`product=${product}`);
    }
    if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getAbcAnalysis(start_date: any, end_date: any, category: any, subcategory: any, brand: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/abc/analysis/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }


    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPriceMaster(category: any, brand: any, product: any, variant: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/price/master/';
    const queryParams: any[] = [];
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);
    }
    if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockRegister(start_date: any, end_date: any, category: any, subcategory: any, brand: any, product: any, variant: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/register/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }

    if (product) {
      queryParams.push(`product=${product}`);
    }
    if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierWiseProduct(start_date: any, end_date: any, user_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/wise/product/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  //https://pv.greatfuturetechno.com/pv-api/product_variant
  getVariant(){
    let url = this.apiUrl+'/pv-api/product_variant'
    return this.http.get(url) 
  }
  getStockMovement(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sotck/movement/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockVerification(start_date: any, end_date: any, variant: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/verification/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    
    if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWisePurchase(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseCreditNote(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/creditnote/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseDebitNote(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/debitnote/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseSaleReturn(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/return/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWisePurchaseReturn(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/return/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseSale(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/tax/summary/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleReturn(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/return/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getOutStandingAnalysis(start_date:any,end_date:any,user_id:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/outstanding/analysis/';
    const queryParams:any[]=[];
    if(start_date){
      queryParams.push(`start_date=${start_date}`);
    }
    if(end_date){
      queryParams.push(`end_date=${end_date}`);
    }
    if(user_id){
      queryParams.push(`user_id=${user_id}`);
    }
   
   if(queryParams.length > 0) {
    url += '?'+queryParams.join('&');
   }
   return this.http.get<any>(url);
  }
  getCreditNoteRegister(start_date: any, end_date: any, voucher_no: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/creditnote/register/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (voucher_no) {
      queryParams.push(`voucher_no=${voucher_no}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPendingSaleOrder(start_date: any, end_date: any, product: any,user_id:any): Observable<any> {
    let url = this.apiUrl + '/api/reports/pending/saleorder';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    if(user_id){
      queryParams.push(`user_id=${user_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getExpenseRegister(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/expence/register/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getGeneralLedger(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/general/ledger/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBankBook(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/bank/book/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductLedger(start_date: any, end_date: any, category: any, subcategory: any, brand: any, variant: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/ledger/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (subcategory) {
      queryParams.push(`subcategory=${subcategory}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }
   if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCashBook(start_date: any, end_date: any, account_id: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/cash/book/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (account_id) {
      queryParams.push(`account_id=${account_id}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getJournalBook(start_date: any, end_date: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/journal/book/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
 
}
