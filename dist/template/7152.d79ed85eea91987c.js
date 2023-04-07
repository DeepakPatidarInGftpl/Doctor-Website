"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7152],{2917:(Z,y,s)=>{s.d(y,{J:()=>h});var l=s(529),u=s(1135),o=s(2340),e=s(1571),c=s(4948);let h=(()=>{class m{constructor(r,d){this.http=r,this.HttpService=d,this.edit=new u.X(""),this.companyBehaviour=new u.X(null),this.apiUrl=`${o.N.api}`}editData(r){this.edit.next(r),console.log(r),localStorage.setItem("editCompany",JSON.stringify(r))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(r){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}postCompany(r){return this.http.post(this.apiUrl+"/pv-api/company/",r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(r,d){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${d}`,r,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(r){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${r}`,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(r,d){var g={body:{id:d},headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${r}`,g)}}return m.\u0275fac=function(r){return new(r||m)(e.LFG(l.eN),e.LFG(c.Y))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},7152:(Z,y,s)=>{s.r(y),s.d(y,{AddemployeeModule:()=>$});var l=s(6895),u=s(9877),o=s(433),e=s(1571),c=s(927),h=s(7185),m=s(2917);function f(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your name "),e.qZA())}function r(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your fathers name "),e.qZA())}function d(n,a){if(1&n&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.dateError)}}function g(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function C(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function T(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function q(n,a){if(1&n&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.dateError)}}function U(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function b(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your attendance Number"),e.qZA())}function I(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your employee id"),e.qZA())}function N(n,a){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const i=a.$implicit;e.s9C("value",i.id),e.xp6(1),e.hij("",i.country_name," ")}}function J(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select country"),e.qZA())}function E(n,a){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const i=a.$implicit;e.s9C("value",i.id),e.xp6(1),e.Oqu(i.state)}}function S(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select state"),e.qZA())}function F(n,a){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const i=a.$implicit;e.s9C("value",i.id),e.xp6(1),e.Oqu(i.city)}}function Q(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Select city"),e.qZA())}function M(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function Y(n,a){1&n&&(e.TgZ(0,"span",29),e._uU(1,"Enter your address"),e.qZA())}const p=function(n){return{"is-invalid":n}},k=[{path:"",component:(()=>{class n{constructor(i,t,_,v,A){this.fb=i,this.coreService=t,this.toastr=_,this.router=v,this.companyService=A,this.dateError=null}get f(){return this.employeeForm.controls}ngOnInit(){this.employeeForm=this.fb.group({name:new o.NI("",[o.kI.required]),fathers_name:new o.NI("",[o.kI.required]),dob:new o.NI("",[o.kI.required]),mobile:new o.NI("",[o.kI.required,o.kI.maxLength(10),o.kI.minLength(10),o.kI.pattern(/^[0-9]*$/)]),email:new o.NI("",[o.kI.required,o.kI.email]),anniversary:new o.NI(""),address:new o.NI(""),pincode:new o.NI("",[o.kI.maxLength(6),o.kI.minLength(6),o.kI.pattern(/^[0-9]*$/)]),attendance:new o.NI("",[o.kI.pattern(/^[0-9]*$/)]),employee_id:new o.NI("",[o.kI.pattern(/^[0-9]*$/)]),country:new o.NI(""),state:new o.NI(""),city:new o.NI("")}),this.getCountry(),this.getState(),this.getCity()}getCountry(){this.coreService.countryList().subscribe(i=>{this.country=i})}getState(){this.coreService.stateList().subscribe(i=>{this.state=i,console.log(this.state)})}selectState(i){console.log(i),this.coreService.stateList().subscribe(t=>{this.state=t,console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(i=>{this.city=i})}submit(){console.log(this.employeeForm.value),this.employeeForm.valid?this.coreService.addEmployee(this.employeeForm.value).subscribe(i=>{console.log(i),this.addRes=i,"Successfuly Added"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.employeeForm.reset(),this.router.navigate(["//employee/employeelist"]))},i=>{console.log(i.error.gst),(i.error.dob||i.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))}):(this.employeeForm.markAllAsTouched(),console.log("hhhhhh"))}get name(){return this.employeeForm.get("name")}get fathers_name(){return this.employeeForm.get("fathers_name")}get dob(){return this.employeeForm.get("dob")}get mobile(){return this.employeeForm.get("mobile")}get anniversary(){return this.employeeForm.get("anniversary")}get attendance(){return this.employeeForm.get("attendance")}get employee_id(){return this.employeeForm.get("employee_id")}get pincode(){return this.employeeForm.get("pincode")}get email(){return this.employeeForm.get("email")}get address(){return this.employeeForm.get("address")}get countryy(){return this.employeeForm.get("country")}get statee(){return this.employeeForm.get("state")}get cityy(){return this.employeeForm.get("city")}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(o.qu),e.Y36(c.p),e.Y36(h._W),e.Y36(u.F0),e.Y36(m.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addemployee"]],decls:105,vars:58,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","fathers_name","id","fathers_name",3,"ngClass"],["type","date","formControlName","dob","id","dob",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","mobile","maxlength","10","minlength","10","id","mobile",3,"ngClass"],["type","date","formControlName","anniversary","id","anniversary",3,"ngClass"],["type","text","formControlName","attendance","id","attendance",3,"ngClass"],["type","text","formControlName","employee_id","id","employee_id",3,"ngClass"],["formControlName","country","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","id","state",1,"w-100","h-100","border",3,"ngClass"],["formControlName","city","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-7","col-sm-7","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","//employee/employeelist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"]],template:function(i,t){if(1&i){const _=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Employee"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Employee "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13," Name*"),e.qZA(),e._UZ(14,"input",8),e.YNc(15,f,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Fathers Name*"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,r,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Date of Birth*"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,d,2,1,"span",9),e.YNc(28,g,2,0,"span",9),e.qZA()(),e.TgZ(29,"div",6)(30,"div",7)(31,"label"),e._uU(32,"Email*"),e.qZA(),e._UZ(33,"input",12),e.YNc(34,C,2,0,"span",9),e.qZA()(),e.TgZ(35,"div",6)(36,"div",7)(37,"label"),e._uU(38," Phone*"),e.qZA(),e._UZ(39,"input",13),e.YNc(40,T,2,0,"span",9),e.qZA()(),e.TgZ(41,"div",6)(42,"div",7)(43,"label"),e._uU(44,"Anniversary"),e.qZA(),e._UZ(45,"input",14),e.YNc(46,q,2,1,"span",9),e.YNc(47,U,2,0,"span",9),e.qZA()(),e.TgZ(48,"div",6)(49,"div",7)(50,"label"),e._uU(51,"Attendance"),e.qZA(),e._UZ(52,"input",15),e.YNc(53,b,2,0,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57,"Employee id"),e.qZA(),e._UZ(58,"input",16),e.YNc(59,I,2,0,"span",9),e.qZA()(),e.TgZ(60,"div",6)(61,"div",7)(62,"label"),e._uU(63,"Country"),e.qZA(),e.TgZ(64,"select",17,18),e.NdJ("change",function(){e.CHM(_);const A=e.MAs(65);return e.KtG(t.selectState(A.value))}),e.TgZ(66,"option",19),e._uU(67,"Country"),e.qZA(),e.YNc(68,N,2,2,"option",20),e.qZA(),e.YNc(69,J,2,0,"span",9),e.qZA()(),e.TgZ(70,"div",6)(71,"div",7)(72,"label"),e._uU(73," State"),e.qZA(),e.TgZ(74,"select",21)(75,"option",19),e._uU(76,"State"),e.qZA(),e.YNc(77,E,2,2,"option",20),e.qZA(),e.YNc(78,S,2,0,"span",9),e.qZA()(),e.TgZ(79,"div",6)(80,"div",7)(81,"label"),e._uU(82," City"),e.qZA(),e.TgZ(83,"select",22)(84,"option",19),e._uU(85,"City"),e.qZA(),e.YNc(86,F,2,2,"option",20),e.qZA(),e.YNc(87,Q,2,0,"span",9),e.qZA()(),e.TgZ(88,"div",6)(89,"div",7)(90,"label"),e._uU(91,"Pincode"),e.qZA(),e._UZ(92,"input",23),e.YNc(93,M,2,0,"span",9),e.qZA()(),e.TgZ(94,"div",24)(95,"div",7)(96,"label"),e._uU(97,"Address"),e.qZA(),e._UZ(98,"textarea",25),e.YNc(99,Y,2,0,"span",9),e.qZA()(),e.TgZ(100,"div",26)(101,"button",27),e._uU(102,"Submit"),e.qZA(),e.TgZ(103,"a",28),e._uU(104,"Cancel"),e.qZA()()()()()()}2&i&&(e.xp6(8),e.Q6J("formGroup",t.employeeForm),e.xp6(6),e.Q6J("ngClass",e.VKq(32,p,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(34,p,t.f.fathers_name.touched&&t.f.fathers_name.invalid)),e.xp6(1),e.Q6J("ngIf",t.fathers_name&&t.fathers_name.invalid&&t.fathers_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,p,t.f.dob.touched&&t.f.dob.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.dob&&t.dob.invalid&&t.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(38,p,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,p,t.f.mobile.touched&&t.f.mobile.invalid)),e.xp6(1),e.Q6J("ngIf",t.mobile&&t.mobile.invalid&&t.mobile.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,p,t.f.anniversary.touched&&t.f.anniversary.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.anniversary&&t.anniversary.invalid&&t.anniversary.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,p,t.f.attendance.touched&&t.f.attendance.invalid)),e.xp6(1),e.Q6J("ngIf",t.attendance&&t.attendance.invalid&&t.attendance.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,p,t.f.employee_id.touched&&t.f.employee_id.invalid)),e.xp6(1),e.Q6J("ngIf",t.employee_id&&t.employee_id.invalid&&t.employee_id.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(48,p,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(50,p,t.f.state.touched&&t.f.state.invalid)),e.xp6(3),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(52,p,t.f.city.touched&&t.f.city.invalid)),e.xp6(3),e.Q6J("ngForOf",t.city),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(54,p,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(56,p,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched))},dependencies:[l.mk,l.sg,l.O5,u.yS,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.wO,o.nD,o.sg,o.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(k),u.Bz]}),n})();var O=s(906);let $=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,w,O.ZU,o.u5,o.UX]}),n})()}}]);