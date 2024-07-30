"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6063],{53506:(Z,f,d)=>{d.d(f,{x:()=>x});var u=d(92340),_=d(94650),M=d(80529);let x=(()=>{class m{constructor(n){this.http=n,this.apiUrl=`${u.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(n){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+n)}getPurchaseFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let l=this.apiUrl+"/pv-api/purchase_order/";const s=[];if(n&&s.push(`financial_year=${n}`),i&&i.length>0){const o=JSON.stringify(i);console.log(o),console.log(o?.length),s.push(`branch=${o}`)}return s.length>0&&(l+="?"+s.join("&")),this.http.get(l)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}updatePurchase(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let l=this.apiUrl+"/pv-api/material_inward/";const s=[];if(n&&s.push(`financial_year=${n}`),i&&i.length>0){const o=JSON.stringify(i);console.log(o),console.log(o?.length),s.push(`branch=${o}`)}return s.length>0&&(l+="?"+s.join("&")),this.http.get(l)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}MaterialIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}updateMaterial(n,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBillFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let l=this.apiUrl+"/pv-api/purchase_bill/";const s=[];if(n&&s.push(`financial_year=${n}`),i&&i.length>0){const o=JSON.stringify(i);console.log(o),console.log(o?.length),s.push(`branch=${o}`)}return s.length>0&&(l+="?"+s.join("&")),this.http.get(l)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}PurchaseBillIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}updatePurchaseBill(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(n,i){console.log(i,"branch"),console.log(i.length,"branch");let l=this.apiUrl+"/pv-api/debit_note/";const s=[];if(n&&s.push(`financial_year=${n}`),i&&i.length>0){const o=JSON.stringify(i);console.log(o),console.log(o?.length),s.push(`branch=${o}`)}return s.length>0&&(l+="?"+s.join("&")),this.http.get(l)}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}updateDebitNotes(n,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(n,i){console.log(i,"branch"),console.log(i.length,"branch");let l=this.apiUrl+"/pv-api/purchase_return/";const s=[];if(n&&s.push(`financial_year=${n}`),i&&i.length>0){const o=JSON.stringify(i);console.log(o),console.log(o?.length),s.push(`branch=${o}`)}return s.length>0&&(l+="?"+s.join("&")),this.http.get(l)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}updatePurchaseReturn(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,i,l,s){let o=this.apiUrl+"/pv-api/purchase_product_filter/";const g=[];return n&&g.push(`supplier=${n}`),i&&g.push(`category=${i}`),l&&g.push(`subcategory=${l}`),s&&g.push(`search=${s}`),g.length>0&&(o+="?"+g.join("&")),this.http.get(o)}}return m.\u0275fac=function(n){return new(n||m)(_.LFG(M.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},56063:(Z,f,d)=>{d.r(f),d.d(f,{DetailsMaterialInwardModule:()=>F});var u=d(36895),_=d(4392),M=d(4159),x=d.n(M),m=d(96166),t=d(94650),n=d(53506),i=d(42917),l=d(3848),s=d(97392),o=d(24006),g=d(54333),v=d(54040);function P(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"button",68),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function C(a,c){1&a&&(t.TgZ(0,"button",69),t._UZ(1,"span",70),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function b(a,c){if(1&a&&(t.TgZ(0,"div")(1,"p",71),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&a){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.email," ")}}function y(a,c){if(1&a&&(t.TgZ(0,"div")(1,"p",71),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&a){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.email," ")}}function O(a,c){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&a){const e=c.$implicit,r=c.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.po_qty),t.xp6(2),t.Oqu(null==e?null:e.mrp)}}const D=function(a,c,e){return{"bg-lightgreen":a,"bg-lightred":c,"bg-lightyellow":e}};function A(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,P,2,0,"button",22),t.YNc(8,C,3,0,"button",23),t.qZA(),t.TgZ(9,"p",24)(10,"button",25),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",26)(13,"div",27)(14,"div",28)(15,"div",29)(16,"div",30)(17,"div",31)(18,"div",32)(19,"div",33)(20,"div",34),t._UZ(21,"img",35),t.TgZ(22,"p",36),t._uU(23),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"span"),t._uU(30,"Address"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",37)(35,"div",38)(36,"div",39)(37,"p"),t._uU(38),t.qZA(),t.TgZ(39,"h1",40),t._uU(40,"Invoice"),t.qZA(),t.TgZ(41,"p"),t._uU(42),t.ALo(43,"date"),t.qZA(),t.TgZ(44,"p"),t._uU(45),t.qZA(),t.TgZ(46,"p"),t._uU(47),t.ALo(48,"date"),t.qZA()()()()()()()(),t.TgZ(49,"div",4)(50,"p",41),t._uU(51,"Material Inward Details"),t.qZA()(),t.TgZ(52,"div",42)(53,"div",29)(54,"div",30)(55,"div",43),t.YNc(56,b,11,4,"div",44),t.YNc(57,y,11,4,"div",44),t.qZA()()()(),t.TgZ(58,"div",45)(59,"div",29)(60,"div",30)(61,"div",46)(62,"table",47)(63,"thead")(64,"tr")(65,"th",48),t._uU(66,"Order No. "),t.qZA(),t.TgZ(67,"th",48),t._uU(68,"Supplier Name"),t.qZA(),t.TgZ(69,"th",48),t._uU(70,"Purchase Order"),t.qZA(),t.TgZ(71,"th",48),t._uU(72,"Date"),t.qZA(),t.TgZ(73,"th",48),t._uU(74,"PO Date"),t.qZA(),t.TgZ(75,"th",48),t._uU(76,"Recieved By "),t.qZA(),t.TgZ(77,"th",48),t._uU(78,"Shipping Note"),t.qZA(),t.TgZ(79,"th",48),t._uU(80,"Product Type "),t.qZA()()(),t.TgZ(81,"tbody")(82,"tr")(83,"td",49),t._uU(84),t.qZA(),t.TgZ(85,"td",49),t._uU(86),t.qZA(),t.TgZ(87,"td",49),t._uU(88),t.qZA(),t.TgZ(89,"td",49),t._uU(90),t.ALo(91,"date"),t.qZA(),t.TgZ(92,"td",49),t._uU(93),t.ALo(94,"date"),t.qZA(),t.TgZ(95,"td",49),t._uU(96),t.qZA(),t.TgZ(97,"td",49),t._uU(98),t.qZA(),t.TgZ(99,"td",49),t._uU(100),t.qZA()()()()()()()(),t.TgZ(101,"div",50)(102,"div",29)(103,"div",4)(104,"p",51),t._uU(105,"Product Details"),t.qZA()(),t.TgZ(106,"div",52)(107,"div")(108,"table")(109,"thead")(110,"tr")(111,"th"),t._uU(112,"#"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"Barcode/SKU"),t.qZA(),t.TgZ(115,"th"),t._uU(116,"Product Name"),t.qZA(),t.TgZ(117,"th"),t._uU(118,"QTY"),t.qZA(),t.TgZ(119,"th"),t._uU(120,"PO QTY"),t.qZA(),t.TgZ(121,"th"),t._uU(122,"Mrp"),t.qZA()()(),t.TgZ(123,"tbody"),t.YNc(124,O,13,6,"tr",53),t.TgZ(125,"tr",54)(126,"td",55)(127,"strong"),t._uU(128,"Total"),t.qZA()(),t.TgZ(129,"td",56),t._uU(130),t.qZA(),t.TgZ(131,"td",56),t._uU(132),t.qZA(),t.TgZ(133,"td",56),t._uU(134),t.qZA()()()()()(),t.TgZ(135,"div",30)(136,"p"),t._uU(137,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(138,"br"),t._uU(139," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(140,"div",57)(141,"div",58)(142,"div",59)(143,"strong"),t._uU(144,"Note:"),t.qZA(),t.TgZ(145,"div",60)(146,"p"),t._uU(147),t.qZA()()()(),t.TgZ(148,"div",61)(149,"div",62)(150,"div",63)(151,"ul")(152,"li",64)(153,"h4"),t._uU(154,"Total"),t.qZA(),t.TgZ(155,"h5"),t._uU(156),t.ALo(157,"currency"),t.qZA()()()()()()(),t.TgZ(158,"div",65)(159,"p"),t._uU(160,"Status : "),t.TgZ(161,"span",66),t._uU(162),t.qZA()()(),t.TgZ(163,"div",67)(164,"p"),t._uU(165,"Please make cheques payable to "),t.TgZ(166,"span"),t._uU(167,"PV LTD."),t.qZA()()()()()()()()()}if(2&a){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(15),t.hij("GST ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij("Company Name: ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij("Financial Year: ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year," "),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij("Phone: ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(5),t.hij("GST ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.gstin,""),t.xp6(4),t.hij("Invoice Date: ",t.xi3(43,29,null==e.materialDetail?null:e.materialDetail.material_inward_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij("Invoice NO: ",null==e.materialDetail?null:e.materialDetail.material_inward_no,""),t.xp6(2),t.hij("Invoice Date: ",t.xi3(48,32,null==e.materialDetail?null:e.materialDetail.po_date,"dd-MMMM-yyyy"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(27),t.hij(" ",null==e.materialDetail?null:e.materialDetail.material_inward_no,""),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.company_name,""),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.purchase_order?null:e.materialDetail.purchase_order.order_no,""),t.xp6(2),t.hij(" ",t.xi3(91,35,null==e.materialDetail?null:e.materialDetail.material_inward_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.Oqu(t.xi3(94,38,null==e.materialDetail?null:e.materialDetail.po_date,"dd-MMMM-yyyy")),t.xp6(3),t.hij("",null==e.materialDetail?null:e.materialDetail.recieved_by," "),t.xp6(2),t.hij(" ",null==e.materialDetail?null:e.materialDetail.shipping_note,""),t.xp6(2),t.hij("",null==e.materialDetail?null:e.materialDetail.product_type," "),t.xp6(24),t.Q6J("ngForOf",null==e.materialDetail?null:e.materialDetail.cart),t.xp6(6),t.Oqu(e.totalPurchaseRate),t.xp6(2),t.hij("",e.totalLandingCost," "),t.xp6(2),t.Oqu(e.totalMrp),t.xp6(13),t.Oqu(null==e.materialDetail?null:e.materialDetail.note),t.xp6(9),t.hij("",t.xi3(157,41,null==e.materialDetail?null:e.materialDetail.total.toFixed(2),"INR")," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(44,D,"Completed"===(null==e.materialDetail?null:e.materialDetail.status),"Inprogress"===(null==e.materialDetail?null:e.materialDetail.status),"Draft"===(null==e.materialDetail?null:e.materialDetail.status))),t.xp6(1),t.Oqu(null==e.materialDetail?null:e.materialDetail.status)}}function U(a,c){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&a){const e=c.$implicit,r=c.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const T=function(a,c){return{itemsPerPage:a,currentPage:c}};function w(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,U,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76,77),t.NdJ("ngModelChange",function(p){t.CHM(e);const h=t.oxw();return t.KtG(h.itemsPerPage=p)})("change",function(){t.CHM(e);const p=t.MAs(27),h=t.oxw();return t.KtG(h.changePg(p.value))}),t.TgZ(28,"option",78),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",79),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",80),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",81),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",82),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",83),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",84)(41,"div",85)(42,"pagination-controls",86),t.NdJ("pageChange",function(p){t.CHM(e);const h=t.oxw();return t.KtG(h.p=p)}),t.qZA(),t.TgZ(43,"div",87),t._uU(44),t.qZA()()()()()()()()}if(2&a){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.materialDetail?null:e.materialDetail.logs,e.key,e.reverse),t.WLB(12,T,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.materialDetail||null==e.materialDetail.logs?null:e.materialDetail.logs.length," of ",e.p," entries")}}function I(a,c){1&a&&(t.TgZ(0,"div",56)(1,"span",88),t._uU(2,"Logs Not Available"),t.qZA()())}const B=[{path:"",component:(()=>{class a{constructor(e,r,p,h){this.Arout=e,this.purchaseService=r,this.location=p,this.companyService=h,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.pageSizee=10,this.itemsPerPagee=10,this.keyy="id",this.reversee=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.purchaseService.getMaterialById(this.id).subscribe(e=>{this.id==e.id&&(this.materialDetail=e,this.supplierAddress=e,console.log(this.supplierAddress),this.supplierAddress?.party?.address.map(r=>{"Billing"==r?.address_type?(this.selectedAddressBilling=r,console.log(this.selectedAddressBilling)):"Shipping"==r.address_type&&(this.selectedAddressShipping=r,console.log(this.selectedAddressShipping))}),this.materialDetail?.cart?.forEach(r=>{this.totalPurchase.push(r?.qty),this.totalPurchaseRate=0,this?.totalPurchase?.forEach(p=>{this.totalPurchaseRate+=p}),this.totalmrp.push(r?.mrp),this.totalMrp=0,this?.totalmrp?.forEach(p=>{this.totalMrp+=p}),this.totallanding.push(r?.po_qty),this.totalLandingCost=0,this?.totallanding?.forEach(p=>{this.totalLandingCost+=p})}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&x()(e).then(r=>{this.loaderPdf=!1;const p=r.toDataURL("image/png"),h=new m.jsPDF("p","mm","a4"),J=h.internal.pageSize.getWidth(),z=h.internal.pageSize.getHeight();h.addImage(p,"JPEG",0,0,J,z),h.save("MaterialInward.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,r=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=r}sort(e){this.key=e,this.reverse=!this.reverse}sortt(e){this.keyy=e,this.reversee=!this.reversee}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.materialDetail?.logs?.length)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(_.gz),t.Y36(n.x),t.Y36(u.Ye),t.Y36(i.J))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-material-inward"]],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Material Inward"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"headingg"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return r.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Material Inward "),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Material Inward"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Material Inward "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,A,168,48,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,w,45,15,"div",15),t.YNc(21,I,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//purchase/editmaterial-Inward/",null==r.materialDetail?null:r.materialDetail.id,""),t.xp6(6),t.Q6J("ngIf",r.materialDetail),t.xp6(2),t.Q6J("ngIf",(null==r.materialDetail||null==r.materialDetail.logs?null:r.materialDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==r.materialDetail||null==r.materialDetail.logs?null:r.materialDetail.logs.length)))},dependencies:[u.mk,u.sg,u.O5,_.yS,l.SP,l.uX,s.Hw,o.YN,o.Kr,o.EJ,o.JJ,o.On,g.LS,u.H9,u.uU,g._s,v.T],styles:["table[_ngcontent-%COMP%]{width:100%;height:100px;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),a})(),canActivate:[d(30597).l],data:{allowedRoles:["view_materialinward"]}}];let $=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[_.Bz.forChild(B),_.Bz]}),a})();var N=d(95113),j=d(56709),E=d(90455),L=d(8468);let F=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,$,l.Nh,s.Ps,N.LD,j.p9,E.rP,o.u5,L.I]}),a})()},30597:(Z,f,d)=>{d.d(f,{l:()=>t});var u=d(94650),_=d(4392),M=d(97185),x=d(42917),m=d(80927);let t=(()=>{class n{constructor(l,s,o,g,v){this.router=l,this.Arout=s,this.toastr=o,this.profileService=g,this.coreService=v}canActivate(l,s){const o=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),o){const g=l.data.allowedRoles;console.log(g,"allowedRoles");const v=o.some(P=>g.includes(P.codename));if(console.log(v),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const C=P?.permission,b=this.profileService.getUserDetails();(!b||b.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(u.LFG(_.F0),u.LFG(_.gz),u.LFG(M._W),u.LFG(x.J),u.LFG(m.p))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);