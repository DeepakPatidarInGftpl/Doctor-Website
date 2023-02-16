"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6869],{2917:(Z,c,s)=>{s.d(c,{J:()=>y});var p=s(529),d=s(1135),o=s(2340),e=s(1571),h=s(4948);let y=(()=>{class u{constructor(a,l){this.http=a,this.HttpService=l,this.edit=new d.X(""),this.companyBehaviour=new d.X(null),this.apiUrl=`${o.N.api}`}editData(a){this.edit.next(a),console.log(a),localStorage.setItem("editCompany",JSON.stringify(a))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})}).subscribe(l=>{localStorage.setItem("companyList",JSON.stringify(l)),this.companyBehaviour.next(null)})}getCompanyById(a){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${a}`,{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}postCompany(a){return this.http.post(this.apiUrl+"/pv-api/company/",a,{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(a,l){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${l}`,a,{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(a){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${a}`,{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(a,l){var g={body:{id:l},headers:new p.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${a}`,g)}}return u.\u0275fac=function(a){return new(a||u)(e.LFG(p.eN),e.LFG(h.Y))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},6869:(Z,c,s)=>{s.r(c),s.d(c,{EditemployeeModule:()=>M});var p=s(6895),d=s(1652),o=s(433),e=s(1571),h=s(927),y=s(7185),u=s(2917);function f(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your name "),e.qZA())}function a(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your fathers name "),e.qZA())}function l(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function g(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function A(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function I(n,r){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const i=r.$implicit;e.s9C("value",i.id),e.xp6(1),e.hij("",i.country_name," ")}}function E(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Select country"),e.qZA())}function U(n,r){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const i=r.$implicit;e.s9C("value",i.id),e.xp6(1),e.Oqu(i.state)}}function q(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Select state"),e.qZA())}function T(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"span",26),e._uU(1,"Enter your address"),e.qZA())}const m=function(n){return{"is-invalid":n}},S=[{path:"",component:(()=>{class n{constructor(i,t,v,_,C,k){this.fb=i,this.coreService=t,this.toastr=v,this.router=_,this.companyService=C,this.Arout=k}get f(){return this.employeeForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getEmployeeById(this.id).subscribe(i=>{this.data=i,this.employeeForm.patchValue(this.data)}),this.employeeForm=this.fb.group({name:new o.NI("",[o.kI.required]),fathers_name:new o.NI("",[o.kI.required]),dob:new o.NI("",[o.kI.required]),mobile:new o.NI("",[o.kI.required,o.kI.maxLength(10),o.kI.minLength(10),o.kI.pattern(/^[0-9]*$/)]),email:new o.NI("",[o.kI.required,o.kI.email]),anniversary:new o.NI("",[o.kI.required]),address:new o.NI("",[o.kI.required]),pincode:new o.NI("",[o.kI.required,o.kI.maxLength(6),o.kI.minLength(6),o.kI.pattern(/^[0-9]*$/)]),country:new o.NI("",[o.kI.required]),state:new o.NI("",[o.kI.required])}),this.getCountry(),this.getState()}getCountry(){this.coreService.countryList().subscribe(i=>{this.country=i})}getState(){this.coreService.stateList().subscribe(i=>{this.state=i})}selectState(i){console.log(i),this.coreService.stateList().subscribe(t=>{this.state=t})}submit(){console.log(this.employeeForm.value),this.employeeForm.valid?this.coreService.updateEmployee(this.employeeForm.value,this.id).subscribe(i=>{console.log(i),this.addRes=i,"Employee updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.employeeForm.reset(),this.router.navigate(["//employee/employeelist"]))},i=>{console.log(i.error.gst)}):this.employeeForm.markAllAsTouched()}get name(){return this.employeeForm.get("name")}get fathers_name(){return this.employeeForm.get("fathers_name")}get dob(){return this.employeeForm.get("dob")}get mobile(){return this.employeeForm.get("mobile")}get anniversary(){return this.employeeForm.get("anniversary")}get attendance(){return this.employeeForm.get("attendance")}get employee_id(){return this.employeeForm.get("employee_id")}get pincode(){return this.employeeForm.get("pincode")}get email(){return this.employeeForm.get("email")}get address(){return this.employeeForm.get("address")}get countryy(){return this.employeeForm.get("country")}get statee(){return this.employeeForm.get("state")}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(o.qu),e.Y36(h.p),e.Y36(y._W),e.Y36(d.F0),e.Y36(u.J),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-editemployee"]],decls:80,vars:43,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","fathers_name","id","fathers_name",3,"ngClass"],["type","date","formControlName","dob","id","dob",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","mobile","maxlength","10","minlength","10","id","mobile",3,"ngClass"],["type","date","formControlName","anniversary","id","anniversary",3,"ngClass"],["formControlName","country","required","","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-7","col-sm-7","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","//employee/employeelist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"]],template:function(i,t){if(1&i){const v=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update Employee"),e.qZA()()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),e._uU(11," Name*"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,f,2,0,"span",9),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Fathers Name*"),e.qZA(),e._UZ(18,"input",10),e.YNc(19,a,2,0,"span",9),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7)(22,"label"),e._uU(23,"Date of Birth*"),e.qZA(),e._UZ(24,"input",11),e.YNc(25,l,2,0,"span",9),e.qZA()(),e.TgZ(26,"div",6)(27,"div",7)(28,"label"),e._uU(29,"Email*"),e.qZA(),e._UZ(30,"input",12),e.YNc(31,g,2,0,"span",9),e.qZA()(),e.TgZ(32,"div",6)(33,"div",7)(34,"label"),e._uU(35," Phone*"),e.qZA(),e._UZ(36,"input",13),e.YNc(37,A,2,0,"span",9),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7)(40,"label"),e._uU(41,"Anniversary*"),e.qZA(),e._UZ(42,"input",14),e.YNc(43,b,2,0,"span",9),e.qZA()(),e.TgZ(44,"div",6)(45,"div",7)(46,"label"),e._uU(47,"Country*"),e.qZA(),e.TgZ(48,"select",15,16),e.NdJ("change",function(){e.CHM(v);const C=e.MAs(49);return e.KtG(t.selectState(C.value))}),e.TgZ(50,"option",17),e._uU(51,"Country"),e.qZA(),e.YNc(52,I,2,2,"option",18),e.qZA(),e.YNc(53,E,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57," State*"),e.qZA(),e.TgZ(58,"select",19)(59,"option",17),e._uU(60,"State"),e.qZA(),e.YNc(61,U,2,2,"option",18),e.qZA(),e.YNc(62,q,2,0,"span",9),e.qZA()(),e.TgZ(63,"div",6)(64,"div",7)(65,"label"),e._uU(66,"Pincode*"),e.qZA(),e._UZ(67,"input",20),e.YNc(68,T,2,0,"span",9),e.qZA()(),e.TgZ(69,"div",21)(70,"div",7)(71,"label"),e._uU(72,"Address*"),e.qZA(),e._UZ(73,"textarea",22),e.YNc(74,N,2,0,"span",9),e.qZA()(),e.TgZ(75,"div",23)(76,"button",24),e._uU(77,"Submit"),e.qZA(),e.TgZ(78,"a",25),e._uU(79,"Cancel"),e.qZA()()()()()()}2&i&&(e.xp6(6),e.Q6J("formGroup",t.employeeForm),e.xp6(6),e.Q6J("ngClass",e.VKq(23,m,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(25,m,t.f.fathers_name.touched&&t.f.fathers_name.invalid)),e.xp6(1),e.Q6J("ngIf",t.fathers_name&&t.fathers_name.invalid&&t.fathers_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(27,m,t.f.dob.touched&&t.f.dob.invalid)),e.xp6(1),e.Q6J("ngIf",t.dob&&t.dob.invalid&&t.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,m,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(31,m,t.f.mobile.touched&&t.f.mobile.invalid)),e.xp6(1),e.Q6J("ngIf",t.mobile&&t.mobile.invalid&&t.mobile.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(33,m,t.f.anniversary.touched&&t.f.anniversary.invalid)),e.xp6(1),e.Q6J("ngIf",t.anniversary&&t.anniversary.invalid&&t.anniversary.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(35,m,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(37,m,t.f.state.touched&&t.f.state.invalid)),e.xp6(3),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,m,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,m,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched))},dependencies:[p.mk,p.sg,p.O5,d.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.sg,o.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(S),d.Bz]}),n})();var J=s(906);let M=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,F,J.ZU,o.u5,o.UX]}),n})()}}]);