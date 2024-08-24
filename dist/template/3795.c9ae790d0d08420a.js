"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3795],{3795:(E,m,s)=>{s.r(m),s.d(m,{DetailsSaleBillModule:()=>R});var c=s(36895),g=s(4392),f=s(35337),t=s(94650),B=s(42917),y=s(72170),_=s(3848),Z=s(97392),u=s(24006),D=s(54333),b=s(54040);function M(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"button",68),t.NdJ("click",function(){t.CHM(l);const i=t.oxw(2);return t.KtG(i.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function C(n,o){1&n&&(t.TgZ(0,"button",69),t._UZ(1,"span",70),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",71),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const l=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==l.selectedAddressBilling?null:l.selectedAddressBilling.address_line_1)||(null==l.selectedAddressBilling?null:l.selectedAddressBilling.address_line_1)+" , "+(null==l.selectedAddressBilling?null:l.selectedAddressBilling.address_line_2)==null?"":(null==l.selectedAddressBilling?null:l.selectedAddressBilling.address_line_2)+" , "+(null==l.selectedAddressBilling||null==l.selectedAddressBilling.city?null:l.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==l.selectedAddressBilling||null==l.selectedAddressBilling.state?null:l.selectedAddressBilling.state.state)+" , "+(null==l.selectedAddressBilling||null==l.selectedAddressBilling.country?null:l.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.email," ")}}function v(n,o){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",71),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const l=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==l.selectedAddressShipping?null:l.selectedAddressShipping.address_line_1)||(null==l.selectedAddressShipping?null:l.selectedAddressShipping.address_line_1)+" , "+(null==l.selectedAddressShipping?null:l.selectedAddressShipping.address_line_2)==null?"":(null==l.selectedAddressShipping?null:l.selectedAddressShipping.address_line_2)+" , "+(null==l.selectedAddressShipping||null==l.selectedAddressShipping.city?null:l.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==l.selectedAddressBilling||null==l.selectedAddressBilling.state?null:l.selectedAddressBilling.state.state)+" , "+(null==l.selectedAddressBilling||null==l.selectedAddressBilling.country?null:l.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.email," ")}}function T(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&n){const l=o.$implicit,e=o.index;t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Oqu(null==l||null==l.barcode?null:l.barcode.sku),t.xp6(2),t.Oqu(null==l?null:l.item_name),t.xp6(2),t.Oqu(null==l?null:l.price),t.xp6(2),t.Oqu(null==l?null:l.qty),t.xp6(2),t.Oqu(null==l?null:l.discount),t.xp6(2),t.Oqu((null==l?null:l.additional_discount)||0),t.xp6(2),t.Oqu(null==l?null:l.tax),t.xp6(2),t.Oqu(null==l?null:l.total)}}const O=function(n,o,l){return{"bg-lightgreen":n,"bg-lightred":o,"bg-lightyellow":l}};function U(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,M,2,0,"button",22),t.ALo(8,"async"),t.YNc(9,C,3,0,"button",23),t.ALo(10,"async"),t.qZA(),t.TgZ(11,"p",24)(12,"button",25),t.NdJ("click",function(){t.CHM(l);const i=t.oxw();return t.KtG(i.printForm())}),t._uU(13,"Print Invoice"),t.qZA()(),t.TgZ(14,"div",26)(15,"div",27)(16,"div",28)(17,"div",29)(18,"div",30)(19,"div",31)(20,"div",32)(21,"div",33)(22,"div",34),t._UZ(23,"img",35),t.TgZ(24,"p",36)(25,"span"),t._uU(26,"GST"),t.qZA(),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"span"),t._uU(30,"Company Name"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p")(33,"span"),t._uU(34,"Financial Year"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"p")(37,"span"),t._uU(38,"Address"),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"p")(41,"span"),t._uU(42,"Phone"),t.qZA(),t._uU(43),t.qZA()()()(),t.TgZ(44,"div",37)(45,"div",38)(46,"div",39)(47,"h1",40),t._uU(48,"Invoice"),t.qZA(),t.TgZ(49,"p")(50,"span"),t._uU(51,"Invoice Date"),t.qZA(),t._uU(52),t.ALo(53,"date"),t.qZA(),t.TgZ(54,"p")(55,"span"),t._uU(56,"Invoice NO"),t.qZA(),t._uU(57),t.qZA(),t.TgZ(58,"p")(59,"span"),t._uU(60,"Bill Date"),t.qZA(),t._uU(61),t.ALo(62,"date"),t.qZA()()()()()()()(),t.TgZ(63,"div",4)(64,"p",41),t._uU(65,"Sales Bill Details"),t.qZA()(),t.TgZ(66,"div",42)(67,"div",29)(68,"div",30)(69,"div",43),t.YNc(70,P,11,4,"div",44),t.YNc(71,v,11,4,"div",44),t.qZA()()()(),t.TgZ(72,"div",45)(73,"div",29)(74,"div",30)(75,"div",46)(76,"table",47)(77,"thead")(78,"tr")(79,"th",48),t._uU(80,"Sale Bill No."),t.qZA(),t.TgZ(81,"th",48),t._uU(82," Party Name"),t.qZA(),t.TgZ(83,"th",48),t._uU(84," Biller Name"),t.qZA(),t.TgZ(85,"th",48),t._uU(86," Payment Terms"),t.qZA(),t.TgZ(87,"th",48),t._uU(88," Sales Order"),t.qZA(),t.TgZ(89,"th",48),t._uU(90," Sales Man"),t.qZA(),t.TgZ(91,"th",48),t._uU(92,"Sale Bill Date"),t.qZA(),t.TgZ(93,"th",48),t._uU(94,"Due date"),t.qZA()()(),t.TgZ(95,"tbody")(96,"tr")(97,"td",49),t._uU(98),t.qZA(),t.TgZ(99,"td",49),t._uU(100),t.qZA(),t.TgZ(101,"td",49),t._uU(102),t.qZA(),t.TgZ(103,"td",49),t._uU(104),t.qZA(),t.TgZ(105,"td",49),t._uU(106),t.qZA(),t.TgZ(107,"td",49),t._uU(108),t.qZA(),t.TgZ(109,"td",49),t._uU(110),t.ALo(111,"date"),t.qZA(),t.TgZ(112,"td",49),t._uU(113),t.ALo(114,"date"),t.qZA()()()()()()()(),t.TgZ(115,"div",50)(116,"div",29)(117,"div",4)(118,"p",51),t._uU(119,"Product Details"),t.qZA()(),t.TgZ(120,"div",52)(121,"div")(122,"table")(123,"thead")(124,"tr")(125,"th"),t._uU(126,"#"),t.qZA(),t.TgZ(127,"th"),t._uU(128,"Barcode/SKU"),t.qZA(),t.TgZ(129,"th"),t._uU(130,"Product Name"),t.qZA(),t.TgZ(131,"th"),t._uU(132,"Price"),t.qZA(),t.TgZ(133,"th"),t._uU(134,"QTY"),t.qZA(),t.TgZ(135,"th"),t._uU(136,"Discount %"),t.qZA(),t.TgZ(137,"th"),t._uU(138,"Additional Discount %"),t.qZA(),t.TgZ(139,"th"),t._uU(140,"Tax %"),t.qZA(),t.TgZ(141,"th"),t._uU(142,"Total"),t.qZA()()(),t.TgZ(143,"tbody"),t.YNc(144,T,19,9,"tr",53),t.TgZ(145,"tr",54)(146,"td",55)(147,"strong"),t._uU(148),t.qZA()(),t._UZ(149,"td"),t.TgZ(150,"td",56),t._uU(151),t.qZA(),t.TgZ(152,"td",56),t._uU(153),t.qZA(),t.TgZ(154,"td",56),t._uU(155),t.qZA(),t._UZ(156,"td"),t.TgZ(157,"td",56),t._uU(158),t.qZA()()()()()(),t.TgZ(159,"div",30)(160,"p"),t._uU(161,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(162,"br"),t._uU(163," Overdue invoices will be charged 24% interest. "),t.qZA()()()(),t.TgZ(164,"div",57)(165,"div",58)(166,"div",59)(167,"strong"),t._uU(168,"Note:"),t.qZA(),t.TgZ(169,"div",60)(170,"p"),t._uU(171),t.qZA()()()(),t.TgZ(172,"div",61)(173,"div",62)(174,"div",63)(175,"ul")(176,"li",64)(177,"h4"),t._uU(178,"Sub Total"),t.qZA(),t.TgZ(179,"h5"),t._uU(180),t.qZA()(),t.TgZ(181,"li",64)(182,"h4"),t._uU(183,"Additional Charges"),t.qZA(),t.TgZ(184,"h5"),t._uU(185),t.qZA()(),t.TgZ(186,"li",64)(187,"h4"),t._uU(188,"Additional Discount"),t.qZA(),t.TgZ(189,"h5"),t._uU(190),t.qZA()(),t.TgZ(191,"li",64)(192,"h4"),t._uU(193,"Total Taxes"),t.qZA(),t.TgZ(194,"h5"),t._uU(195),t.qZA()(),t.TgZ(196,"li",64)(197,"h4"),t._uU(198,"Round Off"),t.qZA(),t.TgZ(199,"h5"),t._uU(200),t.qZA()(),t.TgZ(201,"li",64)(202,"h4"),t._uU(203,"Total"),t.qZA(),t.TgZ(204,"h5"),t._uU(205),t.qZA()()()()()()(),t.TgZ(206,"div",65)(207,"p")(208,"strong"),t._uU(209,"Status : "),t.qZA(),t.TgZ(210,"span",66),t._uU(211),t.qZA()()(),t.TgZ(212,"div",67)(213,"p"),t._uU(214,"Please make cheques payable to "),t.TgZ(215,"span"),t._uU(216,"PV LTD."),t.qZA()()()()()()()()()}if(2&n){const l=t.oxw();t.xp6(7),t.Q6J("ngIf",!t.lcZ(8,35,l._pdf.loaderPdf)),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,37,l._pdf.loaderPdf)),t.xp6(18),t.hij(" ",null==l.companyDetails?null:l.companyDetails.gst,""),t.xp6(4),t.hij(" : ",null==l.companyDetails?null:l.companyDetails.name,""),t.xp6(4),t.hij(" : ",null==l.companyDetails||null==l.companyDetails.financial_year?null:l.companyDetails.financial_year.financial_year," "),t.xp6(4),t.hij(" : ",(null==l.companyDetails?null:l.companyDetails.address)+" , "+(null==l.companyDetails||null==l.companyDetails.city?null:l.companyDetails.city.city)+" , "+(null==l.companyDetails||null==l.companyDetails.state?null:l.companyDetails.state.state)+" , "+(null==l.companyDetails||null==l.companyDetails.country?null:l.companyDetails.country.country_name)+" , "+(null==l.companyDetails?null:l.companyDetails.pincode)," "),t.xp6(4),t.hij(" : ",null==l.companyDetails?null:l.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(53,39,null==l.BillDetail?null:l.BillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(" : ",null==l.BillDetail?null:l.BillDetail.customer_bill_no," "),t.xp6(4),t.hij(" : ",t.xi3(62,42,null==l.BillDetail?null:l.BillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(9),t.Q6J("ngIf",l.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",l.selectedAddressShipping),t.xp6(27),t.hij(" ",null==l.BillDetail?null:l.BillDetail.customer_bill_no,""),t.xp6(2),t.hij(" ",(null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.name)+" ("+(null==l.BillDetail||null==l.BillDetail.customer?null:l.BillDetail.customer.user_type)+")",""),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.sales_man?null:l.BillDetail.sales_man.name,""),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.payment_terms?null:l.BillDetail.payment_terms.title,""),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.sale_order?null:l.BillDetail.sale_order.sale_order_no," "),t.xp6(2),t.hij(" ",null==l.BillDetail||null==l.BillDetail.sales_man?null:l.BillDetail.sales_man.name,""),t.xp6(2),t.hij(" ",t.xi3(111,45,null==l.BillDetail?null:l.BillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",t.xi3(114,48,null==l.BillDetail?null:l.BillDetail.due_date,"dd-MMMM-yyyy"),""),t.xp6(31),t.Q6J("ngForOf",null==l.BillDetail?null:l.BillDetail.cart),t.xp6(4),t.hij("Total: ",l.totalItems,""),t.xp6(3),t.hij(" ",null==l.BillDetail?null:l.BillDetail.total_qty,""),t.xp6(2),t.Oqu(l.totalDiscount+"% (\u20b9"+l.discountRupees+")"),t.xp6(2),t.hij("",l.totalAdditionalDiscou?0:l.totalAdditionalDiscou+"% (\u20b9"+(l.totalAdditionalDiscount||0)+")"," "),t.xp6(3),t.hij("",null==l.BillDetail?null:l.BillDetail.total," "),t.xp6(13),t.Oqu(null==l.BillDetail?null:l.BillDetail.note),t.xp6(9),t.hij("",null==l.BillDetail?null:l.BillDetail.subtotal," "),t.xp6(5),t.hij("",null==l.BillDetail?null:l.BillDetail.additional_charges," "),t.xp6(5),t.hij("",null==l.BillDetail?null:l.BillDetail.total_discount," "),t.xp6(5),t.hij("",(null==l.BillDetail?null:l.BillDetail.total_tax)+"%"," "),t.xp6(5),t.hij("",null==l.BillDetail?null:l.BillDetail.roundoff," "),t.xp6(5),t.hij("",null==l.BillDetail?null:l.BillDetail.total," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(51,O,"Complete"===(null==l.BillDetail?null:l.BillDetail.status),"Pending"===(null==l.BillDetail?null:l.BillDetail.status),"Draft"===(null==l.BillDetail?null:l.BillDetail.status))),t.xp6(1),t.Oqu(null==l.BillDetail?null:l.BillDetail.status)}}function q(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const l=o.$implicit,e=o.index;t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Oqu(null==l?null:l.userid),t.xp6(2),t.Oqu(null==l?null:l.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==l?null:l.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const S=function(n,o){return{itemsPerPage:n,currentPage:o}};function w(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",72),t.NdJ("click",function(){t.CHM(l);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",72),t.NdJ("click",function(){t.CHM(l);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",72),t.NdJ("click",function(){t.CHM(l);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",72),t.NdJ("click",function(){t.CHM(l);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,q,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",73)(24,"div",74),t._uU(25," Show per page "),t.TgZ(26,"select",75,76),t.NdJ("ngModelChange",function(i){t.CHM(l);const a=t.oxw();return t.KtG(a.itemsPerPage=i)})("change",function(){t.CHM(l);const i=t.MAs(27),a=t.oxw();return t.KtG(a.changePg(i.value))}),t.TgZ(28,"option",77),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",78),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",79),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",80),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",81),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",82),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",83)(41,"div",84)(42,"pagination-controls",85),t.NdJ("pageChange",function(i){t.CHM(l);const a=t.oxw();return t.KtG(a.p=i)}),t.qZA(),t.TgZ(43,"div",86),t._uU(44),t.qZA()()()()()()()()}if(2&n){const l=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==l.BillDetail?null:l.BillDetail.logs,l.key,l.reverse),t.WLB(12,S,l.itemsPerPage,l.p))),t.xp6(7),t.Q6J("ngModel",l.itemsPerPage),t.xp6(18),t.lnq("Showing ",l.itemsPerPage," to ",null==l.BillDetail||null==l.BillDetail.logs?null:l.BillDetail.logs.length," of ",l.p," entries")}}function j(n,o){1&n&&(t.TgZ(0,"div",56)(1,"span",87),t._uU(2,"Logs Not Available"),t.qZA()())}const k=[{path:"",component:(()=>{class n{constructor(l,e,i,a,r){this.companyService=l,this.Arout=e,this.saleService=i,this.location=a,this._pdf=r,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.totalmrp=[],this.totalMrp=0,this.additional_discount=[],this.totalAdditionalDiscount=0,this.discount=[],this.totalDiscount=0,this.totalDiscountRupees=[],this.discountRupees=0,this.totaldiscountRupees=0,this.calculateTax=0,this.totalTax=[],this.additionalDiscoun=[],this.totalAdditionalDiscou=0}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(l=>{this.companyDetails=l[0]})}getdata(){this.saleService.getSalesBillById(this.id).subscribe(l=>{this.id==l.id&&(this.BillDetail=l,console.log(l),this.totalItems=this.BillDetail?.cart?.length,this.BillDetail?.cart?.forEach(e=>{e.price=Number(e.price+"");let i=e.price*e.discount/100;console.log(e.price-i.toFixed(2)),this.totaldiscountRupees=0,this.totalDiscountRupees.push(i),console.log(this.totalDiscount),this.totalDiscountRupees?.forEach(d=>{this.discountRupees+=d}),this.totalmrp.push(e?.price),this.totalMrp=0,this?.totalmrp?.forEach(d=>{this.totalMrp+=d}),this.discount.push(e?.discount),this.totalDiscount=0;let a=0;this?.discount?.forEach(d=>{a+=parseFloat(d)}),this.totalDiscount=a.toFixed(2),e?.additional_discount&&this.additionalDiscoun.push(e?.additional_discount),console.log("deepak",e?.additional_discount),console.log("deepak",e),this.totalAdditionalDiscou=0,this?.additionalDiscoun?.length>0?this?.additionalDiscoun?.forEach(d=>{this.totalAdditionalDiscou+=d}):this.totalAdditionalDiscou=0;let r=e.price.toFixed(2)*e.additional_discount/100;console.log(e.price.toFixed(2)-r.toFixed(2));let x=e.price.toFixed(2)-r.toFixed(2);this.additional_discount.push(x),this.totalAdditionalDiscount=0,this?.additional_discount?.length>0?this?.additional_discount?.forEach(d=>{this.totalAdditionalDiscount+=d}):this.totalAdditionalDiscount=0,console.log(this.discountRupees),console.log(x);let A=+e?.discount+ +e.additional_discount;console.log(A);let p=e.price-e.price*A/100;console.log(p);let h=p.toFixed(2)-p.toFixed(2)*(100/(100+e?.tax));console.log(h,"taxprice"),this.totalTax.push(h||0),console.log(this.totalTax),this.calculateTax=p-h,console.log(this.calculateTax)}),this.supplierAddress=l,this.supplierAddress?.customer?.detail?.address.map(e=>{"Billing"==e?.address_type?(this.selectedAddressBilling=e,console.log("bii",this.selectedAddressBilling)):"Shipping"==e.address_type&&(this.selectedAddressShipping=e,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){let l=parseFloat(this.totalMrp+""),e=new Array;this.BillDetail?.cart.forEach((a,r)=>{e.push([`${r+1}`,`${a?.barcode?.sku}`,`${a?.item_name}`,`${a?.price}`,`${a?.qty}`,`${a?.discount??""}`,`${a?.tax??""}`,`${a?.total}`])});const i={Type:"Invoice",Fist_date:this.BillDetail?.bill_date,Secouand_date:this.BillDetail?.bill_date,thead1:["Sale Bill No.","Party Name","Payment Terms","Sales Order","Sales Man","Sale Bill Date","Due date"],tbody1:[`${this.BillDetail?.customer_bill_no}`,this.BillDetail?.customer?.name+" ("+this.BillDetail?.customer?.user_type+")",`${this.BillDetail?.payment_terms?.title}`,`${this.BillDetail?.sale_order?.sale_order_no??""}`,`${this.BillDetail?.sales_man?.name}`,`${this.BillDetail?.bill_date}`,`${this.BillDetail?.due_date}`],table2head:["#","Barcode/SKU","Product Name","Price","QTY","Discount(%)","Tax(%)","Total"],foot2:[[{content:"Total",colSpan:3,styles:{halign:"center"}},{content:`${l.toFixed(2)}`,styles:{halign:"center"}},{content:`${this.BillDetail?.total_qty}`,styles:{halign:"center"}},{content:`${this.totalDiscount}%`,styles:{halign:"center"}},{content:`${this.totalAdditionalDiscou}%`,styles:{halign:"center"}},{content:`${this.BillDetail?.total_tax}`,styles:{halign:"center"}},{content:`${this.BillDetail?.total}`,styles:{halign:"center"}}],[{content:"Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.",colSpan:8,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Sub Total ",colSpan:2,styles:{halign:"right"}},{content:`${this.BillDetail?.subtotal}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Additional Charges ",colSpan:2,styles:{halign:"right"}},{content:`${this.BillDetail?.additional_charges}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5,styles:{halign:"left"}},{content:"Additional Discount(%)",colSpan:2,styles:{halign:"right"}},{content:`${this.BillDetail?.total_discount}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5,styles:{halign:"left"}},{content:"Round Off",colSpan:2,styles:{halign:"right"}},{content:`${this.BillDetail?.roundoff}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5,styles:{halign:"left"}},{content:"Total",colSpan:2,styles:{halign:"right"}},{content:`${this.BillDetail?.total}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"",colSpan:3}]],company_name:this.companyDetails?.name,company_gst:this.companyDetails?.gst,top_left_address_line1:`${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,top_left_address_line2:`${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,top_left_phone:this.companyDetails?.phone,top_left_email:this.companyDetails?.email,BILLING_ADDRESS:{address_line_1:this.selectedAddressBilling?.address_line_1??"",address_line_2:this.selectedAddressBilling?.address_line_2??1?"":this.selectedAddressShipping?.city?.city,address_line_3:null==this.selectedAddressBilling?.state?.state||this.selectedAddressBilling?.state?.state+" , "+(null==this.selectedAddressBilling?.country?.country_name||void 0)?"":this.selectedAddressBilling?.country?.country_name,phone:this.BillDetail?.customer?.phone_number??"",email:this.BillDetail?.customer?.email??""},SHIPPING_ADDRESS:{address_line_1:this.selectedAddressShipping?.address_line_1??"",address_line_2:this.selectedAddressShipping?.address_line_2??1?"":this.selectedAddressShipping?.city?.city,address_line_3:null==this.selectedAddressBilling?.state?.state||this.selectedAddressBilling?.state?.state+" , "+(null==this.selectedAddressBilling?.country?.country_name||void 0)?"":this.selectedAddressBilling?.country?.country_name,phone:this.BillDetail?.customer?.phone_number??"",email:this.BillDetail?.customer?.emails??""},table2body:e,order_no:this.BillDetail?.customer_bill_no};this._pdf.generatePdf(i)}printForm(){const l=document.getElementById("debitNote").outerHTML,e=document.body.innerHTML;document.body.innerHTML=l,window.print(),document.body.innerHTML=e}sort(l){this.key=l,this.reverse=!this.reverse}changePg(l){console.log(l),-1==l&&(this.itemsPerPage=this.BillDetail?.logs?.length)}}return n.\u0275fac=function(l){return new(l||n)(t.Y36(B.J),t.Y36(g.gz),t.Y36(y.M),t.Y36(c.Ye),t.Y36(f.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details-sale-bill"]],features:[t._Bn([c.uU,f.D])],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Sale Bill"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(l,e){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return e.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Bill"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Bill"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Sales Bill "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,U,217,55,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,w,45,15,"div",15),t.YNc(21,j,3,0,"div",16),t.qZA()()()()()),2&l&&(t.xp6(12),t.MGl("routerLink","//sales/updatesalesbill/",null==e.BillDetail?null:e.BillDetail.id,""),t.xp6(6),t.Q6J("ngIf",e.BillDetail),t.xp6(2),t.Q6J("ngIf",(null==e.BillDetail||null==e.BillDetail.logs?null:e.BillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==e.BillDetail||null==e.BillDetail.logs?null:e.BillDetail.logs.length)))},dependencies:[c.mk,c.sg,c.O5,g.yS,_.SP,_.uX,Z.Hw,u.YN,u.Kr,u.EJ,u.JJ,u.On,D.LS,c.Ov,c.uU,D._s,b.T],styles:[".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_salebill"]}}];let $=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(k),g.Bz]}),n})();var I=s(95113),J=s(56709),z=s(90455),L=s(8468);let R=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,$,_.Nh,Z.Ps,I.LD,J.p9,z.rP,u.u5,L.I]}),n})()}}]);