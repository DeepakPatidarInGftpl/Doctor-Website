"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[60945],{60945:(F,v,o)=>{o.r(v),o.d(v,{AddMembershipModule:()=>N});var a=o(36895),d=o(4392),s=o(24006),e=o(94650),M=o(72266),C=o(97185);function l(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Enter your Title "),e.qZA())}function T(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Enter your Points per 100 "),e.qZA())}function u(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Enter your Purchase From"),e.qZA())}function A(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Enter Purchase To"),e.qZA())}function g(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Select Validity of Points "),e.qZA())}function h(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Enter your Maximum Redemption Points "),e.qZA())}function b(i,n){1&i&&(e.TgZ(0,"span",27),e._uU(1,"Select attachment"),e.qZA())}function c(i,n){1&i&&(e.O4$(),e.TgZ(0,"svg",28),e._UZ(1,"path",29)(2,"path",30),e.qZA())}function m(i,n){if(1&i&&e._UZ(0,"img",31),2&i){const r=e.oxw();e.Q6J("src",r.url,e.LSH)}}function _(i,n){1&i&&(e.TgZ(0,"button",32),e._uU(1,"Submit"),e.qZA())}function Z(i,n){1&i&&(e.TgZ(0,"button",33),e._UZ(1,"span",34),e._uU(2,"\xa0 Submit"),e.qZA())}const f=function(i){return{"is-invalid":i}},I=[{path:"",component:(()=>{class i{constructor(r,t,p,y){this.fb=r,this.hrmService=t,this.toastr=p,this.router=y,this.dateError=null,this.loader=!1}get f(){return this.membershipForm.controls}ngOnInit(){this.membershipForm=this.fb.group({title:new s.NI("",[s.kI.required]),points_per_100:new s.NI("",[s.kI.required]),purchase_from:new s.NI("",[s.kI.required]),purchase_to:new s.NI(""),validity_of_points:new s.NI("",[s.kI.required]),maximum_redemption_points:new s.NI("",[s.kI.required]),attachment:new s.NI("")})}submit(){if(this.membershipForm.valid){this.loader=!0;let r=new FormData;r.append("title",this.membershipForm.get("title")?.value),r.append("points_per_100",this.membershipForm.get("points_per_100")?.value),r.append("purchase_from",this.membershipForm.get("purchase_from")?.value),r.append("purchase_to",this.membershipForm.get("purchase_to")?.value),r.append("validity_of_points",this.membershipForm.get("validity_of_points")?.value),r.append("maximum_redemption_points",this.membershipForm.get("maximum_redemption_points")?.value),r.append("attachment",this.membershipForm.get("attachment")?.value),this.hrmService.addMembership(r).subscribe(t=>{this.addRes=t,this.addRes.success?(this.loader=!1,this.toastr.success(this.addRes.msg),this.membershipForm.reset(),this.router.navigate(["//settings/membership"])):this.loader=!1},t=>{console.log(t),this.loader=!1,this.toastr.error(t.error.error.non_field_errors[0])})}else this.membershipForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get title(){return this.membershipForm.get("title")}get points_per_100(){return this.membershipForm.get("points_per_100")}get purchase_from(){return this.membershipForm.get("purchase_from")}get purchase_to(){return this.membershipForm.get("purchase_to")}get validity_of_points(){return this.membershipForm.get("validity_of_points")}get maximum_redemption_points(){return this.membershipForm.get("maximum_redemption_points")}get attachment(){return this.membershipForm.get("attachment")}onSelect(r){const t=r.target.files[0];if(t){const p=new FileReader;p.readAsDataURL(t),p.onload=()=>{this.url=p.result}}this.membershipForm.patchValue({attachment:t}),this.membershipForm.get("attachment")?.updateValueAndValidity()}errorMsg(){let r=this.membershipForm.value;this.membershipForm.get("purchase_from"),r.purchase_from>=r.purchase_to&&this.toastr.error("Purchase from must be less than purchase to.")}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(s.qu),e.Y36(M.z),e.Y36(C._W),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-membership"]],decls:63,vars:30,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","number","formControlName","points_per_100","placeholder","Enter Points Per 100","id","points_per_100",3,"ngClass"],["type","number","formControlName","purchase_from","placeholder","Enter Mobile No.","id","Purchase From",3,"ngClass","blur"],["type","number","formControlName","purchase_to","placeholder","Enter Valid Purchase To","id","purchase_to",3,"ngClass","blur"],["type","number","formControlName","validity_of_points","placeholder","Enter Validity of Points","id","Validity of Points",3,"ngClass"],[1,"col-lg-4","col-sm-4","col-12"],["type","number","formControlName","maximum_redemption_points","placeholder","Enter Maximum Redemption Points","id","maximum_redemption_points",3,"ngClass"],[1,"col-lg-3","col-sm-6","col-12"],[1,"image-upload"],["type","file","formControlName","attachment",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/membership",1,"btn","btn-cancel"],[1,"text-danger"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Membership"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Membership "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Title*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,l,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Points Per 100*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,T,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Purchase From*"),e.qZA(),e.TgZ(26,"input",11),e.NdJ("blur",function(){return t.errorMsg()}),e.qZA(),e.YNc(27,u,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Purchase To"),e.qZA(),e.TgZ(32,"input",12),e.NdJ("blur",function(){return t.errorMsg()}),e.qZA(),e.YNc(33,A,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Validity of Points*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,g,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",14)(41,"div",7)(42,"label"),e._uU(43,"Maximum Redemption Points*"),e.qZA(),e._UZ(44,"input",15),e.YNc(45,h,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",5)(47,"div",16)(48,"div",17)(49,"input",18),e.NdJ("change",function(y){return t.onSelect(y)}),e.qZA(),e.TgZ(50,"div",19),e._UZ(51,"img",20),e.TgZ(52,"h4"),e._uU(53,"Drag and drop a file to upload"),e.qZA()()(),e.YNc(54,b,2,0,"span",9),e.qZA(),e.TgZ(55,"div",16),e.YNc(56,c,3,0,"svg",21),e.YNc(57,m,1,1,"img",22),e.qZA()(),e.TgZ(58,"div",23),e.YNc(59,_,2,0,"button",24),e.YNc(60,Z,3,0,"button",25),e.TgZ(61,"a",26),e._uU(62,"Cancel"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",t.membershipForm),e.xp6(6),e.Q6J("ngClass",e.VKq(18,f,t.f.title.touched&&t.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(20,f,t.f.points_per_100.touched&&t.f.points_per_100.invalid)),e.xp6(1),e.Q6J("ngIf",t.points_per_100&&t.points_per_100.invalid&&t.points_per_100.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(22,f,t.f.purchase_from.touched&&t.f.purchase_from.invalid)),e.xp6(1),e.Q6J("ngIf",t.purchase_from&&t.purchase_from.invalid&&t.purchase_from.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(24,f,t.f.purchase_to.touched&&t.f.purchase_to.invalid)),e.xp6(1),e.Q6J("ngIf",t.purchase_to&&t.purchase_to.invalid&&t.purchase_to.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(26,f,t.f.validity_of_points.touched&&t.f.validity_of_points.invalid)),e.xp6(1),e.Q6J("ngIf",t.validity_of_points&&t.validity_of_points.invalid&&t.validity_of_points.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,f,t.f.maximum_redemption_points.touched&&t.f.maximum_redemption_points.invalid)),e.xp6(1),e.Q6J("ngIf",t.maximum_redemption_points&&t.maximum_redemption_points.invalid&&t.maximum_redemption_points.touched),e.xp6(9),e.Q6J("ngIf",t.attachment&&t.attachment.invalid&&t.attachment.touched),e.xp6(2),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url),e.xp6(2),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader))},dependencies:[a.mk,a.O5,d.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[o(30597).l],data:{allowedRoles:["add_membership"]}}];let S=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(I),d.Bz]}),i})();var D=o(8468);let N=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.ez,S,D.I]}),i})()},30597:(F,v,o)=>{o.d(v,{l:()=>C});var a=o(94650),d=o(4392),s=o(97185),e=o(42917),M=o(80927);let C=(()=>{class l{constructor(u,A,g,h,b){this.router=u,this.Arout=A,this.toastr=g,this.profileService=h,this.coreService=b}canActivate(u,A){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),g){const h=u.data.allowedRoles,b=g.some(m=>h.includes(m.codename));let c=this.coreService.profileData$.value;if(c&&c.username){this.userDetails=c,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(c);const m=c?.permission,_=this.profileService.getUserDetails();(!_||_.length!==m.length)&&(this.profileService.setUserPermission(m),window.location.reload())}else this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const _=m?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())});if(b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(u){return new(u||l)(a.LFG(d.F0),a.LFG(d.gz),a.LFG(s._W),a.LFG(e.J),a.LFG(M.p))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);