"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8360],{53506:(T,A,s)=>{s.d(A,{x:()=>C});var m=s(92340),_=s(94650),l=s(80529);let C=(()=>{class g{constructor(t){this.http=t,this.apiUrl=`${m.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(t){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+t)}getPurchaseFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const u=JSON.stringify(e);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(t){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+t)}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const u=JSON.stringify(e);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getMaterialByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const u=JSON.stringify(e);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getPurchaseBillByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const u=JSON.stringify(e);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}updateDebitNotes(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const u=JSON.stringify(e);console.log(u),console.log(u?.length),p.push(`branch=${u}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,e)}updatePurchaseReturn(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,e,r,p){let u=this.apiUrl+"/pv-api/purchase_product_filter/";const h=[];return t&&h.push(`supplier=${t}`),e&&h.push(`category=${e}`),r&&h.push(`subcategory=${r}`),p&&h.push(`search=${p}`),h.length>0&&(u+="?"+h.join("&")),this.http.get(u)}}return g.\u0275fac=function(t){return new(t||g)(_.LFG(l.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},28360:(T,A,s)=>{s.r(A),s.d(A,{AddMaterialConsumptionModule:()=>it});var m=s(36895),_=s(4392),l=s(24006),C=s(68675),g=s(54004),x=s(78372),t=s(94650),e=s(42236),r=s(71071),p=s(53506),u=s(97185),h=s(43443),f=s(47957),P=s(3238),U=s(59549),y=s(44144);function O(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",38),t.NdJ("onSelectionChange",function(){t.CHM(n);const c=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck(c.id))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",n.username+" "+(null==n?null:n.username)),t.xp6(1),t.Oqu(null==n||null==n.detail?null:n.detail.company_name)}}function S(o,a){if(1&o&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",37),t.BQk()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active&&!(null==n||null==n.detail||!n.detail.company_name))}}function F(o,a){1&o&&(t.TgZ(0,"mat-option",39)(1,"a",40),t._uU(2,"+ Add Payer"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function N(o,a){1&o&&(t.TgZ(0,"mat-option",41),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function I(o,a){if(1&o&&(t.ynx(0),t.YNc(1,F,3,1,"mat-option",28),t.YNc(2,N,2,0,"mat-option",29),t.BQk()),2&o){const n=a.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",(null==i.supplierControl.value?null:i.supplierControl.value.length)<3)}}function $(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Select Payer "),t.qZA())}function w(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Select Consumption Date "),t.qZA())}function q(o,a){if(1&o&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.prefix)}}function J(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Prefix"),t.qZA())}function D(o,a){if(1&o&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.prefix)}}function E(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Material Consumption No"),t.qZA())}function Q(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Consumption Type"),t.qZA())}function Y(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Remarks"),t.qZA())}function B(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",38),t.NdJ("onSelectionChange",function(){t.CHM(n);const c=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.oncheckProduct(c))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",(null==n?null:n.product_title)+" "+(null==n?null:n.variant_name)),t.xp6(1),t.hij(" ",(null==n?null:n.product_title)+" "+(null==n?null:n.variant_name),"")}}function L(o,a){if(1&o&&(t.ynx(0),t.YNc(1,B,2,2,"mat-option",37),t.BQk()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active)}}function R(o,a){if(1&o&&(t.ynx(0),t.YNc(1,L,2,1,"ng-container",11),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.variantList)}}function k(o,a){1&o&&(t.TgZ(0,"mat-option",39)(1,"a",43),t._uU(2,"+add Product"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function V(o,a){1&o&&(t.TgZ(0,"mat-option",41),t._uU(1," Please Enter 3 or more characters"),t.qZA())}function K(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter qty"),t.qZA())}function G(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Price"),t.qZA())}function z(o,a){1&o&&(t.TgZ(0,"span",42),t._uU(1,"Enter Total Action"),t.qZA())}function W(o,a){1&o&&(t.TgZ(0,"button",44),t._uU(1,"Submit"),t.qZA())}function j(o,a){1&o&&(t.TgZ(0,"button",45),t._UZ(1,"span",46),t._uU(2,"\xa0 Submit"),t.qZA())}const v=function(o){return{"is-invalid":o}},tt=[{path:"",component:(()=>{class o{constructor(n,i,c,d,M,Z,b){this.fb=n,this.inventoryService=i,this.transactionService=c,this.purchaseService=d,this.toastr=M,this.router=Z,this.commonService=b,this.supplierControl=new l.NI,this.minDate="",this.maxDate="",this.billControl=new l.NI,this.amounts=0,this.taxs=0,this.totals=0,this.userList=[],this.dateError=null,this.loaders=!1,this.variantList=[],this.barcodeControl=new l.NI("")}get f(){return this.materialConsumptionForm.controls}ngOnInit(){const n=new Date,M=`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,"0")}-${n.getDate().toString().padStart(2,"0")}`;this.materialConsumptionForm=this.fb.group({user:new l.NI("",[l.kI.required]),consumption_date:new l.NI(M,[l.kI.required]),prefix:new l.NI("",[l.kI.required]),consumption_no:new l.NI(""),consumption_type:new l.NI("",[l.kI.required]),remarks:new l.NI(""),barcode:new l.NI(""),qty:new l.NI(1),price:new l.NI(0),total_action:new l.NI(0)}),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,C.O)(""),(0,g.U)(b=>this._filter(b,!0))),this.supplierControl.valueChanges.subscribe(b=>{b.length>=3?this.getSupplier(b):(this.userList=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,C.O)(""),(0,g.U)(ot=>this._filter(this.supplierControl?.value,!0))))});const Z=localStorage.getItem("financialYear");this.materialDateValidation(Z)}getprefix(){this.transactionService.getMaterialConsuptionPrefix().subscribe(n=>{console.log(n),n.success?(this.prefixNo=n?.data,this.materialConsumptionForm.get("consumption_no").patchValue(this.prefixNo[0]?.id),this.materialConsumptionForm.get("prefix").patchValue(this.prefixNo[0]?.id)):this.toastr.error(n.msg)},n=>{this.toastr.error(n.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getSupplier(n){this.transactionService.getUser(n).pipe((0,x.b)(2e3)).subscribe(i=>{this.userList=i?.data,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,C.O)(""),(0,g.U)(c=>this._filter(this.supplierControl?.value,!0)))})}_filter(n,i){const c="string"==typeof n?n.toLowerCase():n.toString().toLowerCase(),d=this.userList.filter(i?M=>M?.detail?.company_name?.toLowerCase().includes(c):M=>!M?.detail?.company_name?.toLowerCase().includes(c));return!i&&0===d.length&&d.push({username:"No data found"}),d}materialDateValidation(n){const i=this.materialConsumptionForm.get("consumption_date"),{formattedMinDate:c,formattedMaxDate:d}=this.commonService.setMinMaxDates(i,n);this.minDate=c,this.maxDate=d}oncheck(n){console.log(n),this.materialConsumptionForm.patchValue({user:n})}get supplier(){return this.materialConsumptionForm.get("user")}submit(){if(this.materialConsumptionForm.valid){this.loaders=!0;const n=new FormData;n.append("user",this.materialConsumptionForm.get("user")?.value),n.append("consumption_date",this.materialConsumptionForm.get("consumption_date")?.value),n.append("prefix",this.materialConsumptionForm.get("prefix")?.value),n.append("consumption_no",this.materialConsumptionForm.get("consumption_no")?.value),n.append("consumption_type",this.materialConsumptionForm.get("consumption_type")?.value),n.append("remarks",this.materialConsumptionForm.get("remarks")?.value),n.append("barcode",this.materialConsumptionForm.get("barcode")?.value),n.append("qty",this.materialConsumptionForm.get("qty")?.value),n.append("price",this.materialConsumptionForm.get("price")?.value),n.append("total_action",this.materialConsumptionForm.get("total_action")?.value),this.transactionService.addMaterialConsuption(n).subscribe(i=>{this.loaders=!1,this.addRes=i,this.addRes.success?(this.toastr.success(this.addRes.msg),this.materialConsumptionForm.reset(),this.router.navigate(["//transaction/materialConsuption"])):this.loaders=!1},i=>{this.loaders=!1})}else this.materialConsumptionForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get user(){return this.materialConsumptionForm.get("user")}get consumption_date(){return this.materialConsumptionForm.get("consumption_date")}get prefix(){return this.materialConsumptionForm.get("prefix")}get consumption_no(){return this.materialConsumptionForm.get("consumption_no")}get consumption_type(){return this.materialConsumptionForm.get("consumption_type")}get remarks(){return this.materialConsumptionForm.get("remarks")}get barcode(){return this.materialConsumptionForm.get("barcode")}get qty(){return this.materialConsumptionForm.get("qty")}get price(){return this.materialConsumptionForm.get("price")}get total_action(){return this.materialConsumptionForm.get("total_action")}getVariant(n){this.inventoryService.filterVariant("","",n).subscribe(i=>{console.log(i),this.variantList=i,console.log(this.variantList)})}oncheckProduct(n){console.log(n),this.materialConsumptionForm.get("barcode")?.patchValue(n?.id)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l.qu),t.Y36(e.q),t.Y36(r.p),t.Y36(p.x),t.Y36(u._W),t.Y36(_.F0),t.Y36(h.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-material-consumption"]],decls:103,vars:50,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Payer","aria-label","User","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","date","formControlName","consumption_date","id","consumption_date",3,"ngClass"],["formControlName","prefix"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","consumption_no"],["formControlName","consumption_type","id","consumption_type",3,"ngClass"],["value","Sample"],["value","Production"],["value","Scrap/Wastage"],["type","text","formControlName","remarks","placeholder","Enter remarks","id","remarks",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","number","formControlName","qty","placeholder","Enter qty","id","qty",3,"ngClass"],["type","number","formControlName","price","placeholder","Enter price","id","price",3,"ngClass"],["type","number","formControlName","total_action","placeholder","Enter total_action","id","total_action",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/materialConsuption",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Material Consumption"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Material Consumption "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Payer*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,S,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,I,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,$,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,w,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Prefix*"),t.qZA(),t.TgZ(33,"select",16)(34,"option",17),t._uU(35,"Select Journal Consumption Series"),t.qZA(),t.YNc(36,q,2,2,"option",18),t.qZA(),t.YNc(37,J,2,0,"span",13),t.qZA()(),t.TgZ(38,"div",14)(39,"div",7)(40,"label"),t._uU(41,"Material Consumption No"),t.qZA(),t.TgZ(42,"select",19)(43,"option",17),t._uU(44,"Select Journal Consumption Series"),t.qZA(),t.YNc(45,D,2,2,"option",18),t.qZA(),t.YNc(46,E,2,0,"span",13),t.qZA()(),t.TgZ(47,"div",14)(48,"div",7)(49,"label"),t._uU(50,"Consumption Type"),t.qZA(),t.TgZ(51,"select",20)(52,"option",17),t._uU(53,"Select Consumption Type"),t.qZA(),t.TgZ(54,"option",21),t._uU(55,"Sample"),t.qZA(),t.TgZ(56,"option",22),t._uU(57,"Production"),t.qZA(),t.TgZ(58,"option",23),t._uU(59,"Scrap/Wastage"),t.qZA()(),t.YNc(60,Q,2,0,"span",13),t.qZA()(),t.TgZ(61,"div",14)(62,"div",7)(63,"label"),t._uU(64,"Remarks"),t.qZA(),t._UZ(65,"input",24),t.YNc(66,Y,2,0,"span",13),t.qZA()(),t.TgZ(67,"div",2)(68,"div",3)(69,"div",5)(70,"div",25)(71,"div",7)(72,"label"),t._uU(73,"Select Product"),t.qZA(),t.TgZ(74,"input",26),t.NdJ("input",function(d){return i.getVariant(d.target.value)}),t.qZA(),t.TgZ(75,"mat-autocomplete",null,27),t.YNc(77,R,2,1,"ng-container",12),t.YNc(78,k,3,1,"mat-option",28),t.YNc(79,V,2,0,"mat-option",29),t.qZA()()(),t.TgZ(80,"div",25)(81,"div",7)(82,"label"),t._uU(83,"QTY"),t.qZA(),t._UZ(84,"input",30),t.YNc(85,K,2,0,"span",13),t.qZA()(),t.TgZ(86,"div",25)(87,"div",7)(88,"label"),t._uU(89,"Price"),t.qZA(),t._UZ(90,"input",31),t.YNc(91,G,2,0,"span",13),t.qZA()(),t.TgZ(92,"div",25)(93,"div",7)(94,"label"),t._uU(95,"Total Action"),t.qZA(),t._UZ(96,"input",32),t.YNc(97,z,2,0,"span",13),t.qZA()()()()(),t.TgZ(98,"div",33),t.YNc(99,W,2,0,"button",34),t.YNc(100,j,3,0,"button",35),t.TgZ(101,"a",36),t._uU(102,"Cancel"),t.qZA()()()()()()),2&n){const c=t.MAs(17),d=t.MAs(76);t.xp6(8),t.Q6J("formGroup",i.materialConsumptionForm),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",c)("ngClass",t.VKq(36,v,i.f.user.touched&&i.f.user.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,32,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,34,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",i.supplier&&i.supplier.invalid&&i.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(38,v,i.f.consumption_date.touched&&i.f.consumption_date.invalid)),t.uIk("min",i.minDate)("max",i.maxDate),t.xp6(1),t.Q6J("ngIf",i.consumption_date&&i.consumption_date.invalid&&i.consumption_date.touched),t.xp6(8),t.Q6J("ngForOf",i.prefixNo),t.xp6(1),t.Q6J("ngIf",i.prefix&&i.prefix.invalid&&i.prefix.touched),t.xp6(8),t.Q6J("ngForOf",i.prefixNo),t.xp6(1),t.Q6J("ngIf",i.consumption_no&&i.consumption_no.invalid&&i.consumption_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,v,i.f.consumption_type.touched&&i.f.consumption_type.invalid)),t.xp6(9),t.Q6J("ngIf",i.consumption_type&&i.consumption_type.invalid&&i.consumption_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(42,v,i.f.remarks.touched&&i.f.remarks.invalid)),t.xp6(1),t.Q6J("ngIf",i.remarks&&i.remarks.invalid&&i.remarks.touched),t.xp6(8),t.Q6J("formControl",i.barcodeControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngIf",(null==i.barcodeControl.value?null:i.barcodeControl.value.length)>=1&&(null==i.barcodeControl.value?null:i.barcodeControl.value.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==i.variantList?null:i.variantList.length)),t.xp6(1),t.Q6J("ngIf",(null==i.barcodeControl.value?null:i.barcodeControl.value.length)<3),t.xp6(5),t.Q6J("ngClass",t.VKq(44,v,i.f.qty.touched&&i.f.qty.invalid)),t.xp6(1),t.Q6J("ngIf",i.qty&&i.qty.invalid&&i.qty.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(46,v,i.f.price.touched&&i.f.price.invalid)),t.xp6(1),t.Q6J("ngIf",i.price&&i.price.invalid&&i.price.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(48,v,i.f.total_action.touched&&i.f.total_action.invalid)),t.xp6(1),t.Q6J("ngIf",i.total_action&&i.total_action.invalid&&i.total_action.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders)}},dependencies:[m.mk,m.sg,m.O5,_.yS,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.oH,l.sg,l.u,f.XC,f.ZL,P.ey,U.KE,y.Nt,m.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[s(30597).l],data:{allowedRoles:["add_materialconsumption"]}}];let et=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(tt),_.Bz]}),o})();var nt=s(8468);let it=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,et,nt.I,f.Bb,U.lN,y.c]}),o})()},30597:(T,A,s)=>{s.d(A,{l:()=>x});var m=s(94650),_=s(4392),l=s(97185),C=s(42917),g=s(80927);let x=(()=>{class t{constructor(r,p,u,h,f){this.router=r,this.Arout=p,this.toastr=u,this.profileService=h,this.coreService=f}canActivate(r,p){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),u){const h=r.data.allowedRoles;console.log(h,"allowedRoles");const f=u.some(P=>h.includes(P.codename));if(console.log(f),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const U=P?.permission,y=this.profileService.getUserDetails();(!y||y.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(r){return new(r||t)(m.LFG(_.F0),m.LFG(_.gz),m.LFG(l._W),m.LFG(C.J),m.LFG(g.p))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);