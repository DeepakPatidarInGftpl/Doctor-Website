"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6916],{26916:(T,N,a)=>{a.r(N),a.d(N,{AddCreditNoteModule:()=>W});var d=a(36895),p=a(89299),r=a(24006),x=a(68675),Z=a(54004),t=a(94650),u=a(71071),F=a(72170),g=a(97185),f=a(47957),_=a(3238),c=a(59549),m=a(44144);function h(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",33),t.NdJ("onSelectionChange",function(){t.CHM(n);const l=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheck(l))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",null==n?null:n.account_id),t.xp6(1),t.Oqu(null==n?null:n.account_id)}}function v(o,i){if(1&o&&(t.ynx(0),t.YNc(1,h,2,2,"mat-option",32),t.BQk()),2&o){const n=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active)}}function A(o,i){1&o&&(t.TgZ(0,"mat-option",34)(1,"a",35),t._uU(2,"+ Add Account"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function O(o,i){1&o&&(t.TgZ(0,"mat-option",36),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function M(o,i){if(1&o&&(t.ynx(0),t.YNc(1,A,3,1,"mat-option",21),t.YNc(2,O,2,0,"mat-option",22),t.BQk()),2&o){const n=i.ngIf,e=t.oxw();t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",(null==e.fromAccountControl.value?null:e.fromAccountControl.value.length)<3)}}function P(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Account "),t.qZA())}function w(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Date "),t.qZA())}function I(o,i){if(1&o&&(t.TgZ(0,"option",34),t._uU(1),t.qZA()),2&o){const n=i.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.prefix)}}function S(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Credit Note Series"),t.qZA())}function U(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",33),t.NdJ("onSelectionChange",function(){t.CHM(n);const l=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheck2(l))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",null==n?null:n.customer_bill_no),t.xp6(1),t.hij(" ",null==n?null:n.customer_bill_no," ")}}function J(o,i){if(1&o&&(t.ynx(0),t.YNc(1,U,2,2,"mat-option",32),t.BQk()),2&o){const n=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==n?null:n.is_active))}}function y(o,i){1&o&&(t.TgZ(0,"mat-option",34)(1,"a",38),t._uU(2,"+ Add sale Bill"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function L(o,i){1&o&&(t.TgZ(0,"mat-option",36),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function q(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Sale Bill No. "),t.qZA())}function Q(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Reason"),t.qZA())}function E(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Round Off"),t.qZA())}function B(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function Y(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Total"),t.qZA())}function R(o,i){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Note"),t.qZA())}function D(o,i){1&o&&(t.TgZ(0,"button",39),t._uU(1,"Submit"),t.qZA())}function G(o,i){1&o&&(t.TgZ(0,"button",40),t._UZ(1,"span",41),t._uU(2,"\xa0 Submit"),t.qZA())}const C=function(o){return{"is-invalid":o}},V=[{path:"",component:(()=>{class o{constructor(n,e,l,s,b){this.fb=n,this.transactionService=e,this.saleService=l,this.toastr=s,this.router=b,this.fromAccountControl=new r.NI,this.billControl=new r.NI,this.accountList=[],this.saleBillList=[],this.FiltersaleBillList=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){const n=(new Date).toISOString().split("T")[0];this.debitNoteForm=this.fb.group({account:new r.NI("",[r.kI.required]),date:new r.NI(n,[r.kI.required]),credit_note_no:new r.NI(""),sale_bill_no:new r.NI("",[r.kI.required]),reason:new r.NI(""),roundoff:new r.NI(""),tax:new r.NI("",[r.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new r.NI(""),total:new r.NI(""),status:new r.NI("")}),this.getAccount(),this.getprefix(),this.getSaleBill(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,x.O)(""),(0,Z.U)(e=>this._filter(e,!0)))}getprefix(){this.transactionService.getCreditNotePrefix().subscribe(n=>{console.log(n),n.success?(this.prefixNo=n?.data,this.debitNoteForm.get("credit_note_no").patchValue(this.prefixNo[0]?.id)):this.toastr.error(n.msg)},n=>{this.toastr.error(n.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(n=>{this.accountList=n})}getSaleBill(){this.saleService.getSalesBill().subscribe(n=>{this.saleBillList=n})}getFilterBill(n){this.FiltersaleBillList=this.saleBillList.filter(e=>!(!e||!e?.customer_bill_no)&&e?.customer_bill_no.toLowerCase().includes(n)),console.log(this.FiltersaleBillList)}_filter(n,e){const l="string"==typeof n?n.toLowerCase():n.toString().toLowerCase(),s=this.accountList.filter(e?b=>b?.account_id?.toLowerCase().includes(l):b=>!b?.account_id?.toLowerCase().includes(l));return!e&&0===s.length&&s.push({account:"No data found"}),s}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}oncheck(n){this.debitNoteForm.patchValue({account:n.id})}oncheck2(n){console.log(n),this.debitNoteForm.patchValue({sale_bill_no:n.id})}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const n=new FormData;n.append("account",this.debitNoteForm.get("account")?.value),n.append("sale_bill_no",this.debitNoteForm.get("sale_bill_no")?.value),n.append("date",this.debitNoteForm.get("date")?.value),n.append("credit_note_no",this.debitNoteForm.get("credit_note_no")?.value),n.append("reason",this.debitNoteForm.get("reason")?.value),n.append("roundoff",this.debitNoteForm.get("roundoff")?.value),n.append("note",this.debitNoteForm.get("note")?.value),n.append("tax",this.debitNoteForm.get("tax")?.value),n.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.addCreditNote(n).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/creditnoteList"])):this.loaders=!1},e=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get account(){return this.debitNoteForm.get("account")}get date(){return this.debitNoteForm.get("date")}get credit_note_no(){return this.debitNoteForm.get("credit_note_no")}get reason(){return this.debitNoteForm.get("reason")}get sale_bill_no(){return this.debitNoteForm.get("sale_bill_no")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}get roundoff(){return this.debitNoteForm.get("roundoff")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(u.p),t.Y36(F.M),t.Y36(g._W),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-credit-note"]],decls:85,vars:44,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","date","formControlName","date","id","date",3,"ngClass"],["formControlName","credit_note_no"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Search Sale Bill","aria-label","Search sale Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","placeholder","Enter Reason",3,"ngClass"],["type","number","formControlName","roundoff","placeholder","Enter Round off",3,"ngClass"],["type","number","formControlName","tax","placeholder","Enter Tax",3,"ngClass"],["type","number","formControlName","total","placeholder","Enter Total","id","total",3,"ngClass"],["formControlName","note","placeholder","Enter Note",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/creditnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","///sales/addsalesbill",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Credit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Credit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Account Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,v,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,M,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,P,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Credit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,w,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Credit Note Series"),t.qZA(),t.TgZ(33,"select",16)(34,"option",17),t._uU(35,"Select Credit Note Series"),t.qZA(),t.YNc(36,I,2,2,"option",18),t.qZA(),t.YNc(37,S,2,0,"span",13),t.qZA()(),t.TgZ(38,"div",14)(39,"div",7)(40,"label"),t._uU(41,"Select Sale Bill*"),t.qZA(),t.TgZ(42,"mat-form-field",8)(43,"input",19),t.NdJ("input",function(s){return e.getFilterBill(s.target.value)}),t.qZA(),t.TgZ(44,"mat-autocomplete",null,20),t.YNc(46,J,2,1,"ng-container",11),t.YNc(47,y,3,1,"mat-option",21),t.YNc(48,L,2,0,"mat-option",22),t.qZA()(),t.YNc(49,q,2,0,"span",13),t.qZA()(),t.TgZ(50,"div",14)(51,"div",7)(52,"label"),t._uU(53,"Reason"),t.qZA(),t._UZ(54,"input",23),t.YNc(55,Q,2,0,"span",13),t.qZA()(),t.TgZ(56,"div",14)(57,"div",7)(58,"label"),t._uU(59,"Round Off"),t.qZA(),t._UZ(60,"input",24),t.YNc(61,E,2,0,"span",13),t.qZA()(),t.TgZ(62,"div",14)(63,"div",7)(64,"label"),t._uU(65,"Tax %"),t.qZA(),t._UZ(66,"input",25),t.YNc(67,B,2,0,"span",13),t.qZA()(),t.TgZ(68,"div",14)(69,"div",7)(70,"label"),t._uU(71,"Total"),t.qZA(),t._UZ(72,"input",26),t.YNc(73,Y,2,0,"span",13),t.qZA()(),t.TgZ(74,"div",14)(75,"div",7)(76,"label"),t._uU(77,"Note"),t.qZA(),t._UZ(78,"textarea",27),t.YNc(79,R,2,0,"span",13),t.qZA()(),t.TgZ(80,"div",28),t.YNc(81,D,2,0,"button",29),t.YNc(82,G,3,0,"button",30),t.TgZ(83,"a",31),t._uU(84,"Cancel"),t.qZA()()()()()()),2&n){const l=t.MAs(17),s=t.MAs(45);t.xp6(8),t.Q6J("formGroup",e.debitNoteForm),t.xp6(7),t.Q6J("formControl",e.fromAccountControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,28,e.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,30,e.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",e.account&&e.account.invalid&&e.account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(32,C,e.f.date.touched&&e.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",e.date&&e.date.invalid&&e.date.touched),t.xp6(8),t.Q6J("ngForOf",e.prefixNo),t.xp6(1),t.Q6J("ngIf",e.credit_note_no&&e.credit_note_no.invalid&&e.credit_note_no.touched),t.xp6(6),t.Q6J("formControl",e.billControl)("matAutocomplete",s),t.xp6(3),t.Q6J("ngForOf",e.FiltersaleBillList),t.xp6(1),t.Q6J("ngIf",0===(null==e.FiltersaleBillList?null:e.FiltersaleBillList.length)),t.xp6(1),t.Q6J("ngIf",(null==e.billControl||null==e.billControl.value?null:e.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",e.sale_bill_no&&e.sale_bill_no.invalid&&e.sale_bill_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(34,C,e.f.reason.touched&&e.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",e.reason&&e.reason.invalid&&e.reason.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(36,C,e.f.roundoff.touched&&e.f.roundoff.invalid)),t.xp6(1),t.Q6J("ngIf",e.roundoff&&e.roundoff.invalid&&e.roundoff.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(38,C,e.f.tax.touched&&e.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax&&e.tax.invalid&&e.tax.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,C,e.f.total.touched&&e.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",e.total&&e.total.invalid&&e.total.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(42,C,e.f.note.touched&&e.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax&&e.tax.invalid&&e.tax.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}},dependencies:[d.mk,d.sg,d.O5,p.yS,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.oH,r.sg,r.u,f.XC,f.ZL,_.ey,c.KE,m.Nt,d.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["add_creditnote"]}}];let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(V),p.Bz]}),o})();var $=a(8468);let W=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,k,$.I,f.Bb,c.lN,m.c]}),o})()},30597:(T,N,a)=>{a.d(N,{l:()=>t});var d=a(94650),p=a(89299),r=a(97185),x=a(42917),Z=a(80927);let t=(()=>{class u{constructor(g,f,_,c,m){this.router=g,this.Arout=f,this.toastr=_,this.profileService=c,this.coreService=m}canActivate(g,f){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),_){const c=g.data.allowedRoles;console.log(c,"allowedRoles");const m=_.some(h=>c.includes(h.codename));if(console.log(m),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const v=h?.permission,A=this.profileService.getUserDetails();(!A||A.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(g){return new(g||u)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(r._W),d.LFG(x.J),d.LFG(Z.p))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);