"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1920],{51920:(Z,v,l)=>{l.r(v),l.d(v,{SubcategoryGroupDetailsModule:()=>T});var i=l(36895),c=l(88996),e=l(94650),D=l(80927),m=l(3848);function f(o,a){if(1&o&&(e.TgZ(0,"ul",12)(1,"li")(2,"h4",13),e._uU(3,"Title"),e.qZA(),e.TgZ(4,"h6"),e._uU(5),e.qZA()()()),2&o){const s=a.$implicit;e.xp6(5),e.Oqu(null==s?null:s.title)}}function u(o,a){if(1&o&&(e.TgZ(0,"div",10)(1,"div",11)(2,"ul",12)(3,"li")(4,"h4",13),e._uU(5,"Title"),e.qZA(),e.TgZ(6,"h6"),e._uU(7),e.qZA()(),e.TgZ(8,"li")(9,"h4",13),e._uU(10,"Image"),e.qZA(),e._UZ(11,"img",14),e.qZA()()()()),2&o){const s=a.$implicit,t=e.oxw();e.xp6(7),e.Oqu(null==s?null:s.title),e.xp6(4),e.Q6J("src",t.imgUrl+(null==s?null:s.image),e.LSH)}}const S=function(o,a,s){return{"bg-lightgreen":o,"bg-lightred":a,"bg-lightyellow":s}};let g=(()=>{class o{constructor(s,t){this.coreService=s,this.Arout=t,this.imgUrl="https://pv.greatfuturetechno.com"}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getSubcategoryGroupById(this.id).subscribe(s=>{this.subcategoryDetails=s,console.log(this.subcategoryDetails?.category)})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(s){var t=document.createElement("script");t.src=s,t.async=!1,document.body.appendChild(t)}LoadScript(s){var t=document.createElement("script");t.src=s,t.async=!1,document.body.appendChild(t)}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(D.p),e.Y36(c.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-subcategory-group-details"]],decls:60,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/subCategoryGroup",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["label","General Details"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"],[1,"h4"],["alt","product",2,"width","20%",3,"src"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Category"],["label","Feature Group"],["class","product-bar",4,"ngFor","ngForOf"],["label","Subcategory"],["class","card-body",4,"ngFor","ngForOf"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Subcategory Group Details Details"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Full details of a Subcategory Group Details"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e._UZ(8,"img",4),e._uU(9,"Subcategory Group "),e.qZA()()(),e.TgZ(10,"mat-tab-group",5)(11,"mat-tab",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"ul",12)(18,"li")(19,"h4",13),e._uU(20,"Title"),e.qZA(),e.TgZ(21,"h6"),e._uU(22),e.qZA()(),e.TgZ(23,"li")(24,"h4",13),e._uU(25,"Image"),e.qZA(),e._UZ(26,"img",14),e.qZA()()()(),e.TgZ(27,"div",15)(28,"p",16),e._uU(29,"Is Active : "),e.qZA(),e.TgZ(30,"span",17),e._uU(31),e.qZA()()()()()(),e.TgZ(32,"mat-tab",18)(33,"div",7)(34,"div",8)(35,"div",9)(36,"div",10)(37,"div",11)(38,"ul",12)(39,"li")(40,"h4",13),e._uU(41,"Title"),e.qZA(),e.TgZ(42,"h6"),e._uU(43),e.qZA()(),e.TgZ(44,"li")(45,"h4",13),e._uU(46,"Image"),e.qZA(),e._UZ(47,"img",14),e.qZA()()()()()()()(),e.TgZ(48,"mat-tab",19)(49,"div",7)(50,"div",8)(51,"div",9)(52,"div",10)(53,"div",11),e.YNc(54,f,6,1,"ul",20),e.qZA()()()()()(),e.TgZ(55,"mat-tab",21)(56,"div",7)(57,"div",8)(58,"div",9),e.YNc(59,u,12,2,"div",22),e.qZA()()()()()),2&s&&(e.xp6(22),e.Oqu(null==t.subcategoryDetails?null:t.subcategoryDetails.title),e.xp6(4),e.Q6J("src",t.imgUrl+(null==t.subcategoryDetails?null:t.subcategoryDetails.image),e.LSH),e.xp6(4),e.Q6J("ngClass",e.kEZ(8,S,!0===(null==t.subcategoryDetails?null:t.subcategoryDetails.is_active),!1===(null==t.subcategoryDetails?null:t.subcategoryDetails.is_active),"Partial"===(null==t.subcategoryDetails?null:t.subcategoryDetails.is_active))),e.xp6(1),e.Oqu(null==t.subcategoryDetails?null:t.subcategoryDetails.is_active),e.xp6(12),e.Oqu(null==t.subcategoryDetails||null==t.subcategoryDetails.category?null:t.subcategoryDetails.category.title),e.xp6(4),e.Q6J("src",t.imgUrl+(null==t.subcategoryDetails||null==t.subcategoryDetails.category?null:t.subcategoryDetails.category.image),e.LSH),e.xp6(7),e.Q6J("ngForOf",null==t.subcategoryDetails?null:t.subcategoryDetails.feature_group),e.xp6(5),e.Q6J("ngForOf",null==t.subcategoryDetails?null:t.subcategoryDetails.subcategories))},dependencies:[i.mk,i.sg,c.yS,m.SP,m.uX],styles:[".second-list[_ngcontent-%COMP%]{width:70%}.second-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d8d8d8}.img2[_ngcontent-%COMP%]{height:100px;width:100px}.img-div[_ngcontent-%COMP%]{width:70%;text-align:center;padding-top:10px}.h4[_ngcontent-%COMP%]{font-weight:bolder}"]}),o})();var h=l(30597);const n=JSON.parse(localStorage.getItem("auth"));let r;n&&n.permission&&n.permission.map(a=>{"product"===a.content_type.app_label&&"subcategorygroup"===a.content_type.model&&"view_subcategorygroup"==a.codename&&(r=a.codename,console.log(r))});const d=[{path:"",component:g,canActivate:[h.l],data:{allowedRoles:["view_subcategorygroup"]}}];let p=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(d),c.Bz]}),o})();var y=l(24006),b=l(15869),A=l(97392),U=l(84385),G=l(56709);let T=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.ez,p,y.u5,y.UX,b.FP,m.Nh,A.Ps,U.LD,G.p9]}),o})()},30597:(Z,v,l)=>{l.d(v,{l:()=>f});var i=l(94650),c=l(88996),e=l(97185),D=l(42917),m=l(80927);let f=(()=>{class u{constructor(g,h,n,r,d){this.router=g,this.Arout=h,this.toastr=n,this.profileService=r,this.coreService=d}canActivate(g,h){const n=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(r=>{this.userDetails=r,this.permissions=this.userDetails?.permission}),n){const r=g.data.allowedRoles;console.log(r,"allowedRoles");const d=n.some(p=>r.includes(p.codename));if(this.coreService.getProfile().subscribe(p=>{this.userDetails=p,this.profileService.setUserDetails(this.userDetails);const y=p?.permission,b=this.profileService.getUserDetails();(!b||b.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),console.log(d),d)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(g){return new(g||u)(i.LFG(c.F0),i.LFG(c.gz),i.LFG(e._W),i.LFG(D.J),i.LFG(m.p))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);