"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8172],{78172:($,h,s)=>{s.r(h),s.d(h,{MaterialOutwardListModule:()=>j});var m=s(36895),_=s(88996),b=s(2454),g=s.n(b),C=s(53583),w=s(12983),A=s.n(w),p=s(80574),y=s(94327),t=s(94650),O=s(72170),L=s(42917),u=s(24006),S=s(73162),f=s(54333),U=s(90455),q=s(54040);function x(n,o){1&n&&(t.TgZ(0,"div",63)(1,"a",64),t._UZ(2,"img",65),t._uU(3,"Add Sales Material Outward "),t.qZA()())}function D(n,o){if(1&n&&(t.TgZ(0,"a",73),t._UZ(1,"img",77),t.qZA()),2&n){const e=t.oxw().$implicit;t.MGl("routerLink","//sales/updatesalesMaterialOutward/",e.id,"")}}function k(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",78),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(),l=a.index,r=a.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(l,r.id))}),t._UZ(1,"img",79),t.qZA()}}const N=function(n,o,e){return{"bg-lightgreen":n,"bg-lightred":o,"bg-lightyellow":e}};function J(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",67)(3,"input",68),t.NdJ("ngModelChange",function(a){const r=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[r]=a)}),t.qZA(),t._UZ(4,"span",45),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",69)(8,"a",70),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",71),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"mat-slide-toggle",72),t.NdJ("click",function(){const a=t.CHM(e),l=a.$implicit,r=a.index,d=t.oxw(2);return t.KtG(l.is_active?d.isActive(r,l.id):d.Active(r,l.id))})("ngModelChange",function(a){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=a)}),t.qZA()(),t.TgZ(25,"td")(26,"a",73),t._UZ(27,"img",74),t.qZA(),t.YNc(28,D,2,1,"a",75),t.YNc(29,k,2,0,"a",76),t.qZA()()}if(2&n){const e=o.$implicit,i=o.index,a=t.oxw(2);t.xp6(3),t.Q6J("ngModel",a.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.customer?null:e.customer.name),t.xp6(2),t.Oqu(null==e?null:e.mo_date),t.xp6(2),t.Oqu(null==e?null:e.refund_status),t.xp6(2),t.Oqu(null==e?null:e.voucher_number),t.xp6(2),t.Oqu(null==e?null:e.total_qty),t.xp6(2),t.Oqu(null==e?null:e.note),t.xp6(2),t.Q6J("ngClass",t.kEZ(15,N,"Received"===(null==e?null:e.status),"Pending"===(null==e?null:e.status),"Draft"===(null==e?null:e.status))),t.xp6(1),t.Oqu(null==e?null:e.status),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",e.id,""),t.xp6(2),t.Q6J("ngIf",a.isEdit),t.xp6(1),t.Q6J("ngIf",a.isDelete)}}const R=function(n,o){return{itemsPerPage:n,currentPage:o}};function B(n,o){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,J,30,19,"tr",66),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,R,e.itemsPerPage,e.p)))}}function I(n,o){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",80)(3,"p",81),t._uU(4,"Data not available"),t.qZA()()()())}function P(n,o){1&n&&t._UZ(0,"mat-progress-bar",82)}const Q=[{path:"",component:(()=>{class n{constructor(e,i){this.saleService=e,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,i){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.saleService.deleteSalesMaterialOutward(i).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,i){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(e,i){g().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getSalesMaterialOutward().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(a=>{"sale"===a.content_type.app_label&&"materialoutward"===a.content_type.model&&"add_materialoutward"==a.codename?this.isAdd=a.codename:"sale"===a.content_type.app_label&&"materialoutward"===a.content_type.model&&"change_materialoutward"==a.codename?this.isEdit=a.codename:"sale"===a.content_type.app_label&&"materialoutward"===a.content_type.model&&"delete_materialoutward"==a.codename&&(this.isDelete=a.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(i=>{const a=i?.customer?.name.toLocaleLowerCase(),l=i?.voucher_number.toLocaleLowerCase();return!!a.match(e)||!!l.match(e)})}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new C.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Material Outward List",10,10),A()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name"},{header:"Material Outward Date "},{header:"Refund Status"},{header:"Voucher Number"},{header:"Total Qty"},{header:"Note"},{header:"Status"},{header:"Is Active"}]}),e.save("materialoutward.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),a=i.querySelector("thead tr"),l=i.querySelectorAll("tbody tr"),r=[];return a.querySelectorAll("th").forEach(d=>{const c=d.textContent.trim();"Is Active"!==c&&"Action"!==c&&r.push(c)}),e.push(r),l.forEach(d=>{const c=[];d.querySelectorAll("td").forEach(Z=>{c.push(Z.textContent.trim())}),e.push(c)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=p.P6.aoa_to_sheet(e),a=p.P6.book_new();p.P6.book_append_sheet(a,i,"Sheet1");const l=p.cW(a,{bookType:"xlsx",type:"array"}),r=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,y.saveAs)(r,"materialoutward.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),d=r.querySelector("th.thone:nth-child(10)");d&&d.remove();const c=r.querySelector("th.thone:last-child");c&&c.remove(),r.querySelectorAll("tr").forEach(T=>{const M=T.querySelector("td:nth-child(10)");M&&M.remove();const v=T.querySelector("td:last-child");v&&v.remove()});const G=r.outerHTML,V="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+G,z=document.body.innerHTML;document.body.innerHTML=V,window.print(),document.body.innerHTML=z}filterData(){let e=this.tableData.slice();if(this.date){const i=new Date(this.date).toISOString().split("T")[0];e=e.filter(a=>new Date(a?.mo_date).toISOString().split("T")[0]===i)}this.selectRefundStatus&&(e=e.filter(i=>i?.refund_status===this.selectRefundStatus)),this.selectedAmount&&(e=e.filter(i=>i?.total_qty<=this.selectedAmount)),this.statusFilter&&(e=e.filter(i=>i?.status==this.statusFilter)),this.filteredData=e}clearFilter(){this.date=null,this.selectRefundStatus=null,this.selectedAmount=null,this.statusFilter=null,this.filterData()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.M),t.Y36(L.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-material-outward-list"]],decls:131,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User Name/Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Refundable"],["value","Non Refundable"],["value","Scrap"],["type","number","placeholder","Enter Qty",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addSalesMaterialOutward",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Material Outward list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Material Outward"),t.qZA()(),t.YNc(6,x,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Material Outward Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(l){return i.date=l})("ngModelChange",function(){return i.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Select Refund Status"),t.qZA(),t.TgZ(47,"select",31),t.NdJ("ngModelChange",function(l){return i.selectRefundStatus=l})("change",function(){return i.filterData()}),t.TgZ(48,"option",32),t._uU(49,"Select Refund Status"),t.qZA(),t.TgZ(50,"option",33),t._uU(51,"Refundable"),t.qZA(),t.TgZ(52,"option",34),t._uU(53,"Non Refundable"),t.qZA(),t.TgZ(54,"option",35),t._uU(55,"Scrap"),t.qZA()()()(),t.TgZ(56,"div",28)(57,"div",29)(58,"label"),t._uU(59,"Enter Total Qty"),t.qZA(),t.TgZ(60,"input",36),t.NdJ("ngModelChange",function(l){return i.selectedAmount=l})("keyup",function(){return i.filterData()}),t.qZA(),t.TgZ(61,"span",37),t._uU(62,"Qty Filter (Less than & Equal to Total qty value)"),t.qZA()()()(),t.TgZ(63,"div",38),t.NdJ("click",function(){return i.clearFilter()}),t.TgZ(64,"a",39),t._uU(65,"Clear Filter"),t.qZA()()()()()(),t.TgZ(66,"div",40)(67,"table",41)(68,"thead")(69,"tr")(70,"th",42),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(71,"label",43),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(72,"input",44),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(73,"span",45),t.qZA(),t._UZ(74,"i",46),t.qZA(),t.TgZ(75,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(76,"Sr. No. "),t._UZ(77,"i",46),t.qZA(),t.TgZ(78,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(79,"User Name "),t._UZ(80,"i",46),t.qZA(),t.TgZ(81,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(82,"Material Outward Date "),t._UZ(83,"i",46),t.qZA(),t.TgZ(84,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(85,"Refund Status"),t._UZ(86,"i",46),t.qZA(),t.TgZ(87,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(88,"Voucher Number "),t._UZ(89,"i",46),t.qZA(),t.TgZ(90,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(91,"Total Qty"),t._UZ(92,"i",46),t.qZA(),t.TgZ(93,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(94,"Note"),t._UZ(95,"i",46),t.qZA(),t.TgZ(96,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(97,"Status"),t._UZ(98,"i",46),t.qZA(),t.TgZ(99,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(100,"Is Active "),t._UZ(101,"i",46),t.qZA(),t.TgZ(102,"th",42),t.NdJ("click",function(){return i.sort("id")}),t._uU(103,"Action "),t._UZ(104,"i",46),t.qZA()()(),t.YNc(105,B,4,11,"tbody",47),t.YNc(106,I,5,0,"tbody",47),t.qZA(),t.TgZ(107,"div",48),t.YNc(108,P,1,0,"mat-progress-bar",49),t.qZA(),t.TgZ(109,"div",26)(110,"div",50)(111,"div",51),t._uU(112," Show per page "),t.TgZ(113,"select",52),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l}),t.TgZ(114,"option",53),t._uU(115,"10"),t.qZA(),t.TgZ(116,"option",54),t._uU(117,"20"),t.qZA(),t.TgZ(118,"option",55),t._uU(119,"30"),t.qZA(),t.TgZ(120,"option",56),t._uU(121,"50"),t.qZA(),t.TgZ(122,"option",57),t._uU(123,"100"),t.qZA(),t.TgZ(124,"option",58),t._uU(125,"All"),t.qZA()()()(),t.TgZ(126,"div",59)(127,"div",60)(128,"pagination-controls",61),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(129,"div",62),t._uU(130),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(21),t.Q6J("ngModel",i.date),t.xp6(5),t.Q6J("ngModel",i.selectRefundStatus),t.xp6(13),t.Q6J("ngModel",i.selectedAmount),t.xp6(12),t.Q6J("ngModel",i.allSelected),t.xp6(33),t.Q6J("ngIf",(null==i.filteredData?null:i.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.filteredData?null:i.filteredData.length)),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"))},dependencies:[m.mk,m.sg,m.O5,_.yS,u.YN,u.Kr,u.Fj,u.wV,u.Wl,u.EJ,u.JJ,u.On,S.pW,f.LS,U.Rr,f._s,q.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_materialoutward"]}}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(Q),_.Bz]}),n})();var Y=s(8468);let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,H,Y.I]}),n})()}}]);