"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4042],{5062:(b,U,c)=>{c.d(U,{y:()=>e});var y=c(2340),_=c(4650),i=c(529);let e=(()=>{class h{constructor(a){this.http=a,this.apiUrl=`${y.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(a){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${a}`)}SupplierIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${a}`,r)}addSupplier(a){return this.http.post(this.apiUrl+"/pv-api/supplier/",a)}updateSupplier(a,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,a)}deleteSupplier(a){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${a}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(a){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${a}`)}VendorIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${a}`,r)}addVendor(a){return this.http.post(this.apiUrl+"/pv-api/vendor/",a)}updateVendor(a,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,a)}deleteVendor(a){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${a}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(a){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${a}`)}PaymentTermsIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${a}`,r)}addPaymentTerms(a){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",a)}updatePaymentTerms(a,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,a)}deletePaymentTerms(a){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${a}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(a){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${a}`)}TransportIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${a}`,r)}addTransport(a){return this.http.post(this.apiUrl+"/pv-api/transport/",a)}updateTransport(a,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,a)}deleteTransport(a){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${a}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(a){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${a}`)}EmployeeIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${a}`,r)}addEmployee(a){return this.http.post(this.apiUrl+"/pv-api/employee/",a)}updateEmployee(a,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,a)}deleteEmployee(a){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${a}`)}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(a){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${a}`)}CustomerIsActive(a,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${a}`,r)}addCustomer(a){return this.http.post(this.apiUrl+"/pv-api/customer/",a)}updateCustomer(a,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,a)}deleteCustomer(a){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${a}`)}}return h.\u0275fac=function(a){return new(a||h)(_.LFG(i.eN))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},4042:(b,U,c)=>{c.r(U),c.d(U,{UpdateEmployeeModule:()=>ae});var y=c(6895),_=c(8996),i=c(4006),e=c(4650),h=c(5062),A=c(7185),a=c(927);function r(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your name "),e.qZA())}function l(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function T(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your 10 digits whatsapp phone number"),e.qZA())}function N(o,p){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function q(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function w(o,p){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function E(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function x(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your pan Number"),e.qZA())}function I(o,p){if(1&o&&(e.TgZ(0,"option",56),e._uU(1),e.qZA()),2&o){const n=p.$implicit;e.s9C("value",n.id),e.xp6(1),e.hij(" ",n.country_name," ")}}function k(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Select country"),e.qZA())}function F(o,p){if(1&o&&(e.TgZ(0,"option",56),e._uU(1),e.qZA()),2&o){const n=p.$implicit;e.s9C("value",n.id),e.xp6(1),e.hij("",n.state," ")}}function J(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Select state"),e.qZA())}function $(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Data not available"),e.qZA())}function Q(o,p){if(1&o&&(e.TgZ(0,"option",56),e._uU(1),e.qZA()),2&o){const n=p.$implicit;e.s9C("value",n.id),e.xp6(1),e.Oqu(n.city)}}function B(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Select city"),e.qZA())}function S(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"data not available"),e.qZA())}function Y(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function O(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"span",57),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().index,d=e.oxw();return e.KtG(d.removeAddress(s))}),e.O4$(),e.TgZ(1,"svg",58),e._UZ(2,"path",59)(3,"path",60),e.qZA()()}}function M(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"div",40)(2,"div",41)(3,"div",7)(4,"label"),e._uU(5,"Address Line 1"),e.qZA(),e._UZ(6,"input",42),e.qZA()(),e.TgZ(7,"div",6)(8,"div",7)(9,"label"),e._uU(10,"Address Line 2"),e.qZA(),e._UZ(11,"input",43),e.qZA()(),e.TgZ(12,"div",6)(13,"div",7)(14,"label"),e._uU(15,"Country"),e.qZA(),e.TgZ(16,"select",44,45),e.NdJ("change",function(){e.CHM(n);const s=e.MAs(17),d=e.oxw();return e.KtG(d.selectState(s.value))}),e.TgZ(18,"option",46),e._uU(19,"Country"),e.qZA(),e.YNc(20,I,2,2,"option",47),e.qZA(),e.YNc(21,k,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," State"),e.qZA(),e.TgZ(26,"select",48,49),e.NdJ("change",function(){e.CHM(n);const s=e.MAs(27),d=e.oxw();return e.KtG(d.selectCity(s.value))}),e.TgZ(28,"option",46),e._uU(29,"State"),e.qZA(),e.YNc(30,F,2,2,"option",47),e.qZA(),e.YNc(31,J,2,0,"span",9),e.YNc(32,$,2,0,"span",9),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7)(35,"label"),e._uU(36," City"),e.qZA(),e.TgZ(37,"select",50)(38,"option",46),e._uU(39,"City"),e.qZA(),e.YNc(40,Q,2,2,"option",47),e.qZA(),e.YNc(41,B,2,0,"span",9),e.YNc(42,S,2,0,"span",9),e.qZA()(),e.TgZ(43,"div",6)(44,"div",7)(45,"label"),e._uU(46,"Pincode"),e.qZA(),e._UZ(47,"input",51),e.YNc(48,Y,2,0,"span",9),e.qZA()(),e.TgZ(49,"div",6)(50,"div",7)(51,"label"),e._uU(52,"Address Type"),e.qZA(),e.TgZ(53,"select",52)(54,"option",46),e._uU(55,"Address Type"),e.qZA(),e.TgZ(56,"option",53),e._uU(57,"Shipping"),e.qZA(),e.TgZ(58,"option",54),e._uU(59,"Billing"),e.qZA()()()(),e.TgZ(60,"div",30),e.YNc(61,O,4,0,"span",55),e.qZA()()()}if(2&o){const n=p.index,t=e.oxw();e.xp6(1),e.Q6J("formGroupName",n),e.xp6(19),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(9),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)<=0),e.xp6(8),e.Q6J("ngForOf",t.city),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)<=0),e.xp6(6),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(13),e.Q6J("ngIf",n>0)}}function V(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter Bank holder name"),e.qZA())}function K(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your Bank Name"),e.qZA())}function P(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your account no"),e.qZA())}function L(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your Ifsc code"),e.qZA())}function D(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"span",57),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().index,d=e.oxw();return e.KtG(d.removeBank(s))}),e.O4$(),e.TgZ(1,"svg",58),e._UZ(2,"path",59)(3,"path",60),e.qZA()()}}function G(o,p){if(1&o&&(e.TgZ(0,"div")(1,"div",40)(2,"div",6)(3,"div",7)(4,"label"),e._uU(5,"Bank Holder Name*"),e.qZA(),e._UZ(6,"input",61),e.YNc(7,V,2,0,"span",9),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"label"),e._uU(11,"Bank Name*"),e.qZA(),e._UZ(12,"input",62),e.YNc(13,K,2,0,"span",9),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Branch"),e.qZA(),e._UZ(18,"input",63),e.qZA()(),e.TgZ(19,"div",6)(20,"div",7)(21,"label"),e._uU(22,"Account No*"),e.qZA(),e._UZ(23,"input",64),e.YNc(24,P,2,0,"span",9),e.qZA()(),e.TgZ(25,"div",41)(26,"div",7)(27,"label"),e._uU(28,"IFSC Code*"),e.qZA(),e._UZ(29,"input",65),e.YNc(30,L,2,0,"span",9),e.qZA()(),e.TgZ(31,"div",30),e.YNc(32,D,4,0,"span",55),e.qZA()()()),2&o){const n=p.index,t=e.oxw();let s,d,g,m;e.xp6(1),e.Q6J("formGroupName",n),e.xp6(6),e.Q6J("ngIf",(null==(s=t.getBankHolderName(n))?null:s.invalid)&&(null==(s=t.getBankHolderName(n))?null:s.touched)),e.xp6(6),e.Q6J("ngIf",(null==(d=t.getBankName(n))?null:d.invalid)&&(null==(d=t.getBankName(n))?null:d.touched)),e.xp6(11),e.Q6J("ngIf",(null==(g=t.getAccountNo(n))?null:g.invalid)&&(null==(g=t.getAccountNo(n))?null:g.touched)),e.xp6(6),e.Q6J("ngIf",(null==(m=t.getIfscCode(n))?null:m.invalid)&&(null==(m=t.getIfscCode(n))?null:m.touched)),e.xp6(2),e.Q6J("ngIf",n>0)}}function R(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your Commission"),e.qZA())}function z(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your wages"),e.qZA())}function H(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your extra_wages"),e.qZA())}function W(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter Target"),e.qZA())}function X(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your UserName"),e.qZA())}function j(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your password"),e.qZA())}function ee(o,p){1&o&&(e.TgZ(0,"span",39),e._uU(1,"Enter your permission_group"),e.qZA())}const u=function(o){return{"is-invalid":o}},te=[{path:"",component:(()=>{class o{constructor(n,t,s,d,g,m){this.fb=n,this.contactService=t,this.toastr=s,this.router=d,this.coreService=g,this.Arout=m,this.dateError=null,this.selectedSubCatGrp=0}get f(){return this.employeeForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.employeeForm=this.fb.group({login_access:new i.NI(""),name:new i.NI("",[i.kI.required]),mobile_no:new i.NI("",[i.kI.required,i.kI.maxLength(10),i.kI.minLength(10),i.kI.pattern(/^[0-9]*$/)]),whatsapp_no:new i.NI("",[i.kI.maxLength(10),i.kI.minLength(10),i.kI.pattern(/^[0-9]*$/)]),email:new i.NI,remark:new i.NI,dob:new i.NI(""),anniversary:new i.NI(""),apply_tds:new i.NI(""),pan_no:new i.NI("",[i.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),credit_limit:new i.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),commission:new i.NI(""),wages:new i.NI(""),extra_wages:new i.NI(""),target:new i.NI(""),username:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required]),permission_group:new i.NI("")}),this.contactService.getEmployeeById(this.id).subscribe(n=>{this.getRes=n,this.employeeForm.patchValue(this.getRes),this.employeeForm.setControl("address",this.udateAddress(this.getRes.address)),this.employeeForm.setControl("bank_id",this.udateBank(this.getRes.bank_id))}),this.addAddress(),this.addBank(),this.getCountry()}udateAddress(n){let t=new i.Oe([]);return n.forEach(s=>{t.push(this.fb.group({address_line_1:s.address_line_1,address_line_2:s.address_line_2,country:s.country.id,state:s.state.id,city:s.city.id,pincode:s.pincode,address_type:s.address_type})),this.selectState(s.country.id),this.selectCity(s.state.id)}),t}udateBank(n){let t=new i.Oe([]);return n.forEach(s=>{t.push(this.fb.group({bank_ifsc_code:s.bank_ifsc_code,bank_name:s.bank_name,branch_name:s.branch_name,account_no:s.account_no,account_holder_name:s.account_holder_name}))}),t}addressAdd(){return this.fb.group({address_line_1:"",address_line_2:"",country:new i.NI("",[i.kI.required]),state:new i.NI("",[i.kI.required]),city:new i.NI("",[i.kI.required]),pincode:"",address_type:""})}getAddresss(){return this.employeeForm.get("address")}addAddress(){this.getAddresss().push(this.addressAdd())}removeAddress(n){this.getAddresss().removeAt(n)}bankAdd(){return this.fb.group({bank_ifsc_code:new i.NI("",[i.kI.required]),bank_name:new i.NI("",[i.kI.required]),branch_name:new i.NI(""),account_no:new i.NI("",i.kI.required),account_holder_name:new i.NI("",[i.kI.required])})}getBanks(){return this.employeeForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(n){this.getBanks().removeAt(n)}getCountry(){this.coreService.countryList().subscribe(n=>{this.country=n})}selectState(n){console.log(n),this.coreService.getStateByCountryId(n).subscribe(t=>{this.state=t,console.log(this.state)})}selectCity(n){console.log(n),this.coreService.getCityByStateId(n).subscribe(t=>{this.city=t})}submit(){let n=new FormData;n.append("login_access",this.employeeForm.get("login_access")?.value),n.append("name",this.employeeForm.get("name")?.value),n.append("mobile_no",this.employeeForm.get("mobile_no")?.value),n.append("whatsapp_no",this.employeeForm.get("whatsapp_no")?.value),n.append("email",this.employeeForm.get("email")?.value),n.append("remark",this.employeeForm.get("remark")?.value),n.append("dob",this.employeeForm.get("dob")?.value),n.append("anniversary",this.employeeForm.get("anniversary")?.value),n.append("apply_tds",this.employeeForm.get("apply_tds")?.value),n.append("pan_no",this.employeeForm.get("pan_no")?.value),n.append("credit_limit",this.employeeForm.get("credit_limit")?.value),n.append("commission",this.employeeForm.get("commission")?.value),n.append("wages",this.employeeForm.get("wages")?.value),n.append("extra_wages",this.employeeForm.get("extra_wages")?.value),n.append("target",this.employeeForm.get("target")?.value),n.append("username",this.employeeForm.get("username")?.value),n.append("password",this.employeeForm.get("password")?.value),n.append("permission_group",this.employeeForm.get("permission_group")?.value);const t=this.employeeForm.get("address"),s=[];t.controls.forEach(m=>{const v=m,f={};Object.keys(v.controls).forEach(Z=>{f[Z]=v.controls[Z].value}),s.push(f)}),n.append("address",JSON.stringify(s));const d=this.employeeForm.get("bank_id"),g=[];d.controls.forEach(m=>{const v=m,f={};Object.keys(v.controls).forEach(Z=>{f[Z]=v.controls[Z].value}),g.push(f)}),n.append("bank_id",JSON.stringify(g)),this.employeeForm.valid?this.contactService.updateEmployee(n,this.id).subscribe(m=>{console.log(m),this.addRes=m,"Employee updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.employeeForm.reset(),this.router.navigate(["//contacts/employee"]))},m=>{console.log(m.error.gst),m.error.msg?this.toastr.error(m.error.msg):(m.error.dob||m.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))}):(this.employeeForm.markAllAsTouched(),console.log("hhhhhh"))}get login_access(){return this.employeeForm.get("login_access")}get name(){return this.employeeForm.get("name")}get target(){return this.employeeForm.get("target")}get dob(){return this.employeeForm.get("date_of_birth")}get mobile(){return this.employeeForm.get("mobile_no")}get extra_wages(){return this.employeeForm.get("extra_wages")}get whatsapp_no(){return this.employeeForm.get("whatsapp_no")}get anniversary(){return this.employeeForm.get("anniversary_date")}get wages(){return this.employeeForm.get("wages")}get commision(){return this.employeeForm.get("commision")}get address(){return this.employeeForm.get("address")}get bank(){return this.employeeForm.get("bank_id")}get pan_no(){return this.employeeForm.get("pan_no")}get payment_terms(){return this.employeeForm.get("payment_terms")}get apply_tds(){return this.employeeForm.get("apply_tds")}get credit_limit(){return this.employeeForm.get("credit_limit")}get countryy(){return this.employeeForm.get("country")}get statee(){return this.employeeForm.get("state")}get cityy(){return this.employeeForm.get("city")}get pincode(){return this.employeeForm.get("pincode")}getBankHolderName(n){return this.getBanks().controls[n].get("account_holder_name")}getAccountNo(n){return this.getBanks().controls[n].get("account_no")}getIfscCode(n){return this.getBanks().controls[n].get("bank_ifsc_code")}getBankName(n){return this.getBanks().controls[n].get("bank_name")}get email(){return this.employeeForm.get("email")}get username(){return this.employeeForm.get("username")}get password(){return this.employeeForm.get("password")}get permission_group(){return this.employeeForm.get("permission_group")}onCheckAddress(n){const t=this.employeeForm.get("address");if(n.target.checked)t.push(new i.NI(parseInt(n.target.value))),this.selectedSubCatGrp++;else{let s=0;t.controls.forEach(d=>{if(d.value==n.target.value)return t.removeAt(s),void this.selectedSubCatGrp--;s++})}}onCheckBank(n){const t=this.employeeForm.get("bank_id");if(n.target.checked)t.push(new i.NI(parseInt(n.target.value))),this.selectedSubCatGrp++;else{let s=0;t.controls.forEach(d=>{if(d.value==n.target.value)return t.removeAt(s),void this.selectedSubCatGrp--;s++})}}onLabelClick(n){n.stopPropagation()}getAddress(){this.addressDetails=""}getBank(){this.bankDetails=""}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(h.y),e.Y36(A._W),e.Y36(_.F0),e.Y36(a.p),e.Y36(_.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-employee"]],decls:130,vars:70,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","mobile_no","maxlength","10","minlength","10","id","mobile_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","email","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","remark","id","remark",3,"ngClass"],["type","date","formControlName","dob","id","dob",3,"ngClass"],["type","date","formControlName","anniversary","id","anniversary",3,"ngClass"],["type","text","formControlName","pan_no","id","pan_no",3,"ngClass"],["type","text","formControlName","credit_limit","id","credit_limit",3,"ngClass"],["formArrayName","address"],[4,"ngFor","ngForOf"],[1,"w-100","text-right","mb-3"],[1,"addMore",2,"background","#FF9F43","color","white","border-radius","2px",3,"click"],["formArrayName","bank_id"],["type","text","formControlName","commission","id","commission",3,"ngClass"],["type","text","formControlName","wages","id","wages",3,"ngClass"],["type","text","formControlName","extra_wages","id","extra_wages",3,"ngClass"],["type","text","formControlName","target","id","target",3,"ngClass"],["type","text","formControlName","username","id","username",3,"ngClass"],["type","password","formControlName","password","id","password",3,"ngClass"],["type","text","formControlName","permission_group","id","permission_group",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["type","checkbox","formControlName","apply_tds",3,"id"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","//employee/employeelist",1,"btn","btn-cancel"],[1,"text-danger"],[1,"row",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1"],["type","text","formControlName","address_line_2"],["formControlName","country","id","country",1,"w-100","h-100","border",3,"change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state",1,"w-100","h-100","border",3,"change"],["stateValue",""],["formControlName","city","id","city",1,"w-100","h-100","border"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],["class","btn","style","color: red;",3,"click",4,"ngIf"],[3,"value"],[1,"btn",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","20px","height","20px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["type","text","formControlName","account_holder_name"],["type","text","formControlName","bank_name"],["type","text","formControlName","branch_name"],["type","text","formControlName","account_no"],["type","text","formControlName","bank_ifsc_code"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update Employee"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Employee "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,r,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Mobile No*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,l,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Whatsapp No"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,T,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",12),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7)(35,"label"),e._uU(36,"Remark"),e.qZA(),e._UZ(37,"input",13),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7)(40,"label"),e._uU(41,"Date of Birth"),e.qZA(),e._UZ(42,"input",14),e.YNc(43,N,2,1,"span",9),e.YNc(44,q,2,0,"span",9),e.qZA()(),e.TgZ(45,"div",6)(46,"div",7)(47,"label"),e._uU(48,"Anniversary"),e.qZA(),e._UZ(49,"input",15),e.YNc(50,w,2,1,"span",9),e.YNc(51,E,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Pan Number"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,x,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",7)(60,"label"),e._uU(61,"Credit Limit"),e.qZA(),e._UZ(62,"input",17),e.qZA()(),e.TgZ(63,"div",18),e.YNc(64,M,62,11,"div",19),e.TgZ(65,"div",20)(66,"span",21),e.NdJ("click",function(){return t.addAddress()}),e._uU(67,"+ Add More Address"),e.qZA()()(),e.TgZ(68,"div",22),e.YNc(69,G,33,6,"div",19),e.TgZ(70,"div",20)(71,"span",21),e.NdJ("click",function(){return t.addBank()}),e._uU(72,"+ Add More Banks"),e.qZA()()(),e.TgZ(73,"div",6)(74,"div",7)(75,"label"),e._uU(76,"Commission"),e.qZA(),e._UZ(77,"input",23),e.YNc(78,R,2,0,"span",9),e.qZA()(),e.TgZ(79,"div",6)(80,"div",7)(81,"label"),e._uU(82,"Wages"),e.qZA(),e._UZ(83,"input",24),e.YNc(84,z,2,0,"span",9),e.qZA()(),e.TgZ(85,"div",6)(86,"div",7)(87,"label"),e._uU(88,"Extra Wages"),e.qZA(),e._UZ(89,"input",25),e.YNc(90,H,2,0,"span",9),e.qZA()(),e.TgZ(91,"div",6)(92,"div",7)(93,"label"),e._uU(94,"Target"),e.qZA(),e._UZ(95,"input",26),e.YNc(96,W,2,0,"span",9),e.qZA()(),e.TgZ(97,"div",6)(98,"div",7)(99,"label"),e._uU(100,"UserName"),e.qZA(),e._UZ(101,"input",27),e.YNc(102,X,2,0,"span",9),e.qZA()(),e.TgZ(103,"div",6)(104,"div",7)(105,"label"),e._uU(106,"Password"),e.qZA(),e._UZ(107,"input",28),e.YNc(108,j,2,0,"span",9),e.qZA()(),e.TgZ(109,"div",6)(110,"div",7)(111,"label"),e._uU(112,"Permission Group"),e.qZA(),e._UZ(113,"input",29),e.YNc(114,ee,2,0,"span",9),e.qZA()(),e.TgZ(115,"div",30)(116,"div",31)(117,"div",32),e._UZ(118,"input",33),e.TgZ(119,"label",34),e._uU(120,"Login Access"),e.qZA()(),e.TgZ(121,"div",32),e._UZ(122,"input",35),e.TgZ(123,"label",34),e._uU(124,"Apply TDS"),e.qZA()()()(),e.TgZ(125,"div",36)(126,"button",37),e._uU(127,"Submit"),e.qZA(),e.TgZ(128,"a",38),e._uU(129,"Cancel"),e.qZA()()()()()()),2&n&&(e.xp6(8),e.Q6J("formGroup",t.employeeForm),e.xp6(6),e.Q6J("ngClass",e.VKq(38,u,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,u,t.f.mobile_no.touched&&t.f.mobile_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.mobile&&t.mobile.invalid&&t.mobile.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,u,t.f.whatsapp_no.touched&&t.f.whatsapp_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.whatsapp_no&&t.whatsapp_no.invalid&&t.whatsapp_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,u,t.f.email.touched&&t.f.email.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(46,u,t.f.remark.touched&&t.f.remark.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(48,u,t.f.dob.touched&&t.f.dob.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.dob&&t.dob.invalid&&t.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(50,u,t.f.anniversary.touched&&t.f.anniversary.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.anniversary&&t.anniversary.invalid&&t.anniversary.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(52,u,t.f.pan_no.touched&&t.f.pan_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.pan_no&&t.pan_no.invalid&&t.pan_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(54,u,t.f.credit_limit.touched&&t.f.credit_limit.invalid)),e.xp6(2),e.Q6J("ngForOf",t.getAddresss().controls),e.xp6(5),e.Q6J("ngForOf",t.getBanks().controls),e.xp6(8),e.Q6J("ngClass",e.VKq(56,u,t.f.commission.touched&&t.f.commission.invalid)),e.xp6(1),e.Q6J("ngIf",t.commision&&t.commision.invalid&&t.commision.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(58,u,t.f.wages.touched&&t.f.wages.invalid)),e.xp6(1),e.Q6J("ngIf",t.wages&&t.wages.invalid&&t.wages.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(60,u,t.f.extra_wages.touched&&t.f.extra_wages.invalid)),e.xp6(1),e.Q6J("ngIf",t.extra_wages&&t.extra_wages.invalid&&t.extra_wages.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(62,u,t.f.target.touched&&t.f.target.invalid)),e.xp6(1),e.Q6J("ngIf",t.target&&t.target.invalid&&t.target.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(64,u,t.f.username.touched&&t.f.username.invalid)),e.xp6(1),e.Q6J("ngIf",t.username&&t.username.invalid&&t.username.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(66,u,t.f.password.touched&&t.f.password.invalid)),e.xp6(1),e.Q6J("ngIf",t.password&&t.password.invalid&&t.password.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(68,u,t.f.permission_group.touched&&t.f.permission_group.invalid)),e.xp6(1),e.Q6J("ngIf",t.permission_group&&t.permission_group.invalid&&t.permission_group.touched),e.xp6(4),e.Q6J("id","checkboxTax-"),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("id","checkboxMeasure-"),e.xp6(1),e.Q6J("for","checkboxMeasure-"))},dependencies:[y.mk,y.sg,y.O5,_.yS,i._Y,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.JL,i.wO,i.nD,i.sg,i.u,i.x0,i.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),o})()}];let ne=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(te),_.Bz]}),o})();var oe=c(906);let ae=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.ez,ne,oe.ZU,i.u5,i.UX]}),o})()}}]);