"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[72930],{72170:(U,M,d)=>{d.d(M,{M:()=>P});var g=d(92340),h=d(94650),C=d(80529);let P=(()=>{class _{constructor(l){this.http=l,this.apiUrl=`${g.N.api}`}getSalesOrderfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_order/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getSalesOrder(){return this.http.get(this.apiUrl+"/pv-api/sale_order/")}getSalesOrderByUserId(l){return this.http.get(this.apiUrl+"/pv-api/sale_order/?user_id="+l)}getSalesOrderById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`)}SalesOrderIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`,n)}addSalesOrder(l){return this.http.post(this.apiUrl+"/pv-api/sale_order/",l)}updateSalesOrder(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_order/?sale_order_id="}${n}`,l)}deleteSalesOrder(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_order/?id="}${l}`)}getSalesEstimatefy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/estimate/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getSalesEstimate(){return this.http.get(this.apiUrl+"/pv-api/estimate/")}getSalesEstimateByUserId(l){return this.http.get(this.apiUrl+"/pv-api/estimate/?user_id="+l)}getSalesEstimateById(l){return this.http.get(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`)}SalesEstimateIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`,n)}addSalesEstimate(l){return this.http.post(this.apiUrl+"/pv-api/estimate/",l)}updateSalesEstimate(l,n){return this.http.put(`${this.apiUrl+"/pv-api/estimate/?estimate_id="}${n}`,l)}deleteSalesEstimate(l){return this.http.delete(`${this.apiUrl+"/pv-api/estimate/?id="}${l}`)}getSalesBillfyWithProductId(l,n,i){let s=this.apiUrl+"/pv-api/sale_bill/";const r=new URLSearchParams;return r.append("financial_year",l),r.append("product_id",String(n)),r.append("start_date",i.s),r.append("end_date",i.e),this.http.get(s+(r.toString()?"?"+r.toString():""))}getSalesBillfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_bill/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getSalesBillById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`)}getSalesBillByUserId(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?user_id="}${l}`)}SalesBillIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`,n)}addSalesBill(l){return this.http.post(this.apiUrl+"/pv-api/sale_bill/",l)}updateSalesBill(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_bill/?sale_bill_id="}${n}`,l)}deleteSalesBill(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_bill/?id="}${l}`)}getSalesMaterialOutwardfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/material_outward/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getSalesMaterialOutward(){return this.http.get(this.apiUrl+"/pv-api/material_outward/")}getSalesMaterialOutwardById(l){return this.http.get(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`)}SalesMaterialOutwardIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`,n)}addSalesMaterialOutward(l){return this.http.post(this.apiUrl+"/pv-api/material_outward/",l)}updateSalesMaterialOutward(l,n){return this.http.put(`${this.apiUrl+"/pv-api/material_outward/?material_outward_id="}${n}`,l)}deleteSalesMaterialOutward(l){return this.http.delete(`${this.apiUrl+"/pv-api/material_outward/?id="}${l}`)}getSaleReturnfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/sale_return/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getSaleReturn(){return this.http.get(this.apiUrl+"/pv-api/sale_return/")}getSaleReturnById(l){return this.http.get(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`)}SaleReturnIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`,n)}addSaleReturn(l){return this.http.post(this.apiUrl+"/pv-api/sale_return/",l)}updateSaleReturn(l,n){return this.http.put(`${this.apiUrl+"/pv-api/sale_return/?sale_return_id="}${n}`,l)}deleteSaleReturn(l){return this.http.delete(`${this.apiUrl+"/pv-api/sale_return/?id="}${l}`)}getSearchProductById(l){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${l}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}filterVariant(l,n,i){let s=this.apiUrl+"/pv-api/sales_product_filter/";const r=[];return l&&r.push(`category=${l}`),n&&r.push(`subcategory=${n}`),i&&r.push(`search=${i}`),r.length>0&&(s+="?"+r.join("&")),this.http.get(s)}getSaleOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleOrder")}getSaleBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleBill")}getSaleReturnPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleReturn")}getEstimatePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=Estimate")}getMaterialOutwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialOutward")}getAdvanceBookingPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=AdvanceBooking")}getUser(l){return this.http.get(this.apiUrl+"/pv-api/contact-user/?search="+l)}getAdvanceBookingfy(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/advance_booking/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getAdvanceBooking(){return this.http.get(this.apiUrl+"/pv-api/advance_booking/")}getAdvanceBookingById(l){return this.http.get(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`)}AdvanceBookingIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`,n)}addAdvanceBooking(l){return this.http.post(this.apiUrl+"/pv-api/advance_booking/",l)}updateAdvanceBooking(l,n){return this.http.put(`${this.apiUrl+"/pv-api/advance_booking/?id="}${n}`,l)}deleteAdvanceBooking(l){return this.http.delete(`${this.apiUrl+"/pv-api/advance_booking/?id="}${l}`)}getDelivryChallanFY(l,n){console.log(n,"branch"),console.log(n.length,"branch");let i=this.apiUrl+"/pv-api/delivery_challan/";const s=[];if(l&&s.push(`financial_year=${l}`),n&&n.length>0){const r=JSON.stringify(n);console.log(r),console.log(r?.length),s.push(`branch=${r}`)}return s.length>0&&(i+="?"+s.join("&")),this.http.get(i)}getDelivryChallan(){return this.http.get(this.apiUrl+"/pv-api/delivery_challan/")}getDelivryChallanById(l){return this.http.get(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`)}DelivryChallanIsActive(l,n){return this.http.patch(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`,n)}addDelivryChallan(l){return this.http.post(this.apiUrl+"/pv-api/delivery_challan/",l)}updateDelivryChallan(l,n){return this.http.put(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${n}`,l)}deleteDelivryChallan(l){return this.http.delete(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${l}`)}advanceBookingStatusUpdate(l){return this.http.post(this.apiUrl+"/pv-api/advance_booking_status_update/",l)}deliveryChallanStatusUpdate(l){return this.http.post(this.apiUrl+"/pv-api/delivery_challan_status_update/",l)}}return _.\u0275fac=function(l){return new(l||_)(h.LFG(C.eN))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},72930:(U,M,d)=>{d.r(M),d.d(M,{DetailsMaterialOutwardModule:()=>J});var g=d(36895),h=d(4392),C=d(4159),P=d.n(C),_=d(96166),t=d(94650),l=d(42917),n=d(72170),i=d(3848),s=d(97392),r=d(24006),v=d(54333),y=d(54040);function f(a,p){1&a&&(t.TgZ(0,"a",17),t._UZ(1,"img",18),t._uU(2,"Edit Sales Material Outward "),t.qZA())}function m(a,p){if(1&a&&(t.TgZ(0,"a",19),t._UZ(1,"img",18),t._uU(2,"Edit Sales Material Outward "),t.qZA()),2&a){const e=t.oxw();t.MGl("routerLink","//sales/updatesalesMaterialOutward/",null==e.returnBillDetail?null:e.returnBillDetail.id,"")}}function O(a,p){if(1&a&&(t.TgZ(0,"div")(1,"p",44),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&a){const e=t.oxw(2);let o;t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",null===(o=null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)||void 0===o||o?null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name:""," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.email," ")}}function x(a,p){if(1&a&&(t.TgZ(0,"div")(1,"p",44),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&a){const e=t.oxw(2);let o;t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",null===(o=null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)||void 0===o||o?null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name:""," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.email," ")}}function b(a,p){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&a){const e=p.$implicit,o=p.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.subcategory?null:e.barcode.product.subcategory.title),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.brand?null:e.barcode.product.brand.title),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product||null==e.barcode.product.hsncode?null:e.barcode.product.hsncode.hsn_code),t.xp6(2),t.Oqu(null==e?null:e.qty)}}const D=function(a,p,e){return{"bg-lightgreen":a,"bg-lightred":p,"bg-lightyellow":e}};function Z(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"div",24)(5,"button",25),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.printForm())}),t._UZ(6,"img",26),t.qZA(),t.TgZ(7,"button",27),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.generatePdf())}),t._UZ(8,"i",28),t.qZA()(),t.TgZ(9,"div",29)(10,"div",30)(11,"div",31)(12,"div",32)(13,"div",33)(14,"div",34)(15,"div",35)(16,"div",36)(17,"div",37),t._UZ(18,"img",38),t.TgZ(19,"p",39),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA(),t.TgZ(25,"p"),t._uU(26),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()()()(),t.TgZ(29,"div",40)(30,"div",41)(31,"div",42)(32,"h1",43),t._uU(33,"Invoice"),t.qZA(),t.TgZ(34,"p")(35,"span"),t._uU(36,"Invoice Date"),t.qZA(),t._uU(37),t.ALo(38,"date"),t.qZA(),t.TgZ(39,"p")(40,"span"),t._uU(41,"Invoice NO "),t.qZA(),t._uU(42),t.qZA()()()()()()()(),t.TgZ(43,"div",4)(44,"p",44),t._uU(45,"Sales Material Outward Details "),t.qZA()(),t.TgZ(46,"div",45)(47,"div",32)(48,"div",33)(49,"div",46),t.YNc(50,O,11,4,"div",47),t.YNc(51,x,11,4,"div",47),t.qZA()()()(),t.TgZ(52,"div",48)(53,"div",32)(54,"div",33)(55,"div",49)(56,"table",50)(57,"thead")(58,"tr")(59,"th",51),t._uU(60," Voucher No."),t.qZA(),t.TgZ(61,"th",51),t._uU(62," Party Name"),t.qZA(),t.TgZ(63,"th",51),t._uU(64," Refund Status"),t.qZA(),t.TgZ(65,"th",51),t._uU(66,"Sale Material Outward Date"),t.qZA()()(),t.TgZ(67,"tbody")(68,"tr")(69,"td",52),t._uU(70),t.qZA(),t.TgZ(71,"td",52),t._uU(72),t.qZA(),t.TgZ(73,"td",52),t._uU(74),t.qZA(),t.TgZ(75,"td",53),t._uU(76),t.ALo(77,"date"),t.qZA()()()()()()()(),t.TgZ(78,"div",54)(79,"div",32)(80,"div",4)(81,"p",55),t._uU(82,"Product Details"),t.qZA()(),t.TgZ(83,"div",56)(84,"div")(85,"table")(86,"thead")(87,"tr")(88,"th"),t._uU(89,"#"),t.qZA(),t.TgZ(90,"th"),t._uU(91,"Barcode/SKU"),t.qZA(),t.TgZ(92,"th"),t._uU(93,"Product Name"),t.qZA(),t.TgZ(94,"th"),t._uU(95,"Sub Category"),t.qZA(),t.TgZ(96,"th"),t._uU(97,"Brand"),t.qZA(),t.TgZ(98,"th"),t._uU(99,"HSN Code"),t.qZA(),t.TgZ(100,"th"),t._uU(101,"QTY"),t.qZA()()(),t.TgZ(102,"tbody"),t.YNc(103,b,15,7,"tr",57),t.TgZ(104,"tr",58)(105,"td",59)(106,"strong"),t._uU(107,"Total"),t.qZA()(),t.TgZ(108,"td",60),t._uU(109),t.qZA()()()()()(),t.TgZ(110,"div",33)(111,"p"),t._uU(112,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(113,"br"),t._uU(114," Overdue invoices will be charged 24% interest. "),t.qZA()()()(),t.TgZ(115,"div",61)(116,"div",62)(117,"div",63)(118,"strong"),t._uU(119,"Note:"),t.qZA(),t.TgZ(120,"div",64)(121,"p"),t._uU(122),t.qZA()()()(),t.TgZ(123,"div",65)(124,"div",66)(125,"div",67)(126,"ul")(127,"li",68)(128,"h4"),t._uU(129,"Total QTY"),t.qZA(),t.TgZ(130,"h5"),t._uU(131),t.qZA()()()()()()(),t.TgZ(132,"div",69)(133,"p")(134,"strong"),t._uU(135,"Status : "),t.qZA(),t.TgZ(136,"span",70),t._uU(137),t.qZA()()(),t.TgZ(138,"div",71)(139,"p"),t._uU(140,"Please make cheques payable to "),t.TgZ(141,"span"),t._uU(142,"PV LTD."),t.qZA()()()()()()()()()}if(2&a){const e=t.oxw();t.xp6(20),t.hij(" ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij(" ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.email,""),t.xp6(2),t.hij(" ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(38,19,null==e.returnBillDetail?null:e.returnBillDetail.mo_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(": ",null==e.returnBillDetail?null:e.returnBillDetail.voucher_number," "),t.xp6(8),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(19),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.voucher_number,""),t.xp6(2),t.hij(" ",(null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.name)+" ("+(null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.user_type)+")",""),t.xp6(2),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.refund_status,""),t.xp6(2),t.hij(" ",t.xi3(77,22,null==e.returnBillDetail?null:e.returnBillDetail.mo_date,"dd-MMMM-yyyy"),""),t.xp6(27),t.Q6J("ngForOf",null==e.returnBillDetail?null:e.returnBillDetail.cart),t.xp6(6),t.hij(" ",null==e.returnBillDetail?null:e.returnBillDetail.total_qty,""),t.xp6(13),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.note),t.xp6(9),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.total_qty," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(25,D,"Received"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Pending"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Draft"===(null==e.returnBillDetail?null:e.returnBillDetail.status)||"New"===(null==e.returnBillDetail?null:e.returnBillDetail.status))),t.xp6(1),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.status)}}function A(a,p){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&a){const e=p.$implicit,o=p.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const B=function(a,p){return{itemsPerPage:a,currentPage:p}};function S(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",54)(1,"div",32)(2,"div",4)(3,"p",55),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",56)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,A,10,7,"tr",57),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",34)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76,77),t.NdJ("ngModelChange",function(u){t.CHM(e);const c=t.oxw();return t.KtG(c.itemsPerPage=u)})("change",function(){t.CHM(e);const u=t.MAs(27),c=t.oxw();return t.KtG(c.changePg(u.value))}),t.TgZ(28,"option",78),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",79),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",80),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",81),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",82),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",83),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",84)(41,"div",85)(42,"pagination-controls",86),t.NdJ("pageChange",function(u){t.CHM(e);const c=t.oxw();return t.KtG(c.p=u)}),t.qZA(),t.TgZ(43,"div",87),t._uU(44),t.qZA()()()()()()()()}if(2&a){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.returnBillDetail?null:e.returnBillDetail.logs,e.key,e.reverse),t.WLB(12,B,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.returnBillDetail||null==e.returnBillDetail.logs?null:e.returnBillDetail.logs.length," of ",e.p," entries")}}function w(a,p){1&a&&(t.TgZ(0,"div",60)(1,"span",88),t._uU(2,"Logs Not Available"),t.qZA()())}const q=[{path:"",component:(()=>{class a{constructor(e,o,u,c){this.companyService=e,this.Arout=o,this.saleService=u,this.location=c,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.calculateTax=0,this.discount=0,this.totalTax=[],this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.saleService.getSalesMaterialOutwardById(this.id).subscribe(e=>{this.id==e.id&&(this.returnBillDetail=e,this.supplierAddress=e,this.supplierAddress?.customer?.detail?.address.map(o=>{"Billing"==o?.address_type?(this.selectedAddressBilling=o,console.log(this.selectedAddressBilling)):"Shipping"==o.address_type&&(this.selectedAddressShipping=o,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&P()(e).then(o=>{this.loaderPdf=!1;const u=o.toDataURL("image/png"),c=new _.jsPDF("p","mm","a4"),F=c.internal.pageSize.getWidth(),L=c.internal.pageSize.getHeight();c.addImage(u,"JPEG",0,0,F,L),c.save("MaterialOutward.pdf")})}printForm(){const e=document.getElementById("debitNote");if(!e)return void console.error("Form not found");const o=e.cloneNode(!0),u=document.createElement("div");u.id="printContainer",u.appendChild(o);const c=document.createElement("style");c.id="printStyle",c.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n        }\n    ",document.head.appendChild(c),document.body.appendChild(u),window.print(),window.addEventListener("afterprint",()=>{this.clearPrintContainer()}),setTimeout(()=>{this.clearPrintContainer()},2e3)}clearPrintContainer(){const e=document.getElementById("printContainer"),o=document.getElementById("printStyle");e&&e.remove(),o&&o.remove()}sort(e){this.key=e,this.reverse=!this.reverse}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.returnBillDetail?.logs?.length)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.J),t.Y36(h.gz),t.Y36(n.M),t.Y36(g.Ye))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-material-outward"]],decls:21,vars:5,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],["class","btn btn-added","style","opacity: 0.5;",4,"ngIf"],["class","btn btn-added",3,"routerLink",4,"ngIf"],["animationDuration","0ms"],["tabGroup",""],["label","Material Outward"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"btn","btn-added",2,"opacity","0.5"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],[1,"btn","btn-added",3,"routerLink"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","align-items-center","justify-content-end"],["data-bs-toggle","tooltip","title","print",1,"me-3","d-flex","border-0","bg-white",3,"click"],["src","assets/img/icons/printer.svg","alt","img",1,"print-icon-wrapper"],[1,"chat-attach-download","border-0","bg-white",3,"click"],[1,"fas","fa-download","download-icon"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"text-center",2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","6",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return o.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Material Outward"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Material Outward"),t.qZA()(),t.TgZ(11,"div",7),t.YNc(12,f,3,0,"a",8),t.YNc(13,m,3,1,"a",9),t.qZA()(),t.TgZ(14,"mat-tab-group",10,11)(16,"mat-tab",12),t.YNc(17,Z,143,29,"div",13),t.qZA(),t.TgZ(18,"mat-tab",14),t.YNc(19,S,45,15,"div",15),t.YNc(20,w,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.Q6J("ngIf","Completed"===(null==o.returnBillDetail?null:o.returnBillDetail.status)),t.xp6(1),t.Q6J("ngIf","Completed"!==(null==o.returnBillDetail?null:o.returnBillDetail.status)),t.xp6(4),t.Q6J("ngIf",o.returnBillDetail),t.xp6(2),t.Q6J("ngIf",(null==o.returnBillDetail||null==o.returnBillDetail.logs?null:o.returnBillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==o.returnBillDetail||null==o.returnBillDetail.logs?null:o.returnBillDetail.logs.length)))},dependencies:[g.mk,g.sg,g.O5,h.yS,i.SP,i.uX,s.Hw,r.YN,r.Kr,r.EJ,r.JJ,r.On,v.LS,g.uU,v._s,y.T],styles:[".print-icon-wrapper[_ngcontent-%COMP%]{height:24px}.download-icon[_ngcontent-%COMP%]{color:#848080;font-size:24px}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),a})(),canActivate:[d(30597).l],data:{allowedRoles:["view_materialoutward"]}}];let I=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(q),h.Bz]}),a})();var E=d(95113),N=d(56709),k=d(90455),j=d(8468);let J=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,I,i.Nh,s.Ps,E.LD,N.p9,k.rP,r.u5,j.I]}),a})()},30597:(U,M,d)=>{d.d(M,{l:()=>t});var g=d(94650),h=d(4392),C=d(97185),P=d(42917),_=d(80927);let t=(()=>{class l{constructor(i,s,r,v,y){this.router=i,this.Arout=s,this.toastr=r,this.profileService=v,this.coreService=y}canActivate(i,s){const r=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(v=>{this.userDetails=v,this.permissions=this.userDetails?.permission}),r){const v=i.data.allowedRoles,y=r.some(m=>v.includes(m.codename));let f=this.coreService.profileData$.value;if(f&&f.username){this.userDetails=f,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(f);const m=f?.permission,O=this.profileService.getUserDetails();(!O||O.length!==m.length)&&(this.profileService.setUserPermission(m),window.location.reload())}else this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const O=m?.permission,x=this.profileService.getUserDetails();(!x||x.length!==O.length)&&(this.profileService.setUserPermission(O),window.location.reload())});if(y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return l.\u0275fac=function(i){return new(i||l)(g.LFG(h.F0),g.LFG(h.gz),g.LFG(C._W),g.LFG(P.J),g.LFG(_.p))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);