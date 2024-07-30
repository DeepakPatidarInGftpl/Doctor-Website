"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{59806:(T,b,i)=>{i.r(b),i.d(b,{AddStaticPageModule:()=>R});var l=i(36895),_=i(4392),o=i(24006),d=i(32728),a=i(3512),t=i(94650),s=i(80927),c=i(97185);function r(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Title"),t.qZA())}function m(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Slug "),t.qZA())}function h(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Select Choice Type"),t.qZA())}function u(e,g){1&e&&(t.TgZ(0,"span",22),t._uU(1,"Enter Description "),t.qZA())}function p(e,g){1&e&&(t.TgZ(0,"button",23),t._uU(1,"Submit"),t.qZA())}function P(e,g){1&e&&(t.TgZ(0,"button",24),t._UZ(1,"span",25),t._uU(2,"\xa0 Submit"),t.qZA())}const f=function(e){return{"is-invalid":e}};let y=(()=>{class e{constructor(v,n,C,O){this.coreService=v,this.fb=n,this.toastr=C,this.router=O,this.editordoc=a.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new o.NI("",[o.kI.required]),slug:new o.NI("",[o.kI.required]),choice_type:new o.NI("",[o.kI.required]),description:new o.NI("",[o.kI.required])}),this.editorStyle={height:"200px"},this.loaders=!1}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new d.ML}submit(){this.staticPgForm.valid?(this.loaders=!0,this.coreService.addStatic(this.staticPgForm.value).subscribe(v=>{this.addRes=v,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes?.error?.slug[0]?(this.loaders=!1,this.toastr.error(this.addRes?.error?.slug[0])):this.loaders=!1},v=>{this.loaders=!1})):(this.loaders=!1,this.staticPgForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(v){return new(v||e)(t.Y36(s.p),t.Y36(o.qu),t.Y36(c._W),t.Y36(_.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:48,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter Title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","placeholder","Enter Slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","/website/staticPage",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(v,n){1&v&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,r,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,m,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Select Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,h,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,u,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16),t.YNc(44,p,2,0,"button",19),t.YNc(45,P,3,0,"button",20),t.TgZ(46,"a",21),t._uU(47,"Cancel"),t.qZA()()()()()()),2&v&&(t.xp6(8),t.Q6J("formGroup",n.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(14,f,n.f.title.touched&&n.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",n.title&&n.title.invalid&&n.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,f,n.f.slug.touched&&n.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",n.slug&&n.slug.invalid&&n.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,f,n.f.choice_type.touched&&n.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",n.choice_type&&n.choice_type.invalid&&n.choice_type.touched),t.xp6(5),t.Q6J("editor",n.editor)("toolbar",n.toolbar),t.xp6(1),t.Q6J("editor",n.editor)("ngClass",t.VKq(20,f,n.f.description.touched&&n.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",n.description&&n.description.invalid&&n.description.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[l.mk,l.O5,_.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u,d.tP,d.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var S=i(30597);const A=JSON.parse(localStorage.getItem("auth"));let D;A&&A.map(g=>{"website"===g.content_type.app_label&&"staticpages"===g.content_type.model&&"add_staticpages"==g.codename&&(D=g.codename)});const E=[{path:"",component:y,canActivate:[S.l],data:{allowedRoles:["add_staticpages"]}}];let Z=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.Bz.forChild(E),_.Bz]}),e})();var M=i(87078),I=i(96134),U=i(30906);let R=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,Z,M.T,o.u5,o.UX,U.ZU,I.ii.forRoot(),d.FP]}),e})()},30597:(T,b,i)=>{i.d(b,{l:()=>t});var l=i(94650),_=i(4392),o=i(97185),d=i(42917),a=i(80927);let t=(()=>{class s{constructor(r,m,h,u,p){this.router=r,this.Arout=m,this.toastr=h,this.profileService=u,this.coreService=p}canActivate(r,m){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),h){const u=r.data.allowedRoles;console.log(u,"allowedRoles");const p=h.some(P=>u.includes(P.codename));if(console.log(p),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const f=P?.permission,y=this.profileService.getUserDetails();(!y||y.length!==f.length)&&(this.profileService.setUserPermission(f),window.location.reload())}),p)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return s.\u0275fac=function(r){return new(r||s)(l.LFG(_.F0),l.LFG(_.gz),l.LFG(o._W),l.LFG(d.J),l.LFG(a.p))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},87078:(T,b,i)=>{i.d(b,{G:()=>l.G,T:()=>_.T});var l=i(10008),_=i(33861)},10008:(T,b,i)=>{i.d(b,{G:()=>o});var l=i(94650),o=function(){function d(a,t,s){this.el=a,this.vcr=t,this.renderer=s,this.dtOptions={}}return d.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(t){a.displayTable(t)}):this.displayTable(null)},d.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},d.prototype.displayTable=function(a){var t=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(s,c){Promise.resolve(t.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",t.el.nativeElement).length?c("Both the table and dtOptions cannot be empty"):setTimeout(function(){var h={rowCallback:function(u,p,P){if(r.columns){var f=r.columns;t.applyNgPipeTransform(u,f),t.applyNgRefTemplate(u,f,p)}r.rowCallback&&r.rowCallback(u,p,P)}};h=Object.assign({},r,h),t.dt=$(t.el.nativeElement).DataTable(h),s(t.dt)})})})},d.prototype.applyNgPipeTransform=function(a,t){t.filter(function(c){return c.ngPipeInstance&&!c.ngTemplateRef}).forEach(function(c){var r=c.ngPipeInstance,m=c.ngPipeArgs||[],h=t.findIndex(function(f){return f.data===c.data}),u=a.childNodes.item(h),p=$(u).text(),P=r.transform.apply(r,function(d,a,t){if(t||2===arguments.length)for(var r,s=0,c=a.length;s<c;s++)(r||!(s in a))&&(r||(r=Array.prototype.slice.call(a,0,s)),r[s]=a[s]);return d.concat(r||Array.prototype.slice.call(a))}([p],m,!1));$(u).text(P)})},d.prototype.applyNgRefTemplate=function(a,t,s){var c=this;t.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var h=m.ngTemplateRef,u=h.ref,p=h.context,P=t.findIndex(function(A){return A.data===m.data}),f=a.childNodes.item(P);$(f).html("");var y=Object.assign({},p,p?.userData,{adtData:s}),S=c.vcr.createEmbeddedView(u,y);c.renderer.appendChild(f,S.rootNodes[0])})},d.\u0275fac=function(t){return new(t||d)(l.Y36(l.SBq),l.Y36(l.s_b),l.Y36(l.Qsj))},d.\u0275dir=l.lG2({type:d,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),d}()},33861:(T,b,i)=>{i.d(b,{T:()=>d});var l=i(36895),o=(i(10008),i(94650)),d=function(){function a(){}return a.forRoot=function(){return{ngModule:a}},a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[l.ez]}),a}()}}]);