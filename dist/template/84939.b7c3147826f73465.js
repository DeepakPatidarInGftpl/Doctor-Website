"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[84939],{53506:(I,E,d)=>{d.d(E,{x:()=>P});var v=d(92340),x=d(94650),l=d(80529);let P=(()=>{class y{constructor(r){this.http=r,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(r){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+r)}Ckqut(r,i){const s=this.apiUrl+"/pv-api/stock_check/",c=new URLSearchParams;return c.append("id",r),c.append("mrp",i),this.http.get(s+(c.toString()?"?"+c.toString():""))}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(r&&c.push(`financial_year=${r}`),i&&i.length>0){const g=JSON.stringify(i);console.log(g),console.log(g?.length),c.push(`branch=${g}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(r){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+r)}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const c=[];if(r&&c.push(`financial_year=${r}`),i&&i.length>0){const g=JSON.stringify(i);console.log(g),console.log(g?.length),c.push(`branch=${g}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getMaterialByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(r&&c.push(`financial_year=${r}`),i&&i.length>0){const g=JSON.stringify(i);console.log(g),console.log(g?.length),c.push(`branch=${g}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getPurchaseBillByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const c=[];if(r&&c.push(`financial_year=${r}`),i&&i.length>0){const g=JSON.stringify(i);console.log(g),console.log(g?.length),c.push(`branch=${g}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(r&&c.push(`financial_year=${r}`),i&&i.length>0){const g=JSON.stringify(i);console.log(g),console.log(g?.length),c.push(`branch=${g}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,s,c){let g=this.apiUrl+"/pv-api/purchase_product_filter/";const m=[];return r&&m.push(`supplier=${r}`),i&&m.push(`category=${i}`),s&&m.push(`subcategory=${s}`),c&&m.push(`search=${c}`),m.length>0&&(g+="?"+m.join("&")),this.http.get(g)}purchaseReturnStatusUpdate(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",r)}}return y.\u0275fac=function(r){return new(r||y)(x.LFG(l.eN))},y.\u0275prov=x.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},84939:(I,E,d)=>{d.r(E),d.d(E,{AddScrapEntryModule:()=>et});var v=d(36895),x=d(4392),l=d(24006),P=d(68675),y=d(54004),t=d(94650),r=d(72170),i=d(80927),s=d(97185),c=d(53506),g=d(71071),m=d(43443),U=d(47957),Z=d(3238),C=d(59549),b=d(44144);function T(a,h){1&a&&(t.TgZ(0,"span",25),t._uU(1,"Select Date"),t.qZA())}function M(a,h){if(1&a&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&a){const e=h.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.prefix)}}function F(a,h){1&a&&(t.TgZ(0,"span",25),t._uU(1,"Enter Voucher No "),t.qZA())}function $(a,h){1&a&&(t.TgZ(0,"span",25),t._uU(1,"Enter Updater Name"),t.qZA())}function q(a,h){if(1&a){const e=t.EpF();t.TgZ(0,"span",27),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.addCart(0))}),t._uU(1,"Add Cart+"),t.qZA()}}function w(a,h){if(1&a){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",59),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,p=t.oxw();return t.KtG(p.addCart(o+1))}),t._UZ(1,"path",31)(2,"path",60),t.qZA()}}function D(a,h){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",62),t.NdJ("onSelectionChange",function(){t.CHM(e);const o=t.oxw().$implicit,p=t.oxw(2).index,u=t.oxw();return t.KtG(u.oncheckVariant(o,p))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function O(a,h){if(1&a&&(t.ynx(0),t.YNc(1,D,2,2,"mat-option",61),t.BQk()),2&a){const e=h.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function B(a,h){if(1&a&&(t.ynx(0),t.YNc(1,O,2,1,"ng-container",20),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function J(a,h){1&a&&(t.TgZ(0,"mat-option",63),t._uU(1,"Loading..."),t.qZA())}function L(a,h){1&a&&(t.TgZ(0,"mat-option",26)(1,"a",64),t._uU(2,"+add Product"),t.qZA()()),2&a&&t.Q6J("value","No data found")}function k(a,h){1&a&&(t.TgZ(0,"mat-option",65),t._uU(1," Please Enter 3 or more characters "),t.qZA())}function Y(a,h){1&a&&(t.TgZ(0,"span",66),t._uU(1,"Enter Unit"),t.qZA())}function Q(a,h){1&a&&(t.TgZ(0,"span",66),t._uU(1,"Enter QTY"),t.qZA())}function R(a,h){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td",68),t._uU(2),t.qZA(),t.TgZ(3,"td",68),t._uU(4),t.qZA(),t.TgZ(5,"td",68),t._uU(6),t.qZA(),t.TgZ(7,"td",68),t._uU(8),t.qZA(),t.TgZ(9,"td",68),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",69),t.NdJ("click",function(){const p=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.selecBatchtModel(p,u.batchCartIndex))}),t._uU(13,"Select"),t.qZA()()()}if(2&a){const e=h.$implicit,n=h.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(null==e?null:e.mrp),t.xp6(2),t.hij("",null==e?null:e.cost_price," "),t.xp6(2),t.hij("",(null==e?null:e.discount)+"%"," "),t.xp6(2),t.Oqu((null==e?null:e.additional_discount)+"%")}}function G(a,h){if(1&a&&(t.TgZ(0,"div",7)(1,"div",5)(2,"div",15)(3,"table",16)(4,"thead")(5,"tr")(6,"th",67),t._uU(7," Sr.No."),t.qZA(),t.TgZ(8,"th",67),t._uU(9," MRP"),t.qZA(),t.TgZ(10,"th",67),t._uU(11," Purchase Price"),t.qZA(),t.TgZ(12,"th",67),t._uU(13," Discount %"),t.qZA(),t.TgZ(14,"th",67),t._uU(15," Additional Discount % "),t.qZA(),t.TgZ(16,"th",67),t._uU(17," Action"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,R,14,5,"tr",20),t.qZA()()()()()),2&a){const e=t.oxw(2);t.xp6(19),t.Q6J("ngForOf",e.selectBatch)}}function V(a,h){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",28)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",29),t.O4$(),t.TgZ(7,"svg",30),t.NdJ("click",function(){const p=t.CHM(e).index,u=t.oxw();return t.KtG(u.removeCart(p))}),t._UZ(8,"path",31)(9,"path",32),t.qZA()(),t.YNc(10,w,3,0,"svg",33),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"input",34,35),t.NdJ("keyup",function(){const p=t.CHM(e).index,u=t.MAs(13),_=t.oxw();return t.KtG(_.getVariant(u.value,p,"barcode"))})("blur",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hideSearch())}),t.qZA()(),t.TgZ(14,"td",36)(15,"div",37)(16,"mat-form-field",38)(17,"input",39),t.NdJ("input",function(o){const u=t.CHM(e).index,_=t.oxw();return t.KtG(_.getVariant(o.target.value,u,""))}),t.qZA(),t.TgZ(18,"mat-autocomplete",null,40),t.YNc(20,B,2,1,"ng-container",41),t.YNc(21,J,2,0,"mat-option",42),t.YNc(22,L,3,1,"mat-option",43),t.YNc(23,k,2,0,"mat-option",44),t.qZA()()()(),t.TgZ(24,"td"),t._UZ(25,"input",45),t.YNc(26,Y,2,0,"span",46),t.qZA(),t.TgZ(27,"td"),t._UZ(28,"input",47),t.YNc(29,Q,2,0,"span",46),t.TgZ(30,"i",48),t.NdJ("click",function(){const p=t.CHM(e).index,u=t.oxw();return t.KtG(u.openModalBatch(p))}),t.qZA(),t.TgZ(31,"div",49)(32,"div",50)(33,"div",51)(34,"div",52)(35,"h1",53),t._uU(36," Batch"),t.qZA(),t.TgZ(37,"button",54),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.closeModalBatch())}),t.TgZ(38,"span",55),t._uU(39,"\xd7"),t.qZA()()(),t.TgZ(40,"div",56),t.YNc(41,G,20,1,"div",57),t.qZA()()()()(),t.TgZ(42,"td"),t._UZ(43,"input",58),t.qZA()(),t.BQk()}if(2&a){const e=h.index,n=t.MAs(19),o=t.oxw();let p,u;t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",o.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==o.barcode[e]?o.barcode[e]:""),t.uIk("data-index",e),t.xp6(5),t.Q6J("matAutocomplete",n),t.xp6(3),t.Q6J("ngIf",(null==(p=o.item_name(e))||null==p.value?null:p.value.length)>=1&&(null==(p=o.item_name(e))||null==p.value?null:p.value.length)>0),t.xp6(1),t.Q6J("ngIf",o.isSearch),t.xp6(1),t.Q6J("ngIf",0===(null==o.variantList?null:o.variantList.length)&&!o.isSearch),t.xp6(1),t.Q6J("ngIf",(null==(u=o.item_name(e))||null==u.value?null:u.value.length)<3),t.xp6(3),t.Q6J("ngIf",o.unit(e)&&o.unit(e).invalid&&o.unit(e).touched),t.xp6(3),t.Q6J("ngIf",o.qty(e)&&o.qty(e).invalid&&o.qty(e).touched),t.xp6(12),t.Q6J("ngIf",o.selectBatch)}}function K(a,h){1&a&&(t.TgZ(0,"button",70),t._uU(1,"Submit"),t.qZA())}function j(a,h){1&a&&(t.TgZ(0,"button",71),t._UZ(1,"span",72),t._uU(2," \xa0 Submit"),t.qZA())}const N=function(a){return{"is-invalid":a}},H=[{path:"",component:(()=>{class a{constructor(e,n,o,p,u,_,f,A){this.fb=e,this.saleService=n,this.coreService=o,this.toastrService=p,this.purchaseService=u,this.transactionService=_,this.router=f,this.commonService=A,this.minDate="",this.maxDate="",this.coastprice=[],this.originalPrice=[],this.isTaxAvailable=[],this.taxIntoRupees=[],this.tax=[],this.batchCostPrice=[],this.productControl=new l.NI(""),this.filteredOptions=[],this.filteredItemCode=[],this.isCart=!1,this.productList=[],this.isSearch=!1,this.loader=!1,this.variantList=[],this.myControl=new l.NI(""),this.barcode=[]}get f(){return this.scrapEntryForm.controls}ngOnInit(){const e=(new Date).toLocaleString("en-CA",{timeZone:"America/Vancouver"}).split(",")[0];this.scrapEntryForm=this.fb.group({voucher_no:new l.NI("",[l.kI.required]),date:new l.NI(e,[l.kI.required]),updater_name:new l.NI("",[l.kI.required]),cart_item:this.fb.array([])}),this.addCart(0),this.getProduct(),this.getPrefix(),this.ManageNameControl(0),this.ManageItemCodeControl(0);const n=localStorage.getItem("financialYear");this.dateValidation(n)}dateValidation(e){const n=this.scrapEntryForm.get("date"),{formattedMinDate:o,formattedMaxDate:p}=this.commonService.setMinMaxDates(n,e);this.minDate=o,this.maxDate=p}getPrefix(){this.transactionService.getScrapEntryVoucherPrefix().subscribe(e=>{console.log(e),e.success?(this.prefixNo=e?.data,this.scrapEntryForm.get("voucher_no").patchValue(this.prefixNo[0]?.id)):this.toaster.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}cart(){return this.fb.group({barcode:new l.NI("",[l.kI.required]),item_code:new l.NI("",[l.kI.required]),item_name:new l.NI("",[l.kI.required]),unit:new l.NI("",[l.kI.required]),qty:new l.NI(1,[l.kI.required]),reason:new l.NI(""),mrp:0})}getCart(){return this.scrapEntryForm.get("cart_item")}addCart(e){this.getCart().push(this.cart()),this.scrapEntryForm?.value?.cart_item?.length>0&&(this.ManageNameControl(e),this.ManageItemCodeControl(e)),this.isCart=!1}addCart2(e){const n=this.scrapEntryForm?.get("cart_item");this.getCart()?.push(this.cart()),this.ManageNameControl(n?.length-1),this.ManageItemCodeControl(n?.length-1)}removeCart(e){this.getCart().removeAt(e),0==this.scrapEntryForm?.value?.cart_item?.length&&(this.isCart=!0)}get voucher_no(){return this.scrapEntryForm.get("voucher_no")}get date(){return this.scrapEntryForm.get("date")}get updater_name(){return this.scrapEntryForm.get("updater_name")}unit(e){return this.getCart().controls[e].get("unit")}qty(e){return this.getCart().controls[e].get("qty")}item_name(e){return this.getCart().controls[e].get("item_name")}item_code(e){return this.getCart().controls[e].get("item_code")}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}ManageNameControl(e){console.log("index",e);var n=this.scrapEntryForm?.get("cart_item");this.filteredOptions[e]=n.at(e)?.get("item_name")?.valueChanges.pipe((0,P.O)(""),(0,y.U)(o=>this._filter5(o)))}_filter5(e){const n=e?.toLowerCase();return this.productList?.filter(o=>0===o?.title?.toLowerCase().indexOf(n))}ManageItemCodeControl(e){console.log("index",e);var n=this.scrapEntryForm?.get("cart_item");console.log(n,"arrayControl"),this.filteredItemCode[e]=n.at(e)?.get("item_code")?.valueChanges.pipe((0,P.O)(""),(0,y.U)(o=>this._filter6(o))),console.log(this.filteredItemCode)}_filter6(e){const n=e?.toLowerCase();return this.productList?.filter(o=>0===o?.item_code?.toLowerCase().indexOf(n))}isLastCart(e){return e===this.getCart().controls.length-1}oncheckVariant(e,n){console.log(e);const o=e.id;this.barcode[n]=e.sku,this.selecteProduct=e?.product,this.selectedProductName=e.product_title,this.selectBatch=e.batch,this.apiPurchaseTax=e?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage||0,this.batchDiscount=e.batch[0]?.discount||0,this.isTaxAvailable[n]=e?.product?.sale_tax_including,this.batchCostPrice[n]=e?.batch[0]?.cost_price||0;let p=e?.batch[0]?.selling_price_offline||0,f=p-0*p/100,A=f-f*(100/118);this.taxIntoRupees[n]=A||0,this.originalCoastPrice=f+A,this.scrapEntryForm.get("cart_item").at(n).patchValue({barcode:o,item_code:e?.sku,item_name:e?.product_title,unit:e?.product?.unit?.title,qty:1,mrp:this.originalCoastPrice.toFixed(2)})}selecBatchtModel(e,n,o){const p=document.getElementById("batchModal");p&&(p.classList.remove("show"),p.style.display="none");const u=this.scrapEntryForm.get("cart_item").at(n);let _=e?.cost_price*e?.discount/100;console.log(_);let A=e?.cost_price-_+(e?.cost_price-_);this.getCart().controls[n].controls?.mrp.setValue(e?.mrp),console.log(A),e?.stock>0?u.patchValue({mrp:e?.mrp,qty:e?.stock}):this.toastrService.error("Stock is not available at this price")}closeModalBatch(){const e=document.getElementById("batchModal");e&&(e.classList.remove("show"),e.style.display="none")}openModalBatch(e){this.batchCartIndex=e;const n=document.getElementById("batchModal");n&&(n.classList.add("show"),n.style.display="block")}calculateSubtotal(){let e=0;for(let n=0;n<this.getCart().controls.length;n++){const o=this.getCart().controls[n].get("qty"),p=this.getCart().controls[n].get("mrp");o&&p&&(e+=(+p.value||0)*(+o.value||0))}return e}purchase(e){const n=this.calculatePurchaseEveryIndex(e);this.coastprice[e]=n.toFixed(2)}calculatePurchaseEveryIndex(e){return this.batchCostPrice[e]=this.coastprice[e],0}submit(){if(console.log(this.scrapEntryForm.value),this.calculateSubtotal(),this.scrapEntryForm.valid){this.loader=!0;let n=new FormData;n.append("date",this.scrapEntryForm.get("date")?.value),n.append("voucher_no",this.scrapEntryForm.get("voucher_no")?.value),n.append("updater_name",this.scrapEntryForm.get("updater_name")?.value);const o=this.scrapEntryForm.get("cart_item"),p=[];o.controls.forEach(u=>{const _=u,f={};Object.keys(_.controls).forEach(A=>{const S=_.controls[A];let rt=null===S.value||0===S.value.length?"":S.value;f[A]=isNaN(S.value)||""===rt?S.value:parseFloat(S.value)}),p.push(f)}),n.append("cart_item",JSON.stringify(p)),this.transactionService.addScrapEntry(n).subscribe(u=>{console.log(u),u.success?(this.loader=!1,this.toastrService.success(u.msg),this.router.navigate(["/transaction/scarp-entry-list"])):(this.loader=!1,this.toastrService.error(u.msg))},u=>{this.loader=!1,this.toastrService.error(u.message)})}else this.scrapEntryForm.markAllAsTouched(),this.toastrService.error("Please Submit Required Field")}getVariant(e){this.transactionService.searchProduct(e).subscribe(n=>{console.log(n),this.isSearch=!1,this.variantList=n,console.log(this.variantList)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.qu),t.Y36(r.M),t.Y36(i.p),t.Y36(s._W),t.Y36(c.x),t.Y36(g.p),t.Y36(x.F0),t.Y36(m.R))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-scrap-entry"]],decls:62,vars:17,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","date",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","voucher_no"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","updater_name","placeholder","Enter Updater Name",3,"ngClass"],[1,"card"],[1,"table-responsive"],[1,"table","datanew"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","cart_item"],[4,"ngFor","ngForOf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/scarp-entry-list",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],["colspan","1"],[1,"form-group",2,"margin-bottom","0"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","","formControlName","item_name",2,"box-sizing","border-box",3,"matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],["style","color:#FF9F43",4,"ngIf"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","placeholder","Enter Unit","formControlName","unit","readonly","",1,"input"],["class","text-danger d-block",4,"ngIf"],["type","number","placeholder","Enter Qty","formControlName","qty","min","0",1,"input"],["data-bs-toggle","tooltip","title","ion-information",1,"ion-information","circle",3,"click"],["id","batchModal","tabindex","-1","role","dialog","aria-labelledby","addressModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","form-group",4,"ngIf"],["type","text","placeholder","Enter Reason","formControlName","reason",1,"input"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[2,"color","#FF9F43"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger","d-block"],[1,"boder","space-text"],[1,"boder"],["type","button",1,"btn","btn-primary","btn-sm",2,"float","right",3,"click"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Scrap Entry Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Add/Update Scrap Entry"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,T,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Voucher No*"),t.qZA(),t.TgZ(20,"select",10)(21,"option",11),t._uU(22,"Select Voucher No"),t.qZA(),t.YNc(23,M,2,2,"option",12),t.qZA(),t.YNc(24,F,2,0,"span",9),t.qZA()(),t.TgZ(25,"div",6)(26,"div",7)(27,"label"),t._uU(28,"Updater Name*"),t.qZA(),t._UZ(29,"input",13),t.YNc(30,$,2,0,"span",9),t.qZA()()(),t.TgZ(31,"div",14)(32,"div",3)(33,"div",15)(34,"table",16)(35,"thead")(36,"tr")(37,"th"),t._uU(38,"#"),t.qZA(),t._UZ(39,"th"),t.TgZ(40,"th"),t._uU(41,"Item Code"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Item Name"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Unit"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"QTY"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Reason"),t.qZA(),t._UZ(50,"th"),t.qZA(),t.TgZ(51,"tr")(52,"th",17),t.YNc(53,q,2,0,"span",18),t.qZA()()(),t.TgZ(54,"tbody"),t.ynx(55,19),t.YNc(56,V,44,13,"ng-container",20),t.BQk(),t.qZA()()()()(),t.TgZ(57,"div",21),t.YNc(58,K,2,0,"button",22),t.YNc(59,j,3,0,"button",23),t.TgZ(60,"a",24),t._uU(61,"Cancel"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",n.scrapEntryForm),t.xp6(6),t.Q6J("ngClass",t.VKq(13,N,n.f.date.touched&&n.f.date.invalid)),t.uIk("min",n.minDate)("max",n.maxDate),t.xp6(1),t.Q6J("ngIf",n.date&&n.date.invalid&&n.date.touched),t.xp6(8),t.Q6J("ngForOf",n.prefixNo),t.xp6(1),t.Q6J("ngIf",n.voucher_no&&n.voucher_no.invalid&&n.voucher_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(15,N,n.f.updater_name.touched&&n.f.updater_name.invalid)),t.xp6(1),t.Q6J("ngIf",n.updater_name&&n.updater_name.invalid&&n.updater_name.touched),t.xp6(23),t.Q6J("ngIf",n.isCart),t.xp6(3),t.Q6J("ngForOf",n.getCart().controls),t.xp6(2),t.Q6J("ngIf",!n.loader),t.xp6(1),t.Q6J("ngIf",n.loader))},dependencies:[v.mk,v.sg,v.O5,x.yS,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.qQ,l.sg,l.u,l.x0,l.CE,U.XC,U.ZL,Z.ey,C.KE,b.Nt],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .mat-autocomplete-trigger.form-control.ng-pristine.ng-invalid.ng-touched[_ngcontent-%COMP%], .input.ng-pristine.ng-invalid.ng-touched[_ngcontent-%COMP%], .ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.circle[_ngcontent-%COMP%]{margin-top:10px;display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}"]}),a})(),canActivate:[d(30597).l],data:{allowedRoles:["add_scarpentry"]}}];let X=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[x.Bz.forChild(H),x.Bz]}),a})();var tt=d(8468);let et=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.ez,X,tt.I,U.Bb,C.lN,b.c]}),a})()},30597:(I,E,d)=>{d.d(E,{l:()=>t});var v=d(94650),x=d(4392),l=d(97185),P=d(42917),y=d(80927);let t=(()=>{class r{constructor(s,c,g,m,U){this.router=s,this.Arout=c,this.toastr=g,this.profileService=m,this.coreService=U}canActivate(s,c){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),g){const m=s.data.allowedRoles,U=g.some(C=>m.includes(C.codename));let Z=this.coreService.profileData$.value;if(Z&&Z.username){this.userDetails=Z,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(Z);const C=Z?.permission,b=this.profileService.getUserDetails();(!b||b.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}else this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(C);const b=C?.permission,T=this.profileService.getUserDetails();(!T||T.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())});if(U)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(s){return new(s||r)(v.LFG(x.F0),v.LFG(x.gz),v.LFG(l._W),v.LFG(P.J),v.LFG(y.p))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);