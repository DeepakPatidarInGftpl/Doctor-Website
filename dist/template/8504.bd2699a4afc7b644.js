"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8504],{98504:(z,m,l)=>{l.r(m),l.d(m,{ListRecieptVoucherModule:()=>Y});var g=l(36895),_=l(88996),C=l(2454),u=l.n(C),y=l(53583),b=l(12983),R=l.n(b),h=l(80574),L=l(94327),e=l(94650),M=l(71071),U=l(42917),p=l(24006),q=l(73162),f=l(54333),V=l(90455),x=l(54040);function k(o,r){1&o&&(e.TgZ(0,"div",53)(1,"a",54),e._UZ(2,"img",55),e._uU(3,"Add New Reciept Voucher "),e.qZA()())}function D(o,r){if(1&o&&(e.TgZ(0,"a",63),e._UZ(1,"img",67),e.qZA()),2&o){const t=e.oxw().$implicit;e.MGl("routerLink","//transaction/updaterecieptVoucher/",null==t?null:t.id,"")}}function N(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"a",68),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),c=i.index,s=i.$implicit,a=e.oxw(2);return e.KtG(a.confirmText(c,null==s?null:s.id))}),e._UZ(1,"img",69),e.qZA()}}function J(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",57)(3,"input",58),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.selectedRows[s]=i)}),e.qZA(),e._UZ(4,"span",47),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",59)(8,"a",60),e._uU(9),e.qZA()(),e.TgZ(10,"td",61),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td",61),e._uU(25),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.qZA(),e.TgZ(28,"td")(29,"mat-slide-toggle",62),e.NdJ("click",function(){const i=e.CHM(t),c=i.$implicit,s=i.index,a=e.oxw(2);return e.KtG(c.is_active?a.isActive(s,c.id):a.Active(s,c.id))})("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.is_active=i)}),e.qZA()(),e.TgZ(30,"td")(31,"a",63),e._UZ(32,"img",64),e.qZA(),e.YNc(33,D,2,1,"a",65),e.YNc(34,N,2,0,"a",66),e.qZA()()}if(2&o){const t=r.$implicit,n=r.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//transaction/detailsrecieptVoucher/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.customer?null:t.customer.account_id),e.xp6(2),e.Oqu(null==t?null:t.receipt_type),e.xp6(2),e.Oqu(t.mode_type),e.xp6(2),e.Oqu(t.receipt_voucher_no),e.xp6(2),e.Oqu(null==t||null==t.payer?null:t.payer.account_id),e.xp6(2),e.Oqu(null==t?null:t.bank_payment),e.xp6(2),e.Oqu(null==t?null:t.date),e.xp6(2),e.Oqu(null==t?null:t.transaction_date),e.xp6(2),e.Oqu(null==t?null:t.transaction_id),e.xp6(2),e.Oqu(null==t?null:t.amount),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//transaction/detailsrecieptVoucher/",null==t?null:t.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const S=function(o,r){return{itemsPerPage:o,currentPage:r}};function w(o,r){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,J,35,17,"tr",56),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,S,t.itemsPerPage,t.p)))}}function B(o,r){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",70)(3,"p",71),e._uU(4,"Data not available"),e.qZA()()()())}function I(o,r){1&o&&e._UZ(0,"mat-progress-bar",72)}function P(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",73)(2,"div",74),e._uU(3," Show per page "),e.TgZ(4,"select",75),e.NdJ("ngModelChange",function(i){e.CHM(t);const c=e.oxw();return e.KtG(c.itemsPerPage=i)}),e.TgZ(5,"option",76),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",77),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",78),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",79),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",80),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",81),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",82)(18,"div",83)(19,"pagination-controls",84),e.NdJ("pageChange",function(i){e.CHM(t);const c=e.oxw();return e.KtG(c.p=i)}),e.qZA(),e.TgZ(20,"div",85),e._uU(21),e.qZA()()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}const F=[{path:"",component:(()=>{class o{constructor(t,n){this.transactionService=t,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.deleteRecieptVoucher(n).subscribe(c=>{this.delRes=c,this.delRes.success?(u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(t,1),this.ngOnInit()):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.DebitNoteIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success?(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.DebitNoteIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success?(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getRecieptVoucher().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"transactions"===i.content_type.app_label&&"receiptvoucher"===i.content_type.model&&"add_receiptvoucher"==i.codename?this.isAdd=i.codename:"transactions"===i.content_type.app_label&&"receiptvoucher"===i.content_type.model&&"change_receiptvoucher"==i.codename?this.isEdit=i.codename:"transactions"===i.content_type.app_label&&"receiptvoucher"===i.content_type.model&&"delete_receiptvoucher"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const i=n?.customer?.account_id.toLocaleLowerCase(),c=n?.receipt_voucher_no.toLocaleLowerCase();return!!i.match(t)||!!c.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new y.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Reciept Voucher",10,10),R()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Account"},{header:"Reciept Type"},{header:"Mode Type"},{header:"Voucher No."},{header:"Payer"},{header:"Bank Payment"},{header:"Date"},{header:"Transaction Date"},{header:"Transaction Id"},{header:"Amount"},{header:"Is Active"}]}),t.save("recieptVoucher.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),c=n.querySelectorAll("tbody tr"),s=[];return i.querySelectorAll("th").forEach(a=>{const d=a.textContent.trim();"Is Active"!==d&&"Action"!==d&&s.push(d)}),t.push(s),c.forEach(a=>{const d=[];a.querySelectorAll("td").forEach(T=>{d.push(T.textContent.trim())}),t.push(d)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=h.P6.aoa_to_sheet(t),i=h.P6.book_new();h.P6.book_append_sheet(i,n,"Sheet1");const c=h.cW(i,{bookType:"xlsx",type:"array"}),s=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,L.saveAs)(s,"reciept.xlsx")}printTable(){const t=document.getElementById("mytable"),c=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),a=s.querySelector("th.thone:nth-child(14)");a&&a.remove();const d=s.querySelector("th.thone:last-child");d&&d.remove(),s.querySelectorAll("tr").forEach(Z=>{const v=Z.querySelector("td:nth-child(14)");v&&v.remove();const A=Z.querySelector("td:last-child");A&&A.remove()});const G=s.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+G,j=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=j}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.date).toISOString().split("T")[0]===n)}this.selectedRecieptType&&(t=t.filter(n=>n?.receipt_type===this.selectedRecieptType)),this.selectedModeType&&(t=t.filter(n=>n?.mode_type===this.selectedModeType)),this.selectedAmount&&(t=t.filter(n=>n?.amount<=this.selectedAmount)),this.filteredData=t}clearFilters(){this.selectedAmount=null,this.selectedModeType=null,this.selectedRecieptType=null,this.date=null,this.filterData()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.p),e.Y36(U.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-reciept-voucher"]],decls:130,vars:11,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Account Id/Receipt Voucher No",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Cash"],["value","Bank"],["value","On Account"],["value","Advance Payment"],["value","Against Bill"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/addrecieptVoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Reciept Voucher LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Reciept Voucher"),e.qZA()(),e.YNc(6,k,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(c){return n.titlee=c})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Reciept Voucher Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(c){return n.date=c})("change",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Reciept Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(c){return n.selectedRecieptType=c})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Select Reciept Type"),e.qZA(),e.TgZ(50,"option",33),e._uU(51,"Cash"),e.qZA(),e.TgZ(52,"option",34),e._uU(53,"Bank"),e.qZA()()()(),e.TgZ(54,"div",28)(55,"div",29)(56,"label"),e._uU(57,"Mode Type"),e.qZA(),e.TgZ(58,"select",31),e.NdJ("ngModelChange",function(c){return n.selectedModeType=c})("change",function(){return n.filterData()}),e.TgZ(59,"option",32),e._uU(60,"Select Mode Type"),e.qZA(),e.TgZ(61,"option",35),e._uU(62,"On Account"),e.qZA(),e.TgZ(63,"option",36),e._uU(64,"Advance Payment"),e.qZA(),e.TgZ(65,"option",37),e._uU(66,"Against Bill"),e.qZA()()()(),e.TgZ(67,"div",28)(68,"div",29)(69,"label"),e._uU(70,"Enter Amount"),e.qZA(),e.TgZ(71,"input",38),e.NdJ("ngModelChange",function(c){return n.selectedAmount=c})("keyup",function(){return n.filterData()}),e.qZA(),e.TgZ(72,"span",39),e._uU(73,"Amount Filter (Less than & Equal to Amount value)"),e.qZA()()()(),e.TgZ(74,"div",40),e.NdJ("click",function(){return n.clearFilters()}),e.TgZ(75,"a",41),e._uU(76,"Clear Filter"),e.qZA()()()()()(),e.TgZ(77,"div",42)(78,"table",43)(79,"thead")(80,"tr")(81,"th",44),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(82,"label",45),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(83,"input",46),e.NdJ("ngModelChange",function(c){return n.allSelected=c})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(84,"span",47),e.qZA(),e._UZ(85,"i",48),e.qZA(),e.TgZ(86,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(87,"Sr. No."),e._UZ(88,"i",48),e.qZA(),e.TgZ(89,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(90,"Account"),e._UZ(91,"i",48),e.qZA(),e.TgZ(92,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(93,"Reciept Type"),e._UZ(94,"i",48),e.qZA(),e.TgZ(95,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(96,"Mode Type"),e._UZ(97,"i",48),e.qZA(),e.TgZ(98,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(99,"Voucher No."),e._UZ(100,"i",48),e.qZA(),e.TgZ(101,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(102,"Payer"),e._UZ(103,"i",48),e.qZA(),e.TgZ(104,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(105,"Payment"),e._UZ(106,"i",48),e.qZA(),e.TgZ(107,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(108,"Date"),e._UZ(109,"i",48),e.qZA(),e.TgZ(110,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(111,"Transaction Date"),e._UZ(112,"i",48),e.qZA(),e.TgZ(113,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(114,"Transaction Id"),e._UZ(115,"i",48),e.qZA(),e.TgZ(116,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(117,"Amount"),e._UZ(118,"i",48),e.qZA(),e.TgZ(119,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(120,"Is Active"),e._UZ(121,"i",48),e.qZA(),e.TgZ(122,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(123,"Action"),e._UZ(124,"i",48),e.qZA()()(),e.YNc(125,w,4,11,"tbody",49),e.YNc(126,B,5,0,"tbody",49),e.qZA(),e.TgZ(127,"div",50),e.YNc(128,I,1,0,"mat-progress-bar",51),e.qZA(),e.YNc(129,P,22,4,"div",52),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.selectedRecieptType),e.xp6(11),e.Q6J("ngModel",n.selectedModeType),e.xp6(13),e.Q6J("ngModel",n.selectedAmount),e.xp6(12),e.Q6J("ngModel",n.allSelected),e.xp6(42),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[g.sg,g.O5,_.yS,p.YN,p.Kr,p.Fj,p.wV,p.Wl,p.EJ,p.JJ,p.On,q.pW,f.LS,V.Rr,f._s,x.T],styles:["select[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})(),canActivate:[l(30597).l],data:{allowedRoles:["view_receiptvoucher"]}}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(F),_.Bz]}),o})();var Q=l(8468);let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,H,Q.I]}),o})()}}]);