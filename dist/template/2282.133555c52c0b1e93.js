"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2282],{92282:(J,u,r)=>{r.r(u),r.d(u,{SigninModule:()=>I});var g=r(36895),l=r(88996),t=r(24006),n=r(94650),c=r(83631),f=r(10003),d=r(97185);function h(s,i){1&s&&(n.TgZ(0,"span",24),n._uU(1,"Enter your username "),n.qZA())}function v(s,i){if(1&s&&(n.TgZ(0,"div",25),n._uU(1),n.qZA()),2&s){const e=n.oxw();n.xp6(1),n.hij(" ",e.CustomControler.message," ")}}function w(s,i){1&s&&(n.TgZ(0,"div"),n._uU(1," username is required. "),n.qZA())}function Z(s,i){1&s&&(n.TgZ(0,"div"),n._uU(1," Please, enter valid username address. "),n.qZA())}function C(s,i){if(1&s&&(n.TgZ(0,"div",25),n.YNc(1,w,2,0,"div",26),n.YNc(2,Z,2,0,"div",26),n.qZA()),2&s){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.f.username.errors&&e.f.username.errors.required),n.xp6(1),n.Q6J("ngIf",e.f.username.errors&&e.f.username.errors.username)}}function _(s,i){1&s&&(n.TgZ(0,"span",24),n._uU(1,"Enter your password "),n.qZA())}function S(s,i){if(1&s){const e=n.EpF();n.TgZ(0,"span",27),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onClick())}),n.qZA()}}function T(s,i){if(1&s){const e=n.EpF();n.TgZ(0,"span",28),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onClick())}),n.qZA()}}const m=function(s){return{"is-invalid":s}},y=[{path:"",component:(()=>{class s{constructor(e,o,a,b){this.storage=e,this.authService=o,this.toastr=a,this.router=b,this.show=!1,this.loginStatus="",this.subscription=this.storage.Loginvalue.subscribe(p=>{0!=p&&(this.CustomControler=p)})}get f(){return this.form.controls}ngOnInit(){this.form=new t.cw({username:new t.NI("",[t.kI.required]),password:new t.NI("",[t.kI.required])}),this.storage.Checkuser(),this.password="password",localStorage.getItem("token")&&this.router.navigate(["/dashboard"])}submit(){this.form.valid?this.authService.login(this.form.value).subscribe(e=>{this.loginRes=e,this.loginRes.token&&(this.toastr.success("Login Successfull"),window.location.reload(),localStorage.setItem("token",this.loginRes.token),localStorage.setItem("auth",JSON.stringify(this.loginRes?.permission)))},e=>{0==e.error.User?this.toastr.error(e.error.msg):e.error.status&&this.toastr.error(e.error.status)}):(this.form.markAllAsTouched(),console.log("invalid form"))}ngOnDestroy(){this.subscription.unsubscribe()}get username(){return this.form.get("username")}get passwords(){return this.form.get("password")}onClick(){"password"===this.password?(this.password="text",this.show=!0):(this.password="password",this.show=!1)}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(c.T),n.Y36(f.u),n.Y36(d._W),n.Y36(l.F0))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-signin"]],decls:37,vars:14,consts:[[1,"main-wrapper"],[1,"account-content"],[1,"login-wrapper"],[1,"login-content","w-50"],[1,"login-userset"],[1,"login-logo","logo-normal"],["src","assets/dummy/pos.png","alt","img"],["routerLink","//dashboard",1,"login-logo","logo-white"],["src","assets/img/logo-white.png","alt",""],[1,"login-userheading"],[3,"formGroup","ngSubmit"],[1,"form-login"],[1,"form-addons"],["type","text","placeholder","Enter your username","formControlName","username","id","username",3,"ngClass"],["src","assets/img/icons/mail.svg","alt","img"],["class","text-danger",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"pass-group"],["placeholder","Enter your password","formControlName","password","id","password",1,"pass-input",3,"type","ngClass"],["class","fas toggle-password fa-eye",3,"click",4,"ngIf"],["class","fas toggle-password fa-eye-slash",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-login"],[1,"login-img","w-50"],["src","assets/img/LoginImage.webp","alt",""],[1,"text-danger"],[1,"invalid-feedback"],[4,"ngIf"],[1,"fas","toggle-password","fa-eye",3,"click"],[1,"fas","toggle-password","fa-eye-slash",3,"click"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n._UZ(6,"img",6),n.qZA(),n.TgZ(7,"a",7),n._UZ(8,"img",8),n.qZA(),n.TgZ(9,"div",9)(10,"h3"),n._uU(11,"Login"),n.qZA(),n.TgZ(12,"h4"),n._uU(13,"Please login to your account"),n.qZA()(),n.TgZ(14,"form",10),n.NdJ("ngSubmit",function(){return o.submit()}),n.TgZ(15,"div",11)(16,"label"),n._uU(17,"Username"),n.qZA(),n.TgZ(18,"div",12),n._UZ(19,"input",13)(20,"img",14),n.qZA(),n.YNc(21,h,2,0,"span",15),n.YNc(22,v,2,1,"div",16),n.YNc(23,C,3,2,"div",16),n.qZA(),n.TgZ(24,"div",11)(25,"label"),n._uU(26,"Password"),n.qZA(),n.TgZ(27,"div",17),n._UZ(28,"input",18),n.YNc(29,_,2,0,"span",15),n.YNc(30,S,1,0,"span",19),n.YNc(31,T,1,0,"span",20),n.qZA()(),n.TgZ(32,"div",11)(33,"button",21),n._uU(34,"Sign In"),n.qZA()()()()(),n.TgZ(35,"div",22),n._UZ(36,"img",23),n.qZA()()()()),2&e&&(n.xp6(14),n.Q6J("formGroup",o.form),n.xp6(5),n.Q6J("ngClass",n.VKq(10,m,o.f.username.touched&&o.f.username.invalid)),n.xp6(2),n.Q6J("ngIf",o.username&&o.username.invalid&&o.username.touched),n.xp6(1),n.Q6J("ngIf","username"===(null==o.CustomControler?null:o.CustomControler.status)),n.xp6(1),n.Q6J("ngIf",o.f.username.touched&&o.f.username.invalid),n.xp6(5),n.Q6J("type",o.password)("ngClass",n.VKq(12,m,o.f.password.touched&&o.f.password.invalid)),n.xp6(1),n.Q6J("ngIf",o.passwords&&o.passwords.invalid&&o.passwords.touched),n.xp6(1),n.Q6J("ngIf",o.show),n.xp6(1),n.Q6J("ngIf",!o.show))},dependencies:[g.mk,g.O5,l.yS,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),s})()}];let A=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[l.Bz.forChild(y),l.Bz]}),s})(),I=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[g.ez,A,t.UX,d.Rh.forRoot()]}),s})()}}]);