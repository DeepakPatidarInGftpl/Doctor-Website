"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1437],{11437:(Z,C,n)=>{n.r(C),n.d(C,{AddSubcategoryGroupModule:()=>E});var l=n(36895),p=n(4392),s=n(24006),e=n(94650),G=n(80927),S=n(97185),g=n(47957),A=n(3238),c=n(59549),f=n(44144);function m(r,i){if(1&r&&(e.TgZ(0,"mat-option",37),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",null==t?null:t.title)("disabled",!0),e.xp6(1),e.Oqu(null==t?null:t.title)}}function d(r,i){if(1&r&&(e.ynx(0),e.YNc(1,m,2,3,"mat-option",36),e.BQk()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.subCategoryGroupList)}}function b(r,i){1&r&&(e.TgZ(0,"mat-option",38),e._uU(1,"Please Enter 3 or more characters"),e.qZA())}function h(r,i){1&r&&(e.TgZ(0,"mat-error",39),e._uU(1,"SubCategoryGroup name is required"),e.qZA())}function _(r,i){if(1&r&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.s9C("id",t.id),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.title)}}function v(r,i){1&r&&(e.TgZ(0,"span",41),e._uU(1,"Select Category"),e.qZA())}const F=function(r){return{"is-invalid":r}};function T(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"a",42)(1,"input",43,16),e.NdJ("change",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.onCheckChange(a))}),e.qZA(),e.TgZ(3,"label",44),e.NdJ("click",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&r){const t=i.$implicit,o=i.index,a=e.oxw();e.xp6(1),e.Q6J("value",t.id)("checked",a.selectedSubCategoryIds.includes(t.id))("ngClass",e.VKq(6,F,a.f.subcategories.touched&&a.f.subcategories.invalid))("id","checkbox-"+o),e.xp6(2),e.Q6J("for","checkbox-"+o),e.xp6(1),e.Oqu(t.title)}}function x(r,i){if(1&r&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedSubcat+" Subcategory Selected")}}function w(r,i){1&r&&(e.TgZ(0,"span",41),e._uU(1,"Select subcategory "),e.qZA())}function M(r,i){1&r&&(e.TgZ(0,"span",41),e._uU(1,"Select subcategory "),e.qZA())}function I(r,i){1&r&&(e.O4$(),e.TgZ(0,"svg",45),e._UZ(1,"path",46)(2,"path",47),e.qZA())}function O(r,i){if(1&r&&e._UZ(0,"img",48),2&r){const t=e.oxw();e.Q6J("src",t.url,e.LSH)}}function N(r,i){1&r&&(e.TgZ(0,"button",49),e._uU(1,"Submit"),e.qZA())}function D(r,i){1&r&&(e.TgZ(0,"button",50),e._UZ(1,"span",51),e._uU(2,"\xa0 Submit"),e.qZA())}const J=function(){return{standalone:!0}},L=[{path:"",component:(()=>{class r{constructor(t,o,a,u){this.fb=t,this.router=o,this.coreService=a,this.toastr=u,this.subCategoryGroup=new s.NI("",[s.kI.required]),this.searchFeatureGroup="",this.featureGroup=[],this.subcatbyCategory=[],this.searchSubcategory="",this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.arrayFeatutreGroup=[],this.selectedFeatureGrp=0,this.selectedFeatureIds=[],this.loaders=!1}get f(){return this.subCategoryGroupForm.controls}ngOnInit(){this.subCategoryGroupForm=this.fb.group({title:new s.NI("",s.kI.required),category:new s.NI("",s.kI.required),subcategories:new s.Oe([]),image:new s.NI("")}),this.getCategory(),this.getFeatureGroup(),this.getSubCategoryGroup(),this.subCategoryGroup.valueChanges.subscribe(t=>{console.log(t),this._filterBrands(t)})}getCategory(){this.coreService.getCategory().subscribe(t=>{this.categories=t})}getFeatureGroup(){this.coreService.getFeatureGroup().subscribe(t=>{this.featureGroup=t,this.filteredFeatureGroupData=this.featureGroup.slice(),this.filterFeatureGroupData()})}filterFeatureGroupData(){let t=this.featureGroup.slice();if(this.searchFeatureGroup){const o=this.searchFeatureGroup.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(o))}this.filteredFeatureGroupData=t}_filterBrands(t){const o=t?.toLowerCase();this.subCategoryGroupList=this.allsubCategoryGroupData.filter(a=>a?.title?.toLowerCase().includes(o))}getSubcategoryByCategory(t){this.coreService.getSubcategoryByCategory(t).subscribe(o=>{this.subcatbyCategory=o,this.filteredSubcategoryData=this.subcatbyCategory.slice(),this.filterSubcategoryData()})}filterSubcategoryData(){let t=this.subcatbyCategory.slice();if(this.searchSubcategory){const o=this.searchSubcategory.toLowerCase();t=t.filter(a=>a?.title.toLowerCase().includes(o))}this.filteredSubcategoryData=t}selectImg(t){const o=t.target.files[0];if(o){const a=new FileReader;a.readAsDataURL(o),a.onload=()=>{this.url=a.result}}this.subCategoryGroupForm.patchValue({image:o}),this.subCategoryGroupForm.get("image")?.updateValueAndValidity()}onCheckChange(t){const o=this.subCategoryGroupForm.get("subcategories");if(t.target.checked)o.push(new s.NI(parseInt(t.target.value))),this.selectedSubcat++,this.selectedSubCategoryIds=o.value;else{let a=0;o.controls.forEach(u=>{if(u.value==t.target.value)return o.removeAt(a),void this.selectedSubcat--;a++})}}getSubCategoryGroup(){this.coreService.getSubcategoryGroup().subscribe(t=>{this.subCategoryGroupList=t,this.allsubCategoryGroupData=t})}onCheckFeature(t){const o=this.subCategoryGroupForm.get("feature_group");if(t.target.checked)o.push(new s.NI(parseInt(t.target.value))),this.selectedFeatureGrp++,this.selectedFeatureIds=o.value;else{let a=0;o.controls.forEach(u=>{if(u.value==t.target.value)return o.removeAt(a),void this.selectedSubcat--;a++})}}submit(){if(this.subCategoryGroupForm.get("title").setValue(this.subCategoryGroup.value),this.subCategoryGroupForm.valid){this.loaders=!0;let t=new FormData;t.append("title",this.subCategoryGroup.value),t.append("category",this.subCategoryGroupForm.controls.category.value),t.append("image",this.subCategoryGroupForm.controls.image.value),t.append("subcategories",JSON.stringify(this.subCategoryGroupForm.get("subcategories")?.value)),this.coreService.postCategoriesGroup(t).subscribe(o=>{o.success&&(this.toastr.success(o.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},o=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==o.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==o.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})}else this.loaders=!1,this.subCategoryGroupForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get title(){return this.subCategoryGroupForm.get("title")}get category(){return this.subCategoryGroupForm.get("category")}get subcategories(){return this.subCategoryGroupForm.get("subcategories")}get feature_group(){return this.subCategoryGroupForm.get("feature_group")}onLabelClick(t){t.stopPropagation()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(p.F0),e.Y36(G.p),e.Y36(S._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-subcategory-group"]],decls:70,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search subCategoryGroup","aria-label","subCategoryGroup","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngIf"],["class","is-loading",4,"ngIf"],["class","mt-3 error-msg",4,"ngIf"],[1,"image-upload","mb-2"],["formControlName","category",1,"w-100",3,"change"],["categoryValue",""],["value","","disabled",""],[3,"id","value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/subCategoryGroup",1,"btn","btn-cancel"],["style","color:#FF9F43",3,"value","disabled",4,"ngFor","ngForOf"],[2,"color","#FF9F43",3,"value","disabled"],[1,"is-loading"],[1,"mt-3","error-msg"],[3,"id","value"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategories",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Add Sub Category Group"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Sub Category Group"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return o.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"SubCategory Group Name"),e.qZA(),e.TgZ(15,"mat-form-field",8),e._UZ(16,"input",9),e.TgZ(17,"mat-autocomplete",null,10),e.YNc(19,d,2,1,"ng-container",11),e.ynx(20),e.YNc(21,b,2,0,"mat-option",12),e.BQk(),e.qZA(),e.YNc(22,h,2,0,"mat-error",13),e.qZA()()(),e.TgZ(23,"div",6)(24,"div",7)(25,"label"),e._uU(26,"Select Category"),e.qZA(),e.TgZ(27,"div",14)(28,"select",15,16),e.NdJ("change",function(){e.CHM(a);const y=e.MAs(29);return e.KtG(o.getSubcategoryByCategory(y.value))}),e.TgZ(30,"option",17),e._uU(31,"Select Category"),e.qZA(),e.YNc(32,_,2,3,"option",18),e.qZA()(),e.YNc(33,v,2,0,"span",19),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Select Subcategory"),e.qZA(),e.TgZ(38,"div",20)(39,"button",21),e._uU(40,"Select Subcategory"),e.qZA(),e.TgZ(41,"ul",22)(42,"li")(43,"input",23),e.NdJ("ngModelChange",function(y){return o.searchSubcategory=y})("ngModelChange",function(){return o.filterSubcategoryData()}),e.qZA()(),e.TgZ(44,"li"),e.YNc(45,T,5,8,"a",24),e.qZA()()(),e.YNc(46,x,2,1,"p",11),e.YNc(47,w,2,0,"span",19),e.YNc(48,M,2,0,"span",19),e.qZA()(),e.TgZ(49,"div",6)(50,"div",7)(51,"label"),e._uU(52,"Subcategory Group Image*"),e.qZA(),e.TgZ(53,"div",4)(54,"div",25)(55,"div",26)(56,"input",27),e.NdJ("change",function(y){return o.selectImg(y)}),e.qZA(),e.TgZ(57,"div",28),e._UZ(58,"img",29),e.TgZ(59,"h4"),e._uU(60,"Drag and drop a file to upload"),e.qZA()()()(),e.TgZ(61,"div",25),e.YNc(62,I,3,0,"svg",30),e.YNc(63,O,1,1,"img",31),e.qZA()()()(),e.TgZ(64,"div",32)(65,"div",32),e.YNc(66,N,2,0,"button",33),e.YNc(67,D,3,0,"button",34),e.TgZ(68,"a",35),e._uU(69,"Cancel"),e.qZA()()()()()()()()}if(2&t){const a=e.MAs(18);e.xp6(9),e.Q6J("formGroup",o.subCategoryGroupForm),e.xp6(7),e.Q6J("formControl",o.subCategoryGroup)("matAutocomplete",a)("ngClass",e.VKq(19,F,o.subCategoryGroup.touched&&o.subCategoryGroup.invalid)),e.xp6(3),e.Q6J("ngIf",(null==o.subCategoryGroup.value?null:o.subCategoryGroup.value.length)>2),e.xp6(2),e.Q6J("ngIf",(null==o.subCategoryGroup.value?null:o.subCategoryGroup.value.length)<3),e.xp6(1),e.Q6J("ngIf",o.subCategoryGroup.touched&&o.subCategoryGroup.invalid),e.xp6(10),e.Q6J("ngForOf",o.categories),e.xp6(1),e.Q6J("ngIf",o.category&&o.category.invalid&&o.category.touched),e.xp6(10),e.Q6J("ngModel",o.searchSubcategory)("ngModelOptions",e.DdM(21,J)),e.xp6(2),e.Q6J("ngForOf",o.filteredSubcategoryData),e.xp6(1),e.Q6J("ngIf",o.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",o.subcategories&&o.subcategories.invalid&&o.subcategories.touched),e.xp6(1),e.Q6J("ngIf",o.errormessFSubC),e.xp6(14),e.Q6J("ngIf",!o.url),e.xp6(1),e.Q6J("ngIf",o.url),e.xp6(3),e.Q6J("ngIf",!o.loaders),e.xp6(1),e.Q6J("ngIf",o.loaders)}},dependencies:[l.mk,l.sg,l.O5,p.yS,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.oH,s.sg,s.u,s.CE,g.XC,g.ZL,A.ey,c.TO,c.KE,f.Nt],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.error-msg[_ngcontent-%COMP%]{font-size:14px}  .mat-form-field-required-marker{color:#637381!important}  .mat-form-field-label{color:#637381!important}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']}),r})(),canActivate:[n(30597).l],data:{allowedRoles:["add_subcategorygroup"]}}];let q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(L),p.Bz]}),r})();var Q=n(8468);let E=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.ez,q,Q.I,g.Bb,c.lN,f.c]}),r})()},30597:(Z,C,n)=>{n.d(C,{l:()=>S});var l=n(94650),p=n(4392),s=n(97185),e=n(42917),G=n(80927);let S=(()=>{class g{constructor(c,f,m,d,b){this.router=c,this.Arout=f,this.toastr=m,this.profileService=d,this.coreService=b}canActivate(c,f){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),m){const d=c.data.allowedRoles;console.log(d,"allowedRoles");const b=m.some(h=>d.includes(h.codename));if(console.log(b),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const _=h?.permission,v=this.profileService.getUserDetails();(!v||v.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(c){return new(c||g)(l.LFG(p.F0),l.LFG(p.gz),l.LFG(s._W),l.LFG(e.J),l.LFG(G.p))},g.\u0275prov=l.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);