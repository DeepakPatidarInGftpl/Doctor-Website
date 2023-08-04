"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6291],{26291:(U,m,a)=>{a.r(m),a.d(m,{EditaccountModule:()=>M});var s=a(36895),r=a(88996),i=a(24006),t=a(94650),v=a(80927),T=a(97185);function u(n,c){1&n&&(t.TgZ(0,"span",30),t._uU(1,"Enter Title name "),t.qZA())}function A(n,c){if(1&n&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.title),t.uIk("data-id",e.id),t.xp6(1),t.Oqu(e.title)}}function d(n,c){1&n&&(t.TgZ(0,"span",30),t._uU(1,"Select Type of Account"),t.qZA())}function y(n,c){if(1&n&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.title)}}function p(n,c){1&n&&(t.TgZ(0,"span",30),t._uU(1,"Select Account Sub Type "),t.qZA())}function l(n,c){1&n&&(t.TgZ(0,"span",32),t._uU(1,"Select Balance Type"),t.qZA())}function g(n,c){1&n&&(t.TgZ(0,"span",33),t._uU(1," Enter your Balance"),t.qZA())}function h(n,c){1&n&&(t.TgZ(0,"span",30),t._uU(1,"Enter Account id"),t.qZA())}function f(n,c){1&n&&(t.TgZ(0,"button",34),t._uU(1,"Submit"),t.qZA())}function b(n,c){1&n&&(t.TgZ(0,"button",35),t._UZ(1,"span",36),t._uU(2,"Submit"),t.qZA())}const _=function(n){return{"is-invalid":n}};let q=(()=>{class n{constructor(e,o,C,E,S){this.fb=e,this.coreService=o,this.toastr=C,this.router=E,this.Arout=S,this.dateError=null,this.countryError=null,this.stateError=null,this.loaders=!1}get f(){return this.accountForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.accountForm=this.fb.group({title:new i.NI("",[i.kI.required]),accounts_type:new i.NI("",[i.kI.required]),account_subtype:new i.NI("",[i.kI.required]),opening_balance:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),opening_balance_type:new i.NI("",[i.kI.required]),account_id:new i.NI("")}),this.coreService.getAccountById(this.id).subscribe(e=>{this.data=e,this.accountForm.patchValue({title:this.data.title,accounts_type:this.data?.accounts_type,opening_balance:this.data?.opening_balance,opening_balance_type:this.data?.opening_balance_type,account_id:this.data?.account_id,account_subtype:this.data?.account_subtype?.id}),this.getAccountSubType(this.data?.accounts_type)}),this.getCountry(),this.getState(),this.getAccountType(),this.getCity()}getCountry(){this.coreService.countryList().subscribe(e=>{this.country=e})}getState(){this.coreService.stateList().subscribe(e=>{console.log(this.state)})}selectState(e){console.log(e),this.coreService.getStateByCountryId(e).subscribe(o=>{this.state=o,console.log(this.state)})}getCity(){this.coreService.getCity().subscribe(e=>{})}selectCity(e){console.log(e),this.coreService.getCityByStateId(e).subscribe(o=>{this.city=o})}getAccountType(){this.coreService.accountType().subscribe(e=>{console.log(e),this.accountType=e})}getAccountSubType(e){console.log(),this.coreService.getAccountTypeById(e).subscribe(o=>{this.accountSubTypeLsit=o,console.log(this.accountSubTypeLsit)})}submit(){console.log(this.accountForm.value),this.accountForm.valid?(this.loaders=!0,this.coreService.updateAccount(this.accountForm.value,this.id).subscribe(e=>{console.log(e),this.loaders=!1,this.addRes=e,"Account updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.accountForm.reset(),this.router.navigate(["//account/accountlist"]))},e=>{this.loaders=!1,console.log(e.error.gst),e.error.anniversary||e.error.birthday||e.error.credit_days?(this.dateError="Date (format:dd/mm/yyyy)",setTimeout(()=>{this.dateError=""},2e3)):e.error.country?(this.countryError="Select country",setTimeout(()=>{this.countryError=""},2e3)):e.error.state?(this.stateError="Select state",setTimeout(()=>{this.stateError=""},2e3)):e.error.accounts_type&&this.toastr.error(e.error.accounts_type[0])})):(this.accountForm.markAllAsTouched(),console.log("hhhhhh"))}get title(){return this.accountForm.get("title")}get opening_balance(){return this.accountForm.get("opening_balance")}get opening_balance_type(){return this.accountForm.get("opening_balance_type")}get account_subtype(){return this.accountForm.get("account_subtype")}get accounts_type(){return this.accountForm.get("accounts_type")}get account_id(){return this.accountForm.get("account_id")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(v.p),t.Y36(T._W),t.Y36(r.F0),t.Y36(r.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-editaccount"]],decls:62,vars:29,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","accounts_type","required","","id","accounts_type",1,"w-100","h-100","border",3,"ngClass","change"],["accountValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","account_subtype","required","","id","account_subtype",1,"w-100","h-100","border",3,"ngClass"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","opening_balance_type","required","","id","opening_balance_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["value","Cr",1,"unhov"],["value","Dr",1,"unhov"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","opening_balance","id","opening_balance",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["type","text","formControlName","account_id","id","account_id",3,"ngClass"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//account/accountlist",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e){const C=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Account"),t.qZA()()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),t._uU(11,"Title*"),t.qZA(),t._UZ(12,"input",8),t.YNc(13,u,2,0,"span",9),t.qZA()(),t.TgZ(14,"div",6)(15,"div",7)(16,"label"),t._uU(17,"Account Type*"),t.qZA(),t.TgZ(18,"select",10,11),t.NdJ("change",function(){t.CHM(C);const S=t.MAs(19);return t.KtG(o.getAccountSubType(S.value))}),t.TgZ(20,"option",12),t._uU(21,"Accounts type"),t.qZA(),t.YNc(22,A,2,3,"option",13),t.qZA(),t.YNc(23,d,2,0,"span",9),t.qZA()(),t.TgZ(24,"div",6)(25,"div",7)(26,"label"),t._uU(27,"Account Sub Type*"),t.qZA(),t.TgZ(28,"select",14)(29,"option",12),t._uU(30,"Select Account Sub type"),t.qZA(),t.YNc(31,y,2,2,"option",13),t.qZA(),t.YNc(32,p,2,0,"span",9),t.qZA()(),t.TgZ(33,"div",15)(34,"div",16)(35,"div",17)(36,"label"),t._uU(37,"Opening Balance*"),t.qZA(),t.TgZ(38,"div",18)(39,"div")(40,"select",19)(41,"option",20),t._uU(42,"Balance type"),t.qZA(),t.TgZ(43,"option",21),t._uU(44,"Cr"),t.qZA(),t.TgZ(45,"option",22),t._uU(46,"Dr"),t.qZA()(),t.YNc(47,l,2,0,"span",23),t.qZA(),t.TgZ(48,"div"),t._UZ(49,"input",24),t.YNc(50,g,2,0,"span",25),t.qZA()()()()(),t.TgZ(51,"div",15)(52,"div",7)(53,"label"),t._uU(54,"Account Id"),t.qZA(),t._UZ(55,"input",26),t.YNc(56,h,2,0,"span",9),t.qZA()(),t.TgZ(57,"div",17),t.YNc(58,f,2,0,"button",27),t.YNc(59,b,3,0,"button",28),t.TgZ(60,"a",29),t._uU(61,"Cancel"),t.qZA()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",o.accountForm),t.xp6(6),t.Q6J("ngClass",t.VKq(17,_,o.f.title.touched&&o.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",o.title&&o.title.invalid&&o.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(19,_,o.f.accounts_type.touched&&o.f.accounts_type.invalid)),t.xp6(4),t.Q6J("ngForOf",o.accountType),t.xp6(1),t.Q6J("ngIf",o.accounts_type&&o.accounts_type.invalid&&o.accounts_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(21,_,o.f.account_subtype.touched&&o.f.account_subtype.invalid)),t.xp6(3),t.Q6J("ngForOf",o.accountSubTypeLsit),t.xp6(1),t.Q6J("ngIf",o.account_subtype&&o.account_subtype.invalid&&o.account_subtype.touched),t.xp6(8),t.Q6J("ngClass",t.VKq(23,_,o.f.opening_balance_type.touched&&o.f.opening_balance_type.invalid)),t.xp6(7),t.Q6J("ngIf",o.opening_balance_type&&o.opening_balance_type.invalid&&o.opening_balance_type.touched),t.xp6(2),t.Q6J("ngClass",t.VKq(25,_,o.f.opening_balance.touched&&o.f.opening_balance.invalid)),t.xp6(1),t.Q6J("ngIf",o.opening_balance&&o.opening_balance.invalid&&o.opening_balance.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(27,_,o.f.account_id.touched&&o.f.account_id.invalid)),t.xp6(1),t.Q6J("ngIf",o.account_id&&o.account_id.invalid&&o.account_id.touched),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders))},dependencies:[s.mk,s.sg,s.O5,r.yS,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})();var F=a(30597);const Z=JSON.parse(localStorage.getItem("auth"));let I;Z&&Z.permission&&Z.permission.map(c=>{"master"===c.content_type.app_label&&"account"===c.content_type.model&&"change_account"==c.codename&&(I=c.codename,console.log(I))});const J=[{path:"",component:q,canActivate:[F.l],data:{allowedRoles:["change_account"]}}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(J),r.Bz]}),n})();var D=a(30906);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,N,i.u5,i.UX,D.ZU]}),n})()},30597:(U,m,a)=>{a.d(m,{l:()=>T});var s=a(94650),r=a(88996),i=a(97185),t=a(42917),v=a(80927);let T=(()=>{class u{constructor(d,y,p,l,g){this.router=d,this.Arout=y,this.toastr=p,this.profileService=l,this.coreService=g}canActivate(d,y){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),p){const l=d.data.allowedRoles;console.log(l,"allowedRoles");const g=p.some(h=>l.includes(h.codename));if(this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const f=h?.permission,b=this.profileService.getUserDetails();(!b||b.length!==f.length)&&(this.profileService.setUserPermission(f),window.location.reload())}),console.log(g),g)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(d){return new(d||u)(s.LFG(r.F0),s.LFG(r.gz),s.LFG(i._W),s.LFG(t.J),s.LFG(v.p))},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);