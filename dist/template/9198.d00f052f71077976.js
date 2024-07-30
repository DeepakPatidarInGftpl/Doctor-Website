"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9198],{25062:($,U,c)=>{c.d(U,{y:()=>t});var m=c(92340),v=c(94650),s=c(80529);let t=(()=>{class f{constructor(r){this.http=r,this.apiUrl=`${m.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,a)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,a){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${a}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,a)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,a){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${a}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,a)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,a){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${a}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,a)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,a){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${a}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,a)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,a){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${a}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,a)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,a){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${a}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,a)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,a){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${a}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,a){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${a}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,a)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,a){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${a}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,a)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,a){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${a}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,a)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,a){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${a}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}}return f.\u0275fac=function(r){return new(r||f)(v.LFG(s.eN))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},9198:($,U,c)=>{c.r(U),c.d(U,{UpdateTransportModule:()=>mt});var m=c(36895),v=c(4392),s=c(24006),t=c(94650),f=c(25062),N=c(97185),r=c(80927);function a(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Name "),t.qZA())}function l(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Company Name "),t.qZA())}function I(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your 10 Digits Mobile Number"),t.qZA())}function Z(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your 11 Digits Telephone Number"),t.qZA())}function y(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your 10 Digits Whatsapp Number"),t.qZA())}function b(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter Valid Email"),t.qZA())}function C(i,p){if(1&i&&(t.TgZ(0,"span",56),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.dateError)}}function q(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function x(i,p){if(1&i&&(t.TgZ(0,"span",56),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.dateError)}}function E(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function S(i,p){if(1&i&&(t.TgZ(0,"option",57),t._uU(1),t.qZA()),2&i){const e=p.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.hij(" ",null==e?null:e.title,"")}}function w(i,p){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Select GST Type"),t.qZA())}function J(i,p){1&i&&(t.TgZ(0,"span",60),t._uU(1," Enter your GST "),t.qZA())}const h=function(i){return{"is-invalid":i}};function B(i,p){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"input",59),t.YNc(2,J,2,0,"span",46),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,h,e.f.gstin.touched&&e.f.gstin.invalid)),t.xp6(1),t.Q6J("ngIf",e.gstin&&e.gstin.invalid&&e.gstin.touched)}}function Q(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Pan Number"),t.qZA())}function P(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Credit Limit"),t.qZA())}function O(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter Remark"),t.qZA())}function D(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"span",77),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,d=t.oxw();return t.KtG(d.removeAddress(o))}),t.O4$(),t.TgZ(1,"svg",78),t._UZ(2,"path",79)(3,"path",80),t.qZA()()}}function M(i,p){if(1&i&&(t.TgZ(0,"option",81),t._uU(1),t.qZA()),2&i){const e=p.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.country_name," ")}}function Y(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Select Country"),t.qZA())}function R(i,p){if(1&i&&(t.TgZ(0,"option",81),t._uU(1),t.qZA()),2&i){const e=p.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij("",e.state," ")}}function G(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Select State"),t.qZA())}function V(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Please Select Country"),t.qZA())}function L(i,p){if(1&i&&(t.TgZ(0,"option",81),t._uU(1),t.qZA()),2&i){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.hij("",null==e?null:e.city," ")}}function K(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Select City"),t.qZA())}function z(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Please Select State"),t.qZA())}function W(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your 6 Digits Pincode Number"),t.qZA())}function H(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",61)(1,"div",62),t.YNc(2,D,4,0,"span",63),t.qZA(),t.TgZ(3,"div",64)(4,"div",65)(5,"div",7)(6,"label"),t._uU(7,"Address Line 1"),t.qZA(),t._UZ(8,"input",66),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"label"),t._uU(12,"Address Line 2"),t.qZA(),t._UZ(13,"input",67),t.qZA()(),t.TgZ(14,"div",6)(15,"div",7)(16,"label"),t._uU(17,"Select Country*"),t.qZA(),t.TgZ(18,"select",68,69),t.NdJ("change",function(){const d=t.CHM(e).index,_=t.MAs(19),u=t.oxw();return t.KtG(u.selectState(_.value,d))}),t.TgZ(20,"option",40),t._uU(21,"Select Country"),t.qZA(),t.YNc(22,M,2,2,"option",41),t.qZA(),t.YNc(23,Y,2,0,"span",9),t.qZA()(),t.TgZ(24,"div",6)(25,"div",7)(26,"label"),t._uU(27,"Select State*"),t.qZA(),t.TgZ(28,"select",70,71),t.NdJ("change",function(){const d=t.CHM(e).index,_=t.MAs(29),u=t.oxw();return t.KtG(u.selectCity(_.value,d))}),t.TgZ(30,"option",40),t._uU(31,"Select State"),t.qZA(),t.YNc(32,R,2,2,"option",41),t.qZA(),t.YNc(33,G,2,0,"span",9),t.YNc(34,V,2,0,"span",9),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38,"Select City*"),t.qZA(),t.TgZ(39,"select",72)(40,"option",40),t._uU(41,"Select City"),t.qZA(),t.YNc(42,L,2,2,"option",41),t.qZA(),t.YNc(43,K,2,0,"span",9),t.YNc(44,z,2,0,"span",9),t.qZA()(),t.TgZ(45,"div",6)(46,"div",7)(47,"label"),t._uU(48,"Pincode"),t.qZA(),t._UZ(49,"input",73),t.YNc(50,W,2,0,"span",9),t.qZA()(),t.TgZ(51,"div",6)(52,"div",7)(53,"label"),t._uU(54,"Select Address Type"),t.qZA(),t.TgZ(55,"select",74)(56,"option",40),t._uU(57,"Select Address Type"),t.qZA(),t.TgZ(58,"option",75),t._uU(59,"Shipping"),t.qZA(),t.TgZ(60,"option",76),t._uU(61,"Billing"),t.qZA()()()()()()}if(2&i){const e=p.index,n=t.oxw();t.xp6(2),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("formGroupName",e),t.xp6(19),t.Q6J("ngForOf",n.country),t.xp6(1),t.Q6J("ngIf",n.countryy(e).invalid&&n.countryy(e).touched),t.xp6(9),t.Q6J("ngForOf",n.state[e]),t.xp6(1),t.Q6J("ngIf",n.statee(e).invalid&&n.statee(e).touched&&(null==n.state?null:n.state.length)>0),t.xp6(1),t.Q6J("ngIf",n.statee(e).invalid&&n.statee(e).touched&&(null==n.state?null:n.state.length)<=0),t.xp6(8),t.Q6J("ngForOf",n.city[e]),t.xp6(1),t.Q6J("ngIf",n.cityy(e).invalid&&n.cityy(e).touched&&(null==n.city[e]?null:n.city[e].length)>0),t.xp6(1),t.Q6J("ngIf",n.cityy(e).invalid&&n.cityy(e).touched&&(null==n.city[e]?null:n.city[e].length)<=0),t.xp6(6),t.Q6J("ngIf",n.pincode(e).invalid&&n.pincode(e).touched)}}function j(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"span",77),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,d=t.oxw();return t.KtG(d.removeBank(o))}),t.O4$(),t.TgZ(1,"svg",78),t._UZ(2,"path",79)(3,"path",80),t.qZA()()}}function X(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter Bank Holder name"),t.qZA())}function tt(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Bank Name"),t.qZA())}function et(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your Account No."),t.qZA())}function nt(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Enter your IFSC Code"),t.qZA())}function rt(i,p){if(1&i&&(t.TgZ(0,"div",61)(1,"div",62),t.YNc(2,j,4,0,"span",63),t.qZA(),t.TgZ(3,"div",64)(4,"div",6)(5,"div",7)(6,"label"),t._uU(7,"Bank Holder Name*"),t.qZA(),t._UZ(8,"input",82),t.YNc(9,X,2,0,"span",9),t.qZA()(),t.TgZ(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Bank Name*"),t.qZA(),t._UZ(14,"input",83),t.YNc(15,tt,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Branch"),t.qZA(),t._UZ(20,"input",84),t.qZA()(),t.TgZ(21,"div",6)(22,"div",7)(23,"label"),t._uU(24,"Account No.*"),t.qZA(),t._UZ(25,"input",85),t.YNc(26,et,2,0,"span",9),t.qZA()(),t.TgZ(27,"div",65)(28,"div",7)(29,"label"),t._uU(30,"IFSC Code*"),t.qZA(),t._UZ(31,"input",86),t.YNc(32,nt,2,0,"span",9),t.qZA()()()()),2&i){const e=p.index,n=t.oxw();let o,d,_,u;t.xp6(2),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("formGroupName",e),t.xp6(6),t.Q6J("ngIf",(null==(o=n.getBankHolderName(e))?null:o.invalid)&&(null==(o=n.getBankHolderName(e))?null:o.touched)),t.xp6(6),t.Q6J("ngIf",(null==(d=n.getBankName(e))?null:d.invalid)&&(null==(d=n.getBankName(e))?null:d.touched)),t.xp6(11),t.Q6J("ngIf",(null==(_=n.getAccountNo(e))?null:_.invalid)&&(null==(_=n.getAccountNo(e))?null:_.touched)),t.xp6(6),t.Q6J("ngIf",(null==(u=n.getIfscCode(e))?null:u.invalid)&&(null==(u=n.getIfscCode(e))?null:u.touched))}}function at(i,p){if(1&i&&(t.TgZ(0,"option",81),t._uU(1),t.qZA()),2&i){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function it(i,p){1&i&&(t.TgZ(0,"span",56),t._uU(1,"Select Payment Terms"),t.qZA())}function st(i,p){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Select Balance Type"),t.qZA())}function ot(i,p){1&i&&(t.TgZ(0,"span",60),t._uU(1," Enter your Balance"),t.qZA())}function pt(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",87),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(1,"Submit"),t.qZA()}}function lt(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"button",88),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._UZ(1,"span",89),t._uU(2,"\xa0 Submit"),t.qZA()}}let dt=(()=>{class i{constructor(e,n,o,d,_,u){this.fb=e,this.contactService=n,this.toastr=o,this.router=d,this.Arout=_,this.coreService=u,this.dateError=null,this.country=[],this.state=[],this.city=[],this.loader=!1}get f(){return this.transportForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.transportForm=this.fb.group({login_access:new s.NI(""),name:new s.NI("",[s.kI.required]),company_name:new s.NI(""),mobile_no:new s.NI("",[s.kI.required,s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),telephone_no:new s.NI(""),whatsapp_no:new s.NI("",[s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),email:new s.NI("",s.kI.email),remark:new s.NI(""),date_of_birth:new s.NI(""),anniversary_date:new s.NI(""),gst_type:new s.NI(""),gstin:new s.NI("",[s.kI.required,s.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),pan_no:new s.NI("",[s.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),apply_tds:new s.NI(""),credit_limit:new s.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),payment_terms:new s.NI(""),opening_balance:new s.NI(0,[s.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new s.NI("",[s.kI.required])}),this.addAddress(),this.addBank(),this.getCountry(),this.getgstType(),this.getPaymentTerms(),this.contactService.getTransportById(this.id).subscribe(e=>{this.getRes=e;const n=Object.keys(e).reduce((o,d)=>(null!==e[d]&&""!==e[d]&&"null"!==e[d]&&(o[d]=e[d]),o),{});this.transportForm.patchValue(n),this.selectedGstType=n?.gst_type,this.transportForm.get("payment_terms")?.patchValue(null==this.getRes?.payment_terms?"":this.getRes?.payment_terms?.id),this.transportForm.get("date_of_birth")?.patchValue(this.getRes?.date_of_birth??""),this.transportForm.get("anniversary_date")?.patchValue(this.getRes?.anniversary_date??""),this.transportForm.get("credit_limit")?.patchValue(this.getRes?.credit_limit??""),this.transportForm.get("opening_balance")?.patchValue(this.getRes?.opening_balance??""),this.transportForm.setControl("address",this.updateAddress(this.getRes.address)),this.transportForm.setControl("bank_id",this.udateBank(this.getRes.bank_id))})}updateAddress(e){const n=new s.Oe([]);return e.forEach(o=>{const d=this.fb.group({address_line_1:o?.address_line_1??"",address_line_2:o?.address_line_2??"",country:o?.country.id,state:null,city:null,pincode:o?.pincode??"",address_type:o?.address_type??""});n.push(d)}),n.controls.forEach((o,d)=>{const _=o.get("country").value;o.get("country").valueChanges.subscribe(g=>{this.selectedState(g,d),o.get("state").setValue(null),o.get("city").setValue(null)}),o.get("state").valueChanges.subscribe(g=>{this.selectedCity(g,d),o.get("city").setValue(null)});const u=e[d].state.id,T=e[d].city.id;o.get("state").setValue(u),o.get("city").setValue(T),this.selectedState(_,d),this.selectedCity(u,d)}),n}udateBank(e){let n=new s.Oe([]);return e.forEach(o=>{n.push(this.fb.group({bank_ifsc_code:o.bank_ifsc_code,bank_name:o.bank_name,branch_name:o.branch_name,account_no:o.account_no,account_holder_name:o.account_holder_name}))}),n}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(e=>{this.paymentTerms=e})}getgstType(){this.contactService.getTypeOfGst().subscribe(e=>{this.gstType=e})}addressAdd(){return this.fb.group({address_line_1:"",address_line_2:"",country:new s.NI("23",[s.kI.required]),state:new s.NI("28",[s.kI.required]),city:new s.NI("42",[s.kI.required]),pincode:new s.NI("841226",[s.kI.maxLength(6),s.kI.minLength(6),s.kI.pattern(/^[0-9]*$/)]),address_type:""})}getAddresss(){return this.transportForm.get("address")}addAddress(){const e=this.getAddresss();this.getAddresss().push(this.addressAdd());const n=e.length-1;this.selectState("23",n).then(()=>{this.selectCity("28",n)})}removeAddress(e){this.getAddresss().removeAt(e)}bankAdd(){return this.fb.group({bank_ifsc_code:new s.NI("",[s.kI.required]),bank_name:new s.NI("",[s.kI.required]),branch_name:new s.NI(""),account_no:new s.NI("",s.kI.required),account_holder_name:new s.NI("",[s.kI.required])})}getBanks(){return this.transportForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(e){this.getBanks().removeAt(e)}onGstTypeChange(e){this.selectedGstType=e.target.value}getCountry(){this.coreService.countryList().subscribe(e=>{this.country=e})}selectState(e,n){return new Promise((o,d)=>{const _=this.getAddresss(),u=_.at(n).get("country");_.at(n).get("pincode").setValue("841226"),u.setValue(e),this.coreService.getStateByCountryId(e).subscribe(g=>{this.state[n]=g,_.at(n).get("state").setValue("28"),this.city[n]=[],o()},g=>d(g))})}selectedState(e,n){e&&this.coreService.getStateByCountryId(e).subscribe(o=>{this.state[n]=o})}selectCity(e,n){const o=this.getAddresss();o.at(n).get("state").setValue(e),this.coreService.getCityByStateId(e).subscribe(_=>{this.city[n]=_,setTimeout(()=>{o.at(n).get("city").setValue("42")},100)})}selectedCity(e,n){e&&this.coreService.getCityByStateId(e).subscribe(o=>{this.city[n]=o})}submit(){let e=new FormData;e.append("login_access",this.transportForm.get("login_access")?.value),e.append("name",this.transportForm.get("name")?.value),e.append("company_name",this.transportForm.get("company_name")?.value),e.append("mobile_no",this.transportForm.get("mobile_no")?.value),e.append("telephone_no",this.transportForm.get("telephone_no")?.value),e.append("whatsapp_no",this.transportForm.get("whatsapp_no")?.value),e.append("email",this.transportForm.get("email")?.value),e.append("remark",this.transportForm.get("remark")?.value),e.append("date_of_birth",this.transportForm.get("date_of_birth")?.value),e.append("anniversary_date",this.transportForm.get("anniversary_date")?.value),e.append("gst_type",this.transportForm.get("gst_type")?.value),e.append("gstin","UnRegistered"!==this.selectedGstType?this.transportForm.get("gstin")?.value:""),e.append("pan_no",this.transportForm.get("pan_no")?.value),e.append("apply_tds",this.transportForm.get("apply_tds")?.value),e.append("credit_limit",this.transportForm.get("credit_limit")?.value),e.append("payment_terms",this.transportForm.get("payment_terms")?.value),e.append("opening_balance",this.transportForm.get("opening_balance")?.value),e.append("opening_balance_type",this.transportForm.get("opening_balance_type")?.value);const n=this.transportForm.get("address"),o=[];n.controls.forEach(u=>{const T=u,g={};Object.keys(T.controls).forEach(A=>{g[A]=T.controls[A].value}),o.push(g)}),e.append("address",JSON.stringify(o));const d=this.transportForm.get("bank_id"),_=[];d.controls.forEach(u=>{const T=u,g={};Object.keys(T.controls).forEach(A=>{g[A]=T.controls[A].value}),_.push(g)}),e.append("bank_id",JSON.stringify(_)),this.transportForm.valid?(this.loader=!0,this.contactService.updateTransport(e,this.id).subscribe(u=>{this.addRes=u,this.addRes.success?(this.toastr.success(this.addRes.msg),this.transportForm.reset(),this.router.navigate(["//contacts/transport"])):(this.loader=!1,this.toastr.error(this.addRes?.opening_balance[0]),this.toastr.error(this.addRes.opening_balance_type[0]),this.addRes?.email&&this.toastr.error(this.addRes?.error?.email[0]))},u=>{this.loader=!1,u.error.msg?this.toastr.error(u.error.msg):u.error?(this.toastr.error(u.error?.opening_balance[0]),this.toastr.error(u.error?.email[0])):(u.error.dob||u.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.loader=!1,this.transportForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get login_access(){return this.transportForm.get("login_access")}get name(){return this.transportForm.get("name")}get company_name(){return this.transportForm.get("company_name")}get dob(){return this.transportForm.get("date_of_birth")}get mobile(){return this.transportForm.get("mobile_no")}get telephone_no(){return this.transportForm.get("telephone_no")}get whatsapp_no(){return this.transportForm.get("whatsapp_no")}get anniversary(){return this.transportForm.get("anniversary_date")}get email(){return this.transportForm.get("email")}get remark(){return this.transportForm.get("remark")}get gst_type(){return this.transportForm.get("gst_type")}get gstin(){return this.transportForm.get("gstin")}get opening_balance(){return this.transportForm.get("opening_balance")}get supplier_type(){return this.transportForm.get("supplier_type")}get address(){return this.transportForm.get("address")}get pan_no(){return this.transportForm.get("pan_no")}get payment_terms(){return this.transportForm.get("payment_terms")}get apply_tds(){return this.transportForm.get("apply_tds")}get credit_limit(){return this.transportForm.get("credit_limit")}countryy(e){return this.getAddresss().controls[e].get("country")}statee(e){return this.getAddresss().controls[e].get("state")}cityy(e){return this.getAddresss().controls[e].get("city")}pincode(e){return this.getAddresss().controls[e].get("pincode")}getBankHolderName(e){return this.getBanks().controls[e].get("account_holder_name")}getAccountNo(e){return this.getBanks().controls[e].get("account_no")}getIfscCode(e){return this.getBanks().controls[e].get("bank_ifsc_code")}getBankName(e){return this.getBanks().controls[e].get("bank_name")}get opening_balance_type(){return this.transportForm.get("opening_balance_type")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(f.y),t.Y36(N._W),t.Y36(v.F0),t.Y36(v.gz),t.Y36(r.p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-update-transport"]],decls:155,vars:72,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name","placeholder","Enter Name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","company_name","placeholder","Enter Company Name","id","company_name",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Mobile No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass"],["type","text","formControlName","telephone_no","placeholder","Enter Telephone No.","maxlength","11","minlength","11","id","telephone_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","placeholder","Enter Whatsapp No.","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","date","formControlName","date_of_birth","placeholder","Select Date of Birth","id","date_of_birth",3,"ngClass"],["type","date","formControlName","anniversary_date","placeholder","Anniversary","id","anniversary_date",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],[3,"ngClass"],["formControlName","gst_type","id","gst_type",1,"border","hov",3,"ngClass","change"],["value","","selected","","disabled","",1,"unhov"],["class","unhov",3,"value",4,"ngFor","ngForOf"],["class","text-danger d-block",4,"ngIf"],[4,"ngIf"],["type","text","formControlName","pan_no","id","pan_no","placeholder","Enter Pan Number",3,"ngClass"],["type","text","formControlName","credit_limit","placeholder","Enter Credit Limit","id","credit_limit",3,"ngClass"],["type","text","formControlName","remark","placeholder","Enter Remark","id","remark",3,"ngClass"],[1,"address-details-wrapper"],[1,"address-title"],[1,"w-100","text-right","my-3"],[1,"p-0","border-0",3,"click"],[1,"addMore-btn"],[1,"plus-icon"],["formArrayName","address",1,"mb-3","pb-3"],["style","border: 1px solid rgba(145, 158, 171, 0.32); margin-top: 10px;",4,"ngFor","ngForOf"],[1,"bank-details-wrapper"],["formArrayName","bank_id"],["formControlName","payment_terms","id","payment_terms",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","opening_balance_type","id","opening_balance_type",1,"border","hov","opening-balance-select-wrapper"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["type","text","formControlName","opening_balance","id","opening_balance",1,"opening-input-field",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["type","checkbox","formControlName","apply_tds",3,"id"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",3,"click",4,"ngIf"],["routerLink","//contacts/transport",1,"btn","btn-cancel"],[1,"text-danger"],[1,"unhov",3,"value"],[1,"text-danger","d-block"],["type","text","formControlName","gstin","id","gstin","placeholder","Enter GSTIN",3,"ngClass"],[1,"text-danger","ml-5","pl-5"],[2,"border","1px solid rgba(145, 158, 171, 0.32)","margin-top","10px"],[1,"col-12","d-flex","align-items-center","justify-content-end","mt-2"],["class","btn me-2","style","color: red;",3,"click",4,"ngIf"],[1,"row","m-2",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1","placeholder","Enter Address Line 1"],["type","text","formControlName","address_line_2","placeholder","Enter Address Line 2"],["formControlName","country","id","country",3,"change"],["countryValue",""],["formControlName","state",3,"change"],["stateValue",""],["formControlName","city","id","city"],["type","text","formControlName","pincode","placeholder","Enter Pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],[1,"btn","me-2",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","28px","height","28px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[3,"value"],["type","text","formControlName","account_holder_name","placeholder","Enter Bank Holder Name"],["type","text","formControlName","bank_name","placeholder","Enter Bank Name"],["type","text","formControlName","branch_name","placeholder","Enter Branch Name"],["type","text","formControlName","account_no","placeholder","Enter Account No."],["type","text","formControlName","bank_ifsc_code","placeholder","Enter IFSC Code"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Transport"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Transport "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13," Name*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,a,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Company Name"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,l,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Mobile No*"),t.qZA(),t._UZ(26,"input",11),t.YNc(27,I,2,0,"span",9),t.qZA()(),t.TgZ(28,"div",6)(29,"div",7)(30,"label"),t._uU(31,"Telephone No."),t.qZA(),t._UZ(32,"input",12),t.YNc(33,Z,2,0,"span",9),t.qZA()(),t.TgZ(34,"div",6)(35,"div",7)(36,"label"),t._uU(37,"Whatsapp No."),t.qZA(),t._UZ(38,"input",13),t.YNc(39,y,2,0,"span",9),t.qZA()(),t.TgZ(40,"div",6)(41,"div",7)(42,"label"),t._uU(43,"Email"),t.qZA(),t._UZ(44,"input",14),t.YNc(45,b,2,0,"span",9),t.qZA()(),t.TgZ(46,"div",6)(47,"div",7)(48,"label"),t._uU(49,"Date of Birth"),t.qZA(),t._UZ(50,"input",15),t.YNc(51,C,2,1,"span",9),t.YNc(52,q,2,0,"span",9),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Anniversary"),t.qZA(),t._UZ(57,"input",16),t.YNc(58,x,2,1,"span",9),t.YNc(59,E,2,0,"span",9),t.qZA()(),t.TgZ(60,"div",6)(61,"div",17)(62,"div",18)(63,"label"),t._uU(64,"GSTIN*"),t.qZA(),t.TgZ(65,"div",19)(66,"div",20)(67,"select",21),t.NdJ("change",function(d){return n.onGstTypeChange(d)}),t.TgZ(68,"option",22),t._uU(69,"GST type"),t.qZA(),t.YNc(70,S,2,2,"option",23),t.qZA(),t.YNc(71,w,2,0,"span",24),t.qZA(),t.YNc(72,B,3,4,"div",25),t.qZA()()()(),t.TgZ(73,"div",6)(74,"div",7)(75,"label"),t._uU(76,"Pan Number"),t.qZA(),t._UZ(77,"input",26),t.YNc(78,Q,2,0,"span",9),t.qZA()(),t.TgZ(79,"div",6)(80,"div",7)(81,"label"),t._uU(82,"Credit Limit"),t.qZA(),t._UZ(83,"input",27),t.YNc(84,P,2,0,"span",9),t.qZA()(),t.TgZ(85,"div",6)(86,"div",7)(87,"label"),t._uU(88,"Remark"),t.qZA(),t._UZ(89,"input",28),t.YNc(90,O,2,0,"span",9),t.qZA()(),t.TgZ(91,"div",29)(92,"h4",30),t._uU(93,"Address Details"),t.qZA(),t.TgZ(94,"div",31)(95,"button",32),t.NdJ("click",function(){return n.addAddress()}),t.TgZ(96,"p",33)(97,"span",34),t._uU(98,"+"),t.qZA(),t._uU(99," Add More Address"),t.qZA()()(),t.TgZ(100,"div",35),t.YNc(101,H,62,11,"div",36),t.qZA()(),t.TgZ(102,"div",37)(103,"h4",30),t._uU(104,"Bank Details"),t.qZA(),t.TgZ(105,"div",31)(106,"button",32),t.NdJ("click",function(){return n.addBank()}),t.TgZ(107,"p",33)(108,"span",34),t._uU(109,"+"),t.qZA(),t._uU(110," Add More Banks "),t.qZA()()(),t.TgZ(111,"div",38),t.YNc(112,rt,33,6,"div",36),t.qZA()(),t.TgZ(113,"div",6)(114,"div",7)(115,"label"),t._uU(116,"Select Payment Terms"),t.qZA(),t.TgZ(117,"select",39)(118,"option",40),t._uU(119,"Select Payment Terms"),t.qZA(),t.YNc(120,at,2,2,"option",41),t.qZA(),t.YNc(121,it,2,0,"span",9),t.qZA()(),t.TgZ(122,"div",6)(123,"div",17)(124,"div",18)(125,"label"),t._uU(126,"Opening Balance*"),t.qZA(),t.TgZ(127,"div",19)(128,"div")(129,"select",42)(130,"option",22),t._uU(131,"Balance type"),t.qZA(),t.TgZ(132,"option",43),t._uU(133,"Cr"),t.qZA(),t.TgZ(134,"option",44),t._uU(135,"Dr"),t.qZA()(),t.YNc(136,st,2,0,"span",24),t.qZA(),t.TgZ(137,"div"),t._UZ(138,"input",45),t.YNc(139,ot,2,0,"span",46),t.qZA()()()()(),t.TgZ(140,"div",47)(141,"div",48)(142,"div",49),t._UZ(143,"input",50),t.TgZ(144,"label",51),t._uU(145,"Login Access"),t.qZA()(),t.TgZ(146,"div",49),t._UZ(147,"input",52),t.TgZ(148,"label",51),t._uU(149,"Apply TDS"),t.qZA()()()(),t.TgZ(150,"div",18),t.YNc(151,pt,2,0,"button",53),t.YNc(152,lt,3,0,"button",54),t.TgZ(153,"a",55),t._uU(154,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",n.transportForm),t.xp6(6),t.Q6J("ngClass",t.VKq(44,h,n.f.name.touched&&n.f.name.invalid)),t.xp6(1),t.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(46,h,n.f.company_name.touched&&n.f.company_name.invalid)),t.xp6(1),t.Q6J("ngIf",n.company_name&&n.company_name.invalid&&n.company_name.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(48,h,n.f.mobile_no.touched&&n.f.mobile_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.mobile&&n.mobile.invalid&&n.mobile.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,h,n.f.telephone_no.touched&&n.f.telephone_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.telephone_no&&n.telephone_no.invalid&&n.telephone_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(52,h,n.f.whatsapp_no.touched&&n.f.whatsapp_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.whatsapp_no&&n.whatsapp_no.invalid&&n.whatsapp_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(54,h,n.f.email.touched&&n.f.email.invalid)),t.xp6(1),t.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(56,h,n.f.date_of_birth.touched&&n.f.date_of_birth.invalid)),t.xp6(1),t.Q6J("ngIf",n.dateError),t.xp6(1),t.Q6J("ngIf",n.dob&&n.dob.invalid&&n.dob.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(58,h,n.f.anniversary_date.touched&&n.f.anniversary_date.invalid)),t.xp6(1),t.Q6J("ngIf",n.dateError),t.xp6(1),t.Q6J("ngIf",n.anniversary&&n.anniversary.invalid&&n.anniversary.touched),t.xp6(7),t.Q6J("ngClass","UnRegistered"===n.selectedGstType?"w-100":""),t.xp6(1),t.Q6J("ngClass",t.VKq(60,h,n.f.gst_type.touched&&n.f.gst_type.invalid)),t.xp6(3),t.Q6J("ngForOf",n.gstType),t.xp6(1),t.Q6J("ngIf",n.gst_type&&n.gst_type.invalid&&n.gst_type.touched),t.xp6(1),t.Q6J("ngIf","UnRegistered"!==n.selectedGstType),t.xp6(5),t.Q6J("ngClass",t.VKq(62,h,n.f.pan_no.touched&&n.f.pan_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.pan_no&&n.pan_no.invalid&&n.pan_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(64,h,n.f.credit_limit.touched&&n.f.credit_limit.invalid)),t.xp6(1),t.Q6J("ngIf",n.credit_limit&&n.credit_limit.invalid&&n.credit_limit.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(66,h,n.f.remark.touched&&n.f.remark.invalid)),t.xp6(1),t.Q6J("ngIf",n.remark&&n.remark.invalid&&n.remark.touched),t.xp6(11),t.Q6J("ngForOf",n.getAddresss().controls),t.xp6(11),t.Q6J("ngForOf",n.getBanks().controls),t.xp6(5),t.Q6J("ngClass",t.VKq(68,h,n.f.payment_terms.touched&&n.f.payment_terms.invalid)),t.xp6(3),t.Q6J("ngForOf",n.paymentTerms),t.xp6(1),t.Q6J("ngIf",n.payment_terms&&n.payment_terms.invalid&&n.payment_terms.touched),t.xp6(15),t.Q6J("ngIf",n.opening_balance_type&&n.opening_balance_type.invalid&&n.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(70,h,n.f.opening_balance.touched&&n.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",n.opening_balance&&n.opening_balance.invalid&&n.opening_balance.touched),t.xp6(4),t.Q6J("id","checkboxTax-"),t.xp6(1),t.Q6J("for","checkboxTax-"),t.xp6(3),t.Q6J("id","checkboxMeasure-"),t.xp6(1),t.Q6J("for","checkboxMeasure-"),t.xp6(3),t.Q6J("ngIf",!n.loader),t.xp6(1),t.Q6J("ngIf",n.loader))},dependencies:[m.mk,m.sg,m.O5,v.yS,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u,s.x0,s.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.gst-type-wrapper[_ngcontent-%COMP%]{border-radius:5px 0 0 5px}.address-title[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700}.addMore-btn[_ngcontent-%COMP%]{background-color:#ff9f43;color:#fff;border-radius:5px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;padding:0 12px;cursor:pointer}.plus-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 5px 0 0}.gst-field-wrapper[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}.opening-balance-select-wrapper[_ngcontent-%COMP%]{padding:10px;border-radius:5px 0 0 5px!important}.opening-input-field[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}"]}),i})();var ut=c(30597);const F=JSON.parse(localStorage.getItem("auth"));let ct;F&&F.map(p=>{"contacts"===p.content_type.app_label&&"transport"===p.content_type.model&&"change_transport"==p.codename&&(ct=p.codename)});const _t=[{path:"",component:dt,canActivate:[ut.l],data:{allowedRoles:["change_transport"]}}];let ht=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.Bz.forChild(_t),v.Bz]}),i})(),mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,ht,s.u5,s.UX]}),i})()},30597:($,U,c)=>{c.d(U,{l:()=>N});var m=c(94650),v=c(4392),s=c(97185),t=c(42917),f=c(80927);let N=(()=>{class r{constructor(l,I,Z,y,b){this.router=l,this.Arout=I,this.toastr=Z,this.profileService=y,this.coreService=b}canActivate(l,I){const Z=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(y=>{this.userDetails=y,this.permissions=this.userDetails?.permission}),Z){const y=l.data.allowedRoles;console.log(y,"allowedRoles");const b=Z.some(C=>y.includes(C.codename));if(console.log(b),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const q=C?.permission,x=this.profileService.getUserDetails();(!x||x.length!==q.length)&&(this.profileService.setUserPermission(q),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(l){return new(l||r)(m.LFG(v.F0),m.LFG(v.gz),m.LFG(s._W),m.LFG(t.J),m.LFG(f.p))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);