"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4735],{53506:(A,b,n)=>{n.d(b,{x:()=>C});var h=n(92340),d=n(94650),p=n(80529);let C=(()=>{class m{constructor(t){this.http=t,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,r)}updatePurchase(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,r)}updateMaterial(t,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,r)}updatePurchaseBill(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,r)}updateDebitNotes(t,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,r)}updatePurchaseReturn(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,r,o,f){let c=this.apiUrl+"/pv-api/purchase_product_filter/";const u=[];return t&&u.push(`supplier=${t}`),r&&u.push(`category=${r}`),o&&u.push(`subcategory=${o}`),f&&u.push(`search=${f}`),u.length>0&&(c+="?"+u.join("&")),this.http.get(c)}}return m.\u0275fac=function(t){return new(t||m)(d.LFG(p.eN))},m.\u0275prov=d.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},64735:(A,b,n)=>{n.r(b),n.d(b,{ExpenseModule:()=>Y});var h=n(36895),d=n(89299),p=n(24006),C=n(68675),m=n(54004),e=n(94650),t=n(53506),r=n(80927),o=n(54270),f=n(97185),c=n(47957),u=n(3238),_=n(59549),x=n(44144);function y(i,l){if(1&i){const a=e.EpF();e.TgZ(0,"mat-option",28),e.NdJ("onSelectionChange",function(){const v=e.CHM(a).$implicit,U=e.oxw();return e.KtG(U.oncheck(null==v?null:v.id))}),e._uU(1),e.qZA()}if(2&i){const a=l.$implicit;e.Q6J("value",a.name),e.xp6(1),e.Oqu(null==a?null:a.name)}}function P(i,l){1&i&&(e.TgZ(0,"mat-option",30),e._uU(1,"Please Enter 3 or more characters"),e.qZA())}function I(i,l){if(1&i&&(e.ynx(0),e.YNc(1,P,2,0,"mat-option",29),e.BQk()),2&i){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",(null==a.supplierControl.value?null:a.supplierControl.value.length)<3)}}function Z(i,l){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Select Supplier "),e.qZA())}function $(i,l){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Enter Amount"),e.qZA())}function F(i,l){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Enter Remark"),e.qZA())}function T(i,l){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const a=l.$implicit;e.s9C("value",a.id),e.xp6(1),e.Oqu(a.name)}}function N(i,l){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Select Payment Account"),e.qZA())}function M(i,l){1&i&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function D(i,l){1&i&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2,"\xa0 Submit"),e.qZA())}const S=function(i){return{"is-invalid":i}};let R=(()=>{class i{constructor(a,s,g,v,U,Q){this.fb=a,this.purchaseService=s,this.coreService=g,this.posService=v,this.toastr=U,this.router=Q,this.supplierControlName="party",this.supplierControl=new p.NI,this.productOption=[],this.suppliers=[],this.loaders=!1}get f(){return this.expenceForm.controls}ngOnInit(){this.expenceForm=this.fb.group({party:new p.NI("",[p.kI.required]),amount:new p.NI("",[p.kI.required,p.kI.pattern(/^[0-9]*$/)]),remarks:new p.NI("",[p.kI.required]),non_gst:new p.NI("",[p.kI.required]),payment_account:new p.NI("",[p.kI.required])}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,C.O)(""),(0,m.U)(a=>this._filter(a,!0))),this.getBank(),this.getSuuplier()}getBank(){this.posService.getCompanyBank().subscribe(a=>{this.bankList=a})}_filter(a,s){const g="string"==typeof a?a.toLowerCase():a.toString().toLowerCase(),v=this.suppliers.filter(s?U=>U.name.toLowerCase().includes(g):U=>!U.name.toLowerCase().includes(g));return!s&&0===v.length&&v.push({name:"No data found"}),v}get supplier(){return this.expenceForm.get("party")}getSuuplier(){this.purchaseService.getSupplier().subscribe(a=>{this.suppliers=a})}oncheck(a){this.expenceForm.patchValue({party:a})}submit(){let a=new FormData;a.append("party",this.expenceForm.get("party")?.value),a.append("amount",this.expenceForm.get("amount")?.value),a.append("remarks",this.expenceForm.get("remarks")?.value),a.append("non_gst",this.expenceForm.get("non_gst")?.value),a.append("payment_account",this.expenceForm.get("payment_account")?.value),this.expenceForm.valid?(this.loaders=!0,this.posService.expensePayment(a).subscribe(s=>{this.addRes=s,this.addRes.isSuccess?(this.toastr.success(this.addRes.msg),this.loaders=!1,this.expenceForm.reset(),this.router.navigate(["//bank/expense"])):this.loaders=!1},s=>{this.loaders=!1})):(this.expenceForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get party(){return this.expenceForm.get("party")}get amount(){return this.expenceForm.get("amount")}get remarks(){return this.expenceForm.get("remarks")}get non_gst(){return this.expenceForm.get("non_gst")}get payment_account(){return this.expenceForm.get("payment_account")}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(p.qu),e.Y36(t.x),e.Y36(r.p),e.Y36(o.v),e.Y36(f._W),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-expense"]],decls:53,vars:31,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Party","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12"],["type","text","formControlName","amount","placeholder","Enter Amount","id","amount",3,"ngClass"],["type","text","formControlName","remarks","id","remarks","placeholder","Enter Remark",3,"ngClass"],["formControlName","payment_account",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","my-4"],[1,"d-flex"],["type","checkbox","formControlName","non_gst",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//bank/expense",1,"btn","btn-cancel"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["class","is-loading",4,"ngIf"],[1,"is-loading"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,s){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Create New Expence"),e.qZA()()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return s.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),e._uU(11,"Select Party Name*"),e.qZA(),e.TgZ(12,"mat-form-field",8),e._UZ(13,"input",9),e.TgZ(14,"mat-autocomplete",null,10),e.YNc(16,y,2,2,"mat-option",11),e.ALo(17,"async"),e.YNc(18,I,2,1,"ng-container",12),e.ALo(19,"async"),e.qZA()(),e.YNc(20,Z,2,0,"span",13),e.qZA()(),e.TgZ(21,"div",14)(22,"div",7)(23,"label"),e._uU(24,"Amount"),e.qZA(),e._UZ(25,"input",15),e.YNc(26,$,2,0,"span",13),e.qZA()(),e.TgZ(27,"div",14)(28,"div",7)(29,"label"),e._uU(30,"Remarks*"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,F,2,0,"span",13),e.qZA()(),e.TgZ(33,"div",14)(34,"div",7)(35,"label"),e._uU(36,"Select Payment Account*"),e.qZA(),e.TgZ(37,"select",17)(38,"option",18),e._uU(39,"Select Payment Account"),e.qZA(),e.YNc(40,T,2,2,"option",19),e.qZA(),e.YNc(41,N,2,0,"span",13),e.qZA()(),e.TgZ(42,"div",14)(43,"div",20)(44,"div",21),e._UZ(45,"input",22),e.TgZ(46,"label",23),e._uU(47,"Non GST"),e.qZA()()()(),e.TgZ(48,"div",24),e.YNc(49,M,2,0,"button",25),e.YNc(50,D,3,0,"button",26),e.TgZ(51,"a",27),e._uU(52,"Cancel"),e.qZA()()()()()()),2&a){const g=e.MAs(15);e.xp6(6),e.Q6J("formGroup",s.expenceForm),e.xp6(7),e.Q6J("formControl",s.supplierControl)("matAutocomplete",g)("ngClass",e.VKq(23,S,s.f.party.touched&&s.f.party.invalid)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(17,19,s.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",e.lcZ(19,21,s.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",s.supplier&&s.supplier.invalid&&s.supplier.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(25,S,s.f.amount.touched&&s.f.amount.invalid)),e.xp6(1),e.Q6J("ngIf",s.amount&&s.amount.invalid&&s.amount.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(27,S,s.f.remarks.touched&&s.f.remarks.invalid)),e.xp6(1),e.Q6J("ngIf",s.remarks&&s.remarks.invalid&&s.remarks.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,S,s.f.payment_account.touched&&s.f.payment_account.invalid)),e.xp6(3),e.Q6J("ngForOf",s.bankList),e.xp6(1),e.Q6J("ngIf",s.payment_account&&s.payment_account.invalid&&s.payment_account.touched),e.xp6(4),e.Q6J("id","checkboxMeasure-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxMeasure-"),e.xp6(3),e.Q6J("ngIf",!s.loaders),e.xp6(1),e.Q6J("ngIf",s.loaders)}},dependencies:[h.mk,h.sg,h.O5,d.yS,p._Y,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.JL,p.oH,p.sg,p.u,c.XC,c.ZL,u.ey,_.KE,x.Nt,h.Ov]}),i})();var B=n(30597);const E=JSON.parse(localStorage.getItem("auth"));let O;E&&E.map(l=>{"pos"===l.content_type.app_label&&"expance"===l.content_type.model&&"add_expance"==l.codename&&(O=l.codename)});const J=[{path:"",component:R,canActivate:[B.l],data:{allowedRoles:["add_expance"]}}];let L=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(J),d.Bz]}),i})();var k=n(8468);let Y=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.ez,L,k.I,p.u5,p.UX,c.Bb,_.lN,x.c]}),i})()},30597:(A,b,n)=>{n.d(b,{l:()=>e});var h=n(94650),d=n(89299),p=n(97185),C=n(42917),m=n(80927);let e=(()=>{class t{constructor(o,f,c,u,_){this.router=o,this.Arout=f,this.toastr=c,this.profileService=u,this.coreService=_}canActivate(o,f){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),c){const u=o.data.allowedRoles;console.log(u,"allowedRoles");const _=c.some(x=>u.includes(x.codename));if(console.log(_),this.coreService.getProfile().subscribe(x=>{this.userDetails=x,this.profileService.setUserDetails(this.userDetails);const y=x?.permission,P=this.profileService.getUserDetails();(!P||P.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(o){return new(o||t)(h.LFG(d.F0),h.LFG(d.gz),h.LFG(p._W),h.LFG(C.J),h.LFG(m.p))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);