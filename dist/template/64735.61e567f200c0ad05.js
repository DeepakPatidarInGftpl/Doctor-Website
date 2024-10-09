"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[64735],{53506:(A,y,l)=>{l.d(y,{x:()=>U});var c=l(92340),m=l(94650),o=l(80529);let U=(()=>{class d{constructor(e){this.http=e,this.apiUrl=`${c.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(e){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+e)}Ckqut(e,t){const r=this.apiUrl+"/pv-api/stock_check/",a=new URLSearchParams;return a.append("id",e),a.append("mrp",t),this.http.get(r+(a.toString()?"?"+a.toString():""))}getPurchaseFY(e,t){console.log(t,"branch"),console.log(t.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const a=[];if(e&&a.push(`financial_year=${e}`),t&&t.length>0){const p=JSON.stringify(t);console.log(p),console.log(p?.length),a.push(`branch=${p}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(e){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+e)}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}updatePurchase(e,t){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e,t){console.log(t,"branch"),console.log(t.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const a=[];if(e&&a.push(`financial_year=${e}`),t&&t.length>0){const p=JSON.stringify(t);console.log(p),console.log(p?.length),a.push(`branch=${p}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getMaterialByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${e}`)}MaterialIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}updateMaterial(e,t){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e,t){console.log(t,"branch"),console.log(t.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const a=[];if(e&&a.push(`financial_year=${e}`),t&&t.length>0){const p=JSON.stringify(t);console.log(p),console.log(p?.length),a.push(`branch=${p}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getPurchaseBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${e}`)}PurchaseBillIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}updatePurchaseBill(e,t){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(e,t){console.log(t,"branch"),console.log(t.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const a=[];if(e&&a.push(`financial_year=${e}`),t&&t.length>0){const p=JSON.stringify(t);console.log(p),console.log(p?.length),a.push(`branch=${p}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}updateDebitNotes(e,t){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e,t){console.log(t,"branch"),console.log(t.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const a=[];if(e&&a.push(`financial_year=${e}`),t&&t.length>0){const p=JSON.stringify(t);console.log(p),console.log(p?.length),a.push(`branch=${p}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,t)}updatePurchaseReturn(e,t){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,t,r,a){let p=this.apiUrl+"/pv-api/purchase_product_filter/";const h=[];return e&&h.push(`supplier=${e}`),t&&h.push(`category=${t}`),r&&h.push(`subcategory=${r}`),a&&h.push(`search=${a}`),h.length>0&&(p+="?"+h.join("&")),this.http.get(p)}purchaseReturnStatusUpdate(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",e)}}return d.\u0275fac=function(e){return new(e||d)(m.LFG(o.eN))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},64735:(A,y,l)=>{l.r(y),l.d(y,{ExpenseModule:()=>w});var c=l(36895),m=l(4392),o=l(24006),U=l(68675),d=l(54004),P=l(78372),e=l(94650),t=l(53506),r=l(80927),a=l(54270),p=l(97185),h=l(47957),C=l(3238),v=l(59549),g=l(44144);function x(i,u){if(1&i){const s=e.EpF();e.TgZ(0,"mat-option",28),e.NdJ("onSelectionChange",function(){const _=e.CHM(s).$implicit,S=e.oxw();return e.KtG(S.oncheck(null==_?null:_.id))}),e._uU(1),e.qZA()}if(2&i){const s=u.$implicit;e.Q6J("value",s.name),e.xp6(1),e.Oqu(null==s?null:s.name)}}function $(i,u){1&i&&(e.TgZ(0,"mat-option",30),e._uU(1,"Please Enter 3 or more characters"),e.qZA())}function E(i,u){if(1&i&&(e.ynx(0),e.YNc(1,$,2,0,"mat-option",29),e.BQk()),2&i){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",(null==s.supplierControl.value?null:s.supplierControl.value.length)<3)}}function Z(i,u){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Select Supplier "),e.qZA())}function F(i,u){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Enter Amount"),e.qZA())}function T(i,u){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Enter Remark"),e.qZA())}function N(i,u){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const s=u.$implicit;e.s9C("value",s.id),e.xp6(1),e.Oqu(s.name)}}function D(i,u){1&i&&(e.TgZ(0,"span",31),e._uU(1,"Select Payment Account"),e.qZA())}function M(i,u){1&i&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function O(i,u){1&i&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2,"\xa0 Submit"),e.qZA())}const b=function(i){return{"is-invalid":i}};let B=(()=>{class i{constructor(s,n,f,_,S,Q){this.fb=s,this.purchaseService=n,this.coreService=f,this.posService=_,this.toastr=S,this.router=Q,this.supplierControlName="party",this.supplierControl=new o.NI,this.productOption=[],this.suppliers=[],this.loaders=!1}get f(){return this.expenceForm.controls}ngOnInit(){this.expenceForm=this.fb.group({party:new o.NI("",[o.kI.required]),amount:new o.NI("",[o.kI.required,o.kI.pattern(/^[0-9]*$/)]),remarks:new o.NI("",[o.kI.required]),non_gst:new o.NI("",[o.kI.required]),payment_account:new o.NI("",[o.kI.required])}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,d.U)(s=>this._filter(s,!0))),this.supplierControl.valueChanges.subscribe(s=>{s.length>=3?this.getSuuplier(s):(this.suppliers=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,d.U)(n=>this._filter(n,!0))))}),this.getBank()}getBank(){this.posService.getCompanyBank().subscribe(s=>{this.bankList=s})}_filter(s,n){const f="string"==typeof s?s.toLowerCase():s.toString().toLowerCase(),_=this.suppliers.filter(n?S=>S.name.toLowerCase().includes(f):S=>!S.name.toLowerCase().includes(f));return!n&&0===_.length&&_.push({name:"No data found"}),_}get supplier(){return this.expenceForm.get("party")}getSuuplier(s){this.purchaseService.getSupplier(s).pipe((0,P.b)(2e3)).subscribe(n=>{this.suppliers=n,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,d.U)(f=>this._filter(f,!0)))})}oncheck(s){this.expenceForm.patchValue({party:s})}submit(){let s=new FormData;s.append("party",this.expenceForm.get("party")?.value),s.append("amount",this.expenceForm.get("amount")?.value),s.append("remarks",this.expenceForm.get("remarks")?.value),s.append("non_gst",this.expenceForm.get("non_gst")?.value),s.append("payment_account",this.expenceForm.get("payment_account")?.value),this.expenceForm.valid?(this.loaders=!0,this.posService.expensePayment(s).subscribe(n=>{this.addRes=n,this.addRes.isSuccess?(this.toastr.success(this.addRes.msg),this.loaders=!1,this.expenceForm.reset(),this.router.navigate(["//bank/expense"])):this.loaders=!1},n=>{this.loaders=!1})):(this.expenceForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get party(){return this.expenceForm.get("party")}get amount(){return this.expenceForm.get("amount")}get remarks(){return this.expenceForm.get("remarks")}get non_gst(){return this.expenceForm.get("non_gst")}get payment_account(){return this.expenceForm.get("payment_account")}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(o.qu),e.Y36(t.x),e.Y36(r.p),e.Y36(a.v),e.Y36(p._W),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-expense"]],decls:53,vars:31,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Party","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-3","col-sm-3","col-12"],["type","text","formControlName","amount","placeholder","Enter Amount","id","amount",3,"ngClass"],["type","text","formControlName","remarks","id","remarks","placeholder","Enter Remark",3,"ngClass"],["formControlName","payment_account",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","my-4"],[1,"d-flex"],["type","checkbox","formControlName","non_gst",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//bank/expense",1,"btn","btn-cancel"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["class","is-loading",4,"ngIf"],[1,"is-loading"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(s,n){if(1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Create New Expence"),e.qZA()()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label"),e._uU(11,"Select Party Name*"),e.qZA(),e.TgZ(12,"mat-form-field",8),e._UZ(13,"input",9),e.TgZ(14,"mat-autocomplete",null,10),e.YNc(16,x,2,2,"mat-option",11),e.ALo(17,"async"),e.YNc(18,E,2,1,"ng-container",12),e.ALo(19,"async"),e.qZA()(),e.YNc(20,Z,2,0,"span",13),e.qZA()(),e.TgZ(21,"div",14)(22,"div",7)(23,"label"),e._uU(24,"Amount"),e.qZA(),e._UZ(25,"input",15),e.YNc(26,F,2,0,"span",13),e.qZA()(),e.TgZ(27,"div",14)(28,"div",7)(29,"label"),e._uU(30,"Remarks*"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,T,2,0,"span",13),e.qZA()(),e.TgZ(33,"div",14)(34,"div",7)(35,"label"),e._uU(36,"Select Payment Account*"),e.qZA(),e.TgZ(37,"select",17)(38,"option",18),e._uU(39,"Select Payment Account"),e.qZA(),e.YNc(40,N,2,2,"option",19),e.qZA(),e.YNc(41,D,2,0,"span",13),e.qZA()(),e.TgZ(42,"div",14)(43,"div",20)(44,"div",21),e._UZ(45,"input",22),e.TgZ(46,"label",23),e._uU(47,"Non GST"),e.qZA()()()(),e.TgZ(48,"div",24),e.YNc(49,M,2,0,"button",25),e.YNc(50,O,3,0,"button",26),e.TgZ(51,"a",27),e._uU(52,"Cancel"),e.qZA()()()()()()),2&s){const f=e.MAs(15);e.xp6(6),e.Q6J("formGroup",n.expenceForm),e.xp6(7),e.Q6J("formControl",n.supplierControl)("matAutocomplete",f)("ngClass",e.VKq(23,b,n.f.party.touched&&n.f.party.invalid)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(17,19,n.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",e.lcZ(19,21,n.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",n.supplier&&n.supplier.invalid&&n.supplier.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(25,b,n.f.amount.touched&&n.f.amount.invalid)),e.xp6(1),e.Q6J("ngIf",n.amount&&n.amount.invalid&&n.amount.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(27,b,n.f.remarks.touched&&n.f.remarks.invalid)),e.xp6(1),e.Q6J("ngIf",n.remarks&&n.remarks.invalid&&n.remarks.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,b,n.f.payment_account.touched&&n.f.payment_account.invalid)),e.xp6(3),e.Q6J("ngForOf",n.bankList),e.xp6(1),e.Q6J("ngIf",n.payment_account&&n.payment_account.invalid&&n.payment_account.touched),e.xp6(4),e.Q6J("id","checkboxMeasure-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxMeasure-"),e.xp6(3),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders)}},dependencies:[c.mk,c.sg,c.O5,m.yS,o._Y,o.YN,o.Kr,o.Fj,o.Wl,o.EJ,o.JJ,o.JL,o.oH,o.sg,o.u,h.XC,h.ZL,C.ey,v.KE,g.Nt,c.Ov]}),i})();var R=l(30597);const I=JSON.parse(localStorage.getItem("auth"));let J;I&&I.map(u=>{"pos"===u.content_type.app_label&&"expance"===u.content_type.model&&"add_expance"==u.codename&&(J=u.codename)});const L=[{path:"",component:B,canActivate:[R.l],data:{allowedRoles:["add_expance"]}}];let k=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(L),m.Bz]}),i})();var Y=l(8468);let w=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,k,Y.I,o.u5,o.UX,h.Bb,v.lN,g.c]}),i})()},30597:(A,y,l)=>{l.d(y,{l:()=>P});var c=l(94650),m=l(4392),o=l(97185),U=l(42917),d=l(80927);let P=(()=>{class e{constructor(r,a,p,h,C){this.router=r,this.Arout=a,this.toastr=p,this.profileService=h,this.coreService=C}canActivate(r,a){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),p){const h=r.data.allowedRoles,C=p.some(g=>h.includes(g.codename));let v=this.coreService.profileData$.value;if(v&&v.username){this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const g=v?.permission,x=this.profileService.getUserDetails();(!x||x.length!==g.length)&&(this.profileService.setUserPermission(g),window.location.reload())}else this.coreService.getProfile().subscribe(g=>{this.userDetails=g,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(g);const x=g?.permission,$=this.profileService.getUserDetails();(!$||$.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())});if(C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(r){return new(r||e)(c.LFG(m.F0),c.LFG(m.gz),c.LFG(o._W),c.LFG(U.J),c.LFG(d.p))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);