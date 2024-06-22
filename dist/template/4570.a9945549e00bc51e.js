"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4570],{25062:(k,b,c)=>{c.d(b,{y:()=>e});var _=c(92340),v=c(94650),s=c(80529);let e=(()=>{class f{constructor(r){this.http=r,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,i)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,i)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,i)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,i)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,i)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,i)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,i)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,i)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,i)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,i)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}}return f.\u0275fac=function(r){return new(r||f)(v.LFG(s.eN))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},64570:(k,b,c)=>{c.r(b),c.d(b,{UpdateDealerModule:()=>ve});var _=c(36895),v=c(89299),s=c(24006),e=c(94650),f=c(25062),C=c(97185),r=c(80927);function i(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Name "),e.qZA())}function p(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Company Name "),e.qZA())}function I(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your 10 Digits Mobile Number"),e.qZA())}function A(a,o){if(1&a&&(e.TgZ(0,"span",55),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.mobError)}}function U(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your 11 Digits Telephone Number"),e.qZA())}function T(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your 10 Digits Whatsapp Number"),e.qZA())}function N(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter Valid Email"),e.qZA())}function q(a,o){if(1&a&&(e.TgZ(0,"span",55),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function x(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function F(a,o){if(1&a&&(e.TgZ(0,"span",55),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function E(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function S(a,o){if(1&a&&(e.TgZ(0,"option",56),e._uU(1),e.qZA()),2&a){const n=o.$implicit;e.s9C("value",n.title),e.xp6(1),e.hij(" ",n.title,"")}}function w(a,o){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select GST Type"),e.qZA())}function J(a,o){1&a&&(e.TgZ(0,"span",58),e._uU(1," Enter your GST "),e.qZA())}function B(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Pan Number"),e.qZA())}function Q(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Credit Limit"),e.qZA())}function P(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter Remark"),e.qZA())}function O(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"span",75),e.NdJ("click",function(){e.CHM(n);const l=e.oxw().index,d=e.oxw();return e.KtG(d.removeAddress(l))}),e.O4$(),e.TgZ(1,"svg",76),e._UZ(2,"path",77)(3,"path",78),e.qZA()()}}function M(a,o){if(1&a&&(e.TgZ(0,"option",79),e._uU(1),e.qZA()),2&a){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.country_name," ")}}function Y(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Select Country"),e.qZA())}function R(a,o){if(1&a&&(e.TgZ(0,"option",79),e._uU(1),e.qZA()),2&a){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij("",n.state," ")}}function V(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Select State"),e.qZA())}function G(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Please Select Country"),e.qZA())}function L(a,o){if(1&a&&(e.TgZ(0,"option",79),e._uU(1),e.qZA()),2&a){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij("",n.city," ")}}function K(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Select city"),e.qZA())}function z(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Please Select State"),e.qZA())}function W(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function H(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"div",59)(1,"div",60),e.YNc(2,O,4,0,"span",61),e.qZA(),e.TgZ(3,"div",62)(4,"div",63)(5,"div",7)(6,"label"),e._uU(7,"Address Line 1"),e.qZA(),e._UZ(8,"input",64),e.qZA()(),e.TgZ(9,"div",6)(10,"div",7)(11,"label"),e._uU(12,"Address Line 2"),e.qZA(),e._UZ(13,"input",65),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Select Country*"),e.qZA(),e.TgZ(18,"select",66,67),e.NdJ("change",function(){const d=e.CHM(n).index,m=e.MAs(19),u=e.oxw();return e.KtG(u.selectState(m.value,d))}),e.TgZ(20,"option",41),e._uU(21,"Select Country"),e.qZA(),e.YNc(22,M,2,2,"option",42),e.qZA(),e.YNc(23,Y,2,0,"span",9),e.qZA()(),e.TgZ(24,"div",6)(25,"div",7)(26,"label"),e._uU(27,"Select State*"),e.qZA(),e.TgZ(28,"select",68,69),e.NdJ("change",function(){const d=e.CHM(n).index,m=e.MAs(29),u=e.oxw();return e.KtG(u.selectCity(m.value,d))}),e.TgZ(30,"option",41),e._uU(31,"Select State"),e.qZA(),e.YNc(32,R,2,2,"option",42),e.qZA(),e.YNc(33,V,2,0,"span",9),e.YNc(34,G,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Select City*"),e.qZA(),e.TgZ(39,"select",70)(40,"option",41),e._uU(41,"Select City"),e.qZA(),e.YNc(42,L,2,2,"option",42),e.qZA(),e.YNc(43,K,2,0,"span",9),e.YNc(44,z,2,0,"span",9),e.qZA()(),e.TgZ(45,"div",6)(46,"div",7)(47,"label"),e._uU(48,"Pincode"),e.qZA(),e._UZ(49,"input",71),e.YNc(50,W,2,0,"span",9),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7)(53,"label"),e._uU(54,"Select Address Type"),e.qZA(),e.TgZ(55,"select",72)(56,"option",41),e._uU(57,"Select Address Type"),e.qZA(),e.TgZ(58,"option",73),e._uU(59,"Shipping"),e.qZA(),e.TgZ(60,"option",74),e._uU(61,"Billing"),e.qZA()()()()()()}if(2&a){const n=o.index,t=e.oxw();e.xp6(2),e.Q6J("ngIf",n>0),e.xp6(1),e.Q6J("formGroupName",n),e.xp6(19),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy[n]&&t.countryy[n].invalid&&t.countryy[n].touched),e.xp6(9),e.Q6J("ngForOf",t.state[n]),e.xp6(1),e.Q6J("ngIf",t.statee(n)&&t.statee(n).invalid&&t.statee(n).touched&&(null==t.state[n]?null:t.state[n].length)>0),e.xp6(1),e.Q6J("ngIf",t.statee(n)&&t.statee(n).invalid&&t.statee(n).touched&&(null==t.state[n]?null:t.state[n].length)<=0),e.xp6(8),e.Q6J("ngForOf",t.city[n]),e.xp6(1),e.Q6J("ngIf",t.cityy(n)&&t.cityy(n).invalid&&t.cityy(n).touched&&(null==t.city[n]?null:t.city[n].length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy(n)&&t.cityy(n).invalid&&t.cityy(n).touched&&(null==t.city[n]?null:t.city[n].length)<=0),e.xp6(6),e.Q6J("ngIf",t.pincode(n)&&t.pincode(n).invalid&&t.pincode(n).touched)}}function j(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"span",75),e.NdJ("click",function(){e.CHM(n);const l=e.oxw().index,d=e.oxw();return e.KtG(d.removeBank(l))}),e.O4$(),e.TgZ(1,"svg",76),e._UZ(2,"path",77)(3,"path",78),e.qZA()()}}function X(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter Bank holder name"),e.qZA())}function ee(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Bank Name"),e.qZA())}function te(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Account No."),e.qZA())}function ne(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Enter your Ifsc code"),e.qZA())}function re(a,o){if(1&a&&(e.TgZ(0,"div",59)(1,"div",60),e.YNc(2,j,4,0,"span",61),e.qZA(),e.TgZ(3,"div",62)(4,"div",6)(5,"div",7)(6,"label"),e._uU(7,"Bank Holder Name*"),e.qZA(),e._UZ(8,"input",80),e.YNc(9,X,2,0,"span",9),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Bank Name*"),e.qZA(),e._UZ(14,"input",81),e.YNc(15,ee,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Branch"),e.qZA(),e._UZ(20,"input",82),e.qZA()(),e.TgZ(21,"div",6)(22,"div",7)(23,"label"),e._uU(24,"Account No*"),e.qZA(),e._UZ(25,"input",83),e.YNc(26,te,2,0,"span",9),e.qZA()(),e.TgZ(27,"div",63)(28,"div",7)(29,"label"),e._uU(30,"IFSC Code*"),e.qZA(),e._UZ(31,"input",84),e.YNc(32,ne,2,0,"span",9),e.qZA()()()()),2&a){const n=o.index,t=e.oxw();let l,d,m,u;e.xp6(2),e.Q6J("ngIf",n>0),e.xp6(1),e.Q6J("formGroupName",n),e.xp6(6),e.Q6J("ngIf",(null==(l=t.getBankHolderName(n))?null:l.invalid)&&(null==(l=t.getBankHolderName(n))?null:l.touched)),e.xp6(6),e.Q6J("ngIf",(null==(d=t.getBankName(n))?null:d.invalid)&&(null==(d=t.getBankName(n))?null:d.touched)),e.xp6(11),e.Q6J("ngIf",(null==(m=t.getAccountNo(n))?null:m.invalid)&&(null==(m=t.getAccountNo(n))?null:m.touched)),e.xp6(6),e.Q6J("ngIf",(null==(u=t.getIfscCode(n))?null:u.invalid)&&(null==(u=t.getIfscCode(n))?null:u.touched))}}function ae(a,o){if(1&a&&(e.TgZ(0,"option",79),e._uU(1),e.qZA()),2&a){const n=o.$implicit;e.s9C("value",null==n?null:n.id),e.xp6(1),e.hij("",null==n?null:n.title," ")}}function ie(a,o){1&a&&(e.TgZ(0,"span",55),e._uU(1,"Select Payment Terms"),e.qZA())}function se(a,o){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select Balance Type"),e.qZA())}function oe(a,o){1&a&&(e.TgZ(0,"span",58),e._uU(1," Enter your Balance"),e.qZA())}function le(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"button",85),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.submit())}),e._uU(1,"Submit"),e.qZA()}}function pe(a,o){if(1&a){const n=e.EpF();e.TgZ(0,"button",86),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.submit())}),e._UZ(1,"span",87),e._uU(2,"\xa0 Submit"),e.qZA()}}const h=function(a){return{"is-invalid":a}},de=function(a){return{border:a}};let ue=(()=>{class a{constructor(n,t,l,d,m,u){this.fb=n,this.contactService=t,this.toastr=l,this.router=d,this.coreService=m,this.Arout=u,this.dateError=null,this.country=[],this.state=[],this.city=[],this.loader=!1}get f(){return this.dealerForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.dealerForm=this.fb.group({login_access:new s.NI(""),name:new s.NI(""),company_name:new s.NI("",[s.kI.required]),mobile_no:new s.NI("",[s.kI.required,s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),telephone_no:new s.NI(""),whatsapp_no:new s.NI("",[s.kI.maxLength(10),s.kI.minLength(10),s.kI.pattern(/^[0-9]*$/)]),email:new s.NI("",[s.kI.email]),remark:new s.NI(""),date_of_birth:new s.NI(""),anniversary_date:new s.NI(""),gst_type:new s.NI(""),gstin:new s.NI("",[s.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),pan_no:new s.NI("",[s.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),apply_tds:new s.NI(""),credit_limit:new s.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),payment_terms:new s.NI(""),opening_balance:new s.NI(0,[s.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new s.NI("",[s.kI.required]),membership:new s.NI("")}),this.contactService.getDealerById(this.id).subscribe(n=>{this.getRes=n;const t=Object.keys(n).reduce((l,d)=>(null!==n[d]&&""!==n[d]&&"null"!==n[d]&&(l[d]=n[d]),l),{});this.dealerForm.patchValue(t),this.dealerForm.get("payment_terms")?.patchValue(null==this.getRes?.payment_terms?"":this.getRes?.payment_terms?.id),this.dealerForm.get("date_of_birth")?.patchValue(this.getRes?.date_of_birth??""),this.dealerForm.get("anniversary_date")?.patchValue(this.getRes?.anniversary_date??""),this.dealerForm.get("credit_limit")?.patchValue(this.getRes?.credit_limit??""),this.dealerForm.get("opening_balance")?.patchValue(this.getRes?.opening_balance??""),this.dealerForm.setControl("address",this.updateAddress(this.getRes?.address)),this.dealerForm.setControl("bank_id",this.udateBank(this.getRes?.bank_id))}),this.getgstType(),this.addAddress(),this.addBank(),this.getCountry(),this.getPaymentTerms()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(n=>{this.paymentTerms=n})}addressAdd(){return this.fb.group({address_line_1:"",address_line_2:"",country:new s.NI("23",[s.kI.required]),state:new s.NI("28",[s.kI.required]),city:new s.NI("42",[s.kI.required]),pincode:new s.NI("841226",[s.kI.maxLength(6),s.kI.minLength(6),s.kI.pattern(/^[0-9]*$/)]),address_type:""})}getAddresss(){return this.dealerForm.get("address")}addAddress(){const n=this.getAddresss();this.getAddresss().push(this.addressAdd());const t=n.length-1;this.selectState("23",t).then(()=>{this.selectCity("28",t)})}removeAddress(n){this.getAddresss().removeAt(n)}bankAdd(){return this.fb.group({bank_ifsc_code:new s.NI("",[s.kI.required]),bank_name:new s.NI("",[s.kI.required]),branch_name:new s.NI(""),account_no:new s.NI("",[s.kI.required,s.kI.pattern(/^[0-9]*$/)]),account_holder_name:new s.NI("",[s.kI.required])})}getBanks(){return this.dealerForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(n){this.getBanks().removeAt(n)}updateAddress(n){const t=new s.Oe([]);return n.forEach(l=>{const d=this.fb.group({address_line_1:l?.address_line_1??"",address_line_2:l?.address_line_2??"",country:l?.country.id,state:null,city:null,pincode:l?.pincode??"",address_type:l?.address_type??""});t.push(d)}),t.controls.forEach((l,d)=>{const m=l.get("country").value;l.get("country").valueChanges.subscribe(g=>{this.selectedState(g,d),l.get("state").setValue(null),l.get("city").setValue(null)}),l.get("state").valueChanges.subscribe(g=>{this.selectedCity(g,d),l.get("city").setValue(null)});const u=n[d].state.id,Z=n[d].city.id;l.get("state").setValue(u),l.get("city").setValue(Z),this.selectedState(m,d),this.selectedCity(u,d)}),t}udateBank(n){let t=new s.Oe([]);return n.forEach(l=>{t.push(this.fb.group({bank_ifsc_code:l.bank_ifsc_code,bank_name:l.bank_name,branch_name:l.branch_name,account_no:l.account_no,account_holder_name:l.account_holder_name}))}),t}getgstType(){this.contactService.getTypeOfGst().subscribe(n=>{this.gstType=n})}getCountry(){this.coreService.countryList().subscribe(n=>{this.country=n})}selectState(n,t){return new Promise((l,d)=>{const m=this.getAddresss(),u=m.at(t).get("country");m.at(t).get("pincode").setValue("841226"),u.setValue(n),this.coreService.getStateByCountryId(n).subscribe(g=>{this.state[t]=g,m.at(t).get("state").setValue("28"),this.city[t]=[],l()},g=>d(g))})}selectedState(n,t){n&&this.coreService.getStateByCountryId(n).subscribe(l=>{this.state[t]=l})}selectCity(n,t){const l=this.getAddresss();l.at(t).get("state").setValue(n),this.coreService.getCityByStateId(n).subscribe(m=>{this.city[t]=m,setTimeout(()=>{l.at(t).get("city").setValue("42")},100)})}selectedCity(n,t){n&&this.coreService.getCityByStateId(n).subscribe(l=>{this.city[t]=l})}submit(){let n=new FormData;n.append("login_access",this.dealerForm.get("login_access")?.value),n.append("name",this.dealerForm.get("name")?.value),n.append("company_name",this.dealerForm.get("company_name")?.value),n.append("mobile_no",this.dealerForm.get("mobile_no")?.value),n.append("telephone_no",this.dealerForm.get("telephone_no")?.value),n.append("whatsapp_no",this.dealerForm.get("whatsapp_no")?.value),n.append("email",this.dealerForm.get("email")?.value),n.append("remark",this.dealerForm.get("remark")?.value),n.append("date_of_birth",this.dealerForm.get("date_of_birth")?.value),n.append("anniversary_date",this.dealerForm.get("anniversary_date")?.value),n.append("gst_type",this.dealerForm.get("gst_type")?.value),n.append("gstin",this.dealerForm.get("gstin")?.value),n.append("pan_no",this.dealerForm.get("pan_no")?.value),n.append("apply_tds",this.dealerForm.get("apply_tds")?.value),n.append("credit_limit",this.dealerForm.get("credit_limit")?.value),n.append("payment_terms",this.dealerForm.get("payment_terms")?.value),n.append("opening_balance",this.dealerForm.get("opening_balance")?.value),n.append("opening_balance_type",this.dealerForm.get("opening_balance_type")?.value),n.append("membership",this.dealerForm.get("membership")?.value);const t=this.dealerForm.get("address"),l=[];t.controls.forEach(u=>{const Z=u,g={};Object.keys(Z.controls).forEach(y=>{const D=Z.controls[y];g[y]="state"===y||"city"===y||"country"===y?parseInt(D.value):D.value}),l.push(g)}),n.append("address",JSON.stringify(l));const d=this.dealerForm.get("bank_id"),m=[];d.controls.forEach(u=>{const Z=u,g={};Object.keys(Z.controls).forEach(y=>{g[y]=Z.controls[y].value}),m.push(g)}),n.append("bank_id",JSON.stringify(m)),this.dealerForm.valid?(this.loader=!0,this.contactService.updateDealer(n,this.id).subscribe(u=>{this.addRes=u,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.dealerForm.reset(),this.router.navigate(["//contacts/dealerList"])):(this.loader=!1,this.toastr.error(this.addRes?.opening_balance[0]),this.toastr.error(this.addRes?.error),this.addRes?.email&&this.toastr.error(this.addRes?.error?.email[0]))},u=>{this.loader=!1,u.error.msg?(this.toastr.error(u.error.msg),this.mobError=u.error.msg,setTimeout(()=>{this.mobError=""},5e3)):u.error?(this.toastr.error(u.error?.opening_balance[0]),this.toastr.error(u.error?.email[0])):(u.error.dob||u.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.dealerForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get login_access(){return this.dealerForm.get("login_access")}get name(){return this.dealerForm.get("name")}get company_name(){return this.dealerForm.get("company_name")}get dob(){return this.dealerForm.get("date_of_birth")}get mobile(){return this.dealerForm.get("mobile_no")}get telephone_no(){return this.dealerForm.get("telephone_no")}get whatsapp_no(){return this.dealerForm.get("whatsapp_no")}get anniversary(){return this.dealerForm.get("anniversary_date")}get email(){return this.dealerForm.get("email")}get remark(){return this.dealerForm.get("remark")}get gst_type(){return this.dealerForm.get("gst_type")}get gstin(){return this.dealerForm.get("gstin")}get opening_balance(){return this.dealerForm.get("opening_balance")}get supplier_type(){return this.dealerForm.get("supplier_type")}get address(){return this.dealerForm.get("address")}get opening_balance_type(){return this.dealerForm.get("opening_balance_type")}get membership(){return this.dealerForm.get("membership")}get pan_no(){return this.dealerForm.get("pan_no")}get payment_terms(){return this.dealerForm.get("payment_terms")}get apply_tds(){return this.dealerForm.get("apply_tds")}get credit_limit(){return this.dealerForm.get("credit_limit")}countryy(n){return this.getAddresss().controls[n].get("country")}statee(n){return this.getAddresss().controls[n].get("state")}cityy(n){return this.getAddresss().controls[n].get("city")}pincode(n){return this.getAddresss().controls[n].get("pincode")}getBankHolderName(n){return this.getBanks().controls[n].get("account_holder_name")}getAccountNo(n){return this.getBanks().controls[n].get("account_no")}getIfscCode(n){return this.getBanks().controls[n].get("bank_ifsc_code")}getBankName(n){return this.getBanks().controls[n].get("bank_name")}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(s.qu),e.Y36(f.y),e.Y36(C._W),e.Y36(v.F0),e.Y36(r.p),e.Y36(v.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-update-dealer"]],decls:154,vars:79,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","company_name","placeholder","Enter Company Name","id","company_name",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Mobile No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass","ngStyle"],["type","text","formControlName","telephone_no","placeholder","Enter Telephone No.","maxlength","11","minlength","11","id","telephone_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","placeholder","Enter Whatsapp No.","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","date","formControlName","date_of_birth","id","date_of_birth",3,"ngClass"],["type","date","formControlName","anniversary_date","id","anniversary_date",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","gst_type","id","gst_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["class","unhov",3,"value",4,"ngFor","ngForOf"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","gstin","id","gstin","placeholder","Enter GSTIN Number",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["type","text","formControlName","pan_no","id","pan_no","placeholder","Enter Pan Number",3,"ngClass"],["type","text","formControlName","credit_limit","placeholder","Enter Credit Limit","id","credit_limit",3,"ngClass"],["type","text","formControlName","remark","placeholder","Enter Remark","id","remark",3,"ngClass"],[1,"address-details-wrapper"],[1,"address-title"],[1,"w-100","text-right","my-3"],[1,"p-0","border-0",3,"click"],[1,"addMore-btn"],[1,"plus-icon"],["formArrayName","address",1,"mb-3","pb-3"],["style","border: 1px solid rgba(145, 158, 171, 0.32); margin-top: 10px;",4,"ngFor","ngForOf"],[1,"bank-details-wrapper"],["formArrayName","bank_id"],[1,"col-lg-4","col-sm-4","col-12"],["formControlName","payment_terms","id","payment_terms",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov","opening-balance-select-wrapper",3,"ngClass"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["type","text","formControlName","opening_balance","id","opening_balance",1,"opening-input-field",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",3,"click",4,"ngIf"],["routerLink","//contacts/dealerList",1,"btn","btn-cancel"],[1,"text-danger"],[1,"unhov",3,"value"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[2,"border","1px solid rgba(145, 158, 171, 0.32)","margin-top","10px"],[1,"col-12","d-flex","align-items-center","justify-content-end","mt-2"],["class","btn me-2","style","color: red;",3,"click",4,"ngIf"],[1,"row","m-2",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1","placeholder","Address Line 1"],["type","text","formControlName","address_line_2","placeholder","Address Line 2"],["formControlName","country","id","country",3,"change"],["countryValue",""],["formControlName","state",3,"change"],["stateValue",""],["formControlName","city","id","city"],["type","text","formControlName","pincode","placeholder","Enter Pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],[1,"btn","me-2",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","28px","height","28px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[3,"value"],["type","text","formControlName","account_holder_name","placeholder","Enter Bank Holder Name"],["type","text","formControlName","bank_name","placeholder","Enter Bank Name"],["type","text","formControlName","branch_name","placeholder","Enter Branch Name"],["type","text","formControlName","account_no","placeholder","Enter Account No."],["type","text","formControlName","bank_ifsc_code","placeholder","Enter IFSC Code"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Dealer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Dealer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,i,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Company Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,p,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile No.*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,I,2,0,"span",9),e.YNc(28,A,2,1,"span",9),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Telephone No."),e.qZA(),e._UZ(33,"input",12),e.YNc(34,U,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Whatsapp No."),e.qZA(),e._UZ(39,"input",13),e.YNc(40,T,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44,"Email"),e.qZA(),e._UZ(45,"input",14),e.YNc(46,N,2,0,"span",9),e.qZA()(),e.TgZ(47,"div",6)(48,"div",7)(49,"label"),e._uU(50,"Date of Birth"),e.qZA(),e._UZ(51,"input",15),e.YNc(52,q,2,1,"span",9),e.YNc(53,x,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57,"Anniversary"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,F,2,1,"span",9),e.YNc(60,E,2,0,"span",9),e.qZA()(),e.TgZ(61,"div",6)(62,"div",17)(63,"div",18)(64,"label"),e._uU(65,"GSTIN"),e.qZA(),e.TgZ(66,"div",19)(67,"div")(68,"select",20)(69,"option",21),e._uU(70,"GST type"),e.qZA(),e.YNc(71,S,2,2,"option",22),e.qZA(),e.YNc(72,w,2,0,"span",23),e.qZA(),e.TgZ(73,"div"),e._UZ(74,"input",24),e.YNc(75,J,2,0,"span",25),e.qZA()()()()(),e.TgZ(76,"div",6)(77,"div",7)(78,"label"),e._uU(79,"Pan Number"),e.qZA(),e._UZ(80,"input",26),e.YNc(81,B,2,0,"span",9),e.qZA()(),e.TgZ(82,"div",6)(83,"div",7)(84,"label"),e._uU(85,"Credit Limit"),e.qZA(),e._UZ(86,"input",27),e.YNc(87,Q,2,0,"span",9),e.qZA()(),e.TgZ(88,"div",6)(89,"div",7)(90,"label"),e._uU(91,"Remark"),e.qZA(),e._UZ(92,"input",28),e.YNc(93,P,2,0,"span",9),e.qZA()(),e.TgZ(94,"div",29)(95,"h4",30),e._uU(96,"Address Details"),e.qZA(),e.TgZ(97,"div",31)(98,"button",32),e.NdJ("click",function(){return t.addAddress()}),e.TgZ(99,"p",33)(100,"span",34),e._uU(101,"+"),e.qZA(),e._uU(102," Add More Address"),e.qZA()()(),e.TgZ(103,"div",35),e.YNc(104,H,62,11,"div",36),e.qZA()(),e.TgZ(105,"div",37)(106,"h4",30),e._uU(107,"Bank Details"),e.qZA(),e.TgZ(108,"div",31)(109,"button",32),e.NdJ("click",function(){return t.addBank()}),e.TgZ(110,"p",33)(111,"span",34),e._uU(112,"+"),e.qZA(),e._uU(113," Add More Banks "),e.qZA()()(),e.TgZ(114,"div",38),e.YNc(115,re,33,6,"div",36),e.qZA()(),e.TgZ(116,"div",39)(117,"div",7)(118,"label"),e._uU(119,"Select Payment Terms"),e.qZA(),e.TgZ(120,"select",40)(121,"option",41),e._uU(122,"Select Payment Terms"),e.qZA(),e.YNc(123,ae,2,2,"option",42),e.qZA(),e.YNc(124,ie,2,0,"span",9),e.qZA()(),e.TgZ(125,"div",39)(126,"div",17)(127,"div",18)(128,"label"),e._uU(129,"Opening Balance*"),e.qZA(),e.TgZ(130,"div",19)(131,"div")(132,"select",43)(133,"option",21),e._uU(134,"Balance type"),e.qZA(),e.TgZ(135,"option",44),e._uU(136,"Cr"),e.qZA(),e.TgZ(137,"option",45),e._uU(138,"Dr"),e.qZA()(),e.YNc(139,se,2,0,"span",23),e.qZA(),e.TgZ(140,"div"),e._UZ(141,"input",46),e.YNc(142,oe,2,0,"span",25),e.qZA()()()()(),e.TgZ(143,"div",47)(144,"div",48)(145,"div",49),e._UZ(146,"input",50),e.TgZ(147,"label",51),e._uU(148,"Login Access"),e.qZA()()()(),e.TgZ(149,"div",18),e.YNc(150,le,2,0,"button",52),e.YNc(151,pe,3,0,"button",53),e.TgZ(152,"a",54),e._uU(153,"Cancel"),e.qZA()()()()()()),2&n&&(e.xp6(8),e.Q6J("formGroup",t.dealerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(45,h,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,h,t.f.company_name.touched&&t.f.company_name.invalid)),e.xp6(1),e.Q6J("ngIf",t.company_name&&t.company_name.invalid&&t.company_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(49,h,t.f.mobile_no.touched&&t.f.mobile_no.invalid))("ngStyle",e.VKq(51,de,t.mobError?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.mobile&&t.mobile.invalid&&t.mobile.touched),e.xp6(1),e.Q6J("ngIf",t.mobError),e.xp6(5),e.Q6J("ngClass",e.VKq(53,h,t.f.telephone_no.touched&&t.f.telephone_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.telephone_no&&t.telephone_no.invalid&&t.telephone_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(55,h,t.f.whatsapp_no.touched&&t.f.whatsapp_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.whatsapp_no&&t.whatsapp_no.invalid&&t.whatsapp_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(57,h,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(59,h,t.f.date_of_birth.touched&&t.f.date_of_birth.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.dob&&t.dob.invalid&&t.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(61,h,t.f.anniversary_date.touched&&t.f.anniversary_date.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.anniversary&&t.anniversary.invalid&&t.anniversary.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(63,h,t.f.gst_type.touched&&t.f.gst_type.invalid)),e.xp6(3),e.Q6J("ngForOf",t.gstType),e.xp6(1),e.Q6J("ngIf",t.gst_type&&t.gst_type.invalid&&t.gst_type.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(65,h,t.f.gstin.touched&&t.f.gstin.invalid)),e.xp6(1),e.Q6J("ngIf",t.gstin&&t.gstin.invalid&&t.gstin.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(67,h,t.f.pan_no.touched&&t.f.pan_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.pan_no&&t.pan_no.invalid&&t.pan_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(69,h,t.f.credit_limit.touched&&t.f.credit_limit.invalid)),e.xp6(1),e.Q6J("ngIf",t.credit_limit&&t.credit_limit.invalid&&t.credit_limit.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(71,h,t.f.remark.touched&&t.f.remark.invalid)),e.xp6(1),e.Q6J("ngIf",t.remark&&t.remark.invalid&&t.remark.touched),e.xp6(11),e.Q6J("ngForOf",t.getAddresss().controls),e.xp6(11),e.Q6J("ngForOf",t.getBanks().controls),e.xp6(5),e.Q6J("ngClass",e.VKq(73,h,t.f.payment_terms.touched&&t.f.payment_terms.invalid)),e.xp6(3),e.Q6J("ngForOf",t.paymentTerms),e.xp6(1),e.Q6J("ngIf",t.payment_terms&&t.payment_terms.invalid&&t.payment_terms.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(75,h,t.f.opening_balance_type.touched&&t.f.opening_balance_type.invalid)),e.xp6(7),e.Q6J("ngIf",t.opening_balance_type&&t.opening_balance_type.invalid&&t.opening_balance_type.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(77,h,t.f.opening_balance.touched&&t.f.opening_balance.invalid)),e.xp6(1),e.Q6J("ngIf",t.opening_balance&&t.opening_balance.invalid&&t.opening_balance.touched),e.xp6(4),e.Q6J("id","checkboxTax-"),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader))},dependencies:[_.mk,_.sg,_.O5,_.PC,v.yS,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.sg,s.u,s.x0,s.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.gst-type-wrapper[_ngcontent-%COMP%]{border-radius:5px 0 0 5px}.address-title[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700}.addMore-btn[_ngcontent-%COMP%]{background-color:#ff9f43;color:#fff;border-radius:5px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;padding:0 12px;cursor:pointer}.plus-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 5px 0 0}.gst-field-wrapper[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}.opening-balance-select-wrapper[_ngcontent-%COMP%]{padding:10px;border-radius:5px 0 0 5px!important}.opening-input-field[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}"]}),a})();var ce=c(30597);const $=JSON.parse(localStorage.getItem("auth"));let me;$&&$.map(o=>{"master"===o.content_type.app_label&&"dealer"===o.content_type.model&&"change_dealer"==o.codename&&(me=o.codename)});const he=[{path:"",component:ue,canActivate:[ce.l],data:{allowedRoles:["change_dealer"]}}];let _e=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[v.Bz.forChild(he),v.Bz]}),a})();var ge=c(30906);let ve=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.ez,_e,ge.ZU,s.u5,s.UX,C.Rh]}),a})()},30597:(k,b,c)=>{c.d(b,{l:()=>C});var _=c(94650),v=c(89299),s=c(97185),e=c(42917),f=c(80927);let C=(()=>{class r{constructor(p,I,A,U,T){this.router=p,this.Arout=I,this.toastr=A,this.profileService=U,this.coreService=T}canActivate(p,I){const A=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(U=>{this.userDetails=U,this.permissions=this.userDetails?.permission}),A){const U=p.data.allowedRoles;console.log(U,"allowedRoles");const T=A.some(N=>U.includes(N.codename));if(console.log(T),this.coreService.getProfile().subscribe(N=>{this.userDetails=N,this.profileService.setUserDetails(this.userDetails);const q=N?.permission,x=this.profileService.getUserDetails();(!x||x.length!==q.length)&&(this.profileService.setUserPermission(q),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(p){return new(p||r)(_.LFG(v.F0),_.LFG(v.gz),_.LFG(s._W),_.LFG(e.J),_.LFG(f.p))},r.\u0275prov=_.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);