"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[582],{582:(N,d,a)=>{a.r(d),a.d(d,{UpdateUserModule:()=>T});var p=a(6895),u=a(8996),s=a(4006),e=a(4650),m=a(5062),g=a(7185);function c(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your name "),e.qZA())}function h(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your username "),e.qZA())}function f(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your mobile No"),e.qZA())}function U(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter Remark"),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your Password "),e.qZA())}function _(t,r){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Select User Type"),e.qZA())}function Z(t,r){1&t&&(e.TgZ(0,"button",30),e._uU(1,"Submit"),e.qZA())}function v(t,r){1&t&&(e.TgZ(0,"button",31),e._UZ(1,"span",32),e._uU(2," Submit"),e.qZA())}const i=function(t){return{"is-invalid":t}},C=[{path:"",component:(()=>{class t{constructor(o,n,l,A,q){this.fb=o,this.contactService=n,this.toastr=l,this.router=A,this.Arout=q,this.dateError=null,this.loader=!1}get f(){return this.userForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.userForm=this.fb.group({phone_number:new s.NI("",[s.kI.required]),username:new s.NI(""),name:new s.NI(""),email:new s.NI(""),password:new s.NI(""),active:new s.NI(""),user_type:new s.NI("")}),this.contactService.getUserById(this.id).subscribe(o=>{console.log(o),this.userForm.patchValue(o)})}submit(){console.log(this.userForm.value),this.userForm.valid?(this.loader=!0,this.contactService.updateUser(this.userForm.value,this.id).subscribe(o=>{console.log(o),this.addRes=o,"True"==this.addRes.Is_Success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.userForm.reset(),this.router.navigate(["//contacts/user"])):(this.loader=!1,this.addRes.phone_number?this.toastr.error(this.addRes.phone_number):this.addRes.username&&this.toastr.error(this.addRes.username))},o=>{console.log(o.error.gst)})):(this.userForm.markAllAsTouched(),console.log("hhhhhh"))}get mobile_no(){return this.userForm.get("phone_number")}get username(){return this.userForm.get("username")}get email(){return this.userForm.get("email")}get password(){return this.userForm.get("password")}get user_type(){return this.userForm.get("user_type")}get permission_group(){return this.userForm.get("user_permissions")}get name(){return this.userForm.get("name")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu),e.Y36(m.y),e.Y36(g._W),e.Y36(u.F0),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-update-user"]],decls:67,vars:30,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","username","id","username",3,"ngClass"],["type","text","formControlName","phone_number","id","phone_number","minlength","10","maxlength","10",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","password","formControlName","password","id","password",3,"ngClass"],["formControlName","user_type","id","user_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Employee"],["value","Customer"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","active",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//contacts/user",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update User"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Update "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,c,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"User Name"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,h,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Mobile Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,f,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,U,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Password"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,b,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"User Type"),e.qZA(),e.TgZ(44,"select",14)(45,"option",15),e._uU(46,"Select User Type"),e.qZA(),e.TgZ(47,"option",16),e._uU(48,"Supplier"),e.qZA(),e.TgZ(49,"option",17),e._uU(50,"Vendor"),e.qZA(),e.TgZ(51,"option",18),e._uU(52,"Employee"),e.qZA(),e.TgZ(53,"option",19),e._uU(54,"Customer"),e.qZA()(),e.YNc(55,_,2,0,"span",9),e.qZA()(),e.TgZ(56,"div",20)(57,"div",21)(58,"div",22),e._UZ(59,"input",23),e.TgZ(60,"label",24),e._uU(61,"Active"),e.qZA()()()(),e.TgZ(62,"div",25),e.YNc(63,Z,2,0,"button",26),e.YNc(64,v,3,0,"button",27),e.TgZ(65,"a",28),e._uU(66,"Cancel"),e.qZA()()()()()()),2&o&&(e.xp6(8),e.Q6J("formGroup",n.userForm),e.xp6(6),e.Q6J("ngClass",e.VKq(18,i,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(20,i,n.f.username.touched&&n.f.username.invalid)),e.xp6(1),e.Q6J("ngIf",n.username&&n.username.invalid&&n.username.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(22,i,n.f.phone_number.touched&&n.f.phone_number.invalid)),e.xp6(1),e.Q6J("ngIf",n.mobile_no&&n.mobile_no.invalid&&n.mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(24,i,n.f.email.touched&&n.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(26,i,n.f.password.touched&&n.f.password.invalid)),e.xp6(1),e.Q6J("ngIf",n.password&&n.password.invalid&&n.password.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,i,n.f.user_type.touched&&n.f.user_type.invalid)),e.xp6(11),e.Q6J("ngIf",n.user_type&&n.user_type.invalid&&n.user_type.touched),e.xp6(4),e.Q6J("id","checkboxTax-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxTax-"),e.xp6(3),e.Q6J("ngIf",!n.loader),e.xp6(1),e.Q6J("ngIf",n.loader))},dependencies:[p.mk,p.O5,u.yS,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(C),u.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,y,s.u5,s.UX]}),t})()}}]);