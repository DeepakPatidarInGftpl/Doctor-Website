"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1920],{51920:(b,p,s)=>{s.r(p),s.d(p,{SubcategoryGroupDetailsModule:()=>A});var i=s(36895),l=s(88996),t=s(94650),h=s(80927);function u(e,a){if(1&e&&(t.TgZ(0,"ul")(1,"li")(2,"h4"),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"h6"),t._uU(5),t.qZA()(),t.TgZ(6,"li")(7,"h4"),t._uU(8,"Image"),t.qZA(),t.TgZ(9,"div",18),t._UZ(10,"img",19),t.qZA()()()),2&e){const o=t.oxw(2);t.xp6(5),t.Oqu(o.subcategoryDetails.category.title),t.xp6(5),t.Q6J("src",o.imgUrl+o.subcategoryDetails.category.image,t.LSH)}}function _(e,a){if(1&e&&(t.TgZ(0,"ul")(1,"li")(2,"h6"),t._uU(3),t.qZA()()()),2&e){const o=a.$implicit;t.xp6(3),t.Oqu(o.title+",")}}function c(e,a){if(1&e&&(t.TgZ(0,"ul")(1,"li")(2,"h4"),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"h6"),t._uU(5),t.qZA()(),t.TgZ(6,"li")(7,"h4"),t._uU(8,"Category Id"),t.qZA(),t.TgZ(9,"h6"),t._uU(10),t.qZA()(),t.TgZ(11,"li")(12,"h4"),t._uU(13,"Image"),t.qZA(),t.TgZ(14,"div",18),t._UZ(15,"img",19),t.qZA()()()),2&e){const o=a.$implicit,r=t.oxw(2);t.xp6(5),t.Oqu(o.title),t.xp6(5),t.Oqu(o.category_id.title),t.xp6(5),t.Q6J("src",r.imgUrl+o.image,t.LSH)}}function d(e,a){if(1&e&&(t.TgZ(0,"ul",14)(1,"li")(2,"h4"),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"h6"),t._uU(5),t.qZA()(),t.TgZ(6,"li")(7,"h4"),t._uU(8,"Category"),t.qZA(),t.TgZ(9,"div",15),t.YNc(10,u,11,2,"ul",16),t.qZA()(),t.TgZ(11,"li")(12,"h4"),t._uU(13,"Feature Group"),t.qZA(),t.TgZ(14,"div",15),t.YNc(15,_,4,1,"ul",17),t.qZA()(),t.TgZ(16,"li")(17,"h4"),t._uU(18,"Sub Categories"),t.qZA(),t.TgZ(19,"div",15),t.YNc(20,c,16,3,"ul",17),t.qZA()()()),2&e){const o=t.oxw();t.xp6(5),t.Oqu(o.subcategoryDetails.title),t.xp6(5),t.Q6J("ngIf",o.subcategoryDetails.category),t.xp6(5),t.Q6J("ngForOf",o.subcategoryDetails.feature_group),t.xp6(5),t.Q6J("ngForOf",o.subcategoryDetails.subcategories)}}const n=function(e,a,o){return{"bg-lightgreen":e,"bg-lightred":a,"bg-lightyellow":o}};let m=(()=>{class e{constructor(o,r){this.coreService=o,this.Arout=r,this.imgUrl="https://pv.greatfuturetechno.com"}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getSubcategoryGroupById(this.id).subscribe(o=>{this.subcategoryDetails=o})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(o){var r=document.createElement("script");r.src=o,r.async=!1,document.body.appendChild(r)}LoadScript(o){var r=document.createElement("script");r.src=o,r.async=!1,document.body.appendChild(r)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h.p),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-subcategory-group-details"]],decls:21,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/subCategoryGroup",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],["class","product-bar",4,"ngIf"],[1,"d-flex","align-items-center","mx-3"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],[1,"product-bar"],[1,"second-list"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"img-div"],["alt","",1,"img2",3,"src"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Subcategory Group Details Details"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Full details of a Subcategory Group Details"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Subcategory Group "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),t.YNc(15,d,21,4,"ul",10),t.qZA()(),t.TgZ(16,"div",11)(17,"p",12),t._uU(18,"Is Active : "),t.qZA(),t.TgZ(19,"span",13),t._uU(20),t.qZA()()()()()),2&o&&(t.xp6(15),t.Q6J("ngIf",r.subcategoryDetails),t.xp6(4),t.Q6J("ngClass",t.kEZ(3,n,!0===r.subcategoryDetails.is_active,!1===r.subcategoryDetails.is_active,"Partial"===r.subcategoryDetails.is_active)),t.xp6(1),t.Oqu(r.subcategoryDetails.is_active))},dependencies:[i.mk,i.sg,i.O5,l.yS],styles:[".second-list[_ngcontent-%COMP%]{width:70%}.second-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d8d8d8}.img2[_ngcontent-%COMP%]{height:100px;width:100px}.img-div[_ngcontent-%COMP%]{width:70%;text-align:center;padding-top:10px}"]}),e})();var y=s(30597);const g=JSON.parse(localStorage.getItem("auth"));let Z;g&&g.permission&&g.permission.map(a=>{"product"===a.content_type.app_label&&"subcategorygroup"===a.content_type.model&&"view_subcategorygroup"==a.codename&&(Z=a.codename,console.log(Z))});const f=[{path:"",component:m,canActivate:[y.l],data:{allowedRoles:[Z]}}];let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(f),l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,v]}),e})()},30597:(b,p,s)=>{s.d(p,{l:()=>h});var i=s(94650),l=s(88996),t=s(97185);let h=(()=>{class u{constructor(c,d,n){this.router=c,this.Arout=d,this.toastr=n}canActivate(c,d){const n=JSON.parse(localStorage.getItem("auth"));if(n&&n.user){const m=c.data.allowedRoles;console.log(m,"allowedRoles");const y=n.permission.some(g=>m.includes(g.codename));if(console.log(y),y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return u.\u0275fac=function(c){return new(c||u)(i.LFG(l.F0),i.LFG(l.gz),i.LFG(t._W))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);