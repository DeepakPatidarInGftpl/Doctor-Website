"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1082],{1082:(z,g,c)=>{c.r(g),c.d(g,{AddaccountModule:()=>j});var r=c(6895),u=c(8996),a=c(4006),t=c(4650),m=c(927),_=c(7185);function f(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter your Name "),t.qZA())}function y(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter Title name "),t.qZA())}function Z(e,i){if(1&e&&(t.TgZ(0,"span",45),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.dateError)}}function h(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function A(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter your email address in format abc@example.com"),t.qZA())}function v(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter your 10 digits mobile phone number"),t.qZA())}function b(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Invalid Pancard Number"),t.qZA())}function C(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Invalid GST Number"),t.qZA())}function T(e,i){if(1&e&&(t.TgZ(0,"span",45),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.dateError)}}function q(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"span",46),t._uU(1,"Select Balance Type"),t.qZA())}function U(e,i){1&e&&(t.TgZ(0,"span",47),t._uU(1," Enter your Balance"),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Select Type of Customer"),t.qZA())}function J(e,i){if(1&e&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.s9C("value",o.title),t.xp6(1),t.hij("",o.title," ")}}function Q(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Select Type of Account"),t.qZA())}function F(e,i){if(1&e&&(t.TgZ(0,"span",45),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.dateError)}}function Y(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Date (format:dd/mm/yyyy)"),t.qZA())}function S(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter credit amount"),t.qZA())}function w(e,i){if(1&e&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.s9C("value",o.id),t.xp6(1),t.hij("",o.country_name," ")}}function E(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Select country"),t.qZA())}function K(e,i){if(1&e&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.s9C("value",o.id),t.xp6(1),t.Oqu(o.state)}}function V(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Select state"),t.qZA())}function O(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Data not available"),t.qZA())}function k(e,i){if(1&e&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.s9C("value",o.id),t.xp6(1),t.Oqu(o.city)}}function M(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Select city"),t.qZA())}function B(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"data not available"),t.qZA())}function D(e,i){1&e&&(t.TgZ(0,"span",45),t._uU(1,"Enter your address"),t.qZA())}function R(e,i){1&e&&(t.TgZ(0,"button",49),t._uU(1,"Submit"),t.qZA())}function P(e,i){1&e&&(t.TgZ(0,"button",50),t._UZ(1,"span",51),t._uU(2," Submit"),t.qZA())}const s=function(e){return{"is-invalid":e}},G=[{path:"",component:(()=>{class e{constructor(o,n,d,l){this.fb=o,this.coreService=n,this.toastr=d,this.router=l,this.dateError=null,this.loaders=!1}get f(){return this.accountForm.controls}ngOnInit(){this.accountForm=this.fb.group({contact_person_name:new a.NI(""),title:new a.NI("",[a.kI.required]),birthday:new a.NI(""),mobile:new a.NI("",[a.kI.required,a.kI.maxLength(10),a.kI.minLength(10),a.kI.pattern(/^[0-9]*$/)]),email:new a.NI("",[a.kI.email]),pan:new a.NI("",[a.kI.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),gstin_uin:new a.NI("",[a.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),anniversary:new a.NI(""),accounts_type:new a.NI("",[a.kI.required]),opening_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new a.NI("",[a.kI.required]),type_of_customer:new a.NI("",[a.kI.required]),credit_days:new a.NI(""),credit_amount:new a.NI(""),country:new a.NI(""),state:new a.NI(""),city:new a.NI(""),address:new a.NI("")}),this.getCity(),this.getCountry(),this.getState(),this.getAccountType()}getCountry(){this.coreService.countryList().subscribe(o=>{this.country=o})}getState(){this.coreService.stateList().subscribe(o=>{})}selectState(o){console.log(o),this.coreService.getStateByCountryId(o).subscribe(n=>{this.state=n,console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(o=>{this.city=o})}selectCity(o){console.log(o),this.coreService.getCityByStateId(o).subscribe(n=>{this.city=n})}getAccountType(){this.coreService.accountType().subscribe(o=>{console.log(o),this.accountType=o})}submit(){console.log(this.accountForm.value),this.accountForm.valid?(this.loaders=!0,this.coreService.addAccount(this.accountForm.value).subscribe(o=>{console.log(o),this.loaders=!1,this.addRes=o,"Successfuly Added"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.accountForm.reset(),this.router.navigate(["//account/accountlist"]))},o=>{console.log(o.error.gst),(o.error.anniversary||o.error.birthday||o.error.credit_days)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):(this.accountForm.markAllAsTouched(),console.log("hhhhhh"))}get contact_person_name(){return this.accountForm.get("contact_person_name")}get title(){return this.accountForm.get("title")}get birthday(){return this.accountForm.get("birthday")}get mobile(){return this.accountForm.get("mobile")}get email(){return this.accountForm.get("email")}get pan(){return this.accountForm.get("pan")}get gstin_uin(){return this.accountForm.get("gstin_uin")}get anniversary(){return this.accountForm.get("anniversary")}get opening_balance(){return this.accountForm.get("opening_balance")}get opening_balance_type(){return this.accountForm.get("opening_balance_type")}get type_of_customer(){return this.accountForm.get("type_of_customer")}get accounts_type(){return this.accountForm.get("accounts_type")}get credit_days(){return this.accountForm.get("credit_days")}get credit_amount(){return this.accountForm.get("credit_amount")}get countryy(){return this.accountForm.get("country")}get statee(){return this.accountForm.get("state")}get cityy(){return this.accountForm.get("city")}get address(){return this.accountForm.get("address")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(m.p),t.Y36(_._W),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-addaccount"]],decls:152,vars:84,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","contact_person_name","id","contact_person_name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","title","id","title",3,"ngClass"],["type","date","formControlName","birthday","id","birthday",3,"ngClass"],["type","text","formControlName","email","id","email",3,"ngClass"],["type","text","formControlName","mobile","maxlength","10","minlength","10","id","mobile",3,"ngClass"],["type","text","formControlName","pan","id","pan",3,"ngClass"],["type","text","formControlName","gstin_uin","id","gstin_uin",3,"ngClass"],["type","date","formControlName","anniversary","id","anniversary",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","opening_balance","id","opening_balance",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["formControlName","type_of_customer","required","","id","type_of_customer",1,"w-100","h-100","border",3,"ngClass"],["value","","selected","","disabled",""],["value","Registered"],["formControlName","accounts_type","required","","id","accounts_type",1,"w-100","h-100","border",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["type","date","formControlName","credit_days","id","credit_days",3,"ngClass"],["type","text","formControlName","credit_amount","id","credit_amount",3,"ngClass"],["formControlName","country","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["formControlName","state","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["cityValue",""],["formControlName","city","id","city",1,"w-100","h-100","border",3,"ngClass"],[1,"col-lg-9","col-sm-9","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//account/accountlist",1,"btn","btn-cancel"],[1,"text-danger"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o){const d=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Account"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Account "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13," Name"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,f,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Title*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,y,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Date of Birth"),t.qZA(),t._UZ(26,"input",11),t.YNc(27,Z,2,1,"span",9),t.YNc(28,h,2,0,"span",9),t.qZA()(),t.TgZ(29,"div",6)(30,"div",7)(31,"label"),t._uU(32,"Email"),t.qZA(),t._UZ(33,"input",12),t.YNc(34,A,2,0,"span",9),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38," Phone*"),t.qZA(),t._UZ(39,"input",13),t.YNc(40,v,2,0,"span",9),t.qZA()(),t.TgZ(41,"div",6)(42,"div",7)(43,"label"),t._uU(44,"Pancard"),t.qZA(),t._UZ(45,"input",14),t.YNc(46,b,2,0,"span",9),t.qZA()(),t.TgZ(47,"div",6)(48,"div",7)(49,"label"),t._uU(50,"Gstin Number"),t.qZA(),t._UZ(51,"input",15),t.YNc(52,C,2,0,"span",9),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Anniversary"),t.qZA(),t._UZ(57,"input",16),t.YNc(58,T,2,1,"span",9),t.YNc(59,q,2,0,"span",9),t.qZA()(),t.TgZ(60,"div",17)(61,"div",18)(62,"div",19)(63,"label"),t._uU(64,"Opening Balance*"),t.qZA(),t.TgZ(65,"div",20)(66,"div")(67,"select",21)(68,"option",22),t._uU(69,"Balance type"),t.qZA(),t.TgZ(70,"option",23),t._uU(71,"Cr"),t.qZA(),t.TgZ(72,"option",24),t._uU(73,"Dr"),t.qZA()(),t.YNc(74,N,2,0,"span",25),t.qZA(),t.TgZ(75,"div"),t._UZ(76,"input",26),t.YNc(77,U,2,0,"span",27),t.qZA()()()()(),t.TgZ(78,"div",6)(79,"div",7)(80,"label"),t._uU(81,"Type of customer*"),t.qZA(),t.TgZ(82,"select",28)(83,"option",29),t._uU(84,"Balance type"),t.qZA(),t.TgZ(85,"option",30),t._uU(86,"Registered"),t.qZA()(),t.YNc(87,I,2,0,"span",9),t.qZA()(),t.TgZ(88,"div",6)(89,"div",7)(90,"label"),t._uU(91,"Type of Account*"),t.qZA(),t.TgZ(92,"select",31)(93,"option",29),t._uU(94,"Accounts type"),t.qZA(),t.YNc(95,J,2,2,"option",32),t.qZA(),t.YNc(96,Q,2,0,"span",9),t.qZA()(),t.TgZ(97,"div",6)(98,"div",7)(99,"label"),t._uU(100,"Credit Days"),t.qZA(),t._UZ(101,"input",33),t.YNc(102,F,2,1,"span",9),t.YNc(103,Y,2,0,"span",9),t.qZA()(),t.TgZ(104,"div",6)(105,"div",7)(106,"label"),t._uU(107,"Credit Amount"),t.qZA(),t._UZ(108,"input",34),t.YNc(109,S,2,0,"span",9),t.qZA()(),t.TgZ(110,"div",6)(111,"div",7)(112,"label"),t._uU(113,"Country"),t.qZA(),t.TgZ(114,"select",35,36),t.NdJ("change",function(){t.CHM(d);const p=t.MAs(115);return t.KtG(n.selectState(p.value))}),t.TgZ(116,"option",29),t._uU(117,"Country"),t.qZA(),t.YNc(118,w,2,2,"option",32),t.qZA(),t.YNc(119,E,2,0,"span",9),t.qZA()(),t.TgZ(120,"div",6)(121,"div",7)(122,"label"),t._uU(123," State"),t.qZA(),t.TgZ(124,"select",37,38),t.NdJ("change",function(){t.CHM(d);const p=t.MAs(125);return t.KtG(n.selectCity(p.value))}),t.TgZ(126,"option",29),t._uU(127,"State"),t.qZA(),t.YNc(128,K,2,2,"option",32),t.qZA(),t.YNc(129,V,2,0,"span",9),t.YNc(130,O,2,0,"span",9),t.qZA()(),t.TgZ(131,"div",6)(132,"div",7)(133,"label"),t._uU(134," City"),t.qZA(),t.TgZ(135,"select",39)(136,"option",29),t._uU(137,"City"),t.qZA(),t.YNc(138,k,2,2,"option",32),t.qZA(),t.YNc(139,M,2,0,"span",9),t.YNc(140,B,2,0,"span",9),t.qZA()(),t.TgZ(141,"div",40)(142,"div",7)(143,"label"),t._uU(144,"Address"),t.qZA(),t._UZ(145,"textarea",41),t.YNc(146,D,2,0,"span",9),t.qZA()(),t.TgZ(147,"div",19),t.YNc(148,R,2,0,"button",42),t.YNc(149,P,3,0,"button",43),t.TgZ(150,"a",44),t._uU(151,"Cancel"),t.qZA()()()()()()}2&o&&(t.xp6(8),t.Q6J("formGroup",n.accountForm),t.xp6(6),t.Q6J("ngClass",t.VKq(48,s,n.f.contact_person_name.touched&&n.f.contact_person_name.invalid)),t.xp6(1),t.Q6J("ngIf",n.contact_person_name&&n.contact_person_name.invalid&&n.contact_person_name.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,s,n.f.title.touched&&n.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",n.title&&n.title.invalid&&n.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(52,s,n.f.birthday.touched&&n.f.birthday.invalid)),t.xp6(1),t.Q6J("ngIf",n.dateError),t.xp6(1),t.Q6J("ngIf",n.birthday&&n.birthday.invalid&&n.birthday.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(54,s,n.f.email.touched&&n.f.email.invalid)),t.xp6(1),t.Q6J("ngIf",n.email&&n.email.invalid&&n.email.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(56,s,n.f.mobile.touched&&n.f.mobile.invalid)),t.xp6(1),t.Q6J("ngIf",n.mobile&&n.mobile.invalid&&n.mobile.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(58,s,n.f.pan.touched&&n.f.pan.invalid)),t.xp6(1),t.Q6J("ngIf",n.pan&&n.pan.invalid&&n.pan.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(60,s,n.f.gstin_uin.touched&&n.f.gstin_uin.invalid)),t.xp6(1),t.Q6J("ngIf",n.gstin_uin&&n.gstin_uin.invalid&&n.gstin_uin.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(62,s,n.f.anniversary.touched&&n.f.anniversary.invalid)),t.xp6(1),t.Q6J("ngIf",n.dateError),t.xp6(1),t.Q6J("ngIf",n.anniversary&&n.anniversary.invalid&&n.anniversary.touched),t.xp6(8),t.Q6J("ngClass",t.VKq(64,s,n.f.opening_balance_type.touched&&n.f.opening_balance_type.invalid)),t.xp6(7),t.Q6J("ngIf",n.opening_balance_type&&n.opening_balance_type.invalid&&n.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(66,s,n.f.opening_balance.touched&&n.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",n.opening_balance&&n.opening_balance.invalid&&n.opening_balance.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(68,s,n.f.type_of_customer.touched&&n.f.type_of_customer.invalid)),t.xp6(5),t.Q6J("ngIf",n.type_of_customer&&n.type_of_customer.invalid&&n.type_of_customer.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(70,s,n.f.accounts_type.touched&&n.f.accounts_type.invalid)),t.xp6(3),t.Q6J("ngForOf",n.accountType),t.xp6(1),t.Q6J("ngIf",n.accounts_type&&n.accounts_type.invalid&&n.accounts_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(72,s,n.f.credit_days.touched&&n.f.credit_days.invalid)),t.xp6(1),t.Q6J("ngIf",n.dateError),t.xp6(1),t.Q6J("ngIf",n.credit_days&&n.credit_days.invalid&&n.credit_days.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(74,s,n.f.credit_amount.touched&&n.f.credit_amount.invalid)),t.xp6(1),t.Q6J("ngIf",n.credit_amount&&n.credit_amount.invalid&&n.credit_amount.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(76,s,n.f.country.touched&&n.f.country.invalid)),t.xp6(4),t.Q6J("ngForOf",n.country),t.xp6(1),t.Q6J("ngIf",n.countryy&&n.countryy.invalid&&n.countryy.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(78,s,n.f.state.touched&&n.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",n.state),t.xp6(1),t.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched&&(null==n.state?null:n.state.length)>0),t.xp6(1),t.Q6J("ngIf",n.statee&&n.statee.invalid&&n.statee.touched&&(null==n.state?null:n.state.length)<=0),t.xp6(5),t.Q6J("ngClass",t.VKq(80,s,n.f.city.touched&&n.f.city.invalid)),t.xp6(3),t.Q6J("ngForOf",n.city),t.xp6(1),t.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched&&(null==n.city?null:n.city.length)>0),t.xp6(1),t.Q6J("ngIf",n.cityy&&n.cityy.invalid&&n.cityy.touched&&(null==n.city?null:n.city.length)<=0),t.xp6(5),t.Q6J("ngClass",t.VKq(82,s,n.f.address.touched&&n.f.address.invalid)),t.xp6(1),t.Q6J("ngIf",n.address&&n.address.invalid&&n.address.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[r.mk,r.sg,r.O5,u.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(G),u.Bz]}),e})();var $=c(906);let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,L,$.ZU,a.u5,a.UX]}),e})()}}]);