"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[42795],{25062:(P,T,c)=>{c.d(T,{y:()=>_});var f=c(92340),v=c(94650),$=c(80529);let _=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${f.N.api}`}UpdateDefaultAddress(e){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",e)}GetUsedPoints(e){return this.http.get(`${this.apiUrl+"/pv-api/total_use_point/?user_id="}${e}`)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return m.\u0275fac=function(e){return new(e||m)(v.LFG($.eN))},m.\u0275prov=v.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},60843:(P,T,c)=>{c.d(T,{s:()=>_});var f=c(92340),v=c(94650),$=c(80529);let _=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${f.N.api}`}getSalesNumber(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCutomerRetention(e,i,s,o){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalSalePurchase(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDailySales(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSalevsPurchase(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCategoryWiseSale(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getSubCatWiseSale(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getInventory(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlySales(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getRecentlyAddedProduct(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getBestSellingProduct(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getLeastSellingProduct(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalRecvsPay(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrowth(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getGrossNetProfit(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const r=[];return e&&r.push(`start_date=${e}`),i&&r.push(`end_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getUnpaidInvoices(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTotalReceivables(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayPayables(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getTodayExpense(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getDepartmentWiseTarget(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEployeeTargetAchieved(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTop10(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getEmployeeTargetGraph(e,i,s,o){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const r=[];return e&&r.push(`from_date=${e}`),i&&r.push(`to_date=${i}`),s&&r.push(`branch=${s}`),o&&r.push(`financial_year=${o}`),r.length>0&&(t+="?"+r.join("&")),this.http.get(t)}getAnalysisInventoryList(e,i,s){let o=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),s&&t.push(`financial_year=${s}`),t.length>0&&(o+="?"+t.join("&")),this.http.get(o)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(e,i,s){let o=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return e&&t.push(`start_date=${e}`),i&&t.push(`end_date=${i}`),t.length>0&&(o+="?"+t.join("&")),s&&t.push(`financial_year=${s}`),this.http.get(o)}}return m.\u0275fac=function(e){return new(e||m)(v.LFG($.eN))},m.\u0275prov=v.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},42795:(P,T,c)=>{c.r(T),c.d(T,{ListMaterialConsumptionModule:()=>st});var f=c(36895),v=c(4392),$=c(2454),_=c.n($),m=c(96166),Z=c(12983),e=c.n(Z),i=c(80574),s=c(94327),o=c(24006),t=c(94650),r=c(71071),x=c(42917),M=c(60843),C=c(25062),A=c(73162),S=c(54333),y=c(99602),L=c(59549),q=c(4859),N=c(54040);function w(u,d){if(1&u){const n=t.EpF();t.TgZ(0,"a",66)(1,"input",67,68),t.NdJ("change",function(l){const h=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(h.id,l.target.checked))}),t.qZA(),t.TgZ(3,"label",69),t.NdJ("click",function(l){t.CHM(n);const p=t.oxw(2);return t.KtG(p.onLabelClick(l))}),t._uU(4),t.qZA()()}if(2&u){const n=d.$implicit,a=d.index,l=t.oxw(2);t.xp6(1),t.Q6J("value",n.id)("checked",l.selectData.includes(n.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(n.title)}}function k(u,d){if(1&u&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&u){const n=t.oxw(2);t.xp6(1),t.Oqu(n.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function O(u,d){if(1&u){const n=t.EpF();t.TgZ(0,"div",59)(1,"div",60)(2,"button",61),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",62)(5,"li")(6,"input",63),t.NdJ("ngModelChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.searchBranch=l)})("ngModelChange",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,w,5,5,"a",64),t.qZA()()(),t.TgZ(9,"div",65),t.YNc(10,k,2,1,"span",7),t.qZA()()}if(2&u){const n=t.oxw();t.xp6(6),t.Q6J("ngModel",n.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",n.filteredBranchList),t.xp6(2),t.Q6J("ngIf",n.selectData.length>0)}}function R(u,d){1&u&&(t.ynx(0),t.TgZ(1,"a",70),t._UZ(2,"img",71),t._uU(3,"Add New Material Consumption "),t.qZA(),t.BQk())}function F(u,d){if(1&u&&(t.TgZ(0,"a",78),t._UZ(1,"img",82),t.qZA()),2&u){const n=t.oxw().$implicit;t.MGl("routerLink","//transaction/updateMaterialConsuption/",n.id,"")}}function G(u,d){if(1&u){const n=t.EpF();t.TgZ(0,"a",83),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(),p=l.index,h=l.$implicit,g=t.oxw(2);return t.KtG(g.confirmText(p,h.id))}),t._UZ(1,"img",84),t.qZA()}}const j=function(){return["Pending","Sent","Draft"]},Y=function(u,d,n){return{"bg-lightgreen":u,"bg-lightred":d,"bg-lightyellow":n}};function K(u,d){if(1&u){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",73)(3,"input",74),t.NdJ("ngModelChange",function(l){const h=t.CHM(n).index,g=t.oxw(2);return t.KtG(g.selectedRows[h]=l)}),t.qZA(),t._UZ(4,"span",54),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",75)(10,"a",76),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"date"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td")(22,"span",77),t._uU(23),t.qZA()(),t.TgZ(24,"td")(25,"a",78),t._UZ(26,"img",79),t.qZA(),t.YNc(27,F,2,1,"a",80),t.YNc(28,G,2,0,"a",81),t.qZA()()}if(2&u){const n=d.$implicit,a=d.index,l=t.oxw(2);t.xp6(3),t.Q6J("ngModel",l.selectedRows[a]),t.xp6(3),t.Oqu(a+1),t.xp6(2),t.Oqu(n.consumption_no),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",n.id,""),t.xp6(1),t.Oqu(null==n||null==n.user?null:n.user.username),t.xp6(2),t.Oqu(t.xi3(14,14,null==n?null:n.consumption_date,"dd-MMMM-yyyy")),t.xp6(3),t.Oqu(n.consumption_type),t.xp6(2),t.Oqu(n.total_amount),t.xp6(2),t.Oqu(n.remarks),t.xp6(2),t.Q6J("ngClass",t.kEZ(18,Y,"Approved"===n.status,"Rejected"===n.status,t.DdM(17,j).includes(n.status))),t.xp6(1),t.Oqu(n.status),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",n.id,""),t.xp6(2),t.Q6J("ngIf",l.isEdit),t.xp6(1),t.Q6J("ngIf",l.isDelete)}}const Q=function(u,d){return{itemsPerPage:u,currentPage:d}};function W(u,d){if(1&u&&(t.TgZ(0,"tbody"),t.YNc(1,K,29,22,"tr",72),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&u){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,n.filteredData,n.key,n.reverse),t.WLB(8,Q,n.itemsPerPage,n.p)))}}function z(u,d){1&u&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",85)(3,"p",86),t._uU(4,"Data not available"),t.qZA()()()())}function V(u,d){1&u&&t._UZ(0,"mat-progress-bar",87)}function H(u,d){if(1&u){const n=t.EpF();t.TgZ(0,"div",4)(1,"div",88)(2,"div",89),t._uU(3," Show per page "),t.TgZ(4,"select",90,91),t.NdJ("ngModelChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.itemsPerPage=l)})("change",function(){t.CHM(n);const l=t.MAs(5),p=t.oxw();return t.KtG(p.changePg(l.value))}),t.TgZ(6,"option",92),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",93),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",94),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",95),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",96),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",97),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",98)(19,"div",99)(20,"pagination-controls",100),t.NdJ("pageChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.p=l)}),t.qZA(),t.TgZ(21,"div",101),t._uU(22),t.qZA()()()()}if(2&u){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries ")}}const et=[{path:"",component:(()=>{class u{constructor(n,a,l,p){this.transactionService=n,this.cs=a,this.dashboardservice=l,this.contactservice=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.isAdmin=!1,this.range=new o.cw({start:new o.NI(null),end:new o.NI(null)}),this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(n,a){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.deleteMaterialConsuption(a).subscribe(p=>{this.delRes=p,this.delRes.success?(_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(n,1),this.ngOnInit()):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(n,a){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(a,"").subscribe(p=>{this.delRes=p,this.delRes.success?(_().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):_().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(n,a){_().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(a,"").subscribe(p=>{this.delRes=p,this.delRes.success?(_().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):_().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getMaterialConsuption().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(n=>{this.isAdmin=!(!n||"admin"!=n.role)}),localStorage.getItem("financialYear")){let n=localStorage.getItem("financialYear");console.warn(JSON.parse(n));let a=JSON.parse(n);this.getEstimate(a)}this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(l=>{"inventory"===l.content_type.app_label&&"materialconsumption"===l.content_type.model&&"add_materialconsumption"==l.codename?this.isAdd=l.codename:"inventory"===l.content_type.app_label&&"materialconsumption"===l.content_type.model&&"change_materialconsumption"==l.codename?this.isEdit=l.codename:"inventory"===l.content_type.app_label&&"materialconsumption"===l.content_type.model&&"delete_materialconsumption"==l.codename&&(this.isDelete=l.codename)})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(n=>{this.paymentList=n})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(a=>{const l=a?.user?.username.toLocaleLowerCase(),p=a?.barcode?.product_title.toLocaleLowerCase();return!!l.match(n)||!!p.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDF(){const n=new m.default;n.setFontSize(15),n.setTextColor(33,43,54),n.text("Debit Note",10,10),e()(n,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),n.save("debitnote.pdf")}generatePDFAgain(){const n=new m.default("landscape");n.setFontSize(12),n.setTextColor(33,43,54),n.text("Material Consuption",82,10),n.text("",10,15),e()(n,{head:[["#","User","Prefix","Date","Consuption Type","Consuption No","Product","Price","QTY","Total","Remark","Status"]],body:this.filteredData.map((l,p)=>[p+1,l.user?.username,l.consumption_date,l.prefix,l.consumption_type,l.consumption_no,l.barcode?.product_title,l.price,l.qty,l.total_action,l.remark,l.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),n.save("Material Consuption .pdf")}getVisibleDataFromTable(){const n=[],a=document.getElementById("mytable"),l=a.querySelector("thead tr"),p=a.querySelectorAll("tbody tr"),h=[];return l.querySelectorAll("th").forEach(g=>{const b=g.textContent.trim();"Is Active"!==b&&"Action"!==b&&h.push(b)}),n.push(h),p.forEach(g=>{const b=[];g.querySelectorAll("td").forEach(U=>{b.push(U.textContent.trim())}),n.push(b)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),a=i.P6.aoa_to_sheet(n),l=i.P6.book_new();i.P6.book_append_sheet(l,a,"Sheet1");const p=i.cW(l,{bookType:"xlsx",type:"array"}),h=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,s.saveAs)(h,"debitnote.xlsx")}printTable(){const n=document.getElementById("mytable"),a=document.querySelector(".titl");if(!n)return void console.error("Table not found");if(!a)return void console.error("Title not found");const l=n.cloneNode(!0),p=a.cloneNode(!0),h=l.querySelector("th.thone:nth-child(1)");h&&h.remove();const g=l.querySelector("th.thone:last-child");g&&g.remove(),l.querySelectorAll("tr").forEach(I=>{const B=I.querySelector("td:nth-child(1)");B&&B.remove();const E=I.querySelector("td:last-child");E&&E.remove()});const U=document.createElement("div");p.classList.add("spaced-title"),U.appendChild(p),U.appendChild(l);const D=document.createElement("style");D.id="printStyle",D.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild(D),U.id="printContainer",document.body.appendChild(U),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const n=document.getElementById("printContainer"),a=document.getElementById("printStyle");n&&document.body.removeChild(n),a&&document.head.removeChild(a)}filterData(n,a){let l=this.tableData.slice();if(this.date){const p=new Date(this.date).toISOString().split("T")[0];l=l.filter(h=>new Date(h?.date).toISOString().split("T")[0]===p)}if(this.selectedAmount&&(l=l.filter(p=>p?.amount<=this.selectedAmount)),"date"===n){const p=this.range.value.start,h=this.range.value.end;if(p&&h){const g=new Date(p),b=new Date(h);l=l.filter(U=>{const D=new Date(U?.consumption_date);return D>=g&&D<=b})}}"Status"===n&&(l=l.filter(p=>p?.status===a)),"Types"===n&&(l=l.filter(p=>p?.consumption_type===a)),this.filteredData=l}clearFilters(){this.selectedAmount=null,this.date=null,this.Consumption_Type="",this.Select_Status="",this.filterData()}changePg(n){console.log(n),-1==n&&(this.itemsPerPage=this.tableData.length)}getEstimate(n){const a=JSON.stringify(this.selectData);console.log(a),console.log(a?.length),this.transactionService.getMaterialConsuptionFy(n,this.selectData).subscribe(l=>{this.tableData=l,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(n=>{this.branchList=n,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(n=>n.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(n,a){if(a)console.log(n),this.selectData.push(n),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const l=this.selectData.findIndex(p=>p==n);console.log(l),-1!==l&&this.selectData.splice(l,1),this.ngOnInit(),console.log(this.selectData)}}}return u.\u0275fac=function(n){return new(n||u)(t.Y36(r.p),t.Y36(x.J),t.Y36(M.s),t.Y36(C.y))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-list-material-consumption"]],decls:133,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","User/Product",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input","text-r",2,"border","none !important",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",2,"border","none !important"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],["mat-button","","matDateRangePickerCancel",""],["mat-raised-button","","color","primary","matDateRangePickerApply","",3,"click"],["aria-label","Default select example",1,"form-select",3,"ngModel","ngModelChange","change"],["Types",""],["value",""],["val",""],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addMaterialConsuption",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(n,a){if(1&n){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Material Consumption LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Material Consumption"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,O,11,5,"div",6),t.qZA()(),t.YNc(10,R,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(h){return a.titlee=h})("ngModelChange",function(){return a.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return a.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Debit Note Date"),t.qZA(),t.TgZ(46,"mat-form-field",33)(47,"mat-date-range-input",34)(48,"input",35),t.NdJ("dateChange",function(){return a.filterData("date")}),t.qZA(),t.TgZ(49,"span",36)(50,"span",37),t._uU(51,"to"),t.qZA()(),t._UZ(52,"input",38),t.qZA(),t._UZ(53,"mat-datepicker-toggle",39),t.TgZ(54,"mat-date-range-picker",null,40)(56,"mat-date-range-picker-actions")(57,"button",41),t._uU(58,"Cancel"),t.qZA(),t.TgZ(59,"button",42),t.NdJ("click",function(){return a.filterData("date")}),t._uU(60,"Apply"),t.qZA()()()()()(),t.TgZ(61,"div",31)(62,"div",32)(63,"label"),t._uU(64,"Select Consumption Type"),t.qZA(),t.TgZ(65,"select",43,44),t.NdJ("ngModelChange",function(h){return a.Consumption_Type=h})("change",function(){t.CHM(l);const h=t.MAs(66);return t.KtG(a.filterData("Types",h.value))}),t.TgZ(67,"option",45),t._uU(68,"Select Consumption Type"),t.qZA(),t.TgZ(69,"option"),t._uU(70,"Sample"),t.qZA(),t.TgZ(71,"option"),t._uU(72,"Production"),t.qZA(),t.TgZ(73,"option"),t._uU(74,"Scrap/Wastage"),t.qZA()()()(),t.TgZ(75,"div",31)(76,"div",32)(77,"label"),t._uU(78,"Select Status"),t.qZA(),t.TgZ(79,"select",43,46),t.NdJ("ngModelChange",function(h){return a.Select_Status=h})("change",function(){t.CHM(l);const h=t.MAs(80);return t.KtG(a.filterData("Status",h.value))}),t.TgZ(81,"option",45),t._uU(82,"Select Status"),t.qZA(),t.TgZ(83,"option"),t._uU(84,"Pending"),t.qZA(),t.TgZ(85,"option"),t._uU(86,"Approved"),t.qZA(),t.TgZ(87,"option"),t._uU(88,"Rejected"),t.qZA()()()()(),t.TgZ(89,"div",47),t.NdJ("click",function(){return a.clearFilters()}),t.TgZ(90,"a",48),t._uU(91,"Clear Filter"),t.qZA()()()()()(),t.TgZ(92,"div",49)(93,"table",50)(94,"thead")(95,"tr")(96,"th",51),t.NdJ("click",function(){return a.sort("id")}),t.TgZ(97,"label",52),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(98,"input",53),t.NdJ("ngModelChange",function(h){return a.allSelected=h})("change",function(){return a.selectAlll()}),t.qZA(),t._UZ(99,"span",54),t.qZA(),t._UZ(100,"i",55),t.qZA(),t.TgZ(101,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(102,"Sr. No."),t._UZ(103,"i",55),t.qZA(),t.TgZ(104,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(105,"Consumption No"),t._UZ(106,"i",55),t.qZA(),t.TgZ(107,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(108,"User"),t._UZ(109,"i",55),t.qZA(),t.TgZ(110,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(111,"Date"),t._UZ(112,"i",55),t.qZA(),t.TgZ(113,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(114,"Consumption Type"),t._UZ(115,"i",55),t.qZA(),t.TgZ(116,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(117,"Total "),t._UZ(118,"i",55),t.qZA(),t.TgZ(119,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(120,"Remark"),t._UZ(121,"i",55),t.qZA(),t.TgZ(122,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(123,"Status "),t._UZ(124,"i",55),t.qZA(),t.TgZ(125,"th",51),t.NdJ("click",function(){return a.sort("id")}),t._uU(126,"Action "),t._UZ(127,"i",55),t.qZA()()(),t.YNc(128,W,4,11,"tbody",7),t.YNc(129,z,5,0,"tbody",7),t.qZA(),t.TgZ(130,"div",56),t.YNc(131,V,1,0,"mat-progress-bar",57),t.qZA(),t.YNc(132,H,23,4,"div",58),t.qZA()()()}if(2&n){const l=t.MAs(55);t.xp6(9),t.Q6J("ngIf",a.isAdmin),t.xp6(1),t.Q6J("ngIf",a.isAdd),t.xp6(15),t.Q6J("ngModel",a.titlee),t.xp6(22),t.Q6J("formGroup",a.range)("rangePicker",l)("comparisonStart",a.range.value.start)("comparisonEnd",a.range.value.end),t.xp6(6),t.Q6J("for",l),t.xp6(12),t.Q6J("ngModel",a.Consumption_Type),t.xp6(14),t.Q6J("ngModel",a.Select_Status),t.xp6(19),t.Q6J("ngModel",a.allSelected),t.xp6(30),t.Q6J("ngIf",(null==a.filteredData?null:a.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==a.filteredData?null:a.filteredData.length)&&!a.loader),t.xp6(2),t.Q6J("ngIf",a.loader),t.xp6(1),t.Q6J("ngIf",!a.loader)}},dependencies:[f.mk,f.sg,f.O5,v.yS,o.YN,o.Kr,o.Fj,o.Wl,o.EJ,o.JJ,o.JL,o.On,o.sg,o.u,A.pW,S.LS,y.nW,y.wx,y.zY,y.By,y._g,y.M5,y.dp,y.DK,L.KE,L.R9,q.lW,f.uU,S._s,N.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:293%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),u})(),canActivate:[c(30597).l],data:{allowedRoles:["view_materialconsumption"]}}];let it=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[v.Bz.forChild(et),v.Bz]}),u})();var rt=c(8468),nt=c(3238);let st=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[f.ez,it,rt.I,y.FA,L.lN,y.FA,nt.XK,q.ot]}),u})()},30597:(P,T,c)=>{c.d(T,{l:()=>Z});var f=c(94650),v=c(4392),$=c(97185),_=c(42917),m=c(80927);let Z=(()=>{class e{constructor(s,o,t,r,x){this.router=s,this.Arout=o,this.toastr=t,this.profileService=r,this.coreService=x}canActivate(s,o){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),t){const r=s.data.allowedRoles,x=t.some(C=>r.includes(C.codename));let M=this.coreService.profileData$.value;if(M&&M.username){this.userDetails=M,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(M);const C=M?.permission,A=this.profileService.getUserDetails();(!A||A.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}else this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(C);const A=C?.permission,S=this.profileService.getUserDetails();(!S||S.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())});if(x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(s){return new(s||e)(f.LFG(v.F0),f.LFG(v.gz),f.LFG($._W),f.LFG(_.J),f.LFG(m.p))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);