"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5767],{65767:(J,C,a)=>{a.r(C),a.d(C,{ListTargetModule:()=>Y});var g=a(36895),T=a(4392),L=a(35226),u=a.n(L),A=a(96166),x=a(12983),m=a.n(x),f=a(80574),_=a(94327),t=a(94650),v=a(72266),h=a(42917),d=a(24006),b=a(73162),Z=a(54333),y=a(90455),w=a(54040);function E(o,l){1&o&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add Target "),t.qZA()())}function P(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(n){const r=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[r]=n)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",41)(8,"a",42),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td")(17,"mat-slide-toggle",43),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,r=n.index,c=t.oxw(2);return t.KtG(s.is_active?c.isActive(r,s.id):c.Active(r,s.id))})("ngModelChange",function(n){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=n)}),t.qZA()(),t.TgZ(18,"td")(19,"a",44),t._UZ(20,"img",45),t.qZA(),t.TgZ(21,"a",44),t._UZ(22,"img",46),t.qZA(),t.TgZ(23,"a",47),t.NdJ("click",function(){const n=t.CHM(e),s=n.index,r=n.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(s,r.id))}),t._UZ(24,"img",48),t.qZA()()()}if(2&o){const e=l.$implicit,i=l.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//hrm/detail-target/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.department?null:e.department.title),t.xp6(2),t.Oqu(null==e?null:e.start_date),t.xp6(2),t.Oqu(null==e?null:e.end_date),t.xp6(2),t.Oqu(null==e?null:e.target_value),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//hrm/detail-target/",e.id,""),t.xp6(2),t.MGl("routerLink","//hrm/update-target/",e.id,"")}}const k=function(o,l){return{itemsPerPage:o,currentPage:l}};function q(o,l){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,P,25,10,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function B(o,l){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",49)(3,"p",50),t._uU(4,"Data not available"),t.qZA()()()())}function N(o,l){1&o&&t._UZ(0,"mat-progress-bar",51)}function I(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",52)(1,"div",53)(2,"div",54),t._uU(3," Show per page "),t.TgZ(4,"select",55,56),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.itemsPerPage=n)})("change",function(){t.CHM(e);const n=t.MAs(5),s=t.oxw();return t.KtG(s.changePg(n.value))}),t.TgZ(6,"option",57),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",58),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",59),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",60),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",61),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",62),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",63)(19,"div",64)(20,"pagination-controls",65),t.NdJ("pageChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.p=n)}),t.qZA(),t.TgZ(21,"div",66),t._uU(22),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.tableData?null:e.tableData.length," of ",e.p," entries")}}const F=[{path:"",component:(()=>{class o{constructor(e,i){this.hrmService=e,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!0}confirmText(e,i){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.hrmService.deleteTarget(i).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,i){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Target!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.hrmService.TargetIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Target Is Deactivate Successfully."}))})}Active(e,i){u().fire({title:"Are you sure?",text:"Do you want to Active this Target!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.hrmService.TargetIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Target Is Active Successfully."}))})}ngOnInit(){this.hrmService.getTarget().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"hrm"===n.content_type.app_label&&"target"===n.content_type.model&&"add_target"==n.codename?this.isAdd=n.codename:"hrm"===n.content_type.app_label&&"target"===n.content_type.model&&"change_target"==n.codename?this.isEdit=n.codename:"hrm"===n.content_type.app_label&&"target"===n.content_type.model&&"delete_target"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i?.department?.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax Slab List",10,10),m()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Department"},{header:"Start Date"},{header:"End Date"},{header:"Target Value"},{header:"Is Active"}]}),e.save("target.pdf")}generatePDFAgain(){const e=new A.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Tax Slab List ",82,10),e.text("",10,15),m()(e,{head:[["#","Department"," Start Date","End Date","Target Value"]],body:this.tableData.map((n,s)=>[s+1,n.department?.title,n.start_date,n.end_date,n.target_value]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("target .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),n=i.querySelector("thead tr"),s=i.querySelectorAll("tbody tr"),r=[];return n.querySelectorAll("th").forEach(c=>{const p=c.textContent.trim();"Is Active"!==p&&"Action"!==p&&r.push(p)}),e.push(r),s.forEach(c=>{const p=[];c.querySelectorAll("td").forEach(D=>{p.push(D.textContent.trim())}),e.push(p)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=f.P6.aoa_to_sheet(e),n=f.P6.book_new();f.P6.book_append_sheet(n,i,"Sheet1");const s=f.cW(n,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(r,"target.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),c=r.querySelector("th.thone:nth-child(7)");c&&c.remove();const p=r.querySelector("th.thone:last-child");p&&p.remove(),r.querySelectorAll("tr").forEach(M=>{const S=M.querySelector("td:nth-child(7)");S&&S.remove();const U=M.querySelector("td:last-child");U&&U.remove()});const K=r.outerHTML,Q="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+K,W=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=Q,window.print(),document.body.innerHTML=W}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.z),t.Y36(h.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-target"]],decls:68,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Department",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//hrm/add-target",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Target list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Target list"),t.qZA()(),t.YNc(6,E,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(s){return i.titlee=s})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(s){return i.allSelected=s})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Sr.No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Department"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Start Date"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"End Date"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Target Value"),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(58,"Is Active "),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(61,"Action "),t._UZ(62,"i",30),t.qZA()()(),t.YNc(63,q,4,11,"tbody",31),t.YNc(64,B,5,0,"tbody",31),t.qZA(),t.TgZ(65,"div",32),t.YNc(66,N,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(67,I,23,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(24),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(1),t.Q6J("ngIf",!i.loader))},dependencies:[g.sg,g.O5,T.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,b.pW,Z.LS,y.Rr,Z._s,w.T]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["view_target"]}}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(F),T.Bz]}),o})();var H=a(8468);let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,G,H.I]}),o})()},30597:(J,C,a)=>{a.d(C,{l:()=>x});var g=a(94650),T=a(4392),L=a(97185),u=a(42917),A=a(80927);let x=(()=>{class m{constructor(_,t,v,h,d){this.router=_,this.Arout=t,this.toastr=v,this.profileService=h,this.coreService=d}canActivate(_,t){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),v){const h=_.data.allowedRoles;console.log(h,"allowedRoles");const d=v.some(b=>h.includes(b.codename));if(console.log(d),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const Z=b?.permission,y=this.profileService.getUserDetails();(!y||y.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(_){return new(_||m)(g.LFG(T.F0),g.LFG(T.gz),g.LFG(L._W),g.LFG(u.J),g.LFG(A.p))},m.\u0275prov=g.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);