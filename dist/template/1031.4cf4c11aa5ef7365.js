"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1031],{31031:(se,f,r)=>{r.r(f),r.d(f,{UserModule:()=>X});var g=r(36895),_=r(88996),y=r(2454),u=r.n(y),A=r(53583),x=r(12983),M=r.n(x),m=r(80574),q=r(94327),e=r(94650),S=r(25062),D=r(72326),J=r(42917),p=r(24006),N=r(73162),T=r(54333),k=r(90455),B=r(54040);function w(o,l){1&o&&(e.TgZ(0,"div",62)(1,"a",63),e._UZ(2,"img",64),e._uU(3,"Add User "),e.qZA()())}function I(o,l){if(1&o&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function L(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"mat-slide-toggle",73),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),i=s.$implicit,a=s.index,c=e.oxw(2);return e.KtG(i.is_active?c.isActive(a,i.id):c.Active(a,i.id))})("ngModelChange",function(s){e.CHM(t);const i=e.oxw().$implicit;return e.KtG(i.is_active=s)}),e.qZA()()}if(2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.is_active)}}function E(o,l){1&o&&(e.TgZ(0,"td",74)(1,"strong",75),e._uU(2,"SUPERUSER"),e.qZA()())}function F(o,l){if(1&o&&(e.TgZ(0,"a",78),e._UZ(1,"img",79),e.qZA()),2&o){const t=e.oxw(2).$implicit;e.MGl("routerLink","//settings/updateUser/",t.id,"")}}function P(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"a",80),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2),i=s.index,a=s.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(i,a.id))}),e._UZ(1,"img",81),e.qZA()}}function R(o,l){if(1&o&&(e.TgZ(0,"td"),e.YNc(1,F,2,1,"a",76),e.YNc(2,P,2,0,"a",77),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isEdit),e.xp6(1),e.Q6J("ngIf",t.isDelete)}}const O=function(o){return{"orange-row":o}};function Q(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"tr",67)(1,"td")(2,"label",68)(3,"input",69),e.NdJ("ngModelChange",function(s){const a=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[a]=s)}),e.qZA(),e._UZ(4,"span",44),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",70)(8,"a",71),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.YNc(20,L,2,1,"td",46),e.YNc(21,E,3,0,"td",72),e.YNc(22,R,3,2,"td",46),e.qZA()}if(2&o){const t=l.$implicit,n=l.index,s=e.oxw(2);e.Q6J("ngClass",e.VKq(12,O,(null==s.userDetails?null:s.userDetails.username)===(null==t?null:t.username))),e.xp6(3),e.Q6J("ngModel",s.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Oqu(t.username),e.xp6(2),e.Oqu(t.phone_number),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.user_type),e.xp6(2),e.Oqu(null==t||null==t.branch?null:t.branch.title),e.xp6(1),e.Q6J("ngIf",!0!==(null==t?null:t.is_superuser)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.is_superuser),e.xp6(1),e.Q6J("ngIf",!0!==(null==t?null:t.is_superuser))}}const Y=function(o,l){return{itemsPerPage:o,currentPage:l}};function H(o,l){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,Q,23,14,"tr",66),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.isAscending),e.WLB(8,Y,t.itemsPerPage,t.p)))}}function j(o,l){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),e._uU(4,"Data not available"),e.qZA()()()())}function $(o,l){1&o&&e._UZ(0,"mat-progress-bar",84)}let K=(()=>{class o{constructor(t,n,s){this.contactService=t,this.QueryService=n,this.profileService=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedAccountType="",this.selectedUserType="",this.selectedBranch="",this.isAscending=!0,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.contactService.deleteUser(n).subscribe(i=>{this.delRes=i,"User Deleted successfully"==this.delRes.msg?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.contactService.UserIsActive(n,"").subscribe(i=>{this.delRes=i,"User Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"User Is Deactivate Successfully."}))})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.contactService.SupplierIsActive(n,"").subscribe(i=>{this.delRes=i,"User Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"User Is Active Successfully."}))})}ngOnInit(){this.contactService.getUser().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.profileService.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(s=>{"master"===s?.content_type.app_label&&"user"===s?.content_type.model&&"add_user"==s?.codename?(this.isAdd=s?.codename,console.log(this.isAdd)):"master"===s?.content_type.app_label&&"user"===s?.content_type.model&&"change_user"==s?.codename?(this.isEdit=s?.codename,console.log(this.isEdit)):"master"===s?.content_type.app_label&&"user"===s?.content_type.model&&"delete_user"==s?.codename&&(this.isDelete=s?.codename,console.log(this.isDelete))})}),this.getBranch()}getBranch(){this.contactService.getBranch().subscribe(t=>{console.log(t),this.branchList=t})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.contactService.deleteSupplier(t).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const s=n?.name.toLocaleLowerCase(),i=n?.username.toLocaleLowerCase();return!!s.match(t)||!!i.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}filterData(){let t=this.tableData.slice();this.selectedUserType&&(t=t.filter(n=>n?.user_type===this.selectedUserType)),this.selectedBranch&&(t=t.filter(n=>n?.branch?.title===this.selectedBranch)),this.filteredData=t}clearFilter(){this.selectedUserType=null,this.selectedBranch=null,this.filterData()}generatePDF(){const t=new A.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("User List",10,10),M()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:" Name"},{header:"User Name"},{header:"Mobile Number"},{header:"Email"},{header:"User Type"},{header:"Branch"},{header:"Is Active"}]}),t.save("user.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),s=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),a=[];return s.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&a.push(d)}),t.push(a),i.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(Z=>{d.push(Z.textContent.trim())}),t.push(d)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=m.P6.aoa_to_sheet(t),s=m.P6.book_new();m.P6.book_append_sheet(s,n,"Sheet1");const i=m.cW(s,{bookType:"xlsx",type:"array"}),a=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,q.saveAs)(a,"user.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,a=t.cloneNode(!0),c=a.querySelector("th.thone:nth-child(9)");c&&c.remove();const d=a.querySelector("th.thone:last-child");d&&d.remove(),a.querySelectorAll("tr").forEach(v=>{const b=v.querySelector("td:nth-child(9)");b&&b.remove();const C=v.querySelector("td:last-child");C&&C.remove()});const ee=a.outerHTML,te="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+ee,ne=document.body.innerHTML;document.body.innerHTML=te,window.print(),document.body.innerHTML=ne}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.y),e.Y36(D._),e.Y36(J.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user"]],decls:126,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name/Username",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg","col-sm-3","col-12"],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Employee"],["value","Customer"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","10%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//settings/addUser",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],["colspan","5",4,"ngIf"],[3,"ngModel","click","ngModelChange"],["colspan","5"],[1,"center-text",2,"color","#FF9F43","padding-left","30px"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","8"],[1,"center-text"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"User list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search User "),e.qZA()(),e.YNc(6,w,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"User Type"),e.qZA(),e.TgZ(42,"select",30),e.NdJ("ngModelChange",function(i){return n.selectedUserType=i})("change",function(){return n.filterData()}),e.TgZ(43,"option",31),e._uU(44,"Select User Type"),e.qZA(),e.TgZ(45,"option",32),e._uU(46,"Supplier"),e.qZA(),e.TgZ(47,"option",33),e._uU(48,"Vendor"),e.qZA(),e.TgZ(49,"option",34),e._uU(50,"Employee"),e.qZA(),e.TgZ(51,"option",35),e._uU(52,"Customer"),e.qZA()()()(),e.TgZ(53,"div",28)(54,"div",29)(55,"label"),e._uU(56,"Branch"),e.qZA(),e.TgZ(57,"select",30),e.NdJ("ngModelChange",function(i){return n.selectedBranch=i})("change",function(){return n.filterData()}),e.TgZ(58,"option",31),e._uU(59,"Select Branch"),e.qZA(),e.YNc(60,I,2,2,"option",36),e.qZA()()()(),e.TgZ(61,"div",37),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(62,"a",38),e._uU(63,"Clear Filter"),e.qZA()()()()()(),e.TgZ(64,"div",39)(65,"table",40)(66,"thead")(67,"tr")(68,"th",41),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(69,"label",42),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(70,"input",43),e.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(71,"span",44),e.qZA(),e._UZ(72,"i",45),e.qZA(),e.TgZ(73,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(74,"Sr.No."),e._UZ(75,"i",45),e.qZA(),e.TgZ(76,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(77,"Name "),e._UZ(78,"i",45),e.qZA(),e.TgZ(79,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(80,"User Name "),e._UZ(81,"i",45),e.qZA(),e.TgZ(82,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(83,"Mobile Number "),e._UZ(84,"i",45),e.qZA(),e.TgZ(85,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(86,"Email"),e._UZ(87,"i",45),e.qZA(),e.TgZ(88,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(89,"User Type "),e._UZ(90,"i",45),e.qZA(),e.TgZ(91,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(92,"Branch "),e._UZ(93,"i",45),e.qZA(),e.TgZ(94,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(95,"Is Active "),e._UZ(96,"i",45),e.qZA(),e.TgZ(97,"th",41),e.NdJ("click",function(){return n.sort("id")}),e._uU(98,"Action "),e._UZ(99,"i",45),e.qZA()()(),e.YNc(100,H,4,11,"tbody",46),e.YNc(101,j,5,0,"tbody",46),e.qZA(),e.TgZ(102,"div",47),e.YNc(103,$,1,0,"mat-progress-bar",48),e.qZA(),e.TgZ(104,"div",26)(105,"div",49)(106,"div",50),e._uU(107," Show per page "),e.TgZ(108,"select",51),e.NdJ("ngModelChange",function(i){return n.itemsPerPage=i}),e.TgZ(109,"option",52),e._uU(110,"10"),e.qZA(),e.TgZ(111,"option",53),e._uU(112,"20"),e.qZA(),e.TgZ(113,"option",54),e._uU(114,"30"),e.qZA(),e.TgZ(115,"option",55),e._uU(116,"50"),e.qZA(),e.TgZ(117,"option",56),e._uU(118,"100"),e.qZA(),e.TgZ(119,"option",57),e._uU(120,"All"),e.qZA()()()(),e.TgZ(121,"div",58)(122,"div",59)(123,"pagination-controls",60),e.NdJ("pageChange",function(i){return n.p=i}),e.qZA(),e.TgZ(124,"div",61),e._uU(125),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.selectedUserType),e.xp6(15),e.Q6J("ngModel",n.selectedBranch),e.xp6(3),e.Q6J("ngForOf",n.branchList),e.xp6(10),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(17),e.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[g.mk,g.sg,g.O5,_.yS,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,N.pW,T.LS,k.Rr,T._s,B.T],styles:[".orange-row[_ngcontent-%COMP%]{color:#ff9f43}"]}),o})();var V=r(30597);const h=JSON.parse(localStorage.getItem("auth"));let U;h&&h.permission&&h.permission.map(l=>{"master"===l.content_type.app_label&&"user"===l.content_type.model&&"view_user"==l.codename&&(U=l.codename,console.log(U))});const z=[{path:"",component:K,canActivate:[V.l],data:{allowedRoles:["view_user"]}}];let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(z),_.Bz]}),o})();var W=r(8468);let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,G,W.I]}),o})()}}]);