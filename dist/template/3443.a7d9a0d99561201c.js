"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3443],{93443:(q,b,o)=>{o.r(b),o.d(b,{SaleBillListModule:()=>$});var u=o(36895),f=o(89299),A=o(2454),m=o.n(A),y=o(96166),B=o(12983),p=o.n(B),T=o(80574),h=o(94327),e=o(94650),Z=o(72170),_=o(42917),v=o(25062),d=o(24006),S=o(73162),C=o(54333),x=o(90455),N=o(54040);function J(n,a){1&n&&(e.TgZ(0,"div",61)(1,"a",62),e._UZ(2,"img",63),e._uU(3,"Add Sales Bill "),e.qZA()())}function k(n,a){if(1&n&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function P(n,a){if(1&n&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.s9C("value",null==t?null:t.sale_order_no),e.xp6(1),e.Oqu(null==t?null:t.sale_order_no)}}function O(n,a){if(1&n&&(e.TgZ(0,"a",71),e._UZ(1,"img",75),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesbill/",t.id,"")}}function E(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",76),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),s=i.index,r=i.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(s,r.id))}),e._UZ(1,"img",77),e.qZA()}}function w(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",66)(3,"input",67),e.NdJ("ngModelChange",function(i){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=i)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",68)(8,"a",69),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td")(25,"mat-slide-toggle",70),e.NdJ("click",function(){const i=e.CHM(t),s=i.$implicit,r=i.index,c=e.oxw(2);return e.KtG(null!=s&&s.is_active?c.isActive(r,null==s?null:s.id):c.Active(r,null==s?null:s.id))})("ngModelChange",function(i){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=i)}),e.qZA()(),e.TgZ(26,"td")(27,"a",71),e._UZ(28,"img",72),e.qZA(),e.YNc(29,O,2,1,"a",73),e.YNc(30,E,2,0,"a",74),e.qZA()()}if(2&n){const t=a.$implicit,l=a.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[l]),e.xp6(3),e.Oqu(l+1),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",t.id,""),e.xp6(1),e.Oqu((null==t||null==t.customer?null:t.customer.name)+" ("+(null==t||null==t.customer?null:t.customer.username)+")"),e.xp6(2),e.Oqu(null==t?null:t.bill_date),e.xp6(2),e.Oqu(null==t?null:t.due_date),e.xp6(2),e.Oqu(null==t?null:t.customer_bill_no),e.xp6(2),e.Oqu(null==t||null==t.payment_terms?null:t.payment_terms.title),e.xp6(2),e.Oqu(null==t||null==t.sale_order?null:t.sale_order.sale_order_no),e.xp6(2),e.Oqu(null==t?null:t.subtotal),e.xp6(2),e.Oqu(null==t?null:t.total),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",t.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const I=function(n,a){return{itemsPerPage:n,currentPage:a}};function F(n,a){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,w,31,15,"tr",65),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,I,t.itemsPerPage,t.p)))}}function R(n,a){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",78)(3,"p",79),e._uU(4,"Data not available"),e.qZA()()()())}function Q(n,a){1&n&&e._UZ(0,"mat-progress-bar",80)}const H=[{path:"",component:(()=>{class n{constructor(t,l,i){this.saleService=t,this.cs=l,this.contactService=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,l){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.saleService.deleteSalesBill(l).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,l){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.saleService.SalesBillIsActive(l,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Sale Bill Is Deactivate Successfully."}))})}Active(t,l){m().fire({title:"Are you sure?",text:"Do you want to Active this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.saleService.SalesBillIsActive(l,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Sale Bill Is Active Successfully."}))})}ngOnInit(){this.saleService.getSalesBill().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"sale"===i.content_type.app_label&&"salebill"===i.content_type.model&&"add_salebill"==i.codename?this.isAdd=i.codename:"sale"===i.content_type.app_label&&"salebill"===i.content_type.model&&"change_salebill"==i.codename?this.isEdit=i.codename:"sale"===i.content_type.app_label&&"salebill"===i.content_type.model&&"delete_salebill"==i.codename&&(this.isDelete=i.codename)})}),this.getPaymentTerms(),this.getEstimate()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{this.paymentList=t})}getEstimate(){this.saleService.getSalesOrder().subscribe(t=>{this.saleOrderList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>{const i=l?.customer?.name.toLocaleLowerCase(),s=l?.customer?.username.toLocaleLowerCase()||"",r=l?.customer_bill_no.toLocaleLowerCase();return!(!i.match(t)&&!s.includes(t)&&!r.match(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new y.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Sale Bill List",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name"},{header:"Sale Bill Date"},{header:"Due Date"},{header:"customer bill no"},{header:"Payment Terms"},{header:"Sale Order"},{header:"Sub Total"},{header:"Total"},{header:"Is Active"}]}),t.save("saleBill.pdf")}getVisibleDataFromTable(){const t=[],l=document.getElementById("mytable"),i=l.querySelector("thead tr"),s=l.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(c=>{const g=c.textContent.trim();"Is Active"!==g&&"Action"!==g&&r.push(g)}),t.push(r),s.forEach(c=>{const g=[];c.querySelectorAll("td").forEach(L=>{g.push(L.textContent.trim())}),t.push(g)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),l=T.P6.aoa_to_sheet(t),i=T.P6.book_new();T.P6.book_append_sheet(i,l,"Sheet1");const s=T.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"saleBill.xlsx")}printTable(){const t=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(11)");c&&c.remove();const g=r.querySelector("th.thone:last-child");g&&g.remove(),r.querySelectorAll("tr").forEach(D=>{const M=D.querySelector("td:nth-child(11)");M&&M.remove();const U=D.querySelector("td:last-child");U&&U.remove()});const j=r.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+j,V=document.body.innerHTML;document.body.innerHTML=z,window.print(),document.body.innerHTML=V}filterData(){let t=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.bill_date).toISOString().split("T")[0]===l)}if(this.espireDate){const l=new Date(this.espireDate).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.due_date).toISOString().split("T")[0]===l)}this.selectEstimateNo&&(t=t.filter(l=>l?.sale_order?.sale_order_no===this.selectEstimateNo)),this.filterPaymentTerms&&(t=t.filter(l=>l?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(t=t.filter(l=>l?.total<=this.selectedAmount)),this.filteredData=t}clearFilter(){this.date=null,this.espireDate=null,this.selectedAmount=null,this.filterPaymentTerms=null,this.selectEstimateNo=null,this.filterData()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.M),e.Y36(_.J),e.Y36(v.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sale-bill-list"]],decls:142,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","CompanyName/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addsalesbill",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Bill list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Bill"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return l.titlee=s})("ngModelChange",function(){return l.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return l.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return l.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return l.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Sale Bill Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(s){return l.date=s})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Due Date"),e.qZA(),e.TgZ(47,"input",30),e.NdJ("ngModelChange",function(s){return l.espireDate=s})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(48,"div",28)(49,"div",29)(50,"label"),e._uU(51,"Payment terms"),e.qZA(),e.TgZ(52,"select",31),e.NdJ("ngModelChange",function(s){return l.filterPaymentTerms=s})("change",function(){return l.filterData()}),e.TgZ(53,"option",32),e._uU(54,"Select Payment Terms"),e.qZA(),e.YNc(55,k,2,2,"option",33),e.qZA()()(),e.TgZ(56,"div",28)(57,"div",29)(58,"label"),e._uU(59,"Sales Order No."),e.qZA(),e.TgZ(60,"select",31),e.NdJ("ngModelChange",function(s){return l.selectEstimateNo=s})("change",function(){return l.filterData()}),e.TgZ(61,"option",32),e._uU(62,"Select Sales Order No."),e.qZA(),e.YNc(63,P,2,2,"option",33),e.qZA()()(),e.TgZ(64,"div",28)(65,"div",29)(66,"label"),e._uU(67,"Enter Total Amount"),e.qZA(),e.TgZ(68,"input",34),e.NdJ("ngModelChange",function(s){return l.selectedAmount=s})("keyup",function(){return l.filterData()}),e.qZA(),e.TgZ(69,"span",35),e._uU(70,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(71,"div",36),e.NdJ("click",function(){return l.clearFilter()}),e.TgZ(72,"a",37),e._uU(73,"Clear Filter"),e.qZA()()()()()(),e.TgZ(74,"div",38)(75,"table",39)(76,"thead")(77,"tr")(78,"th",40),e.NdJ("click",function(){return l.sort("id")}),e.TgZ(79,"label",41),e.NdJ("click",function(){return l.selectAll(l.initChecked)}),e.TgZ(80,"input",42),e.NdJ("ngModelChange",function(s){return l.allSelected=s})("change",function(){return l.selectAlll()}),e.qZA(),e._UZ(81,"span",43),e.qZA(),e._UZ(82,"i",44),e.qZA(),e.TgZ(83,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(84,"Sr. No. "),e._UZ(85,"i",44),e.qZA(),e.TgZ(86,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(87,"Company Name "),e._UZ(88,"i",44),e.qZA(),e.TgZ(89,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(90,"Sale Bill Date "),e._UZ(91,"i",44),e.qZA(),e.TgZ(92,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(93,"Due Date "),e._UZ(94,"i",44),e.qZA(),e.TgZ(95,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(96,"Customer Bill No. "),e._UZ(97,"i",44),e.qZA(),e.TgZ(98,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(99,"Payment Terms "),e._UZ(100,"i",44),e.qZA(),e.TgZ(101,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(102,"Sale Order"),e._UZ(103,"i",44),e.qZA(),e.TgZ(104,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(105,"Sub Total"),e._UZ(106,"i",44),e.qZA(),e.TgZ(107,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(108,"Total"),e._UZ(109,"i",44),e.qZA(),e.TgZ(110,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(111,"Is Active "),e._UZ(112,"i",44),e.qZA(),e.TgZ(113,"th",40),e.NdJ("click",function(){return l.sort("id")}),e._uU(114,"Action "),e._UZ(115,"i",44),e.qZA()()(),e.YNc(116,F,4,11,"tbody",45),e.YNc(117,R,5,0,"tbody",45),e.qZA(),e.TgZ(118,"div",46),e.YNc(119,Q,1,0,"mat-progress-bar",47),e.qZA(),e.TgZ(120,"div",26)(121,"div",48)(122,"div",49),e._uU(123," Show per page "),e.TgZ(124,"select",50),e.NdJ("ngModelChange",function(s){return l.itemsPerPage=s}),e.TgZ(125,"option",51),e._uU(126,"10"),e.qZA(),e.TgZ(127,"option",52),e._uU(128,"20"),e.qZA(),e.TgZ(129,"option",53),e._uU(130,"30"),e.qZA(),e.TgZ(131,"option",54),e._uU(132,"50"),e.qZA(),e.TgZ(133,"option",55),e._uU(134,"100"),e.qZA(),e.TgZ(135,"option",56),e._uU(136,"All"),e.qZA()()()(),e.TgZ(137,"div",57)(138,"div",58)(139,"pagination-controls",59),e.NdJ("pageChange",function(s){return l.p=s}),e.qZA(),e.TgZ(140,"div",60),e._uU(141),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",l.isAdd),e.xp6(15),e.Q6J("ngModel",l.titlee),e.xp6(21),e.Q6J("ngModel",l.date),e.xp6(5),e.Q6J("ngModel",l.espireDate),e.xp6(5),e.Q6J("ngModel",l.filterPaymentTerms),e.xp6(3),e.Q6J("ngForOf",l.paymentList),e.xp6(5),e.Q6J("ngModel",l.selectEstimateNo),e.xp6(3),e.Q6J("ngForOf",l.saleOrderList),e.xp6(5),e.Q6J("ngModel",l.selectedAmount),e.xp6(12),e.Q6J("ngModel",l.allSelected),e.xp6(36),e.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==l.filteredData?null:l.filteredData.length)),e.xp6(2),e.Q6J("ngIf",l.loader),e.xp6(5),e.Q6J("ngModel",l.itemsPerPage),e.xp6(17),e.lnq("Showing ",l.itemsPerPage," to ",l.itemsPerPage," of ",l.itemsPerPage," entries"))},dependencies:[u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,S.pW,C.LS,x.Rr,C._s,N.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[o(30597).l],data:{allowedRoles:["view_salebill"]}}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(H),f.Bz]}),n})();var W=o(8468);let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,K,W.I]}),n})()},30597:(q,b,o)=>{o.d(b,{l:()=>B});var u=o(94650),f=o(89299),A=o(97185),m=o(42917),y=o(80927);let B=(()=>{class p{constructor(h,e,Z,_,v){this.router=h,this.Arout=e,this.toastr=Z,this.profileService=_,this.coreService=v}canActivate(h,e){const Z=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),Z){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const v=Z.some(d=>_.includes(d.codename));if(console.log(v),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const S=d?.permission,C=this.profileService.getUserDetails();(!C||C.length!==S.length)&&(this.profileService.setUserPermission(S),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(A._W),u.LFG(m.J),u.LFG(y.p))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);