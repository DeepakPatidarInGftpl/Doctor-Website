"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[51920],{51920:(A,v,a)=>{a.r(v),a.d(v,{SubcategoryGroupDetailsModule:()=>w});var r=a(36895),g=a(4392),t=a(94650),T=a(80927),u=a(24006),b=a(3848),c=a(97392),D=a(54333),d=a(54040);function Z(i,l){if(1&i&&(t.TgZ(0,"div",12)(1,"div",13)(2,"ul",14)(3,"li")(4,"h4",15),t._uU(5,"Title"),t.qZA(),t.TgZ(6,"h6"),t._uU(7),t.qZA()(),t.TgZ(8,"li")(9,"h4",15),t._uU(10,"Image"),t.qZA(),t._UZ(11,"img",16),t.qZA()()()()),2&i){const e=l.$implicit,o=t.oxw();t.xp6(7),t.Oqu(null==e?null:e.title),t.xp6(4),t.Q6J("src",o.imgUrl+(null==e?null:e.image),t.LSH)}}function _(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",45),t._uU(3),t.qZA(),t.TgZ(4,"td",45),t._uU(5),t.qZA(),t.TgZ(6,"td",45),t._uU(7),t.qZA(),t.TgZ(8,"td",45),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()),2&i){const e=l.$implicit,o=l.index;t.xp6(3),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function p(i,l){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",46)(3,"p",47),t._uU(4,"Data not available"),t.qZA()()()())}const f=function(i,l){return{itemsPerPage:i,currentPage:l}};function m(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-tab",24)(1,"div",11)(2,"div",12)(3,"div",25)(4,"table",26)(5,"thead")(6,"tr")(7,"th",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.sort("id"))}),t._uU(8,"# "),t._UZ(9,"i",28),t.qZA(),t.TgZ(10,"th",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.sort("id"))}),t._uU(11,"User "),t._UZ(12,"i",28),t.qZA(),t.TgZ(13,"th",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.sort("id"))}),t._uU(14,"Operation Type "),t._UZ(15,"i",28),t.qZA(),t.TgZ(16,"th",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.sort("id"))}),t._uU(17,"Date Time "),t._UZ(18,"i",28),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,_,11,7,"ng-container",29),t.ALo(21,"paginate"),t.ALo(22,"orderBy"),t.qZA(),t.YNc(23,p,5,0,"tbody",30),t.qZA(),t.TgZ(24,"div",9)(25,"div",31)(26,"div",32),t._uU(27," Show per page "),t.TgZ(28,"select",33,34),t.NdJ("ngModelChange",function(s){t.CHM(e);const y=t.oxw();return t.KtG(y.itemsPerPage=s)})("change",function(){t.CHM(e);const s=t.MAs(29),y=t.oxw();return t.KtG(y.changePg(s.value))}),t.TgZ(30,"option",35),t._uU(31,"10"),t.qZA(),t.TgZ(32,"option",36),t._uU(33,"20"),t.qZA(),t.TgZ(34,"option",37),t._uU(35,"30"),t.qZA(),t.TgZ(36,"option",38),t._uU(37,"50"),t.qZA(),t.TgZ(38,"option",39),t._uU(39,"100"),t.qZA(),t.TgZ(40,"option",40),t._uU(41,"All"),t.qZA()()()(),t.TgZ(42,"div",41)(43,"div",42)(44,"pagination-controls",43),t.NdJ("pageChange",function(s){t.CHM(e);const y=t.oxw();return t.KtG(y.p=s)}),t.qZA(),t.TgZ(45,"div",44),t._uU(46),t.qZA()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",t.xi3(21,6,t.Dn7(22,9,e.filteredData,e.key,e.reverse),t.WLB(13,f,e.itemsPerPage,e.p))),t.xp6(3),t.Q6J("ngIf",0==(null==e.filteredData?null:e.filteredData.length)),t.xp6(5),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const n=function(i,l,e){return{"bg-lightgreen":i,"bg-lightred":l,"bg-lightyellow":e}};let h=(()=>{class i{constructor(e,o,s){this.coreService=e,this.Arout=o,this.location=s,this.imgUrl="https://pv.greatfuturetechno.com",this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getSubcategoryGroupById(this.id).subscribe(e=>{this.subcategoryDetails=e,this.filteredData=this.subcategoryDetails?.logs.slice(),this.filterData()})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(e){var o=document.createElement("script");o.src=e,o.async=!1,document.body.appendChild(o)}LoadScript(e){var o=document.createElement("script");o.src=e,o.async=!1,document.body.appendChild(o)}goBack(){this.location.back()}sort(e){this.key=e,this.reverse=!this.reverse}filterData(){let e=this.subcategoryDetails?.logs.slice();this.filterOpertion&&(e=e.filter(o=>o?.operation_type===this.filterOpertion)),this.filteredData=e}clearFilter(){this.filterOpertion=null,this.filterData()}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.p),t.Y36(g.gz),t.Y36(r.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-subcategory-group-details"]],decls:56,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["label","General Details"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"],[1,"h4"],["alt","product",2,"width","20%",3,"src"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Category"],["label","Subcategory"],["class","card-body",4,"ngFor","ngForOf"],["label","Logs",4,"ngIf"],["label","Logs"],[1,"table-responsive"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"td"],["colspan","10"],[1,"center-textt"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t.NdJ("click",function(){return o.goBack()}),t.TgZ(3,"mat-icon",3),t._uU(4,"keyboard_backspace"),t.qZA(),t._uU(5,"Back to Product Subcategory Group"),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"Full details of a Subcategory Group Details"),t.qZA()(),t.TgZ(8,"div",4)(9,"a",5),t._UZ(10,"img",6),t._uU(11,"Edit Subcategory Group "),t.qZA()()(),t.TgZ(12,"mat-tab-group",7)(13,"mat-tab",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"ul",14)(20,"li")(21,"h4",15),t._uU(22,"Title"),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.qZA()(),t.TgZ(25,"li")(26,"h4",15),t._uU(27,"Image"),t.qZA(),t._UZ(28,"img",16),t.qZA()()()(),t.TgZ(29,"div",17)(30,"p",18),t._uU(31,"Is Active : "),t.qZA(),t.TgZ(32,"span",19),t._uU(33),t.qZA()()()()()(),t.TgZ(34,"mat-tab",20)(35,"div",9)(36,"div",10)(37,"div",11)(38,"div",12)(39,"div",13)(40,"ul",14)(41,"li")(42,"h4",15),t._uU(43,"Title"),t.qZA(),t.TgZ(44,"h6"),t._uU(45),t.qZA()(),t.TgZ(46,"li")(47,"h4",15),t._uU(48,"Image"),t.qZA(),t._UZ(49,"img",16),t.qZA()()()()()()()(),t.TgZ(50,"mat-tab",21)(51,"div",9)(52,"div",10)(53,"div",11),t.YNc(54,Z,12,2,"div",22),t.qZA()()()(),t.YNc(55,m,47,16,"mat-tab",23),t.qZA()),2&e&&(t.xp6(9),t.MGl("routerLink","//product/editSubCategoryGroup/",null==o.subcategoryDetails?null:o.subcategoryDetails.id,""),t.xp6(15),t.Oqu(null==o.subcategoryDetails?null:o.subcategoryDetails.title),t.xp6(4),t.Q6J("src",o.imgUrl+(null==o.subcategoryDetails?null:o.subcategoryDetails.image),t.LSH),t.xp6(4),t.Q6J("ngClass",t.kEZ(9,n,!0===(null==o.subcategoryDetails?null:o.subcategoryDetails.is_active),!1===(null==o.subcategoryDetails?null:o.subcategoryDetails.is_active),"Partial"===(null==o.subcategoryDetails?null:o.subcategoryDetails.is_active))),t.xp6(1),t.Oqu(null==o.subcategoryDetails?null:o.subcategoryDetails.is_active),t.xp6(12),t.Oqu(null==o.subcategoryDetails||null==o.subcategoryDetails.category?null:o.subcategoryDetails.category.title),t.xp6(4),t.Q6J("src",o.imgUrl+(null==o.subcategoryDetails||null==o.subcategoryDetails.category?null:o.subcategoryDetails.category.image),t.LSH),t.xp6(5),t.Q6J("ngForOf",null==o.subcategoryDetails?null:o.subcategoryDetails.subcategories),t.xp6(1),t.Q6J("ngIf",(null==o.subcategoryDetails||null==o.subcategoryDetails.logs?null:o.subcategoryDetails.logs.length)>0))},dependencies:[r.mk,r.sg,r.O5,g.yS,u.YN,u.Kr,u.EJ,u.JJ,u.On,b.SP,b.uX,c.Hw,D.LS,r.uU,D._s,d.T],styles:[".second-list[_ngcontent-%COMP%]{width:70%}.second-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d8d8d8}.img2[_ngcontent-%COMP%]{height:100px;width:100px}.img-div[_ngcontent-%COMP%]{width:70%;text-align:center;padding-top:10px}.h4[_ngcontent-%COMP%]{font-weight:bolder}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),i})();var S=a(30597);const U=JSON.parse(localStorage.getItem("auth"));let C;U&&U.map(l=>{"product"===l.content_type.app_label&&"subcategorygroup"===l.content_type.model&&"view_subcategorygroup"==l.codename&&(C=l.codename)});const P=[{path:"",component:h,canActivate:[S.l],data:{allowedRoles:["view_subcategorygroup"]}}];let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(P),g.Bz]}),i})();var M=a(32728),O=a(95113),x=a(56709),q=a(8468);let w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,G,u.u5,u.UX,M.FP,b.Nh,c.Ps,O.LD,x.p9,q.I]}),i})()},30597:(A,v,a)=>{a.d(v,{l:()=>b});var r=a(94650),g=a(4392),t=a(97185),T=a(42917),u=a(80927);let b=(()=>{class c{constructor(d,Z,_,p,f){this.router=d,this.Arout=Z,this.toastr=_,this.profileService=p,this.coreService=f}canActivate(d,Z){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),_){const p=d.data.allowedRoles,f=_.some(n=>p.includes(n.codename));let m=this.coreService.profileData$.value;if(m&&m.username){this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const n=m?.permission,h=this.profileService.getUserDetails();(!h||h.length!==n.length)&&(this.profileService.setUserPermission(n),window.location.reload())}else this.coreService.getProfile().subscribe(n=>{this.userDetails=n,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(n);const h=n?.permission,S=this.profileService.getUserDetails();(!S||S.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())});if(f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return c.\u0275fac=function(d){return new(d||c)(r.LFG(g.F0),r.LFG(g.gz),r.LFG(t._W),r.LFG(T.J),r.LFG(u.p))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);