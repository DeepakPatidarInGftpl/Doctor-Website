"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{9806:(I,T,d)=>{d.r(T),d.d(T,{AddStaticPageModule:()=>U});var g=d(6895),b=d(8996),o=d(4006),y=d(5869),A=d(3512),t=d(4650),a=d(927),n=d(7185);function l(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title "),t.qZA())}function c(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function r(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type "),t.qZA())}function f(e,p){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function h(e,p){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function m(e,p){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2," Submit"),t.qZA())}const u=function(e){return{"is-invalid":e}},v=[{path:"",component:(()=>{class e{constructor(s,i,F,_){this.coreService=s,this.fb=i,this.toastr=F,this.router=_,this.editordoc=A.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new o.NI("",[o.kI.required]),slug:new o.NI("",[o.kI.required]),choice_type:new o.NI(""),description:new o.NI("",[o.kI.required])}),this.editorStyle={height:"200px"},this.loaders=!1}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new y.ML;const s=this.renderer.createElement("script");s.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,s)}submit(){console.log(this.staticPgForm.value),this.staticPgForm.valid?(this.loaders=!0,this.coreService.addStatic(this.staticPgForm.value).subscribe(s=>{console.log(s),this.addRes=s,"Data Created"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes.slug[0]&&this.toastr.error(this.addRes.slug[0])},s=>{console.log(s.error.gst)})):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(a.p),t.Y36(o.qu),t.Y36(n._W),t.Y36(b.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,l,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,c,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,r,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,f,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,h,2,0,"button",19),t.YNc(45,m,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&s&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,u,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,u,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,u,i.f.choice_type.touched&&i.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.choice_type&&i.choice_type.invalid&&i.choice_type.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(20,u,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders))},dependencies:[g.mk,g.O5,b.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u,y.tP,y.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.Bz.forChild(v),b.Bz]}),e})();var C=d(5415),S=d(6134),N=d(906);let U=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,Z,C.T,o.u5,o.UX,N.ZU,S.ii.forRoot(),y.FP]}),e})()},5415:(I,T,d)=>{d.d(T,{G:()=>o,T:()=>A});var g=d(4650),o=function(){function t(a,n,l){this.el=a,this.vcr=n,this.renderer=l,this.dtOptions={}}return t.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){a.displayTable(n)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(a){var n=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(l,c){Promise.resolve(n.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",n.el.nativeElement).length?c("Both the table and dtOptions cannot be empty"):setTimeout(function(){var h={rowCallback:function(m,u,P){if(r.columns){var v=r.columns;n.applyNgPipeTransform(m,v),n.applyNgRefTemplate(m,v,u)}r.rowCallback&&r.rowCallback(m,u,P)}};h=Object.assign({},r,h),n.dt=$(n.el.nativeElement).DataTable(h),l(n.dt)})})})},t.prototype.applyNgPipeTransform=function(a,n){n.filter(function(c){return c.ngPipeInstance&&!c.ngTemplateRef}).forEach(function(c){var r=c.ngPipeInstance,f=c.ngPipeArgs||[],h=n.findIndex(function(v){return v.data===c.data}),m=a.childNodes.item(h),u=$(m).text(),P=r.transform.apply(r,function(t,a,n){if(n||2===arguments.length)for(var r,l=0,c=a.length;l<c;l++)(r||!(l in a))&&(r||(r=Array.prototype.slice.call(a,0,l)),r[l]=a[l]);return t.concat(r||Array.prototype.slice.call(a))}([u],f,!1));$(m).text(P)})},t.prototype.applyNgRefTemplate=function(a,n,l){var c=this;n.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var h=f.ngTemplateRef,m=h.ref,u=h.context,P=n.findIndex(function(S){return S.data===f.data}),v=a.childNodes.item(P);$(v).html("");var Z=Object.assign({},u,u?.userData,{adtData:l}),C=c.vcr.createEmbeddedView(m,Z);c.renderer.appendChild(v,C.rootNodes[0])})},t.\u0275fac=function(n){return new(n||t)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},t.\u0275dir=g.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),y=d(6895),A=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[y.ez]}),t}()}}]);