"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8604],{25062:($,C,u)=>{u.d(C,{y:()=>e});var h=u(92340),f=u(94650),o=u(80529);let e=(()=>{class y{constructor(t){this.http=t,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,i)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,i)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,i)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,i)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,i)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,i)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,i)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,i)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,i)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,i)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return y.\u0275fac=function(t){return new(t||y)(f.LFG(o.eN))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},8604:($,C,u)=>{u.r(C),u.d(C,{AddDealerModule:()=>ye});var h=u(36895),f=u(4392),o=u(24006),e=u(94650),y=u(25062),b=u(97185),t=u(80927);function i(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Name "),e.qZA())}function l(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Company Name "),e.qZA())}function I(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 10 Digits Mobile Number"),e.qZA())}function U(a,s){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.mobError)}}function A(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 11 Digits Telephone Number"),e.qZA())}function x(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 10 Digits Whatsapp Number"),e.qZA())}function Z(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Valid Email"),e.qZA())}function q(a,s){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function D(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function J(a,s){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.dateError)}}function w(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function F(a,s){if(1&a&&(e.TgZ(0,"option",58),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.s9C("value",n.title),e.xp6(1),e.hij(" ",n.title,"")}}function S(a,s){1&a&&(e.TgZ(0,"span",59),e._uU(1,"Select GSTIN Type"),e.qZA())}function B(a,s){1&a&&(e.TgZ(0,"span",61),e._uU(1," Enter your GSTIN No."),e.qZA())}function Q(a,s){if(1&a&&(e.TgZ(0,"span",57),e._uU(1),e.qZA()),2&a){const n=e.oxw(2);e.xp6(1),e.Oqu(n.gstinErr)}}const _=function(a){return{"is-invalid":a}},k=function(a){return{border:a}};function P(a,s){if(1&a&&(e.TgZ(0,"div",6)(1,"div",7)(2,"label"),e._uU(3,"GSTIN No."),e.qZA(),e.TgZ(4,"div",17),e._UZ(5,"input",60),e.YNc(6,B,2,0,"span",48),e.YNc(7,Q,2,1,"span",9),e.qZA()()()),2&a){const n=e.oxw();e.xp6(5),e.Q6J("ngClass",e.VKq(4,_,n.f.gstin.touched&&n.f.gstin.invalid))("ngStyle",e.VKq(6,k,n.gstinErr?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",n.gstin&&n.gstin.invalid&&n.gstin.touched),e.xp6(1),e.Q6J("ngIf",n.gstinErr)}}function O(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Pan Number"),e.qZA())}function M(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Credit Limit"),e.qZA())}function Y(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Remark"),e.qZA())}function G(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"span",79),e.NdJ("click",function(){e.CHM(n);const p=e.oxw().index,c=e.oxw();return e.KtG(c.removeAddress(p))}),e.O4$(),e.TgZ(1,"svg",80),e._UZ(2,"path",81)(3,"path",82),e.qZA()()}}function L(a,s){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.country_name," ")}}function V(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select Country"),e.qZA())}function K(a,s){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij("",n.state," ")}}function R(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select State"),e.qZA())}function j(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Please Select Country"),e.qZA())}function z(a,s){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij("",n.city," ")}}function W(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select city"),e.qZA())}function H(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Please Select State"),e.qZA())}function X(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function ee(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"div",62)(1,"div",63),e.YNc(2,G,4,0,"span",64),e.qZA(),e.TgZ(3,"div",65)(4,"div",66)(5,"div",7)(6,"label"),e._uU(7,"Address Line 1"),e.qZA(),e._UZ(8,"input",67),e.qZA()(),e.TgZ(9,"div",6)(10,"div",7)(11,"label"),e._uU(12,"Address Line 2"),e.qZA(),e._UZ(13,"input",68),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Select Country*"),e.qZA(),e.TgZ(18,"select",69,70),e.NdJ("change",function(){const c=e.CHM(n).index,m=e.MAs(19),d=e.oxw();return e.KtG(d.selectState(m.value,c))}),e.TgZ(20,"option",40),e._uU(21,"Select Country"),e.qZA(),e.YNc(22,L,2,2,"option",41),e.qZA(),e.YNc(23,V,2,0,"span",9),e.qZA()(),e.TgZ(24,"div",6)(25,"div",7)(26,"label"),e._uU(27,"Select State*"),e.qZA(),e.TgZ(28,"select",71,72),e.NdJ("change",function(){const c=e.CHM(n).index,m=e.MAs(29),d=e.oxw();return e.KtG(d.selectCity(m.value,c))}),e.TgZ(30,"option",40),e._uU(31,"Select State"),e.qZA(),e.YNc(32,K,2,2,"option",41),e.qZA(),e.YNc(33,R,2,0,"span",9),e.YNc(34,j,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Select City*"),e.qZA(),e.TgZ(39,"select",73)(40,"option",40),e._uU(41,"Select City"),e.qZA(),e.YNc(42,z,2,2,"option",41),e.qZA(),e.YNc(43,W,2,0,"span",9),e.YNc(44,H,2,0,"span",9),e.qZA()(),e.TgZ(45,"div",6)(46,"div",7)(47,"label"),e._uU(48,"Pincode"),e.qZA(),e._UZ(49,"input",74),e.YNc(50,X,2,0,"span",9),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7)(53,"label"),e._uU(54,"Select Address Type"),e.qZA(),e.TgZ(55,"select",75)(56,"option",40),e._uU(57,"Select Address Type"),e.qZA(),e.TgZ(58,"option",76),e._uU(59,"Shipping"),e.qZA(),e.TgZ(60,"option",77),e._uU(61,"Billing"),e.qZA(),e.TgZ(62,"option",78),e._uU(63,"Both"),e.qZA()()()()()()}if(2&a){const n=s.index,r=e.oxw();e.xp6(2),e.Q6J("ngIf",n>0),e.xp6(1),e.Q6J("formGroupName",n),e.xp6(19),e.Q6J("ngForOf",r.country),e.xp6(1),e.Q6J("ngIf",r.countryy[n]&&r.countryy[n].invalid&&r.countryy[n].touched),e.xp6(9),e.Q6J("ngForOf",r.state[n]),e.xp6(1),e.Q6J("ngIf",r.statee(n)&&r.statee(n).invalid&&r.statee(n).touched&&(null==r.state[n]?null:r.state[n].length)>0),e.xp6(1),e.Q6J("ngIf",r.statee(n)&&r.statee(n).invalid&&r.statee(n).touched&&(null==r.state[n]?null:r.state[n].length)<=0),e.xp6(8),e.Q6J("ngForOf",r.city[n]),e.xp6(1),e.Q6J("ngIf",r.cityy(n)&&r.cityy(n).invalid&&r.cityy(n).touched&&(null==r.city[n]?null:r.city[n].length)>0),e.xp6(1),e.Q6J("ngIf",r.cityy(n)&&r.cityy(n).invalid&&r.cityy(n).touched&&(null==r.city[n]?null:r.city[n].length)<=0),e.xp6(6),e.Q6J("ngIf",r.pincode(n)&&r.pincode(n).invalid&&r.pincode(n).touched)}}function te(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"span",79),e.NdJ("click",function(){e.CHM(n);const p=e.oxw().index,c=e.oxw();return e.KtG(c.removeBank(p))}),e.O4$(),e.TgZ(1,"svg",80),e._UZ(2,"path",81)(3,"path",82),e.qZA()()}}function ne(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter Bank holder name"),e.qZA())}function re(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Bank Name"),e.qZA())}function ae(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Account No."),e.qZA())}function ie(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Enter your Ifsc code"),e.qZA())}function oe(a,s){if(1&a&&(e.TgZ(0,"div",62)(1,"div",63),e.YNc(2,te,4,0,"span",64),e.qZA(),e.TgZ(3,"div",65)(4,"div",6)(5,"div",7)(6,"label"),e._uU(7,"Bank Holder Name*"),e.qZA(),e._UZ(8,"input",84),e.YNc(9,ne,2,0,"span",9),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Bank Name*"),e.qZA(),e._UZ(14,"input",85),e.YNc(15,re,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Branch"),e.qZA(),e._UZ(20,"input",86),e.qZA()(),e.TgZ(21,"div",6)(22,"div",7)(23,"label"),e._uU(24,"Account No*"),e.qZA(),e._UZ(25,"input",87),e.YNc(26,ae,2,0,"span",9),e.qZA()(),e.TgZ(27,"div",66)(28,"div",7)(29,"label"),e._uU(30,"IFSC Code*"),e.qZA(),e._UZ(31,"input",88),e.YNc(32,ie,2,0,"span",9),e.qZA()()()()),2&a){const n=s.index,r=e.oxw();let p,c,m,d;e.xp6(2),e.Q6J("ngIf",n>0),e.xp6(1),e.Q6J("formGroupName",n),e.xp6(6),e.Q6J("ngIf",(null==(p=r.getBankHolderName(n))?null:p.invalid)&&(null==(p=r.getBankHolderName(n))?null:p.touched)),e.xp6(6),e.Q6J("ngIf",(null==(c=r.getBankName(n))?null:c.invalid)&&(null==(c=r.getBankName(n))?null:c.touched)),e.xp6(11),e.Q6J("ngIf",(null==(m=r.getAccountNo(n))?null:m.invalid)&&(null==(m=r.getAccountNo(n))?null:m.touched)),e.xp6(6),e.Q6J("ngIf",(null==(d=r.getIfscCode(n))?null:d.invalid)&&(null==(d=r.getIfscCode(n))?null:d.touched))}}function se(a,s){if(1&a&&(e.TgZ(0,"option",83),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.s9C("value",n.id),e.xp6(1),e.hij("",n.title," ")}}function le(a,s){1&a&&(e.TgZ(0,"span",57),e._uU(1,"Select Payment Terms"),e.qZA())}function pe(a,s){1&a&&(e.TgZ(0,"span",59),e._uU(1,"Select Balance Type"),e.qZA())}function de(a,s){1&a&&(e.TgZ(0,"span",61),e._uU(1," Enter your Balance"),e.qZA())}function ue(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"button",89),e.NdJ("click",function(){e.CHM(n);const p=e.oxw();return e.KtG(p.submit())}),e._uU(1,"Submit"),e.qZA()}}function ce(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"button",90),e.NdJ("click",function(){e.CHM(n);const p=e.oxw();return e.KtG(p.submit())}),e._UZ(1,"span",91),e._uU(2,"\xa0 Submit"),e.qZA()}}let me=(()=>{class a{constructor(n,r,p,c,m){this.fb=n,this.contactService=r,this.toastr=p,this.router=c,this.coreService=m,this.dateError=null,this.country=[],this.state=[],this.city=[],this.loader=!1}get f(){return this.dealerForm.controls}ngOnInit(){this.dealerForm=this.fb.group({login_access:new o.NI(""),name:new o.NI("",[o.kI.required]),company_name:new o.NI("",[o.kI.required]),mobile_no:new o.NI("",[o.kI.required,o.kI.maxLength(10),o.kI.minLength(10),o.kI.pattern(/^[0-9]*$/)]),telephone_no:new o.NI(""),whatsapp_no:new o.NI("",[o.kI.maxLength(10),o.kI.minLength(10),o.kI.pattern(/^[0-9]*$/)]),email:new o.NI("",[o.kI.email]),remark:new o.NI(""),date_of_birth:new o.NI(""),anniversary_date:new o.NI(""),gst_type:new o.NI(""),gstin:new o.NI("",[o.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),pan_no:new o.NI("",[o.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),apply_tds:new o.NI(""),credit_limit:new o.NI(""),address:this.fb.array([]),bank_id:this.fb.array([]),payment_terms:new o.NI("6"),opening_balance:new o.NI(0,[o.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new o.NI("Cr",[o.kI.required])}),this.getgstType(),this.addAddress(),this.getCountry(),this.selectState(23,0),this.selectCity(28,0),this.getPaymentTerms()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(n=>{this.paymentTerms=n})}addressAdd(){return this.fb.group({address_line_1:"",address_line_2:"",country:new o.NI("23",[o.kI.required]),state:new o.NI("28",[o.kI.required]),city:new o.NI("42",[o.kI.required]),pincode:new o.NI("841226",[o.kI.maxLength(6),o.kI.minLength(6),o.kI.pattern(/^[0-9]*$/)]),address_type:new o.NI("Shipping",[o.kI.required])})}getAddresss(){return this.dealerForm.get("address")}addAddress(){const n=this.getAddresss();this.getAddresss().push(this.addressAdd());const r=n.length-1;this.selectState("23",r).then(()=>{this.selectCity("28",r)})}removeAddress(n){this.getAddresss().removeAt(n)}onGstTypeChange(n){this.selectedGstType=n.target.value}bankAdd(){return this.fb.group({bank_ifsc_code:new o.NI("",[o.kI.required]),bank_name:new o.NI("",[o.kI.required]),branch_name:new o.NI(""),account_no:new o.NI("",[o.kI.required,o.kI.pattern(/^[0-9]*$/)]),account_holder_name:new o.NI("",[o.kI.required])})}getBanks(){return this.dealerForm.get("bank_id")}addBank(){this.getBanks().push(this.bankAdd())}removeBank(n){this.getBanks().removeAt(n)}getgstType(){this.contactService.getTypeOfGst().subscribe(n=>{this.gstType=n})}getCountry(){this.coreService.countryList().subscribe(n=>{this.country=n})}selectState(n,r){return new Promise((p,c)=>{const m=this.getAddresss(),d=m.at(r).get("country");m.at(r).get("pincode").setValue("841226"),d.setValue(n),this.coreService.getStateByCountryId(n).subscribe(v=>{this.state[r]=v;const g=m.at(r);setTimeout(()=>{g.get("state").setValue("28")},0),this.city[r]=[],p()},v=>c(v))})}selectCity(n,r){const p=this.getAddresss();p.at(r).get("state").setValue(n),this.coreService.getCityByStateId(n).subscribe(m=>{this.city[r]=m,setTimeout(()=>{p.at(r).get("city").setValue("42")},100)})}submit(){let n=new FormData;n.append("login_access",this.dealerForm.get("login_access")?.value),n.append("name",this.dealerForm.get("name")?.value),n.append("company_name",this.dealerForm.get("company_name")?.value.toUpperCase()),n.append("mobile_no",this.dealerForm.get("mobile_no")?.value),n.append("telephone_no",this.dealerForm.get("telephone_no")?.value),n.append("whatsapp_no",this.dealerForm.get("whatsapp_no")?.value),n.append("email",this.dealerForm.get("email")?.value),n.append("remark",this.dealerForm.get("remark")?.value),n.append("date_of_birth",this.dealerForm.get("date_of_birth")?.value),n.append("anniversary_date",this.dealerForm.get("anniversary_date")?.value),n.append("gst_type",this.dealerForm.get("gst_type")?.value),n.append("gstin","UnRegistered"!==this.selectedGstType?this.dealerForm.get("gstin")?.value.toUpperCase():""),n.append("pan_no",this.dealerForm.get("pan_no")?.value.toUpperCase()),n.append("apply_tds",this.dealerForm.get("apply_tds")?.value),n.append("credit_limit",this.dealerForm.get("credit_limit")?.value),n.append("payment_terms",this.dealerForm.get("payment_terms")?.value),n.append("opening_balance",this.dealerForm.get("opening_balance")?.value),n.append("opening_balance_type",this.dealerForm.get("opening_balance_type")?.value);const r=this.dealerForm.get("address"),p=[];r.controls.forEach(d=>{const N=d,v={};if(Object.keys(N.controls).forEach(g=>{const T=N.controls[g];v[g]="state"===g||"city"===g||"country"===g?parseInt(T.value):T.value}),"Both"===v.address_type){const g={...v,address_type:"Shipping"},T={...v,address_type:"Billing"};p.push(g),p.push(T)}else p.push(v)}),n.append("address",JSON.stringify(p));const c=this.dealerForm.get("bank_id"),m=[];c.controls.forEach(d=>{const N=d,v={};Object.keys(N.controls).forEach(g=>{const T=N.controls[g];v[g]="account_holder_name"===g||"bank_ifsc_code"===g?T.value.toUpperCase():T.value}),m.push(v)}),n.append("bank_id",JSON.stringify(m)),this.dealerForm.valid?(this.loader=!0,this.contactService.addDealer(n).subscribe(d=>{this.addRes=d,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.dealerForm.reset(),this.router.navigate(["//contacts/dealerList"])):(this.loader=!1,this.toastr.error(this.addRes?.opening_balance[0]),this.addRes?.email&&this.toastr.error(this.addRes?.error?.email[0]))},d=>{this.loader=!1,d.error.msg?(this.toastr.error(d.error.msg),this.mobError=d.error.msg,setTimeout(()=>{this.mobError=""},5e3)):d.error?(this.toastr.error(d.error?.opening_balance[0]),this.toastr.error(d.error?.email[0])):(d.error.dob||d.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.loader=!1,this.dealerForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get login_access(){return this.dealerForm.get("login_access")}get name(){return this.dealerForm.get("name")}get company_name(){return this.dealerForm.get("company_name")}get dob(){return this.dealerForm.get("date_of_birth")}get mobile(){return this.dealerForm.get("mobile_no")}get telephone_no(){return this.dealerForm.get("telephone_no")}get whatsapp_no(){return this.dealerForm.get("whatsapp_no")}get anniversary(){return this.dealerForm.get("anniversary_date")}get email(){return this.dealerForm.get("email")}get remark(){return this.dealerForm.get("remark")}get gst_type(){return this.dealerForm.get("gst_type")}get gstin(){return this.dealerForm.get("gstin")}get opening_balance(){return this.dealerForm.get("opening_balance")}get supplier_type(){return this.dealerForm.get("supplier_type")}get address(){return this.dealerForm.get("address")}get opening_balance_type(){return this.dealerForm.get("opening_balance_type")}get pan_no(){return this.dealerForm.get("pan_no")}get payment_terms(){return this.dealerForm.get("payment_terms")}get apply_tds(){return this.dealerForm.get("apply_tds")}get credit_limit(){return this.dealerForm.get("credit_limit")}countryy(n){return this.getAddresss().controls[n].get("country")}statee(n){return this.getAddresss().controls[n].get("state")}cityy(n){return this.getAddresss().controls[n].get("city")}pincode(n){return this.getAddresss().controls[n].get("pincode")}addressType(n){return this.getAddresss().controls[n].get("address_type")}getBankHolderName(n){return this.getBanks().controls[n].get("account_holder_name")}getAccountNo(n){return this.getBanks().controls[n].get("account_no")}getIfscCode(n){return this.getBanks().controls[n].get("bank_ifsc_code")}getBankName(n){return this.getBanks().controls[n].get("bank_name")}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(o.qu),e.Y36(y.y),e.Y36(b._W),e.Y36(f.F0),e.Y36(t.p))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-dealer"]],decls:151,vars:77,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","company_name","placeholder","Enter Company Name","id","company_name",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Mobile No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass","ngStyle"],["type","text","formControlName","telephone_no","placeholder","Enter Telephone No.","maxlength","11","minlength","11","id","telephone_no",3,"ngClass"],["type","text","formControlName","whatsapp_no","placeholder","Enter Whatsapp No.","maxlength","10","minlength","10","id","whatsapp_no",3,"ngClass"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","date","formControlName","date_of_birth","id","date_of_birth",3,"ngClass"],["type","date","formControlName","anniversary_date","id","anniversary_date",3,"ngClass"],[1,"input-group"],["formControlName","gst_type","id","gst_type",1,"border","hov","gst-type-wrapper",3,"ngClass","change"],["value","","selected","","disabled","",1,"unhov"],["class","unhov",3,"value",4,"ngFor","ngForOf"],["class","text-danger d-block",4,"ngIf"],["class","col-lg-3 col-sm-3 col-12",4,"ngIf"],["type","text","formControlName","pan_no","id","pan_no","placeholder","Enter Pan Number",3,"ngClass"],["type","text","formControlName","credit_limit","placeholder","Enter Credit Limit","id","credit_limit",3,"ngClass"],["type","text","formControlName","remark","placeholder","Enter Remark","id","remark",3,"ngClass"],[1,"address-details-wrapper"],[1,"address-title"],[1,"w-100","text-right","my-3"],[1,"p-0","border-0",3,"click"],[1,"addMore-btn"],[1,"plus-icon"],["formArrayName","address",1,"mb-3","pb-3"],["style","border: 1px solid rgba(145, 158, 171, 0.32); margin-top: 10px;",4,"ngFor","ngForOf"],[1,"bank-details-wrapper"],[1,"d-flex","justify-content-between","align-items-center"],[1,"text-right"],["formArrayName","bank_id"],[1,"col-lg-4","col-sm-4","col-12"],["formControlName","payment_terms","id","payment_terms",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-lg-12"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov","opening-balance-select-wrapper",3,"ngClass"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["type","text","formControlName","opening_balance","id","opening_balance",1,"opening-input-field",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","login_access",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",3,"click",4,"ngIf"],["routerLink","//contacts/dealerList",1,"btn","btn-cancel"],[1,"text-danger"],[1,"unhov",3,"value"],[1,"text-danger","d-block"],["type","text","formControlName","gstin","placeholder","Enter GSTIN No.","id","gstin",1,"gst-field-wrapper",3,"ngClass","ngStyle"],[1,"text-danger","ml-5","pl-5"],[2,"border","1px solid rgba(145, 158, 171, 0.32)","margin-top","10px"],[1,"col-12","d-flex","align-items-center","justify-content-end","mt-2"],["class","btn me-2","style","color: red;",3,"click",4,"ngIf"],[1,"row","m-2",3,"formGroupName"],[1,"col-lg-3","col-sm-3"],["type","text","formControlName","address_line_1","placeholder","Address Line 1"],["type","text","formControlName","address_line_2","placeholder","Address Line 2"],["formControlName","country","id","country",3,"change"],["countryValue",""],["formControlName","state",3,"change"],["stateValue",""],["formControlName","city","id","city"],["type","text","formControlName","pincode","placeholder","Enter Pincode","maxlength","6","minlength","6","id","pincode"],["formControlName","address_type",1,"inp"],["value","Shipping"],["value","Billing"],["value","Both"],[1,"btn","me-2",2,"color","red",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"width","28px","height","28px"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[3,"value"],["type","text","formControlName","account_holder_name","placeholder","Enter Bank Holder Name"],["type","text","formControlName","bank_name","placeholder","Enter Bank Name"],["type","text","formControlName","branch_name","placeholder","Enter Branch Name"],["type","text","formControlName","account_no","placeholder","Enter Account No."],["type","text","formControlName","bank_ifsc_code","placeholder","Enter IFSC Code"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Add Dealer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Dealer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,i,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Company Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,l,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile No.*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,I,2,0,"span",9),e.YNc(28,U,2,1,"span",9),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Telephone No."),e.qZA(),e._UZ(33,"input",12),e.YNc(34,A,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38,"Whatsapp No."),e.qZA(),e._UZ(39,"input",13),e.YNc(40,x,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44,"Email"),e.qZA(),e._UZ(45,"input",14),e.YNc(46,Z,2,0,"span",9),e.qZA()(),e.TgZ(47,"div",6)(48,"div",7)(49,"label"),e._uU(50,"Date of Birth"),e.qZA(),e._UZ(51,"input",15),e.YNc(52,q,2,1,"span",9),e.YNc(53,D,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57,"Anniversary"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,J,2,1,"span",9),e.YNc(60,w,2,0,"span",9),e.qZA()(),e.TgZ(61,"div",6)(62,"div",7)(63,"label"),e._uU(64,"GSTIN "),e.qZA(),e.TgZ(65,"div",17)(66,"select",18),e.NdJ("change",function(c){return r.onGstTypeChange(c)}),e.TgZ(67,"option",19),e._uU(68,"GST type"),e.qZA(),e.YNc(69,F,2,2,"option",20),e.qZA(),e.YNc(70,S,2,0,"span",21),e.qZA()()(),e.YNc(71,P,8,8,"div",22),e.TgZ(72,"div",6)(73,"div",7)(74,"label"),e._uU(75,"Pan Number"),e.qZA(),e._UZ(76,"input",23),e.YNc(77,O,2,0,"span",9),e.qZA()(),e.TgZ(78,"div",6)(79,"div",7)(80,"label"),e._uU(81,"Credit Limit"),e.qZA(),e._UZ(82,"input",24),e.YNc(83,M,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",6)(85,"div",7)(86,"label"),e._uU(87,"Remark"),e.qZA(),e._UZ(88,"input",25),e.YNc(89,Y,2,0,"span",9),e.qZA()(),e.TgZ(90,"div",26)(91,"h4",27),e._uU(92,"Address Details"),e.qZA(),e.TgZ(93,"div",28)(94,"button",29),e.NdJ("click",function(){return r.addAddress()}),e.TgZ(95,"p",30)(96,"span",31),e._uU(97,"+"),e.qZA(),e._uU(98," Add More Address"),e.qZA()()(),e.TgZ(99,"div",32),e.YNc(100,ee,64,11,"div",33),e.qZA()(),e.TgZ(101,"div",34)(102,"div",35)(103,"h4",27),e._uU(104,"Bank Details"),e.qZA(),e.TgZ(105,"div",36)(106,"button",29),e.NdJ("click",function(){return r.addBank()}),e.TgZ(107,"p",30)(108,"span",31),e._uU(109,"+"),e.qZA(),e._uU(110," Add Banks "),e.qZA()()()(),e.TgZ(111,"div",37),e.YNc(112,oe,33,6,"div",33),e.qZA()(),e.TgZ(113,"div",38)(114,"div",7)(115,"label"),e._uU(116,"Select Payment Terms"),e.qZA(),e.TgZ(117,"select",39)(118,"option",40),e._uU(119,"Select Payment Terms"),e.qZA(),e.YNc(120,se,2,2,"option",41),e.qZA(),e.YNc(121,le,2,0,"span",9),e.qZA()(),e.TgZ(122,"div",38)(123,"div",42)(124,"div",43)(125,"label"),e._uU(126,"Opening Balance*"),e.qZA(),e.TgZ(127,"div",17)(128,"div")(129,"select",44)(130,"option",19),e._uU(131,"Balance type"),e.qZA(),e.TgZ(132,"option",45),e._uU(133,"Cr"),e.qZA(),e.TgZ(134,"option",46),e._uU(135,"Dr"),e.qZA()(),e.YNc(136,pe,2,0,"span",21),e.qZA(),e.TgZ(137,"div"),e._UZ(138,"input",47),e.YNc(139,de,2,0,"span",48),e.qZA()()()()(),e.TgZ(140,"div",49)(141,"div",50)(142,"div",51),e._UZ(143,"input",52),e.TgZ(144,"label",53),e._uU(145,"Login Access"),e.qZA()()()(),e.TgZ(146,"div",43),e.YNc(147,ue,2,0,"button",54),e.YNc(148,ce,3,0,"button",55),e.TgZ(149,"a",56),e._uU(150,"Cancel"),e.qZA()()()()()()),2&n&&(e.xp6(8),e.Q6J("formGroup",r.dealerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(45,_,r.f.name.touched&&r.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",r.name&&r.name.invalid&&r.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,_,r.f.company_name.touched&&r.f.company_name.invalid)),e.xp6(1),e.Q6J("ngIf",r.company_name&&r.company_name.invalid&&r.company_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(49,_,r.f.mobile_no.touched&&r.f.mobile_no.invalid))("ngStyle",e.VKq(51,k,r.mobError?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",r.mobile&&r.mobile.invalid&&r.mobile.touched),e.xp6(1),e.Q6J("ngIf",r.mobError),e.xp6(5),e.Q6J("ngClass",e.VKq(53,_,r.f.telephone_no.touched&&r.f.telephone_no.invalid)),e.xp6(1),e.Q6J("ngIf",r.telephone_no&&r.telephone_no.invalid&&r.telephone_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(55,_,r.f.whatsapp_no.touched&&r.f.whatsapp_no.invalid)),e.xp6(1),e.Q6J("ngIf",r.whatsapp_no&&r.whatsapp_no.invalid&&r.whatsapp_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(57,_,r.f.email.touched&&r.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",r.email&&r.email.invalid&&r.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(59,_,r.f.date_of_birth.touched&&r.f.date_of_birth.invalid)),e.xp6(1),e.Q6J("ngIf",r.dateError),e.xp6(1),e.Q6J("ngIf",r.dob&&r.dob.invalid&&r.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(61,_,r.f.anniversary_date.touched&&r.f.anniversary_date.invalid)),e.xp6(1),e.Q6J("ngIf",r.dateError),e.xp6(1),e.Q6J("ngIf",r.anniversary&&r.anniversary.invalid&&r.anniversary.touched),e.xp6(6),e.Q6J("ngClass",e.VKq(63,_,r.f.gst_type.touched&&r.f.gst_type.invalid)),e.xp6(3),e.Q6J("ngForOf",r.gstType),e.xp6(1),e.Q6J("ngIf",r.gst_type&&r.gst_type.invalid&&r.gst_type.touched),e.xp6(1),e.Q6J("ngIf","UnRegistered"!==r.selectedGstType),e.xp6(5),e.Q6J("ngClass",e.VKq(65,_,r.f.pan_no.touched&&r.f.pan_no.invalid)),e.xp6(1),e.Q6J("ngIf",r.pan_no&&r.pan_no.invalid&&r.pan_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(67,_,r.f.credit_limit.touched&&r.f.credit_limit.invalid)),e.xp6(1),e.Q6J("ngIf",r.credit_limit&&r.credit_limit.invalid&&r.credit_limit.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(69,_,r.f.remark.touched&&r.f.remark.invalid)),e.xp6(1),e.Q6J("ngIf",r.remark&&r.remark.invalid&&r.remark.touched),e.xp6(11),e.Q6J("ngForOf",r.getAddresss().controls),e.xp6(12),e.Q6J("ngForOf",r.getBanks().controls),e.xp6(5),e.Q6J("ngClass",e.VKq(71,_,r.f.payment_terms.touched&&r.f.payment_terms.invalid)),e.xp6(3),e.Q6J("ngForOf",r.paymentTerms),e.xp6(1),e.Q6J("ngIf",r.payment_terms&&r.payment_terms.invalid&&r.payment_terms.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(73,_,r.f.opening_balance_type.touched&&r.f.opening_balance_type.invalid)),e.xp6(7),e.Q6J("ngIf",r.opening_balance_type&&r.opening_balance_type.invalid&&r.opening_balance_type.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(75,_,r.f.opening_balance.touched&&r.f.opening_balance.invalid)),e.xp6(1),e.Q6J("ngIf",r.opening_balance&&r.opening_balance.invalid&&r.opening_balance.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!1),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!r.loader),e.xp6(1),e.Q6J("ngIf",r.loader))},dependencies:[h.mk,h.sg,h.O5,h.PC,f.yS,o._Y,o.YN,o.Kr,o.Fj,o.Wl,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.sg,o.u,o.x0,o.CE],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.gst-type-wrapper[_ngcontent-%COMP%]{border-radius:5px 0 0 5px}.address-title[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700}.addMore-btn[_ngcontent-%COMP%]{background-color:#ff9f43;color:#fff;border-radius:5px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;padding:0 12px;cursor:pointer}.plus-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 5px 0 0}.gst-field-wrapper[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}.opening-balance-select-wrapper[_ngcontent-%COMP%]{padding:10px;border-radius:5px 0 0 5px!important}.opening-input-field[_ngcontent-%COMP%]{border-radius:0 5px 5px 0!important}"]}),a})();var _e=u(30597);const E=JSON.parse(localStorage.getItem("auth"));let ge;E&&E.map(s=>{"master"===s.content_type.app_label&&"dealer"===s.content_type.model&&"add_dealer"==s.codename&&(ge=s.codename)});const he=[{path:"",component:me,canActivate:[_e.l],data:{allowedRoles:["add_dealer"]}}];let ve=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[f.Bz.forChild(he),f.Bz]}),a})();var fe=u(30906);let ye=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.ez,ve,fe.ZU,o.u5,o.UX,b.Rh]}),a})()},30597:($,C,u)=>{u.d(C,{l:()=>b});var h=u(94650),f=u(4392),o=u(97185),e=u(42917),y=u(80927);let b=(()=>{class t{constructor(l,I,U,A,x){this.router=l,this.Arout=I,this.toastr=U,this.profileService=A,this.coreService=x}canActivate(l,I){const U=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(A=>{this.userDetails=A,this.permissions=this.userDetails?.permission}),U){const A=l.data.allowedRoles,x=U.some(Z=>A.includes(Z.codename));if(this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(Z);const q=Z?.permission,D=this.profileService.getUserDetails();(!D||D.length!==q.length)&&(this.profileService.setUserPermission(q),window.location.reload())}),x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(l){return new(l||t)(h.LFG(f.F0),h.LFG(f.gz),h.LFG(o._W),h.LFG(e.J),h.LFG(y.p))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);