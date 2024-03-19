"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9938],{49938:(F,v,c)=>{c.r(v),c.d(v,{AddCountraVoucherModule:()=>z});var s=c(36895),m=c(89299),a=c(24006),x=c(68675),Z=c(54004),t=c(94650),p=c(71071),V=c(80927),h=c(97185),f=c(47957),_=c(3238),l=c(59549),g=c(44144);function C(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select Date "),t.qZA())}function b(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter Contra Voucher No."),t.qZA())}function T(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",29),t.NdJ("onSelectionChange",function(){t.CHM(e);const u=t.oxw().$implicit,i=t.oxw();return t.KtG(i.oncheck(u))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function I(o,r){if(1&o&&(t.ynx(0),t.YNc(1,T,2,2,"mat-option",28),t.BQk()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function N(o,r){1&o&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Account"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function U(o,r){1&o&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function w(o,r){if(1&o&&(t.ynx(0),t.YNc(1,N,3,1,"mat-option",30),t.YNc(2,U,2,0,"mat-option",31),t.BQk()),2&o){const e=r.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.fromAccountControl.value?null:n.fromAccountControl.value.length)<3)}}function M(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select From Account "),t.qZA())}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",29),t.NdJ("onSelectionChange",function(){t.CHM(e);const u=t.oxw().$implicit,i=t.oxw();return t.KtG(i.oncheck1(u))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function y(o,r){if(1&o&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",28),t.BQk()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function S(o,r){1&o&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Account"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function J(o,r){1&o&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function P(o,r){if(1&o&&(t.ynx(0),t.YNc(1,S,3,1,"mat-option",30),t.YNc(2,J,2,0,"mat-option",31),t.BQk()),2&o){const e=r.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.toAccountControl.value?null:n.toAccountControl.value.length)<3)}}function L(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select To Account "),t.qZA())}function Q(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter Amount"),t.qZA())}function E(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter Note"),t.qZA())}function Y(o,r){1&o&&(t.TgZ(0,"button",35),t._uU(1,"Submit"),t.qZA())}function q(o,r){1&o&&(t.TgZ(0,"button",36),t._UZ(1,"span",37),t._uU(2,"\xa0 Submit"),t.qZA())}const A=function(o){return{"is-invalid":o}},G=[{path:"",component:(()=>{class o{constructor(e,n,u,i,d,W){this.fb=e,this.renderer=n,this.transactionService=u,this.coreService=i,this.toastr=d,this.router=W,this.fromAccountControl=new a.NI,this.toAccountControl=new a.NI,this.accountList=[],this.toAccountList=[],this.dateError=null,this.loaders=!1}get f(){return this.countraVoucherForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.countraVoucherForm=this.fb.group({date:new a.NI(e),countra_voucher_no:new a.NI(""),from_account:new a.NI("",[a.kI.required]),to_account:new a.NI("",[a.kI.required]),amount:new a.NI(0),note:new a.NI("",[a.kI.required])}),this.getAccount(),this.getprefix(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,x.O)(""),(0,Z.U)(n=>this._filter(n,!0))),this.filteredToAccount=this.toAccountControl.valueChanges.pipe((0,x.O)(""),(0,Z.U)(n=>this._filterr(n,!0)))}getprefix(){this.transactionService.getCountraVoucherPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.prefix:this.toastr.error(e.msg)},e=>{this.toastr.error(e.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e,this.toAccountList=e})}_filter(e,n){const u="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),i=this.accountList.filter(n?d=>d?.account_id?.toLowerCase().includes(u):d=>!d?.account_id?.toLowerCase().includes(u));return!n&&0===i.length&&i.push({account:"No data found"}),i}_filterr(e,n){const u="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),i=this.toAccountList.filter(n?d=>d?.account_id?.toLowerCase().includes(u):d=>!d?.account_id?.toLowerCase().includes(u));return!n&&0===i.length&&i.push({account:"No data found"}),i}oncheck(e){console.log(e),this.countraVoucherForm.patchValue({from_account:e.id})}oncheck1(e){console.log(e),this.countraVoucherForm.patchValue({to_account:e.id})}submit(){this.countraVoucherForm.valid?(this.loaders=!0,this.transactionService.addCountraVoucher(this.countraVoucherForm.value).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.countraVoucherForm.reset(),this.router.navigate(["//transaction/countravoucherList"])):this.loaders=!1},e=>{this.loaders=!1})):(this.countraVoucherForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get from_account(){return this.countraVoucherForm.get("from_account")}get date(){return this.countraVoucherForm.get("date")}get countra_voucher_no(){return this.countraVoucherForm.get("countra_voucher_no")}get to_account(){return this.countraVoucherForm.get("to_account")}get note(){return this.countraVoucherForm.get("note")}get amount(){return this.countraVoucherForm.get("amount")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(t.Qsj),t.Y36(p.p),t.Y36(V.p),t.Y36(h._W),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-countra-voucher"]],decls:71,vars:44,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","date","id","date",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","countra_voucher_no","readonly","",3,"ngModel","ngClass"],[2,"color","red"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","Select To Account","aria-label","to_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autoActiveFirstOption",""],["toAccountAuto","matAutocomplete"],["type","number","formControlName","amount","placeholder","Enter Amount",3,"ngClass"],[1,"col-lg-6","col-sm-8","col-12"],["formControlName","note","placeholder","Enter Note",2,"height","45px",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/countravoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Countra Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Countra Voucher "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,C,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Contra Voucher No."),t.qZA(),t._UZ(20,"input",10),t.YNc(21,b,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"From Account"),t.TgZ(26,"span",11),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"mat-form-field",12),t._UZ(29,"input",13),t.TgZ(30,"mat-autocomplete",null,14),t.YNc(32,I,2,1,"ng-container",15),t.ALo(33,"async"),t.YNc(34,w,3,2,"ng-container",16),t.ALo(35,"async"),t.qZA()(),t.YNc(36,M,2,0,"span",9),t.qZA()(),t.TgZ(37,"div",6)(38,"div",7)(39,"label"),t._uU(40,"To Account"),t.TgZ(41,"span",11),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"mat-form-field",12),t._UZ(44,"input",17),t.TgZ(45,"mat-autocomplete",18,19),t.YNc(47,y,2,1,"ng-container",15),t.ALo(48,"async"),t.YNc(49,P,3,2,"ng-container",16),t.ALo(50,"async"),t.qZA()(),t.YNc(51,L,2,0,"span",9),t.qZA()(),t.TgZ(52,"div",6)(53,"div",7)(54,"label"),t._uU(55,"Amount"),t.qZA(),t._UZ(56,"input",20),t.YNc(57,Q,2,0,"span",9),t.qZA()(),t.TgZ(58,"div",21)(59,"div",7)(60,"label"),t._uU(61,"Note"),t.TgZ(62,"span",11),t._uU(63,"*"),t.qZA()(),t._UZ(64,"textarea",22),t.YNc(65,E,2,0,"span",9),t.qZA()(),t.TgZ(66,"div",23),t.YNc(67,Y,2,0,"button",24),t.YNc(68,q,3,0,"button",25),t.TgZ(69,"a",26),t._uU(70,"Cancel"),t.qZA()()()()()()),2&e){const u=t.MAs(31),i=t.MAs(46);t.xp6(8),t.Q6J("formGroup",n.countraVoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(32,A,n.f.date.touched&&n.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",n.date&&n.date.invalid&&n.date.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(34,A,n.f.countra_voucher_no.touched&&n.f.countra_voucher_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.countra_voucher_no&&n.countra_voucher_no.invalid&&n.countra_voucher_no.touched),t.xp6(8),t.Q6J("formControl",n.fromAccountControl)("matAutocomplete",u)("ngClass",t.VKq(36,A,n.f.from_account.touched&&n.f.from_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(33,24,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(35,26,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",n.from_account&&n.from_account.invalid&&n.from_account.touched),t.xp6(8),t.Q6J("formControl",n.toAccountControl)("matAutocomplete",i)("ngClass",t.VKq(38,A,n.f.to_account.touched&&n.f.to_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(48,28,n.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(50,30,n.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",n.to_account&&n.to_account.invalid&&n.to_account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,A,n.f.amount.touched&&n.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",n.amount&&n.amount.invalid&&n.amount.touched),t.xp6(7),t.Q6J("ngClass",t.VKq(42,A,n.f.note.touched&&n.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",n.note&&n.note.invalid&&n.note.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[s.mk,s.sg,s.O5,m.yS,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.oH,a.sg,a.u,f.XC,f.ZL,_.ey,l.KE,g.Nt,s.Ov],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[c(30597).l],data:{allowedRoles:["add_countravoucher"]}}];let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(G),m.Bz]}),o})();var K=c(8468);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,B,K.I,f.Bb,l.lN,g.c]}),o})()},30597:(F,v,c)=>{c.d(v,{l:()=>t});var s=c(94650),m=c(89299),a=c(97185),x=c(42917),Z=c(80927);let t=(()=>{class p{constructor(h,f,_,l,g){this.router=h,this.Arout=f,this.toastr=_,this.profileService=l,this.coreService=g}canActivate(h,f){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),_){const l=h.data.allowedRoles;console.log(l,"allowedRoles");const g=_.some(C=>l.includes(C.codename));if(console.log(g),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const b=C?.permission,T=this.profileService.getUserDetails();(!T||T.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(s.LFG(m.F0),s.LFG(m.gz),s.LFG(a._W),s.LFG(x.J),s.LFG(Z.p))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);