"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6531],{2917:(E,_,s)=>{s.d(_,{J:()=>C});var l=s(529),u=s(1135),o=s(2340),e=s(4650),y=s(4948);let C=(()=>{class c{constructor(r,d){this.http=r,this.HttpService=d,this.edit=new u.X(""),this.companyBehaviour=new u.X(null),this.apiUrl=`${o.N.api}`}editData(r){this.edit.next(r),console.log(r),localStorage.setItem("editCompany",JSON.stringify(r))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(r){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}companyYearIsActive(r,d){return this.http.patch(`${this.apiUrl+"/pv-api/company/?id="}${r}`,d)}postCompany(r){return this.http.post(this.apiUrl+"/pv-api/company/",r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(r,d){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${d}`,r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(r){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(r,d){var h={body:{id:d},headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${r}`,h)}}return c.\u0275fac=function(r){return new(r||c)(e.LFG(l.eN),e.LFG(y.Y))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},6531:(E,_,s)=>{s.r(_),s.d(_,{EditcompanyModule:()=>W});var l=s(6895),u=s(8996),o=s(4006),e=s(4650),y=s(2917),C=s(7185),c=s(927);function f(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your name "),e.qZA())}function r(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function d(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function h(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your currency"),e.qZA())}function Z(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Invalid GST Number"),e.qZA())}function I(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.ALo(2,"slice"),e.ALo(3,"slice"),e.qZA()),2&n){const a=i.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(e.Dn7(2,2,a.start_year,0,4)+"-"+e.Dn7(3,6,a.close_year,0,4))}}function M(n,i){if(1&n&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.Oqu(a.dateError)}}function q(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function b(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const a=i.$implicit;e.s9C("value",a.id),e.xp6(1),e.hij("",a.country_name," ")}}function N(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select country"),e.qZA())}function U(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const a=i.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.state)}}function J(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select state"),e.qZA())}function S(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Data not available"),e.qZA())}function F(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const a=i.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(a.city)}}function Y(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select city"),e.qZA())}function O(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"data not available"),e.qZA())}function Q(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function k(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your address"),e.qZA())}function w(n,i){1&n&&(e.TgZ(0,"button",31),e._uU(1,"Submit"),e.qZA())}function D(n,i){1&n&&(e.TgZ(0,"button",32),e._UZ(1,"span",33),e._uU(2," Submit"),e.qZA())}const m=function(n){return{"is-invalid":n}};let L=(()=>{class n{constructor(a,t,v,g,p,B){this.fb=a,this.Arout=t,this.copmpanyService=v,this.router=g,this.toastr=p,this.coreService=B,this.dateError=null,this.loaders=!1,console.log(this.router.getCurrentNavigation()?.extras?.state?.example)}get f(){return this.companyForm.controls}ngOnInit(){this.companyId=this.Arout.snapshot.paramMap.get("id"),this.getCountry(),this.getState(),this.getCity(),this.getYear(),this.copmpanyService.getCompanyById(this.companyId).subscribe(a=>{this.data=a,console.log(this.data),this.companyForm.get("country")?.patchValue(this.data.country.id),this.selectState(this.data.country.id),this.companyForm.get("state")?.patchValue(this.data.state.id),this.selectCity(this.data.state.id),this.companyForm.get("city")?.patchValue(this.data.city.id),this.companyForm.get("financial_year")?.patchValue(this.data?.financial_year?.id),this.selectS=this.data.state,console.log(this.state)}),this.companyForm=this.fb.group({name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email]),phone:new o.NI("",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(10),o.kI.pattern(/^[0-9]*$/)]),financial_year:new o.NI("",[o.kI.required]),currency:new o.NI("",[o.kI.required]),gst:new o.NI("",[o.kI.required,o.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),address:new o.NI("",[o.kI.required]),pincode:new o.NI("",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(6)]),state:new o.NI("",[o.kI.required]),country:new o.NI("",[o.kI.required]),city:new o.NI("",[o.kI.required])})}getCountry(){this.copmpanyService.countryList().subscribe(a=>{this.country=a})}getState(){this.copmpanyService.stateList().subscribe(a=>{console.log(this.state)})}selectState(a){console.log(a),this.coreService.getStateByCountryId(a).subscribe(t=>{this.state=t,console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(a=>{})}selectCity(a){console.log(a),this.coreService.getCityByStateId(a).subscribe(t=>{this.city=t})}getYear(){this.coreService.getFinancialYear().subscribe(a=>{console.log(a),this.yearDetails=a})}submit(){this.companyForm.valid?(this.loaders=!0,this.copmpanyService.updateCompany(this.companyForm.value,this.companyId).subscribe(a=>{console.log(a),"Company updated successfully"==a.msg&&(this.loaders=!1,this.toastr.success(a.msg),this.companyForm.reset(),this.router.navigate(["//masters/companylist"]))},a=>{a.error.financial_year&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.companyForm.markAllAsTouched(),console.log("error"))}get name(){return this.companyForm.get("name")}get gst(){return this.companyForm.get("gst")}get phone(){return this.companyForm.get("phone")}get pincode(){return this.companyForm.get("pincode")}get financial_year(){return this.companyForm.get("financial_year")}get email(){return this.companyForm.get("email")}get currency(){return this.companyForm.get("currency")}get address(){return this.companyForm.get("address")}get countryy(){return this.companyForm.get("country")}get statee(){return this.companyForm.get("state")}get cityy(){return this.companyForm.get("city")}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(o.qu),e.Y36(u.gz),e.Y36(y.J),e.Y36(u.F0),e.Y36(C._W),e.Y36(c.p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-editcompany"]],decls:96,vars:61,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass","ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass","ngModel","ngModelChange"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass","ngModel","ngModelChange"],["type","text","formControlName","currency","id","currency",3,"ngClass","ngModel","ngModelChange"],["type","text","formControlName","gst","id","gst",3,"ngClass","ngModel","ngModelChange"],["formControlName","financial_year","required","","id","financial_year",1,"w-100","h-100","border",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","country","required","","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["stateValue",""],["formControlName","city","required","","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass","ngModel","ngModelChange"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//company/companylist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,t){if(1&a){const v=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update Company"),e.qZA()()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),e._uU(11," Name*"),e.qZA(),e.TgZ(12,"input",8),e.NdJ("ngModelChange",function(p){return t.data.name=p}),e.qZA(),e.YNc(13,f,2,0,"span",9),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Email*"),e.qZA(),e.TgZ(18,"input",10),e.NdJ("ngModelChange",function(p){return t.data.email=p}),e.qZA(),e.YNc(19,r,2,0,"span",9),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7)(22,"label"),e._uU(23," Phone*"),e.qZA(),e.TgZ(24,"input",11),e.NdJ("ngModelChange",function(p){return t.data.phone=p}),e.qZA(),e.YNc(25,d,2,0,"span",9),e.qZA()(),e.TgZ(26,"div",6)(27,"div",7)(28,"label"),e._uU(29," Currency*"),e.qZA(),e.TgZ(30,"input",12),e.NdJ("ngModelChange",function(p){return t.data.currency=p}),e.qZA(),e.YNc(31,h,2,0,"span",9),e.qZA()(),e.TgZ(32,"div",6)(33,"div",7)(34,"label"),e._uU(35," Gstin Number*"),e.qZA(),e.TgZ(36,"input",13),e.NdJ("ngModelChange",function(p){return t.data.gst=p}),e.qZA(),e.YNc(37,Z,2,0,"span",9),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7)(40,"label"),e._uU(41," Financial Year*"),e.qZA(),e.TgZ(42,"select",14)(43,"option",15),e._uU(44,"Financial Year"),e.qZA(),e.YNc(45,I,4,10,"option",16),e.qZA(),e.YNc(46,M,2,1,"span",9),e.YNc(47,q,2,0,"span",9),e.qZA()(),e.TgZ(48,"div",6)(49,"div",7)(50,"label"),e._uU(51,"Country*"),e.qZA(),e.TgZ(52,"select",17,18),e.NdJ("change",function(){e.CHM(v);const p=e.MAs(53);return e.KtG(t.selectState(p.value))}),e.TgZ(54,"option",15),e._uU(55,"Country"),e.qZA(),e.YNc(56,b,2,2,"option",16),e.qZA(),e.YNc(57,N,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",7)(60,"label"),e._uU(61," State*"),e.qZA(),e.TgZ(62,"select",19,20),e.NdJ("change",function(){e.CHM(v);const p=e.MAs(63);return e.KtG(t.selectCity(p.value))}),e.TgZ(64,"option",15),e._uU(65,"State"),e.qZA(),e.YNc(66,U,2,2,"option",16),e.qZA(),e.YNc(67,J,2,0,"span",9),e.YNc(68,S,2,0,"span",9),e.qZA()(),e.TgZ(69,"div",6)(70,"div",7)(71,"label"),e._uU(72," City*"),e.qZA(),e.TgZ(73,"select",21)(74,"option",15),e._uU(75,"City"),e.qZA(),e.YNc(76,F,2,2,"option",16),e.qZA(),e.YNc(77,Y,2,0,"span",9),e.YNc(78,O,2,0,"span",9),e.qZA()(),e.TgZ(79,"div",6)(80,"div",7)(81,"label"),e._uU(82,"Pincode*"),e.qZA(),e.TgZ(83,"input",22),e.NdJ("ngModelChange",function(p){return t.data.pincode=p}),e.qZA(),e.YNc(84,Q,2,0,"span",9),e.qZA()(),e.TgZ(85,"div",23)(86,"div",7)(87,"label"),e._uU(88,"Address*"),e.qZA(),e.TgZ(89,"textarea",24),e.NdJ("ngModelChange",function(p){return t.data.address=p}),e.qZA(),e.YNc(90,k,2,0,"span",9),e.qZA()(),e.TgZ(91,"div",25),e.YNc(92,w,2,0,"button",26),e.YNc(93,D,3,0,"button",27),e.TgZ(94,"a",28),e._uU(95,"Cancel"),e.qZA()()()()()()}2&a&&(e.xp6(6),e.Q6J("formGroup",t.companyForm),e.xp6(6),e.Q6J("ngClass",e.VKq(39,m,t.f.name.touched&&t.f.name.invalid))("ngModel",t.data.name),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,m,t.f.email.touched&&t.f.email.invalid))("ngModel",t.data.email),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,m,t.f.phone.touched&&t.f.phone.invalid))("ngModel",t.data.phone),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(45,m,t.f.currency.touched&&t.f.currency.invalid))("ngModel",t.data.currency),e.xp6(1),e.Q6J("ngIf",t.currency&&t.currency.invalid&&t.currency.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,m,t.f.gst.touched&&t.f.gst.invalid))("ngModel",t.data.gst),e.xp6(1),e.Q6J("ngIf",t.gst&&t.gst.invalid&&t.gst.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(49,m,t.f.financial_year.touched&&t.f.financial_year.invalid)),e.xp6(3),e.Q6J("ngForOf",t.yearDetails),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.financial_year&&t.financial_year.invalid&&t.financial_year.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(51,m,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(53,m,t.f.state.touched&&t.f.state.invalid)),e.xp6(4),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(55,m,t.f.city.touched&&t.f.city.invalid)),e.xp6(3),e.Q6J("ngForOf",t.city),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(57,m,t.f.pincode.touched&&t.f.pincode.invalid))("ngModel",t.data.pincode),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(59,m,t.f.address.touched&&t.f.address.invalid))("ngModel",t.data.address),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[l.mk,l.sg,l.O5,u.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.sg,o.u,l.OU],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})();var P=s(597);const A=JSON.parse(localStorage.getItem("auth"));let T;A&&A.permission&&A.permission.map(i=>{"master"===i.content_type.app_label&&"company"===i.content_type.model&&"change_company"==i.codename&&(T=i.codename,console.log(T))});const $=[{path:"",component:L,canActivate:[P.l],data:{allowedRoles:[T]}}];let K=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild($),u.Bz]}),n})();var R=s(906);let W=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,K,o.u5,o.UX,R.ZU]}),n})()},597:(E,_,s)=>{s.d(_,{l:()=>e});var l=s(4650),u=s(8996),o=s(7185);let e=(()=>{class y{constructor(c,f,r){this.router=c,this.Arout=f,this.toastr=r}canActivate(c,f){const r=JSON.parse(localStorage.getItem("auth"));if(r&&r.user){const d=c.data.allowedRoles;console.log(d,"allowedRoles");const h=r.permission.some(Z=>d.includes(Z.codename));if(console.log(h),h)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return y.\u0275fac=function(c){return new(c||y)(l.LFG(u.F0),l.LFG(u.gz),l.LFG(o._W))},y.\u0275prov=l.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()}}]);