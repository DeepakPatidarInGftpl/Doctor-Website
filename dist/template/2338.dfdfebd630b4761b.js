"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2338],{72338:(q,D,s)=>{s.r(D),s.d(D,{ListDeliveryChallanModule:()=>W});var c=s(36895),v=s(89299),A=s(2454),h=s.n(A),Z=s(96166),L=s(12983),g=s.n(L),f=s(80574),_=s(94327),e=s(94650),y=s(72170),m=s(42917),C=s(25062),d=s(24006),b=s(73162),T=s(54333),k=s(54040);function P(a,r){1&a&&(e.TgZ(0,"div",59)(1,"a",60),e._UZ(2,"img",61),e._uU(3,"Add Delivery Challan "),e.qZA()())}function J(a,r){if(1&a&&(e.TgZ(0,"a",68),e._UZ(1,"img",72),e.qZA()),2&a){const t=e.oxw().$implicit;e.MGl("routerLink","//sales/update-delivery-challan/",t.id,"")}}function E(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"a",73),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),i=n.index,o=n.$implicit,u=e.oxw(2);return e.KtG(u.confirmText(i,o.id))}),e._UZ(1,"img",74),e.qZA()}}const N=function(a,r,t){return{"bg-lightgreen":a,"bg-lightred":r,"bg-lightyellow":t}};function B(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",63)(3,"input",64),e.NdJ("ngModelChange",function(n){const o=e.CHM(t).index,u=e.oxw(2);return e.KtG(u.selectedRows[o]=n)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",65)(8,"a",66),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",67),e._uU(22),e.qZA()(),e.TgZ(23,"td")(24,"a",68),e._UZ(25,"img",69),e.qZA(),e.YNc(26,J,2,1,"a",70),e.YNc(27,E,2,0,"a",71),e.qZA()()}if(2&a){const t=r.$implicit,l=r.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[l]),e.xp6(3),e.Oqu(l+1),e.xp6(2),e.MGl("routerLink","//sales/detail-delivery-challan/",t.id,""),e.xp6(1),e.Oqu((null==t||null==t.account?null:t.account.title)+" ("+(null==t||null==t.account?null:t.account.account_id)+")"),e.xp6(2),e.Oqu(null==t?null:t.bill_date),e.xp6(2),e.Oqu(t.delivery_challan_bill_no),e.xp6(2),e.Oqu(t.sale_bill.customer_bill_no),e.xp6(2),e.Oqu(null==t||null==t.transporter_account?null:t.transporter_account.title),e.xp6(2),e.Oqu(null==t?null:t.total_qty),e.xp6(2),e.Q6J("ngClass",e.kEZ(14,N,"Converted to order"===t.status,"Expired"===t.status,"Draft"===t.status)),e.xp6(1),e.Oqu(t.status),e.xp6(2),e.MGl("routerLink","//sales/detail-delivery-challan/",t.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const w=function(a,r){return{itemsPerPage:a,currentPage:r}};function O(a,r){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,B,28,18,"tr",62),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,w,t.itemsPerPage,t.p)))}}function I(a,r){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),e._uU(4,"Data not available"),e.qZA()()()())}function R(a,r){1&a&&e._UZ(0,"mat-progress-bar",77)}const Q=[{path:"",component:(()=>{class a{constructor(t,l,n,i){this.saleService=t,this.cs=l,this.contactService=n,this.datePipe=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,l){h().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.deleteDelivryChallan(l).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),h().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):h().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,l){h().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.DelivryChallanIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(h().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(t,l){h().fire({title:"Are you sure?",text:"Do you want to Active this sale Delivery Challan!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.saleService.DelivryChallanIsActive(l,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(h().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getDelivryChallan().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"sale"===n.content_type.app_label&&"deliverychallan"===n.content_type.model&&"add_deliverychallan"==n.codename?this.isAdd=n.codename:"sale"===n.content_type.app_label&&"deliverychallan"===n.content_type.model&&"change_deliverychallan"==n.codename?this.isEdit=n.codename:"sale"===n.content_type.app_label&&"deliverychallan"===n.content_type.model&&"delete_deliverychallan"==n.codename&&(this.isDelete=n.codename)})}),this.getPaymentTerms()}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{this.paymentList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>{const n=l?.account?.title?.toLocaleLowerCase()||"",i=l?.sale_bill?.customer_bill_no.toLocaleLowerCase()||"";return!!n.includes(t)||!!i.includes(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}formatDate(t){return this.datePipe.transform(t,"yyyy-MM-dd")||""}generatePDF(){const t=new Z.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Delivery Challan List",10,10),g()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Delivery Date "},{header:"Delivery no"},{header:"Payment Terms"},{header:"Expire Date"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),t.save("deliveryChallan.pdf")}generatePDFAgain(){const t=new Z.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Delivery Challan List",82,10),t.text("",10,15),g()(t,{head:[["#","Account","Date","Challan no.","Sale Bill","Transporter Account","Total QTY","Status"]],body:this.tableData.map((n,i)=>[i+1,n?.account?.title+" ("+n?.account?.account_id+")",this.formatDate(n?.bill_date),n.delivery_challan_bill_no,n.sale_bill?.customer_bill_no,n?.transporter_account?.title,n.total_qty,n?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("deliveryChallan.pdf")}getVisibleDataFromTable(){const t=[],l=document.getElementById("mytable"),n=l.querySelector("thead tr"),i=l.querySelectorAll("tbody tr"),o=[];return n.querySelectorAll("th").forEach(u=>{const p=u.textContent.trim();"Is Active"!==p&&"Action"!==p&&o.push(p)}),t.push(o),i.forEach(u=>{const p=[];u.querySelectorAll("td").forEach(M=>{p.push(M.textContent.trim())}),t.push(p)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),l=f.P6.aoa_to_sheet(t),n=f.P6.book_new();f.P6.book_append_sheet(n,l,"Sheet1");const i=f.cW(n,{bookType:"xlsx",type:"array"}),o=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(o,"deliverychallan.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,o=t.cloneNode(!0),u=o.querySelector("th.thone:nth-child(8)");u&&u.remove();const p=o.querySelector("th.thone:last-child");p&&p.remove(),o.querySelectorAll("tr").forEach(U=>{const S=U.querySelector("td:nth-child(8)");S&&S.remove();const x=U.querySelector("td:last-child");x&&x.remove()});const z=o.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+z,j=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=K,window.print(),document.body.innerHTML=j}filterData(){let t=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];t=t.filter(n=>new Date(n?.bill_date).toISOString().split("T")[0]===l)}this.selectedAmount&&(t=t.filter(l=>l?.total_qty<=this.selectedAmount)),this.filteredData=t}clearFilter(){this.date=null,this.selectedAmount=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.filteredData?.length)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y.M),e.Y36(m.J),e.Y36(C.y),e.Y36(c.uU))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-list-delivery-challan"]],decls:116,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Accunt/Bill",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],["type","number","placeholder","Enter Total QTY",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/add-delivery-challan",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Delivery Challan list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Delivery Challan"),e.qZA()(),e.YNc(6,P,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(o){return l.titlee=o})("ngModelChange",function(){return l.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return l.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return l.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return l.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(o){return l.date=o})("ngModelChange",function(){return l.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Enter Total QTY"),e.qZA(),e.TgZ(47,"input",31),e.NdJ("ngModelChange",function(o){return l.selectedAmount=o})("keyup",function(){return l.filterData()}),e.qZA(),e.TgZ(48,"span",32),e._uU(49,"QTY Filter (Less than & Equal to Total QTY value)"),e.qZA()()()(),e.TgZ(50,"div",33),e.NdJ("click",function(){return l.clearFilter()}),e.TgZ(51,"a",34),e._uU(52,"Clear Filter"),e.qZA()()()()()(),e.TgZ(53,"div",35)(54,"table",36)(55,"thead")(56,"tr")(57,"th",37),e.NdJ("click",function(){return l.sort("id")}),e.TgZ(58,"label",38),e.NdJ("click",function(){return l.selectAll(l.initChecked)}),e.TgZ(59,"input",39),e.NdJ("ngModelChange",function(o){return l.allSelected=o})("change",function(){return l.selectAlll()}),e.qZA(),e._UZ(60,"span",40),e.qZA(),e._UZ(61,"i",41),e.qZA(),e.TgZ(62,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(63,"Sr. No. "),e._UZ(64,"i",41),e.qZA(),e.TgZ(65,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(66,"Account"),e._UZ(67,"i",41),e.qZA(),e.TgZ(68,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(69,"Bill Date "),e._UZ(70,"i",41),e.qZA(),e.TgZ(71,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(72,"Challan no. "),e._UZ(73,"i",41),e.qZA(),e.TgZ(74,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(75,"Sale Bill"),e._UZ(76,"i",41),e.qZA(),e.TgZ(77,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(78,"Transporter Account "),e._UZ(79,"i",41),e.qZA(),e.TgZ(80,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(81,"Total QTY"),e._UZ(82,"i",41),e.qZA(),e.TgZ(83,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(84,"Status"),e._UZ(85,"i",41),e.qZA(),e.TgZ(86,"th",37),e.NdJ("click",function(){return l.sort("id")}),e._uU(87,"Action "),e._UZ(88,"i",41),e.qZA()()(),e.YNc(89,O,4,11,"tbody",42),e.YNc(90,I,5,0,"tbody",42),e.qZA(),e.TgZ(91,"div",43),e.YNc(92,R,1,0,"mat-progress-bar",44),e.qZA(),e.TgZ(93,"div",26)(94,"div",45)(95,"div",46),e._uU(96," Show per page "),e.TgZ(97,"select",47,48),e.NdJ("ngModelChange",function(o){return l.itemsPerPage=o})("change",function(){e.CHM(n);const o=e.MAs(98);return e.KtG(l.changePg(o.value))}),e.TgZ(99,"option",49),e._uU(100,"10"),e.qZA(),e.TgZ(101,"option",50),e._uU(102,"20"),e.qZA(),e.TgZ(103,"option",51),e._uU(104,"30"),e.qZA(),e.TgZ(105,"option",52),e._uU(106,"50"),e.qZA(),e.TgZ(107,"option",53),e._uU(108,"100"),e.qZA(),e.TgZ(109,"option",54),e._uU(110,"All"),e.qZA()()()(),e.TgZ(111,"div",55)(112,"div",56)(113,"pagination-controls",57),e.NdJ("pageChange",function(o){return l.p=o}),e.qZA(),e.TgZ(114,"div",58),e._uU(115),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",l.isAdd),e.xp6(15),e.Q6J("ngModel",l.titlee),e.xp6(21),e.Q6J("ngModel",l.date),e.xp6(5),e.Q6J("ngModel",l.selectedAmount),e.xp6(12),e.Q6J("ngModel",l.allSelected),e.xp6(30),e.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==l.filteredData?null:l.filteredData.length)),e.xp6(2),e.Q6J("ngIf",l.loader),e.xp6(5),e.Q6J("ngModel",l.itemsPerPage),e.xp6(18),e.lnq("Showing ",l.itemsPerPage," to ",null==l.filteredData?null:l.filteredData.length," of ",l.p," entries"))},dependencies:[c.mk,c.sg,c.O5,v.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,b.pW,T.LS,T._s,k.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),a})(),canActivate:[s(30597).l],data:{allowedRoles:["view_deliverychallan"]}}];let G=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[v.Bz.forChild(Q),v.Bz]}),a})();var H=s(8468);let W=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[c.uU],imports:[c.ez,G,H.I]}),a})()},30597:(q,D,s)=>{s.d(D,{l:()=>L});var c=s(94650),v=s(89299),A=s(97185),h=s(42917),Z=s(80927);let L=(()=>{class g{constructor(_,e,y,m,C){this.router=_,this.Arout=e,this.toastr=y,this.profileService=m,this.coreService=C}canActivate(_,e){const y=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),y){const m=_.data.allowedRoles;console.log(m,"allowedRoles");const C=y.some(d=>m.includes(d.codename));if(console.log(C),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const b=d?.permission,T=this.profileService.getUserDetails();(!T||T.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(_){return new(_||g)(c.LFG(v.F0),c.LFG(v.gz),c.LFG(A._W),c.LFG(h.J),c.LFG(Z.p))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);