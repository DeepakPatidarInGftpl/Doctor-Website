"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8785],{28785:(I,v,s)=>{s.r(v),s.d(v,{EditemployeeModule:()=>G});var d=s(96814),p=s(74408),i=s(56223),e=s(19212),b=s(44293),E=s(58763),u=s(41789);function N(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your name "),e.qZA())}function c(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your fathers name "),e.qZA())}function y(n,a){if(1&n&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.dateError)}}function g(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function m(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your email address in format abc@example.com"),e.qZA())}function h(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your 10 digits mobile phone number"),e.qZA())}function f(n,a){if(1&n&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.dateError)}}function Z(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Date (format:dd/mm/yyyy)"),e.qZA())}function C(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your attendance Number"),e.qZA())}function J(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your employee id"),e.qZA())}function S(n,a){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const o=a.$implicit;e.s9C("value",o.id),e.xp6(1),e.hij("",o.country_name," ")}}function F(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Select country"),e.qZA())}function Q(n,a){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const o=a.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.state)}}function D(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Select state"),e.qZA())}function O(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Data not available"),e.qZA())}function Y(n,a){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const o=a.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.city)}}function M(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Select city"),e.qZA())}function K(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"data not available"),e.qZA())}function P(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your 6 digits pincode number"),e.qZA())}function w(n,a){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Enter your address"),e.qZA())}const l=n=>({"is-invalid":n});let L=(()=>{class n{constructor(o,r,t,A,T,_){this.fb=o,this.coreService=r,this.toastr=t,this.router=A,this.companyService=T,this.Arout=_,this.dateError=null}get f(){return this.employeeForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getEmployeeById(this.id).subscribe(o=>{this.data=o,this.employeeForm.patchValue({name:this.data.name,fathers_name:this.data.fathers_name,dob:this.data.dob,mobile:this.data.mobile,email:this.data.email,anniversary:this.data.anniversary,address:this.data.address,pincode:this.data.pincode,attendance:this.data.attendance,employee_id:this.data.employee_id})}),this.employeeForm=this.fb.group({name:new i.NI("",[i.kI.required]),fathers_name:new i.NI("",[i.kI.required]),dob:new i.NI("",[i.kI.required]),mobile:new i.NI("",[i.kI.required,i.kI.maxLength(10),i.kI.minLength(10),i.kI.pattern(/^[0-9]*$/)]),email:new i.NI("",[i.kI.required,i.kI.email]),anniversary:new i.NI(""),address:new i.NI(""),pincode:new i.NI("",[i.kI.maxLength(6),i.kI.minLength(6),i.kI.pattern(/^[0-9]*$/)]),attendance:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),employee_id:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),country:new i.NI(""),state:new i.NI(""),city:new i.NI("")}),this.getCountry(),this.getState(),this.getCity()}getCountry(){this.coreService.countryList().subscribe(o=>{this.country=o})}getState(){this.coreService.stateList().subscribe(o=>{})}selectState(o){this.coreService.getStateByCountryId(o).subscribe(r=>{this.state=r})}getCity(){this.coreService.getCity().subscribe(o=>{})}selectCity(o){this.coreService.getCityByStateId(o).subscribe(r=>{this.city=r})}submit(){this.employeeForm.valid?this.coreService.updateEmployee(this.employeeForm.value,this.id).subscribe(o=>{this.addRes=o,"Employee updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.employeeForm.reset(),this.router.navigate(["//masters/employeelist"]))},o=>{(o.error.dob||o.error.anniversary)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))}):this.employeeForm.markAllAsTouched()}get name(){return this.employeeForm.get("name")}get fathers_name(){return this.employeeForm.get("fathers_name")}get dob(){return this.employeeForm.get("dob")}get mobile(){return this.employeeForm.get("mobile")}get anniversary(){return this.employeeForm.get("anniversary")}get attendance(){return this.employeeForm.get("attendance")}get employee_id(){return this.employeeForm.get("employee_id")}get pincode(){return this.employeeForm.get("pincode")}get email(){return this.employeeForm.get("email")}get address(){return this.employeeForm.get("address")}get countryy(){return this.employeeForm.get("country")}get statee(){return this.employeeForm.get("state")}get cityy(){return this.employeeForm.get("city")}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(i.qu),e.Y36(b.p),e.Y36(E._W),e.Y36(p.F0),e.Y36(u.J),e.Y36(p.gz))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-editemployee"]],decls:106,vars:60,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","fathers_name","id","fathers_name",3,"ngClass"],["type","date","formControlName","dob","id","dob",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","mobile","maxlength","10","minlength","10","id","mobile",3,"ngClass"],["type","date","formControlName","anniversary","id","anniversary",3,"ngClass"],["type","text","formControlName","attendance","id","attendance",3,"ngClass"],["type","text","formControlName","employee_id","id","employee_id",3,"ngClass"],["formControlName","country","id","country",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","id","state",3,"ngClass","change"],["cityValue",""],["formControlName","city","id","city",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-7","col-sm-7","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","//employee/employeelist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"]],template:function(r,t){if(1&r){const A=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Update Employee"),e.qZA()()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),e._uU(11," Name*"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,N,2,0,"span",9),e.qZA()(),e.TgZ(14,"div",6)(15,"div",7)(16,"label"),e._uU(17,"Fathers Name*"),e.qZA(),e._UZ(18,"input",10),e.YNc(19,c,2,0,"span",9),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7)(22,"label"),e._uU(23,"Date of Birth*"),e.qZA(),e._UZ(24,"input",11),e.YNc(25,y,2,1,"span",9)(26,g,2,0,"span",9),e.qZA()(),e.TgZ(27,"div",6)(28,"div",7)(29,"label"),e._uU(30,"Email*"),e.qZA(),e._UZ(31,"input",12),e.YNc(32,m,2,0,"span",9),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7)(35,"label"),e._uU(36," Phone*"),e.qZA(),e._UZ(37,"input",13),e.YNc(38,h,2,0,"span",9),e.qZA()(),e.TgZ(39,"div",6)(40,"div",7)(41,"label"),e._uU(42,"Anniversary"),e.qZA(),e._UZ(43,"input",14),e.YNc(44,f,2,1,"span",9)(45,Z,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",6)(47,"div",7)(48,"label"),e._uU(49,"Attendance"),e.qZA(),e._UZ(50,"input",15),e.YNc(51,C,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Employee id"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,J,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",7)(60,"label"),e._uU(61,"Country"),e.qZA(),e.TgZ(62,"select",17,18),e.NdJ("change",function(){e.CHM(A);const _=e.MAs(63);return e.KtG(t.selectState(_.value))}),e.TgZ(64,"option",19),e._uU(65,"Country"),e.qZA(),e.YNc(66,S,2,2,"option",20),e.qZA(),e.YNc(67,F,2,0,"span",9),e.qZA()(),e.TgZ(68,"div",6)(69,"div",7)(70,"label"),e._uU(71," State"),e.qZA(),e.TgZ(72,"select",21,22),e.NdJ("change",function(){e.CHM(A);const _=e.MAs(73);return e.KtG(t.selectCity(_.value))}),e.TgZ(74,"option",19),e._uU(75,"State"),e.qZA(),e.YNc(76,Q,2,2,"option",20),e.qZA(),e.YNc(77,D,2,0,"span",9)(78,O,2,0,"span",9),e.qZA()(),e.TgZ(79,"div",6)(80,"div",7)(81,"label"),e._uU(82," City"),e.qZA(),e.TgZ(83,"select",23)(84,"option",19),e._uU(85,"City"),e.qZA(),e.YNc(86,Y,2,2,"option",20),e.qZA(),e.YNc(87,M,2,0,"span",9)(88,K,2,0,"span",9),e.qZA()(),e.TgZ(89,"div",6)(90,"div",7)(91,"label"),e._uU(92,"Pincode"),e.qZA(),e._UZ(93,"input",24),e.YNc(94,P,2,0,"span",9),e.qZA()(),e.TgZ(95,"div",25)(96,"div",7)(97,"label"),e._uU(98,"Address"),e.qZA(),e._UZ(99,"textarea",26),e.YNc(100,w,2,0,"span",9),e.qZA()(),e.TgZ(101,"div",27)(102,"button",28),e._uU(103,"Submit"),e.qZA(),e.TgZ(104,"a",29),e._uU(105,"Cancel"),e.qZA()()()()()()}2&r&&(e.xp6(6),e.Q6J("formGroup",t.employeeForm),e.xp6(6),e.Q6J("ngClass",e.VKq(34,l,t.f.name.touched&&t.f.name.invalid)),e.xp6(1),e.Q6J("ngIf",t.name&&t.name.invalid&&t.name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(36,l,t.f.fathers_name.touched&&t.f.fathers_name.invalid)),e.xp6(1),e.Q6J("ngIf",t.fathers_name&&t.fathers_name.invalid&&t.fathers_name.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(38,l,t.f.dob.touched&&t.f.dob.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.dob&&t.dob.invalid&&t.dob.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(40,l,t.f.email.touched&&t.f.email.invalid)),e.xp6(1),e.Q6J("ngIf",t.email&&t.email.invalid&&t.email.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(42,l,t.f.mobile.touched&&t.f.mobile.invalid)),e.xp6(1),e.Q6J("ngIf",t.mobile&&t.mobile.invalid&&t.mobile.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(44,l,t.f.anniversary.touched&&t.f.anniversary.invalid)),e.xp6(1),e.Q6J("ngIf",t.dateError),e.xp6(1),e.Q6J("ngIf",t.anniversary&&t.anniversary.invalid&&t.anniversary.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(46,l,t.f.attendance.touched&&t.f.attendance.invalid)),e.xp6(1),e.Q6J("ngIf",t.attendance&&t.attendance.invalid&&t.attendance.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(48,l,t.f.employee_id.touched&&t.f.employee_id.invalid)),e.xp6(1),e.Q6J("ngIf",t.employee_id&&t.employee_id.invalid&&t.employee_id.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(50,l,t.f.country.touched&&t.f.country.invalid)),e.xp6(4),e.Q6J("ngForOf",t.country),e.xp6(1),e.Q6J("ngIf",t.countryy&&t.countryy.invalid&&t.countryy.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(52,l,t.f.state.touched&&t.f.state.invalid)),e.xp6(4),e.Q6J("ngForOf",t.state),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)>0),e.xp6(1),e.Q6J("ngIf",t.statee&&t.statee.invalid&&t.statee.touched&&(null==t.state?null:t.state.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(54,l,t.f.city.touched&&t.f.city.invalid)),e.xp6(3),e.Q6J("ngForOf",t.city),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)>0),e.xp6(1),e.Q6J("ngIf",t.cityy&&t.cityy.invalid&&t.cityy.touched&&(null==t.city?null:t.city.length)<=0),e.xp6(5),e.Q6J("ngClass",e.VKq(56,l,t.f.pincode.touched&&t.f.pincode.invalid)),e.xp6(1),e.Q6J("ngIf",t.pincode&&t.pincode.invalid&&t.pincode.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(58,l,t.f.address.touched&&t.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",t.address&&t.address.invalid&&t.address.touched))},dependencies:[d.mk,d.sg,d.O5,p.rH,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.wO,i.nD,i.sg,i.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]})}return n})();var V=s(1971);const q=JSON.parse(localStorage.getItem("auth"));let U;q&&q.map(a=>{"master"===a.content_type.app_label&&"employee"===a.content_type.model&&"change_employee"==a.codename&&(U=a.codename)});const R=[{path:"",component:L,canActivate:[V.l],data:{allowedRoles:[U]}}];let B=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),p.Bz]})}return n})();var k=s(89727);let G=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,B,k.ZU,i.u5,i.UX]})}return n})()},1971:(I,v,s)=>{s.d(v,{l:()=>E});var d=s(19212),p=s(74408),i=s(58763),e=s(41789),b=s(44293);let E=(()=>{class u{constructor(c,y,g,m,h){this.router=c,this.Arout=y,this.toastr=g,this.profileService=m,this.coreService=h}canActivate(c,y){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),g){const m=c.data.allowedRoles;console.log(m,"allowedRoles");const h=g.some(f=>m.includes(f.codename));if(console.log(h),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const Z=f?.permission,C=this.profileService.getUserDetails();(!C||C.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),h)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}static#e=this.\u0275fac=function(y){return new(y||u)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(i._W),d.LFG(e.J),d.LFG(b.p))};static#t=this.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);