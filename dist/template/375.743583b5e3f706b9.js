"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[375],{10375:(W,h,o)=>{o.r(h),o.d(h,{EstimateListModule:()=>$});var g=o(36895),_=o(88996),b=o(2454),u=o.n(b),A=o(53583),y=o(12983),E=o.n(y),p=o(80574),L=o(94327),t=o(94650),M=o(72170),U=o(42917),D=o(25062),m=o(24006),q=o(73162),f=o(54333),x=o(90455),S=o(54040);function k(s,a){1&s&&(t.TgZ(0,"div",64)(1,"a",65),t._UZ(2,"img",66),t._uU(3,"Add Sales Estimate "),t.qZA()())}function J(s,a){if(1&s&&(t.TgZ(0,"option",67),t._uU(1),t.qZA()),2&s){const e=a.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function N(s,a){if(1&s&&(t.TgZ(0,"a",75),t._UZ(1,"img",79),t.qZA()),2&s){const e=t.oxw().$implicit;t.MGl("routerLink","//sales/updatesalesEstimate/",e.id,"")}}function w(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"a",80),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),l=n.index,r=n.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(l,r.id))}),t._UZ(1,"img",81),t.qZA()}}const P=function(s,a,e){return{"bg-lightgreen":s,"bg-lightred":a,"bg-lightyellow":e}};function O(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",69)(3,"input",70),t.NdJ("ngModelChange",function(n){const r=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[r]=n)}),t.qZA(),t._UZ(4,"span",46),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",71)(8,"a",72),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"span",73),t._uU(24),t.qZA()(),t.TgZ(25,"td")(26,"mat-slide-toggle",74),t.NdJ("click",function(){const n=t.CHM(e),l=n.$implicit,r=n.index,c=t.oxw(2);return t.KtG(l.is_active?c.isActive(r,l.id):c.Active(r,l.id))})("ngModelChange",function(n){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=n)}),t.qZA()(),t.TgZ(27,"td")(28,"a",75),t._UZ(29,"img",76),t.qZA(),t.YNc(30,N,2,1,"a",77),t.YNc(31,w,2,0,"a",78),t.qZA()()}if(2&s){const e=a.$implicit,i=a.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//sales/salesEstimatedetails/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.customer?null:e.customer.name),t.xp6(2),t.Oqu(null==e?null:e.estimate_date),t.xp6(2),t.Oqu(e.estimate_no),t.xp6(2),t.Oqu(e.payment_terms.title),t.xp6(2),t.Oqu(null==e?null:e.estimate_expiry_date),t.xp6(2),t.Oqu(null==e?null:e.subtotal),t.xp6(2),t.Oqu(null==e?null:e.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(16,P,"Converted to order"===e.status,"Expired"===e.status,"Draft"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//sales/salesEstimatedetails/",e.id,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const B=function(s,a){return{itemsPerPage:s,currentPage:a}};function I(s,a){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,O,32,20,"tr",68),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function F(s,a){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}function R(s,a){1&s&&t._UZ(0,"mat-progress-bar",84)}const Y=[{path:"",component:(()=>{class s{constructor(e,i,n){this.saleService=e,this.cs=i,this.contactService=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,i){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.deleteSalesEstimate(i).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,i){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale estimate!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.SalesEstimateIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(e,i){u().fire({title:"Are you sure?",text:"Do you want to Active this sale Estimate!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.SalesEstimateIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getSalesEstimate().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"sale"===n.content_type.app_label&&"estimate"===n.content_type.model&&"add_estimate"==n.codename?this.isAdd=n.codename:"sale"===n.content_type.app_label&&"estimate"===n.content_type.model&&"change_estimate"==n.codename?this.isEdit=n.codename:"sale"===n.content_type.app_label&&"estimate"===n.content_type.model&&"delete_estimate"==n.codename&&(this.isDelete=n.codename)})}),this.getPaymentTerms()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(e=>{this.paymentList=e})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(i=>{const n=i?.customer?.name.toLocaleLowerCase(),l=i.estimate_no.toLocaleLowerCase();return!!n.match(e)||!!l.match(e)})}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Estimate List",10,10),E()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Estimate Date "},{header:"Estimate no"},{header:"Payment Terms"},{header:"Expire Date"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),e.save("estimate.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),n=i.querySelector("thead tr"),l=i.querySelectorAll("tbody tr"),r=[];return n.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&r.push(d)}),e.push(r),l.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(T=>{d.push(T.textContent.trim())}),e.push(d)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=p.P6.aoa_to_sheet(e),n=p.P6.book_new();p.P6.book_append_sheet(n,i,"Sheet1");const l=p.cW(n,{bookType:"xlsx",type:"array"}),r=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,L.saveAs)(r,"estimate.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),c=r.querySelector("th.thone:nth-child(11)");c&&c.remove();const d=r.querySelector("th.thone:last-child");d&&d.remove(),r.querySelectorAll("tr").forEach(Z=>{const v=Z.querySelector("td:nth-child(11)");v&&v.remove();const C=Z.querySelector("td:last-child");C&&C.remove()});const z=r.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+z,V=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=V}filterData(){let e=this.tableData.slice();if(this.date){const i=new Date(this.date).toISOString().split("T")[0];e=e.filter(n=>new Date(n?.estimate_date).toISOString().split("T")[0]===i)}if(this.espireDate){const i=new Date(this.espireDate).toISOString().split("T")[0];e=e.filter(n=>new Date(n?.estimate_expiry_date).toISOString().split("T")[0]===i)}this.filterPaymentTerms&&(e=e.filter(i=>i?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(e=e.filter(i=>i?.total<=this.selectedAmount)),this.statusFilter&&(e=e.filter(i=>i?.status===this.statusFilter)),this.filteredData=e}clearFilter(){this.date=null,this.espireDate=null,this.filterPaymentTerms=null,this.selectedAmount=null,this.statusFilter=null,this.filterData()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(M.M),t.Y36(U.J),t.Y36(D.y))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-estimate-list"]],decls:147,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Customer/Estimate No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],["value","Draft"],["value","Expired"],["value","Converted to order"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addsalesEstimate",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Estimate list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Estimate"),t.qZA()(),t.YNc(6,k,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Estimate Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(l){return i.date=l})("ngModelChange",function(){return i.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Estimate Expire Date"),t.qZA(),t.TgZ(47,"input",30),t.NdJ("ngModelChange",function(l){return i.espireDate=l})("ngModelChange",function(){return i.filterData()}),t.qZA()()(),t.TgZ(48,"div",28)(49,"div",29)(50,"label"),t._uU(51,"Payment terms"),t.qZA(),t.TgZ(52,"select",31),t.NdJ("ngModelChange",function(l){return i.filterPaymentTerms=l})("change",function(){return i.filterData()}),t.TgZ(53,"option",32),t._uU(54,"Select Payment Terms"),t.qZA(),t.YNc(55,J,2,2,"option",33),t.qZA()()(),t.TgZ(56,"div",28)(57,"div",29)(58,"label"),t._uU(59,"Enter Total Amount"),t.qZA(),t.TgZ(60,"input",34),t.NdJ("ngModelChange",function(l){return i.selectedAmount=l})("keyup",function(){return i.filterData()}),t.qZA(),t.TgZ(61,"span",35),t._uU(62,"Amount Filter (Less than & Equal to Total amount value)"),t.qZA()()(),t.TgZ(63,"div",28)(64,"div",29)(65,"label"),t._uU(66,"Select Status"),t.qZA(),t.TgZ(67,"select",31),t.NdJ("ngModelChange",function(l){return i.statusFilter=l})("change",function(){return i.filterData()}),t.TgZ(68,"option",32),t._uU(69,"Select Status"),t.qZA(),t.TgZ(70,"option",36),t._uU(71,"Draft"),t.qZA(),t.TgZ(72,"option",37),t._uU(73,"Expired"),t.qZA(),t.TgZ(74,"option",38),t._uU(75,"Converted to order"),t.qZA()()()()(),t.TgZ(76,"div",39),t.NdJ("click",function(){return i.clearFilter()}),t.TgZ(77,"a",40),t._uU(78,"Clear Filter"),t.qZA()()()()()(),t.TgZ(79,"div",41)(80,"table",42)(81,"thead")(82,"tr")(83,"th",43),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(84,"label",44),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(85,"input",45),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(86,"span",46),t.qZA(),t._UZ(87,"i",47),t.qZA(),t.TgZ(88,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(89,"Sr. No. "),t._UZ(90,"i",47),t.qZA(),t.TgZ(91,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(92,"User Name "),t._UZ(93,"i",47),t.qZA(),t.TgZ(94,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(95,"Estimate Date "),t._UZ(96,"i",47),t.qZA(),t.TgZ(97,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(98,"Estimate no "),t._UZ(99,"i",47),t.qZA(),t.TgZ(100,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(101,"Payment Terms "),t._UZ(102,"i",47),t.qZA(),t.TgZ(103,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(104,"Expire Date "),t._UZ(105,"i",47),t.qZA(),t.TgZ(106,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(107,"Sub Total"),t._UZ(108,"i",47),t.qZA(),t.TgZ(109,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(110,"Total"),t._UZ(111,"i",47),t.qZA(),t.TgZ(112,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(113,"Status"),t._UZ(114,"i",47),t.qZA(),t.TgZ(115,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(116,"Is Active "),t._UZ(117,"i",47),t.qZA(),t.TgZ(118,"th",43),t.NdJ("click",function(){return i.sort("id")}),t._uU(119,"Action "),t._UZ(120,"i",47),t.qZA()()(),t.YNc(121,I,4,11,"tbody",48),t.YNc(122,F,5,0,"tbody",48),t.qZA(),t.TgZ(123,"div",49),t.YNc(124,R,1,0,"mat-progress-bar",50),t.qZA(),t.TgZ(125,"div",26)(126,"div",51)(127,"div",52),t._uU(128," Show per page "),t.TgZ(129,"select",53),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l}),t.TgZ(130,"option",54),t._uU(131,"10"),t.qZA(),t.TgZ(132,"option",55),t._uU(133,"20"),t.qZA(),t.TgZ(134,"option",56),t._uU(135,"30"),t.qZA(),t.TgZ(136,"option",57),t._uU(137,"50"),t.qZA(),t.TgZ(138,"option",58),t._uU(139,"100"),t.qZA(),t.TgZ(140,"option",59),t._uU(141,"All"),t.qZA()()()(),t.TgZ(142,"div",60)(143,"div",61)(144,"pagination-controls",62),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(145,"div",63),t._uU(146),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(21),t.Q6J("ngModel",i.date),t.xp6(5),t.Q6J("ngModel",i.espireDate),t.xp6(5),t.Q6J("ngModel",i.filterPaymentTerms),t.xp6(3),t.Q6J("ngForOf",i.paymentList),t.xp6(5),t.Q6J("ngModel",i.selectedAmount),t.xp6(7),t.Q6J("ngModel",i.statusFilter),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(36),t.Q6J("ngIf",(null==i.filteredData?null:i.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.filteredData?null:i.filteredData.length)),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"))},dependencies:[g.mk,g.sg,g.O5,_.yS,m.YN,m.Kr,m.Fj,m.wV,m.Wl,m.EJ,m.JJ,m.On,q.pW,f.LS,x.Rr,f._s,S.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})(),canActivate:[o(30597).l],data:{allowedRoles:["view_estimate"]}}];let j=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_.Bz.forChild(Y),_.Bz]}),s})();var G=o(8468);let $=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.ez,j,G.I]}),s})()}}]);