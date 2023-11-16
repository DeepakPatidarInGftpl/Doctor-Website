"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7913],{97913:(T,S,s)=>{s.r(S),s.d(S,{UpdateStaticPageModule:()=>N});var a=s(96814),c=s(74408),o=s(56223),p=s(33360),U=s(30143),t=s(19212),u=s(44293),y=s(58763);function h(e,r){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title "),t.qZA())}function m(e,r){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function f(e,r){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type "),t.qZA())}function d(e,r){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function v(e,r){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function P(e,r){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2,"\xa0 Submit"),t.qZA())}const g=e=>({"is-invalid":e});let b=(()=>{class e{get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}constructor(n,l,i,_,M){this.coreService=n,this.fb=l,this.toastr=i,this.router=_,this.Arout=M,this.editordoc=U.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new o.NI("",[o.kI.required]),slug:new o.NI("",[o.kI.required]),choice_type:new o.NI("",[o.kI.required]),description:new o.NI("",[o.kI.required])}),this.loaders=!1}ngOnInit(){this.editor=new p.ML,this.slugid=this.Arout.snapshot.paramMap.get("slug"),this.coreService.getStaticPageBySlug(this.slugid).subscribe(n=>{this.staticPgForm.patchValue(n)})}submit(){this.staticPgForm.valid?(this.loaders=!0,this.coreService.updateStaticPage(this.staticPgForm.value,this.slugid).subscribe(n=>{this.addRes=n,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes?.error?.slug[0]?(this.loaders=!1,this.toastr.error(this.addRes?.error?.slug[0])):this.loaders=!1},n=>{this.loaders=!1})):(this.loaders=!1,this.staticPgForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(u.p),t.Y36(o.qu),t.Y36(y._W),t.Y36(c.F0),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter Title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","placeholder","Enter Slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/staticPage",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(l,i){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,h,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,m,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Select Choice Type*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,f,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,d,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,v,2,0,"button",19)(45,P,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&l&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,g,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,g,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,g,i.f.choice_type.touched&&i.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.choice_type&&i.choice_type.invalid&&i.choice_type.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(20,g,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders))},dependencies:[a.mk,a.O5,c.rH,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u,p.tP,p.Mn]})}return e})();var A=s(1971);const Z=JSON.parse(localStorage.getItem("auth"));let C;Z&&Z.map(r=>{"website"===r.content_type.app_label&&"staticpages"===r.content_type.model&&"change_staticpages"==r.codename&&(C=r.codename)});const F=[{path:"",component:b,canActivate:[A.l],data:{allowedRoles:["change_staticpages"]}}];let I=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(F),c.Bz]})}return e})();var D=s(16047),E=s(5164),J=s(89727),R=s(37263);let N=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.ez,I,D.I,R.T,o.u5,o.UX,J.ZU,E.ii.forRoot(),p.FP]})}return e})()},1971:(T,S,s)=>{s.d(S,{l:()=>t});var a=s(19212),c=s(74408),o=s(58763),p=s(41789),U=s(44293);let t=(()=>{class u{constructor(h,m,f,d,v){this.router=h,this.Arout=m,this.toastr=f,this.profileService=d,this.coreService=v}canActivate(h,m){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),f){const d=h.data.allowedRoles;console.log(d,"allowedRoles");const v=f.some(P=>d.includes(P.codename));if(console.log(v),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const g=P?.permission,b=this.profileService.getUserDetails();(!b||b.length!==g.length)&&(this.profileService.setUserPermission(g),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}static#t=this.\u0275fac=function(m){return new(m||u)(a.LFG(c.F0),a.LFG(c.gz),a.LFG(o._W),a.LFG(p.J),a.LFG(U.p))};static#e=this.\u0275prov=a.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);