"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3443],{93443:(q,b,a)=>{a.r(b),a.d(b,{SaleBillListModule:()=>z});var u=a(36895),f=a(89299),y=a(2454),m=a.n(y),C=a(96166),B=a(12983),g=a.n(B),T=a(80574),h=a(94327),e=a(94650),v=a(72170),_=a(42917),Z=a(25062),d=a(24006),A=a(73162),S=a(54333),x=a(90455),N=a(54040);function J(s,r){1&s&&(e.TgZ(0,"div",62)(1,"a",63),e._UZ(2,"img",64),e._uU(3,"Add Sales Bill "),e.qZA()())}function P(s,r){if(1&s&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&s){const t=r.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function k(s,r){if(1&s&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&s){const t=r.$implicit;e.s9C("value",null==t?null:t.sale_order_no),e.xp6(1),e.Oqu(null==t?null:t.sale_order_no)}}function O(s,r){if(1&s&&(e.TgZ(0,"a",72),e._UZ(1,"img",76),e.qZA()),2&s){const t=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesbill/",t.id,"")}}function E(s,r){if(1&s){const t=e.EpF();e.TgZ(0,"a",77),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),i=n.index,o=n.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(i,o.id))}),e._UZ(1,"img",78),e.qZA()}}function w(s,r){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",67)(3,"input",68),e.NdJ("ngModelChange",function(n){const o=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[o]=n)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",69)(8,"a",70),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td")(25,"mat-slide-toggle",71),e.NdJ("click",function(){const n=e.CHM(t),i=n.$implicit,o=n.index,c=e.oxw(2);return e.KtG(null!=i&&i.is_active?c.isActive(o,null==i?null:i.id):c.Active(o,null==i?null:i.id))})("ngModelChange",function(n){const o=e.CHM(t).$implicit;return e.KtG(o.is_active=n)}),e.qZA()(),e.TgZ(26,"td")(27,"a",72),e._UZ(28,"img",73),e.qZA(),e.YNc(29,O,2,1,"a",74),e.YNc(30,E,2,0,"a",75),e.qZA()()}if(2&s){const t=r.$implicit,l=r.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[l]),e.xp6(3),e.Oqu(l+1),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",t.id,""),e.xp6(1),e.Oqu((null==t||null==t.customer?null:t.customer.name)+" ("+(null==t||null==t.customer?null:t.customer.username)+")"),e.xp6(2),e.Oqu(null==t?null:t.bill_date),e.xp6(2),e.Oqu(null==t?null:t.due_date),e.xp6(2),e.Oqu(null==t?null:t.customer_bill_no),e.xp6(2),e.Oqu(null==t||null==t.payment_terms?null:t.payment_terms.title),e.xp6(2),e.Oqu(null==t||null==t.sale_order?null:t.sale_order.sale_order_no),e.xp6(2),e.Oqu(null==t?null:t.subtotal),e.xp6(2),e.Oqu(null==t?null:t.total),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",t.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const I=function(s,r){return{itemsPerPage:s,currentPage:r}};function F(s,r){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,w,31,15,"tr",66),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,I,t.itemsPerPage,t.p)))}}function R(s,r){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",79)(3,"p",80),e._uU(4,"Data not available"),e.qZA()()()())}function Y(s,r){1&s&&e._UZ(0,"mat-progress-bar",81)}const H=[{path:"",component:(()=>{class s{constructor(t,l,n,i){this.saleService=t,this.cs=l,this.contactService=n,this.datePipe=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,l){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.deleteSalesBill(l).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,l){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.saleService.SalesBillIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Sale Bill Is Deactivate Successfully."}))})}Active(t,l){m().fire({title:"Are you sure?",text:"Do you want to Active this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.saleService.SalesBillIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Sale Bill Is Active Successfully."}))})}ngOnInit(){this.saleService.getSalesBill().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"sale"===n.content_type.app_label&&"salebill"===n.content_type.model&&"add_salebill"==n.codename?this.isAdd=n.codename:"sale"===n.content_type.app_label&&"salebill"===n.content_type.model&&"change_salebill"==n.codename?this.isEdit=n.codename:"sale"===n.content_type.app_label&&"salebill"===n.content_type.model&&"delete_salebill"==n.codename&&(this.isDelete=n.codename)})}),this.getPaymentTerms(),this.getEstimate()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{this.paymentList=t})}getEstimate(){this.saleService.getSalesOrder().subscribe(t=>{this.saleOrderList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>{const n=l?.customer?.name.toLocaleLowerCase(),i=l?.customer?.username.toLocaleLowerCase()||"",o=l?.customer_bill_no.toLocaleLowerCase();return!(!n.match(t)&&!i.includes(t)&&!o.match(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}formatDate(t){return this.datePipe.transform(t,"yyyy-MM-dd")||""}generatePDF(){const t=new C.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Sale Bill List",10,10),g()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name"},{header:"Sale Bill Date"},{header:"Due Date"},{header:"customer bill no"},{header:"Payment Terms"},{header:"Sale Order"},{header:"Sub Total"},{header:"Total"},{header:"Is Active"}]}),t.save("saleBill.pdf")}generatePDFAgain(){const t=new C.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Sale Bill List",82,10),t.text("",10,15),g()(t,{head:[["#","Company Name","Sale Bill Date","Due Date","customer bill no","Payment Terms","Sale Order","Sub Total","Total"]],body:this.tableData.map((n,i)=>[i+1,n?.customer?.name+" ("+n?.customer?.username+")",this.formatDate(n?.bill_date),this.formatDate(n?.due_date),n.customer_bill_no,n.payment_terms?.title,n.sale_order?.sale_order_no,n.subtotal,n.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Sale Bill .pdf")}getVisibleDataFromTable(){const t=[],l=document.getElementById("mytable"),n=l.querySelector("thead tr"),i=l.querySelectorAll("tbody tr"),o=[];return n.querySelectorAll("th").forEach(c=>{const p=c.textContent.trim();"Is Active"!==p&&"Action"!==p&&o.push(p)}),t.push(o),i.forEach(c=>{const p=[];c.querySelectorAll("td").forEach(L=>{p.push(L.textContent.trim())}),t.push(p)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),l=T.P6.aoa_to_sheet(t),n=T.P6.book_new();T.P6.book_append_sheet(n,l,"Sheet1");const i=T.cW(n,{bookType:"xlsx",type:"array"}),o=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(o,"saleBill.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,o=t.cloneNode(!0),c=o.querySelector("th.thone:nth-child(11)");c&&c.remove();const p=o.querySelector("th.thone:last-child");p&&p.remove(),o.querySelectorAll("tr").forEach(D=>{const M=D.querySelector("td:nth-child(11)");M&&M.remove();const U=D.querySelector("td:last-child");U&&U.remove()});const $=o.outerHTML,j="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+$,V=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=j,window.print(),document.body.innerHTML=V}filterData(){let t=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];t=t.filter(n=>new Date(n?.bill_date).toISOString().split("T")[0]===l)}if(this.espireDate){const l=new Date(this.espireDate).toISOString().split("T")[0];t=t.filter(n=>new Date(n?.due_date).toISOString().split("T")[0]===l)}this.selectEstimateNo&&(t=t.filter(l=>l?.sale_order?.sale_order_no===this.selectEstimateNo)),this.filterPaymentTerms&&(t=t.filter(l=>l?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(t=t.filter(l=>l?.total<=this.selectedAmount)),this.filteredData=t}clearFilter(){this.date=null,this.espireDate=null,this.selectedAmount=null,this.filterPaymentTerms=null,this.selectEstimateNo=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.filteredData.length)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.M),e.Y36(_.J),e.Y36(Z.y),e.Y36(u.uU))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-sale-bill-list"]],decls:143,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","CompanyName/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addsalesbill",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Bill list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Bill"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(o){return l.titlee=o})("ngModelChange",function(){return l.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return l.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return l.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return l.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Sale Bill Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(o){return l.date=o})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Due Date"),e.qZA(),e.TgZ(47,"input",30),e.NdJ("ngModelChange",function(o){return l.espireDate=o})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(48,"div",28)(49,"div",29)(50,"label"),e._uU(51,"Payment terms"),e.qZA(),e.TgZ(52,"select",31),e.NdJ("ngModelChange",function(o){return l.filterPaymentTerms=o})("change",function(){return l.filterData()}),e.TgZ(53,"option",32),e._uU(54,"Select Payment Terms"),e.qZA(),e.YNc(55,P,2,2,"option",33),e.qZA()()(),e.TgZ(56,"div",28)(57,"div",29)(58,"label"),e._uU(59,"Sales Order No."),e.qZA(),e.TgZ(60,"select",31),e.NdJ("ngModelChange",function(o){return l.selectEstimateNo=o})("change",function(){return l.filterData()}),e.TgZ(61,"option",32),e._uU(62,"Select Sales Order No."),e.qZA(),e.YNc(63,k,2,2,"option",33),e.qZA()()(),e.TgZ(64,"div",28)(65,"div",29)(66,"label"),e._uU(67,"Enter Total Amount"),e.qZA(),e.TgZ(68,"input",34),e.NdJ("ngModelChange",function(o){return l.selectedAmount=o})("keyup",function(){return l.filterData()}),e.qZA(),e.TgZ(69,"span",35),e._uU(70,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(71,"div",36),e.NdJ("click",function(){return l.clearFilter()}),e.TgZ(72,"a",37),e._uU(73,"Clear Filter"),e.qZA()()()()()(),e.TgZ(74,"div",38)(75,"table",39)(76,"thead")(77,"tr")(78,"th",40),e.NdJ("click",function(){return l.sort("id")}),e.TgZ(79,"label",41),e.NdJ("click",function(){return l.selectAll(l.initChecked)}),e.TgZ(80,"input",42),e.NdJ("ngModelChange",function(o){return l.allSelected=o})("change",function(){return l.selectAlll()}),e.qZA(),e._UZ(81,"span",43),e.qZA(),e._UZ(82,"i",44),e.qZA(),e.TgZ(83,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(84,"Sr. No. "),e._UZ(85,"i",44),e.qZA(),e.TgZ(86,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(87,"Company Name "),e._UZ(88,"i",44),e.qZA(),e.TgZ(89,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(90,"Sale Bill Date "),e._UZ(91,"i",44),e.qZA(),e.TgZ(92,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(93,"Due Date "),e._UZ(94,"i",44),e.qZA(),e.TgZ(95,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(96,"Customer Bill No. "),e._UZ(97,"i",44),e.qZA(),e.TgZ(98,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(99,"Payment Terms "),e._UZ(100,"i",44),e.qZA(),e.TgZ(101,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(102,"Sale Order"),e._UZ(103,"i",44),e.qZA(),e.TgZ(104,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(105,"Sub Total"),e._UZ(106,"i",44),e.qZA(),e.TgZ(107,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(108,"Total"),e._UZ(109,"i",44),e.qZA(),e.TgZ(110,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(111,"Is Active "),e._UZ(112,"i",44),e.qZA(),e.TgZ(113,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(114,"Action "),e._UZ(115,"i",44),e.qZA()()(),e.YNc(116,F,4,11,"tbody",45),e.YNc(117,R,5,0,"tbody",45),e.qZA(),e.TgZ(118,"div",46),e.YNc(119,Y,1,0,"mat-progress-bar",47),e.qZA(),e.TgZ(120,"div",26)(121,"div",48)(122,"div",49),e._uU(123," Show per page "),e.TgZ(124,"select",50,51),e.NdJ("ngModelChange",function(o){return l.itemsPerPage=o})("change",function(){e.CHM(n);const o=e.MAs(125);return e.KtG(l.changePg(o.value))}),e.TgZ(126,"option",52),e._uU(127,"10"),e.qZA(),e.TgZ(128,"option",53),e._uU(129,"20"),e.qZA(),e.TgZ(130,"option",54),e._uU(131,"30"),e.qZA(),e.TgZ(132,"option",55),e._uU(133,"50"),e.qZA(),e.TgZ(134,"option",56),e._uU(135,"100"),e.qZA(),e.TgZ(136,"option",57),e._uU(137,"All"),e.qZA()()()(),e.TgZ(138,"div",58)(139,"div",59)(140,"pagination-controls",60),e.NdJ("pageChange",function(o){return l.p=o}),e.qZA(),e.TgZ(141,"div",61),e._uU(142),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",l.isAdd),e.xp6(15),e.Q6J("ngModel",l.titlee),e.xp6(21),e.Q6J("ngModel",l.date),e.xp6(5),e.Q6J("ngModel",l.espireDate),e.xp6(5),e.Q6J("ngModel",l.filterPaymentTerms),e.xp6(3),e.Q6J("ngForOf",l.paymentList),e.xp6(5),e.Q6J("ngModel",l.selectEstimateNo),e.xp6(3),e.Q6J("ngForOf",l.saleOrderList),e.xp6(5),e.Q6J("ngModel",l.selectedAmount),e.xp6(12),e.Q6J("ngModel",l.allSelected),e.xp6(36),e.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==l.filteredData?null:l.filteredData.length)),e.xp6(2),e.Q6J("ngIf",l.loader),e.xp6(5),e.Q6J("ngModel",l.itemsPerPage),e.xp6(18),e.lnq("Showing ",l.itemsPerPage," to ",null==l.filteredData?null:l.filteredData.length," of ",l.p," entries"))},dependencies:[u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,A.pW,S.LS,x.Rr,S._s,N.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})(),canActivate:[a(30597).l],data:{allowedRoles:["view_salebill"]}}];let K=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[f.Bz.forChild(H),f.Bz]}),s})();var W=a(8468);let z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[u.uU],imports:[u.ez,K,W.I]}),s})()},30597:(q,b,a)=>{a.d(b,{l:()=>B});var u=a(94650),f=a(89299),y=a(97185),m=a(42917),C=a(80927);let B=(()=>{class g{constructor(h,e,v,_,Z){this.router=h,this.Arout=e,this.toastr=v,this.profileService=_,this.coreService=Z}canActivate(h,e){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),v){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const Z=v.some(d=>_.includes(d.codename));if(console.log(Z),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const A=d?.permission,S=this.profileService.getUserDetails();(!S||S.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(h){return new(h||g)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(y._W),u.LFG(m.J),u.LFG(C.p))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);