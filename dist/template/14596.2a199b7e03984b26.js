"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[14596],{14596:(q,Z,a)=>{a.r(Z),a.d(Z,{DetailsInvoiceAmountModule:()=>E});var r=a(36895),f=a(4392),t=a(94650),x=a(53989),D=a(3848),h=a(97392),s=a(24006),U=a(73162),_=a(54333),A=a(54040);function m(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"td",19),t._uU(2),t.qZA(),t.TgZ(3,"td",19),t._uU(4),t.qZA(),t.TgZ(5,"td",19),t._uU(6),t.qZA(),t.TgZ(7,"td",19),t._uU(8),t.qZA()()),2&i){const e=t.oxw(),o=e.index,n=e.$implicit;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(null==n?null:n.discount_offer_type),t.xp6(2),t.Oqu(null==n?null:n.invoice_amount),t.xp6(2),t.Oqu(null==n||null==n.free_items?null:n.free_items.product_title)}}function d(i,l){if(1&i&&(t.ynx(0),t.YNc(1,m,9,4,"tr",43),t.BQk()),2&i){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf","Free-item-on-invoice"==(null==e?null:e.discount_offer_type))}}const p=function(i,l){return{itemsPerPage:i,currentPage:l}};function g(i,l){if(1&i&&(t.TgZ(0,"table",17)(1,"thead")(2,"tr")(3,"th",18),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",18),t._uU(6,"Discount Offer Type"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Invoice Amount"),t.qZA(),t.TgZ(9,"th",18),t._uU(10,"Free Items"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,d,2,1,"ng-container",42),t.ALo(13,"paginate"),t.ALo(14,"orderBy"),t.qZA()()),2&i){const e=t.oxw(3);t.xp6(12),t.Q6J("ngForOf",t.xi3(13,1,t.Dn7(14,4,null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.discount_cart,e.keyy,e.reverse),t.WLB(8,p,e.itemsPerPages,e.pp)))}}function u(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"td",19),t._uU(2),t.qZA(),t.TgZ(3,"td",19),t._uU(4),t.qZA(),t.TgZ(5,"td",19),t._uU(6),t.qZA(),t.TgZ(7,"td",19),t._uU(8),t.qZA(),t.TgZ(9,"td",19),t._uU(10),t.qZA()()),2&i){const e=t.oxw(),o=e.index,n=e.$implicit;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(null==n?null:n.discount_offer_type),t.xp6(2),t.Oqu(null==n?null:n.invoice_amount),t.xp6(2),t.Oqu(null==n?null:n.flat_discount),t.xp6(2),t.Oqu(null==n?null:n.discount_type)}}function v(i,l){if(1&i&&(t.ynx(0),t.YNc(1,u,11,5,"tr",43),t.BQk()),2&i){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf","Discount-on-Invoice"==(null==e?null:e.discount_offer_type))}}function O(i,l){if(1&i&&(t.TgZ(0,"table",17)(1,"thead")(2,"tr")(3,"th",18),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",18),t._uU(6,"Discount Offer Type"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Invoice Amount"),t.qZA(),t.TgZ(9,"th",18),t._uU(10,"Flat Discount"),t.qZA(),t.TgZ(11,"th",18),t._uU(12,"Discount Type"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,v,2,1,"ng-container",42),t.ALo(15,"paginate"),t.ALo(16,"orderBy"),t.qZA()()),2&i){const e=t.oxw(3);t.xp6(14),t.Q6J("ngForOf",t.xi3(15,1,t.Dn7(16,4,null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.discount_cart,e.keyy,e.reverse),t.WLB(8,p,e.itemsPerPages,e.pp)))}}function b(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",16),t.YNc(1,g,15,11,"table",26),t.YNc(2,O,17,11,"table",26),t.TgZ(3,"div",27)(4,"div",28)(5,"div",29),t._uU(6," Show per page "),t.TgZ(7,"select",30,31),t.NdJ("ngModelChange",function(n){t.CHM(e);const c=t.oxw(2);return t.KtG(c.itemsPerPages=n)})("change",function(){t.CHM(e);const n=t.MAs(8),c=t.oxw(2);return t.KtG(c.pgChange(n.value))}),t.TgZ(9,"option",32),t._uU(10,"10"),t.qZA(),t.TgZ(11,"option",33),t._uU(12,"20"),t.qZA(),t.TgZ(13,"option",34),t._uU(14,"30"),t.qZA(),t.TgZ(15,"option",35),t._uU(16,"50"),t.qZA(),t.TgZ(17,"option",36),t._uU(18,"100"),t.qZA(),t.TgZ(19,"option",37),t._uU(20,"All"),t.qZA()()()(),t.TgZ(21,"div",38)(22,"div",39)(23,"pagination-controls",40),t.NdJ("pageChange",function(n){t.CHM(e);const c=t.oxw(2);return t.KtG(c.p=n)}),t.qZA(),t.TgZ(24,"div",41),t._uU(25),t.qZA()()()()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf","Free-item-on-invoice"==(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.discount_cart[0]?null:e.invoiceOfferDetail.discount_cart[0].discount_offer_type)),t.xp6(1),t.Q6J("ngIf","Discount-on-Invoice"==(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.discount_cart[0]?null:e.invoiceOfferDetail.discount_cart[0].discount_offer_type)),t.xp6(5),t.Q6J("ngModel",e.itemsPerPages),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.discount_cart?null:e.invoiceOfferDetail.discount_cart.length," of ",e.pp," entries")}}function C(i,l){1&i&&(t.TgZ(0,"div",44)(1,"span",45),t._uU(2,"Data Not Available"),t.qZA()())}function I(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr")(2,"td",52),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.sort("id"))}),t._uU(3),t.qZA(),t.TgZ(4,"td",52),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.sort("id"))}),t._uU(5),t.qZA(),t.TgZ(6,"td",52),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.sort("id"))}),t._uU(7),t.qZA(),t.TgZ(8,"td",52),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.sort("id"))}),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()}if(2&i){const e=l.$implicit,o=l.index;t.xp6(3),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function y(i,l){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",53)(3,"p",54),t._uU(4,"Data not available"),t.qZA()()()())}function P(i,l){1&i&&t._UZ(0,"mat-progress-bar",55)}function M(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-tab",46)(1,"div",1)(2,"div",2)(3,"div",16)(4,"table",47)(5,"thead")(6,"tr")(7,"th",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(8,"# "),t._UZ(9,"i",49),t.qZA(),t.TgZ(10,"th",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(11,"User "),t._UZ(12,"i",49),t.qZA(),t.TgZ(13,"th",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(14,"Operation Type "),t._UZ(15,"i",49),t.qZA(),t.TgZ(16,"th",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(17,"Date Time "),t._UZ(18,"i",49),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,I,11,7,"ng-container",42),t.ALo(21,"paginate"),t.ALo(22,"orderBy"),t.qZA(),t.YNc(23,y,5,0,"tbody",43),t.qZA(),t.TgZ(24,"div",50),t.YNc(25,P,1,0,"mat-progress-bar",51),t.qZA(),t.TgZ(26,"div",27)(27,"div",28)(28,"div",29),t._uU(29," Show per page "),t.TgZ(30,"select",30,31),t.NdJ("ngModelChange",function(n){t.CHM(e);const c=t.oxw(2);return t.KtG(c.itemsPerPage=n)})("change",function(){t.CHM(e);const n=t.MAs(31),c=t.oxw(2);return t.KtG(c.pgChange(n.value))}),t.TgZ(32,"option",32),t._uU(33,"10"),t.qZA(),t.TgZ(34,"option",33),t._uU(35,"20"),t.qZA(),t.TgZ(36,"option",34),t._uU(37,"30"),t.qZA(),t.TgZ(38,"option",35),t._uU(39,"50"),t.qZA(),t.TgZ(40,"option",36),t._uU(41,"100"),t.qZA(),t.TgZ(42,"option",37),t._uU(43,"All"),t.qZA()()()(),t.TgZ(44,"div",38)(45,"div",39)(46,"pagination-controls",40),t.NdJ("pageChange",function(n){t.CHM(e);const c=t.oxw(2);return t.KtG(c.p=n)}),t.qZA(),t.TgZ(47,"div",41),t._uU(48),t.qZA()()()()()()()()}if(2&i){const e=t.oxw(2);t.xp6(20),t.Q6J("ngForOf",t.xi3(21,7,t.Dn7(22,10,e.filteredData,e.key,e.reverse),t.WLB(14,p,e.itemsPerPage,e.p))),t.xp6(3),t.Q6J("ngIf",0==(null==e.filteredData?null:e.filteredData.length)),t.xp6(2),t.Q6J("ngIf",e.loader),t.xp6(5),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const T=function(i,l){return{"bg-lightgreen":i,"bg-lightred":l}};function J(i,l){if(1&i&&(t.TgZ(0,"div",11)(1,"div",12)(2,"mat-tab-group",13,14)(4,"mat-tab",15)(5,"div",16)(6,"table",17)(7,"tbody")(8,"tr")(9,"td",18),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"td",19),t._uU(12),t.qZA()(),t.TgZ(13,"tr")(14,"td",18),t._uU(15,"Discount Type"),t.qZA(),t.TgZ(16,"td",19),t._uU(17),t.qZA()(),t.TgZ(18,"tr")(19,"td",18),t._uU(20,"Start Date"),t.qZA(),t.TgZ(21,"td",19),t._uU(22),t.qZA()(),t.TgZ(23,"tr")(24,"td",18),t._uU(25,"End Date"),t.qZA(),t.TgZ(26,"td",19),t._uU(27),t.qZA()(),t.TgZ(28,"tr")(29,"td",18),t._uU(30,"Business Location"),t.qZA(),t.TgZ(31,"td",19),t._uU(32),t.qZA()(),t.TgZ(33,"tr")(34,"td",18),t._uU(35,"Customers Group"),t.qZA(),t.TgZ(36,"td",19),t._uU(37),t.qZA()(),t.TgZ(38,"tr")(39,"td",18),t._uU(40,"Is Multiuse"),t.qZA(),t.TgZ(41,"td",19)(42,"span",20),t._uU(43),t.qZA()()(),t.TgZ(44,"tr")(45,"td",18),t._uU(46,"Is Compulsory"),t.qZA(),t.TgZ(47,"td",19)(48,"span",20),t._uU(49),t.qZA()()(),t.TgZ(50,"tr")(51,"td",18),t._uU(52,"Is Auto Update Price"),t.qZA(),t.TgZ(53,"td",19)(54,"span",20),t._uU(55),t.qZA()()(),t.TgZ(56,"tr")(57,"td",18),t._uU(58,"Is Applicable For Only Coupons"),t.qZA(),t.TgZ(59,"td",19)(60,"span",20),t._uU(61),t.qZA()()()()()(),t.TgZ(62,"div",21)(63,"div",4)(64,"p",22),t._uU(65,"Discount Cart Details"),t.qZA()(),t.YNc(66,b,26,6,"div",23),t.YNc(67,C,3,0,"div",24),t.qZA()(),t.YNc(68,M,49,17,"mat-tab",25),t.qZA()()()),2&i){const e=t.oxw();t.xp6(12),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.name),t.xp6(5),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.discount_type),t.xp6(5),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.start_date),t.xp6(5),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.end_date),t.xp6(5),t.Oqu(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.business_location?null:e.invoiceOfferDetail.business_location.title),t.xp6(5),t.Oqu(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.customers_group?null:e.invoiceOfferDetail.customers_group.title),t.xp6(5),t.Q6J("ngClass",t.WLB(17,T,!0===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.multiuse),!1===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.multiuse))),t.xp6(1),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.multiuse),t.xp6(5),t.Q6J("ngClass",t.WLB(20,T,!0===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.is_compulsory),!1===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.is_compulsory))),t.xp6(1),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.is_compulsory),t.xp6(5),t.Q6J("ngClass",t.WLB(23,T,!0===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.auto_update_price),!1===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.auto_update_price))),t.xp6(1),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.auto_update_price),t.xp6(5),t.Q6J("ngClass",t.WLB(26,T,!0===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.applicable_for_only_coupons),!1===(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.applicable_for_only_coupons))),t.xp6(1),t.Oqu(null==e.invoiceOfferDetail?null:e.invoiceOfferDetail.applicable_for_only_coupons),t.xp6(5),t.Q6J("ngIf",(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.discount_cart?null:e.invoiceOfferDetail.discount_cart.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.discount_cart?null:e.invoiceOfferDetail.discount_cart.length)),t.xp6(1),t.Q6J("ngIf",(null==e.invoiceOfferDetail||null==e.invoiceOfferDetail.logs?null:e.invoiceOfferDetail.logs.length)>0)}}const L=[{path:"",component:(()=>{class i{constructor(e,o,n){this.Arout=e,this.offerService=o,this.location=n,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.itemsPerPages=10,this.keyy="id"}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}getdata(){this.offerService.getDiscountById(this.id).subscribe(e=>{this.id==e.id&&(this.invoiceOfferDetail=e,console.log(this.invoiceOfferDetail),this.filteredData=this.invoiceOfferDetail?.logs.slice(),this.filterData())})}goBack(){this.location.back()}sort(e){this.key=e,this.reverse=!this.reverse}filterData(){let e=this.invoiceOfferDetail?.logs.slice();this.filterOpertion&&(e=e.filter(o=>o?.operation_type===this.filterOpertion)),this.filteredData=e}clearFilter(){this.filterOpertion=null,this.filterData()}sortt(e){this.keyy=e,this.reverse=!this.reverse}pgChange(e){console.warn(e,"pg"),-1==e&&(this.itemsPerPages=this.invoiceOfferDetail?.discount_cart?.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.gz),t.Y36(x.K),t.Y36(r.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-details-invoice-amount"]],decls:16,vars:2,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"],[1,"badges",3,"ngClass"],[1,"mt-3"],[2,"color","#FF9F43","font-size","16px","font-weight","600"],["class","table-responsive",4,"ngIf"],["class","text-center",4,"ngIf"],["label","Logs",4,"ngIf"],["class","table",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"text-center"],[1,"text-danger"],["label","Logs"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"td",3,"click"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return o.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Bsed on Invoice Amount Offer"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Bsed on Invoice Amount Offer Details"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Bsed on Invoice Amount Offer "),t.qZA()()(),t.YNc(15,J,69,29,"div",10),t.qZA()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//offer/edit-invoice-amount/",null==o.invoiceOfferDetail?null:o.invoiceOfferDetail.id,""),t.xp6(3),t.Q6J("ngIf",o.invoiceOfferDetail))},dependencies:[r.mk,r.sg,r.O5,f.yS,D.SP,D.uX,h.Hw,s.YN,s.Kr,s.EJ,s.JJ,s.On,U.pW,_.LS,r.uU,_._s,A.T],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),i})(),canActivate:[a(30597).l],data:{allowedRoles:["view_discount"]}}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(L),f.Bz]}),i})();var B=a(95113),F=a(56709),G=a(90455),k=a(8468);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,S,D.Nh,h.Ps,B.LD,F.p9,G.rP,s.u5,k.I]}),i})()},30597:(q,Z,a)=>{a.d(Z,{l:()=>h});var r=a(94650),f=a(4392),t=a(97185),x=a(42917),D=a(80927);let h=(()=>{class s{constructor(_,A,m,d,p){this.router=_,this.Arout=A,this.toastr=m,this.profileService=d,this.coreService=p}canActivate(_,A){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),m){const d=_.data.allowedRoles,p=m.some(u=>d.includes(u.codename));let g=this.coreService.profileData$.value;if(g&&g.username){this.userDetails=g,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(g);const u=g?.permission,v=this.profileService.getUserDetails();(!v||v.length!==u.length)&&(this.profileService.setUserPermission(u),window.location.reload())}else this.coreService.getProfile().subscribe(u=>{this.userDetails=u,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(u);const v=u?.permission,O=this.profileService.getUserDetails();(!O||O.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())});if(p)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return s.\u0275fac=function(_){return new(_||s)(r.LFG(f.F0),r.LFG(f.gz),r.LFG(t._W),r.LFG(x.J),r.LFG(D.p))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);