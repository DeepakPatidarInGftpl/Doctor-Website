"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4558],{64558:(q,Z,a)=>{a.r(Z),a.d(Z,{DealerListModule:()=>j});var u=a(36895),f=a(89299),A=a(2454),m=a.n(A),b=a(96166),L=a(12983),g=a.n(L),v=a(80574),h=a(94327),e=a(94650),T=a(25062),_=a(72326),C=a(42917),d=a(24006),y=a(73162),D=a(54333),J=a(90455),k=a(54040);function P(o,r){1&o&&(e.TgZ(0,"div",61)(1,"a",62),e._UZ(2,"img",63),e._uU(3,"Add Dealer "),e.qZA()())}function B(o,r){if(1&o&&(e.TgZ(0,"a",70),e._UZ(1,"img",74),e.qZA()),2&o){const t=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateDealer/",t.id,"")}}function E(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"a",75),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),l=i.index,s=i.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(l,s.id))}),e._UZ(1,"img",76),e.qZA()}}function I(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",65)(3,"input",66),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[s]=i)}),e.qZA(),e._UZ(4,"span",42),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",67)(8,"a",68),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td")(23,"mat-slide-toggle",69),e.NdJ("click",function(){const i=e.CHM(t),l=i.$implicit,s=i.index,c=e.oxw(2);return e.KtG(l.is_active?c.isActive(s,l.id):c.Active(s,l.id))})("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.is_active=i)}),e.qZA()(),e.TgZ(24,"td")(25,"a",70),e._UZ(26,"img",71),e.qZA(),e.YNc(27,B,2,1,"a",72),e.YNc(28,E,2,0,"a",73),e.qZA()()}if(2&o){const t=r.$implicit,n=r.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//contacts/detailDealer/",t.id,""),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.company_name),e.xp6(2),e.Oqu(t.mobile_no),e.xp6(2),e.Oqu(t.gstin),e.xp6(2),e.Oqu(t.pan_no),e.xp6(2),e.Oqu((null==t?null:t.opening_balance_type)+(null!=(null==t?null:t.opening_balance)?" : "+(null==t?null:t.opening_balance):"")),e.xp6(2),e.Oqu(null==t?null:t.membership),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//contacts/detailDealer/",t.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const w=function(o,r){return{itemsPerPage:o,currentPage:r}};function O(o,r){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,I,29,14,"tr",64),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,w,t.itemsPerPage,t.p)))}}function R(o,r){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",77)(3,"p",78),e._uU(4,"Data not available"),e.qZA()()()())}function F(o,r){1&o&&e._UZ(0,"mat-progress-bar",79)}let G=(()=>{class o{constructor(t,n,i){this.contactService=t,this.QueryService=n,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(t,n){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.contactService.deleteDealer(n).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this Dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.DealerIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Dealer is Deactivate Successfully."}))})}Active(t,n){m().fire({title:"Are you sure?",text:"Do you want to Active this Dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.DealerIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Dealer is Active Successfully."}))})}ngOnInit(){this.contactService.getDealer().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"add_dealer"==i.codename?this.isAdd=i.codename:"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"change_dealer"==i.codename?this.isEdit=i.codename:"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"delete_dealer"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.contactService.deleteSupplier(t).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const i=n.name.toLocaleLowerCase(),l=n.company_name.toLocaleLowerCase();return!!i.match(t)||!!l.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new b.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Dealer List",10,10),g()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Company Name"},{header:"Mobile Number"},{header:"Opening Balance"},{header:"GSTIN"},{header:"PanCard"},{header:"Membership"},{header:"Is Active"}]}),t.save("dealer.pdf")}generatePDFAgain(){const t=new b.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Dealer List",82,10),t.text("",10,15),g()(t,{head:[["#","Name ","Company Name ","Mobile Number","GSTIN","PanCard","Opening Balance","Membership"]],body:this.tableData.map((i,l)=>[l+1,i.name,i.company_name,i.mobile_no,i.gstin,i.pan_no,i?.opening_balance_type+(null!=i?.opening_balance?" : "+i?.opening_balance:""),i.membership]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("dealer.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),s=[];return i.querySelectorAll("th").forEach(c=>{const p=c.textContent.trim();"Is Active"!==p&&"Action"!==p&&s.push(p)}),t.push(s),l.forEach(c=>{const p=[];c.querySelectorAll("td").forEach(U=>{p.push(U.textContent.trim())}),t.push(p)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=v.P6.aoa_to_sheet(t),i=v.P6.book_new();v.P6.book_append_sheet(i,n,"Sheet1");const l=v.cW(i,{bookType:"xlsx",type:"array"}),s=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(s,"dealer.xlsx")}printTable(){const t=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),c=s.querySelector("th.thone:nth-child(10)");c&&c.remove();const p=s.querySelector("th.thone:last-child");p&&p.remove(),s.querySelectorAll("tr").forEach(S=>{const x=S.querySelector("td:nth-child(10)");x&&x.remove();const N=S.querySelector("td:last-child");N&&N.remove()});const z=s.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+z,V=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=$,window.print(),document.body.innerHTML=V}filterData(){let t=this.tableData.slice();if(this.selectedCompany){const n=this.selectedCompany.toLowerCase();t=t.filter(i=>i?.company_name.toLowerCase().includes(n))}this.selectCredit&&(t=t.filter(n=>n?.opening_balance_type===this.selectCredit)),this.filteredData=t}clearFilter(){this.selectCredit=null,this.selectedCompany=null,this.selectCredit=null,this.filterData()}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.y),e.Y36(_._),e.Y36(C.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dealer-list"]],decls:123,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","search","placeholder","Search Company",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Cr"],["value","Dr"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addDealer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Dealer list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Dealer"),e.qZA()(),e.YNc(6,P,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Company Name"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(s){return n.selectedCompany=s})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Opening Balance Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(s){return n.selectCredit=s})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Opening Balance Type"),e.qZA(),e.TgZ(50,"option",33),e._uU(51,"Cr"),e.qZA(),e.TgZ(52,"option",34),e._uU(53,"Dr"),e.qZA()()()()(),e.TgZ(54,"div",35),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(55,"a",36),e._uU(56,"Clear Filter"),e.qZA()()()()()(),e.TgZ(57,"div",37)(58,"table",38)(59,"thead")(60,"tr")(61,"th",39),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(62,"label",40),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(63,"input",41),e.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(64,"span",42),e.qZA(),e._UZ(65,"i",43),e.qZA(),e.TgZ(66,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(67,"Sr. No. "),e._UZ(68,"i",43),e.qZA(),e.TgZ(69,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(70,"Name "),e._UZ(71,"i",43),e.qZA(),e.TgZ(72,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(73,"Company Name "),e._UZ(74,"i",43),e.qZA(),e.TgZ(75,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(76,"Mobile Number "),e._UZ(77,"i",43),e.qZA(),e.TgZ(78,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(79,"GSTIN "),e._UZ(80,"i",43),e.qZA(),e.TgZ(81,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(82,"PanCard "),e._UZ(83,"i",43),e.qZA(),e.TgZ(84,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(85,"Opening Balance"),e._UZ(86,"i",43),e.qZA(),e.TgZ(87,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(88,"Membership"),e._UZ(89,"i",43),e.qZA(),e.TgZ(90,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Is Active "),e._UZ(92,"i",43),e.qZA(),e.TgZ(93,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(94,"Action "),e._UZ(95,"i",43),e.qZA()()(),e.YNc(96,O,4,11,"tbody",44),e.YNc(97,R,5,0,"tbody",44),e.qZA(),e.TgZ(98,"div",45),e.YNc(99,F,1,0,"mat-progress-bar",46),e.qZA(),e.TgZ(100,"div",26)(101,"div",47)(102,"div",48),e._uU(103," Show per page "),e.TgZ(104,"select",49,50),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s})("change",function(){e.CHM(i);const s=e.MAs(105);return e.KtG(n.changePg(s.value))}),e.TgZ(106,"option",51),e._uU(107,"10"),e.qZA(),e.TgZ(108,"option",52),e._uU(109,"20"),e.qZA(),e.TgZ(110,"option",53),e._uU(111,"30"),e.qZA(),e.TgZ(112,"option",54),e._uU(113,"50"),e.qZA(),e.TgZ(114,"option",55),e._uU(115,"100"),e.qZA(),e.TgZ(116,"option",56),e._uU(117,"All"),e.qZA()()()(),e.TgZ(118,"div",57)(119,"div",58)(120,"pagination-controls",59),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(121,"div",60),e._uU(122),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.selectedCompany),e.xp6(5),e.Q6J("ngModel",n.selectCredit),e.xp6(16),e.Q6J("ngModel",n.allSelected),e.xp6(33),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries"))},dependencies:[u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,y.pW,D.LS,J.Rr,D._s,k.T]}),o})();var H=a(30597);const M=JSON.parse(localStorage.getItem("auth"));let Y;M&&M.map(r=>{"master"===r.content_type.app_label&&"dealer"===r.content_type.model&&"view_dealer"==r.codename&&(Y=r.codename)});const Q=[{path:"",component:G,canActivate:[H.l],data:{allowedRoles:["view_dealer"]}}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.Bz.forChild(Q),f.Bz]}),o})();var W=a(8468);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,K,W.I]}),o})()},30597:(q,Z,a)=>{a.d(Z,{l:()=>L});var u=a(94650),f=a(89299),A=a(97185),m=a(42917),b=a(80927);let L=(()=>{class g{constructor(h,e,T,_,C){this.router=h,this.Arout=e,this.toastr=T,this.profileService=_,this.coreService=C}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),T){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const C=T.some(d=>_.includes(d.codename));if(console.log(C),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const y=d?.permission,D=this.profileService.getUserDetails();(!D||D.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(h){return new(h||g)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(A._W),u.LFG(m.J),u.LFG(b.p))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);