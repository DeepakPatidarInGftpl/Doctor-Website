"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[76067],{76067:(U,P,s)=>{s.r(P),s.d(P,{ListProductionVoucherModule:()=>Y});var g=s(36895),b=s(4392),D=s(2454),d=s.n(D),A=s(96166),x=s(12983),p=s.n(x),C=s(80574),_=s(94327),e=s(94650),Z=s(80927),f=s(42917),u=s(24006),v=s(73162),h=s(54333),T=s(90455),y=s(54040);function w(n,c){1&n&&(e.TgZ(0,"div",44)(1,"a",45),e._UZ(2,"img",46),e._uU(3,"Add New Production Voucher "),e.qZA()())}function J(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"a",56),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),r=i.index,l=i.$implicit,a=e.oxw(2);return e.KtG(a.confirmText(r,null==l?null:l.id))}),e._UZ(1,"img",57),e.qZA()}}function N(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",48)(3,"input",49),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.selectedRows[l]=i)}),e.qZA(),e._UZ(4,"span",38),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",50)(8,"a",51),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"mat-slide-toggle",52),e.NdJ("click",function(){const i=e.CHM(t),r=i.$implicit,l=i.index,a=e.oxw(2);return e.KtG(r.is_active?a.isActive(l,r.id):a.Active(l,r.id))})("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.is_active=i)}),e.qZA()(),e.TgZ(14,"td")(15,"a",53),e._UZ(16,"img",54),e.qZA(),e.YNc(17,J,2,0,"a",55),e.qZA()()}if(2&n){const t=c.$implicit,o=c.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.MGl("routerLink","//product/detail-production-voucher/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.material_consumption_no),e.xp6(2),e.Oqu(null==t?null:t.material_consumption_date),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//product/detail-production-voucher/",null==t?null:t.id,""),e.xp6(2),e.Q6J("ngIf",i.isDelete)}}const k=function(n,c){return{itemsPerPage:n,currentPage:c}};function E(n,c){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,N,18,8,"tr",47),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,k,t.itemsPerPage,t.p)))}}function I(n,c){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",58)(3,"p",59),e._uU(4,"Data not available"),e.qZA()()()())}function B(n,c){1&n&&e._UZ(0,"mat-progress-bar",60)}function R(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",61)(2,"div",62),e._uU(3," Show per page "),e.TgZ(4,"select",63,64),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.itemsPerPage=i)})("change",function(){e.CHM(t);const i=e.MAs(5),r=e.oxw();return e.KtG(r.changePg(i.value))}),e.TgZ(6,"option",65),e._uU(7,"10"),e.qZA(),e.TgZ(8,"option",66),e._uU(9,"20"),e.qZA(),e.TgZ(10,"option",67),e._uU(11,"30"),e.qZA(),e.TgZ(12,"option",68),e._uU(13,"50"),e.qZA(),e.TgZ(14,"option",69),e._uU(15,"100"),e.qZA(),e.TgZ(16,"option",70),e._uU(17,"All"),e.qZA()()()(),e.TgZ(18,"div",71)(19,"div",72)(20,"pagination-controls",73),e.NdJ("pageChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.p=i)}),e.qZA(),e.TgZ(21,"div",74),e._uU(22),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries")}}const O=[{path:"",component:(()=>{class n{constructor(t,o){this.coreService=t,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,o){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.coreService.deleteProductionVoucher(o).subscribe(r=>{this.delRes=r,this.delRes.isSuccess?(d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(t,1),this.ngOnInit()):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,o){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this Production Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.coreService.ProductionVoucherIsActive(o,"").subscribe(r=>{this.delRes=r,this.delRes.isSuccess?(d().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,o){d().fire({title:"Are you sure?",text:"Do you want to Active this Production Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.coreService.ProductionVoucherIsActive(o,"").subscribe(r=>{this.delRes=r,this.delRes.isSuccess?(d().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.coreService.getProductionVoucher().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"transactions"===i.content_type.app_label&&"journalvoucher"===i.content_type.model&&"add_journalvoucher"==i.codename?this.isAdd=i.codename:"transactions"===i.content_type.app_label&&"journalvoucher"===i.content_type.model&&"change_journalvoucher"==i.codename?this.isEdit=i.codename:"transactions"===i.content_type.app_label&&"journalvoucher"===i.content_type.model&&"delete_journalvoucher"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>o?.material_consumption_no.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new A.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Production Voucher",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Account"},{header:"Journal Voucher No."},{header:"Date"},{header:"Total Debit"},{header:"Total Credit"},{header:"Description"},{header:"Is Active"}]}),t.save("productionVoucher.pdf")}generatePDFAgain(){const t=new A.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Production Voucher",82,10),t.text("",10,15),p()(t,{head:[["#","Production Voucher No.","Date"]],body:this.tableData.map((i,r)=>[r+1,i?.material_consumption_no,i.material_consumption_date]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("production_voucher.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),i=o.querySelector("thead tr"),r=o.querySelectorAll("tbody tr"),l=[];return i.querySelectorAll("th").forEach(a=>{const m=a.textContent.trim();"Is Active"!==m&&"Action"!==m&&l.push(m)}),t.push(l),r.forEach(a=>{const m=[];a.querySelectorAll("td").forEach(L=>{m.push(L.textContent.trim())}),t.push(m)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=C.P6.aoa_to_sheet(t),i=C.P6.book_new();C.P6.book_append_sheet(i,o,"Sheet1");const r=C.cW(i,{bookType:"xlsx",type:"array"}),l=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(l,"productionVoucher.xlsx")}printTable(){const t=document.getElementById("mytable"),r=document.querySelector(".titl").outerHTML,l=t.cloneNode(!0),a=l.querySelector("th.thone:nth-child(1)");a&&a.remove();const m=l.querySelector("th.thone:last-child");m&&m.remove(),l.querySelectorAll("tr").forEach(M=>{const S=M.querySelector("td:nth-child(1)");S&&S.remove();const V=M.querySelector("td:last-child");V&&V.remove()});const K=l.outerHTML,Q="<style>.spaced-title { margin-top: 80px; }</style>"+r.replace("titl","spaced-title")+K,j=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=Q,window.print(),document.body.innerHTML=j}filterData(){let t=this.tableData.slice();if(this.date){const o=new Date(this.date).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.material_consumption_date).toISOString().split("T")[0]===o)}console.log(t),this.filteredData=t}clearFilters(){this.date=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.p),e.Y36(f.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-production-voucher"]],decls:75,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//product/add-production-voucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1 confirm-text",3,"click",4,"ngIf"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Production Voucher LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Production Voucher"),e.qZA()(),e.YNc(6,w,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(r){return o.titlee=r})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return o.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return o.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Production Voucher Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(r){return o.date=r})("change",function(){return o.filterData()}),e.qZA()()()(),e.TgZ(43,"div",31),e.NdJ("click",function(){return o.clearFilters()}),e.TgZ(44,"a",32),e._uU(45,"Clear Filter"),e.qZA()()()()()(),e.TgZ(46,"div",33)(47,"table",34)(48,"thead")(49,"tr")(50,"th",35),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(51,"label",36),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(52,"input",37),e.NdJ("ngModelChange",function(r){return o.allSelected=r})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(53,"span",38),e.qZA(),e._UZ(54,"i",39),e.qZA(),e.TgZ(55,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(56,"Sr. No."),e._UZ(57,"i",39),e.qZA(),e.TgZ(58,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(59,"Production Voucher No."),e._UZ(60,"i",39),e.qZA(),e.TgZ(61,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(62,"Date"),e._UZ(63,"i",39),e.qZA(),e.TgZ(64,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(65,"Is Active"),e._UZ(66,"i",39),e.qZA(),e.TgZ(67,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(68,"Action"),e._UZ(69,"i",39),e.qZA()()(),e.YNc(70,E,4,11,"tbody",40),e.YNc(71,I,5,0,"tbody",40),e.qZA(),e.TgZ(72,"div",41),e.YNc(73,B,1,0,"mat-progress-bar",42),e.qZA(),e.YNc(74,R,23,4,"div",43),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.isAdd),e.xp6(15),e.Q6J("ngModel",o.titlee),e.xp6(21),e.Q6J("ngModel",o.date),e.xp6(10),e.Q6J("ngModel",o.allSelected),e.xp6(18),e.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==o.filteredData?null:o.filteredData.length)&&!o.loader),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(1),e.Q6J("ngIf",!o.loader))},dependencies:[g.sg,g.O5,b.yS,u.YN,u.Kr,u.Fj,u.Wl,u.EJ,u.JJ,u.On,v.pW,h.LS,T.Rr,h._s,y.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_productionvoucher"]}}];let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.Bz.forChild(O),b.Bz]}),n})();var H=s(8468);let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,G,H.I]}),n})()},30597:(U,P,s)=>{s.d(P,{l:()=>x});var g=s(94650),b=s(4392),D=s(97185),d=s(42917),A=s(80927);let x=(()=>{class p{constructor(_,e,Z,f,u){this.router=_,this.Arout=e,this.toastr=Z,this.profileService=f,this.coreService=u}canActivate(_,e){const Z=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),Z){const f=_.data.allowedRoles,u=Z.some(h=>f.includes(h.codename));let v=this.coreService.profileData$.value;if(v&&v.username){this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const h=v?.permission,T=this.profileService.getUserDetails();(!T||T.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())}else this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(h);const T=h?.permission,y=this.profileService.getUserDetails();(!y||y.length!==T.length)&&(this.profileService.setUserPermission(T),window.location.reload())});if(u)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(_){return new(_||p)(g.LFG(b.F0),g.LFG(b.gz),g.LFG(D._W),g.LFG(d.J),g.LFG(A.p))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);