"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[374],{40374:(C,p,a)=>{a.r(p),a.d(p,{CouponDetailsModule:()=>n});var l=a(36895),c=a(89299),t=a(94650),f=a(53989),h=a(97392);function v(o,s){if(1&o&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"table",11)(4,"tbody")(5,"tr")(6,"td",12),t._uU(7,"Title"),t.qZA(),t.TgZ(8,"td",13),t._uU(9),t.qZA()(),t.TgZ(10,"tr")(11,"td",12),t._uU(12,"Coupon Code"),t.qZA(),t.TgZ(13,"td",13),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"td",12),t._uU(17,"Discount"),t.qZA(),t.TgZ(18,"td",13),t._uU(19),t.qZA()(),t.TgZ(20,"tr")(21,"td",12),t._uU(22,"Upto"),t.qZA(),t.TgZ(23,"td",13),t._uU(24),t.qZA()(),t.TgZ(25,"tr")(26,"td",12),t._uU(27,"Expiry Date"),t.qZA(),t.TgZ(28,"td",13),t._uU(29),t.qZA()()()()()()()),2&o){const e=t.oxw();t.xp6(9),t.Oqu(null==e.tableData?null:e.tableData.title),t.xp6(5),t.Oqu(null==e.tableData?null:e.tableData.coupon_code),t.xp6(5),t.Oqu(null==e.tableData?null:e.tableData.discount),t.xp6(5),t.Oqu(null==e.tableData?null:e.tableData.up_to),t.xp6(5),t.Oqu(null==e.tableData?null:e.tableData.expiry_date)}}const r=[{path:"",component:(()=>{class o{constructor(e,u,D){this.location=e,this.router=u,this.offerService=D}ngOnInit(){this.getAllCoupons()}getAllCoupons(){this.offerService.getAllCoupons().subscribe(e=>{console.log(e),this.tableData=e[0]})}navigate(){this.router.navigate(["//offer/coupon-list"])}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.Ye),t.Y36(c.F0),t.Y36(f.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-coupon-details"]],decls:12,vars:1,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],["class","company-details-card card mt-3",4,"ngIf"],[1,"company-details-card","card","mt-3"],[1,"sub-card","row"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"]],template:function(e,u){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return u.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8,"Back to CouponList"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Full details of a Coupon"),t.qZA()()(),t.YNc(11,v,30,5,"div",7),t.qZA()()()),2&e&&(t.xp6(11),t.Q6J("ngIf",u.tableData))},dependencies:[l.O5,h.Hw],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["add_discount"]}}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(r),c.Bz]}),o})();var d=a(8468);let n=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,g,d.I,h.Ps]}),o})()},30597:(C,p,a)=>{a.d(p,{l:()=>v});var l=a(94650),c=a(89299),t=a(97185),f=a(42917),h=a(80927);let v=(()=>{class i{constructor(r,g,d,n,o){this.router=r,this.Arout=g,this.toastr=d,this.profileService=n,this.coreService=o}canActivate(r,g){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(n=>{this.userDetails=n,this.permissions=this.userDetails?.permission}),d){const n=r.data.allowedRoles;console.log(n,"allowedRoles");const o=d.some(s=>n.includes(s.codename));if(console.log(o),this.coreService.getProfile().subscribe(s=>{this.userDetails=s,this.profileService.setUserDetails(this.userDetails);const e=s?.permission,u=this.profileService.getUserDetails();(!u||u.length!==e.length)&&(this.profileService.setUserPermission(e),window.location.reload())}),o)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return i.\u0275fac=function(r){return new(r||i)(l.LFG(c.F0),l.LFG(c.gz),l.LFG(t._W),l.LFG(f.J),l.LFG(h.p))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);