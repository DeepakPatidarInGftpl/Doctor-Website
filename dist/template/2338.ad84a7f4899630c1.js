"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2338],{25062:(A,T,u)=>{u.d(T,{y:()=>_});var m=u(92340),v=u(94650),b=u(80529);let _=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${m.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(b.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},60843:(A,T,u)=>{u.d(T,{s:()=>_});var m=u(92340),v=u(94650),b=u(80529);let _=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${m.N.api}`}getSalesNumber(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/numbers/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getCutomerRetention(e,i,a,t){let n=this.apiUrl+"/pv-api/customer-retention-rate/";const l=[];return e&&l.push(`start_date=${e}`),i&&l.push(`end_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getTotalSalePurchase(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getDailySales(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/daily-sales/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getSalevsPurchase(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getCategoryWiseSale(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getSubCatWiseSale(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getInventory(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const l=[];return e&&l.push(`start_date=${e}`),i&&l.push(`end_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getRecentlySales(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/recently-sale/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getRecentlyAddedProduct(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getBestSellingProduct(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getLeastSellingProduct(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getTotalRecvsPay(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getGrowth(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/growth-graph/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getGrossNetProfit(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const l=[];return e&&l.push(`start_date=${e}`),i&&l.push(`end_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getUnpaidInvoices(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getTotalReceivables(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/total-receivable/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getTodayPayables(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/total-payable/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getTodayExpense(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/expenses/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getDepartmentWiseTarget(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getEployeeTargetAchieved(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getEmployeeTop10(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getEmployeeTargetGraph(e,i,a,t){let n=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const l=[];return e&&l.push(`from_date=${e}`),i&&l.push(`to_date=${i}`),a&&l.push(`branch=${a}`),t&&l.push(`financial_year=${t}`),l.length>0&&(n+="?"+l.join("&")),this.http.get(n)}getAnalysisInventoryList(e,i,a){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const n=[];return e&&n.push(`start_date=${e}`),i&&n.push(`end_date=${i}`),a&&n.push(`financial_year=${a}`),n.length>0&&(t+="?"+n.join("&")),this.http.get(t)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,a){let t=this.apiUrl+"/api/reports/profit_and_loss/";const n=[];return e&&n.push(`start_date=${e}`),i&&n.push(`end_date=${i}`),n.length>0&&(t+="?"+n.join("&")),a&&n.push(`financial_year=${a}`),this.http.get(t)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(b.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},72338:(A,T,u)=>{u.r(T),u.d(T,{ListDeliveryChallanModule:()=>z});var m=u(36895),v=u(4392),b=u(2454),_=u.n(b),g=u(96166),$=u(12983),e=u.n($),i=u(80574),a=u(94327),t=u(94650),n=u(72170),l=u(42917),D=u(25062),U=u(60843),y=u(24006),Z=u(73162),L=u(54333),q=u(54040);function B(h,d){if(1&h){const r=t.EpF();t.TgZ(0,"a",69)(1,"input",70,71),t.NdJ("change",function(o){const c=t.CHM(r).$implicit,f=t.oxw(2);return t.KtG(f.SelectedBranch(c.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",72),t.NdJ("click",function(o){t.CHM(r);const p=t.oxw(2);return t.KtG(p.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&h){const r=d.$implicit,s=d.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",r.id)("checked",o.selectData.includes(r.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(r.title)}}function I(h,d){if(1&h&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&h){const r=t.oxw(2);t.xp6(1),t.Oqu(r.selectData.length+" Selected")}}const E=function(){return{standalone:!0}};function w(h,d){if(1&h){const r=t.EpF();t.TgZ(0,"div",62)(1,"div",63)(2,"button",64),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",65)(5,"li")(6,"input",66),t.NdJ("ngModelChange",function(o){t.CHM(r);const p=t.oxw();return t.KtG(p.searchBranch=o)})("ngModelChange",function(){t.CHM(r);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,B,5,5,"a",67),t.qZA()()(),t.TgZ(9,"div",68),t.YNc(10,I,2,1,"span",45),t.qZA()()}if(2&h){const r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.searchBranch)("ngModelOptions",t.DdM(4,E)),t.xp6(2),t.Q6J("ngForOf",r.filteredBranchList),t.xp6(2),t.Q6J("ngIf",r.selectData.length>0)}}function O(h,d){1&h&&(t.TgZ(0,"a",73),t._UZ(1,"img",74),t._uU(2,"Add Delivery Challan "),t.qZA())}function k(h,d){if(1&h&&(t.TgZ(0,"a",81),t._UZ(1,"img",85),t.qZA()),2&h){const r=t.oxw().$implicit;t.MGl("routerLink","//sales/update-delivery-challan/",r.id,"")}}function J(h,d){if(1&h){const r=t.EpF();t.TgZ(0,"a",86),t.NdJ("click",function(){t.CHM(r);const o=t.oxw(),p=o.index,c=o.$implicit,f=t.oxw(2);return t.KtG(f.confirmText(p,c.id))}),t._UZ(1,"img",87),t.qZA()}}const N=function(h,d,r){return{"bg-lightgreen":h,"bg-lightred":d,"bg-lightyellow":r}};function R(h,d){if(1&h){const r=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",76)(3,"input",77),t.NdJ("ngModelChange",function(o){const c=t.CHM(r).index,f=t.oxw(2);return t.KtG(f.selectedRows[c]=o)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",78)(8,"a",79),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",80),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"a",81),t._UZ(25,"img",82),t.qZA(),t.YNc(26,k,2,1,"a",83),t.YNc(27,J,2,0,"a",84),t.qZA()()}if(2&h){const r=d.$implicit,s=d.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[s]),t.xp6(3),t.Oqu(s+1),t.xp6(2),t.MGl("routerLink","//sales/detail-delivery-challan/",r.id,""),t.xp6(1),t.Oqu(null!=r&&null!=r.account&&r.account.company_name?null==r||null==r.account?null:r.account.company_name:(null==r||null==r.account?null:r.account.title)+" ("+(null==r||null==r.account?null:r.account.account_id)+")"),t.xp6(2),t.Oqu(null==r?null:r.bill_date),t.xp6(2),t.Oqu(r.delivery_challan_bill_no),t.xp6(2),t.Oqu(r.sale_bill.customer_bill_no),t.xp6(2),t.Oqu(null==r||null==r.transporter_account?null:r.transporter_account.title),t.xp6(2),t.Oqu(null==r?null:r.total_qty),t.xp6(2),t.Q6J("ngClass",t.kEZ(14,N,"Converted to order"===r.status,"Expired"===r.status,"Draft"===r.status)),t.xp6(1),t.Oqu(r.status),t.xp6(2),t.MGl("routerLink","//sales/detail-delivery-challan/",r.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const F=function(h,d){return{itemsPerPage:h,currentPage:d}};function j(h,d){if(1&h&&(t.TgZ(0,"tbody"),t.YNc(1,R,28,18,"tr",75),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&h){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.filteredData,r.key,r.reverse),t.WLB(8,F,r.itemsPerPage,r.p)))}}function Y(h,d){1&h&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",88)(3,"p",89),t._uU(4,"Data not available"),t.qZA()()()())}function G(h,d){1&h&&t._UZ(0,"mat-progress-bar",90)}const K=[{path:"",component:(()=>{class h{constructor(r,s,o,p,c){this.saleService=r,this.cs=s,this.contactService=o,this.datePipe=p,this.dashboardservice=c,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(r,s){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.deleteDelivryChallan(s).subscribe(p=>{this.delRes=p,this.delRes.success?(this.ngOnInit(),_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(r,1)):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(r,s){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.DelivryChallanIsActive(s,"").subscribe(p=>{this.delRes=p,this.delRes.success&&(_().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(r,s){_().fire({title:"Are you sure?",text:"Do you want to Active this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.DelivryChallanIsActive(s,"").subscribe(p=>{this.delRes=p,this.delRes.success&&(_().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let r=localStorage.getItem("financialYear");console.warn(JSON.parse(r));let s=JSON.parse(r);this.getSaleDelivyChallan(s)}this.cs.userDetails$.subscribe(r=>{this.isAdmin="admin"==r.role}),this.cs.userDetails$.subscribe(r=>{this.userDetails=r,this.userDetails?.permission?.map(o=>{"sale"===o.content_type.app_label&&"deliverychallan"===o.content_type.model&&"add_deliverychallan"==o.codename?this.isAdd=o.codename:"sale"===o.content_type.app_label&&"deliverychallan"===o.content_type.model&&"change_deliverychallan"==o.codename?this.isEdit=o.codename:"sale"===o.content_type.app_label&&"deliverychallan"===o.content_type.model&&"delete_deliverychallan"==o.codename&&(this.isDelete=o.codename)})}),this.getPaymentTerms(),this.getBranch()}getSaleDelivyChallan(r){const s=JSON.stringify(this.selectData);console.log(s),console.log(s?.length),this.saleService.getDelivryChallanFY(r,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(r=>{this.paymentList=r})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(r){this.tableData.forEach(r?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const r=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(s=>{const o=s?.account?.title?.toLocaleLowerCase()||"",p=s?.sale_bill?.customer_bill_no.toLocaleLowerCase()||"";return!!o.includes(r)||!!p.includes(r)})}}sort(r){this.key=r,this.reverse=!this.reverse}formatDate(r){return this.datePipe.transform(r,"yyyy-MM-dd")||""}generatePDF(){const r=new g.default;r.setFontSize(15),r.setTextColor(33,43,54),r.text("Delivery Challan List",10,10),e()(r,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Delivery Date "},{header:"Delivery no"},{header:"Payment Terms"},{header:"Expire Date"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),r.save("deliveryChallan.pdf")}generatePDFAgain(){const r=new g.default;r.setFontSize(12),r.setTextColor(33,43,54),r.text("Delivery Challan List",82,10),r.text("",10,15),e()(r,{head:[["#","Account","Date","Challan no.","Sale Bill","Transporter Account","Total QTY","Status"]],body:this.tableData.map((o,p)=>[p+1,o?.account?.title+" ("+o?.account?.account_id+")",this.formatDate(o?.bill_date),o.delivery_challan_bill_no,o.sale_bill?.customer_bill_no,o?.transporter_account?.title,o.total_qty,o?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),r.save("deliveryChallan.pdf")}getVisibleDataFromTable(){const r=[],s=document.getElementById("mytable"),o=s.querySelector("thead tr"),p=s.querySelectorAll("tbody tr"),c=[];return o.querySelectorAll("th").forEach(f=>{const C=f.textContent.trim();"Is Active"!==C&&"Action"!==C&&c.push(C)}),r.push(c),p.forEach(f=>{const C=[];f.querySelectorAll("td").forEach(x=>{C.push(x.textContent.trim())}),r.push(C)}),r}exportToExcel(){const r=this.getVisibleDataFromTable(),s=i.P6.aoa_to_sheet(r),o=i.P6.book_new();i.P6.book_append_sheet(o,s,"Sheet1");const p=i.cW(o,{bookType:"xlsx",type:"array"}),c=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(c,"deliverychallan.xlsx")}printTable(){const r=document.getElementById("mytable"),p=document.querySelector(".titl").outerHTML,c=r.cloneNode(!0),f=c.querySelector("th.thone:nth-child(8)");f&&f.remove();const C=c.querySelector("th.thone:last-child");C&&C.remove(),c.querySelectorAll("tr").forEach(P=>{const M=P.querySelector("td:nth-child(8)");M&&M.remove();const S=P.querySelector("td:last-child");S&&S.remove()});const X=c.outerHTML,tt="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+X,et=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=tt,window.print(),document.body.innerHTML=et}filterData(){let r=this.tableData.slice();if(this.date){const s=new Date(this.date).toISOString().split("T")[0];r=r.filter(o=>new Date(o?.bill_date).toISOString().split("T")[0]===s)}this.selectedAmount&&(r=r.filter(s=>s?.total_qty<=this.selectedAmount)),this.filteredData=r}clearFilter(){this.date=null,this.selectedAmount=null,this.filterData()}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardservice.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,s){if(s)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(p=>p==r);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return h.\u0275fac=function(r){return new(r||h)(t.Y36(n.M),t.Y36(l.J),t.Y36(D.y),t.Y36(m.uU),t.Y36(U.s))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-list-delivery-challan"]],decls:120,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/add-delivery-challan","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Accunt/Bill",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],["type","number","placeholder","Enter Total QTY",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/add-delivery-challan",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(r,s){if(1&r){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Delivery Challan list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Delivery Challan"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,w,11,5,"div",6),t.qZA()(),t.YNc(10,O,3,0,"a",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(c){return s.titlee=c})("ngModelChange",function(){return s.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return s.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(c){return s.date=c})("ngModelChange",function(){return s.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Total QTY"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(c){return s.selectedAmount=c})("keyup",function(){return s.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"QTY Filter (Less than & Equal to Total QTY value)"),t.qZA()()()(),t.TgZ(54,"div",36),t.NdJ("click",function(){return s.clearFilter()}),t.TgZ(55,"a",37),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return s.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(c){return s.allSelected=c})("change",function(){return s.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Sr. No. "),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(70,"Account"),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"Bill Date "),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(76,"Challan no. "),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(79,"Sale Bill"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(82,"Transporter Account "),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(85,"Total QTY"),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(88,"Status"),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(91,"Action "),t._UZ(92,"i",44),t.qZA()()(),t.YNc(93,j,4,11,"tbody",45),t.YNc(94,Y,5,0,"tbody",45),t.qZA(),t.TgZ(95,"div",46),t.YNc(96,G,1,0,"mat-progress-bar",47),t.qZA(),t.TgZ(97,"div",4)(98,"div",48)(99,"div",49),t._uU(100," Show per page "),t.TgZ(101,"select",50,51),t.NdJ("ngModelChange",function(c){return s.itemsPerPage=c})("change",function(){t.CHM(o);const c=t.MAs(102);return t.KtG(s.changePg(c.value))}),t.TgZ(103,"option",52),t._uU(104,"10"),t.qZA(),t.TgZ(105,"option",53),t._uU(106,"20"),t.qZA(),t.TgZ(107,"option",54),t._uU(108,"30"),t.qZA(),t.TgZ(109,"option",55),t._uU(110,"50"),t.qZA(),t.TgZ(111,"option",56),t._uU(112,"100"),t.qZA(),t.TgZ(113,"option",57),t._uU(114,"All"),t.qZA()()()(),t.TgZ(115,"div",58)(116,"div",59)(117,"pagination-controls",60),t.NdJ("pageChange",function(c){return s.p=c}),t.qZA(),t.TgZ(118,"div",61),t._uU(119),t.qZA()()()()()()()}2&r&&(t.xp6(9),t.Q6J("ngIf",s.isAdmin),t.xp6(1),t.Q6J("ngIf",s.isAdd),t.xp6(15),t.Q6J("ngModel",s.titlee),t.xp6(21),t.Q6J("ngModel",s.date),t.xp6(5),t.Q6J("ngModel",s.selectedAmount),t.xp6(12),t.Q6J("ngModel",s.allSelected),t.xp6(30),t.Q6J("ngIf",(null==s.filteredData?null:s.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==s.filteredData?null:s.filteredData.length)),t.xp6(2),t.Q6J("ngIf",s.loader),t.xp6(5),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq("Showing ",s.itemsPerPage," to ",null==s.filteredData?null:s.filteredData.length," of ",s.p," entries"))},dependencies:[m.mk,m.sg,m.O5,v.yS,y.YN,y.Kr,y.Fj,y.wV,y.Wl,y.EJ,y.JJ,y.On,Z.pW,L.LS,L._s,q.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),h})(),canActivate:[u(30597).l],data:{allowedRoles:["view_deliverychallan"]}}];let W=(()=>{class h{}return h.\u0275fac=function(r){return new(r||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[v.Bz.forChild(K),v.Bz]}),h})();var V=u(8468);let z=(()=>{class h{}return h.\u0275fac=function(r){return new(r||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({providers:[m.uU],imports:[m.ez,W,V.I]}),h})()},30597:(A,T,u)=>{u.d(T,{l:()=>$});var m=u(94650),v=u(4392),b=u(97185),_=u(42917),g=u(80927);let $=(()=>{class e{constructor(a,t,n,l,D){this.router=a,this.Arout=t,this.toastr=n,this.profileService=l,this.coreService=D}canActivate(a,t){const n=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),n){const l=a.data.allowedRoles;console.log(l,"allowedRoles");const D=n.some(U=>l.includes(U.codename));if(console.log(D),this.coreService.getProfile().subscribe(U=>{this.userDetails=U,this.profileService.setUserDetails(this.userDetails);const y=U?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),D)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(a){return new(a||e)(m.LFG(v.F0),m.LFG(v.gz),m.LFG(b._W),m.LFG(_.J),m.LFG(g.p))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);