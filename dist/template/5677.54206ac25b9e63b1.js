"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5677],{55677:(_,d,s)=>{s.r(d),s.d(d,{BatchVariantProductDetailsModule:()=>u});var o=s(36895),c=s(88996),t=s(94650),g=s(80927);function p(a,r){if(1&a&&(t.TgZ(0,"div",13)(1,"ul",14)(2,"li")(3,"h4"),t._uU(4,"MRP"),t.qZA(),t.TgZ(5,"h6"),t._uU(6),t.qZA()(),t.TgZ(7,"li")(8,"h4"),t._uU(9,"Cost Price"),t.qZA(),t.TgZ(10,"h6"),t._uU(11),t.qZA()(),t.TgZ(12,"li")(13,"h4"),t._uU(14,"Selling Price Online"),t.qZA(),t.TgZ(15,"h6"),t._uU(16),t.qZA()(),t.TgZ(17,"li")(18,"h4"),t._uU(19,"Selling Price Offline"),t.qZA(),t.TgZ(20,"h6"),t._uU(21),t.qZA()(),t.TgZ(22,"li")(23,"h4"),t._uU(24,"Selling Price Vendor"),t.qZA(),t.TgZ(25,"h6"),t._uU(26),t.qZA()(),t.TgZ(27,"li")(28,"h4"),t._uU(29,"Stock"),t.qZA(),t.TgZ(30,"h6"),t._uU(31),t.qZA()(),t.TgZ(32,"li")(33,"h4"),t._uU(34,"Max Order Quantity"),t.qZA(),t.TgZ(35,"h6"),t._uU(36),t.qZA()(),t.TgZ(37,"li")(38,"h4"),t._uU(39,"Minimum Stock Threshold"),t.qZA(),t.TgZ(40,"h6"),t._uU(41),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(6),t.Oqu(e.batchDetail.mrp),t.xp6(5),t.Oqu(e.batchDetail.cost_price),t.xp6(5),t.Oqu(e.batchDetail.selling_price_online),t.xp6(5),t.Oqu(e.batchDetail.selling_price_offline),t.xp6(5),t.Oqu(e.batchDetail.selling_price_vendor),t.xp6(5),t.Oqu(e.batchDetail.stock),t.xp6(5),t.Oqu(e.batchDetail.max_order_quantity),t.xp6(5),t.Oqu(e.batchDetail.minimum_stock_threshold)}}const m=function(a,r,e){return{"bg-lightgreen":a,"bg-lightred":r,"bg-lightyellow":e}},n=[{path:"",component:(()=>{class a{constructor(e,i){this.Arout=e,this.coreService=i}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(e){var i=document.createElement("script");i.src=e,i.async=!1,document.body.appendChild(i)}LoadScript(e){var i=document.createElement("script");i.src=e,i.async=!1,document.body.appendChild(i)}getdata(){this.coreService.getBatchById(this.id).subscribe(e=>{this.batchDetail=e})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(c.gz),t.Y36(g.p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-batch-variant-product-details"]],decls:20,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],[1,"row"],[1,"col-lg-8","col-sm-12"],[1,"card"],[1,"card-body"],["class","productdetails",4,"ngIf"],[1,"d-flex","align-items-center","my-2","mx-3"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],[1,"productdetails"],[1,"product-bar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Batch Details"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Full details of a Batch"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Edit Batch "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),t.YNc(14,p,42,8,"div",9),t.qZA(),t.TgZ(15,"div",10)(16,"p",11),t._uU(17,"Is Active : "),t.qZA(),t.TgZ(18,"span",12),t._uU(19),t.qZA()()()()()),2&e&&(t.xp6(7),t.MGl("routerLink","//product/batchUpdate/",null==i.batchDetail?null:i.batchDetail.id,""),t.xp6(7),t.Q6J("ngIf",i.batchDetail),t.xp6(4),t.Q6J("ngClass",t.kEZ(4,m,!0===i.batchDetail.is_active,!1===i.batchDetail.is_active,"Partial"===i.batchDetail.is_active)),t.xp6(1),t.Oqu(i.batchDetail.is_active))},dependencies:[o.mk,o.O5,c.yS]}),a})(),canActivate:[s(30597).l],data:{allowedRoles:["view_batch"]}}];let h=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(n),c.Bz]}),a})(),u=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.ez,h]}),a})()},30597:(_,d,s)=>{s.d(d,{l:()=>m});var o=s(94650),c=s(88996),t=s(97185),g=s(42917),p=s(80927);let m=(()=>{class l{constructor(n,h,u,a,r){this.router=n,this.Arout=h,this.toastr=u,this.profileService=a,this.coreService=r}canActivate(n,h){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(a=>{this.userDetails=a,this.permissions=this.userDetails?.permission}),u){const a=n.data.allowedRoles;console.log(a,"allowedRoles");const r=u.some(e=>a.includes(e.codename));if(console.log(r),this.coreService.getProfile().subscribe(e=>{this.userDetails=e,this.profileService.setUserDetails(this.userDetails);const i=e?.permission,D=this.profileService.getUserDetails();(!D||D.length!==i.length)&&(this.profileService.setUserPermission(i),window.location.reload())}),r)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(n){return new(n||l)(o.LFG(c.F0),o.LFG(c.gz),o.LFG(t._W),o.LFG(g.J),o.LFG(p.p))},l.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);