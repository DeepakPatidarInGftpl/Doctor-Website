"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7174],{57174:(T,v,a)=>{a.r(v),a.d(v,{UpdateCountraVoucherModule:()=>K});var s=a(36895),h=a(89299),c=a(24006),A=a(68675),b=a(54004),t=a(94650),m=a(71071),V=a(97185),l=a(47957),U=a(3238),g=a(59549),d=a(44144);function _(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Select Date "),t.qZA())}function f(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Enter Contra Voucher Series"),t.qZA())}function x(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",28),t.NdJ("onSelectionChange",function(){t.CHM(e);const u=t.oxw().$implicit,i=t.oxw();return t.KtG(i.oncheck(u))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function Z(n,r){if(1&n&&(t.ynx(0),t.YNc(1,x,2,2,"mat-option",27),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function F(n,r){1&n&&(t.TgZ(0,"mat-option",31)(1,"a",32),t._uU(2,"+ Add Account"),t.qZA()()),2&n&&t.Q6J("value","No data found")}function I(n,r){1&n&&(t.TgZ(0,"mat-option",33),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function N(n,r){if(1&n&&(t.ynx(0),t.YNc(1,F,3,1,"mat-option",29),t.YNc(2,I,2,0,"mat-option",30),t.BQk()),2&n){const e=r.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==o.fromAccountControl.value?null:o.fromAccountControl.value.length)<3)}}function w(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Select From Account "),t.qZA())}function O(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",28),t.NdJ("onSelectionChange",function(){t.CHM(e);const u=t.oxw().$implicit,i=t.oxw();return t.KtG(i.oncheck1(u))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function M(n,r){if(1&n&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",27),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function S(n,r){1&n&&(t.TgZ(0,"mat-option",31)(1,"a",32),t._uU(2,"+ Add Account"),t.qZA()()),2&n&&t.Q6J("value","No data found")}function y(n,r){1&n&&(t.TgZ(0,"mat-option",33),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function J(n,r){if(1&n&&(t.ynx(0),t.YNc(1,S,3,1,"mat-option",29),t.YNc(2,y,2,0,"mat-option",30),t.BQk()),2&n){const e=r.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==o.toAccountControl.value?null:o.toAccountControl.value.length)<3)}}function P(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Select To Account "),t.qZA())}function L(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Enter Amount"),t.qZA())}function Q(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Enter Note"),t.qZA())}function E(n,r){1&n&&(t.TgZ(0,"button",34),t._uU(1,"Submit"),t.qZA())}function Y(n,r){1&n&&(t.TgZ(0,"button",35),t._UZ(1,"span",36),t._uU(2,"\xa0 Submit"),t.qZA())}const C=function(n){return{"is-invalid":n}},R=[{path:"",component:(()=>{class n{constructor(e,o,u,i,p){this.fb=e,this.transactionService=o,this.Arout=u,this.toastr=i,this.router=p,this.fromAccountControl=new c.NI,this.toAccountControl=new c.NI,this.accountList=[],this.toAccountList=[],this.dateError=null,this.loaders=!1}get f(){return this.countraVoucherForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.fromAccountControl.setValue("Loading..."),this.toAccountControl.setValue("Loading...");const e=(new Date).toISOString().split("T")[0];this.countraVoucherForm=this.fb.group({date:new c.NI(e),countra_voucher_no:new c.NI(""),from_account:new c.NI("",[c.kI.required]),to_account:new c.NI("",[c.kI.required]),amount:new c.NI(0),note:new c.NI("")}),this.getAccount(),this.getprefix(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,A.O)(""),(0,b.U)(o=>this._filter(o,!0))),this.filteredToAccount=this.toAccountControl.valueChanges.pipe((0,A.O)(""),(0,b.U)(o=>this._filterr(o,!0))),this.transactionService.getCountraVoucherById(this.id).subscribe(o=>{console.log(o),this.countraVoucherForm.patchValue({date:o?.date,countra_voucher_no:o?.countra_voucher_no,from_account:o?.from_account?.id,to_account:o?.to_account?.id,amount:o?.amount,note:o?.note}),this.fromAccountControl.setValue(o?.from_account?.account_id),this.toAccountControl.setValue(o?.to_account?.account_id)})}getprefix(){this.transactionService.getCountraVoucherPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.data:this.toastr.error(e.msg)},e=>{this.toastr.error(e.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e,this.toAccountList=e})}_filter(e,o){const u="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),i=this.accountList.filter(o?p=>p?.account_id?.toLowerCase().includes(u):p=>!p?.account_id?.toLowerCase().includes(u));return!o&&0===i.length&&i.push({account:"No data found"}),i}_filterr(e,o){const u="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),i=this.toAccountList.filter(o?p=>p?.account_id?.toLowerCase().includes(u):p=>!p?.account_id?.toLowerCase().includes(u));return!o&&0===i.length&&i.push({account:"No data found"}),i}oncheck(e){console.log(e),this.countraVoucherForm.patchValue({from_account:e.id})}oncheck1(e){console.log(e),this.countraVoucherForm.patchValue({to_account:e.id})}submit(){this.countraVoucherForm.valid?(this.loaders=!0,this.transactionService.updateCountraVoucher(this.countraVoucherForm.value,this.id).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.countraVoucherForm.reset(),this.router.navigate(["//transaction/countravoucherList"])):this.loaders=!1},e=>{this.loaders=!1})):(this.countraVoucherForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get from_account(){return this.countraVoucherForm.get("from_account")}get date(){return this.countraVoucherForm.get("date")}get countra_voucher_no(){return this.countraVoucherForm.get("countra_voucher_no")}get to_account(){return this.countraVoucherForm.get("to_account")}get note(){return this.countraVoucherForm.get("note")}get amount(){return this.countraVoucherForm.get("amount")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(m.p),t.Y36(h.gz),t.Y36(V._W),t.Y36(h.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-countra-voucher"]],decls:65,vars:43,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","date","id","date",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-3","col-sm-6","col-12"],["type","text","formControlName","countra_voucher_no","readonly","",3,"ngClass"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","Select To Account","aria-label","to_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autoActiveFirstOption",""],["toAccountAuto","matAutocomplete"],["type","number","formControlName","amount","placeholder","Enter Amount",3,"ngClass"],["formControlName","note","placeholder","Enter Note",2,"height","45px",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/countravoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Countra Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Countra Voucher "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,_,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",10)(17,"div",7)(18,"label"),t._uU(19,"Contra Voucher Series"),t.qZA(),t._UZ(20,"input",11),t.YNc(21,f,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"From Account*"),t.qZA(),t.TgZ(26,"mat-form-field",12),t._UZ(27,"input",13),t.TgZ(28,"mat-autocomplete",null,14),t.YNc(30,Z,2,1,"ng-container",15),t.ALo(31,"async"),t.YNc(32,N,3,2,"ng-container",16),t.ALo(33,"async"),t.qZA()(),t.YNc(34,w,2,0,"span",9),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38,"To Account*"),t.qZA(),t.TgZ(39,"mat-form-field",12),t._UZ(40,"input",17),t.TgZ(41,"mat-autocomplete",18,19),t.YNc(43,M,2,1,"ng-container",15),t.ALo(44,"async"),t.YNc(45,J,3,2,"ng-container",16),t.ALo(46,"async"),t.qZA()(),t.YNc(47,P,2,0,"span",9),t.qZA()(),t.TgZ(48,"div",6)(49,"div",7)(50,"label"),t._uU(51,"Amount"),t.qZA(),t._UZ(52,"input",20),t.YNc(53,L,2,0,"span",9),t.qZA()(),t.TgZ(54,"div",6)(55,"div",7)(56,"label"),t._uU(57,"Note"),t.qZA(),t._UZ(58,"textarea",21),t.YNc(59,Q,2,0,"span",9),t.qZA()(),t.TgZ(60,"div",22),t.YNc(61,E,2,0,"button",23),t.YNc(62,Y,3,0,"button",24),t.TgZ(63,"a",25),t._uU(64,"Cancel"),t.qZA()()()()()()),2&e){const u=t.MAs(29),i=t.MAs(42);t.xp6(8),t.Q6J("formGroup",o.countraVoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(31,C,o.f.date.touched&&o.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",o.date&&o.date.invalid&&o.date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(33,C,o.f.countra_voucher_no.touched&&o.f.countra_voucher_no.invalid)),t.xp6(1),t.Q6J("ngIf",o.countra_voucher_no&&o.countra_voucher_no.invalid&&o.countra_voucher_no.touched),t.xp6(6),t.Q6J("formControl",o.fromAccountControl)("matAutocomplete",u)("ngClass",t.VKq(35,C,o.f.from_account.touched&&o.f.from_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(31,23,o.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(33,25,o.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",o.from_account&&o.from_account.invalid&&o.from_account.touched),t.xp6(6),t.Q6J("formControl",o.toAccountControl)("matAutocomplete",i)("ngClass",t.VKq(37,C,o.f.to_account.touched&&o.f.to_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(44,27,o.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(46,29,o.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",o.to_account&&o.to_account.invalid&&o.to_account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,C,o.f.amount.touched&&o.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",o.amount&&o.amount.invalid&&o.amount.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(41,C,o.f.note.touched&&o.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",o.note&&o.note.invalid&&o.note.touched),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders)}},dependencies:[s.mk,s.sg,s.O5,h.yS,l.XC,l.ZL,U.ey,g.KE,d.Nt,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.oH,c.sg,c.u,s.Ov],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),n})(),canActivate:[a(30597).l],data:{allowedRoles:["change_countravoucher"]}}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(R),h.Bz]}),n})();var G=a(8468);let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,B,l.Bb,g.lN,d.c,G.I]}),n})()},30597:(T,v,a)=>{a.d(v,{l:()=>t});var s=a(94650),h=a(89299),c=a(97185),A=a(42917),b=a(80927);let t=(()=>{class m{constructor(l,U,g,d,_){this.router=l,this.Arout=U,this.toastr=g,this.profileService=d,this.coreService=_}canActivate(l,U){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),g){const d=l.data.allowedRoles;console.log(d,"allowedRoles");const _=g.some(f=>d.includes(f.codename));if(console.log(_),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const x=f?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(l){return new(l||m)(s.LFG(h.F0),s.LFG(h.gz),s.LFG(c._W),s.LFG(A.J),s.LFG(b.p))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);