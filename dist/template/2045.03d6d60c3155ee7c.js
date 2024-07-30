"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2045],{32045:(M,Z,l)=>{l.r(Z),l.d(Z,{IncentiveLedgerModule:()=>O});var c=l(36895),T=l(4392),b=l(96166),I=l(12983),C=l.n(I),v=l(80574),d=l(94327),e=l(94650),h=l(72266),L=l(42917),s=l(24006),g=l(73162),_=l(54333),f=l(54040);function y(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",35)(3,"input",36),e.NdJ("ngModelChange",function(o){const u=e.CHM(t).index,p=e.oxw(2);return e.KtG(p.selectedRows[u]=o)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",37)(8,"a",38),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA()()}if(2&i){const t=r.$implicit,n=r.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(3),e.Oqu(null==t||null==t.employee?null:t.employee.name),e.xp6(2),e.Oqu(null==t?null:t.created_date),e.xp6(2),e.Oqu(null==t?null:t.transaction_type),e.xp6(2),e.Oqu(null==t?null:t.voucher_type),e.xp6(2),e.Oqu(null==t?null:t.voucher_number),e.xp6(2),e.Oqu(null==t?null:t.amount)}}const A=function(i,r){return{itemsPerPage:i,currentPage:r}};function D(i,r){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,y,20,8,"tr",34),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,A,t.itemsPerPage,t.p)))}}function x(i,r){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",39)(3,"p",40),e._uU(4,"Data not available"),e.qZA()()()())}function S(i,r){1&i&&e._UZ(0,"mat-progress-bar",41)}function E(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",42)(1,"div",43)(2,"div",44),e._uU(3," Show per page "),e.TgZ(4,"select",45),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.itemsPerPage=o)}),e.TgZ(5,"option",46),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",47),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",48),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",49),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",50),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",51),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",52)(18,"div",53)(19,"pagination-controls",54),e.NdJ("pageChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.p=o)}),e.qZA(),e.TgZ(20,"div",55),e._uU(21),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.p," entries")}}const N=[{path:"",component:(()=>{class i{constructor(t,n){this.hrmService=t,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}ngOnInit(){this.getLedger()}getLedger(){this.hrmService.getIncentiveLedger().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n?.employee?.name.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new b.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Tax Slab List",10,10),C()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Employee"},{header:"Created Date"},{header:"Transaction Type"},{header:"Voucher Type"},{header:"Voucher Number"},{header:"Amount"},{header:"Amount"}]}),t.save("incentiveLedger.pdf")}generatePDFAgain(){const t=new b.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("incentive Ledger ",82,10),t.text("",10,15),C()(t,{head:[["#","Employee","Created Date","Transaction Type","Voucher Type","Voucher Number,Amount"]],body:this.tableData.map((o,a)=>[a+1,o.products?.employee?.name,o.created_date,o.transaction_type,o.voucher_type,o.voucher_number,o.amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("incentive Ledger .pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),a=n.querySelectorAll("tbody tr"),u=[];return o.querySelectorAll("th").forEach(p=>{const m=p.textContent.trim();"Is Active"!==m&&"Action"!==m&&u.push(m)}),t.push(u),a.forEach(p=>{const m=[];p.querySelectorAll("td").forEach(U=>{m.push(U.textContent.trim())}),t.push(m)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=v.P6.aoa_to_sheet(t),o=v.P6.book_new();v.P6.book_append_sheet(o,n,"Sheet1");const a=v.cW(o,{bookType:"xlsx",type:"array"}),u=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,d.saveAs)(u,"incentiveLedger.xlsx")}printTable(){const t=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,u=t.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+u,U=document.body.innerHTML;document.body.innerHTML=m,window.print(),document.body.innerHTML=U}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.z),e.Y36(L.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-incentive-ledger"]],decls:67,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Employee...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Incentive Ledger "),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Incentive Ledger "),e.qZA()()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),e._UZ(12,"img",9),e.TgZ(13,"span"),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div",14)(19,"label")(20,"input",15),e.NdJ("ngModelChange",function(a){return n.titlee=a})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(25,"img",18),e.qZA()(),e.TgZ(26,"li")(27,"a",19),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e.NdJ("click",function(){return n.printTable()}),e._UZ(31,"img",22),e.qZA()()()()(),e.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th",25),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(37,"label",26),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(38,"input",27),e.NdJ("ngModelChange",function(a){return n.allSelected=a})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(39,"span",28),e.qZA(),e._UZ(40,"i",29),e.qZA(),e.TgZ(41,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(42,"Sr.No."),e._UZ(43,"i",29),e.qZA(),e.TgZ(44,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(45,"Employee"),e._UZ(46,"i",29),e.qZA(),e.TgZ(47,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"Created Date"),e._UZ(49,"i",29),e.qZA(),e.TgZ(50,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Transaction Type"),e._UZ(52,"i",29),e.qZA(),e.TgZ(53,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Voucher Type"),e._UZ(55,"i",29),e.qZA(),e.TgZ(56,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"Voucher Number"),e._UZ(58,"i",29),e.qZA(),e.TgZ(59,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Amount"),e._UZ(61,"i",29),e.qZA()()(),e.YNc(62,D,4,11,"tbody",30),e.YNc(63,x,5,0,"tbody",30),e.qZA(),e.TgZ(64,"div",31),e.YNc(65,S,1,0,"mat-progress-bar",32),e.qZA(),e.YNc(66,E,22,4,"div",33),e.qZA()()()),2&t&&(e.xp6(20),e.Q6J("ngModel",n.titlee),e.xp6(18),e.Q6J("ngModel",n.allSelected),e.xp6(24),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[c.sg,c.O5,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.On,g.pW,_.LS,_._s,f.T]}),i})(),canActivate:[l(30597).l],data:{allowedRoles:["view_incentiveledger"]}}];let q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[T.Bz.forChild(N),T.Bz]}),i})();var k=l(8468);let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,q,k.I]}),i})()},30597:(M,Z,l)=>{l.d(Z,{l:()=>v});var c=l(94650),T=l(4392),b=l(97185),I=l(42917),C=l(80927);let v=(()=>{class d{constructor(h,L,s,g,_){this.router=h,this.Arout=L,this.toastr=s,this.profileService=g,this.coreService=_}canActivate(h,L){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),s){const g=h.data.allowedRoles;console.log(g,"allowedRoles");const _=s.some(f=>g.includes(f.codename));if(console.log(_),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const y=f?.permission,A=this.profileService.getUserDetails();(!A||A.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(h){return new(h||d)(c.LFG(T.F0),c.LFG(T.gz),c.LFG(b._W),c.LFG(I.J),c.LFG(C.p))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);