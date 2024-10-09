"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[72338],{25062:(S,C,u)=>{u.d(C,{y:()=>v});var m=u(92340),_=u(94650),D=u(80529);let v=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${m.N.api}`}UpdateDefaultAddress(e){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",e)}GetUsedPoints(e){return this.http.get(`${this.apiUrl+"/pv-api/total_use_point/?user_id="}${e}`)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(_.LFG(D.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},60843:(S,C,u)=>{u.d(C,{s:()=>v});var m=u(92340),_=u(94650),D=u(80529);let v=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${m.N.api}`}getSalesNumber(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCutomerRetention(e,i,l,s){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalSalePurchase(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDailySales(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSalevsPurchase(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCategoryWiseSale(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSubCatWiseSale(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getInventory(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlySales(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlyAddedProduct(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getBestSellingProduct(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getLeastSellingProduct(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalRecvsPay(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrowth(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrossNetProfit(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getUnpaidInvoices(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalReceivables(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayPayables(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayExpense(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDepartmentWiseTarget(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEployeeTargetAchieved(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTop10(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTargetGraph(e,i,l,s){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),l&&r.push(`branch=${l}`),s&&r.push(`financial_year=${s}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getAnalysisInventoryList(e,i,l){let s=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),l&&t.push(`financial_year=${l}`),t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,l){let s=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),t.length>0&&(s+="?"+t.join("&")),l&&t.push(`financial_year=${l}`),this.http.get(s)}}return g.\u0275fac=function(e){return new(e||g)(_.LFG(D.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},72338:(S,C,u)=>{u.r(C),u.d(C,{ListDeliveryChallanModule:()=>at});var m=u(36895),_=u(4392),D=u(2454),v=u.n(D),g=u(96166),b=u(12983),e=u.n(b),i=u(80574),l=u(94327),s=u(24006),t=u(94650),r=u(72170),x=u(42917),$=u(25062),y=u(60843),U=u(43443),P=u(73162),q=u(54333),Z=u(99602),L=u(59549),w=u(54040);function O(h,d){if(1&h){const a=t.EpF();t.TgZ(0,"a",78)(1,"input",79,80),t.NdJ("change",function(o){const c=t.CHM(a).$implicit,f=t.oxw(2);return t.KtG(f.SelectedBranch(c.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",81),t.NdJ("click",function(o){t.CHM(a);const p=t.oxw(2);return t.KtG(p.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&h){const a=d.$implicit,n=d.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",a.id)("checked",o.selectData.includes(a.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(a.title)}}function k(h,d){if(1&h&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&h){const a=t.oxw(2);t.xp6(1),t.Oqu(a.selectData.length+" Selected")}}const N=function(){return{standalone:!0}};function J(h,d){if(1&h){const a=t.EpF();t.TgZ(0,"div",71)(1,"div",72)(2,"button",73),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",74)(5,"li")(6,"input",75),t.NdJ("ngModelChange",function(o){t.CHM(a);const p=t.oxw();return t.KtG(p.searchBranch=o)})("ngModelChange",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,O,5,5,"a",76),t.qZA()()(),t.TgZ(9,"div",77),t.YNc(10,k,2,1,"span",54),t.qZA()()}if(2&h){const a=t.oxw();t.xp6(6),t.Q6J("ngModel",a.searchBranch)("ngModelOptions",t.DdM(4,N)),t.xp6(2),t.Q6J("ngForOf",a.filteredBranchList),t.xp6(2),t.Q6J("ngIf",a.selectData.length>0)}}function F(h,d){1&h&&(t.TgZ(0,"a",82),t._UZ(1,"img",83),t._uU(2,"Add Delivery Challan "),t.qZA())}function R(h,d){if(1&h&&(t.TgZ(0,"a",90),t._UZ(1,"img",94),t.qZA()),2&h){const a=t.oxw().$implicit;t.MGl("routerLink","//sales/update-delivery-challan/",a.id,"")}}function Y(h,d){if(1&h){const a=t.EpF();t.TgZ(0,"a",95),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(),p=o.index,c=o.$implicit,f=t.oxw(2);return t.KtG(f.confirmText(p,c.id))}),t._UZ(1,"img",96),t.qZA()}}const j=function(){return["Pending","Partially Delivered","Draft"]},G=function(h,d,a){return{"bg-lightgreen":h,"bg-lightred":d,"bg-lightyellow":a}};function Q(h,d){if(1&h){const a=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",85)(3,"input",86),t.NdJ("ngModelChange",function(o){const c=t.CHM(a).index,f=t.oxw(2);return t.KtG(f.selectedRows[c]=o)}),t.qZA(),t._UZ(4,"span",52),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",87)(10,"a",88),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",89),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"a",90),t._UZ(25,"img",91),t.qZA(),t.YNc(26,R,2,1,"a",92),t.YNc(27,Y,2,0,"a",93),t.qZA()()}if(2&h){const a=d.$implicit,n=d.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(a.delivery_challan_bill_no),t.xp6(2),t.MGl("routerLink","//sales/detail-delivery-challan/",a.id,""),t.xp6(1),t.Oqu(null!=a&&null!=a.account&&a.account.company_name?null==a||null==a.account?null:a.account.company_name:(null==a||null==a.account?null:a.account.title)+" ("+(null==a||null==a.account?null:a.account.account_id)+")"),t.xp6(2),t.Oqu(null==a?null:a.bill_date),t.xp6(2),t.Oqu(a.sale_bill.customer_bill_no),t.xp6(2),t.Oqu(null==a||null==a.transporter_account?null:a.transporter_account.title),t.xp6(2),t.Oqu(null==a?null:a.total_qty),t.xp6(2),t.Q6J("ngClass",t.kEZ(15,G,"Delivered"===a.status,"Cancelled"===a.status,t.DdM(14,j).includes(a.status))),t.xp6(1),t.Oqu(a.status),t.xp6(2),t.MGl("routerLink","//sales/detail-delivery-challan/",a.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const K=function(h,d){return{itemsPerPage:h,currentPage:d}};function W(h,d){if(1&h&&(t.TgZ(0,"tbody"),t.YNc(1,Q,28,19,"tr",84),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&h){const a=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,a.filteredData,a.key,a.reverse),t.WLB(8,K,a.itemsPerPage,a.p)))}}function V(h,d){1&h&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",97)(3,"p",98),t._uU(4,"Data not available"),t.qZA()()()())}function z(h,d){1&h&&t._UZ(0,"mat-progress-bar",99)}const tt=[{path:"",component:(()=>{class h{constructor(a,n,o,p,c,f){this.saleService=a,this.cs=n,this.contactService=o,this.datePipe=p,this.dashboardservice=c,this.commonService=f,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(a,n){v().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.deleteDelivryChallan(n).subscribe(p=>{this.delRes=p,this.delRes.success?(this.ngOnInit(),v().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(a,1)):v().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(a,n){v().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.DelivryChallanIsActive(n,"").subscribe(p=>{this.delRes=p,this.delRes.success&&(v().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(a,n){v().fire({title:"Are you sure?",text:"Do you want to Active this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.DelivryChallanIsActive(n,"").subscribe(p=>{this.delRes=p,this.delRes.success&&(v().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let o=localStorage.getItem("financialYear");console.warn(JSON.parse(o));let p=JSON.parse(o);this.getSaleDelivyChallan(p)}this.cs.userDetails$.subscribe(o=>{this.isAdmin="admin"==o.role}),this.financialYear=localStorage.getItem("financialYear");const{minDate:a,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=a,this.maxDate=n,this.billDateForm=new s.cw({start:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)]),end:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)])}),this.commonService.validateAndClearDates(this.billDateForm,this.minDate,this.maxDate),this.cs.userDetails$.subscribe(o=>{this.userDetails=o,this.userDetails?.permission?.map(c=>{"sale"===c.content_type.app_label&&"deliverychallan"===c.content_type.model&&"add_deliverychallan"==c.codename?this.isAdd=c.codename:"sale"===c.content_type.app_label&&"deliverychallan"===c.content_type.model&&"change_deliverychallan"==c.codename?this.isEdit=c.codename:"sale"===c.content_type.app_label&&"deliverychallan"===c.content_type.model&&"delete_deliverychallan"==c.codename&&(this.isDelete=c.codename)})}),this.getPaymentTerms(),this.getBranch()}getSaleDelivyChallan(a){const n=JSON.stringify(this.selectData);console.log(n),console.log(n?.length),this.saleService.getDelivryChallanFY(a,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(a=>{this.paymentList=a})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(a){this.tableData.forEach(a?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const a=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const o=n?.account?.title?.toLocaleLowerCase()||"",p=n?.sale_bill?.customer_bill_no.toLocaleLowerCase()||"";return!!o.includes(a)||!!p.includes(a)})}}sort(a){this.key=a,this.reverse=!this.reverse}formatDate(a){return this.datePipe.transform(a,"yyyy-MM-dd")||""}generatePDF(){const a=new g.default;a.setFontSize(15),a.setTextColor(33,43,54),a.text("Delivery Challan List",10,10),e()(a,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Delivery Date "},{header:"Delivery no"},{header:"Payment Terms"},{header:"Expire Date"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),a.save("deliveryChallan.pdf")}generatePDFAgain(){const a=new g.default;a.setFontSize(12),a.setTextColor(33,43,54),a.text("Delivery Challan List",82,10),a.text("",10,15),e()(a,{head:[["#","Account","Date","Challan no.","Sale Bill","Transporter Account","Total QTY","Status"]],body:this.filteredData.map((o,p)=>[p+1,o?.account?.title+" ("+o?.account?.account_id+")",this.formatDate(o?.bill_date),o.delivery_challan_bill_no,o.sale_bill?.customer_bill_no,o?.transporter_account?.title,o.total_qty,o?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),a.save("deliveryChallan.pdf")}getVisibleDataFromTable(){const a=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),p=n.querySelectorAll("tbody tr"),c=[];return o.querySelectorAll("th").forEach(f=>{const T=f.textContent.trim();"Is Active"!==T&&"Action"!==T&&c.push(T)}),a.push(c),p.forEach(f=>{const T=[];f.querySelectorAll("td").forEach(A=>{T.push(A.textContent.trim())}),a.push(T)}),a}exportToExcel(){const a=this.getVisibleDataFromTable(),n=i.P6.aoa_to_sheet(a),o=i.P6.book_new();i.P6.book_append_sheet(o,n,"Sheet1");const p=i.cW(o,{bookType:"xlsx",type:"array"}),c=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,l.saveAs)(c,"deliverychallan.xlsx")}printTable(){const a=document.getElementById("mytable"),n=document.querySelector(".titl");if(!a)return void console.error("Table not found");if(!n)return void console.error("Title not found");const o=a.cloneNode(!0),p=n.cloneNode(!0),c=o.querySelector("th.thone:nth-child(1)");c&&c.remove();const f=o.querySelector("th.thone:last-child");f&&f.remove(),o.querySelectorAll("tr").forEach(B=>{const I=B.querySelector("td:nth-child(1)");I&&I.remove();const E=B.querySelector("td:last-child");E&&E.remove()});const A=document.createElement("div");p.classList.add("spaced-title"),A.appendChild(p),A.appendChild(o);const M=document.createElement("style");M.id="printStyle",M.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild(M),A.id="printContainer",document.body.appendChild(A),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const a=document.getElementById("printContainer"),n=document.getElementById("printStyle");a&&document.body.removeChild(a),n&&document.head.removeChild(n)}filterData(){let a=this.tableData.slice();if(this.billDateForm.get("start").value&&this.billDateForm.get("end").value){const n=new Date(this.billDateForm.get("start").value),o=new Date(this.billDateForm.get("end").value);a=a.filter(p=>{const c=new Date(p?.bill_date);return c>=n&&c<=o})}this.selectedAmount&&(a=a.filter(n=>n?.total_qty<=this.selectedAmount)),this.filteredData=a}clearFilter(){this.date=null,this.selectedAmount=null,this.billDateForm.reset(),this.filterData()}changePg(a){console.log(a),-1==a&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardservice.getBranch().subscribe(a=>{this.branchList=a,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(a=>a.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(a,n){if(n)console.log(a),this.selectData.push(a),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(p=>p==a);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return h.\u0275fac=function(a){return new(a||h)(t.Y36(r.M),t.Y36(x.J),t.Y36($.y),t.Y36(m.uU),t.Y36(y.s),t.Y36(U.R))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-list-delivery-challan"]],decls:129,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/add-delivery-challan","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Accunt/Bill",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,""],[1,"mb-1","pb-1"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["billDatePicker",""],[1,"form-group"],["type","number","placeholder","Enter Total QTY",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/add-delivery-challan",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Delivery Challan list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Delivery Challan"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,J,11,5,"div",6),t.qZA()(),t.YNc(10,F,3,0,"a",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(c){return n.titlee=c})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return n.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label",33),t._uU(45,"Date"),t.qZA(),t.TgZ(46,"mat-form-field",34)(47,"mat-date-range-input",35)(48,"input",36),t.NdJ("dateChange",function(){return n.filterData()}),t.qZA(),t.TgZ(49,"span",37)(50,"span",38),t._uU(51,"to"),t.qZA()(),t.TgZ(52,"input",39),t.NdJ("dateChange",function(){return n.filterData()}),t.qZA()(),t._UZ(53,"mat-datepicker-toggle",40)(54,"mat-date-range-picker",null,41),t.qZA()()(),t.TgZ(56,"div",31)(57,"div",42)(58,"label"),t._uU(59,"Enter Total QTY"),t.qZA(),t.TgZ(60,"input",43),t.NdJ("ngModelChange",function(c){return n.selectedAmount=c})("keyup",function(){return n.filterData()}),t.qZA(),t.TgZ(61,"span",44),t._uU(62,"QTY Filter (Less than & Equal to Total QTY value)"),t.qZA()()()(),t.TgZ(63,"div",45),t.NdJ("click",function(){return n.clearFilter()}),t.TgZ(64,"a",46),t._uU(65,"Clear Filter"),t.qZA()()()()()(),t.TgZ(66,"div",47)(67,"table",48)(68,"thead")(69,"tr")(70,"th",49),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(71,"label",50),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(72,"input",51),t.NdJ("ngModelChange",function(c){return n.allSelected=c})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(73,"span",52),t.qZA(),t._UZ(74,"i",53),t.qZA(),t.TgZ(75,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(76,"Sr. No. "),t._UZ(77,"i",53),t.qZA(),t.TgZ(78,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(79,"Challan no. "),t._UZ(80,"i",53),t.qZA(),t.TgZ(81,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(82,"Select Party Name"),t._UZ(83,"i",53),t.qZA(),t.TgZ(84,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(85,"Bill Date "),t._UZ(86,"i",53),t.qZA(),t.TgZ(87,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(88,"Sale Bill"),t._UZ(89,"i",53),t.qZA(),t.TgZ(90,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(91,"Transporter Account "),t._UZ(92,"i",53),t.qZA(),t.TgZ(93,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(94,"Total QTY"),t._UZ(95,"i",53),t.qZA(),t.TgZ(96,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(97,"Status"),t._UZ(98,"i",53),t.qZA(),t.TgZ(99,"th",49),t.NdJ("click",function(){return n.sort("id")}),t._uU(100,"Action "),t._UZ(101,"i",53),t.qZA()()(),t.YNc(102,W,4,11,"tbody",54),t.YNc(103,V,5,0,"tbody",54),t.qZA(),t.TgZ(104,"div",55),t.YNc(105,z,1,0,"mat-progress-bar",56),t.qZA(),t.TgZ(106,"div",4)(107,"div",57)(108,"div",58),t._uU(109," Show per page "),t.TgZ(110,"select",59,60),t.NdJ("ngModelChange",function(c){return n.itemsPerPage=c})("change",function(){t.CHM(o);const c=t.MAs(111);return t.KtG(n.changePg(c.value))}),t.TgZ(112,"option",61),t._uU(113,"10"),t.qZA(),t.TgZ(114,"option",62),t._uU(115,"20"),t.qZA(),t.TgZ(116,"option",63),t._uU(117,"30"),t.qZA(),t.TgZ(118,"option",64),t._uU(119,"50"),t.qZA(),t.TgZ(120,"option",65),t._uU(121,"100"),t.qZA(),t.TgZ(122,"option",66),t._uU(123,"All"),t.qZA()()()(),t.TgZ(124,"div",67)(125,"div",68)(126,"pagination-controls",69),t.NdJ("pageChange",function(c){return n.p=c}),t.qZA(),t.TgZ(127,"div",70),t._uU(128),t.qZA()()()()()()()}if(2&a){const o=t.MAs(55);t.xp6(9),t.Q6J("ngIf",n.isAdmin),t.xp6(1),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(22),t.Q6J("formGroup",n.billDateForm)("rangePicker",o)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",o),t.xp6(7),t.Q6J("ngModel",n.selectedAmount),t.xp6(12),t.Q6J("ngModel",n.allSelected),t.xp6(30),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq("Showing ",n.itemsPerPage," to ",null==n.filteredData?null:n.filteredData.length," of ",n.p," entries")}},dependencies:[m.mk,m.sg,m.O5,_.yS,s.YN,s.Kr,s.Fj,s.wV,s.Wl,s.EJ,s.JJ,s.JL,s.On,s.sg,s.u,P.pW,q.LS,Z.nW,Z.wx,Z.zY,Z.By,Z._g,L.KE,L.R9,q._s,w.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}.mat-form-field-suffix[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.mat-form-field[_ngcontent-%COMP%]{padding-left:20px;height:40px;border-radius:6px}"]}),h})(),canActivate:[u(30597).l],data:{allowedRoles:["view_deliverychallan"]}}];let et=(()=>{class h{}return h.\u0275fac=function(a){return new(a||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[_.Bz.forChild(tt),_.Bz]}),h})();var it=u(8468),rt=u(3238);let at=(()=>{class h{}return h.\u0275fac=function(a){return new(a||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({providers:[m.uU],imports:[m.ez,et,it.I,Z.FA,L.lN,rt.XK]}),h})()},30597:(S,C,u)=>{u.d(C,{l:()=>b});var m=u(94650),_=u(4392),D=u(97185),v=u(42917),g=u(80927);let b=(()=>{class e{constructor(l,s,t,r,x){this.router=l,this.Arout=s,this.toastr=t,this.profileService=r,this.coreService=x}canActivate(l,s){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),t){const r=l.data.allowedRoles,x=t.some(y=>r.includes(y.codename));let $=this.coreService.profileData$.value;if($&&$.username){this.userDetails=$,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next($);const y=$?.permission,U=this.profileService.getUserDetails();(!U||U.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}else this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(y);const U=y?.permission,P=this.profileService.getUserDetails();(!P||P.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())});if(x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(l){return new(l||e)(m.LFG(_.F0),m.LFG(_.gz),m.LFG(D._W),m.LFG(v.J),m.LFG(g.p))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);