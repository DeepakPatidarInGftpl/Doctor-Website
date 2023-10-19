"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8775],{58775:(S,m,a)=>{a.r(m),a.d(m,{HsncodedetailsModule:()=>h});var n=a(36895),c=a(88996),e=a(94650),v=a(80927);function f(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA()()),2&t){const s=o.$implicit;e.xp6(2),e.Oqu(s.title)}}function _(t,o){if(1&t&&(e.TgZ(0,"ul",14)(1,"li")(2,"h4"),e._uU(3,"HSN Code"),e.qZA(),e.TgZ(4,"h6"),e._uU(5),e.qZA()(),e.TgZ(6,"li")(7,"h4"),e._uU(8,"Sub Category"),e.qZA(),e.TgZ(9,"div",15)(10,"table",16)(11,"thead")(12,"tr")(13,"th"),e._uU(14,"Title"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,f,3,1,"tr",17),e.qZA()()()()()),2&t){const s=e.oxw();e.xp6(5),e.Oqu(s.hsnDetails.hsn_code),e.xp6(11),e.Q6J("ngForOf",s.hsnDetails.subcategory)}}const r=function(t,o,s){return{"bg-lightgreen":t,"bg-lightred":o,"bg-lightyellow":s}};let D=(()=>{class t{constructor(s,i){this.coreService=s,this.Arout=i,this.imgUrl="https://pv.greatfuturetechno.com"}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getHSNcodeById(this.id).subscribe(s=>{this.hsnDetails=s})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(s){var i=document.createElement("script");i.src=s,i.async=!1,document.body.appendChild(i)}LoadScript(s){var i=document.createElement("script");i.src=s,i.async=!1,document.body.appendChild(i)}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(v.p),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hsncodedetails"]],decls:21,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/hsncode",1,"btn","btn-added"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],["class","product-bar",4,"ngIf"],[1,"d-flex","align-items-center","mx-3"],[1,"mb-0","d-inline","f-500","me-2","mb-2"],[1,"badges",3,"ngClass"],[1,"product-bar"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[4,"ngFor","ngForOf"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"HSN Code Details"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Full details of a HSN Code"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e._UZ(8,"img",4),e._uU(9,"Edit HSN Code "),e.qZA()()(),e.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),e.YNc(15,_,17,2,"ul",10),e.qZA()(),e.TgZ(16,"div",11)(17,"p",12),e._uU(18,"Is Active : "),e.qZA(),e.TgZ(19,"span",13),e._uU(20),e.qZA()()()()()),2&s&&(e.xp6(15),e.Q6J("ngIf",i.hsnDetails),e.xp6(4),e.Q6J("ngClass",e.kEZ(3,r,!0===i.hsnDetails.is_active,!1===i.hsnDetails.is_active,"Partial"===i.hsnDetails.is_active)),e.xp6(1),e.Oqu(i.hsnDetails.is_active))},dependencies:[n.mk,n.sg,n.O5,c.yS]}),t})();var d=a(30597);const g=JSON.parse(localStorage.getItem("auth"));let u;g&&g.map(o=>{"product"===o.content_type.app_label&&"hsncode"===o.content_type.model&&"view_hsncode"==o.codename&&(u=o.codename)});const l=[{path:"",component:D,canActivate:[d.l],data:{allowedRoles:["view_hsncode"]}}];let p=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(l),c.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.ez,p]}),t})()},30597:(S,m,a)=>{a.d(m,{l:()=>_});var n=a(94650),c=a(88996),e=a(97185),v=a(42917),f=a(80927);let _=(()=>{class r{constructor(d,g,u,l,p){this.router=d,this.Arout=g,this.toastr=u,this.profileService=l,this.coreService=p}canActivate(d,g){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),u){const l=d.data.allowedRoles;console.log(l,"allowedRoles");const p=u.some(h=>l.includes(h.codename));if(console.log(p),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const t=h?.permission,o=this.profileService.getUserDetails();(!o||o.length!==t.length)&&(this.profileService.setUserPermission(t),window.location.reload())}),p)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(d){return new(d||r)(n.LFG(c.F0),n.LFG(c.gz),n.LFG(e._W),n.LFG(v.J),n.LFG(f.p))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);