"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9074],{9074:(A,_,r)=>{r.r(_),r.d(_,{UpdateFooterModule:()=>L});var l=r(36895),d=r(88996),a=r(24006),h=r(15869),F=r(3512),e=r(94650),p=r(97185),w=r(92559);function m(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function U(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function c(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Facebook url"),e.qZA())}function u(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Instagram url"),e.qZA())}function f(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Twitter url"),e.qZA())}function v(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Whatsapp url"),e.qZA())}function b(o,s){if(1&o&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Oqu(i.whatsError)}}function Z(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter your address"),e.qZA())}function I(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Enter Description "),e.qZA())}function q(o,s){1&o&&(e.TgZ(0,"span",30),e._uU(1,"Select logo"),e.qZA())}function N(o,s){if(1&o&&e._UZ(0,"img",31),2&o){const i=e.oxw();e.Q6J("src",i.url,e.LSH)}}function J(o,s){if(1&o&&e._UZ(0,"img",31),2&o){const i=e.oxw();e.Q6J("src",i.imgUrl+(null==i.updateData?null:i.updateData.logo),e.LSH)}}function E(o,s){1&o&&(e.TgZ(0,"button",32),e._uU(1,"Submit"),e.qZA())}function y(o,s){1&o&&(e.TgZ(0,"button",33),e._UZ(1,"span",34),e._uU(2,"Submit"),e.qZA())}const g=function(o){return{"is-invalid":o}};let D=(()=>{class o{constructor(i,t,n,C,Y){this.fb=i,this.toastr=t,this.router=n,this.Arout=C,this.websiteService=Y,this.editordoc=F.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.date=new Date,this.imgUrl="https://pv.greatfuturetechno.com",this.dateError=null,this.loaders=!1,this.whatsError=""}get f(){return this.footerForm.controls}ngOnInit(){this.editor=new h.ML,this.id=this.Arout.snapshot.paramMap.get("id"),this.footerForm=this.fb.group({address:new a.NI("",[a.kI.required]),email:new a.NI("",[a.kI.required,a.kI.email]),phone:new a.NI("",[a.kI.required,a.kI.minLength(10),a.kI.maxLength(10),a.kI.pattern(/^[0-9]*$/)]),facebook:new a.NI("",[a.kI.required]),instagram:new a.NI("",[a.kI.required]),twitter:new a.NI("",[a.kI.required]),whatsapp:new a.NI("",[a.kI.required]),logo:new a.NI(""),description:new a.NI("",[a.kI.required])}),this.websiteService.getFooterById(this.id).subscribe(i=>{i.map(t=>{this.id==t.id&&(this.updateData=t,this.getId=t,this.footerForm.patchValue({address:t.address,email:t.email,phone:t.phone,facebook:t.facebook,instagram:t.instagram,twitter:t.twitter,whatsapp:t.whatsapp,description:t.description}))})})}selectImg(i){const t=i.target.files[0];if(t){const n=new FileReader;n.readAsDataURL(t),n.onload=()=>{this.url=n.result}}this.footerForm.patchValue({logo:t}),this.footerForm.get("logo")?.updateValueAndValidity()}submit(){var i=new FormData;if(i.append("email",this.footerForm.get("email")?.value),i.append("phone",this.footerForm.get("phone")?.value),i.append("facebook",this.footerForm.get("facebook")?.value),i.append("instagram",this.footerForm.get("instagram")?.value),i.append("twitter",this.footerForm.get("twitter")?.value),i.append("whatsapp",this.footerForm.get("whatsapp")?.value),i.append("address",this.footerForm.get("address")?.value),i.append("description",this.footerForm.get("description")?.value),this.footerForm.valid){this.loaders=!0;const t=this.footerForm.get("logo")?.value;t&&t instanceof File?(i.append("logo",t),this.websiteService.updateFooter(i,this.id).subscribe(n=>{this.addRes=n,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.footerForm.reset(),this.router.navigate(["//website/footerList"])):(this.loaders=!1,this.addRes.whatsapp&&(this.loaders=!1,this.whatsError=this.addRes.whatsapp[0],setTimeout(()=>{this.whatsError=""},300)))},n=>{this.loaders=!1})):this.websiteService.updateFooter(i,this.id).subscribe(n=>{this.addRes=n,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.footerForm.reset(),this.router.navigate(["//website/footerList"])):(this.loaders=!1,this.addRes.whatsapp&&(this.loaders=!1,this.whatsError=this.addRes.whatsapp[0],setTimeout(()=>{this.whatsError=""},300)))},n=>{this.loaders=!1})}else this.footerForm.markAllAsTouched()}get address(){return this.footerForm.get("address")}get phone(){return this.footerForm.get("phone")}get email(){return this.footerForm.get("email")}get facebook(){return this.footerForm.get("facebook")}get instagram(){return this.footerForm.get("instagram")}get twitter(){return this.footerForm.get("twitter")}get whatsapp(){return this.footerForm.get("whatsapp")}get description(){return this.footerForm.get("description")}get logo(){return this.footerForm.get("logo")}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(p._W),e.Y36(d.F0),e.Y36(d.gz),e.Y36(w.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-footer"]],decls:81,vars:42,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","facebook","id","facebook",3,"ngClass"],["type","text","formControlName","instagram","id","instagram",3,"ngClass"],["type","text","formControlName","twitter","id","twitter",3,"ngClass"],["type","text","formControlName","whatsapp","id","whatsapp",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control","textarea",3,"ngClass"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],[1,"row","mt-3"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","logo",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/footerList",1,"btn","btn-cancel"],[1,"text-danger"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Footer"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Footer "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Phone*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,m,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,U,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Facebook Url*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,c,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Instagram Url*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,u,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Twitter Url*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,f,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Whatsapp Url*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,v,2,0,"span",9),e.YNc(46,b,2,1,"span",9),e.qZA()(),e.TgZ(47,"div",15)(48,"div",7)(49,"label"),e._uU(50,"Address*"),e.qZA(),e._UZ(51,"textarea",16),e.YNc(52,Z,2,0,"span",9),e.qZA()(),e.TgZ(53,"div",15)(54,"div",7)(55,"label"),e._uU(56,"Description*"),e.qZA(),e._UZ(57,"ngx-editor-menu",17)(58,"ngx-editor",18),e.YNc(59,I,2,0,"span",9),e.qZA()(),e.TgZ(60,"div",15)(61,"div",7)(62,"label"),e._uU(63,"Logo*"),e.qZA(),e.TgZ(64,"div",19)(65,"div",20)(66,"div",21)(67,"input",22),e.NdJ("change",function(C){return t.selectImg(C)}),e.qZA(),e.TgZ(68,"div",23),e._UZ(69,"img",24),e.TgZ(70,"h4"),e._uU(71,"Drag and drop a file to upload"),e.qZA()(),e.YNc(72,q,2,0,"span",9),e.qZA()(),e.TgZ(73,"div",20),e.YNc(74,N,1,1,"img",25),e.YNc(75,J,1,1,"img",25),e.qZA()()()(),e.TgZ(76,"div",26),e.YNc(77,E,2,0,"button",27),e.YNc(78,y,3,0,"button",28),e.TgZ(79,"a",29),e._uU(80,"Cancel"),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",t.footerForm),e.xp6(6),e.Q6J("ngClass",e.VKq(26,g,t.f.phone.touched&&t.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,g,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,g,t.f.facebook.touched&&t.f.facebook.invalid)),e.xp6(1),e.Q6J("ngIf",t.facebook&&t.facebook.invalid&&t.facebook.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(32,g,t.f.instagram.touched&&t.f.instagram.invalid)),e.xp6(1),e.Q6J("ngIf",t.instagram&&t.instagram.invalid&&t.instagram.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,g,t.f.twitter.touched&&t.f.twitter.invalid)),e.xp6(1),e.Q6J("ngIf",t.twitter&&t.twitter.invalid&&t.twitter.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,g,t.f.whatsapp.touched&&t.f.whatsapp.invalid)),e.xp6(1),e.Q6J("ngIf",t.whatsapp&&t.whatsapp.invalid&&t.whatsapp.touched),e.xp6(1),e.Q6J("ngIf",t.whatsError),e.xp6(5),e.Q6J("ngClass",e.VKq(38,g,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(5),e.Q6J("editor",t.editor)("toolbar",t.toolbar),e.xp6(1),e.Q6J("editor",t.editor)("ngClass",e.VKq(40,g,t.f.description.touched&&t.f.description.invalid)),e.xp6(1),e.Q6J("ngIf",t.description&&t.description.invalid&&t.description.touched),e.xp6(13),e.Q6J("ngIf",t.logo&&t.logo.invalid&&t.logo.touched),e.xp6(2),e.Q6J("ngIf",t.url),e.xp6(1),e.Q6J("ngIf",!t.url),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[l.mk,l.O5,d.yS,a._Y,a.Fj,a.JJ,a.JL,a.wO,a.nD,a.sg,a.u,h.tP,h.Mn],styles:[".textarea[_ngcontent-%COMP%]{height:40px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.p_img[_ngcontent-%COMP%]{margin-right:5rem!important;height:100px}"]}),o})();var S=r(30597);const T=JSON.parse(localStorage.getItem("auth"));let R;T&&T.map(s=>{"website"===s.content_type.app_label&&"footer"===s.content_type.model&&"change_footer"==s.codename&&(R=s.codename)});const k=[{path:"",component:D,canActivate:[S.l],data:{allowedRoles:["change_footer"]}}];let Q=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(k),d.Bz]}),o})();var M=r(30906);let L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,Q,M.ZU,a.u5,a.UX,h.FP]}),o})()},30597:(A,_,r)=>{r.d(_,{l:()=>e});var l=r(94650),d=r(88996),a=r(97185),h=r(42917),F=r(80927);let e=(()=>{class p{constructor(m,U,c,u,f){this.router=m,this.Arout=U,this.toastr=c,this.profileService=u,this.coreService=f}canActivate(m,U){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),c){const u=m.data.allowedRoles;console.log(u,"allowedRoles");const f=c.some(v=>u.includes(v.codename));if(console.log(f),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const b=v?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(m){return new(m||p)(l.LFG(d.F0),l.LFG(d.gz),l.LFG(a._W),l.LFG(h.J),l.LFG(F.p))},p.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);