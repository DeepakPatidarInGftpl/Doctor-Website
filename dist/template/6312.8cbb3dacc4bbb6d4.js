"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6312],{56312:(Z,C,n)=>{n.r(C),n.d(C,{EditSubcategoryGroupModule:()=>P});var c=n(96814),l=n(74408),i=n(56223),e=n(19212),F=n(44293),v=n(58763);function d(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Enter SubCategory Group"),e.qZA())}function A(o,s){if(1&o&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&o){const r=s.$implicit;e.s9C("id",r.id),e.Q6J("value",r.id),e.xp6(1),e.Oqu(r.title)}}function m(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Category"),e.qZA())}const b=o=>({"is-invalid":o});function f(o,s){if(1&o){const r=e.EpF();e.TgZ(0,"a",34)(1,"input",35,12),e.NdJ("change",function(t){e.CHM(r);const u=e.oxw();return e.KtG(u.onCheckChange(t))}),e.qZA(),e.TgZ(3,"label",36),e.NdJ("click",function(t){e.CHM(r);const u=e.oxw();return e.KtG(u.onLabelClick(t))}),e._uU(4),e.qZA()()}if(2&o){const r=s.$implicit,a=s.index,t=e.oxw();e.xp6(1),e.Q6J("value",r.id)("checked",t.selectedSubCats.includes(r.id)||t.selectedSubCategoryIds.includes(r.id))("ngClass",e.VKq(6,b,t.f.subcategories.touched&&t.f.subcategories.invalid))("id","checkbox-"+a),e.xp6(2),e.Q6J("for","checkbox-"+a),e.xp6(1),e.Oqu(r.title)}}function g(o,s){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Oqu(r.selectedSubcat+" Subcategory Selected")}}function _(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function y(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select subcategory "),e.qZA())}function S(o,s){if(1&o){const r=e.EpF();e.TgZ(0,"a",34)(1,"input",37),e.NdJ("change",function(t){e.CHM(r);const u=e.oxw();return e.KtG(u.onCheckFeature(t))}),e.qZA(),e.TgZ(2,"label",36),e.NdJ("click",function(t){e.CHM(r);const u=e.oxw();return e.KtG(u.onLabelClick(t))}),e._uU(3),e.qZA()()}if(2&o){const r=s.$implicit,a=s.index,t=e.oxw();e.xp6(1),e.Q6J("value",r.id)("checked",t.selectedFeature.includes(r.id)||t.selectedFeatureIds.includes(r.id))("id","checkboxFeat-"+a),e.xp6(1),e.Q6J("for","checkboxFeat-"+a),e.xp6(1),e.Oqu(r.title)}}function G(o,s){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Oqu(r.selectedFeatureGrp+" Feature group selected")}}function x(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Feature Group "),e.qZA())}function M(o,s){1&o&&(e.TgZ(0,"span",32),e._uU(1,"Select Feature Group "),e.qZA())}function E(o,s){if(1&o&&e._UZ(0,"img",38),2&o){const r=e.oxw();e.Q6J("src",r.url,e.LSH)}}function I(o,s){if(1&o&&e._UZ(0,"img",38),2&o){const r=e.oxw();e.Q6J("src",r.imgUrl+(null==r.updateData?null:r.updateData.image),e.LSH)}}function O(o,s){1&o&&(e.TgZ(0,"button",39),e._uU(1,"Submit"),e.qZA())}function w(o,s){1&o&&(e.TgZ(0,"button",40),e._UZ(1,"span",41),e._uU(2,"\xa0Submit"),e.qZA())}const T=()=>({standalone:!0}),N=[{path:"",component:(()=>{class o{constructor(r,a,t,u,p){this.fb=r,this.router=a,this.coreService=t,this.Arout=u,this.toastr=p,this.imgUrl="https://pv.greatfuturetechno.com",this.selectedSubCats=[],this.selectedFeature=[],this.searchFeatureGroup="",this.featureGroup=[],this.subcatbyCategory=[],this.searchSubcategory="",this.selectedSubcat=0,this.selectedSubCategoryIds=[],this.arrayFeatutreGroup=[],this.selectedFeatureGrp=0,this.selectedFeatureIds=[],this.loaders=!1}get f(){return this.subCategoryGroupForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.subCategoryGroupForm=this.fb.group({title:new i.NI("",i.kI.required),category:new i.NI("",i.kI.required),subcategories:new i.Oe([]),feature_group:new i.Oe([]),image:new i.NI("")}),this.getCategory(),this.coreService.getSubcategoryGroupById(this.id).subscribe(r=>{this.updateData=r,this.subCategoryGroupForm.patchValue({title:r.title}),this.subCategoryGroupForm.get("category").patchValue(r?.category?.id),this.getSubcategoryByCategory(r?.category?.id),this.selectedSubCats=r?.subcategories?.map(a=>a.id),this.selectedFeature=r?.feature_group?.map(a=>a.id),this.getFeatureGroup()})}getCategory(){this.coreService.getCategory().subscribe(r=>{this.categories=r})}getFeatureGroup(){this.coreService.getFeatureGroup().subscribe(r=>{this.featureGroup=r,this.filteredFeatureGroupData=this.featureGroup.slice(),this.filterFeatureGroupData(),this.featureGroup.map(a=>{this.selectedFeatureGrp=this.selectedFeature.length,this.selectedFeature.includes(a.id)&&this.subCategoryGroupForm.get("feature_group").push(new i.NI(a.id))})})}filterFeatureGroupData(){let r=this.featureGroup.slice();if(this.searchFeatureGroup){const a=this.searchFeatureGroup.toLowerCase();r=r.filter(t=>(t?.title.toLowerCase()).includes(a))}this.filteredFeatureGroupData=r}getSubcategoryByCategory(r){this.coreService.getSubcategoryByCategory(r).subscribe(a=>{this.subcatbyCategory=a,this.filteredSubcategoryData=this.subcatbyCategory.slice(),this.filterSubcategoryData(),this.selectedSubcat=this.selectedSubCats.length,this.subcatbyCategory.map(t=>{this.selectedSubCats.includes(t.id)&&this.subCategoryGroupForm.get("subcategories").push(new i.NI(t.id))})})}filterSubcategoryData(){let r=this.subcatbyCategory.slice();if(this.searchSubcategory){const a=this.searchSubcategory.toLowerCase();r=r.filter(t=>(t?.title.toLowerCase()).includes(a))}this.filteredSubcategoryData=r}selectImg(r){const a=r.target.files[0];if(a){const t=new FileReader;t.readAsDataURL(a),t.onload=()=>{this.url=t.result}}this.subCategoryGroupForm.patchValue({image:a}),this.subCategoryGroupForm.get("image")?.updateValueAndValidity()}onCheckChange(r){const a=this.subCategoryGroupForm.get("subcategories");if(r.target.checked)a.push(new i.NI(parseInt(r.target.value))),this.selectedSubcat++,this.selectedSubCategoryIds=a.value;else{let t=0;a.controls.forEach(u=>{if(u.value==r.target.value)return a.removeAt(t),void this.selectedSubcat--;t++})}}onCheckFeature(r){const a=this.subCategoryGroupForm.get("feature_group");if(r.target.checked)a.push(new i.NI(parseInt(r.target.value))),this.selectedFeatureGrp++,this.selectedFeatureIds=a.value;else{let t=0;a.controls.forEach(u=>{if(u.value==r.target.value)return a.removeAt(t),void this.selectedSubcat--;t++})}}submit(){if(this.subCategoryGroupForm.valid){this.loaders=!0;let r=new FormData;r.append("title",this.subCategoryGroupForm.controls.title.value),r.append("category",this.subCategoryGroupForm.controls.category.value),r.append("subcategories",JSON.stringify(this.subCategoryGroupForm.get("subcategories")?.value)),r.append("feature_group",JSON.stringify(this.subCategoryGroupForm.get("feature_group")?.value));const a=this.subCategoryGroupForm.get("image")?.value;a&&a instanceof File?(r.append("image",a),this.coreService.editSubCategoryGroup(r,this.id).subscribe(t=>{t.success&&(this.toastr.success(t.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},t=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==t.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==t.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})):this.coreService.editSubCategoryGroup(r,this.id).subscribe(t=>{t.success&&(this.toastr.success(t.msg),this.loaders=!1,this.router.navigate(["/product/subCategoryGroup"]))},t=>{this.loaders=!1,"Your Selected subcategories is Not Avaliable"==t.error.msg&&(this.errormessFSubC="This Field Is Required",setTimeout(()=>{this.errormessFSubC=""},3e3)),"Your Selected FeatureGroup is Not Avaliable"==t.error.msg&&(this.errormessFFG="This Field Is Required",setTimeout(()=>{this.errormessFFG=""},3e3))})}else this.loaders=!1,this.subCategoryGroupForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get title(){return this.subCategoryGroupForm.get("title")}get category(){return this.subCategoryGroupForm.get("category")}get subcategories(){return this.subCategoryGroupForm.get("subcategories")}get feature_group(){return this.subCategoryGroupForm.get("feature_group")}onLabelClick(r){r.stopPropagation()}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(i.qu),e.Y36(l.F0),e.Y36(F.p),e.Y36(l.gz),e.Y36(v._W))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-subcategory-group"]],decls:80,vars:22,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"image-upload","mb-2"],["type","text","formControlName","title","placeholder","SubCategory Group Name"],["class","text-danger",4,"ngIf"],["formControlName","category",1,"w-100",3,"change"],["categoryValue",""],["value","","disabled",""],[3,"id","value",4,"ngFor","ngForOf"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search subcategory group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","search feature group",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//product/subCategoryGroup",1,"btn","btn-cancel"],[1,"text-danger"],[3,"id","value"],[1,"dropdown-item"],["type","checkbox","formArrayName","subcategories",2,"margin-right","5px",3,"value","checked","ngClass","id","change"],[2,"margin-bottom","0",3,"for","click"],["type","checkbox","formArrayName","feature_group",2,"margin-right","5px",3,"value","checked","id","change"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,t){if(1&a){const u=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Update Sub Category Group"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Edit new Sub Category Group"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(10,"div",4)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"SubCategory Group Name"),e.qZA(),e.TgZ(15,"div",8),e._UZ(16,"input",9),e.qZA(),e.YNc(17,d,2,0,"span",10),e.qZA()(),e.TgZ(18,"div",6)(19,"div",7)(20,"label"),e._uU(21,"Select Category"),e.qZA(),e.TgZ(22,"div",8)(23,"select",11,12),e.NdJ("change",function(){e.CHM(u);const h=e.MAs(24);return e.KtG(t.getSubcategoryByCategory(h.value))}),e.TgZ(25,"option",13),e._uU(26,"Select Category"),e.qZA(),e.YNc(27,A,2,3,"option",14),e.qZA()(),e.YNc(28,m,2,0,"span",10),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Select Subcategory"),e.qZA(),e.TgZ(33,"div",15)(34,"button",16),e._uU(35,"Select Subcategory"),e.qZA(),e.TgZ(36,"ul",17)(37,"li")(38,"input",18),e.NdJ("ngModelChange",function(h){return t.searchSubcategory=h})("ngModelChange",function(){return t.filterSubcategoryData()}),e.qZA()(),e.TgZ(39,"li"),e.YNc(40,f,5,8,"a",19),e.qZA()()(),e.YNc(41,g,2,1,"p",20)(42,_,2,0,"span",10)(43,y,2,0,"span",10),e.qZA()(),e.TgZ(44,"div",6)(45,"div",7)(46,"label"),e._uU(47,"Select Feature Group*"),e.qZA(),e.TgZ(48,"div",15)(49,"button",16),e._uU(50,"Select Feature Group"),e.qZA(),e.TgZ(51,"ul",17)(52,"li")(53,"input",21),e.NdJ("ngModelChange",function(h){return t.searchFeatureGroup=h})("ngModelChange",function(){return t.filterFeatureGroupData()}),e.qZA()(),e.TgZ(54,"li"),e.YNc(55,S,4,5,"a",19),e.qZA()(),e.YNc(56,G,2,1,"p",20),e.qZA(),e.YNc(57,x,2,0,"span",10)(58,M,2,0,"span",10),e.qZA()(),e.TgZ(59,"div",6)(60,"div",7)(61,"label"),e._uU(62,"Subcategory Group Image*"),e.qZA(),e.TgZ(63,"div",4)(64,"div",22)(65,"div",23)(66,"input",24),e.NdJ("change",function(h){return t.selectImg(h)}),e.qZA(),e.TgZ(67,"div",25),e._UZ(68,"img",26),e.TgZ(69,"h4"),e._uU(70,"Drag and drop a file to upload"),e.qZA()()()(),e.TgZ(71,"div",22),e.YNc(72,E,1,1,"img",27)(73,I,1,1,"img",27),e.qZA()()()(),e.TgZ(74,"div",28)(75,"div",28),e.YNc(76,O,2,0,"button",29)(77,w,3,0,"button",30),e.TgZ(78,"a",31),e._uU(79,"Cancel"),e.qZA()()()()()()()()}2&a&&(e.xp6(9),e.Q6J("formGroup",t.subCategoryGroupForm),e.xp6(8),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(10),e.Q6J("ngForOf",t.categories),e.xp6(1),e.Q6J("ngIf",t.category&&t.category.invalid&&t.category.touched),e.xp6(10),e.Q6J("ngModel",t.searchSubcategory)("ngModelOptions",e.DdM(20,T)),e.xp6(2),e.Q6J("ngForOf",t.filteredSubcategoryData),e.xp6(1),e.Q6J("ngIf",t.selectedSubcat>0),e.xp6(1),e.Q6J("ngIf",t.subcategories&&t.subcategories.invalid&&t.subcategories.touched),e.xp6(1),e.Q6J("ngIf",t.errormessFSubC),e.xp6(10),e.Q6J("ngModel",t.searchFeatureGroup)("ngModelOptions",e.DdM(21,T)),e.xp6(2),e.Q6J("ngForOf",t.filteredFeatureGroupData),e.xp6(1),e.Q6J("ngIf",t.selectedFeatureGrp>0),e.xp6(1),e.Q6J("ngIf",t.subcategories&&t.subcategories.invalid&&t.subcategories.touched),e.xp6(1),e.Q6J("ngIf",t.errormessFFG),e.xp6(14),e.Q6J("ngIf",t.url),e.xp6(1),e.Q6J("ngIf",!t.url),e.xp6(3),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[c.mk,c.sg,c.O5,l.rH,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.On,i.sg,i.u,i.CE],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.p_img[_ngcontent-%COMP%]{margin-right:3rem!important;height:100px}']})}return o})(),canActivate:[n(1971).l],data:{allowedRoles:["change_subcategorygroup"]}}];let D=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(N),l.Bz]})}return o})();var q=n(16047);let P=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[c.ez,D,q.I]})}return o})()},1971:(Z,C,n)=>{n.d(C,{l:()=>v});var c=n(19212),l=n(74408),i=n(58763),e=n(41789),F=n(44293);let v=(()=>{class d{constructor(m,b,f,g,_){this.router=m,this.Arout=b,this.toastr=f,this.profileService=g,this.coreService=_}canActivate(m,b){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),f){const g=m.data.allowedRoles;console.log(g,"allowedRoles");const _=f.some(y=>g.includes(y.codename));if(console.log(_),this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails);const S=y?.permission,G=this.profileService.getUserDetails();(!G||G.length!==S.length)&&(this.profileService.setUserPermission(S),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}static#e=this.\u0275fac=function(b){return new(b||d)(c.LFG(l.F0),c.LFG(l.gz),c.LFG(i._W),c.LFG(e.J),c.LFG(F.p))};static#t=this.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);