"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5846],{85846:(V,f,a)=>{a.r(f),a.d(f,{RatingAndReviewModule:()=>z});var p=a(96814),h=a(74408),Z=a(13519),d=a.n(Z),w=a(69846),C=a(33403),y=a.n(C),m=a(11486),x=a(10217),e=a(19212),S=a(2697),U=a(31025),g=a(56223),M=a(58763),q=a(41789),N=a(16007),v=a(76472),J=a(82599),k=a(35202);const D=(s,c,t)=>({"bg-lightgreen":s,"bg-lightred":c,"custom-color":t});function B(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",35)(3,"input",36),e.NdJ("ngModelChange",function(n){const l=e.CHM(t).index,r=e.oxw(2);return e.KtG(r.selectedRows[l]=n)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td")(18,"span",37),e._uU(19),e.qZA()(),e.TgZ(20,"td")(21,"mat-slide-toggle",38),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG("Accept"===i.status||"Reject"===i.status?l.deActivate(i.status,i.id):l.Active(i.status,i.id))}),e.qZA()()()}if(2&s){const t=c.$implicit,o=c.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.Oqu(null==t||null==t.product?null:t.product.title),e.xp6(2),e.Oqu(null==t||null==t.user?null:t.user.username),e.xp6(2),e.Oqu(null==t||null==t.user?null:t.user.username),e.xp6(2),e.Oqu(null==t?null:t.review),e.xp6(2),e.Oqu(null==t?null:t.rating),e.xp6(2),e.Q6J("ngClass",e.kEZ(10,D,"Accept"===(null==t?null:t.status),"Reject"===(null==t?null:t.status),"New"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status),e.xp6(2),e.Q6J("checked","Accept"===t.status)}}const P=(s,c)=>({itemsPerPage:s,currentPage:c});function I(s,c){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,B,22,14,"tr",34),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,P,t.itemsPerPage,t.p)))}}function O(s,c){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",39)(3,"p",40),e._uU(4,"Data not available"),e.qZA()()()())}function j(s,c){1&s&&e._UZ(0,"mat-progress-bar",41)}function E(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"div",42)(1,"div",43)(2,"div",44),e._uU(3," Show per page "),e.TgZ(4,"select",45),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.itemsPerPage=n)}),e.TgZ(5,"option",46),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",47),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",48),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",49),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",50),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",51),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",52)(18,"div",53)(19,"pagination-controls",54),e.NdJ("pageChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.p=n)}),e.qZA(),e.TgZ(20,"div",55),e._uU(21),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}let F=(()=>{class s{constructor(t,o,n,i,l,r){this.websiteService=t,this.QueryService=o,this.fb=n,this.toastr=i,this.router=l,this.cs=r,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.imgUrl="https://pv.greatfuturetechno.com",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,o){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.websiteService.deleteFooter(o).subscribe(i=>{this.delRes=i,this.delRes.success?(d().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.ngOnInit()):(d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(t,1))})})}deActivate(t,o){d().fire({title:"Are you sure?",text:"Do you want to Reject this Rating!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Reject it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.websiteService.updateratingAndReview({status:t},o).subscribe(i=>{this.delRes=i,this.delRes.success&&(d().fire({icon:"error",title:"Reject!",text:this.delRes.error}),this.ngOnInit())},i=>{i.error.error&&(d().fire({icon:"error",title:"Not Reject!",text:i.error.error}),this.ngOnInit())})})}Active(t,o){let n="",i="";"New"===t?(n="Do you want to Accept or Reject this Rating and Review?",i="Accept Confirmation"):(n="Do you want to reject this Rating and Review?",i="Reject Confirmation"),d().fire({title:"Are you sure?",text:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Accept",cancelButtonText:"Reject",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed?this.websiteService.updateratingAndReview({status:"Accept"},o).subscribe(r=>{this.delRes=r,this.delRes.success&&(d().fire({icon:"success",title:"Accepted!",text:"Rating and Review Accepted Sucessfully"}),this.ngOnInit())}):l.dismiss===d().DismissReason.cancel&&this.websiteService.updateratingAndReview({status:"Reject"},o).subscribe(r=>{this.delRes=r,this.delRes.success&&(d().fire({icon:"success",title:"Rejected!",text:"Rating and Review Rejected Sucessfully"}),this.ngOnInit())})})}ngOnInit(){this.websiteService.getratingAndReview().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"product"===n.content_type.app_label&&"ratingandreviewsonproduct"===n.content_type.model&&"add_ratingandreviewsonproduct"==n.codename?this.isAdd=n.codename:"product"===n.content_type.app_label&&"ratingandreviewsonproduct"===n.content_type.model&&"change_ratingandreviewsonproduct"==n.codename&&(this.isEdit=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(t){this.websiteService.deleteAddressStore(t).subscribe(o=>{this.delRes=o,this.delRes.success&&window.location.reload()})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(t=>t.product?.title.match(this.titlee))}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new w.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Rating and Review",10,10),y()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Product Name"},{header:"User Name"},{header:"Name"},{header:"Rating"},{header:"Review"},{header:"Status"},{header:"Is Active"}]}),t.save("rating&review.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),i=o.querySelectorAll("tbody tr"),l=[];return n.querySelectorAll("th").forEach(r=>{const u=r.textContent.trim();"Is Active"!==u&&"Action"!==u&&l.push(u)}),t.push(l),i.forEach(r=>{const u=[];r.querySelectorAll("td").forEach(R=>{u.push(R.textContent.trim())}),t.push(u)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=m.P6.aoa_to_sheet(t),n=m.P6.book_new();m.P6.book_append_sheet(n,o,"Sheet1");const i=m.cW(n,{bookType:"xlsx",type:"array"}),l=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(l,"rating&review.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,l=t.cloneNode(!0),r=l.querySelector("th.thone:nth-child(9)");r&&r.remove();const u=l.querySelector("th.thone:last-child");u&&u.remove(),l.querySelectorAll("tr").forEach(A=>{const b=A.querySelector("td:nth-child(9)");b&&b.remove();const T=A.querySelector("td:last-child");T&&T.remove()});const W=l.outerHTML,G="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+W,$=document.body.innerHTML;document.body.innerHTML=G,window.print(),document.body.innerHTML=$}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(S.K),e.Y36(U._),e.Y36(g.qu),e.Y36(M._W),e.Y36(h.F0),e.Y36(q.J))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-rating-and-review"]],decls:70,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"badges",3,"ngClass"],[3,"checked","click"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Rating and Review"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Rating and Review"),e.qZA()()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),e._UZ(12,"img",9),e.TgZ(13,"span"),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div",14)(19,"label")(20,"input",15),e.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(25,"img",18),e.qZA()(),e.TgZ(26,"li")(27,"a",19),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e.NdJ("click",function(){return n.printTable()}),e._UZ(31,"img",22),e.qZA()()()()(),e.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th",25),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(37,"label",26),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(38,"input",27),e.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(39,"span",28),e.qZA(),e._UZ(40,"i",29),e.qZA(),e.TgZ(41,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(42,"Sr.No."),e._UZ(43,"i",29),e.qZA(),e.TgZ(44,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(45,"Product Name"),e._UZ(46,"i",29),e.qZA(),e.TgZ(47,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"User Name "),e._UZ(49,"i",29),e.qZA(),e.TgZ(50,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Name"),e._UZ(52,"i",29),e.qZA(),e.TgZ(53,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Review "),e._UZ(55,"i",29),e.qZA(),e.TgZ(56,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"Rating"),e._UZ(58,"i",29),e.qZA(),e.TgZ(59,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Status "),e._UZ(61,"i",29),e.qZA(),e.TgZ(62,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Action "),e._UZ(64,"i",29),e.qZA()()(),e.YNc(65,I,4,11,"tbody",30)(66,O,5,0,"tbody",30),e.qZA(),e.TgZ(67,"div",31),e.YNc(68,j,1,0,"mat-progress-bar",32),e.qZA(),e.YNc(69,E,22,4,"div",33),e.qZA()()()),2&o&&(e.xp6(20),e.Q6J("ngModel",n.titlee),e.xp6(18),e.Q6J("ngModel",n.allSelected),e.xp6(27),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[p.mk,p.sg,p.O5,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,N.pW,v.LS,J.Rr,v._s,k.T],styles:[".custom-color[_ngcontent-%COMP%]{background-color:#ff9f43}"]})}return s})();var H=a(1971);const _=JSON.parse(localStorage.getItem("auth")),L=[];_&&_.map(c=>{"product"===c.content_type.app_label&&"ratingandreviewsonproduct"===c.content_type.model&&L.push(c.codename)});const Y=[{path:"",component:F,canActivate:[H.l],data:{allowedRoles:["add_ratingandreviewsonproduct","change_ratingandreviewsonproduct","delete_ratingandreviewsonproduct","view_ratingandreviewsonproduct"]}}];let Q=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(Y),h.Bz]})}return s})();var K=a(16047);let z=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[p.ez,Q,K.I]})}return s})()}}]);