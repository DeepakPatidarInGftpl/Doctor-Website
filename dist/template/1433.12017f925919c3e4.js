"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1433],{41433:(J,C,r)=>{r.r(C),r.d(C,{EmployeeModule:()=>$});var p=r(36895),f=r(89299),A=r(2454),m=r.n(A),E=r(96166),M=r(12983),g=r.n(M),y=r(80574),h=r(94327),e=r(94650),T=r(25062),_=r(72326),v=r(42917),d=r(24006),b=r(73162),Z=r(54333),N=r(90455),k=r(54040);function L(i,a){1&i&&(e.TgZ(0,"div",62)(1,"a",63),e._UZ(2,"img",64),e._uU(3,"Add Employee "),e.qZA()())}function P(i,a){if(1&i&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.s9C("value",t.name),e.xp6(1),e.hij(" ",t.name,"")}}function R(i,a){if(1&i&&(e.TgZ(0,"a",72),e._UZ(1,"img",76),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateEmployee/",t.id,"")}}function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",77),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(),n=l.index,s=l.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(n,s.id))}),e._UZ(1,"img",78),e.qZA()}}function B(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",67)(3,"input",68),e.NdJ("ngModelChange",function(l){const s=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[s]=l)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",69)(8,"a",70),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td")(25,"mat-slide-toggle",71),e.NdJ("click",function(){const l=e.CHM(t),n=l.$implicit,s=l.index,c=e.oxw(2);return e.KtG(n.is_active?c.isActive(s,n.id):c.Active(s,n.id))})("ngModelChange",function(l){const s=e.CHM(t).$implicit;return e.KtG(s.is_active=l)}),e.qZA()(),e.TgZ(26,"td")(27,"a",72),e._UZ(28,"img",73),e.qZA(),e.YNc(29,R,2,1,"a",74),e.YNc(30,w,2,0,"a",75),e.qZA()()}if(2&i){const t=a.$implicit,o=a.index,l=e.oxw(2);e.xp6(3),e.Q6J("ngModel",l.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.MGl("routerLink","//contacts/employeeDetails/",t.id,""),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.mobile_no),e.xp6(2),e.Oqu(null==t?null:t.employee_type),e.xp6(2),e.Oqu(null==t?null:t.email),e.xp6(2),e.Oqu((null==t?null:t.opening_balance_type)+(null!=(null==t?null:t.opening_balance)?" : "+(null==t?null:t.opening_balance):"")),e.xp6(2),e.Oqu(null==t?null:t.date_of_joining),e.xp6(2),e.Oqu(t.pan_no),e.xp6(2),e.Oqu(null==t||null==t.userid||null==t.userid.role?null:t.userid.role.name),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//contacts/employeeDetails/",t.id,""),e.xp6(2),e.Q6J("ngIf",l.isEdit),e.xp6(1),e.Q6J("ngIf",l.isDelete)}}const O=function(i,a){return{itemsPerPage:i,currentPage:a}};function I(i,a){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,B,31,15,"tr",66),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,O,t.itemsPerPage,t.p)))}}function F(i,a){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",79)(3,"p",80),e._uU(4,"Data not available"),e.qZA()()()())}function G(i,a){1&i&&e._UZ(0,"mat-progress-bar",81)}let Q=(()=>{class i{constructor(t,o,l){this.contactService=t,this.QueryService=o,this.cs=l,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.roleType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(t,o){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.contactService.deleteEmployee(o).subscribe(n=>{this.delRes=n,this.delRes.success?(m().fire({icon:"success",title:"Deleted !",text:this.delRes.msg}),this.tableData.splice(t,1),this.ngOnInit()):m().fire({icon:"error",title:"Not Deleted !",text:this.delRes.error})})})}isActive(t,o){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&(this.contactService.EmployeeIsActive(o,"").subscribe(n=>{this.delRes=n,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Employee is Deactivate Successfully."}))})}Active(t,o){m().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&(this.contactService.EmployeeIsActive(o,"").subscribe(n=>{this.delRes=n,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.contactService.getEmployee().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(l=>{"master"===l.content_type.app_label&&"employee"===l.content_type.model&&"add_employee"==l.codename?this.isAdd=l.codename:"master"===l.content_type.app_label&&"employee"===l.content_type.model&&"change_employee"==l.codename?this.isEdit=l.codename:"master"===l.content_type.app_label&&"employee"===l.content_type.model&&"delete_employee"==l.codename&&(this.isDelete=l.codename)})}),this.getGroup()}getGroup(){this.contactService.getPermissionGroup().subscribe(t=>{this.groupList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(t){this.contactService.deleteSupplier(t).subscribe(o=>{this.delRes=o})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>o.name.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new E.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Employee List",10,10),g()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Email"},{header:"Mobile Number"},{header:"Opening Balance"},{header:"Commision"},{header:"PanCard"},{header:"User Role"},{header:"Is Active"}]}),t.save("employee.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),l=o.querySelector("thead tr"),n=o.querySelectorAll("tbody tr"),s=[];return l.querySelectorAll("th").forEach(c=>{const u=c.textContent.trim();"Is Active"!==u&&"Action"!==u&&s.push(u)}),t.push(s),n.forEach(c=>{const u=[];c.querySelectorAll("td").forEach(D=>{u.push(D.textContent.trim())}),t.push(u)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=y.P6.aoa_to_sheet(t),l=y.P6.book_new();y.P6.book_append_sheet(l,o,"Sheet1");const n=y.cW(l,{bookType:"xlsx",type:"array"}),s=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(s,"employee.xlsx")}printTable(){const t=document.getElementById("mytable"),n=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),c=s.querySelector("th.thone:nth-child(10)");c&&c.remove();const u=s.querySelector("th.thone:last-child");u&&u.remove(),s.querySelectorAll("tr").forEach(S=>{const q=S.querySelector("td:nth-child(10)");q&&q.remove();const x=S.querySelector("td:last-child");x&&x.remove()});const z=s.outerHTML,V="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+z,X=document.body.innerHTML;document.body.innerHTML=V,window.print(),document.body.innerHTML=X}filterData(){let t=this.tableData.slice();if(this.roleType&&(t=t.filter(o=>o?.userid?.role?.name===this.roleType)),this.selectedCompany){const o=this.selectedCompany.toLowerCase();t=t.filter(l=>l?.mobile_no?.toString().toLowerCase().includes(o))}this.selectCredit&&(t=t.filter(o=>o?.opening_balance_type===this.selectCredit)),this.filteredData=t}clearFilter(){this.roleType=null,this.selectedCompany=null,this.selectCredit=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.filteredData?.length)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.y),e.Y36(_._),e.Y36(v.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-employee"]],decls:134,vars:14,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","search","placeholder","Search Mobile No.","maxlength","10",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["value","Cr"],["value","Dr"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addEmployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,o){if(1&t){const l=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,L,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return o.titlee=s})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return o.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return o.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Mobile Number"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(s){return o.selectedCompany=s})("ngModelChange",function(){return o.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Role Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(s){return o.roleType=s})("change",function(){return o.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Role Type"),e.qZA(),e.YNc(50,P,2,2,"option",33),e.qZA()()(),e.TgZ(51,"div",28)(52,"div",29)(53,"label"),e._uU(54,"Opening Balance Type"),e.qZA(),e.TgZ(55,"select",31),e.NdJ("ngModelChange",function(s){return o.selectCredit=s})("change",function(){return o.filterData()}),e.TgZ(56,"option",32),e._uU(57,"Opening Balance Type"),e.qZA(),e.TgZ(58,"option",34),e._uU(59,"Cr"),e.qZA(),e.TgZ(60,"option",35),e._uU(61,"Dr"),e.qZA()()()()(),e.TgZ(62,"div",36),e.NdJ("click",function(){return o.clearFilter()}),e.TgZ(63,"a",37),e._uU(64,"Clear Filter"),e.qZA()()()()()(),e.TgZ(65,"div",38)(66,"table",39)(67,"thead")(68,"tr")(69,"th",40),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(70,"label",41),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(71,"input",42),e.NdJ("ngModelChange",function(s){return o.allSelected=s})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(72,"span",43),e.qZA(),e._UZ(73,"i",44),e.qZA(),e.TgZ(74,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(75,"Sr. No."),e._UZ(76,"i",44),e.qZA(),e.TgZ(77,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(78,"Name "),e._UZ(79,"i",44),e.qZA(),e.TgZ(80,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(81,"Mobile Number "),e._UZ(82,"i",44),e.qZA(),e.TgZ(83,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(84,"Employee Type"),e._UZ(85,"i",44),e.qZA(),e.TgZ(86,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(87,"Email"),e._UZ(88,"i",44),e.qZA(),e.TgZ(89,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(90,"Opening Balance "),e._UZ(91,"i",44),e.qZA(),e.TgZ(92,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(93,"Joining "),e._UZ(94,"i",44),e.qZA(),e.TgZ(95,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(96,"PanCard "),e._UZ(97,"i",44),e.qZA(),e.TgZ(98,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(99,"User Role"),e._UZ(100,"i",44),e.qZA(),e.TgZ(101,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(102,"Is Active "),e._UZ(103,"i",44),e.qZA(),e.TgZ(104,"th",40),e.NdJ("click",function(){return o.sort("id")}),e._uU(105,"Action "),e._UZ(106,"i",44),e.qZA()()(),e.YNc(107,I,4,11,"tbody",45),e.YNc(108,F,5,0,"tbody",45),e.qZA(),e.TgZ(109,"div",46),e.YNc(110,G,1,0,"mat-progress-bar",47),e.qZA(),e.TgZ(111,"div",26)(112,"div",48)(113,"div",49),e._uU(114," Show per page "),e.TgZ(115,"select",50,51),e.NdJ("ngModelChange",function(s){return o.itemsPerPage=s})("change",function(){e.CHM(l);const s=e.MAs(116);return e.KtG(o.changePg(s.value))}),e.TgZ(117,"option",52),e._uU(118,"10"),e.qZA(),e.TgZ(119,"option",53),e._uU(120,"20"),e.qZA(),e.TgZ(121,"option",54),e._uU(122,"30"),e.qZA(),e.TgZ(123,"option",55),e._uU(124,"50"),e.qZA(),e.TgZ(125,"option",56),e._uU(126,"100"),e.qZA(),e.TgZ(127,"option",57),e._uU(128,"All"),e.qZA()()()(),e.TgZ(129,"div",58)(130,"div",59)(131,"pagination-controls",60),e.NdJ("pageChange",function(s){return o.p=s}),e.qZA(),e.TgZ(132,"div",61),e._uU(133),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",o.isAdd),e.xp6(15),e.Q6J("ngModel",o.titlee),e.xp6(21),e.Q6J("ngModel",o.selectedCompany),e.xp6(5),e.Q6J("ngModel",o.roleType),e.xp6(3),e.Q6J("ngForOf",o.groupList),e.xp6(5),e.Q6J("ngModel",o.selectCredit),e.xp6(16),e.Q6J("ngModel",o.allSelected),e.xp6(36),e.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==o.filteredData?null:o.filteredData.length)),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(5),e.Q6J("ngModel",o.itemsPerPage),e.xp6(18),e.lnq("Showing ",o.itemsPerPage," to ",null==o.filteredData?null:o.filteredData.length," of ",o.p," entries"))},dependencies:[p.sg,p.O5,f.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.nD,d.On,b.pW,Z.LS,N.Rr,Z._s,k.T]}),i})();var H=r(30597);const U=JSON.parse(localStorage.getItem("auth"));let Y;U&&U.map(a=>{"master"===a.content_type.app_label&&"employee"===a.content_type.model&&"view_employee"==a.codename&&(Y=a.codename)});const K=[{path:"",component:Q,canActivate:[H.l],data:{allowedRoles:["view_employee"]}}];let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(K),f.Bz]}),i})();var W=r(8468);let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,j,W.I]}),i})()},30597:(J,C,r)=>{r.d(C,{l:()=>M});var p=r(94650),f=r(89299),A=r(97185),m=r(42917),E=r(80927);let M=(()=>{class g{constructor(h,e,T,_,v){this.router=h,this.Arout=e,this.toastr=T,this.profileService=_,this.coreService=v}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),T){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const v=T.some(d=>_.includes(d.codename));if(console.log(v),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const b=d?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(h){return new(h||g)(p.LFG(f.F0),p.LFG(f.gz),p.LFG(A._W),p.LFG(m.J),p.LFG(E.p))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);