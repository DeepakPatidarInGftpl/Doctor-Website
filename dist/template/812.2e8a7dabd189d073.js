"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[812],{48897:(q,S,p)=>{p.r(S),p.d(S,{AddbrandModule:()=>P});var h=p(36895),A=p(88996),s=p(24006),e=p(94650),T=p(80927),u=p(97185),l=p(42917);function d(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Enter Brand "),e.qZA())}function g(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Enter code "),e.qZA())}function b(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Enter discount (ex-1-100) "),e.qZA())}const c=function(o){return{"is-invalid":o}};function f(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"a",32)(1,"input",33,34),e.NdJ("change",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onCheckCategory(r))}),e.qZA(),e.TgZ(3,"label",35),e.NdJ("click",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onLabelClick(r))}),e._uU(4),e.qZA()()}if(2&o){const n=i.$implicit,t=i.index,r=e.oxw();e.xp6(1),e.Q6J("value",n.id)("checked",r.selectedCategoryIds.includes(n.id))("ngClass",e.VKq(6,c,r.f.category.touched&&r.f.category.invalid))("id","checkboxCat-"+t),e.xp6(2),e.Q6J("for","checkboxCat-"+t),e.xp6(1),e.Oqu(n.title)}}function y(o,i){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.selectedCat+" Category Selected")}}function _(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Select Category "),e.qZA())}function m(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"a",32)(1,"input",36,34),e.NdJ("change",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onCheckSize(r))}),e.qZA(),e.TgZ(3,"label",35),e.NdJ("click",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onLabelClick(r))}),e._uU(4),e.qZA()()}if(2&o){const n=i.$implicit,t=i.index,r=e.oxw();e.xp6(1),e.Q6J("value",n.id)("checked",r.selectedSubCategoryGroupIds.includes(n.id))("ngClass",e.VKq(6,c,r.f.subcategory_group.touched&&r.f.subcategory_group.invalid))("id","checkbox-"+t),e.xp6(2),e.Q6J("for","checkbox-"+t),e.xp6(1),e.Oqu(n.title)}}function v(o,i){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.selectedSubCatGrp+" Subcategory group Selected")}}function C(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Select subcategory group "),e.qZA())}function Z(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"a",32)(1,"input",37),e.NdJ("change",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onCheckChange(r))}),e.qZA(),e.TgZ(2,"label",35),e.NdJ("click",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.onLabelClick(r))}),e._uU(3),e.qZA()()}if(2&o){const n=i.$implicit,t=i.index,r=e.oxw();e.xp6(1),e.Q6J("value",n.id)("checked",r.selectedSubCategoryIds.includes(null==n?null:n.id))("ngClass",e.VKq(6,c,r.f.subcategory.touched&&r.f.subcategory.invalid))("id","checkboxSub-"+t),e.xp6(1),e.Q6J("for","checkboxSub-"+t),e.xp6(1),e.Oqu(n.title)}}function x(o,i){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.selectedSubcat+" Subcategory Selected")}}function M(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Select subcategory "),e.qZA())}function I(o,i){1&o&&(e.TgZ(0,"span",31),e._uU(1,"Select image"),e.qZA())}function J(o,i){1&o&&(e.O4$(),e.TgZ(0,"svg",38),e._UZ(1,"path",39)(2,"path",40),e.qZA())}function N(o,i){if(1&o&&e._UZ(0,"img",41),2&o){const n=e.oxw();e.Q6J("src",n.url,e.LSH)}}function G(o,i){1&o&&(e.TgZ(0,"button",42),e._uU(1,"Submit"),e.qZA())}function O(o,i){1&o&&(e.TgZ(0,"button",43),e._UZ(1,"span",44),e._uU(2,"Submit"),e.qZA())}const w=function(){return{standalone:!0}},L=[{path:"",component:(()=>{class o{constructor(n,t,r,a,D){this.coreService=n,this.fb=t,this.toastr=r,this.router=a,this.cs=D,this.imgUrl="https://pv.greatfuturetechno.com",this.subcatGroup=[],this.selectSubcat=[],this.categoryList=[],this.filteredCategoryList=[],this.searchCategory="",this.selectedCat=0,this.selectedCategoryIds=[],this.subcatGroupList=[],this.filteredSubCategoryGroupList=[],this.searchSubCategoryGroup="",this.selectedSubCategoryGroupIds=[],this.selectedSubCatGrp=0,this.subcategories=[],this.filteredSubCategoryList=[],this.searchSubCategory="",this.id=[],this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.loaders=!1}get f(){return this.brandForm.controls}ngOnInit(){this.brandForm=new s.cw({title:new s.NI("",[s.kI.required]),code:new s.NI(""),image:new s.NI("",[s.kI.required]),discount:new s.NI("",[s.kI.pattern(/^(100|[0-9]{1,2})$/)]),category:new s.Oe([]),subcategory_group:new s.Oe([]),subcategory:new s.Oe([])}),this.getSubcatGroup(),this.getCategory()}onSelect(n){const t=n.target.files[0];if(t){const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{this.url=r.result}}this.brandForm.patchValue({image:t}),this.brandForm.get("image")?.updateValueAndValidity()}getSubcatGroup(){this.coreService.getSubcategoryGroup().subscribe(n=>{})}getCategory(){this.coreService.getCategory().subscribe(n=>{this.categoryList=n,this.filteredCategoryList=[...this.categoryList]})}filterCategory(){this.filteredCategoryList=""===this.searchCategory.trim()?[...this.categoryList]:this.categoryList.filter(n=>n.title.toLowerCase().includes(this.searchCategory.toLowerCase()))}onCheckCategory(n){const t=this.brandForm.get("category");if(n.target.checked)t.push(new s.NI(parseInt(n.target.value))),this.check=t,this.selectedCat++,this.getSubcatGroupByCategory(t.value),this.selectedCategoryIds=t.value;else{let r=0;t.controls.forEach(a=>{if(a.value==n.target.value)return t.removeAt(r),this.selectedCat--,void this.getSubcatGroupByCategory(t.value);r++})}}getSubcatGroupByCategory(n){const t=JSON.stringify(n);this.coreService.getSubcategoryGroupByCategoryid(t).subscribe(r=>{this.subcatGroupList=r,this.filteredSubCategoryGroupList=[...this.subcatGroupList]})}filterSubCategoryGroup(){this.filteredSubCategoryGroupList=""===this.searchSubCategoryGroup.trim()?[...this.subcatGroupList]:this.subcatGroupList.filter(n=>n.title.toLowerCase().includes(this.searchSubCategoryGroup.toLowerCase()))}onCheckSize(n){const t=this.brandForm.get("subcategory_group");if(n.target.checked)t.push(new s.NI(parseInt(n.target.value))),this.check=t,this.selectedSubCatGrp++,this.getSubcategoryBySubcatGroup(t.value),this.selectedSubCategoryGroupIds=t.value;else{let r=0;t.controls.forEach(a=>{if(a.value==n.target.value)return t.removeAt(r),this.selectedSubCatGrp--,void this.getSubcategoryBySubcatGroup(t.value);r++})}}getSubcategoryBySubcatGroup(n){const t=JSON.stringify(n);this.coreService.getSubcategoryBySubcatGroupid(t).subscribe(r=>{this.subcatbySubcatGroup=this.filterDuplicates(r),this.filteredSubCategoryList=[...this.subcatbySubcatGroup]})}filterDuplicates(n){const t={},r=[];for(const a of n)t[a.id]||(t[a.id]=!0,r.push(a));return r}filterSubCategory(){this.filteredSubCategoryList=""===this.searchSubCategory.trim()?[...this.subcatbySubcatGroup]:this.subcatbySubcatGroup.filter(n=>n.title.toLowerCase().includes(this.searchSubCategory.toLowerCase()))}onCheckChange(n){const t=this.brandForm.get("subcategory");if(n.target.checked)t.push(new s.NI(parseInt(n.target.value))),this.check=t,this.selectedSubcat++,this.selectedSubCategoryIds=t.value;else{let r=0;t.controls.forEach(a=>{if(a.value==n.target.value)return t.removeAt(r),void this.selectedSubcat--;r++})}}submit(){var n=new FormData;n.append("title",this.brandForm.get("title")?.value),n.append("image",this.brandForm.get("image")?.value),n.append("code",this.brandForm.get("code")?.value),n.append("discount",this.brandForm.get("discount")?.value),n.append("category",JSON.stringify(this.brandForm.get("category")?.value)),n.append("subcategory_group",JSON.stringify(this.brandForm.get("subcategory_group")?.value)),n.append("subcategory",JSON.stringify(this.brandForm.get("subcategory")?.value)),this.brandForm.valid?(this.loaders=!0,this.coreService.addbrand(n).subscribe(t=>{this.addRes=t,this.addRes.success&&(this.toastr.success(this.addRes.msg),this.router.navigate(["//product/brandlist"]),this.url="",this.loaders=!1,this.brandForm.reset(),this.selectedSubcat=0,this.selectedSubCatGrp=0)},t=>{})):this.brandForm.markAllAsTouched()}get title(){return this.brandForm.get("title")}get image(){return this.brandForm.get("image")}get code(){return this.brandForm.get("code")}get subcategory_group(){return this.brandForm.get("subcategory_group")}get subcategory(){return this.brandForm.get("subcategory")}get discount(){return this.brandForm.get("discount")}get category(){return this.brandForm.get("category")}onLabelClick(n){n.stopPropagation()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(T.p),e.Y36(s.qu),e.Y36(u._W),e.Y36(A.F0),e.Y36(l.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-addbrand"]],decls:92,vars:36,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title","placeholder","Enter Brand",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","code","id","code","placeholder","Enter Code",3,"ngClass"],["type","text","formControlName","discount","placeholder","Enter Discount","id","discount",3,"ngClass"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","text","placeholder","search subcategory",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image","required","",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/brandlist",1,"btn","btn-cancel"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox","formArrayName","category",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["type","checkbox","formArrayName","subcategory_group",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],["type","checkbox","formArrayName","subcategory",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Brand ADD"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Brand"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"Brand*"),e.qZA(),e._UZ(15,"input",8),e.YNc(16,d,2,0,"span",9),e.qZA()(),e.TgZ(17,"div",6)(18,"div",7)(19,"label"),e._uU(20,"Code"),e.qZA(),e._UZ(21,"input",10),e.YNc(22,g,2,0,"span",9),e.qZA()(),e.TgZ(23,"div",6)(24,"div",7)(25,"label"),e._uU(26,"Discount"),e.qZA(),e._UZ(27,"input",11),e.YNc(28,b,2,0,"span",9),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Select Category"),e.qZA(),e.TgZ(33,"div",12)(34,"button",13),e._uU(35,"Select Category"),e.qZA(),e.TgZ(36,"ul",14)(37,"li")(38,"input",15),e.NdJ("ngModelChange",function(a){return t.searchCategory=a})("ngModelChange",function(){return t.filterCategory()}),e.qZA()(),e.TgZ(39,"li"),e.YNc(40,f,5,8,"a",16),e.qZA()()(),e.YNc(41,y,2,1,"p",17),e.YNc(42,_,2,0,"span",9),e.qZA()(),e.TgZ(43,"div",6)(44,"div",7)(45,"label"),e._uU(46,"Select Subcategory group"),e.qZA(),e.TgZ(47,"div",12)(48,"button",13),e._uU(49,"Select Subcategory group"),e.qZA(),e.TgZ(50,"ul",14)(51,"li")(52,"input",18),e.NdJ("ngModelChange",function(a){return t.searchSubCategoryGroup=a})("ngModelChange",function(){return t.filterSubCategoryGroup()}),e.qZA()(),e.TgZ(53,"li"),e.YNc(54,m,5,8,"a",16),e.qZA()()(),e.YNc(55,v,2,1,"p",17),e.YNc(56,C,2,0,"span",9),e.qZA()(),e.TgZ(57,"div",6)(58,"div",7)(59,"label"),e._uU(60,"Select SubCategory"),e.qZA(),e.TgZ(61,"div",12)(62,"button",13),e._uU(63,"Select Subcategory"),e.qZA(),e.TgZ(64,"ul",14)(65,"li")(66,"input",19),e.NdJ("ngModelChange",function(a){return t.searchSubCategory=a})("ngModelChange",function(){return t.filterSubCategory()}),e.qZA()(),e.TgZ(67,"li"),e.YNc(68,Z,4,8,"a",16),e.qZA()()(),e.YNc(69,x,2,1,"p",17),e.YNc(70,M,2,0,"span",9),e.qZA()(),e.TgZ(71,"div",6)(72,"div",7)(73,"label"),e._uU(74,"Brand Image*"),e.qZA(),e.TgZ(75,"div",4)(76,"div",20)(77,"div",21)(78,"input",22),e.NdJ("change",function(a){return t.onSelect(a)}),e.qZA(),e.TgZ(79,"div",23),e._UZ(80,"img",24),e.TgZ(81,"h4"),e._uU(82,"Drag and drop a file to upload"),e.qZA()(),e.YNc(83,I,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",20),e.YNc(85,J,3,0,"svg",25),e.YNc(86,N,1,1,"img",26),e.qZA()()()(),e.TgZ(87,"div",27),e.YNc(88,G,2,0,"button",28),e.YNc(89,O,3,0,"button",29),e.TgZ(90,"a",30),e._uU(91,"Cancel"),e.qZA()()()()()()()),2&n&&(e.xp6(9),e.Q6J("formGroup",t.brandForm),e.xp6(6),e.Q6J("ngClass",e.VKq(27,c,t.f.title.touched&&t.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,c,t.f.code.touched&&t.f.code.invalid)),e.xp6(1),e.Q6J("ngIf",t.code&&t.code.invalid&&t.code.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,c,t.f.discount.touched&&t.f.discount.invalid)),e.xp6(1),e.Q6J("ngIf",t.discount&&t.discount.invalid&&t.discount.touched),e.xp6(10),e.Q6J("ngModel",t.searchCategory)("ngModelOptions",e.DdM(33,w)),e.xp6(2),e.Q6J("ngForOf",t.filteredCategoryList),e.xp6(1),e.Q6J("ngIf",t.selectedCat>0),e.xp6(1),e.Q6J("ngIf",t.category&&t.category.invalid&&t.category.touched),e.xp6(10),e.Q6J("ngModel",t.searchSubCategoryGroup)("ngModelOptions",e.DdM(34,w)),e.xp6(2),e.Q6J("ngForOf",t.filteredSubCategoryGroupList),e.xp6(1),e.Q6J("ngIf",t.selectedSubCatGrp>0),e.xp6(1),e.Q6J("ngIf",t.subcategory_group&&t.subcategory_group.invalid&&t.subcategory_group.touched),e.xp6(10),e.Q6J("ngModel",t.searchSubCategory)("ngModelOptions",e.DdM(35,w)),e.xp6(2),e.Q6J("ngForOf",t.filteredSubCategoryList),e.xp6(1),e.Q6J("ngIf",t.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",t.subcategory&&t.subcategory.invalid&&t.subcategory.touched),e.xp6(13),e.Q6J("ngIf",t.image&&t.image.invalid&&t.image.touched),e.xp6(2),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[h.mk,h.sg,h.O5,A.yS,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.On,s.sg,s.u,s.CE],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']}),o})(),canActivate:[p(30597).l],data:{allowedRoles:["add_brands"]}}];let U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[A.Bz.forChild(L),A.Bz]}),o})();var Q=p(8468);let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,U,Q.I]}),o})()},65415:(q,S,p)=>{p.d(S,{G:()=>s,T:()=>T});var h=p(94650),s=function(){function u(l,d,g){this.el=l,this.vcr=d,this.renderer=g,this.dtOptions={}}return u.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe(function(d){l.displayTable(d)}):this.displayTable(null)},u.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},u.prototype.displayTable=function(l){var d=this;l&&(this.dtOptions=l),this.dtInstance=new Promise(function(g,b){Promise.resolve(d.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",d.el.nativeElement).length?b("Both the table and dtOptions cannot be empty"):setTimeout(function(){var y={rowCallback:function(_,m,v){if(c.columns){var C=c.columns;d.applyNgPipeTransform(_,C),d.applyNgRefTemplate(_,C,m)}c.rowCallback&&c.rowCallback(_,m,v)}};y=Object.assign({},c,y),d.dt=$(d.el.nativeElement).DataTable(y),g(d.dt)})})})},u.prototype.applyNgPipeTransform=function(l,d){d.filter(function(b){return b.ngPipeInstance&&!b.ngTemplateRef}).forEach(function(b){var c=b.ngPipeInstance,f=b.ngPipeArgs||[],y=d.findIndex(function(C){return C.data===b.data}),_=l.childNodes.item(y),m=$(_).text(),v=c.transform.apply(c,function(u,l,d){if(d||2===arguments.length)for(var c,g=0,b=l.length;g<b;g++)(c||!(g in l))&&(c||(c=Array.prototype.slice.call(l,0,g)),c[g]=l[g]);return u.concat(c||Array.prototype.slice.call(l))}([m],f,!1));$(_).text(v)})},u.prototype.applyNgRefTemplate=function(l,d,g){var b=this;d.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var y=f.ngTemplateRef,_=y.ref,m=y.context,v=d.findIndex(function(M){return M.data===f.data}),C=l.childNodes.item(v);$(C).html("");var Z=Object.assign({},m,m?.userData,{adtData:g}),x=b.vcr.createEmbeddedView(_,Z);b.renderer.appendChild(C,x.rootNodes[0])})},u.\u0275fac=function(d){return new(d||u)(h.Y36(h.SBq),h.Y36(h.s_b),h.Y36(h.Qsj))},u.\u0275dir=h.lG2({type:u,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),u}(),e=p(36895),T=function(){function u(){}return u.forRoot=function(){return{ngModule:u}},u.\u0275fac=function(d){return new(d||u)},u.\u0275mod=h.oAB({type:u}),u.\u0275inj=h.cJS({imports:[e.ez]}),u}()}}]);