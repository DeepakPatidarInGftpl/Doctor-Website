"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4293],{34293:(w,f,i)=>{i.r(f),i.d(f,{AddFooterModule:()=>M});var d=i(36895),p=i(88996),n=i(24006),h=i(15869),l=i(3512),e=i(94650),g=i(97185),c=i(92559);function u(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function v(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function _(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Facebook url"),e.qZA())}function Z(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Instagram url"),e.qZA())}function C(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Twitter url"),e.qZA())}function T(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Whatsapp url"),e.qZA())}function I(o,a){if(1&o&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Oqu(r.whatsError)}}function U(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your address"),e.qZA())}function q(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Description "),e.qZA())}function N(o,a){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Select logo"),e.qZA())}function J(o,a){1&o&&(e.O4$(),e.TgZ(0,"svg",31),e._UZ(1,"path",32)(2,"path",33),e.qZA())}function y(o,a){if(1&o&&e._UZ(0,"img",34),2&o){const r=e.oxw();e.Q6J("src",r.url,e.LSH)}}function E(o,a){1&o&&(e.TgZ(0,"button",35),e._uU(1,"Submit"),e.qZA())}function k(o,a){1&o&&(e.TgZ(0,"button",36),e._UZ(1,"span",37),e._uU(2,"Submit"),e.qZA())}const s=function(o){return{"is-invalid":o}};let Q=(()=>{class o{constructor(r,t,m,b){this.fb=r,this.toastr=t,this.router=m,this.websiteService=b,this.editordoc=l.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.date=new Date,this.dateError=null,this.loaders=!1,this.whatsError=""}get f(){return this.footerForm.controls}ngOnInit(){this.editor=new h.ML,this.footerForm=this.fb.group({address:new n.NI("",[n.kI.required]),email:new n.NI("",[n.kI.required,n.kI.email]),phone:new n.NI("",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(10),n.kI.pattern(/^[0-9]*$/)]),facebook:new n.NI("",[n.kI.required]),instagram:new n.NI("",[n.kI.required]),twitter:new n.NI("",[n.kI.required]),whatsapp:new n.NI("",[n.kI.required]),logo:new n.NI("",[n.kI.required]),description:new n.NI("",[n.kI.required])})}selectImg(r){const t=r.target.files[0];if(console.log(t),t){const m=new FileReader;m.readAsDataURL(t),m.onload=()=>{this.url=m.result}}this.footerForm.patchValue({logo:t}),this.footerForm.get("logo")?.updateValueAndValidity()}submit(){console.log(this.footerForm.value);var r=new FormData;r.append("email",this.footerForm.get("email")?.value),r.append("phone",this.footerForm.get("phone")?.value),r.append("facebook",this.footerForm.get("facebook")?.value),r.append("instagram",this.footerForm.get("instagram")?.value),r.append("twitter",this.footerForm.get("twitter")?.value),r.append("whatsapp",this.footerForm.get("whatsapp")?.value),r.append("address",this.footerForm.get("address")?.value),r.append("logo",this.footerForm.get("logo")?.value),r.append("description",this.footerForm.get("description")?.value),this.footerForm.valid?(this.loaders=!0,this.websiteService.addFooter(r).subscribe(t=>{console.log(t),this.addRes=t,"FOOTER CREATED SUCESSFULLY"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.footerForm.reset(),this.router.navigate(["//website/footerList"])):(this.loaders=!1,this.addRes.whatsapp&&(this.loaders=!1,this.whatsError=this.addRes.whatsapp[0],setTimeout(()=>{this.whatsError=""},300)))},t=>{this.loaders=!1,console.log(t.error)})):(this.footerForm.markAllAsTouched(),console.log("hhhhhh"))}get address(){return this.footerForm.get("address")}get phone(){return this.footerForm.get("phone")}get email(){return this.footerForm.get("email")}get facebook(){return this.footerForm.get("facebook")}get instagram(){return this.footerForm.get("instagram")}get twitter(){return this.footerForm.get("twitter")}get whatsapp(){return this.footerForm.get("whatsapp")}get description(){return this.footerForm.get("description")}get logo(){return this.footerForm.get("logo")}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(n.qu),e.Y36(g._W),e.Y36(p.F0),e.Y36(c.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-footer"]],decls:81,vars:45,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","facebook","id","facebook",3,"ngClass"],["type","text","formControlName","instagram","id","instagram",3,"ngClass"],["type","text","formControlName","twitter","id","twitter",3,"ngClass"],["type","text","formControlName","whatsapp","id","whatsapp",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control","textarea",3,"ngClass"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],[1,"col-lg-6"],[1,"image-upload","mt-3"],["type","file","formControlName","logo",3,"ngClass","change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/addressStore",1,"btn","btn-cancel"],[1,"text-danger"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Add Footer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Footer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Phone*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,u,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,v,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Facebook Url*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,_,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Instagram Url*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,Z,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Twitter Url*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,C,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Whatsapp Url*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,T,2,0,"span",9),e.YNc(46,I,2,1,"span",9),e.qZA()(),e.TgZ(47,"div",15)(48,"div",7)(49,"label"),e._uU(50,"Address*"),e.qZA(),e._UZ(51,"textarea",16),e.YNc(52,U,2,0,"span",9),e.qZA()(),e.TgZ(53,"div",15)(54,"div",7)(55,"label"),e._uU(56,"Description*"),e.qZA(),e._UZ(57,"ngx-editor-menu",17)(58,"ngx-editor",18),e.YNc(59,q,2,0,"span",9),e.qZA()(),e.TgZ(60,"div",15)(61,"div",7)(62,"label"),e._uU(63,"Logo*"),e.qZA(),e.TgZ(64,"div",5)(65,"div",19)(66,"div",20)(67,"input",21),e.NdJ("change",function(b){return t.selectImg(b)}),e.qZA(),e.TgZ(68,"div",22),e._UZ(69,"img",23),e.TgZ(70,"h4"),e._uU(71,"Drag and drop a file to upload"),e.qZA()(),e.YNc(72,N,2,0,"span",9),e.qZA()(),e.TgZ(73,"div",19),e.YNc(74,J,3,0,"svg",24),e.YNc(75,y,1,1,"img",25),e.qZA()()()(),e.TgZ(76,"div",26),e.YNc(77,E,2,0,"button",27),e.YNc(78,k,3,0,"button",28),e.TgZ(79,"a",29),e._uU(80,"Cancel"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",t.footerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(27,s,t.f.phone.touched&&t.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,s,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,s,t.f.facebook.touched&&t.f.facebook.invalid)),e.xp6(1),e.Q6J("ngIf",t.facebook&&t.facebook.invalid&&t.facebook.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,s,t.f.instagram.touched&&t.f.instagram.invalid)),e.xp6(1),e.Q6J("ngIf",t.instagram&&t.instagram.invalid&&t.instagram.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,s,t.f.twitter.touched&&t.f.twitter.invalid)),e.xp6(1),e.Q6J("ngIf",t.twitter&&t.twitter.invalid&&t.twitter.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,s,t.f.whatsapp.touched&&t.f.whatsapp.invalid)),e.xp6(1),e.Q6J("ngIf",t.whatsapp&&t.whatsapp.invalid&&t.whatsapp.touched),e.xp6(1),e.Q6J("ngIf",t.whatsError),e.xp6(5),e.Q6J("ngClass",e.VKq(39,s,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(5),e.Q6J("editor",t.editor)("toolbar",t.toolbar),e.xp6(1),e.Q6J("editor",t.editor)("ngClass",e.VKq(41,s,t.f.description.touched&&t.f.description.invalid)),e.xp6(1),e.Q6J("ngIf",t.description&&t.description.invalid&&t.description.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(43,s,t.f.logo.touched&&t.f.logo.invalid)),e.xp6(5),e.Q6J("ngIf",t.logo&&t.logo.invalid&&t.logo.touched),e.xp6(2),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[d.mk,d.O5,p.yS,n._Y,n.Fj,n.JJ,n.JL,n.wO,n.nD,n.sg,n.u,h.tP,h.Mn],styles:[".textarea[_ngcontent-%COMP%]{height:40px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.p_img[_ngcontent-%COMP%]{margin-right:5rem!important;height:100px}"]}),o})();var R=i(30597);const A=JSON.parse(localStorage.getItem("auth"));let F;A&&A.permission&&A.permission.map(a=>{"website"===a.content_type.app_label&&"footer"===a.content_type.model&&"add_footer"==a.codename&&(F=a.codename,console.log(F))});const x=[{path:"",component:Q,canActivate:[R.l],data:{allowedRoles:[F]}}];let S=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(x),p.Bz]}),o})();var Y=i(30906);let M=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,S,Y.ZU,n.u5,n.UX,h.FP]}),o})()},30597:(w,f,i)=>{i.d(f,{l:()=>h});var d=i(94650),p=i(88996),n=i(97185);let h=(()=>{class l{constructor(g,c,u){this.router=g,this.Arout=c,this.toastr=u}canActivate(g,c){const u=JSON.parse(localStorage.getItem("auth"));if(u&&u.user){const v=g.data.allowedRoles;console.log(v,"allowedRoles");const _=u.permission.some(Z=>v.includes(Z.codename));if(console.log(_),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return l.\u0275fac=function(g){return new(g||l)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(n._W))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);