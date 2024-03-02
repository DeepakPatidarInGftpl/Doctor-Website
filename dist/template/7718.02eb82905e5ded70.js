"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7718],{71071:(Z,_,n)=>{n.d(_,{p:()=>U});var c=n(92340),h=n(94650),t=n(80529);let U=(()=>{class p{constructor(e){this.http=e,this.apiUrl=`${c.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNoteIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}addDebitNote(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}updateDebitNote(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}CreditNoteIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`,r)}addCreditNote(e){return this.http.post(this.apiUrl+"/pv-api/credit_note/",e)}updateCreditNote(e,r){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${r}`,e)}deleteCreditNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}getJournalVoucher(){return this.http.get(this.apiUrl+"/pv-api/jounal_voucher/")}getJournalVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}JournalVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`,r)}addJournalVoucher(e){return this.http.post(this.apiUrl+"/pv-api/jounal_voucher/",e)}updateJournalVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${r}`,e)}deleteJournalVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}getCountraVoucher(){return this.http.get(this.apiUrl+"/pv-api/countra_voucher/")}getCountraVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}CountraVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`,r)}addCountraVoucher(e){return this.http.post(this.apiUrl+"/pv-api/countra_voucher/",e)}updateCountraVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${r}`,e)}deleteCountraVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}getRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/receipt_voucher/")}getRecieptVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}RecieptVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`,r)}addRecieptVoucher(e){return this.http.post(this.apiUrl+"/pv-api/receipt_voucher/",e)}updateRecieptVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${r}`,e)}deleteRecieptVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/payment_voucher/")}getPaymentVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}PaymentVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`,r)}addPaymentVoucher(e){return this.http.post(this.apiUrl+"/pv-api/payment_voucher/",e)}updatePaymentVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${r}`,e)}deletePaymentVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}getJournalVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=JournalVoucher")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getCreditNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CreditNote")}getCountraVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CountraVoucher")}getReceiptVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ReceiptVoucher")}getPaymentVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PaymentVoucher")}getExpenceVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ExpensesVoucher")}getMaterialConsuptionPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialConsuption")}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getExpensVoucher(){return this.http.get(this.apiUrl+"/pv-api/expense_voucher/")}getExpensVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}ExpensVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`,r)}addExpensVoucher(e){return this.http.post(this.apiUrl+"/pv-api/expense_voucher/",e)}updateExpensVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${r}`,e)}deleteExpensVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}getMaterialConsuption(){return this.http.get(this.apiUrl+"/pv-api/new_material_consuption/")}getMaterialConsuptionById(e){return this.http.get(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`)}MaterialConsuptionIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`,r)}addMaterialConsuption(e){return this.http.post(this.apiUrl+"/pv-api/new_material_consuption/",e)}updateMaterialConsuption(e,r){return this.http.put(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${r}`,e)}deleteMaterialConsuption(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/contact-user/")}}return p.\u0275fac=function(e){return new(e||p)(h.LFG(t.eN))},p.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},37718:(Z,_,n)=>{n.r(_),n.d(_,{DetailsCountraVoucherModule:()=>E});var c=n(36895),h=n(89299),t=n(94650),U=n(71071),p=n(24006),f=n(73162),e=n(54333),r=n(3848),o=n(97392),C=n(54040);function g(a,s){if(1&a){const i=t.EpF();t.ynx(0),t.TgZ(1,"tr")(2,"td",46),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(3);return t.KtG(l.sort("id"))}),t._uU(3),t.qZA(),t.TgZ(4,"td",46),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(3);return t.KtG(l.sort("id"))}),t._uU(5),t.qZA(),t.TgZ(6,"td",46),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(3);return t.KtG(l.sort("id"))}),t._uU(7),t.qZA(),t.TgZ(8,"td",46),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(3);return t.KtG(l.sort("id"))}),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()}if(2&a){const i=s.$implicit,u=s.index;t.xp6(3),t.Oqu(u+1),t.xp6(2),t.Oqu(null==i?null:i.userid),t.xp6(2),t.Oqu(null==i?null:i.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==i?null:i.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function d(a,s){1&a&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",47)(3,"p",48),t._uU(4,"Data not available"),t.qZA()()()())}function v(a,s){1&a&&t._UZ(0,"mat-progress-bar",49)}const m=function(a,s){return{itemsPerPage:a,currentPage:s}};function D(a,s){if(1&a){const i=t.EpF();t.TgZ(0,"mat-tab",24)(1,"div",1)(2,"div",2)(3,"div",16)(4,"table",25)(5,"thead")(6,"tr")(7,"th",26),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.sort("id"))}),t._uU(8,"# "),t._UZ(9,"i",27),t.qZA(),t.TgZ(10,"th",26),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.sort("id"))}),t._uU(11,"User "),t._UZ(12,"i",27),t.qZA(),t.TgZ(13,"th",26),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.sort("id"))}),t._uU(14,"Operation Type "),t._UZ(15,"i",27),t.qZA(),t.TgZ(16,"th",26),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.sort("id"))}),t._uU(17,"Date Time "),t._UZ(18,"i",27),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,g,11,7,"ng-container",28),t.ALo(21,"paginate"),t.ALo(22,"orderBy"),t.qZA(),t.YNc(23,d,5,0,"tbody",29),t.qZA(),t.TgZ(24,"div",30),t.YNc(25,v,1,0,"mat-progress-bar",31),t.qZA(),t.TgZ(26,"div",32)(27,"div",33)(28,"div",34),t._uU(29," Show per page "),t.TgZ(30,"select",35),t.NdJ("ngModelChange",function(l){t.CHM(i);const x=t.oxw(2);return t.KtG(x.itemsPerPage=l)}),t.TgZ(31,"option",36),t._uU(32,"10"),t.qZA(),t.TgZ(33,"option",37),t._uU(34,"20"),t.qZA(),t.TgZ(35,"option",38),t._uU(36,"30"),t.qZA(),t.TgZ(37,"option",39),t._uU(38,"50"),t.qZA(),t.TgZ(39,"option",40),t._uU(40,"100"),t.qZA(),t.TgZ(41,"option",41),t._uU(42,"All"),t.qZA()()()(),t.TgZ(43,"div",42)(44,"div",43)(45,"pagination-controls",44),t.NdJ("pageChange",function(l){t.CHM(i);const x=t.oxw(2);return t.KtG(x.p=l)}),t.qZA(),t.TgZ(46,"div",45),t._uU(47),t.qZA()()()()()()()()}if(2&a){const i=t.oxw(2);t.xp6(20),t.Q6J("ngForOf",t.xi3(21,7,t.Dn7(22,10,i.filteredData,i.key,i.reverse),t.WLB(14,m,i.itemsPerPage,i.p))),t.xp6(3),t.Q6J("ngIf",0==(null==i.filteredData?null:i.filteredData.length)),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries")}}const V=function(a,s,i){return{"bg-lightgreen":a,"bg-lightred":s,"bg-lightyellow":i}};function b(a,s){if(1&a&&(t.TgZ(0,"div",11)(1,"div",12)(2,"mat-tab-group",13,14)(4,"mat-tab",15)(5,"div",16)(6,"table",17)(7,"tbody")(8,"tr")(9,"td",18),t._uU(10,"To Account"),t.qZA(),t.TgZ(11,"td",19),t._uU(12),t.qZA()(),t.TgZ(13,"tr")(14,"td",18),t._uU(15,"From Account"),t.qZA(),t.TgZ(16,"td",19),t._uU(17),t.qZA()(),t.TgZ(18,"tr")(19,"td",18),t._uU(20,"Countra Voucher No."),t.qZA(),t.TgZ(21,"td",19),t._uU(22),t.qZA()(),t.TgZ(23,"tr")(24,"td",18),t._uU(25,"Amount"),t.qZA(),t.TgZ(26,"td",19),t._uU(27),t.ALo(28,"currency"),t.qZA()(),t.TgZ(29,"tr")(30,"td",18),t._uU(31,"Date"),t.qZA(),t.TgZ(32,"td",19),t._uU(33),t.qZA()(),t.TgZ(34,"tr")(35,"td",18),t._uU(36,"Note"),t.qZA(),t.TgZ(37,"td",19),t._uU(38),t.qZA()()()()(),t.TgZ(39,"div",20)(40,"p",21),t._uU(41,"Is Active : "),t.qZA(),t.TgZ(42,"span",22),t._uU(43),t.qZA()()(),t.YNc(44,D,48,17,"mat-tab",23),t.qZA()()()),2&a){const i=t.oxw();t.xp6(12),t.Oqu(null==i.countraVooucherDetails||null==i.countraVooucherDetails.to_account?null:i.countraVooucherDetails.to_account.account_id),t.xp6(5),t.Oqu(null==i.countraVooucherDetails||null==i.countraVooucherDetails.to_account?null:i.countraVooucherDetails.to_account.account_id),t.xp6(5),t.Oqu(null==i.countraVooucherDetails?null:i.countraVooucherDetails.countra_voucher_no),t.xp6(5),t.Oqu(t.xi3(28,9,null==i.countraVooucherDetails?null:i.countraVooucherDetails.amount,"INR")),t.xp6(6),t.Oqu(null==i.countraVooucherDetails?null:i.countraVooucherDetails.date),t.xp6(5),t.Oqu(null==i.countraVooucherDetails?null:i.countraVooucherDetails.note),t.xp6(4),t.Q6J("ngClass",t.kEZ(12,V,!0===(null==i.countraVooucherDetails?null:i.countraVooucherDetails.is_active),!1===(null==i.countraVooucherDetails?null:i.countraVooucherDetails.is_active),"Partial"===(null==i.countraVooucherDetails?null:i.countraVooucherDetails.is_active))),t.xp6(1),t.Oqu(null==i.countraVooucherDetails?null:i.countraVooucherDetails.is_active),t.xp6(1),t.Q6J("ngIf",(null==i.countraVooucherDetails||null==i.countraVooucherDetails.logs?null:i.countraVooucherDetails.logs.length)>0)}}const $=[{path:"",component:(()=>{class a{constructor(i,u,l){this.transactionService=i,this.Arout=u,this.location=l,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.transactionService.getCountraVoucherById(this.id).subscribe(i=>{this.countraVooucherDetails=i,this.filteredData=this.countraVooucherDetails?.logs.slice(),this.filterData()})}goBack(){this.location.back()}sort(i){this.key=i,this.reverse=!this.reverse}filterData(){let i=this.countraVooucherDetails?.logs.slice();this.filterOpertion&&(i=i.filter(u=>u?.operation_type===this.filterOpertion)),this.filteredData=i}clearFilter(){this.filterOpertion=null,this.filterData()}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(U.p),t.Y36(h.gz),t.Y36(c.Ye))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-countra-voucher"]],decls:16,vars:2,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"],[1,"d-flex","align-items-center","my-3","mx-3"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Logs",4,"ngIf"],["label","Logs"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"td",3,"click"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,u){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return u.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Countra Voucher"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Countra Voucher Details"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Countra Voucher "),t.qZA()()(),t.YNc(15,b,45,16,"div",10),t.qZA()()()),2&i&&(t.xp6(12),t.MGl("routerLink","//transaction/updatecountravoucher/",null==u.countraVooucherDetails?null:u.countraVooucherDetails.id,""),t.xp6(3),t.Q6J("ngIf",u.countraVooucherDetails))},dependencies:[c.mk,c.sg,c.O5,h.yS,p.YN,p.Kr,p.EJ,p.JJ,p.On,f.pW,e.LS,r.SP,r.uX,o.Hw,c.H9,c.uU,e._s,C.T],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),a})(),canActivate:[n(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let y=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild($),h.Bz]}),a})();var P=n(8468),M=n(95113),N=n(56709),I=n(90455);let E=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.ez,y,P.I,r.Nh,o.Ps,M.LD,N.p9,I.rP,p.u5]}),a})()},30597:(Z,_,n)=>{n.d(_,{l:()=>f});var c=n(94650),h=n(89299),t=n(97185),U=n(42917),p=n(80927);let f=(()=>{class e{constructor(o,C,g,d,v){this.router=o,this.Arout=C,this.toastr=g,this.profileService=d,this.coreService=v}canActivate(o,C){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),g){const d=o.data.allowedRoles;console.log(d,"allowedRoles");const v=g.some(m=>d.includes(m.codename));if(console.log(v),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const D=m?.permission,V=this.profileService.getUserDetails();(!V||V.length!==D.length)&&(this.profileService.setUserPermission(D),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(o){return new(o||e)(c.LFG(h.F0),c.LFG(h.gz),c.LFG(t._W),c.LFG(U.J),c.LFG(p.p))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);