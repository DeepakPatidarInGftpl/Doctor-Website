"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4293],{34293:(I,_,s)=>{s.r(_),s.d(_,{AddFooterModule:()=>L});var a=s(36895),g=s(88996),r=s(24006),h=s(15869),F=s(3512),e=s(94650),d=s(97185),w=s(92559);function u(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function A(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function f(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Facebook url"),e.qZA())}function p(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Instagram url"),e.qZA())}function c(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Twitter url"),e.qZA())}function v(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Whatsapp url"),e.qZA())}function Z(o,n){if(1&o&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Oqu(i.whatsError)}}function b(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your address"),e.qZA())}function q(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Description "),e.qZA())}function N(o,n){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Select logo"),e.qZA())}function J(o,n){1&o&&(e.O4$(),e.TgZ(0,"svg",31),e._UZ(1,"path",32)(2,"path",33),e.qZA())}function E(o,n){if(1&o&&e._UZ(0,"img",34),2&o){const i=e.oxw();e.Q6J("src",i.url,e.LSH)}}function y(o,n){1&o&&(e.TgZ(0,"button",35),e._uU(1,"Submit"),e.qZA())}function S(o,n){1&o&&(e.TgZ(0,"button",36),e._UZ(1,"span",37),e._uU(2,"Submit"),e.qZA())}const l=function(o){return{"is-invalid":o}};let D=(()=>{class o{constructor(i,t,m,T){this.fb=i,this.toastr=t,this.router=m,this.websiteService=T,this.editordoc=F.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.date=new Date,this.dateError=null,this.loaders=!1,this.whatsError=""}get f(){return this.footerForm.controls}ngOnInit(){this.editor=new h.ML,this.footerForm=this.fb.group({address:new r.NI("",[r.kI.required]),email:new r.NI("",[r.kI.required,r.kI.email]),phone:new r.NI("",[r.kI.required,r.kI.minLength(10),r.kI.maxLength(10),r.kI.pattern(/^[0-9]*$/)]),facebook:new r.NI("",[r.kI.required]),instagram:new r.NI("",[r.kI.required]),twitter:new r.NI("",[r.kI.required]),whatsapp:new r.NI("",[r.kI.required]),logo:new r.NI("",[r.kI.required]),description:new r.NI("",[r.kI.required])})}selectImg(i){const t=i.target.files[0];if(console.log(t),t){const m=new FileReader;m.readAsDataURL(t),m.onload=()=>{this.url=m.result}}this.footerForm.patchValue({logo:t}),this.footerForm.get("logo")?.updateValueAndValidity()}submit(){console.log(this.footerForm.value);var i=new FormData;i.append("email",this.footerForm.get("email")?.value),i.append("phone",this.footerForm.get("phone")?.value),i.append("facebook",this.footerForm.get("facebook")?.value),i.append("instagram",this.footerForm.get("instagram")?.value),i.append("twitter",this.footerForm.get("twitter")?.value),i.append("whatsapp",this.footerForm.get("whatsapp")?.value),i.append("address",this.footerForm.get("address")?.value),i.append("logo",this.footerForm.get("logo")?.value),i.append("description",this.footerForm.get("description")?.value),this.footerForm.valid?(this.loaders=!0,this.websiteService.addFooter(i).subscribe(t=>{console.log(t),this.addRes=t,"FOOTER CREATED SUCESSFULLY"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.footerForm.reset(),this.router.navigate(["//website/footerList"])):(this.loaders=!1,this.addRes.whatsapp&&(this.loaders=!1,this.whatsError=this.addRes.whatsapp[0],setTimeout(()=>{this.whatsError=""},300)))},t=>{this.loaders=!1,console.log(t.error)})):(this.footerForm.markAllAsTouched(),console.log("hhhhhh"))}get address(){return this.footerForm.get("address")}get phone(){return this.footerForm.get("phone")}get email(){return this.footerForm.get("email")}get facebook(){return this.footerForm.get("facebook")}get instagram(){return this.footerForm.get("instagram")}get twitter(){return this.footerForm.get("twitter")}get whatsapp(){return this.footerForm.get("whatsapp")}get description(){return this.footerForm.get("description")}get logo(){return this.footerForm.get("logo")}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(r.qu),e.Y36(d._W),e.Y36(g.F0),e.Y36(w.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-footer"]],decls:81,vars:45,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","facebook","id","facebook",3,"ngClass"],["type","text","formControlName","instagram","id","instagram",3,"ngClass"],["type","text","formControlName","twitter","id","twitter",3,"ngClass"],["type","text","formControlName","whatsapp","id","whatsapp",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control","textarea",3,"ngClass"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],[1,"col-lg-6"],[1,"image-upload","mt-3"],["type","file","formControlName","logo",3,"ngClass","change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/footerList",1,"btn","btn-cancel"],[1,"text-danger"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Add Footer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Footer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Phone*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,u,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,A,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Facebook Url*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,f,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Instagram Url*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,p,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Twitter Url*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,c,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Whatsapp Url*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,v,2,0,"span",9),e.YNc(46,Z,2,1,"span",9),e.qZA()(),e.TgZ(47,"div",15)(48,"div",7)(49,"label"),e._uU(50,"Address*"),e.qZA(),e._UZ(51,"textarea",16),e.YNc(52,b,2,0,"span",9),e.qZA()(),e.TgZ(53,"div",15)(54,"div",7)(55,"label"),e._uU(56,"Description*"),e.qZA(),e._UZ(57,"ngx-editor-menu",17)(58,"ngx-editor",18),e.YNc(59,q,2,0,"span",9),e.qZA()(),e.TgZ(60,"div",15)(61,"div",7)(62,"label"),e._uU(63,"Logo*"),e.qZA(),e.TgZ(64,"div",5)(65,"div",19)(66,"div",20)(67,"input",21),e.NdJ("change",function(T){return t.selectImg(T)}),e.qZA(),e.TgZ(68,"div",22),e._UZ(69,"img",23),e.TgZ(70,"h4"),e._uU(71,"Drag and drop a file to upload"),e.qZA()(),e.YNc(72,N,2,0,"span",9),e.qZA()(),e.TgZ(73,"div",19),e.YNc(74,J,3,0,"svg",24),e.YNc(75,E,1,1,"img",25),e.qZA()()()(),e.TgZ(76,"div",26),e.YNc(77,y,2,0,"button",27),e.YNc(78,S,3,0,"button",28),e.TgZ(79,"a",29),e._uU(80,"Cancel"),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",t.footerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(27,l,t.f.phone.touched&&t.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,l,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,l,t.f.facebook.touched&&t.f.facebook.invalid)),e.xp6(1),e.Q6J("ngIf",t.facebook&&t.facebook.invalid&&t.facebook.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,l,t.f.instagram.touched&&t.f.instagram.invalid)),e.xp6(1),e.Q6J("ngIf",t.instagram&&t.instagram.invalid&&t.instagram.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,l,t.f.twitter.touched&&t.f.twitter.invalid)),e.xp6(1),e.Q6J("ngIf",t.twitter&&t.twitter.invalid&&t.twitter.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,l,t.f.whatsapp.touched&&t.f.whatsapp.invalid)),e.xp6(1),e.Q6J("ngIf",t.whatsapp&&t.whatsapp.invalid&&t.whatsapp.touched),e.xp6(1),e.Q6J("ngIf",t.whatsError),e.xp6(5),e.Q6J("ngClass",e.VKq(39,l,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(5),e.Q6J("editor",t.editor)("toolbar",t.toolbar),e.xp6(1),e.Q6J("editor",t.editor)("ngClass",e.VKq(41,l,t.f.description.touched&&t.f.description.invalid)),e.xp6(1),e.Q6J("ngIf",t.description&&t.description.invalid&&t.description.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(43,l,t.f.logo.touched&&t.f.logo.invalid)),e.xp6(5),e.Q6J("ngIf",t.logo&&t.logo.invalid&&t.logo.touched),e.xp6(2),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[a.mk,a.O5,g.yS,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u,h.tP,h.Mn],styles:[".textarea[_ngcontent-%COMP%]{height:40px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.p_img[_ngcontent-%COMP%]{margin-right:5rem!important;height:100px}"]}),o})();var Q=s(30597);const C=JSON.parse(localStorage.getItem("auth"));let U;C&&C.permission&&C.permission.map(n=>{"website"===n.content_type.app_label&&"footer"===n.content_type.model&&"add_footer"==n.codename&&(U=n.codename,console.log(U))});const k=[{path:"",component:D,canActivate:[Q.l],data:{allowedRoles:["add_footer"]}}];let R=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(k),g.Bz]}),o})();var M=s(30906);let L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,R,M.ZU,r.u5,r.UX,h.FP]}),o})()},30597:(I,_,s)=>{s.d(_,{l:()=>e});var a=s(94650),g=s(88996),r=s(97185),h=s(42917),F=s(80927);let e=(()=>{class d{constructor(u,A,f,p,c){this.router=u,this.Arout=A,this.toastr=f,this.profileService=p,this.coreService=c}canActivate(u,A){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),f){const p=u.data.allowedRoles;console.log(p,"allowedRoles");const c=f.some(v=>p.includes(v.codename));if(this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const Z=v?.permission,b=this.profileService.getUserDetails();(!b||b.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),console.log(c),c)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(u){return new(u||d)(a.LFG(g.F0),a.LFG(g.gz),a.LFG(r._W),a.LFG(h.J),a.LFG(F.p))},d.\u0275prov=a.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);