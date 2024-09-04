"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[557],{25062:(E,b,h)=>{h.d(b,{y:()=>f});var _=h(92340),v=h(94650),$=h(80529);let f=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG($.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},60843:(E,b,h)=>{h.d(b,{s:()=>f});var _=h(92340),v=h(94650),$=h(80529);let f=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSalesNumber(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getCutomerRetention(e,i,n,l){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const s=[];return e&&s.push(`start_date=${e}`),i&&s.push(`end_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getTotalSalePurchase(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getDailySales(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getSalevsPurchase(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getCategoryWiseSale(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getSubCatWiseSale(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getInventory(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const s=[];return e&&s.push(`start_date=${e}`),i&&s.push(`end_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getRecentlySales(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getRecentlyAddedProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getBestSellingProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getLeastSellingProduct(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getTotalRecvsPay(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getGrowth(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getGrossNetProfit(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const s=[];return e&&s.push(`start_date=${e}`),i&&s.push(`end_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getUnpaidInvoices(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getTotalReceivables(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getTodayPayables(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getTodayExpense(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getDepartmentWiseTarget(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getEployeeTargetAchieved(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getEmployeeTop10(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getEmployeeTargetGraph(e,i,n,l){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const s=[];return e&&s.push(`from_date=${e}`),i&&s.push(`to_date=${i}`),n&&s.push(`branch=${n}`),l&&s.push(`financial_year=${l}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getAnalysisInventoryList(e,i,n){let l=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),n&&t.push(`financial_year=${n}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,n){let l=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),t.length>0&&(l+="?"+t.join("&")),n&&t.push(`financial_year=${n}`),this.http.get(l)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG($.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},557:(E,b,h)=>{h.r(b),h.d(b,{ListExpensesModule:()=>nt});var _=h(36895),v=h(4392),$=h(2454),f=h.n($),g=h(96166),T=h(12983),e=h.n(T),i=h(80574),n=h(94327),l=h(24006),t=h(94650),s=h(71071),A=h(42917),U=h(60843),y=h(25062),C=h(43443),D=h(73162),P=h(54333),N=h(90455),J=h(54040);function w(c,d){if(1&c){const r=t.EpF();t.TgZ(0,"a",59)(1,"input",60,61),t.NdJ("change",function(p){const u=t.CHM(r).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,p.target.checked))}),t.qZA(),t.TgZ(3,"label",62),t.NdJ("click",function(p){t.CHM(r);const o=t.oxw(2);return t.KtG(o.onLabelClick(p))}),t._uU(4),t.qZA()()}if(2&c){const r=d.$implicit,a=d.index,p=t.oxw(2);t.xp6(1),t.Q6J("value",r.id)("checked",p.selectData.includes(r.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(r.title)}}function k(c,d){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const r=t.oxw(2);t.xp6(1),t.Oqu(r.selectData.length+" Selected")}}const O=function(){return{standalone:!0}};function R(c,d){if(1&c){const r=t.EpF();t.TgZ(0,"div",52)(1,"div",53)(2,"button",54),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",55)(5,"li")(6,"input",56),t.NdJ("ngModelChange",function(p){t.CHM(r);const o=t.oxw();return t.KtG(o.searchBranch=p)})("ngModelChange",function(){t.CHM(r);const p=t.oxw();return t.KtG(p.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,w,5,5,"a",57),t.qZA()()(),t.TgZ(9,"div",58),t.YNc(10,k,2,1,"span",7),t.qZA()()}if(2&c){const r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.searchBranch)("ngModelOptions",t.DdM(4,O)),t.xp6(2),t.Q6J("ngForOf",r.filteredBranchList),t.xp6(2),t.Q6J("ngIf",r.selectData.length>0)}}function V(c,d){1&c&&(t.ynx(0),t.TgZ(1,"a",63),t._UZ(2,"img",64),t._uU(3,"Add New Expense Voucher "),t.qZA(),t.BQk())}function j(c,d){if(1&c&&(t.TgZ(0,"a",73),t._UZ(1,"img",77),t.qZA()),2&c){const r=t.oxw().$implicit;t.MGl("routerLink","//transaction/updateexpensesVoucher/",null==r?null:r.id,"")}}function F(c,d){if(1&c){const r=t.EpF();t.TgZ(0,"a",78),t.NdJ("click",function(){t.CHM(r);const p=t.oxw(),o=p.index,u=p.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(o,null==u?null:u.id))}),t._UZ(1,"img",79),t.qZA()}}const G=function(){return["Pending","Sent","Draft"]},Y=function(c,d,r){return{"bg-lightgreen":c,"bg-lightred":d,"bg-lightyellow":r}};function K(c,d){if(1&c){const r=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",66)(3,"input",67),t.NdJ("ngModelChange",function(p){const u=t.CHM(r).index,m=t.oxw(2);return t.KtG(m.selectedRows[u]=p)}),t.qZA(),t._UZ(4,"span",47),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",68),t._uU(8),t.qZA(),t.TgZ(9,"td",69)(10,"a",70),t._uU(11),t.qZA()(),t.TgZ(12,"td",68),t._uU(13),t.qZA(),t.TgZ(14,"td",68),t._uU(15),t.qZA(),t.TgZ(16,"td",68),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",71),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"mat-slide-toggle",72),t.NdJ("click",function(){const p=t.CHM(r),o=p.$implicit,u=p.index,m=t.oxw(2);return t.KtG(o.is_active?m.isActive(u,o.id):m.Active(u,o.id))})("ngModelChange",function(p){const u=t.CHM(r).$implicit;return t.KtG(u.is_active=p)}),t.qZA()(),t.TgZ(25,"td")(26,"a",73),t._UZ(27,"img",74),t.qZA(),t.YNc(28,j,2,1,"a",75),t.YNc(29,F,2,0,"a",76),t.qZA()()}if(2&c){const r=d.$implicit,a=d.index,p=t.oxw(2);t.xp6(3),t.Q6J("ngModel",p.selectedRows[a]),t.xp6(3),t.Oqu(a+1),t.xp6(2),t.Oqu(null==r?null:r.expense_no),t.xp6(2),t.MGl("routerLink","//transaction/detailsexpensesVoucher/",r.id,""),t.xp6(1),t.Oqu(null==r||null==r.party?null:r.party.name),t.xp6(2),t.Oqu(null==r?null:r.expense_date),t.xp6(2),t.Oqu(null==r?null:r.branch.title),t.xp6(2),t.Oqu(null==r?null:r.total_amount),t.xp6(2),t.Oqu(null==r?null:r.reverse_charge),t.xp6(2),t.Q6J("ngClass",t.kEZ(16,Y,"Approved"===r.status,"Rejected"===r.status,t.DdM(15,G).includes(r.status))),t.xp6(1),t.Oqu(r.status),t.xp6(2),t.Q6J("ngModel",r.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailsexpensesVoucher/",null==r?null:r.id,""),t.xp6(2),t.Q6J("ngIf",p.isEdit),t.xp6(1),t.Q6J("ngIf",p.isDelete)}}const Q=function(c,d){return{itemsPerPage:c,currentPage:d}};function W(c,d){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,K,30,20,"tr",65),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.filteredData,r.key,r.reverse),t.WLB(8,Q,r.itemsPerPage,r.p)))}}function H(c,d){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",80)(3,"p",81),t._uU(4,"Data not available"),t.qZA()()()())}function z(c,d){1&c&&t._UZ(0,"mat-progress-bar",82)}function X(c,d){if(1&c){const r=t.EpF();t.TgZ(0,"div",4)(1,"div",83)(2,"div",84),t._uU(3," Show per page "),t.TgZ(4,"select",85,86),t.NdJ("ngModelChange",function(p){t.CHM(r);const o=t.oxw();return t.KtG(o.itemsPerPage=p)})("change",function(){t.CHM(r);const p=t.MAs(5),o=t.oxw();return t.KtG(o.changePg(p.value))}),t.TgZ(6,"option",87),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",88),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",89),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",90),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",91),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",92),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",93)(19,"div",94)(20,"pagination-controls",95),t.NdJ("pageChange",function(p){t.CHM(r);const o=t.oxw();return t.KtG(o.p=p)}),t.qZA(),t.TgZ(21,"div",96),t._uU(22),t.qZA()()()()}if(2&c){const r=t.oxw();t.xp6(4),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq("Showing ",r.itemsPerPage," to ",null==r.tableData?null:r.tableData.length," of ",r.p," entries ")}}const it=[{path:"",component:(()=>{class c{constructor(r,a,p,o,u){this.transactionService=r,this.cs=a,this.dashboardService=p,this.contactservice=o,this.commonService=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.minDate="",this.maxDate="",this.journalVoucherDate=new l.NI(""),this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(r,a){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(p=>{p.isConfirmed&&this.transactionService.deleteExpensVoucher(a).subscribe(o=>{this.delRes=o,this.delRes.success?(f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(r,1),this.ngOnInit()):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(r,a){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this Expense Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(p=>{p.isConfirmed&&this.transactionService.ExpensVoucherIsActive(a,"").subscribe(o=>{this.delRes=o,this.delRes.success?(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(r,a){f().fire({title:"Are you sure?",text:"Do you want to Active this Expense Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(p=>{p.isConfirmed&&this.transactionService.ExpensVoucherIsActive(a,"").subscribe(o=>{this.delRes=o,this.delRes.success?(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getExpensVoucher().subscribe(a=>{this.tableData=a,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(a=>{this.isAdmin="admin"==a?.role}),localStorage.getItem("financialYear")){let a=localStorage.getItem("financialYear");console.warn(JSON.parse(a));let p=JSON.parse(a);this.getEstimate(p)}this.cs.userDetails$.subscribe(a=>{this.userDetails=a,this.userDetails?.permission?.map(o=>{"transactions"===o.content_type.app_label&&"expensesvoucher"===o.content_type.model&&"add_expensesvoucher"==o.codename?this.isAdd=o.codename:"transactions"===o.content_type.app_label&&"expensesvoucher"===o.content_type.model&&"change_expensesvoucher"==o.codename?this.isEdit=o.codename:"transactions"===o.content_type.app_label&&"expensesvoucher"===o.content_type.model&&"delete_expensesvoucher"==o.codename&&(this.isDelete=o.codename)})}),this.getPaymentTerms(),this.getBranch();const r=localStorage.getItem("financialYear");this.journalVoucherDateValidation(r)}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(r=>{this.paymentList=r})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(r){this.tableData.forEach(r?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const r=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(a=>a?.journal_voucher_no.toLocaleLowerCase().includes(r))}}sort(r){this.key=r,this.reverse=!this.reverse}generatePDF(){const r=new g.default;r.setFontSize(15),r.setTextColor(33,43,54),r.text("Journal Voucher",10,10),e()(r,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Account"},{header:"Journal Voucher No."},{header:"Date"},{header:"Total Debit"},{header:"Total Credit"},{header:"Description"},{header:"Is Active"}]}),r.save("journalVoucher.pdf")}generatePDFAgain(){const r=new g.default;r.setFontSize(12),r.setTextColor(33,43,54),r.text("Expense Voucher",82,10),r.text("",10,15),e()(r,{head:[["#","Party","Expense Voucher No.","Refrence Bill No.","Date ","Sub Total","Total","Reverse Charge"]],body:this.tableData.map((p,o)=>[o+1,p.party?.name,p.expense_no,p.refrence_bill_no,p.expense_date,p.tax_amount,p.total_amount,p.reverse_charge]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),r.save("Expense Voucher .pdf")}getVisibleDataFromTable(){const r=[],a=document.getElementById("mytable"),p=a.querySelector("thead tr"),o=a.querySelectorAll("tbody tr"),u=[];return p.querySelectorAll("th").forEach(m=>{const x=m.textContent.trim();"Is Active"!==x&&"Action"!==x&&u.push(x)}),r.push(u),o.forEach(m=>{const x=[];m.querySelectorAll("td").forEach(M=>{x.push(M.textContent.trim())}),r.push(x)}),r}exportToExcel(){const r=this.getVisibleDataFromTable(),a=i.P6.aoa_to_sheet(r),p=i.P6.book_new();i.P6.book_append_sheet(p,a,"Sheet1");const o=i.cW(p,{bookType:"xlsx",type:"array"}),u=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(u,"journalVoucher.xlsx")}printTable(){const r=document.getElementById("mytable"),a=document.querySelector(".titl");if(!r)return void console.error("Table not found");if(!a)return void console.error("Title not found");const p=r.cloneNode(!0),o=a.cloneNode(!0),u=p.querySelector("th.thone:nth-child(1)");u&&u.remove();const m=p.querySelector("th.thone:nth-child(11)");m&&m.remove();const x=p.querySelector("th.thone:last-child");x&&x.remove(),p.querySelectorAll("tr").forEach(S=>{const I=S.querySelector("td:nth-child(1)");I&&I.remove();const q=S.querySelector("td:nth-child(11)");q&&q.remove();const B=S.querySelector("td:last-child");B&&B.remove()});const Z=document.createElement("div");o.classList.add("spaced-title"),Z.appendChild(o),Z.appendChild(p);const L=document.createElement("style");L.id="printStyle",L.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild(L),Z.id="printContainer",document.body.appendChild(Z),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const r=document.getElementById("printContainer"),a=document.getElementById("printStyle");r&&document.body.removeChild(r),a&&document.head.removeChild(a)}journalVoucherDateValidation(r){const a=this.journalVoucherDate,{formattedMinDate:p,formattedMaxDate:o}=this.commonService.setMinMaxDates(a,r);this.minDate=p,this.maxDate=o}filterData(r,a){let p=this.tableData.slice();if(this.journalVoucherDate.value){const o=new Date(this.journalVoucherDate.value).toISOString().split("T")[0];p=p.filter(u=>new Date(u?.date).toISOString().split("T")[0]===o)}this.selectedDebit&&(p=p.filter(o=>o?.total_debit<=this.selectedDebit)),this.selectedcredit&&(p=p.filter(o=>o?.total_credit<=this.selectedcredit)),"Is Active"==r&&(p=p.filter(o=>"Active"===a?1==o.is_active:"InActive"===a?0==o.is_active:o)),console.log(p),this.filteredData=p}clearFilters(){this.selectedDebit=null,this.selectedcredit=null,this.journalVoucherDate.setValue(""),this.filterData()}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.tableData.length)}getEstimate(r){const a=JSON.stringify(this.selectData);console.log(a),console.log(a?.length),this.transactionService.getExpensVoucherFy(r,this.selectData).subscribe(p=>{this.tableData=p,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardService.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,a){if(a)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const p=this.selectData.findIndex(o=>o==r);console.log(p),-1!==p&&this.selectData.splice(p,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(r){return new(r||c)(t.Y36(s.p),t.Y36(A.J),t.Y36(U.s),t.Y36(y.y),t.Y36(C.R))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-list-expenses"]],decls:120,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"form-control",3,"formControl","change"],[1,"form-select",3,"change"],["val",""],["value",""],["type","number","placeholder","Enter Amount",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"text-success"],["type","number","placeholder","Enter Amount",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"form-group","d-flex","justify-content-end"],[1,"btn","btn-filters","p-4",2,"width","20%",3,"click"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addexpensesVoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"text-center"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(r,a){if(1&r){const p=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Expense Voucher LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Expense Voucher"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,R,11,5,"div",6),t.qZA()(),t.YNc(10,V,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(u){return a.titlee=u})("ngModelChange",function(){return a.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return a.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Journal Voucher Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("change",function(){return a.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Is Active"),t.qZA(),t.TgZ(51,"select",34,35),t.NdJ("change",function(){t.CHM(p);const u=t.MAs(52);return t.KtG(a.filterData("Is Active",u.value))}),t.TgZ(53,"option",36),t._uU(54,"Select Is Active Type"),t.qZA(),t.TgZ(55,"option"),t._uU(56," Active"),t.qZA(),t.TgZ(57,"option"),t._uU(58,"InActive"),t.qZA()()()(),t.TgZ(59,"div",31)(60,"div",32)(61,"label"),t._uU(62,"Enter Debit Amount"),t.qZA(),t.TgZ(63,"input",37),t.NdJ("ngModelChange",function(u){return a.selectedDebit=u})("change",function(){return a.filterData()}),t.qZA(),t.TgZ(64,"span",38),t._uU(65,"Debit Amount Filter (Less than & Equal to Amount value)"),t.qZA()()(),t.TgZ(66,"div",31)(67,"div",32)(68,"label"),t._uU(69,"Enter credit Amount"),t.qZA(),t.TgZ(70,"input",39),t.NdJ("ngModelChange",function(u){return a.selectedcredit=u})("keyup",function(){return a.filterData()}),t.qZA(),t.TgZ(71,"span",38),t._uU(72,"credit Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(73,"div",40)(74,"a",41),t.NdJ("click",function(){return a.clearFilters()}),t._uU(75,"Clear Filter"),t.qZA()()()()()(),t.TgZ(76,"div",42)(77,"table",43)(78,"thead")(79,"tr")(80,"th",44),t.NdJ("click",function(){return a.sort("id")}),t.TgZ(81,"label",45),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(82,"input",46),t.NdJ("ngModelChange",function(u){return a.allSelected=u})("change",function(){return a.selectAlll()}),t.qZA(),t._UZ(83,"span",47),t.qZA(),t._UZ(84,"i",48),t.qZA(),t.TgZ(85,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(86,"Sr. No."),t._UZ(87,"i",48),t.qZA(),t.TgZ(88,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(89,"Expense Voucher No."),t._UZ(90,"i",48),t.qZA(),t.TgZ(91,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(92,"Party"),t._UZ(93,"i",48),t.qZA(),t.TgZ(94,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(95,"Date"),t._UZ(96,"i",48),t.qZA(),t.TgZ(97,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(98,"Branch"),t._UZ(99,"i",48),t.qZA(),t.TgZ(100,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(101,"Total"),t._UZ(102,"i",48),t.qZA(),t.TgZ(103,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(104,"Reverse Charge"),t._UZ(105,"i",48),t.qZA(),t.TgZ(106,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(107,"Status"),t._UZ(108,"i",48),t.qZA(),t.TgZ(109,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(110,"Is Active"),t._UZ(111,"i",48),t.qZA(),t.TgZ(112,"th",44),t.NdJ("click",function(){return a.sort("id")}),t._uU(113,"Action"),t._UZ(114,"i",48),t.qZA()()(),t.YNc(115,W,4,11,"tbody",7),t.YNc(116,H,5,0,"tbody",7),t.qZA(),t.TgZ(117,"div",49),t.YNc(118,z,1,0,"mat-progress-bar",50),t.qZA(),t.YNc(119,X,23,4,"div",51),t.qZA()()()}2&r&&(t.xp6(9),t.Q6J("ngIf",a.isAdmin),t.xp6(1),t.Q6J("ngIf",a.isAdd),t.xp6(15),t.Q6J("ngModel",a.titlee),t.xp6(21),t.Q6J("formControl",a.journalVoucherDate),t.uIk("min",a.minDate)("max",a.maxDate),t.xp6(17),t.Q6J("ngModel",a.selectedDebit),t.xp6(7),t.Q6J("ngModel",a.selectedcredit),t.xp6(12),t.Q6J("ngModel",a.allSelected),t.xp6(33),t.Q6J("ngIf",(null==a.filteredData?null:a.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==a.filteredData?null:a.filteredData.length)&&!a.loader),t.xp6(2),t.Q6J("ngIf",a.loader),t.xp6(1),t.Q6J("ngIf",!a.loader))},dependencies:[_.mk,_.sg,_.O5,v.yS,l.YN,l.Kr,l.Fj,l.wV,l.Wl,l.EJ,l.JJ,l.On,l.oH,D.pW,P.LS,N.Rr,P._s,J.T],styles:[".button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:341%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[h(30597).l],data:{allowedRoles:["view_expensesvoucher"]}}];let st=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[v.Bz.forChild(it),v.Bz]}),c})();var rt=h(8468);let nt=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[_.ez,st,rt.I]}),c})()},30597:(E,b,h)=>{h.d(b,{l:()=>T});var _=h(94650),v=h(4392),$=h(97185),f=h(42917),g=h(80927);let T=(()=>{class e{constructor(n,l,t,s,A){this.router=n,this.Arout=l,this.toastr=t,this.profileService=s,this.coreService=A}canActivate(n,l){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(s=>{this.userDetails=s,this.permissions=this.userDetails?.permission}),t){const s=n.data.allowedRoles,A=t.some(y=>s.includes(y.codename));let U=this.coreService.profileData$.value;if(U&&U.username){this.userDetails=U,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(U);const y=U?.permission,C=this.profileService.getUserDetails();(!C||C.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}else this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(y);const C=y?.permission,D=this.profileService.getUserDetails();(!D||D.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())});if(A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(n){return new(n||e)(_.LFG(v.F0),_.LFG(v.gz),_.LFG($._W),_.LFG(f.J),_.LFG(g.p))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);