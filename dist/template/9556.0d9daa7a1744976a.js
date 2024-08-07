"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9556],{53506:(M,f,p)=>{p.d(f,{x:()=>x});var d=p(92340),_=p(94650),b=p(80529);let x=(()=>{class m{constructor(n){this.http=n,this.apiUrl=`${d.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(n){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+n)}getPurchaseFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const o=[];if(n&&o.push(`financial_year=${n}`),l&&l.length>0){const s=JSON.stringify(l);console.log(s),console.log(s?.length),o.push(`branch=${s}`)}return o.length>0&&(r+="?"+o.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(n){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+n)}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,l)}updatePurchase(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${l}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const o=[];if(n&&o.push(`financial_year=${n}`),l&&l.length>0){const s=JSON.stringify(l);console.log(s),console.log(s?.length),o.push(`branch=${s}`)}return o.length>0&&(r+="?"+o.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getMaterialByUserId(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${n}`)}MaterialIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,l)}updateMaterial(n,l){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${l}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBillFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const o=[];if(n&&o.push(`financial_year=${n}`),l&&l.length>0){const s=JSON.stringify(l);console.log(s),console.log(s?.length),o.push(`branch=${s}`)}return o.length>0&&(r+="?"+o.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getPurchaseBillByUserId(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${n}`)}PurchaseBillIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,l)}updatePurchaseBill(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${l}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const o=[];if(n&&o.push(`financial_year=${n}`),l&&l.length>0){const s=JSON.stringify(l);console.log(s),console.log(s?.length),o.push(`branch=${s}`)}return o.length>0&&(r+="?"+o.join("&")),this.http.get(r)}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,l)}updateDebitNotes(n,l){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${l}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const o=[];if(n&&o.push(`financial_year=${n}`),l&&l.length>0){const s=JSON.stringify(l);console.log(s),console.log(s?.length),o.push(`branch=${s}`)}return o.length>0&&(r+="?"+o.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,l)}updatePurchaseReturn(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${l}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,l,r,o){let s=this.apiUrl+"/pv-api/purchase_product_filter/";const g=[];return n&&g.push(`supplier=${n}`),l&&g.push(`category=${l}`),r&&g.push(`subcategory=${r}`),o&&g.push(`search=${o}`),g.length>0&&(s+="?"+g.join("&")),this.http.get(s)}}return m.\u0275fac=function(n){return new(n||m)(_.LFG(b.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},19556:(M,f,p)=>{p.r(f),p.d(f,{DetailsDebitnotesModule:()=>J});var d=p(36895),_=p(4392),b=p(4159),x=p.n(b),m=p(96166),t=p(94650),n=p(42917),l=p(53506),r=p(3848),o=p(97392),s=p(24006),g=p(54333),v=p(54040);function P(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",65),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function D(i,u){1&i&&(t.TgZ(0,"button",66),t._UZ(1,"span",67),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function Z(i,u){if(1&i&&(t.TgZ(0,"div")(1,"p",68),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",69),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.email," ")}}function O(i,u){if(1&i&&(t.TgZ(0,"div")(1,"p",68),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",69),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br")(8,"br"),t._uU(9),t._UZ(10,"br"),t._uU(11),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(3),t.hij(" Phone: ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.email," ")}}function U(i,u){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&i){const e=u.$implicit;t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.unit_cost),t.xp6(2),t.Oqu(null==e?null:e.mrp),t.xp6(2),t.Oqu((null==e?null:e.deduction)??0),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.landing_cost),t.xp6(2),t.Oqu(null==e?null:e.total)}}const y=function(i,u,e){return{"bg-lightgreen":i,"bg-lightred":u,"bg-lightyellow":e}};function A(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,P,2,0,"button",22),t.YNc(8,D,3,0,"button",23),t.qZA(),t.TgZ(9,"p",24)(10,"button",25),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",26)(13,"div",27)(14,"div",28)(15,"div",29)(16,"div",30)(17,"div",31)(18,"div",32)(19,"div",33)(20,"div",34),t._UZ(21,"img",35),t.TgZ(22,"p",36),t._uU(23),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"span"),t._uU(30,"Address"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",37)(35,"div",38)(36,"div",39)(37,"p"),t._uU(38),t.qZA(),t.TgZ(39,"h1",40),t._uU(40,"Invoice"),t.qZA(),t.TgZ(41,"p"),t._uU(42),t.ALo(43,"date"),t.qZA(),t.TgZ(44,"p"),t._uU(45),t.qZA(),t.TgZ(46,"p"),t._uU(47),t.ALo(48,"date"),t.qZA()()()()()()()(),t.TgZ(49,"div",4)(50,"p",41),t._uU(51,"Purchase Return Details"),t.qZA()(),t.TgZ(52,"div",42)(53,"div",29)(54,"div",30)(55,"div",43),t.YNc(56,Z,11,4,"div",44),t.YNc(57,O,12,4,"div",44),t.qZA()()()(),t.TgZ(58,"div",45)(59,"div",29)(60,"div",30)(61,"div",46)(62,"table",47)(63,"thead")(64,"tr")(65,"th",48),t._uU(66,"Return No. "),t.qZA(),t.TgZ(67,"th",48),t._uU(68,"Supplier Name"),t.qZA(),t.TgZ(69,"th",48),t._uU(70,"Refrensh Bill No."),t.qZA(),t.TgZ(71,"th",48),t._uU(72,"Return Date"),t.qZA(),t.TgZ(73,"th",48),t._uU(74,"Reverse Charge"),t.qZA(),t.TgZ(75,"th",48),t._uU(76,"Purchase Bill"),t.qZA(),t.TgZ(77,"th",48),t._uU(78,"Reason"),t.qZA()()(),t.TgZ(79,"tbody")(80,"tr")(81,"td",49),t._uU(82),t.qZA(),t.TgZ(83,"td",49),t._uU(84),t.qZA(),t.TgZ(85,"td",49),t._uU(86),t.qZA(),t.TgZ(87,"td",49),t._uU(88),t.ALo(89,"date"),t.qZA(),t.TgZ(90,"td",49),t._uU(91),t.qZA(),t.TgZ(92,"td",49),t._uU(93),t.qZA(),t.TgZ(94,"td",49),t._uU(95),t.qZA()()()()()()()(),t.TgZ(96,"div",50)(97,"div",29)(98,"div",4)(99,"p",51),t._uU(100,"Product Details"),t.qZA()(),t.TgZ(101,"div",52)(102,"div")(103,"table")(104,"thead")(105,"tr")(106,"th"),t._uU(107,"Barcode/SKU"),t.qZA(),t.TgZ(108,"th"),t._uU(109,"Product Name"),t.qZA(),t.TgZ(110,"th"),t._uU(111,"QTY"),t.qZA(),t.TgZ(112,"th"),t._uU(113,"Cost Price"),t.qZA(),t.TgZ(114,"th"),t._uU(115,"Mrp"),t.qZA(),t.TgZ(116,"th"),t._uU(117,"Deduction"),t.qZA(),t.TgZ(118,"th"),t._uU(119,"Tax"),t.qZA(),t.TgZ(120,"th"),t._uU(121,"Landing Cost"),t.qZA(),t.TgZ(122,"th"),t._uU(123,"Total"),t.qZA()()(),t.TgZ(124,"tbody"),t.YNc(125,U,19,9,"tr",53),t.TgZ(126,"tr",54)(127,"td",55)(128,"strong"),t._uU(129,"Total"),t.qZA()(),t.TgZ(130,"td",56),t._uU(131),t.qZA(),t.TgZ(132,"td",56),t._uU(133),t.qZA(),t.TgZ(134,"td",56),t._uU(135),t.qZA(),t.TgZ(136,"td",56),t._uU(137),t.qZA(),t.TgZ(138,"td",56),t._uU(139),t.qZA(),t.TgZ(140,"td",56),t._uU(141),t.qZA(),t.TgZ(142,"td",56),t._uU(143),t.qZA()()()()()(),t.TgZ(144,"div",30)(145,"p"),t._uU(146,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(147,"br"),t._uU(148," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(149,"div",57),t._UZ(150,"div",58),t.TgZ(151,"div",58)(152,"div",59)(153,"div",60)(154,"ul")(155,"li",61)(156,"h4"),t._uU(157,"Sub Total"),t.qZA(),t.TgZ(158,"h5"),t._uU(159),t.ALo(160,"currency"),t.qZA()(),t.TgZ(161,"li",61)(162,"h4"),t._uU(163,"Round Off"),t.qZA(),t.TgZ(164,"h5"),t._uU(165),t.ALo(166,"currency"),t.qZA()(),t.TgZ(167,"li",61)(168,"h4"),t._uU(169,"Total"),t.qZA(),t.TgZ(170,"h5"),t._uU(171),t.ALo(172,"currency"),t.qZA()()()()()()(),t.TgZ(173,"div",62)(174,"p"),t._uU(175,"Status : "),t.TgZ(176,"span",63),t._uU(177),t.qZA()()(),t.TgZ(178,"div",64)(179,"p"),t._uU(180,"Please make cheques payable to "),t.TgZ(181,"span"),t._uU(182,"PV LTD."),t.qZA()()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(15),t.hij("GST ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij("Company Name: ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij("Financial Year: ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year,""),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij("Phone: ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(5),t.hij("GST ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.gstin,""),t.xp6(4),t.hij("Invoice Date: ",t.xi3(43,33,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd"),""),t.xp6(3),t.hij("Invoice NO: ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_no,""),t.xp6(2),t.hij("Invoice Date: ",t.xi3(48,36,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(25),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_no,""),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.company_name,""),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.refrence_bill_no,""),t.xp6(2),t.Oqu(t.xi3(89,39,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd")),t.xp6(3),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.reverse_charge,""),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.purchase_bill?null:e.purchaseBillDetail.purchase_bill.refrence_bill_no,""),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.reason,""),t.xp6(30),t.Q6J("ngForOf",null==e.purchaseBillDetail?null:e.purchaseBillDetail.cart),t.xp6(6),t.hij("",null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_qty," "),t.xp6(2),t.Oqu(e.totalPurchaseRate.toFixed(2)),t.xp6(2),t.Oqu(e.totalMrp.toFixed(2)),t.xp6(2),t.Oqu(null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_deduction),t.xp6(2),t.Oqu((null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_tax)+"%"),t.xp6(2),t.hij("",e.totalLandingCost.toFixed(2)," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.total.toFixed(2),""),t.xp6(16),t.hij("",t.xi3(160,42,null==e.purchaseBillDetail?null:e.purchaseBillDetail.sub_total.toFixed(2),"INR")," "),t.xp6(6),t.hij("",t.xi3(166,45,null==e.purchaseBillDetail?null:e.purchaseBillDetail.round_off.toFixed(2),"INR")," "),t.xp6(6),t.hij("",t.xi3(172,48,null==e.purchaseBillDetail?null:e.purchaseBillDetail.total.toFixed(2),"INR")," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(51,y,"Complete"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status),"Pending"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status),"Ordered"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status))),t.xp6(1),t.Oqu(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status)}}function B(i,u){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&i){const e=u.$implicit,a=u.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const T=function(i,u){return{itemsPerPage:i,currentPage:u}};function q(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",70),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",70),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",70),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",70),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,B,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",71)(24,"div",72),t._uU(25," Show per page "),t.TgZ(26,"select",73,74),t.NdJ("ngModelChange",function(c){t.CHM(e);const h=t.oxw();return t.KtG(h.itemsPerPage=c)})("change",function(){t.CHM(e);const c=t.MAs(27),h=t.oxw();return t.KtG(h.changePg(c.value))}),t.TgZ(28,"option",75),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",76),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",77),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",78),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",79),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",80),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",81)(41,"div",82)(42,"pagination-controls",83),t.NdJ("pageChange",function(c){t.CHM(e);const h=t.oxw();return t.KtG(h.p=c)}),t.qZA(),t.TgZ(43,"div",84),t._uU(44),t.qZA()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.purchaseBillDetail?null:e.purchaseBillDetail.logs,e.key,e.reverse),t.WLB(12,T,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.logs?null:e.purchaseBillDetail.logs.length," of ",e.p," entries")}}function w(i,u){1&i&&(t.TgZ(0,"div",56)(1,"span",85),t._uU(2,"Logs Not Available"),t.qZA()())}let S=(()=>{class i{constructor(e,a,c,h){this.companyService=e,this.Arout=a,this.purchaseService=c,this.location=h,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.pageSizee=10,this.itemsPerPagee=10,this.keyy="id",this.reversee=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.purchaseService.getPurchaseReturnById(this.id).subscribe(e=>{this.id==e.id&&(this.purchaseBillDetail=e,this.supplierAddress=e,console.log(this.supplierAddress),this.supplierAddress?.party?.address.map(a=>{"Billing"==a?.address_type?(this.selectedAddressBilling=a,console.log(this.selectedAddressBilling)):"Shipping"==a.address_type&&(this.selectedAddressShipping=a,console.log(this.selectedAddressShipping))}),this.purchaseBillDetail?.cart?.forEach(a=>{this.totalPurchase.push(a?.unit_cost),this.totalPurchaseRate=0,this?.totalPurchase?.forEach(c=>{this.totalPurchaseRate+=c}),this.totalmrp.push(a?.mrp),this.totalMrp=0,this?.totalmrp?.forEach(c=>{this.totalMrp+=c}),this.totallanding.push(a?.landing_cost),this.totalLandingCost=0,this?.totallanding?.forEach(c=>{this.totalLandingCost+=c})}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&x()(e).then(a=>{this.loaderPdf=!1;const c=a.toDataURL("image/png"),h=new m.jsPDF("p","mm","a4"),z=h.internal.pageSize.getWidth(),k=h.internal.pageSize.getHeight();h.addImage(c,"JPEG",0,0,z,k),h.save("purchaseReturn.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,a=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=a}sort(e){this.key=e,this.reverse=!this.reverse}sortt(e){this.keyy=e,this.reversee=!this.reversee}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseBillDetail?.logs?.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.J),t.Y36(_.gz),t.Y36(l.x),t.Y36(d.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-details-debitnotes"]],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Purchase Return"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"headingg"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","2",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group",2,"float","inline-end"],[1,"total-order","text-end"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return a.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Purchase Return"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Purchase Return"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Purchase Return "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,A,183,55,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,q,45,15,"div",15),t.YNc(21,w,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//purchase/edit-purchaseReturn/",null==a.purchaseBillDetail?null:a.purchaseBillDetail.id,""),t.xp6(6),t.Q6J("ngIf",a.purchaseBillDetail),t.xp6(2),t.Q6J("ngIf",(null==a.purchaseBillDetail||null==a.purchaseBillDetail.logs?null:a.purchaseBillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==a.purchaseBillDetail||null==a.purchaseBillDetail.logs?null:a.purchaseBillDetail.logs.length)))},dependencies:[d.mk,d.sg,d.O5,_.yS,r.SP,r.uX,o.Hw,s.YN,s.Kr,s.EJ,s.JJ,s.On,g.LS,d.H9,d.uU,g._s,v.T],styles:["table[_ngcontent-%COMP%]{width:100%;height:100px;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),i})();var $=p(30597);const C=JSON.parse(localStorage.getItem("auth"));let I;C&&C.map(u=>{"master"===u.content_type.app_label&&"debitnote"===u.content_type.model&&"view_debitnote"==u.codename&&(I=u.codename)});const N=[{path:"",component:S,canActivate:[$.l],data:{allowedRoles:["view_debitnote"]}}];let R=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(N),_.Bz]}),i})();var j=p(95113),F=p(56709),L=p(90455),E=p(8468);let J=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,R,r.Nh,o.Ps,j.LD,F.p9,L.rP,s.u5,E.I]}),i})()},30597:(M,f,p)=>{p.d(f,{l:()=>t});var d=p(94650),_=p(4392),b=p(97185),x=p(42917),m=p(80927);let t=(()=>{class n{constructor(r,o,s,g,v){this.router=r,this.Arout=o,this.toastr=s,this.profileService=g,this.coreService=v}canActivate(r,o){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),s){const g=r.data.allowedRoles;console.log(g,"allowedRoles");const v=s.some(P=>g.includes(P.codename));if(console.log(v),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const D=P?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==D.length)&&(this.profileService.setUserPermission(D),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(r){return new(r||n)(d.LFG(_.F0),d.LFG(_.gz),d.LFG(b._W),d.LFG(x.J),d.LFG(m.p))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);