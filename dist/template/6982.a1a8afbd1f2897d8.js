"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6982],{66982:(Q,_,l)=>{l.r(_),l.d(_,{ProductOrderModule:()=>F});var p=l(36895),m=l(88996),b=l(53583),v=l(12983),O=l.n(v),g=l(80574),P=l(94327),e=l(94650),y=l(92559),C=l(72326),c=l(24006),U=l(73162),h=l(54333),q=l(54040);function k(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",49)(3,"input",50),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).index,d=e.oxw(2);return e.KtG(d.selectedRows[s]=n)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",51)(8,"a",52),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td"),e._uU(25),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.qZA(),e.TgZ(28,"td"),e._uU(29),e.ALo(30,"date"),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.ALo(33,"date"),e.qZA(),e.TgZ(34,"td")(35,"a",53),e._UZ(36,"img",54),e.qZA()()()}if(2&r){const t=i.$implicit,o=i.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.MGl("routerLink","//website/productOrder/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.carts[0]||null==t.carts[0].product?null:t.carts[0].product.title),e.xp6(2),e.Oqu(null==t?null:t.payment_type),e.xp6(2),e.Oqu(null==t?null:t.payment_status),e.xp6(2),e.Oqu(null==t?null:t.sub_total_amount),e.xp6(2),e.Oqu(null==t?null:t.total_discount),e.xp6(2),e.Oqu(null==t?null:t.final_amount),e.xp6(2),e.Oqu(null==t?null:t.couopn_discount),e.xp6(2),e.Oqu(null==t?null:t.total_amount),e.xp6(2),e.Oqu(t.address_type),e.xp6(2),e.Oqu(null==t?null:t.status),e.xp6(2),e.Oqu(e.lcZ(30,16,null==t?null:t.order_date)),e.xp6(3),e.Oqu(e.lcZ(33,18,null==t?null:t.delivered_at)),e.xp6(3),e.MGl("routerLink","//website/productOrder/",t.id,"")}}const M=function(r,i){return{itemsPerPage:r,currentPage:i}};function S(r,i){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,k,37,20,"tr",48),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,M,t.itemsPerPage,t.p)))}}function J(r,i){1&r&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",55)(3,"p",56),e._uU(4,"Data not available"),e.qZA()()()())}function N(r,i){1&r&&e._UZ(0,"mat-progress-bar",57)}const L=[{path:"",component:(()=>{class r{constructor(t,o){this.websiteService=t,this.QueryService=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}ngOnInit(){this.websiteService.getProductOrder().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),console.log(this.tableData)}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>o?.carts[0]?.product?.title?.toString().toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new b.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Product Order",10,10),O()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Payment Type"},{header:"Payment Status"},{header:"Sub Total Amount"},{header:"Total Discount"},{header:"Total Amount"},{header:"Final Amount"},{header:"Couopn Discount"},{header:"Address Type"},{header:"Status"},{header:"Order Date"},{header:"Delivered At"},{header:"Is Active"}]}),t.save("productOrder.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),a=o.querySelectorAll("tbody tr"),s=[];return n.querySelectorAll("th").forEach(d=>{const u=d.textContent.trim();"Is Active"!==u&&"Action"!==u&&s.push(u)}),t.push(s),a.forEach(d=>{const u=[];d.querySelectorAll("td").forEach(Z=>{u.push(Z.textContent.trim())}),t.push(u)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=g.P6.aoa_to_sheet(t),n=g.P6.book_new();g.P6.book_append_sheet(n,o,"Sheet1");const a=g.cW(n,{bookType:"xlsx",type:"array"}),s=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,P.saveAs)(s,"productOrder.xlsx")}printTable(){const t=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),d=s.querySelector("th.thone:nth-child(15)");d&&d.remove();const u=s.querySelector("th.thone:last-child");u&&u.remove(),s.querySelectorAll("tr").forEach(T=>{const f=T.querySelector("td:nth-child(15)");f&&f.remove();const A=T.querySelector("td:last-child");A&&A.remove()});const H=s.outerHTML,I="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+H,B=document.body.innerHTML;document.body.innerHTML=I,window.print(),document.body.innerHTML=B}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(y.K),e.Y36(C._))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-product-order"]],decls:109,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"thone","tdd",3,"click"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Product Order list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Product Order"),e.qZA()()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),e._UZ(12,"img",9),e.TgZ(13,"span"),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div",14)(19,"label")(20,"input",15),e.NdJ("ngModelChange",function(a){return o.titlee=a})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),e.NdJ("click",function(){return o.generatePDF()}),e._UZ(25,"img",18),e.qZA()(),e.TgZ(26,"li")(27,"a",19),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e.NdJ("click",function(){return o.printTable()}),e._UZ(31,"img",22),e.qZA()()()()(),e.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th",25),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(37,"label",26),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(38,"input",27),e.NdJ("ngModelChange",function(a){return o.allSelected=a})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(39,"span",28),e.qZA(),e._UZ(40,"i",29),e.qZA(),e.TgZ(41,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(42,"Sr. No."),e._UZ(43,"i",29),e.qZA(),e.TgZ(44,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(45,"Title"),e._UZ(46,"i",29),e.qZA(),e.TgZ(47,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(48,"Payment Type"),e._UZ(49,"i",29),e.qZA(),e.TgZ(50,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(51,"Payment Status"),e._UZ(52,"i",29),e.qZA(),e.TgZ(53,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(54,"Sub Total Amount"),e._UZ(55,"i",29),e.qZA(),e.TgZ(56,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(57,"Total Discount"),e._UZ(58,"i",29),e.qZA(),e.TgZ(59,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(60,"Total Amount"),e._UZ(61,"i",29),e.qZA(),e.TgZ(62,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(63,"Final Amount "),e._UZ(64,"i",29),e.qZA(),e.TgZ(65,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(66,"Couopn Discount"),e._UZ(67,"i",29),e.qZA(),e.TgZ(68,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(69,"Address Type"),e._UZ(70,"i",29),e.qZA(),e.TgZ(71,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(72,"Status"),e._UZ(73,"i",29),e.qZA(),e.TgZ(74,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(75,"Order Date"),e._UZ(76,"i",29),e.qZA(),e.TgZ(77,"th",30),e.NdJ("click",function(){return o.sort("id")}),e._uU(78,"Delivered At"),e._UZ(79,"i",29),e.qZA(),e.TgZ(80,"th",25),e.NdJ("click",function(){return o.sort("id")}),e._uU(81,"Action "),e._UZ(82,"i",29),e.qZA()()(),e.YNc(83,S,4,11,"tbody",31),e.YNc(84,J,5,0,"tbody",31),e.qZA(),e.TgZ(85,"div",32),e.YNc(86,N,1,0,"mat-progress-bar",33),e.qZA(),e.TgZ(87,"div",34)(88,"div",35)(89,"div",36),e._uU(90," Show per page "),e.TgZ(91,"select",37),e.NdJ("ngModelChange",function(a){return o.itemsPerPage=a}),e.TgZ(92,"option",38),e._uU(93,"10"),e.qZA(),e.TgZ(94,"option",39),e._uU(95,"20"),e.qZA(),e.TgZ(96,"option",40),e._uU(97,"30"),e.qZA(),e.TgZ(98,"option",41),e._uU(99,"50"),e.qZA(),e.TgZ(100,"option",42),e._uU(101,"100"),e.qZA(),e.TgZ(102,"option",43),e._uU(103,"All"),e.qZA()()()(),e.TgZ(104,"div",44)(105,"div",45)(106,"pagination-controls",46),e.NdJ("pageChange",function(a){return o.p=a}),e.qZA(),e.TgZ(107,"div",47),e._uU(108),e.qZA()()()()()()()),2&t&&(e.xp6(20),e.Q6J("ngModel",o.titlee),e.xp6(18),e.Q6J("ngModel",o.allSelected),e.xp6(45),e.Q6J("ngIf",(null==o.tableData?null:o.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==o.tableData?null:o.tableData.length)),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(5),e.Q6J("ngModel",o.itemsPerPage),e.xp6(17),e.lnq("Showing ",o.itemsPerPage," to ",o.itemsPerPage," of ",o.itemsPerPage," entries"))},dependencies:[p.sg,p.O5,m.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,U.pW,h.LS,p.uU,h._s,q.T],styles:[".tdd[_ngcontent-%COMP%]{white-space:pre-line}"]}),r})(),canActivate:[l(30597).l],data:{allowedRoles:["view_order"]}}];let w=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(L),m.Bz]}),r})();var E=l(8468);let F=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,w,E.I,c.u5,c.UX]}),r})()}}]);