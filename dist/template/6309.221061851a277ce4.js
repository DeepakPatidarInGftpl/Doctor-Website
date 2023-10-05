"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6309],{66309:(S,h,i)=>{i.r(h),i.d(h,{AddaccountModule:()=>N});var s=i(36895),d=i(88996),a=i(24006),t=i(94650),y=i(80927),v=i(97185);function r(e,c){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Enter Title name "),t.qZA())}function A(e,c){if(1&e&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.Q6J("value",o.title),t.uIk("data-id",o.id),t.xp6(1),t.Oqu(o.title)}}function p(e,c){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Select Type of Account"),t.qZA())}function f(e,c){if(1&e&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.s9C("value",null==o?null:o.id),t.xp6(1),t.Oqu(null==o?null:o.title)}}function g(e,c){1&e&&(t.TgZ(0,"span",29),t._uU(1,"Select Account Sub Type "),t.qZA())}function u(e,c){1&e&&(t.TgZ(0,"span",31),t._uU(1,"Select Balance Type"),t.qZA())}function m(e,c){1&e&&(t.TgZ(0,"span",32),t._uU(1," Enter your Balance"),t.qZA())}function _(e,c){1&e&&(t.TgZ(0,"button",33),t._uU(1,"Submit"),t.qZA())}function b(e,c){1&e&&(t.TgZ(0,"button",34),t._UZ(1,"span",35),t._uU(2,"Submit"),t.qZA())}const l=function(e){return{"is-invalid":e}};let I=(()=>{class e{constructor(o,n,C,Z){this.fb=o,this.coreService=n,this.toastr=C,this.router=Z,this.dateError=null,this.loaders=!1}get f(){return this.accountForm.controls}ngOnInit(){this.accountForm=this.fb.group({title:new a.NI("",[a.kI.required]),accounts_type:new a.NI("",[a.kI.required]),account_subtype:new a.NI("",[a.kI.required]),opening_balance:new a.NI(0,[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new a.NI("",[a.kI.required]),account_id:new a.NI("")}),this.getCity(),this.getCountry(),this.getState(),this.getAccountType()}getCountry(){this.coreService.countryList().subscribe(o=>{this.country=o})}getState(){this.coreService.stateList().subscribe(o=>{})}selectState(o){this.coreService.getStateByCountryId(o).subscribe(n=>{this.state=n})}getCity(){this.coreService.getCity().subscribe(o=>{this.city=o})}selectCity(o){this.coreService.getCityByStateId(o).subscribe(n=>{this.city=n})}getAccountType(){this.coreService.accountType().subscribe(o=>{this.accountType=o})}getAccountSubType(o){this.coreService.getAccountTypeById(o).subscribe(n=>{this.accountSubTypeLsit=n,console.log(this.accountSubTypeLsit)})}submit(){this.accountForm.valid?(this.loaders=!0,this.coreService.addAccount(this.accountForm.value).subscribe(o=>{this.loaders=!1,this.addRes=o,this.addRes.success?(this.toastr.success(this.addRes.msg),this.accountForm.reset(),this.router.navigate(["//account/accountlist"])):this.loaders=!1},o=>{this.loaders=!1,this.toastr.error(o.error?.account_id[0],"Account Id"),(o.error.anniversary||o.error.birthday||o.error.credit_days)&&(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3))})):this.accountForm.markAllAsTouched()}get title(){return this.accountForm.get("title")}get opening_balance(){return this.accountForm.get("opening_balance")}get opening_balance_type(){return this.accountForm.get("opening_balance_type")}get account_subtype(){return this.accountForm.get("account_subtype")}get accounts_type(){return this.accountForm.get("accounts_type")}get account_id(){return this.accountForm.get("account_id")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(y.p),t.Y36(v._W),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-addaccount"]],decls:58,vars:25,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","accounts_type","required","","id","accounts_type",1,"w-100","h-100","border",3,"ngClass","change"],["accountValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","account_subtype","required","","id","account_subtype",1,"w-100","h-100","border",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","opening_balance","id","opening_balance",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//account/accountlist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o){const C=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Account"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Account "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,r,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Account Type*"),t.qZA(),t.TgZ(20,"select",10,11),t.NdJ("change",function(){t.CHM(C);const D=t.MAs(21);return t.KtG(n.getAccountSubType(D.value))}),t.TgZ(22,"option",12),t._uU(23,"Accounts type"),t.qZA(),t.YNc(24,A,2,3,"option",13),t.qZA(),t.YNc(25,p,2,0,"span",9),t.qZA()(),t.TgZ(26,"div",6)(27,"div",7)(28,"label"),t._uU(29,"Account Sub Type*"),t.qZA(),t.TgZ(30,"select",14)(31,"option",12),t._uU(32,"Select Account Sub type"),t.qZA(),t.YNc(33,f,2,2,"option",13),t.qZA(),t.YNc(34,g,2,0,"span",9),t.qZA()(),t.TgZ(35,"div",15)(36,"div",16)(37,"div",17)(38,"label"),t._uU(39,"Opening Balance*"),t.qZA(),t.TgZ(40,"div",18)(41,"div")(42,"select",19)(43,"option",20),t._uU(44,"Balance type"),t.qZA(),t.TgZ(45,"option",21),t._uU(46,"Cr"),t.qZA(),t.TgZ(47,"option",22),t._uU(48,"Dr"),t.qZA()(),t.YNc(49,u,2,0,"span",23),t.qZA(),t.TgZ(50,"div"),t._UZ(51,"input",24),t.YNc(52,m,2,0,"span",25),t.qZA()()()()(),t.TgZ(53,"div",17),t.YNc(54,_,2,0,"button",26),t.YNc(55,b,3,0,"button",27),t.TgZ(56,"a",28),t._uU(57,"Cancel"),t.qZA()()()()()()}2&o&&(t.xp6(8),t.Q6J("formGroup",n.accountForm),t.xp6(6),t.Q6J("ngClass",t.VKq(15,l,n.f.title.touched&&n.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",n.title&&n.title.invalid&&n.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(17,l,n.f.accounts_type.touched&&n.f.accounts_type.invalid)),t.xp6(4),t.Q6J("ngForOf",n.accountType),t.xp6(1),t.Q6J("ngIf",n.accounts_type&&n.accounts_type.invalid&&n.accounts_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(19,l,n.f.account_subtype.touched&&n.f.account_subtype.invalid)),t.xp6(3),t.Q6J("ngForOf",n.accountSubTypeLsit),t.xp6(1),t.Q6J("ngIf",n.account_subtype&&n.account_subtype.invalid&&n.account_subtype.touched),t.xp6(8),t.Q6J("ngClass",t.VKq(21,l,n.f.opening_balance_type.touched&&n.f.opening_balance_type.invalid)),t.xp6(7),t.Q6J("ngIf",n.opening_balance_type&&n.opening_balance_type.invalid&&n.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(23,l,n.f.opening_balance.touched&&n.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",n.opening_balance&&n.opening_balance.invalid&&n.opening_balance.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders))},dependencies:[s.mk,s.sg,s.O5,d.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.sg,a.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}"]}),e})();var U=i(30597);const T=JSON.parse(localStorage.getItem("auth"));let q;T&&T.permission&&T.permission.map(c=>{"master"===c.content_type.app_label&&"account"===c.content_type.model&&"add_account"==c.codename&&(q=c.codename)});const F=[{path:"",component:I,canActivate:[U.l],data:{allowedRoles:["add_account"]}}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(F),d.Bz]}),e})();var E=i(30906);let N=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,J,E.ZU,a.u5,a.UX]}),e})()},30597:(S,h,i)=>{i.d(h,{l:()=>v});var s=i(94650),d=i(88996),a=i(97185),t=i(42917),y=i(80927);let v=(()=>{class r{constructor(p,f,g,u,m){this.router=p,this.Arout=f,this.toastr=g,this.profileService=u,this.coreService=m}canActivate(p,f){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),g){const u=p.data.allowedRoles;console.log(u,"allowedRoles");const m=g.some(_=>u.includes(_.codename));if(console.log(m),this.coreService.getProfile().subscribe(_=>{this.userDetails=_,this.profileService.setUserDetails(this.userDetails);const b=_?.permission,l=this.profileService.getUserDetails();(!l||l.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(p){return new(p||r)(s.LFG(d.F0),s.LFG(d.gz),s.LFG(a._W),s.LFG(t.J),s.LFG(y.p))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);