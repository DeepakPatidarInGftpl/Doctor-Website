"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2398],{2398:(P,C,i)=>{i.r(C),i.d(C,{TaxSlabsModule:()=>q});var d=i(6895),v=i(8996),l=i(4006),t=i(4650),x=i(927),c=i(7185);function r(e,s){if(1&e&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&e){const o=s.$implicit;t.s9C("value",o.id),t.xp6(1),t.hij(" ",o.title," ")}}function a(e,s){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Select Category "),t.qZA())}const u=function(e){return{"is-invalid":e}};function p(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"a",30)(1,"input",31),t.NdJ("change",function(b){t.CHM(o);const f=t.oxw();return t.KtG(f.onCheckChange(b))}),t.qZA(),t.TgZ(2,"label",32),t.NdJ("click",function(b){t.CHM(o);const f=t.oxw();return t.KtG(f.onLabelClick(b))}),t._uU(3),t.qZA()()}if(2&e){const o=s.$implicit,n=s.index,b=t.oxw();t.xp6(1),t.Q6J("value",o.id)("ngClass",t.VKq(5,u,b.f.subcategory.touched&&b.f.subcategory.invalid))("id","checkboxSize-"+n),t.xp6(1),t.Q6J("for","checkboxSize-"+n),t.xp6(1),t.Oqu(o.title)}}function g(e,s){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.selectedSubcat+" Subcategory Selected")}}function m(e,s){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Select Sub Category "),t.qZA())}function _(e,s){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Subcategory not available "),t.qZA())}function y(e,s){if(1&e&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&e){const o=s.$implicit;t.s9C("value",o.id),t.xp6(1),t.hij(" ",o.tax_percentage+"%"," ")}}function h(e,s){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"tr",33)(2,"td"),t._UZ(3,"input",34),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",35),t.qZA(),t.TgZ(6,"td")(7,"select",36)(8,"option",11),t._uU(9,"Select tax"),t.qZA(),t.YNc(10,y,2,2,"option",12),t.qZA()(),t.TgZ(11,"td")(12,"button",37),t.NdJ("click",function(){const f=t.CHM(o).index,F=t.oxw();return t.KtG(F.removeAmount(f))}),t._uU(13,"\u2212"),t.qZA()()(),t.BQk()}if(2&e){const o=s.index,n=t.oxw();t.xp6(1),t.Q6J("formGroupName",o),t.xp6(9),t.Q6J("ngForOf",n.taxList)}}function S(e,s){1&e&&(t.TgZ(0,"button",38),t._uU(1,"Submit"),t.qZA())}function T(e,s){1&e&&(t.TgZ(0,"button",39),t._UZ(1,"span",40),t._uU(2," Submit"),t.qZA())}let Z=(()=>{class e{constructor(o,n,b,f){this.fb=o,this.coreService=n,this.router=b,this.toastrService=f,this.selectSubcat=[],this.selectedSubcat=0,this.loaders=!1}get f(){return this.taxSlabForm.controls}ngOnInit(){this.taxSlabForm=this.fb.group({subcategory_group:new l.NI("",[l.kI.required]),subcategory:new l.Oe([],[l.kI.required]),amount_tax_slabs:this.fb.array([])}),this.addAmount(),this.getSubcateGroup(),this.getTax()}amount_tax_slabs(){return this.fb.group({from_amount:"",to_amount:"",tax:""})}getAmount(){return this.taxSlabForm.get("amount_tax_slabs")}addAmount(){this.getAmount().push(this.amount_tax_slabs())}removeAmount(o){this.getAmount().removeAt(o)}get subcategory_group(){return this.taxSlabForm.get("subcategory_group")}get subcategory(){return this.taxSlabForm.get("subcategory")}get tax(){return this.taxSlabForm.get("tax")}getSubcateGroup(){this.coreService.getSubcategoryGroup().subscribe(o=>{console.log(o),this.subcatGroupList=o})}getTax(){this.coreService.gettaxd().subscribe(o=>{console.log(o),this.taxList=o,console.log(this.taxList)})}getSubcategoryBySubcatGroup(o){this.coreService.getSubcategoryBySubcatGroup(o).subscribe(n=>{console.log(n.subcategories),this.subcatbySubcatGroup=n.subcategories,setTimeout(()=>{this.subcatbySubcatGroup.map(b=>{console.log(this.selectSubcat.includes(b.id),"subcategory"),this.selectSubcat.includes(b.id)&&this.taxSlabForm.get("subcategory").push(new l.NI(b.id))})},2e3)})}onCheckChange(o){const n=this.taxSlabForm.get("subcategory");if(o.target.checked)n.push(new l.NI(parseInt(o.target.value))),this.check=n,this.selectedSubcat++;else{let b=0;n.controls.forEach(f=>{if(f.value==o.target.value)return n.removeAt(b),void this.selectedSubcat--;b++})}}submit(){console.log(this.taxSlabForm.value),this.taxSlabForm.valid?(this.loaders=!0,this.coreService.addTaxSlab(this.taxSlabForm.value).subscribe(o=>{console.log(o),this.addRes=o,"Tax Slabs Created"==this.addRes.msg&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["product/taxSlabList"]))})):(this.taxSlabForm.markAllAsTouched(),console.log("forms invalid"))}onLabelClick(o){o.stopPropagation()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.qu),t.Y36(x.p),t.Y36(v.F0),t.Y36(c._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tax-slabs"]],decls:56,vars:13,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["formControlName","subcategory_group","required","","id","subcategory_group",1,"w-100","h-100","border",3,"ngClass","change"],["category_idValue","","categoryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-8","col-sm-8","col-12"],[1,"table","amt-table"],["formArrayName","amount_tax_slabs"],[4,"ngFor","ngForOf"],[1,"w-100","text-right"],[1,"addMore",3,"click"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[3,"value"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategory",2,"margin-right","5px",3,"value","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],[3,"formGroupName"],["type","text","formControlName","from_amount","placeholder","ex-100",1,"form-control","inp"],["type","text","formControlName","to_amount","placeholder","ex-1000",1,"form-control","inp"],["formControlName","tax",1,"inp"],[1,"btn",2,"background","#FF9F43",3,"click"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o){const b=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Tax Slab"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Subcategory Group*"),t.qZA(),t.TgZ(15,"select",9,10),t.NdJ("change",function(){t.CHM(b);const F=t.MAs(17);return t.KtG(n.getSubcategoryBySubcatGroup(F.value))}),t.TgZ(18,"option",11),t._uU(19,"select subcategory group"),t.qZA(),t.YNc(20,r,2,2,"option",12),t.qZA(),t.YNc(21,a,2,0,"span",13),t.qZA()(),t.TgZ(22,"div",7)(23,"div",8)(24,"label"),t._uU(25,"SubCategory*"),t.qZA(),t.TgZ(26,"div",14)(27,"button",15),t._uU(28,"Select Subcategory"),t.qZA(),t.TgZ(29,"ul",16)(30,"li"),t.YNc(31,p,4,7,"a",17),t.qZA()()(),t.YNc(32,g,2,1,"p",18),t.YNc(33,m,2,0,"span",13),t.YNc(34,_,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",19)(36,"table",20)(37,"thead")(38,"tr")(39,"th"),t._uU(40,"From Amount"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"To Amount"),t.qZA(),t.TgZ(43,"th"),t._uU(44,"Tax"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"\xa0"),t.qZA()()(),t.TgZ(47,"tbody"),t.ynx(48,21),t.YNc(49,h,14,2,"ng-container",22),t.BQk(),t.qZA()(),t.TgZ(50,"div",23)(51,"span",24),t.NdJ("click",function(){return n.addAmount()}),t._uU(52,"+ Add more"),t.qZA()()(),t.TgZ(53,"div",25),t.YNc(54,S,2,0,"button",26),t.YNc(55,T,3,0,"button",27),t.qZA()()()()()()}2&o&&(t.xp6(6),t.Q6J("formGroup",n.taxSlabForm),t.xp6(9),t.Q6J("ngClass",t.VKq(11,u,n.f.subcategory_group.touched&&n.f.subcategory_group.invalid)),t.xp6(5),t.Q6J("ngForOf",n.subcatGroupList),t.xp6(1),t.Q6J("ngIf",n.subcategory_group&&n.subcategory_group.invalid&&n.subcategory_group.touched),t.xp6(10),t.Q6J("ngForOf",n.subcatbySubcatGroup),t.xp6(1),t.Q6J("ngIf",n.selectedSubcat>0),t.xp6(1),t.Q6J("ngIf",n.subcategory&&n.subcategory.invalid&&n.subcategory.touched&&(null==n.subcatbySubcatGroup?null:n.subcatbySubcatGroup.length)>0),t.xp6(1),t.Q6J("ngIf",n.subcategory_group&&n.subcategory_group.touched&&(null==n.subcatbySubcatGroup?null:n.subcatbySubcatGroup.length)<=0),t.xp6(15),t.Q6J("ngForOf",n.getAmount().controls),t.xp6(5),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[d.mk,d.sg,d.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.Q7,l.sg,l.u,l.x0,l.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),e})();var M=i(597);const A=JSON.parse(localStorage.getItem("auth"));let O;A&&A.permission&&A.permission.map(s=>{"product"===s.content_type.app_label&&"taxslabs"===s.content_type.model&&"add_taxslabs"==s.codename&&(O=s.codename,console.log(O))});const N=[{path:"",component:Z,canActivate:[M.l],data:{allowedRoles:[O]}}];let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.Bz.forChild(N),v.Bz]}),e})();var w=i(906),I=i(5415),J=i(3189),U=i(4333),E=i(4040),R=i(4385),k=i(6709);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,G,w.ZU,l.u5,l.UX,I.T,J.h,U.JX,E.l,R.LD,k.p9]}),e})()},597:(P,C,i)=>{i.d(C,{l:()=>t});var d=i(4650),v=i(8996),l=i(7185);let t=(()=>{class x{constructor(r,a,u){this.router=r,this.Arout=a,this.toastr=u}canActivate(r,a){const u=JSON.parse(localStorage.getItem("auth"));if(u&&u.user){const p=r.data.allowedRoles;console.log(p,"allowedRoles");const g=u.permission.some(m=>p.includes(m.codename));if(console.log(g),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return x.\u0275fac=function(r){return new(r||x)(d.LFG(v.F0),d.LFG(v.gz),d.LFG(l._W))},x.\u0275prov=d.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},5415:(P,C,i)=>{i.d(C,{G:()=>l,T:()=>x});var d=i(4650),l=function(){function c(r,a,u){this.el=r,this.vcr=a,this.renderer=u,this.dtOptions={}}return c.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){r.displayTable(a)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(r){var a=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(u,p){Promise.resolve(a.dtOptions).then(function(g){0===Object.keys(g).length&&0===$("tbody tr",a.el.nativeElement).length?p("Both the table and dtOptions cannot be empty"):setTimeout(function(){var _={rowCallback:function(y,h,S){if(g.columns){var T=g.columns;a.applyNgPipeTransform(y,T),a.applyNgRefTemplate(y,T,h)}g.rowCallback&&g.rowCallback(y,h,S)}};_=Object.assign({},g,_),a.dt=$(a.el.nativeElement).DataTable(_),u(a.dt)})})})},c.prototype.applyNgPipeTransform=function(r,a){a.filter(function(p){return p.ngPipeInstance&&!p.ngTemplateRef}).forEach(function(p){var g=p.ngPipeInstance,m=p.ngPipeArgs||[],_=a.findIndex(function(T){return T.data===p.data}),y=r.childNodes.item(_),h=$(y).text(),S=g.transform.apply(g,function(c,r,a){if(a||2===arguments.length)for(var g,u=0,p=r.length;u<p;u++)(g||!(u in r))&&(g||(g=Array.prototype.slice.call(r,0,u)),g[u]=r[u]);return c.concat(g||Array.prototype.slice.call(r))}([h],m,!1));$(y).text(S)})},c.prototype.applyNgRefTemplate=function(r,a,u){var p=this;a.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var _=m.ngTemplateRef,y=_.ref,h=_.context,S=a.findIndex(function(A){return A.data===m.data}),T=r.childNodes.item(S);$(T).html("");var Z=Object.assign({},h,h?.userData,{adtData:u}),M=p.vcr.createEmbeddedView(y,Z);p.renderer.appendChild(T,M.rootNodes[0])})},c.\u0275fac=function(a){return new(a||c)(d.Y36(d.SBq),d.Y36(d.s_b),d.Y36(d.Qsj))},c.\u0275dir=d.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),t=i(6895),x=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=d.oAB({type:c}),c.\u0275inj=d.cJS({imports:[t.ez]}),c}()}}]);