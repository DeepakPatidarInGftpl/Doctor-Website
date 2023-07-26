"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{9806:(_,T,a)=>{a.r(T),a.d(T,{AddStaticPageModule:()=>M});var d=a(6895),y=a(8996),s=a(4006),P=a(5869),h=a(3512),t=a(4650),o=a(927),n=a(7185);function r(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title "),t.qZA())}function c(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function l(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type "),t.qZA())}function f(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function m(e,g){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function v(e,g){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2," Submit"),t.qZA())}const p=function(e){return{"is-invalid":e}};let A=(()=>{class e{constructor(u,i,I,D){this.coreService=u,this.fb=i,this.toastr=I,this.router=D,this.editordoc=h.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new s.NI("",[s.kI.required]),slug:new s.NI("",[s.kI.required]),choice_type:new s.NI(""),description:new s.NI("",[s.kI.required])}),this.editorStyle={height:"200px"},this.loaders=!1}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new P.ML;const u=this.renderer.createElement("script");u.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,u)}submit(){console.log(this.staticPgForm.value),this.staticPgForm.valid?(this.loaders=!0,this.coreService.addStatic(this.staticPgForm.value).subscribe(u=>{console.log(u),this.addRes=u,"Data Created"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes.slug[0]?(this.loaders=!1,this.toastr.error(this.addRes.slug[0])):this.loaders=!1},u=>{this.loaders=!1,console.log(u.error)})):(this.loaders=!1,this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(o.p),t.Y36(s.qu),t.Y36(n._W),t.Y36(y.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(u,i){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,r,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,c,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,l,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,f,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,m,2,0,"button",19),t.YNc(45,v,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&u&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,p,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,p,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,p,i.f.choice_type.touched&&i.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.choice_type&&i.choice_type.invalid&&i.choice_type.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(20,p,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders))},dependencies:[d.mk,d.O5,y.yS,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,P.tP,P.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var b=a(597);const S=JSON.parse(localStorage.getItem("auth"));let Z;S&&S.permission&&S.permission.map(g=>{"website"===g.content_type.app_label&&"staticpages"===g.content_type.model&&"add_staticpages"==g.codename&&(Z=g.codename,console.log(Z))});const C=[{path:"",component:A,canActivate:[b.l],data:{allowedRoles:[Z]}}];let F=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.Bz.forChild(C),y.Bz]}),e})();var R=a(5415),N=a(6134),U=a(906);let M=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,F,R.T,s.u5,s.UX,U.ZU,N.ii.forRoot(),P.FP]}),e})()},597:(_,T,a)=>{a.d(T,{l:()=>P});var d=a(4650),y=a(8996),s=a(7185);let P=(()=>{class h{constructor(o,n,r){this.router=o,this.Arout=n,this.toastr=r}canActivate(o,n){const r=JSON.parse(localStorage.getItem("auth"));if(r&&r.user){const c=o.data.allowedRoles;console.log(c,"allowedRoles");const l=r.permission.some(f=>c.includes(f.codename));if(console.log(l),l)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return h.\u0275fac=function(o){return new(o||h)(d.LFG(y.F0),d.LFG(y.gz),d.LFG(s._W))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},5415:(_,T,a)=>{a.d(T,{G:()=>s,T:()=>h});var d=a(4650),s=function(){function t(o,n,r){this.el=o,this.vcr=n,this.renderer=r,this.dtOptions={}}return t.prototype.ngOnInit=function(){var o=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){o.displayTable(n)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(o){var n=this;o&&(this.dtOptions=o),this.dtInstance=new Promise(function(r,c){Promise.resolve(n.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",n.el.nativeElement).length?c("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(v,p,A){if(l.columns){var b=l.columns;n.applyNgPipeTransform(v,b),n.applyNgRefTemplate(v,b,p)}l.rowCallback&&l.rowCallback(v,p,A)}};m=Object.assign({},l,m),n.dt=$(n.el.nativeElement).DataTable(m),r(n.dt)})})})},t.prototype.applyNgPipeTransform=function(o,n){n.filter(function(c){return c.ngPipeInstance&&!c.ngTemplateRef}).forEach(function(c){var l=c.ngPipeInstance,f=c.ngPipeArgs||[],m=n.findIndex(function(b){return b.data===c.data}),v=o.childNodes.item(m),p=$(v).text(),A=l.transform.apply(l,function(t,o,n){if(n||2===arguments.length)for(var l,r=0,c=o.length;r<c;r++)(l||!(r in o))&&(l||(l=Array.prototype.slice.call(o,0,r)),l[r]=o[r]);return t.concat(l||Array.prototype.slice.call(o))}([p],f,!1));$(v).text(A)})},t.prototype.applyNgRefTemplate=function(o,n,r){var c=this;n.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var m=f.ngTemplateRef,v=m.ref,p=m.context,A=n.findIndex(function(C){return C.data===f.data}),b=o.childNodes.item(A);$(b).html("");var S=Object.assign({},p,p?.userData,{adtData:r}),Z=c.vcr.createEmbeddedView(v,S);c.renderer.appendChild(b,Z.rootNodes[0])})},t.\u0275fac=function(n){return new(n||t)(d.Y36(d.SBq),d.Y36(d.s_b),d.Y36(d.Qsj))},t.\u0275dir=d.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),P=a(6895),h=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[P.ez]}),t}()}}]);