"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1266],{65626:(M,f,s)=>{s.r(f),s.d(f,{StockTransferRequestDetailsModule:()=>F});var r=s(36895),d=s(88996),c=s(4159),b=s.n(c),v=s(96166),t=s(94650),u=s(97185),P=s(42236),g=s(97392),_=s(24006);function h(n,i){if(1&n&&(t.TgZ(0,"div",9)(1,"a",10),t._UZ(2,"img",11),t._uU(3,"Edit Stock Transfer Request "),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.MGl("routerLink","//product/update-stock-transfer-request/",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.id,"")}}function p(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",50),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function m(n,i){1&n&&(t.TgZ(0,"button",51),t._UZ(1,"span",52),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function T(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.quantity)}}function C(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function O(n,i){if(1&n&&(t.TgZ(0,"div",33)(1,"div",26)(2,"div",4)(3,"p",34),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",35)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th"),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,C,10,7,"tr",36),t.qZA()()()()()()),2&n){const e=t.oxw(2);t.xp6(19),t.Q6J("ngForOf",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.logs)}}function x(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",53)(1,"label"),t._uU(2,"Change Status"),t.qZA(),t.TgZ(3,"select",54,55),t.NdJ("change",function(a){t.CHM(e);const l=t.oxw(2);return t.KtG(l.changeStatusRejected(a.target.value))}),t.TgZ(5,"option",56),t._uU(6,"Select Status"),t.qZA(),t.TgZ(7,"option",57),t._uU(8,"Rejected"),t.qZA(),t.TgZ(9,"option",58),t._uU(10,"Dispatched"),t.qZA()()()}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",53)(1,"label"),t._uU(2,"Change Status"),t.qZA(),t.TgZ(3,"select",54,55),t.NdJ("change",function(a){t.CHM(e);const l=t.oxw(2);return t.KtG(l.changeStatusRejected(a.target.value))}),t.TgZ(5,"option",56),t._uU(6,"Select Status"),t.qZA(),t.TgZ(7,"option",59),t._uU(8,"Received"),t.qZA()()()}}const q=function(n,i,e){return{"bg-lightgreen":n,"bg-lightred":i,"bg-lightyellow":e}};function R(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"div",15)(4,"div",16)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,p,2,0,"button",17),t.YNc(8,m,3,0,"button",18),t.qZA(),t.TgZ(9,"p",19)(10,"button",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",21)(13,"div",22)(14,"div",23)(15,"p",24),t._uU(16,"Stock Transfer Request Details"),t.qZA()(),t.TgZ(17,"div",25)(18,"div",26)(19,"div",27)(20,"div",28)(21,"table",29)(22,"thead")(23,"tr")(24,"th",30),t._uU(25,"Sr.No."),t.qZA(),t.TgZ(26,"th",30),t._uU(27,"Transfer Request Number No."),t.qZA(),t.TgZ(28,"th",30),t._uU(29,"Transfer Request Date"),t.qZA(),t.TgZ(30,"th",30),t._uU(31,"From Branch "),t.qZA(),t.TgZ(32,"th",30),t._uU(33,"To Branch "),t.qZA(),t.TgZ(34,"th",30),t._uU(35,"Status"),t.qZA()()(),t.TgZ(36,"tbody")(37,"tr")(38,"td"),t._uU(39),t.qZA(),t.TgZ(40,"td",31),t._uU(41),t.qZA(),t.TgZ(42,"td",31),t._uU(43),t.qZA(),t.TgZ(44,"td",31),t._uU(45),t.qZA(),t.TgZ(46,"td",31),t._uU(47),t.qZA(),t.TgZ(48,"td",31)(49,"span",32),t._uU(50),t.qZA()()()()()()()()(),t.TgZ(51,"div",33)(52,"div",26)(53,"div",4)(54,"p",34),t._uU(55,"Product Details"),t.qZA()(),t.TgZ(56,"div",35)(57,"div")(58,"table")(59,"thead")(60,"tr")(61,"th"),t._uU(62,"#"),t.qZA(),t.TgZ(63,"th"),t._uU(64,"Barcode/SKU"),t.qZA(),t.TgZ(65,"th"),t._uU(66,"Product Name"),t.qZA(),t.TgZ(67,"th"),t._uU(68,"QTY"),t.qZA()()(),t.TgZ(69,"tbody"),t.YNc(70,T,9,4,"tr",36),t.TgZ(71,"tr",37)(72,"td",38)(73,"strong"),t._uU(74,"Total"),t.qZA()(),t.TgZ(75,"td",39),t._uU(76),t.qZA()()()()()(),t.TgZ(77,"div",27)(78,"p"),t._uU(79,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(80,"br"),t._uU(81," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.YNc(82,O,20,1,"div",40),t.TgZ(83,"div",41),t._UZ(84,"div",42),t.TgZ(85,"div",43)(86,"div",44)(87,"div",45)(88,"ul")(89,"li",46)(90,"h4"),t._uU(91,"Total Product"),t.qZA(),t.TgZ(92,"h5"),t._uU(93),t.qZA()(),t.TgZ(94,"li",46)(95,"h4"),t._uU(96,"Total QTY"),t.qZA(),t.TgZ(97,"h5"),t._uU(98),t.qZA()()()()()()(),t.TgZ(99,"div",1)(100,"div",2)(101,"div",47)(102,"div",42),t.YNc(103,x,11,0,"div",48),t.YNc(104,Z,9,0,"div",48),t.qZA(),t.TgZ(105,"div",42)(106,"div",49)(107,"strong"),t._uU(108,"Current Status : "),t.qZA(),t.TgZ(109,"span",32),t._uU(110),t.qZA()()()()()()()()()()()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(31),t.Oqu(1),t.xp6(2),t.hij(" ",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.transfer_request_number,""),t.xp6(2),t.hij(" ",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.request_date,""),t.xp6(2),t.hij(" ",null==e.stockTransferRequestDetail||null==e.stockTransferRequestDetail.from_branch?null:e.stockTransferRequestDetail.from_branch.title,""),t.xp6(2),t.hij(" ",null==e.stockTransferRequestDetail||null==e.stockTransferRequestDetail.to_branch?null:e.stockTransferRequestDetail.to_branch.title,""),t.xp6(2),t.Q6J("ngClass",t.kEZ(18,q,"Dispatched"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)||"Approved"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status),"Rejected"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status),"Received"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)||"Open"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status))),t.xp6(1),t.Oqu(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status),t.xp6(20),t.Q6J("ngForOf",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.cart),t.xp6(6),t.hij(" ",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.total_qty,""),t.xp6(6),t.Q6J("ngIf",(null==e.stockTransferRequestDetail||null==e.stockTransferRequestDetail.logs?null:e.stockTransferRequestDetail.logs.length)>0),t.xp6(11),t.hij("",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.total_product," "),t.xp6(5),t.hij("",null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.total_qty," "),t.xp6(5),t.Q6J("ngIf","Open"==(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)),t.xp6(1),t.Q6J("ngIf","Dispatched"==(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)),t.xp6(5),t.Q6J("ngClass",t.kEZ(22,q,"Dispatched"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)||"Approved"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status),"Rejected"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status),"Received"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)||"Open"===(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status))),t.xp6(1),t.Oqu(null==e.stockTransferRequestDetail?null:e.stockTransferRequestDetail.status)}}const A=[{path:"",component:(()=>{class n{constructor(e,o,a,l){this.Arout=e,this.toastr=o,this.stockService=a,this.location=l,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}getdata(){this.stockService.getStockTransferRequestById(this.id).subscribe(e=>{this.id==e.id&&(this.stockTransferRequestDetail=e)})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&b()(e).then(o=>{this.loaderPdf=!1;const a=o.toDataURL("image/png"),l=new v.jsPDF("p","mm","a4"),z=l.internal.pageSize.getWidth(),N=l.internal.pageSize.getHeight();l.addImage(a,"JPEG",0,0,z,N),l.save("stockTransferRequest.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,o=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=o}changeStatusRejected(e){console.log(e),"Rejected"==e?this.stockService.stockTransferRequestRejected(this.id).subscribe(o=>{console.log(o),o.success?(this.toastr.success(o.msg),this.ngOnInit()):this.toastr.error(o.error)}):"Dispatched"==e?this.stockService.stockTransferRequestDispatched(this.id).subscribe(o=>{console.log(o),o.success?(this.toastr.success(o.msg),this.ngOnInit()):this.toastr.error(o.error)}):"Received"==e&&this.stockService.stockTransferRequestRecieved(this.id).subscribe(o=>{console.log(o),o.success?(this.toastr.success(o.msg),this.ngOnInit()):this.toastr.error(o.error)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(u._W),t.Y36(P.q),t.Y36(r.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stock-transfer-request-details"]],decls:13,vars:2,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],["class","page-btn",4,"ngIf"],["class","company-details-card card",4,"ngIf"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"page-title","mb-3"],[1,"heading"],[1,"pdf-table1","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"badges",3,"ngClass"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],["class","pdf-table2 mb-4",4,"ngIf"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"row"],["class","form-group",4,"ngIf"],[1,"mt-4"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"form-group"],[1,"select",3,"change"],["id",""],["value","","selected","","disabled",""],["value","Rejected"],["value","Dispatched"],["value","Received"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return o.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Stock Transfer Request "),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Stock Transfer Request"),t.qZA()(),t.YNc(11,h,4,1,"div",7),t.qZA(),t.YNc(12,R,111,26,"div",8),t.qZA()()()),2&e&&(t.xp6(11),t.Q6J("ngIf","Open"==(null==o.stockTransferRequestDetail?null:o.stockTransferRequestDetail.status)),t.xp6(1),t.Q6J("ngIf",o.stockTransferRequestDetail))},dependencies:[r.mk,r.sg,r.O5,d.yS,g.Hw,_.YN,_.Kr,r.uU],styles:[".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.heading[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_transferrequest"]}}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(A),d.Bz]}),n})();var S=s(3848),y=s(84385),w=s(56709),I=s(90455);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,U,S.Nh,g.Ps,y.LD,w.p9,I.rP,_.u5]}),n})()},30597:(M,f,s)=>{s.d(f,{l:()=>t});var r=s(94650),d=s(88996),c=s(97185),b=s(42917),v=s(80927);let t=(()=>{class u{constructor(g,_,h,p,m){this.router=g,this.Arout=_,this.toastr=h,this.profileService=p,this.coreService=m}canActivate(g,_){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),h){const p=g.data.allowedRoles;console.log(p,"allowedRoles");const m=h.some(T=>p.includes(T.codename));if(console.log(m),this.coreService.getProfile().subscribe(T=>{this.userDetails=T,this.profileService.setUserDetails(this.userDetails);const C=T?.permission,O=this.profileService.getUserDetails();(!O||O.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(g){return new(g||u)(r.LFG(d.F0),r.LFG(d.gz),r.LFG(c._W),r.LFG(b.J),r.LFG(v.p))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},71002:(M,f,s)=>{function r(d){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(d)}s.d(f,{Z:()=>r})}}]);