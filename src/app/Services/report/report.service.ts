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
  getSaleInvoiceList(start_date:any,end_date:any,user_id:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/sale/invoicelist/';
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

  getSaleSummaryList(start_date:any,end_date:any,user_id:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/sale/summary/';
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
  
  getPurchaseSummary(start_date:any,end_date:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/purchase/summary/';
    const queryParams:any[]=[];
    if(start_date){
      queryParams.push(`start_date=${start_date}`);
    }
    if(end_date){
      queryParams.push(`end_date=${end_date}`);
    }
    if(queryParams.length > 0) {
      url += '?'+queryParams.join('&');
     }
     return this.http.get<any>(url);
  }
  getStockLedger(start_date:any,end_date:any,product_id:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/stock/ledger/';
    const queryParams:any[]=[];
    if(start_date){
      queryParams.push(`start_date=${start_date}`);
    }
    if(end_date){
      queryParams.push(`end_date=${end_date}`);
    }
    if(product_id){
      queryParams.push(`product_id=${product_id}`);

    }
    if(queryParams.length > 0) {
      url += '?'+queryParams.join('&');
     }
     return this.http.get<any>(url);
  }
  getProductHistory(start_date:any,end_date:any,product_id:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/product/history/';
    const queryParams:any[]=[];
    if(start_date){
      queryParams.push(`start_date=${start_date}`);
    }
    if(end_date){
      queryParams.push(`end_date=${end_date}`);
    }
    if(product_id){
      queryParams.push(`product_id=${product_id}`);

    }
    if(queryParams.length > 0) {
      url += '?'+queryParams.join('&');
     }
     return this.http.get<any>(url);
  }
  getProductDaybook(start_date:any,end_date:any):Observable<any>{
    let url=this.apiUrl +'/api/reports/product/daybook/';
    const queryParams:any[]=[];
    if(start_date){
      queryParams.push(`start_date=${start_date}`);
    }
    if(end_date){
      queryParams.push(`end_date=${end_date}`);
    }
    
    if(queryParams.length > 0) {
      url += '?'+queryParams.join('&');
     }
     return this.http.get<any>(url);
  }
  getStockAlert(start_date:any,end_date:any,category:any,subcategory:any,brand:any,cost_price:any):Observable<any>{
    let url = this.apiUrl +'/api/reports/stock/alert/';
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
    if(queryParams.length > 0) {
      url += '?'+queryParams.join('&');
     }
     return this.http.get<any>(url);
    }
    getDayBook(date:any,voucher_type:any,account_id:any):Observable<any>{
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
     if(queryParams.length > 0) {
        url += '?'+queryParams.join('&');
       }
       return this.http.get<any>(url);
      }
      getSaleOverDue(date:any):Observable<any>{
        let url = this.apiUrl + '/api/reports/sale/overdue/';
        const queryParams:any[]=[];
        if(date){
          queryParams.push(`date=${date}`);
        }
        console.log(date);
        
        if(queryParams.length > 0) {
          url += '?'+queryParams.join('&');
         }
         return this.http.get<any>(url);
  
      }
      getAmountWiseSale(start_date:any,end_date:any):Observable<any>{
        let url=this.apiUrl +'/api/reports/amountwise/sale/';
        const queryParams:any[]=[];
        if(start_date){
          queryParams.push(`start_date=${start_date}`);
        }
        if(end_date){
          queryParams.push(`end_date=${end_date}`);
        }
        
        if(queryParams.length > 0) {
          url += '?'+queryParams.join('&');
         }
         return this.http.get<any>(url);
      }
      getCategoryWiseSale(start_date:any,end_date:any,category:any,subcategory:any):Observable<any>{
        let url = this.apiUrl +'/api/reports/categorywise/sale/';
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
        
        if(queryParams.length > 0) {
          url += '?'+queryParams.join('&');
         }
         return this.http.get<any>(url);
        }
        getBrandWiseSale(start_date:any,end_date:any,brand:any):Observable<any>{
          let url = this.apiUrl +'/api/reports/brandwise/sale/';
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
      
          if(queryParams.length > 0) {
            url += '?'+queryParams.join('&');
           }
           return this.http.get<any>(url);
          }
          getProductWiseSale(start_date:any,end_date:any,product:any):Observable<any>{
            let url=this.apiUrl +'/api/reports/productwise/sale/';
            const queryParams:any[]=[];
            if(start_date){
              queryParams.push(`start_date=${start_date}`);
            }
            if(end_date){
              queryParams.push(`end_date=${end_date}`);
            }
            if(product){
              queryParams.push(`product=${product}`);
        
            }
            if(queryParams.length > 0) {
              url += '?'+queryParams.join('&');
             }
             return this.http.get<any>(url);
          }
          getCustomerWiseSale(start_date:any,end_date:any,user_id:any):Observable<any>{
            let url=this.apiUrl +'/api/reports/customerwise/sale/';
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
          getCustomerOutstandingSale(start_date:any,end_date:any,customer_type:any):Observable<any>{
            let url=this.apiUrl +'/api/reports/customeroutstanding/sale/';
            const queryParams:any[]=[];
            if(start_date){
              queryParams.push(`start_date=${start_date}`);
            }
            if(end_date){
              queryParams.push(`end_date=${end_date}`);
            }
            if(customer_type){
              queryParams.push(`customer_type=${customer_type}`);
        
            }
            if(queryParams.length > 0) {
              url += '?'+queryParams.join('&');
             }
             return this.http.get<any>(url);
          }
          getCustomerWiseSaleOrder(start_date:any,end_date:any,user_id:any):Observable<any>{
            let url=this.apiUrl +'/api/reports/customer/wise/saleorder/';
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
          
          getUser() {
            let url = this.apiUrl + '/pv-api/contact-user/';
            return this.http.get(url)
          }
}
