"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[211],{70211:(P,b,l)=>{l.r(b),l.d(b,{RatingAndReviewModule:()=>W});var g=l(36895),_=l(4392),C=l(35226),u=l.n(C),T=l(96166),y=l(12983),p=l.n(y),f=l(80574),v=l(94327),e=l(94650),R=l(92559),m=l(72326),d=l(24006),A=l(97185),w=l(42917),Z=l(73162),x=l(54333),J=l(90455),q=l(54040);const E=function(s,a,t){return{"bg-lightgreen":s,"bg-lightred":a,"custom-color":t}};function B(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",35)(3,"input",36),e.NdJ("ngModelChange",function(i){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=i)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td")(18,"span",37),e._uU(19),e.qZA()(),e.TgZ(20,"td")(21,"mat-slide-toggle",38),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG("Accept"===o.status||"Reject"===o.status?r.deActivate(o.status,o.id):r.Active(o.status,o.id))}),e.qZA()()()}if(2&s){const t=a.$implicit,n=a.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(null==t||null==t.product?null:t.product.title),e.xp6(2),e.Oqu(null==t||null==t.user?null:t.user.username),e.xp6(2),e.Oqu(null==t||null==t.user?null:t.user.username),e.xp6(2),e.Oqu(null==t?null:t.review),e.xp6(2),e.Oqu(null==t?null:t.rating),e.xp6(2),e.Q6J("ngClass",e.kEZ(10,E,"Accept"===(null==t?null:t.status),"Reject"===(null==t?null:t.status),"New"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status),e.xp6(2),e.Q6J("checked","Accept"===t.status)}}const k=function(s,a){return{itemsPerPage:s,currentPage:a}};function O(s,a){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,B,22,14,"tr",34),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,k,t.itemsPerPage,t.p)))}}function I(s,a){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",39)(3,"p",40),e._uU(4,"Data not available"),e.qZA()()()())}function F(s,a){1&s&&e._UZ(0,"mat-progress-bar",41)}function L(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",42)(1,"div",43)(2,"div",44),e._uU(3," Show per page "),e.TgZ(4,"select",45,46),e.NdJ("ngModelChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.itemsPerPage=i)})("change",function(){e.CHM(t);const i=e.MAs(5),o=e.oxw();return e.KtG(o.changePg(i.value))}),e.TgZ(6,"option",47),e._uU(7,"10"),e.qZA(),e.TgZ(8,"option",48),e._uU(9,"20"),e.qZA(),e.TgZ(10,"option",49),e._uU(11,"30"),e.qZA(),e.TgZ(12,"option",50),e._uU(13,"50"),e.qZA(),e.TgZ(14,"option",51),e._uU(15,"100"),e.qZA(),e.TgZ(16,"option",52),e._uU(17,"All"),e.qZA()()()(),e.TgZ(18,"div",53)(19,"div",54)(20,"pagination-controls",55),e.NdJ("pageChange",function(i){e.CHM(t);const o=e.oxw();return e.KtG(o.p=i)}),e.qZA(),e.TgZ(21,"div",56),e._uU(22),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries")}}let j=(()=>{class s{constructor(t,n,i,o,r,c){this.websiteService=t,this.QueryService=n,this.fb=i,this.toastr=o,this.router=r,this.cs=c,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.imgUrl="https://pv.greatfuturetechno.com",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.websiteService.deleteFooter(n).subscribe(o=>{this.delRes=o,this.delRes.success?(u().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.ngOnInit()):(u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(t,1))})})}deActivate(t,n){u().fire({title:"Are you sure?",text:"Do you want to Reject this Rating!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Reject it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.websiteService.updateratingAndReview({status:t},n).subscribe(o=>{this.delRes=o,this.delRes.success&&(u().fire({icon:"error",title:"Reject!",text:this.delRes.error}),this.ngOnInit())},o=>{o.error.error&&(u().fire({icon:"error",title:"Not Reject!",text:o.error.error}),this.ngOnInit())})})}Active(t,n){let i="",o="";"New"===t?(i="Do you want to Accept or Reject this Rating and Review?",o="Accept Confirmation"):(i="Do you want to reject this Rating and Review?",o="Reject Confirmation"),u().fire({title:"Are you sure?",text:i,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Accept",cancelButtonText:"Reject",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed?this.websiteService.updateratingAndReview({status:"Accept"},n).subscribe(c=>{this.delRes=c,this.delRes.success&&(u().fire({icon:"success",title:"Accepted!",text:"Rating and Review Accepted Sucessfully"}),this.ngOnInit())}):r.dismiss===u().DismissReason.cancel&&this.websiteService.updateratingAndReview({status:"Reject"},n).subscribe(c=>{this.delRes=c,this.delRes.success&&(u().fire({icon:"success",title:"Rejected!",text:"Rating and Review Rejected Sucessfully"}),this.ngOnInit())})})}ngOnInit(){this.websiteService.getratingAndReview().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"product"===i.content_type.app_label&&"ratingandreviewsonproduct"===i.content_type.model&&"add_ratingandreviewsonproduct"==i.codename?this.isAdd=i.codename:"product"===i.content_type.app_label&&"ratingandreviewsonproduct"===i.content_type.model&&"change_ratingandreviewsonproduct"==i.codename&&(this.isEdit=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.websiteService.deleteAddressStore(t).subscribe(n=>{this.delRes=n,this.delRes.success&&window.location.reload()})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(t=>t.product?.title.match(this.titlee))}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new T.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Rating and Review",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Product Name"},{header:"User Name"},{header:"Name"},{header:"Rating"},{header:"Review"},{header:"Status"},{header:"Is Active"}]}),t.save("rating&review.pdf")}generatePDFAgain(){const t=new T.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Rating and Review ",82,10),t.text("",10,15),p()(t,{head:[["#"," Product Name","User Name","Name","Review","Rating","Status"]],body:this.tableData.map((i,o)=>[o+1,i.product?.title,i.user?.username,i.user?.username,i.review,i.rating,i.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Rating_Review.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),o=n.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(c=>{const h=c.textContent.trim();"Is Active"!==h&&"Action"!==h&&r.push(h)}),t.push(r),o.forEach(c=>{const h=[];c.querySelectorAll("td").forEach(M=>{h.push(M.textContent.trim())}),t.push(h)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=f.P6.aoa_to_sheet(t),i=f.P6.book_new();f.P6.book_append_sheet(i,n,"Sheet1");const o=f.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,v.saveAs)(r,"rating&review.xlsx")}printTable(){const t=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(9)");c&&c.remove();const h=r.querySelector("th.thone:last-child");h&&h.remove(),r.querySelectorAll("tr").forEach(U=>{const D=U.querySelector("td:nth-child(9)");D&&D.remove();const N=U.querySelector("td:last-child");N&&N.remove()});const z=r.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+z,V=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=$,window.print(),document.body.innerHTML=V}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(R.K),e.Y36(m._),e.Y36(d.qu),e.Y36(A._W),e.Y36(_.F0),e.Y36(w.J))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-rating-and-review"]],decls:70,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"badges",3,"ngClass"],[3,"checked","click"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Rating and Review"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Rating and Review"),e.qZA()()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),e._UZ(12,"img",9),e.TgZ(13,"span"),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div",14)(19,"label")(20,"input",15),e.NdJ("ngModelChange",function(o){return n.titlee=o})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(25,"img",18),e.qZA()(),e.TgZ(26,"li")(27,"a",19),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e.NdJ("click",function(){return n.printTable()}),e._UZ(31,"img",22),e.qZA()()()()(),e.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th",25),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(37,"label",26),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(38,"input",27),e.NdJ("ngModelChange",function(o){return n.allSelected=o})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(39,"span",28),e.qZA(),e._UZ(40,"i",29),e.qZA(),e.TgZ(41,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(42,"Sr.No."),e._UZ(43,"i",29),e.qZA(),e.TgZ(44,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(45,"Product Name"),e._UZ(46,"i",29),e.qZA(),e.TgZ(47,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"User Name "),e._UZ(49,"i",29),e.qZA(),e.TgZ(50,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Name"),e._UZ(52,"i",29),e.qZA(),e.TgZ(53,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Review "),e._UZ(55,"i",29),e.qZA(),e.TgZ(56,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"Rating"),e._UZ(58,"i",29),e.qZA(),e.TgZ(59,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Status "),e._UZ(61,"i",29),e.qZA(),e.TgZ(62,"th",25),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Action "),e._UZ(64,"i",29),e.qZA()()(),e.YNc(65,O,4,11,"tbody",30),e.YNc(66,I,5,0,"tbody",30),e.qZA(),e.TgZ(67,"div",31),e.YNc(68,F,1,0,"mat-progress-bar",32),e.qZA(),e.YNc(69,L,23,4,"div",33),e.qZA()()()),2&t&&(e.xp6(20),e.Q6J("ngModel",n.titlee),e.xp6(18),e.Q6J("ngModel",n.allSelected),e.xp6(27),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader))},dependencies:[g.mk,g.sg,g.O5,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,Z.pW,x.LS,J.Rr,x._s,q.T],styles:[".custom-color[_ngcontent-%COMP%]{background-color:#ff9f43}"]}),s})();var Y=l(30597);const S=JSON.parse(localStorage.getItem("auth")),H=[];S&&S.map(a=>{"product"===a.content_type.app_label&&"ratingandreviewsonproduct"===a.content_type.model&&H.push(a.codename)});const G=[{path:"",component:j,canActivate:[Y.l],data:{allowedRoles:["add_ratingandreviewsonproduct","change_ratingandreviewsonproduct","delete_ratingandreviewsonproduct","view_ratingandreviewsonproduct"]}}];let Q=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[_.Bz.forChild(G),_.Bz]}),s})();var K=l(8468);let W=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,Q,K.I]}),s})()},30597:(P,b,l)=>{l.d(b,{l:()=>y});var g=l(94650),_=l(4392),C=l(97185),u=l(42917),T=l(80927);let y=(()=>{class p{constructor(v,e,R,m,d){this.router=v,this.Arout=e,this.toastr=R,this.profileService=m,this.coreService=d}canActivate(v,e){const R=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),R){const m=v.data.allowedRoles;console.log(m,"allowedRoles");const d=R.some(A=>m.includes(A.codename));if(console.log(d),this.coreService.getProfile().subscribe(A=>{this.userDetails=A,this.profileService.setUserDetails(this.userDetails);const w=A?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==w.length)&&(this.profileService.setUserPermission(w),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(v){return new(v||p)(g.LFG(_.F0),g.LFG(_.gz),g.LFG(C._W),g.LFG(u.J),g.LFG(T.p))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);