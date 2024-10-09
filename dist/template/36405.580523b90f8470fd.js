"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[36405],{25062:(b,_,o)=>{o.d(_,{y:()=>e});var u=o(92340),d=o(94650),n=o(80529);let e=(()=>{class h{constructor(t){this.http=t,this.apiUrl=`${u.N.api}`}UpdateDefaultAddress(t){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",t)}GetUsedPoints(t){return this.http.get(`${this.apiUrl+"/pv-api/total_use_point/?user_id="}${t}`)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,r)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,r)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,r)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,r)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,r)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,r)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,r)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,r)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,r)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,r)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return h.\u0275fac=function(t){return new(t||h)(d.LFG(n.eN))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},36405:(b,_,o)=>{o.r(_),o.d(_,{AddUserModule:()=>x});var u=o(36895),d=o(4392),n=o(24006),e=o(94650),h=o(25062),A=o(97185),t=o(80927);function r(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Name "),e.qZA())}function p(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Username "),e.qZA())}function y(i,l){if(1&i&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&i){const a=e.oxw();e.xp6(1),e.Oqu(a.errUser)}}function f(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Enter your mobile No"),e.qZA())}function g(i,l){if(1&i&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&i){const a=e.oxw();e.xp6(1),e.Oqu(a.errPhone)}}function $(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Enter Valid Email"),e.qZA())}function v(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Password "),e.qZA())}function m(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Select User Type"),e.qZA())}function U(i,l){if(1&i&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&i){const a=l.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(a.name)}}function T(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Select User role"),e.qZA())}function S(i,l){if(1&i&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&i){const a=l.$implicit;e.s9C("value",null==a?null:a.id),e.xp6(1),e.Oqu(null==a?null:a.title)}}function P(i,l){1&i&&(e.TgZ(0,"span",34),e._uU(1,"Select Branch"),e.qZA())}function D(i,l){1&i&&(e.TgZ(0,"button",36),e._uU(1,"Submit"),e.qZA())}function q(i,l){1&i&&(e.TgZ(0,"button",37),e._UZ(1,"span",38),e._uU(2,"\xa0 Submit"),e.qZA())}const c=function(i){return{"is-invalid":i}},Z=function(i){return{border:i}};let E=(()=>{class i{constructor(a,s,I,w,M){this.fb=a,this.contactService=s,this.toastr=I,this.router=w,this.coreService=M,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.userForm=this.fb.group({phone_number:new n.NI("",[n.kI.required]),username:new n.NI("",[n.kI.required]),name:new n.NI("",[n.kI.required]),email:new n.NI(""),password:new n.NI("",[n.kI.required]),active:new n.NI(""),user_type:new n.NI(""),role:new n.NI(""),branch:new n.NI("")}),this.getBranch(),this.getGroup()}getBranch(){this.contactService.getBranch().subscribe(a=>{this.branchList=a})}getGroup(){this.contactService.getPermissionGroup().subscribe(a=>{this.groupList=a})}submit(){this.userForm.valid?(this.loader=!0,this.contactService.addUser(this.userForm.value).subscribe(a=>{this.addRes=a,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//settings/user"])):(this.loader=!1,this.addRes.phone_number?(this.toastr.error(this.addRes.phone_number),this.errPhone=this.addRes.phone_number,setTimeout(()=>{this.errPhone=""},5e3)):this.addRes.username&&(this.toastr.error(this.addRes.username),this.errUser=this.addRes.username,setTimeout(()=>{this.errUser=""},5e3)))},a=>{this.loader=!1})):(this.userForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}get branch(){return this.userForm.get("branch")}get role(){return this.userForm.get("role")}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(n.qu),e.Y36(h.y),e.Y36(A._W),e.Y36(d.F0),e.Y36(t.p))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-user"]],decls:91,vars:48,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","placeholder","Enter UserName","id","username",3,"ngClass","ngStyle"],["type","text","formControlName","phone_number","placeholder","Enter Mobile No.","id","phone_number","minlength","10","maxlength","10",3,"ngClass","ngStyle"],["type","text","formControlName","email","placeholder","Enter Valid Email","id","email",3,"ngClass"],["type","text","formControlName","password","placeholder","Enter Password","id","password",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Dealer"],["value","Employee"],["value","Customer"],["value","Transport"],["formControlName","role","id","role",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","branch","id","branch",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/user",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new User "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return s.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,r,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,p,2,0,"span",9),e.YNc(22,y,2,1,"span",9),e.qZA()(),e.TgZ(23,"div",6)(24,"div",7)(25,"label"),e._uU(26,"Mobile Number*"),e.qZA(),e._UZ(27,"input",11),e.YNc(28,f,2,0,"span",9),e.YNc(29,g,2,1,"span",9),e.qZA()(),e.TgZ(30,"div",6)(31,"div",7)(32,"label"),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",12),e.YNc(35,$,2,0,"span",9),e.qZA()(),e.TgZ(36,"div",6)(37,"div",7)(38,"label"),e._uU(39,"Password*"),e.qZA(),e._UZ(40,"input",13),e.YNc(41,v,2,0,"span",9),e.qZA()(),e.TgZ(42,"div",6)(43,"div",7)(44,"label"),e._uU(45,"Select User Type"),e.qZA(),e.TgZ(46,"select",14)(47,"option",15),e._uU(48,"Select User Type"),e.qZA(),e.TgZ(49,"option",16),e._uU(50,"Supplier"),e.qZA(),e.TgZ(51,"option",17),e._uU(52,"Vendor"),e.qZA(),e.TgZ(53,"option",18),e._uU(54,"Dealer"),e.qZA(),e.TgZ(55,"option",19),e._uU(56,"Employee"),e.qZA(),e.TgZ(57,"option",20),e._uU(58,"Customer"),e.qZA(),e.TgZ(59,"option",21),e._uU(60,"Transport"),e.qZA()(),e.YNc(61,m,2,0,"span",9),e.qZA()(),e.TgZ(62,"div",6)(63,"div",7)(64,"label"),e._uU(65,"Select User Role"),e.qZA(),e.TgZ(66,"select",22)(67,"option",15),e._uU(68,"Select User Role"),e.qZA(),e.YNc(69,U,2,2,"option",23),e.qZA(),e.YNc(70,T,2,0,"span",9),e.qZA()(),e.TgZ(71,"div",6)(72,"div",7)(73,"label"),e._uU(74,"Select Branch"),e.qZA(),e.TgZ(75,"select",24)(76,"option",15),e._uU(77,"Select Branch"),e.qZA(),e.YNc(78,S,2,2,"option",23),e.qZA(),e.YNc(79,P,2,0,"span",9),e.qZA()(),e.TgZ(80,"div",25)(81,"div",26)(82,"div",27),e._UZ(83,"input",28),e.TgZ(84,"label",29),e._uU(85,"Active"),e.qZA()()()(),e.TgZ(86,"div",30),e.YNc(87,D,2,0,"button",31),e.YNc(88,q,3,0,"button",32),e.TgZ(89,"a",33),e._uU(90,"Cancel"),e.qZA()()()()()()),2&a&&(e.xp6(8),e.Q6J("formGroup",s.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(28,c,s.f.name.touched&&s.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",s.name&&s.name.invalid&&s.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,c,s.f.username.touched&&s.f.username.invalid))("ngStyle",e.VKq(32,Z,s.errUser?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",s.username&&s.username.invalid&&s.username.touched),e.xp6(1),e.Q6J("ngIf",s.errUser),e.xp6(5),e.Q6J("ngClass",e.VKq(34,c,s.f.phone_number.touched&&s.f.phone_number.invalid))("ngStyle",e.VKq(36,Z,s.errPhone?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",s.mobile_no&&s.mobile_no.invalid&&s.mobile_no.touched),e.xp6(1),e.Q6J("ngIf",s.errPhone),e.xp6(5),e.Q6J("ngClass",e.VKq(38,c,s.f.email.touched&&s.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",s.email&&s.email.invalid&&s.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,c,s.f.password.touched&&s.f.password.invalid)),e.xp6(1),e.Q6J("ngIf",s.password&&s.password.invalid&&s.password.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,c,s.f.user_type.touched&&s.f.user_type.invalid)),e.xp6(15),e.Q6J("ngIf",s.user_type&&s.user_type.invalid&&s.user_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,c,s.f.role.touched&&s.f.role.invalid)),e.xp6(3),e.Q6J("ngForOf",s.groupList),e.xp6(1),e.Q6J("ngIf",s.role&&s.role.invalid&&s.role.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,c,s.f.branch.touched&&s.f.branch.invalid)),e.xp6(3),e.Q6J("ngForOf",s.branchList),e.xp6(1),e.Q6J("ngIf",s.branch&&s.branch.invalid&&s.branch.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!s.loader),e.xp6(1),e.Q6J("ngIf",s.loader))},dependencies:[u.mk,u.sg,u.O5,u.PC,d.yS,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.wO,n.nD,n.sg,n.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),i})();var N=o(30597);const C=JSON.parse(localStorage.getItem("auth"));let F;C&&C.map(l=>{"master"===l.content_type.app_label&&"user"===l.content_type.model&&"add_user"==l.codename&&(F=l.codename)});const J=[{path:"",component:E,canActivate:[N.l],data:{allowedRoles:["add_user"]}}];let O=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(J),d.Bz]}),i})(),x=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,O,n.u5,n.UX]}),i})()},30597:(b,_,o)=>{o.d(_,{l:()=>A});var u=o(94650),d=o(4392),n=o(97185),e=o(42917),h=o(80927);let A=(()=>{class t{constructor(p,y,f,g,$){this.router=p,this.Arout=y,this.toastr=f,this.profileService=g,this.coreService=$}canActivate(p,y){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),f){const g=p.data.allowedRoles,$=f.some(m=>g.includes(m.codename));let v=this.coreService.profileData$.value;if(v&&v.username){this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const m=v?.permission,U=this.profileService.getUserDetails();(!U||U.length!==m.length)&&(this.profileService.setUserPermission(m),window.location.reload())}else this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const U=m?.permission,T=this.profileService.getUserDetails();(!T||T.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())});if($)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(p){return new(p||t)(u.LFG(d.F0),u.LFG(d.gz),u.LFG(n._W),u.LFG(e.J),u.LFG(h.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);