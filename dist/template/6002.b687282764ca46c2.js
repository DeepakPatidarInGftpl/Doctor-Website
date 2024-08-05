"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6002],{25062:(A,y,h)=>{h.d(y,{y:()=>f});var _=h(92340),v=h(94650),T=h(80529);let f=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(T.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},60843:(A,y,h)=>{h.d(y,{s:()=>f});var _=h(92340),v=h(94650),T=h(80529);let f=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSalesNumber(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCutomerRetention(e,i,n,l){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalSalePurchase(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDailySales(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSalevsPurchase(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCategoryWiseSale(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSubCatWiseSale(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getInventory(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlySales(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlyAddedProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getBestSellingProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getLeastSellingProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalRecvsPay(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrowth(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrossNetProfit(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getUnpaidInvoices(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalReceivables(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayPayables(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayExpense(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDepartmentWiseTarget(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEployeeTargetAchieved(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTop10(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTargetGraph(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),l&&r.push(`financial_year=${l}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getAnalysisInventoryList(e,i,n){let l=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),n&&t.push(`financial_year=${n}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,n){let l=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),t.length>0&&(l+="?"+t.join("&")),n&&t.push(`financial_year=${n}`),this.http.get(l)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(T.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},26002:(A,y,h)=>{h.r(y),h.d(y,{CreditNoteModule:()=>et});var _=h(36895),v=h(4392),T=h(2454),f=h.n(T),g=h(96166),$=h(12983),e=h.n($),i=h(80574),n=h(94327),l=h(24006),t=h(94650),r=h(71071),b=h(42917),U=h(60843),Z=h(25062),N=h(43443),q=h(73162),D=h(54333),I=h(90455),B=h(54040);function E(c,d){if(1&c){const s=t.EpF();t.TgZ(0,"a",55)(1,"input",56,57),t.NdJ("change",function(o){const u=t.CHM(s).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",58),t.NdJ("click",function(o){t.CHM(s);const p=t.oxw(2);return t.KtG(p.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&c){const s=d.$implicit,a=d.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",s.id)("checked",o.selectData.includes(s.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(s.title)}}function w(c,d){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const s=t.oxw(2);t.xp6(1),t.Oqu(s.selectData.length+" Selected")}}const L=function(){return{standalone:!0}};function k(c,d){if(1&c){const s=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"button",50),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",51)(5,"li")(6,"input",52),t.NdJ("ngModelChange",function(o){t.CHM(s);const p=t.oxw();return t.KtG(p.searchBranch=o)})("ngModelChange",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,E,5,5,"a",53),t.qZA()()(),t.TgZ(9,"div",54),t.YNc(10,w,2,1,"span",7),t.qZA()()}if(2&c){const s=t.oxw();t.xp6(6),t.Q6J("ngModel",s.searchBranch)("ngModelOptions",t.DdM(4,L)),t.xp6(2),t.Q6J("ngForOf",s.filteredBranchList),t.xp6(2),t.Q6J("ngIf",s.selectData.length>0)}}function J(c,d){1&c&&(t.ynx(0),t.TgZ(1,"a",59),t._UZ(2,"img",60),t._uU(3,"Add New Credit Note "),t.qZA(),t.BQk())}function O(c,d){if(1&c&&(t.TgZ(0,"a",68),t._UZ(1,"img",72),t.qZA()),2&c){const s=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatecreditnote/",s.id,"")}}function R(c,d){if(1&c){const s=t.EpF();t.TgZ(0,"a",73),t.NdJ("click",function(){t.CHM(s);const o=t.oxw(),p=o.index,u=o.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(p,u.id))}),t._UZ(1,"img",74),t.qZA()}}const F=function(c,d,s){return{"bg-lightgreen":c,"bg-lightred":d,"bg-lightyellow":s}};function G(c,d){if(1&c){const s=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",62)(3,"input",63),t.NdJ("ngModelChange",function(o){const u=t.CHM(s).index,m=t.oxw(2);return t.KtG(m.selectedRows[u]=o)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",64)(8,"a",65),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"span",66),t._uU(24),t.qZA()(),t.TgZ(25,"td")(26,"mat-slide-toggle",67),t.NdJ("click",function(){const o=t.CHM(s),p=o.$implicit,u=o.index,m=t.oxw(2);return t.KtG(p.is_active?m.isActive(u,p.id):m.Active(u,p.id))})("ngModelChange",function(o){const u=t.CHM(s).$implicit;return t.KtG(u.is_active=o)}),t.qZA()(),t.TgZ(27,"td")(28,"a",68),t._UZ(29,"img",69),t.qZA(),t.YNc(30,O,2,1,"a",70),t.YNc(31,R,2,0,"a",71),t.qZA()()}if(2&c){const s=d.$implicit,a=d.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[a]),t.xp6(3),t.Oqu(a+1),t.xp6(2),t.MGl("routerLink","//transaction/detailscreditnote/",s.id,""),t.xp6(1),t.Oqu(null==s||null==s.account?null:s.account.account_id),t.xp6(2),t.Oqu(null==s?null:s.date),t.xp6(2),t.Oqu(s.credit_note_no),t.xp6(2),t.Oqu(null==s||null==s.sale_bill_no?null:s.sale_bill_no.customer_bill_no),t.xp6(2),t.Oqu(s.roundoff),t.xp6(2),t.Oqu(s.tax),t.xp6(2),t.Oqu(s.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(16,F,"Complete"===s.status,"Pending"===s.status,"Ordered"===s.status)),t.xp6(1),t.Oqu(s.status),t.xp6(2),t.Q6J("ngModel",s.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailscreditnote/",s.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const j=function(c,d){return{itemsPerPage:c,currentPage:d}};function Y(c,d){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,G,32,20,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,s.filteredData,s.key,s.reverse),t.WLB(8,j,s.itemsPerPage,s.p)))}}function H(c,d){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}function K(c,d){1&c&&t._UZ(0,"mat-progress-bar",77)}function Q(c,d){if(1&c){const s=t.EpF();t.TgZ(0,"div",4)(1,"div",78)(2,"div",79),t._uU(3," Show per page "),t.TgZ(4,"select",80,81),t.NdJ("ngModelChange",function(o){t.CHM(s);const p=t.oxw();return t.KtG(p.itemsPerPage=o)})("change",function(){t.CHM(s);const o=t.MAs(5),p=t.oxw();return t.KtG(p.changePg(o.value))}),t.TgZ(6,"option",82),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",83),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",84),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",85),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",86),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",87),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",88)(19,"div",89)(20,"pagination-controls",90),t.NdJ("pageChange",function(o){t.CHM(s);const p=t.oxw();return t.KtG(p.p=o)}),t.qZA(),t.TgZ(21,"div",91),t._uU(22),t.qZA()()()()}if(2&c){const s=t.oxw();t.xp6(4),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq("Showing ",s.itemsPerPage," to ",null==s.tableData?null:s.tableData.length," of ",s.p," entries ")}}const z=[{path:"",component:(()=>{class c{constructor(s,a,o,p,u){this.transactionService=s,this.cs=a,this.dashboardservice=o,this.contactservice=p,this.commonService=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.minDate="",this.maxDate="",this.creditNoteDate=new l.NI(""),this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(s,a){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.deleteCreditNote(a).subscribe(p=>{this.delRes=p,this.delRes.success?(f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(s,1),this.ngOnInit()):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(s,a){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CreditNoteIsActive(a,"").subscribe(p=>{this.delRes=p,this.delRes.success?(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(s,a){f().fire({title:"Are you sure?",text:"Do you want to Active this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CreditNoteIsActive(a,"").subscribe(p=>{this.delRes=p,this.delRes.success?(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getCreditNote().subscribe(a=>{this.tableData=a,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(a=>{this.isAdmin="admin"==a.role}),localStorage.getItem("financialYear")){let a=localStorage.getItem("financialYear");console.warn(JSON.parse(a));let o=JSON.parse(a);this.getEstimate(o)}this.cs.userDetails$.subscribe(a=>{this.userDetails=a,this.userDetails?.permission?.map(p=>{"transactions"===p.content_type.app_label&&"creditnote"===p.content_type.model&&"add_creditnote"==p.codename?(this.isAdd=p.codename,console.log(this.isAdd)):"transactions"===p.content_type.app_label&&"creditnote"===p.content_type.model&&"change_creditnote"==p.codename?(this.isEdit=p.codename,console.log(this.isEdit)):"transactions"===p.content_type.app_label&&"creditnote"===p.content_type.model&&"delete_creditnote"==p.codename&&(this.isDelete=p.codename,console.log(this.isDelete))})}),this.getPaymentTerms(),this.getBranch();const s=localStorage.getItem("financialYear");this.creditNoteDateValidation(s)}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(s=>{this.paymentList=s})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(s){this.tableData.forEach(s?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const s=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(a=>{const o=a?.account?.account_id.toLocaleLowerCase(),p=a?.credit_note_no.toLocaleLowerCase();return!!o.match(s)||!!p.match(s)})}}sort(s){this.key=s,this.reverse=!this.reverse}generatePDF(){const s=new g.default;s.setFontSize(15),s.setTextColor(33,43,54),s.text("Credit Note",10,10),e()(s,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Credit Note Date"},{header:"Credit Note No"},{header:"Sale Bill"},{header:"Reason"},{header:"Round off"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),s.save("creditNote.pdf")}generatePDFAgain(){const s=new g.default;s.setFontSize(12),s.setTextColor(33,43,54),s.text("Credit Note",82,10),s.text("",10,15),e()(s,{head:[["#","Company Name","Credit Note Date","Credit Note No","Sale Bill","Reason","Round off","Tax","Total","Status"]],body:this.tableData.map((o,p)=>[p+1,o.account?.account_id,o.date,o.credit_note_no,o.sale_bill_no?.customer_bill_no,o.reason,o.roundoff,o.tax,o.total,o.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),s.save("Credit Note .pdf")}getVisibleDataFromTable(){const s=[],a=document.getElementById("mytable"),o=a.querySelector("thead tr"),p=a.querySelectorAll("tbody tr"),u=[];return o.querySelectorAll("th").forEach(m=>{const C=m.textContent.trim();"Is Active"!==C&&"Action"!==C&&u.push(C)}),s.push(u),p.forEach(m=>{const C=[];m.querySelectorAll("td").forEach(x=>{C.push(x.textContent.trim())}),s.push(C)}),s}exportToExcel(){const s=this.getVisibleDataFromTable(),a=i.P6.aoa_to_sheet(s),o=i.P6.book_new();i.P6.book_append_sheet(o,a,"Sheet1");const p=i.cW(o,{bookType:"xlsx",type:"array"}),u=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(u,"creditNote.xlsx")}printTable(){const s=document.getElementById("mytable"),p=document.querySelector(".titl").outerHTML,u=s.cloneNode(!0),m=u.querySelector("th.thone:nth-child(12)");m&&m.remove();const C=u.querySelector("th.thone:last-child");C&&C.remove(),u.querySelectorAll("tr").forEach(M=>{const P=M.querySelector("td:nth-child(12)");P&&P.remove();const S=M.querySelector("td:last-child");S&&S.remove()});const it=u.outerHTML,rt="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+it,st=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=rt,window.print(),document.body.innerHTML=st}creditNoteDateValidation(s){const a=this.creditNoteDate,{formattedMinDate:o,formattedMaxDate:p}=this.commonService.setMinMaxDates(a,s);this.minDate=o,this.maxDate=p}filterData(){let s=this.tableData.slice();if(this.creditNoteDate.value){const a=new Date(this.creditNoteDate.value).toISOString().split("T")[0];s=s.filter(o=>new Date(o?.date).toISOString().split("T")[0]===a)}this.selectedAmount&&(s=s.filter(a=>a?.total<=this.selectedAmount)),this.filteredData=s}clearFilters(){this.selectedAmount=null,this.creditNoteDate.setValue(""),this.filterData()}changePg(s){console.log(s),-1==s&&(this.itemsPerPage=this.tableData.length)}getEstimate(s){const a=JSON.stringify(this.selectData);console.log(a),console.log(a?.length),this.transactionService.getCreditNoteFy(s,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(s=>{this.branchList=s,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(s=>s.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(s,a){if(a)console.log(s),this.selectData.push(s),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(p=>p==s);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(s){return new(s||c)(t.Y36(r.p),t.Y36(b.J),t.Y36(U.s),t.Y36(Z.y),t.Y36(N.R))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-credit-note"]],decls:104,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","AccountID/CreditNote No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"formControl","change"],["type","number","placeholder","Enter Total",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addcreditnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Credit Note LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Credit Note"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,k,11,5,"div",6),t.qZA()(),t.YNc(10,J,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(p){return a.titlee=p})("ngModelChange",function(){return a.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return a.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Credit Note Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("change",function(){return a.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Total"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(p){return a.selectedAmount=p})("keyup",function(){return a.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"Total Filter (Less than & Equal to Total value)"),t.qZA()()()(),t.TgZ(54,"div",36),t.NdJ("click",function(){return a.clearFilters()}),t.TgZ(55,"a",37),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return a.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(p){return a.allSelected=p})("change",function(){return a.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(67,"Sr. No."),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(70,"Account"),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(73,"Credit Note Date"),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(76,"Credit Note No"),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(79,"Sales Bill"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(82,"Round off "),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(85,"Tax "),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(88,"Total "),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(91,"Status "),t._UZ(92,"i",44),t.qZA(),t.TgZ(93,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(94,"Is Active "),t._UZ(95,"i",44),t.qZA(),t.TgZ(96,"th",40),t.NdJ("click",function(){return a.sort("id")}),t._uU(97,"Action "),t._UZ(98,"i",44),t.qZA()()(),t.YNc(99,Y,4,11,"tbody",7),t.YNc(100,H,5,0,"tbody",7),t.qZA(),t.TgZ(101,"div",45),t.YNc(102,K,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(103,Q,23,4,"div",47),t.qZA()()()),2&s&&(t.xp6(9),t.Q6J("ngIf",a.isAdmin),t.xp6(1),t.Q6J("ngIf",a.isAdd),t.xp6(15),t.Q6J("ngModel",a.titlee),t.xp6(21),t.Q6J("formControl",a.creditNoteDate),t.uIk("min",a.minDate)("max",a.maxDate),t.xp6(5),t.Q6J("ngModel",a.selectedAmount),t.xp6(12),t.Q6J("ngModel",a.allSelected),t.xp6(36),t.Q6J("ngIf",(null==a.filteredData?null:a.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==a.filteredData?null:a.filteredData.length)&&!a.loader),t.xp6(2),t.Q6J("ngIf",a.loader),t.xp6(1),t.Q6J("ngIf",!a.loader))},dependencies:[_.mk,_.sg,_.O5,v.yS,l.YN,l.Kr,l.Fj,l.wV,l.Wl,l.EJ,l.JJ,l.On,l.oH,q.pW,D.LS,I.Rr,D._s,B.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[h(30597).l],data:{allowedRoles:["view_debitnote"]}}];let X=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[v.Bz.forChild(z),v.Bz]}),c})();var tt=h(8468);let et=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[_.ez,X,tt.I]}),c})()},30597:(A,y,h)=>{h.d(y,{l:()=>$});var _=h(94650),v=h(4392),T=h(97185),f=h(42917),g=h(80927);let $=(()=>{class e{constructor(n,l,t,r,b){this.router=n,this.Arout=l,this.toastr=t,this.profileService=r,this.coreService=b}canActivate(n,l){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),t){const r=n.data.allowedRoles;console.log(r,"allowedRoles");const b=t.some(U=>r.includes(U.codename));if(console.log(b),this.coreService.getProfile().subscribe(U=>{this.userDetails=U,this.profileService.setUserDetails(this.userDetails);const Z=U?.permission,N=this.profileService.getUserDetails();(!N||N.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(n){return new(n||e)(_.LFG(v.F0),_.LFG(v.gz),_.LFG(T._W),_.LFG(f.J),_.LFG(g.p))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);