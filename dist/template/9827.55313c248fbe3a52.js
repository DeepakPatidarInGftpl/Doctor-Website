"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9827],{9827:(T,v,i)=>{i.r(v),i.d(v,{AddAddressStoreModule:()=>P});var d=i(36895),m=i(89299),n=i(24006),e=i(94650),S=i(42917),b=i(97185),l=i(80927),y=i(92559);function p(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter your Name "),e.qZA())}function f(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter Valid Email"),e.qZA())}function c(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter your 10 Digits Phone Number"),e.qZA())}function u(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter Alternative Mobile No. "),e.qZA())}function g(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter Address line 1"),e.qZA())}function h(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter line 2"),e.qZA())}function A(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter country"),e.qZA())}function _(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter State"),e.qZA())}function I(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter City Name"),e.qZA())}function N(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function U(s,o){1&s&&(e.TgZ(0,"span",25),e._uU(1,"Enter your Address"),e.qZA())}function F(s,o){1&s&&(e.TgZ(0,"button",26),e._uU(1,"Submit"),e.qZA())}function q(s,o){1&s&&(e.TgZ(0,"button",27),e._UZ(1,"span",28),e._uU(2," \xa0 Submit"),e.qZA())}const a=function(s){return{"is-invalid":s}};let E=(()=>{class s{constructor(r,t,C,w,Y,R){this.fb=r,this.copmpanyService=t,this.toastr=C,this.router=w,this.coreService=Y,this.websiteService=R,this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.addressStoreForm.controls}ngOnInit(){this.addressStoreForm=this.fb.group({name:new n.NI("",[n.kI.required]),email:new n.NI("",[n.kI.required,n.kI.email]),mobile_no:new n.NI("",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(10),n.kI.pattern(/^[0-9]*$/)]),alternative_mobile_no:new n.NI("",[n.kI.minLength(10),n.kI.maxLength(10),n.kI.pattern(/^[0-9]*$/)]),line1:new n.NI(""),line2:new n.NI(""),address:new n.NI("",[n.kI.required]),pincode:new n.NI("",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(6),n.kI.pattern(/^[0-9]*$/)]),state:new n.NI(""),country:new n.NI(""),city:new n.NI("")})}getCountry(){this.copmpanyService.countryList().subscribe(r=>{this.country=r})}getState(){this.copmpanyService.stateList().subscribe(r=>{})}getCity(){this.coreService.getCity().subscribe(r=>{})}selectState(r){this.coreService.getStateByCountryId(r).subscribe(t=>{this.state=t})}selectCity(r){this.coreService.getCityByStateId(r).subscribe(t=>{this.city=t})}submit(){var r=new FormData;r.append("name",this.addressStoreForm.get("name")?.value),r.append("email",this.addressStoreForm.get("email")?.value),r.append("mobile_no",this.addressStoreForm.get("mobile_no")?.value),r.append("alternative_mobile_no",this.addressStoreForm.get("alternative_mobile_no")?.value),r.append("line1",this.addressStoreForm.get("line1")?.value),r.append("line2",this.addressStoreForm.get("line2")?.value),r.append("address",this.addressStoreForm.get("address")?.value),r.append("pincode",this.addressStoreForm.get("pincode")?.value),r.append("state",this.addressStoreForm.get("state")?.value),r.append("country",this.addressStoreForm.get("country")?.value),r.append("city",this.addressStoreForm.get("city")?.value),this.addressStoreForm.valid?(this.loaders=!0,this.websiteService.addAddressStore(r).subscribe(t=>{this.addRes=t,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.addressStoreForm.reset(),this.router.navigate(["//website/addressStore"])):this.loaders=!1},t=>{this.loaders=!1})):(this.loaders=!1,this.addressStoreForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get name(){return this.addressStoreForm.get("name")}get line1(){return this.addressStoreForm.get("line1")}get phone(){return this.addressStoreForm.get("mobile_no")}get pincode(){return this.addressStoreForm.get("pincode")}get alternative_mobile_no(){return this.addressStoreForm.get("alternative_mobile_no")}get email(){return this.addressStoreForm.get("email")}get line2(){return this.addressStoreForm.get("line2")}get address(){return this.addressStoreForm.get("address")}get countryy(){return this.addressStoreForm.get("country")}get statee(){return this.addressStoreForm.get("state")}get cityy(){return this.addressStoreForm.get("city")}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(n.qu),e.Y36(S.J),e.Y36(b._W),e.Y36(m.F0),e.Y36(l.p),e.Y36(y.K))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-add-address-store"]],decls:83,vars:47,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","placeholder","Enter Name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","placeholder","Enter Email","id","email",3,"ngClass"],["type","text","formControlName","mobile_no","placeholder","Enter Phone No.","maxlength","10","minlength","10","id","mobile_no",3,"ngClass"],["type","text","formControlName","alternative_mobile_no","placeholder","Enter Alternative Mobile No","id","alternative_mobile_no","maxlength","10","minlength","10",3,"ngClass"],["formControlName","line1","id","line1","placeholder","Enter Address Line 1",3,"ngClass"],["formControlName","line2","id","line2","placeholder","Enter Address Line 2",3,"ngClass"],["type","text","formControlName","country","id","country","placeholder","Enter Country Name",3,"ngClass"],["type","text","formControlName","state","id","state","placeholder","Enter State Name",3,"ngClass"],["type","text","formControlName","city","placeholder","Enter City Name","id","city",3,"ngClass"],["type","text","formControlName","pincode","placeholder","Enter Pincode No.","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["placeholder","Enter Address","formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/addressStore",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Address Store"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Address Store "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,p,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,f,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," Phone No.*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,c,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Alternative Mobile No."),e.qZA(),e._UZ(32,"input",12),e.YNc(33,u,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Line 1"),e.qZA(),e.TgZ(38,"textarea",13),e._uU(39,"                            "),e.qZA(),e.YNc(40,g,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44," Line 2"),e.qZA(),e.TgZ(45,"textarea",14),e._uU(46," "),e.qZA(),e.YNc(47,h,2,0,"span",9),e.qZA()(),e.TgZ(48,"div",6)(49,"div",7)(50,"label"),e._uU(51,"Country"),e.qZA(),e._UZ(52,"input",15),e.YNc(53,A,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57," State"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,_,2,0,"span",9),e.qZA()(),e.TgZ(60,"div",6)(61,"div",7)(62,"label"),e._uU(63,"City"),e.qZA(),e._UZ(64,"input",17),e.YNc(65,I,2,0,"span",9),e.qZA()(),e.TgZ(66,"div",6)(67,"div",7)(68,"label"),e._uU(69,"Pincode*"),e.qZA(),e._UZ(70,"input",18),e.YNc(71,N,2,0,"span",9),e.qZA()(),e.TgZ(72,"div",19)(73,"div",7)(74,"label"),e._uU(75,"Address*"),e.qZA(),e._UZ(76,"textarea",20),e.YNc(77,U,2,0,"span",9),e.qZA()(),e.TgZ(78,"div",21),e.YNc(79,F,2,0,"button",22),e.YNc(80,q,3,0,"button",23),e.TgZ(81,"a",24),e._uU(82,"Cancel"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",t.addressStoreForm),e.xp6(6),e.Q6J("ngClass",e.VKq(25,a,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(27,a,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,a,t.f.mobile_no.touched&&t.f.mobile_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,a,t.f.alternative_mobile_no.touched&&t.f.alternative_mobile_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.alternative_mobile_no&&t.alternative_mobile_no.invalid&&t.alternative_mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,a,t.f.line1.touched&&t.f.line1.invalid)),e.xp6(2),e.Q6J("ngIf",t.line1&&t.line1.invalid&&t.line1.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,a,t.f.line2.touched&&t.f.line2.invalid)),e.xp6(2),e.Q6J("ngIf",t.line2&&t.line2.invalid&&t.line2.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,a,t.f.country.touched&&t.f.country.invalid)),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,a,t.f.state.touched&&t.f.state.invalid)),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(5),e.Q6J("ngClass",e.VKq(41,a,t.f.city.touched&&t.f.city.invalid)),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(5),e.Q6J("ngClass",e.VKq(43,a,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(45,a,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[d.mk,d.O5,m.yS,n._Y,n.Fj,n.JJ,n.JL,n.wO,n.nD,n.sg,n.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),s})();var J=i(30597);const Z=JSON.parse(localStorage.getItem("auth"));let Q;Z&&Z.map(o=>{"order"===o.content_type.app_label&&"storeaddress"===o.content_type.model&&"add_storeaddress"==o.codename&&(Q=o.codename)});const D=[{path:"",component:E,canActivate:[J.l],data:{allowedRoles:["add_storeaddress"]}}];let L=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(D),m.Bz]}),s})();var M=i(30906);let P=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,L,M.ZU,n.u5,n.UX]}),s})()},30597:(T,v,i)=>{i.d(v,{l:()=>b});var d=i(94650),m=i(89299),n=i(97185),e=i(42917),S=i(80927);let b=(()=>{class l{constructor(p,f,c,u,g){this.router=p,this.Arout=f,this.toastr=c,this.profileService=u,this.coreService=g}canActivate(p,f){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),c){const u=p.data.allowedRoles;console.log(u,"allowedRoles");const g=c.some(h=>u.includes(h.codename));if(console.log(g),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const A=h?.permission,_=this.profileService.getUserDetails();(!_||_.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(p){return new(p||l)(d.LFG(m.F0),d.LFG(m.gz),d.LFG(n._W),d.LFG(e.J),d.LFG(S.p))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);