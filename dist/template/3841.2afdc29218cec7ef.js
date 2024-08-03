"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3841],{25062:(D,y,p)=>{p.d(y,{y:()=>_});var f=p(92340),v=p(94650),$=p(80529);let _=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${f.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG($.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},60843:(D,y,p)=>{p.d(y,{s:()=>_});var f=p(92340),v=p(94650),$=p(80529);let _=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${f.N.api}`}getSalesNumber(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCutomerRetention(e,i,a,o){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalSalePurchase(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDailySales(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSalevsPurchase(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCategoryWiseSale(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSubCatWiseSale(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getInventory(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlySales(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlyAddedProduct(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getBestSellingProduct(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getLeastSellingProduct(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalRecvsPay(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrowth(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrossNetProfit(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getUnpaidInvoices(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalReceivables(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayPayables(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayExpense(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDepartmentWiseTarget(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEployeeTargetAchieved(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTop10(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTargetGraph(e,i,a,o){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),a&&r.push(`branch=${a}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getAnalysisInventoryList(e,i,a){let o=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),a&&t.push(`financial_year=${a}`),t.length>0&&(o+="?"+t.join("&")),this.http.get(o)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,a){let o=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),t.length>0&&(o+="?"+t.join("&")),a&&t.push(`financial_year=${a}`),this.http.get(o)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG($.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},83841:(D,y,p)=>{p.r(y),p.d(y,{ListCountraVoucherModule:()=>tt});var f=p(36895),v=p(4392),$=p(2454),_=p.n($),g=p(96166),T=p(12983),e=p.n(T),i=p(80574),a=p(94327),o=p(24006),t=p(94650),r=p(71071),b=p(42917),U=p(60843),A=p(25062),Z=p(43443),S=p(73162),x=p(54333),I=p(90455),q=p(54040);function B(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"a",55)(1,"input",56,57),t.NdJ("change",function(l){const d=t.CHM(n).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(d.id,l.target.checked))}),t.qZA(),t.TgZ(3,"label",58),t.NdJ("click",function(l){t.CHM(n);const u=t.oxw(2);return t.KtG(u.onLabelClick(l))}),t._uU(4),t.qZA()()}if(2&c){const n=h.$implicit,s=h.index,l=t.oxw(2);t.xp6(1),t.Q6J("value",n.id)("checked",l.selectData.includes(n.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(n.title)}}function E(c,h){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const n=t.oxw(2);t.xp6(1),t.Oqu(n.selectData.length+" Selected")}}const w=function(){return{standalone:!0}};function N(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"button",50),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",51)(5,"li")(6,"input",52),t.NdJ("ngModelChange",function(l){t.CHM(n);const u=t.oxw();return t.KtG(u.searchBranch=l)})("ngModelChange",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,B,5,5,"a",53),t.qZA()()(),t.TgZ(9,"div",54),t.YNc(10,E,2,1,"span",7),t.qZA()()}if(2&c){const n=t.oxw();t.xp6(6),t.Q6J("ngModel",n.searchBranch)("ngModelOptions",t.DdM(4,w)),t.xp6(2),t.Q6J("ngForOf",n.filteredBranchList),t.xp6(2),t.Q6J("ngIf",n.selectData.length>0)}}function J(c,h){1&c&&(t.ynx(0),t.TgZ(1,"a",59),t._UZ(2,"img",60),t._uU(3,"Add New Countra Voucher "),t.qZA(),t.BQk())}function k(c,h){if(1&c&&(t.TgZ(0,"a",68),t._UZ(1,"img",72),t.qZA()),2&c){const n=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatecountravoucher/",null==n?null:n.id,"")}}function O(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"a",73),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(),u=l.index,d=l.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(u,null==d?null:d.id))}),t._UZ(1,"img",74),t.qZA()}}function R(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",62)(3,"input",63),t.NdJ("ngModelChange",function(l){const d=t.CHM(n).index,m=t.oxw(2);return t.KtG(m.selectedRows[d]=l)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",64)(8,"a",65),t._uU(9),t.qZA()(),t.TgZ(10,"td",66),t._uU(11),t.qZA(),t.TgZ(12,"td",66),t._uU(13),t.qZA(),t.TgZ(14,"td",66),t._uU(15),t.qZA(),t.TgZ(16,"td",66),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"mat-slide-toggle",67),t.NdJ("click",function(){const l=t.CHM(n),u=l.$implicit,d=l.index,m=t.oxw(2);return t.KtG(u.is_active?m.isActive(d,u.id):m.Active(d,u.id))})("ngModelChange",function(l){const d=t.CHM(n).$implicit;return t.KtG(d.is_active=l)}),t.qZA()(),t.TgZ(22,"td")(23,"a",68),t._UZ(24,"img",69),t.qZA(),t.YNc(25,k,2,1,"a",70),t.YNc(26,O,2,0,"a",71),t.qZA()()}if(2&c){const n=h.$implicit,s=h.index,l=t.oxw(2);t.xp6(3),t.Q6J("ngModel",l.selectedRows[s]),t.xp6(3),t.Oqu(s+1+"."),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",n.id,""),t.xp6(1),t.Oqu(null==n?null:n.countra_voucher_no),t.xp6(2),t.Oqu(null!=n&&null!=n.from_account&&n.from_account.company_name&&null!=n&&null!=n.from_account&&n.from_account.account_id?(null==n||null==n.from_account?null:n.from_account.company_name)+"("+(null==n||null==n.from_account?null:n.from_account.account_id)+")":null==n||null==n.from_account?null:n.from_account.account_id),t.xp6(2),t.Oqu(null!=n&&null!=n.to_account&&n.to_account.company_name&&null!=n&&null!=n.to_account&&n.to_account.account_id?(null==n||null==n.to_account?null:n.to_account.company_name)+"("+(null==n||null==n.to_account?null:n.to_account.account_id)+")":null==n||null==n.to_account?null:n.to_account.account_id),t.xp6(2),t.Oqu(null==n?null:n.amount),t.xp6(2),t.Oqu(null==n?null:n.date),t.xp6(2),t.Oqu(null==n?null:n.note),t.xp6(2),t.Q6J("ngModel",n.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",null==n?null:n.id,""),t.xp6(2),t.Q6J("ngIf",l.isEdit),t.xp6(1),t.Q6J("ngIf",l.isDelete)}}const F=function(c,h){return{itemsPerPage:c,currentPage:h}};function G(c,h){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,R,27,13,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,n.filteredData,n.key,n.reverse),t.WLB(8,F,n.itemsPerPage,n.p)))}}function j(c,h){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}function Y(c,h){1&c&&t._UZ(0,"mat-progress-bar",77)}function H(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"div",4)(1,"div",78)(2,"div",79),t._uU(3," Show per page "),t.TgZ(4,"select",80,81),t.NdJ("ngModelChange",function(l){t.CHM(n);const u=t.oxw();return t.KtG(u.itemsPerPage=l)})("change",function(){t.CHM(n);const l=t.MAs(5),u=t.oxw();return t.KtG(u.changePg(l.value))}),t.TgZ(6,"option",82),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",83),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",84),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",85),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",86),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",87),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",88)(19,"div",89)(20,"pagination-controls",90),t.NdJ("pageChange",function(l){t.CHM(n);const u=t.oxw();return t.KtG(u.p=l)}),t.qZA(),t.TgZ(21,"div",91),t._uU(22),t.qZA()()()()}if(2&c){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries ")}}const W=[{path:"",component:(()=>{class c{constructor(n,s,l,u,d){this.transactionService=n,this.cs=s,this.dashboardservice=l,this.contactservice=u,this.commonService=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.minDate="",this.maxDate="",this.countraVoucherDate=new o.NI(""),this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(n,s){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.deleteCountraVoucher(s).subscribe(u=>{this.delRes=u,this.delRes.success?(_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(n,1),this.ngOnInit()):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(n,s){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.CountraVoucherIsActive(s,"").subscribe(u=>{this.delRes=u,this.delRes.success?(_().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):_().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(n,s){_().fire({title:"Are you sure?",text:"Do you want to Active this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.CountraVoucherIsActive(s,"").subscribe(u=>{this.delRes=u,this.delRes.success?(_().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):_().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getCountraVoucher().subscribe(s=>{this.tableData=s,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(s=>{this.isAdmin="admin"==s.role}),localStorage.getItem("financialYear")){let s=localStorage.getItem("financialYear");console.warn(JSON.parse(s));let l=JSON.parse(s);this.getEstimate(l)}this.cs.userDetails$.subscribe(s=>{this.userDetails=s,this.userDetails?.permission?.map(u=>{"transactions"===u.content_type.app_label&&"countravoucher"===u.content_type.model&&"add_countravoucher"==u.codename?this.isAdd=u.codename:"transactions"===u.content_type.app_label&&"countravoucher"===u.content_type.model&&"change_countravoucher"==u.codename?this.isEdit=u.codename:"transactions"===u.content_type.app_label&&"countravoucher"===u.content_type.model&&"delete_countravoucher"==u.codename&&(this.isDelete=u.codename)})}),this.getPaymentTerms(),this.getBranch();const n=localStorage.getItem("financialYear");this.countraVoucherDateValidation(n)}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(n=>{this.paymentList=n})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(s=>s?.countra_voucher_no.toLocaleLowerCase().includes(n))}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDF(){const n=new g.default;n.setFontSize(15),n.setTextColor(33,43,54),n.text("Countra Voucher",10,10),e()(n,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Countra Voucher No."},{header:"From Account"},{header:"To Account"},{header:"Amount"},{header:"Date"},{header:"Description"},{header:"Is Active"}]}),n.save("countravoucher.pdf")}generatePDFAgain(){const n=new g.default;n.setFontSize(12),n.setTextColor(33,43,54),n.text("Countra Voucher",82,10),n.text("",10,15),e()(n,{head:[["#","Countra Voucher No.","From Account","To Account","Amount","Date","Description"]],body:this.tableData.map((l,u)=>[u+1,l.countra_voucher_no,l.from_account?.account_id,l.to_account?.account_id,l.amount,l.date,l.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),n.save("Countra Voucher .pdf")}getVisibleDataFromTable(){const n=[],s=document.getElementById("mytable"),l=s.querySelector("thead tr"),u=s.querySelectorAll("tbody tr"),d=[];return l.querySelectorAll("th").forEach(m=>{const C=m.textContent.trim();"Is Active"!==C&&"Action"!==C&&d.push(C)}),n.push(d),u.forEach(m=>{const C=[];m.querySelectorAll("td").forEach(L=>{C.push(L.textContent.trim())}),n.push(C)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),s=i.P6.aoa_to_sheet(n),l=i.P6.book_new();i.P6.book_append_sheet(l,s,"Sheet1");const u=i.cW(l,{bookType:"xlsx",type:"array"}),d=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(d,"countravoucher.xlsx")}printTable(){const n=document.getElementById("mytable"),u=document.querySelector(".titl").outerHTML,d=n.cloneNode(!0),m=d.querySelector("th.thone:nth-child(9)");m&&m.remove();const C=d.querySelector("th.thone:last-child");C&&C.remove(),d.querySelectorAll("tr").forEach(M=>{const P=M.querySelector("td:nth-child(9)");P&&P.remove();const V=M.querySelector("td:last-child");V&&V.remove()});const et=d.outerHTML,it="<style>.spaced-title { margin-top: 80px; }</style>"+u.replace("titl","spaced-title")+et,rt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=it,window.print(),document.body.innerHTML=rt}countraVoucherDateValidation(n){const s=this.countraVoucherDate,{formattedMinDate:l,formattedMaxDate:u}=this.commonService.setMinMaxDates(s,n);this.minDate=l,this.maxDate=u}filterData(){let n=this.tableData.slice();if(this.countraVoucherDate.value){const s=new Date(this.countraVoucherDate.value).toISOString().split("T")[0];n=n.filter(l=>new Date(l?.date).toISOString().split("T")[0]===s)}this.selectedAmount&&(n=n.filter(s=>s?.amount<=this.selectedAmount)),this.filteredData=n}clearFilters(){this.selectedAmount=null,this.selectedpaymentTerms=null,this.countraVoucherDate.setValue(""),this.filterData()}changePg(n){console.log(n),-1==n&&(this.itemsPerPage=this.tableData.length)}getEstimate(n){const s=JSON.stringify(this.selectData);console.log(s),console.log(s?.length),this.transactionService.getCountraVoucherFy(n,this.selectData).subscribe(l=>{this.tableData=l,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(n=>{this.branchList=n,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(n=>n.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(n,s){if(s)console.log(n),this.selectData.push(n),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const l=this.selectData.findIndex(u=>u==n);console.log(l),-1!==l&&this.selectData.splice(l,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(n){return new(n||c)(t.Y36(r.p),t.Y36(b.J),t.Y36(U.s),t.Y36(A.y),t.Y36(Z.R))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-list-countra-voucher"]],decls:98,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Cuntra Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"formControl","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group","d-flex","justify-content-end"],[1,"btn","btn-filters","p-4",2,"width","20%",3,"click"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addcountravoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Countra Voucher LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Countra Voucher"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,N,11,5,"div",6),t.qZA()(),t.YNc(10,J,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(u){return s.titlee=u})("ngModelChange",function(){return s.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return s.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Countra Voucher Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("change",function(){return s.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Amount"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(u){return s.selectedAmount=u})("keyup",function(){return s.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(54,"div",36)(55,"a",37),t.NdJ("click",function(){return s.clearFilters()}),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return s.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(u){return s.allSelected=u})("change",function(){return s.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Sr. No."),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(70,"Countra Voucher No."),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"From Account"),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(76,"To Account"),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(79,"Amount"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(82,"Date"),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(85,"Description"),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(88,"Is Active"),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(91,"Action"),t._UZ(92,"i",44),t.qZA()()(),t.YNc(93,G,4,11,"tbody",7),t.YNc(94,j,5,0,"tbody",7),t.qZA(),t.TgZ(95,"div",45),t.YNc(96,Y,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(97,H,23,4,"div",47),t.qZA()()()),2&n&&(t.xp6(9),t.Q6J("ngIf",s.isAdmin),t.xp6(1),t.Q6J("ngIf",s.isAdd),t.xp6(15),t.Q6J("ngModel",s.titlee),t.xp6(21),t.Q6J("formControl",s.countraVoucherDate),t.uIk("min",s.minDate)("max",s.maxDate),t.xp6(5),t.Q6J("ngModel",s.selectedAmount),t.xp6(12),t.Q6J("ngModel",s.allSelected),t.xp6(30),t.Q6J("ngIf",(null==s.filteredData?null:s.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==s.filteredData?null:s.filteredData.length)&&!s.loader),t.xp6(2),t.Q6J("ngIf",s.loader),t.xp6(1),t.Q6J("ngIf",!s.loader))},dependencies:[f.sg,f.O5,v.yS,o.YN,o.Kr,o.Fj,o.wV,o.Wl,o.EJ,o.JJ,o.On,o.oH,S.pW,x.LS,I.Rr,x._s,q.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:336%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[p(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let z=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[v.Bz.forChild(W),v.Bz]}),c})();var X=p(8468);let tt=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[f.ez,z,X.I]}),c})()},30597:(D,y,p)=>{p.d(y,{l:()=>T});var f=p(94650),v=p(4392),$=p(97185),_=p(42917),g=p(80927);let T=(()=>{class e{constructor(a,o,t,r,b){this.router=a,this.Arout=o,this.toastr=t,this.profileService=r,this.coreService=b}canActivate(a,o){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),t){const r=a.data.allowedRoles;console.log(r,"allowedRoles");const b=t.some(U=>r.includes(U.codename));if(console.log(b),this.coreService.getProfile().subscribe(U=>{this.userDetails=U,this.profileService.setUserDetails(this.userDetails);const A=U?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(a){return new(a||e)(f.LFG(v.F0),f.LFG(v.gz),f.LFG($._W),f.LFG(_.J),f.LFG(g.p))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);