"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2901],{12901:(T,y,u)=>{u.r(y),u.d(y,{EditSubcategoryGroupModule:()=>D});var c=u(36895),l=u(4392),a=u(24006),e=u(94650),G=u(80927),v=u(97185);function g(r,s){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Enter SubCategory Group"),e.qZA())}function F(r,s){if(1&r&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&r){const t=s.$implicit;e.s9C("id",t.id),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.title)}}function p(r,s){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Select Category"),e.qZA())}const C=function(r){return{"is-invalid":r}};function b(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"a",33)(1,"input",34,12),e.NdJ("change",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.onCheckChange(i))}),e.qZA(),e.TgZ(3,"label",35),e.NdJ("click",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.onLabelClick(i))}),e._uU(4),e.qZA()()}if(2&r){const t=s.$implicit,o=s.index,i=e.oxw();e.xp6(1),e.Q6J("value",t.id)("checked",i.selectedSubCats.includes(t.id)||i.selectedSubCategoryIds.includes(t.id))("ngClass",e.VKq(6,C,i.f.subcategories.touched&&i.f.subcategories.invalid))("id","checkbox-"+o),e.xp6(2),e.Q6J("for","checkbox-"+o),e.xp6(1),e.Oqu(t.title)}}function d(r,s){if(1&r&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedSubcat+" Subcategory Selected")}}function m(r,s){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Select subcategory "),e.qZA())}function f(r,s){1&r&&(e.TgZ(0,"span",31),e._uU(1,"Select subcategory "),e.qZA())}function _(r,s){if(1&r&&e._UZ(0,"img",36),2&r){const t=e.oxw();e.Q6J("src",t.url,e.LSH)}}function S(r,s){if(1&r&&e._UZ(0,"img",36),2&r){const t=e.oxw();e.Q6J("src",t.imgUrl+(null==t.updateData?null:t.updateData.image),e.LSH)}}function Z(r,s){1&r&&(e.TgZ(0,"button",37),e._uU(1,"Submit"),e.qZA())}function A(r,s){1&r&&(e.TgZ(0,"button",38),e._UZ(1,"span",39),e._uU(2,"\xa0Submit"),e.qZA())}const x=function(){return{standalone:!0}},I=[{path:"",component:(()=>{class r{constructor(t,o,i,n,h){this.fb=t,this.router=o,this.coreService=i,this.Arout=n,this.toastr=h,this.imgUrl="https://pv.greatfuturetechno.com",this.selectedSubCats=[],this.selectedFeature=[],this.searchFeatureGroup="",this.featureGroup=[],this.subcatbyCategory=[],this.searchSubcategory="",this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.arrayFeatutreGroup=[],this.selectedFeatureGrp=0,this.selectedFeatureIds=[],this.loaders=!1}get f(){return this.subCategoryGroupForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.subCategoryGroupForm=this.fb.group({title:new a.NI("",a.kI.required),category:new a.NI("",a.kI.required),subcategories:new a.Oe([]),image:new a.NI("")}),this.getCategory(),this.coreService.getSubcategoryGroupById(this.id).subscribe(t=>{this.updateData=t,this.subCategoryGroupForm.patchValue({title:t.title}),this.subCategoryGroupForm.get("category").patchValue(t?.category?.id),this.getSubcategoryByCategory(t?.category?.id),this.selectedSubCats=t?.subcategories?.map(o=>o.id)})}getCategory(){this.coreService.getCategory().subscribe(t=>{this.categories=t})}getFeatureGroup(){this.coreService.getFeatureGroup().subscribe(t=>{this.featureGroup=t,this.filteredFeatureGroupData=this.featureGroup.slice(),this.filterFeatureGroupData(),this.featureGroup.map(o=>{this.selectedFeatureGrp=this.selectedFeature.length,this.selectedFeature.includes(o.id)&&this.subCategoryGroupForm.get("feature_group").push(new a.NI(o.id))})})}filterFeatureGroupData(){let t=this.featureGroup.slice();if(this.searchFeatureGroup){const o=this.searchFeatureGroup.toLowerCase();t=t.filter(i=>i?.title.toLowerCase().includes(o))}this.filteredFeatureGroupData=t}getSubcategoryByCategory(t){this.coreService.getSubcategoryByCategory(t).subscribe(o=>{this.subcatbyCategory=o,this.filteredSubcategoryData=this.subcatbyCategory.slice(),this.filterSubcategoryData(),this.selectedSubcat=this.selectedSubCats.length,this.subcatbyCategory.map(i=>{this.selectedSubCats.includes(i.id)&&this.subCategoryGroupForm.get("subcategories").push(new a.NI(i.id))})})}filterSubcategoryData(){let t=this.subcatbyCategory.slice();if(this.searchSubcategory){const o=this.searchSubcategory.toLowerCase();t=t.filter(i=>i?.title.toLowerCase().includes(o))}this.filteredSubcategoryData=t}selectImg(t){const o=t.target.files[0];if(o){const i=new FileReader;i.readAsDataURL(o),i.onload=()=>{this.url=i.result}}this.subCategoryGroupForm.patchValue({image:o}),this.subCategoryGroupForm.get("image")?.updateValueAndValidity()}onCheckChange(t){const o=this.subCategoryGroupForm.get("subcategories");if(t.target.checked)o.push(new a.NI(parseInt(t.target.value))),this.selectedSubcat++,this.selectedSubCategoryIds=o.value;else{let i=0;o.controls.forEach(n=>{if(n.value==t.target.value)return o.removeAt(i),void this.selectedSubcat--;i++})}}onCheckFeature(t){const o=this.subCategoryGroupForm.get("feature_group");if(t.target.checked)o.push(new a.NI(parseInt(t.target.value))),this.selectedFeatureGrp++,this.selectedFeatureIds=o.value;else{let i=0;o.controls.forEach(n=>{if(n.value==t.target.value)return o.removeAt(i),void this.selectedSubcat--;i++})}}submit(){if(this.subCategoryGroupForm.valid){this.loaders=!0;let t=new FormData;t.append("title",this.subCategoryGroupForm.controls.title.value),t.append("category",this.subCategoryGroupForm.controls.category.value),t.append("subcategories",JSON.stringify(this.subCategoryGroupForm.get("subcategories")?.value));const o=this.subCategoryGroupForm.get("image")?.value;o&&o instanceof File?(t.append("image",o),this.coreService.editSubCategoryGroup(t,this.id).subscribe(i=>{i.success&&(this.toastr.success(i.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},i=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==i.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==i.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})):this.coreService.editSubCategoryGroup(t,this.id).subscribe(i=>{i.success&&(this.toastr.success(i.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},i=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==i.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==i.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})}else this.loaders=!1,this.subCategoryGroupForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get title(){return this.subCategoryGroupForm.get("title")}get category(){return this.subCategoryGroupForm.get("category")}get subcategories(){return this.subCategoryGroupForm.get("subcategories")}get feature_group(){return this.subCategoryGroupForm.get("feature_group")}onLabelClick(t){t.stopPropagation()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.qu),e.Y36(l.F0),e.Y36(G.p),e.Y36(l.gz),e.Y36(v._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit-subcategory-group"]],decls:65,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"image-upload","mb-2"],["type","text","formControlName","title","placeholder","SubCategory Group Name"],["class","text-danger",4,"ngIf"],["formControlName","category",1,"w-100",3,"change"],["categoryValue",""],["value","","disabled",""],[3,"id","value",4,"ngFor","ngForOf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/subCategoryGroup",1,"btn","btn-cancel"],[1,"text-danger"],[3,"id","value"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategories",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Sub Category Group"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Sub Category Group"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return o.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"SubCategory Group Name"),e.qZA(),e.TgZ(15,"div",8),e._UZ(16,"input",9),e.qZA(),e.YNc(17,g,2,0,"span",10),e.qZA()(),e.TgZ(18,"div",6)(19,"div",7)(20,"label"),e._uU(21,"Select Category"),e.qZA(),e.TgZ(22,"div",8)(23,"select",11,12),e.NdJ("change",function(){e.CHM(i);const h=e.MAs(24);return e.KtG(o.getSubcategoryByCategory(h.value))}),e.TgZ(25,"option",13),e._uU(26,"Select Category"),e.qZA(),e.YNc(27,F,2,3,"option",14),e.qZA()(),e.YNc(28,p,2,0,"span",10),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Select Subcategory"),e.qZA(),e.TgZ(33,"div",15)(34,"button",16),e._uU(35,"Select Subcategory"),e.qZA(),e.TgZ(36,"ul",17)(37,"li")(38,"input",18),e.NdJ("ngModelChange",function(h){return o.searchSubcategory=h})("ngModelChange",function(){return o.filterSubcategoryData()}),e.qZA()(),e.TgZ(39,"li"),e.YNc(40,b,5,8,"a",19),e.qZA()()(),e.YNc(41,d,2,1,"p",20),e.YNc(42,m,2,0,"span",10),e.YNc(43,f,2,0,"span",10),e.qZA()(),e.TgZ(44,"div",6)(45,"div",7)(46,"label"),e._uU(47,"Subcategory Group Image*"),e.qZA(),e.TgZ(48,"div",4)(49,"div",21)(50,"div",22)(51,"input",23),e.NdJ("change",function(h){return o.selectImg(h)}),e.qZA(),e.TgZ(52,"div",24),e._UZ(53,"img",25),e.TgZ(54,"h4"),e._uU(55,"Drag and drop a file to upload"),e.qZA()()()(),e.TgZ(56,"div",21),e.YNc(57,_,1,1,"img",26),e.YNc(58,S,1,1,"img",26),e.qZA()()()(),e.TgZ(59,"div",27)(60,"div",27),e.YNc(61,Z,2,0,"button",28),e.YNc(62,A,3,0,"button",29),e.TgZ(63,"a",30),e._uU(64,"Cancel"),e.qZA()()()()()()()()}2&t&&(e.xp6(9),e.Q6J("formGroup",o.subCategoryGroupForm),e.xp6(8),e.Q6J("ngIf",o.title&&o.title.invalid&&o.title.touched),e.xp6(10),e.Q6J("ngForOf",o.categories),e.xp6(1),e.Q6J("ngIf",o.category&&o.category.invalid&&o.category.touched),e.xp6(10),e.Q6J("ngModel",o.searchSubcategory)("ngModelOptions",e.DdM(14,x)),e.xp6(2),e.Q6J("ngForOf",o.filteredSubcategoryData),e.xp6(1),e.Q6J("ngIf",o.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",o.subcategories&&o.subcategories.invalid&&o.subcategories.touched),e.xp6(1),e.Q6J("ngIf",o.errormessFSubC),e.xp6(14),e.Q6J("ngIf",o.url),e.xp6(1),e.Q6J("ngIf",!o.url),e.xp6(3),e.Q6J("ngIf",!o.loaders),e.xp6(1),e.Q6J("ngIf",o.loaders))},dependencies:[c.mk,c.sg,c.O5,l.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.sg,a.u,a.CE],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']}),r})(),canActivate:[u(30597).l],data:{allowedRoles:["change_subcategorygroup"]}}];let w=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.Bz.forChild(I),l.Bz]}),r})();var O=u(8468);let D=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,w,O.I]}),r})()},30597:(T,y,u)=>{u.d(y,{l:()=>v});var c=u(94650),l=u(4392),a=u(97185),e=u(42917),G=u(80927);let v=(()=>{class g{constructor(p,C,b,d,m){this.router=p,this.Arout=C,this.toastr=b,this.profileService=d,this.coreService=m}canActivate(p,C){const b=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),b){const d=p.data.allowedRoles;console.log(d,"allowedRoles");const m=b.some(f=>d.includes(f.codename));if(console.log(m),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const _=f?.permission,S=this.profileService.getUserDetails();(!S||S.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(p){return new(p||g)(c.LFG(l.F0),c.LFG(l.gz),c.LFG(a._W),c.LFG(e.J),c.LFG(G.p))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);