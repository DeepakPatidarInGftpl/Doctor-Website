"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6421],{95058:(J,C,l)=>{l.r(C),l.d(C,{ListPurchaseModule:()=>B});var h=l(36895),A=l(88996),M=l(53583),P=l(12983),L=l.n(P),o=l(80574),r=l(94327),e=l(94650),u=l(54270),g=l(72326),d=l(42917),p=l(24006),_=l(73162),m=l(54333),f=l(54040);function b(a,c){1&a&&(e.TgZ(0,"div",65)(1,"a",66),e._UZ(2,"img",67),e._uU(3,"Add Purchase "),e.qZA()())}function Z(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",69)(3,"input",70),e.NdJ("ngModelChange",function(i){const T=e.CHM(n).index,v=e.oxw(2);return e.KtG(v.selectedRows[T]=i)}),e.qZA(),e._UZ(4,"span",47),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",71)(8,"a",72),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"td")(18,"a",73),e._UZ(19,"img",74),e.qZA()()()}if(2&a){const n=c.$implicit,t=c.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[t]),e.xp6(3),e.Oqu(t+1),e.xp6(2),e.MGl("routerLink","//bank/detailsPurchase/",n.id,""),e.xp6(1),e.Oqu(null==n?null:n.receipt_mode),e.xp6(2),e.Oqu(null==n?null:n.receipt_method),e.xp6(2),e.Oqu(null==n?null:n.amount),e.xp6(2),e.Oqu(e.xi3(16,8,null==n?null:n.receipt_date,"dd/MM/yyyy")),e.xp6(3),e.MGl("routerLink","//bank/detailsPurchase/",n.id,"")}}const D=function(a,c){return{itemsPerPage:a,currentPage:c}};function U(a,c){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,Z,20,11,"tr",68),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,n.filteredData,n.key,n.reverse),e.WLB(8,D,n.itemsPerPage,n.p)))}}function q(a,c){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),e._uU(4,"Data not available"),e.qZA()()()())}function N(a,c){1&a&&e._UZ(0,"mat-progress-bar",77)}let w=(()=>{class a{constructor(n,t,i){this.posService=n,this.QueryService=t,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedReceiptMode="",this.selectedReceiptMethod="",this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}ngOnInit(){this.posService.getPurchase().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(i=>{"pos"===i.content_type.app_label&&"payments"===i.content_type.model&&"add_payments"==i.codename?this.isAdd=i.codename:"pos"===i.content_type.app_label&&"payments"===i.content_type.model&&"change_payments"==i.codename?this.isEdit=i.codename:"pos"===i.content_type.app_label&&"payments"===i.content_type.model&&"delete_payments"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>{const i=t.receipt_mode.toLocaleLowerCase(),s=t.receipt_method.toLocaleLowerCase();return!!i.match(n)||!!s.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDF(){const n=new M.default;n.setFontSize(15),n.setTextColor(33,43,54),n.text("Purchase",10,10),L()(n,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Name"},{header:"Receipt Mode"},{header:"Receipt Method"},{header:"Amount"},{header:"Date"},{header:"Is Active"}]}),n.save("purchase.pdf")}getVisibleDataFromTable(){const n=[],t=document.getElementById("mytable"),i=t.querySelector("thead tr"),s=t.querySelectorAll("tbody tr"),T=[];return i.querySelectorAll("th").forEach(v=>{const y=v.textContent.trim();"Is Active"!==y&&"Action"!==y&&T.push(y)}),n.push(T),s.forEach(v=>{const y=[];v.querySelectorAll("td").forEach(k=>{y.push(k.textContent.trim())}),n.push(y)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),t=o.P6.aoa_to_sheet(n),i=o.P6.book_new();o.P6.book_append_sheet(i,t,"Sheet1");const s=o.cW(i,{bookType:"xlsx",type:"array"}),T=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,r.saveAs)(T,"purchase.xlsx")}printTable(){const n=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,T=n.cloneNode(!0),v=T.querySelector("th.thone:last-child");v&&v.remove(),T.querySelectorAll("tr").forEach(Y=>{const R=Y.querySelector("td:last-child");R&&R.remove()});const k=T.outerHTML,Q="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+k,H=document.body.innerHTML;document.body.innerHTML=Q,window.print(),document.body.innerHTML=H}filterData(){let n=this.tableData.slice();if(this.startDate){const t=new Date(this.startDate).toISOString().split("T")[0];n=n.filter(i=>new Date(i.receipt_date).toISOString().split("T")[0]===t)}this.selectedReceiptMode&&(n=n.filter(t=>t.receipt_mode===this.selectedReceiptMode)),this.selectedReceiptMethod&&(n=n.filter(t=>t.receipt_method===this.selectedReceiptMethod)),this.filteredData=n}clearDateRange(){this.startDate=null,this.endDate=null,this.filterData(),this.clearReceiptFilters()}clearReceiptFilters(){this.selectedReceiptMode=null,this.selectedReceiptMethod=null,this.filterData()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(u.v),e.Y36(g._),e.Y36(d.J))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-list-purchase"]],decls:130,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Purchase...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value",""],["value","Card"],["value","Bank"],["value","UPI"],["value","Cash"],["value","Advance"],["value","Against Bill"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","10%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//bank/addPurchase",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Purchase list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Purchase"),e.qZA()(),e.YNc(6,b,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return t.titlee=s})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"div",17)(24,"ul")(25,"li")(26,"a",18),e.NdJ("click",function(){return t.generatePDF()}),e._UZ(27,"img",19),e.qZA()(),e.TgZ(28,"li")(29,"a",20),e.NdJ("click",function(){return t.exportToExcel()}),e._UZ(30,"img",21),e.qZA()(),e.TgZ(31,"li")(32,"a",22),e.NdJ("click",function(){return t.printTable()}),e._UZ(33,"img",23),e.qZA()()()()()(),e.TgZ(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"div",26)(39,"div",28)(40,"div",29)(41,"label"),e._uU(42,"Date "),e.qZA(),e.TgZ(43,"input",30),e.NdJ("ngModelChange",function(s){return t.startDate=s})("change",function(){return t.filterData()}),e.qZA()()(),e.TgZ(44,"div",28)(45,"div",29)(46,"label"),e._uU(47,"Receipt Mode "),e.qZA(),e.TgZ(48,"select",31),e.NdJ("ngModelChange",function(s){return t.selectedReceiptMode=s})("change",function(){return t.filterData()}),e.TgZ(49,"option",32),e._uU(50,"Select Receipt Mode"),e.qZA(),e.TgZ(51,"option",33),e._uU(52,"All"),e.qZA(),e.TgZ(53,"option",34),e._uU(54,"Card"),e.qZA(),e.TgZ(55,"option",35),e._uU(56,"Bank"),e.qZA(),e.TgZ(57,"option",36),e._uU(58,"UPI"),e.qZA(),e.TgZ(59,"option",37),e._uU(60,"Cash"),e.qZA()()()(),e.TgZ(61,"div",28)(62,"div",29)(63,"label"),e._uU(64,"Receipt Method"),e.qZA(),e.TgZ(65,"select",31),e.NdJ("ngModelChange",function(s){return t.selectedReceiptMethod=s})("change",function(){return t.filterData()}),e.TgZ(66,"option",32),e._uU(67,"Select Receipt Method"),e.qZA(),e.TgZ(68,"option",33),e._uU(69,"All"),e.qZA(),e.TgZ(70,"option",38),e._uU(71,"Advance"),e.qZA(),e.TgZ(72,"option",39),e._uU(73,"Against Bill"),e.qZA()()()()(),e.TgZ(74,"div",40),e.NdJ("click",function(){return t.clearDateRange()}),e.TgZ(75,"a",41),e._uU(76,"Clear Filter"),e.qZA()()()()()(),e.TgZ(77,"div",42)(78,"table",43)(79,"thead")(80,"tr")(81,"th",44),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(82,"label",45),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(83,"input",46),e.NdJ("ngModelChange",function(s){return t.allSelected=s})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(84,"span",47),e.qZA(),e._UZ(85,"i",48),e.qZA(),e.TgZ(86,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(87,"Sr. No"),e._UZ(88,"i",48),e.qZA(),e.TgZ(89,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(90,"Receipt Mode"),e._UZ(91,"i",48),e.qZA(),e.TgZ(92,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(93,"Receipt Method"),e._UZ(94,"i",48),e.qZA(),e.TgZ(95,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(96,"Amount"),e._UZ(97,"i",48),e.qZA(),e.TgZ(98,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(99,"Date"),e._UZ(100,"i",48),e.qZA(),e.TgZ(101,"th",44),e.NdJ("click",function(){return t.sort("id")}),e._uU(102,"Action"),e._UZ(103,"i",48),e.qZA()()(),e.YNc(104,U,4,11,"tbody",49),e.YNc(105,q,5,0,"tbody",49),e.qZA(),e.TgZ(106,"div",50),e.YNc(107,N,1,0,"mat-progress-bar",51),e.qZA(),e.TgZ(108,"div",26)(109,"div",52)(110,"div",53),e._uU(111," Show per page "),e.TgZ(112,"select",54),e.NdJ("ngModelChange",function(s){return t.itemsPerPage=s}),e.TgZ(113,"option",55),e._uU(114,"10"),e.qZA(),e.TgZ(115,"option",56),e._uU(116,"20"),e.qZA(),e.TgZ(117,"option",57),e._uU(118,"30"),e.qZA(),e.TgZ(119,"option",58),e._uU(120,"50"),e.qZA(),e.TgZ(121,"option",59),e._uU(122,"100"),e.qZA(),e.TgZ(123,"option",60),e._uU(124,"All"),e.qZA()()()(),e.TgZ(125,"div",61)(126,"div",62)(127,"pagination-controls",63),e.NdJ("pageChange",function(s){return t.p=s}),e.qZA(),e.TgZ(128,"div",64),e._uU(129),e.qZA()()()()()()()),2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(22),e.Q6J("ngModel",t.startDate),e.xp6(5),e.Q6J("ngModel",t.selectedReceiptMode),e.xp6(17),e.Q6J("ngModel",t.selectedReceiptMethod),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(21),e.Q6J("ngIf",(null==t.filteredData?null:t.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.filteredData?null:t.filteredData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries"))},dependencies:[h.sg,h.O5,A.yS,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,_.pW,m.LS,h.uU,m._s,f.T],styles:["input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),a})();var x=l(30597);const S=JSON.parse(localStorage.getItem("auth"));let I;S&&S.map(c=>{"pos"===c.content_type.app_label&&"payments"===c.content_type.model&&"view_payments"==c.codename&&(I=c.codename)});const E=[{path:"",component:w,canActivate:[x.l],data:{allowedRoles:["view_payments"]}}];let F=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[A.Bz.forChild(E),A.Bz]}),a})();var O=l(8468);let B=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.ez,F,O.I]}),a})()},65415:(J,C,l)=>{l.d(C,{G:()=>M,T:()=>L});var h=l(94650),M=function(){function o(r,e,u){this.el=r,this.vcr=e,this.renderer=u,this.dtOptions={}}return o.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(e){r.displayTable(e)}):this.displayTable(null)},o.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},o.prototype.displayTable=function(r){var e=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(u,g){Promise.resolve(e.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",e.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var _={rowCallback:function(m,f,b){if(d.columns){var Z=d.columns;e.applyNgPipeTransform(m,Z),e.applyNgRefTemplate(m,Z,f)}d.rowCallback&&d.rowCallback(m,f,b)}};_=Object.assign({},d,_),e.dt=$(e.el.nativeElement).DataTable(_),u(e.dt)})})})},o.prototype.applyNgPipeTransform=function(r,e){e.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var d=g.ngPipeInstance,p=g.ngPipeArgs||[],_=e.findIndex(function(Z){return Z.data===g.data}),m=r.childNodes.item(_),f=$(m).text(),b=d.transform.apply(d,function(o,r,e){if(e||2===arguments.length)for(var d,u=0,g=r.length;u<g;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return o.concat(d||Array.prototype.slice.call(r))}([f],p,!1));$(m).text(b)})},o.prototype.applyNgRefTemplate=function(r,e,u){var g=this;e.filter(function(p){return p.ngTemplateRef&&!p.ngPipeInstance}).forEach(function(p){var _=p.ngTemplateRef,m=_.ref,f=_.context,b=e.findIndex(function(q){return q.data===p.data}),Z=r.childNodes.item(b);$(Z).html("");var D=Object.assign({},f,f?.userData,{adtData:u}),U=g.vcr.createEmbeddedView(m,D);g.renderer.appendChild(Z,U.rootNodes[0])})},o.\u0275fac=function(e){return new(e||o)(h.Y36(h.SBq),h.Y36(h.s_b),h.Y36(h.Qsj))},o.\u0275dir=h.lG2({type:o,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),o}(),P=l(36895),L=function(){function o(){}return o.forRoot=function(){return{ngModule:o}},o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=h.oAB({type:o}),o.\u0275inj=h.cJS({imports:[P.ez]}),o}()}}]);