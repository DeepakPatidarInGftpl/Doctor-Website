"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4022],{2917:(A,h,i)=>{i.d(h,{J:()=>_});var d=i(529),u=i(1135),o=i(2340),e=i(4650),g=i(4948);let _=(()=>{class p{constructor(a,l){this.http=a,this.HttpService=l,this.edit=new u.X(""),this.companyBehaviour=new u.X(null),this.apiUrl=`${o.N.api}`}editData(a){this.edit.next(a),console.log(a),localStorage.setItem("editCompany",JSON.stringify(a))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(a){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${a}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}companyYearIsActive(a,l){return this.http.patch(`${this.apiUrl+"/pv-api/company/?id="}${a}`,l)}postCompany(a){return this.http.post(this.apiUrl+"/pv-api/company/",a,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(a,l){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${l}`,a,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(a){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${a}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(a,l){var c={body:{id:l},headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${a}`,c)}}return p.\u0275fac=function(a){return new(a||p)(e.LFG(d.eN),e.LFG(g.Y))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},4022:(A,h,i)=>{i.r(h),i.d(h,{UpdateAddressStoreModule:()=>P});var d=i(6895),u=i(8996),o=i(4006),e=i(4650),g=i(2917),_=i(7185),p=i(927),v=i(2559);function a(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your name "),e.qZA())}function l(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function c(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function f(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function C(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter Address line 1"),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter line 2"),e.qZA())}function Z(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Select country"),e.qZA())}function I(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Select state"),e.qZA())}function T(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Data not available"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Select city"),e.qZA())}function F(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"data not available"),e.qZA())}function q(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function J(n,r){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Enter your address"),e.qZA())}function M(n,r){1&n&&(e.TgZ(0,"button",26),e._uU(1,"Submit"),e.qZA())}function E(n,r){1&n&&(e.TgZ(0,"button",27),e._UZ(1,"span",28),e._uU(2," Submit"),e.qZA())}const m=function(n){return{"is-invalid":n}};let w=(()=>{class n{constructor(s,t,U,k,D,R,$){this.fb=s,this.copmpanyService=t,this.toastr=U,this.router=k,this.coreService=D,this.websiteService=R,this.Arout=$,this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.addressStoreForm.controls}ngOnInit(){this.addressStoreForm=this.fb.group({name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email]),mobile_no:new o.NI("",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(10),o.kI.pattern(/^[0-9]*$/)]),alternative_mobile_no:new o.NI("",[o.kI.minLength(10),o.kI.maxLength(10),o.kI.pattern(/^[0-9]*$/)]),line1:new o.NI(""),line2:new o.NI(""),address:new o.NI("",[o.kI.required]),pincode:new o.NI("",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(6)]),state:new o.NI(""),country:new o.NI(""),city:new o.NI("")}),this.id=this.Arout.snapshot.paramMap.get("id"),this.websiteService.getAddressStoreById(this.id).subscribe(s=>{console.log(s),this.addressStoreForm.patchValue(s)})}getCountry(){this.copmpanyService.countryList().subscribe(s=>{this.country=s})}getState(){this.copmpanyService.stateList().subscribe(s=>{console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(s=>{})}selectState(s){console.log(s),this.coreService.getStateByCountryId(s).subscribe(t=>{this.state=t,console.log(this.state)})}selectCity(s){this.coreService.getCityByStateId(s).subscribe(t=>{this.city=t})}submit(){console.log(this.addressStoreForm.value);var s=new FormData;s.append("name",this.addressStoreForm.get("name")?.value),s.append("email",this.addressStoreForm.get("email")?.value),s.append("mobile_no",this.addressStoreForm.get("mobile_no")?.value),s.append("alternative_mobile_no",this.addressStoreForm.get("alternative_mobile_no")?.value),s.append("line1",this.addressStoreForm.get("line1")?.value),s.append("line2",this.addressStoreForm.get("line2")?.value),s.append("address",this.addressStoreForm.get("address")?.value),s.append("pincode",this.addressStoreForm.get("pincode")?.value),s.append("state",this.addressStoreForm.get("state")?.value),s.append("country",this.addressStoreForm.get("country")?.value),s.append("city",this.addressStoreForm.get("city")?.value),this.addressStoreForm.valid?(this.loaders=!0,this.websiteService.updateAddressStore(s,this.id).subscribe(t=>{console.log(t),this.addRes=t,"True"==this.addRes.Is_Success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.addressStoreForm.reset(),this.router.navigate(["//website/addressStore"])):this.loaders=!1},t=>{this.loaders=!1,console.log(t.error)})):(this.loaders=!1,this.addressStoreForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.addressStoreForm.get("name")}get line1(){return this.addressStoreForm.get("line1")}get phone(){return this.addressStoreForm.get("mobile_no")}get pincode(){return this.addressStoreForm.get("pincode")}get alternative_mobile_no(){return this.addressStoreForm.get("alternative_mobile_no")}get email(){return this.addressStoreForm.get("email")}get line2(){return this.addressStoreForm.get("line2")}get address(){return this.addressStoreForm.get("address")}get countryy(){return this.addressStoreForm.get("country")}get statee(){return this.addressStoreForm.get("state")}get cityy(){return this.addressStoreForm.get("city")}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(o.qu),e.Y36(g.J),e.Y36(_._W),e.Y36(u.F0),e.Y36(p.p),e.Y36(v.K),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-address-store"]],decls:85,vars:49,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","mobile_no","maxlength","10","minlength","10","id","mobile_no",3,"ngClass"],["type","text","formControlName","alternative_mobile_no","id","alternative_mobile_no","maxlength","10","minlength","10",3,"ngClass"],["formControlName","line1","id","line1",3,"ngClass"],["formControlName","line2","id","line2",3,"ngClass"],["type","text","formControlName","country","id","country",3,"ngClass"],["type","text","formControlName","state","id","state",3,"ngClass"],["type","text","formControlName","city","id","city",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//website/addressStore",1,"btn","btn-cancel"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Address Store"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Address Store "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,a,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,l,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," Phone*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,c,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Alternative Mobile No"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,f,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Line 1"),e.qZA(),e.TgZ(38,"textarea",13),e._uU(39,"                            "),e.qZA(),e.YNc(40,C,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44," Line 2"),e.qZA(),e.TgZ(45,"textarea",14),e._uU(46," "),e.qZA(),e.YNc(47,b,2,0,"span",9),e.qZA()(),e.TgZ(48,"div",6)(49,"div",7)(50,"label"),e._uU(51,"Country"),e.qZA(),e._UZ(52,"input",15),e.YNc(53,Z,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57," State"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,I,2,0,"span",9),e.YNc(60,T,2,0,"span",9),e.qZA()(),e.TgZ(61,"div",6)(62,"div",7)(63,"label"),e._uU(64," City"),e.qZA(),e._UZ(65,"input",17),e.YNc(66,N,2,0,"span",9),e.YNc(67,F,2,0,"span",9),e.qZA()(),e.TgZ(68,"div",6)(69,"div",7)(70,"label"),e._uU(71,"Pincode*"),e.qZA(),e._UZ(72,"input",18),e.YNc(73,q,2,0,"span",9),e.qZA()(),e.TgZ(74,"div",19)(75,"div",7)(76,"label"),e._uU(77,"Address*"),e.qZA(),e._UZ(78,"textarea",20),e.YNc(79,J,2,0,"span",9),e.qZA()(),e.TgZ(80,"div",21),e.YNc(81,M,2,0,"button",22),e.YNc(82,E,3,0,"button",23),e.TgZ(83,"a",24),e._uU(84,"Cancel"),e.qZA()()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",t.addressStoreForm),e.xp6(6),e.Q6J("ngClass",e.VKq(27,m,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,m,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,m,t.f.mobile_no.touched&&t.f.mobile_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,m,t.f.alternative_mobile_no.touched&&t.f.alternative_mobile_no.invalid)),e.xp6(1),e.Q6J("ngIf",t.alternative_mobile_no&&t.alternative_mobile_no.invalid&&t.alternative_mobile_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,m,t.f.line1.touched&&t.f.line1.invalid)),e.xp6(2),e.Q6J("ngIf",t.line1&&t.line1.invalid&&t.line1.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,m,t.f.line2.touched&&t.f.line2.invalid)),e.xp6(2),e.Q6J("ngIf",t.line2&&t.line2.invalid&&t.line2.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,m,t.f.country.touched&&t.f.country.invalid)),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,m,t.f.state.touched&&t.f.state.invalid)),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,m,t.f.city.touched&&t.f.city.invalid)),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(45,m,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,m,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[d.mk,d.O5,u.yS,o._Y,o.Fj,o.JJ,o.JL,o.wO,o.nD,o.sg,o.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})();var L=i(597);const y=JSON.parse(localStorage.getItem("auth"));let S;y&&y.permission&&y.permission.map(r=>{"order"===r.content_type.app_label&&"storeaddress"===r.content_type.model&&"change_storeaddress"==r.codename&&(S=r.codename,console.log(S))});const Q=[{path:"",component:w,canActivate:[L.l],data:{allowedRoles:[S]}}];let Y=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(Q),u.Bz]}),n})();var O=i(906);let P=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,Y,O.ZU,o.u5,o.UX]}),n})()},597:(A,h,i)=>{i.d(h,{l:()=>e});var d=i(4650),u=i(8996),o=i(7185);let e=(()=>{class g{constructor(p,v,a){this.router=p,this.Arout=v,this.toastr=a}canActivate(p,v){const a=JSON.parse(localStorage.getItem("auth"));if(a&&a.user){const l=p.data.allowedRoles;console.log(l,"allowedRoles");const c=a.permission.some(f=>l.includes(f.codename));if(console.log(c),c)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return g.\u0275fac=function(p){return new(p||g)(d.LFG(u.F0),d.LFG(u.gz),d.LFG(o._W))},g.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);