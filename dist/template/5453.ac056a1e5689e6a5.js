"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5453],{2917:(b,h,s)=>{s.d(h,{J:()=>y});var d=s(529),p=s(1135),a=s(2340),e=s(4650),m=s(4948);let y=(()=>{class c{constructor(o,l){this.http=o,this.HttpService=l,this.edit=new p.X(""),this.companyBehaviour=new p.X(null),this.apiUrl=`${a.N.api}`}editData(o){this.edit.next(o),console.log(o),localStorage.setItem("editCompany",JSON.stringify(o))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(o){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${o}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}companyYearIsActive(o,l){return this.http.patch(`${this.apiUrl+"/pv-api/company/?id="}${o}`,l)}postCompany(o){return this.http.post(this.apiUrl+"/pv-api/company/",o,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(o,l){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${l}`,o,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(o){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${o}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(o,l){var g={body:{id:l},headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${o}`,g)}}return c.\u0275fac=function(o){return new(o||c)(e.LFG(d.eN),e.LFG(m.Y))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5453:(b,h,s)=>{s.r(h),s.d(h,{AddCompanyBankModule:()=>O});var d=s(6895),p=s(8996),a=s(4006),e=s(4650),m=s(2917),y=s(7185),c=s(927);function _(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your name "),e.qZA())}function o(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Account Holder Name"),e.qZA())}function l(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Valid Account Number"),e.qZA())}function g(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your Branch Name "),e.qZA())}function f(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your IFSC Code"),e.qZA())}function Z(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter Swift Code"),e.qZA())}function I(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Credit Balance"),e.qZA())}function k(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Debit Balance"),e.qZA())}function B(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter country"),e.qZA())}function U(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter state Name"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter city"),e.qZA())}function T(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Enter your address"),e.qZA())}function q(t,r){1&t&&(e.TgZ(0,"button",32),e._uU(1,"Submit"),e.qZA())}function F(t,r){1&t&&(e.TgZ(0,"button",33),e._UZ(1,"span",34),e._uU(2," Submit"),e.qZA())}const u=function(t){return{"is-invalid":t}};let J=(()=>{class t{constructor(i,n,A,D,P){this.fb=i,this.copmpanyService=n,this.toastr=A,this.router=D,this.coreService=P,this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.companyBankForm.controls}ngOnInit(){this.companyBankForm=this.fb.group({name:new a.NI("",[a.kI.required]),branch_name:new a.NI("",[a.kI.required]),account_number:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),account_holder_name:new a.NI("",[a.kI.required]),IFSC_code:new a.NI("",[a.kI.required]),Swift_code:new a.NI("",[a.kI.required]),credit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),debit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),counntry:new a.NI("",[a.kI.required]),state:new a.NI("",[a.kI.required]),city:new a.NI("",[a.kI.required]),pincode:new a.NI("",[a.kI.maxLength(6),a.kI.minLength(6),a.kI.required,a.kI.pattern(/^[0-9]*$/)]),address:new a.NI("",[a.kI.required]),is_upi_available:new a.NI("")}),this.getCountry(),this.getState(),this.getYear(),this.getCurrency(),this.getCity()}getYear(){this.coreService.getFinancialYear().subscribe(i=>{console.log(i),this.yearDetails=i})}getCurrency(){this.coreService.getCurrency().subscribe(i=>{console.log(i),this.currencyDetails=i})}getCountry(){this.copmpanyService.countryList().subscribe(i=>{this.country=i})}getState(){this.copmpanyService.stateList().subscribe(i=>{console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(i=>{})}selectState(i){console.log(i),this.coreService.getStateByCountryId(i).subscribe(n=>{this.state=n,console.log(this.state)})}selectCity(i){this.coreService.getCityByStateId(i).subscribe(n=>{this.city=n})}submit(){console.log(this.companyBankForm.value),this.companyBankForm.valid?(this.loaders=!0,this.coreService.addCompanyBank(this.companyBankForm.value).subscribe(i=>{console.log(i),this.addRes=i,"True"==this.addRes.Is_Success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.companyBankForm.reset(),this.router.navigate(["//masters/companyBank"])):(this.loaders=!1,this.toastr.error(this.addRes.account_number[0],"Account number"))},i=>{console.log(i.error),this.loaders=!1})):(this.companyBankForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.companyBankForm.get("name")}get branch_name(){return this.companyBankForm.get("branch_name")}get account_number(){return this.companyBankForm.get("account_number")}get account_holder_name(){return this.companyBankForm.get("account_holder_name")}get financial_year(){return this.companyBankForm.get("financial_year")}get IFSC_code(){return this.companyBankForm.get("IFSC_code")}get Swift_code(){return this.companyBankForm.get("Swift_code")}get credit_balance(){return this.companyBankForm.get("credit_balance")}get debit_balance(){return this.companyBankForm.get("debit_balance")}get is_upi_available(){return this.companyBankForm.get("is_upi_available")}get address(){return this.companyBankForm.get("address")}get countryy(){return this.companyBankForm.get("counntry")}get statee(){return this.companyBankForm.get("state")}get cityy(){return this.companyBankForm.get("city")}get pincode(){return this.companyBankForm.get("pincode")}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.qu),e.Y36(m.J),e.Y36(y._W),e.Y36(p.F0),e.Y36(c.p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-company-bank"]],decls:99,vars:58,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","account_holder_name","id","account_holder_name",3,"ngClass"],["type","text","formControlName","account_number","maxlength","15","minlength","10","id","account_number",3,"ngClass"],["type","text","formControlName","branch_name","id","branch_name",3,"ngClass"],["type","text","formControlName","IFSC_code","id","IFSC_code",3,"ngClass"],["type","text","formControlName","Swift_code","id","Swift_code",3,"ngClass"],["type","text","formControlName","credit_balance","id","credit_balance",3,"ngClass"],["type","text","formControlName","debit_balance","id","debit_balance",3,"ngClass"],[1,"form-group","my-4"],[1,"d-flex"],["type","checkbox","formControlName","is_upi_available",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["type","text","formControlName","counntry","id","counntry",3,"ngClass"],["type","text","formControlName","state","id","state",3,"ngClass"],["type","text","formControlName","city","id","city",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//masters/companyBank",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Company Bank"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Company Bank"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,_,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Account Holder Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,o,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Account Number*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,l,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Branch Name*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,g,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"IFSC Code*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,f,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Swift Code*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,Z,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",6)(47,"div",7)(48,"label"),e._uU(49,"Credit Balance*"),e.qZA(),e._UZ(50,"input",15),e.YNc(51,I,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Debit Balance*"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,k,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",17)(60,"div",18),e._UZ(61,"input",19),e.TgZ(62,"label",20),e._uU(63,"Is UPI Available"),e.qZA()()()(),e.TgZ(64,"div",6)(65,"div",7)(66,"label"),e._uU(67,"Country*"),e.qZA(),e._UZ(68,"input",21),e.YNc(69,B,2,0,"span",9),e.qZA()(),e.TgZ(70,"div",6)(71,"div",7)(72,"label"),e._uU(73," State*"),e.qZA(),e._UZ(74,"input",22),e.YNc(75,U,2,0,"span",9),e.qZA()(),e.TgZ(76,"div",6)(77,"div",7)(78,"label"),e._uU(79," City*"),e.qZA(),e._UZ(80,"input",23),e.YNc(81,S,2,0,"span",9),e.qZA()(),e.TgZ(82,"div",6)(83,"div",7)(84,"label"),e._uU(85,"Pincode*"),e.qZA(),e._UZ(86,"input",24),e.YNc(87,T,2,0,"span",9),e.qZA()(),e.TgZ(88,"div",25)(89,"div",7)(90,"label"),e._uU(91,"Address*"),e.qZA(),e._UZ(92,"textarea",26),e.YNc(93,N,2,0,"span",9),e.qZA()(),e.TgZ(94,"div",27),e.YNc(95,q,2,0,"button",28),e.YNc(96,F,3,0,"button",29),e.TgZ(97,"a",30),e._uU(98,"Cancel"),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",n.companyBankForm),e.xp6(6),e.Q6J("ngClass",e.VKq(32,u,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,u,n.f.account_holder_name.touched&&n.f.account_holder_name.invalid)),e.xp6(1),e.Q6J("ngIf",n.account_holder_name&&n.account_holder_name.invalid&&n.account_holder_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,u,n.f.account_number.touched&&n.f.account_number.invalid)),e.xp6(1),e.Q6J("ngIf",n.account_number&&n.account_number.invalid&&n.account_number.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(38,u,n.f.branch_name.touched&&n.f.branch_name.invalid)),e.xp6(1),e.Q6J("ngIf",n.branch_name&&n.branch_name.invalid&&n.branch_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,u,n.f.IFSC_code.touched&&n.f.IFSC_code.invalid)),e.xp6(1),e.Q6J("ngIf",n.IFSC_code&&n.IFSC_code.invalid&&n.IFSC_code.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,u,n.f.Swift_code.touched&&n.f.Swift_code.invalid)),e.xp6(1),e.Q6J("ngIf",n.Swift_code&&n.Swift_code.invalid&&n.Swift_code.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,u,n.f.credit_balance.touched&&n.f.credit_balance.invalid)),e.xp6(1),e.Q6J("ngIf",n.credit_balance&&n.credit_balance.invalid&&n.credit_balance.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,u,n.f.debit_balance.touched&&n.f.debit_balance.invalid)),e.xp6(1),e.Q6J("ngIf",n.debit_balance&&n.debit_balance.invalid&&n.debit_balance.touched),e.xp6(4),e.Q6J("id","checkboxMeasure-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxMeasure-"),e.xp6(6),e.Q6J("ngClass",e.VKq(48,u,n.f.counntry.touched&&n.f.counntry.invalid)),e.xp6(1),e.Q6J("ngIf",n.countryy&&n.countryy.invalid&&n.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(50,u,n.f.state.touched&&n.f.state.invalid)),e.xp6(1),e.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(52,u,n.f.city.touched&&n.f.city.invalid)),e.xp6(1),e.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(54,u,n.f.pincode.touched&&n.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",n.pincode&&n.pincode.invalid&&n.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(56,u,n.f.address.touched&&n.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",n.address&&n.address.invalid&&n.address.touched),e.xp6(2),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders))},dependencies:[d.mk,d.O5,p.yS,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.wO,a.nD,a.sg,a.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var M=s(597);const C=JSON.parse(localStorage.getItem("auth"));let v;C&&C.permission&&C.permission.map(r=>{"pos"===r.content_type.app_label&&"companybank"===r.content_type.model&&"add_companybank"==r.codename&&(v=r.codename,console.log(v))});const w=[{path:"",component:J,canActivate:[M.l],data:{allowedRoles:[v]}}];let E=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(w),p.Bz]}),t})();var Q=s(8468),Y=s(906);let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,E,Q.I,Y.ZU,a.u5,a.UX]}),t})()},597:(b,h,s)=>{s.d(h,{l:()=>e});var d=s(4650),p=s(8996),a=s(7185);let e=(()=>{class m{constructor(c,_,o){this.router=c,this.Arout=_,this.toastr=o}canActivate(c,_){const o=JSON.parse(localStorage.getItem("auth"));if(o&&o.user){const l=c.data.allowedRoles;console.log(l,"allowedRoles");const g=o.permission.some(f=>l.includes(f.codename));if(console.log(g),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return m.\u0275fac=function(c){return new(c||m)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(a._W))},m.\u0275prov=d.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);