"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9079],{39079:(N,S,o)=>{o.r(S),o.d(S,{SaleslistModule:()=>W});var u=o(36895),f=o(89299),A=o(2454),m=o.n(A),y=o(96166),M=o(12983),p=o.n(M),T=o(80574),h=o(94327),e=o(94650),v=o(72170),_=o(42917),Z=o(25062),d=o(24006),b=o(73162),C=o(54333),O=o(90455),P=o(54040);function k(n,a){1&n&&(e.TgZ(0,"div",61)(1,"a",62),e._UZ(2,"img",63),e._uU(3,"Add Sales "),e.qZA()())}function E(n,a){if(1&n&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.hij("",null==t?null:t.title," ")}}function L(n,a){if(1&n&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.s9C("value",null==t?null:t.estimate_no),e.xp6(1),e.hij(" ",null==t?null:t.estimate_no,"")}}function w(n,a){if(1&n&&(e.TgZ(0,"a",71),e._UZ(1,"img",75),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","//sales/edit-sales/",t.id,"")}}function I(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",76),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),i=s.index,r=s.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(i,r.id))}),e._UZ(1,"img",77),e.qZA()}}function B(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",66)(3,"input",67),e.NdJ("ngModelChange",function(s){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=s)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",68)(8,"a",69),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td")(23,"mat-slide-toggle",70),e.NdJ("click",function(){const s=e.CHM(t),i=s.$implicit,r=s.index,c=e.oxw(2);return e.KtG(i.is_active?c.isActive(r,i.id):c.Active(r,i.id))})("ngModelChange",function(s){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=s)}),e.qZA()(),e.TgZ(24,"td")(25,"a",71),e._UZ(26,"img",72),e.qZA(),e.YNc(27,w,2,1,"a",73),e.YNc(28,I,2,0,"a",74),e.qZA()()}if(2&n){const t=a.$implicit,l=a.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[l]),e.xp6(3),e.Oqu(l+1),e.xp6(2),e.MGl("routerLink","//sales/sales-details/",t.id,""),e.xp6(1),e.Oqu((null==t||null==t.customer?null:t.customer.name)+" ("+(null==t||null==t.customer?null:t.customer.username)+")"),e.xp6(2),e.Oqu(t.sale_order_date),e.xp6(2),e.Oqu(t.sale_order_no),e.xp6(2),e.Oqu(null==t||null==t.payment_terms?null:t.payment_terms.title),e.xp6(2),e.Oqu(t.due_date),e.xp6(2),e.Oqu(null==t||null==t.estimate?null:t.estimate.estimate_no),e.xp6(2),e.Oqu(null==t?null:t.total),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//sales/sales-details/",t.id,""),e.xp6(2),e.Q6J("ngIf",s.isEdit),e.xp6(1),e.Q6J("ngIf",s.isDelete)}}const F=function(n,a){return{itemsPerPage:n,currentPage:a}};function R(n,a){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,B,29,14,"tr",65),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,F,t.itemsPerPage,t.p)))}}function Q(n,a){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",78)(3,"p",79),e._uU(4,"Data not available"),e.qZA()()()())}function G(n,a){1&n&&e._UZ(0,"mat-progress-bar",80)}let D=(()=>{class n{constructor(t,l,s){this.saleService=t,this.cs=l,this.contactService=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,l){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.saleService.deleteSalesOrder(l).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,l){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale order!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.saleService.SalesOrderIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(m().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(t,l){m().fire({title:"Are you sure?",text:"Do you want to Active this sale order!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.saleService.SalesOrderIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(m().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getSalesOrder().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(s=>{"sale"===s.content_type.app_label&&"saleorder"===s.content_type.model&&"add_saleorder"==s.codename?this.isAdd=s.codename:"sale"===s.content_type.app_label&&"saleorder"===s.content_type.model&&"change_saleorder"==s.codename?this.isEdit=s.codename:"sale"===s.content_type.app_label&&"saleorder"===s.content_type.model&&"delete_saleorder"==s.codename&&(this.isDelete=s.codename)})}),this.getPaymentTerms(),this.getEstimate()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{this.paymentList=t})}getEstimate(){this.saleService.getSalesEstimate().subscribe(t=>{this.estimateList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>{const s=l?.customer?.name.toLocaleLowerCase(),i=l?.customer?.username.toLocaleLowerCase()||"",r=l?.sale_order_no.toLocaleLowerCase();return!(!s.match(t)&&!i.includes(t)&&!r.match(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new y.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Sale Order List",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name"},{header:"Sale Order Date"},{header:"Sale Order no"},{header:"Payment Terms"},{header:"Due Date"},{header:"Estimate"},{header:"Total"},{header:"Is Active"}]}),t.save("saleOrder.pdf")}getVisibleDataFromTable(){const t=[],l=document.getElementById("mytable"),s=l.querySelector("thead tr"),i=l.querySelectorAll("tbody tr"),r=[];return s.querySelectorAll("th").forEach(c=>{const g=c.textContent.trim();"Is Active"!==g&&"Action"!==g&&r.push(g)}),t.push(r),i.forEach(c=>{const g=[];c.querySelectorAll("td").forEach(U=>{g.push(U.textContent.trim())}),t.push(g)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),l=T.P6.aoa_to_sheet(t),s=T.P6.book_new();T.P6.book_append_sheet(s,l,"Sheet1");const i=T.cW(s,{bookType:"xlsx",type:"array"}),r=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"saleOrder.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(10)");c&&c.remove();const g=r.querySelector("th.thone:last-child");g&&g.remove(),r.querySelectorAll("tr").forEach(q=>{const x=q.querySelector("td:nth-child(10)");x&&x.remove();const J=q.querySelector("td:last-child");J&&J.remove()});const $=r.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+$,V=document.body.innerHTML;document.body.innerHTML=z,window.print(),document.body.innerHTML=V}filterData(){let t=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];t=t.filter(s=>new Date(s?.sale_order_date).toISOString().split("T")[0]===l)}if(this.espireDate){const l=new Date(this.espireDate).toISOString().split("T")[0];t=t.filter(s=>new Date(s?.due_date).toISOString().split("T")[0]===l)}this.selectEstimateNo&&(t=t.filter(l=>l?.estimate?.estimate_no===this.selectEstimateNo)),this.filterPaymentTerms&&(t=t.filter(l=>l?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(t=t.filter(l=>l?.total<=this.selectedAmount)),this.statusFilter&&(t=t.filter(l=>l?.status==this.statusFilter)),this.filteredData=t}clearFilter(){this.date=null,this.espireDate=null,this.selectedAmount=null,this.filterPaymentTerms=null,this.selectEstimateNo=null,this.statusFilter=null,this.filterData()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.M),e.Y36(_.J),e.Y36(Z.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-saleslist"]],decls:139,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Order Name/No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/add-sales",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Order list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Order"),e.qZA()(),e.YNc(6,k,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(i){return l.titlee=i})("ngModelChange",function(){return l.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return l.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return l.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return l.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Sale Order Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(i){return l.date=i})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Due Date"),e.qZA(),e.TgZ(47,"input",30),e.NdJ("ngModelChange",function(i){return l.espireDate=i})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(48,"div",28)(49,"div",29)(50,"label"),e._uU(51,"Payment terms"),e.qZA(),e.TgZ(52,"select",31),e.NdJ("ngModelChange",function(i){return l.filterPaymentTerms=i})("change",function(){return l.filterData()}),e.TgZ(53,"option",32),e._uU(54,"Select Payment Terms"),e.qZA(),e.YNc(55,E,2,2,"option",33),e.qZA()()(),e.TgZ(56,"div",28)(57,"div",29)(58,"label"),e._uU(59,"Estimate"),e.qZA(),e.TgZ(60,"select",31),e.NdJ("ngModelChange",function(i){return l.selectEstimateNo=i})("change",function(){return l.filterData()}),e.TgZ(61,"option",32),e._uU(62,"Select Estimate"),e.qZA(),e.YNc(63,L,2,2,"option",33),e.qZA()()(),e.TgZ(64,"div",28)(65,"div",29)(66,"label"),e._uU(67,"Enter Total Amount"),e.qZA(),e.TgZ(68,"input",34),e.NdJ("ngModelChange",function(i){return l.selectedAmount=i})("keyup",function(){return l.filterData()}),e.qZA(),e.TgZ(69,"span",35),e._uU(70,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(71,"div",36),e.NdJ("click",function(){return l.clearFilter()}),e.TgZ(72,"a",37),e._uU(73,"Clear Filter"),e.qZA()()()()()(),e.TgZ(74,"div",38)(75,"table",39)(76,"thead")(77,"tr")(78,"th",40),e.NdJ("click",function(){return l.sort("id")}),e.TgZ(79,"label",41),e.NdJ("click",function(){return l.selectAll(l.initChecked)}),e.TgZ(80,"input",42),e.NdJ("ngModelChange",function(i){return l.allSelected=i})("change",function(){return l.selectAlll()}),e.qZA(),e._UZ(81,"span",43),e.qZA(),e._UZ(82,"i",44),e.qZA(),e.TgZ(83,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(84,"Sr. No. "),e._UZ(85,"i",44),e.qZA(),e.TgZ(86,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(87,"User Name"),e._UZ(88,"i",44),e.qZA(),e.TgZ(89,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(90,"Sale Order Date "),e._UZ(91,"i",44),e.qZA(),e.TgZ(92,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(93,"Sale Order no "),e._UZ(94,"i",44),e.qZA(),e.TgZ(95,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(96,"Payment Terms "),e._UZ(97,"i",44),e.qZA(),e.TgZ(98,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(99,"Due Date "),e._UZ(100,"i",44),e.qZA(),e.TgZ(101,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(102,"Estimate"),e._UZ(103,"i",44),e.qZA(),e.TgZ(104,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(105,"Total"),e._UZ(106,"i",44),e.qZA(),e.TgZ(107,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(108,"Is Active "),e._UZ(109,"i",44),e.qZA(),e.TgZ(110,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(111,"Action "),e._UZ(112,"i",44),e.qZA()()(),e.YNc(113,R,4,11,"tbody",45),e.YNc(114,Q,5,0,"tbody",45),e.qZA(),e.TgZ(115,"div",46),e.YNc(116,G,1,0,"mat-progress-bar",47),e.qZA(),e.TgZ(117,"div",26)(118,"div",48)(119,"div",49),e._uU(120," Show per page "),e.TgZ(121,"select",50),e.NdJ("ngModelChange",function(i){return l.itemsPerPage=i}),e.TgZ(122,"option",51),e._uU(123,"10"),e.qZA(),e.TgZ(124,"option",52),e._uU(125,"20"),e.qZA(),e.TgZ(126,"option",53),e._uU(127,"30"),e.qZA(),e.TgZ(128,"option",54),e._uU(129,"50"),e.qZA(),e.TgZ(130,"option",55),e._uU(131,"100"),e.qZA(),e.TgZ(132,"option",56),e._uU(133,"All"),e.qZA()()()(),e.TgZ(134,"div",57)(135,"div",58)(136,"pagination-controls",59),e.NdJ("pageChange",function(i){return l.p=i}),e.qZA(),e.TgZ(137,"div",60),e._uU(138),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",l.isAdd),e.xp6(15),e.Q6J("ngModel",l.titlee),e.xp6(21),e.Q6J("ngModel",l.date),e.xp6(5),e.Q6J("ngModel",l.espireDate),e.xp6(5),e.Q6J("ngModel",l.filterPaymentTerms),e.xp6(3),e.Q6J("ngForOf",l.paymentList),e.xp6(5),e.Q6J("ngModel",l.selectEstimateNo),e.xp6(3),e.Q6J("ngForOf",l.estimateList),e.xp6(5),e.Q6J("ngModel",l.selectedAmount),e.xp6(12),e.Q6J("ngModel",l.allSelected),e.xp6(33),e.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==l.filteredData?null:l.filteredData.length)),e.xp6(2),e.Q6J("ngIf",l.loader),e.xp6(5),e.Q6J("ngModel",l.itemsPerPage),e.xp6(17),e.lnq("Showing ",l.itemsPerPage," to ",l.itemsPerPage," of ",l.itemsPerPage," entries"))},dependencies:[u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,b.pW,C.LS,O.Rr,C._s,P.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})();var Y=o(30597);const H=[{path:"",component:D,canActivate:[Y.l],data:{allowedRoles:["view_saleorder"]}}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(H),f.Bz]}),n})();var K=o(8468);let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[D]}),n.\u0275inj=e.cJS({imports:[u.ez,j,K.I]}),n})()},30597:(N,S,o)=>{o.d(S,{l:()=>M});var u=o(94650),f=o(89299),A=o(97185),m=o(42917),y=o(80927);let M=(()=>{class p{constructor(h,e,v,_,Z){this.router=h,this.Arout=e,this.toastr=v,this.profileService=_,this.coreService=Z}canActivate(h,e){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),v){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const Z=v.some(d=>_.includes(d.codename));if(console.log(Z),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const b=d?.permission,C=this.profileService.getUserDetails();(!C||C.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(A._W),u.LFG(m.J),u.LFG(y.p))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);