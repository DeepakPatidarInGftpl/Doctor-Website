"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9198],{25062:($,b,c)=>{c.d(b,{y:()=>t});var g=c(92340),f=c(94650),s=c(80529);let t=(()=>{class y{constructor(n){this.http=n,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(n){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`)}SupplierIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`,i)}addSupplier(n){return this.http.post(this.apiUrl+"/pv-api/supplier/",n)}updateSupplier(n,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,n)}deleteSupplier(n){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(n){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`)}VendorIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`,i)}addVendor(n){return this.http.post(this.apiUrl+"/pv-api/vendor/",n)}updateVendor(n,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,n)}deleteVendor(n){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(n){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`)}PaymentTermsIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`,i)}addPaymentTerms(n){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",n)}updatePaymentTerms(n,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,n)}deletePaymentTerms(n){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(n){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${n}`)}TransportIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${n}`,i)}addTransport(n){return this.http.post(this.apiUrl+"/pv-api/transport/",n)}updateTransport(n,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,n)}deleteTransport(n){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${n}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(n){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${n}`)}EmployeeIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${n}`,i)}addEmployee(n){return this.http.post(this.apiUrl+"/pv-api/employee/",n)}updateEmployee(n,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,n)}deleteEmployee(n){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${n}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(n){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${n}`)}CustomerIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${n}`,i)}addCustomer(n){return this.http.post(this.apiUrl+"/pv-api/customer/",n)}updateCustomer(n,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,n)}deleteCustomer(n){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${n}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(n){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${n}`)}UserIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${n}`,i)}addUser(n){return this.http.post(this.apiUrl+"/pv-api/user/",n)}updateUser(n,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,n)}deleteUser(n){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${n}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(n){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${n}`)}addPermissionGroup(n){return this.http.post(this.apiUrl+"/pv-api/group/",n)}updatePermissionGroup(n,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,n)}deletePermissionGroup(n){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${n}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(n){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`)}DealerIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`,i)}addDealer(n){return this.http.post(this.apiUrl+"/pv-api/dealer/",n)}updateDealer(n,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,n)}deleteDealer(n){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+n)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(n){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${n}`)}TermsIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${n}`,i)}addTerms(n){return this.http.post(this.apiUrl+"/pv-api/terms/",n)}updateTerms(n,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,n)}deleteTerms(n){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${n}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(n){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${n}`)}DepartmentIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${n}`,i)}addDepartment(n){return this.http.post(this.apiUrl+"/pv-api/department/",n)}updateDepartment(n,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,n)}deleteDepartment(n){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${n}`)}getCreditLimitByUserId(n){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${n}`)}}return y.\u0275fac=function(n){return new(n||y)(f.LFG(s.eN))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},9198:($,b,c)=>{c.r(b),c.d(b,{UpdateTransportModule:()=>vt});var g=c(36895),f=c(4392),s=c(24006),t=c(94650),y=c(25062),N=c(97185),n=c(80927);function i(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Name "),t.qZA())}function l(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Company Name "),t.qZA())}function x(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your 10 Digits Mobile Number"),t.qZA())}function C(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your 11 Digits Telephone Number"),t.qZA())}function U(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your 10 Digits Whatsapp Number"),t.qZA())}function I(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter Valid Email"),t.qZA())}function Z(a,p){if(1&a&&(t.TgZ(0,"span",58),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(e.dateError)}}function q(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function k(a,p){if(1&a&&(t.TgZ(0,"span",58),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(e.dateError)}}function F(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function S(a,p){if(1&a&&(t.TgZ(0,"option",59),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.s9C("value",e.title),t.xp6(1),t.hij(" ",e.title,"")}}function w(a,p){1&a&&(t.TgZ(0,"span",60),t._uU(1,"Select GSTIN Type"),t.qZA())}function J(a,p){1&a&&(t.TgZ(0,"span",62),t._uU(1," Enter your GSTIN No."),t.qZA())}function B(a,p){if(1&a&&(t.TgZ(0,"span",58),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.gstinErr)}}const m=function(a){return{"is-invalid":a}},P=function(a){return{border:a}};function Q(a,p){if(1&a&&(t.TgZ(0,"div",6)(1,"div",7)(2,"label"),t._uU(3,"GSTIN No."),t.qZA(),t.TgZ(4,"div",17),t._UZ(5,"input",61),t.YNc(6,J,2,0,"span",48),t.YNc(7,B,2,1,"span",9),t.qZA()()()),2&a){const e=t.oxw();t.xp6(5),t.Q6J("ngClass",t.VKq(4,m,e.f.gstin.touched&&e.f.gstin.invalid))("ngStyle",t.VKq(6,P,e.gstinErr?"1px solid red":"")),t.xp6(1),t.Q6J("ngIf",e.gstin&&e.gstin.invalid&&e.gstin.touched),t.xp6(1),t.Q6J("ngIf",e.gstinErr)}}function O(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Pan Number"),t.qZA())}function D(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Credit Limit"),t.qZA())}function M(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter Remark"),t.qZA())}function Y(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"span",80),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,d=t.oxw();return t.KtG(d.removeAddress(o))}),t.O4$(),t.TgZ(1,"svg",81),t._UZ(2,"path",82)(3,"path",83),t.qZA()()}}function G(a,p){if(1&a&&(t.TgZ(0,"option",84),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.country_name," ")}}function R(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Select Country"),t.qZA())}function V(a,p){if(1&a&&(t.TgZ(0,"option",84),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij("",e.state," ")}}function L(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Select State"),t.qZA())}function K(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Please Select Country"),t.qZA())}function z(a,p){if(1&a&&(t.TgZ(0,"option",84),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.hij("",null==e?null:e.city," ")}}function W(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Select City"),t.qZA())}function H(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Please Select State"),t.qZA())}function X(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your 6 Digits Pincode Number"),t.qZA())}function j(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",63)(1,"div",64),t.YNc(2,Y,4,0,"span",65),t.qZA(),t.TgZ(3,"div",66)(4,"div",67)(5,"div",7)(6,"label"),t._uU(7,"Address Line 1"),t.qZA(),t._UZ(8,"input",68),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"label"),t._uU(12,"Address Line 2"),t.qZA(),t._UZ(13,"input",69),t.qZA()(),t.TgZ(14,"div",6)(15,"div",7)(16,"label"),t._uU(17,"Select Country*"),t.qZA(),t.TgZ(18,"select",70,71),t.NdJ("change",function(){const d=t.CHM(e).index,_=t.MAs(19),u=t.oxw();return t.KtG(u.selectState(_.value,d))}),t.TgZ(20,"option",40),t._uU(21,"Select Country"),t.qZA(),t.YNc(22,G,2,2,"option",41),t.qZA(),t.YNc(23,R,2,0,"span",9),t.qZA()(),t.TgZ(24,"div",6)(25,"div",7)(26,"label"),t._uU(27,"Select State*"),t.qZA(),t.TgZ(28,"select",72,73),t.NdJ("change",function(){const d=t.CHM(e).index,_=t.MAs(29),u=t.oxw();return t.KtG(u.selectCity(_.value,d))}),t.TgZ(30,"option",40),t._uU(31,"Select State"),t.qZA(),t.YNc(32,V,2,2,"option",41),t.qZA(),t.YNc(33,L,2,0,"span",9),t.YNc(34,K,2,0,"span",9),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38,"Select City*"),t.qZA(),t.TgZ(39,"select",74)(40,"option",40),t._uU(41,"Select City"),t.qZA(),t.YNc(42,z,2,2,"option",41),t.qZA(),t.YNc(43,W,2,0,"span",9),t.YNc(44,H,2,0,"span",9),t.qZA()(),t.TgZ(45,"div",6)(46,"div",7)(47,"label"),t._uU(48,"Pincode"),t.qZA(),t._UZ(49,"input",75),t.YNc(50,X,2,0,"span",9),t.qZA()(),t.TgZ(51,"div",6)(52,"div",7)(53,"label"),t._uU(54,"Select Address Type"),t.qZA(),t.TgZ(55,"select",76)(56,"option",40),t._uU(57,"Select Address Type"),t.qZA(),t.TgZ(58,"option",77),t._uU(59,"Shipping"),t.qZA(),t.TgZ(60,"option",78),t._uU(61,"Billing"),t.qZA(),t.TgZ(62,"option",79),t._uU(63,"Both"),t.qZA()()()()()()}if(2&a){const e=p.index,r=t.oxw();t.xp6(2),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("formGroupName",e),t.xp6(19),t.Q6J("ngForOf",r.country),t.xp6(1),t.Q6J("ngIf",r.countryy(e).invalid&&r.countryy(e).touched),t.xp6(9),t.Q6J("ngForOf",r.state[e]),t.xp6(1),t.Q6J("ngIf",r.statee(e).invalid&&r.statee(e).touched&&(null==r.state?null:r.state.length)>0),t.xp6(1),t.Q6J("ngIf",r.statee(e).invalid&&r.statee(e).touched&&(null==r.state?null:r.state.length)<=0),t.xp6(8),t.Q6J("ngForOf",r.city[e]),t.xp6(1),t.Q6J("ngIf",r.cityy(e).invalid&&r.cityy(e).touched&&(null==r.city[e]?null:r.city[e].length)>0),t.xp6(1),t.Q6J("ngIf",r.cityy(e).invalid&&r.cityy(e).touched&&(null==r.city[e]?null:r.city[e].length)<=0),t.xp6(6),t.Q6J("ngIf",r.pincode(e).invalid&&r.pincode(e).touched)}}function tt(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"span",80),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,d=t.oxw();return t.KtG(d.removeBank(o))}),t.O4$(),t.TgZ(1,"svg",81),t._UZ(2,"path",82)(3,"path",83),t.qZA()()}}function et(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter Bank Holder name"),t.qZA())}function nt(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Bank Name"),t.qZA())}function rt(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your Account No."),t.qZA())}function at(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Enter your IFSC Code"),t.qZA())}function it(a,p){if(1&a&&(t.TgZ(0,"div",63)(1,"div",64),t.YNc(2,tt,4,0,"span",65),t.qZA(),t.TgZ(3,"div",66)(4,"div",6)(5,"div",7)(6,"label"),t._uU(7,"Bank Holder Name*"),t.qZA(),t._UZ(8,"input",85),t.YNc(9,et,2,0,"span",9),t.qZA()(),t.TgZ(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Bank Name*"),t.qZA(),t._UZ(14,"input",86),t.YNc(15,nt,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Branch"),t.qZA(),t._UZ(20,"input",87),t.qZA()(),t.TgZ(21,"div",6)(22,"div",7)(23,"label"),t._uU(24,"Account No.*"),t.qZA(),t._UZ(25,"input",88),t.YNc(26,rt,2,0,"span",9),t.qZA()(),t.TgZ(27,"div",67)(28,"div",7)(29,"label"),t._uU(30,"IFSC Code*"),t.qZA(),t._UZ(31,"input",89),t.YNc(32,at,2,0,"span",9),t.qZA()()()()),2&a){const e=p.index,r=t.oxw();let o,d,_,u;t.xp6(2),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("formGroupName",e),t.xp6(6),t.Q6J("ngIf",(null==(o=r.getBankHolderName(e))?null:o.invalid)&&(null==(o=r.getBankHolderName(e))?null:o.touched)),t.xp6(6),t.Q6J("ngIf",(null==(d=r.getBankName(e))?null:d.invalid)&&(null==(d=r.getBankName(e))?null:d.touched)),t.xp6(11),t.Q6J("ngIf",(null==(_=r.getAccountNo(e))?null:_.invalid)&&(null==(_=r.getAccountNo(e))?null:_.touched)),t.xp6(6),t.Q6J("ngIf",(null==(u=r.getIfscCode(e))?null:u.invalid)&&(null==(u=r.getIfscCode(e))?null:u.touched))}}function st(a,p){if(1&a&&(t.TgZ(0,"option",84),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function ot(a,p){1&a&&(t.TgZ(0,"span",58),t._uU(1,"Select Payment Terms"),t.qZA())}function pt(a,p){1&a&&(t.TgZ(0,"span",60),t._uU(1,"Select Balance Type"),t.qZA())}function lt(a,p){1&a&&(t.TgZ(0,"span",62),t._uU(1," Enter your Balance"),t.qZA())}function dt(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"button",90),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(1,"Submit"),t.qZA()}}function ut(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"button",91),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._UZ(1,"span",92),t._uU(2,"\xa0 Submit"),t.qZA()}}let ct=(()=>{class a{constructor(e,r,o,d,_,u){this.fb=e,this.contactService=r,this.toastr=o,this.router=d,this.Arout=_,this.coreService=u,this.dateError=null,this.country=[],this.state=[],this.city=[],this.loader=!1}get f(){return this.transportForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.transportForm=this.fb.group({login_access:new s.NI(""),name:new s.NI("",[s.kI.required]),company_name:new s.NI(""),mobile_no:new s.NI("",[s.kI.required,s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),telephone_no:new s.NI(""),whatsapp_no:new s.NI("",[s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),email:new s.NI("",s.kI.email),remark:new s.NI(""),date_of_birth:new s.NI(""),anniversary_date:new s.NI(""),gst_type:new s.NI(""),gstin:new s.NI("",[s.kI.required,s.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),pan_no:new s.NI("",[s.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),apply_tds:new s.NI(""),credit_limit:new s.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),payment_terms:new s.NI(""),opening_balance:new s.NI(0,[s.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new s.NI("",[s.kI.required])}),this.getCountry(),this.getgstType(),this.getPaymentTerms(),this.contactService.getTransportById(this.id).subscribe(e=>{this.getRes=e;const r=Object.keys(e).reduce((o,d)=>(null!==e[d]&&""!==e[d]&&"null"!==e[d]&&(o[d]=e[d]),o),{});this.transportForm.patchValue(r),this.selectedGstType=r?.gst_type,this.transportForm.get("payment_terms")?.patchValue(null==this.getRes?.payment_terms?"":this.getRes?.payment_terms?.id),this.transportForm.get("date_of_birth")?.patchValue(this.getRes?.date_of_birth??""),this.transportForm.get("anniversary_date")?.patchValue(this.getRes?.anniversary_date??""),this.transportForm.get("credit_limit")?.patchValue(this.getRes?.credit_limit??""),this.transportForm.get("opening_balance")?.patchValue(this.getRes?.opening_balance??""),this.transportForm.setControl("address",this.updateAddress(this.getRes.address)),this.transportForm.setControl("bank_id",this.udateBank(this.getRes.bank_id))})}updateAddress(e){const r=this.getAddresss();return e.forEach(o=>{const d=this.fb.group({id:o?.id,address_line_1:o?.address_line_1??"",address_line_2:o?.address_line_2??"",country:o?.country.id,state:o?.state.id,city:o?.city.id,pincode:o?.pincode??"",address_type:o?.address_type??""});r.push(d)}),r.controls.forEach((o,d)=>{const _=o.get("country").value;o.get("country").valueChanges.subscribe(h=>{this.selectedState(h,d),o.get("state").setValue(null),o.get("city").setValue(null)}),o.get("state").valueChanges.subscribe(h=>{this.selectedCity(h,d),o.get("city").setValue(null)});const u=e[d].state.id,T=e[d].city.id;o.get("state").setValue(u),o.get("city").setValue(T),this.selectedState(_,d),this.selectedCity(u,d)}),r}udateBank(e){let r=this.getBanks();return e.forEach(o=>{r.push(this.fb.group({id:o?.id,bank_ifsc_code:o.bank_ifsc_code,bank_name:o.bank_name,branch_name:o.branch_name,account_no:o.account_no,account_holder_name:o.account_holder_name}))}),r}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(e=>{this.paymentTerms=e})}getgstType(){this.contactService.getTypeOfGst().subscribe(e=>{this.gstType=e})}addressAdd(){return this.fb.group({id:"",address_line_1:"",address_line_2:"",country:new s.NI("23",[s.kI.required]),state:new s.NI("28",[s.kI.required]),city:new s.NI("42",[s.kI.required]),pincode:new s.NI("841226",[s.kI.maxLength(6),s.kI.minLength(6),s.kI.pattern(/^[0-9]*$/)]),address_type:new s.NI("Shipping",[s.kI.required])})}getAddresss(){return this.transportForm.get("address")}addAddress(){const e=this.getAddresss();this.getAddresss().push(this.addressAdd());const r=e.length-1;this.selectState("23",r).then(()=>{this.selectCity("28",r)})}removeAddress(e){this.getAddresss().removeAt(e)}bankAdd(){return this.fb.group({id:"",bank_ifsc_code:new s.NI("",[s.kI.required]),bank_name:new s.NI("",[s.kI.required]),branch_name:new s.NI(""),account_no:new s.NI("",s.kI.required),account_holder_name:new s.NI("",[s.kI.required])})}getBanks(){return this.transportForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(e){this.getBanks().removeAt(e)}onGstTypeChange(e){this.selectedGstType=e.target.value}getCountry(){this.coreService.countryList().subscribe(e=>{this.country=e})}selectState(e,r){return new Promise((o,d)=>{const _=this.getAddresss(),u=_.at(r).get("country");_.at(r).get("pincode").setValue("841226"),u.setValue(e),this.coreService.getStateByCountryId(e).subscribe(h=>{this.state[r]=h;const v=_.at(r);setTimeout(()=>{v.get("state").setValue("28")},0),this.city[r]=[],o()},h=>d(h))})}selectedState(e,r){e&&this.coreService.getStateByCountryId(e).subscribe(o=>{this.state[r]=o})}selectCity(e,r){const o=this.getAddresss();o.at(r).get("state").setValue(e),this.coreService.getCityByStateId(e).subscribe(_=>{this.city[r]=_,setTimeout(()=>{o.at(r).get("city").setValue("42")},100)})}selectedCity(e,r){e&&this.coreService.getCityByStateId(e).subscribe(o=>{this.city[r]=o})}submit(){let e=new FormData;e.append("login_access",this.transportForm.get("login_access")?.value),e.append("name",this.transportForm.get("name")?.value),e.append("company_name",this.transportForm.get("company_name")?.value.toUpperCase()),e.append("mobile_no",this.transportForm.get("mobile_no")?.value),e.append("telephone_no",this.transportForm.get("telephone_no")?.value),e.append("whatsapp_no",this.transportForm.get("whatsapp_no")?.value),e.append("email",this.transportForm.get("email")?.value),e.append("remark",this.transportForm.get("remark")?.value),e.append("date_of_birth",this.transportForm.get("date_of_birth")?.value),e.append("anniversary_date",this.transportForm.get("anniversary_date")?.value),e.append("gst_type",this.transportForm.get("gst_type")?.value),e.append("gstin","UnRegistered"!==this.selectedGstType?this.transportForm.get("gstin")?.value.toUpperCase():""),e.append("pan_no",this.transportForm.get("pan_no")?.value.toUpperCase()),e.append("apply_tds",this.transportForm.get("apply_tds")?.value),e.append("credit_limit",this.transportForm.get("credit_limit")?.value),e.append("payment_terms",this.transportForm.get("payment_terms")?.value),e.append("opening_balance",this.transportForm.get("opening_balance")?.value),e.append("opening_balance_type",this.transportForm.get("opening_balance_type")?.value);const r=this.transportForm.get("address"),o=[];r.controls.forEach(u=>{const T=u,h={};if(Object.keys(T.controls).forEach(v=>{h[v]=T.controls[v].value}),"Both"===h.address_type){const v={...h,address_type:"Shipping"},A={...h,address_type:"Billing"};o.push(v),o.push(A)}else o.push(h)}),e.append("address",JSON.stringify(o));const d=this.transportForm.get("bank_id"),_=[];d.controls.forEach(u=>{const T=u,h={};Object.keys(T.controls).forEach(v=>{const A=T.controls[v];h[v]="account_holder_name"===v||"bank_ifsc_code"===v?A.value.toUpperCase():A.value}),_.push(h)}),e.append("bank_id",JSON.stringify(_)),this.transportForm.valid?(this.loader=!0,this.contactService.updateTransport(e,this.id).subscribe(u=>{this.addRes=u,this.addRes.success?(this.toastr.success(this.addRes.msg),this.transportForm.reset(),this.router.navigate(["//contacts/transport"])):(this.loader=!1,this.toastr.error(this.addRes?.opening_balance[0]),this.toastr.error(this.addRes.opening_balance_type[0]),this.addRes?.email&&this.toastr.error(this.addRes?.error?.email[0]))},u=>{this.loader=!1,u.error.msg?this.toastr.error(u.error.msg):u.error?(this.toastr.error(u.error?.opening_balance[0]),this.toastr.error(u.error?.email[0])):(u.error.dob||u.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.loader=!1,this.transportForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get login_access(){return this.transportForm.get("login_access")}get name(){return this.transportForm.get("name")}get company_name(){return this.transportForm.get("company_name")}get dob(){return this.transportForm.get("date_of_birth")}get mobile(){return this.transportForm.get("mobile_no")}get telephone_no(){return this.transportForm.get("telephone_no")}get whatsapp_no(){return this.transportForm.get("whatsapp_no")}get anniversary(){return this.transportForm.get("anniversary_date")}get email(){return this.transportForm.get("email")}get remark(){return this.transportForm.get("remark")}get gst_type(){return this.transportForm.get("gst_type")}get gstin(){return this.transportForm.get("gstin")}get opening_balance(){return this.transportForm.get("opening_balance")}get supplier_type(){return this.transportForm.get("supplier_type")}get address(){return this.transportForm.get("address")}get pan_no(){return this.transportForm.get("pan_no")}get payment_terms(){return this.transportForm.get("payment_terms")}get apply_tds(){return this.transportForm.get("apply_tds")}get credit_limit(){return this.transportForm.get("credit_limit")}countryy(e){return this.getAddresss().controls[e].get("country")}statee(e){return this.getAddresss().controls[e].get("state")}cityy(e){return this.getAddresss().controls[e].get("city")}pincode(e){return this.getAddresss().controls[e].get("pincode")}addressType(e){return this.getAddresss().controls[e].get("address_type")}getBankHolderName(e){return this.getBanks().controls[e].get("account_holder_name")}getAccountNo(e){return this.getBanks().controls[e].get("account_no")}getIfscCode(e){return this.getBanks().controls[e].get("bank_ifsc_code")}getBankName(e){return this.getBanks().controls[e].get("bank_name")}get opening_balance_type(){return this.transportForm.get("opening_balance_type")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.qu),t.Y36(y.y),t.Y36(N._W),t.Y36(f.F0),t.Y36(f.gz),t.Y36(n.p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-update-transport"]],decls:154,vars:71,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name","placeholder","Enter Name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","company_name","placeholder","Enter Company Name","id","company_name",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Mobile No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass"],["type","text","formControlName","telephone_no","placeholder","Enter Telephone No.","maxlength","11","minlength","11","id","telephone_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","placeholder","Enter Whatsapp No.","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","date","formControlName","date_of_birth","placeholder","Select Date of Birth","id","date_of_birth",3,"ngClass"],["type","date","formControlName","anniversary_date","placeholder","Anniversary","id","anniversary_date",3,"ngClass"],[1,"input-group"],["formControlName","gst_type","id","gst_type",1,"border","hov","gst-type-wrapper",3,"ngClass","change"],["value","","selected","","disabled","",1,"unhov"],["class","unhov",3,"value",4,"ngFor","ngForOf"],["class","text-danger d-block",4,"ngIf"],["class","col-lg-3 col-sm-3 col-12",4,"ngIf"],["type","text","formControlName","pan_no","id","pan_no","placeholder","Enter Pan Number",3,"ngClass"],["type","text","formControlName","credit_limit","placeholder","Enter Credit Limit","id","credit_limit",3,"ngClass"],["type","text","formControlName","remark","placeholder","Enter Remark","id","remark",3,"ngClass"],[1,"address-details-wrapper"],[1,"address-title"],[1,"w-100","text-right","my-3"],[1,"p-0","border-0",3,"click"],[1,"addMore-btn"],[1,"plus-icon"],["formArrayName","address",1,"mb-3","pb-3"],["style","border: 1px solid rgba(145, 158, 171, 0.32); margin-top: 10px;",4,"ngFor","ngForOf"],[1,"bank-details-wrapper"],[1,"d-flex","justify-content-between","align-items-center"],[1,"text-right"],["formArrayName","bank_id"],[1,"col-lg-3","col-sm-3","col-12","mt-3"],["formControlName","payment_terms","id","payment_terms",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-lg-12"],["formControlName","opening_balance_type","id","opening_balance_type",1,"border","hov","opening-balance-select-wrapper"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["type","text","formControlName","opening_balance","id","opening_balance",1,"opening-input-field",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center","mt-3"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["type","checkbox","formControlName","apply_tds",3,"id"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",3,"click",4,"ngIf"],["routerLink","//contacts/transport",1,"btn","btn-cancel"],[1,"text-danger"],[1,"unhov",3,"value"],[1,"text-danger","d-block"],["type","text","formControlName","gstin","placeholder","Enter GSTIN No.","id","gstin",1,"gst-field-wrapper",3,"ngClass","ngStyle"],[1,"text-danger","ml-5","pl-5"],[2,"border","1px solid rgba(145, 158, 171, 0.32)","margin-top","10px"],[1,"col-12","d-flex","align-items-center","justify-content-end","mt-2"],["class","btn me-2","style","color: red;",3,"click",4,"ngIf"],[1,"row","m-2",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1","placeholder","Enter Address Line 1"],["type","text","formControlName","address_line_2","placeholder","Enter Address Line 2"],["formControlName","country","id","country",3,"change"],["countryValue",""],["formControlName","state",3,"change"],["stateValue",""],["formControlName","city","id","city"],["type","text","formControlName","pincode","placeholder","Enter Pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],["value","Both"],[1,"btn","me-2",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","28px","height","28px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[3,"value"],["type","text","formControlName","account_holder_name","placeholder","Enter Bank Holder Name"],["type","text","formControlName","bank_name","placeholder","Enter Bank Name"],["type","text","formControlName","branch_name","placeholder","Enter Branch Name"],["type","text","formControlName","account_no","placeholder","Enter Account No."],["type","text","formControlName","bank_ifsc_code","placeholder","Enter IFSC Code"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Transport"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Transport "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13," Name*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,i,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Company Name"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,l,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Mobile No*"),t.qZA(),t._UZ(26,"input",11),t.YNc(27,x,2,0,"span",9),t.qZA()(),t.TgZ(28,"div",6)(29,"div",7)(30,"label"),t._uU(31,"Telephone No."),t.qZA(),t._UZ(32,"input",12),t.YNc(33,C,2,0,"span",9),t.qZA()(),t.TgZ(34,"div",6)(35,"div",7)(36,"label"),t._uU(37,"Whatsapp No."),t.qZA(),t._UZ(38,"input",13),t.YNc(39,U,2,0,"span",9),t.qZA()(),t.TgZ(40,"div",6)(41,"div",7)(42,"label"),t._uU(43,"Email"),t.qZA(),t._UZ(44,"input",14),t.YNc(45,I,2,0,"span",9),t.qZA()(),t.TgZ(46,"div",6)(47,"div",7)(48,"label"),t._uU(49,"Date of Birth"),t.qZA(),t._UZ(50,"input",15),t.YNc(51,Z,2,1,"span",9),t.YNc(52,q,2,0,"span",9),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Anniversary"),t.qZA(),t._UZ(57,"input",16),t.YNc(58,k,2,1,"span",9),t.YNc(59,F,2,0,"span",9),t.qZA()(),t.TgZ(60,"div",6)(61,"div",7)(62,"label"),t._uU(63,"GSTIN "),t.qZA(),t.TgZ(64,"div",17)(65,"select",18),t.NdJ("change",function(d){return r.onGstTypeChange(d)}),t.TgZ(66,"option",19),t._uU(67,"GST type"),t.qZA(),t.YNc(68,S,2,2,"option",20),t.qZA(),t.YNc(69,w,2,0,"span",21),t.qZA()()(),t.YNc(70,Q,8,8,"div",22),t.TgZ(71,"div",6)(72,"div",7)(73,"label"),t._uU(74,"Pan Number"),t.qZA(),t._UZ(75,"input",23),t.YNc(76,O,2,0,"span",9),t.qZA()(),t.TgZ(77,"div",6)(78,"div",7)(79,"label"),t._uU(80,"Credit Limit"),t.qZA(),t._UZ(81,"input",24),t.YNc(82,D,2,0,"span",9),t.qZA()(),t.TgZ(83,"div",6)(84,"div",7)(85,"label"),t._uU(86,"Remark"),t.qZA(),t._UZ(87,"input",25),t.YNc(88,M,2,0,"span",9),t.qZA()(),t.TgZ(89,"div",26)(90,"h4",27),t._uU(91,"Address Details"),t.qZA(),t.TgZ(92,"div",28)(93,"button",29),t.NdJ("click",function(){return r.addAddress()}),t.TgZ(94,"p",30)(95,"span",31),t._uU(96,"+"),t.qZA(),t._uU(97," Add More Address"),t.qZA()()(),t.TgZ(98,"div",32),t.YNc(99,j,64,11,"div",33),t.qZA()(),t.TgZ(100,"div",34)(101,"div",35)(102,"h4",27),t._uU(103,"Bank Details"),t.qZA(),t.TgZ(104,"div",36)(105,"button",29),t.NdJ("click",function(){return r.addBank()}),t.TgZ(106,"p",30)(107,"span",31),t._uU(108,"+"),t.qZA(),t._uU(109," Add Banks "),t.qZA()()()(),t.TgZ(110,"div",37),t.YNc(111,it,33,6,"div",33),t.qZA()(),t.TgZ(112,"div",38)(113,"div",7)(114,"label"),t._uU(115,"Select Payment Terms"),t.qZA(),t.TgZ(116,"select",39)(117,"option",40),t._uU(118,"Select Payment Terms"),t.qZA(),t.YNc(119,st,2,2,"option",41),t.qZA(),t.YNc(120,ot,2,0,"span",9),t.qZA()(),t.TgZ(121,"div",38)(122,"div",42)(123,"div",43)(124,"label"),t._uU(125,"Opening Balance*"),t.qZA(),t.TgZ(126,"div",17)(127,"div")(128,"select",44)(129,"option",19),t._uU(130,"Balance type"),t.qZA(),t.TgZ(131,"option",45),t._uU(132,"Cr"),t.qZA(),t.TgZ(133,"option",46),t._uU(134,"Dr"),t.qZA()(),t.YNc(135,pt,2,0,"span",21),t.qZA(),t.TgZ(136,"div"),t._UZ(137,"input",47),t.YNc(138,lt,2,0,"span",48),t.qZA()()()()(),t.TgZ(139,"div",49)(140,"div",50)(141,"div",51),t._UZ(142,"input",52),t.TgZ(143,"label",53),t._uU(144,"Login Access"),t.qZA()(),t.TgZ(145,"div",51),t._UZ(146,"input",54),t.TgZ(147,"label",53),t._uU(148,"Apply TDS"),t.qZA()()()(),t.TgZ(149,"div",43),t.YNc(150,dt,2,0,"button",55),t.YNc(151,ut,3,0,"button",56),t.TgZ(152,"a",57),t._uU(153,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",r.transportForm),t.xp6(6),t.Q6J("ngClass",t.VKq(43,m,r.f.name.touched&&r.f.name.invalid)),t.xp6(1),t.Q6J("ngIf",r.name&&r.name.invalid&&r.name.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(45,m,r.f.company_name.touched&&r.f.company_name.invalid)),t.xp6(1),t.Q6J("ngIf",r.company_name&&r.company_name.invalid&&r.company_name.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(47,m,r.f.mobile_no.touched&&r.f.mobile_no.invalid)),t.xp6(1),t.Q6J("ngIf",r.mobile&&r.mobile.invalid&&r.mobile.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(49,m,r.f.telephone_no.touched&&r.f.telephone_no.invalid)),t.xp6(1),t.Q6J("ngIf",r.telephone_no&&r.telephone_no.invalid&&r.telephone_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(51,m,r.f.whatsapp_no.touched&&r.f.whatsapp_no.invalid)),t.xp6(1),t.Q6J("ngIf",r.whatsapp_no&&r.whatsapp_no.invalid&&r.whatsapp_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(53,m,r.f.email.touched&&r.f.email.invalid)),t.xp6(1),t.Q6J("ngIf",r.email&&r.email.invalid&&r.email.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(55,m,r.f.date_of_birth.touched&&r.f.date_of_birth.invalid)),t.xp6(1),t.Q6J("ngIf",r.dateError),t.xp6(1),t.Q6J("ngIf",r.dob&&r.dob.invalid&&r.dob.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(57,m,r.f.anniversary_date.touched&&r.f.anniversary_date.invalid)),t.xp6(1),t.Q6J("ngIf",r.dateError),t.xp6(1),t.Q6J("ngIf",r.anniversary&&r.anniversary.invalid&&r.anniversary.touched),t.xp6(6),t.Q6J("ngClass",t.VKq(59,m,r.f.gst_type.touched&&r.f.gst_type.invalid)),t.xp6(3),t.Q6J("ngForOf",r.gstType),t.xp6(1),t.Q6J("ngIf",r.gst_type&&r.gst_type.invalid&&r.gst_type.touched),t.xp6(1),t.Q6J("ngIf","UnRegistered"!==r.selectedGstType),t.xp6(5),t.Q6J("ngClass",t.VKq(61,m,r.f.pan_no.touched&&r.f.pan_no.invalid)),t.xp6(1),t.Q6J("ngIf",r.pan_no&&r.pan_no.invalid&&r.pan_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(63,m,r.f.credit_limit.touched&&r.f.credit_limit.invalid)),t.xp6(1),t.Q6J("ngIf",r.credit_limit&&r.credit_limit.invalid&&r.credit_limit.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(65,m,r.f.remark.touched&&r.f.remark.invalid)),t.xp6(1),t.Q6J("ngIf",r.remark&&r.remark.invalid&&r.remark.touched),t.xp6(11),t.Q6J("ngForOf",r.getAddresss().controls),t.xp6(12),t.Q6J("ngForOf",r.getBanks().controls),t.xp6(5),t.Q6J("ngClass",t.VKq(67,m,r.f.payment_terms.touched&&r.f.payment_terms.invalid)),t.xp6(3),t.Q6J("ngForOf",r.paymentTerms),t.xp6(1),t.Q6J("ngIf",r.payment_terms&&r.payment_terms.invalid&&r.payment_terms.touched),t.xp6(15),t.Q6J("ngIf",r.opening_balance_type&&r.opening_balance_type.invalid&&r.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(69,m,r.f.opening_balance.touched&&r.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",r.opening_balance&&r.opening_balance.invalid&&r.opening_balance.touched),t.xp6(4),t.Q6J("id","checkboxTax-"),t.xp6(1),t.Q6J("for","checkboxTax-"),t.xp6(3),t.Q6J("id","checkboxMeasure-"),t.xp6(1),t.Q6J("for","checkboxMeasure-"),t.xp6(3),t.Q6J("ngIf",!r.loader),t.xp6(1),t.Q6J("ngIf",r.loader))},dependencies:[g.mk,g.sg,g.O5,g.PC,f.yS,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u,s.x0,s.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.gst-type-wrapper[_ngcontent-%COMP%]{border-radius:5px 0 0 5px}.address-title[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700}.addMore-btn[_ngcontent-%COMP%]{background-color:#ff9f43;color:#fff;border-radius:5px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;padding:0 12px;cursor:pointer}.plus-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 5px 0 0}.gst-field-wrapper[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}.opening-balance-select-wrapper[_ngcontent-%COMP%]{padding:10px;border-radius:5px 0 0 5px!important}.opening-input-field[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}"]}),a})();var _t=c(30597);const E=JSON.parse(localStorage.getItem("auth"));let ht;E&&E.map(p=>{"contacts"===p.content_type.app_label&&"transport"===p.content_type.model&&"change_transport"==p.codename&&(ht=p.codename)});const mt=[{path:"",component:ct,canActivate:[_t.l],data:{allowedRoles:["change_transport"]}}];let gt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(mt),f.Bz]}),a})(),vt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,gt,s.u5,s.UX]}),a})()},30597:($,b,c)=>{c.d(b,{l:()=>N});var g=c(94650),f=c(4392),s=c(97185),t=c(42917),y=c(80927);let N=(()=>{class n{constructor(l,x,C,U,I){this.router=l,this.Arout=x,this.toastr=C,this.profileService=U,this.coreService=I}canActivate(l,x){const C=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(U=>{this.userDetails=U,this.permissions=this.userDetails?.permission}),C){const U=l.data.allowedRoles,I=C.some(Z=>U.includes(Z.codename));if(this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(Z);const q=Z?.permission,k=this.profileService.getUserDetails();(!k||k.length!==q.length)&&(this.profileService.setUserPermission(q),window.location.reload())}),I)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(g.LFG(f.F0),g.LFG(f.gz),g.LFG(s._W),g.LFG(t.J),g.LFG(y.p))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);