"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9938],{49938:(M,Z,r)=>{r.r(Z),r.d(Z,{AddCountraVoucherModule:()=>Q});var s=r(36895),m=r(4392),a=r(24006),V=r(68675),T=r(54004),t=r(94650),d=r(71071),N=r(80927),p=r(97185),x=r(43443);function C(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Select Date "),t.qZA())}function h(n,i){if(1&n&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.s9C("value",o.id),t.xp6(1),t.Oqu(o.prefix)}}function v(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Select Contra Voucher No"),t.qZA())}function _(n,i){if(1&n&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.s9C("value",null==o?null:o.id),t.xp6(1),t.hij(" ",null!=o&&o.company_name?null==o?null:o.company_name:null==o?null:o.title,"")}}function F(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Select From Account "),t.qZA())}function I(n,i){if(1&n&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&n){const o=i.$implicit;t.s9C("value",null==o?null:o.id),t.xp6(1),t.hij(" ",null!=o&&o.company_name?null==o?null:o.company_name:null==o?null:o.title,"")}}function O(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Select To Account "),t.qZA())}function U(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Enter Amount"),t.qZA())}function S(n,i){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Enter Note"),t.qZA())}function P(n,i){1&n&&(t.TgZ(0,"button",25),t._uU(1,"Submit"),t.qZA())}function w(n,i){1&n&&(t.TgZ(0,"button",26),t._UZ(1,"span",27),t._uU(2,"\xa0 Submit"),t.qZA())}const A=function(n){return{"is-invalid":n}},L=[{path:"",component:(()=>{class n{constructor(o,e,c,u,l,g,f){this.fb=o,this.renderer=e,this.transactionService=c,this.coreService=u,this.toastr=l,this.router=g,this.commonService=f,this.minDate="",this.maxDate="",this.fromAccountControl=new a.NI,this.toAccountControl=new a.NI,this.accountList=[],this.toAccountList=[],this.dateError=null,this.loaders=!1}get f(){return this.countraVoucherForm.controls}ngOnInit(){const o=(new Date).toISOString().split("T")[0];this.countraVoucherForm=this.fb.group({date:new a.NI(o),countra_voucher_no:new a.NI(""),from_account:new a.NI("",[a.kI.required]),to_account:new a.NI("",[a.kI.required]),amount:new a.NI(0),note:new a.NI("")}),this.getAccount(),this.getprefix(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,V.O)(""),(0,T.U)(c=>this._filter(this.fromAccountControl.value,!0))),this.filteredToAccount=this.toAccountControl.valueChanges.pipe((0,V.O)(""),(0,T.U)(c=>this._filterr(this.toAccountControl.value,!0)));const e=localStorage.getItem("financialYear");this.dateValidation(e)}dateValidation(o){const e=this.countraVoucherForm.get("date"),{formattedMinDate:c,formattedMaxDate:u}=this.commonService.setMinMaxDates(e,o);this.minDate=c,this.maxDate=u}getprefix(){this.transactionService.getCountraVoucherPrefix().subscribe(o=>{console.log(o),o.success?(this.prefixNo=o?.data,this.countraVoucherForm.get("countra_voucher_no").patchValue(this.prefixNo[0]?.id)):this.toastr.error(o.msg)},o=>{this.toastr.error(o.error.msg)})}getAccount(){this.transactionService.getAccountByAlies().subscribe(o=>{console.log(o),this.accountList=o,this.toAccountList=o})}_filter(o,e){const c="string"==typeof o?o.toLowerCase():o?.toString()?.toLowerCase(),u=this.accountList.filter(l=>{const g=l?.account_id?.toLowerCase().includes(c),f=l?.title?.toLowerCase().includes(c),b=l?.company_name?.toLowerCase().includes(c);return e?g||f||b:!g&&!f&&!b});return!e&&0===u.length&&u.push({account:"No data found"}),u}_filterr(o,e){const c="string"==typeof o?o.toLowerCase():o?.toString()?.toLowerCase(),u=this.toAccountList.filter(l=>{const g=l?.account_id?.toLowerCase().includes(c),f=l?.title?.toLowerCase().includes(c),b=l?.company_name?.toLowerCase().includes(c);return e?g||f||b:!g&&!f&&!b});return!e&&0===u.length&&u.push({account:"No data found"}),u}oncheck(o){console.log(o),this.countraVoucherForm.patchValue({from_account:o.id})}oncheck1(o){console.log(o),this.countraVoucherForm.patchValue({to_account:o.id})}submit(){const o=this.countraVoucherForm.get("amount").value;!o||o<1?this.toastr.error("Countra voucher amount must be greater than 0."):this.countraVoucherForm.valid?(this.loaders=!0,this.transactionService.addCountraVoucher(this.countraVoucherForm.value).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.countraVoucherForm.reset(),this.router.navigate(["//transaction/countravoucherList"])):this.loaders=!1},e=>{this.loaders=!1})):(this.countraVoucherForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get from_account(){return this.countraVoucherForm.get("from_account")}get date(){return this.countraVoucherForm.get("date")}get countra_voucher_no(){return this.countraVoucherForm.get("countra_voucher_no")}get to_account(){return this.countraVoucherForm.get("to_account")}get note(){return this.countraVoucherForm.get("note")}get amount(){return this.countraVoucherForm.get("amount")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(a.qu),t.Y36(t.Qsj),t.Y36(d.p),t.Y36(N.p),t.Y36(p._W),t.Y36(m.F0),t.Y36(x.R))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-countra-voucher"]],decls:64,vars:29,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","date","id","date",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","countra_voucher_no"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[2,"color","red"],["formControlName","from_account","id","from_account",3,"ngClass"],["formControlName","to_account","id","to_account",3,"ngClass"],["type","number","formControlName","amount","placeholder","Enter Amount",3,"ngClass"],[1,"col-lg-6","col-sm-8","col-12"],["formControlName","note","placeholder","Enter Note",2,"height","45px",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/countravoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Countra Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Countra Voucher "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,C,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Contra Voucher No"),t.qZA(),t.TgZ(20,"select",10)(21,"option",11),t._uU(22,"Select Journal Voucher No"),t.qZA(),t.YNc(23,h,2,2,"option",12),t.qZA(),t.YNc(24,v,2,0,"span",9),t.qZA()(),t.TgZ(25,"div",6)(26,"div",7)(27,"label"),t._uU(28,"From Account"),t.TgZ(29,"span",13),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"select",14)(32,"option",11),t._uU(33,"Select From Account"),t.qZA(),t.YNc(34,_,2,2,"option",12),t.qZA(),t.YNc(35,F,2,0,"span",9),t.qZA()(),t.TgZ(36,"div",6)(37,"div",7)(38,"label"),t._uU(39,"To Account"),t.TgZ(40,"span",13),t._uU(41,"*"),t.qZA()(),t.TgZ(42,"select",15)(43,"option",11),t._uU(44,"Select From Account"),t.qZA(),t.YNc(45,I,2,2,"option",12),t.qZA(),t.YNc(46,O,2,0,"span",9),t.qZA()(),t.TgZ(47,"div",6)(48,"div",7)(49,"label"),t._uU(50,"Amount"),t.qZA(),t._UZ(51,"input",16),t.YNc(52,U,2,0,"span",9),t.qZA()(),t.TgZ(53,"div",17)(54,"div",7)(55,"label"),t._uU(56,"Note"),t.qZA(),t._UZ(57,"textarea",18),t.YNc(58,S,2,0,"span",9),t.qZA()(),t.TgZ(59,"div",19),t.YNc(60,P,2,0,"button",20),t.YNc(61,w,3,0,"button",21),t.TgZ(62,"a",22),t._uU(63,"Cancel"),t.qZA()()()()()()),2&o&&(t.xp6(8),t.Q6J("formGroup",e.countraVoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(19,A,e.f.date.touched&&e.f.date.invalid)),t.uIk("min",e.minDate)("max",e.maxDate),t.xp6(1),t.Q6J("ngIf",e.date&&e.date.invalid&&e.date.touched),t.xp6(8),t.Q6J("ngForOf",e.prefixNo),t.xp6(1),t.Q6J("ngIf",e.countra_voucher_no&&e.countra_voucher_no.invalid&&e.countra_voucher_no.touched),t.xp6(7),t.Q6J("ngClass",t.VKq(21,A,e.f.from_account.touched&&e.f.from_account.invalid)),t.xp6(3),t.Q6J("ngForOf",e.accountList),t.xp6(1),t.Q6J("ngIf",e.from_account&&e.from_account.invalid&&e.from_account.touched),t.xp6(7),t.Q6J("ngClass",t.VKq(23,A,e.f.to_account.touched&&e.f.to_account.invalid)),t.xp6(3),t.Q6J("ngForOf",e.accountList),t.xp6(1),t.Q6J("ngIf",e.to_account&&e.to_account.invalid&&e.to_account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(25,A,e.f.amount.touched&&e.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",e.amount&&e.amount.invalid&&e.amount.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(27,A,e.f.note.touched&&e.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",e.note&&e.note.invalid&&e.note.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders))},dependencies:[s.mk,s.sg,s.O5,m.yS,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.sg,a.u],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),n})(),canActivate:[r(30597).l],data:{allowedRoles:["add_countravoucher"]}}];let J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(L),m.Bz]}),n})();var Y=r(8468),q=r(47957),E=r(59549),R=r(44144);let Q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,J,Y.I,q.Bb,E.lN,R.c]}),n})()},30597:(M,Z,r)=>{r.d(Z,{l:()=>t});var s=r(94650),m=r(4392),a=r(97185),V=r(42917),T=r(80927);let t=(()=>{class d{constructor(p,x,C,h,v){this.router=p,this.Arout=x,this.toastr=C,this.profileService=h,this.coreService=v}canActivate(p,x){const C=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),C){const h=p.data.allowedRoles;console.log(h,"allowedRoles");const v=C.some(_=>h.includes(_.codename));if(console.log(v),this.coreService.getProfile().subscribe(_=>{this.userDetails=_,this.profileService.setUserDetails(this.userDetails);const F=_?.permission,I=this.profileService.getUserDetails();(!I||I.length!==F.length)&&(this.profileService.setUserPermission(F),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(p){return new(p||d)(s.LFG(m.F0),s.LFG(m.gz),s.LFG(a._W),s.LFG(V.J),s.LFG(T.p))},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);