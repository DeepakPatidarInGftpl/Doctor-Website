"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[76114],{25062:(Z,_,o)=>{o.d(_,{y:()=>e});var u=o(92340),h=o(94650),l=o(80529);let e=(()=>{class d{constructor(t){this.http=t,this.apiUrl=`${u.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,r)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,r)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,r)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,r)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,r)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,r)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,r)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,r)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,r)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,r)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return d.\u0275fac=function(t){return new(t||d)(h.LFG(l.eN))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},76114:(Z,_,o)=>{o.r(_),o.d(_,{UpdateUserModule:()=>N});var u=o(36895),h=o(4392),l=o(24006),e=o(94650),d=o(25062),b=o(97185);function t(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Name "),e.qZA())}function r(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Username "),e.qZA())}function i(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Mobile No."),e.qZA())}function y(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Enter Valid Email"),e.qZA())}function f(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Select User Type"),e.qZA())}function c(s,n){if(1&s&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&s){const a=n.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(a.name)}}function $(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Select User role"),e.qZA())}function g(s,n){if(1&s&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&s){const a=n.$implicit;e.s9C("value",null==a?null:a.id),e.xp6(1),e.Oqu(null==a?null:a.title)}}function m(s,n){1&s&&(e.TgZ(0,"span",31),e._uU(1,"Select branch"),e.qZA())}function v(s,n){1&s&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function T(s,n){1&s&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2," \xa0 Submit"),e.qZA())}const U=function(s){return{"is-invalid":s}};let I=(()=>{class s{constructor(a,p,A,F,M){this.fb=a,this.contactService=p,this.toastr=A,this.router=F,this.Arout=M,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.userForm=this.fb.group({phone_number:new l.NI("",[l.kI.required]),username:new l.NI(""),name:new l.NI(""),email:new l.NI(""),active:new l.NI(""),user_type:new l.NI(""),role:new l.NI(""),branch:new l.NI("")}),this.contactService.getUserById(this.id).subscribe(a=>{this.userForm.patchValue(a),this.userForm.get("branch")?.patchValue(a?.branch?.id),this.userForm.get("user_type")?.patchValue(a?.user_type),this.userForm.get("role")?.patchValue(a?.role)}),this.getBranch(),this.getGroup()}getBranch(){this.contactService.getBranch().subscribe(a=>{this.branchList=a})}getGroup(){this.contactService.getPermissionGroup().subscribe(a=>{this.groupList=a})}submit(){this.userForm.valid?(this.loader=!0,this.contactService.updateUser(this.userForm.value,this.id).subscribe(a=>{this.addRes=a,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//settings/user"])):(this.loader=!1,this.toastr.error(this.addRes.error),this.addRes.phone_number?this.toastr.error(this.addRes.phone_number):this.addRes.username&&this.toastr.error(this.addRes.username))},a=>{this.loader=!1,this.toastr.error("password",a?.error?.password[0])})):(this.userForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}get branch(){return this.userForm.get("branch")}get role(){return this.userForm.get("role")}}return s.\u0275fac=function(a){return new(a||s)(e.Y36(l.qu),e.Y36(d.y),e.Y36(b._W),e.Y36(h.F0),e.Y36(h.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-update-user"]],decls:79,vars:36,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","placeholder","Enter User Name","id","username",3,"ngClass"],["type","text","formControlName","phone_number","placeholder","Enter Mobile No.","id","phone_number","minlength","10","maxlength","10",3,"ngClass"],["type","text","formControlName","email","id","email","placeholder","Enter Valid Email",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Employee"],["value","Customer"],["formControlName","role","id","role",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","branch","id","branch",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/user",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,p){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit Update "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return p.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,t,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,r,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,i,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,y,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Select User Type"),e.qZA(),e.TgZ(38,"select",13)(39,"option",14),e._uU(40,"Select User Type"),e.qZA(),e.TgZ(41,"option",15),e._uU(42,"Supplier"),e.qZA(),e.TgZ(43,"option",16),e._uU(44,"Vendor"),e.qZA(),e.TgZ(45,"option",17),e._uU(46,"Employee"),e.qZA(),e.TgZ(47,"option",18),e._uU(48,"Customer"),e.qZA()(),e.YNc(49,f,2,0,"span",9),e.qZA()(),e.TgZ(50,"div",6)(51,"div",7)(52,"label"),e._uU(53,"Select User Role"),e.qZA(),e.TgZ(54,"select",19)(55,"option",14),e._uU(56,"Select User Role"),e.qZA(),e.YNc(57,c,2,2,"option",20),e.qZA(),e.YNc(58,$,2,0,"span",9),e.qZA()(),e.TgZ(59,"div",6)(60,"div",7)(61,"label"),e._uU(62,"Select Branch"),e.qZA(),e.TgZ(63,"select",21)(64,"option",14),e._uU(65,"Select Branch"),e.qZA(),e.YNc(66,g,2,2,"option",20),e.qZA(),e.YNc(67,m,2,0,"span",9),e.qZA()(),e.TgZ(68,"div",22)(69,"div",23)(70,"div",24),e._UZ(71,"input",25),e.TgZ(72,"label",26),e._uU(73,"Active"),e.qZA()()()(),e.TgZ(74,"div",27),e.YNc(75,v,2,0,"button",28),e.YNc(76,T,3,0,"button",29),e.TgZ(77,"a",30),e._uU(78,"Cancel"),e.qZA()()()()()()),2&a&&(e.xp6(8),e.Q6J("formGroup",p.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(22,U,p.f.name.touched&&p.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",p.name&&p.name.invalid&&p.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(24,U,p.f.username.touched&&p.f.username.invalid)),e.xp6(1),e.Q6J("ngIf",p.username&&p.username.invalid&&p.username.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(26,U,p.f.phone_number.touched&&p.f.phone_number.invalid)),e.xp6(1),e.Q6J("ngIf",p.mobile_no&&p.mobile_no.invalid&&p.mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,U,p.f.email.touched&&p.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",p.email&&p.email.invalid&&p.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,U,p.f.user_type.touched&&p.f.user_type.invalid)),e.xp6(11),e.Q6J("ngIf",p.user_type&&p.user_type.invalid&&p.user_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(32,U,p.f.role.touched&&p.f.role.invalid)),e.xp6(3),e.Q6J("ngForOf",p.groupList),e.xp6(1),e.Q6J("ngIf",p.role&&p.role.invalid&&p.role.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,U,p.f.branch.touched&&p.f.branch.invalid)),e.xp6(3),e.Q6J("ngForOf",p.branchList),e.xp6(1),e.Q6J("ngIf",p.branch&&p.branch.invalid&&p.branch.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!p.loader),e.xp6(1),e.Q6J("ngIf",p.loader))},dependencies:[u.mk,u.sg,u.O5,h.yS,l._Y,l.YN,l.Kr,l.Fj,l.Wl,l.EJ,l.JJ,l.JL,l.wO,l.nD,l.sg,l.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),s})();var S=o(30597);const C=JSON.parse(localStorage.getItem("auth"));let D;C&&C.map(n=>{"master"===n.content_type.app_label&&"user"===n.content_type.model&&"change_user"==n.codename&&(D=n.codename)});const E=[{path:"",component:I,canActivate:[S.l],data:{allowedRoles:["change_user"]}}];let P=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.Bz.forChild(E),h.Bz]}),s})(),N=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,P,l.u5,l.UX]}),s})()},30597:(Z,_,o)=>{o.d(_,{l:()=>b});var u=o(94650),h=o(4392),l=o(97185),e=o(42917),d=o(80927);let b=(()=>{class t{constructor(i,y,f,c,$){this.router=i,this.Arout=y,this.toastr=f,this.profileService=c,this.coreService=$}canActivate(i,y){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),f){const c=i.data.allowedRoles,$=f.some(m=>c.includes(m.codename));let g=this.coreService.profileData$.value;if(g&&g.username){this.userDetails=g,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(g);const m=g?.permission,v=this.profileService.getUserDetails();(!v||v.length!==m.length)&&(this.profileService.setUserPermission(m),window.location.reload())}else this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const v=m?.permission,T=this.profileService.getUserDetails();(!T||T.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())});if($)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(i){return new(i||t)(u.LFG(h.F0),u.LFG(h.gz),u.LFG(l._W),u.LFG(e.J),u.LFG(d.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);