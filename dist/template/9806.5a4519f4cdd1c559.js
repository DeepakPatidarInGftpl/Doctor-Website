"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9806],{9806:(u,l,o)=>{o.r(l),o.d(l,{AddStaticPageModule:()=>T});var s=o(6895),p=o(8996),i=o(4006),d=o(5869),y=o(3512),t=o(4650),h=o(927),m=o(7185);function x(e,r){1&e&&(t.TgZ(0,"span",21),t._uU(1,"Enter Title "),t.qZA())}function f(e,r){1&e&&(t.TgZ(0,"span",21),t._uU(1,"Enter Slug "),t.qZA())}function v(e,r){1&e&&(t.TgZ(0,"span",21),t._uU(1,"Select Choice Type "),t.qZA())}function b(e,r){1&e&&(t.TgZ(0,"span",21),t._uU(1,"Enter Description "),t.qZA())}const c=function(e){return{"is-invalid":e}},P=[{path:"",component:(()=>{class e{constructor(a,n,g,_){this.coreService=a,this.fb=n,this.toastr=g,this.router=_,this.editordoc=y.Z,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["align_left","align_center","align_right","align_justify"]],this.staticPgForm=this.fb.group({title:new i.NI("",[i.kI.required]),slug:new i.NI("",[i.kI.required]),choice_type:new i.NI(""),description:new i.NI("",[i.kI.required])}),this.editorStyle={height:"200px"}}get doc(){return this.staticPgForm.get("description")}get f(){return this.staticPgForm.controls}ngOnInit(){this.editor=new d.ML;const a=this.renderer.createElement("script");a.src="../../../assets/js/quill.js",this.renderer.appendChild(document.head,a)}submit(){console.log(this.staticPgForm.value),this.staticPgForm.valid?this.coreService.addStatic(this.staticPgForm.value).subscribe(a=>{console.log(a),this.addRes=a,"Data Created"==this.addRes.msg?(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.router.navigate(["/website/staticPage"])):"Static Pages with this slug already exists."==this.addRes.slug[0]&&this.toastr.error(this.addRes.slug[0])},a=>{console.log(a.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}get choice_type(){return this.staticPgForm.get("choice_type")}ngOnDestroy(){this.editor?.destroy()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h.p),t.Y36(i.qu),t.Y36(m._W),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-static-page"]],decls:48,vars:20,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","slug","id","slug",3,"ngClass"],["formControlName","choice_type",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],["value","Privacy-Policy"],["value","Return-Policy"],["value","Cancellation"],[1,"col-lg-12"],[3,"editor","toolbar"],["formControlName","description","id","slug",3,"editor","ngClass"],[1,"btn","btn-submit","me-2"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Static Page "),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Static Page "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,x,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Slug*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,f,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Store*"),t.qZA(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Choice Type"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Privacy-Policy"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Return-Policy"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Cancellation"),t.qZA()(),t.YNc(35,v,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",16)(37,"div",7)(38,"label"),t._uU(39,"Description*"),t.qZA(),t._UZ(40,"ngx-editor-menu",17)(41,"ngx-editor",18),t.YNc(42,b,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",16)(44,"button",19),t._uU(45,"Submit"),t.qZA(),t.TgZ(46,"a",20),t._uU(47,"Cancel"),t.qZA()()()()()()),2&a&&(t.xp6(8),t.Q6J("formGroup",n.staticPgForm),t.xp6(6),t.Q6J("ngClass",t.VKq(12,c,n.f.title.touched&&n.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",n.title&&n.title.invalid&&n.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(14,c,n.f.slug.touched&&n.f.slug.invalid)),t.xp6(1),t.Q6J("ngIf",n.slug&&n.slug.invalid&&n.slug.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(16,c,n.f.choice_type.touched&&n.f.choice_type.invalid)),t.xp6(9),t.Q6J("ngIf",n.choice_type&&n.choice_type.invalid&&n.choice_type.touched),t.xp6(5),t.Q6J("editor",n.editor)("toolbar",n.toolbar),t.xp6(1),t.Q6J("editor",n.editor)("ngClass",t.VKq(18,c,n.f.description.touched&&n.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",n.description&&n.description.invalid&&n.description.touched))},dependencies:[s.mk,s.O5,p.yS,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,d.tP,d.Mn],styles:[".NgxEditor__Content[_ngcontent-%COMP%]{height:150px}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(P),p.Bz]}),e})();var k=o(5415),Z=o(6134),C=o(906);let T=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,A,k.T,i.u5,i.UX,C.ZU,Z.ii.forRoot(),d.FP]}),e})()},3512:(u,l,o)=>{o.d(l,{Z:()=>s});const s={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}}}]);