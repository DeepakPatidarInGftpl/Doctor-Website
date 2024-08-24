"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[87719],{87719:(P,$,c)=>{c.d($,{r:()=>d});var S=c(92340),f=c(94650),y=c(80529);let d=(()=>{class a{constructor(o){this.http=o,this.apiUrl=`${S.N.api}`}getSaleInvoiceList(o,l,n,i,s){let e=this.apiUrl+"/api/reports/sale/invoicelist/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSaleSummaryList(o,l,n,i,s){let e=this.apiUrl+"/api/reports/sale/summary/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getPurchaseSummary(o,l,n,i){let s=this.apiUrl+"/api/reports/purchase/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getStockLedger(o,l,n,i,s){let e=this.apiUrl+"/api/reports/stock/ledger/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`product_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getProductHistory(o,l,n,i,s){let e=this.apiUrl+"/api/reports/product/history/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`product_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return this.http.get(e)}getProductDaybook(o,l,n,i){let s=this.apiUrl+"/api/reports/product/daybook/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getStockAlert(o,l,n,i,s,e,t,r){let g=this.apiUrl+"/api/reports/stock/alert/";console.log(r,"branch"),console.log(r.length,"branch");const h=[];if(o&&h.push(`start_date=${o}`),l&&h.push(`end_date=${l}`),n&&h.push(`category=${n}`),i&&h.push(`subcategory=${i}`),s&&h.push(`brand=${s}`),e&&h.push(`cost_price=${e}`),t&&h.push(`financial_year=${t}`),r&&r.length>0){const p=JSON.stringify(r);console.log(p),console.log(p?.length),h.push(`branch=${p}`)}return h.length>0&&(g+="?"+h.join("&")),this.http.get(g)}getDayBook(o,l,n,i,s){let e=this.apiUrl+"/api/reports/day/book/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`date=${o}`),l&&t.push(`voucher_type=${l}`),n&&t.push(`account_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSaleOverDue(o,l,n){let i=this.apiUrl+"/api/reports/sale/overdue/";console.log(n,"branch"),console.log(n.length,"branch");const s=[];if(o&&s.push(`date=${o}`),console.log(o),l&&s.push(`financial_year=${l}`),n&&n.length>0){const e=JSON.stringify(n);console.log(e),console.log(e?.length),s.push(`branch=${e}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getAmountWiseSale(o,l,n,i){let s=this.apiUrl+"/api/reports/amountwise/sale/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTimeWiseSale(o,l,n,i){let s=this.apiUrl+"/api/reports/timewise/sale/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCategoryWiseSale(o,l,n,i,s,e){let t=this.apiUrl+"/api/reports/categorywise/sale/";console.log(e,"branch"),console.log(e.length,"branch");const r=[];if(o&&r.push(`start_date=${o}`),l&&r.push(`end_date=${l}`),n&&r.push(`category=${n}`),i&&r.push(`subcategory=${i}`),s&&r.push(`financial_year=${s}`),e&&e.length>0){const g=JSON.stringify(e);console.log(g),console.log(g?.length),r.push(`branch=${g}`)}return r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getBrandWiseSale(o,l,n,i,s){let e=this.apiUrl+"/api/reports/brandwise/sale/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`brand=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getProductWiseSale(o,l,n,i,s){let e=this.apiUrl+"/api/reports/productwise/sale/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`product=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCustomerWiseSale(o,l,n,i,s){let e=this.apiUrl+"/api/reports/customerwise/sale/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCustomerOutstandingSale(o,l,n,i,s){let e=this.apiUrl+"/api/reports/customeroutstanding/sale/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`customer_type=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCustomerWiseSaleOrder(o,l,n,i,s){let e=this.apiUrl+"/api/reports/customer/wise/saleorder/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getPurchaseOverDue(o,l,n){let i=this.apiUrl+"/api/reports/purchase/overdue/";console.log(n,"branch"),console.log(n.length,"branch");const s=[];if(o&&s.push(`date=${o}`),console.log(o),l&&s.push(`financial_year=${l}`),n&&n.length>0){const e=JSON.stringify(n);console.log(e),console.log(e?.length),s.push(`branch=${e}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getPurchaseOutstanding(o,l,n,i,s){let e=this.apiUrl+"/api/reports/purchase/outstanding_analysis/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`supplier_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getUser(o){return this.http.get(this.apiUrl+"/pv-api/contact-user/?search="+o)}getSupplier(o){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+o)}getProductWisePurchase(o,l,n,i,s){let e=this.apiUrl+"/api/reports/product/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`product=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCategoryWisePurchase(o,l,n,i,s){let e=this.apiUrl+"/api/reports/category/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`category=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getBrandWisePurchase(o,l,n,i,s){let e=this.apiUrl+"/api/reports/brand/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`brand=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getPriceWisePurchase(o,l,n,i,s){let e=this.apiUrl+"/api/reports/price/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`price=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getPurchaseRegister(o,l,n,i){let s=this.apiUrl+"/api/reports/purchase/register/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getDiscountWisePurchase(o,l,n,i,s){let e=this.apiUrl+"/api/reports/discount/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`discount=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSupplierWise(o,l,n,i,s){let e=this.apiUrl+"/api/reports/supplier/wise/purchase/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getDebitNoteRegister(o,l,n,i,s){let e=this.apiUrl+"/api/reports/debitnote/register/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`voucher_no=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSupplierOutstanding(o,l,n,i){let s=this.apiUrl+"/api/reports/supplier/outstanding/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSalesByProduct(o,l,n,i){let s=this.apiUrl+"/api/reports/salesby/product/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getStockSummary(o,l,n,i,s,e,t,r,g){let h=this.apiUrl+"/api/reports/stock/summary/";console.log(g,"branch"),console.log(g.length,"branch");const p=[];if(o&&p.push(`start_date=${o}`),l&&p.push(`end_date=${l}`),n&&p.push(`category=${n}`),i&&p.push(`subcategory=${i}`),s&&p.push(`brand=${s}`),e&&p.push(`product=${e}`),t&&p.push(`variant=${t}`),r&&p.push(`financial_year=${r}`),g&&g.length>0){const u=JSON.stringify(g);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(h+="?"+p.join("&")),this.http.get(h)}getAbcAnalysis(o,l,n,i,s,e,t){let r=this.apiUrl+"/api/reports/abc/analysis/";console.log(t,"branch"),console.log(t.length,"branch");const g=[];if(o&&g.push(`start_date=${o}`),l&&g.push(`end_date=${l}`),n&&g.push(`category=${n}`),i&&g.push(`subcategory=${i}`),s&&g.push(`brand=${s}`),e&&g.push(`financial_year=${e}`),t&&t.length>0){const h=JSON.stringify(t);console.log(h),console.log(h?.length),g.push(`branch=${h}`)}return g.length>0&&(r+="?"+g.join("&")),this.http.get(r)}getPriceMaster(o,l,n,i,s,e){let t=this.apiUrl+"/api/reports/price/master/";console.log(e,"branch"),console.log(e.length,"branch");const r=[];if(o&&r.push(`category=${o}`),l&&r.push(`brand=${l}`),n&&r.push(`product=${n}`),i&&r.push(`variant=${i}`),s&&r.push(`financial_year=${s}`),e&&e.length>0){const g=JSON.stringify(e);console.log(g),console.log(g?.length),r.push(`branch=${g}`)}return r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getStockRegister(o,l,n,i,s,e,t,r,g){let h=this.apiUrl+"/api/reports/stock/register/";console.log(g,"branch"),console.log(g.length,"branch");const p=[];if(o&&p.push(`start_date=${o}`),l&&p.push(`end_date=${l}`),n&&p.push(`category=${n}`),i&&p.push(`subcategory=${i}`),s&&p.push(`brand=${s}`),e&&p.push(`product=${e}`),t&&p.push(`variant=${t}`),r&&p.push(`financial_year=${r}`),g&&g.length>0){const u=JSON.stringify(g);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(h+="?"+p.join("&")),this.http.get(h)}getSupplierWiseProduct(o,l,n,i,s){let e=this.apiUrl+"/api/reports/supplier/wise/product/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant")}getStockMovement(o,l,n,i){let s=this.apiUrl+"/api/reports/stock/movement/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getStockVerification(o,l,n,i,s){let e=this.apiUrl+"/api/reports/stock/verification/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`variant=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTaxWisePurchase(o,l,n,i){let s=this.apiUrl+"/api/reports/purchase/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTaxWiseCreditNote(o,l,n,i){let s=this.apiUrl+"/api/reports/creditnote/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTaxWiseDebitNote(o,l,n,i){let s=this.apiUrl+"/api/reports/debitnote/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTaxWiseSaleReturn(o,l,n,i){let s=this.apiUrl+"/api/reports/sale/return/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTaxWisePurchaseReturn(o,l,n,i){let s=this.apiUrl+"/api/reports/purchase/return/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTaxWiseSale(o,l,n,i){let s=this.apiUrl+"/api/reports/sale/tax/summary/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSaleReturn(o,l,n,i){let s=this.apiUrl+"/api/reports/sale/return/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getOutStandingAnalysis(o,l,n,i,s){let e=this.apiUrl+"/api/reports/outstanding/analysis/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCreditNoteRegister(o,l,n,i,s){let e=this.apiUrl+"/api/reports/creditnote/register/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`voucher_no=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getPendingSaleOrder(o,l,n,i,s,e){let t=this.apiUrl+"/api/reports/pending/saleorder/";console.log(e,"branch"),console.log(e.length,"branch");const r=[];if(o&&r.push(`start_date=${o}`),l&&r.push(`end_date=${l}`),i&&r.push(`product=${i}`),n&&r.push(`user_id=${n}`),s&&r.push(`financial_year=${s}`),e&&e.length>0){const g=JSON.stringify(e);console.log(g),console.log(g?.length),r.push(`branch=${g}`)}return r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getExpenseRegister(o,l,n,i){let s=this.apiUrl+"/api/reports/expence/register/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getGeneralLedger(o,l,n,i,s){let e=this.apiUrl+"/api/reports/general/ledger/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`user_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getBankBook(o,l,n,i){let s=this.apiUrl+"/api/reports/bank/book/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getProductLedger(o,l,n,i,s,e,t,r){let g=this.apiUrl+"/api/reports/product/ledger/";console.log(r,"branch"),console.log(r.length,"branch");const h=[];if(o&&h.push(`start_date=${o}`),l&&h.push(`end_date=${l}`),n&&h.push(`category=${n}`),i&&h.push(`subcategory=${i}`),s&&h.push(`brand=${s}`),e&&h.push(`variant=${e}`),t&&h.push(`financial_year=${t}`),r&&r.length>0){const p=JSON.stringify(r);console.log(p),console.log(p?.length),h.push(`branch=${p}`)}return h.length>0&&(g+="?"+h.join("&")),this.http.get(g)}getCashBook(o,l,n,i,s){let e=this.apiUrl+"/api/reports/cash/book/";console.log(s,"branch"),console.log(s.length,"branch");const t=[];if(o&&t.push(`start_date=${o}`),l&&t.push(`end_date=${l}`),n&&t.push(`account_id=${n}`),i&&t.push(`financial_year=${i}`),s&&s.length>0){const r=JSON.stringify(s);console.log(r),console.log(r?.length),t.push(`branch=${r}`)}return t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getJournalBook(o,l,n,i){let s=this.apiUrl+"/api/reports/journal/book/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getProducts(){return this.http.get(this.apiUrl+"/pv-api/product/")}getLeastSellingProduct(o,l,n,i){let s=this.apiUrl+"/api/reports/least/selling/product/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`from_date=${o}`),l&&e.push(`to_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSaleItemRegister(o,l,n,i){let s=this.apiUrl+"/api/reports/sale/item/register/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSaleRegister(o,l,n,i){let s=this.apiUrl+"/api/reports/sale/register/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getLossQty(o,l,n,i){let s=this.apiUrl+"/api/reports/loss/qty/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}addFavorite(o){return this.http.post(this.apiUrl+"/api/reports/favourites/",o)}getFavorite(){return this.http.get(this.apiUrl+"/api/reports/favourites/")}getScrapEntry(o,l,n,i){let s=this.apiUrl+"/api/reports/scrap-entry/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getBalanceSheet(o,l,n,i){let s=this.apiUrl+"/api/reports/balance_sheet/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}exportToExcelBalanceSheet(o,l){const n=this.apiUrl+"/api/reports/balance_sheet/",i=[];return o&&i.push(`start_date=${o}`),l&&i.push(`end_date=${l}`),n+(i.length>0?"?"+i.join("&"):"")}exportToExcelTrial(o,l){const n=this.apiUrl+"/api/reports/trail_balance/",i=[];return o&&i.push(`start_date=${o}`),l&&i.push(`end_date=${l}`),n+(i.length>0?"?"+i.join("&"):"")}exportToExcelProfitLoss(o,l){const n=this.apiUrl+"/api/reports/profit_and_loss/",i=[];return o&&i.push(`start_date=${o}`),l&&i.push(`end_date=${l}`),n+(i.length>0?"?"+i.join("&"):"")}getTrailBalance(o,l,n,i){let s=this.apiUrl+"/api/reports/trail_balance/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getProfitLoss(o,l,n,i){let s=this.apiUrl+"/api/reports/profit_and_loss/";console.log(i,"branch"),console.log(i.length,"branch");const e=[];if(o&&e.push(`start_date=${o}`),l&&e.push(`end_date=${l}`),n&&e.push(`financial_year=${n}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),e.push(`branch=${t}`)}return e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}}return a.\u0275fac=function(o){return new(o||a)(f.LFG(y.eN))},a.\u0275prov=f.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);