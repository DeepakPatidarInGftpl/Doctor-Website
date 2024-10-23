"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[25137],{53506:(M,b,c)=>{c.d(b,{x:()=>U});var y=c(92340),S=c(94650),h=c(80529);let U=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${y.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(e){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+e)}CkGstType(e){return this.http.get(this.apiUrl+"/pv-api/GST-check/?address_id="+e)}sale_and_purchase_qty_for_purchase_order(e){return this.http.get(this.apiUrl+"/pv-api/sale_and_purchase_qty_for_purchase_order/?id="+e)}Ckqut(e,i){const a=this.apiUrl+"/pv-api/stock_check/",n=new URLSearchParams;return n.append("id",e),n.append("mrp",i),this.http.get(a+(n.toString()?"?"+n.toString():""))}getPurchaseFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_order/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(e){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+e)}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,i)}updatePurchase(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/material_inward/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getMaterialByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${e}`)}MaterialIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,i)}updateMaterial(e,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_bill/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getPurchaseBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${e}`)}PurchaseBillIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,i)}updatePurchaseBill(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/debit_note/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,i)}updateDebitNotes(e,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_return/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,i)}updatePurchaseReturn(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,i,a,n){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const C=[];return e&&C.push(`supplier=${e}`),i&&C.push(`category=${i}`),a&&C.push(`subcategory=${a}`),n&&C.push(`search=${n}`),C.length>0&&(t+="?"+C.join("&")),this.http.get(t)}purchaseReturnStatusUpdate(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",e)}}return m.\u0275fac=function(e){return new(e||m)(S.LFG(h.eN))},m.\u0275prov=S.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},72170:(M,b,c)=>{c.d(b,{M:()=>U});var y=c(92340),S=c(94650),h=c(80529);let U=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${y.N.api}`}getSalesOrderfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/sale_order/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getSalesOrder(){return this.http.get(this.apiUrl+"/pv-api/sale_order/")}getSalesOrderByUserId(e){return this.http.get(this.apiUrl+"/pv-api/sale_order/?user_id="+e)}getSalesOrderById(e){return this.http.get(`${this.apiUrl+"/pv-api/sale_order/?id="}${e}`)}SalesOrderIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/sale_order/?id="}${e}`,i)}addSalesOrder(e){return this.http.post(this.apiUrl+"/pv-api/sale_order/",e)}updateSalesOrder(e,i){return this.http.put(`${this.apiUrl+"/pv-api/sale_order/?sale_order_id="}${i}`,e)}deleteSalesOrder(e){return this.http.delete(`${this.apiUrl+"/pv-api/sale_order/?id="}${e}`)}getSalesEstimatefy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/estimate/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getSalesEstimate(){return this.http.get(this.apiUrl+"/pv-api/estimate/")}getSalesEstimateByUserId(e){return this.http.get(this.apiUrl+"/pv-api/estimate/?user_id="+e)}getSalesEstimateById(e){return this.http.get(`${this.apiUrl+"/pv-api/estimate/?id="}${e}`)}SalesEstimateIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/estimate/?id="}${e}`,i)}addSalesEstimate(e){return this.http.post(this.apiUrl+"/pv-api/estimate/",e)}updateSalesEstimate(e,i){return this.http.put(`${this.apiUrl+"/pv-api/estimate/?estimate_id="}${i}`,e)}deleteSalesEstimate(e){return this.http.delete(`${this.apiUrl+"/pv-api/estimate/?id="}${e}`)}getSalesBillfyWithProductId(e,i,a){let n=this.apiUrl+"/pv-api/sale_bill/";const t=new URLSearchParams;return t.append("financial_year",e),t.append("product_id",String(i)),t.append("start_date",a.s),t.append("end_date",a.e),this.http.get(n+(t.toString()?"?"+t.toString():""))}getSalesBillfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/sale_bill/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getSalesBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?id="}${e}`)}getSalesBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?user_id="}${e}`)}SalesBillIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/sale_bill/?id="}${e}`,i)}addSalesBill(e){return this.http.post(this.apiUrl+"/pv-api/sale_bill/",e)}updateSalesBill(e,i){return this.http.put(`${this.apiUrl+"/pv-api/sale_bill/?sale_bill_id="}${i}`,e)}deleteSalesBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/sale_bill/?id="}${e}`)}getSalesMaterialOutwardfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/material_outward/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getSalesMaterialOutward(){return this.http.get(this.apiUrl+"/pv-api/material_outward/")}getSalesMaterialOutwardById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_outward/?id="}${e}`)}SalesMaterialOutwardIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_outward/?id="}${e}`,i)}addSalesMaterialOutward(e){return this.http.post(this.apiUrl+"/pv-api/material_outward/",e)}updateSalesMaterialOutward(e,i){return this.http.put(`${this.apiUrl+"/pv-api/material_outward/?material_outward_id="}${i}`,e)}deleteSalesMaterialOutward(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_outward/?id="}${e}`)}getSaleReturnfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/sale_return/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getSaleReturn(){return this.http.get(this.apiUrl+"/pv-api/sale_return/")}getSaleReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/sale_return/?id="}${e}`)}SaleReturnIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/sale_return/?id="}${e}`,i)}addSaleReturn(e){return this.http.post(this.apiUrl+"/pv-api/sale_return/",e)}updateSaleReturn(e,i){return this.http.put(`${this.apiUrl+"/pv-api/sale_return/?sale_return_id="}${i}`,e)}deleteSaleReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/sale_return/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}filterVariant(e,i,a){let n=this.apiUrl+"/pv-api/sales_product_filter/";const t=[];return e&&t.push(`category=${e}`),i&&t.push(`subcategory=${i}`),a&&t.push(`search=${a}`),t.length>0&&(n+="?"+t.join("&")),this.http.get(n)}getSaleOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleOrder")}getSaleBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleBill")}getSaleReturnPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleReturn")}getEstimatePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=Estimate")}getMaterialOutwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialOutward")}getAdvanceBookingPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=AdvanceBooking")}getUser(e){return this.http.get(this.apiUrl+"/pv-api/contact-user/?search="+e)}getAdvanceBookingfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/advance_booking/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getAdvanceBooking(){return this.http.get(this.apiUrl+"/pv-api/advance_booking/")}getAdvanceBookingById(e){return this.http.get(`${this.apiUrl+"/pv-api/advance_booking/?id="}${e}`)}AdvanceBookingIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/advance_booking/?id="}${e}`,i)}addAdvanceBooking(e){return this.http.post(this.apiUrl+"/pv-api/advance_booking/",e)}updateAdvanceBooking(e,i){return this.http.put(`${this.apiUrl+"/pv-api/advance_booking/?id="}${i}`,e)}deleteAdvanceBooking(e){return this.http.delete(`${this.apiUrl+"/pv-api/advance_booking/?id="}${e}`)}getDelivryChallanFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/delivery_challan/";const n=[];if(e&&n.push(`financial_year=${e}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),n.push(`branch=${t}`)}return n.length>0&&(a+="?"+n.join("&")),this.http.get(a)}getDelivryChallan(){return this.http.get(this.apiUrl+"/pv-api/delivery_challan/")}getDelivryChallanById(e){return this.http.get(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${e}`)}DelivryChallanIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${e}`,i)}addDelivryChallan(e){return this.http.post(this.apiUrl+"/pv-api/delivery_challan/",e)}updateDelivryChallan(e,i){return this.http.put(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${i}`,e)}deleteDelivryChallan(e){return this.http.delete(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${e}`)}advanceBookingStatusUpdate(e){return this.http.post(this.apiUrl+"/pv-api/advance_booking_status_update/",e)}deliveryChallanStatusUpdate(e){return this.http.post(this.apiUrl+"/pv-api/delivery_challan_status_update/",e)}}return m.\u0275fac=function(e){return new(e||m)(S.LFG(h.eN))},m.\u0275prov=S.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},25137:(M,b,c)=>{c.r(b),c.d(b,{StockVerificationModule:()=>ct});var y=c(36895),S=c(4392),h=c(24006),U=c(68675),m=c(54004),$=c(96166),e=c(12983),i=c.n(e),a=c(80574),n=c(94327),t=c(94650),C=c(97185),I=c(71071),D=c(53506),N=c(42917),V=c(80927),J=c(87719),E=c(72170),q=c(43443),w=c(54333),T=c(47957),Z=c(3238),x=c(59549),O=c(44144),A=c(99602),F=c(54040);function R(s,f){if(1&s){const r=t.EpF();t.TgZ(0,"a",61)(1,"input",62,63),t.NdJ("change",function(o){const d=t.CHM(r).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(d.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",64),t.NdJ("click",function(o){t.CHM(r);const p=t.oxw(2);return t.KtG(p.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&s){const r=f.$implicit,l=f.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",r.id)("checked",o.selectData.includes(r.id))("id","checkboxCat-"+l),t.xp6(2),t.Q6J("for","checkboxCat-"+l),t.xp6(1),t.Oqu(r.title)}}function Y(s,f){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const r=t.oxw(2);t.xp6(1),t.Oqu(r.selectData.length+" Selected")}}const Q=function(){return{standalone:!0}};function j(s,f){if(1&s){const r=t.EpF();t.TgZ(0,"div",54)(1,"div",55)(2,"button",56),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",57)(5,"li")(6,"input",58),t.NdJ("ngModelChange",function(o){t.CHM(r);const p=t.oxw();return t.KtG(p.searchBranch=o)})("ngModelChange",function(){t.CHM(r);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,R,5,5,"a",59),t.qZA()()(),t.TgZ(9,"div",60),t.YNc(10,Y,2,1,"span",28),t.qZA()()}if(2&s){const r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.searchBranch)("ngModelOptions",t.DdM(4,Q)),t.xp6(2),t.Q6J("ngForOf",r.filteredBranchList),t.xp6(2),t.Q6J("ngIf",r.selectData.length>0)}}function H(s,f){if(1&s){const r=t.EpF();t.TgZ(0,"mat-option",67),t.NdJ("onSelectionChange",function(){t.CHM(r);const o=t.oxw().$implicit,p=t.oxw(2);return t.KtG(p.oncheckVariant(null==o?null:o.id))}),t._uU(1),t.qZA()}if(2&s){const r=t.oxw().$implicit;t.Q6J("value",(null==r?null:r.product_title)+" "+(null==r?null:r.variant_name)),t.xp6(1),t.hij(" ",(null==r?null:r.product_title)+" "+(null==r?null:r.variant_name)," ")}}function z(s,f){if(1&s&&(t.ynx(0),t.YNc(1,H,2,2,"mat-option",66),t.BQk()),2&s){const r=f.$implicit;t.xp6(1),t.Q6J("ngIf",1==r.is_active)}}function K(s,f){if(1&s&&(t.ynx(0),t.YNc(1,z,2,1,"ng-container",65),t.BQk()),2&s){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.variantList)}}function G(s,f){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&s){const r=f.$implicit,l=f.index;t.xp6(2),t.Oqu(l+1+"."),t.xp6(2),t.Oqu(null==r||null==r.barcode?null:r.barcode.variant_name),t.xp6(2),t.Oqu(null==r||null==r.barcode?null:r.barcode.sku),t.xp6(2),t.Oqu(null==r?null:r.item_code),t.xp6(2),t.Oqu(r.item_name),t.xp6(2),t.Oqu(r.system_qty),t.xp6(2),t.Oqu(r.physical_qty),t.xp6(2),t.Oqu(r.loss_qty)}}const W=function(s,f){return{itemsPerPage:s,currentPage:f}};function X(s,f){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,G,17,8,"tr",65),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.stockAlertList,r.key,r.reverse),t.WLB(8,W,r.itemsPerPage,r.p)))}}function tt(s,f){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",68)(3,"p",69),t._uU(4,"Data not available"),t.qZA()()()())}const et=[{path:"",component:(()=>{class s{constructor(r,l,o,p,d,g,v,k,u,_,pt){this.router=r,this.fb=l,this.toastr=o,this.transactionService=p,this.purchaseService=d,this.cs=g,this.datepipe=v,this.coreService=k,this.reportService=u,this.saleService=_,this.commonService=pt,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new h.NI(""),this.categoryControl=new h.NI(""),this.subCategoryControl=new h.NI(""),this.itemCodeControl=new h.NI(""),this.supplierControl=new h.NI(""),this.productControl=new h.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let u=localStorage.getItem("financialYear");console.warn(JSON.parse(u));let _=JSON.parse(u);this.fyID=_}this.financialYear=localStorage.getItem("financialYear");const{minDate:r,maxDate:l}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=r,this.maxDate=l,this.cs.userDetails$.subscribe(u=>{this.isAdmin="admin"==u.role,this.getBranch()}),this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const o=new Date,g=(o.getMonth(),o.getFullYear(),new Date(o));g.setDate(o.getDate()-14);const v=this.formatDate(g),k=this.formatDate(o);this.stockAlertform=new h.cw({start:new h.NI(v,this.commonService.dateRangeValidator(this.financialYear)),end:new h.NI(k,this.commonService.dateRangeValidator(this.financialYear)),category:new h.NI,subcategory:new h.NI(""),brand:new h.NI(""),product:new h.NI(""),variant:new h.NI("")}),this.commonService.validateAndClearDates(this.stockAlertform,this.minDate,this.maxDate),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,U.O)(""),(0,m.U)(u=>{const _="string"==typeof u?u:u?.title;return _?this._filter(_):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,U.O)(""),(0,m.U)(u=>{const _="string"==typeof u?u:u?.title;return _?this._filter2(_):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,U.O)(""),(0,m.U)(u=>{const _="string"==typeof u?u:u?.title;return _?this._filter3(_):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,U.O)(""),(0,m.U)(u=>{const _="string"==typeof u?u:u?.title;return _?this._filter5(_):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,m.U)(u=>{const _="string"==typeof u?u:u?.title;return _?this._filter6(_):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(r){return this.datepipe.transform(r,"yyyy-MM-dd")||""}_filter(r){const l=r?r.toLowerCase():"";return console.log(l),this.brandList.filter(o=>o?.title&&o.title.toLowerCase().includes(l))}displayFn(r){return r&&r?.title?r?.title:""}_filter2(r){const l=r?r.toLowerCase():"";return this.categoryList.filter(o=>o?.title&&o.title.toLowerCase().includes(l))}displayFn2(r){return r&&r?.title?r?.title:""}_filter3(r){const l=r?r.toLowerCase():"";return console.log(l),this.subCategoryList.filter(o=>o?.title&&o.title.toLowerCase().includes(l))}displayFn3(r){return r&&r?.title?r?.title:""}_filter4(r){const l=r?r.toLowerCase():"";return console.log(l),this.productList.filter(o=>o?.item_code&&o.item_code.toLowerCase().includes(l))}displayFn4(r){return r&&r?.item_code?r?.item_code:""}_filter6(r){const l=r?r.toLowerCase():"";return console.log(l),this.productList.filter(o=>o?.title&&o.title.toLowerCase().includes(l)||o?.name&&o.name.toLowerCase().includes(l))}displayFn6(r){return r&&r?.title||r?.name?r?.title||r?.name:""}_filter5(r){const l=r?r.toLowerCase():"";return console.log(l),this.productList.filter(o=>o?.title&&o.title.toLowerCase().includes(l)||o?.name&&o.name.toLowerCase().includes(l))}displayFn5(r){return r&&r?.title||r?.name?r?.title||r?.name:""}getProduct(){this.coreService.getProducts().subscribe(r=>{console.log(r,"user"),this.productList=r})}search(){if(""===this.titlee)this.getStockAlert();else{const r=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(l=>{const o=l?.user?.party_name.toLocaleLowerCase(),p=l?.payment_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(r)&&!p.includes(r))})}}sort(r){this.key=r,this.reverse=!this.reverse}selectAll(r){this.countryList.forEach(r?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(r,l,o){const p=(r-1)*l;return`Showing ${p+1}\u2013${Math.min(p+l-1,o-1)+1} of ${o} results`}getStockAlert(){console.log(this.brand),this.reportService.getStockVerification(this.startDate,this.endDate,this.variant,this.fyID,this.selectData).subscribe(r=>{console.log(r),this.stockAlert=r,this.stockAlertList=r})}oncheckBrand(r){console.log(r),this.dataId=r,this.stockAlertform.patchValue({brand:this.dataId}),console.warn(this.stockAlertform.value),this.brand=this.stockAlertform.value?.brand,this?.getStockAlert()}oncheckCategory(r){console.log(r),this.dataId=r,this.stockAlertform.patchValue({category:this.dataId}),console.warn(this.stockAlertform.value),this.category=this.stockAlertform.value?.category,this?.getStockAlert()}oncheckSubCategory(r){console.log(r),this.stockAlertform.patchValue({subcategory:r}),console.warn(this.stockAlertform.value),this.subcategory=this.stockAlertform.value?.subcategory,this?.getStockAlert()}oncheckproduct(r){this.stockAlertform.patchValue({product:r}),console.warn(this.stockAlertform.value),this.product=this.stockAlertform.value?.product,this?.getStockAlert()}oncheckVariant(r){this.stockAlertform.patchValue({variant:r}),console.warn(this.stockAlertform.value),this.variant=this.stockAlertform.value?.variant,this?.getStockAlert()}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const r=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),l=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(r),console.log(l),this.startDate=r,this.endDate=l,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(r=>{console.log(r),this.brandList=r})}getCategory(){this.coreService.getCategory().subscribe(r=>{console.log(r),this.categoryList=r})}getSubcategory(){this.coreService.getSubcategory().subscribe(r=>{console.log(r),this.subCategoryList=r})}getVariant(r){this.searchLength=r,this.isSearch=!0,r.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",r).subscribe(l=>{console.log(l),this.isSearch=!1,this.variantList=l,console.log(this.variantList)})}generatePDFAgain(){const r=new $.default,p=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;r.setFontSize(12),r.setTextColor(33,43,54),r.text("PV",86,5),r.text("Stock Verifcation Report",82,10),r.text(d,10,18),r.text(p,10,22),r.text("",10,25),i()(r,{head:[["#","VariantName","Sku","ItemCode","ItemName","System Qty","Physical Qty","Loss Qty"]],body:this.stockAlertList.map((g,v)=>[v+1,g.barcode.variant_name,g.barcode.sku,g.item_code,g.item_name,g.system_qty,g.physical_qty,g.loss_qty]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),r.save("Stock _Verfication .pdf")}getVisibleDataFromTable(){const r=[],l=document.getElementById("mytable");if(l){const o=l.querySelector("thead tr");if(o){const d=[];o.querySelectorAll("th").forEach(g=>{const v=g.textContent?.trim();v&&"Is Active"!==v&&"Action"!==v&&d.push(v)}),r.push(d)}l.querySelectorAll("tbody tr").forEach(d=>{const g=[];d.querySelectorAll("td").forEach(v=>{const k=v.textContent?.trim();k&&g.push(k)}),r.push(g)})}return r}exportToExcel(){const r=this.getVisibleDataFromTable(),l=a.P6.aoa_to_sheet(r),o=a.P6.book_new();a.P6.book_append_sheet(o,l,"Sheet1");const p=a.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(d,"Stockverification.xlsx")}printTable(){const r=document.getElementById("mytable");if(!r)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const p=o.outerHTML,g=r.cloneNode(!0).outerHTML,k="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+g,u=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=k,window.print(),document.body.innerHTML=u}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.stockAlertList?.length)}getBranch(){this.reportService.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,l){if(l)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(p=>p==r);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return s.\u0275fac=function(r){return new(r||s)(t.Y36(S.F0),t.Y36(h.qu),t.Y36(C._W),t.Y36(I.p),t.Y36(D.x),t.Y36(N.J),t.Y36(y.uU),t.Y36(V.p),t.Y36(J.r),t.Y36(E.M),t.Y36(q.R))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-stock-verification"]],decls:104,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-6","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(r,l){if(1&r){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Verification Report "),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock-verification "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,j,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return l.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return l.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Select Variant"),t.qZA(),t.TgZ(36,"input",26),t.NdJ("input",function(d){return l.getVariant(d.target.value)}),t.qZA(),t.TgZ(37,"mat-autocomplete",null,27),t.YNc(39,K,2,1,"ng-container",28),t.qZA()()()()()(),t.TgZ(40,"div",29)(41,"ul")(42,"li")(43,"a",30),t.NdJ("click",function(){return l.generatePDFAgain()}),t._UZ(44,"img",31),t.qZA()(),t.TgZ(45,"li")(46,"a",32),t.NdJ("click",function(){return l.exportToExcel()}),t._UZ(47,"img",33),t.qZA()(),t.TgZ(48,"li")(49,"a",34),t.NdJ("click",function(){return l.printTable()}),t._UZ(50,"img",35),t.qZA()()()()(),t.TgZ(51,"div",36)(52,"table",37)(53,"thead")(54,"tr")(55,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(56,"#"),t._UZ(57,"i",39),t.qZA(),t.TgZ(58,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(59,"VariantName "),t._UZ(60,"i",39),t.qZA(),t.TgZ(61,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(62,"Sku "),t._UZ(63,"i",39),t.qZA(),t.TgZ(64,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(65,"ItemCode "),t._UZ(66,"i",39),t.qZA(),t.TgZ(67,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(68,"ItemName "),t._UZ(69,"i",39),t.qZA(),t.TgZ(70,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(71,"System Qty "),t._UZ(72,"i",39),t.qZA(),t.TgZ(73,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(74,"Physical Qty "),t._UZ(75,"i",39),t.qZA(),t.TgZ(76,"th",38),t.NdJ("click",function(){return l.sort("id")}),t._uU(77,"Loss Qty "),t._UZ(78,"i",39),t.qZA()()(),t.YNc(79,X,4,11,"tbody",28),t.YNc(80,tt,5,0,"tbody",28),t.qZA(),t.TgZ(81,"div",6)(82,"div",40)(83,"div",41),t._uU(84," Show per page "),t.TgZ(85,"select",42,43),t.NdJ("ngModelChange",function(d){return l.itemsPerPage=d})("change",function(){t.CHM(o);const d=t.MAs(86);return t.KtG(l.changePg(d.value))}),t.TgZ(87,"option",44),t._uU(88,"10"),t.qZA(),t.TgZ(89,"option",45),t._uU(90,"20"),t.qZA(),t.TgZ(91,"option",46),t._uU(92,"30"),t.qZA(),t.TgZ(93,"option",47),t._uU(94,"50"),t.qZA(),t.TgZ(95,"option",48),t._uU(96,"100"),t.qZA(),t.TgZ(97,"option",49),t._uU(98,"All"),t.qZA()()()(),t.TgZ(99,"div",50)(100,"div",51)(101,"pagination-controls",52),t.NdJ("pageChange",function(d){return l.p=d}),t.qZA(),t.TgZ(102,"div",53),t._uU(103),t.qZA()()()()()()()()()}if(2&r){const o=t.MAs(31),p=t.MAs(38);t.xp6(11),t.Q6J("ngIf",l.isAdmin),t.xp6(5),t.Q6J("formGroup",l.stockAlertform),t.xp6(7),t.Q6J("formGroup",l.stockAlertform)("rangePicker",o)("min",l.minDate)("max",l.maxDate),t.xp6(6),t.Q6J("for",o),t.xp6(7),t.Q6J("formControl",l.productControl)("matAutocomplete",p),t.xp6(3),t.Q6J("ngIf",(null==l.productControl.value?null:l.productControl.value.length)>=1&&(null==l.productControl.value?null:l.productControl.value.length)>0),t.xp6(40),t.Q6J("ngIf",(null==l.stockAlertList?null:l.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==l.stockAlertList?null:l.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",l.itemsPerPage),t.xp6(18),t.lnq(" Showing ",l.itemsPerPage," to ",null==l.stockAlertList?null:l.stockAlertList.length," of ",l.p," entries ")}},dependencies:[y.sg,y.O5,h._Y,h.YN,h.Kr,h.Fj,h.EJ,h.JJ,h.JL,h.On,h.oH,h.sg,h.u,w.LS,T.XC,T.ZL,Z.ey,x.KE,x.R9,O.Nt,A.nW,A.wx,A.zY,A.By,A._g,w._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})()}];let it=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[S.Bz.forChild(et),S.Bz]}),s})();var rt=c(3056),at=c(87078),L=c(86323),P=c(92642),lt=c(95113),nt=c(64155),ot=c(6205),B=c(8468);const st={User:P.n5m,UserCheck:P.uS3,FileText:P.acj,File:P.$BE};let ct=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[y.uU],imports:[y.ez,it,B.I,h.u5,h.UX,T.Bb,x.lN,O.c,rt.ZQ,at.T,A.FA,x.lN,Z.XK,lt.LD,nt.vQ,B.I,ot.X,L.p.pick(st),L.p]}),s})()}}]);