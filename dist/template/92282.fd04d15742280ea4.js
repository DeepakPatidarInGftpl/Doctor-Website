"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[92282],{92282:(O,g,t)=>{t.r(g),t.d(g,{SigninModule:()=>Q});var l=t(36895),c=t(4392),r=t(24006),m=t(92340),n=t(94650),f=t(83631),h=t(77243),v=t(80927),u=t(97185),S=t(43672),C=t(23182);function w(o,s){if(1&o&&n._UZ(0,"img",25),2&o){const e=n.oxw();n.Q6J("src",e.liveUrl+e.logoData.data.logo,n.LSH)}}function b(o,s){1&o&&(n.TgZ(0,"span",26),n._uU(1,"Enter your username "),n.qZA())}function y(o,s){if(1&o&&(n.TgZ(0,"div",27),n._uU(1),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.hij(" ",e.CustomControler.message," ")}}function _(o,s){1&o&&(n.TgZ(0,"div"),n._uU(1," username is required. "),n.qZA())}function T(o,s){1&o&&(n.TgZ(0,"div"),n._uU(1," Please, enter valid username address. "),n.qZA())}function Z(o,s){if(1&o&&(n.TgZ(0,"div",27),n.YNc(1,_,2,0,"div",28),n.YNc(2,T,2,0,"div",28),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.f.username.errors&&e.f.username.errors.required),n.xp6(1),n.Q6J("ngIf",e.f.username.errors&&e.f.username.errors.username)}}function k(o,s){1&o&&(n.TgZ(0,"span",26),n._uU(1,"Enter your password "),n.qZA())}function I(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"span",29),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onClick())}),n.qZA()}}function J(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"span",30),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onClick())}),n.qZA()}}const N=function(o){return{color:o}};function x(o,s){if(1&o&&(n.TgZ(0,"div",31)(1,"div",32)(2,"span",33),n._uU(3,"Loading..."),n.qZA()()()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngStyle",n.VKq(1,N,e.buttonColor))}}const U=function(o){return{"blur-background-wrapper":o}},d=function(o){return{"is-invalid":o}},A=function(){return{"hover-button":!0}},Y=function(o,s){return{"background-color":o,"border-color":s}},L=[{path:"",component:(()=>{class o{constructor(e,i,a,q,D,P,F,E){this.storage=e,this.renderer=i,this.authService=a,this.coreService=q,this.toastr=D,this.router=P,this.afMessaging=F,this.messagingService=E,this.show=!1,this.notificationLoading=!1,this.isSyncLoading=!1,this.buttonColor="#FF9F43",this.buttonHoverColor="#1B2850",this.img_url="assets/img/LoginImage.webp",this.liveUrl=m.N.api,this.loginStatus="",this.loaders=!1,this.subscription=this.storage.Loginvalue.subscribe(p=>{0!=p&&(this.CustomControler=p)})}get f(){return this.form.controls}ngOnInit(){this.form=new r.cw({username:new r.NI("",[r.kI.required]),password:new r.NI("",[r.kI.required])}),this.storage.Checkuser(),this.password="password",localStorage.getItem("token")&&this.router.navigate(["/dashboard"]),this.messagingService.receiveMessage(),this.messagingService.currentMessage.subscribe(e=>{e&&this.showNotification(e)})}ngAfterViewInit(){this.PageLoadData()}requestPermission(){this.messagingService.requestPermission().then(e=>{e?(this.deviceToken=e,this.updateUserDeviceToken(),console.log(e)):alert("You have not given notification access, so you will not be notified."),this.isSyncLoading=!1,window.location.reload()}).catch(e=>{console.error("Error retrieving token:",e),alert("You have not given notification access, so you will not be notified."),window.location.reload(),this.isSyncLoading=!1})}PageLoadData(){this.authService.getLogoApi().subscribe({next:e=>{if(!e.success)throw Error("No Data Found");this.logoData=e,this.buttonColor=e.data.primary_colour,this.buttonHoverColor=e.data.secondary_colour,this.img_url=this.liveUrl+this.logoData.data.auth_image,this.applyDynamicStyles()},error(e){throw Error("No Data Found "+e)}})}applyDynamicStyles(){this.renderer.setStyle(document.documentElement,"$button-color",this.buttonColor,1),this.renderer.setStyle(document.documentElement,"$button-hover-color",this.buttonHoverColor,1)}showNotification(e){"granted"===Notification.permission?new Notification(e.notification?.title||"No title",{body:e.notification?.body||"No body",icon:e.notification?.icon||"assets/logo/logo.png"}):console.error("Notification permission not granted")}updateUserDeviceToken(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(e=>{console.log("Service Worker registered with scope:",e.scope),this.deviceToken&&this.authService.updateUserDeviceToken({device_token:this.deviceToken}).subscribe(a=>{console.log(a)},a=>{console.error("Error updating device token:",a)})}).catch(e=>{console.error("Service Worker registration failed:",e)})}submit(){this.form.valid?(this.loaders=!0,this.authService.login(this.form.value).subscribe(e=>{this.loginRes=e,this.loginRes.token?(this.loaders=!1,this.toastr.success("Login Successfull"),this.isSyncLoading=!0,localStorage.setItem("token",this.loginRes?.token),localStorage.setItem("auth",JSON.stringify(this.loginRes?.permission)),this.coreService.getFinancialYearHeader().subscribe(i=>{console.warn(i),localStorage.setItem("financialYear",JSON.stringify(i?.id)),this.requestPermission()},i=>{this.isSyncLoading=!1})):this.loaders=!1},e=>{this.loaders=!1,0==e.error.User?this.toastr.error(e.error.msg):e.error.status&&this.toastr.error(e.error.status)})):(this.loaders=!1,this.form.markAllAsTouched(),console.log("invalid form"))}ngOnDestroy(){this.subscription.unsubscribe()}get username(){return this.form.get("username")}get passwords(){return this.form.get("password")}onClick(){"password"===this.password?(this.password="text",this.show=!0):(this.password="password",this.show=!1)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(f.T),n.Y36(n.Qsj),n.Y36(h.u),n.Y36(v.p),n.Y36(u._W),n.Y36(c.F0),n.Y36(S.BG),n.Y36(C.M))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-signin"]],decls:37,vars:26,consts:[[1,"main-wrapper",3,"ngClass"],[1,"account-content"],[1,"login-wrapper"],[1,"login-content","w-50"],[1,"login-userset"],[1,"login-logo","logo-normal"],["alt","img",3,"src",4,"ngIf"],["routerLink","//dashboard",1,"login-logo","logo-white"],[1,"login-userheading"],[3,"formGroup","ngSubmit"],[1,"form-login"],[1,"form-addons"],["type","text","placeholder","Enter your username","formControlName","username","id","username",3,"ngClass"],["src","assets/img/icons/mail.svg","alt","img"],["class","text-danger",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"pass-group"],["placeholder","Enter your password","formControlName","password","id","password",1,"pass-input",3,"type","ngClass"],["class","fas toggle-password fa-eye",3,"click",4,"ngIf"],["class","fas toggle-password fa-eye-slash",3,"click",4,"ngIf"],[1,"form-login",3,"ngClass"],["type","submit",1,"btn","btn-login","me-2",3,"ngStyle"],["id","addimg",1,"login-img","w-50"],["alt","bg-img",3,"src"],["class","spinner-container",4,"ngIf"],["alt","img",3,"src"],[1,"text-danger"],[1,"invalid-feedback"],[4,"ngIf"],[1,"fas","toggle-password","fa-eye",3,"click"],[1,"fas","toggle-password","fa-eye-slash",3,"click"],[1,"spinner-container"],["role","status",1,"spinner-border",3,"ngStyle"],[1,"sr-only"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n.YNc(6,w,1,1,"img",6),n.qZA(),n._UZ(7,"a",7),n.TgZ(8,"div",8)(9,"h3"),n._uU(10,"Login "),n.qZA(),n.TgZ(11,"h4"),n._uU(12,"Please login to your account"),n.qZA()(),n.TgZ(13,"form",9),n.NdJ("ngSubmit",function(){return i.submit()}),n.TgZ(14,"div",10)(15,"label"),n._uU(16,"Username"),n.qZA(),n.TgZ(17,"div",11),n._UZ(18,"input",12)(19,"img",13),n.qZA(),n.YNc(20,b,2,0,"span",14),n.YNc(21,y,2,1,"div",15),n.YNc(22,Z,3,2,"div",15),n.qZA(),n.TgZ(23,"div",10)(24,"label"),n._uU(25,"Password"),n.qZA(),n.TgZ(26,"div",16),n._UZ(27,"input",17),n.YNc(28,k,2,0,"span",14),n.YNc(29,I,1,0,"span",18),n.YNc(30,J,1,0,"span",19),n.qZA()(),n.TgZ(31,"div",20)(32,"button",21),n._uU(33,"Sign In"),n.qZA()()()()(),n.TgZ(34,"div",22),n._UZ(35,"img",23),n.qZA()()()(),n.YNc(36,x,4,3,"div",24)),2&e&&(n.Q6J("ngClass",n.VKq(16,U,i.isSyncLoading)),n.xp6(6),n.Q6J("ngIf",i.logoData),n.xp6(7),n.Q6J("formGroup",i.form),n.xp6(5),n.Q6J("ngClass",n.VKq(18,d,i.f.username.touched&&i.f.username.invalid)),n.xp6(2),n.Q6J("ngIf",i.username&&i.username.invalid&&i.username.touched),n.xp6(1),n.Q6J("ngIf","username"===(null==i.CustomControler?null:i.CustomControler.status)),n.xp6(1),n.Q6J("ngIf",i.f.username.touched&&i.f.username.invalid),n.xp6(5),n.Q6J("type",i.password)("ngClass",n.VKq(20,d,i.f.password.touched&&i.f.password.invalid)),n.xp6(1),n.Q6J("ngIf",i.passwords&&i.passwords.invalid&&i.passwords.touched),n.xp6(1),n.Q6J("ngIf",i.show),n.xp6(1),n.Q6J("ngIf",!i.show),n.xp6(1),n.Q6J("ngClass",n.DdM(22,A)),n.xp6(1),n.Q6J("ngStyle",n.WLB(23,Y,i.buttonColor,i.buttonColor)),n.xp6(3),n.Q6J("src",i.img_url,n.LSH),n.xp6(1),n.Q6J("ngIf",i.isSyncLoading))},dependencies:[l.mk,l.O5,l.PC,c.yS,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:['@charset "UTF-8";.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.spinner-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px}.spinner-border[_ngcontent-%COMP%]{width:150px;height:150px;color:var(--primary-color)}.blur-background-wrapper[_ngcontent-%COMP%]{filter:blur(3px)}.hover-button[_ngcontent-%COMP%]:hover{color:var(--primary-color)!important}']}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(L),c.Bz]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.ez,M,r.UX,u.Rh.forRoot()]}),o})()}}]);