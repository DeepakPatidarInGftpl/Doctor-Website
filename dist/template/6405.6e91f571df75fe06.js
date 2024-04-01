"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6405],{36405:(q,f,i)=>{i.r(f),i.d(f,{AddUserModule:()=>O});var a=i(36895),p=i(89299),n=i(24006),e=i(94650),b=i(25062),Z=i(97185),l=i(80927);function A(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Name "),e.qZA())}function m(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Username "),e.qZA())}function _(t,o){if(1&t&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Oqu(s.errUser)}}function c(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Enter your mobile No"),e.qZA())}function u(t,o){if(1&t&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Oqu(s.errPhone)}}function g(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Enter Valid Email"),e.qZA())}function h(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Enter your Password "),e.qZA())}function v(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Select User Type"),e.qZA())}function U(t,o){if(1&t&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&t){const s=o.$implicit;e.s9C("value",s.id),e.xp6(1),e.Oqu(s.name)}}function N(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Select User role"),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&t){const s=o.$implicit;e.s9C("value",null==s?null:s.id),e.xp6(1),e.Oqu(null==s?null:s.title)}}function I(t,o){1&t&&(e.TgZ(0,"span",34),e._uU(1,"Select Branch"),e.qZA())}function J(t,o){1&t&&(e.TgZ(0,"button",36),e._uU(1,"Submit"),e.qZA())}function F(t,o){1&t&&(e.TgZ(0,"button",37),e._UZ(1,"span",38),e._uU(2,"\xa0 Submit"),e.qZA())}const d=function(t){return{"is-invalid":t}},T=function(t){return{border:t}};let w=(()=>{class t{constructor(s,r,y,M,Q){this.fb=s,this.contactService=r,this.toastr=y,this.router=M,this.coreService=Q,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.userForm=this.fb.group({phone_number:new n.NI("",[n.kI.required]),username:new n.NI("",[n.kI.required]),name:new n.NI("",[n.kI.required]),email:new n.NI(""),password:new n.NI("",[n.kI.required]),active:new n.NI(""),user_type:new n.NI(""),role:new n.NI(""),branch:new n.NI("")}),this.getBranch(),this.getGroup()}getBranch(){this.contactService.getBranch().subscribe(s=>{this.branchList=s})}getGroup(){this.contactService.getPermissionGroup().subscribe(s=>{this.groupList=s})}submit(){this.userForm.valid?(this.loader=!0,this.contactService.addUser(this.userForm.value).subscribe(s=>{this.addRes=s,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//settings/user"])):(this.loader=!1,this.addRes.phone_number?(this.toastr.error(this.addRes.phone_number),this.errPhone=this.addRes.phone_number,setTimeout(()=>{this.errPhone=""},5e3)):this.addRes.username&&(this.toastr.error(this.addRes.username),this.errUser=this.addRes.username,setTimeout(()=>{this.errUser=""},5e3)))},s=>{this.loader=!1})):(this.userForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}get branch(){return this.userForm.get("branch")}get role(){return this.userForm.get("role")}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(n.qu),e.Y36(b.y),e.Y36(Z._W),e.Y36(p.F0),e.Y36(l.p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-user"]],decls:91,vars:48,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","placeholder","Enter UserName","id","username",3,"ngClass","ngStyle"],["type","text","formControlName","phone_number","placeholder","Enter Mobile No.","id","phone_number","minlength","10","maxlength","10",3,"ngClass","ngStyle"],["type","text","formControlName","email","placeholder","Enter Valid Email","id","email",3,"ngClass"],["type","text","formControlName","password","placeholder","Enter Password","id","password",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Dealer"],["value","Employee"],["value","Customer"],["value","Transport"],["formControlName","role","id","role",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","branch","id","branch",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/user",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new User "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,A,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,m,2,0,"span",9),e.YNc(22,_,2,1,"span",9),e.qZA()(),e.TgZ(23,"div",6)(24,"div",7)(25,"label"),e._uU(26,"Mobile Number*"),e.qZA(),e._UZ(27,"input",11),e.YNc(28,c,2,0,"span",9),e.YNc(29,u,2,1,"span",9),e.qZA()(),e.TgZ(30,"div",6)(31,"div",7)(32,"label"),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",12),e.YNc(35,g,2,0,"span",9),e.qZA()(),e.TgZ(36,"div",6)(37,"div",7)(38,"label"),e._uU(39,"Password*"),e.qZA(),e._UZ(40,"input",13),e.YNc(41,h,2,0,"span",9),e.qZA()(),e.TgZ(42,"div",6)(43,"div",7)(44,"label"),e._uU(45,"Select User Type"),e.qZA(),e.TgZ(46,"select",14)(47,"option",15),e._uU(48,"Select User Type"),e.qZA(),e.TgZ(49,"option",16),e._uU(50,"Supplier"),e.qZA(),e.TgZ(51,"option",17),e._uU(52,"Vendor"),e.qZA(),e.TgZ(53,"option",18),e._uU(54,"Dealer"),e.qZA(),e.TgZ(55,"option",19),e._uU(56,"Employee"),e.qZA(),e.TgZ(57,"option",20),e._uU(58,"Customer"),e.qZA(),e.TgZ(59,"option",21),e._uU(60,"Transport"),e.qZA()(),e.YNc(61,v,2,0,"span",9),e.qZA()(),e.TgZ(62,"div",6)(63,"div",7)(64,"label"),e._uU(65,"Select User Role"),e.qZA(),e.TgZ(66,"select",22)(67,"option",15),e._uU(68,"Select User Role"),e.qZA(),e.YNc(69,U,2,2,"option",23),e.qZA(),e.YNc(70,N,2,0,"span",9),e.qZA()(),e.TgZ(71,"div",6)(72,"div",7)(73,"label"),e._uU(74,"Select Branch"),e.qZA(),e.TgZ(75,"select",24)(76,"option",15),e._uU(77,"Select Branch"),e.qZA(),e.YNc(78,S,2,2,"option",23),e.qZA(),e.YNc(79,I,2,0,"span",9),e.qZA()(),e.TgZ(80,"div",25)(81,"div",26)(82,"div",27),e._UZ(83,"input",28),e.TgZ(84,"label",29),e._uU(85,"Active"),e.qZA()()()(),e.TgZ(86,"div",30),e.YNc(87,J,2,0,"button",31),e.YNc(88,F,3,0,"button",32),e.TgZ(89,"a",33),e._uU(90,"Cancel"),e.qZA()()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",r.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(28,d,r.f.name.touched&&r.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",r.name&&r.name.invalid&&r.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,d,r.f.username.touched&&r.f.username.invalid))("ngStyle",e.VKq(32,T,r.errUser?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",r.username&&r.username.invalid&&r.username.touched),e.xp6(1),e.Q6J("ngIf",r.errUser),e.xp6(5),e.Q6J("ngClass",e.VKq(34,d,r.f.phone_number.touched&&r.f.phone_number.invalid))("ngStyle",e.VKq(36,T,r.errPhone?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",r.mobile_no&&r.mobile_no.invalid&&r.mobile_no.touched),e.xp6(1),e.Q6J("ngIf",r.errPhone),e.xp6(5),e.Q6J("ngClass",e.VKq(38,d,r.f.email.touched&&r.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",r.email&&r.email.invalid&&r.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,d,r.f.password.touched&&r.f.password.invalid)),e.xp6(1),e.Q6J("ngIf",r.password&&r.password.invalid&&r.password.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,d,r.f.user_type.touched&&r.f.user_type.invalid)),e.xp6(15),e.Q6J("ngIf",r.user_type&&r.user_type.invalid&&r.user_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,d,r.f.role.touched&&r.f.role.invalid)),e.xp6(3),e.Q6J("ngForOf",r.groupList),e.xp6(1),e.Q6J("ngIf",r.role&&r.role.invalid&&r.role.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,d,r.f.branch.touched&&r.f.branch.invalid)),e.xp6(3),e.Q6J("ngForOf",r.branchList),e.xp6(1),e.Q6J("ngIf",r.branch&&r.branch.invalid&&r.branch.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!r.loader),e.xp6(1),e.Q6J("ngIf",r.loader))},dependencies:[a.mk,a.sg,a.O5,a.PC,p.yS,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.wO,n.nD,n.sg,n.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var x=i(30597);const C=JSON.parse(localStorage.getItem("auth"));let E;C&&C.map(o=>{"master"===o.content_type.app_label&&"user"===o.content_type.model&&"add_user"==o.codename&&(E=o.codename)});const P=[{path:"",component:w,canActivate:[x.l],data:{allowedRoles:["add_user"]}}];let R=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(P),p.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,R,n.u5,n.UX]}),t})()},30597:(q,f,i)=>{i.d(f,{l:()=>Z});var a=i(94650),p=i(89299),n=i(97185),e=i(42917),b=i(80927);let Z=(()=>{class l{constructor(m,_,c,u,g){this.router=m,this.Arout=_,this.toastr=c,this.profileService=u,this.coreService=g}canActivate(m,_){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),c){const u=m.data.allowedRoles;console.log(u,"allowedRoles");const g=c.some(h=>u.includes(h.codename));if(console.log(g),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const v=h?.permission,U=this.profileService.getUserDetails();(!U||U.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(m){return new(m||l)(a.LFG(p.F0),a.LFG(p.gz),a.LFG(n._W),a.LFG(e.J),a.LFG(b.p))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);