"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3107],{93107:(k,b,s)=>{s.r(b),s.d(b,{ListAttendanceModule:()=>j});var _=s(36895),f=s(89299),y=s(35226),u=s.n(y),x=s(96166),L=s(12983),g=s.n(L),A=s(80574),h=s(94327),t=s(94650),T=s(72266),p=s(42917),d=s(24006),v=s(73162),Z=s(54333),C=s(54040);function q(o,a){1&o&&(t.TgZ(0,"div",36)(1,"a",37),t._UZ(2,"img",38),t._uU(3,"Add Attendance "),t.qZA()())}function J(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"th",26),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(1,"Action"),t._UZ(2,"i",30),t.qZA()}}function w(o,a){if(1&o&&(t.TgZ(0,"a",48),t._UZ(1,"img",49),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.MGl("routerLink","//hrm/update-attendance/",e.id,"")}}function N(o,a){if(1&o&&(t.ynx(0),t.YNc(1,w,2,1,"a",47),t.BQk()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function E(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"a",51),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2),l=i.index,c=i.$implicit,r=t.oxw(2);return t.KtG(r.confirmText(l,c.id))}),t._UZ(1,"img",52),t.qZA()}}function P(o,a){if(1&o&&(t.ynx(0),t.YNc(1,E,2,0,"a",50),t.BQk()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isDelete)}}function I(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",40)(3,"input",41),t.NdJ("ngModelChange",function(i){const c=t.CHM(e).index,r=t.oxw(2);return t.KtG(r.selectedRows[c]=i)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",42)(8,"a",43),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td",44),t.NdJ("click",function(){const i=t.CHM(e),l=i.index,c=i.$implicit,r=t.oxw(2);return t.KtG(r.deActivate(l,c.id))}),t._uU(25),t.qZA(),t.TgZ(26,"td")(27,"a",45),t._UZ(28,"img",46),t.qZA(),t.YNc(29,N,2,1,"ng-container",32),t.YNc(30,P,2,1,"ng-container",32),t.qZA()()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//hrm/detail-attendance/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.employee?null:e.employee.name),t.xp6(2),t.Oqu(null==e?null:e.date),t.xp6(2),t.Oqu(null==e?null:e.total_day_of_month),t.xp6(2),t.Oqu(null==e?null:e.total_persent_day),t.xp6(2),t.Oqu(null==e?null:e.wages),t.xp6(2),t.Oqu(null==e?null:e.incentive),t.xp6(2),t.Oqu(null==e?null:e.base_salary),t.xp6(2),t.Oqu(null==e?null:e.total_salary),t.xp6(2),t.hij(" ",null==e?null:e.status," "),t.xp6(2),t.MGl("routerLink","//hrm/detail-attendance/",e.id,""),t.xp6(2),t.Q6J("ngIf","Draft"===(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Draft"===(null==e?null:e.status))}}const B=function(o,a){return{itemsPerPage:o,currentPage:a}};function R(o,a){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,I,31,15,"tr",39),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function O(o,a){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",53)(3,"p",54),t._uU(4,"Data not available"),t.qZA()()()())}function F(o,a){1&o&&t._UZ(0,"mat-progress-bar",55)}function G(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",56)(1,"div",57)(2,"div",58),t._uU(3," Show per page "),t.TgZ(4,"select",59,60),t.NdJ("ngModelChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=i)})("change",function(){t.CHM(e);const i=t.MAs(5),l=t.oxw();return t.KtG(l.changePg(i.value))}),t.TgZ(6,"option",61),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",62),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",63),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",64),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",65),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",66),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",67)(19,"div",68)(20,"pagination-controls",69),t.NdJ("pageChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.p=i)}),t.qZA(),t.TgZ(21,"div",70),t._uU(22),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.tableData?null:e.tableData.length," of ",e.p," entries")}}const Q=[{path:"",component:(()=>{class o{constructor(e,n){this.hrmService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(e,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.hrmService.deleteTarget(n).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,n){u().fire({title:"Are you sure?",text:"Do you want to Change Status to Reviewed!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Change it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.hrmService.AttendanceIsActive(n).subscribe(l=>{this.delRes=l,this.delRes.success?(u().fire({icon:"success",title:this.delRes.status,text:this.delRes.status}),this.ngOnInit()):u().fire({icon:"error",title:"Not Changed!",text:this.delRes.status})})})}Active(e,n){u().fire({title:"Are you sure?",text:"Do you want to Change Status to Reviewed!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.hrmService.AttendanceIsActive(n).subscribe(l=>{this.delRes=l,this.delRes.success?(u().fire({icon:"success",title:"Changed!",text:this.delRes.msg}),this.ngOnInit()):u().fire({icon:"error",title:"Not Changed!",text:this.delRes.status})})})}ngOnInit(){this.hrmService.getAttendance().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"hrm"===i.content_type.app_label&&"attendance"===i.content_type.model&&"add_attendance"==i.codename?this.isAdd=i.codename:"hrm"===i.content_type.app_label&&"attendance"===i.content_type.model&&"change_attendance"==i.codename?this.isEdit=i.codename:"hrm"===i.content_type.app_label&&"attendance"===i.content_type.model&&"delete_attendance"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n?.slab_title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new x.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax Slab List",10,10),g()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Employee"},{header:"Date"},{header:"Total Day of Month"},{header:"Total Present Day"},{header:"Is Active"}]}),e.save("attendance.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),c=[];return i.querySelectorAll("th").forEach(r=>{const m=r.textContent.trim();"Is Active"!==m&&"Action"!==m&&c.push(m)}),e.push(c),l.forEach(r=>{const m=[];r.querySelectorAll("td").forEach(U=>{m.push(U.textContent.trim())}),e.push(m)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=A.P6.aoa_to_sheet(e),i=A.P6.book_new();A.P6.book_append_sheet(i,n,"Sheet1");const l=A.cW(i,{bookType:"xlsx",type:"array"}),c=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(c,"attendance.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,c=e.cloneNode(!0),r=c.querySelector("th.thone:nth-child(8)");r&&r.remove();const m=c.querySelector("th.thone:last-child");m&&m.remove(),c.querySelectorAll("tr").forEach(M=>{const D=M.querySelector("td:nth-child(8)");D&&D.remove();const S=M.querySelector("td:last-child");S&&S.remove()});const z=c.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+z,V=document.body.innerHTML;document.body.innerHTML=$,window.print(),document.body.innerHTML=V}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.z),t.Y36(p.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-attendance"]],decls:78,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Employee",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//hrm/add-attendance",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"click"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["class","me-2 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Attendance list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Attendance list"),t.qZA()(),t.YNc(6,q,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"Sr.No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Employee"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"Date"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Total Day of Month"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Total Present Day"),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Wages"),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"Incentive"),t._UZ(62,"i",30),t.qZA(),t.TgZ(63,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(64,"Base Salary"),t._UZ(65,"i",30),t.qZA(),t.TgZ(66,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(67,"Total Salary"),t._UZ(68,"i",30),t.qZA(),t.TgZ(69,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Status"),t._UZ(71,"i",30),t.qZA(),t.YNc(72,J,3,0,"th",31),t.qZA()(),t.YNc(73,R,4,11,"tbody",32),t.YNc(74,O,5,0,"tbody",32),t.qZA(),t.TgZ(75,"div",33),t.YNc(76,F,1,0,"mat-progress-bar",34),t.qZA(),t.YNc(77,G,23,4,"div",35),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(33),t.Q6J("ngIf",n.isEdit||n.isDelete),t.xp6(1),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[_.sg,_.O5,f.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,v.pW,Z.LS,Z._s,C.T]}),o})(),canActivate:[s(30597).l],data:{allowedRoles:["view_attendance"]}}];let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(Q),f.Bz]}),o})();var W=s(8468);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.ez,K,W.I]}),o})()},30597:(k,b,s)=>{s.d(b,{l:()=>L});var _=s(94650),f=s(89299),y=s(97185),u=s(42917),x=s(80927);let L=(()=>{class g{constructor(h,t,T,p,d){this.router=h,this.Arout=t,this.toastr=T,this.profileService=p,this.coreService=d}canActivate(h,t){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),T){const p=h.data.allowedRoles;console.log(p,"allowedRoles");const d=T.some(v=>p.includes(v.codename));if(console.log(d),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const Z=v?.permission,C=this.profileService.getUserDetails();(!C||C.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(h){return new(h||g)(_.LFG(f.F0),_.LFG(f.gz),_.LFG(y._W),_.LFG(u.J),_.LFG(x.p))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);