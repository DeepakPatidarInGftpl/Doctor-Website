"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5596],{25596:(C,v,o)=>{o.r(v),o.d(v,{UpdateStaticPageModule:()=>I});var r=o(36895),l=o(88996),s=o(24006),f=o(15869),_=o(3512),t=o(94650),c=o(80927),U=o(97185);function u(e,n){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title "),t.qZA())}function P(e,n){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function p(e,n){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type "),t.qZA())}function d(e,n){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function h(e,n){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function m(e,n){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2," Submit"),t.qZA())}const g=function(e){return{"is-invalid":e}};let S=(()=>{class e{constructor(a,i,y,D,R){this.coreService=a,this.fb=i,this.toastr=y,this.router=D,this.Arout=R,this.editordoc=_.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new s.NI("",[s.kI.required]),slug:new s.NI("",[s.kI.required]),choice_type:new s.NI(""),description:new s.NI("",[s.kI.required])}),this.loaders=!1}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new f.ML,this.slugid=this.Arout.snapshot.paramMap.get("slug"),console.log(this.slugid),this.coreService.getStaticPageBySlug(this.slugid).subscribe(i=>{console.log(i),this.staticPgForm.patchValue(i)});const a=this.renderer.createElement("script");a.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,a)}submit(){console.log(this.staticPgForm.value),this.staticPgForm.valid?(this.loaders=!0,this.coreService.updateStaticPage(this.staticPgForm.value,this.slugid).subscribe(a=>{console.log(a),this.addRes=a,"Updated Sucessfully"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes.slug[0]?(this.loaders=!1,this.toastr.error(this.addRes.slug[0])):this.loaders=!1},a=>{this.loaders=!1,console.log(a.error)})):(this.loaders=!1,this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c.p),t.Y36(s.qu),t.Y36(U._W),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/staticPage",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,u,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,P,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,p,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,d,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,h,2,0,"button",19),t.YNc(45,m,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&a&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,g,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,g,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,g,i.f.choice_type.touched&&i.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.choice_type&&i.choice_type.invalid&&i.choice_type.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(20,g,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders))},dependencies:[r.mk,r.O5,l.yS,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,f.tP,f.Mn]}),e})();var T=o(30597);const b=JSON.parse(localStorage.getItem("auth"));let Z;b&&b.permission&&b.permission.map(n=>{"website"===n.content_type.app_label&&"staticpages"===n.content_type.model&&"change_staticpages"==n.codename&&(Z=n.codename,console.log(Z))});const A=[{path:"",component:S,canActivate:[T.l],data:{allowedRoles:["change_staticpages"]}}];let F=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,F]}),e})()},30597:(C,v,o)=>{o.d(v,{l:()=>t});var r=o(94650),l=o(88996),s=o(97185),f=o(42917),_=o(80927);let t=(()=>{class c{constructor(u,P,p,d,h){this.router=u,this.Arout=P,this.toastr=p,this.profileService=d,this.coreService=h}canActivate(u,P){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),p){const d=u.data.allowedRoles;console.log(d,"allowedRoles");const h=p.some(m=>d.includes(m.codename));if(this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const g=m?.permission,S=this.profileService.getUserDetails();(!S||S.length!==g.length)&&(this.profileService.setUserPermission(g),window.location.reload())}),console.log(h),h)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return c.\u0275fac=function(u){return new(u||c)(r.LFG(l.F0),r.LFG(l.gz),r.LFG(s._W),r.LFG(f.J),r.LFG(_.p))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);