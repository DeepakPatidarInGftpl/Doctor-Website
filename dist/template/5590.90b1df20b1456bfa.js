"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5590],{2917:(I,y,s)=>{s.d(y,{J:()=>_});var l=s(529),u=s(1135),a=s(2340),e=s(4650),m=s(4948);let _=(()=>{class p{constructor(r,c){this.http=r,this.HttpService=c,this.edit=new u.X(""),this.companyBehaviour=new u.X(null),this.apiUrl=`${a.N.api}`}editData(r){this.edit.next(r),console.log(r),localStorage.setItem("editCompany",JSON.stringify(r))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(r){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}companyYearIsActive(r,c){return this.http.patch(`${this.apiUrl+"/pv-api/company/?id="}${r}`,c)}postCompany(r){return this.http.post(this.apiUrl+"/pv-api/company/",r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(r,c){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${c}`,r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(r){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(r,c){var g={body:{id:c},headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${r}`,g)}}return p.\u0275fac=function(r){return new(r||p)(e.LFG(l.eN),e.LFG(m.Y))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},5590:(I,y,s)=>{s.r(y),s.d(y,{AddcompanyModule:()=>G});var l=s(6895),u=s(8996),a=s(4006),e=s(4650),m=s(2917),_=s(7185),p=s(927);function h(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your name "),e.qZA())}function r(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function c(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function g(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.s9C("value",o.currency_name),e.xp6(1),e.Oqu(o.currency_name+"-"+o.currency_symbol)}}function C(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your currency"),e.qZA())}function b(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Invalid GST Number"),e.qZA())}function q(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.ALo(2,"slice"),e.ALo(3,"slice"),e.qZA()),2&n){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(e.Dn7(2,2,o.start_year,0,4)+"-"+e.Dn7(3,6,o.close_year,0,4))}}function U(n,i){if(1&n&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.dateError)}}function N(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function S(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.hij("",o.country_name," ")}}function J(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select country"),e.qZA())}function F(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.state)}}function M(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select state"),e.qZA())}function Y(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Data not available"),e.qZA())}function E(n,i){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.city)}}function O(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select city"),e.qZA())}function Q(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"data not available"),e.qZA())}function D(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function P(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your address"),e.qZA())}function k(n,i){1&n&&(e.TgZ(0,"button",31),e._uU(1,"Submit"),e.qZA())}function w(n,i){1&n&&(e.TgZ(0,"button",32),e._UZ(1,"span",33),e._uU(2," Submit"),e.qZA())}const d=function(n){return{"is-invalid":n}};let L=(()=>{class n{constructor(o,t,A,v,f){this.fb=o,this.copmpanyService=t,this.toastr=A,this.router=v,this.coreService=f,this.tableData=[{ProductName:"Apple Earpods",QTY:"10.00\t",PurchasePrice:"2000.00",Discount:"500.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"2000.00\t",TotalCost:"2000.00\t",img:"assets/img/product/product7.jpg"},{ProductName:"Macbook Pro",QTY:"15.00\t",PurchasePrice:"6000.00",Discount:"100.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"1000.00\t",TotalCost:"1000.00\t",img:"assets/img/product/product6.jpg"}],this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.companyForm.controls}ngOnInit(){this.companyForm=this.fb.group({name:new a.NI("",[a.kI.required]),email:new a.NI("",[a.kI.required,a.kI.email]),phone:new a.NI("",[a.kI.required,a.kI.minLength(10),a.kI.maxLength(10),a.kI.pattern(/^[0-9]*$/)]),financial_year:new a.NI("",[a.kI.required]),currency:new a.NI("",[a.kI.required]),gst:new a.NI("",[a.kI.required,a.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),address:new a.NI("",[a.kI.required]),pincode:new a.NI("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(6)]),state:new a.NI("",[a.kI.required]),country:new a.NI("",[a.kI.required]),city:new a.NI("",[a.kI.required])}),this.getCountry(),this.getState(),this.getYear(),this.getCurrency(),this.getCity()}delete(o){this.tableData.splice(o,1)}getYear(){this.coreService.getFinancialYear().subscribe(o=>{console.log(o),this.yearDetails=o})}getCurrency(){this.coreService.getCurrency().subscribe(o=>{console.log(o),this.currencyDetails=o})}getCountry(){this.copmpanyService.countryList().subscribe(o=>{this.country=o})}getState(){this.copmpanyService.stateList().subscribe(o=>{console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(o=>{})}selectState(o){console.log(o),this.coreService.getStateByCountryId(o).subscribe(t=>{this.state=t,console.log(this.state)})}selectCity(o){this.coreService.getCityByStateId(o).subscribe(t=>{this.city=t})}submit(){console.log(this.companyForm.value),this.companyForm.valid?(this.loaders=!0,this.copmpanyService.postCompany(this.companyForm.value).subscribe(o=>{console.log(o),"Successfuly Added"==o.msg&&(this.loaders=!1,this.toastr.success(o.msg),this.companyForm.reset(),this.router.navigate(["//masters/companylist"]))},o=>{console.log(o.error.gst),o.error.financial_year&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.companyForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.companyForm.get("name")}get gst(){return this.companyForm.get("gst")}get phone(){return this.companyForm.get("phone")}get pincode(){return this.companyForm.get("pincode")}get financial_year(){return this.companyForm.get("financial_year")}get email(){return this.companyForm.get("email")}get currency(){return this.companyForm.get("currency")}get address(){return this.companyForm.get("address")}get countryy(){return this.companyForm.get("country")}get statee(){return this.companyForm.get("state")}get cityy(){return this.companyForm.get("city")}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.qu),e.Y36(m.J),e.Y36(_._W),e.Y36(u.F0),e.Y36(p.p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addcompany"]],decls:101,vars:55,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["formControlName","currency","required","","id","currency",1,"w-100","h-100","border",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","gst","id","gst",3,"ngClass"],["formControlName","financial_year","required","","id","financial_year",1,"w-100","h-100","border",3,"ngClass"],["formControlName","country","required","","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["stateValue",""],["formControlName","city","required","","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//company/companylist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,t){if(1&o){const A=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Company"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Company "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,h,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,r,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," Phone*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,c,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31," Currency*"),e.qZA(),e.TgZ(32,"select",12)(33,"option",13),e._uU(34,"Currency Year"),e.qZA(),e.YNc(35,g,2,2,"option",14),e.qZA(),e.YNc(36,C,2,0,"span",9),e.qZA()(),e.TgZ(37,"div",6)(38,"div",7)(39,"label"),e._uU(40,"Gstin Number*"),e.qZA(),e._UZ(41,"input",15),e.YNc(42,b,2,0,"span",9),e.qZA()(),e.TgZ(43,"div",6)(44,"div",7)(45,"label"),e._uU(46," Financial Year*"),e.qZA(),e.TgZ(47,"select",16)(48,"option",13),e._uU(49,"Financial Year"),e.qZA(),e.YNc(50,q,4,10,"option",14),e.qZA(),e.YNc(51,U,2,1,"span",9),e.YNc(52,N,2,0,"span",9),e.qZA()(),e.TgZ(53,"div",6)(54,"div",7)(55,"label"),e._uU(56,"Country*"),e.qZA(),e.TgZ(57,"select",17,18),e.NdJ("change",function(){e.CHM(A);const f=e.MAs(58);return e.KtG(t.selectState(f.value))}),e.TgZ(59,"option",13),e._uU(60,"Country"),e.qZA(),e.YNc(61,S,2,2,"option",14),e.qZA(),e.YNc(62,J,2,0,"span",9),e.qZA()(),e.TgZ(63,"div",6)(64,"div",7)(65,"label"),e._uU(66," State*"),e.qZA(),e.TgZ(67,"select",19,20),e.NdJ("change",function(){e.CHM(A);const f=e.MAs(68);return e.KtG(t.selectCity(f.value))}),e.TgZ(69,"option",13),e._uU(70,"State"),e.qZA(),e.YNc(71,F,2,2,"option",14),e.qZA(),e.YNc(72,M,2,0,"span",9),e.YNc(73,Y,2,0,"span",9),e.qZA()(),e.TgZ(74,"div",6)(75,"div",7)(76,"label"),e._uU(77," City*"),e.qZA(),e.TgZ(78,"select",21)(79,"option",13),e._uU(80,"City"),e.qZA(),e.YNc(81,E,2,2,"option",14),e.qZA(),e.YNc(82,O,2,0,"span",9),e.YNc(83,Q,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",6)(85,"div",7)(86,"label"),e._uU(87,"Pincode*"),e.qZA(),e._UZ(88,"input",22),e.YNc(89,D,2,0,"span",9),e.qZA()(),e.TgZ(90,"div",23)(91,"div",7)(92,"label"),e._uU(93,"Address*"),e.qZA(),e._UZ(94,"textarea",24),e.YNc(95,P,2,0,"span",9),e.qZA()(),e.TgZ(96,"div",25),e.YNc(97,k,2,0,"button",26),e.YNc(98,w,3,0,"button",27),e.TgZ(99,"a",28),e._uU(100,"Cancel"),e.qZA()()()()()()}2&o&&(e.xp6(8),e.Q6J("formGroup",t.companyForm),e.xp6(6),e.Q6J("ngClass",e.VKq(33,d,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,d,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,d,t.f.phone.touched&&t.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,d,t.f.currency.touched&&t.f.currency.invalid)),e.xp6(3),e.Q6J("ngForOf",t.currencyDetails),e.xp6(1),e.Q6J("ngIf",t.currency&&t.currency.invalid&&t.currency.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,d,t.f.gst.touched&&t.f.gst.invalid)),e.xp6(1),e.Q6J("ngIf",t.gst&&t.gst.invalid&&t.gst.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,d,t.f.financial_year.touched&&t.f.financial_year.invalid)),e.xp6(3),e.Q6J("ngForOf",t.yearDetails),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.financial_year&&t.financial_year.invalid&&t.financial_year.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(45,d,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(47,d,t.f.state.touched&&t.f.state.invalid)),e.xp6(4),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(49,d,t.f.city.touched&&t.f.city.invalid)),e.xp6(3),e.Q6J("ngForOf",t.city),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(51,d,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(53,d,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders))},dependencies:[l.mk,l.sg,l.O5,u.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u,l.OU],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})();var $=s(597);const Z=JSON.parse(localStorage.getItem("auth"));let T;Z&&Z.permission&&Z.permission.map(i=>{"master"===i.content_type.app_label&&"company"===i.content_type.model&&"add_company"==i.codename&&(T=i.codename,console.log(T))});const K=[{path:"",component:L,canActivate:[$.l],data:{allowedRoles:[T]}}];let R=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(K),u.Bz]}),n})();var W=s(906);let G=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,R,W.ZU,a.u5,a.UX]}),n})()},597:(I,y,s)=>{s.d(y,{l:()=>e});var l=s(4650),u=s(8996),a=s(7185);let e=(()=>{class m{constructor(p,h,r){this.router=p,this.Arout=h,this.toastr=r}canActivate(p,h){const r=JSON.parse(localStorage.getItem("auth"));if(r&&r.user){const c=p.data.allowedRoles;console.log(c,"allowedRoles");const g=r.permission.some(C=>c.includes(C.codename));if(console.log(g),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return m.\u0275fac=function(p){return new(p||m)(l.LFG(u.F0),l.LFG(u.gz),l.LFG(a._W))},m.\u0275prov=l.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);