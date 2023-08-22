"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{59806:(Z,A,o)=>{o.r(A),o.d(A,{AddStaticPageModule:()=>R});var d=o(36895),y=o(88996),r=o(24006),P=o(15869),T=o(3512),t=o(94650),a=o(80927),n=o(97185);function l(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title "),t.qZA())}function c(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function s(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type "),t.qZA())}function u(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function m(e,p){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function f(e,p){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2," Submit"),t.qZA())}const g=function(e){return{"is-invalid":e}};let v=(()=>{class e{constructor(h,i,D,E){this.coreService=h,this.fb=i,this.toastr=D,this.router=E,this.editordoc=T.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new r.NI("",[r.kI.required]),slug:new r.NI("",[r.kI.required]),choice_type:new r.NI(""),description:new r.NI("",[r.kI.required])}),this.editorStyle={height:"200px"},this.loaders=!1}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new P.ML;const h=this.renderer.createElement("script");h.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,h)}submit(){this.staticPgForm.valid?(this.loaders=!0,this.coreService.addStatic(this.staticPgForm.value).subscribe(h=>{this.addRes=h,"Data Created"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes.slug[0]?(this.loaders=!1,this.toastr.error(this.addRes.slug[0])):this.loaders=!1},h=>{this.loaders=!1})):(this.loaders=!1,this.staticPgForm.markAllAsTouched())}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(h){return new(h||e)(t.Y36(a.p),t.Y36(r.qu),t.Y36(n._W),t.Y36(y.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","/website/staticPage",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(h,i){1&h&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,l,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,c,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,s,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,u,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,m,2,0,"button",19),t.YNc(45,f,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&h&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,g,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,g,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,g,i.f.choice_type.touched&&i.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.choice_type&&i.choice_type.invalid&&i.choice_type.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(20,g,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders))},dependencies:[d.mk,d.O5,y.yS,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,P.tP,P.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var b=o(30597);const S=JSON.parse(localStorage.getItem("auth"));let _;S&&S.map(p=>{"website"===p.content_type.app_label&&"staticpages"===p.content_type.model&&"add_staticpages"==p.codename&&(_=p.codename)});const C=[{path:"",component:v,canActivate:[b.l],data:{allowedRoles:["add_staticpages"]}}];let I=(()=>{class e{}return e.\u0275fac=function(h){return new(h||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.Bz.forChild(C),y.Bz]}),e})();var U=o(65415),F=o(96134),M=o(30906);let R=(()=>{class e{}return e.\u0275fac=function(h){return new(h||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,I,U.T,r.u5,r.UX,M.ZU,F.ii.forRoot(),P.FP]}),e})()},30597:(Z,A,o)=>{o.d(A,{l:()=>t});var d=o(94650),y=o(88996),r=o(97185),P=o(42917),T=o(80927);let t=(()=>{class a{constructor(l,c,s,u,m){this.router=l,this.Arout=c,this.toastr=s,this.profileService=u,this.coreService=m}canActivate(l,c){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),s){const u=l.data.allowedRoles,m=s.some(f=>u.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const g=f?.permission,v=this.profileService.getUserDetails();(!v||v.length!==g.length)&&(this.profileService.setUserPermission(g),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return a.\u0275fac=function(l){return new(l||a)(d.LFG(y.F0),d.LFG(y.gz),d.LFG(r._W),d.LFG(P.J),d.LFG(T.p))},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},65415:(Z,A,o)=>{o.d(A,{G:()=>r,T:()=>T});var d=o(94650),r=function(){function t(a,n,l){this.el=a,this.vcr=n,this.renderer=l,this.dtOptions={}}return t.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){a.displayTable(n)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(a){var n=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(l,c){Promise.resolve(n.dtOptions).then(function(s){0===Object.keys(s).length&&0===$("tbody tr",n.el.nativeElement).length?c("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(f,g,v){if(s.columns){var b=s.columns;n.applyNgPipeTransform(f,b),n.applyNgRefTemplate(f,b,g)}s.rowCallback&&s.rowCallback(f,g,v)}};m=Object.assign({},s,m),n.dt=$(n.el.nativeElement).DataTable(m),l(n.dt)})})})},t.prototype.applyNgPipeTransform=function(a,n){n.filter(function(c){return c.ngPipeInstance&&!c.ngTemplateRef}).forEach(function(c){var s=c.ngPipeInstance,u=c.ngPipeArgs||[],m=n.findIndex(function(b){return b.data===c.data}),f=a.childNodes.item(m),g=$(f).text(),v=s.transform.apply(s,function(t,a,n){if(n||2===arguments.length)for(var s,l=0,c=a.length;l<c;l++)(s||!(l in a))&&(s||(s=Array.prototype.slice.call(a,0,l)),s[l]=a[l]);return t.concat(s||Array.prototype.slice.call(a))}([g],u,!1));$(f).text(v)})},t.prototype.applyNgRefTemplate=function(a,n,l){var c=this;n.filter(function(u){return u.ngTemplateRef&&!u.ngPipeInstance}).forEach(function(u){var m=u.ngTemplateRef,f=m.ref,g=m.context,v=n.findIndex(function(C){return C.data===u.data}),b=a.childNodes.item(v);$(b).html("");var S=Object.assign({},g,g?.userData,{adtData:l}),_=c.vcr.createEmbeddedView(f,S);c.renderer.appendChild(b,_.rootNodes[0])})},t.\u0275fac=function(n){return new(n||t)(d.Y36(d.SBq),d.Y36(d.s_b),d.Y36(d.Qsj))},t.\u0275dir=d.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),P=o(36895),T=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[P.ez]}),t}()}}]);