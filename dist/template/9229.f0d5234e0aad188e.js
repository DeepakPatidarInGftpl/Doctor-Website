"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9229],{99229:(P,v,a)=>{a.r(v),a.d(v,{ScrapEntryListModule:()=>I});var p=a(36895),_=a(89299),b=a(96166),E=a(12983),A=a.n(E),L=a(94327),d=a(80574),t=a(94650),h=a(71071),T=a(42917),y=a(97185),l=a(24006),f=a(73162),m=a(54333),Z=a(54040);function S(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",52)(3,"input",53),t.NdJ("ngModelChange",function(s){const i=t.CHM(e).index,g=t.oxw(2);return t.KtG(g.selectedRows[i]=s)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",54)(8,"a",55),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"a",56),t._UZ(16,"img",57),t.qZA()()()}if(2&o){const e=c.$implicit,n=c.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//transaction/details-scarp-entry/",e.id,""),t.xp6(1),t.Oqu(null==e?null:e.date),t.xp6(2),t.Oqu(null==e?null:e.voucher_no),t.xp6(2),t.Oqu(e.updater_name),t.xp6(2),t.MGl("routerLink","//transaction/details-scarp-entry/",e.id,"")}}const J=function(o,c){return{itemsPerPage:o,currentPage:c}};function N(o,c){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,S,17,7,"tr",51),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,J,e.itemsPerPage,e.p)))}}function q(o,c){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",58)(3,"p",59),t._uU(4,"Data not available"),t.qZA()()()())}function x(o,c){1&o&&t._UZ(0,"mat-progress-bar",60)}const F=[{path:"",component:(()=>{class o{constructor(e,n,s){this.transactionService=e,this.cs=n,this.toastrService=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.selectedRows=[],this.select=!1,this.key="id",this.reverse=!0}ngOnInit(){this.transactionService.getScrapEntry().subscribe(e=>{this.tableData=e,this.loader=!1}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(s=>{"transactions"===s.content_type.app_label&&"scarpentry"===s.content_type.model&&"add_scarpentry"==s.codename?(this.isAdd=s.codename,console.log(this.isAdd)):"transactions"===s.content_type.app_label&&"scarpentry"===s.content_type.model&&"change_scarpentry"==s.codename?(this.isEdit=s.codename,console.log(this.isEdit)):"transactions"===s.content_type.app_label&&"scarpentry"===s.content_type.model&&"delete_scarpentry"==s.codename&&(this.isDelete=s.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>!!(n?.voucher_no.toLocaleLowerCase()||"").includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDFAgain(){const e=new b.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Scrap Entry",82,10),e.text("",10,15),A()(e,{head:[["#","Date","Voucher No.","Updater Name"]],body:this.tableData.map((s,r)=>[r+1,s.date,s.voucher_no,s.updater_name]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Scrap_entry.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),s=n.querySelector("thead tr"),r=n.querySelectorAll("tbody tr"),i=[];return s.querySelectorAll("th").forEach(g=>{const u=g.textContent.trim();"Is Active"!==u&&"Action"!==u&&i.push(u)}),e.push(i),r.forEach(g=>{const u=[];g.querySelectorAll("td").forEach(C=>{u.push(C.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=d.P6.aoa_to_sheet(e),s=d.P6.book_new();d.P6.book_append_sheet(s,n,"Sheet1");const r=d.cW(s,{bookType:"xlsx",type:"array"}),i=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,L.saveAs)(i,"scrapEntry.xlsx")}printTable(){const e=document.getElementById("mytable"),r=document.querySelector(".titl").outerHTML,i=e.cloneNode(!0),g=i.querySelector("th.thone:nth-child(2)");g&&g.remove();const u=i.querySelector("th.thone:last-child");u&&u.remove(),i.querySelectorAll("tr").forEach(M=>{const D=M.querySelector("td:nth-child(2)");D&&D.remove();const U=M.querySelector("td:last-child");U&&U.remove()});const B=i.outerHTML,G="<style>.spaced-title { margin-top: 80px; }</style>"+r.replace("titl","spaced-title")+B,H=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=G,window.print(),document.body.innerHTML=H}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.p),t.Y36(T.J),t.Y36(y._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-scrap-entry-list"]],decls:87,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],["routerLink","//transaction/add-scarp-entry",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Scrap Entry list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Scrap Entry"),t.qZA()(),t.TgZ(6,"div",3)(7,"a",4),t._UZ(8,"img",5),t._uU(9,"Add Scrap Entry "),t.qZA()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t._UZ(16,"img",12),t.TgZ(17,"span"),t._UZ(18,"img",13),t.qZA()()(),t.TgZ(19,"div",14)(20,"a",15),t._UZ(21,"img",16),t.qZA(),t.TgZ(22,"div",17)(23,"label")(24,"input",18),t.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(25,"div",19)(26,"ul")(27,"li")(28,"a",20),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return n.printTable()}),t._UZ(35,"img",25),t.qZA()()()()(),t.TgZ(36,"div",26)(37,"table",27)(38,"thead")(39,"tr")(40,"th",28),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(41,"label",29),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(43,"span",31),t.qZA(),t._UZ(44,"i",32),t.qZA(),t.TgZ(45,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Sr. No. "),t._UZ(47,"i",32),t.qZA(),t.TgZ(48,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"Date"),t._UZ(50,"i",32),t.qZA(),t.TgZ(51,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Voucher No "),t._UZ(53,"i",32),t.qZA(),t.TgZ(54,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Updater Name "),t._UZ(56,"i",32),t.qZA(),t.TgZ(57,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Action "),t._UZ(59,"i",32),t.qZA()()(),t.YNc(60,N,4,11,"tbody",33),t.YNc(61,q,5,0,"tbody",33),t.qZA(),t.TgZ(62,"div",34),t.YNc(63,x,1,0,"mat-progress-bar",35),t.qZA(),t.TgZ(64,"div",36)(65,"div",37)(66,"div",38),t._uU(67," Show per page "),t.TgZ(68,"select",39,40),t.NdJ("ngModelChange",function(i){return n.itemsPerPage=i})("change",function(){t.CHM(s);const i=t.MAs(69);return t.KtG(n.changePg(i.value))}),t.TgZ(70,"option",41),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",42),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",43),t._uU(75,"30"),t.qZA(),t.TgZ(76,"option",44),t._uU(77,"50"),t.qZA(),t.TgZ(78,"option",45),t._uU(79,"100"),t.qZA(),t.TgZ(80,"option",46),t._uU(81,"All"),t.qZA()()()(),t.TgZ(82,"div",47)(83,"div",48)(84,"pagination-controls",49),t.NdJ("pageChange",function(i){return n.p=i}),t.qZA(),t.TgZ(85,"div",50),t._uU(86),t.qZA()()()()()()()}2&e&&(t.xp6(24),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(18),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries"))},dependencies:[p.sg,p.O5,_.yS,l.YN,l.Kr,l.Fj,l.Wl,l.EJ,l.JJ,l.On,f.pW,m.LS,m._s,Z.T]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["view_scarpentry"]}}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(F),_.Bz]}),o})();var R=a(8468);let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,O,R.I]}),o})()},30597:(P,v,a)=>{a.d(v,{l:()=>L});var p=a(94650),_=a(89299),b=a(97185),E=a(42917),A=a(80927);let L=(()=>{class d{constructor(h,T,y,l,f){this.router=h,this.Arout=T,this.toastr=y,this.profileService=l,this.coreService=f}canActivate(h,T){const y=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(l=>{this.userDetails=l,this.permissions=this.userDetails?.permission}),y){const l=h.data.allowedRoles;console.log(l,"allowedRoles");const f=y.some(m=>l.includes(m.codename));if(console.log(f),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const Z=m?.permission,S=this.profileService.getUserDetails();(!S||S.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(h){return new(h||d)(p.LFG(_.F0),p.LFG(_.gz),p.LFG(b._W),p.LFG(E.J),p.LFG(A.p))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);