"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[557],{557:(q,C,l)=>{l.r(C),l.d(C,{ListExpensesModule:()=>Y});var p=l(36895),f=l(89299),A=l(2454),u=l.n(A),E=l(96166),y=l(12983),_=l.n(y),v=l(80574),h=l(94327),e=l(94650),T=l(71071),m=l(42917),d=l(24006),x=l(73162),Z=l(54333),b=l(90455),S=l(54040);function J(i,a){1&i&&(e.TgZ(0,"div",47)(1,"a",48),e._UZ(2,"img",49),e._uU(3,"Add New Expense Voucher "),e.qZA()())}function k(i,a){if(1&i&&(e.TgZ(0,"a",57),e._UZ(1,"img",61),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//transaction/updateexpensesVoucher/",null==t?null:t.id,"")}}function N(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",62),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),o=s.index,r=s.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(o,null==r?null:r.id))}),e._UZ(1,"img",63),e.qZA()}}function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",51)(3,"input",52),e.NdJ("ngModelChange",function(s){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=s)}),e.qZA(),e._UZ(4,"span",41),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",53)(8,"a",54),e._uU(9),e.qZA()(),e.TgZ(10,"td",55),e._uU(11),e.qZA(),e.TgZ(12,"td",55),e._uU(13),e.qZA(),e.TgZ(14,"td",55),e._uU(15),e.qZA(),e.TgZ(16,"td",55),e._uU(17),e.qZA(),e.TgZ(18,"td",55),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td")(23,"mat-slide-toggle",56),e.NdJ("click",function(){const s=e.CHM(t),o=s.$implicit,r=s.index,c=e.oxw(2);return e.KtG(o.is_active?c.isActive(r,o.id):c.Active(r,o.id))})("ngModelChange",function(s){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=s)}),e.qZA()(),e.TgZ(24,"td")(25,"a",57),e._UZ(26,"img",58),e.qZA(),e.YNc(27,k,2,1,"a",59),e.YNc(28,N,2,0,"a",60),e.qZA()()}if(2&i){const t=a.$implicit,n=a.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//transaction/detailsexpensesVoucher/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.party?null:t.party.name),e.xp6(2),e.Oqu(null==t?null:t.expense_no),e.xp6(2),e.Oqu(null==t?null:t.refrence_bill_no),e.xp6(2),e.Oqu(null==t?null:t.expense_date),e.xp6(2),e.Oqu(null==t?null:t.tax_amount),e.xp6(2),e.Oqu(null==t?null:t.total_amount),e.xp6(2),e.Oqu(null==t?null:t.reverse_charge),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//transaction/detailsexpensesVoucher/",null==t?null:t.id,""),e.xp6(2),e.Q6J("ngIf",s.isEdit),e.xp6(1),e.Q6J("ngIf",s.isDelete)}}const P=function(i,a){return{itemsPerPage:i,currentPage:a}};function I(i,a){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,w,29,14,"tr",50),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,P,t.itemsPerPage,t.p)))}}function R(i,a){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),e._uU(4,"Data not available"),e.qZA()()()())}function B(i,a){1&i&&e._UZ(0,"mat-progress-bar",66)}function O(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",67)(2,"div",68),e._uU(3," Show per page "),e.TgZ(4,"select",69),e.NdJ("ngModelChange",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.itemsPerPage=s)}),e.TgZ(5,"option",70),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",71),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",72),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",73),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",74),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",75),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",76)(18,"div",77)(19,"pagination-controls",78),e.NdJ("pageChange",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.p=s)}),e.qZA(),e.TgZ(20,"div",79),e._uU(21),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}const G=[{path:"",component:(()=>{class i{constructor(t,n){this.transactionService=t,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.deleteExpensVoucher(n).subscribe(o=>{this.delRes=o,this.delRes.success?(u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(t,1),this.ngOnInit()):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Expense Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.ExpensVoucherIsActive(n,"").subscribe(o=>{this.delRes=o,this.delRes.success?(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this Expense Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.ExpensVoucherIsActive(n,"").subscribe(o=>{this.delRes=o,this.delRes.success?(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getExpensVoucher().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(s=>{"transactions"===s.content_type.app_label&&"expensesvoucher"===s.content_type.model&&"add_expensesvoucher"==s.codename?this.isAdd=s.codename:"transactions"===s.content_type.app_label&&"expensesvoucher"===s.content_type.model&&"change_expensesvoucher"==s.codename?this.isEdit=s.codename:"transactions"===s.content_type.app_label&&"expensesvoucher"===s.content_type.model&&"delete_expensesvoucher"==s.codename&&(this.isDelete=s.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>n?.journal_voucher_no.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new E.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Journal Voucher",10,10),_()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Account"},{header:"Journal Voucher No."},{header:"Date"},{header:"Total Debit"},{header:"Total Credit"},{header:"Description"},{header:"Is Active"}]}),t.save("journalVoucher.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),s=n.querySelector("thead tr"),o=n.querySelectorAll("tbody tr"),r=[];return s.querySelectorAll("th").forEach(c=>{const g=c.textContent.trim();"Is Active"!==g&&"Action"!==g&&r.push(g)}),t.push(r),o.forEach(c=>{const g=[];c.querySelectorAll("td").forEach(L=>{g.push(L.textContent.trim())}),t.push(g)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=v.P6.aoa_to_sheet(t),s=v.P6.book_new();v.P6.book_append_sheet(s,n,"Sheet1");const o=v.cW(s,{bookType:"xlsx",type:"array"}),r=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"journalVoucher.xlsx")}printTable(){const t=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(9)");c&&c.remove();const g=r.querySelector("th.thone:last-child");g&&g.remove(),r.querySelectorAll("tr").forEach(D=>{const M=D.querySelector("td:nth-child(9)");M&&M.remove();const U=D.querySelector("td:last-child");U&&U.remove()});const K=r.outerHTML,W="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+K,j=document.body.innerHTML;document.body.innerHTML=W,window.print(),document.body.innerHTML=j}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(s=>new Date(s?.date).toISOString().split("T")[0]===n)}this.selectedDebit&&(t=t.filter(n=>n?.total_debit<=this.selectedDebit)),this.selectedcredit&&(t=t.filter(n=>n?.total_credit<=this.selectedcredit)),console.log(t),this.filteredData=t}clearFilters(){this.selectedDebit=null,this.selectedcredit=null,this.date=null,this.filterData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.p),e.Y36(m.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-expenses"]],decls:104,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","change"],[1,"text-success"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/addexpensesVoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Expense Voucher LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Expense Voucher"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(o){return n.titlee=o})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Journal Voucher Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(o){return n.date=o})("change",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Enter Debit Amount"),e.qZA(),e.TgZ(47,"input",31),e.NdJ("ngModelChange",function(o){return n.selectedDebit=o})("change",function(){return n.filterData()}),e.qZA(),e.TgZ(48,"span",32),e._uU(49,"Debit Amount Filter (Less than & Equal to Amount value)"),e.qZA()()(),e.TgZ(50,"div",28)(51,"div",29)(52,"label"),e._uU(53,"Enter credit Amount"),e.qZA(),e.TgZ(54,"input",33),e.NdJ("ngModelChange",function(o){return n.selectedcredit=o})("keyup",function(){return n.filterData()}),e.qZA(),e.TgZ(55,"span",32),e._uU(56,"credit Amount Filter (Less than & Equal to Amount value)"),e.qZA()()()(),e.TgZ(57,"div",34),e.NdJ("click",function(){return n.clearFilters()}),e.TgZ(58,"a",35),e._uU(59,"Clear Filter"),e.qZA()()()()()(),e.TgZ(60,"div",36)(61,"table",37)(62,"thead")(63,"tr")(64,"th",38),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(65,"label",39),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(66,"input",40),e.NdJ("ngModelChange",function(o){return n.allSelected=o})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(67,"span",41),e.qZA(),e._UZ(68,"i",42),e.qZA(),e.TgZ(69,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(70,"Sr. No."),e._UZ(71,"i",42),e.qZA(),e.TgZ(72,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(73,"Party"),e._UZ(74,"i",42),e.qZA(),e.TgZ(75,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(76,"Expense Voucher No."),e._UZ(77,"i",42),e.qZA(),e.TgZ(78,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(79,"Refrence Bill No."),e._UZ(80,"i",42),e.qZA(),e.TgZ(81,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(82,"Date"),e._UZ(83,"i",42),e.qZA(),e.TgZ(84,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(85,"Sub Total"),e._UZ(86,"i",42),e.qZA(),e.TgZ(87,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(88,"Total"),e._UZ(89,"i",42),e.qZA(),e.TgZ(90,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Reverse Charge"),e._UZ(92,"i",42),e.qZA(),e.TgZ(93,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(94,"Is Active"),e._UZ(95,"i",42),e.qZA(),e.TgZ(96,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(97,"Action"),e._UZ(98,"i",42),e.qZA()()(),e.YNc(99,I,4,11,"tbody",43),e.YNc(100,R,5,0,"tbody",43),e.qZA(),e.TgZ(101,"div",44),e.YNc(102,B,1,0,"mat-progress-bar",45),e.qZA(),e.YNc(103,O,22,4,"div",46),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.selectedDebit),e.xp6(7),e.Q6J("ngModel",n.selectedcredit),e.xp6(12),e.Q6J("ngModel",n.allSelected),e.xp6(33),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[p.sg,p.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,x.pW,Z.LS,b.Rr,Z._s,S.T]}),i})(),canActivate:[l(30597).l],data:{allowedRoles:["view_expensesvoucher"]}}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(G),f.Bz]}),i})();var Q=l(8468);let Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,H,Q.I]}),i})()},30597:(q,C,l)=>{l.d(C,{l:()=>y});var p=l(94650),f=l(89299),A=l(97185),u=l(42917),E=l(80927);let y=(()=>{class _{constructor(h,e,T,m,d){this.router=h,this.Arout=e,this.toastr=T,this.profileService=m,this.coreService=d}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),T){const m=h.data.allowedRoles;console.log(m,"allowedRoles");const d=T.some(x=>m.includes(x.codename));if(console.log(d),this.coreService.getProfile().subscribe(x=>{this.userDetails=x,this.profileService.setUserDetails(this.userDetails);const Z=x?.permission,b=this.profileService.getUserDetails();(!b||b.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return _.\u0275fac=function(h){return new(h||_)(p.LFG(f.F0),p.LFG(f.gz),p.LFG(A._W),p.LFG(u.J),p.LFG(E.p))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);