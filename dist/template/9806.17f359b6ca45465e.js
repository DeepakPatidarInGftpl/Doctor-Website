"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{9806:(y,c,s)=>{s.r(c),s.d(c,{AddStaticPageModule:()=>T});var l=s(6895),r=s(1728),n=s(433),d=s(5869),m=s(3512),t=s(1571),p=s(927),h=s(7185);function f(e,a){1&e&&(t.TgZ(0,"span",16),t._uU(1,"Enter Title "),t.qZA())}function v(e,a){1&e&&(t.TgZ(0,"span",16),t._uU(1,"Enter Slug "),t.qZA())}function A(e,a){1&e&&(t.TgZ(0,"span",16),t._uU(1,"Enter Description "),t.qZA())}const g=function(e){return{"is-invalid":e}},P=[{path:"",component:(()=>{class e{constructor(o,i,u,b){this.coreService=o,this.fb=i,this.toastr=u,this.router=b,this.editordoc=m.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new n.NI("",[n.kI.required]),slug:new n.NI("",[n.kI.required]),description:new n.NI("",[n.kI.required])}),this.editorStyle={height:"200px"}}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new d.ML;const o=this.renderer.createElement("script");o.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,o)}submit(){console.log(this.staticPgForm.value),this.staticPgForm.valid?this.coreService.addStatic(this.staticPgForm.value).subscribe(o=>{console.log(o),this.addRes=o,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},o=>{console.log(o.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.p),t.Y36(n.qu),t.Y36(h._W),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:34,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],[1,"btn","btn-submit","me-2"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,f,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,v,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",11)(23,"div",7)(24,"label"),t._uU(25,"Description*"),t.qZA(),t._UZ(26,"ngx-editor-menu",12)(27,"ngx-editor",13),t.YNc(28,A,2,0,"span",9),t.qZA()(),t.TgZ(29,"div",11)(30,"button",14),t._uU(31,"Submit"),t.qZA(),t.TgZ(32,"a",15),t._uU(33,"Cancel"),t.qZA()()()()()()),2&o&&(t.xp6(8),t.Q6J("formGroup",i.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(10,g,i.f.title.touched&&i.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",i.title&&i.title.invalid&&i.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(12,g,i.f.slug.touched&&i.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",i.slug&&i.slug.invalid&&i.slug.touched),t.xp6(5),t.Q6J("editor",i.editor)("toolbar",i.toolbar),t.xp6(1),t.Q6J("editor",i.editor)("ngClass",t.VKq(14,g,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched))},dependencies:[l.mk,l.O5,r.yS,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,d.tP,d.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}"]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(P),r.Bz]}),e})();var Z=s(5415),C=s(6134),F=s(906);let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,S,Z.T,n.u5,n.UX,F.ZU,C.ii.forRoot(),d.FP]}),e})()}}]);