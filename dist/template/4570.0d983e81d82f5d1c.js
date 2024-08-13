"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4570],{25062:(k,T,c)=>{c.d(T,{y:()=>e});var v=c(92340),f=c(94650),s=c(80529);let e=(()=>{class y{constructor(r){this.http=r,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,i)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,i)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,i)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,i)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,i)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,i)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,i)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,i)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,i)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,i)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}}return y.\u0275fac=function(r){return new(r||y)(f.LFG(s.eN))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},64570:(k,T,c)=>{c.r(T),c.d(T,{UpdateDealerModule:()=>ye});var v=c(36895),f=c(4392),s=c(24006),e=c(94650),y=c(25062),C=c(97185),r=c(80927);function i(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Name "),e.qZA())}function l(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Company Name "),e.qZA())}function q(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 10 Digits Mobile Number"),e.qZA())}function A(a,p){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.mobError)}}function U(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 11 Digits Telephone Number"),e.qZA())}function N(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 10 Digits Whatsapp Number"),e.qZA())}function I(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Valid Email"),e.qZA())}function x(a,p){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.dateError)}}function D(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function F(a,p){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.dateError)}}function S(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function w(a,p){if(1&a&&(e.TgZ(0,"option",58),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.s9C("value",t.title),e.xp6(1),e.hij(" ",t.title,"")}}function J(a,p){1&a&&(e.TgZ(0,"span",59),e._uU(1,"Select GSTIN Type"),e.qZA())}function B(a,p){1&a&&(e.TgZ(0,"span",61),e._uU(1," Enter your GSTIN No."),e.qZA())}function Q(a,p){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Oqu(t.gstinErr)}}const m=function(a){return{"is-invalid":a}},$=function(a){return{border:a}};function P(a,p){if(1&a&&(e.TgZ(0,"div",6)(1,"div",7)(2,"label"),e._uU(3,"GSTIN No."),e.qZA(),e.TgZ(4,"div",17),e._UZ(5,"input",60),e.YNc(6,B,2,0,"span",48),e.YNc(7,Q,2,1,"span",9),e.qZA()()()),2&a){const t=e.oxw();e.xp6(5),e.Q6J("ngClass",e.VKq(4,m,t.f.gstin.touched&&t.f.gstin.invalid))("ngStyle",e.VKq(6,$,t.gstinErr?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.gstin&&t.gstin.invalid&&t.gstin.touched),e.xp6(1),e.Q6J("ngIf",t.gstinErr)}}function O(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Pan Number"),e.qZA())}function M(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Credit Limit"),e.qZA())}function Y(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Remark"),e.qZA())}function R(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"span",79),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().index,d=e.oxw();return e.KtG(d.removeAddress(o))}),e.O4$(),e.TgZ(1,"svg",80),e._UZ(2,"path",81)(3,"path",82),e.qZA()()}}function G(a,p){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.country_name," ")}}function V(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select Country"),e.qZA())}function L(a,p){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.state," ")}}function K(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select State"),e.qZA())}function z(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Please Select Country"),e.qZA())}function W(a,p){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.city," ")}}function H(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select city"),e.qZA())}function X(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Please Select State"),e.qZA())}function j(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function ee(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"div",62)(1,"div",63),e.YNc(2,R,4,0,"span",64),e.qZA(),e.TgZ(3,"div",65)(4,"div",66)(5,"div",7)(6,"label"),e._uU(7,"Address Line 1"),e.qZA(),e._UZ(8,"input",67),e.qZA()(),e.TgZ(9,"div",6)(10,"div",7)(11,"label"),e._uU(12,"Address Line 2"),e.qZA(),e._UZ(13,"input",68),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Select Country*"),e.qZA(),e.TgZ(18,"select",69,70),e.NdJ("change",function(){const d=e.CHM(t).index,_=e.MAs(19),u=e.oxw();return e.KtG(u.selectState(_.value,d))}),e.TgZ(20,"option",40),e._uU(21,"Select Country"),e.qZA(),e.YNc(22,G,2,2,"option",41),e.qZA(),e.YNc(23,V,2,0,"span",9),e.qZA()(),e.TgZ(24,"div",6)(25,"div",7)(26,"label"),e._uU(27,"Select State*"),e.qZA(),e.TgZ(28,"select",71,72),e.NdJ("change",function(){const d=e.CHM(t).index,_=e.MAs(29),u=e.oxw();return e.KtG(u.selectCity(_.value,d))}),e.TgZ(30,"option",40),e._uU(31,"Select State"),e.qZA(),e.YNc(32,L,2,2,"option",41),e.qZA(),e.YNc(33,K,2,0,"span",9),e.YNc(34,z,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Select City*"),e.qZA(),e.TgZ(39,"select",73)(40,"option",40),e._uU(41,"Select City"),e.qZA(),e.YNc(42,W,2,2,"option",41),e.qZA(),e.YNc(43,H,2,0,"span",9),e.YNc(44,X,2,0,"span",9),e.qZA()(),e.TgZ(45,"div",6)(46,"div",7)(47,"label"),e._uU(48,"Pincode"),e.qZA(),e._UZ(49,"input",74),e.YNc(50,j,2,0,"span",9),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7)(53,"label"),e._uU(54,"Select Address Type"),e.qZA(),e.TgZ(55,"select",75)(56,"option",40),e._uU(57,"Select Address Type"),e.qZA(),e.TgZ(58,"option",76),e._uU(59,"Shipping"),e.qZA(),e.TgZ(60,"option",77),e._uU(61,"Billing"),e.qZA(),e.TgZ(62,"option",78),e._uU(63,"Both"),e.qZA()()()()()()}if(2&a){const t=p.index,n=e.oxw();e.xp6(2),e.Q6J("ngIf",t>0),e.xp6(1),e.Q6J("formGroupName",t),e.xp6(19),e.Q6J("ngForOf",n.country),e.xp6(1),e.Q6J("ngIf",n.countryy[t]&&n.countryy[t].invalid&&n.countryy[t].touched),e.xp6(9),e.Q6J("ngForOf",n.state[t]),e.xp6(1),e.Q6J("ngIf",n.statee(t)&&n.statee(t).invalid&&n.statee(t).touched&&(null==n.state[t]?null:n.state[t].length)>0),e.xp6(1),e.Q6J("ngIf",n.statee(t)&&n.statee(t).invalid&&n.statee(t).touched&&(null==n.state[t]?null:n.state[t].length)<=0),e.xp6(8),e.Q6J("ngForOf",n.city[t]),e.xp6(1),e.Q6J("ngIf",n.cityy(t)&&n.cityy(t).invalid&&n.cityy(t).touched&&(null==n.city[t]?null:n.city[t].length)>0),e.xp6(1),e.Q6J("ngIf",n.cityy(t)&&n.cityy(t).invalid&&n.cityy(t).touched&&(null==n.city[t]?null:n.city[t].length)<=0),e.xp6(6),e.Q6J("ngIf",n.pincode(t)&&n.pincode(t).invalid&&n.pincode(t).touched)}}function te(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"span",79),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().index,d=e.oxw();return e.KtG(d.removeBank(o))}),e.O4$(),e.TgZ(1,"svg",80),e._UZ(2,"path",81)(3,"path",82),e.qZA()()}}function ne(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Bank holder name"),e.qZA())}function re(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Bank Name"),e.qZA())}function ae(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Account No."),e.qZA())}function ie(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Ifsc code"),e.qZA())}function se(a,p){if(1&a&&(e.TgZ(0,"div",62)(1,"div",63),e.YNc(2,te,4,0,"span",64),e.qZA(),e.TgZ(3,"div",65)(4,"div",6)(5,"div",7)(6,"label"),e._uU(7,"Bank Holder Name*"),e.qZA(),e._UZ(8,"input",84),e.YNc(9,ne,2,0,"span",9),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Bank Name*"),e.qZA(),e._UZ(14,"input",85),e.YNc(15,re,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Branch"),e.qZA(),e._UZ(20,"input",86),e.qZA()(),e.TgZ(21,"div",6)(22,"div",7)(23,"label"),e._uU(24,"Account No*"),e.qZA(),e._UZ(25,"input",87),e.YNc(26,ae,2,0,"span",9),e.qZA()(),e.TgZ(27,"div",66)(28,"div",7)(29,"label"),e._uU(30,"IFSC Code*"),e.qZA(),e._UZ(31,"input",88),e.YNc(32,ie,2,0,"span",9),e.qZA()()()()),2&a){const t=p.index,n=e.oxw();let o,d,_,u;e.xp6(2),e.Q6J("ngIf",t>0),e.xp6(1),e.Q6J("formGroupName",t),e.xp6(6),e.Q6J("ngIf",(null==(o=n.getBankHolderName(t))?null:o.invalid)&&(null==(o=n.getBankHolderName(t))?null:o.touched)),e.xp6(6),e.Q6J("ngIf",(null==(d=n.getBankName(t))?null:d.invalid)&&(null==(d=n.getBankName(t))?null:d.touched)),e.xp6(11),e.Q6J("ngIf",(null==(_=n.getAccountNo(t))?null:_.invalid)&&(null==(_=n.getAccountNo(t))?null:_.touched)),e.xp6(6),e.Q6J("ngIf",(null==(u=n.getIfscCode(t))?null:u.invalid)&&(null==(u=n.getIfscCode(t))?null:u.touched))}}function oe(a,p){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.s9C("value",null==t?null:t.id),e.xp6(1),e.hij("",null==t?null:t.title," ")}}function pe(a,p){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select Payment Terms"),e.qZA())}function le(a,p){1&a&&(e.TgZ(0,"span",59),e._uU(1,"Select Balance Type"),e.qZA())}function de(a,p){1&a&&(e.TgZ(0,"span",61),e._uU(1," Enter your Balance"),e.qZA())}function ue(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"button",89),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e._uU(1,"Submit"),e.qZA()}}function ce(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"button",90),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e._UZ(1,"span",91),e._uU(2,"\xa0 Submit"),e.qZA()}}let _e=(()=>{class a{constructor(t,n,o,d,_,u){this.fb=t,this.contactService=n,this.toastr=o,this.router=d,this.coreService=_,this.Arout=u,this.dateError=null,this.country=[],this.state=[],this.city=[],this.loader=!1}get f(){return this.dealerForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.dealerForm=this.fb.group({login_access:new s.NI(""),name:new s.NI(""),company_name:new s.NI("",[s.kI.required]),mobile_no:new s.NI("",[s.kI.required,s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),telephone_no:new s.NI(""),whatsapp_no:new s.NI("",[s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),email:new s.NI("",[s.kI.email]),remark:new s.NI(""),date_of_birth:new s.NI(""),anniversary_date:new s.NI(""),gst_type:new s.NI(""),gstin:new s.NI("",[s.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),pan_no:new s.NI("",[s.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),apply_tds:new s.NI(""),credit_limit:new s.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),payment_terms:new s.NI(""),opening_balance:new s.NI(0,[s.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new s.NI("",[s.kI.required]),membership:new s.NI("")}),this.contactService.getDealerById(this.id).subscribe(t=>{this.getRes=t;const n=Object.keys(t).reduce((o,d)=>(null!==t[d]&&""!==t[d]&&"null"!==t[d]&&(o[d]=t[d]),o),{});this.dealerForm.patchValue(n),this.selectedGstType=n?.gst_type,this.dealerForm.get("payment_terms")?.patchValue(null==this.getRes?.payment_terms?"":this.getRes?.payment_terms?.id),this.dealerForm.get("date_of_birth")?.patchValue(this.getRes?.date_of_birth??""),this.dealerForm.get("anniversary_date")?.patchValue(this.getRes?.anniversary_date??""),this.dealerForm.get("credit_limit")?.patchValue(this.getRes?.credit_limit??""),this.dealerForm.get("opening_balance")?.patchValue(this.getRes?.opening_balance??""),this.dealerForm.setControl("address",this.updateAddress(this.getRes?.address)),this.dealerForm.setControl("bank_id",this.udateBank(this.getRes?.bank_id))}),this.getgstType(),this.getCountry(),this.getPaymentTerms()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{this.paymentTerms=t})}addressAdd(){return this.fb.group({id:"",address_line_1:"",address_line_2:"",country:new s.NI("23",[s.kI.required]),state:new s.NI("28",[s.kI.required]),city:new s.NI("42",[s.kI.required]),pincode:new s.NI("841226",[s.kI.maxLength(6),s.kI.minLength(6),s.kI.pattern(/^[0-9]*$/)]),address_type:new s.NI("Shipping",[s.kI.required])})}getAddresss(){return this.dealerForm.get("address")}addAddress(){const t=this.getAddresss();this.getAddresss().push(this.addressAdd());const n=t.length-1;this.selectState("23",n).then(()=>{this.selectCity("28",n)})}removeAddress(t){this.getAddresss().removeAt(t)}onGstTypeChange(t){this.selectedGstType=t.target.value}bankAdd(){return this.fb.group({id:"",bank_ifsc_code:new s.NI("",[s.kI.required]),bank_name:new s.NI("",[s.kI.required]),branch_name:new s.NI(""),account_no:new s.NI("",[s.kI.required,s.kI.pattern(/^[0-9]*$/)]),account_holder_name:new s.NI("",[s.kI.required])})}getBanks(){return this.dealerForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(t){this.getBanks().removeAt(t)}updateAddress(t){const n=this.getAddresss();return t.forEach(o=>{const d=this.fb.group({id:o?.id,address_line_1:o?.address_line_1??"",address_line_2:o?.address_line_2??"",country:o?.country.id,state:o?.state.id,city:o?.city.id,pincode:o?.pincode??"",address_type:o?.address_type??""});n.push(d)}),n.controls.forEach((o,d)=>{const _=o.get("country").value;o.get("country").valueChanges.subscribe(h=>{this.selectedState(h,d),o.get("state").setValue(null),o.get("city").setValue(null)}),o.get("state").valueChanges.subscribe(h=>{this.selectedCity(h,d),o.get("city").setValue(null)});const u=t[d].state.id,Z=t[d].city.id;o.get("state").setValue(u),o.get("city").setValue(Z),this.selectedState(_,d),this.selectedCity(u,d)}),n}udateBank(t){let n=this.getBanks();return t.forEach(o=>{n.push(this.fb.group({id:o?.id,bank_ifsc_code:o.bank_ifsc_code,bank_name:o.bank_name,branch_name:o.branch_name,account_no:o.account_no,account_holder_name:o.account_holder_name}))}),n}getgstType(){this.contactService.getTypeOfGst().subscribe(t=>{this.gstType=t})}getCountry(){this.coreService.countryList().subscribe(t=>{this.country=t})}selectState(t,n){return new Promise((o,d)=>{const _=this.getAddresss(),u=_.at(n).get("country");_.at(n).get("pincode").setValue("841226"),u.setValue(t),this.coreService.getStateByCountryId(t).subscribe(h=>{this.state[n]=h;const g=_.at(n);setTimeout(()=>{g.get("state").setValue("28")},0),this.city[n]=[],o()},h=>d(h))})}selectedState(t,n){t&&this.coreService.getStateByCountryId(t).subscribe(o=>{this.state[n]=o})}selectCity(t,n){const o=this.getAddresss();o.at(n).get("state").setValue(t),this.coreService.getCityByStateId(t).subscribe(_=>{this.city[n]=_,setTimeout(()=>{o.at(n).get("city").setValue("42")},100)})}selectedCity(t,n){t&&this.coreService.getCityByStateId(t).subscribe(o=>{this.city[n]=o})}submit(){let t=new FormData;t.append("login_access",this.dealerForm.get("login_access")?.value),t.append("name",this.dealerForm.get("name")?.value),t.append("company_name",this.dealerForm.get("company_name")?.value.toUpperCase()),t.append("mobile_no",this.dealerForm.get("mobile_no")?.value),t.append("telephone_no",this.dealerForm.get("telephone_no")?.value),t.append("whatsapp_no",this.dealerForm.get("whatsapp_no")?.value),t.append("email",this.dealerForm.get("email")?.value),t.append("remark",this.dealerForm.get("remark")?.value),t.append("date_of_birth",this.dealerForm.get("date_of_birth")?.value),t.append("anniversary_date",this.dealerForm.get("anniversary_date")?.value),t.append("gst_type",this.dealerForm.get("gst_type")?.value),t.append("gstin","UnRegistered"!==this.selectedGstType?this.dealerForm.get("gstin")?.value.toUpperCase():""),t.append("pan_no",this.dealerForm.get("pan_no")?.value.toUpperCase()),t.append("apply_tds",this.dealerForm.get("apply_tds")?.value),t.append("credit_limit",this.dealerForm.get("credit_limit")?.value),t.append("payment_terms",this.dealerForm.get("payment_terms")?.value),t.append("opening_balance",this.dealerForm.get("opening_balance")?.value),t.append("opening_balance_type",this.dealerForm.get("opening_balance_type")?.value),t.append("membership",this.dealerForm.get("membership")?.value);const n=this.dealerForm.get("address"),o=[];n.controls.forEach(u=>{const Z=u,h={};if(Object.keys(Z.controls).forEach(g=>{const b=Z.controls[g];h[g]="state"===g||"city"===g||"country"===g?parseInt(b.value):b.value}),"Both"===h.address_type){const g={...h,address_type:"Shipping"},b={...h,address_type:"Billing"};o.push(g),o.push(b)}else o.push(h)}),t.append("address",JSON.stringify(o));const d=this.dealerForm.get("bank_id"),_=[];d.controls.forEach(u=>{const Z=u,h={};Object.keys(Z.controls).forEach(g=>{const b=Z.controls[g];h[g]="account_holder_name"===g||"bank_ifsc_code"===g?b.value.toUpperCase():b.value}),_.push(h)}),t.append("bank_id",JSON.stringify(_)),this.dealerForm.valid?(this.loader=!0,this.contactService.updateDealer(t,this.id).subscribe(u=>{this.addRes=u,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.dealerForm.reset(),this.router.navigate(["//contacts/dealerList"])):(this.loader=!1,this.toastr.error(this.addRes?.opening_balance[0]),this.toastr.error(this.addRes?.error),this.addRes?.email&&this.toastr.error(this.addRes?.error?.email[0]))},u=>{this.loader=!1,u.error.msg?(this.toastr.error(u.error.msg),this.mobError=u.error.msg,setTimeout(()=>{this.mobError=""},5e3)):u.error?(this.toastr.error(u.error?.opening_balance[0]),this.toastr.error(u.error?.email[0])):(u.error.dob||u.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.dealerForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get login_access(){return this.dealerForm.get("login_access")}get name(){return this.dealerForm.get("name")}get company_name(){return this.dealerForm.get("company_name")}get dob(){return this.dealerForm.get("date_of_birth")}get mobile(){return this.dealerForm.get("mobile_no")}get telephone_no(){return this.dealerForm.get("telephone_no")}get whatsapp_no(){return this.dealerForm.get("whatsapp_no")}get anniversary(){return this.dealerForm.get("anniversary_date")}get email(){return this.dealerForm.get("email")}get remark(){return this.dealerForm.get("remark")}get gst_type(){return this.dealerForm.get("gst_type")}get gstin(){return this.dealerForm.get("gstin")}get opening_balance(){return this.dealerForm.get("opening_balance")}get supplier_type(){return this.dealerForm.get("supplier_type")}get address(){return this.dealerForm.get("address")}get opening_balance_type(){return this.dealerForm.get("opening_balance_type")}get membership(){return this.dealerForm.get("membership")}get pan_no(){return this.dealerForm.get("pan_no")}get payment_terms(){return this.dealerForm.get("payment_terms")}get apply_tds(){return this.dealerForm.get("apply_tds")}get credit_limit(){return this.dealerForm.get("credit_limit")}countryy(t){return this.getAddresss().controls[t].get("country")}statee(t){return this.getAddresss().controls[t].get("state")}cityy(t){return this.getAddresss().controls[t].get("city")}pincode(t){return this.getAddresss().controls[t].get("pincode")}addressType(t){return this.getAddresss().controls[t].get("address_type")}getBankHolderName(t){return this.getBanks().controls[t].get("account_holder_name")}getAccountNo(t){return this.getBanks().controls[t].get("account_no")}getIfscCode(t){return this.getBanks().controls[t].get("bank_ifsc_code")}getBankName(t){return this.getBanks().controls[t].get("bank_name")}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(s.qu),e.Y36(y.y),e.Y36(C._W),e.Y36(f.F0),e.Y36(r.p),e.Y36(f.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-update-dealer"]],decls:151,vars:76,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","company_name","placeholder","Enter Company Name","id","company_name",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Mobile No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass","ngStyle"],["type","text","formControlName","telephone_no","placeholder","Enter Telephone No.","maxlength","11","minlength","11","id","telephone_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","placeholder","Enter Whatsapp No.","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","date","formControlName","date_of_birth","id","date_of_birth",3,"ngClass"],["type","date","formControlName","anniversary_date","id","anniversary_date",3,"ngClass"],[1,"input-group"],["formControlName","gst_type","id","gst_type",1,"border","hov","gst-type-wrapper",3,"ngClass","change"],["value","","selected","","disabled","",1,"unhov"],["class","unhov",3,"value",4,"ngFor","ngForOf"],["class","text-danger d-block",4,"ngIf"],["class","col-lg-3 col-sm-3 col-12",4,"ngIf"],["type","text","formControlName","pan_no","id","pan_no","placeholder","Enter Pan Number",3,"ngClass"],["type","text","formControlName","credit_limit","placeholder","Enter Credit Limit","id","credit_limit",3,"ngClass"],["type","text","formControlName","remark","placeholder","Enter Remark","id","remark",3,"ngClass"],[1,"address-details-wrapper"],[1,"address-title"],[1,"w-100","text-right","my-3"],[1,"p-0","border-0",3,"click"],[1,"addMore-btn"],[1,"plus-icon"],["formArrayName","address",1,"mb-3","pb-3"],["style","border: 1px solid rgba(145, 158, 171, 0.32); margin-top: 10px;",4,"ngFor","ngForOf"],[1,"bank-details-wrapper"],[1,"d-flex","justify-content-between","align-items-center"],[1,"text-right"],["formArrayName","bank_id"],[1,"col-lg-4","col-sm-4","col-12"],["formControlName","payment_terms","id","payment_terms",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-lg-12"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov","opening-balance-select-wrapper",3,"ngClass"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["type","text","formControlName","opening_balance","id","opening_balance",1,"opening-input-field",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",3,"click",4,"ngIf"],["routerLink","//contacts/dealerList",1,"btn","btn-cancel"],[1,"text-danger"],[1,"unhov",3,"value"],[1,"text-danger","d-block"],["type","text","formControlName","gstin","placeholder","Enter GSTIN No.","id","gstin",1,"gst-field-wrapper",3,"ngClass","ngStyle"],[1,"text-danger","ml-5","pl-5"],[2,"border","1px solid rgba(145, 158, 171, 0.32)","margin-top","10px"],[1,"col-12","d-flex","align-items-center","justify-content-end","mt-2"],["class","btn me-2","style","color: red;",3,"click",4,"ngIf"],[1,"row","m-2",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1","placeholder","Address Line 1"],["type","text","formControlName","address_line_2","placeholder","Address Line 2"],["formControlName","country","id","country",3,"change"],["countryValue",""],["formControlName","state",3,"change"],["stateValue",""],["formControlName","city","id","city"],["type","text","formControlName","pincode","placeholder","Enter Pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],["value","Both"],[1,"btn","me-2",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","28px","height","28px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[3,"value"],["type","text","formControlName","account_holder_name","placeholder","Enter Bank Holder Name"],["type","text","formControlName","bank_name","placeholder","Enter Bank Name"],["type","text","formControlName","branch_name","placeholder","Enter Branch Name"],["type","text","formControlName","account_no","placeholder","Enter Account No."],["type","text","formControlName","bank_ifsc_code","placeholder","Enter IFSC Code"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Dealer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Dealer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,i,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Company Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,l,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile No.*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,q,2,0,"span",9),e.YNc(28,A,2,1,"span",9),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Telephone No."),e.qZA(),e._UZ(33,"input",12),e.YNc(34,U,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Whatsapp No."),e.qZA(),e._UZ(39,"input",13),e.YNc(40,N,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44,"Email"),e.qZA(),e._UZ(45,"input",14),e.YNc(46,I,2,0,"span",9),e.qZA()(),e.TgZ(47,"div",6)(48,"div",7)(49,"label"),e._uU(50,"Date of Birth"),e.qZA(),e._UZ(51,"input",15),e.YNc(52,x,2,1,"span",9),e.YNc(53,D,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57,"Anniversary"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,F,2,1,"span",9),e.YNc(60,S,2,0,"span",9),e.qZA()(),e.TgZ(61,"div",6)(62,"div",7)(63,"label"),e._uU(64,"GSTIN "),e.qZA(),e.TgZ(65,"div",17)(66,"select",18),e.NdJ("change",function(d){return n.onGstTypeChange(d)}),e.TgZ(67,"option",19),e._uU(68,"GST type"),e.qZA(),e.YNc(69,w,2,2,"option",20),e.qZA(),e.YNc(70,J,2,0,"span",21),e.qZA()()(),e.YNc(71,P,8,8,"div",22),e.TgZ(72,"div",6)(73,"div",7)(74,"label"),e._uU(75,"Pan Number"),e.qZA(),e._UZ(76,"input",23),e.YNc(77,O,2,0,"span",9),e.qZA()(),e.TgZ(78,"div",6)(79,"div",7)(80,"label"),e._uU(81,"Credit Limit"),e.qZA(),e._UZ(82,"input",24),e.YNc(83,M,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",6)(85,"div",7)(86,"label"),e._uU(87,"Remark"),e.qZA(),e._UZ(88,"input",25),e.YNc(89,Y,2,0,"span",9),e.qZA()(),e.TgZ(90,"div",26)(91,"h4",27),e._uU(92,"Address Details"),e.qZA(),e.TgZ(93,"div",28)(94,"button",29),e.NdJ("click",function(){return n.addAddress()}),e.TgZ(95,"p",30)(96,"span",31),e._uU(97,"+"),e.qZA(),e._uU(98," Add More Address"),e.qZA()()(),e.TgZ(99,"div",32),e.YNc(100,ee,64,11,"div",33),e.qZA()(),e.TgZ(101,"div",34)(102,"div",35)(103,"h4",27),e._uU(104,"Bank Details"),e.qZA(),e.TgZ(105,"div",36)(106,"button",29),e.NdJ("click",function(){return n.addBank()}),e.TgZ(107,"p",30)(108,"span",31),e._uU(109,"+"),e.qZA(),e._uU(110," Add Banks "),e.qZA()()()(),e.TgZ(111,"div",37),e.YNc(112,se,33,6,"div",33),e.qZA()(),e.TgZ(113,"div",38)(114,"div",7)(115,"label"),e._uU(116,"Select Payment Terms"),e.qZA(),e.TgZ(117,"select",39)(118,"option",40),e._uU(119,"Select Payment Terms"),e.qZA(),e.YNc(120,oe,2,2,"option",41),e.qZA(),e.YNc(121,pe,2,0,"span",9),e.qZA()(),e.TgZ(122,"div",38)(123,"div",42)(124,"div",43)(125,"label"),e._uU(126,"Opening Balance*"),e.qZA(),e.TgZ(127,"div",17)(128,"div")(129,"select",44)(130,"option",19),e._uU(131,"Balance type"),e.qZA(),e.TgZ(132,"option",45),e._uU(133,"Cr"),e.qZA(),e.TgZ(134,"option",46),e._uU(135,"Dr"),e.qZA()(),e.YNc(136,le,2,0,"span",21),e.qZA(),e.TgZ(137,"div"),e._UZ(138,"input",47),e.YNc(139,de,2,0,"span",48),e.qZA()()()()(),e.TgZ(140,"div",49)(141,"div",50)(142,"div",51),e._UZ(143,"input",52),e.TgZ(144,"label",53),e._uU(145,"Login Access"),e.qZA()()()(),e.TgZ(146,"div",43),e.YNc(147,ue,2,0,"button",54),e.YNc(148,ce,3,0,"button",55),e.TgZ(149,"a",56),e._uU(150,"Cancel"),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Q6J("formGroup",n.dealerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(44,m,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,m,n.f.company_name.touched&&n.f.company_name.invalid)),e.xp6(1),e.Q6J("ngIf",n.company_name&&n.company_name.invalid&&n.company_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(48,m,n.f.mobile_no.touched&&n.f.mobile_no.invalid))("ngStyle",e.VKq(50,$,n.mobError?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",n.mobile&&n.mobile.invalid&&n.mobile.touched),e.xp6(1),e.Q6J("ngIf",n.mobError),e.xp6(5),e.Q6J("ngClass",e.VKq(52,m,n.f.telephone_no.touched&&n.f.telephone_no.invalid)),e.xp6(1),e.Q6J("ngIf",n.telephone_no&&n.telephone_no.invalid&&n.telephone_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(54,m,n.f.whatsapp_no.touched&&n.f.whatsapp_no.invalid)),e.xp6(1),e.Q6J("ngIf",n.whatsapp_no&&n.whatsapp_no.invalid&&n.whatsapp_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(56,m,n.f.email.touched&&n.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(58,m,n.f.date_of_birth.touched&&n.f.date_of_birth.invalid)),e.xp6(1),e.Q6J("ngIf",n.dateError),e.xp6(1),e.Q6J("ngIf",n.dob&&n.dob.invalid&&n.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(60,m,n.f.anniversary_date.touched&&n.f.anniversary_date.invalid)),e.xp6(1),e.Q6J("ngIf",n.dateError),e.xp6(1),e.Q6J("ngIf",n.anniversary&&n.anniversary.invalid&&n.anniversary.touched),e.xp6(6),e.Q6J("ngClass",e.VKq(62,m,n.f.gst_type.touched&&n.f.gst_type.invalid)),e.xp6(3),e.Q6J("ngForOf",n.gstType),e.xp6(1),e.Q6J("ngIf",n.gst_type&&n.gst_type.invalid&&n.gst_type.touched),e.xp6(1),e.Q6J("ngIf","UnRegistered"!==n.selectedGstType),e.xp6(5),e.Q6J("ngClass",e.VKq(64,m,n.f.pan_no.touched&&n.f.pan_no.invalid)),e.xp6(1),e.Q6J("ngIf",n.pan_no&&n.pan_no.invalid&&n.pan_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(66,m,n.f.credit_limit.touched&&n.f.credit_limit.invalid)),e.xp6(1),e.Q6J("ngIf",n.credit_limit&&n.credit_limit.invalid&&n.credit_limit.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(68,m,n.f.remark.touched&&n.f.remark.invalid)),e.xp6(1),e.Q6J("ngIf",n.remark&&n.remark.invalid&&n.remark.touched),e.xp6(11),e.Q6J("ngForOf",n.getAddresss().controls),e.xp6(12),e.Q6J("ngForOf",n.getBanks().controls),e.xp6(5),e.Q6J("ngClass",e.VKq(70,m,n.f.payment_terms.touched&&n.f.payment_terms.invalid)),e.xp6(3),e.Q6J("ngForOf",n.paymentTerms),e.xp6(1),e.Q6J("ngIf",n.payment_terms&&n.payment_terms.invalid&&n.payment_terms.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(72,m,n.f.opening_balance_type.touched&&n.f.opening_balance_type.invalid)),e.xp6(7),e.Q6J("ngIf",n.opening_balance_type&&n.opening_balance_type.invalid&&n.opening_balance_type.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(74,m,n.f.opening_balance.touched&&n.f.opening_balance.invalid)),e.xp6(1),e.Q6J("ngIf",n.opening_balance&&n.opening_balance.invalid&&n.opening_balance.touched),e.xp6(4),e.Q6J("id","checkboxTax-"),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!n.loader),e.xp6(1),e.Q6J("ngIf",n.loader))},dependencies:[v.mk,v.sg,v.O5,v.PC,f.yS,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.sg,s.u,s.x0,s.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.gst-type-wrapper[_ngcontent-%COMP%]{border-radius:5px 0 0 5px}.address-title[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700}.addMore-btn[_ngcontent-%COMP%]{background-color:#ff9f43;color:#fff;border-radius:5px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;padding:0 12px;cursor:pointer}.plus-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 5px 0 0}.gst-field-wrapper[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}.opening-balance-select-wrapper[_ngcontent-%COMP%]{padding:10px;border-radius:5px 0 0 5px!important}.opening-input-field[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}"]}),a})();var he=c(30597);const E=JSON.parse(localStorage.getItem("auth"));let me;E&&E.map(p=>{"master"===p.content_type.app_label&&"dealer"===p.content_type.model&&"change_dealer"==p.codename&&(me=p.codename)});const ge=[{path:"",component:_e,canActivate:[he.l],data:{allowedRoles:["change_dealer"]}}];let ve=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[f.Bz.forChild(ge),f.Bz]}),a})();var fe=c(30906);let ye=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[v.ez,ve,fe.ZU,s.u5,s.UX,C.Rh]}),a})()},30597:(k,T,c)=>{c.d(T,{l:()=>C});var v=c(94650),f=c(4392),s=c(97185),e=c(42917),y=c(80927);let C=(()=>{class r{constructor(l,q,A,U,N){this.router=l,this.Arout=q,this.toastr=A,this.profileService=U,this.coreService=N}canActivate(l,q){const A=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(U=>{this.userDetails=U,this.permissions=this.userDetails?.permission}),A){const U=l.data.allowedRoles;console.log(U,"allowedRoles");const N=A.some(I=>U.includes(I.codename));if(console.log(N),this.coreService.getProfile().subscribe(I=>{this.userDetails=I,this.profileService.setUserDetails(this.userDetails);const x=I?.permission,D=this.profileService.getUserDetails();(!D||D.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),N)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(l){return new(l||r)(v.LFG(f.F0),v.LFG(f.gz),v.LFG(s._W),v.LFG(e.J),v.LFG(y.p))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);