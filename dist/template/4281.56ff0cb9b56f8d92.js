"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4281],{4281:(U,c,a)=>{a.r(c),a.d(c,{AddUserModule:()=>x});var i=a(6895),u=a(8996),o=a(4006),e=a(4650),l=a(5062),_=a(7185),d=a(927);function g(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Enter your name "),e.qZA())}function p(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Enter your username "),e.qZA())}function h(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Enter your mobile No"),e.qZA())}function f(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Enter Remark"),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Password "),e.qZA())}function C(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Select User Type"),e.qZA())}function T(n,r){if(1&n&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&n){const s=r.$implicit;e.s9C("value",null==s?null:s.id),e.xp6(1),e.Oqu(null==s?null:s.title)}}function y(n,r){1&n&&(e.TgZ(0,"span",31),e._uU(1,"Select branch"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function q(n,r){1&n&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2," Submit"),e.qZA())}const m=function(n){return{"is-invalid":n}};let w=(()=>{class n{constructor(s,t,A,S,M){this.fb=s,this.contactService=t,this.toastr=A,this.router=S,this.coreService=M,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.userForm=this.fb.group({phone_number:new o.NI("",[o.kI.required]),username:new o.NI(""),name:new o.NI(""),email:new o.NI(""),password:new o.NI(""),active:new o.NI(""),user_type:new o.NI(""),branch:new o.NI("")}),this.getBranch()}getBranch(){this.contactService.getBranch().subscribe(s=>{console.log(s),this.branchList=s})}submit(){console.log(this.userForm.value),this.userForm.valid?(this.loader=!0,this.contactService.addUser(this.userForm.value).subscribe(s=>{console.log(s),this.addRes=s,"True"==this.addRes.Is_Success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//contacts/user"])):(this.loader=!1,this.addRes.phone_number?this.toastr.error(this.addRes.phone_number):this.addRes.username&&this.toastr.error(this.addRes.username))},s=>{console.log(s.error.gst)})):(this.userForm.markAllAsTouched(),console.log("hhhhhh"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}get branch(){return this.userForm.get("branch")}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(o.qu),e.Y36(l.y),e.Y36(_._W),e.Y36(u.F0),e.Y36(d.p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-user"]],decls:76,vars:35,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","id","username",3,"ngClass"],["type","text","formControlName","phone_number","id","phone_number","minlength","10","maxlength","10",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","password","formControlName","password","id","password",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Employee"],["value","Customer"],["formControlName","branch","id","branch",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//contacts/user",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new User "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,g,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,p,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,h,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,f,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Password"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,b,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"User Type"),e.qZA(),e.TgZ(44,"select",14)(45,"option",15),e._uU(46,"Select User Type"),e.qZA(),e.TgZ(47,"option",16),e._uU(48,"Supplier"),e.qZA(),e.TgZ(49,"option",17),e._uU(50,"Vendor"),e.qZA(),e.TgZ(51,"option",18),e._uU(52,"Employee"),e.qZA(),e.TgZ(53,"option",19),e._uU(54,"Customer"),e.qZA()(),e.YNc(55,C,2,0,"span",9),e.qZA()(),e.TgZ(56,"div",6)(57,"div",7)(58,"label"),e._uU(59,"Branch"),e.qZA(),e.TgZ(60,"select",20)(61,"option",15),e._uU(62,"Select Branch"),e.qZA(),e.YNc(63,T,2,2,"option",21),e.qZA(),e.YNc(64,y,2,0,"span",9),e.qZA()(),e.TgZ(65,"div",22)(66,"div",23)(67,"div",24),e._UZ(68,"input",25),e.TgZ(69,"label",26),e._uU(70,"Active"),e.qZA()()()(),e.TgZ(71,"div",27),e.YNc(72,N,2,0,"button",28),e.YNc(73,q,3,0,"button",29),e.TgZ(74,"a",30),e._uU(75,"Cancel"),e.qZA()()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",t.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(21,m,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(23,m,t.f.username.touched&&t.f.username.invalid)),e.xp6(1),e.Q6J("ngIf",t.username&&t.username.invalid&&t.username.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(25,m,t.f.phone_number.touched&&t.f.phone_number.invalid)),e.xp6(1),e.Q6J("ngIf",t.mobile_no&&t.mobile_no.invalid&&t.mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(27,m,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,m,t.f.password.touched&&t.f.password.invalid)),e.xp6(1),e.Q6J("ngIf",t.password&&t.password.invalid&&t.password.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,m,t.f.user_type.touched&&t.f.user_type.invalid)),e.xp6(11),e.Q6J("ngIf",t.user_type&&t.user_type.invalid&&t.user_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,m,t.f.branch.touched&&t.f.branch.invalid)),e.xp6(3),e.Q6J("ngForOf",t.branchList),e.xp6(1),e.Q6J("ngIf",t.branch&&t.branch.invalid&&t.branch.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader))},dependencies:[i.mk,i.sg,i.O5,u.yS,o._Y,o.YN,o.Kr,o.Fj,o.Wl,o.EJ,o.JJ,o.JL,o.wO,o.nD,o.sg,o.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})();var F=a(597);const v=JSON.parse(localStorage.getItem("auth"));let Z;v&&v.permission&&v.permission.map(r=>{"master"===r.content_type.app_label&&"user"===r.content_type.model&&"add_user"==r.codename&&(Z=r.codename,console.log(Z))});const I=[{path:"",component:w,canActivate:[F.l],data:{allowedRoles:[Z]}}];let J=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(I),u.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,J,o.u5,o.UX]}),n})()},597:(U,c,a)=>{a.d(c,{l:()=>e});var i=a(4650),u=a(8996),o=a(7185);let e=(()=>{class l{constructor(d,g,p){this.router=d,this.Arout=g,this.toastr=p}canActivate(d,g){const p=JSON.parse(localStorage.getItem("auth"));if(p&&p.user){const h=d.data.allowedRoles;console.log(h,"allowedRoles");const f=p.permission.some(b=>h.includes(b.codename));if(console.log(f),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return l.\u0275fac=function(d){return new(d||l)(i.LFG(u.F0),i.LFG(u.gz),i.LFG(o._W))},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);