"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7838],{17838:(M,y,c)=>{c.r(y),c.d(y,{TaxSlabUpdatedModule:()=>G});var b=c(36895),S=c(88996),r=c(24006),t=c(94650),C=c(80927),s=c(97185);function l(a,i){1&a&&(t.TgZ(0,"span",18),t._uU(1,"Enter Tax Slab Title"),t.qZA())}function o(a,i){if(1&a&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.tax_percentage+"%"," ")}}function p(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().index,v=t.oxw(2);return t.KtG(v.removeAmount(u))}),t._uU(1,"\u2212"),t.qZA()}}function g(a,i){if(1&a&&(t.ynx(0),t.TgZ(1,"tr",25)(2,"td"),t._UZ(3,"input",26),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",27),t.qZA(),t.TgZ(6,"td")(7,"select",28)(8,"option",29),t._uU(9,"Select tax"),t.qZA(),t.YNc(10,o,2,2,"option",30),t.qZA()(),t.TgZ(11,"td"),t.YNc(12,p,2,0,"button",31),t.qZA()(),t.BQk()),2&a){const e=i.index,n=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",n.taxList),t.xp6(2),t.Q6J("ngIf",e>0)}}function d(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",19)(1,"table",20)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"From Amount"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"To Amount"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Tax"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"\xa0"),t.qZA()()(),t.TgZ(12,"tbody"),t.ynx(13,21),t.YNc(14,g,13,3,"ng-container",22),t.BQk(),t.qZA()(),t.TgZ(15,"div",23)(16,"span",24),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.addAmount())}),t._uU(17,"+ Add more"),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(14),t.Q6J("ngForOf",e.getAmount().controls)}}function m(a,i){if(1&a&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.tax_percentage+"%")}}function h(a,i){if(1&a&&(t.ynx(0),t.TgZ(1,"tr",25)(2,"td",34)(3,"select",35)(4,"option",29),t._uU(5,"Select Tax"),t.qZA(),t.YNc(6,m,2,2,"option",30),t.qZA()()(),t.BQk()),2&a){const e=i.index,n=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",e),t.xp6(5),t.Q6J("ngForOf",n.taxList)}}function x(a,i){if(1&a&&(t.TgZ(0,"div",19)(1,"table",20)(2,"thead")(3,"tr",34)(4,"th"),t._uU(5,"Tax"),t.qZA()()(),t.TgZ(6,"tbody"),t.ynx(7,21),t.YNc(8,h,7,2,"ng-container",22),t.BQk(),t.qZA()()()),2&a){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.getAmount().controls)}}function f(a,i){1&a&&(t.TgZ(0,"button",36),t._uU(1,"Submit"),t.qZA())}function T(a,i){1&a&&(t.TgZ(0,"button",37),t._UZ(1,"span",38),t._uU(2,"Submit"),t.qZA())}const _=function(a){return{"is-invalid":a}};let Z=(()=>{class a{constructor(e,n,u,v,Y){this.fb=e,this.coreService=n,this.Arout=u,this.router=v,this.toastrService=Y,this.isAddmoreTax=!1,this.checks=!0,this.subcatbySubcatGroup=[],this.filteredSubcategory=[],this.searchTerm="",this.selectSubcat=[],this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.loaders=!1}get f(){return this.taxSlabForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.taxSlabForm=this.fb.group({slab_title:new r.NI("",[r.kI.required]),variable_tax:new r.NI("",[r.kI.required]),amount_tax_slabs:this.fb.array([])}),this.coreService.getTaxSlabById(this.id).subscribe(e=>{this.getRes=e,this.taxSlabForm.patchValue(this.getRes),this.isTax=this.getRes?.variable_tax,this.taxSlabForm.setControl("amount_tax_slabs",this.udateAmount(this.getRes.amount_tax_slabs)),this.isAddmoreTax=1==this.isTax}),this.addAmount(),this.getTax()}toggle(){this.isTax=!this.isTax,1==this.isTax?this.isAddmoreTax=!0:(this.isAddmoreTax=!1,this.taxSlabForm.get("amount_tax_slabs").clear(),this.addAmount())}udateAmount(e){let n=new r.Oe([]);return e.forEach(u=>{1==this.isTax?n.push(this.fb.group({from_amount:u.from_amount,to_amount:u.to_amount,tax:u.tax.id})):(this.taxSlabForm.get("amount_tax_slabs").clear(),n.push(this.fb.group({tax:u.tax.id})))}),n}amount_tax_slabs(){return this.fb.group(1==this.isTax?{from_amount:"",to_amount:"",tax:""}:{tax:""})}getAmount(){return this.taxSlabForm.get("amount_tax_slabs")}addAmount(){this.getAmount().push(this.amount_tax_slabs())}removeAmount(e){this.getAmount().removeAt(e)}get slab_title(){return this.taxSlabForm.get("slab_title")}get variable_tax(){return this.taxSlabForm.get("variable_tax")}get tax(){return this.taxSlabForm.get("tax")}getSubcateGroup(){this.coreService.getSubcategoryGroup().subscribe(e=>{this.subcatGroupList=e})}getTax(){this.coreService.gettaxd().subscribe(e=>{this.taxList=e})}getSubcategoryBySubcatGroup(e){this.coreService.getSubcategoryBySubcatGroup(e).subscribe(n=>{this.subcatbySubcatGroup=n.subcategories,this.filteredSubcategory=[...this.subcatbySubcatGroup],this.subcatbySubcatGroup.map(u=>{this.selectedSubcat=this.selectSubcat.length,this.getd=this.selectSubcat.includes(u.id),this.selectSubcat.includes(u.id)&&this.taxSlabForm.get("subcategory").push(new r.NI(u.id))})})}filterSubcategory(){this.filteredSubcategory=""===this.searchTerm.trim()?[...this.subcatbySubcatGroup]:this.subcatbySubcatGroup.filter(e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase()))}onCheckChange(e){const n=this.taxSlabForm.get("subcategory");if(e.target.checked)n.push(new r.NI(parseInt(e.target.value))),this.check=n,this.selectedSubcat++,this.selectedSubCategoryIds=n.value;else{let u=0;n.controls.forEach(v=>{if(v.value==e.target.value)return n.removeAt(u),void this.selectedSubcat--;u++})}}submit(){console.log(this.taxSlabForm.value);let e=this.taxSlabForm.value;this.taxSlabForm.valid?(this.loaders=!0,this.coreService.updateTaxSlab(e,this.id).subscribe(n=>{this.updateRes=n,"Tax Slabs Updated Successfully"==this.updateRes.msg?(this.loaders=!1,this.toastrService.success(this.updateRes.msg),this.router.navigate(["product/taxSlabList"])):this.loaders=!1})):this.taxSlabForm.markAllAsTouched()}onLabelClick(e){e.stopPropagation()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(C.p),t.Y36(S.gz),t.Y36(S.F0),t.Y36(s._W))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tax-slab-updated"]],decls:28,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","text","placeholder","Title","formControlName","slab_title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"d-flex",2,"margin-top","2rem"],["type","checkbox","formControlName","variable_tax",3,"id","ngModel","click"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["class","col-lg-8 col-sm-8 col-12",4,"ngIf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"col-lg-8","col-sm-8","col-12"],[1,"table","amt-table"],["formArrayName","amount_tax_slabs"],[4,"ngFor","ngForOf"],[1,"w-100","text-right"],[1,"addMore",3,"click"],[3,"formGroupName"],["type","text","formControlName","from_amount","placeholder","ex-100",1,"form-control","inp"],["type","text","formControlName","to_amount","placeholder","ex-1000",1,"form-control","inp"],["formControlName","tax",1,"inp"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","btn","style","background: #FF9F43;",3,"click",4,"ngIf"],[3,"value"],[1,"btn",2,"background","#FF9F43",3,"click"],[1,"text-center"],["formControlName","tax",1,"inp",2,"width","30%"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab Update"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Tax Slab"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Title*"),t.qZA(),t._UZ(15,"input",9),t.YNc(16,l,2,0,"span",10),t.qZA()(),t.TgZ(17,"div",7)(18,"div",8)(19,"div",11)(20,"input",12),t.NdJ("click",function(){return n.toggle()}),t.qZA(),t.TgZ(21,"label",13),t._uU(22,"Variable Tax"),t.qZA()()()(),t.YNc(23,d,18,1,"div",14),t.YNc(24,x,9,1,"div",14),t.TgZ(25,"div",15),t.YNc(26,f,2,0,"button",16),t.YNc(27,T,3,0,"button",17),t.qZA()()()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",n.taxSlabForm),t.xp6(9),t.Q6J("ngClass",t.VKq(10,_,n.f.slab_title.touched&&n.f.slab_title.invalid)),t.xp6(1),t.Q6J("ngIf",n.slab_title&&n.slab_title.invalid&&n.slab_title.touched),t.xp6(4),t.Q6J("id","checkboxMeasure-")("ngModel",n.isTax),t.xp6(1),t.Q6J("for","checkboxMeasure-"),t.xp6(2),t.Q6J("ngIf",n.isAddmoreTax),t.xp6(1),t.Q6J("ngIf",!n.isAddmoreTax),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[b.mk,b.sg,b.O5,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),a})();const A=JSON.parse(localStorage.getItem("auth"));let U;A&&A.map(i=>{"product"===i.content_type.app_label&&"taxslabs"===i.content_type.model&&"change_taxslabs"==i.codename&&(U=i.codename)});const F=[{path:"",component:Z}];let O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[S.Bz.forChild(F),S.Bz]}),a})();var N=c(30906),P=c(65415),I=c(43189),J=c(54333),w=c(54040),k=c(84385),Q=c(56709);let G=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[b.ez,O,N.ZU,r.u5,r.UX,P.T,I.h,J.JX,w.l,k.LD,Q.p9]}),a})()},65415:(M,y,c)=>{c.d(y,{G:()=>r,T:()=>C});var b=c(94650),r=function(){function s(l,o,p){this.el=l,this.vcr=o,this.renderer=p,this.dtOptions={}}return s.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe(function(o){l.displayTable(o)}):this.displayTable(null)},s.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},s.prototype.displayTable=function(l){var o=this;l&&(this.dtOptions=l),this.dtInstance=new Promise(function(p,g){Promise.resolve(o.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",o.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var h={rowCallback:function(x,f,T){if(d.columns){var _=d.columns;o.applyNgPipeTransform(x,_),o.applyNgRefTemplate(x,_,f)}d.rowCallback&&d.rowCallback(x,f,T)}};h=Object.assign({},d,h),o.dt=$(o.el.nativeElement).DataTable(h),p(o.dt)})})})},s.prototype.applyNgPipeTransform=function(l,o){o.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var d=g.ngPipeInstance,m=g.ngPipeArgs||[],h=o.findIndex(function(_){return _.data===g.data}),x=l.childNodes.item(h),f=$(x).text(),T=d.transform.apply(d,function(s,l,o){if(o||2===arguments.length)for(var d,p=0,g=l.length;p<g;p++)(d||!(p in l))&&(d||(d=Array.prototype.slice.call(l,0,p)),d[p]=l[p]);return s.concat(d||Array.prototype.slice.call(l))}([f],m,!1));$(x).text(T)})},s.prototype.applyNgRefTemplate=function(l,o,p){var g=this;o.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var h=m.ngTemplateRef,x=h.ref,f=h.context,T=o.findIndex(function(U){return U.data===m.data}),_=l.childNodes.item(T);$(_).html("");var Z=Object.assign({},f,f?.userData,{adtData:p}),A=g.vcr.createEmbeddedView(x,Z);g.renderer.appendChild(_,A.rootNodes[0])})},s.\u0275fac=function(o){return new(o||s)(b.Y36(b.SBq),b.Y36(b.s_b),b.Y36(b.Qsj))},s.\u0275dir=b.lG2({type:s,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),s}(),t=c(36895),C=function(){function s(){}return s.forRoot=function(){return{ngModule:s}},s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=b.oAB({type:s}),s.\u0275inj=b.cJS({imports:[t.ez]}),s}()}}]);