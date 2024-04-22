import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  getSalesNumber(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/numbers/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // /pv-api/customer-retention-rate/?start_date=2024-02-01&end_date=2024-02-20

  getCutomerRetention(start_date: any, end_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/customer-retention-rate/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getTotalSalePurchase(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/total-sale-vs-total-purchase/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  
  getDailySales(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/daily-sales/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getSalevsPurchase(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/sale_vs_purchase/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getCategoryWiseSale(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/category-wise-sale/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getSubCatWiseSale(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/subcategory-wise-sale/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getInventory(start_date: any, end_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/fsn-analysis/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getCustomerActivity(){
    let url=this.apiUrl+'/pv-api/dashboard/customers-activity/';
    return this.http.get(url);
  }
  getTopCustomer(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/top-20-customers/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getRecentlySales(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/recently-sale/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getRecentlyAddedProduct(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/recently-added-products/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getBestSellingProduct(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/best-selling-products/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getLeastSellingProduct(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/least-selling-products/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // -> financial 
// totalrecievavle vs total payable
  getTotalRecvsPay(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/total-receivables-vs-total-payables/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getGrowth(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/growth-graph/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getGrossNetProfit(start_date: any, end_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/gross-profit-net-profit/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
 
  getUnpaidInvoices(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/unpaid-invoices/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTotalReceivables(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/total-receivable/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTodayPayables(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/total-payable/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getTodayExpense(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/expenses/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  // forcasting & sales man 

  getDepartmentWiseTarget(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/departments_wise_targets/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  
  getEployeeTargetAchieved(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/employee-target-achievement/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    
    return this.http.get<any>(url);
  }
  getEmployeeTop10(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/top-10-employess/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }
  getEmployeeTargetGraph(from_date: any, to_date: any,branch:any): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/employee-target-graph/';
    const queryParams: any[] = [];
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (branch) {
      queryParams.push(`branch=${branch}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  // analysyx inventory management list
  getAnalysisInventoryList(start_date: any, end_date: any,): Observable<any> {
    let url = this.apiUrl + '/pv-api/dashboard/fsn-analysis-product-list/';
    const queryParams: any[] = [];
    if (start_date) {
      queryParams.push(`start_date=${start_date}`);
    }
    if (end_date) {
      queryParams.push(`end_date=${end_date}`);
    }
    // if (branch) {
    //   queryParams.push(`branch=${branch}`);
    // }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  // get branch
  getBranch() {
    let url = this.apiUrl + '/pv-api/branch/';
    return this.http.get(url)
  }
}
