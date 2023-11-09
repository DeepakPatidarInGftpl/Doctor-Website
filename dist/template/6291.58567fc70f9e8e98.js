"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6291],{26291:(I,m,s)=>{s.r(m),s.d(m,{EditaccountModule:()=>M});var c=s(36895),r=s(88996),i=s(24006),t=s(94650),v=s(80927),T=s(97185);function u(n,a){1&n&&(t.TgZ(0,"span",29),t._uU(1,"Enter Title name "),t.qZA())}function A(n,a){if(1&n&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.title),t.uIk("data-id",e.id),t.xp6(1),t.Oqu(e.title)}}function p(n,a){1&n&&(t.TgZ(0,"span",29),t._uU(1,"Select Type of Account"),t.qZA())}function y(n,a){if(1&n&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.title)}}function d(n,a){1&n&&(t.TgZ(0,"span",29),t._uU(1,"Select Account Sub Type"),t.qZA())}function l(n,a){1&n&&(t.TgZ(0,"span",29),t._uU(1,",Data Not Available please (Select Another Account Type)"),t.qZA())}function g(n,a){1&n&&(t.TgZ(0,"span",31),t._uU(1,"Select Balance Type"),t.qZA())}function h(n,a){1&n&&(t.TgZ(0,"span",32),t._uU(1," Enter your Balance"),t.qZA())}function b(n,a){1&n&&(t.TgZ(0,"button",33),t._uU(1,"Submit"),t.qZA())}function f(n,a){1&n&&(t.TgZ(0,"button",34),t._UZ(1,"span",35),t._uU(2,"\xa0 Submit"),t.qZA())}const _=function(n){return{"is-invalid":n}};let U=(()=>{class n{constructor(e,o,C,E,S){this.fb=e,this.coreService=o,this.toastr=C,this.router=E,this.Arout=S,this.dateError=null,this.countryError=null,this.stateError=null,this.loaders=!1}get f(){return this.accountForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.accountForm=this.fb.group({title:new i.NI("",[i.kI.required]),accounts_type:new i.NI("",[i.kI.required]),account_subtype:new i.NI("",[i.kI.required]),opening_balance:new i.NI(0,[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new i.NI("",[i.kI.required])}),this.coreService.getAccountById(this.id).subscribe(e=>{this.data=e,this.getAccountSubType(this.data?.accounts_type),this.accountForm.patchValue({title:this.data.title,accounts_type:this.data?.accounts_type,opening_balance:this.data?.opening_balance,opening_balance_type:this.data?.opening_balance_type,account_subtype:this.data?.account_subtype?.id})}),this.getCountry(),this.getState(),this.getAccountType(),this.getCity()}getCountry(){this.coreService.countryList().subscribe(e=>{this.country=e})}getState(){this.coreService.stateList().subscribe(e=>{})}selectState(e){console.log(e),this.coreService.getStateByCountryId(e).subscribe(o=>{this.state=o})}getCity(){this.coreService.getCity().subscribe(e=>{})}selectCity(e){this.coreService.getCityByStateId(e).subscribe(o=>{this.city=o})}getAccountType(){this.coreService.accountType().subscribe(e=>{this.accountType=e})}getAccountSubType(e){this.coreService.getAccountTypeById(e).subscribe(o=>{this.accountSubTypeLsit=o})}submit(){this.accountForm.valid?(this.loaders=!0,this.coreService.updateAccount(this.accountForm.value,this.id).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.accountForm.reset(),this.router.navigate(["//account/accountlist"])):(this.loaders=!1,this.toastr.error(this.addRes?.account_id[0]))},e=>{this.loaders=!1,this.toastr.error(e.error?.account_id[0]),e.error.anniversary||e.error.birthday||e.error.credit_days?(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3)):e.error.country?(this.countryError="Select country",setTimeout(()=>{this.countryError=""},2e3)):e.error.state?(this.stateError="Select state",setTimeout(()=>{this.stateError=""},2e3)):e.error.accounts_type&&this.toastr.error(e.error.accounts_type[0])})):(this.accountForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.accountForm.get("title")}get opening_balance(){return this.accountForm.get("opening_balance")}get opening_balance_type(){return this.accountForm.get("opening_balance_type")}get account_subtype(){return this.accountForm.get("account_subtype")}get accounts_type(){return this.accountForm.get("accounts_type")}get account_id(){return this.accountForm.get("account_id")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(v.p),t.Y36(T._W),t.Y36(r.F0),t.Y36(r.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-editaccount"]],decls:59,vars:26,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","accounts_type","required","","id","accounts_type",3,"ngClass","change"],["accountValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","account_subtype","required","","id","account_subtype",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","opening_balance","id","opening_balance",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//account/accountlist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e){const C=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Account"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Account "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title/Mobile No.*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,u,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Account Type*"),t.qZA(),t.TgZ(20,"select",10,11),t.NdJ("change",function(){t.CHM(C);const S=t.MAs(21);return t.KtG(o.getAccountSubType(S.value))}),t.TgZ(22,"option",12),t._uU(23,"Accounts Type"),t.qZA(),t.YNc(24,A,2,3,"option",13),t.qZA(),t.YNc(25,p,2,0,"span",9),t.qZA()(),t.TgZ(26,"div",6)(27,"div",7)(28,"label"),t._uU(29,"Account Sub Type*"),t.qZA(),t.TgZ(30,"select",14)(31,"option",12),t._uU(32,"Select Account Sub Type"),t.qZA(),t.YNc(33,y,2,2,"option",13),t.qZA(),t.YNc(34,d,2,0,"span",9),t.YNc(35,l,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",15)(37,"div",16)(38,"div",17)(39,"label"),t._uU(40,"Opening Balance*"),t.qZA(),t.TgZ(41,"div",18)(42,"div")(43,"select",19)(44,"option",20),t._uU(45,"Balance Type"),t.qZA(),t.TgZ(46,"option",21),t._uU(47,"Cr"),t.qZA(),t.TgZ(48,"option",22),t._uU(49,"Dr"),t.qZA()(),t.YNc(50,g,2,0,"span",23),t.qZA(),t.TgZ(51,"div"),t._UZ(52,"input",24),t.YNc(53,h,2,0,"span",25),t.qZA()()()()(),t.TgZ(54,"div",17),t.YNc(55,b,2,0,"button",26),t.YNc(56,f,3,0,"button",27),t.TgZ(57,"a",28),t._uU(58,"Cancel"),t.qZA()()()()()()}2&e&&(t.xp6(8),t.Q6J("formGroup",o.accountForm),t.xp6(6),t.Q6J("ngClass",t.VKq(16,_,o.f.title.touched&&o.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",o.title&&o.title.invalid&&o.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(18,_,o.f.accounts_type.touched&&o.f.accounts_type.invalid)),t.xp6(4),t.Q6J("ngForOf",o.accountType),t.xp6(1),t.Q6J("ngIf",o.accounts_type&&o.accounts_type.invalid&&o.accounts_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(20,_,o.f.account_subtype.touched&&o.f.account_subtype.invalid)),t.xp6(3),t.Q6J("ngForOf",o.accountSubTypeLsit),t.xp6(1),t.Q6J("ngIf",o.account_subtype&&o.account_subtype.invalid&&o.account_subtype.touched),t.xp6(1),t.Q6J("ngIf",0==(null==o.accountSubTypeLsit?null:o.accountSubTypeLsit.length)),t.xp6(8),t.Q6J("ngClass",t.VKq(22,_,o.f.opening_balance_type.touched&&o.f.opening_balance_type.invalid)),t.xp6(7),t.Q6J("ngIf",o.opening_balance_type&&o.opening_balance_type.invalid&&o.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(24,_,o.f.opening_balance.touched&&o.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",o.opening_balance&&o.opening_balance.invalid&&o.opening_balance.touched),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders))},dependencies:[c.mk,c.sg,c.O5,r.yS,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})();var F=s(30597);const Z=JSON.parse(localStorage.getItem("auth"));let q;Z&&Z.permission&&Z.permission.map(a=>{"master"===a.content_type.app_label&&"account"===a.content_type.model&&"change_account"==a.codename&&(q=a.codename)});const J=[{path:"",component:U,canActivate:[F.l],data:{allowedRoles:["change_account"]}}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(J),r.Bz]}),n})();var D=s(30906);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,N,i.u5,i.UX,D.ZU]}),n})()},30597:(I,m,s)=>{s.d(m,{l:()=>T});var c=s(94650),r=s(88996),i=s(97185),t=s(42917),v=s(80927);let T=(()=>{class u{constructor(p,y,d,l,g){this.router=p,this.Arout=y,this.toastr=d,this.profileService=l,this.coreService=g}canActivate(p,y){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),d){const l=p.data.allowedRoles;console.log(l,"allowedRoles");const g=d.some(h=>l.includes(h.codename));if(console.log(g),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const b=h?.permission,f=this.profileService.getUserDetails();(!f||f.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(p){return new(p||u)(c.LFG(r.F0),c.LFG(r.gz),c.LFG(i._W),c.LFG(t.J),c.LFG(v.p))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);