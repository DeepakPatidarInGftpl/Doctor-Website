"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3841],{83841:(z,_,l)=>{l.r(_),l.d(_,{ListCountraVoucherModule:()=>Y});var m=l(36895),p=l(88996),b=l(2454),u=l.n(b),A=l(53583),y=l(12983),L=l.n(y),g=l(80574),x=l(94327),t=l(94650),M=l(71071),V=l(42917),h=l(24006),U=l(73162),f=l(54333),q=l(90455),D=l(54040);function k(i,a){1&i&&(t.TgZ(0,"div",46)(1,"a",47),t._UZ(2,"img",48),t._uU(3,"Add New Countra Voucher "),t.qZA()())}function J(i,a){if(1&i&&(t.TgZ(0,"a",56),t._UZ(1,"img",60),t.qZA()),2&i){const e=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatecountravoucher/",null==e?null:e.id,"")}}function N(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",61),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),r=o.index,s=o.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(r,null==s?null:s.id))}),t._UZ(1,"img",62),t.qZA()}}function S(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),t.NdJ("ngModelChange",function(o){const s=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[s]=o)}),t.qZA(),t._UZ(4,"span",40),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",52)(8,"a",53),t._uU(9),t.qZA()(),t.TgZ(10,"td",54),t._uU(11),t.qZA(),t.TgZ(12,"td",54),t._uU(13),t.qZA(),t.TgZ(14,"td",54),t._uU(15),t.qZA(),t.TgZ(16,"td",54),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"mat-slide-toggle",55),t.NdJ("click",function(){const o=t.CHM(e),r=o.$implicit,s=o.index,c=t.oxw(2);return t.KtG(r.is_active?c.isActive(s,r.id):c.Active(s,r.id))})("ngModelChange",function(o){const s=t.CHM(e).$implicit;return t.KtG(s.is_active=o)}),t.qZA()(),t.TgZ(22,"td")(23,"a",56),t._UZ(24,"img",57),t.qZA(),t.YNc(25,J,2,1,"a",58),t.YNc(26,N,2,0,"a",59),t.qZA()()}if(2&i){const e=a.$implicit,n=a.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1+"."),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",e.id,""),t.xp6(1),t.Oqu(null==e?null:e.countra_voucher_no),t.xp6(2),t.Oqu(null==e||null==e.from_account?null:e.from_account.account_id),t.xp6(2),t.Oqu(null==e||null==e.to_account?null:e.to_account.account_id),t.xp6(2),t.Oqu(null==e?null:e.amount),t.xp6(2),t.Oqu(null==e?null:e.date),t.xp6(2),t.Oqu(null==e?null:e.note),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const w=function(i,a){return{itemsPerPage:i,currentPage:a}};function I(i,a){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,S,27,13,"tr",49),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,w,e.itemsPerPage,e.p)))}}function B(i,a){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),t._uU(4,"Data not available"),t.qZA()()()())}function P(i,a){1&i&&t._UZ(0,"mat-progress-bar",65)}function E(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",66)(2,"div",67),t._uU(3," Show per page "),t.TgZ(4,"select",68),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.itemsPerPage=o)}),t.TgZ(5,"option",69),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",70),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",71),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",72),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",73),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",74),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",75)(18,"div",76)(19,"pagination-controls",77),t.NdJ("pageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.p=o)}),t.qZA(),t.TgZ(20,"div",78),t._uU(21),t.qZA()(),t._uU(22,"s "),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const O=[{path:"",component:(()=>{class i{constructor(e,n){this.transactionService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.deleteCountraVoucher(n).subscribe(r=>{this.delRes=r,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CountraVoucherIsActive(n,"").subscribe(r=>{this.delRes=r,this.delRes.success?(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(e,n){u().fire({title:"Are you sure?",text:"Do you want to Active this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CountraVoucherIsActive(n,"").subscribe(r=>{this.delRes=r,this.delRes.success?(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getCountraVoucher().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"add_countravoucher"==o.codename?this.isAdd=o.codename:"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"change_countravoucher"==o.codename?this.isEdit=o.codename:"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"delete_countravoucher"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>n?.countra_voucher_no.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Countra Voucher",10,10),L()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Countra Voucher No."},{header:"From Account"},{header:"To Account"},{header:"Amount"},{header:"Date"},{header:"Description"},{header:"Is Active"}]}),e.save("countravoucher.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),r=n.querySelectorAll("tbody tr"),s=[];return o.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&s.push(d)}),e.push(s),r.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(C=>{d.push(C.textContent.trim())}),e.push(d)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=g.P6.aoa_to_sheet(e),o=g.P6.book_new();g.P6.book_append_sheet(o,n,"Sheet1");const r=g.cW(o,{bookType:"xlsx",type:"array"}),s=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(s,"countravoucher.xlsx")}printTable(){const e=document.getElementById("mytable"),r=document.querySelector(".titl").outerHTML,s=e.cloneNode(!0),c=s.querySelector("th.thone:nth-child(9)");c&&c.remove();const d=s.querySelector("th.thone:last-child");d&&d.remove(),s.querySelectorAll("tr").forEach(v=>{const T=v.querySelector("td:nth-child(9)");T&&T.remove();const Z=v.querySelector("td:last-child");Z&&Z.remove()});const G=s.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+r.replace("titl","spaced-title")+G,j=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=j}filterData(){let e=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];e=e.filter(o=>new Date(o?.date).toISOString().split("T")[0]===n)}this.selectedAmount&&(e=e.filter(n=>n?.amount<=this.selectedAmount)),this.filteredData=e}clearFilters(){this.selectedAmount=null,this.selectedpaymentTerms=null,this.date=null,this.filterData()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(M.p),t.Y36(V.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-countra-voucher"]],decls:94,vars:9,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Cuntra Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/addcountravoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Countra Voucher LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Countra Voucher"),t.qZA()(),t.YNc(6,k,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(r){return n.titlee=r})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Countra Voucher Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(r){return n.date=r})("change",function(){return n.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Enter Amount"),t.qZA(),t.TgZ(47,"input",31),t.NdJ("ngModelChange",function(r){return n.selectedAmount=r})("keyup",function(){return n.filterData()}),t.qZA(),t.TgZ(48,"span",32),t._uU(49,"Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(50,"div",33),t.NdJ("click",function(){return n.clearFilters()}),t.TgZ(51,"a",34),t._uU(52,"Clear Filter"),t.qZA()()()()()(),t.TgZ(53,"div",35)(54,"table",36)(55,"thead")(56,"tr")(57,"th",37),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(58,"label",38),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(59,"input",39),t.NdJ("ngModelChange",function(r){return n.allSelected=r})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(60,"span",40),t.qZA(),t._UZ(61,"i",41),t.qZA(),t.TgZ(62,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Sr. No."),t._UZ(64,"i",41),t.qZA(),t.TgZ(65,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Countra Voucher No."),t._UZ(67,"i",41),t.qZA(),t.TgZ(68,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(69,"From Account"),t._UZ(70,"i",41),t.qZA(),t.TgZ(71,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(72,"To Account"),t._UZ(73,"i",41),t.qZA(),t.TgZ(74,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(75,"Amount"),t._UZ(76,"i",41),t.qZA(),t.TgZ(77,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(78,"Date"),t._UZ(79,"i",41),t.qZA(),t.TgZ(80,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(81,"Description"),t._UZ(82,"i",41),t.qZA(),t.TgZ(83,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(84,"Is Active"),t._UZ(85,"i",41),t.qZA(),t.TgZ(86,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(87,"Action"),t._UZ(88,"i",41),t.qZA()()(),t.YNc(89,I,4,11,"tbody",42),t.YNc(90,B,5,0,"tbody",42),t.qZA(),t.TgZ(91,"div",43),t.YNc(92,P,1,0,"mat-progress-bar",44),t.qZA(),t.YNc(93,E,23,4,"div",45),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(21),t.Q6J("ngModel",n.date),t.xp6(5),t.Q6J("ngModel",n.selectedAmount),t.xp6(12),t.Q6J("ngModel",n.allSelected),t.xp6(30),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[m.sg,m.O5,p.yS,h.YN,h.Kr,h.Fj,h.wV,h.Wl,h.EJ,h.JJ,h.On,U.pW,f.LS,q.Rr,f._s,D.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[l(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(O),p.Bz]}),i})();var Q=l(8468);let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,H,Q.I]}),i})()}}]);