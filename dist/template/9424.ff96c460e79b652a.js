"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9424],{19424:(z,_,r)=>{r.r(_),r.d(_,{ListJournalVoucherModule:()=>Q});var p=r(36895),m=r(88996),C=r(2454),u=r.n(C),J=r(53583),A=r(12983),y=r.n(A),g=r(80574),L=r(94327),e=r(94650),x=r(71071),M=r(42917),h=r(24006),V=r(73162),f=r(54333),D=r(90455),q=r(54040);function U(i,a){1&i&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add New Journal Voucher "),e.qZA()())}function k(i,a){if(1&i&&(e.TgZ(0,"a",56),e._UZ(1,"img",60),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//transaction/updatejournalvoucher/",null==t?null:t.id,"")}}function N(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",61),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),l=o.index,s=o.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(l,null==s?null:s.id))}),e._UZ(1,"img",62),e.qZA()}}function S(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(o){const s=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[s]=o)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",52)(8,"a",53),e._uU(9),e.qZA()(),e.TgZ(10,"td",54),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td",54),e._uU(15),e.qZA(),e.TgZ(16,"td",54),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"mat-slide-toggle",55),e.NdJ("click",function(){const o=e.CHM(t),l=o.$implicit,s=o.index,c=e.oxw(2);return e.KtG(l.is_active?c.isActive(s,l.id):c.Active(s,l.id))})("ngModelChange",function(o){const s=e.CHM(t).$implicit;return e.KtG(s.is_active=o)}),e.qZA()(),e.TgZ(22,"td")(23,"a",56),e._UZ(24,"img",57),e.qZA(),e.YNc(25,k,2,1,"a",58),e.YNc(26,N,2,0,"a",59),e.qZA()()}if(2&i){const t=a.$implicit,n=a.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//transaction/detailsjournalvoucher/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.cart[0]||null==t.cart[0].from_account?null:t.cart[0].from_account.account_id),e.xp6(2),e.Oqu(null==t?null:t.journal_voucher_no),e.xp6(2),e.Oqu(null==t?null:t.date),e.xp6(2),e.Oqu(null==t?null:t.total_debit),e.xp6(2),e.Oqu(null==t?null:t.total_credit),e.xp6(2),e.Oqu(null==t?null:t.description),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//transaction/detailsjournalvoucher/",null==t?null:t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const w=function(i,a){return{itemsPerPage:i,currentPage:a}};function I(i,a){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,S,27,13,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,w,t.itemsPerPage,t.p)))}}function B(i,a){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),e._uU(4,"Data not available"),e.qZA()()()())}function E(i,a){1&i&&e._UZ(0,"mat-progress-bar",65)}function P(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",66)(2,"div",67),e._uU(3," Show per page "),e.TgZ(4,"select",68),e.NdJ("ngModelChange",function(o){e.CHM(t);const l=e.oxw();return e.KtG(l.itemsPerPage=o)}),e.TgZ(5,"option",69),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",70),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",71),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",72),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",73),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",74),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",75)(18,"div",76)(19,"pagination-controls",77),e.NdJ("pageChange",function(o){e.CHM(t);const l=e.oxw();return e.KtG(l.p=o)}),e.qZA(),e.TgZ(20,"div",78),e._uU(21),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}const F=[{path:"",component:(()=>{class i{constructor(t,n){this.transactionService=t,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.deleteJournalVoucher(n).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Journal Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.JournalVoucherIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success?(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this Journal Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.DebitNoteIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success?(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getJournalVoucher().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(o=>{"transactions"===o.content_type.app_label&&"journalvoucher"===o.content_type.model&&"add_journalvoucher"==o.codename?this.isAdd=o.codename:"transactions"===o.content_type.app_label&&"journalvoucher"===o.content_type.model&&"change_journalvoucher"==o.codename?this.isEdit=o.codename:"transactions"===o.content_type.app_label&&"journalvoucher"===o.content_type.model&&"delete_journalvoucher"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>n?.journal_voucher_no.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new J.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Journal Voucher",10,10),y()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Account"},{header:"Journal Voucher No."},{header:"Date"},{header:"Total Debit"},{header:"Total Credit"},{header:"Description"},{header:"Is Active"}]}),t.save("journalVoucher.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),s=[];return o.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&s.push(d)}),t.push(s),l.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(T=>{d.push(T.textContent.trim())}),t.push(d)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=g.P6.aoa_to_sheet(t),o=g.P6.book_new();g.P6.book_append_sheet(o,n,"Sheet1");const l=g.cW(o,{bookType:"xlsx",type:"array"}),s=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,L.saveAs)(s,"journalVoucher.xlsx")}printTable(){const t=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),c=s.querySelector("th.thone:nth-child(9)");c&&c.remove();const d=s.querySelector("th.thone:last-child");d&&d.remove(),s.querySelectorAll("tr").forEach(v=>{const Z=v.querySelector("td:nth-child(9)");Z&&Z.remove();const b=v.querySelector("td:last-child");b&&b.remove()});const Y=s.outerHTML,G="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+Y,K=document.body.innerHTML;document.body.innerHTML=G,window.print(),document.body.innerHTML=K}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(o=>new Date(o?.date).toISOString().split("T")[0]===n)}this.selectedDebit&&(t=t.filter(n=>n?.total_debit<=this.selectedDebit)),this.selectedcredit&&(t=t.filter(n=>n?.total_credit<=this.selectedcredit)),console.log(t),this.filteredData=t}clearFilters(){this.selectedDebit=null,this.selectedcredit=null,this.date=null,this.filterData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.p),e.Y36(M.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-journal-voucher"]],decls:101,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","change"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/addjournalvoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Journal Voucher LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Journal Voucher"),e.qZA()(),e.YNc(6,U,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Journal Voucher Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(l){return n.date=l})("change",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Enter Debit Amount"),e.qZA(),e.TgZ(47,"input",31),e.NdJ("ngModelChange",function(l){return n.selectedDebit=l})("change",function(){return n.filterData()}),e.qZA(),e.TgZ(48,"span",32),e._uU(49,"Debit Amount Filter (Less than & Equal to Amount value)"),e.qZA()()(),e.TgZ(50,"div",28)(51,"div",29)(52,"label"),e._uU(53,"Enter credit Amount"),e.qZA(),e.TgZ(54,"input",31),e.NdJ("ngModelChange",function(l){return n.selectedcredit=l})("change",function(){return n.filterData()}),e.qZA(),e.TgZ(55,"span",32),e._uU(56,"credit Amount Filter (Less than & Equal to Amount value)"),e.qZA()()()(),e.TgZ(57,"div",33),e.NdJ("click",function(){return n.clearFilters()}),e.TgZ(58,"a",34),e._uU(59,"Clear Filter"),e.qZA()()()()()(),e.TgZ(60,"div",35)(61,"table",36)(62,"thead")(63,"tr")(64,"th",37),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(65,"label",38),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(66,"input",39),e.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(67,"span",40),e.qZA(),e._UZ(68,"i",41),e.qZA(),e.TgZ(69,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(70,"Sr. No."),e._UZ(71,"i",41),e.qZA(),e.TgZ(72,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(73,"Account"),e._UZ(74,"i",41),e.qZA(),e.TgZ(75,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(76,"Journal Voucher No."),e._UZ(77,"i",41),e.qZA(),e.TgZ(78,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(79,"Date"),e._UZ(80,"i",41),e.qZA(),e.TgZ(81,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(82,"Total Debit"),e._UZ(83,"i",41),e.qZA(),e.TgZ(84,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(85,"Total Credit"),e._UZ(86,"i",41),e.qZA(),e.TgZ(87,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(88,"Description"),e._UZ(89,"i",41),e.qZA(),e.TgZ(90,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Is Active"),e._UZ(92,"i",41),e.qZA(),e.TgZ(93,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(94,"Action"),e._UZ(95,"i",41),e.qZA()()(),e.YNc(96,I,4,11,"tbody",42),e.YNc(97,B,5,0,"tbody",42),e.qZA(),e.TgZ(98,"div",43),e.YNc(99,E,1,0,"mat-progress-bar",44),e.qZA(),e.YNc(100,P,22,4,"div",45),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.selectedDebit),e.xp6(7),e.Q6J("ngModel",n.selectedcredit),e.xp6(12),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[p.sg,p.O5,m.yS,h.YN,h.Kr,h.Fj,h.wV,h.Wl,h.EJ,h.JJ,h.On,V.pW,f.LS,D.Rr,f._s,q.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[r(30597).l],data:{allowedRoles:["view_journalvoucher"]}}];let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(F),m.Bz]}),i})();var H=r(8468);let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,O,H.I]}),i})()}}]);