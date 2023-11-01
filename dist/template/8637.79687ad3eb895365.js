"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8637],{44979:(S,Z,l)=>{l.r(Z),l.d(Z,{AddCompanyBankModule:()=>x});var m=l(36895),v=l(88996),a=l(24006),n=l(94650),I=l(42917),d=l(97185),s=l(80927);function r(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter your name "),n.qZA())}function u(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter Account Holder Name"),n.qZA())}function p(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter Valid Account Number (ex-min 10 digit)"),n.qZA())}function c(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter your Branch Name "),n.qZA())}function f(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter your IFSC Code"),n.qZA())}function y(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter Swift Code"),n.qZA())}function h(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Credit Balance"),n.qZA())}function _(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Debit Balance"),n.qZA())}function C(t,o){if(1&t&&(n.TgZ(0,"option",36),n._uU(1),n.qZA()),2&t){const i=o.$implicit;n.s9C("value",i.id),n.xp6(1),n.hij("",i.country_name," ")}}function b(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter country"),n.qZA())}function q(t,o){if(1&t&&(n.TgZ(0,"option",36),n._uU(1),n.qZA()),2&t){const i=o.$implicit;n.s9C("value",i.id),n.xp6(1),n.Oqu(i.state)}}function B(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter state Name"),n.qZA())}function N(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Data not available"),n.qZA())}function F(t,o){if(1&t&&(n.TgZ(0,"option",36),n._uU(1),n.qZA()),2&t){const i=o.$implicit;n.s9C("value",i.id),n.xp6(1),n.Oqu(i.city)}}function J(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter city"),n.qZA())}function w(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"data not available"),n.qZA())}function Q(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter your 6 digits pincode number"),n.qZA())}function Y(t,o){1&t&&(n.TgZ(0,"span",35),n._uU(1,"Enter your address"),n.qZA())}function M(t,o){1&t&&(n.TgZ(0,"button",37),n._uU(1,"Submit"),n.qZA())}function D(t,o){1&t&&(n.TgZ(0,"button",38),n._UZ(1,"span",39),n._uU(2," \xa0 Submit"),n.qZA())}const g=function(t){return{"is-invalid":t}};let E=(()=>{class t{constructor(i,e,T,k,A){this.fb=i,this.copmpanyService=e,this.toastr=T,this.router=k,this.coreService=A,this.date=new Date,this.dateError=null,this.loaders=!1}get f(){return this.companyBankForm.controls}ngOnInit(){this.companyBankForm=this.fb.group({name:new a.NI("",[a.kI.required]),branch_name:new a.NI("",[a.kI.required]),account_number:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),account_holder_name:new a.NI("",[a.kI.required]),IFSC_code:new a.NI("",[a.kI.required]),Swift_code:new a.NI("",[a.kI.required]),credit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),debit_balance:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),counntry:new a.NI("",[a.kI.required]),state:new a.NI("",[a.kI.required]),city:new a.NI("",[a.kI.required]),pincode:new a.NI("",[a.kI.maxLength(6),a.kI.minLength(6),a.kI.required,a.kI.pattern(/^[0-9]*$/)]),address:new a.NI("",[a.kI.required]),is_upi_available:new a.NI("")}),this.getCountry(),this.getYear(),this.getCurrency()}getYear(){this.coreService.getFinancialYear().subscribe(i=>{this.yearDetails=i})}getCurrency(){this.coreService.getCurrency().subscribe(i=>{this.currencyDetails=i})}getCountry(){this.coreService.countryList().subscribe(i=>{this.country=i})}selectState(i){this.coreService.getStateByCountryId(i).subscribe(e=>{this.state=e})}selectCity(i){this.coreService.getCityByStateId(i).subscribe(e=>{this.city=e})}submit(){this.companyBankForm.valid?(this.loaders=!0,this.coreService.addCompanyBank(this.companyBankForm.value).subscribe(i=>{this.addRes=i,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.companyBankForm.reset(),this.router.navigate(["//bank/companyBank"])):(this.loaders=!1,this.toastr.error(this.addRes.account_number[0],"Account number"))},i=>{this.loaders=!1})):this.companyBankForm.markAllAsTouched()}get name(){return this.companyBankForm.get("name")}get branch_name(){return this.companyBankForm.get("branch_name")}get account_number(){return this.companyBankForm.get("account_number")}get account_holder_name(){return this.companyBankForm.get("account_holder_name")}get financial_year(){return this.companyBankForm.get("financial_year")}get IFSC_code(){return this.companyBankForm.get("IFSC_code")}get Swift_code(){return this.companyBankForm.get("Swift_code")}get credit_balance(){return this.companyBankForm.get("credit_balance")}get debit_balance(){return this.companyBankForm.get("debit_balance")}get is_upi_available(){return this.companyBankForm.get("is_upi_available")}get address(){return this.companyBankForm.get("address")}get countryy(){return this.companyBankForm.get("counntry")}get statee(){return this.companyBankForm.get("state")}get cityy(){return this.companyBankForm.get("city")}get pincode(){return this.companyBankForm.get("pincode")}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(a.qu),n.Y36(I.J),n.Y36(d._W),n.Y36(v.F0),n.Y36(s.p))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-company-bank"]],decls:112,vars:63,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","name","id","name",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","account_holder_name","id","account_holder_name",3,"ngClass"],["type","text","formControlName","account_number","maxlength","15","minlength","10","id","account_number",3,"ngClass"],["type","text","formControlName","branch_name","id","branch_name",3,"ngClass"],["type","text","formControlName","IFSC_code","id","IFSC_code",3,"ngClass"],["type","text","formControlName","Swift_code","id","Swift_code",3,"ngClass"],["type","text","formControlName","credit_balance","id","credit_balance",3,"ngClass"],["type","text","formControlName","debit_balance","id","debit_balance",3,"ngClass"],[1,"form-group","my-4"],[1,"d-flex"],["type","checkbox","formControlName","is_upi_available",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],["formControlName","counntry","required","","id","counntry",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["stateValue",""],["formControlName","city","required","","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//bank/companyBank",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(i,e){if(1&i){const T=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"h4"),n._uU(3," Add Company Bank"),n.qZA(),n.TgZ(4,"h6"),n._uU(5,"Create new Company Bank"),n.qZA()()(),n.TgZ(6,"div",2)(7,"div",3)(8,"form",4),n.NdJ("ngSubmit",function(){return e.submit()}),n.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),n._uU(13,"Name*"),n.qZA(),n._UZ(14,"input",8),n.YNc(15,r,2,0,"span",9),n.qZA()(),n.TgZ(16,"div",6)(17,"div",7)(18,"label"),n._uU(19,"Account Holder Name*"),n.qZA(),n._UZ(20,"input",10),n.YNc(21,u,2,0,"span",9),n.qZA()(),n.TgZ(22,"div",6)(23,"div",7)(24,"label"),n._uU(25,"Account Number*"),n.qZA(),n._UZ(26,"input",11),n.YNc(27,p,2,0,"span",9),n.qZA()(),n.TgZ(28,"div",6)(29,"div",7)(30,"label"),n._uU(31,"Branch Name*"),n.qZA(),n._UZ(32,"input",12),n.YNc(33,c,2,0,"span",9),n.qZA()(),n.TgZ(34,"div",6)(35,"div",7)(36,"label"),n._uU(37,"IFSC Code*"),n.qZA(),n._UZ(38,"input",13),n.YNc(39,f,2,0,"span",9),n.qZA()(),n.TgZ(40,"div",6)(41,"div",7)(42,"label"),n._uU(43,"Swift Code*"),n.qZA(),n._UZ(44,"input",14),n.YNc(45,y,2,0,"span",9),n.qZA()(),n.TgZ(46,"div",6)(47,"div",7)(48,"label"),n._uU(49,"Credit Balance*"),n.qZA(),n._UZ(50,"input",15),n.YNc(51,h,2,0,"span",9),n.qZA()(),n.TgZ(52,"div",6)(53,"div",7)(54,"label"),n._uU(55,"Debit Balance*"),n.qZA(),n._UZ(56,"input",16),n.YNc(57,_,2,0,"span",9),n.qZA()(),n.TgZ(58,"div",6)(59,"div",17)(60,"div",18),n._UZ(61,"input",19),n.TgZ(62,"label",20),n._uU(63,"Is UPI Available"),n.qZA()()()(),n.TgZ(64,"div",6)(65,"div",7)(66,"label"),n._uU(67,"Country*"),n.qZA(),n.TgZ(68,"select",21,22),n.NdJ("change",function(){n.CHM(T);const A=n.MAs(69);return n.KtG(e.selectState(A.value))}),n.TgZ(70,"option",23),n._uU(71,"Country"),n.qZA(),n.YNc(72,C,2,2,"option",24),n.qZA(),n.YNc(73,b,2,0,"span",9),n.qZA()(),n.TgZ(74,"div",6)(75,"div",7)(76,"label"),n._uU(77," State*"),n.qZA(),n.TgZ(78,"select",25,26),n.NdJ("change",function(){n.CHM(T);const A=n.MAs(79);return n.KtG(e.selectCity(A.value))}),n.TgZ(80,"option",23),n._uU(81,"State"),n.qZA(),n.YNc(82,q,2,2,"option",24),n.qZA(),n.YNc(83,B,2,0,"span",9),n.YNc(84,N,2,0,"span",9),n.qZA()(),n.TgZ(85,"div",6)(86,"div",7)(87,"label"),n._uU(88," City*"),n.qZA(),n.TgZ(89,"select",27)(90,"option",23),n._uU(91,"City"),n.qZA(),n.YNc(92,F,2,2,"option",24),n.qZA(),n.YNc(93,J,2,0,"span",9),n.YNc(94,w,2,0,"span",9),n.qZA()(),n.TgZ(95,"div",6)(96,"div",7)(97,"label"),n._uU(98,"Pincode*"),n.qZA(),n._UZ(99,"input",28),n.YNc(100,Q,2,0,"span",9),n.qZA()(),n.TgZ(101,"div",29)(102,"div",7)(103,"label"),n._uU(104,"Address*"),n.qZA(),n._UZ(105,"textarea",30),n.YNc(106,Y,2,0,"span",9),n.qZA()(),n.TgZ(107,"div",31),n.YNc(108,M,2,0,"button",32),n.YNc(109,D,3,0,"button",33),n.TgZ(110,"a",34),n._uU(111,"Cancel"),n.qZA()()()()()()}2&i&&(n.xp6(8),n.Q6J("formGroup",e.companyBankForm),n.xp6(6),n.Q6J("ngClass",n.VKq(37,g,e.f.name.touched&&e.f.name.invalid)),n.xp6(1),n.Q6J("ngIf",e.name&&e.name.invalid&&e.name.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(39,g,e.f.account_holder_name.touched&&e.f.account_holder_name.invalid)),n.xp6(1),n.Q6J("ngIf",e.account_holder_name&&e.account_holder_name.invalid&&e.account_holder_name.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(41,g,e.f.account_number.touched&&e.f.account_number.invalid)),n.xp6(1),n.Q6J("ngIf",e.account_number&&e.account_number.invalid&&e.account_number.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(43,g,e.f.branch_name.touched&&e.f.branch_name.invalid)),n.xp6(1),n.Q6J("ngIf",e.branch_name&&e.branch_name.invalid&&e.branch_name.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(45,g,e.f.IFSC_code.touched&&e.f.IFSC_code.invalid)),n.xp6(1),n.Q6J("ngIf",e.IFSC_code&&e.IFSC_code.invalid&&e.IFSC_code.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(47,g,e.f.Swift_code.touched&&e.f.Swift_code.invalid)),n.xp6(1),n.Q6J("ngIf",e.Swift_code&&e.Swift_code.invalid&&e.Swift_code.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(49,g,e.f.credit_balance.touched&&e.f.credit_balance.invalid)),n.xp6(1),n.Q6J("ngIf",e.credit_balance&&e.credit_balance.invalid&&e.credit_balance.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(51,g,e.f.debit_balance.touched&&e.f.debit_balance.invalid)),n.xp6(1),n.Q6J("ngIf",e.debit_balance&&e.debit_balance.invalid&&e.debit_balance.touched),n.xp6(4),n.Q6J("id","checkboxMeasure-")("ngModel",!0),n.xp6(1),n.Q6J("for","checkboxMeasure-"),n.xp6(6),n.Q6J("ngClass",n.VKq(53,g,e.f.counntry.touched&&e.f.counntry.invalid)),n.xp6(4),n.Q6J("ngForOf",e.country),n.xp6(1),n.Q6J("ngIf",e.countryy&&e.countryy.invalid&&e.countryy.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(55,g,e.f.state.touched&&e.f.state.invalid)),n.xp6(4),n.Q6J("ngForOf",e.state),n.xp6(1),n.Q6J("ngIf",e.statee&&e.statee.invalid&&e.statee.touched&&(null==e.state?null:e.state.length)>0),n.xp6(1),n.Q6J("ngIf",e.statee&&e.statee.invalid&&e.statee.touched&&(null==e.state?null:e.state.length)<=0),n.xp6(5),n.Q6J("ngClass",n.VKq(57,g,e.f.city.touched&&e.f.city.invalid)),n.xp6(3),n.Q6J("ngForOf",e.city),n.xp6(1),n.Q6J("ngIf",e.cityy&&e.cityy.invalid&&e.cityy.touched&&(null==e.city?null:e.city.length)>0),n.xp6(1),n.Q6J("ngIf",e.cityy&&e.cityy.invalid&&e.cityy.touched&&(null==e.city?null:e.city.length)<=0),n.xp6(5),n.Q6J("ngClass",n.VKq(59,g,e.f.pincode.touched&&e.f.pincode.invalid)),n.xp6(1),n.Q6J("ngIf",e.pincode&&e.pincode.invalid&&e.pincode.touched),n.xp6(5),n.Q6J("ngClass",n.VKq(61,g,e.f.address.touched&&e.f.address.invalid)),n.xp6(1),n.Q6J("ngIf",e.address&&e.address.invalid&&e.address.touched),n.xp6(2),n.Q6J("ngIf",!e.loaders),n.xp6(1),n.Q6J("ngIf",e.loaders))},dependencies:[m.mk,m.sg,m.O5,v.yS,a._Y,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),t})();var O=l(30597);const U=JSON.parse(localStorage.getItem("auth"));let V;U&&U.map(o=>{"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"add_companybank"==o.codename&&(V=o.codename)});const K=[{path:"",component:E,canActivate:[O.l],data:{allowedRoles:["add_companybank"]}}];let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.Bz.forChild(K),v.Bz]}),t})();var R=l(8468),j=l(30906);let x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,P,R.I,j.ZU,a.u5,a.UX]}),t})()},65415:(S,Z,l)=>{l.d(Z,{G:()=>a,T:()=>I});var m=l(94650),a=function(){function d(s,r,u){this.el=s,this.vcr=r,this.renderer=u,this.dtOptions={}}return d.prototype.ngOnInit=function(){var s=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){s.displayTable(r)}):this.displayTable(null)},d.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},d.prototype.displayTable=function(s){var r=this;s&&(this.dtOptions=s),this.dtInstance=new Promise(function(u,p){Promise.resolve(r.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",r.el.nativeElement).length?p("Both the table and dtOptions cannot be empty"):setTimeout(function(){var y={rowCallback:function(h,_,C){if(c.columns){var b=c.columns;r.applyNgPipeTransform(h,b),r.applyNgRefTemplate(h,b,_)}c.rowCallback&&c.rowCallback(h,_,C)}};y=Object.assign({},c,y),r.dt=$(r.el.nativeElement).DataTable(y),u(r.dt)})})})},d.prototype.applyNgPipeTransform=function(s,r){r.filter(function(p){return p.ngPipeInstance&&!p.ngTemplateRef}).forEach(function(p){var c=p.ngPipeInstance,f=p.ngPipeArgs||[],y=r.findIndex(function(b){return b.data===p.data}),h=s.childNodes.item(y),_=$(h).text(),C=c.transform.apply(c,function(d,s,r){if(r||2===arguments.length)for(var c,u=0,p=s.length;u<p;u++)(c||!(u in s))&&(c||(c=Array.prototype.slice.call(s,0,u)),c[u]=s[u]);return d.concat(c||Array.prototype.slice.call(s))}([_],f,!1));$(h).text(C)})},d.prototype.applyNgRefTemplate=function(s,r,u){var p=this;r.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var y=f.ngTemplateRef,h=y.ref,_=y.context,C=r.findIndex(function(N){return N.data===f.data}),b=s.childNodes.item(C);$(b).html("");var q=Object.assign({},_,_?.userData,{adtData:u}),B=p.vcr.createEmbeddedView(h,q);p.renderer.appendChild(b,B.rootNodes[0])})},d.\u0275fac=function(r){return new(r||d)(m.Y36(m.SBq),m.Y36(m.s_b),m.Y36(m.Qsj))},d.\u0275dir=m.lG2({type:d,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),d}(),n=l(36895),I=function(){function d(){}return d.forRoot=function(){return{ngModule:d}},d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[n.ez]}),d}()}}]);