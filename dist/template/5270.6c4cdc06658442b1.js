"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5270],{5270:(q,Z,l)=>{l.r(Z),l.d(Z,{DebitNoteModule:()=>W});var d=l(36895),f=l(89299),N=l(2454),g=l.n(N),C=l(96166),y=l(12983),p=l.n(y),b=l(80574),h=l(94327),e=l(94650),T=l(71071),_=l(42917),u=l(24006),D=l(73162),v=l(54333),A=l(90455),k=l(54040);function J(i,a){1&i&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add New Debit Note "),e.qZA()())}function P(i,a){if(1&i&&(e.TgZ(0,"a",56),e._UZ(1,"img",60),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//transaction/updatedebitnote/",t.id,"")}}function L(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",61),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),s=n.index,r=n.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(s,r.id))}),e._UZ(1,"img",62),e.qZA()}}const w=function(i,a,t){return{"bg-lightgreen":i,"bg-lightred":a,"bg-lightyellow":t}};function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(n){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=n)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",52)(8,"a",53),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td")(26,"span",54),e._uU(27),e.qZA()(),e.TgZ(28,"td")(29,"mat-slide-toggle",55),e.NdJ("click",function(){const n=e.CHM(t),s=n.$implicit,r=n.index,c=e.oxw(2);return e.KtG(s.is_active?c.isActive(r,s.id):c.Active(r,s.id))})("ngModelChange",function(n){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=n)}),e.qZA()(),e.TgZ(30,"td")(31,"a",56),e._UZ(32,"img",57),e.qZA(),e.YNc(33,P,2,1,"a",58),e.YNc(34,L,2,0,"a",59),e.qZA()()}if(2&i){const t=a.$implicit,o=a.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.MGl("routerLink","//transaction/detailsdebitnote/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.party?null:t.party.company_name),e.xp6(2),e.Oqu(e.xi3(12,17,null==t?null:t.date,"dd-MMMM-yyyy")),e.xp6(3),e.Oqu(t.debit_note_no),e.xp6(2),e.Oqu(null==t.purchase_bill?null:t.purchase_bill.refrence_bill_no),e.xp6(2),e.Oqu(t.reason),e.xp6(2),e.Oqu(t.amount),e.xp6(2),e.Oqu(t.tax),e.xp6(2),e.Oqu(t.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(20,w,"Complete"===t.status,"Pending"===t.status,"Ordered"===t.status)),e.xp6(1),e.Oqu(t.status),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//transaction/detailsdebitnote/",t.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const O=function(i,a){return{itemsPerPage:i,currentPage:a}};function R(i,a){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,E,35,24,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,O,t.itemsPerPage,t.p)))}}function B(i,a){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),e._uU(4,"Data not available"),e.qZA()()()())}function I(i,a){1&i&&e._UZ(0,"mat-progress-bar",65)}function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",66)(2,"div",67),e._uU(3," Show per page "),e.TgZ(4,"select",68,69),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.itemsPerPage=n)})("change",function(){e.CHM(t);const n=e.MAs(5),s=e.oxw();return e.KtG(s.changePg(n.value))}),e.TgZ(6,"option",70),e._uU(7,"10"),e.qZA(),e.TgZ(8,"option",71),e._uU(9,"20"),e.qZA(),e.TgZ(10,"option",72),e._uU(11,"30"),e.qZA(),e.TgZ(12,"option",73),e._uU(13,"50"),e.qZA(),e.TgZ(14,"option",74),e._uU(15,"100"),e.qZA(),e.TgZ(16,"option",75),e._uU(17,"All"),e.qZA()()()(),e.TgZ(18,"div",76)(19,"div",77)(20,"pagination-controls",78),e.NdJ("pageChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.p=n)}),e.qZA(),e.TgZ(21,"div",79),e._uU(22),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries")}}const Y=[{path:"",component:(()=>{class i{constructor(t,o,n){this.transactionService=t,this.cs=o,this.datePipe=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(t,o){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.deleteDebitNote(o).subscribe(s=>{this.delRes=s,this.delRes.success?(g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(t,1),this.ngOnInit()):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,o){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.DebitNoteIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success?(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):g().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,o){g().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.DebitNoteIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success?(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):g().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getDebitNote().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"add_debitnote"==n.codename?this.isAdd=n.codename:"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"change_debitnote"==n.codename?this.isEdit=n.codename:"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"delete_debitnote"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>{const n=o?.party?.company_name.toLocaleLowerCase(),s=o?.debit_note_no.toLocaleLowerCase();return!!n.match(t)||!!s.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new C.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Debit Note",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),t.save("debitnote.pdf")}formatDate(t){return this.datePipe.transform(t,"yyyy-MM-dd")||""}generatePDFAgain(){const t=new C.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Debit Note",82,10),t.text("",10,15),p()(t,{head:[["#","Company Name"," Date","Debit Note No","Purchase Bill","Reason","Amount","Tax","Total","Status"]],body:this.tableData.map((n,s)=>[s+1,n.party?.company_name,this.formatDate(n.date),n.debit_note_no,n.purchase_bill?.refrence_bill_no,n.reason,n.amount,n.tax,n.total,n.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Debit Note .pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),s=o.querySelectorAll("tbody tr"),r=[];return n.querySelectorAll("th").forEach(c=>{const m=c.textContent.trim();"Is Active"!==m&&"Action"!==m&&r.push(m)}),t.push(r),s.forEach(c=>{const m=[];c.querySelectorAll("td").forEach(x=>{m.push(x.textContent.trim())}),t.push(m)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=b.P6.aoa_to_sheet(t),n=b.P6.book_new();b.P6.book_append_sheet(n,o,"Sheet1");const s=b.cW(n,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"debitnote.xlsx")}printTable(){const t=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(12)");c&&c.remove();const m=r.querySelector("th.thone:last-child");m&&m.remove(),r.querySelectorAll("tr").forEach(M=>{const U=M.querySelector("td:nth-child(12)");U&&U.remove();const S=M.querySelector("td:last-child");S&&S.remove()});const z=r.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+z,j=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=$,window.print(),document.body.innerHTML=j}filterData(){let t=this.tableData.slice();if(this.date){const o=new Date(this.date).toISOString().split("T")[0];t=t.filter(n=>new Date(n?.date).toISOString().split("T")[0]===o)}this.selectedAmount&&(t=t.filter(o=>o?.amount<=this.selectedAmount)),this.filteredData=t}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.p),e.Y36(_.J),e.Y36(d.uU))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-debit-note"]],decls:103,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Company/DebitNote No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/adddebitnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Debit Note LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Debit Note"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return o.titlee=s})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return o.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return o.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Debit Note Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(s){return o.date=s})("change",function(){return o.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Enter Amount"),e.qZA(),e.TgZ(47,"input",31),e.NdJ("ngModelChange",function(s){return o.selectedAmount=s})("keyup",function(){return o.filterData()}),e.qZA(),e.TgZ(48,"span",32),e._uU(49,"Amount Filter (Less than & Equal to Amount value)"),e.qZA()()()(),e.TgZ(50,"div",33),e.NdJ("click",function(){return o.clearFilters()}),e.TgZ(51,"a",34),e._uU(52,"Clear Filter"),e.qZA()()()()()(),e.TgZ(53,"div",35)(54,"table",36)(55,"thead")(56,"tr")(57,"th",37),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(58,"label",38),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(59,"input",39),e.NdJ("ngModelChange",function(s){return o.allSelected=s})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(60,"span",40),e.qZA(),e._UZ(61,"i",41),e.qZA(),e.TgZ(62,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(63,"Sr. No."),e._UZ(64,"i",41),e.qZA(),e.TgZ(65,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(66,"Company Name "),e._UZ(67,"i",41),e.qZA(),e.TgZ(68,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(69,"Date"),e._UZ(70,"i",41),e.qZA(),e.TgZ(71,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(72,"Debit Note No"),e._UZ(73,"i",41),e.qZA(),e.TgZ(74,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(75,"Purchase Bill"),e._UZ(76,"i",41),e.qZA(),e.TgZ(77,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(78,"Reason"),e._UZ(79,"i",41),e.qZA(),e.TgZ(80,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(81,"Amount "),e._UZ(82,"i",41),e.qZA(),e.TgZ(83,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(84,"Tax "),e._UZ(85,"i",41),e.qZA(),e.TgZ(86,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(87,"Total "),e._UZ(88,"i",41),e.qZA(),e.TgZ(89,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(90,"Status "),e._UZ(91,"i",41),e.qZA(),e.TgZ(92,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(93,"Is Active "),e._UZ(94,"i",41),e.qZA(),e.TgZ(95,"th",37),e.NdJ("click",function(){return o.sort("id")}),e._uU(96,"Action "),e._UZ(97,"i",41),e.qZA()()(),e.YNc(98,R,4,11,"tbody",42),e.YNc(99,B,5,0,"tbody",42),e.qZA(),e.TgZ(100,"div",43),e.YNc(101,I,1,0,"mat-progress-bar",44),e.qZA(),e.YNc(102,F,23,4,"div",45),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.isAdd),e.xp6(15),e.Q6J("ngModel",o.titlee),e.xp6(21),e.Q6J("ngModel",o.date),e.xp6(5),e.Q6J("ngModel",o.selectedAmount),e.xp6(12),e.Q6J("ngModel",o.allSelected),e.xp6(39),e.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==o.filteredData?null:o.filteredData.length)&&!o.loader),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(1),e.Q6J("ngIf",!o.loader))},dependencies:[d.mk,d.sg,d.O5,f.yS,u.YN,u.Kr,u.Fj,u.wV,u.Wl,u.EJ,u.JJ,u.On,D.pW,v.LS,A.Rr,d.uU,v._s,k.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[l(30597).l],data:{allowedRoles:["view_debitnote"]}}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(Y),f.Bz]}),i})();var K=l(8468);let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[d.uU],imports:[d.ez,Q,K.I]}),i})()},30597:(q,Z,l)=>{l.d(Z,{l:()=>y});var d=l(94650),f=l(89299),N=l(97185),g=l(42917),C=l(80927);let y=(()=>{class p{constructor(h,e,T,_,u){this.router=h,this.Arout=e,this.toastr=T,this.profileService=_,this.coreService=u}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),T){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const u=T.some(D=>_.includes(D.codename));if(console.log(u),this.coreService.getProfile().subscribe(D=>{this.userDetails=D,this.profileService.setUserDetails(this.userDetails);const v=D?.permission,A=this.profileService.getUserDetails();(!A||A.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),u)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(d.LFG(f.F0),d.LFG(f.gz),d.LFG(N._W),d.LFG(g.J),d.LFG(C.p))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);