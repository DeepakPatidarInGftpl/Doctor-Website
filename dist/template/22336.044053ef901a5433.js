"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[22336],{25062:(C,Z,a)=>{a.d(Z,{y:()=>U});var c=a(92340),h=a(94650),d=a(80529);let U=(()=>{class v{constructor(i){this.http=i,this.apiUrl=`${c.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(i){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`)}SupplierIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,n)}addSupplier(i){return this.http.post(this.apiUrl+"/pv-api/supplier/",i)}updateSupplier(i,n){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`,i)}deleteSupplier(i){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(i){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`)}VendorIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,n)}addVendor(i){return this.http.post(this.apiUrl+"/pv-api/vendor/",i)}updateVendor(i,n){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`,i)}deleteVendor(i){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(i){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`)}PaymentTermsIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,n)}addPaymentTerms(i){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",i)}updatePaymentTerms(i,n){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`,i)}deletePaymentTerms(i){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(i){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${i}`)}TransportIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,n)}addTransport(i){return this.http.post(this.apiUrl+"/pv-api/transport/",i)}updateTransport(i,n){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${n}`,i)}deleteTransport(i){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${i}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(i){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${i}`)}EmployeeIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,n)}addEmployee(i){return this.http.post(this.apiUrl+"/pv-api/employee/",i)}updateEmployee(i,n){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${n}`,i)}deleteEmployee(i){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${i}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(i){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${i}`)}CustomerIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,n)}addCustomer(i){return this.http.post(this.apiUrl+"/pv-api/customer/",i)}updateCustomer(i,n){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${n}`,i)}deleteCustomer(i){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${i}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(i){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${i}`)}UserIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${i}`,n)}addUser(i){return this.http.post(this.apiUrl+"/pv-api/user/",i)}updateUser(i,n){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${n}`,i)}deleteUser(i){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${i}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(i){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${i}`)}addPermissionGroup(i){return this.http.post(this.apiUrl+"/pv-api/group/",i)}updatePermissionGroup(i,n){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${n}`,i)}deletePermissionGroup(i){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(i){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`)}DealerIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,n)}addDealer(i){return this.http.post(this.apiUrl+"/pv-api/dealer/",i)}updateDealer(i,n){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`,i)}deleteDealer(i){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+i)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(i){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${i}`)}TermsIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,n)}addTerms(i){return this.http.post(this.apiUrl+"/pv-api/terms/",i)}updateTerms(i,n){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${n}`,i)}deleteTerms(i){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${i}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(i){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${i}`)}DepartmentIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${i}`,n)}addDepartment(i){return this.http.post(this.apiUrl+"/pv-api/department/",i)}updateDepartment(i,n){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${n}`,i)}deleteDepartment(i){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${i}`)}}return v.\u0275fac=function(i){return new(i||v)(h.LFG(d.eN))},v.\u0275prov=h.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},22336:(C,Z,a)=>{a.r(Z),a.d(Z,{IncentiveLedgerEmployeeModule:()=>ne});var c=a(36895),h=a(4392),d=a(24006),U=a(68675),v=a(54004),e=a(94650),i=a(72266),n=a(25062),o=a(73162),y=a(54333),m=a(3848),_=a(59549),T=a(3238),g=a(47957),A=a(44144),x=a(54040);function q(l,p){1&l&&(e.TgZ(0,"span",22),e._uU(1,"Select From Date"),e.qZA())}function L(l,p){1&l&&(e.TgZ(0,"span",22),e._uU(1,"Select To Date"),e.qZA())}function b(l,p){if(1&l){const t=e.EpF();e.TgZ(0,"mat-option",24),e.NdJ("onSelectionChange",function(){e.CHM(t);const s=e.oxw().$implicit,u=e.oxw();return e.KtG(u.onCheck(s.id))}),e._uU(1),e.qZA()}if(2&l){const t=e.oxw().$implicit;e.Q6J("value",null==t?null:t.name),e.xp6(1),e.Oqu(null==t?null:t.name)}}function $(l,p){if(1&l&&(e.ynx(0),e.YNc(1,b,2,2,"mat-option",23),e.BQk()),2&l){const t=p.$implicit;e.xp6(1),e.Q6J("ngIf",1==t.is_active)}}function E(l,p){1&l&&(e.TgZ(0,"mat-option",27)(1,"a",28),e._uU(2,"+ Add Employee"),e.qZA()()),2&l&&e.Q6J("value","No data found")}function D(l,p){1&l&&(e.TgZ(0,"mat-option",29),e._uU(1,"Please Enter 1 or more characters"),e.qZA())}function O(l,p){if(1&l&&(e.ynx(0),e.YNc(1,E,3,1,"mat-option",25),e.YNc(2,D,2,0,"mat-option",26),e.BQk()),2&l){const t=p.ngIf,r=e.oxw();e.xp6(1),e.Q6J("ngIf",0===t.length),e.xp6(1),e.Q6J("ngIf",(null==r.employeeControl.value?null:r.employeeControl.value.length)<3)}}function P(l,p){1&l&&(e.TgZ(0,"span",22),e._uU(1,"Select Employee "),e.qZA())}function F(l,p){1&l&&(e.TgZ(0,"div",3)(1,"p",40),e._uU(2,"Bills"),e.qZA()())}function M(l,p){if(1&l&&(e.ynx(0),e.TgZ(1,"div",42)(2,"div",43)(3,"div",44)(4,"h4"),e._uU(5),e.qZA(),e.TgZ(6,"h5"),e._uU(7,"Created Date"),e.qZA()()()(),e.TgZ(8,"div",42)(9,"div",43)(10,"div",44)(11,"h4"),e._uU(12),e.qZA(),e.TgZ(13,"h5"),e._uU(14,"Voucher Type"),e.qZA()()()(),e.TgZ(15,"div",42)(16,"div",43)(17,"div",44)(18,"h4"),e._uU(19),e.qZA(),e.TgZ(20,"h5"),e._uU(21,"Voucher Number"),e.qZA()()()(),e.TgZ(22,"div",42)(23,"div",43)(24,"div",44)(25,"h4"),e._uU(26),e.qZA(),e.TgZ(27,"h5"),e._uU(28,"Transaction Type"),e.qZA()()()(),e.TgZ(29,"div",42)(30,"div",43)(31,"div",44)(32,"h4"),e._uU(33),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Points"),e.qZA()()()(),e.TgZ(36,"div",42)(37,"div",43)(38,"div",44)(39,"h4"),e._uU(40),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Amount"),e.qZA()()()(),e.TgZ(43,"div",42)(44,"div",43)(45,"div",44)(46,"h4"),e._uU(47),e.qZA(),e.TgZ(48,"h5"),e._uU(49,"Total Amount"),e.qZA()()()(),e.BQk()),2&l){const t=e.oxw(2).$implicit;e.xp6(5),e.Oqu(null==t||null==t.bills?null:t.bills.created_date),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.voucher_type),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.voucher_number),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.transaction_type),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.points),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.amount),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.total_amount)}}function N(l,p){if(1&l&&(e.ynx(0)(1),e.TgZ(2,"div",42)(3,"div",43)(4,"div",44)(5,"h4"),e._uU(6),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Incentive"),e.qZA()()()(),e.TgZ(9,"div",42)(10,"div",43)(11,"div",44)(12,"h4"),e._uU(13),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Credit Amount"),e.qZA()()()(),e.TgZ(16,"div",42)(17,"div",43)(18,"div",44)(19,"h4"),e._uU(20),e.qZA(),e.TgZ(21,"h5"),e._uU(22,"Debit Amount"),e.qZA()()()(),e.TgZ(23,"div",42)(24,"div",43)(25,"div",44)(26,"h4"),e._uU(27),e.qZA(),e.TgZ(28,"h5"),e._uU(29,"Wages"),e.qZA()()()(),e.BQk(),e.YNc(30,F,3,0,"div",36),e.YNc(31,M,50,7,"ng-container",18),e.BQk()),2&l){const t=e.oxw().$implicit,r=e.oxw(3);e.xp6(6),e.Oqu(null==t?null:t.incentive),e.xp6(7),e.Oqu(null==t?null:t.credit_amount),e.xp6(7),e.Oqu(null==t?null:t.debit_amount),e.xp6(7),e.Oqu(null==t?null:t.wages),e.xp6(3),e.Q6J("ngIf",!r.isFilterData),e.xp6(1),e.Q6J("ngIf",!r.isFilterData)}}function S(l,p){if(1&l&&(e.TgZ(0,"div",1)(1,"div",3)(2,"p",40),e._uU(3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",41),e.ynx(6),e.TgZ(7,"div",42)(8,"div",43)(9,"div",44)(10,"h4"),e._uU(11),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Incentive"),e.qZA()()()(),e.TgZ(14,"div",42)(15,"div",43)(16,"div",44)(17,"h4"),e._uU(18),e.qZA(),e.TgZ(19,"h5"),e._uU(20,"Credit Amount"),e.qZA()()()(),e.TgZ(21,"div",42)(22,"div",43)(23,"div",44)(24,"h4"),e._uU(25),e.qZA(),e.TgZ(26,"h5"),e._uU(27,"Debit Amount"),e.qZA()()()(),e.TgZ(28,"div",42)(29,"div",43)(30,"div",44)(31,"h4"),e._uU(32),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Wages"),e.qZA()()()(),e.BQk(),e.TgZ(35,"div",3)(36,"p",40),e._uU(37,"Bills"),e.qZA()(),e.ynx(38),e.TgZ(39,"div",42)(40,"div",45)(41,"div",44)(42,"h4"),e._uU(43),e.qZA(),e.TgZ(44,"h5"),e._uU(45,"Created Date"),e.qZA()()()(),e.TgZ(46,"div",42)(47,"div",45)(48,"div",44)(49,"h4"),e._uU(50),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Voucher Type"),e.qZA()()()(),e.TgZ(53,"div",42)(54,"div",45)(55,"div",44)(56,"h4"),e._uU(57),e.qZA(),e.TgZ(58,"h5"),e._uU(59,"Voucher Number"),e.qZA()()()(),e.TgZ(60,"div",42)(61,"div",45)(62,"div",44)(63,"h4"),e._uU(64),e.qZA(),e.TgZ(65,"h5"),e._uU(66,"Transaction Type"),e.qZA()()()(),e.TgZ(67,"div",42)(68,"div",45)(69,"div",44)(70,"h4"),e._uU(71),e.qZA(),e.TgZ(72,"h5"),e._uU(73,"Points"),e.qZA()()()(),e.TgZ(74,"div",42)(75,"div",45)(76,"div",44)(77,"h4"),e._uU(78),e.qZA(),e.TgZ(79,"h5"),e._uU(80,"Amount"),e.qZA()()()(),e.TgZ(81,"div",42)(82,"div",45)(83,"div",44)(84,"h4"),e._uU(85),e.qZA(),e.TgZ(86,"h5"),e._uU(87,"Total Amount"),e.qZA()()()(),e.BQk(),e.YNc(88,N,32,6,"ng-container",18),e.qZA()()()),2&l){const t=p.$implicit,r=p.index,s=e.oxw(3);e.xp6(3),e.Oqu(r+1+"."),e.xp6(8),e.Oqu(null==t?null:t.incentive),e.xp6(7),e.Oqu(null==t?null:t.credit_amount),e.xp6(7),e.Oqu(null==t?null:t.debit_amount),e.xp6(7),e.Oqu(null==t?null:t.wages),e.xp6(11),e.Oqu(null==t||null==t.bills?null:t.bills.created_date),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.voucher_type),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.voucher_number),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.transaction_type),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.points),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.amount),e.xp6(7),e.Oqu(null==t||null==t.bills?null:t.bills.total_amount),e.xp6(3),e.Q6J("ngIf",s.isFilterData)}}function w(l,p){if(1&l&&(e.TgZ(0,"div",38),e.YNc(1,S,89,13,"div",39),e.qZA()),2&l){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.incentiveList)}}function J(l,p){if(1&l&&(e.TgZ(0,"div",38)(1,"div",1)(2,"div",4)(3,"div",41),e.ynx(4),e.TgZ(5,"div",42)(6,"div",43)(7,"div",44)(8,"h4"),e._uU(9),e.qZA(),e.TgZ(10,"h5"),e._uU(11,"Incentive"),e.qZA()()()(),e.TgZ(12,"div",42)(13,"div",45)(14,"div",44)(15,"h4"),e._uU(16),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"Bill Amount"),e.qZA()()()(),e.TgZ(19,"div",42)(20,"div",46)(21,"div",44)(22,"h4"),e._uU(23),e.qZA(),e.TgZ(24,"h5"),e._uU(25,"Return Amount"),e.qZA()()()(),e.TgZ(26,"div",42)(27,"div",47)(28,"div",44)(29,"h4"),e._uU(30),e.qZA(),e.TgZ(31,"h5"),e._uU(32,"Wages"),e.qZA()()()(),e.BQk(),e.qZA()()()()),2&l){const t=e.oxw(2);e.xp6(9),e.Oqu(null==t.incentiveList?null:t.incentiveList.incentive),e.xp6(7),e.Oqu(null==t.incentiveList?null:t.incentiveList.credit_amount),e.xp6(7),e.Oqu(null==t.incentiveList?null:t.incentiveList.debit_amount),e.xp6(7),e.Oqu(null==t.incentiveList?null:t.incentiveList.wages)}}function B(l,p){1&l&&(e.TgZ(0,"div",3)(1,"p",40),e._uU(2," Bills"),e.qZA()())}function Q(l,p){if(1&l){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr")(2,"td",67),e._uU(3),e.qZA(),e.TgZ(4,"td",67),e._uU(5),e.qZA(),e.TgZ(6,"td",68),e.NdJ("click",function(){const u=e.CHM(t).$implicit,f=e.oxw(3);return e.KtG(f.redirectTo(null==u?null:u.voucher_type,null==u?null:u.bill_id))}),e._uU(7),e.qZA(),e.TgZ(8,"td",67),e._uU(9),e.qZA(),e.TgZ(10,"td",67),e._uU(11),e.qZA(),e.TgZ(12,"td",67),e._uU(13),e.qZA()(),e.BQk()}if(2&l){const t=p.$implicit,r=p.index;e.xp6(3),e.Oqu(r+1),e.xp6(2),e.Oqu(null==t?null:t.created_date),e.xp6(2),e.Oqu(null==t?null:t.voucher_number),e.xp6(2),e.Oqu("Credit"===(null==t?null:t.transaction_type)?null==t?null:t.amount:0),e.xp6(2),e.Oqu("Debit"===(null==t?null:t.transaction_type)?null==t?null:t.amount:0),e.xp6(2),e.Oqu(null==t?null:t.total_amount)}}function G(l,p){1&l&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),e._uU(4,"Data not available"),e.qZA()()()())}function Y(l,p){1&l&&e._UZ(0,"mat-progress-bar",71)}const R=function(l,p){return{itemsPerPage:l,currentPage:p}};function K(l,p){if(1&l){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",4)(2,"div",38)(3,"table",48)(4,"thead")(5,"tr")(6,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(7,"# "),e._UZ(8,"i",50),e.qZA(),e.TgZ(9,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(10,"Created Date"),e._UZ(11,"i",50),e.qZA(),e.TgZ(12,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(13,"Voucher Number"),e._UZ(14,"i",50),e.qZA(),e.TgZ(15,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(16,"Credit Amount"),e._UZ(17,"i",50),e.qZA(),e.TgZ(18,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(19,"Debit Amount"),e._UZ(20,"i",50),e.qZA(),e.TgZ(21,"th",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.sort("id"))}),e._uU(22,"Voucher Amount"),e._UZ(23,"i",50),e.qZA()()(),e.TgZ(24,"tbody"),e.YNc(25,Q,14,6,"ng-container",17),e.ALo(26,"paginate"),e.ALo(27,"orderBy"),e.qZA(),e.YNc(28,G,5,0,"tbody",18),e.qZA(),e.TgZ(29,"div",51),e.YNc(30,Y,1,0,"mat-progress-bar",52),e.qZA(),e.TgZ(31,"div",6)(32,"div",53)(33,"div",54),e._uU(34," Show per page "),e.TgZ(35,"select",55,56),e.NdJ("ngModelChange",function(s){e.CHM(t);const u=e.oxw(2);return e.KtG(u.itemsPerPage=s)})("change",function(){e.CHM(t);const s=e.MAs(36),u=e.oxw(2);return e.KtG(u.changePg(s.value))}),e.TgZ(37,"option",57),e._uU(38,"10"),e.qZA(),e.TgZ(39,"option",58),e._uU(40,"20"),e.qZA(),e.TgZ(41,"option",59),e._uU(42,"30"),e.qZA(),e.TgZ(43,"option",60),e._uU(44,"50"),e.qZA(),e.TgZ(45,"option",61),e._uU(46,"100"),e.qZA(),e.TgZ(47,"option",62),e._uU(48,"All"),e.qZA()()()(),e.TgZ(49,"div",63)(50,"div",64)(51,"pagination-controls",65),e.NdJ("pageChange",function(s){e.CHM(t);const u=e.oxw(2);return e.KtG(u.p=s)}),e.qZA(),e.TgZ(52,"div",66),e._uU(53),e.qZA()()()()()()()}if(2&l){const t=e.oxw(2);e.xp6(25),e.Q6J("ngForOf",e.xi3(26,7,e.Dn7(27,10,null==t.incentiveList?null:t.incentiveList.bills,t.key,t.reverse),e.WLB(14,R,t.itemsPerPage,t.p))),e.xp6(3),e.Q6J("ngIf",0==(null==t.incentiveList?null:t.incentiveList.bills)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries")}}function k(l,p){if(1&l&&(e.TgZ(0,"div",30)(1,"div",31)(2,"mat-tab-group",32,33)(4,"mat-tab",34),e.YNc(5,w,2,1,"div",35),e.YNc(6,J,33,4,"div",35),e.YNc(7,B,3,0,"div",36),e.YNc(8,K,54,17,"div",37),e.qZA()()()()),2&l){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",!t.isFilterData),e.xp6(1),e.Q6J("ngIf",t.isFilterData),e.xp6(1),e.Q6J("ngIf",t.isFilterData),e.xp6(1),e.Q6J("ngIf",t.isFilterData)}}const I=function(l){return{"is-invalid":l}},z=[{path:"",component:(()=>{class l{constructor(t,r,s,u){this.router=t,this.hrmService=r,this.fb=s,this.contactService=u,this.employeeControl=new d.NI,this.employeeList=[],this.isFilterData=!1,this.p=1,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.itemsPerPage2=10,this.keyy="id",this.reversee=!1}get f(){return this.filterForm.controls}ngOnInit(){this.getEmployee();const t=new Date,r=t.getFullYear(),s=t.getMonth(),u=new Date(r,s,1),f=new Date(r,s+1,0);this.filterForm=this.fb.group({from_date:new d.NI(this.formatDate(u),[d.kI.required]),to_date:new d.NI(this.formatDate(f),[d.kI.required]),employee_id:new d.NI("",[d.kI.required])}),this.filteredemployee=this.employeeControl.valueChanges.pipe((0,U.O)(""),(0,v.U)(se=>this._filter(se,!0)));let le=this.filterForm.value?.from_date,re=this.filterForm.value?.to_date,oe=this.filterForm.value?.employee_id;this.getIncentiveLedger(oe,le,re)}formatDate(t){return`${t.getFullYear()}-${("0"+(t.getMonth()+1)).slice(-2)}-${("0"+t.getDate()).slice(-2)}`}_filter(t,r){const s="string"==typeof t?t.toLowerCase():t.toString().toLowerCase(),u=this.employeeList.filter(r?f=>f.name.toLowerCase().includes(s):f=>!f.name.toLowerCase().includes(s));return!r&&0===u.length&&u.push({name:"No data found"}),u}getIncentiveLedger(t,r,s){this.hrmService.getIncentiveLedgerEmployee(t,r,s).subscribe(u=>{this.incentiveList=u,console.warn(this.incentiveList),console.log(this.incentiveList?.SaleBills)})}getEmployee(){this.contactService.getEmployee().subscribe(t=>{this.employeeList=t})}onCheck(t){console.log(t,"employeeId"),this.filterForm.get("employee_id").patchValue(t)}submit(){if(console.log(this.filterForm.value),this.filterForm.valid){let t=this.filterForm.value,r=t?.employee_id,s=t?.to_date,u=t?.from_date;this.isFilterData=!0,this.getIncentiveLedger(r,u,s)}else this.filterForm.markAllAsTouched()}redirectTo(t,r){console.log(t),"Receipt"===t?this.router.navigate(["//transaction/detailsrecieptVoucher"+r]):"POSOrder"===t?this.router.navigate(["//newpos/posOrderDetails"+r]):"MaterialInward"===t?this.router.navigate(["//purchase/material-InwardDetails/"+r]):"DebitNote"===t?this.router.navigate(["//transaction/detailsdebitnote/"+r]):"PurchaseBill"===t?this.router.navigate(["//purchase/purchase-billDetails/"+r]):"PurchaseOrder"===t?this.router.navigate(["//purchase/purchaseDetails/"+r]):"PurchaseReturn"===t?this.router.navigate(["//purchase/details-purchaseReturn/"+r]):"SaleBill"===t?this.router.navigate(["//sales/salesbilldetails/"+r]):"SaleReturn"===t?this.router.navigate(["//sales/salesReturnedetails/"+r]):"PurchaseReturn"===t?this.router.navigate(["//purchase/details-purchaseReturn/"+r]):"MaterialOutward "===t?this.router.navigate(["//sales/salesMaterialOutwardDetails/"+r]):console.log("no voucher type matching")}sort(t){this.key=t,this.reverse=!this.reverse}sortt(t){this.keyy=t,this.reversee=!this.reversee}get from_date(){return this.filterForm.get("from_date")}get to_date(){return this.filterForm.get("to_date")}get employee_id(){return this.filterForm.get("employee_id")}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.incentiveList.length)}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(h.F0),e.Y36(i.z),e.Y36(d.qu),e.Y36(n.y))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-incentive-ledger-employee"]],decls:39,vars:19,consts:[[1,"row","bg"],[1,"card"],[1,"page-header"],[1,"page-title"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","from_date","id","from_date",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","date","formControlName","to_date","id","to_date",3,"ngClass"],[2,"padding-left","12px"],[1,"search-input","mx-3",2,"width","100%"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Employee","aria-label","Employee","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-3","col-sm-4","col-12","mt-3","text-center"],[1,"btn","btn-submit"],["class","company-details-card card",4,"ngIf"],[1,"text-danger"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//contacts/addEmployee",2,"color","#FF9F43"],[1,"is-loading"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],["class","table-responsive",4,"ngIf"],["class","page-title",4,"ngIf"],["class","card",4,"ngIf"],[1,"table-responsive"],["class","card",4,"ngFor","ngForOf"],[1,"headingg","text-start"],[1,"row","container"],[1,"col-lg-3","col-sm-3","col-12","d-flex"],[1,"dash-count"],[1,"dash-counts"],[1,"dash-count","das1"],[1,"dash-count","das2"],[1,"dash-count","das3"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"td"],[1,"td",3,"click"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),e._uU(5,"Incentive Ledger Employee"),e.qZA()()(),e.TgZ(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"label"),e._uU(12,"From Date*"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,q,2,0,"span",10),e.qZA()(),e.TgZ(15,"div",7)(16,"div",8)(17,"label"),e._uU(18,"To Date*"),e.qZA(),e._UZ(19,"input",11),e.YNc(20,L,2,0,"span",10),e.qZA()(),e.TgZ(21,"div",7)(22,"div",8)(23,"label",12),e._uU(24,"Select Employee*"),e.qZA(),e.TgZ(25,"div",13)(26,"mat-form-field",14),e._UZ(27,"input",15),e.TgZ(28,"mat-autocomplete",null,16),e.YNc(30,$,2,1,"ng-container",17),e.ALo(31,"async"),e.YNc(32,O,3,2,"ng-container",18),e.ALo(33,"async"),e.qZA()(),e.YNc(34,P,2,0,"span",10),e.qZA()()(),e.TgZ(35,"div",19)(36,"button",20),e._uU(37,"Apply Filter"),e.qZA()()()(),e.YNc(38,k,9,4,"div",21),e.qZA()()()),2&t){const s=e.MAs(29);e.xp6(7),e.Q6J("formGroup",r.filterForm),e.xp6(6),e.Q6J("ngClass",e.VKq(15,I,r.f.from_date.touched&&r.f.from_date.invalid)),e.xp6(1),e.Q6J("ngIf",r.from_date&&r.from_date.invalid&&r.from_date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(17,I,r.f.to_date.touched&&r.f.to_date.invalid)),e.xp6(1),e.Q6J("ngIf",r.to_date&&r.to_date.invalid&&r.to_date.touched),e.xp6(7),e.Q6J("formControl",r.employeeControl)("matAutocomplete",s),e.xp6(3),e.Q6J("ngForOf",e.lcZ(31,11,r.filteredemployee)),e.xp6(2),e.Q6J("ngIf",e.lcZ(33,13,r.filteredemployee)),e.xp6(2),e.Q6J("ngIf",r.employee_id&&r.employee_id.invalid&&r.employee_id.touched),e.xp6(4),e.Q6J("ngIf",r.incentiveList)}},dependencies:[c.mk,c.sg,c.O5,h.yS,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,o.pW,y.LS,m.SP,m.uX,_.KE,T.ey,g.XC,g.ZL,A.Nt,c.Ov,y._s,x.T],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c114-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),l})(),canActivate:[a(30597).l],data:{allowedRoles:["view_incentiveledger"]}}];let H=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[h.Bz.forChild(z),h.Bz]}),l})();var X=a(8468),j=a(97392),ee=a(95113),te=a(56709),ie=a(90455);let ne=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[c.ez,H,X.I,m.Nh,j.Ps,ee.LD,te.p9,ie.rP,d.u5,d.UX,g.Bb,_.lN,A.c]}),l})()},30597:(C,Z,a)=>{a.d(Z,{l:()=>e});var c=a(94650),h=a(4392),d=a(97185),U=a(42917),v=a(80927);let e=(()=>{class i{constructor(o,y,m,_,T){this.router=o,this.Arout=y,this.toastr=m,this.profileService=_,this.coreService=T}canActivate(o,y){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),m){const _=o.data.allowedRoles,T=m.some(g=>_.includes(g.codename));if(this.coreService.getProfile().subscribe(g=>{this.userDetails=g,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(g);const A=g?.permission,x=this.profileService.getUserDetails();(!x||x.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return i.\u0275fac=function(o){return new(o||i)(c.LFG(h.F0),c.LFG(h.gz),c.LFG(d._W),c.LFG(U.J),c.LFG(v.p))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);