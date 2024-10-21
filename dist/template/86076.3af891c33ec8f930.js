"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[86076],{72170:(D,f,d)=>{d.d(f,{M:()=>t});var g=d(92340),_=d(94650),y=d(80529);let t=(()=>{class h{constructor(l){this.http=l,this.apiUrl=`${g.N.api}`}getSalesOrderfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_order/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSalesOrder(){return this.http.get(this.apiUrl+"/pv-api/sale_order/")}getSalesOrderByUserId(l){return this.http.get(this.apiUrl+"/pv-api/sale_order/?user_id="+l)}getSalesOrderById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`)}SalesOrderIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`,n)}addSalesOrder(l){return this.http.post(this.apiUrl+"/pv-api/sale_order/",l)}updateSalesOrder(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_order/?sale_order_id="}${n}`,l)}deleteSalesOrder(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`)}getSalesEstimatefy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/estimate/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSalesEstimate(){return this.http.get(this.apiUrl+"/pv-api/estimate/")}getSalesEstimateByUserId(l){return this.http.get(this.apiUrl+"/pv-api/estimate/?user_id="+l)}getSalesEstimateById(l){return this.http.get(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`)}SalesEstimateIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`,n)}addSalesEstimate(l){return this.http.post(this.apiUrl+"/pv-api/estimate/",l)}updateSalesEstimate(l,n){return this.http.put(`${this.apiUrl+"/pv-api/estimate/?estimate_id="}${n}`,l)}deleteSalesEstimate(l){return this.http.delete(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`)}getSalesBillfyWithProductId(l,n,i){let a=this.apiUrl+"/pv-api/sale_bill/";const s=new URLSearchParams;return s.append("financial_year",l),s.append("product_id",String(n)),s.append("start_date",i.s),s.append("end_date",i.e),this.http.get(a+(s.toString()?"?"+s.toString():""))}getSalesBillfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_bill/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getSalesBillById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`)}getSalesBillByUserId(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?user_id="}${l}`)}SalesBillIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`,n)}addSalesBill(l){return this.http.post(this.apiUrl+"/pv-api/sale_bill/",l)}updateSalesBill(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_bill/?sale_bill_id="}${n}`,l)}deleteSalesBill(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`)}getSalesMaterialOutwardfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/material_outward/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSalesMaterialOutward(){return this.http.get(this.apiUrl+"/pv-api/material_outward/")}getSalesMaterialOutwardById(l){return this.http.get(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`)}SalesMaterialOutwardIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`,n)}addSalesMaterialOutward(l){return this.http.post(this.apiUrl+"/pv-api/material_outward/",l)}updateSalesMaterialOutward(l,n){return this.http.put(`${this.apiUrl+"/pv-api/material_outward/?material_outward_id="}${n}`,l)}deleteSalesMaterialOutward(l){return this.http.delete(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`)}getSaleReturnfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_return/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSaleReturn(){return this.http.get(this.apiUrl+"/pv-api/sale_return/")}getSaleReturnById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`)}SaleReturnIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`,n)}addSaleReturn(l){return this.http.post(this.apiUrl+"/pv-api/sale_return/",l)}updateSaleReturn(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_return/?sale_return_id="}${n}`,l)}deleteSaleReturn(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`)}getSearchProductById(l){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${l}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}filterVariant(l,n,i){let a=this.apiUrl+"/pv-api/sales_product_filter/";const s=[];return l&&s.push(`category=${l}`),n&&s.push(`subcategory=${n}`),i&&s.push(`search=${i}`),s.length>0&&(a+="?"+s.join("&")),this.http.get(a)}getSaleOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleOrder")}getSaleBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleBill")}getSaleReturnPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleReturn")}getEstimatePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=Estimate")}getMaterialOutwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialOutward")}getAdvanceBookingPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=AdvanceBooking")}getUser(l){return this.http.get(this.apiUrl+"/pv-api/contact-user/?search="+l)}getAdvanceBookingfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/advance_booking/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getAdvanceBooking(){return this.http.get(this.apiUrl+"/pv-api/advance_booking/")}getAdvanceBookingById(l){return this.http.get(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`)}AdvanceBookingIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`,n)}addAdvanceBooking(l){return this.http.post(this.apiUrl+"/pv-api/advance_booking/",l)}updateAdvanceBooking(l,n){return this.http.put(`${this.apiUrl+"/pv-api/advance_booking/?id="}${n}`,l)}deleteAdvanceBooking(l){return this.http.delete(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`)}getDelivryChallanFY(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/delivery_challan/";const a=[];if(l&&a.push(`financial_year=${l}`),n&&n.length>0){const s=JSON.stringify(n);console.log(s),console.log(s?.length),a.push(`branch=${s}`)}return a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getDelivryChallan(){return this.http.get(this.apiUrl+"/pv-api/delivery_challan/")}getDelivryChallanById(l){return this.http.get(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`)}DelivryChallanIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`,n)}addDelivryChallan(l){return this.http.post(this.apiUrl+"/pv-api/delivery_challan/",l)}updateDelivryChallan(l,n){return this.http.put(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${n}`,l)}deleteDelivryChallan(l){return this.http.delete(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`)}advanceBookingStatusUpdate(l){return this.http.post(this.apiUrl+"/pv-api/advance_booking_status_update/",l)}deliveryChallanStatusUpdate(l){return this.http.post(this.apiUrl+"/pv-api/delivery_challan_status_update/",l)}}return h.\u0275fac=function(l){return new(l||h)(_.LFG(y.eN))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},86076:(D,f,d)=>{d.r(f),d.d(f,{DetailsSalesReturnModule:()=>j});var g=d(36895),_=d(4392),y=d(35337),t=d(94650),h=d(42917),x=d(72170),l=d(3848),n=d(97392),i=d(24006),a=d(54333),s=d(54040);function B(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA()()),2&o){const e=c.$implicit,r=c.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e?null:e.item_name),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.subcategory?null:e.barcode.product.subcategory.title),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.brand?null:e.barcode.product.brand.title),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.hsncode?null:e.barcode.product.hsncode.hsn_code),t.xp6(2),t.Oqu(null==e?null:e.price),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.deduction),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.total)}}const C=function(o,c,e){return{"bg-lightgreen":o,"bg-lightred":c,"bg-lightyellow":e}};function P(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"button",22),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.printForm())}),t._UZ(6,"img",23),t.qZA(),t.TgZ(7,"button",24),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.generatePdf())}),t._UZ(8,"i",25),t.qZA()(),t.TgZ(9,"div",26)(10,"div",27)(11,"div",28)(12,"div",29)(13,"div",30)(14,"div",31)(15,"div",32)(16,"div",33)(17,"div",34),t._UZ(18,"img",35),t.TgZ(19,"p",36),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA(),t.TgZ(25,"p"),t._uU(26),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()()()(),t.TgZ(29,"div",37)(30,"div",38)(31,"div",39)(32,"h1",40),t._uU(33,"Invoice"),t.qZA(),t.TgZ(34,"p")(35,"span"),t._uU(36,"Invoice Date"),t.qZA(),t._uU(37),t.ALo(38,"date"),t.qZA(),t.TgZ(39,"p")(40,"span"),t._uU(41,"Invoice NO"),t.qZA(),t._uU(42),t.qZA(),t.TgZ(43,"p")(44,"span"),t._uU(45,"Return Date"),t.qZA(),t._uU(46),t.ALo(47,"date"),t.qZA()()()()()()()(),t.TgZ(48,"div",4)(49,"p",41),t._uU(50,"Sales Return Details "),t.qZA()(),t.TgZ(51,"div",42)(52,"div",29)(53,"div",30)(54,"div",43)(55,"div")(56,"p",41),t._uU(57,"Billing Address"),t.qZA(),t.TgZ(58,"p",44),t._uU(59),t._UZ(60,"br"),t._uU(61),t._UZ(62,"br"),t._uU(63),t._UZ(64,"br"),t._uU(65),t.qZA()(),t.TgZ(66,"div")(67,"p",41),t._uU(68,"Shipping Address"),t.qZA(),t.TgZ(69,"p",44),t._uU(70),t._UZ(71,"br"),t._uU(72),t._UZ(73,"br"),t._uU(74),t._UZ(75,"br"),t._uU(76),t.qZA()()()()()(),t.TgZ(77,"div",45)(78,"div",29)(79,"div",30)(80,"div",46)(81,"table",47)(82,"thead")(83,"tr")(84,"th",48),t._uU(85," Return Bill No."),t.qZA(),t.TgZ(86,"th",48),t._uU(87," Party Name"),t.qZA(),t.TgZ(88,"th",48),t._uU(89," Biller Name"),t.qZA(),t.TgZ(90,"th",48),t._uU(91," Sales Bill"),t.qZA(),t.TgZ(92,"th",48),t._uU(93,"Sale Bill Date"),t.qZA(),t.TgZ(94,"th",48),t._uU(95,"Sale Return Date"),t.qZA()()(),t.TgZ(96,"tbody")(97,"tr")(98,"td",49),t._uU(99),t.qZA(),t.TgZ(100,"td",49),t._uU(101),t.qZA(),t.TgZ(102,"td",49),t._uU(103),t.qZA(),t.TgZ(104,"td",49),t._uU(105),t.qZA(),t.TgZ(106,"td",49),t._uU(107),t.ALo(108,"date"),t.qZA(),t.TgZ(109,"td",49),t._uU(110),t.ALo(111,"date"),t.qZA()()()()()()()(),t.TgZ(112,"div",50)(113,"div",29)(114,"div",4)(115,"p",51),t._uU(116,"Product Details"),t.qZA()(),t.TgZ(117,"div",52)(118,"div")(119,"table")(120,"thead")(121,"tr")(122,"th"),t._uU(123,"#"),t.qZA(),t.TgZ(124,"th"),t._uU(125,"Barcode/SKU"),t.qZA(),t.TgZ(126,"th"),t._uU(127,"Product Name"),t.qZA(),t.TgZ(128,"th"),t._uU(129,"Sub Category"),t.qZA(),t.TgZ(130,"th"),t._uU(131,"Brand"),t.qZA(),t.TgZ(132,"th"),t._uU(133,"HSN Code"),t.qZA(),t.TgZ(134,"th"),t._uU(135,"Price"),t.qZA(),t.TgZ(136,"th"),t._uU(137,"QTY"),t.qZA(),t.TgZ(138,"th"),t._uU(139,"Deduction %"),t.qZA(),t.TgZ(140,"th"),t._uU(141,"Tax %"),t.qZA(),t.TgZ(142,"th"),t._uU(143,"Total"),t.qZA()()(),t.TgZ(144,"tbody"),t.YNc(145,B,23,11,"tr",53),t.TgZ(146,"tr",54)(147,"td",55)(148,"strong"),t._uU(149),t.qZA()(),t._UZ(150,"td"),t.TgZ(151,"td",56),t._uU(152),t.qZA(),t.TgZ(153,"td",56),t._uU(154),t.qZA(),t._UZ(155,"td"),t.TgZ(156,"td",56),t._uU(157),t.qZA()()()()()(),t.TgZ(158,"div",30)(159,"p"),t._uU(160,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(161,"br"),t._uU(162," Overdue invoices will be charged 24% interest. "),t.qZA()()()(),t.TgZ(163,"div",57)(164,"div",58)(165,"div",59)(166,"strong"),t._uU(167,"Note:"),t.qZA(),t.TgZ(168,"div",60)(169,"p"),t._uU(170),t.qZA()()()(),t.TgZ(171,"div",61)(172,"div",62)(173,"div",63)(174,"ul")(175,"li",64)(176,"h4"),t._uU(177,"Sub Total"),t.qZA(),t.TgZ(178,"h5"),t._uU(179),t.qZA()(),t.TgZ(180,"li",64)(181,"h4"),t._uU(182,"Total Tax"),t.qZA(),t.TgZ(183,"h5"),t._uU(184),t.qZA()(),t.TgZ(185,"li",64)(186,"h4"),t._uU(187,"Round Off"),t.qZA(),t.TgZ(188,"h5"),t._uU(189),t.qZA()(),t.TgZ(190,"li",64)(191,"h4"),t._uU(192,"Total"),t.qZA(),t.TgZ(193,"h5"),t._uU(194),t.qZA()()()()()()(),t.TgZ(195,"div",65)(196,"p")(197,"strong"),t._uU(198,"Status : "),t.qZA(),t.TgZ(199,"span",66),t._uU(200),t.qZA()()(),t.TgZ(201,"div",67)(202,"p"),t._uU(203,"Please make cheques payable to "),t.TgZ(204,"span"),t._uU(205,"PV LTD."),t.qZA()()()()()()()()()}if(2&o){const e=t.oxw();t.xp6(20),t.hij(" ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij(" ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.email,""),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(38,36,null==e.returnBillDetail?null:e.returnBillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(" : ",null==e.returnBillDetail?null:e.returnBillDetail.sale_return_bill_no," "),t.xp6(4),t.hij(" : ",t.xi3(47,39,null==e.returnBillDetail?null:e.returnBillDetail.return_date,"dd-MMMM-yyyy"),""),t.xp6(13),t.AsE(" ",null==e.companyDetails?null:e.companyDetails.name," ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.party?null:e.returnBillDetail.party.email," "),t.xp6(5),t.AsE(" ",null==e.companyDetails?null:e.companyDetails.name," ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.party?null:e.returnBillDetail.party.email," "),t.xp6(23),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.sale_return_bill_no," "),t.xp6(2),t.hij(" ",(null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.name)+" ("+(null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.user_type)+")",""),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.sale_bill||null==e.returnBillDetail.sale_bill.sales_man?null:e.returnBillDetail.sale_bill.sales_man.name," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.sale_bill?null:e.returnBillDetail.sale_bill.customer_bill_no," "),t.xp6(2),t.hij(" ",t.xi3(108,42,null==e.returnBillDetail?null:e.returnBillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",t.xi3(111,45,null==e.returnBillDetail?null:e.returnBillDetail.return_date,"dd-MMMM-yyyy"),""),t.xp6(35),t.Q6J("ngForOf",null==e.returnBillDetail?null:e.returnBillDetail.cart),t.xp6(4),t.hij("Total: ",e.totalItems,""),t.xp6(3),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.total_qty,""),t.xp6(2),t.hij(" ",(null==e.returnBillDetail?null:e.returnBillDetail.total_discount)+"% (\u20b9"+(null==e.totaldiscount?null:e.totaldiscount.toFixed(2))+")",""),t.xp6(3),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.total,""),t.xp6(13),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.note),t.xp6(9),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.subtotal," "),t.xp6(5),t.hij("",e.calculateTax," "),t.xp6(5),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.roundoff," "),t.xp6(5),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.total," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(48,C,"Used"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Pending"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Draft"===(null==e.returnBillDetail?null:e.returnBillDetail.status)||"New"===(null==e.returnBillDetail?null:e.returnBillDetail.status))),t.xp6(1),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.status)}}function U(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&o){const e=c.$implicit,r=c.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const b=function(o,c){return{itemsPerPage:o,currentPage:c}};function M(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",68),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",68),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",68),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",68),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,U,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",69)(24,"div",70),t._uU(25," Show per page "),t.TgZ(26,"select",71,72),t.NdJ("ngModelChange",function(u){t.CHM(e);const p=t.oxw();return t.KtG(p.itemsPerPage=u)})("change",function(){t.CHM(e);const u=t.MAs(27),p=t.oxw();return t.KtG(p.changePg(u.value))}),t.TgZ(28,"option",73),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",74),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",75),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",76),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",77),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",78),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",79)(41,"div",80)(42,"pagination-controls",81),t.NdJ("pageChange",function(u){t.CHM(e);const p=t.oxw();return t.KtG(p.p=u)}),t.qZA(),t.TgZ(43,"div",82),t._uU(44),t.qZA()()()()()()()()}if(2&o){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.returnBillDetail?null:e.returnBillDetail.logs,e.key,e.reverse),t.WLB(12,b,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.returnBillDetail||null==e.returnBillDetail.logs?null:e.returnBillDetail.logs.length," of ",e.p," entries")}}function O(o,c){1&o&&(t.TgZ(0,"div",56)(1,"span",83),t._uU(2,"Logs Not Available"),t.qZA()())}const T=[{path:"",component:(()=>{class o{constructor(e,r,u,p,m){this.companyService=e,this.Arout=r,this.saleService=u,this.location=p,this._pdf=m,this.totalmrp=[],this.totalMrp=0,this.totalDiscount=[],this.discount=0,this.totaldiscount=0,this.calculateTax=0,this.totalTax=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.saleService.getSaleReturnById(this.id).subscribe(e=>{this.id==e.id&&(this.returnBillDetail=e,this.totalItems=this.returnBillDetail?.cart?.length,this.returnBillDetail?.cart?.forEach(r=>{r.price=parseFloat(r.price+"");let u=r.price.toFixed(2)*r.deduction/100;console.log(r.price.toFixed(2)-u.toFixed(2)),this.discount=r.price.toFixed(2)-u.toFixed(2),this.totaldiscount=0,this.totalDiscount.push(u),console.log(this.totalDiscount),this.totalDiscount?.forEach(v=>{this.totaldiscount+=v}),console.log(this.totaldiscount.toFixed(2));let p=r?.price?.toFixed(2)*r?.deduction/100;console.log(r?.price?.toFixed(2)-p.toFixed(2)),this.discount=r?.price?.toFixed(2)-p.toFixed(2);let m=this.discount*r?.tax/100;console.log(m,"taxprice"),this.totalTax.push(m*r?.qty||0),console.log(this.totalTax);let Z=0;this.totalTax.forEach(v=>{Z+=parseFloat(v)}),this.calculateTax=Z.toFixed(2),console.log(this.calculateTax),this.totalmrp.push(r?.price),this.totalMrp=0,this?.totalmrp?.forEach(v=>{this.totalMrp+=v})}),this.supplierAddress=e,this.supplierAddress?.customer?.detail?.address.map(r=>{"Billing"==r?.address_type?(this.selectedAddressBilling=r,console.log(this.selectedAddressBilling)):"Shipping"==r.address_type&&(this.selectedAddressShipping=r,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){let e=parseFloat(this.totalMrp+"");console.log(typeof this.totalMrp);let r=new Array;this.returnBillDetail?.cart.forEach((p,m)=>{r.push([`${m+1}`,`${p?.barcode?.sku}`,`${p?.item_name}`,`${p?.price}`,`${p?.qty}`,`${p?.discount??""}`,`${p?.tax??""}`,`${p?.total}`])});const u={Type:"Sales Return",Fist_date:this.returnBillDetail?.bill_date,Secouand_date:this.returnBillDetail?.return_date,thead1:["Return Bill No.","Party Name","Sales Bill","Sales Bill Date","Sale Return Date"],tbody1:[`${this.returnBillDetail?.sale_return_bill_no}`,this.returnBillDetail?.customer?.name+" ("+this.returnBillDetail?.customer?.user_type+")",`${this.returnBillDetail?.sale_bill?.customer_bill_no}`,`${this.returnBillDetail?.bill_date}`,`${this.returnBillDetail?.return_date}`],table2head:["#","Barcode/SKU","Product Name","Price","QTY","Discount(%)","Tax(%)","Total"],foot2:[[{content:"Total",colSpan:3,styles:{halign:"center"}},{content:`${e.toFixed(2)}`,styles:{halign:"center"}},{content:`${this.returnBillDetail?.total_qty}`,styles:{halign:"center"}},{content:`${this.returnBillDetail?.total_discount}%`,styles:{halign:"center"}},{content:`${this.returnBillDetail?.total_tax}%`,styles:{halign:"center"}},{content:`${this.returnBillDetail?.total}`,styles:{halign:"center"}}],[{content:"Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.",colSpan:8,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Sub Total ",colSpan:2,styles:{halign:"right"}},{content:`${this.returnBillDetail?.subtotal}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Round Off ",colSpan:2,styles:{halign:"right"}},{content:`${this.returnBillDetail?.roundoff}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5,styles:{halign:"left"}},{content:"Total ",colSpan:2,styles:{halign:"right"}},{content:`${this.returnBillDetail?.total}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"",colSpan:3}]],company_name:this.companyDetails?.name,company_gst:this.companyDetails?.gst,top_left_address_line1:`${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,top_left_address_line2:`${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,top_left_phone:this.companyDetails?.phone,top_left_email:this.companyDetails?.email,BILLING_ADDRESS:{address_line_1:this.selectedAddressBilling?.address_line_1??"",address_line_2:this.selectedAddressBilling?.address_line_2??" , "+this.selectedAddressBilling?.city?.city??"",address_line_3:this.selectedAddressBilling?.state?.state+" , "+this.selectedAddressBilling?.country?.country_name,phone:this.returnBillDetail?.customer?.phone_number??"",email:this.returnBillDetail?.party?.email??""},SHIPPING_ADDRESS:{address_line_1:this.selectedAddressShipping?.address_line_1??"",address_line_2:this.selectedAddressShipping?.address_line_2??" , "+this.selectedAddressShipping?.city?.city??"",address_line_3:this.selectedAddressBilling?.state?.state+" , "+this.selectedAddressBilling?.country?.country_name,phone:this.returnBillDetail?.customer?.phone_number??"",email:this.returnBillDetail?.party?.email??""},table2body:r,order_no:this.returnBillDetail?.sale_return_bill_no};this._pdf.generatePdf(u)}printForm(){const e=document.getElementById("debitNote");if(!e)return void console.error("Form not found");const r=e.cloneNode(!0),u=document.createElement("div");u.id="printContainer",u.appendChild(r);const p=document.createElement("style");p.id="printStyle",p.textContent="\n            @media print {\n                body * {\n                    visibility: hidden;\n                }\n                #printContainer, #printContainer * {\n                    visibility: visible;\n                }\n                #printContainer {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                }\n            }\n        ",document.head.appendChild(p),document.body.appendChild(u),window.print(),window.addEventListener("afterprint",()=>{this.clearPrintContainer()}),setTimeout(()=>{this.clearPrintContainer()},2e3)}clearPrintContainer(){const e=document.getElementById("printContainer"),r=document.getElementById("printStyle");e&&e.remove(),r&&r.remove()}sort(e){this.key=e,this.reverse=!this.reverse}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.returnBillDetail?.logs?.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.J),t.Y36(_.gz),t.Y36(x.M),t.Y36(g.Ye),t.Y36(y.D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-sales-return"]],features:[t._Bn([g.uU,y.D])],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Sales Return"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","align-items-center","justify-content-end"],["data-bs-toggle","tooltip","title","print",1,"me-3","d-flex","border-0","bg-white",3,"click"],["src","assets/img/icons/printer.svg","alt","img",1,"print-icon-wrapper"],[1,"chat-attach-download","border-0","bg-white",3,"click"],[1,"fas","fa-download","download-icon"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[1,"heading2"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","6",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return r.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Return"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Return"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Sales Return "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,P,206,52,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,M,45,15,"div",15),t.YNc(21,O,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//sales/updatesalesReturn/",null==r.returnBillDetail?null:r.returnBillDetail.id,""),t.xp6(6),t.Q6J("ngIf",r.returnBillDetail),t.xp6(2),t.Q6J("ngIf",(null==r.returnBillDetail||null==r.returnBillDetail.logs?null:r.returnBillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==r.returnBillDetail||null==r.returnBillDetail.logs?null:r.returnBillDetail.logs.length)))},dependencies:[g.mk,g.sg,g.O5,_.yS,l.SP,l.uX,n.Hw,i.YN,i.Kr,i.EJ,i.JJ,i.On,a.LS,g.uU,a._s,s.T],styles:[".print-icon-wrapper[_ngcontent-%COMP%]{height:24px}.download-icon[_ngcontent-%COMP%]{color:#848080;font-size:24px}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),o})(),canActivate:[d(30597).l],data:{allowedRoles:["view_salereturn"]}}];let q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(T),_.Bz]}),o})();var $=d(95113),w=d(56709),R=d(90455),k=d(8468);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,q,l.Nh,n.Ps,$.LD,w.p9,R.rP,i.u5,k.I]}),o})()}}]);