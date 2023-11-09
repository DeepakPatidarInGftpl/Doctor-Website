"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7838],{17838:(y,T,i)=>{i.r(T),i.d(T,{TaxSlabUpdatedModule:()=>w});var p=i(36895),f=i(88996),r=i(24006),t=i(94650),o=i(80927),l=i(97185);function u(a,s){1&a&&(t.TgZ(0,"span",19),t._uU(1,"Enter Tax Slab Title"),t.qZA())}function g(a,s){if(1&a&&(t.TgZ(0,"option",33),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.tax_percentage+"%"," ")}}function c(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().index,S=t.oxw(2);return t.KtG(S.removeAmount(d))}),t._uU(1,"\u2212"),t.qZA()}}function b(a,s){if(1&a&&(t.ynx(0),t.TgZ(1,"tr",26)(2,"td"),t._UZ(3,"input",27),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",28),t.qZA(),t.TgZ(6,"td")(7,"select",29)(8,"option",30),t._uU(9,"Select tax"),t.qZA(),t.YNc(10,g,2,2,"option",31),t.qZA()(),t.TgZ(11,"td"),t.YNc(12,c,2,0,"button",32),t.qZA()(),t.BQk()),2&a){const e=s.index,n=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",n.taxList),t.xp6(2),t.Q6J("ngIf",e>0)}}function h(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",20)(1,"table",21)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"From Amount"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"To Amount"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Tax"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"\xa0"),t.qZA()()(),t.TgZ(12,"tbody"),t.ynx(13,22),t.YNc(14,b,13,3,"ng-container",23),t.BQk(),t.qZA()(),t.TgZ(15,"div",24)(16,"span",25),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.addAmount())}),t._uU(17,"+ Add more"),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(14),t.Q6J("ngForOf",e.getAmount().controls)}}function x(a,s){if(1&a&&(t.TgZ(0,"option",33),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.tax_percentage+"%")}}function m(a,s){if(1&a&&(t.ynx(0),t.TgZ(1,"tr",26)(2,"td",35)(3,"select",36)(4,"option",30),t._uU(5,"Select Tax"),t.qZA(),t.YNc(6,x,2,2,"option",31),t.qZA()()(),t.BQk()),2&a){const e=s.index,n=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(5),t.Q6J("ngForOf",n.taxList)}}function v(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"table",21)(2,"thead")(3,"tr",35)(4,"th"),t._uU(5,"Tax"),t.qZA()()(),t.TgZ(6,"tbody"),t.ynx(7,22),t.YNc(8,m,7,2,"ng-container",23),t.BQk(),t.qZA()()()),2&a){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.getAmount().controls)}}function _(a,s){1&a&&(t.TgZ(0,"button",37),t._uU(1,"Submit"),t.qZA())}function A(a,s){1&a&&(t.TgZ(0,"button",38),t._UZ(1,"span",39),t._uU(2,"\xa0 Submit"),t.qZA())}const C=function(a){return{"is-invalid":a}};let M=(()=>{class a{constructor(e,n,d,S,R){this.fb=e,this.coreService=n,this.Arout=d,this.router=S,this.toastrService=R,this.isAddmoreTax=!1,this.checks=!0,this.subcatbySubcatGroup=[],this.filteredSubcategory=[],this.searchTerm="",this.selectSubcat=[],this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.loaders=!1}get f(){return this.taxSlabForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.taxSlabForm=this.fb.group({slab_title:new r.NI("",[r.kI.required]),variable_tax:new r.NI("",[r.kI.required]),amount_tax_slabs:this.fb.array([])}),this.coreService.getTaxSlabById(this.id).subscribe(e=>{this.getRes=e,this.taxSlabForm.patchValue(this.getRes),this.isTax=this.getRes?.variable_tax,this.taxSlabForm.setControl("amount_tax_slabs",this.udateAmount(this.getRes.amount_tax_slabs)),this.isAddmoreTax=1==this.isTax}),this.addAmount(),this.getTax()}toggle(){this.isTax=!this.isTax,1==this.isTax?this.isAddmoreTax=!0:(this.isAddmoreTax=!1,this.taxSlabForm.get("amount_tax_slabs").clear(),this.addAmount())}udateAmount(e){let n=new r.Oe([]);return e.forEach(d=>{1==this.isTax?n.push(this.fb.group({from_amount:d.from_amount,to_amount:d.to_amount,tax:d.tax.id})):(this.taxSlabForm.get("amount_tax_slabs").clear(),n.push(this.fb.group({tax:d.tax.id})))}),n}amount_tax_slabs(){return this.fb.group(1==this.isTax?{from_amount:"",to_amount:"",tax:""}:{tax:""})}getAmount(){return this.taxSlabForm.get("amount_tax_slabs")}addAmount(){this.getAmount().push(this.amount_tax_slabs())}removeAmount(e){this.getAmount().removeAt(e)}get slab_title(){return this.taxSlabForm.get("slab_title")}get variable_tax(){return this.taxSlabForm.get("variable_tax")}get tax(){return this.taxSlabForm.get("tax")}getSubcateGroup(){this.coreService.getSubcategoryGroup().subscribe(e=>{this.subcatGroupList=e})}getTax(){this.coreService.gettaxd().subscribe(e=>{this.taxList=e})}getSubcategoryBySubcatGroup(e){this.coreService.getSubcategoryBySubcatGroup(e).subscribe(n=>{this.subcatbySubcatGroup=n.subcategories,this.filteredSubcategory=[...this.subcatbySubcatGroup],this.subcatbySubcatGroup.map(d=>{this.selectedSubcat=this.selectSubcat.length,this.getd=this.selectSubcat.includes(d.id),this.selectSubcat.includes(d.id)&&this.taxSlabForm.get("subcategory").push(new r.NI(d.id))})})}filterSubcategory(){this.filteredSubcategory=""===this.searchTerm.trim()?[...this.subcatbySubcatGroup]:this.subcatbySubcatGroup.filter(e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase()))}onCheckChange(e){const n=this.taxSlabForm.get("subcategory");if(e.target.checked)n.push(new r.NI(parseInt(e.target.value))),this.check=n,this.selectedSubcat++,this.selectedSubCategoryIds=n.value;else{let d=0;n.controls.forEach(S=>{if(S.value==e.target.value)return n.removeAt(d),void this.selectedSubcat--;d++})}}submit(){console.log(this.taxSlabForm.value);let e=this.taxSlabForm.value;this.taxSlabForm.valid?(this.loaders=!0,this.coreService.updateTaxSlab(e,this.id).subscribe(n=>{this.updateRes=n,this.updateRes?(this.loaders=!1,this.toastrService.success(this.updateRes.msg),this.router.navigate(["product/taxSlabList"])):this.loaders=!1})):(this.taxSlabForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields"))}onLabelClick(e){e.stopPropagation()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(o.p),t.Y36(f.gz),t.Y36(f.F0),t.Y36(l._W))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tax-slab-updated"]],decls:30,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","text","placeholder","Title","formControlName","slab_title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"d-flex",2,"margin-top","2rem"],["type","checkbox","formControlName","variable_tax",3,"id","ngModel","click"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["class","col-lg-8 col-sm-8 col-12",4,"ngIf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/taxSlabList",1,"btn","btn-cancel"],[1,"text-danger"],[1,"col-lg-8","col-sm-8","col-12"],[1,"table","amt-table"],["formArrayName","amount_tax_slabs"],[4,"ngFor","ngForOf"],[1,"w-100","text-right"],[1,"addMore",3,"click"],[3,"formGroupName"],["type","text","formControlName","from_amount","placeholder","ex-100",1,"form-control","inp"],["type","text","formControlName","to_amount","placeholder","ex-1000",1,"form-control","inp"],["formControlName","tax",1,"inp"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","btn","style","background: #FF9F43;",3,"click",4,"ngIf"],[3,"value"],[1,"btn",2,"background","#FF9F43",3,"click"],[1,"text-center"],["formControlName","tax",1,"inp",2,"width","30%"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab Update"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Tax Slab"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Title*"),t.qZA(),t._UZ(15,"input",9),t.YNc(16,u,2,0,"span",10),t.qZA()(),t.TgZ(17,"div",7)(18,"div",8)(19,"div",11)(20,"input",12),t.NdJ("click",function(){return n.toggle()}),t.qZA(),t.TgZ(21,"label",13),t._uU(22,"Variable Tax"),t.qZA()()()(),t.YNc(23,h,18,1,"div",14),t.YNc(24,v,9,1,"div",14),t.TgZ(25,"div",15),t.YNc(26,_,2,0,"button",16),t.YNc(27,A,3,0,"button",17),t.TgZ(28,"a",18),t._uU(29,"Cancel"),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",n.taxSlabForm),t.xp6(9),t.Q6J("ngClass",t.VKq(10,C,n.f.slab_title.touched&&n.f.slab_title.invalid)),t.xp6(1),t.Q6J("ngIf",n.slab_title&&n.slab_title.invalid&&n.slab_title.touched),t.xp6(4),t.Q6J("id","checkboxMeasure-")("ngModel",n.isTax),t.xp6(1),t.Q6J("for","checkboxMeasure-"),t.xp6(2),t.Q6J("ngIf",n.isAddmoreTax),t.xp6(1),t.Q6J("ngIf",!n.isAddmoreTax),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[p.mk,p.sg,p.O5,f.yS,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),a})();const Z=JSON.parse(localStorage.getItem("auth"));let U;Z&&Z.map(s=>{"product"===s.content_type.app_label&&"taxslabs"===s.content_type.model&&"change_taxslabs"==s.codename&&(U=s.codename)});const O=[{path:"",component:M}];let F=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(O),f.Bz]}),a})();var P=i(30906),I=i(87078),N=i(43189),E=i(54333),J=i(54040),D=i(84385),k=i(56709);let w=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,F,P.ZU,r.u5,r.UX,I.T,N.h,E.JX,J.l,D.LD,k.p9]}),a})()},87078:(y,T,i)=>{i.d(T,{G:()=>p.G,T:()=>f.T});var p=i(10008),f=i(33861)},10008:(y,T,i)=>{i.d(T,{G:()=>r});var p=i(94650),r=function(){function t(o,l,u){this.el=o,this.vcr=l,this.renderer=u,this.dtOptions={}}return t.prototype.ngOnInit=function(){var o=this;this.dtTrigger?this.dtTrigger.subscribe(function(l){o.displayTable(l)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(o){var l=this;o&&(this.dtOptions=o),this.dtInstance=new Promise(function(u,g){Promise.resolve(l.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",l.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var h={rowCallback:function(x,m,v){if(c.columns){var _=c.columns;l.applyNgPipeTransform(x,_),l.applyNgRefTemplate(x,_,m)}c.rowCallback&&c.rowCallback(x,m,v)}};h=Object.assign({},c,h),l.dt=$(l.el.nativeElement).DataTable(h),u(l.dt)})})})},t.prototype.applyNgPipeTransform=function(o,l){l.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var c=g.ngPipeInstance,b=g.ngPipeArgs||[],h=l.findIndex(function(_){return _.data===g.data}),x=o.childNodes.item(h),m=$(x).text(),v=c.transform.apply(c,function(t,o,l){if(l||2===arguments.length)for(var c,u=0,g=o.length;u<g;u++)(c||!(u in o))&&(c||(c=Array.prototype.slice.call(o,0,u)),c[u]=o[u]);return t.concat(c||Array.prototype.slice.call(o))}([m],b,!1));$(x).text(v)})},t.prototype.applyNgRefTemplate=function(o,l,u){var g=this;l.filter(function(b){return b.ngTemplateRef&&!b.ngPipeInstance}).forEach(function(b){var h=b.ngTemplateRef,x=h.ref,m=h.context,v=l.findIndex(function(M){return M.data===b.data}),_=o.childNodes.item(v);$(_).html("");var A=Object.assign({},m,m?.userData,{adtData:u}),C=g.vcr.createEmbeddedView(x,A);g.renderer.appendChild(_,C.rootNodes[0])})},t.\u0275fac=function(l){return new(l||t)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},t.\u0275dir=p.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}()},33861:(y,T,i)=>{i.d(T,{T:()=>t});var p=i(36895),r=(i(10008),i(94650)),t=function(){function o(){}return o.forRoot=function(){return{ngModule:o}},o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[p.ez]}),o}()}}]);