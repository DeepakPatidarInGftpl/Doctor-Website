"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2500],{32500:(y,d,o)=>{o.r(d),o.d(d,{SubcategorydetailsModule:()=>u});var r=o(36895),c=o(88996),t=o(94650),p=o(80927);function h(e,a){if(1&e&&(t.TgZ(0,"ul",19)(1,"li")(2,"h4"),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"h6"),t._uU(5),t.qZA()(),t.TgZ(6,"li")(7,"h4"),t._uU(8,"Category"),t.qZA(),t.TgZ(9,"h6"),t._uU(10),t.qZA()()()),2&e){const s=t.oxw();t.xp6(5),t.Oqu(s.subcatDetails.title),t.xp6(5),t.Oqu(s.subcatDetails.category_id.title)}}const m=function(e,a,s){return{"bg-lightgreen":e,"bg-lightred":a,"bg-lightyellow":s}},n=[{path:"",component:(()=>{class e{constructor(s,i){this.coreService=s,this.Arout=i,this.imgUrl="https://pv.greatfuturetechno.com"}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getProductSubcategoryById(this.id).subscribe(s=>{this.subcatDetails=s})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(s){var i=document.createElement("script");i.src=s,i.async=!1,document.body.appendChild(i)}LoadScript(s){var i=document.createElement("script");i.src=s,i.async=!1,document.body.appendChild(i)}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(p.p),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-subcategorydetails"]],decls:30,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/subcategorylist",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"row"],[1,"col-lg-8","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],["class","product-bar",4,"ngIf"],[1,"d-flex","align-items-center","mx-3","mb-1"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],[1,"col-lg-4","col-sm-12"],[1,"slider-product-details"],[1,"owl-carousel","owl-theme","product-slide"],[1,"slider-product"],["alt","img",2,"width","20%",3,"src"],[1,"product-bar"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Product Sub Category Details"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Full details of a Product Sub Category"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9," Product Sub Category "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),t.YNc(15,h,11,2,"ul",10),t.qZA()(),t.TgZ(16,"div",11)(17,"p",12),t._uU(18,"Is Active : "),t.qZA(),t.TgZ(19,"span",13),t._uU(20),t.qZA()()()(),t.TgZ(21,"div",14)(22,"div",7)(23,"div",8)(24,"div",15)(25,"div",16)(26,"div",17),t._UZ(27,"img",18),t.TgZ(28,"h4"),t._uU(29),t.qZA()()()()()()()()),2&s&&(t.xp6(15),t.Q6J("ngIf",i.subcatDetails),t.xp6(4),t.Q6J("ngClass",t.kEZ(5,m,!0===i.subcatDetails.is_active,!1===i.subcatDetails.is_active,"Partial"===i.subcatDetails.is_active)),t.xp6(1),t.Oqu(i.subcatDetails.is_active),t.xp6(7),t.Q6J("src",i.imgUrl+i.subcatDetails.image,t.LSH),t.xp6(2),t.Oqu(i.subcatDetails.title))},dependencies:[r.mk,r.O5,c.yS],styles:[".second-list[_ngcontent-%COMP%]{width:70%}.second-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d8d8d8}.img2[_ngcontent-%COMP%]{height:100px;width:100px}.img-div[_ngcontent-%COMP%]{width:70%;text-align:center;padding-top:10px}"]}),e})(),canActivate:[o(30597).l],data:{allowedRoles:["view_productsubcategory"]}}];let g=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(n),c.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,g]}),e})()},30597:(y,d,o)=>{o.d(d,{l:()=>m});var r=o(94650),c=o(88996),t=o(97185),p=o(42917),h=o(80927);let m=(()=>{class l{constructor(n,g,u,e,a){this.router=n,this.Arout=g,this.toastr=u,this.profileService=e,this.coreService=a}canActivate(n,g){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(e=>{this.userDetails=e,this.permissions=this.userDetails?.permission}),u){const e=n.data.allowedRoles;console.log(e,"allowedRoles");const a=u.some(s=>e.includes(s.codename));if(console.log(a),this.coreService.getProfile().subscribe(s=>{this.userDetails=s,this.profileService.setUserDetails(this.userDetails);const i=s?.permission,b=this.profileService.getUserDetails();(!b||b.length!==i.length)&&(this.profileService.setUserPermission(i),window.location.reload())}),a)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(n){return new(n||l)(r.LFG(c.F0),r.LFG(c.gz),r.LFG(t._W),r.LFG(p.J),r.LFG(h.p))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);