"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6076],{86076:(b,Z,i)=>{i.r(Z),i.d(Z,{DetailsSalesReturnModule:()=>E});var r=i(36895),p=i(89299),C=i(4159),P=i.n(C),D=i(96166),t=i(94650),g=i(42917),A=i(72170),u=i(3848),m=i(97392),d=i(24006),c=i(54333),_=i(54040);function h(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",69),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function v(n,s){1&n&&(t.TgZ(0,"button",70),t._UZ(1,"span",71),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function M(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)||(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)==null?"":(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.party?null:e.returnBillDetail.party.email," ")}}function T(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",72),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",null==(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)||(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)==null?"":(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.phone_number," "),t.xp6(2),t.hij(" ",null==e.returnBillDetail||null==e.returnBillDetail.party?null:e.returnBillDetail.party.email," ")}}function y(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&n){const e=s.$implicit,l=s.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e?null:e.item_name),t.xp6(2),t.Oqu(null==e?null:e.price),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.deduction),t.xp6(2),t.Oqu(null==e?null:e.tax),t.xp6(2),t.Oqu(null==e?null:e.total)}}const O=function(n,s,e){return{"bg-lightgreen":n,"bg-lightred":s,"bg-lightyellow":e}};function B(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,h,2,0,"button",22),t.YNc(8,v,3,0,"button",23),t.qZA(),t.TgZ(9,"p",24)(10,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",26)(13,"div",27)(14,"div",28)(15,"div",29)(16,"div",30)(17,"div",31)(18,"div",32)(19,"div",33)(20,"div",34),t._UZ(21,"img",35),t.TgZ(22,"p",36)(23,"span"),t._uU(24,"GST"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"p")(27,"span"),t._uU(28,"Company Name"),t.qZA(),t._uU(29),t.qZA(),t.TgZ(30,"p")(31,"span"),t._uU(32,"Financial Year"),t.qZA(),t._uU(33),t.qZA(),t.TgZ(34,"p")(35,"span"),t._uU(36,"Address"),t.qZA(),t._uU(37),t.qZA(),t.TgZ(38,"p")(39,"span"),t._uU(40,"Phone"),t.qZA(),t._uU(41),t.qZA()()()(),t.TgZ(42,"div",37)(43,"div",38)(44,"div",39)(45,"h1",40),t._uU(46,"Invoice"),t.qZA(),t.TgZ(47,"p")(48,"span"),t._uU(49,"Invoice Date"),t.qZA(),t._uU(50),t.ALo(51,"date"),t.qZA(),t.TgZ(52,"p")(53,"span"),t._uU(54,"Invoice NO"),t.qZA(),t._uU(55),t.qZA(),t.TgZ(56,"p")(57,"span"),t._uU(58,"Return Date"),t.qZA(),t._uU(59),t.ALo(60,"date"),t.qZA()()()()()()()(),t.TgZ(61,"div",4)(62,"p",41),t._uU(63,"Sales Return Details"),t.qZA()(),t.TgZ(64,"div",42)(65,"div",29)(66,"div",30)(67,"div",43),t.YNc(68,M,11,4,"div",44),t.YNc(69,T,11,4,"div",44),t.qZA()()()(),t.TgZ(70,"div",45)(71,"div",29)(72,"div",30)(73,"div",46)(74,"table",47)(75,"thead")(76,"tr")(77,"th",48),t._uU(78,"Return Bill No."),t.qZA(),t.TgZ(79,"th",48),t._uU(80,"Party Name"),t.qZA(),t.TgZ(81,"th",48),t._uU(82,"Sales Bill"),t.qZA(),t.TgZ(83,"th",48),t._uU(84,"Sale Bill Date"),t.qZA(),t.TgZ(85,"th",48),t._uU(86,"Sale Return Date"),t.qZA()()(),t.TgZ(87,"tbody")(88,"tr")(89,"td",49),t._uU(90),t.qZA(),t.TgZ(91,"td",49),t._uU(92),t.qZA(),t.TgZ(93,"td",49),t._uU(94),t.qZA(),t.TgZ(95,"td",49),t._uU(96),t.ALo(97,"date"),t.qZA(),t.TgZ(98,"td",49),t._uU(99),t.ALo(100,"date"),t.qZA()()()()()()()(),t.TgZ(101,"div",50)(102,"div",29)(103,"div",4)(104,"p",51),t._uU(105,"Product Details"),t.qZA()(),t.TgZ(106,"div",52)(107,"div")(108,"table")(109,"thead")(110,"tr")(111,"th"),t._uU(112,"#"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"Barcode/SKU"),t.qZA(),t.TgZ(115,"th"),t._uU(116,"Product Name"),t.qZA(),t.TgZ(117,"th"),t._uU(118,"Price"),t.qZA(),t.TgZ(119,"th"),t._uU(120,"QTY"),t.qZA(),t.TgZ(121,"th"),t._uU(122,"Deduction %"),t.qZA(),t.TgZ(123,"th"),t._uU(124,"Tax %"),t.qZA(),t.TgZ(125,"th"),t._uU(126,"Total"),t.qZA()()(),t.TgZ(127,"tbody"),t.YNc(128,y,17,8,"tr",53),t.TgZ(129,"tr",54)(130,"td",55)(131,"strong"),t._uU(132,"Total"),t.qZA()(),t.TgZ(133,"td",56),t._uU(134),t.qZA(),t.TgZ(135,"td",56),t._uU(136),t.qZA(),t.TgZ(137,"td",56),t._uU(138),t.qZA(),t.TgZ(139,"td",56),t._uU(140),t.qZA(),t.TgZ(141,"td",56),t._uU(142),t.qZA()()()()()(),t.TgZ(143,"div",30)(144,"p"),t._uU(145,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(146,"br"),t._uU(147," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.TgZ(148,"div",57)(149,"div",58)(150,"div",59)(151,"strong"),t._uU(152,"Note:"),t.qZA(),t.TgZ(153,"div",60)(154,"p"),t._uU(155),t.qZA()()()(),t.TgZ(156,"div",61)(157,"div",62)(158,"div",63)(159,"ul")(160,"li",64)(161,"h4"),t._uU(162,"Sub Total"),t.qZA(),t.TgZ(163,"h5"),t._uU(164),t.qZA()(),t.TgZ(165,"li",64)(166,"h4"),t._uU(167,"Round Off"),t.qZA(),t.TgZ(168,"h5"),t._uU(169),t.qZA()(),t.TgZ(170,"li",64)(171,"h4"),t._uU(172,"Total"),t.qZA(),t.TgZ(173,"h5"),t._uU(174),t.qZA()()()()()()(),t.TgZ(175,"div",65)(176,"p")(177,"strong"),t._uU(178,"Status : "),t.qZA(),t.TgZ(179,"span",66),t._uU(180),t.qZA()(),t.TgZ(181,"p",67)(182,"strong"),t._uU(183,"IS Active : "),t.qZA(),t.TgZ(184,"span",66),t._uU(185),t.qZA()()(),t.TgZ(186,"div",68)(187,"p"),t._uU(188,"Please make cheques payable to "),t.TgZ(189,"span"),t._uU(190,"PV LTD."),t.qZA()()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(17),t.hij(" ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(4),t.hij(" : ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year," "),t.xp6(4),t.hij(" : ",(null==e.companyDetails?null:e.companyDetails.address)+" , "+(null==e.companyDetails||null==e.companyDetails.city?null:e.companyDetails.city.city)+" , "+(null==e.companyDetails||null==e.companyDetails.state?null:e.companyDetails.state.state)+" , "+(null==e.companyDetails||null==e.companyDetails.country?null:e.companyDetails.country.country_name)+" , "+(null==e.companyDetails?null:e.companyDetails.pincode)," "),t.xp6(4),t.hij(" : ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(9),t.hij(" : ",t.xi3(51,31,null==e.returnBillDetail?null:e.returnBillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(5),t.hij(" : ",null==e.returnBillDetail?null:e.returnBillDetail.sale_return_bill_no," "),t.xp6(4),t.hij(" : ",t.xi3(60,34,null==e.returnBillDetail?null:e.returnBillDetail.return_date,"dd-MMMM-yyyy"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(21),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.sale_return_bill_no),t.xp6(2),t.Oqu((null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.name)+" ("+(null==e.returnBillDetail||null==e.returnBillDetail.customer?null:e.returnBillDetail.customer.user_type)+")"),t.xp6(2),t.Oqu(null==e.returnBillDetail||null==e.returnBillDetail.sale_bill?null:e.returnBillDetail.sale_bill.customer_bill_no),t.xp6(2),t.hij(" ",t.xi3(97,37,null==e.returnBillDetail?null:e.returnBillDetail.bill_date,"dd-MMMM-yyyy"),""),t.xp6(3),t.hij(" ",t.xi3(100,40,null==e.returnBillDetail?null:e.returnBillDetail.return_date,"dd-MMMM-yyyy"),""),t.xp6(29),t.Q6J("ngForOf",null==e.returnBillDetail?null:e.returnBillDetail.cart),t.xp6(6),t.Oqu(e.totalMrp.toFixed(2)),t.xp6(2),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.total_qty),t.xp6(2),t.Oqu((null==e.returnBillDetail?null:e.returnBillDetail.total_discount)+"% (\u20b9"+(null==e.totaldiscount?null:e.totaldiscount.toFixed(2))+")"),t.xp6(2),t.Oqu((null==e.returnBillDetail?null:e.returnBillDetail.total_tax)+"% (\u20b9"+(null==e.calculateTax?null:e.calculateTax.toFixed(2))+")"),t.xp6(2),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.total),t.xp6(13),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.note),t.xp6(9),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.subtotal.toFixed(2)," "),t.xp6(5),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.roundoff.toFixed(2)," "),t.xp6(5),t.hij("",null==e.returnBillDetail?null:e.returnBillDetail.total.toFixed(2)," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(43,O,"Complete"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Pending"===(null==e.returnBillDetail?null:e.returnBillDetail.status),"Draft"===(null==e.returnBillDetail?null:e.returnBillDetail.status))),t.xp6(1),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.status),t.xp6(4),t.Q6J("ngClass",t.kEZ(47,O,!0===(null==e.returnBillDetail?null:e.returnBillDetail.is_active),!1===(null==e.returnBillDetail?null:e.returnBillDetail.is_active),"Partial"===(null==e.returnBillDetail?null:e.returnBillDetail.is_active))),t.xp6(1),t.Oqu(null==e.returnBillDetail?null:e.returnBillDetail.is_active)}}function U(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=s.$implicit,l=s.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const q=function(n,s){return{itemsPerPage:n,currentPage:s}};function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",29)(2,"div",4)(3,"p",51),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",52)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",73),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,U,10,7,"tr",53),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",31)(23,"div",74)(24,"div",75),t._uU(25," Show per page "),t.TgZ(26,"select",76,77),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.itemsPerPage=o)})("change",function(){t.CHM(e);const o=t.MAs(27),a=t.oxw();return t.KtG(a.changePg(o.value))}),t.TgZ(28,"option",78),t._uU(29,"10"),t.qZA(),t.TgZ(30,"option",79),t._uU(31,"20"),t.qZA(),t.TgZ(32,"option",80),t._uU(33,"30"),t.qZA(),t.TgZ(34,"option",81),t._uU(35,"50"),t.qZA(),t.TgZ(36,"option",82),t._uU(37,"100"),t.qZA(),t.TgZ(38,"option",83),t._uU(39,"All"),t.qZA()()()(),t.TgZ(40,"div",84)(41,"div",85)(42,"pagination-controls",86),t.NdJ("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.p=o)}),t.qZA(),t.TgZ(43,"div",87),t._uU(44),t.qZA()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.returnBillDetail?null:e.returnBillDetail.logs,e.key,e.reverse),t.WLB(12,q,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.returnBillDetail||null==e.returnBillDetail.logs?null:e.returnBillDetail.logs.length," of ",e.p," entries")}}function R(n,s){1&n&&(t.TgZ(0,"div",56)(1,"span",88),t._uU(2,"Logs Not Available"),t.qZA()())}const I=[{path:"",component:(()=>{class n{constructor(e,l,o,a){this.companyService=e,this.Arout=l,this.saleService=o,this.location=a,this.totalmrp=[],this.totalMrp=0,this.totalDiscount=[],this.discount=0,this.totaldiscount=0,this.calculateTax=0,this.totalTax=[],this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.saleService.getSaleReturnById(this.id).subscribe(e=>{this.id==e.id&&(this.returnBillDetail=e,this.returnBillDetail?.cart?.forEach(l=>{let o=l.price.toFixed(2)*l.deduction/100;console.log(l.price.toFixed(2)-o.toFixed(2)),this.discount=l.price.toFixed(2)-o.toFixed(2),this.totaldiscount=0,this.totalDiscount.push(this.discount),console.log(this.totalDiscount),this.totalDiscount?.forEach(x=>{this.totaldiscount+=x}),console.log(this.totaldiscount.toFixed(2));let a=l?.price?.toFixed(2)*l?.deduction/100;console.log(l?.price?.toFixed(2)-a.toFixed(2)),this.discount=l?.price?.toFixed(2)-a.toFixed(2);let f=this.discount-this.discount*(100/(100+l?.tax));console.log(f,"taxprice"),this.totalTax.push(f||0),console.log(this.totalTax),this.calculateTax=this.totaldiscount-f,console.log(this.calculateTax),this.totalmrp.push(l?.price),this.totalMrp=0,this?.totalmrp?.forEach(x=>{this.totalMrp+=x})}),this.supplierAddress=e,this.supplierAddress?.customer?.detail?.address.map(l=>{"Billing"==l?.address_type?(this.selectedAddressBilling=l,console.log(this.selectedAddressBilling)):"Shipping"==l.address_type&&(this.selectedAddressShipping=l,console.log(this.selectedAddressShipping))}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&P()(e).then(l=>{this.loaderPdf=!1;const o=l.toDataURL("image/png"),a=new D.jsPDF("p","mm","a4"),f=a.internal.pageSize.getWidth(),x=a.internal.pageSize.getHeight();a.addImage(o,"JPEG",0,0,f,x),a.save("salesReturn.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,l=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=l}sort(e){this.key=e,this.reverse=!this.reverse}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.returnBillDetail?.logs?.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.J),t.Y36(p.gz),t.Y36(A.M),t.Y36(r.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details-sales-return"]],decls:22,vars:4,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["tabGroup",""],["label","Sales Return"],["class","company-details-card card",4,"ngIf"],["label","Logs"],["class","pdf-table2 mb-4",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"heading"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"mx-3"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"text-danger"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return l.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Sales Return"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Sales Return"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Sales Return "),t.qZA()()(),t.TgZ(15,"mat-tab-group",10,11)(17,"mat-tab",12),t.YNc(18,B,191,51,"div",13),t.qZA(),t.TgZ(19,"mat-tab",14),t.YNc(20,S,45,15,"div",15),t.YNc(21,R,3,0,"div",16),t.qZA()()()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//sales/updatesalesReturn/",null==l.returnBillDetail?null:l.returnBillDetail.id,""),t.xp6(6),t.Q6J("ngIf",l.returnBillDetail),t.xp6(2),t.Q6J("ngIf",(null==l.returnBillDetail||null==l.returnBillDetail.logs?null:l.returnBillDetail.logs.length)>0),t.xp6(1),t.Q6J("ngIf",0==(null==l.returnBillDetail||null==l.returnBillDetail.logs?null:l.returnBillDetail.logs.length)))},dependencies:[r.mk,r.sg,r.O5,p.yS,u.SP,u.uX,m.Hw,d.YN,d.Kr,d.EJ,d.JJ,d.On,c.LS,r.uU,c._s,_.T],styles:[".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),n})(),canActivate:[i(30597).l],data:{allowedRoles:["view_salereturn"]}}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(I),p.Bz]}),n})();var L=i(95113),j=i(56709),J=i(90455),z=i(8468);let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,N,u.Nh,m.Ps,L.LD,j.p9,J.rP,d.u5,z.I]}),n})()},30597:(b,Z,i)=>{i.d(Z,{l:()=>t});var r=i(94650),p=i(89299),C=i(97185),P=i(42917),D=i(80927);let t=(()=>{class g{constructor(u,m,d,c,_){this.router=u,this.Arout=m,this.toastr=d,this.profileService=c,this.coreService=_}canActivate(u,m){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),d){const c=u.data.allowedRoles;console.log(c,"allowedRoles");const _=d.some(h=>c.includes(h.codename));if(console.log(_),this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails);const v=h?.permission,M=this.profileService.getUserDetails();(!M||M.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(u){return new(u||g)(r.LFG(p.F0),r.LFG(p.gz),r.LFG(C._W),r.LFG(P.J),r.LFG(D.p))},g.\u0275prov=r.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);