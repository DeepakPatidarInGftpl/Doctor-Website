"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4834],{53506:(C,P,r)=>{r.d(P,{x:()=>Z});var c=r(92340),g=r(94650),x=r(80529);let Z=(()=>{class _{constructor(n){this.http=n,this.apiUrl=`${c.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}updatePurchase(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}MaterialIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}updateMaterial(n,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}PurchaseBillIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}updatePurchaseBill(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}updateDebitNotes(n,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}updatePurchaseReturn(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,i,s,m){let d=this.apiUrl+"/pv-api/purchase_product_filter/";const u=[];return n&&u.push(`supplier=${n}`),i&&u.push(`category=${i}`),s&&u.push(`subcategory=${s}`),m&&u.push(`search=${m}`),u.length>0&&(d+="?"+u.join("&")),this.http.get(d)}}return _.\u0275fac=function(n){return new(n||_)(g.LFG(x.eN))},_.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},44834:(C,P,r)=>{r.r(P),r.d(P,{DetailsPurchaseModule:()=>R});var c=r(36895),g=r(88996),x=r(4159),Z=r.n(x),_=r(96166),t=r(94650),n=r(42917),i=r(53506),s=r(3848),m=r(97392),d=r(24006),u=r(54333),f=r(54040);function v(l,p){if(1&l){const e=t.EpF();t.TgZ(0,"button",68),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function M(l,p){1&l&&(t.TgZ(0,"button",69),t._UZ(1,"span",70),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function b(l,p){if(1&l&&(t.TgZ(0,"div")(1,"p",71),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&l){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.email," ")}}function D(l,p){if(1&l&&(t.TgZ(0,"div")(1,"p",71),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&l){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.email," ")}}function O(l,p){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&l){const e=p.$implicit;t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.purchase_rate),t.xp6(2),t.Oqu(null==e?null:e.mrp),t.xp6(2),t.Oqu(null==e?null:e.discount),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.landing_cost),t.xp6(2),t.Oqu(null==e?null:e.total)}}const A=function(l,p,e,a,o,h){return{"bg-lightgreen":l,"bg-lightred":p,"bg-lightyellow":e,"bg-lightblue":a,"bg-lightorange":o,"bg-lightgray":h}},U=function(l,p,e){return{"bg-lightgreen":l,"bg-lightred":p,"bg-lightyellow":e}};function y(l,p){if(1&l){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,v,2,0,"button",22),t.YNc(8,M,3,0,"button",23),t.qZA(),t.TgZ(9,"p",24)(10,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",26)(13,"div",27)(14,"div",28)(15,"div",29)(16,"div",30)(17,"div",31)(18,"div",32)(19,"div",33)(20,"div",34),t._UZ(21,"img",35),t.TgZ(22,"p",36),t._uU(23),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"span"),t._uU(30,"Address"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",37)(35,"div",38)(36,"div",39)(37,"p"),t._uU(38),t.qZA(),t.TgZ(39,"h1",40),t._uU(40,"Invoice"),t.qZA(),t.TgZ(41,"p"),t._uU(42),t.ALo(43,"date"),t.qZA(),t.TgZ(44,"p"),t._uU(45),t.qZA(),t.TgZ(46,"p"),t._uU(47),t.qZA()()()()()()()(),t.TgZ(48,"div",4)(49,"p",41),t._uU(50,"Purchase Order Details"),t.qZA()(),t.TgZ(51,"div",42)(52,"div",29)(53,"div",30)(54,"div",43),t.YNc(55,b,11,4,"div",44),t.YNc(56,D,11,4,"div",44),t.qZA()()()(),t.TgZ(57,"div",45)(58,"div",29)(59,"div",30)(60,"div",46)(61,"table",47)(62,"thead")(63,"tr")(64,"th",48),t._uU(65,"Order No. "),t.qZA(),t.TgZ(66,"th",48),t._uU(67,"Supplier Name"),t.qZA(),t.TgZ(68,"th",48),t._uU(69,"Purchase Date"),t.qZA(),t.TgZ(70,"th",48),t._uU(71,"Shipping Date"),t.qZA(),t.TgZ(72,"th",48),t._uU(73,"Shipping Note"),t.qZA()()(),t.TgZ(74,"tbody")(75,"tr")(76,"td",49),t._uU(77),t.qZA(),t.TgZ(78,"td",49),t._uU(79),t.qZA(),t.TgZ(80,"td",49),t._uU(81),t.ALo(82,"date"),t.qZA(),t.TgZ(83,"td",49),t._uU(84),t.ALo(85,"date"),t.qZA(),t.TgZ(86,"td",49),t._uU(87),t.qZA()()()()()()()(),t.TgZ(88,"div",50)(89,"div",29)(90,"div",4)(91,"p",51),t._uU(92,"Product Details"),t.qZA()(),t.TgZ(93,"div",52)(94,"div")(95,"table")(96,"thead")(97,"tr")(98,"th"),t._uU(99,"Barcode/SKU"),t.qZA(),t.TgZ(100,"th"),t._uU(101,"Product Name"),t.qZA(),t.TgZ(102,"th"),t._uU(103,"QTY"),t.qZA(),t.TgZ(104,"th"),t._uU(105,"Cost Price"),t.qZA(),t.TgZ(106,"th"),t._uU(107,"Mrp"),t.qZA(),t.TgZ(108,"th"),t._uU(109,"Discount %"),t.qZA(),t.TgZ(110,"th"),t._uU(111,"Tax"),t.qZA(),t.TgZ(112,"th"),t._uU(113,"Landing Cost"),t.qZA(),t.TgZ(114,"th"),t._uU(115,"Total"),t.qZA()()(),t.TgZ(116,"tbody"),t.YNc(117,O,19,9,"tr",53),t.TgZ(118,"tr",54)(119,"td",55)(120,"strong"),t._uU(121,"Total"),t.qZA()(),t.TgZ(122,"td",56),t._uU(123),t.qZA(),t.TgZ(124,"td",56),t._uU(125),t.qZA(),t.TgZ(126,"td",56),t._uU(127),t.qZA(),t.TgZ(128,"td",56),t._uU(129),t.qZA(),t.TgZ(130,"td",56),t._uU(131),t.qZA(),t.TgZ(132,"td",56),t._uU(133),t.qZA(),t.TgZ(134,"td",56),t._uU(135),t.qZA()()()()()(),t.TgZ(136,"div",30)(137,"p"),t._uU(138,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(139,"br"),t._uU(140," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(141,"div",57)(142,"div",58)(143,"div",59)(144,"strong"),t._uU(145,"Note:"),t.qZA(),t.TgZ(146,"div",60)(147,"p"),t._uU(148),t.qZA()()()(),t.TgZ(149,"div",58)(150,"div",61)(151,"div",62)(152,"ul")(153,"li",63)(154,"h4"),t._uU(155,"Sub Total"),t.qZA(),t.TgZ(156,"h5"),t._uU(157),t.ALo(158,"currency"),t.qZA()(),t.TgZ(159,"li",63)(160,"h4"),t._uU(161,"Round Off"),t.qZA(),t.TgZ(162,"h5"),t._uU(163),t.ALo(164,"currency"),t.qZA()(),t.TgZ(165,"li",63)(166,"h4"),t._uU(167,"Total"),t.qZA(),t.TgZ(168,"h5"),t._uU(169),t.ALo(170,"currency"),t.qZA()()()()()()(),t.TgZ(171,"div",64)(172,"p"),t._uU(173,"Status : "),t.TgZ(174,"span",65),t._uU(175),t.qZA()(),t.TgZ(176,"p",66),t._uU(177,"Export: "),t.TgZ(178,"span",65),t._uU(179),t.qZA()()(),t.TgZ(180,"div",67)(181,"p"),t._uU(182,"Please make cheques payable to "),t.TgZ(183,"span"),t._uU(184,"PV LTD."),t.qZA()()()()()()()()()}if(2&l){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(15),t.hij("GST ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij("Company Name: ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij("Financial Year: ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year,""),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij("Phone: ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(5),t.hij("GST ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.gstin,""),t.xp6(4),t.hij("Invoice Date: ",t.xi3(43,34,null==e.purchaseDetail?null:e.purchaseDetail.order_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij("Invoice NO: ",null==e.purchaseDetail?null:e.purchaseDetail.order_no,""),t.xp6(2),t.hij("Shipping Date: ",null==e.purchaseDetail?null:e.purchaseDetail.shipping_date,""),t.xp6(8),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(21),t.hij(" ",null==e.purchaseDetail?null:e.purchaseDetail.order_no,""),t.xp6(2),t.hij(" ",null==e.purchaseDetail||null==e.purchaseDetail.party?null:e.purchaseDetail.party.company_name,""),t.xp6(2),t.Oqu(t.xi3(82,37,null==e.purchaseDetail?null:e.purchaseDetail.order_date,"dd-MMMM-yyyy")),t.xp6(3),t.hij(" ",t.xi3(85,40,null==e.purchaseDetail?null:e.purchaseDetail.shipping_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",null==e.purchaseDetail?null:e.purchaseDetail.shipping_note,""),t.xp6(30),t.Q6J("ngForOf",null==e.purchaseDetail?null:e.purchaseDetail.cart),t.xp6(6),t.hij("",null==e.purchaseDetail?null:e.purchaseDetail.total_qty," "),t.xp6(2),t.Oqu(e.totalPurchaseRate.toFixed(2)),t.xp6(2),t.Oqu(e.totalMrp.toFixed(2)),t.xp6(2),t.Oqu((null==e.purchaseDetail?null:e.purchaseDetail.total_discount)+"%"),t.xp6(2),t.Oqu((null==e.purchaseDetail?null:e.purchaseDetail.total_tax)+"%"),t.xp6(2),t.hij("",e.totalLandingCost.toFixed(2)," "),t.xp6(2),t.hij(" ",null==e.purchaseDetail?null:e.purchaseDetail.total.toFixed(2),""),t.xp6(13),t.Oqu(null==e.purchaseDetail?null:e.purchaseDetail.note),t.xp6(9),t.hij("",t.xi3(158,43,null==e.purchaseDetail?null:e.purchaseDetail.sub_total.toFixed(2),"INR")," "),t.xp6(6),t.hij("",t.xi3(164,46,null==e.purchaseDetail?null:e.purchaseDetail.round_off.toFixed(2),"INR")," "),t.xp6(6),t.hij("",t.xi3(170,49,null==e.purchaseDetail?null:e.purchaseDetail.total.toFixed(2),"INR")," "),t.xp6(5),t.Q6J("ngClass",t.HTZ(52,A,"Completed"===(null==e.purchaseDetail?null:e.purchaseDetail.status),"Overdue"===(null==e.purchaseDetail?null:e.purchaseDetail.status),"Pending"===(null==e.purchaseDetail?null:e.purchaseDetail.status)||"New"===(null==e.purchaseDetail?null:e.purchaseDetail.status),"Inprogress"===(null==e.purchaseDetail?null:e.purchaseDetail.status)||"Approved"===(null==e.purchaseDetail?null:e.purchaseDetail.status),"Received"===(null==e.purchaseDetail?null:e.purchaseDetail.status)||"Partially Received"===(null==e.purchaseDetail?null:e.purchaseDetail.status)||"Exceed"===(null==e.purchaseDetail?null:e.purchaseDetail.status),"Cancel"===(null==e.purchaseDetail?null:e.purchaseDetail.status))),t.xp6(1),t.Oqu(null==e.purchaseDetail?null:e.purchaseDetail.status),t.xp6(3),t.Q6J("ngClass",t.kEZ(59,U,!0===(null==e.purchaseDetail?null:e.purchaseDetail.export),!1===(null==e.purchaseDetail?null:e.purchaseDetail.export),"Partial"===(null==e.purchaseDetail?null:e.purchaseDetail.is_active))),t.xp6(1),t.Oqu(null==e.purchaseDetail?null:e.purchaseDetail.is_active)}}function T(l,p){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&l){const e=p.$implicit,a=p.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const q=function(l,p){return{itemsPerPage:l,currentPage:p}};function w(l,p){if(1&l){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,T,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76),t.NdJ("ngModelChange",function(o){t.CHM(e);const h=t.oxw();return t.KtG(h.itemsPerPage=o)}),t.TgZ(27,"option",77),t._uU(28,"10"),t.qZA(),t.TgZ(29,"option",78),t._uU(30,"20"),t.qZA(),t.TgZ(31,"option",79),t._uU(32,"30"),t.qZA(),t.TgZ(33,"option",80),t._uU(34,"50"),t.qZA(),t.TgZ(35,"option",81),t._uU(36,"100"),t.qZA(),t.TgZ(37,"option",82),t._uU(38,"All"),t.qZA()()()(),t.TgZ(39,"div",83)(40,"div",84)(41,"pagination-controls",85),t.NdJ("pageChange",function(o){t.CHM(e);const h=t.oxw();return t.KtG(h.p=o)}),t.qZA(),t.TgZ(42,"div",86),t._uU(43),t.qZA()()()()()()()()}if(2&l){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.purchaseDetail?null:e.purchaseDetail.logs,e.key,e.reverse),t.WLB(12,q,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}function B(l,p){1&l&&(t.TgZ(0,"div",56)(1,"span",87),t._uU(2,"Logs Not Available"),t.qZA()())}const $=[{path:"",component:(()=>{class l{constructor(e,a,o,h){this.companyService=e,this.Arout=a,this.purchaseService=o,this.location=h,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.pageSizee=10,this.itemsPerPagee=10,this.keyy="id",this.reversee=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.purchaseService.getPurchaseById(this.id).subscribe(e=>{this.id==e.id&&(this.purchaseDetail=e,this.supplierAddress=e,console.log(this.supplierAddress),this.supplierAddress?.party?.address.map(a=>{"Billing"==a?.address_type?(this.selectedAddressBilling=a,console.log(this.selectedAddressBilling)):"Shipping"==a.address_type&&(this.selectedAddressShipping=a,console.log(this.selectedAddressShipping))}),this.purchaseDetail?.cart?.forEach(a=>{this.totalPurchase.push(a?.purchase_rate),this.totalPurchaseRate=0,this?.totalPurchase?.forEach(o=>{this.totalPurchaseRate+=o}),this.totalmrp.push(a?.mrp),this.totalMrp=0,this?.totalmrp?.forEach(o=>{this.totalMrp+=o}),this.totallanding.push(a?.landing_cost),this.totalLandingCost=0,this?.totallanding?.forEach(o=>{this.totalLandingCost+=o})}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&Z()(e).then(a=>{this.loaderPdf=!1;const o=a.toDataURL("image/png"),h=new _.jsPDF("p","mm","a4"),z=h.internal.pageSize.getWidth(),J=h.internal.pageSize.getHeight();h.addImage(o,"JPEG",0,0,z,J),h.save("purchaseOrder.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,a=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=a}sort(e){this.key=e,this.reverse=!this.reverse}sortt(e){this.keyy=e,this.reversee=!this.reversee}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(n.J),t.Y36(g.gz),t.Y36(i.x),t.Y36(c.Ye))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-details-purchase"]],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Purchase Order"],["class","company-details-card card","id","my-element",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],["id","my-element",1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"headingg"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black","font-weight","500"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","2",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"form-group",2,"float","inline-end"],[1,"total-order","text-end"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"mx-3"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return a.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Purchase Order"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Purchase Order"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Purchase Order "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,y,185,63,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,w,44,15,"div",15),t.YNc(21,B,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//purchase/editpurchase/",null==a.purchaseDetail?null:a.purchaseDetail.id,""),t.xp6(6),t.Q6J("ngIf",a.purchaseDetail),t.xp6(2),t.Q6J("ngIf",(null==a.purchaseDetail||null==a.purchaseDetail.logs?null:a.purchaseDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==a.purchaseDetail||null==a.purchaseDetail.logs?null:a.purchaseDetail.logs.length)))},dependencies:[c.mk,c.sg,c.O5,g.yS,s.SP,s.uX,m.Hw,d.YN,d.Kr,d.EJ,d.JJ,d.On,u.LS,c.H9,c.uU,u._s,f.T],styles:["table[_ngcontent-%COMP%]{width:100%;height:100px;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.isPdf[_ngcontent-%COMP%]{padding-left:20%;padding-right:20%}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),l})(),canActivate:[r(30597).l],data:{allowedRoles:["view_purchaseorder"]}}];let N=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild($),g.Bz]}),l})();var L=r(84385),E=r(56709),F=r(90455),j=r(8468);let R=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.ez,N,s.Nh,m.Ps,L.LD,E.p9,F.rP,d.u5,j.I]}),l})()},30597:(C,P,r)=>{r.d(P,{l:()=>t});var c=r(94650),g=r(88996),x=r(97185),Z=r(42917),_=r(80927);let t=(()=>{class n{constructor(s,m,d,u,f){this.router=s,this.Arout=m,this.toastr=d,this.profileService=u,this.coreService=f}canActivate(s,m){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),d){const u=s.data.allowedRoles;console.log(u,"allowedRoles");const f=d.some(v=>u.includes(v.codename));if(console.log(f),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const M=v?.permission,b=this.profileService.getUserDetails();(!b||b.length!==M.length)&&(this.profileService.setUserPermission(M),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(s){return new(s||n)(c.LFG(g.F0),c.LFG(g.gz),c.LFG(x._W),c.LFG(Z.J),c.LFG(_.p))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);