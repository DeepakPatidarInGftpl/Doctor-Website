"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[44188],{44188:(J,_,s)=>{s.r(_),s.d(_,{SalesDetailsModule:()=>I});var d=s(36895),g=s(4392),h=s(35337),t=s(94650),Z=s(42917),x=s(72170),p=s(3848),m=s(97392),c=s(24006),f=s(54333),D=s(54040);function y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",69),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function M(n,i){1&n&&(t.TgZ(0,"button",70),t._UZ(1,"span",71),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function A(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.email," ")}}function C(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.email," ")}}function O(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&n){const e=i.$implicit,l=i.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e?null:e.item_name),t.xp6(2),t.Oqu(null==e?null:e.price),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.discount),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.total)}}const P=function(n,i,e){return{"bg-lightgreen":n,"bg-lightred":i,"bg-lightyellow":e}};function b(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,y,2,0,"button",22),t.ALo(8,"async"),t.YNc(9,M,3,0,"button",23),t.ALo(10,"async"),t.qZA(),t.TgZ(11,"p",24)(12,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printForm())}),t._uU(13,"Print Invoice"),t.qZA()(),t.TgZ(14,"div",26)(15,"div",27)(16,"div",28)(17,"div",29)(18,"div",30)(19,"div",31)(20,"div",32)(21,"div",33)(22,"div",34),t._UZ(23,"img",35),t.TgZ(24,"p",36)(25,"span"),t._uU(26,"GST"),t.qZA(),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"span"),t._uU(30,"Company Name"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p")(33,"span"),t._uU(34,"Financial Year"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"p")(37,"span"),t._uU(38,"Address"),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"p")(41,"span"),t._uU(42,"Phone"),t.qZA(),t._uU(43),t.qZA()()()(),t.TgZ(44,"div",37)(45,"div",38)(46,"div",39)(47,"h1",40),t._uU(48,"Invoice"),t.qZA(),t.TgZ(49,"p")(50,"span"),t._uU(51,"Invoice Date"),t.qZA(),t._uU(52),t.ALo(53,"date"),t.qZA(),t.TgZ(54,"p")(55,"span"),t._uU(56,"Invoice NO"),t.qZA(),t._uU(57),t.qZA(),t.TgZ(58,"p")(59,"span"),t._uU(60,"Due Date"),t.qZA(),t._uU(61),t.ALo(62,"date"),t.qZA()()()()()()()(),t.TgZ(63,"div",4)(64,"p",41),t._uU(65,"Sales Order Details"),t.qZA()(),t.TgZ(66,"div",42)(67,"div",29)(68,"div",30)(69,"div",43),t.YNc(70,A,11,4,"div",44),t.YNc(71,C,11,4,"div",44),t.qZA()()()(),t.TgZ(72,"div",45)(73,"div",29)(74,"div",30)(75,"div",46)(76,"table",47)(77,"thead")(78,"tr")(79,"th",48),t._uU(80,"Order No."),t.qZA(),t.TgZ(81,"th",48),t._uU(82,"Party Name"),t.qZA(),t.TgZ(83,"th",48),t._uU(84,"Estimate No."),t.qZA(),t.TgZ(85,"th",48),t._uU(86,"Payment Terms"),t.qZA(),t.TgZ(87,"th",48),t._uU(88,"Sale Order Date"),t.qZA(),t.TgZ(89,"th",48),t._uU(90,"Due Date"),t.qZA()()(),t.TgZ(91,"tbody")(92,"tr")(93,"td",49),t._uU(94),t.qZA(),t.TgZ(95,"td",49),t._uU(96),t.qZA(),t.TgZ(97,"td",49),t._uU(98),t.qZA(),t.TgZ(99,"td",49),t._uU(100),t.qZA(),t.TgZ(101,"td",49),t._uU(102),t.ALo(103,"date"),t.qZA(),t.TgZ(104,"td",50),t._uU(105),t.ALo(106,"date"),t.qZA()()()()()()()(),t.TgZ(107,"div",51)(108,"div",29)(109,"div",4)(110,"p",52),t._uU(111,"Product Details"),t.qZA()(),t.TgZ(112,"div",53)(113,"div")(114,"table")(115,"thead")(116,"tr")(117,"th"),t._uU(118,"#"),t.qZA(),t.TgZ(119,"th"),t._uU(120,"Barcode/SKU"),t.qZA(),t.TgZ(121,"th"),t._uU(122,"Product Name"),t.qZA(),t.TgZ(123,"th"),t._uU(124,"Price"),t.qZA(),t.TgZ(125,"th"),t._uU(126,"QTY"),t.qZA(),t.TgZ(127,"th"),t._uU(128,"Discount %"),t.qZA(),t.TgZ(129,"th"),t._uU(130,"Tax %"),t.qZA(),t.TgZ(131,"th"),t._uU(132,"Total"),t.qZA()()(),t.TgZ(133,"tbody"),t.YNc(134,O,17,8,"tr",54),t.TgZ(135,"tr",55)(136,"td",56)(137,"strong"),t._uU(138,"Total"),t.qZA()(),t.TgZ(139,"td",57),t._uU(140),t.qZA(),t.TgZ(141,"td",57),t._uU(142),t.qZA(),t.TgZ(143,"td",57),t._uU(144),t.qZA(),t.TgZ(145,"td",57),t._uU(146),t.qZA(),t.TgZ(147,"td",57),t._uU(148),t.qZA()()()()()(),t.TgZ(149,"div",30)(150,"p"),t._uU(151,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(152,"br"),t._uU(153," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(154,"div",58)(155,"div",59)(156,"div",60)(157,"strong"),t._uU(158,"Note:"),t.qZA(),t.TgZ(159,"div",61)(160,"p"),t._uU(161),t.qZA()()()(),t.TgZ(162,"div",62)(163,"div",63)(164,"div",64)(165,"ul")(166,"li",65)(167,"h4"),t._uU(168,"Sub Total"),t.qZA(),t.TgZ(169,"h5"),t._uU(170),t.qZA()(),t.TgZ(171,"li",65)(172,"h4"),t._uU(173,"Round Off"),t.qZA(),t.TgZ(174,"h5"),t._uU(175),t.qZA()(),t.TgZ(176,"li",65)(177,"h4"),t._uU(178,"Total"),t.qZA(),t.TgZ(179,"h5"),t._uU(180),t.qZA()()()()()()(),t.TgZ(181,"div",66)(182,"p")(183,"strong"),t._uU(184,"Status : "),t.qZA(),t.TgZ(185,"span",67),t._uU(186),t.qZA()()(),t.TgZ(187,"div",68)(188,"p"),t._uU(189,"Please make cheques payable to "),t.TgZ(190,"span"),t._uU(191,"PV LTD."),t.qZA()()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!t.lcZ(8,30,e._pdf.loaderPdf)),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,32,e._pdf.loaderPdf)),t.xp6(18),t.hij(" ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(4),t.hij(" : ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year,""),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(53,34,null==e.orderDetail?null:e.orderDetail.sale_order_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(" : ",null==e.orderDetail?null:e.orderDetail.sale_order_no," "),t.xp6(4),t.hij(" : ",t.xi3(62,37,null==e.orderDetail?null:e.orderDetail.due_date,"dd-MMMM-yyyy"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(23),t.Oqu(null==e.orderDetail?null:e.orderDetail.sale_order_no),t.xp6(2),t.Oqu((null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.name)+" ("+(null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.user_type)+")"),t.xp6(2),t.Oqu(null==e.orderDetail||null==e.orderDetail.estimate?null:e.orderDetail.estimate.estimate_no),t.xp6(2),t.Oqu(null==e.orderDetail||null==e.orderDetail.payment_terms?null:e.orderDetail.payment_terms.title),t.xp6(2),t.hij(" ",t.xi3(103,40,null==e.orderDetail?null:e.orderDetail.sale_order_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",t.xi3(106,43,null==e.orderDetail?null:e.orderDetail.due_date,"dd-MMMM-yyyy"),""),t.xp6(29),t.Q6J("ngForOf",null==e.orderDetail?null:e.orderDetail.cart),t.xp6(6),t.Oqu(e.totalMrp),t.xp6(2),t.Oqu(null==e.orderDetail?null:e.orderDetail.total_qty),t.xp6(2),t.Oqu((null==e.orderDetail?null:e.orderDetail.total_discount)+"% (\u20b9"+(null==e.totaldiscount?null:e.totaldiscount.toFixed(2))+")"),t.xp6(2),t.Oqu((null==e.orderDetail?null:e.orderDetail.total_tax)+"% (\u20b9"+(null==e.calculateTax?null:e.calculateTax.toFixed(2))+")"),t.xp6(2),t.Oqu(null==e.orderDetail?null:e.orderDetail.total),t.xp6(13),t.Oqu(null==e.orderDetail?null:e.orderDetail.note),t.xp6(9),t.hij("",null==e.orderDetail?null:e.orderDetail.subtotal," "),t.xp6(5),t.hij("",null==e.orderDetail?null:e.orderDetail.roundoff," "),t.xp6(5),t.hij("",null==e.orderDetail?null:e.orderDetail.total," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(46,P,"Complete"===(null==e.orderDetail?null:e.orderDetail.status),"Pending"===(null==e.orderDetail?null:e.orderDetail.status),"Draft"===(null==e.orderDetail?null:e.orderDetail.status))),t.xp6(1),t.Oqu(null==e.orderDetail?null:e.orderDetail.status)}}function v(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=i.$implicit,l=i.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const T=function(n,i){return{itemsPerPage:n,currentPage:i}};function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",29)(2,"div",4)(3,"p",52),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",53)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,v,10,7,"tr",54),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76,77),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.itemsPerPage=o)})("change",function(){t.CHM(e);const o=t.MAs(27),a=t.oxw();return t.KtG(a.changePg(o.value))}),t.TgZ(28,"option",78),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",79),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",80),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",81),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",82),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",83),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",84)(41,"div",85)(42,"pagination-controls",86),t.NdJ("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.p=o)}),t.qZA(),t.TgZ(43,"div",87),t._uU(44),t.qZA()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.orderDetail?null:e.orderDetail.logs,e.key,e.reverse),t.WLB(12,T,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.orderDetail||null==e.orderDetail.logs?null:e.orderDetail.logs.length," of ",e.p," entries")}}function q(n,i){1&n&&(t.TgZ(0,"div",57)(1,"span",88),t._uU(2,"Logs Not Available"),t.qZA()())}const B=[{path:"",component:(()=>{class n{constructor(e,l,o,a,r){this.companyService=e,this.Arout=l,this.saleService=o,this.location=a,this._pdf=r,this.totalmrp=[],this.totalMrp=0,this.totalDiscount=[],this.discount=0,this.totaldiscount=0,this.calculateTax=0,this.totalTax=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.saleService.getSalesOrderById(this.id).subscribe(e=>{this.id==e.id&&(this.orderDetail=e,console.log("all order",this.orderDetail),this.orderDetail?.cart?.forEach(l=>{this.discount=l.price-(l.price*l.discount/100).toFixed(2),this.totaldiscount=0,this.totalDiscount.push(this.discount),this.totalDiscount?.forEach(u=>{this.totaldiscount+=u}),this.discount=l?.price\u00df-(l?.price*l?.discount/100).toFixed(2);let r=this.discount-this.discount*(100/(100+l?.tax));console.log(r,"taxprice"),this.totalTax.push(r||0),console.log(this.totalTax),this.calculateTax=this.totaldiscount-r,console.log(this.calculateTax),this.totalmrp.push(l?.price),this.totalMrp=0,this?.totalmrp?.forEach(u=>{this.totalMrp+=u})}),this.supplierAddress=e,this.supplierAddress?.customer?.detail?.address.map(l=>{"Billing"==l?.address_type?(this.selectedAddressBilling=l,console.log(this.selectedAddressBilling)):"Shipping"==l.address_type&&(this.selectedAddressShipping=l,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){let e=parseFloat(this.totalMrp+"");console.log(typeof this.totalMrp);let l=new Array;this.orderDetail?.cart.forEach((a,r)=>{l.push([`${r+1}`,`${a?.barcode?.sku}`,`${a?.item_name}`,`${a?.price}`,`${a?.qty}`,`${a?.discount??""}`,`${a?.tax??""}`,`${a?.total}`])});const o={Type:"ORDER",Fist_date:this.orderDetail?.sale_order_date,Secouand_date:this.orderDetail?.due_date,thead1:["Order No.","Party Name","Estimate No.","Payment Terms","Sale Order Date","Due Date"],tbody1:[`${this.orderDetail?.sale_order_no}`,this.orderDetail?.customer?.name+" ("+this.orderDetail?.customer?.user_type+")",`${this.orderDetail?.estimate?.estimate_no}`,`${this.orderDetail?.payment_terms?.title}`,`${this.orderDetail?.sale_order_date}`,`${this.orderDetail?.due_date}`],table2head:["#","Barcode/SKU","Product Name","Price","QTY","Discount(%)","Tax(%)","Total"],foot2:[[{content:"Total",colSpan:3,styles:{halign:"center"}},{content:`${e.toFixed(2)}`,styles:{halign:"center"}},{content:`${this.orderDetail?.total_qty}`,styles:{halign:"center"}},{content:`${this.orderDetail?.total_discount}%`,styles:{halign:"center"}},{content:`${this.orderDetail?.total_tax}%`,styles:{halign:"center"}},{content:`${this.orderDetail?.total}`,styles:{halign:"center"}}],[{content:"Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.",colSpan:8,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Sub Total ",colSpan:2,styles:{halign:"right"}},{content:`${this.orderDetail?.subtotal}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"Round Off ",colSpan:2,styles:{halign:"right"}},{content:`${this.orderDetail?.roundoff}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5,styles:{halign:"left"}},{content:"Total ",colSpan:2,styles:{halign:"right"}},{content:`${this.orderDetail?.total}`,colSpan:1,styles:{halign:"left"}}],[{content:"",colSpan:5},{content:"",colSpan:3}]],company_name:this.companyDetails?.name,company_gst:this.companyDetails?.gst,top_left_address_line1:`${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,top_left_address_line2:`${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,top_left_phone:this.companyDetails?.phone,top_left_email:this.companyDetails?.email,BILLING_ADDRESS:{address_line_1:this.selectedAddressBilling?.address_line_1??"",address_line_2:this.selectedAddressBilling?.address_line_2??" , "+this.selectedAddressBilling?.city?.city??"",address_line_3:this.selectedAddressBilling?.state?.state+" , "+this.selectedAddressBilling?.country?.country_name,phone:this.orderDetail?.customer?.phone_number??"",email:this.orderDetail?.customer?.email??""},SHIPPING_ADDRESS:{address_line_1:this.selectedAddressShipping?.address_line_1??"",address_line_2:this.selectedAddressShipping?.address_line_2??" , "+this.selectedAddressShipping?.city?.city??"",address_line_3:this.selectedAddressBilling?.state?.state+" , "+this.selectedAddressBilling?.country?.country_name,phone:this.orderDetail?.customer?.phone_number??"",email:this.orderDetail?.customer?.email??""},table2body:l,order_no:this.orderDetail?.sale_order_no};this._pdf.generatePdf(o)}printForm(){const e=document.getElementById("debitNote").outerHTML,l=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=l}sort(e){this.key=e,this.reverse=!this.reverse}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.orderDetail?.logs?.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.J),t.Y36(g.gz),t.Y36(x.M),t.Y36(d.Ye),t.Y36(h.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sales-details"]],features:[t._Bn([h.D])],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Sales Order"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"text-center",2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return l.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Order"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Order"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Sales Order "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,b,192,50,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,U,45,15,"div",15),t.YNc(21,q,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//sales/edit-sales/",null==l.orderDetail?null:l.orderDetail.id,""),t.xp6(6),t.Q6J("ngIf",l.orderDetail),t.xp6(2),t.Q6J("ngIf",(null==l.orderDetail||null==l.orderDetail.logs?null:l.orderDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==l.orderDetail||null==l.orderDetail.logs?null:l.orderDetail.logs.length)))},dependencies:[d.mk,d.sg,d.O5,g.yS,p.SP,p.uX,m.Hw,c.YN,c.Kr,c.EJ,c.JJ,c.On,f.LS,d.Ov,d.uU,f._s,D.T],styles:[".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_saleorder"]}}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(B),g.Bz]}),n})();var k=s(95113),j=s(56709),F=s(90455),$=s(8468);let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[d.uU],imports:[d.ez,N,p.Nh,m.Ps,k.LD,j.p9,F.rP,c.u5,$.I]}),n})()}}]);