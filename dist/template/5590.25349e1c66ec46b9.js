"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5590],{2917:(A,g,s)=>{s.d(g,{J:()=>h});var d=s(529),m=s(1135),o=s(2340),e=s(1571),y=s(4948);let h=(()=>{class c{constructor(i,p){this.http=i,this.HttpService=p,this.edit=new m.X(""),this.companyBehaviour=new m.X(null),this.apiUrl=`${o.N.api}`}editData(i){this.edit.next(i),console.log(i),localStorage.setItem("editCompany",JSON.stringify(i))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})}).subscribe(p=>{localStorage.setItem("companyList",JSON.stringify(p)),this.companyBehaviour.next(null)})}getCompanyById(i){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${i}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}postCompany(i){return this.http.post(this.apiUrl+"/pv-api/company/",i,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(i,p){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${p}`,i,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(i){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${i}`,{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(i,p){var u={body:{id:p},headers:new d.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${i}`,u)}}return c.\u0275fac=function(i){return new(i||c)(e.LFG(d.eN),e.LFG(y.Y))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5590:(A,g,s)=>{s.r(g),s.d(g,{AddcompanyModule:()=>M});var d=s(6895),m=s(1652),o=s(433),e=s(1571),y=s(2917),h=s(7185);function c(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your name "),e.qZA())}function f(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function i(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function p(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your currency"),e.qZA())}function u(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Invalid GST Number"),e.qZA())}function C(n,r){if(1&n&&(e.TgZ(0,"span",26),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.Oqu(a.dateError)}}function Z(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function T(n,r){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const a=r.$implicit;e.s9C("value",a.id),e.xp6(1),e.hij("",a.country_name," ")}}function I(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Select country"),e.qZA())}function U(n,r){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const a=r.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(a.state)}}function q(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Select state"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your address"),e.qZA())}const l=function(n){return{"is-invalid":n}},S=[{path:"",component:(()=>{class n{constructor(a,t,_,v){this.fb=a,this.copmpanyService=t,this.toastr=_,this.router=v,this.tableData=[{ProductName:"Apple Earpods",QTY:"10.00\t",PurchasePrice:"2000.00",Discount:"500.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"2000.00\t",TotalCost:"2000.00\t",img:"assets/img/product/product7.jpg"},{ProductName:"Macbook Pro",QTY:"15.00\t",PurchasePrice:"6000.00",Discount:"100.00",Tax:"0.00",TaxAmount:"0.00",UnitCost:"1000.00\t",TotalCost:"1000.00\t",img:"assets/img/product/product6.jpg"}],this.date=new Date,this.dateError=null}get f(){return this.companyForm.controls}ngOnInit(){this.companyForm=this.fb.group({name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email]),phone:new o.NI("",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(10),o.kI.pattern(/^[0-9]*$/)]),financial_year:new o.NI("",[o.kI.required]),currency:new o.NI("",[o.kI.required]),gst:new o.NI("",[o.kI.required,o.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),address:new o.NI("",[o.kI.required]),pincode:new o.NI("",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(6)]),state:new o.NI("",[o.kI.required]),country:new o.NI("",[o.kI.required])}),this.getCountry(),this.getState()}delete(a){this.tableData.splice(a,1)}getCountry(){this.copmpanyService.countryList().subscribe(a=>{this.country=a})}getState(){this.copmpanyService.stateList().subscribe(a=>{this.state=a,console.log(this.state)})}selectState(a){console.log(a),this.copmpanyService.stateList().subscribe(t=>{this.state=t,console.log(this.state)})}submit(){console.log(this.companyForm.value),this.companyForm.valid?this.copmpanyService.postCompany(this.companyForm.value).subscribe(a=>{console.log(a),"Successfuly Added"==a.msg&&(this.toastr.success(a.msg),this.companyForm.reset(),this.router.navigate(["//company/companylist"]))},a=>{console.log(a.error.gst),a.error.financial_year&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))}):(this.companyForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.companyForm.get("name")}get gst(){return this.companyForm.get("gst")}get phone(){return this.companyForm.get("phone")}get pincode(){return this.companyForm.get("pincode")}get financial_year(){return this.companyForm.get("financial_year")}get email(){return this.companyForm.get("email")}get currency(){return this.companyForm.get("currency")}get address(){return this.companyForm.get("address")}get countryy(){return this.companyForm.get("country")}get statee(){return this.companyForm.get("state")}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(o.qu),e.Y36(y.J),e.Y36(h._W),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addcompany"]],decls:83,vars:44,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","phone","maxlength","10","minlength","10","id","phone",3,"ngClass"],["type","text","formControlName","currency","id","currency",3,"ngClass"],["type","text","formControlName","gst","id","gst",3,"ngClass"],["type","date","formControlName","financial_year","id","financial_year",3,"ngClass"],["formControlName","country","required","","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-7","col-sm-7","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","//company/companylist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"]],template:function(a,t){if(1&a){const _=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Company"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Company "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,c,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Email*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,f,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25," Phone*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,i,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31," Currency*"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,p,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37," gst*"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,u,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43," Financial Year*"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,C,2,1,"span",9),e.YNc(46,Z,2,0,"span",9),e.qZA()(),e.TgZ(47,"div",6)(48,"div",7)(49,"label"),e._uU(50,"Country*"),e.qZA(),e.TgZ(51,"select",15,16),e.NdJ("change",function(){e.CHM(_);const k=e.MAs(52);return e.KtG(t.selectState(k.value))}),e.TgZ(53,"option",17),e._uU(54,"Country"),e.qZA(),e.YNc(55,T,2,2,"option",18),e.qZA(),e.YNc(56,I,2,0,"span",9),e.qZA()(),e.TgZ(57,"div",6)(58,"div",7)(59,"label"),e._uU(60," State*"),e.qZA(),e.TgZ(61,"select",19)(62,"option",17),e._uU(63,"State"),e.qZA(),e.YNc(64,U,2,2,"option",18),e.qZA(),e.YNc(65,q,2,0,"span",9),e.qZA()(),e.TgZ(66,"div",6)(67,"div",7)(68,"label"),e._uU(69,"Pincode*"),e.qZA(),e._UZ(70,"input",20),e.YNc(71,N,2,0,"span",9),e.qZA()(),e.TgZ(72,"div",21)(73,"div",7)(74,"label"),e._uU(75,"Address*"),e.qZA(),e._UZ(76,"textarea",22),e.YNc(77,b,2,0,"span",9),e.qZA()(),e.TgZ(78,"div",23)(79,"button",24),e._uU(80,"Submit"),e.qZA(),e.TgZ(81,"a",25),e._uU(82,"Cancel"),e.qZA()()()()()()}2&a&&(e.xp6(8),e.Q6J("formGroup",t.companyForm),e.xp6(6),e.Q6J("ngClass",e.VKq(24,l,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(26,l,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(28,l,t.f.phone.touched&&t.f.phone.invalid)),e.xp6(1),e.Q6J("ngIf",t.phone&&t.phone.invalid&&t.phone.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(30,l,t.f.currency.touched&&t.f.currency.invalid)),e.xp6(1),e.Q6J("ngIf",t.currency&&t.currency.invalid&&t.currency.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(32,l,t.f.gst.touched&&t.f.gst.invalid)),e.xp6(1),e.Q6J("ngIf",t.gst&&t.gst.invalid&&t.gst.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,l,t.f.financial_year.touched&&t.f.financial_year.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.financial_year&&t.financial_year.invalid&&t.financial_year.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,l,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(38,l,t.f.state.touched&&t.f.state.invalid)),e.xp6(3),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,l,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,l,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched))},dependencies:[d.mk,d.sg,d.O5,m.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.sg,o.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(S),m.Bz]}),n})();var F=s(906);let M=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,J,F.ZU,o.u5,o.UX]}),n})()}}]);