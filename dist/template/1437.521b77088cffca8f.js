"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1437],{11437:(F,y,n)=>{n.r(y),n.d(y,{AddSubcategoryGroupModule:()=>N});var c=n(36895),d=n(89299),s=n(24006),e=n(94650),S=n(80927),G=n(97185);function g(r,i){1&r&&(e.TgZ(0,"span",32),e._uU(1,"Enter Sub Category Group Name"),e.qZA())}function A(r,i){if(1&r&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.s9C("id",t.id),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.title)}}function p(r,i){1&r&&(e.TgZ(0,"span",32),e._uU(1,"Select Category"),e.qZA())}const _=function(r){return{"is-invalid":r}};function h(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"a",34)(1,"input",35,12),e.NdJ("change",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.onCheckChange(a))}),e.qZA(),e.TgZ(3,"label",36),e.NdJ("click",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&r){const t=i.$implicit,o=i.index,a=e.oxw();e.xp6(1),e.Q6J("value",t.id)("checked",a.selectedSubCategoryIds.includes(t.id))("ngClass",e.VKq(6,_,a.f.subcategories.touched&&a.f.subcategories.invalid))("id","checkbox-"+o),e.xp6(2),e.Q6J("for","checkbox-"+o),e.xp6(1),e.Oqu(t.title)}}function l(r,i){if(1&r&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedSubcat+" Subcategory Selected")}}function b(r,i){1&r&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function m(r,i){1&r&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function C(r,i){1&r&&(e.O4$(),e.TgZ(0,"svg",37),e._UZ(1,"path",38)(2,"path",39),e.qZA())}function v(r,i){if(1&r&&e._UZ(0,"img",40),2&r){const t=e.oxw();e.Q6J("src",t.url,e.LSH)}}function Z(r,i){1&r&&(e.TgZ(0,"button",41),e._uU(1,"Submit"),e.qZA())}function T(r,i){1&r&&(e.TgZ(0,"button",42),e._UZ(1,"span",43),e._uU(2,"\xa0 Submit"),e.qZA())}const x=function(){return{standalone:!0}},I=[{path:"",component:(()=>{class r{constructor(t,o,a,u){this.fb=t,this.router=o,this.coreService=a,this.toastr=u,this.searchFeatureGroup="",this.featureGroup=[],this.subcatbyCategory=[],this.searchSubcategory="",this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.arrayFeatutreGroup=[],this.selectedFeatureGrp=0,this.selectedFeatureIds=[],this.loaders=!1}get f(){return this.subCategoryGroupForm.controls}ngOnInit(){this.subCategoryGroupForm=this.fb.group({title:new s.NI("",s.kI.required),category:new s.NI("",s.kI.required),subcategories:new s.Oe([]),image:new s.NI("")}),this.getCategory(),this.getFeatureGroup()}getCategory(){this.coreService.getCategory().subscribe(t=>{this.categories=t})}getFeatureGroup(){this.coreService.getFeatureGroup().subscribe(t=>{this.featureGroup=t,this.filteredFeatureGroupData=this.featureGroup.slice(),this.filterFeatureGroupData()})}filterFeatureGroupData(){let t=this.featureGroup.slice();if(this.searchFeatureGroup){const o=this.searchFeatureGroup.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(o))}this.filteredFeatureGroupData=t}getSubcategoryByCategory(t){this.coreService.getSubcategoryByCategory(t).subscribe(o=>{this.subcatbyCategory=o,this.filteredSubcategoryData=this.subcatbyCategory.slice(),this.filterSubcategoryData()})}filterSubcategoryData(){let t=this.subcatbyCategory.slice();if(this.searchSubcategory){const o=this.searchSubcategory.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(o))}this.filteredSubcategoryData=t}selectImg(t){const o=t.target.files[0];if(o){const a=new FileReader;a.readAsDataURL(o),a.onload=()=>{this.url=a.result}}this.subCategoryGroupForm.patchValue({image:o}),this.subCategoryGroupForm.get("image")?.updateValueAndValidity()}onCheckChange(t){const o=this.subCategoryGroupForm.get("subcategories");if(t.target.checked)o.push(new s.NI(parseInt(t.target.value))),this.selectedSubcat++,this.selectedSubCategoryIds=o.value;else{let a=0;o.controls.forEach(u=>{if(u.value==t.target.value)return o.removeAt(a),void this.selectedSubcat--;a++})}}onCheckFeature(t){const o=this.subCategoryGroupForm.get("feature_group");if(t.target.checked)o.push(new s.NI(parseInt(t.target.value))),this.selectedFeatureGrp++,this.selectedFeatureIds=o.value;else{let a=0;o.controls.forEach(u=>{if(u.value==t.target.value)return o.removeAt(a),void this.selectedSubcat--;a++})}}submit(){if(this.subCategoryGroupForm.valid){this.loaders=!0;let t=new FormData;t.append("title",this.subCategoryGroupForm.controls.title.value),t.append("category",this.subCategoryGroupForm.controls.category.value),t.append("image",this.subCategoryGroupForm.controls.image.value),t.append("subcategories",JSON.stringify(this.subCategoryGroupForm.get("subcategories")?.value)),this.coreService.postCategoriesGroup(t).subscribe(o=>{o.success&&(this.toastr.success(o.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},o=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==o.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==o.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})}else this.loaders=!1,this.subCategoryGroupForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get title(){return this.subCategoryGroupForm.get("title")}get category(){return this.subCategoryGroupForm.get("category")}get subcategories(){return this.subCategoryGroupForm.get("subcategories")}get feature_group(){return this.subCategoryGroupForm.get("feature_group")}onLabelClick(t){t.stopPropagation()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(d.F0),e.Y36(S.p),e.Y36(G._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-subcategory-group"]],decls:65,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"image-upload","mb-2"],["type","text","formControlName","title","placeholder","SubCategory Group Name"],["class","text-danger",4,"ngIf"],["formControlName","category",1,"w-100",3,"change"],["categoryValue",""],["value","","disabled",""],[3,"id","value",4,"ngFor","ngForOf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/subCategoryGroup",1,"btn","btn-cancel"],[1,"text-danger"],[3,"id","value"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategories",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Add Sub Category Group"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Sub Category Group"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return o.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"SubCategory Group Name"),e.qZA(),e.TgZ(15,"div",8),e._UZ(16,"input",9),e.qZA(),e.YNc(17,g,2,0,"span",10),e.qZA()(),e.TgZ(18,"div",6)(19,"div",7)(20,"label"),e._uU(21,"Select Category"),e.qZA(),e.TgZ(22,"div",8)(23,"select",11,12),e.NdJ("change",function(){e.CHM(a);const f=e.MAs(24);return e.KtG(o.getSubcategoryByCategory(f.value))}),e.TgZ(25,"option",13),e._uU(26,"Select Category"),e.qZA(),e.YNc(27,A,2,3,"option",14),e.qZA()(),e.YNc(28,p,2,0,"span",10),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Select Subcategory"),e.qZA(),e.TgZ(33,"div",15)(34,"button",16),e._uU(35,"Select Subcategory"),e.qZA(),e.TgZ(36,"ul",17)(37,"li")(38,"input",18),e.NdJ("ngModelChange",function(f){return o.searchSubcategory=f})("ngModelChange",function(){return o.filterSubcategoryData()}),e.qZA()(),e.TgZ(39,"li"),e.YNc(40,h,5,8,"a",19),e.qZA()()(),e.YNc(41,l,2,1,"p",20),e.YNc(42,b,2,0,"span",10),e.YNc(43,m,2,0,"span",10),e.qZA()(),e.TgZ(44,"div",6)(45,"div",7)(46,"label"),e._uU(47,"Subcategory Group Image*"),e.qZA(),e.TgZ(48,"div",4)(49,"div",21)(50,"div",22)(51,"input",23),e.NdJ("change",function(f){return o.selectImg(f)}),e.qZA(),e.TgZ(52,"div",24),e._UZ(53,"img",25),e.TgZ(54,"h4"),e._uU(55,"Drag and drop a file to upload"),e.qZA()()()(),e.TgZ(56,"div",21),e.YNc(57,C,3,0,"svg",26),e.YNc(58,v,1,1,"img",27),e.qZA()()()(),e.TgZ(59,"div",28)(60,"div",28),e.YNc(61,Z,2,0,"button",29),e.YNc(62,T,3,0,"button",30),e.TgZ(63,"a",31),e._uU(64,"Cancel"),e.qZA()()()()()()()()}2&t&&(e.xp6(9),e.Q6J("formGroup",o.subCategoryGroupForm),e.xp6(8),e.Q6J("ngIf",o.title&&o.title.invalid&&o.title.touched),e.xp6(10),e.Q6J("ngForOf",o.categories),e.xp6(1),e.Q6J("ngIf",o.category&&o.category.invalid&&o.category.touched),e.xp6(10),e.Q6J("ngModel",o.searchSubcategory)("ngModelOptions",e.DdM(14,x)),e.xp6(2),e.Q6J("ngForOf",o.filteredSubcategoryData),e.xp6(1),e.Q6J("ngIf",o.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",o.subcategories&&o.subcategories.invalid&&o.subcategories.touched),e.xp6(1),e.Q6J("ngIf",o.errormessFSubC),e.xp6(14),e.Q6J("ngIf",!o.url),e.xp6(1),e.Q6J("ngIf",o.url),e.xp6(3),e.Q6J("ngIf",!o.loaders),e.xp6(1),e.Q6J("ngIf",o.loaders))},dependencies:[c.mk,c.sg,c.O5,d.yS,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.sg,s.u,s.CE],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']}),r})(),canActivate:[n(30597).l],data:{allowedRoles:["add_subcategorygroup"]}}];let O=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(I),d.Bz]}),r})();var D=n(8468);let N=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,O,D.I]}),r})()},30597:(F,y,n)=>{n.d(y,{l:()=>G});var c=n(94650),d=n(89299),s=n(97185),e=n(42917),S=n(80927);let G=(()=>{class g{constructor(p,_,h,l,b){this.router=p,this.Arout=_,this.toastr=h,this.profileService=l,this.coreService=b}canActivate(p,_){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),h){const l=p.data.allowedRoles;console.log(l,"allowedRoles");const b=h.some(m=>l.includes(m.codename));if(console.log(b),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const C=m?.permission,v=this.profileService.getUserDetails();(!v||v.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(p){return new(p||g)(c.LFG(d.F0),c.LFG(d.gz),c.LFG(s._W),c.LFG(e.J),c.LFG(S.p))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);