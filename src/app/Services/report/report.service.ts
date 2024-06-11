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

  getSaleInvoiceList(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/invoicelist/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getSaleSummaryList(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getPurchaseSummary(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockLedger(start_date: any, end_date: any, product_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/ledger/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product_id) {
      queryParams.push(`product_id=${product_id}`);

    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductHistory(start_date: any, end_date: any, product_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/history/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product_id) {
      queryParams.push(`product_id=${product_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    // if (queryParams.length > 0) {
    //   url += '?' + queryParams.join('&');
    // }
    return this.http.get<any>(url);
  }
  getProductDaybook(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/daybook/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockAlert(start_date: any, end_date: any, category: any, subcategory: any, brand: any, cost_price: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/alert/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getDayBook(date: any, voucher_type: any, account_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/day/book/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (date) {
      queryParams.push(`date=${date}`);
    }
    if (voucher_type) {
      queryParams.push(`voucher_type=${voucher_type}`);
    }
    if (account_id) {
      queryParams.push(`account_id=${account_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleOverDue(date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/overdue/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (date) {
      queryParams.push(`date=${date}`);
    }
    console.log(date);
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);

  }
  getAmountWiseSale(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/amountwise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTimeWiseSale(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/timewise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCategoryWiseSale(start_date: any, end_date: any, category: any, subcategory: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/categorywise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBrandWiseSale(start_date: any, end_date: any, brand: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/brandwise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductWiseSale(start_date: any, end_date: any, product: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/productwise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerWiseSale(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customerwise/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerOutstandingSale(start_date: any, end_date: any, customer_type: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customeroutstanding/sale/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (customer_type) {
      queryParams.push(`customer_type=${customer_type}`);

    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerWiseSaleOrder(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/customer/wise/saleorder/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  // purchase 
  getPurchaseOverDue(date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/overdue/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (date) {
      queryParams.push(`date=${date}`);
    }
    console.log(date);
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // {{urls}}/api/reports/purchase/outstanding_analysis/?start_date=1998-02-15&end_date=2024-01-05&supplier_id=
  getPurchaseOutstanding(start_date: any, end_date: any, supplier_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/outstanding_analysis/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (supplier_id) {
      queryParams.push(`supplier_id=${supplier_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getUser(value) {
    let url = this.apiUrl + '/pv-api/contact-user/?search=' + value;
    return this.http.get(url)
  }

  getSupplier(query) {
    let url = this.apiUrl + '/pv-api/supplier/?search=' + query;
    return this.http.get(url)
  }

  getProductWisePurchase(start_date: any, end_date: any, product: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCategoryWisePurchase(start_date: any, end_date: any, category: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/category/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (category) {
      queryParams.push(`category=${category}`);
    }

    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBrandWisePurchase(start_date: any, end_date: any, brand: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/brand/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (brand) {
      queryParams.push(`brand=${brand}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPriceWisePurchase(start_date: any, end_date: any, price: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/price/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (price) {
      queryParams.push(`price=${price}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPurchaseRegister(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getDiscountWisePurchase(start_date: any, end_date: any, discount: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/discount/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (discount) {
      queryParams.push(`discount=${discount}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierWise(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/wise/purchase/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getDebitNoteRegister(start_date: any, end_date: any, voucher_no: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/debitnote/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (voucher_no) {
      queryParams.push(`voucher_no=${voucher_no}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierOutstanding(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/outstanding/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSalesByProduct(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/salesby/product/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockSummary(start_date: any, end_date: any, category: any, subcategory: any, brand: any, product: any, variant: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getAbcAnalysis(start_date: any, end_date: any, category: any, subcategory: any, brand: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/abc/analysis/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getPriceMaster(category: any, brand: any, product: any, variant: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/price/master/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockRegister(start_date: any, end_date: any, category: any, subcategory: any, brand: any, product: any, variant: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSupplierWiseProduct(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/supplier/wise/product/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  //https://pv.greatfuturetechno.com/pv-api/product_variant
  getVariant() {
    let url = this.apiUrl + '/pv-api/product_variant'
    return this.http.get(url)
  }
  getStockMovement(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/movement/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getStockVerification(start_date: any, end_date: any, variant: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/stock/verification/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    if (variant) {
      queryParams.push(`variant=${variant}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWisePurchase(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseCreditNote(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/creditnote/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseDebitNote(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/debitnote/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseSaleReturn(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/return/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWisePurchaseReturn(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/purchase/return/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTaxWiseSale(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/tax/summary/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleReturn(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/return/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getOutStandingAnalysis(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/outstanding/analysis/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCreditNoteRegister(start_date: any, end_date: any, voucher_no: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/creditnote/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (voucher_no) {
      queryParams.push(`voucher_no=${voucher_no}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  // /api/reports/pending/saleorder/?start_date=2023-01-19&end_date=2024-06-19
  getPendingSaleOrder(start_date: any, end_date: any, user_id: any, product: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/pending/saleorder/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (product) {
      queryParams.push(`product=${product}`);

    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getExpenseRegister(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/expence/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getGeneralLedger(start_date: any, end_date: any, user_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/general/ledger/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (user_id) {
      queryParams.push(`user_id=${user_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBankBook(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/bank/book/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProductLedger(start_date: any, end_date: any, category: any, subcategory: any, brand: any, variant: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/product/ledger/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
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
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCashBook(start_date: any, end_date: any, account_id: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/cash/book/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (account_id) {
      queryParams.push(`account_id=${account_id}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getJournalBook(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/journal/book/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  //https://pv.greatfuturetechno.com/pv-api/account

  getAccount() {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get(url)

  }
  //https://pv.greatfuturetechno.com/pv-api/product

  getProducts() {
    let url = this.apiUrl + '/pv-api/product/';
    return this.http.get(url)

  }
  getLeastSellingProduct(from_date: any, to_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/least/selling/product/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleItemRegister(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/item/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSaleRegister(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/sale/register/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getLossQty(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/loss/qty/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // {{urls}}/api/reports/supplier/wise/product/?start_date=2022-01-19&end_date=2024-03-19

  addFavorite(data: any) {
    let url = this.apiUrl + '/api/reports/favourites/';
    return this.http.post(url, data)
  }
  getFavorite() {
    let url = this.apiUrl + '/api/reports/favourites/';
    return this.http.get(url)
  }
  getScrapEntry(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/scrap-entry/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  //15-5
  getBalanceSheet(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/balance_sheet/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  exportToExcelBalanceSheet(start_date: any, end_date: any): string {
    const url = this.apiUrl + '/api/reports/balance_sheet/';
    const queryParams: string[] = [];

    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }

    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    return url + queryString;
  }
  exportToExcelTrial(start_date: any, end_date: any): string {
    const url = this.apiUrl + '/api/reports/trail_balance/';
    const queryParams: string[] = [];

    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }

    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    return url + queryString;
  }
  exportToExcelProfitLoss(start_date: any, end_date: any): string {
    const url = this.apiUrl + '/api/reports/profit_and_loss/';
    const queryParams: string[] = [];

    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }

    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }

    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    return url + queryString;
  }

  getTrailBalance(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/trail_balance/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getProfitLoss(start_date: any, end_date: any, fy: any, branch: any): Observable<any> {
    let url = this.apiUrl + '/api/reports/profit_and_loss/';
    //22-5
    console.log(branch, 'branch');
    console.log(branch.length, 'branch');
    const queryParams: any[] = [];
    // 22-5 nd
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // 22-5
    if (fy) {
      queryParams.push(`financial_year=${fy}`);
    }
    if (branch && branch.length > 0) {
      const idString = JSON.stringify(branch);
      console.log(idString);
      console.log(idString?.length);
      queryParams.push(`branch=${idString}`);
    }
    //end
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  //23-5
  getBranch() {
    let url = this.apiUrl + '/pv-api/branch/';
    return this.http.get(url)
  }
}
