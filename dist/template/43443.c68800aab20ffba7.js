"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[43443],{43443:(d,m,p)=>{p.d(m,{R:()=>f});var c=p(24006),g=p(94650);let f=(()=>{class u{constructor(){this.myData=[{reportname:"Sale Summary ",group:"sale",url:"/report/sale-summary",is_Favorite:!1},{reportname:"Sale Invoice",group:"sale",url:"/report/sale-invoice",is_Favorite:!1},{reportname:"Sale Overdue",group:"sale",url:"/report/sale-overdue",is_Favorite:!1},{reportname:"Time Wise Sale",group:"sale",url:"/report/time-wise-sale",is_Favorite:!1},{reportname:"Amount Wise Sale",group:"sale",url:"/report/amount-wise-sale",is_Favorite:!1},{reportname:"Category Wise Sale",group:"sale",url:"/report/category-wise-sale",is_Favorite:!1},{reportname:"Brand Wise Sale",group:"sale",url:"/report/brand-wise-sale",is_Favorite:!1},{reportname:"Product Wise Sale",group:"sale",url:"/report/product-wise-sale",is_Favorite:!1},{reportname:"Customer Wise Sale",group:"sale",url:"/report/customer-wise-sale",is_Favorite:!1},{reportname:"Credit Note Register",group:"sale",url:"/report/credit-note-register",is_Favorite:!1},{reportname:"Customer Outstanding Sale",group:"sale",url:"/report/customer-outstanding-sale",is_Favorite:!1},{reportname:"Customer Wise Sale Order",group:"sale",url:"/report/customer-wise-sale-order",is_Favorite:!1},{reportname:"Hsncode Wise Sale Report",group:"sale",url:"/report/hsncode-wise-sale",is_Favorite:!1},{reportname:"Tax Wise Sale Return",group:"sale",url:"/report/tax-wise-sale-return",is_Favorite:!1},{reportname:"Sale Tax Summary",group:"sale",url:"/report/tax-wise-sale",is_Favorite:!1},{reportname:"Tax Wise Credit Note",group:"sale",url:"/report/tax-wise-credit-note",is_Favorite:!1},{reportname:"Sale Return",group:"sale",url:"/report/sale-return",is_Favorite:!1},{reportname:"Sale Register",group:"sale",url:"/report/sale-register",is_Favorite:!1},{reportname:"Sale Item Register",group:"sale",url:"/report/sale-item-register",is_Favorite:!1},{reportname:"Pending Sale Order",group:"sale",url:"/report/pending-sale-order",is_Favorite:!1},{reportname:"Sale Tax",group:"sale",url:"/report/sale-tax",is_Favorite:!1},{reportname:"Purchase Summary ",group:"purchase",url:"/report/purchase-summary",is_Favorite:!1},{reportname:"Purchase Overdue",group:"purchase",url:"/report/purchase-overdue",is_Favorite:!1},{reportname:"Purchase Outstanding",group:"purchase",url:"/report/purchase-outstanding",is_Favorite:!1},{reportname:"Product Wise Purchase",group:"purchase",url:"/report/product-wise-purchase",is_Favorite:!1},{reportname:"Category Wise Purchase",group:"purchase",url:"/report/category-wise-purchase",is_Favorite:!1},{reportname:"Brand Wise Purchase",group:"purchase",url:"/report/brand-wise-purchase",is_Favorite:!1},{reportname:"Price Wise Purchase",group:"purchase",url:"/report/price-wise-purchase",is_Favorite:!1},{reportname:"Discount Wise Purchase",group:"purchase",url:"/report/discount-wise-purchase",is_Favorite:!1},{reportname:"Supplier Wise Purchase",group:"purchase",url:"/report/supplier-wise",is_Favorite:!1},{reportname:"Supplier Outstanding",group:"purchase",url:"/report/supplier-outstanding",is_Favorite:!1},{reportname:"Debit Note Register",group:"purchase",url:"/report/debit-note-register",is_Favorite:!1},{reportname:"Purchase Register",group:"purchase",url:"/report/purchase-register",is_Favorite:!1},{reportname:"Tax Wise Purchase Return",group:"purchase",url:"/report/tax-wise-purchase-return",is_Favorite:!1},{reportname:"Purchase Tax Summary",group:"purchase",url:"/report/tax-wise-purchase",is_Favorite:!1},{reportname:"Tax Wise Debit Note",group:"purchase",url:"/report/tax-wise-debit-note",is_Favorite:!1},{reportname:"Tax Wise Purchase",group:"purchase",url:"/report/hsncode-wise-purchase",is_Favorite:!1},{reportname:"Product History",group:"inventory",url:"/report/product-history",is_Favorite:!1},{reportname:"Product Daybook",group:"inventory",url:"/report/product-daybook",is_Favorite:!1},{reportname:"Stock Movement",group:"inventory",url:"/report/stock-movement",is_Favorite:!1},{reportname:"Stock Verification",group:"inventory",url:"/report/stock-verification",is_Favorite:!1},{reportname:"Out Standing Analysis",group:"inventory",url:"/report/out-standing-analysis",is_Favorite:!1},{reportname:"Supplier Wise Product",group:"inventory",url:"/report/supplier-wise-product",is_Favorite:!1},{reportname:"Stock Register",group:"inventory",url:"/report/stock-register",is_Favorite:!1},{reportname:"Price Master",group:"inventory",url:"/report/price-master",is_Favorite:!1},{reportname:"Abc Analysis",group:"inventory",url:"/report/abc-analysis",is_Favorite:!1},{reportname:"Stock Summary",group:"inventory",url:"/report/stock-summary",is_Favorite:!1},{reportname:"Sales By Product",group:"inventory",url:"/report/sales-by-product",is_Favorite:!1},{reportname:"Stock Alert",group:"inventory",url:"/report/stock-alert",is_Favorite:!1},{reportname:"Least Selling Product",group:"inventory",url:"/report/least-selling-product",is_Favorite:!1},{reportname:"Loss Qty ",group:"inventory",url:"/report/loss-qty",is_Favorite:!1},{reportname:"scrap entry",group:"inventory",url:"/report/scrap-entry/",is_Favorite:!1},{reportname:"Day Book",group:"accounts",url:"/report/day-book",is_Favorite:!1},{reportname:"Stock Ledger",group:"accounts",url:"/report/stock-ledger",is_Favorite:!1},{reportname:"Journal Book",group:"accounts",url:"/report/journal-book",is_Favorite:!1},{reportname:"General Ledger",group:"accounts",url:"/report/general-ledger",is_Favorite:!1},{reportname:"Product Ledger",group:"accounts",url:"/report/product-ledger",is_Favorite:!1},{reportname:"Bank Book",group:"accounts",url:"/report/bank-book",is_Favorite:!1},{reportname:"Expense Register",group:"accounts",url:"/report/expense-register",is_Favorite:!1},{reportname:"Cash Book",group:"accounts",url:"/report/cash-book",is_Favorite:!1},{reportname:"Balance Sheet",group:"accounts",url:"/report/balance-sheet",is_Favorite:!1},{reportname:"Trial Balance",group:"accounts",url:"/report/trial-balance",is_Favorite:!1},{reportname:"Profit & Loss",group:"accounts",url:"/report/profit-loss",is_Favorite:!1}]}formatDate(r){return new Date(r.getTime()-6e4*r.getTimezoneOffset()).toISOString().split("T")[0]}formatDateTime(r){return new Date(r.getTime()-6e4*r.getTimezoneOffset()).toISOString().slice(0,16)}minDateValidator(r){return e=>new Date(e.value)>=r?null:{minDate:!0}}maxDateValidator(r){return e=>new Date(e.value)<=r?null:{maxDate:!0}}determineMinMaxDates(r){let e,t;switch(r){case"6":e=new Date(2023,3,1,0,0,0),t=new Date(2024,2,31,23,59,59);break;case"12":e=new Date(2024,3,1,0,0,0),t=new Date(2025,2,31,23,59,59);break;case"14":e=new Date(2025,3,1,0,0,0),t=new Date(2026,2,31,23,59,59)}return{minDate:e,maxDate:t}}setMinMaxDates(r,e,t){let{minDate:a,maxDate:o}=this.determineMinMaxDates(e);t&&t>a&&(a=t);const i=this.formatDate(a),n=this.formatDate(o),s=r;if(s.setValidators([c.kI.required,this.minDateValidator(a),this.maxDateValidator(o)]),s.updateValueAndValidity(),s.value){const l=new Date(s.value);(l<a||l>o)&&s.reset("")}return{formattedMinDate:i,formattedMaxDate:n}}setMinMaxDatesForDateTime(r,e,t){let{minDate:a,maxDate:o}=this.determineMinMaxDates(e);t&&t>a&&(a=t);const i=this.formatDateTime(a),n=this.formatDateTime(o),s=r;if(s.setValidators([c.kI.required,this.minDateValidator(a),this.maxDateValidator(o)]),s.updateValueAndValidity(),s.value){const l=new Date(s.value);(l<a||l>o)&&s.reset("")}return{formattedMinDate:i,formattedMaxDate:n}}dateRangeValidator(r){return e=>{if(!e.parent)return null;const t=e.parent.get("start")?.value,a=e.parent.get("end")?.value;if(!t||!a)return null;const{minDate:o,maxDate:i}=this.determineMinMaxDates(r);return e===e.parent.get("start")&&new Date(t)<o||e===e.parent.get("end")&&new Date(a)>i?{dateRange:!0}:null}}validateAndClearDates(r,e,t){const a=r.get("start"),o=r.get("end"),i=new Date(a?.value),n=new Date(o?.value);(i<e||i>t)&&a?.setValue(""),(n<e||n>t)&&o?.setValue("")}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);