"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4979],{44979:(B,h,r)=>{r.r(h),r.d(h,{AddCompanyBankModule:()=>Y});var d=r(36895),u=r(88996),a=r(24006),e=r(94650),b=r(42917),v=r(97185),c=r(80927);function Z(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your name "),e.qZA())}function m(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Account Holder Name"),e.qZA())}function f(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Valid Account Number"),e.qZA())}function p(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Branch Name "),e.qZA())}function l(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your IFSC Code"),e.qZA())}function g(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Swift Code"),e.qZA())}function _(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Credit Balance"),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Debit Balance"),e.qZA())}function C(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter country"),e.qZA())}function S(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter state Name"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter city"),e.qZA())}function U(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function q(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your address"),e.qZA())}function N(t,i){1&t&&(e.TgZ(0,"button",32),e._uU(1,"Submit"),e.qZA())}function F(t,i){1&t&&(e.TgZ(0,"button",33),e._UZ(1,"span",34),e._uU(2," Submit"),e.qZA())}const s=function(t){return{"is-invalid":t}};let J=(()=>{class t{constructor(o,n,k,P,R){this.fb=o,this.copmpanyService=n,this.toastr=k,this.router=P,this.coreService=R,this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.companyBankForm.controls}ngOnInit(){this.companyBankForm=this.fb.group({name:new a.NI("",[a.kI.required]),branch_name:new a.NI("",[a.kI.required]),account_number:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),account_holder_name:new a.NI("",[a.kI.required]),IFSC_code:new a.NI("",[a.kI.required]),Swift_code:new a.NI("",[a.kI.required]),credit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),debit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),counntry:new a.NI("",[a.kI.required]),state:new a.NI("",[a.kI.required]),city:new a.NI("",[a.kI.required]),pincode:new a.NI("",[a.kI.maxLength(6),a.kI.minLength(6),a.kI.required,a.kI.pattern(/^[0-9]*$/)]),address:new a.NI("",[a.kI.required]),is_upi_available:new a.NI("")}),this.getCountry(),this.getState(),this.getYear(),this.getCurrency(),this.getCity()}getYear(){this.coreService.getFinancialYear().subscribe(o=>{console.log(o),this.yearDetails=o})}getCurrency(){this.coreService.getCurrency().subscribe(o=>{console.log(o),this.currencyDetails=o})}getCountry(){this.copmpanyService.countryList().subscribe(o=>{this.country=o})}getState(){this.copmpanyService.stateList().subscribe(o=>{console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(o=>{})}selectState(o){console.log(o),this.coreService.getStateByCountryId(o).subscribe(n=>{this.state=n,console.log(this.state)})}selectCity(o){this.coreService.getCityByStateId(o).subscribe(n=>{this.city=n})}submit(){console.log(this.companyBankForm.value),this.companyBankForm.valid?(this.loaders=!0,this.coreService.addCompanyBank(this.companyBankForm.value).subscribe(o=>{console.log(o),this.addRes=o,"True"==this.addRes.Is_Success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.companyBankForm.reset(),this.router.navigate(["//bank/companyBank"])):(this.loaders=!1,this.toastr.error(this.addRes.account_number[0],"Account number"))},o=>{console.log(o.error),this.loaders=!1})):(this.companyBankForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.companyBankForm.get("name")}get branch_name(){return this.companyBankForm.get("branch_name")}get account_number(){return this.companyBankForm.get("account_number")}get account_holder_name(){return this.companyBankForm.get("account_holder_name")}get financial_year(){return this.companyBankForm.get("financial_year")}get IFSC_code(){return this.companyBankForm.get("IFSC_code")}get Swift_code(){return this.companyBankForm.get("Swift_code")}get credit_balance(){return this.companyBankForm.get("credit_balance")}get debit_balance(){return this.companyBankForm.get("debit_balance")}get is_upi_available(){return this.companyBankForm.get("is_upi_available")}get address(){return this.companyBankForm.get("address")}get countryy(){return this.companyBankForm.get("counntry")}get statee(){return this.companyBankForm.get("state")}get cityy(){return this.companyBankForm.get("city")}get pincode(){return this.companyBankForm.get("pincode")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.qu),e.Y36(b.J),e.Y36(v._W),e.Y36(u.F0),e.Y36(c.p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-company-bank"]],decls:99,vars:58,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","account_holder_name","id","account_holder_name",3,"ngClass"],["type","text","formControlName","account_number","maxlength","15","minlength","10","id","account_number",3,"ngClass"],["type","text","formControlName","branch_name","id","branch_name",3,"ngClass"],["type","text","formControlName","IFSC_code","id","IFSC_code",3,"ngClass"],["type","text","formControlName","Swift_code","id","Swift_code",3,"ngClass"],["type","text","formControlName","credit_balance","id","credit_balance",3,"ngClass"],["type","text","formControlName","debit_balance","id","debit_balance",3,"ngClass"],[1,"form-group","my-4"],[1,"d-flex"],["type","checkbox","formControlName","is_upi_available",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["type","text","formControlName","counntry","id","counntry",3,"ngClass"],["type","text","formControlName","state","id","state",3,"ngClass"],["type","text","formControlName","city","id","city",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//bank/companyBank",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Company Bank"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Company Bank"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,Z,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Account Holder Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,m,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Account Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,f,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Branch Name*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,p,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"IFSC Code*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,l,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Swift Code*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,g,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",6)(47,"div",7)(48,"label"),e._uU(49,"Credit Balance*"),e.qZA(),e._UZ(50,"input",15),e.YNc(51,_,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Debit Balance*"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,y,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",17)(60,"div",18),e._UZ(61,"input",19),e.TgZ(62,"label",20),e._uU(63,"Is UPI Available"),e.qZA()()()(),e.TgZ(64,"div",6)(65,"div",7)(66,"label"),e._uU(67,"Country*"),e.qZA(),e._UZ(68,"input",21),e.YNc(69,C,2,0,"span",9),e.qZA()(),e.TgZ(70,"div",6)(71,"div",7)(72,"label"),e._uU(73," State*"),e.qZA(),e._UZ(74,"input",22),e.YNc(75,S,2,0,"span",9),e.qZA()(),e.TgZ(76,"div",6)(77,"div",7)(78,"label"),e._uU(79," City*"),e.qZA(),e._UZ(80,"input",23),e.YNc(81,T,2,0,"span",9),e.qZA()(),e.TgZ(82,"div",6)(83,"div",7)(84,"label"),e._uU(85,"Pincode*"),e.qZA(),e._UZ(86,"input",24),e.YNc(87,U,2,0,"span",9),e.qZA()(),e.TgZ(88,"div",25)(89,"div",7)(90,"label"),e._uU(91,"Address*"),e.qZA(),e._UZ(92,"textarea",26),e.YNc(93,q,2,0,"span",9),e.qZA()(),e.TgZ(94,"div",27),e.YNc(95,N,2,0,"button",28),e.YNc(96,F,3,0,"button",29),e.TgZ(97,"a",30),e._uU(98,"Cancel"),e.qZA()()()()()()),2&o&&(e.xp6(8),e.Q6J("formGroup",n.companyBankForm),e.xp6(6),e.Q6J("ngClass",e.VKq(32,s,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,s,n.f.account_holder_name.touched&&n.f.account_holder_name.invalid)),e.xp6(1),e.Q6J("ngIf",n.account_holder_name&&n.account_holder_name.invalid&&n.account_holder_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,s,n.f.account_number.touched&&n.f.account_number.invalid)),e.xp6(1),e.Q6J("ngIf",n.account_number&&n.account_number.invalid&&n.account_number.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(38,s,n.f.branch_name.touched&&n.f.branch_name.invalid)),e.xp6(1),e.Q6J("ngIf",n.branch_name&&n.branch_name.invalid&&n.branch_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,s,n.f.IFSC_code.touched&&n.f.IFSC_code.invalid)),e.xp6(1),e.Q6J("ngIf",n.IFSC_code&&n.IFSC_code.invalid&&n.IFSC_code.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,s,n.f.Swift_code.touched&&n.f.Swift_code.invalid)),e.xp6(1),e.Q6J("ngIf",n.Swift_code&&n.Swift_code.invalid&&n.Swift_code.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,s,n.f.credit_balance.touched&&n.f.credit_balance.invalid)),e.xp6(1),e.Q6J("ngIf",n.credit_balance&&n.credit_balance.invalid&&n.credit_balance.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,s,n.f.debit_balance.touched&&n.f.debit_balance.invalid)),e.xp6(1),e.Q6J("ngIf",n.debit_balance&&n.debit_balance.invalid&&n.debit_balance.touched),e.xp6(4),e.Q6J("id","checkboxMeasure-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxMeasure-"),e.xp6(6),e.Q6J("ngClass",e.VKq(48,s,n.f.counntry.touched&&n.f.counntry.invalid)),e.xp6(1),e.Q6J("ngIf",n.countryy&&n.countryy.invalid&&n.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(50,s,n.f.state.touched&&n.f.state.invalid)),e.xp6(1),e.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(52,s,n.f.city.touched&&n.f.city.invalid)),e.xp6(1),e.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(54,s,n.f.pincode.touched&&n.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",n.pincode&&n.pincode.invalid&&n.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(56,s,n.f.address.touched&&n.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",n.address&&n.address.invalid&&n.address.touched),e.xp6(2),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders))},dependencies:[d.mk,d.O5,u.yS,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.wO,a.nD,a.sg,a.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var Q=r(30597);const A=JSON.parse(localStorage.getItem("auth"));let I;A&&A.permission&&A.permission.map(i=>{"pos"===i.content_type.app_label&&"companybank"===i.content_type.model&&"add_companybank"==i.codename&&(I=i.codename,console.log(I))});const w=[{path:"",component:J,canActivate:[Q.l],data:{allowedRoles:["add_companybank"]}}];let E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(w),u.Bz]}),t})();var D=r(8468),M=r(30906);let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,E,D.I,M.ZU,a.u5,a.UX]}),t})()},30597:(B,h,r)=>{r.d(h,{l:()=>v});var d=r(94650),u=r(88996),a=r(97185),e=r(42917),b=r(80927);let v=(()=>{class c{constructor(m,f,p,l,g){this.router=m,this.Arout=f,this.toastr=p,this.profileService=l,this.coreService=g}canActivate(m,f){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),p){const l=m.data.allowedRoles;console.log(l,"allowedRoles");const g=p.some(_=>l.includes(_.codename));if(this.coreService.getProfile().subscribe(_=>{this.userDetails=_,this.profileService.setUserDetails(this.userDetails);const y=_?.permission,C=this.profileService.getUserDetails();(!C||C.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),console.log(g),g)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return c.\u0275fac=function(m){return new(m||c)(d.LFG(u.F0),d.LFG(u.gz),d.LFG(a._W),d.LFG(e.J),d.LFG(b.p))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);