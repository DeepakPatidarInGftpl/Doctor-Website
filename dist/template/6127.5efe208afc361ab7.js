"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6127],{76127:(I,h,r)=>{r.r(h),r.d(h,{AddcompanyModule:()=>B});var s=r(36895),p=r(88996),a=r(24006),e=r(94650),T=r(42917),b=r(97185),d=r(80927);function q(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your name "),e.qZA())}function u(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function _(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function m(t,i){if(1&t&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.s9C("value",o.currency_name),e.xp6(1),e.Oqu(o.currency_name+"-"+o.currency_symbol)}}function l(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your currency"),e.qZA())}function g(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Invalid GST Number"),e.qZA())}function y(t,i){if(1&t&&(e.TgZ(0,"option",30),e._uU(1),e.ALo(2,"slice"),e.ALo(3,"slice"),e.qZA()),2&t){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(e.Dn7(2,2,o.start_year,0,4)+"-"+e.Dn7(3,6,o.close_year,0,4))}}function v(t,i){if(1&t&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.dateError)}}function A(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function N(t,i){if(1&t&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.hij("",o.country_name," ")}}function J(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Select country"),e.qZA())}function S(t,i){if(1&t&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.state)}}function F(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Select state"),e.qZA())}function Y(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Data not available"),e.qZA())}function Q(t,i){if(1&t&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.city)}}function D(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Select city"),e.qZA())}function O(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"data not available"),e.qZA())}function E(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function P(t,i){1&t&&(e.TgZ(0,"span",29),e._uU(1,"Enter your address"),e.qZA())}function M(t,i){1&t&&(e.TgZ(0,"button",31),e._uU(1,"Submit"),e.qZA())}function w(t,i){1&t&&(e.TgZ(0,"button",32),e._UZ(1,"span",33),e._uU(2," Submit"),e.qZA())}const c=function(t){return{"is-invalid":t}};let L=(()=>{class t{constructor(o,n,Z,C,f){this.fb=o,this.copmpanyService=n,this.toastr=Z,this.router=C,this.coreService=f,this.tableData=[{ProductName:"Apple Earpods",QTY:"10.00\t",PurchasePrice:"2000.00",Discount:"500.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"2000.00\t",TotalCost:"2000.00\t",img:"assets/img/product/product7.jpg"},{ProductName:"Macbook Pro",QTY:"15.00\t",PurchasePrice:"6000.00",Discount:"100.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"1000.00\t",TotalCost:"1000.00\t",img:"assets/img/product/product6.jpg"}],this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.companyForm.controls}ngOnInit(){this.companyForm=this.fb.group({name:new a.NI("",[a.kI.required]),email:new a.NI("",[a.kI.required,a.kI.email]),phone:new a.NI("",[a.kI.required,a.kI.minLength(10),a.kI.maxLength(10),a.kI.pattern(/^[0-9]*$/)]),financial_year:new a.NI("",[a.kI.required]),currency:new a.NI("",[a.kI.required]),gst:new a.NI("",[a.kI.required,a.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),address:new a.NI("",[a.kI.required]),pincode:new a.NI("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(6)]),state:new a.NI("",[a.kI.required]),country:new a.NI("",[a.kI.required]),city:new a.NI("",[a.kI.required])}),this.getCountry(),this.getState(),this.getYear(),this.getCurrency(),this.getCity()}delete(o){this.tableData.splice(o,1)}getYear(){this.coreService.getFinancialYear().subscribe(o=>{this.yearDetails=o})}getCurrency(){this.coreService.getCurrency().subscribe(o=>{this.currencyDetails=o})}getCountry(){this.copmpanyService.countryList().subscribe(o=>{this.country=o})}getState(){this.copmpanyService.stateList().subscribe(o=>{})}getCity(){this.coreService.getCity().subscribe(o=>{})}selectState(o){this.coreService.getStateByCountryId(o).subscribe(n=>{this.state=n})}selectCity(o){this.coreService.getCityByStateId(o).subscribe(n=>{this.city=n})}submit(){this.companyForm.valid?(this.loaders=!0,this.copmpanyService.postCompany(this.companyForm.value).subscribe(o=>{o.success&&(this.loaders=!1,this.toastr.success(o.msg),this.companyForm.reset(),this.router.navigate(["//masters/companylist"]))},o=>{o.error.financial_year&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):this.companyForm.markAllAsTouched()}get name(){return this.companyForm.get("name")}get gst(){return this.companyForm.get("gst")}get phone(){return this.companyForm.get("phone")}get pincode(){return this.companyForm.get("pincode")}get financial_year(){return this.companyForm.get("financial_year")}get email(){return this.companyForm.get("email")}get currency(){return this.companyForm.get("currency")}get address(){return this.companyForm.get("address")}get countryy(){return this.companyForm.get("country")}get statee(){return this.companyForm.get("state")}get cityy(){return this.companyForm.get("city")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.qu),e.Y36(T.J),e.Y36(b._W),e.Y36(p.F0),e.Y36(d.p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-addcompany"]],decls:101,vars:55,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["formControlName","currency","required","","id","currency",1,"w-100","h-100","border",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","gst","id","gst",3,"ngClass"],["formControlName","financial_year","required","","id","financial_year",1,"w-100","h-100","border",3,"ngClass"],["formControlName","country","required","","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["stateValue",""],["formControlName","city","required","","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//masters/companylist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o){const Z=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Company"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Company "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,q,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,u,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," Phone*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,_,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31," Currency*"),e.qZA(),e.TgZ(32,"select",12)(33,"option",13),e._uU(34,"Currency Year"),e.qZA(),e.YNc(35,m,2,2,"option",14),e.qZA(),e.YNc(36,l,2,0,"span",9),e.qZA()(),e.TgZ(37,"div",6)(38,"div",7)(39,"label"),e._uU(40,"Gstin Number*"),e.qZA(),e._UZ(41,"input",15),e.YNc(42,g,2,0,"span",9),e.qZA()(),e.TgZ(43,"div",6)(44,"div",7)(45,"label"),e._uU(46," Financial Year*"),e.qZA(),e.TgZ(47,"select",16)(48,"option",13),e._uU(49,"Financial Year"),e.qZA(),e.YNc(50,y,4,10,"option",14),e.qZA(),e.YNc(51,v,2,1,"span",9),e.YNc(52,A,2,0,"span",9),e.qZA()(),e.TgZ(53,"div",6)(54,"div",7)(55,"label"),e._uU(56,"Country*"),e.qZA(),e.TgZ(57,"select",17,18),e.NdJ("change",function(){e.CHM(Z);const f=e.MAs(58);return e.KtG(n.selectState(f.value))}),e.TgZ(59,"option",13),e._uU(60,"Country"),e.qZA(),e.YNc(61,N,2,2,"option",14),e.qZA(),e.YNc(62,J,2,0,"span",9),e.qZA()(),e.TgZ(63,"div",6)(64,"div",7)(65,"label"),e._uU(66," State*"),e.qZA(),e.TgZ(67,"select",19,20),e.NdJ("change",function(){e.CHM(Z);const f=e.MAs(68);return e.KtG(n.selectCity(f.value))}),e.TgZ(69,"option",13),e._uU(70,"State"),e.qZA(),e.YNc(71,S,2,2,"option",14),e.qZA(),e.YNc(72,F,2,0,"span",9),e.YNc(73,Y,2,0,"span",9),e.qZA()(),e.TgZ(74,"div",6)(75,"div",7)(76,"label"),e._uU(77," City*"),e.qZA(),e.TgZ(78,"select",21)(79,"option",13),e._uU(80,"City"),e.qZA(),e.YNc(81,Q,2,2,"option",14),e.qZA(),e.YNc(82,D,2,0,"span",9),e.YNc(83,O,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",6)(85,"div",7)(86,"label"),e._uU(87,"Pincode*"),e.qZA(),e._UZ(88,"input",22),e.YNc(89,E,2,0,"span",9),e.qZA()(),e.TgZ(90,"div",23)(91,"div",7)(92,"label"),e._uU(93,"Address*"),e.qZA(),e._UZ(94,"textarea",24),e.YNc(95,P,2,0,"span",9),e.qZA()(),e.TgZ(96,"div",25),e.YNc(97,M,2,0,"button",26),e.YNc(98,w,3,0,"button",27),e.TgZ(99,"a",28),e._uU(100,"Cancel"),e.qZA()()()()()()}2&o&&(e.xp6(8),e.Q6J("formGroup",n.companyForm),e.xp6(6),e.Q6J("ngClass",e.VKq(33,c,n.f.name.touched&&n.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",n.name&&n.name.invalid&&n.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,c,n.f.email.touched&&n.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,c,n.f.phone.touched&&n.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",n.phone&&n.phone.invalid&&n.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,c,n.f.currency.touched&&n.f.currency.invalid)),e.xp6(3),e.Q6J("ngForOf",n.currencyDetails),e.xp6(1),e.Q6J("ngIf",n.currency&&n.currency.invalid&&n.currency.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,c,n.f.gst.touched&&n.f.gst.invalid)),e.xp6(1),e.Q6J("ngIf",n.gst&&n.gst.invalid&&n.gst.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,c,n.f.financial_year.touched&&n.f.financial_year.invalid)),e.xp6(3),e.Q6J("ngForOf",n.yearDetails),e.xp6(1),e.Q6J("ngIf",n.dateError),e.xp6(1),e.Q6J("ngIf",n.financial_year&&n.financial_year.invalid&&n.financial_year.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(45,c,n.f.country.touched&&n.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",n.country),e.xp6(1),e.Q6J("ngIf",n.countryy&&n.countryy.invalid&&n.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,c,n.f.state.touched&&n.f.state.invalid)),e.xp6(4),e.Q6J("ngForOf",n.state),e.xp6(1),e.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched&&(null==n.state?null:n.state.length)>0),e.xp6(1),e.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched&&(null==n.state?null:n.state.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(49,c,n.f.city.touched&&n.f.city.invalid)),e.xp6(3),e.Q6J("ngForOf",n.city),e.xp6(1),e.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched&&(null==n.city?null:n.city.length)>0),e.xp6(1),e.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched&&(null==n.city?null:n.city.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(51,c,n.f.pincode.touched&&n.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",n.pincode&&n.pincode.invalid&&n.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(53,c,n.f.address.touched&&n.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",n.address&&n.address.invalid&&n.address.touched),e.xp6(2),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders))},dependencies:[s.mk,s.sg,s.O5,p.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u,s.OU],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var K=r(30597);const U=JSON.parse(localStorage.getItem("auth"));let G;U&&U.map(i=>{"master"===i.content_type.app_label&&"company"===i.content_type.model&&"add_company"==i.codename&&(G=i.codename)});const R=[{path:"",component:L,canActivate:[K.l],data:{allowedRoles:["add_company"]}}];let k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),p.Bz]}),t})();var V=r(30906);let B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,k,V.ZU,a.u5,a.UX]}),t})()},30597:(I,h,r)=>{r.d(h,{l:()=>b});var s=r(94650),p=r(88996),a=r(97185),e=r(42917),T=r(80927);let b=(()=>{class d{constructor(u,_,m,l,g){this.router=u,this.Arout=_,this.toastr=m,this.profileService=l,this.coreService=g}canActivate(u,_){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),m){const l=u.data.allowedRoles;console.log(l,"allowedRoles");const g=m.some(y=>l.includes(y.codename));if(console.log(g),this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails);const v=y?.permission,A=this.profileService.getUserDetails();(!A||A.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(u){return new(u||d)(s.LFG(p.F0),s.LFG(p.gz),s.LFG(a._W),s.LFG(e.J),s.LFG(T.p))},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);