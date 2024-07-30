"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5270],{25062:(A,T,c)=>{c.d(T,{y:()=>f});var g=c(92340),v=c(94650),D=c(80529);let f=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}}return m.\u0275fac=function(e){return new(e||m)(v.LFG(D.eN))},m.\u0275prov=v.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},60843:(A,T,c)=>{c.d(T,{s:()=>f});var g=c(92340),v=c(94650),D=c(80529);let f=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${g.N.api}`}getSalesNumber(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/numbers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getCutomerRetention(e,i,n,t){let o=this.apiUrl+"/pv-api/customer-retention-rate/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getTotalSalePurchase(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getDailySales(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/daily-sales/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getSalevsPurchase(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getCategoryWiseSale(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getSubCatWiseSale(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getInventory(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getRecentlySales(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/recently-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getRecentlyAddedProduct(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getBestSellingProduct(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getLeastSellingProduct(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getTotalRecvsPay(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getGrowth(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/growth-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getGrossNetProfit(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getUnpaidInvoices(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getTotalReceivables(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/total-receivable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getTodayPayables(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/total-payable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getTodayExpense(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/expenses/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getDepartmentWiseTarget(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getEployeeTargetAchieved(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getEmployeeTop10(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getEmployeeTargetGraph(e,i,n,t){let o=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),n&&r.push(`branch=${n}`),t&&r.push(`financial_year=${t}`),r.length>0&&(o+="?"+r.join("&")),this.http.get(o)}getAnalysisInventoryList(e,i,n){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const o=[];return e&&o.push(`start_date=${e}`),i&&o.push(`end_date=${i}`),n&&o.push(`financial_year=${n}`),o.length>0&&(t+="?"+o.join("&")),this.http.get(t)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,n){let t=this.apiUrl+"/api/reports/profit_and_loss/";const o=[];return e&&o.push(`start_date=${e}`),i&&o.push(`end_date=${i}`),o.length>0&&(t+="?"+o.join("&")),n&&o.push(`financial_year=${n}`),this.http.get(t)}}return m.\u0275fac=function(e){return new(e||m)(v.LFG(D.eN))},m.\u0275prov=v.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},5270:(A,T,c)=>{c.r(T),c.d(T,{DebitNoteModule:()=>tt});var g=c(36895),v=c(4392),D=c(2454),f=c.n(D),m=c(96166),$=c(12983),e=c.n($),i=c(80574),n=c(94327),t=c(94650),o=c(71071),r=c(42917),U=c(60843),C=c(25062),b=c(24006),Z=c(73162),N=c(54333),q=c(90455),I=c(54040);function B(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"a",55)(1,"input",56,57),t.NdJ("change",function(a){const d=t.CHM(s).$implicit,_=t.oxw(2);return t.KtG(_.SelectedBranch(d.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",58),t.NdJ("click",function(a){t.CHM(s);const h=t.oxw(2);return t.KtG(h.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&p){const s=u.$implicit,l=u.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",s.id)("checked",a.selectData.includes(s.id))("id","checkboxCat-"+l),t.xp6(2),t.Q6J("for","checkboxCat-"+l),t.xp6(1),t.Oqu(s.title)}}function E(p,u){if(1&p&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&p){const s=t.oxw(2);t.xp6(1),t.Oqu(s.selectData.length+" Selected")}}const w=function(){return{standalone:!0}};function L(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"button",50),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",51)(5,"li")(6,"input",52),t.NdJ("ngModelChange",function(a){t.CHM(s);const h=t.oxw();return t.KtG(h.searchBranch=a)})("ngModelChange",function(){t.CHM(s);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,B,5,5,"a",53),t.qZA()()(),t.TgZ(9,"div",54),t.YNc(10,E,2,1,"span",7),t.qZA()()}if(2&p){const s=t.oxw();t.xp6(6),t.Q6J("ngModel",s.searchBranch)("ngModelOptions",t.DdM(4,w)),t.xp6(2),t.Q6J("ngForOf",s.filteredBranchList),t.xp6(2),t.Q6J("ngIf",s.selectData.length>0)}}function k(p,u){1&p&&(t.ynx(0),t.TgZ(1,"a",59),t._UZ(2,"img",60),t._uU(3,"Add New Debit Note "),t.qZA(),t.BQk())}function J(p,u){if(1&p&&(t.TgZ(0,"a",68),t._UZ(1,"img",72),t.qZA()),2&p){const s=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatedebitnote/",s.id,"")}}function O(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"a",73),t.NdJ("click",function(){t.CHM(s);const a=t.oxw(),h=a.index,d=a.$implicit,_=t.oxw(2);return t.KtG(_.confirmText(h,d.id))}),t._UZ(1,"img",74),t.qZA()}}const R=function(p,u,s){return{"bg-lightgreen":p,"bg-lightred":u,"bg-lightyellow":s}};function F(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",62)(3,"input",63),t.NdJ("ngModelChange",function(a){const d=t.CHM(s).index,_=t.oxw(2);return t.KtG(_.selectedRows[d]=a)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",64)(8,"a",65),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td")(26,"span",66),t._uU(27),t.qZA()(),t.TgZ(28,"td")(29,"mat-slide-toggle",67),t.NdJ("click",function(){const a=t.CHM(s),h=a.$implicit,d=a.index,_=t.oxw(2);return t.KtG(h.is_active?_.isActive(d,h.id):_.Active(d,h.id))})("ngModelChange",function(a){const d=t.CHM(s).$implicit;return t.KtG(d.is_active=a)}),t.qZA()(),t.TgZ(30,"td")(31,"a",68),t._UZ(32,"img",69),t.qZA(),t.YNc(33,J,2,1,"a",70),t.YNc(34,O,2,0,"a",71),t.qZA()()}if(2&p){const s=u.$implicit,l=u.index,a=t.oxw(2);t.xp6(3),t.Q6J("ngModel",a.selectedRows[l]),t.xp6(3),t.Oqu(l+1),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",s.id,""),t.xp6(1),t.Oqu(null==s||null==s.party?null:s.party.company_name),t.xp6(2),t.Oqu(t.xi3(12,17,null==s?null:s.date,"dd-MMMM-yyyy")),t.xp6(3),t.Oqu(s.debit_note_no),t.xp6(2),t.Oqu(null==s.purchase_bill?null:s.purchase_bill.refrence_bill_no),t.xp6(2),t.Oqu(s.reason),t.xp6(2),t.Oqu(s.amount),t.xp6(2),t.Oqu(s.tax),t.xp6(2),t.Oqu(s.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(20,R,"Complete"===s.status,"Pending"===s.status,"Ordered"===s.status)),t.xp6(1),t.Oqu(s.status),t.xp6(2),t.Q6J("ngModel",s.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",s.id,""),t.xp6(2),t.Q6J("ngIf",a.isEdit),t.xp6(1),t.Q6J("ngIf",a.isDelete)}}const G=function(p,u){return{itemsPerPage:p,currentPage:u}};function j(p,u){if(1&p&&(t.TgZ(0,"tbody"),t.YNc(1,F,35,24,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&p){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,s.filteredData,s.key,s.reverse),t.WLB(8,G,s.itemsPerPage,s.p)))}}function Y(p,u){1&p&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}function H(p,u){1&p&&t._UZ(0,"mat-progress-bar",77)}function K(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"div",4)(1,"div",78)(2,"div",79),t._uU(3," Show per page "),t.TgZ(4,"select",80,81),t.NdJ("ngModelChange",function(a){t.CHM(s);const h=t.oxw();return t.KtG(h.itemsPerPage=a)})("change",function(){t.CHM(s);const a=t.MAs(5),h=t.oxw();return t.KtG(h.changePg(a.value))}),t.TgZ(6,"option",82),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",83),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",84),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",85),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",86),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",87),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",88)(19,"div",89)(20,"pagination-controls",90),t.NdJ("pageChange",function(a){t.CHM(s);const h=t.oxw();return t.KtG(h.p=a)}),t.qZA(),t.TgZ(21,"div",91),t._uU(22),t.qZA()()()()}if(2&p){const s=t.oxw();t.xp6(4),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq("Showing ",s.itemsPerPage," to ",null==s.tableData?null:s.tableData.length," of ",s.p," entries")}}const V=[{path:"",component:(()=>{class p{constructor(s,l,a,h,d){this.transactionService=s,this.cs=l,this.datePipe=a,this.dashboardservice=h,this.contactservice=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(s,l){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.transactionService.deleteDebitNote(l).subscribe(h=>{this.delRes=h,this.delRes.success?(f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(s,1),this.ngOnInit()):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(s,l){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.transactionService.DebitNoteIsActive(l,"").subscribe(h=>{this.delRes=h,this.delRes.success?(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(s,l){f().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.transactionService.DebitNoteIsActive(l,"").subscribe(h=>{this.delRes=h,this.delRes.success?(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getDebitNote().subscribe(s=>{this.tableData=s,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(s=>{this.isAdmin="admin"==s.role}),localStorage.getItem("financialYear")){let s=localStorage.getItem("financialYear");console.warn(JSON.parse(s));let l=JSON.parse(s);this.getEstimate(l)}this.cs.userDetails$.subscribe(s=>{this.userDetails=s,this.userDetails?.permission?.map(a=>{"transactions"===a.content_type.app_label&&"debitnote"===a.content_type.model&&"add_debitnote"==a.codename?this.isAdd=a.codename:"transactions"===a.content_type.app_label&&"debitnote"===a.content_type.model&&"change_debitnote"==a.codename?this.isEdit=a.codename:"transactions"===a.content_type.app_label&&"debitnote"===a.content_type.model&&"delete_debitnote"==a.codename&&(this.isDelete=a.codename)})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(s=>{this.paymentList=s})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(s){this.tableData.forEach(s?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const s=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>{const a=l?.party?.company_name.toLocaleLowerCase(),h=l?.debit_note_no.toLocaleLowerCase();return!!a.match(s)||!!h.match(s)})}}sort(s){this.key=s,this.reverse=!this.reverse}generatePDF(){const s=new m.default;s.setFontSize(15),s.setTextColor(33,43,54),s.text("Debit Note",10,10),e()(s,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),s.save("debitnote.pdf")}formatDate(s){return this.datePipe.transform(s,"yyyy-MM-dd")||""}generatePDFAgain(){const s=new m.default;s.setFontSize(12),s.setTextColor(33,43,54),s.text("Debit Note",82,10),s.text("",10,15),e()(s,{head:[["#","Company Name"," Date","Debit Note No","Purchase Bill","Reason","Amount","Tax","Total","Status"]],body:this.tableData.map((a,h)=>[h+1,a.party?.company_name,this.formatDate(a.date),a.debit_note_no,a.purchase_bill?.refrence_bill_no,a.reason,a.amount,a.tax,a.total,a.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),s.save("Debit Note .pdf")}getVisibleDataFromTable(){const s=[],l=document.getElementById("mytable"),a=l.querySelector("thead tr"),h=l.querySelectorAll("tbody tr"),d=[];return a.querySelectorAll("th").forEach(_=>{const y=_.textContent.trim();"Is Active"!==y&&"Action"!==y&&d.push(y)}),s.push(d),h.forEach(_=>{const y=[];_.querySelectorAll("td").forEach(x=>{y.push(x.textContent.trim())}),s.push(y)}),s}exportToExcel(){const s=this.getVisibleDataFromTable(),l=i.P6.aoa_to_sheet(s),a=i.P6.book_new();i.P6.book_append_sheet(a,l,"Sheet1");const h=i.cW(a,{bookType:"xlsx",type:"array"}),d=new Blob([h],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(d,"debitnote.xlsx")}printTable(){const s=document.getElementById("mytable"),h=document.querySelector(".titl").outerHTML,d=s.cloneNode(!0),_=d.querySelector("th.thone:nth-child(12)");_&&_.remove();const y=d.querySelector("th.thone:last-child");y&&y.remove(),d.querySelectorAll("tr").forEach(M=>{const P=M.querySelector("td:nth-child(12)");P&&P.remove();const S=M.querySelector("td:last-child");S&&S.remove()});const et=d.outerHTML,it="<style>.spaced-title { margin-top: 80px; }</style>"+h.replace("titl","spaced-title")+et,rt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=it,window.print(),document.body.innerHTML=rt}filterData(){let s=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];s=s.filter(a=>new Date(a?.date).toISOString().split("T")[0]===l)}this.selectedAmount&&(s=s.filter(l=>l?.amount<=this.selectedAmount)),this.filteredData=s}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}changePg(s){console.log(s),-1==s&&(this.itemsPerPage=this.tableData.length)}getEstimate(s){const l=JSON.stringify(this.selectData);console.log(l),console.log(l?.length),this.transactionService.getDebitNoteFy(s,this.selectData).subscribe(a=>{this.tableData=a,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(s=>{this.branchList=s,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(s=>s.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(s,l){if(l)console.log(s),this.selectData.push(s),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(h=>h==s);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return p.\u0275fac=function(s){return new(s||p)(t.Y36(o.p),t.Y36(r.J),t.Y36(g.uU),t.Y36(U.s),t.Y36(C.y))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-debit-note"]],decls:107,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Company/DebitNote No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/adddebitnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Debit Note LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Debit Note"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,L,11,5,"div",6),t.qZA()(),t.YNc(10,k,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(h){return l.titlee=h})("ngModelChange",function(){return l.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return l.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return l.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return l.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Debit Note Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(h){return l.date=h})("change",function(){return l.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Amount"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(h){return l.selectedAmount=h})("keyup",function(){return l.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(54,"div",36),t.NdJ("click",function(){return l.clearFilters()}),t.TgZ(55,"a",37),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return l.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return l.selectAll(l.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(h){return l.allSelected=h})("change",function(){return l.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(67,"Sr. No."),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(70,"Company Name "),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(73,"Date"),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(76,"Debit Note No"),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(79,"Purchase Bill"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(82,"Reason"),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(85,"Amount "),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(88,"Tax "),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(91,"Total "),t._UZ(92,"i",44),t.qZA(),t.TgZ(93,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(94,"Status "),t._UZ(95,"i",44),t.qZA(),t.TgZ(96,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(97,"Is Active "),t._UZ(98,"i",44),t.qZA(),t.TgZ(99,"th",40),t.NdJ("click",function(){return l.sort("id")}),t._uU(100,"Action "),t._UZ(101,"i",44),t.qZA()()(),t.YNc(102,j,4,11,"tbody",7),t.YNc(103,Y,5,0,"tbody",7),t.qZA(),t.TgZ(104,"div",45),t.YNc(105,H,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(106,K,23,4,"div",47),t.qZA()()()),2&s&&(t.xp6(9),t.Q6J("ngIf",l.isAdmin),t.xp6(1),t.Q6J("ngIf",l.isAdd),t.xp6(15),t.Q6J("ngModel",l.titlee),t.xp6(21),t.Q6J("ngModel",l.date),t.xp6(5),t.Q6J("ngModel",l.selectedAmount),t.xp6(12),t.Q6J("ngModel",l.allSelected),t.xp6(39),t.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==l.filteredData?null:l.filteredData.length)&&!l.loader),t.xp6(2),t.Q6J("ngIf",l.loader),t.xp6(1),t.Q6J("ngIf",!l.loader))},dependencies:[g.mk,g.sg,g.O5,v.yS,b.YN,b.Kr,b.Fj,b.wV,b.Wl,b.EJ,b.JJ,b.On,Z.pW,N.LS,q.Rr,g.uU,N._s,I.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),p})(),canActivate:[c(30597).l],data:{allowedRoles:["view_debitnote"]}}];let z=(()=>{class p{}return p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[v.Bz.forChild(V),v.Bz]}),p})();var X=c(8468);let tt=(()=>{class p{}return p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,z,X.I]}),p})()},30597:(A,T,c)=>{c.d(T,{l:()=>$});var g=c(94650),v=c(4392),D=c(97185),f=c(42917),m=c(80927);let $=(()=>{class e{constructor(n,t,o,r,U){this.router=n,this.Arout=t,this.toastr=o,this.profileService=r,this.coreService=U}canActivate(n,t){const o=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),o){const r=n.data.allowedRoles;console.log(r,"allowedRoles");const U=o.some(C=>r.includes(C.codename));if(console.log(U),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const b=C?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),U)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(n){return new(n||e)(g.LFG(v.F0),g.LFG(v.gz),g.LFG(D._W),g.LFG(f.J),g.LFG(m.p))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);