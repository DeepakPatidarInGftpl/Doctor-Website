"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7838],{7838:(M,v,u)=>{u.r(v),u.d(v,{TaxSlabUpdatedModule:()=>G});var b=u(6895),S=u(8996),r=u(4006),t=u(4650),C=u(927),i=u(7185);function s(n,d){if(1&n&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.title," ")}}function a(n,d){1&n&&(t.TgZ(0,"span",28),t._uU(1,"Select Category "),t.qZA())}const g=function(n){return{"is-invalid":n}};function p(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",29)(1,"input",30),t.NdJ("change",function(c){t.CHM(e);const h=t.oxw();return t.KtG(h.onCheckChange(c))}),t.qZA(),t._uU(2),t.qZA()}if(2&n){const e=d.$implicit,o=t.oxw();t.xp6(1),t.Q6J("value",e.id)("checked",o.selectSubcat.includes(e.id))("ngClass",t.VKq(4,g,o.f.subcategory.touched&&o.f.subcategory.invalid)),t.xp6(1),t.hij(" ",e.title," ")}}function l(n,d){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.selectedSubcat+" Subcategory Selected")}}function m(n,d){1&n&&(t.TgZ(0,"span",28),t._uU(1,"Select subcategory "),t.qZA())}function x(n,d){if(1&n&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.tax_percentage+"%"," ")}}function _(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().index,h=t.oxw();return t.KtG(h.removeAmount(c))}),t._uU(1,"\u2212"),t.qZA()}}function f(n,d){if(1&n&&(t.ynx(0),t.TgZ(1,"tr",31)(2,"td"),t._UZ(3,"input",32),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",33),t.qZA(),t.TgZ(6,"td")(7,"select",34)(8,"option",11),t._uU(9,"Select tax"),t.qZA(),t.YNc(10,x,2,2,"option",12),t.qZA()(),t.TgZ(11,"td"),t.YNc(12,_,2,0,"button",35),t.qZA()(),t.BQk()),2&n){const e=d.index,o=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",o.taxList),t.xp6(2),t.Q6J("ngIf",e>0)}}const y=[{path:"",component:(()=>{class n{constructor(e,o,c,h,F){this.fb=e,this.coreService=o,this.Arout=c,this.router=h,this.toastrService=F,this.checks=!0,this.selectSubcat=[],this.selectedSubcat=0}get f(){return this.taxSlabForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.taxSlabForm=this.fb.group({subcategory_group:new r.NI("",[r.kI.required]),subcategory:new r.Oe([],[r.kI.required]),amount_tax_slabs:this.fb.array([])}),this.coreService.getTaxSlabById(this.id).subscribe(e=>{console.log(e),this.getRes=e,this.selectSubcat=this.getRes.subcategory.map(o=>o.id),console.log(this.selectSubcat),this.getSubcategoryBySubcatGroup(this.getRes.subcategory_group.id),this.taxSlabForm.patchValue({subcategory_group:this.getRes.subcategory_group.id}),this.taxSlabForm.setControl("amount_tax_slabs",this.udateAmount(this.getRes.amount_tax_slabs))}),this.addAmount(),this.getSubcateGroup(),this.getTax()}udateAmount(e){let o=new r.Oe([]);return e.forEach(c=>{o.push(this.fb.group({from_amount:c.from_amount,to_amount:c.to_amount,tax:c.tax}))}),o}udateSubcat(e){e.forEach(o=>{console.log(o)})}amount_tax_slabs(){return this.fb.group({from_amount:"",to_amount:"",tax:""})}getAmount(){return this.taxSlabForm.get("amount_tax_slabs")}addAmount(){this.getAmount().push(this.amount_tax_slabs())}removeAmount(e){this.getAmount().removeAt(e)}get subcategory_group(){return this.taxSlabForm.get("subcategory_group")}get subcategory(){return this.taxSlabForm.get("subcategory")}get tax(){return this.taxSlabForm.get("tax")}getSubcateGroup(){this.coreService.getSubcategoryGroup().subscribe(e=>{console.log(e),this.subcatGroupList=e})}getTax(){this.coreService.gettaxd().subscribe(e=>{console.log(e),this.taxList=e,console.log(this.taxList)})}getSubcategoryBySubcatGroup(e){this.coreService.getSubcategoryBySubcatGroup(e).subscribe(o=>{console.log(o.subcategories),this.subcatbySubcatGroup=o.subcategories,this.subcatbySubcatGroup.map(c=>{console.log(c),this.getd=this.selectSubcat.includes(c.id),console.log(this.getd),console.log(this.selectSubcat.includes(c.id),"subcategory"),this.selectSubcat.includes(c.id)&&this.taxSlabForm.get("subcategory").push(new r.NI(c.id))})})}onCheckChange(e){const o=this.taxSlabForm.get("subcategory");if(e.target.checked)o.push(new r.NI(parseInt(e.target.value))),this.check=o,this.selectedSubcat++;else{let c=0;o.controls.forEach(h=>{if(h.value==e.target.value)return o.removeAt(c),void this.selectedSubcat--;c++})}}submit(){console.log(this.taxSlabForm.value),this.taxSlabForm.valid?this.coreService.updateTaxSlab(this.id,this.taxSlabForm.value).subscribe(o=>{console.log(o),this.updateRes=o,"Tax Slabs Updated"==this.updateRes.msg&&(this.toastrService.success(this.updateRes.msg),this.router.navigate(["product/taxSlabList"]))}):(this.taxSlabForm.markAllAsTouched(),console.log("forms invalid"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(C.p),t.Y36(S.gz),t.Y36(S.F0),t.Y36(i._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tax-slab-updated"]],decls:55,vars:10,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["formControlName","subcategory_group","required","","id","subcategory_group",1,"w-100","h-100","border",3,"ngClass","change"],["category_idValue","","categoryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-8","col-sm-8","col-12"],[1,"table","amt-table"],["formArrayName","amount_tax_slabs"],[4,"ngFor","ngForOf"],[1,"w-100","text-right"],[1,"addMore",3,"click"],[1,"col-lg-8","text-end","mt-5"],[1,"btn","btn-submit","me-2"],[3,"value"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategory",2,"margin-right","5px",3,"value","checked","ngClass","change"],[3,"formGroupName"],["type","text","formControlName","from_amount","placeholder","ex-100",1,"form-control","inp"],["type","text","formControlName","to_amount","placeholder","ex-1000",1,"form-control","inp"],["formControlName","tax",1,"inp"],["class","btn","style","background: #FF9F43;",3,"click",4,"ngIf"],[1,"btn",2,"background","#FF9F43",3,"click"]],template:function(e,o){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab Update"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Tax Slab"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Subcategory Group*"),t.qZA(),t.TgZ(15,"select",9,10),t.NdJ("change",function(){t.CHM(c);const F=t.MAs(17);return t.KtG(o.getSubcategoryBySubcatGroup(F.value))}),t.TgZ(18,"option",11),t._uU(19,"select subcategory group"),t.qZA(),t.YNc(20,s,2,2,"option",12),t.qZA(),t.YNc(21,a,2,0,"span",13),t.qZA()(),t.TgZ(22,"div",7)(23,"div",8)(24,"label"),t._uU(25,"SubCategory*"),t.qZA(),t.TgZ(26,"div",14)(27,"button",15),t._uU(28,"Select Subcategory"),t.qZA(),t.TgZ(29,"ul",16)(30,"li"),t.YNc(31,p,3,6,"a",17),t.qZA()()(),t.YNc(32,l,2,1,"p",18),t.YNc(33,m,2,0,"span",13),t.qZA()(),t.TgZ(34,"div",19)(35,"table",20)(36,"thead")(37,"tr")(38,"th"),t._uU(39,"From Amount"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"To Amount"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Tax"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"\xa0"),t.qZA()()(),t.TgZ(46,"tbody"),t.ynx(47,21),t.YNc(48,f,13,3,"ng-container",22),t.BQk(),t.qZA()(),t.TgZ(49,"div",23)(50,"span",24),t.NdJ("click",function(){return o.addAmount()}),t._uU(51,"+ Add more"),t.qZA()()(),t.TgZ(52,"div",25)(53,"button",26),t._uU(54,"Submit"),t.qZA()()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",o.taxSlabForm),t.xp6(9),t.Q6J("ngClass",t.VKq(8,g,o.f.subcategory_group.touched&&o.f.subcategory_group.invalid)),t.xp6(5),t.Q6J("ngForOf",o.subcatGroupList),t.xp6(1),t.Q6J("ngIf",o.subcategory_group&&o.subcategory_group.invalid&&o.subcategory_group.touched),t.xp6(10),t.Q6J("ngForOf",o.subcatbySubcatGroup),t.xp6(1),t.Q6J("ngIf",o.selectedSubcat>0),t.xp6(1),t.Q6J("ngIf",o.subcategory&&o.subcategory.invalid&&o.subcategory.touched),t.xp6(15),t.Q6J("ngForOf",o.getAmount().controls))},dependencies:[b.mk,b.sg,b.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.Q7,r.sg,r.u,r.x0,r.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[S.Bz.forChild(y),S.Bz]}),n})();var Z=u(906),U=u(5415),O=u(3189),P=u(4333),N=u(4040),w=u(4385),J=u(6709);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.ez,A,Z.ZU,r.u5,r.UX,U.T,O.h,P.JX,N.l,w.LD,J.p9]}),n})()},5415:(M,v,u)=>{u.d(v,{G:()=>r,T:()=>C});var b=u(4650),r=function(){function i(s,a,g){this.el=s,this.vcr=a,this.renderer=g,this.dtOptions={}}return i.prototype.ngOnInit=function(){var s=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){s.displayTable(a)}):this.displayTable(null)},i.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},i.prototype.displayTable=function(s){var a=this;s&&(this.dtOptions=s),this.dtInstance=new Promise(function(g,p){Promise.resolve(a.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",a.el.nativeElement).length?p("Both the table and dtOptions cannot be empty"):setTimeout(function(){var x={rowCallback:function(_,f,T){if(l.columns){var y=l.columns;a.applyNgPipeTransform(_,y),a.applyNgRefTemplate(_,y,f)}l.rowCallback&&l.rowCallback(_,f,T)}};x=Object.assign({},l,x),a.dt=$(a.el.nativeElement).DataTable(x),g(a.dt)})})})},i.prototype.applyNgPipeTransform=function(s,a){a.filter(function(p){return p.ngPipeInstance&&!p.ngTemplateRef}).forEach(function(p){var l=p.ngPipeInstance,m=p.ngPipeArgs||[],x=a.findIndex(function(y){return y.data===p.data}),_=s.childNodes.item(x),f=$(_).text(),T=l.transform.apply(l,function(i,s,a){if(a||2===arguments.length)for(var l,g=0,p=s.length;g<p;g++)(l||!(g in s))&&(l||(l=Array.prototype.slice.call(s,0,g)),l[g]=s[g]);return i.concat(l||Array.prototype.slice.call(s))}([f],m,!1));$(_).text(T)})},i.prototype.applyNgRefTemplate=function(s,a,g){var p=this;a.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var x=m.ngTemplateRef,_=x.ref,f=x.context,T=a.findIndex(function(U){return U.data===m.data}),y=s.childNodes.item(T);$(y).html("");var A=Object.assign({},f,f?.userData,{adtData:g}),Z=p.vcr.createEmbeddedView(_,A);p.renderer.appendChild(y,Z.rootNodes[0])})},i.\u0275fac=function(a){return new(a||i)(b.Y36(b.SBq),b.Y36(b.s_b),b.Y36(b.Qsj))},i.\u0275dir=b.lG2({type:i,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),i}(),t=u(6895),C=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=b.oAB({type:i}),i.\u0275inj=b.cJS({imports:[t.ez]}),i}()}}]);