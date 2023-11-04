"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6063],{53506:(Z,v,a)=>{a.d(v,{x:()=>x});var p=a(92340),g=a(94650),M=a(80529);let x=(()=>{class h{constructor(n){this.http=n,this.apiUrl=`${p.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}updatePurchase(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}MaterialIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}updateMaterial(n,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}PurchaseBillIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}updatePurchaseBill(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}updateDebitNotes(n,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}updatePurchaseReturn(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,i,r,u){let _=this.apiUrl+"/pv-api/purchase_product_filter/";const c=[];return n&&c.push(`supplier=${n}`),i&&c.push(`category=${i}`),r&&c.push(`subcategory=${r}`),u&&c.push(`search=${u}`),c.length>0&&(_+="?"+c.join("&")),this.http.get(_)}}return h.\u0275fac=function(n){return new(n||h)(g.LFG(M.eN))},h.\u0275prov=g.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},56063:(Z,v,a)=>{a.r(v),a.d(v,{DetailsMaterialInwardModule:()=>j});var p=a(36895),g=a(88996),M=a(4159),x=a.n(M),h=a(53583),t=a(94650),n=a(53506),i=a(42917),r=a(97392),u=a(24006),_=a(54333),c=a(54040);function f(l,d){if(1&l){const e=t.EpF();t.TgZ(0,"button",64),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.generatePdf())}),t._uU(1,"Download Invoice"),t.qZA()}}function P(l,d){1&l&&(t.TgZ(0,"button",65),t._UZ(1,"span",66),t._uU(2,"\xa0 Download Invoice"),t.qZA())}function C(l,d){if(1&l&&(t.TgZ(0,"div")(1,"p",67),t._uU(2,"Billing Address"),t.qZA(),t.TgZ(3,"p",68),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&l){const e=t.oxw(2);t.xp6(4),t.hij(" ",(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_1)+" , "+(null==e.selectedAddressBilling?null:e.selectedAddressBilling.address_line_2)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.city?null:e.selectedAddressBilling.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.email," ")}}function b(l,d){if(1&l&&(t.TgZ(0,"div")(1,"p",67),t._uU(2,"Shipping Address"),t.qZA(),t.TgZ(3,"p",68),t._uU(4),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8),t._UZ(9,"br"),t._uU(10),t.qZA()()),2&l){const e=t.oxw(2);t.xp6(4),t.hij(" ",(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_1)+" , "+(null==e.selectedAddressShipping?null:e.selectedAddressShipping.address_line_2)+" , "+(null==e.selectedAddressShipping||null==e.selectedAddressShipping.city?null:e.selectedAddressShipping.city.city)," "),t.xp6(2),t.hij(" ",(null==e.selectedAddressBilling||null==e.selectedAddressBilling.state?null:e.selectedAddressBilling.state.state)+" , "+(null==e.selectedAddressBilling||null==e.selectedAddressBilling.country?null:e.selectedAddressBilling.country.country_name)," "),t.xp6(2),t.hij(" Phone: ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.mobile_no," "),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.email," ")}}function U(l,d){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&l){const e=d.$implicit,o=d.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.sku),t.xp6(2),t.Oqu(null==e||null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.po_qty),t.xp6(2),t.Oqu(null==e?null:e.mrp)}}function D(l,d){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&l){const e=d.$implicit,o=d.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(9,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}const y=function(l,d){return{itemsPerPage:l,currentPage:d}};function A(l,d){if(1&l){const e=t.EpF();t.TgZ(0,"div",44)(1,"div",23)(2,"div",4)(3,"p",45),t._uU(4,"Logs Details"),t.qZA()(),t.TgZ(5,"div",46)(6,"div")(7,"table")(8,"thead")(9,"tr")(10,"th",69),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.sort("id"))}),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",69),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.sort("id"))}),t._uU(13,"User"),t.qZA(),t.TgZ(14,"th",69),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.sort("id"))}),t._uU(15,"Operation Type"),t.qZA(),t.TgZ(16,"th",69),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.sort("id"))}),t._uU(17,"Date Time"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,D,10,7,"tr",47),t.ALo(20,"paginate"),t.ALo(21,"orderBy"),t.qZA()(),t.TgZ(22,"div",25)(23,"div",70)(24,"div",71),t._uU(25," Show per page "),t.TgZ(26,"select",72),t.NdJ("ngModelChange",function(s){t.CHM(e);const m=t.oxw(2);return t.KtG(m.itemsPerPage=s)}),t.TgZ(27,"option",73),t._uU(28,"10"),t.qZA(),t.TgZ(29,"option",74),t._uU(30,"20"),t.qZA(),t.TgZ(31,"option",75),t._uU(32,"30"),t.qZA(),t.TgZ(33,"option",76),t._uU(34,"50"),t.qZA(),t.TgZ(35,"option",77),t._uU(36,"100"),t.qZA(),t.TgZ(37,"option",78),t._uU(38,"All"),t.qZA()()()(),t.TgZ(39,"div",79)(40,"div",80)(41,"pagination-controls",81),t.NdJ("pageChange",function(s){t.CHM(e);const m=t.oxw(2);return t.KtG(m.p=s)}),t.qZA(),t.TgZ(42,"div",82),t._uU(43),t.qZA()()()()()()()()}if(2&l){const e=t.oxw(2);t.xp6(19),t.Q6J("ngForOf",t.xi3(20,5,t.Dn7(21,8,null==e.materialDetail?null:e.materialDetail.logs,e.key,e.reverse),t.WLB(12,y,e.itemsPerPage,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const O=function(l,d,e){return{"bg-lightgreen":l,"bg-lightred":d,"bg-lightyellow":e}};function T(l,d){if(1&l){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"div",15)(5,"h3"),t._uU(6,"Invoice"),t.qZA(),t.YNc(7,f,2,0,"button",16),t.YNc(8,P,3,0,"button",17),t.qZA(),t.TgZ(9,"p",18)(10,"button",19),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.printForm())}),t._uU(11,"Print Invoice"),t.qZA()(),t.TgZ(12,"div",20)(13,"div",21)(14,"div",22)(15,"div",23)(16,"div",24)(17,"div",25)(18,"div",26)(19,"div",27)(20,"div",28),t._UZ(21,"img",29),t.TgZ(22,"p",30),t._uU(23),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.TgZ(28,"p"),t._uU(29),t.qZA()()()(),t.TgZ(30,"div",31)(31,"div",32)(32,"div",33)(33,"p"),t._uU(34),t.qZA(),t.TgZ(35,"h1",34),t._uU(36,"Invoice"),t.qZA(),t.TgZ(37,"p"),t._uU(38),t.ALo(39,"date"),t.qZA(),t.TgZ(40,"p"),t._uU(41),t.qZA(),t.TgZ(42,"p"),t._uU(43),t.ALo(44,"date"),t.qZA()()()()()()()(),t.TgZ(45,"div",4)(46,"p",35),t._uU(47,"Material Inward Details"),t.qZA()(),t.TgZ(48,"div",36)(49,"div",23)(50,"div",24)(51,"div",37),t.YNc(52,C,11,4,"div",38),t.YNc(53,b,11,4,"div",38),t.qZA()()()(),t.TgZ(54,"div",39)(55,"div",23)(56,"div",24)(57,"div",40)(58,"table",41)(59,"thead")(60,"tr")(61,"th",42),t._uU(62,"Order No. "),t.qZA(),t.TgZ(63,"th",42),t._uU(64,"Supplier Name"),t.qZA(),t.TgZ(65,"th",42),t._uU(66,"Purchase Order"),t.qZA(),t.TgZ(67,"th",42),t._uU(68,"Date"),t.qZA(),t.TgZ(69,"th",42),t._uU(70,"PO Date"),t.qZA(),t.TgZ(71,"th",42),t._uU(72,"Recieved By "),t.qZA(),t.TgZ(73,"th",42),t._uU(74,"Shipping Note"),t.qZA(),t.TgZ(75,"th",42),t._uU(76,"Product Type "),t.qZA()()(),t.TgZ(77,"tbody")(78,"tr")(79,"td",43),t._uU(80),t.qZA(),t.TgZ(81,"td",43),t._uU(82),t.qZA(),t.TgZ(83,"td",43),t._uU(84),t.qZA(),t.TgZ(85,"td",43),t._uU(86),t.ALo(87,"date"),t.qZA(),t.TgZ(88,"td",43),t._uU(89),t.ALo(90,"date"),t.qZA(),t.TgZ(91,"td",43),t._uU(92),t.qZA(),t.TgZ(93,"td",43),t._uU(94),t.qZA(),t.TgZ(95,"td",43),t._uU(96),t.qZA()()()()()()()(),t.TgZ(97,"div",44)(98,"div",23)(99,"div",4)(100,"p",45),t._uU(101,"Product Details"),t.qZA()(),t.TgZ(102,"div",46)(103,"div")(104,"table")(105,"thead")(106,"tr")(107,"th"),t._uU(108,"#"),t.qZA(),t.TgZ(109,"th"),t._uU(110,"Barcode/SKU"),t.qZA(),t.TgZ(111,"th"),t._uU(112,"Product Name"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"QTY"),t.qZA(),t.TgZ(115,"th"),t._uU(116,"PO QTY"),t.qZA(),t.TgZ(117,"th"),t._uU(118,"Mrp"),t.qZA()()(),t.TgZ(119,"tbody"),t.YNc(120,U,13,6,"tr",47),t.TgZ(121,"tr",48)(122,"td",49)(123,"strong"),t._uU(124,"Total"),t.qZA()(),t.TgZ(125,"td",50),t._uU(126),t.qZA(),t.TgZ(127,"td",50),t._uU(128),t.qZA(),t.TgZ(129,"td",50),t._uU(130),t.qZA()()()()()(),t.TgZ(131,"div",24)(132,"p"),t._uU(133,"Please notify us on any disrepancies within 3 days of receipt "),t._UZ(134,"br"),t._uU(135," Overdue invoices will be charged 24% interest."),t.qZA()()()(),t.YNc(136,A,44,15,"div",51),t.TgZ(137,"div",52)(138,"div",53)(139,"div",54)(140,"strong"),t._uU(141,"Note:"),t.qZA(),t.TgZ(142,"div",55)(143,"p"),t._uU(144),t.qZA()()()(),t.TgZ(145,"div",56)(146,"div",57)(147,"div",58)(148,"ul")(149,"li",59)(150,"h4"),t._uU(151,"Total"),t.qZA(),t.TgZ(152,"h5"),t._uU(153),t.ALo(154,"currency"),t.qZA()()()()()()(),t.TgZ(155,"div",60)(156,"p"),t._uU(157,"Status : "),t.TgZ(158,"span",61),t._uU(159),t.qZA()(),t.TgZ(160,"p",62),t._uU(161,"Export: "),t.TgZ(162,"span",61),t._uU(163),t.qZA()()(),t.TgZ(164,"div",63)(165,"p"),t._uU(166,"Please make cheques payable to "),t.TgZ(167,"span"),t._uU(168,"PV LTD."),t.qZA()()()()()()()()()}if(2&l){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!e.loaderPdf),t.xp6(1),t.Q6J("ngIf",e.loaderPdf),t.xp6(15),t.hij("GST ",null==e.companyDetails?null:e.companyDetails.gst,""),t.xp6(2),t.hij("Company Name: ",null==e.companyDetails?null:e.companyDetails.name,""),t.xp6(2),t.hij("Financial Year: ",null==e.companyDetails||null==e.companyDetails.financial_year?null:e.companyDetails.financial_year.financial_year," "),t.xp6(2),t.hij("Phone: ",null==e.companyDetails?null:e.companyDetails.phone,""),t.xp6(5),t.hij("GST ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.gstin,""),t.xp6(4),t.hij("Invoice Date: ",t.xi3(39,31,null==e.materialDetail?null:e.materialDetail.material_inward_date,"yyyy-MM-dd"),""),t.xp6(3),t.hij("Invoice NO: ",null==e.materialDetail?null:e.materialDetail.material_inward_no,""),t.xp6(2),t.hij("Invoice Date: ",t.xi3(44,34,null==e.materialDetail?null:e.materialDetail.po_date,"yyyy-MM-dd"),""),t.xp6(9),t.Q6J("ngIf",e.selectedAddressBilling),t.xp6(1),t.Q6J("ngIf",e.selectedAddressShipping),t.xp6(27),t.hij(" ",null==e.materialDetail?null:e.materialDetail.material_inward_no,""),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.party?null:e.materialDetail.party.company_name,""),t.xp6(2),t.hij(" ",null==e.materialDetail||null==e.materialDetail.purchase_order?null:e.materialDetail.purchase_order.order_no,""),t.xp6(2),t.hij(" ",t.xi3(87,37,null==e.materialDetail?null:e.materialDetail.material_inward_date,"yyyy-MM-dd"),""),t.xp6(3),t.Oqu(t.xi3(90,40,null==e.materialDetail?null:e.materialDetail.po_date,"yyyy-MM-dd")),t.xp6(3),t.hij("",null==e.materialDetail?null:e.materialDetail.recieved_by," "),t.xp6(2),t.hij(" ",null==e.materialDetail?null:e.materialDetail.shipping_note,""),t.xp6(2),t.hij("",null==e.materialDetail?null:e.materialDetail.product_type," "),t.xp6(24),t.Q6J("ngForOf",null==e.materialDetail?null:e.materialDetail.cart),t.xp6(6),t.Oqu(e.totalPurchaseRate),t.xp6(2),t.hij("",e.totalLandingCost," "),t.xp6(2),t.Oqu(e.totalMrp),t.xp6(6),t.Q6J("ngIf",(null==e.materialDetail||null==e.materialDetail.logs?null:e.materialDetail.logs.length)>0),t.xp6(8),t.Oqu(null==e.materialDetail?null:e.materialDetail.note),t.xp6(9),t.hij("",t.xi3(154,43,null==e.materialDetail?null:e.materialDetail.total.toFixed(2),"INR")," "),t.xp6(5),t.Q6J("ngClass",t.kEZ(46,O,"Completed"===(null==e.materialDetail?null:e.materialDetail.status),"Inprogress"===(null==e.materialDetail?null:e.materialDetail.status),"Draft"===(null==e.materialDetail?null:e.materialDetail.status))),t.xp6(1),t.Oqu(null==e.materialDetail?null:e.materialDetail.status),t.xp6(3),t.Q6J("ngClass",t.kEZ(50,O,!0===(null==e.materialDetail?null:e.materialDetail.export),!1===(null==e.materialDetail?null:e.materialDetail.export),"Partial"===(null==e.materialDetail?null:e.materialDetail.is_active))),t.xp6(1),t.Oqu(null==e.materialDetail?null:e.materialDetail.is_active)}}const q=[{path:"",component:(()=>{class l{constructor(e,o,s,m){this.Arout=e,this.purchaseService=o,this.location=s,this.companyService=m,this.totalPurchase=[],this.totalPurchaseRate=0,this.totalmrp=[],this.totalMrp=0,this.totallanding=[],this.totalLandingCost=0,this.loaderPdf=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.pp=1,this.pageSizee=10,this.itemsPerPagee=10,this.keyy="id",this.reversee=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.companyService.getCompany().subscribe(e=>{this.companyDetails=e[0]})}getdata(){this.purchaseService.getMaterialById(this.id).subscribe(e=>{this.id==e.id&&(this.materialDetail=e,this.supplierAddress=e,console.log(this.supplierAddress),this.supplierAddress?.party?.address.map(o=>{"Billing"==o?.address_type?(this.selectedAddressBilling=o,console.log(this.selectedAddressBilling)):"Shipping"==o.address_type&&(this.selectedAddressShipping=o,console.log(this.selectedAddressShipping))}),this.materialDetail?.cart?.forEach(o=>{this.totalPurchase.push(o?.qty),this.totalPurchaseRate=0,this?.totalPurchase?.forEach(s=>{this.totalPurchaseRate+=s}),this.totalmrp.push(o?.mrp),this.totalMrp=0,this?.totalmrp?.forEach(s=>{this.totalMrp+=s}),this.totallanding.push(o?.po_qty),this.totalLandingCost=0,this?.totallanding?.forEach(s=>{this.totalLandingCost+=s})}))})}goBack(){this.location.back()}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&x()(e).then(o=>{this.loaderPdf=!1;const s=o.toDataURL("image/png"),m=new h.jsPDF("p","mm","a4"),F=m.internal.pageSize.getWidth(),z=m.internal.pageSize.getHeight();m.addImage(s,"JPEG",0,0,F,z),m.save("MaterialInward.pdf")})}printForm(){const e=document.getElementById("debitNote").outerHTML,o=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=o}sort(e){this.key=e,this.reverse=!this.reverse}sortt(e){this.keyy=e,this.reversee=!this.reversee}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(g.gz),t.Y36(n.x),t.Y36(p.Ye),t.Y36(i.J))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-details-material-inward"]],decls:16,vars:2,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"content-part","my-3"],[1,"container","py-10"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary","disabled","",4,"ngIf"],[2,"margin-bottom","0"],[1,"btn","btn",2,"border","1px solid antiquewhite",3,"click"],["id","debitNote",1,"outer","container"],["id","doc-target",1,"pdf-div"],[1,"top","mb-4"],[1,"container"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-7"],[1,"d-flex","justify-content-between","align-items-center","top-div",2,"float","inline-start"],[1,"left-top"],["src","assets/dummy/pos.png","alt",""],[1,"gst"],[1,"col-sm-5"],[1,"d-flex","justify-content-between","align-items-center","top-div","my-3",2,"float","inline-end"],[1,"right-top"],[1,"pb-4"],[1,"headingg"],[1,"pdf-address","mb-4"],[1,"d-flex","justify-content-between","align-items-center","top-div","container"],[4,"ngIf"],[1,"pdf-table1","mb-4"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",2,"white-space","normal !important"],[2,"color","black"],[1,"pdf-table2","mb-4"],[2,"color","#FF9F43","font-size","16px"],[1,"col-sm-12","mb-3"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","3",1,"text-center"],[1,"text-center"],["class","pdf-table2 mb-4",4,"ngIf"],[1,"row","container"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],[1,"py-3","px-2",2,"white-space","break-spaces","border","1px solid rgb(234, 232, 232)","border-radius","4%"],[1,"col-lg-6","col-sm-6","col-12",2,"float","inline-end"],[1,"form-group","text-end"],[1,"total-order"],[1,"total"],[1,"d-flex","mx-5"],[1,"badges",3,"ngClass"],[1,"mx-3"],[1,"pdf-footer"],[1,"btn","btn-primary",3,"click"],["disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"heading"],[1,"heading2"],[3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return o.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Material Inward "),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"New Material Inward"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Material Inward "),t.qZA()()(),t.YNc(15,T,169,54,"div",10),t.qZA()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//purchase/editmaterial-Inward/",null==o.materialDetail?null:o.materialDetail.id,""),t.xp6(3),t.Q6J("ngIf",o.materialDetail))},dependencies:[p.mk,p.sg,p.O5,g.yS,r.Hw,u.YN,u.Kr,u.EJ,u.JJ,u.On,_.LS,p.H9,p.uU,_._s,c.T],styles:["table[_ngcontent-%COMP%]{width:100%;height:100px;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}",".upper-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.p-24[_ngcontent-%COMP%]{color:#2b2b2b;font-size:28px;font-weight:500}.p-14[_ngcontent-%COMP%]{color:#9c9c9c;font-size:14px}.lower-nav[_ngcontent-%COMP%]{display:flex;padding-bottom:20px}.container-fluid[_ngcontent-%COMP%]{padding:0 50px}.p-12[_ngcontent-%COMP%]{color:#000;font-size:12px}.p-14-500[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.purple[_ngcontent-%COMP%]{color:#c408a2;font-size:16px;font-weight:600}.invoice-3-sec[_ngcontent-%COMP%]{padding:30px 0;border-top:2px solid #eeeeee;border-bottom:2px solid #eeeeee}.invoice-1-sec[_ngcontent-%COMP%]{padding:0 0 30px;border-bottom:2px solid #eeeeee}.w-65[_ngcontent-%COMP%]{width:35%}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.invoice-2-sec[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f8f8f8}.invoice-2-sec[_ngcontent-%COMP%]{padding:30px 0}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-1-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.invoice-3-sec[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.p-16[_ngcontent-%COMP%]{font-size:14px}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0!important}.invoice-3-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-right:30px!important;font-size:14px}.invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-2-sec[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #eee}.table_1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.invoice-section[_ngcontent-%COMP%]{margin-top:100px;padding:50px}.table_amt[_ngcontent-%COMP%]{margin-bottom:30px}#doc-target[_ngcontent-%COMP%]{font-family:sans-serif;-webkit-font-smoothing:antialiased;color:#000;line-height:1.6em;margin:0 auto}#outer[_ngcontent-%COMP%]{padding:72pt;border:1px solid #000;margin:0 auto;width:100%}.pdf-div[_ngcontent-%COMP%]{background:white}.right-top[_ngcontent-%COMP%]{color:#000}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-weight:600;margin:0}.right-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px;font-size:48px;letter-spacing:.8px}.right-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]{color:#000;padding:20px 0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:2px;font-size:14px;letter-spacing:1px;font-weight:500;text-transform:uppercase}.gst[_ngcontent-%COMP%]{font-weight:600!important;margin:0}.left-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.left-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.top[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:2px solid #eee}.pdf-payment-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pdf-pd[_ngcontent-%COMP%]{display:flex}.pdf-pd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:400;letter-spacing:.1px}.pdf-pd-right[_ngcontent-%COMP%]{margin-left:20px}.pdf-payment[_ngcontent-%COMP%]{padding:20px 0;border-top:2px solid #eee;border-bottom:2px solid #eee}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;padding-top:15px;font-size:12px;font-weight:400;letter-spacing:.1px}.pdf-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse;font-weight:500;font-size:14px;letter-spacing:.1px;margin:0;padding:0}.pdf-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.pdf-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;color:#212b36;background-color:#ff9f43;text-align:center;vertical-align:middle;font-weight:600}.pdf-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:5px}.pdf-table2[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #000;font-weight:400;color:#000;font-size:13px}.pdf-table2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;letter-spacing:.1px}.pdf-address[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#ff9f43;font-weight:600;text-transform:uppercase;margin-bottom:5px}.pdf-address[_ngcontent-%COMP%]   .heading2[_ngcontent-%COMP%]{font-size:15px;font-weight:400;letter-spacing:1px;line-height:1.6}.pdf-table1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FF9F43;border-bottom:3px solid #FF9F43}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 10px}button[_ngcontent-%COMP%]{margin-right:8px}.headingg[_ngcontent-%COMP%]{color:#ff9f43;font-size:16px;font-weight:600;text-align:center}"]}),l})(),canActivate:[a(30597).l],data:{allowedRoles:["view_materialinward"]}}];let B=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild(q),g.Bz]}),l})();var S=a(3848),$=a(84385),N=a(56709),E=a(90455),L=a(8468);let j=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[p.ez,B,S.Nh,r.Ps,$.LD,N.p9,E.rP,u.u5,L.I]}),l})()},30597:(Z,v,a)=>{a.d(v,{l:()=>t});var p=a(94650),g=a(88996),M=a(97185),x=a(42917),h=a(80927);let t=(()=>{class n{constructor(r,u,_,c,f){this.router=r,this.Arout=u,this.toastr=_,this.profileService=c,this.coreService=f}canActivate(r,u){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),_){const c=r.data.allowedRoles;console.log(c,"allowedRoles");const f=_.some(P=>c.includes(P.codename));if(console.log(f),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const C=P?.permission,b=this.profileService.getUserDetails();(!b||b.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(r){return new(r||n)(p.LFG(g.F0),p.LFG(g.gz),p.LFG(M._W),p.LFG(x.J),p.LFG(h.p))},n.\u0275prov=p.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);