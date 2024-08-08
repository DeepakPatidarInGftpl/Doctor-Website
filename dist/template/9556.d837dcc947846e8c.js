"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9556],{53506:(U,b,o)=>{o.d(b,{x:()=>x});var h=o(92340),_=o(94650),D=o(80529);let x=(()=>{class m{constructor(n){this.http=n,this.apiUrl=`${h.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(n){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+n)}getPurchaseFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const s=[];if(n&&s.push(`financial_year=${n}`),l&&l.length>0){const c=JSON.stringify(l);console.log(c),console.log(c?.length),s.push(`branch=${c}`)}return s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(n){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+n)}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,l)}updatePurchase(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${l}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const s=[];if(n&&s.push(`financial_year=${n}`),l&&l.length>0){const c=JSON.stringify(l);console.log(c),console.log(c?.length),s.push(`branch=${c}`)}return s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getMaterialByUserId(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${n}`)}MaterialIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,l)}updateMaterial(n,l){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${l}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBillFY(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const s=[];if(n&&s.push(`financial_year=${n}`),l&&l.length>0){const c=JSON.stringify(l);console.log(c),console.log(c?.length),s.push(`branch=${c}`)}return s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getPurchaseBillByUserId(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${n}`)}PurchaseBillIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,l)}updatePurchaseBill(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${l}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const s=[];if(n&&s.push(`financial_year=${n}`),l&&l.length>0){const c=JSON.stringify(l);console.log(c),console.log(c?.length),s.push(`branch=${c}`)}return s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,l)}updateDebitNotes(n,l){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${l}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(n,l){console.log(l,"branch"),console.log(l.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const s=[];if(n&&s.push(`financial_year=${n}`),l&&l.length>0){const c=JSON.stringify(l);console.log(c),console.log(c?.length),s.push(`branch=${c}`)}return s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,l)}updatePurchaseReturn(n,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${l}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,l,r,s){let c=this.apiUrl+"/pv-api/purchase_product_filter/";const d=[];return n&&d.push(`supplier=${n}`),l&&d.push(`category=${l}`),r&&d.push(`subcategory=${r}`),s&&d.push(`search=${s}`),d.length>0&&(c+="?"+d.join("&")),this.http.get(c)}purchaseReturnStatusUpdate(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",n)}}return m.\u0275fac=function(n){return new(n||m)(_.LFG(D.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},19556:(U,b,o)=>{o.r(b),o.d(b,{DetailsDebitnotesModule:()=>k});var h=o(36895),_=o(4392),D=o(4159),x=o.n(D),m=o(96166),t=o(94650),n=o(42917),l=o(53506),r=o(80927),s=o(3848),c=o(97392),d=o(24006),f=o(54333),P=o(54040);function C(i,u){1&i&&(t.TgZ(0,"div",82)(1,"button",83),t._uU(2," Approve "),t.qZA(),t.TgZ(3,"button",84),t._uU(4," Reject "),t.qZA()())}function M(i,u){if(1&i&&(t.TgZ(0,"div")(1,"p",85),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",86),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.email," ")}}function A(i,u){if(1&i&&(t.TgZ(0,"div")(1,"p",85),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",86),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br")(8,"br"),t._uU(9),t._UZ(10,"br"),t._uU(11),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(4),t.AsE(" ",null!=e.selectedAddressShipping&&e.selectedAddressShipping.address_line_1?(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , ":null!=e.selectedAddressShipping&&e.selectedAddressShipping.address_line_2?(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , ":""," ",null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressShipping||null==e.selectedAddressShipping.state?null:e.selectedAddressShipping.state.state)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.country?null:e.selectedAddressShipping.country.country_name)," "),t.xp6(3),t.hij(" Phone: ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.email," ")}}function y(i,u){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&i){const e=u.$implicit;t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.unit_cost),t.xp6(2),t.Oqu(null==e?null:e.mrp),t.xp6(2),t.hij("",(null==e?null:e.deduction)??0," "),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.landing_cost),t.xp6(2),t.Oqu(null==e?null:e.total)}}const T=function(i,u,e){return{"bg-lightgreen":i,"bg-lightred":u,"bg-lightyellow":e}};function B(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31)(2,"div",32)(3,"div",33)(4,"div",34)(5,"div",35)(6,"span",36),t._uU(7),t.qZA()(),t.TgZ(8,"div",37),t.YNc(9,C,5,0,"div",38),t.TgZ(10,"div",37)(11,"button",39),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.printForm())}),t._UZ(12,"img",40),t.qZA(),t.TgZ(13,"button",41),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.generatePdf())}),t._UZ(14,"i",42),t.qZA()()()(),t.TgZ(15,"div",43)(16,"div",44)(17,"div",45)(18,"div",46)(19,"div",47)(20,"div",48)(21,"div",49)(22,"div",50)(23,"div",51),t._UZ(24,"img",52),t.TgZ(25,"p",53),t._uU(26),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA(),t.TgZ(31,"p")(32,"span"),t._uU(33,"Address"),t.qZA(),t._uU(34),t.qZA(),t.TgZ(35,"p"),t._uU(36),t.qZA()()()(),t.TgZ(37,"div",54)(38,"div",55)(39,"div",56)(40,"p"),t._uU(41),t.qZA(),t.TgZ(42,"h1",57),t._uU(43,"Invoice"),t.qZA(),t.TgZ(44,"p"),t._uU(45),t.ALo(46,"date"),t.qZA(),t.TgZ(47,"p"),t._uU(48),t.qZA(),t.TgZ(49,"p"),t._uU(50),t.ALo(51,"date"),t.qZA()()()()()()()(),t.TgZ(52,"div",4)(53,"p",58),t._uU(54,"Purchase Return Details"),t.qZA()(),t.TgZ(55,"div",59)(56,"div",46)(57,"div",47)(58,"div",60),t.YNc(59,M,11,4,"div",61),t.YNc(60,A,12,5,"div",61),t.qZA()()()(),t.TgZ(61,"div",62)(62,"div",46)(63,"div",47)(64,"div",63)(65,"table",64)(66,"thead")(67,"tr")(68,"th",65),t._uU(69," Return No. "),t.qZA(),t.TgZ(70,"th",65),t._uU(71," Supplier Name"),t.qZA(),t.TgZ(72,"th",65),t._uU(73," Refrensh Bill No."),t.qZA(),t.TgZ(74,"th",65),t._uU(75," Return Date"),t.qZA(),t.TgZ(76,"th",65),t._uU(77," Reverse Charge"),t.qZA(),t.TgZ(78,"th",65),t._uU(79," Purchase Bill"),t.qZA(),t.TgZ(80,"th",65),t._uU(81," Reason"),t.qZA()()(),t.TgZ(82,"tbody")(83,"tr")(84,"td",66),t._uU(85),t.qZA(),t.TgZ(86,"td",66),t._uU(87),t.qZA(),t.TgZ(88,"td",66),t._uU(89),t.qZA(),t.TgZ(90,"td",66),t._uU(91),t.ALo(92,"date"),t.qZA(),t.TgZ(93,"td",66),t._uU(94),t.qZA(),t.TgZ(95,"td",66),t._uU(96),t.qZA(),t.TgZ(97,"td",66),t._uU(98),t.qZA()()()()()()()(),t.TgZ(99,"div",67)(100,"div",46)(101,"div",4)(102,"p",68),t._uU(103,"Product Details"),t.qZA()(),t.TgZ(104,"div",69)(105,"div")(106,"table")(107,"thead")(108,"tr")(109,"th"),t._uU(110,"Barcode/SKU"),t.qZA(),t.TgZ(111,"th"),t._uU(112,"Product Name"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"QTY"),t.qZA(),t.TgZ(115,"th"),t._uU(116,"Cost Price"),t.qZA(),t.TgZ(117,"th"),t._uU(118,"Mrp"),t.qZA(),t.TgZ(119,"th"),t._uU(120,"Deduction"),t.qZA(),t.TgZ(121,"th"),t._uU(122,"Tax"),t.qZA(),t.TgZ(123,"th"),t._uU(124,"Landing Cost"),t.qZA(),t.TgZ(125,"th"),t._uU(126,"Total"),t.qZA()()(),t.TgZ(127,"tbody"),t.YNc(128,y,19,9,"tr",70),t.TgZ(129,"tr",71)(130,"td",72)(131,"strong"),t._uU(132,"Total"),t.qZA()(),t.TgZ(133,"td",73),t._uU(134),t.qZA(),t.TgZ(135,"td",73),t._uU(136),t.qZA(),t.TgZ(137,"td",73),t._uU(138),t.qZA(),t.TgZ(139,"td",73),t._uU(140),t.qZA(),t.TgZ(141,"td",73),t._uU(142),t.qZA(),t.TgZ(143,"td",73),t._uU(144),t.qZA(),t.TgZ(145,"td",73),t._uU(146),t.qZA()()()()()(),t.TgZ(147,"div",47)(148,"p"),t._uU(149,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(150,"br"),t._uU(151," Overdue invoices will be charged 24% interest. "),t.qZA()()()(),t.TgZ(152,"div",74),t._UZ(153,"div",75),t.TgZ(154,"div",75)(155,"div",76)(156,"div",77)(157,"ul")(158,"li",78)(159,"h4"),t._uU(160,"Sub Total"),t.qZA(),t.TgZ(161,"h5"),t._uU(162),t.ALo(163,"currency"),t.qZA()(),t.TgZ(164,"li",78)(165,"h4"),t._uU(166,"Round Off"),t.qZA(),t.TgZ(167,"h5"),t._uU(168),t.ALo(169,"currency"),t.qZA()(),t.TgZ(170,"li",78)(171,"h4"),t._uU(172,"Total"),t.qZA(),t.TgZ(173,"h5"),t._uU(174),t.ALo(175,"currency"),t.qZA()()()()()()(),t.TgZ(176,"div",79)(177,"p"),t._uU(178,"Status : "),t.TgZ(179,"span",80),t._uU(180),t.qZA()()(),t.TgZ(181,"div",81)(182,"p"),t._uU(183,"Please make cheques payable to "),t.TgZ(184,"span"),t._uU(185,"PV LTD."),t.qZA()()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(6),t.Q6J("ngClass",e.getBadgeClass(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status)),t.xp6(1),t.Oqu(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status),t.xp6(2),t.Q6J("ngIf","admin"===(null==e.userDetails?null:e.userDetails.role)&&"Pending"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status)),t.xp6(17),t.hij("GST ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij("Company Name: ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij("Financial Year: ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year," "),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij("Phone: ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(5),t.hij("GST ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.gstin,""),t.xp6(4),t.hij("Invoice Date: ",t.xi3(46,34,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd"),""),t.xp6(3),t.hij("Invoice NO: ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_no," "),t.xp6(2),t.hij("Invoice Date: ",t.xi3(51,37,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(25),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.party?null:e.purchaseBillDetail.party.company_name," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.refrence_bill_no," "),t.xp6(2),t.hij(" ",t.xi3(92,40,null==e.purchaseBillDetail?null:e.purchaseBillDetail.purchase_return_date,"yyyy-MM-dd"),""),t.xp6(3),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.reverse_charge,""),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.purchase_bill?null:e.purchaseBillDetail.purchase_bill.refrence_bill_no," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.reason,""),t.xp6(30),t.Q6J("ngForOf",null==e.purchaseBillDetail?null:e.purchaseBillDetail.cart),t.xp6(6),t.hij("",null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_qty," "),t.xp6(2),t.Oqu(e.totalPurchaseRate),t.xp6(2),t.hij("",e.totalMrp," "),t.xp6(2),t.Oqu(null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_deduction),t.xp6(2),t.Oqu((null==e.purchaseBillDetail?null:e.purchaseBillDetail.total_tax)+"%"),t.xp6(2),t.hij(" ",e.totalLandingCost," "),t.xp6(2),t.hij(" ",null==e.purchaseBillDetail?null:e.purchaseBillDetail.total," "),t.xp6(16),t.hij("",t.xi3(163,43,null==e.purchaseBillDetail?null:e.purchaseBillDetail.sub_total,"INR")," "),t.xp6(6),t.hij("",t.xi3(169,46,null==e.purchaseBillDetail?null:e.purchaseBillDetail.round_off,"INR")," "),t.xp6(6),t.hij("",t.xi3(175,49,null==e.purchaseBillDetail?null:e.purchaseBillDetail.total,"INR")," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(52,T,"Complete"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status),"Pending"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status),"Ordered"===(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status))),t.xp6(1),t.Oqu(null==e.purchaseBillDetail?null:e.purchaseBillDetail.status)}}function q(i,u){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&i){const e=u.$implicit,a=u.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const w=function(i,u){return{itemsPerPage:i,currentPage:u}};function S(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",67)(1,"div",46)(2,"div",4)(3,"p",68),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",69)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",87),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",87),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",87),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",87),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,q,10,7,"tr",70),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",48)(23,"div",88)(24,"div",89),t._uU(25," Show per page "),t.TgZ(26,"select",90,91),t.NdJ("ngModelChange",function(p){t.CHM(e);const g=t.oxw();return t.KtG(g.itemsPerPage=p)})("change",function(){t.CHM(e);const p=t.MAs(27),g=t.oxw();return t.KtG(g.changePg(p.value))}),t.TgZ(28,"option",92),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",93),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",94),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",95),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",96),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",97),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",98)(41,"div",99)(42,"pagination-controls",100),t.NdJ("pageChange",function(p){t.CHM(e);const g=t.oxw();return t.KtG(g.p=p)}),t.qZA(),t.TgZ(43,"div",101),t._uU(44),t.qZA()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.purchaseBillDetail?null:e.purchaseBillDetail.logs,e.key,e.reverse),t.WLB(12,w,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.purchaseBillDetail||null==e.purchaseBillDetail.logs?null:e.purchaseBillDetail.logs.length," of ",e.p," entries")}}function $(i,u){1&i&&(t.TgZ(0,"div",73)(1,"span",102),t._uU(2,"Logs Not Available"),t.qZA()())}let j=(()=>{class i{constructor(e,a,p,g,Z){this.companyService=e,this.Arout=a,this.purchaseService=p,this.location=g,this.coreService=Z,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.pageSizee=10,this.itemsPerPagee=10,this.keyy="id",this.reversee=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]}),this.coreService.profileDetails.subscribe(e=>{this.userDetails=e})}getdata(){this.purchaseService.getPurchaseReturnById(this.id).subscribe(e=>{this.id==e.id&&(this.purchaseBillDetail=e,this.supplierAddress=e,console.log(this.supplierAddress),this.supplierAddress?.party?.address.map(a=>{"Billing"==a?.address_type?(this.selectedAddressBilling=a,console.log(this.selectedAddressBilling)):"Shipping"==a.address_type&&(this.selectedAddressShipping=a,console.log(this.selectedAddressShipping))}),this.purchaseBillDetail?.cart?.forEach(a=>{this.totalPurchase.push(a?.unit_cost);let p=0;this?.totalPurchase?.forEach(v=>{p+=v}),this.totalPurchaseRate=Number(p).toFixed(2),this.totalmrp.push(a?.mrp);let g=0;this?.totalmrp?.forEach(v=>{g+=v}),this.totalMrp=Number(g).toFixed(2),this.totallanding.push(a?.landing_cost),this.totalLandingCost=0;let Z=0;this?.totallanding?.forEach(v=>{Z+=v}),this.totalLandingCost=Number(Z).toFixed(2)}))})}goBack(){this.location.back()}getBadgeClass(e){switch(e){case"Pending":return"pending-status-badge";case"Approved":return"approve-status-badge";case"Rejected":return"reject-status-badge";default:return""}}approve(){let e=Number(this.id);const a=new FormData;a.append("id",e),a.append("status","Approved"),this.purchaseService.purchaseReturnStatusUpdate(a).subscribe(p=>{console.log(p),this.getdata(),document.querySelector(".closeApprovalModal").click()})}reject(){let e=Number(this.id);const a=new FormData;a.append("id",e),a.append("status","Rejected"),this.purchaseService.purchaseReturnStatusUpdate(a).subscribe(p=>{console.log(p),this.getdata(),document.querySelector(".closeRejectModal").click()})}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&x()(e).then(a=>{this.loaderPdf=!1;const p=a.toDataURL("image/png"),g=new m.jsPDF("p","mm","a4"),Z=g.internal.pageSize.getWidth(),v=g.internal.pageSize.getHeight();g.addImage(p,"JPEG",0,0,Z,v),g.save("purchaseReturn.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,a=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=a}sort(e){this.key=e,this.reverse=!this.reverse}sortt(e){this.keyy=e,this.reversee=!this.reversee}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseBillDetail?.logs?.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.J),t.Y36(_.gz),t.Y36(l.x),t.Y36(h.Ye),t.Y36(r.p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-details-debitnotes"]],decls:52,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Purchase Return"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],["id","approval_modal","role","dialog",1,"modal","custom-modal","fade"],["role","document",1,"modal-dialog","modal-md","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header","approve-modal-wrapper"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","closeApprovalModal","close-wrapper"],["aria-hidden","true"],[1,"modal-title"],[1,"modal-body","approve-modal-wrapper"],[1,"mt-2","d-flex","justify-content-end","align-items-center"],[1,"btn","btn-primary","me-3",3,"click"],["data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-danger","m-0"],["id","reject_modal","role","dialog",1,"modal","custom-modal","fade"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","closeRejectModal","close-wrapper"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"py-3"],[1,"d-flex","justify-content-between","align-items-center","container","mb-3"],[1,"ps-2","ms-1"],[1,"badge","p-2",3,"ngClass"],[1,"d-flex","align-items-center"],["class","me-3",4,"ngIf"],["data-bs-toggle","tooltip","title","print",1,"me-3","d-flex","border-0","bg-white",3,"click"],["src","assets/img/icons/printer.svg","alt","img",1,"print-icon-wrapper"],[1,"chat-attach-download","border-0","bg-white",3,"click"],[1,"fas","fa-download","download-icon"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"headingg"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","2",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group",2,"float","inline-end"],[1,"total-order","text-end"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"me-3"],["data-bs-toggle","modal","data-bs-target","#approval_modal",1,"btn","approve-status-badge","me-3"],["data-bs-toggle","modal","data-bs-target","#reject_modal",1,"btn","reject-status-badge"],[1,"heading"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return a.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Purchase Return"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Purchase Return"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Purchase Return "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,B,186,56,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,S,45,15,"div",15),t.YNc(21,$,3,0,"div",16),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"div",18)(24,"div",19)(25,"div",20)(26,"button",21)(27,"span",22),t._uU(28,"\xd7"),t.qZA()(),t.TgZ(29,"h5",23),t._uU(30,"Are you sure you want to approve this purchase return?"),t.qZA()(),t.TgZ(31,"div",24)(32,"div",25)(33,"button",26),t.NdJ("click",function(){return a.approve()}),t._uU(34,"Submit"),t.qZA(),t.TgZ(35,"button",27),t._uU(36,"Cancel"),t.qZA()()()()()(),t.TgZ(37,"div",28)(38,"div",18)(39,"div",19)(40,"div",20)(41,"button",29)(42,"span",22),t._uU(43,"\xd7"),t.qZA()(),t.TgZ(44,"h5",23),t._uU(45,"Are you sure you want to reject this purchase return?"),t.qZA()(),t.TgZ(46,"div",24)(47,"div",25)(48,"button",26),t.NdJ("click",function(){return a.reject()}),t._uU(49,"Submit"),t.qZA(),t.TgZ(50,"button",27),t._uU(51,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//purchase/edit-purchaseReturn/",null==a.purchaseBillDetail?null:a.purchaseBillDetail.id,""),t.xp6(6),t.Q6J("ngIf",a.purchaseBillDetail),t.xp6(2),t.Q6J("ngIf",(null==a.purchaseBillDetail||null==a.purchaseBillDetail.logs?null:a.purchaseBillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==a.purchaseBillDetail||null==a.purchaseBillDetail.logs?null:a.purchaseBillDetail.logs.length)))},dependencies:[h.mk,h.sg,h.O5,_.yS,s.SP,s.uX,c.Hw,d.YN,d.Kr,d.EJ,d.JJ,d.On,f.LS,h.H9,h.uU,f._s,P.T],styles:["table[_ngcontent-%COMP%]{width:100%;height:100px;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.print-icon-wrapper[_ngcontent-%COMP%]{height:24px}.download-icon[_ngcontent-%COMP%]{color:#848080;font-size:24px}.pending-status-badge[_ngcontent-%COMP%]{color:#fff;background-color:#ff9f43;font-size:16px}.approve-status-badge[_ngcontent-%COMP%]{color:#fff;background-color:#5cb85c;font-size:16px}.reject-status-badge[_ngcontent-%COMP%]{color:#fff;background-color:#d9534f;font-size:16px}.approve-modal-wrapper[_ngcontent-%COMP%]{padding:20px}.close-wrapper[_ngcontent-%COMP%]{top:10px;right:10px;position:absolute}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),i})();var N=o(30597);const O=JSON.parse(localStorage.getItem("auth"));let R;O&&O.map(u=>{"master"===u.content_type.app_label&&"debitnote"===u.content_type.model&&"view_debitnote"==u.codename&&(R=u.codename)});const I=[{path:"",component:j,canActivate:[N.l],data:{allowedRoles:["view_debitnote"]}}];let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(I),_.Bz]}),i})();var F=o(95113),E=o(56709),z=o(90455),J=o(8468);let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,L,s.Nh,c.Ps,F.LD,E.p9,z.rP,d.u5,J.I]}),i})()},30597:(U,b,o)=>{o.d(b,{l:()=>t});var h=o(94650),_=o(4392),D=o(97185),x=o(42917),m=o(80927);let t=(()=>{class n{constructor(r,s,c,d,f){this.router=r,this.Arout=s,this.toastr=c,this.profileService=d,this.coreService=f}canActivate(r,s){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),c){const d=r.data.allowedRoles;console.log(d,"allowedRoles");const f=c.some(P=>d.includes(P.codename));if(console.log(f),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const C=P?.permission,M=this.profileService.getUserDetails();(!M||M.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(r){return new(r||n)(h.LFG(_.F0),h.LFG(_.gz),h.LFG(D._W),h.LFG(x.J),h.LFG(m.p))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);