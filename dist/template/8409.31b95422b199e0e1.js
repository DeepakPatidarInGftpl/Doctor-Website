"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8409],{41303:(W,h,a)=>{a.r(h),a.d(h,{SaleBillListModule:()=>G});var p=a(96814),_=a(74408),C=a(46707),m=a.n(C),S=a(69846),A=a(33403),y=a.n(A),g=a(11486),B=a(10217),e=a(19212),L=a(81558),M=a(41789),D=a(35350),u=a(56223),q=a(16007),f=a(76472),U=a(82599),x=a(35202);function N(s,c){1&s&&(e.TgZ(0,"div",61)(1,"a",62),e._UZ(2,"img",63),e._uU(3,"Add Sales Bill "),e.qZA()())}function k(s,c){if(1&s&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&s){const l=c.$implicit;e.s9C("value",null==l?null:l.title),e.xp6(1),e.Oqu(null==l?null:l.title)}}function J(s,c){if(1&s&&(e.TgZ(0,"option",64),e._uU(1),e.qZA()),2&s){const l=c.$implicit;e.s9C("value",null==l?null:l.sale_order_no),e.xp6(1),e.Oqu(null==l?null:l.sale_order_no)}}function O(s,c){if(1&s&&(e.TgZ(0,"a",71),e._UZ(1,"img",75),e.qZA()),2&s){const l=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesbill/",l.id,"")}}function w(s,c){if(1&s){const l=e.EpF();e.TgZ(0,"a",76),e.NdJ("click",function(){e.CHM(l);const t=e.oxw(),i=t.index,o=t.$implicit,r=e.oxw(2);return e.KtG(r.confirmText(i,o.id))}),e._UZ(1,"img",77),e.qZA()}}function P(s,c){if(1&s){const l=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",66)(3,"input",67),e.NdJ("ngModelChange",function(t){const o=e.CHM(l).index,r=e.oxw(2);return e.KtG(r.selectedRows[o]=t)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",68)(8,"a",69),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td")(25,"mat-slide-toggle",70),e.NdJ("click",function(){const t=e.CHM(l),i=t.$implicit,o=t.index,r=e.oxw(2);return e.KtG(null!=i&&i.is_active?r.isActive(o,null==i?null:i.id):r.Active(o,null==i?null:i.id))})("ngModelChange",function(t){const o=e.CHM(l).$implicit;return e.KtG(o.is_active=t)}),e.qZA()(),e.TgZ(26,"td")(27,"a",71),e._UZ(28,"img",72),e.qZA(),e.YNc(29,O,2,1,"a",73)(30,w,2,0,"a",74),e.qZA()()}if(2&s){const l=c.$implicit,n=c.index,t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",l.id,""),e.xp6(1),e.Oqu(null==l||null==l.customer?null:l.customer.name),e.xp6(2),e.Oqu(null==l?null:l.bill_date),e.xp6(2),e.Oqu(null==l?null:l.due_date),e.xp6(2),e.Oqu(null==l?null:l.customer_bill_no),e.xp6(2),e.Oqu(null==l||null==l.payment_terms?null:l.payment_terms.title),e.xp6(2),e.Oqu(null==l||null==l.sale_order?null:l.sale_order.sale_order_no),e.xp6(2),e.Oqu(null==l?null:l.subtotal),e.xp6(2),e.Oqu(null==l?null:l.total),e.xp6(2),e.Q6J("ngModel",l.is_active),e.xp6(2),e.MGl("routerLink","//sales/salesbilldetails/",l.id,""),e.xp6(2),e.Q6J("ngIf",t.isEdit),e.xp6(1),e.Q6J("ngIf",t.isDelete)}}const I=(s,c)=>({itemsPerPage:s,currentPage:c});function E(s,c){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,P,31,15,"tr",65),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const l=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,l.filteredData,l.key,l.reverse),e.WLB(8,I,l.itemsPerPage,l.p)))}}function F(s,c){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",78)(3,"p",79),e._uU(4,"Data not available"),e.qZA()()()())}function Q(s,c){1&s&&e._UZ(0,"mat-progress-bar",80)}const Y=[{path:"",component:(()=>{class s{constructor(l,n,t){this.saleService=l,this.cs=n,this.contactService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(l,n){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(t=>{t.isConfirmed&&this.saleService.deleteSalesBill(n).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(l,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(l,n){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(t=>{t.isConfirmed&&(this.saleService.SalesBillIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Sale Bill Is Deactivate Successfully."}))})}Active(l,n){m().fire({title:"Are you sure?",text:"Do you want to Active this sale bill!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(t=>{t.isConfirmed&&(this.saleService.SalesBillIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Sale Bill Is Active Successfully."}))})}ngOnInit(){this.saleService.getSalesBill().subscribe(l=>{this.tableData=l,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(l=>{this.userDetails=l,this.userDetails?.permission?.map(t=>{"sale"===t.content_type.app_label&&"salebill"===t.content_type.model&&"add_salebill"==t.codename?this.isAdd=t.codename:"sale"===t.content_type.app_label&&"salebill"===t.content_type.model&&"change_salebill"==t.codename?this.isEdit=t.codename:"sale"===t.content_type.app_label&&"salebill"===t.content_type.model&&"delete_salebill"==t.codename&&(this.isDelete=t.codename)})}),this.getPaymentTerms(),this.getEstimate()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(l=>{this.paymentList=l})}getEstimate(){this.saleService.getSalesOrder().subscribe(l=>{this.saleOrderList=l})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(l){this.tableData.forEach(l?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const l=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const t=n?.customer?.name.toLocaleLowerCase(),i=n?.customer_bill_no.toLocaleLowerCase();return!!t.match(l)||!!i.match(l)})}}sort(l){this.key=l,this.reverse=!this.reverse}generatePDF(){const l=new S.default;l.setFontSize(15),l.setTextColor(33,43,54),l.text("Sale Bill List",10,10),y()(l,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name"},{header:"Sale Bill Date"},{header:"Due Date"},{header:"customer bill no"},{header:"Payment Terms"},{header:"Sale Order"},{header:"Sub Total"},{header:"Total"},{header:"Is Active"}]}),l.save("saleBill.pdf")}getVisibleDataFromTable(){const l=[],n=document.getElementById("mytable"),t=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),o=[];return t.querySelectorAll("th").forEach(r=>{const d=r.textContent.trim();"Is Active"!==d&&"Action"!==d&&o.push(d)}),l.push(o),i.forEach(r=>{const d=[];r.querySelectorAll("td").forEach(T=>{d.push(T.textContent.trim())}),l.push(d)}),l}exportToExcel(){const l=this.getVisibleDataFromTable(),n=g.P6.aoa_to_sheet(l),t=g.P6.book_new();g.P6.book_append_sheet(t,n,"Sheet1");const i=g.cW(t,{bookType:"xlsx",type:"array"}),o=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,B.saveAs)(o,"saleBill.xlsx")}printTable(){const l=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,o=l.cloneNode(!0),r=o.querySelector("th.thone:nth-child(11)");r&&r.remove();const d=o.querySelector("th.thone:last-child");d&&d.remove(),o.querySelectorAll("tr").forEach(Z=>{const b=Z.querySelector("td:nth-child(11)");b&&b.remove();const v=Z.querySelector("td:last-child");v&&v.remove()});const z=o.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+z,V=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=V}filterData(){let l=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];l=l.filter(t=>new Date(t?.bill_date).toISOString().split("T")[0]===n)}if(this.espireDate){const n=new Date(this.espireDate).toISOString().split("T")[0];l=l.filter(t=>new Date(t?.due_date).toISOString().split("T")[0]===n)}this.selectEstimateNo&&(l=l.filter(n=>n?.sale_order?.sale_order_no===this.selectEstimateNo)),this.filterPaymentTerms&&(l=l.filter(n=>n?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(l=l.filter(n=>n?.total<=this.selectedAmount)),this.filteredData=l}clearFilter(){this.date=null,this.espireDate=null,this.selectedAmount=null,this.filterPaymentTerms=null,this.selectEstimateNo=null,this.filterData()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(L.M),e.Y36(M.J),e.Y36(D.y))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-sale-bill-list"]],decls:142,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","CompanyName/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addsalesbill",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Bill list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Bill"),e.qZA()(),e.YNc(6,N,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(o){return t.titlee=o})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return t.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return t.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return t.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Sale Bill Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(o){return t.date=o})("ngModelChange",function(){return t.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Due Date"),e.qZA(),e.TgZ(47,"input",30),e.NdJ("ngModelChange",function(o){return t.espireDate=o})("ngModelChange",function(){return t.filterData()}),e.qZA()()(),e.TgZ(48,"div",28)(49,"div",29)(50,"label"),e._uU(51,"Payment terms"),e.qZA(),e.TgZ(52,"select",31),e.NdJ("ngModelChange",function(o){return t.filterPaymentTerms=o})("change",function(){return t.filterData()}),e.TgZ(53,"option",32),e._uU(54,"Select Payment Terms"),e.qZA(),e.YNc(55,k,2,2,"option",33),e.qZA()()(),e.TgZ(56,"div",28)(57,"div",29)(58,"label"),e._uU(59,"Sales Order No."),e.qZA(),e.TgZ(60,"select",31),e.NdJ("ngModelChange",function(o){return t.selectEstimateNo=o})("change",function(){return t.filterData()}),e.TgZ(61,"option",32),e._uU(62,"Select Sales Order No."),e.qZA(),e.YNc(63,J,2,2,"option",33),e.qZA()()(),e.TgZ(64,"div",28)(65,"div",29)(66,"label"),e._uU(67,"Enter Total Amount"),e.qZA(),e.TgZ(68,"input",34),e.NdJ("ngModelChange",function(o){return t.selectedAmount=o})("keyup",function(){return t.filterData()}),e.qZA(),e.TgZ(69,"span",35),e._uU(70,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(71,"div",36),e.NdJ("click",function(){return t.clearFilter()}),e.TgZ(72,"a",37),e._uU(73,"Clear Filter"),e.qZA()()()()()(),e.TgZ(74,"div",38)(75,"table",39)(76,"thead")(77,"tr")(78,"th",40),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(79,"label",41),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(80,"input",42),e.NdJ("ngModelChange",function(o){return t.allSelected=o})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(81,"span",43),e.qZA(),e._UZ(82,"i",44),e.qZA(),e.TgZ(83,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(84,"Sr. No. "),e._UZ(85,"i",44),e.qZA(),e.TgZ(86,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(87,"Company Name "),e._UZ(88,"i",44),e.qZA(),e.TgZ(89,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(90,"Sale Bill Date "),e._UZ(91,"i",44),e.qZA(),e.TgZ(92,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(93,"Due Date "),e._UZ(94,"i",44),e.qZA(),e.TgZ(95,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(96,"Customer Bill No. "),e._UZ(97,"i",44),e.qZA(),e.TgZ(98,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(99,"Payment Terms "),e._UZ(100,"i",44),e.qZA(),e.TgZ(101,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(102,"Sale Order"),e._UZ(103,"i",44),e.qZA(),e.TgZ(104,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(105,"Sub Total"),e._UZ(106,"i",44),e.qZA(),e.TgZ(107,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(108,"Total"),e._UZ(109,"i",44),e.qZA(),e.TgZ(110,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(111,"Is Active "),e._UZ(112,"i",44),e.qZA(),e.TgZ(113,"th",40),e.NdJ("click",function(){return t.sort("id")}),e._uU(114,"Action "),e._UZ(115,"i",44),e.qZA()()(),e.YNc(116,E,4,11,"tbody",45)(117,F,5,0,"tbody",45),e.qZA(),e.TgZ(118,"div",46),e.YNc(119,Q,1,0,"mat-progress-bar",47),e.qZA(),e.TgZ(120,"div",26)(121,"div",48)(122,"div",49),e._uU(123," Show per page "),e.TgZ(124,"select",50),e.NdJ("ngModelChange",function(o){return t.itemsPerPage=o}),e.TgZ(125,"option",51),e._uU(126,"10"),e.qZA(),e.TgZ(127,"option",52),e._uU(128,"20"),e.qZA(),e.TgZ(129,"option",53),e._uU(130,"30"),e.qZA(),e.TgZ(131,"option",54),e._uU(132,"50"),e.qZA(),e.TgZ(133,"option",55),e._uU(134,"100"),e.qZA(),e.TgZ(135,"option",56),e._uU(136,"All"),e.qZA()()()(),e.TgZ(137,"div",57)(138,"div",58)(139,"pagination-controls",59),e.NdJ("pageChange",function(o){return t.p=o}),e.qZA(),e.TgZ(140,"div",60),e._uU(141),e.qZA()()()()()()()),2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(21),e.Q6J("ngModel",t.date),e.xp6(5),e.Q6J("ngModel",t.espireDate),e.xp6(5),e.Q6J("ngModel",t.filterPaymentTerms),e.xp6(3),e.Q6J("ngForOf",t.paymentList),e.xp6(5),e.Q6J("ngModel",t.selectEstimateNo),e.xp6(3),e.Q6J("ngForOf",t.saleOrderList),e.xp6(5),e.Q6J("ngModel",t.selectedAmount),e.xp6(12),e.Q6J("ngModel",t.allSelected),e.xp6(36),e.Q6J("ngIf",(null==t.filteredData?null:t.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.filteredData?null:t.filteredData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries"))},dependencies:[p.sg,p.O5,_.rH,u.YN,u.Kr,u.Fj,u.wV,u.Wl,u.EJ,u.JJ,u.On,q.pW,f.LS,U.Rr,f._s,x.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]})}return s})(),canActivate:[a(1971).l],data:{allowedRoles:["view_salebill"]}}];let j=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#l=this.\u0275inj=e.cJS({imports:[_.Bz.forChild(Y),_.Bz]})}return s})();var $=a(16047);let G=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#l=this.\u0275inj=e.cJS({imports:[p.ez,j,$.I]})}return s})()}}]);