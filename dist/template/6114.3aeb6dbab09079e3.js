"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6114],{76114:(C,c,a)=>{a.r(c),a.d(c,{UpdateUserModule:()=>x});var i=a(36895),l=a(88996),r=a(24006),e=a(94650),u=a(25062),_=a(97185);function p(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your name "),e.qZA())}function g(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your username "),e.qZA())}function d(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your mobile No"),e.qZA())}function h(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Remark"),e.qZA())}function f(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Select User Type"),e.qZA())}function U(t,s){if(1&t&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&t){const o=s.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.name)}}function T(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Select User role"),e.qZA())}function A(t,s){if(1&t&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&t){const o=s.$implicit;e.s9C("value",null==o?null:o.id),e.xp6(1),e.Oqu(null==o?null:o.title)}}function y(t,s){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Select branch"),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2," \xa0 Submit"),e.qZA())}const m=function(t){return{"is-invalid":t}};let F=(()=>{class t{constructor(o,n,Z,R,M){this.fb=o,this.contactService=n,this.toastr=Z,this.router=R,this.Arout=M,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.userForm=this.fb.group({phone_number:new r.NI("",[r.kI.required]),username:new r.NI(""),name:new r.NI(""),email:new r.NI(""),active:new r.NI(""),user_type:new r.NI(""),role:new r.NI(""),branch:new r.NI("")}),this.contactService.getUserById(this.id).subscribe(o=>{console.log(o),this.userForm.patchValue(o),this.userForm.get("branch")?.patchValue(o?.branch),this.userForm.get("role")?.patchValue(o?.role)}),this.getBranch(),this.getGroup()}getBranch(){this.contactService.getBranch().subscribe(o=>{console.log(o),this.branchList=o})}getGroup(){this.contactService.getPermissionGroup().subscribe(o=>{console.log(o),this.groupList=o})}submit(){console.log(this.userForm.value),this.userForm.valid?(this.loader=!0,this.contactService.updateUser(this.userForm.value,this.id).subscribe(o=>{console.log(o),this.addRes=o,"True"==this.addRes.Is_Success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//settings/user"])):(this.loader=!1,this.addRes.phone_number?this.toastr.error(this.addRes.phone_number):this.addRes.username&&this.toastr.error(this.addRes.username))},o=>{this.loader=!1,this.toastr.error("password",o?.error?.password[0])})):(this.userForm.markAllAsTouched(),console.log("hhhhhh"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}get branch(){return this.userForm.get("branch")}get role(){return this.userForm.get("role")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(u.y),e.Y36(_._W),e.Y36(l.F0),e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-update-user"]],decls:79,vars:36,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","id","username",3,"ngClass"],["type","text","formControlName","phone_number","id","phone_number","minlength","10","maxlength","10",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Employee"],["value","Customer"],["formControlName","role","id","role",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","branch","id","branch",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//contacts/user",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Update "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,p,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,g,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,d,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,h,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"User Type"),e.qZA(),e.TgZ(38,"select",13)(39,"option",14),e._uU(40,"Select User Type"),e.qZA(),e.TgZ(41,"option",15),e._uU(42,"Supplier"),e.qZA(),e.TgZ(43,"option",16),e._uU(44,"Vendor"),e.qZA(),e.TgZ(45,"option",17),e._uU(46,"Employee"),e.qZA(),e.TgZ(47,"option",18),e._uU(48,"Customer"),e.qZA()(),e.YNc(49,f,2,0,"span",9),e.qZA()(),e.TgZ(50,"div",6)(51,"div",7)(52,"label"),e._uU(53,"User Role"),e.qZA(),e.TgZ(54,"select",19)(55,"option",14),e._uU(56,"Select User Role"),e.qZA(),e.YNc(57,U,2,2,"option",20),e.qZA(),e.YNc(58,T,2,0,"span",9),e.qZA()(),e.TgZ(59,"div",6)(60,"div",7)(61,"label"),e._uU(62,"Branch"),e.qZA(),e.TgZ(63,"select",21)(64,"option",14),e._uU(65,"Select Branch"),e.qZA(),e.YNc(66,A,2,2,"option",20),e.qZA(),e.YNc(67,y,2,0,"span",9),e.qZA()(),e.TgZ(68,"div",22)(69,"div",23)(70,"div",24),e._UZ(71,"input",25),e.TgZ(72,"label",26),e._uU(73,"Active"),e.qZA()()()(),e.TgZ(74,"div",27),e.YNc(75,q,2,0,"button",28),e.YNc(76,N,3,0,"button",29),e.TgZ(77,"a",30),e._uU(78,"Cancel"),e.qZA()()()()()()),2&o&&(e.xp6(8),e.Q6J("formGroup",n.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(22,m,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(24,m,n.f.username.touched&&n.f.username.invalid)),e.xp6(1),e.Q6J("ngIf",n.username&&n.username.invalid&&n.username.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(26,m,n.f.phone_number.touched&&n.f.phone_number.invalid)),e.xp6(1),e.Q6J("ngIf",n.mobile_no&&n.mobile_no.invalid&&n.mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,m,n.f.email.touched&&n.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,m,n.f.user_type.touched&&n.f.user_type.invalid)),e.xp6(11),e.Q6J("ngIf",n.user_type&&n.user_type.invalid&&n.user_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(32,m,n.f.role.touched&&n.f.role.invalid)),e.xp6(3),e.Q6J("ngForOf",n.groupList),e.xp6(1),e.Q6J("ngIf",n.role&&n.role.invalid&&n.role.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,m,n.f.branch.touched&&n.f.branch.invalid)),e.xp6(3),e.Q6J("ngForOf",n.branchList),e.xp6(1),e.Q6J("ngIf",n.branch&&n.branch.invalid&&n.branch.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!n.loader),e.xp6(1),e.Q6J("ngIf",n.loader))},dependencies:[i.mk,i.sg,i.O5,l.yS,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var I=a(30597);const b=JSON.parse(localStorage.getItem("auth"));let v;b&&b.permission&&b.permission.map(s=>{"master"===s.content_type.app_label&&"user"===s.content_type.model&&"change_user"==s.codename&&(v=s.codename,console.log(v))});const J=[{path:"",component:F,canActivate:[I.l],data:{allowedRoles:[v]}}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(J),l.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,S,r.u5,r.UX]}),t})()},30597:(C,c,a)=>{a.d(c,{l:()=>e});var i=a(94650),l=a(88996),r=a(97185);let e=(()=>{class u{constructor(p,g,d){this.router=p,this.Arout=g,this.toastr=d}canActivate(p,g){const d=JSON.parse(localStorage.getItem("auth"));if(d&&d.user){const h=p.data.allowedRoles;console.log(h,"allowedRoles");const f=d.permission.some(U=>h.includes(U.codename));if(console.log(f),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return u.\u0275fac=function(p){return new(p||u)(i.LFG(l.F0),i.LFG(l.gz),i.LFG(r._W))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);