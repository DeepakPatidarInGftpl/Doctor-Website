"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7838],{17838:(F,T,a)=>{a.r(T),a.d(T,{TaxSlabUpdatedModule:()=>k});var p=a(36895),y=a(88996),s=a(24006),t=a(94650),C=a(80927),u=a(97185);function r(o,c){if(1&o&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.title," ")}}function i(o,c){1&o&&(t.TgZ(0,"span",29),t._uU(1,"Select Category "),t.qZA())}const g=function(o){return{"is-invalid":o}};function b(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"a",30)(1,"input",31),t.NdJ("change",function(l){t.CHM(e);const x=t.oxw();return t.KtG(x.onCheckChange(l))}),t.qZA(),t.TgZ(2,"label",32),t.NdJ("click",function(l){t.CHM(e);const x=t.oxw();return t.KtG(x.onLabelClick(l))}),t._uU(3),t.qZA()()}if(2&o){const e=c.$implicit,n=c.index,l=t.oxw();t.xp6(1),t.Q6J("value",e.id)("checked",l.selectSubcat.includes(e.id))("ngClass",t.VKq(6,g,l.f.subcategory.touched&&l.f.subcategory.invalid))("id","checkboxSize-"+n),t.xp6(1),t.Q6J("for","checkboxSize-"+n),t.xp6(1),t.Oqu(e.title)}}function d(o,c){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.selectedSubcat+" Subcategory Selected")}}function m(o,c){1&o&&(t.TgZ(0,"span",29),t._uU(1,"Select subcategory "),t.qZA())}function f(o,c){if(1&o&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.tax_percentage+"%"," ")}}function h(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().index,x=t.oxw();return t.KtG(x.removeAmount(l))}),t._uU(1,"\u2212"),t.qZA()}}function _(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",33)(2,"td"),t._UZ(3,"input",34),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",35),t.qZA(),t.TgZ(6,"td")(7,"select",36)(8,"option",11),t._uU(9,"Select tax"),t.qZA(),t.YNc(10,f,2,2,"option",12),t.qZA()(),t.TgZ(11,"td"),t.YNc(12,h,2,0,"button",37),t.qZA()(),t.BQk()),2&o){const e=c.index,n=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",n.taxList),t.xp6(2),t.Q6J("ngIf",e>0)}}function v(o,c){1&o&&(t.TgZ(0,"button",39),t._uU(1,"Submit"),t.qZA())}function S(o,c){1&o&&(t.TgZ(0,"button",40),t._UZ(1,"span",41),t._uU(2," Submit"),t.qZA())}let Z=(()=>{class o{constructor(e,n,l,x,M){this.fb=e,this.coreService=n,this.Arout=l,this.router=x,this.toastrService=M,this.checks=!0,this.selectSubcat=[],this.selectedSubcat=0,this.loaders=!1}get f(){return this.taxSlabForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.taxSlabForm=this.fb.group({subcategory_group:new s.NI("",[s.kI.required]),subcategory:new s.Oe([],[s.kI.required]),amount_tax_slabs:this.fb.array([])}),this.coreService.getTaxSlabById(this.id).subscribe(e=>{console.log(e),this.getRes=e,this.selectSubcat=this.getRes.subcategory.map(n=>n.id),console.log(this.selectSubcat),this.getSubcategoryBySubcatGroup(this.getRes.subcategory_group.id),this.taxSlabForm.patchValue({subcategory_group:this.getRes.subcategory_group.id}),this.taxSlabForm.setControl("amount_tax_slabs",this.udateAmount(this.getRes.amount_tax_slabs))}),this.addAmount(),this.getSubcateGroup(),this.getTax()}udateAmount(e){let n=new s.Oe([]);return e.forEach(l=>{n.push(this.fb.group({from_amount:l.from_amount,to_amount:l.to_amount,tax:l.tax.id}))}),n}udateSubcat(e){e.forEach(n=>{console.log(n)})}amount_tax_slabs(){return this.fb.group({from_amount:"",to_amount:"",tax:""})}getAmount(){return this.taxSlabForm.get("amount_tax_slabs")}addAmount(){this.getAmount().push(this.amount_tax_slabs())}removeAmount(e){this.getAmount().removeAt(e)}get subcategory_group(){return this.taxSlabForm.get("subcategory_group")}get subcategory(){return this.taxSlabForm.get("subcategory")}get tax(){return this.taxSlabForm.get("tax")}getSubcateGroup(){this.coreService.getSubcategoryGroup().subscribe(e=>{console.log(e),this.subcatGroupList=e})}getTax(){this.coreService.gettaxd().subscribe(e=>{console.log(e),this.taxList=e,console.log(this.taxList)})}getSubcategoryBySubcatGroup(e){this.coreService.getSubcategoryBySubcatGroup(e).subscribe(n=>{console.log(n.subcategories),this.subcatbySubcatGroup=n.subcategories,this.subcatbySubcatGroup.map(l=>{console.log(l),this.getd=this.selectSubcat.includes(l.id),console.log(this.getd),console.log(this.selectSubcat.includes(l.id),"subcategory"),this.selectSubcat.includes(l.id)&&this.taxSlabForm.get("subcategory").push(new s.NI(l.id))})})}onCheckChange(e){const n=this.taxSlabForm.get("subcategory");if(e.target.checked)n.push(new s.NI(parseInt(e.target.value))),this.check=n,this.selectedSubcat++;else{let l=0;n.controls.forEach(x=>{if(x.value==e.target.value)return n.removeAt(l),void this.selectedSubcat--;l++})}}submit(){console.log(this.taxSlabForm.value),console.log(this.id);let e=this.taxSlabForm.value;this.taxSlabForm.valid?(this.loaders=!0,this.coreService.updateTaxSlab(e,this.id).subscribe(n=>{console.log(n),this.updateRes=n,"Tax Slabs Updated"==this.updateRes.msg&&(this.loaders=!1,this.toastrService.success(this.updateRes.msg),this.router.navigate(["product/taxSlabList"]))})):(this.taxSlabForm.markAllAsTouched(),console.log("forms invalid"))}onLabelClick(e){e.stopPropagation()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(C.p),t.Y36(y.gz),t.Y36(y.F0),t.Y36(u._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tax-slab-updated"]],decls:55,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["formControlName","subcategory_group","required","","id","subcategory_group",1,"w-100","h-100","border",3,"ngClass","change"],["category_idValue","","categoryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-8","col-sm-8","col-12"],[1,"table","amt-table"],["formArrayName","amount_tax_slabs"],[4,"ngFor","ngForOf"],[1,"w-100","text-right"],[1,"addMore",3,"click"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[3,"value"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategory",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],[3,"formGroupName"],["type","text","formControlName","from_amount","placeholder","ex-100",1,"form-control","inp"],["type","text","formControlName","to_amount","placeholder","ex-1000",1,"form-control","inp"],["formControlName","tax",1,"inp"],["class","btn","style","background: #FF9F43;",3,"click",4,"ngIf"],[1,"btn",2,"background","#FF9F43",3,"click"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab Update"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Tax Slab"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Subcategory Group*"),t.qZA(),t.TgZ(15,"select",9,10),t.NdJ("change",function(){t.CHM(l);const M=t.MAs(17);return t.KtG(n.getSubcategoryBySubcatGroup(M.value))}),t.TgZ(18,"option",11),t._uU(19,"select subcategory group"),t.qZA(),t.YNc(20,r,2,2,"option",12),t.qZA(),t.YNc(21,i,2,0,"span",13),t.qZA()(),t.TgZ(22,"div",7)(23,"div",8)(24,"label"),t._uU(25,"SubCategory*"),t.qZA(),t.TgZ(26,"div",14)(27,"button",15),t._uU(28,"Select Subcategory"),t.qZA(),t.TgZ(29,"ul",16)(30,"li"),t.YNc(31,b,4,8,"a",17),t.qZA()()(),t.YNc(32,d,2,1,"p",18),t.YNc(33,m,2,0,"span",13),t.qZA()(),t.TgZ(34,"div",19)(35,"table",20)(36,"thead")(37,"tr")(38,"th"),t._uU(39,"From Amount"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"To Amount"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Tax"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"\xa0"),t.qZA()()(),t.TgZ(46,"tbody"),t.ynx(47,21),t.YNc(48,_,13,3,"ng-container",22),t.BQk(),t.qZA()(),t.TgZ(49,"div",23)(50,"span",24),t.NdJ("click",function(){return n.addAmount()}),t._uU(51,"+ Add more"),t.qZA()()(),t.TgZ(52,"div",25),t.YNc(53,v,2,0,"button",26),t.YNc(54,S,3,0,"button",27),t.qZA()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",n.taxSlabForm),t.xp6(9),t.Q6J("ngClass",t.VKq(10,g,n.f.subcategory_group.touched&&n.f.subcategory_group.invalid)),t.xp6(5),t.Q6J("ngForOf",n.subcatGroupList),t.xp6(1),t.Q6J("ngIf",n.subcategory_group&&n.subcategory_group.invalid&&n.subcategory_group.touched),t.xp6(10),t.Q6J("ngForOf",n.subcatbySubcatGroup),t.xp6(1),t.Q6J("ngIf",n.selectedSubcat>0),t.xp6(1),t.Q6J("ngIf",n.subcategory&&n.subcategory.invalid&&n.subcategory.touched),t.xp6(15),t.Q6J("ngForOf",n.getAmount().controls),t.xp6(5),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[p.mk,p.sg,p.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.Q7,s.sg,s.u,s.x0,s.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),o})();var U=a(30597);const A=JSON.parse(localStorage.getItem("auth"));let O;A&&A.permission&&A.permission.map(c=>{"product"===c.content_type.app_label&&"taxslabs"===c.content_type.model&&"change_taxslabs"==c.codename&&(O=c.codename,console.log(O))});const P=[{path:"",component:Z,canActivate:[U.l],data:{allowedRoles:["change_taxslabs"]}}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[y.Bz.forChild(P),y.Bz]}),o})();var G=a(30906),I=a(65415),w=a(43189),D=a(54333),E=a(54040),J=a(84385),R=a(56709);let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,N,G.ZU,s.u5,s.UX,I.T,w.h,D.JX,E.l,J.LD,R.p9]}),o})()},30597:(F,T,a)=>{a.d(T,{l:()=>u});var p=a(94650),y=a(88996),s=a(97185),t=a(42917),C=a(80927);let u=(()=>{class r{constructor(g,b,d,m,f){this.router=g,this.Arout=b,this.toastr=d,this.profileService=m,this.coreService=f}canActivate(g,b){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),d){const m=g.data.allowedRoles;console.log(m,"allowedRoles");const f=d.some(h=>m.includes(h.codename));if(this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const _=h?.permission,v=this.profileService.getUserDetails();(!v||v.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())}),console.log(f),f)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(g){return new(g||r)(p.LFG(y.F0),p.LFG(y.gz),p.LFG(s._W),p.LFG(t.J),p.LFG(C.p))},r.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},65415:(F,T,a)=>{a.d(T,{G:()=>s,T:()=>C});var p=a(94650),s=function(){function u(r,i,g){this.el=r,this.vcr=i,this.renderer=g,this.dtOptions={}}return u.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(i){r.displayTable(i)}):this.displayTable(null)},u.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},u.prototype.displayTable=function(r){var i=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(g,b){Promise.resolve(i.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",i.el.nativeElement).length?b("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(h,_,v){if(d.columns){var S=d.columns;i.applyNgPipeTransform(h,S),i.applyNgRefTemplate(h,S,_)}d.rowCallback&&d.rowCallback(h,_,v)}};f=Object.assign({},d,f),i.dt=$(i.el.nativeElement).DataTable(f),g(i.dt)})})})},u.prototype.applyNgPipeTransform=function(r,i){i.filter(function(b){return b.ngPipeInstance&&!b.ngTemplateRef}).forEach(function(b){var d=b.ngPipeInstance,m=b.ngPipeArgs||[],f=i.findIndex(function(S){return S.data===b.data}),h=r.childNodes.item(f),_=$(h).text(),v=d.transform.apply(d,function(u,r,i){if(i||2===arguments.length)for(var d,g=0,b=r.length;g<b;g++)(d||!(g in r))&&(d||(d=Array.prototype.slice.call(r,0,g)),d[g]=r[g]);return u.concat(d||Array.prototype.slice.call(r))}([_],m,!1));$(h).text(v)})},u.prototype.applyNgRefTemplate=function(r,i,g){var b=this;i.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var f=m.ngTemplateRef,h=f.ref,_=f.context,v=i.findIndex(function(A){return A.data===m.data}),S=r.childNodes.item(v);$(S).html("");var Z=Object.assign({},_,_?.userData,{adtData:g}),U=b.vcr.createEmbeddedView(h,Z);b.renderer.appendChild(S,U.rootNodes[0])})},u.\u0275fac=function(i){return new(i||u)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},u.\u0275dir=p.lG2({type:u,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),u}(),t=a(36895),C=function(){function u(){}return u.forRoot=function(){return{ngModule:u}},u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=p.oAB({type:u}),u.\u0275inj=p.cJS({imports:[t.ez]}),u}()}}]);