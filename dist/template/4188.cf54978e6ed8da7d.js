"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4188],{44188:(A,Z,o)=>{o.r(Z),o.d(Z,{SalesDetailsModule:()=>k});var r=o(36895),p=o(4392),P=o(4159),C=o.n(P),O=o(96166),t=o(94650),g=o(42917),D=o(72170),c=o(3848),m=o(97392),d=o(24006),u=o(54333),_=o(54040);function h(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",69),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function v(n,s){1&n&&(t.TgZ(0,"button",70),t._UZ(1,"span",71),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function M(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.email," ")}}function b(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.email," ")}}function T(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&n){const e=s.$implicit,l=s.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e?null:e.item_name),t.xp6(2),t.Oqu(null==e?null:e.price),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.discount),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.total)}}const y=function(n,s,e){return{"bg-lightgreen":n,"bg-lightred":s,"bg-lightyellow":e}};function U(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,h,2,0,"button",22),t.YNc(8,v,3,0,"button",23),t.qZA(),t.TgZ(9,"p",24)(10,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",26)(13,"div",27)(14,"div",28)(15,"div",29)(16,"div",30)(17,"div",31)(18,"div",32)(19,"div",33)(20,"div",34),t._UZ(21,"img",35),t.TgZ(22,"p",36)(23,"span"),t._uU(24,"GST"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"p")(27,"span"),t._uU(28,"Company Name"),t.qZA(),t._uU(29),t.qZA(),t.TgZ(30,"p")(31,"span"),t._uU(32,"Financial Year"),t.qZA(),t._uU(33),t.qZA(),t.TgZ(34,"p")(35,"span"),t._uU(36,"Address"),t.qZA(),t._uU(37),t.qZA(),t.TgZ(38,"p")(39,"span"),t._uU(40,"Phone"),t.qZA(),t._uU(41),t.qZA()()()(),t.TgZ(42,"div",37)(43,"div",38)(44,"div",39)(45,"h1",40),t._uU(46,"Invoice"),t.qZA(),t.TgZ(47,"p")(48,"span"),t._uU(49,"Invoice Date"),t.qZA(),t._uU(50),t.ALo(51,"date"),t.qZA(),t.TgZ(52,"p")(53,"span"),t._uU(54,"Invoice NO"),t.qZA(),t._uU(55),t.qZA(),t.TgZ(56,"p")(57,"span"),t._uU(58,"Due Date"),t.qZA(),t._uU(59),t.ALo(60,"date"),t.qZA()()()()()()()(),t.TgZ(61,"div",4)(62,"p",41),t._uU(63,"Sales Order Details"),t.qZA()(),t.TgZ(64,"div",42)(65,"div",29)(66,"div",30)(67,"div",43),t.YNc(68,M,11,4,"div",44),t.YNc(69,b,11,4,"div",44),t.qZA()()()(),t.TgZ(70,"div",45)(71,"div",29)(72,"div",30)(73,"div",46)(74,"table",47)(75,"thead")(76,"tr")(77,"th",48),t._uU(78,"Order No."),t.qZA(),t.TgZ(79,"th",48),t._uU(80,"Party Name"),t.qZA(),t.TgZ(81,"th",48),t._uU(82,"Estimate No."),t.qZA(),t.TgZ(83,"th",48),t._uU(84,"Payment Terms"),t.qZA(),t.TgZ(85,"th",48),t._uU(86,"Sale Order Date"),t.qZA(),t.TgZ(87,"th",48),t._uU(88,"Due Date"),t.qZA()()(),t.TgZ(89,"tbody")(90,"tr")(91,"td",49),t._uU(92),t.qZA(),t.TgZ(93,"td",49),t._uU(94),t.qZA(),t.TgZ(95,"td",49),t._uU(96),t.qZA(),t.TgZ(97,"td",49),t._uU(98),t.qZA(),t.TgZ(99,"td",49),t._uU(100),t.ALo(101,"date"),t.qZA(),t.TgZ(102,"td",50),t._uU(103),t.ALo(104,"date"),t.qZA()()()()()()()(),t.TgZ(105,"div",51)(106,"div",29)(107,"div",4)(108,"p",52),t._uU(109,"Product Details"),t.qZA()(),t.TgZ(110,"div",53)(111,"div")(112,"table")(113,"thead")(114,"tr")(115,"th"),t._uU(116,"#"),t.qZA(),t.TgZ(117,"th"),t._uU(118,"Barcode/SKU"),t.qZA(),t.TgZ(119,"th"),t._uU(120,"Product Name"),t.qZA(),t.TgZ(121,"th"),t._uU(122,"Price"),t.qZA(),t.TgZ(123,"th"),t._uU(124,"QTY"),t.qZA(),t.TgZ(125,"th"),t._uU(126,"Discount %"),t.qZA(),t.TgZ(127,"th"),t._uU(128,"Tax %"),t.qZA(),t.TgZ(129,"th"),t._uU(130,"Total"),t.qZA()()(),t.TgZ(131,"tbody"),t.YNc(132,T,17,8,"tr",54),t.TgZ(133,"tr",55)(134,"td",56)(135,"strong"),t._uU(136,"Total"),t.qZA()(),t.TgZ(137,"td",57),t._uU(138),t.qZA(),t.TgZ(139,"td",57),t._uU(140),t.qZA(),t.TgZ(141,"td",57),t._uU(142),t.qZA(),t.TgZ(143,"td",57),t._uU(144),t.qZA(),t.TgZ(145,"td",57),t._uU(146),t.qZA()()()()()(),t.TgZ(147,"div",30)(148,"p"),t._uU(149,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(150,"br"),t._uU(151," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(152,"div",58)(153,"div",59)(154,"div",60)(155,"strong"),t._uU(156,"Note:"),t.qZA(),t.TgZ(157,"div",61)(158,"p"),t._uU(159),t.qZA()()()(),t.TgZ(160,"div",62)(161,"div",63)(162,"div",64)(163,"ul")(164,"li",65)(165,"h4"),t._uU(166,"Sub Total"),t.qZA(),t.TgZ(167,"h5"),t._uU(168),t.qZA()(),t.TgZ(169,"li",65)(170,"h4"),t._uU(171,"Round Off"),t.qZA(),t.TgZ(172,"h5"),t._uU(173),t.qZA()(),t.TgZ(174,"li",65)(175,"h4"),t._uU(176,"Total"),t.qZA(),t.TgZ(177,"h5"),t._uU(178),t.qZA()()()()()()(),t.TgZ(179,"div",66)(180,"p")(181,"strong"),t._uU(182,"Status : "),t.qZA(),t.TgZ(183,"span",67),t._uU(184),t.qZA()()(),t.TgZ(185,"div",68)(186,"p"),t._uU(187,"Please make cheques payable to "),t.TgZ(188,"span"),t._uU(189,"PV LTD."),t.qZA()()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(17),t.hij(" ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(4),t.hij(" : ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year,""),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(51,30,null==e.orderDetail?null:e.orderDetail.sale_order_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(" : ",null==e.orderDetail?null:e.orderDetail.sale_order_no," "),t.xp6(4),t.hij(" : ",t.xi3(60,33,null==e.orderDetail?null:e.orderDetail.due_date,"dd-MMMM-yyyy"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(23),t.Oqu(null==e.orderDetail?null:e.orderDetail.sale_order_no),t.xp6(2),t.Oqu((null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.name)+" ("+(null==e.orderDetail||null==e.orderDetail.customer?null:e.orderDetail.customer.user_type)+")"),t.xp6(2),t.Oqu(null==e.orderDetail||null==e.orderDetail.estimate?null:e.orderDetail.estimate.estimate_no),t.xp6(2),t.Oqu(null==e.orderDetail||null==e.orderDetail.payment_terms?null:e.orderDetail.payment_terms.title),t.xp6(2),t.hij(" ",t.xi3(101,36,null==e.orderDetail?null:e.orderDetail.sale_order_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",t.xi3(104,39,null==e.orderDetail?null:e.orderDetail.due_date,"dd-MMMM-yyyy"),""),t.xp6(29),t.Q6J("ngForOf",null==e.orderDetail?null:e.orderDetail.cart),t.xp6(6),t.Oqu(e.totalMrp.toFixed(2)),t.xp6(2),t.Oqu(null==e.orderDetail?null:e.orderDetail.total_qty),t.xp6(2),t.Oqu((null==e.orderDetail?null:e.orderDetail.total_discount)+"% (\u20b9"+(null==e.totaldiscount?null:e.totaldiscount.toFixed(2))+")"),t.xp6(2),t.Oqu((null==e.orderDetail?null:e.orderDetail.total_tax)+"% (\u20b9"+(null==e.calculateTax?null:e.calculateTax.toFixed(2))+")"),t.xp6(2),t.Oqu(null==e.orderDetail?null:e.orderDetail.total.toFixed(2)),t.xp6(13),t.Oqu(null==e.orderDetail?null:e.orderDetail.note),t.xp6(9),t.hij("",null==e.orderDetail?null:e.orderDetail.subtotal.toFixed(2)," "),t.xp6(5),t.hij("",null==e.orderDetail?null:e.orderDetail.roundoff.toFixed(2)," "),t.xp6(5),t.hij("",null==e.orderDetail?null:e.orderDetail.total.toFixed(2)," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(42,y,"Complete"===(null==e.orderDetail?null:e.orderDetail.status),"Pending"===(null==e.orderDetail?null:e.orderDetail.status),"Draft"===(null==e.orderDetail?null:e.orderDetail.status))),t.xp6(1),t.Oqu(null==e.orderDetail?null:e.orderDetail.status)}}function q(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=s.$implicit,l=s.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const S=function(n,s){return{itemsPerPage:n,currentPage:s}};function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",29)(2,"div",4)(3,"p",52),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",53)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,q,10,7,"tr",54),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76,77),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.itemsPerPage=i)})("change",function(){t.CHM(e);const i=t.MAs(27),a=t.oxw();return t.KtG(a.changePg(i.value))}),t.TgZ(28,"option",78),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",79),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",80),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",81),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",82),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",83),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",84)(41,"div",85)(42,"pagination-controls",86),t.NdJ("pageChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.p=i)}),t.qZA(),t.TgZ(43,"div",87),t._uU(44),t.qZA()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.orderDetail?null:e.orderDetail.logs,e.key,e.reverse),t.WLB(12,S,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.orderDetail||null==e.orderDetail.logs?null:e.orderDetail.logs.length," of ",e.p," entries")}}function B(n,s){1&n&&(t.TgZ(0,"div",57)(1,"span",88),t._uU(2,"Logs Not Available"),t.qZA()())}const I=[{path:"",component:(()=>{class n{constructor(e,l,i,a){this.companyService=e,this.Arout=l,this.saleService=i,this.location=a,this.totalmrp=[],this.totalMrp=0,this.totalDiscount=[],this.discount=0,this.totaldiscount=0,this.calculateTax=0,this.totalTax=[],this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.saleService.getSalesOrderById(this.id).subscribe(e=>{this.id==e.id&&(this.orderDetail=e,this.orderDetail?.cart?.forEach(l=>{let i=l.price.toFixed(2)*l.discount/100;console.log(l.price.toFixed(2)-i.toFixed(2)),this.discount=l.price.toFixed(2)-i.toFixed(2),this.totaldiscount=0,this.totalDiscount.push(this.discount),console.log(this.totalDiscount),this.totalDiscount?.forEach(x=>{this.totaldiscount+=x}),console.log(this.totaldiscount.toFixed(2));let a=l?.price?.toFixed(2)*l?.discount/100;console.log(l?.price?.toFixed(2)-a.toFixed(2)),this.discount=l?.price?.toFixed(2)-a.toFixed(2);let f=this.discount-this.discount*(100/(100+l?.tax));console.log(f,"taxprice"),this.totalTax.push(f||0),console.log(this.totalTax),this.calculateTax=this.totaldiscount-f,console.log(this.calculateTax),this.totalmrp.push(l?.price),this.totalMrp=0,this?.totalmrp?.forEach(x=>{this.totalMrp+=x})}),this.supplierAddress=e,this.supplierAddress?.customer?.detail?.address.map(l=>{"Billing"==l?.address_type?(this.selectedAddressBilling=l,console.log(this.selectedAddressBilling)):"Shipping"==l.address_type&&(this.selectedAddressShipping=l,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&C()(e).then(l=>{this.loaderPdf=!1;const i=l.toDataURL("image/png"),a=new O.jsPDF("p","mm","a4"),f=a.internal.pageSize.getWidth(),x=a.internal.pageSize.getHeight();a.addImage(i,"JPEG",0,0,f,x),a.save("salesOrder.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,l=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=l}sort(e){this.key=e,this.reverse=!this.reverse}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.orderDetail?.logs?.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.J),t.Y36(p.gz),t.Y36(D.M),t.Y36(r.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sales-details"]],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Sales Order"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"text-center",2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return l.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Order"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Order"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Sales Order "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,U,190,46,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,w,45,15,"div",15),t.YNc(21,B,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//sales/edit-sales/",null==l.orderDetail?null:l.orderDetail.id,""),t.xp6(6),t.Q6J("ngIf",l.orderDetail),t.xp6(2),t.Q6J("ngIf",(null==l.orderDetail||null==l.orderDetail.logs?null:l.orderDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==l.orderDetail||null==l.orderDetail.logs?null:l.orderDetail.logs.length)))},dependencies:[r.mk,r.sg,r.O5,p.yS,c.SP,c.uX,m.Hw,d.YN,d.Kr,d.EJ,d.JJ,d.On,u.LS,r.uU,u._s,_.T],styles:[".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),n})(),canActivate:[o(30597).l],data:{allowedRoles:["view_saleorder"]}}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(I),p.Bz]}),n})();var j=o(95113),z=o(56709),J=o(90455),E=o(8468);let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,L,c.Nh,m.Ps,j.LD,z.p9,J.rP,d.u5,E.I]}),n})()},30597:(A,Z,o)=>{o.d(Z,{l:()=>t});var r=o(94650),p=o(4392),P=o(97185),C=o(42917),O=o(80927);let t=(()=>{class g{constructor(c,m,d,u,_){this.router=c,this.Arout=m,this.toastr=d,this.profileService=u,this.coreService=_}canActivate(c,m){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),d){const u=c.data.allowedRoles;console.log(u,"allowedRoles");const _=d.some(h=>u.includes(h.codename));if(console.log(_),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const v=h?.permission,M=this.profileService.getUserDetails();(!M||M.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(c){return new(c||g)(r.LFG(p.F0),r.LFG(p.gz),r.LFG(P._W),r.LFG(C.J),r.LFG(O.p))},g.\u0275prov=r.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);