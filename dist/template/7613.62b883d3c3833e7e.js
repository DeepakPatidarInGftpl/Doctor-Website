"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7613],{33737:(N,C,a)=>{a.r(C),a.d(C,{ProductLedgerModule:()=>I});var p=a(36895),P=a(88996),A=a(53583),L=a(12983),M=a.n(L),l=a(80574),c=a(94327),e=a(94650),u=a(80927),g=a(25062),i=a(24006),h=a(73162),m=a(54333),_=a(54040);function f(r,d){if(1&r&&(e.TgZ(0,"option",47),e._uU(1),e.qZA()),2&r){const t=d.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function b(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",49)(3,"input",50),e.NdJ("ngModelChange",function(o){const v=e.CHM(t).index,Z=e.oxw(2);return e.KtG(Z.selectedRows[v]=o)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA()()}if(2&r){const t=d.$implicit,n=d.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.date),e.xp6(2),e.Oqu(null==t?null:t.voucher_type),e.xp6(2),e.Oqu(null==t?null:t.voucher_no),e.xp6(2),e.Oqu((null==t?null:t.price)??0),e.xp6(2),e.Oqu(null==t?null:t.in_qty),e.xp6(2),e.Oqu(null==t?null:t.out_qty)}}const T=function(r,d){return{itemsPerPage:r,currentPage:d}};function D(r,d){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,b,21,9,"tr",48),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,T,t.itemsPerPage,t.p)))}}function U(r,d){1&r&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",51)(3,"p",52),e._uU(4,"Data not available"),e.qZA()()()())}function q(r,d){1&r&&e._UZ(0,"mat-progress-bar",53)}function k(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"div",25)(1,"div",54)(2,"div",55),e._uU(3," Show per page "),e.TgZ(4,"select",56),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.itemsPerPage=o)}),e.TgZ(5,"option",57),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",58),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",59),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",60),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",61),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",62),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",63)(18,"div",64)(19,"pagination-controls",65),e.NdJ("pageChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.p=o)}),e.qZA(),e.TgZ(20,"div",66),e._uU(21),e.qZA()()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}const w=[{path:"",component:(()=>{class r{constructor(t,n){this.coreService=t,this.contactService=n,this.tableData=[],this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.sho=!0,this.sho1=!1,this.sho2=!1}ngOnInit(){this.coreService.getProductLedger().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.getVoucher()}getVoucher(){this.contactService.getVoucherType().subscribe(t=>{console.log(t),this.voucherList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>n?.voucher_no?.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(o=>new Date(o?.date).toISOString().split("T")[0]===n)}this.selectedVoucherType&&(t=t.filter(n=>n?.voucher_type===this.selectedVoucherType)),this.filteredData=t}clearFilters(){this.selectedVoucherType=null,this.date=null,this.filterData()}generatePDF(){const t=new A.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Product Ledger List",10,10),M()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Date"},{header:"Voucher Type"},{header:"Voucher No."},{header:"Price"},{header:"In QTY"},{header:"Out QTY"},{header:"Is Active"}]}),t.save("productLedger.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),s=n.querySelectorAll("tbody tr"),v=[];return o.querySelectorAll("th").forEach(Z=>{const y=Z.textContent.trim();v.push(y)}),t.push(v),s.forEach(Z=>{const y=[];Z.querySelectorAll("td").forEach(x=>{y.push(x.textContent.trim())}),t.push(y)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=l.P6.aoa_to_sheet(t),o=l.P6.book_new();l.P6.book_append_sheet(o,n,"Sheet1");const s=l.cW(o,{bookType:"xlsx",type:"array"}),v=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,c.saveAs)(v,"productLedger.xlsx")}printTable(){const t=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,v=t.cloneNode(!0).outerHTML,y="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+v,x=document.body.innerHTML;document.body.innerHTML=y,window.print(),document.body.innerHTML=x}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.p),e.Y36(g.y))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-product-ledger"]],decls:91,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[3,"click"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Product Ledger"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Product Ledger"),e.qZA()()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),e._UZ(12,"img",9),e.TgZ(13,"span"),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div",14)(19,"label")(20,"input",15),e.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(25,"img",18),e.qZA()(),e.TgZ(26,"li")(27,"a",19),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e.NdJ("click",function(){return n.printTable()}),e._UZ(31,"img",22),e.qZA()()()()(),e.TgZ(32,"div",23)(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",25)(37,"div",27)(38,"div",28)(39,"label"),e._uU(40,"Date"),e.qZA(),e.TgZ(41,"input",29),e.NdJ("ngModelChange",function(s){return n.date=s})("change",function(){return n.filterData()}),e.qZA()()(),e.TgZ(42,"div",27)(43,"div",28)(44,"label"),e._uU(45,"Voucher Type"),e.qZA(),e.TgZ(46,"select",30),e.NdJ("ngModelChange",function(s){return n.selectedVoucherType=s})("change",function(){return n.filterData()}),e.TgZ(47,"option",31),e._uU(48,"Select Voucher Type"),e.qZA(),e.YNc(49,f,2,2,"option",32),e.qZA()()()(),e.TgZ(50,"div",33),e.NdJ("click",function(){return n.clearFilters()}),e.TgZ(51,"a",34),e._uU(52,"Clear Filter"),e.qZA()()()()()(),e.TgZ(53,"div",35)(54,"table",36)(55,"thead")(56,"tr")(57,"th",37),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(58,"label",38),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(59,"input",39),e.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(60,"span",40),e.qZA(),e._UZ(61,"i",41),e.qZA(),e.TgZ(62,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Sr No."),e._UZ(64,"i",41),e.qZA(),e.TgZ(65,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(66,"Name"),e._UZ(67,"i",41),e.qZA(),e.TgZ(68,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(69,"Date "),e._UZ(70,"i",41),e.qZA(),e.TgZ(71,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(72,"Voucher Type "),e._UZ(73,"i",41),e.qZA(),e.TgZ(74,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(75,"Voucher No. "),e._UZ(76,"i",41),e.qZA(),e.TgZ(77,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(78,"Price"),e._UZ(79,"i",41),e.qZA(),e.TgZ(80,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(81,"In QTY"),e._UZ(82,"i",41),e.qZA(),e.TgZ(83,"th",42),e.NdJ("click",function(){return n.sort("id")}),e._uU(84,"Out QTY"),e._UZ(85,"i",41),e.qZA()()(),e.YNc(86,D,4,11,"tbody",43),e.YNc(87,U,5,0,"tbody",43),e.qZA(),e.TgZ(88,"div",44),e.YNc(89,q,1,0,"mat-progress-bar",45),e.qZA(),e.YNc(90,k,22,4,"div",46),e.qZA()()()),2&t&&(e.xp6(20),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.selectedVoucherType),e.xp6(3),e.Q6J("ngForOf",n.voucherList),e.xp6(10),e.Q6J("ngModel",n.allSelected),e.xp6(27),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[p.sg,p.O5,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.On,h.pW,m.LS,m._s,_.T],styles:["input[type=date][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),r})(),canActivate:[a(30597).l],data:{allowedRoles:["add_productledger","change_productledger","delete_productledger","view_productledger"]}}];let O=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[P.Bz.forChild(w),P.Bz]}),r})();var F=a(8468);let I=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,O,F.I]}),r})()},65415:(N,C,a)=>{a.d(C,{G:()=>A,T:()=>M});var p=a(94650),A=function(){function l(c,e,u){this.el=c,this.vcr=e,this.renderer=u,this.dtOptions={}}return l.prototype.ngOnInit=function(){var c=this;this.dtTrigger?this.dtTrigger.subscribe(function(e){c.displayTable(e)}):this.displayTable(null)},l.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},l.prototype.displayTable=function(c){var e=this;c&&(this.dtOptions=c),this.dtInstance=new Promise(function(u,g){Promise.resolve(e.dtOptions).then(function(i){0===Object.keys(i).length&&0===$("tbody tr",e.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(_,f,b){if(i.columns){var T=i.columns;e.applyNgPipeTransform(_,T),e.applyNgRefTemplate(_,T,f)}i.rowCallback&&i.rowCallback(_,f,b)}};m=Object.assign({},i,m),e.dt=$(e.el.nativeElement).DataTable(m),u(e.dt)})})})},l.prototype.applyNgPipeTransform=function(c,e){e.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var i=g.ngPipeInstance,h=g.ngPipeArgs||[],m=e.findIndex(function(T){return T.data===g.data}),_=c.childNodes.item(m),f=$(_).text(),b=i.transform.apply(i,function(l,c,e){if(e||2===arguments.length)for(var i,u=0,g=c.length;u<g;u++)(i||!(u in c))&&(i||(i=Array.prototype.slice.call(c,0,u)),i[u]=c[u]);return l.concat(i||Array.prototype.slice.call(c))}([f],h,!1));$(_).text(b)})},l.prototype.applyNgRefTemplate=function(c,e,u){var g=this;e.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var m=h.ngTemplateRef,_=m.ref,f=m.context,b=e.findIndex(function(q){return q.data===h.data}),T=c.childNodes.item(b);$(T).html("");var D=Object.assign({},f,f?.userData,{adtData:u}),U=g.vcr.createEmbeddedView(_,D);g.renderer.appendChild(T,U.rootNodes[0])})},l.\u0275fac=function(e){return new(e||l)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},l.\u0275dir=p.lG2({type:l,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),l}(),L=a(36895),M=function(){function l(){}return l.forRoot=function(){return{ngModule:l}},l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=p.oAB({type:l}),l.\u0275inj=p.cJS({imports:[L.ez]}),l}()}}]);