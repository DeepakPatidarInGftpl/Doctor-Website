"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9652],{12901:(w,F,h)=>{h.r(F),h.d(F,{EditSubcategoryGroupModule:()=>U});var b=h(36895),S=h(88996),n=h(24006),e=h(94650),T=h(80927),s=h(97185);function l(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Enter The Title"),e.qZA())}function u(o,i){if(1&o&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("id",t.id),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.title)}}function p(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Category"),e.qZA())}const d=function(o){return{"is-invalid":o}};function g(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"a",34)(1,"input",35,12),e.NdJ("change",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onCheckChange(a))}),e.qZA(),e.TgZ(3,"label",36),e.NdJ("click",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&o){const t=i.$implicit,r=i.index,a=e.oxw();e.xp6(1),e.Q6J("value",t.id)("checked",a.selectedSubCats.includes(t.id)||a.selectedSubCategoryIds.includes(t.id))("ngClass",e.VKq(6,d,a.f.subcategories.touched&&a.f.subcategories.invalid))("id","checkbox-"+r),e.xp6(2),e.Q6J("for","checkbox-"+r),e.xp6(1),e.Oqu(t.title)}}function f(o,i){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedSubcat+" Subcategory Selected")}}function y(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function _(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function m(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"a",34)(1,"input",37),e.NdJ("change",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onCheckFeature(a))}),e.qZA(),e.TgZ(2,"label",36),e.NdJ("click",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onLabelClick(a))}),e._uU(3),e.qZA()()}if(2&o){const t=i.$implicit,r=i.index,a=e.oxw();e.xp6(1),e.Q6J("value",t.id)("checked",a.selectedFeature.includes(t.id)||a.selectedFeatureIds.includes(t.id))("id","checkboxFeat-"+r),e.xp6(1),e.Q6J("for","checkboxFeat-"+r),e.xp6(1),e.Oqu(t.title)}}function G(o,i){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedFeatureGrp+" Feature group selected")}}function C(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Feature Group "),e.qZA())}function Z(o,i){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Feature Group "),e.qZA())}function x(o,i){if(1&o&&e._UZ(0,"img",38),2&o){const t=e.oxw();e.Q6J("src",t.url,e.LSH)}}function A(o,i){if(1&o&&e._UZ(0,"img",38),2&o){const t=e.oxw();e.Q6J("src",t.imgUrl+(null==t.updateData?null:t.updateData.image),e.LSH)}}function E(o,i){1&o&&(e.TgZ(0,"button",39),e._uU(1,"Submit"),e.qZA())}function I(o,i){1&o&&(e.TgZ(0,"button",40),e._UZ(1,"span",41),e._uU(2,"Submit"),e.qZA())}const M=function(){return{standalone:!0}},J=[{path:"",component:(()=>{class o{constructor(t,r,a,c,v){this.fb=t,this.router=r,this.coreService=a,this.Arout=c,this.toastr=v,this.imgUrl="https://pv.greatfuturetechno.com",this.selectedSubCats=[],this.selectedFeature=[],this.searchFeatureGroup="",this.featureGroup=[],this.subcatbyCategory=[],this.searchSubcategory="",this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.arrayFeatutreGroup=[],this.selectedFeatureGrp=0,this.selectedFeatureIds=[],this.loaders=!1}get f(){return this.subCategoryGroupForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.subCategoryGroupForm=this.fb.group({title:new n.NI("",n.kI.required),category:new n.NI("",n.kI.required),subcategories:new n.Oe([]),feature_group:new n.Oe([]),image:new n.NI("")}),this.getCategory(),this.coreService.getSubcategoryGroupById(this.id).subscribe(t=>{this.updateData=t,this.subCategoryGroupForm.patchValue({title:t.title}),this.subCategoryGroupForm.get("category").patchValue(t?.category?.id),this.getSubcategoryByCategory(t?.category?.id),this.selectedSubCats=t?.subcategories?.map(r=>r.id),this.selectedFeature=t?.feature_group?.map(r=>r.id),this.getFeatureGroup()})}getCategory(){this.coreService.getCategory().subscribe(t=>{this.categories=t})}getFeatureGroup(){this.coreService.getFeatureGroup().subscribe(t=>{this.featureGroup=t,this.filteredFeatureGroupData=this.featureGroup.slice(),this.filterFeatureGroupData(),this.featureGroup.map(r=>{this.selectedFeatureGrp=this.selectedFeature.length,this.selectedFeature.includes(r.id)&&this.subCategoryGroupForm.get("feature_group").push(new n.NI(r.id))})})}filterFeatureGroupData(){let t=this.featureGroup.slice();if(this.searchFeatureGroup){const r=this.searchFeatureGroup.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(r))}this.filteredFeatureGroupData=t}getSubcategoryByCategory(t){this.coreService.getSubcategoryByCategory(t).subscribe(r=>{this.subcatbyCategory=r,this.filteredSubcategoryData=this.subcatbyCategory.slice(),this.filterSubcategoryData(),this.selectedSubcat=this.selectedSubCats.length,this.subcatbyCategory.map(a=>{this.selectedSubCats.includes(a.id)&&this.subCategoryGroupForm.get("subcategories").push(new n.NI(a.id))})})}filterSubcategoryData(){let t=this.subcatbyCategory.slice();if(this.searchSubcategory){const r=this.searchSubcategory.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(r))}this.filteredSubcategoryData=t}selectImg(t){const r=t.target.files[0];if(r){const a=new FileReader;a.readAsDataURL(r),a.onload=()=>{this.url=a.result}}this.subCategoryGroupForm.patchValue({image:r}),this.subCategoryGroupForm.get("image")?.updateValueAndValidity()}onCheckChange(t){const r=this.subCategoryGroupForm.get("subcategories");if(t.target.checked)r.push(new n.NI(parseInt(t.target.value))),this.selectedSubcat++,this.selectedSubCategoryIds=r.value;else{let a=0;r.controls.forEach(c=>{if(c.value==t.target.value)return r.removeAt(a),void this.selectedSubcat--;a++})}}onCheckFeature(t){const r=this.subCategoryGroupForm.get("feature_group");if(t.target.checked)r.push(new n.NI(parseInt(t.target.value))),this.selectedFeatureGrp++,this.selectedFeatureIds=r.value;else{let a=0;r.controls.forEach(c=>{if(c.value==t.target.value)return r.removeAt(a),void this.selectedSubcat--;a++})}}submit(){if(this.subCategoryGroupForm.valid){this.loaders=!0;let t=new FormData;t.append("title",this.subCategoryGroupForm.controls.title.value),t.append("category",this.subCategoryGroupForm.controls.category.value),t.append("subcategories",JSON.stringify(this.subCategoryGroupForm.get("subcategories")?.value)),t.append("feature_group",JSON.stringify(this.subCategoryGroupForm.get("feature_group")?.value));const r=this.subCategoryGroupForm.get("image")?.value;r&&r instanceof File?(t.append("image",r),this.coreService.editSubCategoryGroup(t,this.id).subscribe(a=>{a.success&&(this.toastr.success(a.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},a=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==a.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==a.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})):this.coreService.editSubCategoryGroup(t,this.id).subscribe(a=>{a.success&&(this.toastr.success(a.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},a=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==a.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==a.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})}else this.loaders=!1,this.subCategoryGroupForm.markAllAsTouched()}get title(){return this.subCategoryGroupForm.get("title")}get category(){return this.subCategoryGroupForm.get("category")}get subcategories(){return this.subCategoryGroupForm.get("subcategories")}get feature_group(){return this.subCategoryGroupForm.get("feature_group")}onLabelClick(t){t.stopPropagation()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.qu),e.Y36(S.F0),e.Y36(T.p),e.Y36(S.gz),e.Y36(s._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-subcategory-group"]],decls:80,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"image-upload","mb-2"],["type","text","formControlName","title"],["class","text-danger",4,"ngIf"],["formControlName","category",1,"w-100",3,"change"],["categoryValue",""],["value","","disabled",""],[3,"id","value",4,"ngFor","ngForOf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","search feature group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/brandlist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"id","value"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategories",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],["type","checkbox","formArrayName","feature_group",2,"margin-right","5px",3,"value","checked","id","change"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Sub Category Group"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Sub Category Group"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"Title"),e.qZA(),e.TgZ(15,"div",8),e._UZ(16,"input",9),e.qZA(),e.YNc(17,l,2,0,"span",10),e.qZA()(),e.TgZ(18,"div",6)(19,"div",7)(20,"label"),e._uU(21,"Category"),e.qZA(),e.TgZ(22,"div",8)(23,"select",11,12),e.NdJ("change",function(){e.CHM(a);const v=e.MAs(24);return e.KtG(r.getSubcategoryByCategory(v.value))}),e.TgZ(25,"option",13),e._uU(26,"Select Category"),e.qZA(),e.YNc(27,u,2,3,"option",14),e.qZA()(),e.YNc(28,p,2,0,"span",10),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Subcategory"),e.qZA(),e.TgZ(33,"div",15)(34,"button",16),e._uU(35,"Select Subcategory"),e.qZA(),e.TgZ(36,"ul",17)(37,"li")(38,"input",18),e.NdJ("ngModelChange",function(v){return r.searchSubcategory=v})("ngModelChange",function(){return r.filterSubcategoryData()}),e.qZA()(),e.TgZ(39,"li"),e.YNc(40,g,5,8,"a",19),e.qZA()()(),e.YNc(41,f,2,1,"p",20),e.YNc(42,y,2,0,"span",10),e.YNc(43,_,2,0,"span",10),e.qZA()(),e.TgZ(44,"div",6)(45,"div",7)(46,"label"),e._uU(47,"Feature Group*"),e.qZA(),e.TgZ(48,"div",15)(49,"button",16),e._uU(50,"Select Feature Group"),e.qZA(),e.TgZ(51,"ul",17)(52,"li")(53,"input",21),e.NdJ("ngModelChange",function(v){return r.searchFeatureGroup=v})("ngModelChange",function(){return r.filterFeatureGroupData()}),e.qZA()(),e.TgZ(54,"li"),e.YNc(55,m,4,5,"a",19),e.qZA()(),e.YNc(56,G,2,1,"p",20),e.qZA(),e.YNc(57,C,2,0,"span",10),e.YNc(58,Z,2,0,"span",10),e.qZA()(),e.TgZ(59,"div",6)(60,"div",7)(61,"label"),e._uU(62,"Subcategory Group Image*"),e.qZA(),e.TgZ(63,"div",4)(64,"div",22)(65,"div",23)(66,"input",24),e.NdJ("change",function(v){return r.selectImg(v)}),e.qZA(),e.TgZ(67,"div",25),e._UZ(68,"img",26),e.TgZ(69,"h4"),e._uU(70,"Drag and drop a file to upload"),e.qZA()()()(),e.TgZ(71,"div",22),e.YNc(72,x,1,1,"img",27),e.YNc(73,A,1,1,"img",27),e.qZA()()()(),e.TgZ(74,"div",28)(75,"div",28),e.YNc(76,E,2,0,"button",29),e.YNc(77,I,3,0,"button",30),e.TgZ(78,"a",31),e._uU(79,"Cancel"),e.qZA()()()()()()()()}2&t&&(e.xp6(9),e.Q6J("formGroup",r.subCategoryGroupForm),e.xp6(8),e.Q6J("ngIf",r.title&&r.title.invalid&&r.title.touched),e.xp6(10),e.Q6J("ngForOf",r.categories),e.xp6(1),e.Q6J("ngIf",r.category&&r.category.invalid&&r.category.touched),e.xp6(10),e.Q6J("ngModel",r.searchSubcategory)("ngModelOptions",e.DdM(20,M)),e.xp6(2),e.Q6J("ngForOf",r.filteredSubcategoryData),e.xp6(1),e.Q6J("ngIf",r.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",r.subcategories&&r.subcategories.invalid&&r.subcategories.touched),e.xp6(1),e.Q6J("ngIf",r.errormessFSubC),e.xp6(10),e.Q6J("ngModel",r.searchFeatureGroup)("ngModelOptions",e.DdM(21,M)),e.xp6(2),e.Q6J("ngForOf",r.filteredFeatureGroupData),e.xp6(1),e.Q6J("ngIf",r.selectedFeatureGrp>0),e.xp6(1),e.Q6J("ngIf",r.subcategories&&r.subcategories.invalid&&r.subcategories.touched),e.xp6(1),e.Q6J("ngIf",r.errormessFFG),e.xp6(14),e.Q6J("ngIf",r.url),e.xp6(1),e.Q6J("ngIf",!r.url),e.xp6(3),e.Q6J("ngIf",!r.loaders),e.xp6(1),e.Q6J("ngIf",r.loaders))},dependencies:[b.mk,b.sg,b.O5,S.yS,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.On,n.sg,n.u,n.CE],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']}),o})(),canActivate:[h(30597).l],data:{allowedRoles:["change_subcategorygroup"]}}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[S.Bz.forChild(J),S.Bz]}),o})();var D=h(8468);let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[b.ez,O,D.I]}),o})()},65415:(w,F,h)=>{h.d(F,{G:()=>n,T:()=>T});var b=h(94650),n=function(){function s(l,u,p){this.el=l,this.vcr=u,this.renderer=p,this.dtOptions={}}return s.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe(function(u){l.displayTable(u)}):this.displayTable(null)},s.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},s.prototype.displayTable=function(l){var u=this;l&&(this.dtOptions=l),this.dtInstance=new Promise(function(p,d){Promise.resolve(u.dtOptions).then(function(g){0===Object.keys(g).length&&0===$("tbody tr",u.el.nativeElement).length?d("Both the table and dtOptions cannot be empty"):setTimeout(function(){var y={rowCallback:function(_,m,G){if(g.columns){var C=g.columns;u.applyNgPipeTransform(_,C),u.applyNgRefTemplate(_,C,m)}g.rowCallback&&g.rowCallback(_,m,G)}};y=Object.assign({},g,y),u.dt=$(u.el.nativeElement).DataTable(y),p(u.dt)})})})},s.prototype.applyNgPipeTransform=function(l,u){u.filter(function(d){return d.ngPipeInstance&&!d.ngTemplateRef}).forEach(function(d){var g=d.ngPipeInstance,f=d.ngPipeArgs||[],y=u.findIndex(function(C){return C.data===d.data}),_=l.childNodes.item(y),m=$(_).text(),G=g.transform.apply(g,function(s,l,u){if(u||2===arguments.length)for(var g,p=0,d=l.length;p<d;p++)(g||!(p in l))&&(g||(g=Array.prototype.slice.call(l,0,p)),g[p]=l[p]);return s.concat(g||Array.prototype.slice.call(l))}([m],f,!1));$(_).text(G)})},s.prototype.applyNgRefTemplate=function(l,u,p){var d=this;u.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var y=f.ngTemplateRef,_=y.ref,m=y.context,G=u.findIndex(function(A){return A.data===f.data}),C=l.childNodes.item(G);$(C).html("");var Z=Object.assign({},m,m?.userData,{adtData:p}),x=d.vcr.createEmbeddedView(_,Z);d.renderer.appendChild(C,x.rootNodes[0])})},s.\u0275fac=function(u){return new(u||s)(b.Y36(b.SBq),b.Y36(b.s_b),b.Y36(b.Qsj))},s.\u0275dir=b.lG2({type:s,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),s}(),e=h(36895),T=function(){function s(){}return s.forRoot=function(){return{ngModule:s}},s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=b.oAB({type:s}),s.\u0275inj=b.cJS({imports:[e.ez]}),s}()}}]);