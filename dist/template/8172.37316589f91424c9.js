"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8172],{78172:(U,b,r)=>{r.r(b),r.d(b,{MaterialOutwardListModule:()=>H});var c=r(36895),f=r(89299),A=r(2454),g=r.n(A),C=r(96166),y=r(12983),m=r.n(y),v=r(80574),_=r(94327),t=r(94650),T=r(72170),h=r(42917),d=r(24006),M=r(73162),Z=r(54333),w=r(54040);function q(l,o){1&l&&(t.TgZ(0,"div",64)(1,"a",65),t._UZ(2,"img",66),t._uU(3,"Add Sales Material Outward "),t.qZA()())}function x(l,o){if(1&l&&(t.TgZ(0,"a",73),t._UZ(1,"img",77),t.qZA()),2&l){const e=t.oxw().$implicit;t.MGl("routerLink","//sales/updatesalesMaterialOutward/",e.id,"")}}function N(l,o){if(1&l){const e=t.EpF();t.TgZ(0,"a",78),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),n=i.index,s=i.$implicit,u=t.oxw(2);return t.KtG(u.confirmText(n,s.id))}),t._UZ(1,"img",79),t.qZA()}}const k=function(l,o,e){return{"bg-lightgreen":l,"bg-lightred":o,"bg-lightyellow":e}};function J(l,o){if(1&l){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",68)(3,"input",69),t.NdJ("ngModelChange",function(i){const s=t.CHM(e).index,u=t.oxw(2);return t.KtG(u.selectedRows[s]=i)}),t.qZA(),t._UZ(4,"span",45),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",70)(8,"a",71),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",72),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"a",73),t._UZ(25,"img",74),t.qZA(),t.YNc(26,x,2,1,"a",75),t.YNc(27,N,2,0,"a",76),t.qZA()()}if(2&l){const e=o.$implicit,a=o.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[a]),t.xp6(3),t.Oqu(a+1),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",e.id,""),t.xp6(1),t.Oqu((null==e||null==e.customer?null:e.customer.name)+" ("+(null==e||null==e.customer?null:e.customer.username)+")"),t.xp6(2),t.Oqu(null==e?null:e.mo_date),t.xp6(2),t.Oqu(null==e?null:e.refund_status),t.xp6(2),t.Oqu(null==e?null:e.voucher_number),t.xp6(2),t.Oqu(null==e?null:e.total_qty),t.xp6(2),t.Oqu(null==e?null:e.note),t.xp6(2),t.Q6J("ngClass",t.kEZ(14,k,"Received"===(null==e?null:e.status),"Pending"===(null==e?null:e.status),"Draft"===(null==e?null:e.status))),t.xp6(1),t.Oqu(null==e?null:e.status),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",e.id,""),t.xp6(2),t.Q6J("ngIf",i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isDelete)}}const R=function(l,o){return{itemsPerPage:l,currentPage:o}};function P(l,o){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,J,28,18,"tr",67),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,R,e.itemsPerPage,e.p)))}}function E(l,o){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",80)(3,"p",81),t._uU(4,"Data not available"),t.qZA()()()())}function B(l,o){1&l&&t._UZ(0,"mat-progress-bar",82)}const Q=[{path:"",component:(()=>{class l{constructor(e,a,i){this.saleService=e,this.cs=a,this.datePipe=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(e,a){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.saleService.deleteSalesMaterialOutward(a).subscribe(n=>{this.delRes=n,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,a){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(a,"").subscribe(n=>{this.delRes=n,this.delRes.success&&(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(e,a){g().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(a,"").subscribe(n=>{this.delRes=n,this.delRes.success&&(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getSalesMaterialOutward().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"sale"===i.content_type.app_label&&"materialoutward"===i.content_type.model&&"add_materialoutward"==i.codename?this.isAdd=i.codename:"sale"===i.content_type.app_label&&"materialoutward"===i.content_type.model&&"change_materialoutward"==i.codename?this.isEdit=i.codename:"sale"===i.content_type.app_label&&"materialoutward"===i.content_type.model&&"delete_materialoutward"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(a=>{const i=a?.customer?.name.toLocaleLowerCase(),n=a?.customer?.username.toLocaleLowerCase()||"",s=a?.voucher_number.toLocaleLowerCase();return!(!i.match(e)&&!n.includes(e)&&!s.match(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}formatDate(e){return this.datePipe.transform(e,"yyyy-MM-dd")||""}generatePDF(){const e=new C.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Material Outward List",10,10),m()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name"},{header:"Material Outward Date "},{header:"Refund Status"},{header:"Voucher Number"},{header:"Total Qty"},{header:"Note"},{header:"Status"},{header:"Is Active"}]}),e.save("materialoutward.pdf")}generatePDFAgain(){const e=new C.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Material Outward List",82,10),e.text("",10,15),m()(e,{head:[["#","User Name","Material Outward Date ","Refund Status","Voucher Number","Total Qty","Note","Status"]],body:this.tableData.map((i,n)=>[n+1,i?.customer?.name+" ("+i?.customer?.username+")",this.formatDate(i?.mo_date),i.refund_status,i.voucher_number,i.total_qty,i?.note,i?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Material Outward .pdf")}getVisibleDataFromTable(){const e=[],a=document.getElementById("mytable"),i=a.querySelector("thead tr"),n=a.querySelectorAll("tbody tr"),s=[];return i.querySelectorAll("th").forEach(u=>{const p=u.textContent.trim();"Is Active"!==p&&"Action"!==p&&s.push(p)}),e.push(s),n.forEach(u=>{const p=[];u.querySelectorAll("td").forEach(O=>{p.push(O.textContent.trim())}),e.push(p)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),a=v.P6.aoa_to_sheet(e),i=v.P6.book_new();v.P6.book_append_sheet(i,a,"Sheet1");const n=v.cW(i,{bookType:"xlsx",type:"array"}),s=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(s,"materialoutward.xlsx")}printTable(){const e=document.getElementById("mytable"),n=document.querySelector(".titl").outerHTML,s=e.cloneNode(!0),u=s.querySelector("th.thone:nth-child(10)");u&&u.remove();const p=s.querySelector("th.thone:last-child");p&&p.remove(),s.querySelectorAll("tr").forEach(L=>{const D=L.querySelector("td:nth-child(10)");D&&D.remove();const S=L.querySelector("td:last-child");S&&S.remove()});const W=s.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+W,K=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=z,window.print(),document.body.innerHTML=K}filterData(){let e=this.tableData.slice();if(this.date){const a=new Date(this.date).toISOString().split("T")[0];e=e.filter(i=>new Date(i?.mo_date).toISOString().split("T")[0]===a)}this.selectRefundStatus&&(e=e.filter(a=>a?.refund_status===this.selectRefundStatus)),this.selectedAmount&&(e=e.filter(a=>a?.total_qty<=this.selectedAmount)),this.statusFilter&&(e=e.filter(a=>a?.status==this.statusFilter)),this.filteredData=e}clearFilter(){this.date=null,this.selectRefundStatus=null,this.selectedAmount=null,this.statusFilter=null,this.filterData()}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(T.M),t.Y36(h.J),t.Y36(c.uU))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-material-outward-list"]],decls:129,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User Name/Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Refundable"],["value","Non Refundable"],["value","Scrap"],["type","number","placeholder","Enter Qty",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addSalesMaterialOutward",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Material Outward list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Material Outward"),t.qZA()(),t.YNc(6,q,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(s){return a.titlee=s})("ngModelChange",function(){return a.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return a.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Material Outward Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(s){return a.date=s})("ngModelChange",function(){return a.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Select Refund Status"),t.qZA(),t.TgZ(47,"select",31),t.NdJ("ngModelChange",function(s){return a.selectRefundStatus=s})("change",function(){return a.filterData()}),t.TgZ(48,"option",32),t._uU(49,"Select Refund Status"),t.qZA(),t.TgZ(50,"option",33),t._uU(51,"Refundable"),t.qZA(),t.TgZ(52,"option",34),t._uU(53,"Non Refundable"),t.qZA(),t.TgZ(54,"option",35),t._uU(55,"Scrap"),t.qZA()()()(),t.TgZ(56,"div",28)(57,"div",29)(58,"label"),t._uU(59,"Enter Total Qty"),t.qZA(),t.TgZ(60,"input",36),t.NdJ("ngModelChange",function(s){return a.selectedAmount=s})("keyup",function(){return a.filterData()}),t.qZA(),t.TgZ(61,"span",37),t._uU(62,"Qty Filter (Less than & Equal to Total qty value)"),t.qZA()()()(),t.TgZ(63,"div",38),t.NdJ("click",function(){return a.clearFilter()}),t.TgZ(64,"a",39),t._uU(65,"Clear Filter"),t.qZA()()()()()(),t.TgZ(66,"div",40)(67,"table",41)(68,"thead")(69,"tr")(70,"th",42),t.NdJ("click",function(){return a.sort("id")}),t.TgZ(71,"label",43),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(72,"input",44),t.NdJ("ngModelChange",function(s){return a.allSelected=s})("change",function(){return a.selectAlll()}),t.qZA(),t._UZ(73,"span",45),t.qZA(),t._UZ(74,"i",46),t.qZA(),t.TgZ(75,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(76,"Sr. No. "),t._UZ(77,"i",46),t.qZA(),t.TgZ(78,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(79,"User Name "),t._UZ(80,"i",46),t.qZA(),t.TgZ(81,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(82,"Material Outward Date "),t._UZ(83,"i",46),t.qZA(),t.TgZ(84,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(85,"Refund Status"),t._UZ(86,"i",46),t.qZA(),t.TgZ(87,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(88,"Voucher Number "),t._UZ(89,"i",46),t.qZA(),t.TgZ(90,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(91,"Total Qty"),t._UZ(92,"i",46),t.qZA(),t.TgZ(93,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(94,"Note"),t._UZ(95,"i",46),t.qZA(),t.TgZ(96,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(97,"Status"),t._UZ(98,"i",46),t.qZA(),t.TgZ(99,"th",42),t.NdJ("click",function(){return a.sort("id")}),t._uU(100,"Action "),t._UZ(101,"i",46),t.qZA()()(),t.YNc(102,P,4,11,"tbody",47),t.YNc(103,E,5,0,"tbody",47),t.qZA(),t.TgZ(104,"div",48),t.YNc(105,B,1,0,"mat-progress-bar",49),t.qZA(),t.TgZ(106,"div",26)(107,"div",50)(108,"div",51),t._uU(109," Show per page "),t.TgZ(110,"select",52,53),t.NdJ("ngModelChange",function(s){return a.itemsPerPage=s})("change",function(){t.CHM(i);const s=t.MAs(111);return t.KtG(a.changePg(s.value))}),t.TgZ(112,"option",54),t._uU(113,"10"),t.qZA(),t.TgZ(114,"option",55),t._uU(115,"20"),t.qZA(),t.TgZ(116,"option",56),t._uU(117,"30"),t.qZA(),t.TgZ(118,"option",57),t._uU(119,"50"),t.qZA(),t.TgZ(120,"option",58),t._uU(121,"100"),t.qZA(),t.TgZ(122,"option",59),t._uU(123,"All"),t.qZA()()()(),t.TgZ(124,"div",60)(125,"div",61)(126,"pagination-controls",62),t.NdJ("pageChange",function(s){return a.p=s}),t.qZA(),t.TgZ(127,"div",63),t._uU(128),t.qZA()()()()()()()}2&e&&(t.xp6(6),t.Q6J("ngIf",a.isAdd),t.xp6(15),t.Q6J("ngModel",a.titlee),t.xp6(21),t.Q6J("ngModel",a.date),t.xp6(5),t.Q6J("ngModel",a.selectRefundStatus),t.xp6(13),t.Q6J("ngModel",a.selectedAmount),t.xp6(12),t.Q6J("ngModel",a.allSelected),t.xp6(30),t.Q6J("ngIf",(null==a.filteredData?null:a.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.filteredData?null:a.filteredData.length)),t.xp6(2),t.Q6J("ngIf",a.loader),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq("Showing ",a.itemsPerPage," to ",null==a.filteredData?null:a.filteredData.length," of ",a.p," entries"))},dependencies:[c.mk,c.sg,c.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,M.pW,Z.LS,Z._s,w.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),l})(),canActivate:[r(30597).l],data:{allowedRoles:["view_materialoutward"]}}];let G=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[f.Bz.forChild(Q),f.Bz]}),l})();var Y=r(8468);let H=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[c.uU],imports:[c.ez,G,Y.I]}),l})()},30597:(U,b,r)=>{r.d(b,{l:()=>y});var c=r(94650),f=r(89299),A=r(97185),g=r(42917),C=r(80927);let y=(()=>{class m{constructor(_,t,T,h,d){this.router=_,this.Arout=t,this.toastr=T,this.profileService=h,this.coreService=d}canActivate(_,t){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),T){const h=_.data.allowedRoles;console.log(h,"allowedRoles");const d=T.some(M=>h.includes(M.codename));if(console.log(d),this.coreService.getProfile().subscribe(M=>{this.userDetails=M,this.profileService.setUserDetails(this.userDetails);const Z=M?.permission,w=this.profileService.getUserDetails();(!w||w.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(_){return new(_||m)(c.LFG(f.F0),c.LFG(f.gz),c.LFG(A._W),c.LFG(g.J),c.LFG(C.p))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);