"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9585],{29585:(L,P,a)=>{a.r(P),a.d(P,{StaticPagesModule:()=>tt});var g=a(36895),_=a(4392),r=a(24006),A=a(35226),h=a.n(A),T=a(96166),p=a(12983),S=a.n(p),u=a(80574),C=a(94327),t=a(94650),f=a(80927),v=a(72326),b=a(97185),Z=a(42917),y=a(73162),M=a(54333),x=a(90455),J=a(54040);function O(n,c){1&n&&(t.TgZ(0,"div",49)(1,"a",50),t._UZ(2,"img",51),t._uU(3,"Add Static Page "),t.qZA()())}function N(n,c){if(1&n&&(t.TgZ(0,"a",62),t._UZ(1,"img",63),t.qZA()),2&n){const e=t.oxw().$implicit;t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}function E(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"a",64),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),o=s.index,l=s.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(o,l.slug))}),t._UZ(1,"img",65),t.qZA()}}function B(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",53)(3,"input",54),t.NdJ("ngModelChange",function(s){const l=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[l]=s)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",55)(8,"a",56),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"mat-slide-toggle",57),t.NdJ("click",function(){const s=t.CHM(e),o=s.$implicit,l=s.index,d=t.oxw(2);return t.KtG(o.is_active?d.deActivate(l,null==o?null:o.slug):d.Active(l,null==o?null:o.slug))})("ngModelChange",function(s){const l=t.CHM(e).$implicit;return t.KtG(l.is_active=s)}),t.qZA()(),t.TgZ(16,"td")(17,"a",58),t._UZ(18,"img",59),t.qZA(),t.YNc(19,N,2,1,"a",60),t.YNc(20,E,2,0,"a",61),t.qZA()()}if(2&n){const e=c.$implicit,i=c.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(null==e?null:e.title),t.xp6(2),t.Oqu(null==e?null:e.slug),t.xp6(2),t.Oqu(null==e?null:e.choice_type),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.Q6J("ngIf",s.isEdit),t.xp6(1),t.Q6J("ngIf",s.isDelete)}}const k=function(n,c){return{itemsPerPage:n,currentPage:c}};function q(n,c){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,B,21,10,"tr",52),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function Y(n,c){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",66)(3,"p",67),t._uU(4,"Data not available"),t.qZA()()()())}function G(n,c){1&n&&t._UZ(0,"mat-progress-bar",68)}let H=(()=>{class n{constructor(e,i,s,o,l,d){this.coreService=e,this.QueryService=i,this.fb=s,this.toastr=o,this.router=l,this.cs=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.addForm=!0,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){h().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(o=>{this.delRes=o,this.delRes.success&&(h().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.ngOnInit())}),h().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})}deActivate(e,i){h().fire({title:"Are you sure?",text:"Do you want to Deactivate this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),h().fire({icon:"success",title:"Deactivate!",text:"Static Pages Is Deactivate Successfully."}))})}Active(e,i){h().fire({title:"Are you sure?",text:"Do you want to Active this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),h().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new r.NI("",[r.kI.required]),slug:new r.NI("",[r.kI.required]),description:new r.NI("",[r.kI.required])}),this.coreService.getStaicPages().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(s=>{"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"add_staticpages"==s.codename?this.isAdd=s.codename:"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"change_staticpages"==s.codename?this.isEdit=s.codename:"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"delete_staticpages"==s.codename&&(this.isDelete=s.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{}):(this.staticPgForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{}):(this.staticPgForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{i.map(s=>{e==s.id&&(this.addForm=!1,this.staticPgForm.patchValue(s),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new T.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Static Pages List",10,10),S()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Slug"},{header:"Is Active"}]}),e.save("staticPages.pdf")}generatePDFAgain(){const e=new T.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Static Pages List",82,10),e.text("",10,15),S()(e,{head:[["#"," Title","Slug","Choice Type"]],body:this.tableData.map((s,o)=>[o+1,s.title,s.slug,s.choice_type]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Static _Pages .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),s=i.querySelector("thead tr"),o=i.querySelectorAll("tbody tr"),l=[];return s.querySelectorAll("th").forEach(d=>{const m=d.textContent.trim();"Is Active"!==m&&"Action"!==m&&l.push(m)}),e.push(l),o.forEach(d=>{const m=[];d.querySelectorAll("td").forEach(U=>{m.push(U.textContent.trim())}),e.push(m)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=u.P6.aoa_to_sheet(e),s=u.P6.book_new();u.P6.book_append_sheet(s,i,"Sheet1");const o=u.cW(s,{bookType:"xlsx",type:"array"}),l=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,C.saveAs)(l,"staticPages.xlsx")}printTable(){const e=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,l=e.cloneNode(!0),d=l.querySelector("th.thone:nth-child(5)");d&&d.remove();const m=l.querySelector("th.thone:last-child");m&&m.remove(),l.querySelectorAll("tr").forEach(I=>{const w=I.querySelector("td:nth-child(5)");w&&w.remove();const R=I.querySelector("td:last-child");R&&R.remove()});const et=l.outerHTML,it="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+et,st=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=it,window.print(),document.body.innerHTML=st}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.p),t.Y36(v._),t.Y36(r.qu),t.Y36(b._W),t.Y36(_.F0),t.Y36(Z.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-static-pages"]],decls:87,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"href",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.YNc(6,O,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Sr. No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Slug"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Choice Type"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Is Active "),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(58,"Action"),t._UZ(59,"i",30),t.qZA()()(),t.YNc(60,q,4,11,"tbody",31),t.YNc(61,Y,5,0,"tbody",31),t.qZA(),t.TgZ(62,"div",32),t.YNc(63,G,1,0,"mat-progress-bar",33),t.qZA(),t.TgZ(64,"div",34)(65,"div",35)(66,"div",36),t._uU(67," Show per page "),t.TgZ(68,"select",37,38),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l})("change",function(){t.CHM(s);const l=t.MAs(69);return t.KtG(i.changePg(l.value))}),t.TgZ(70,"option",39),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",40),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",41),t._uU(75,"30"),t.qZA(),t.TgZ(76,"option",42),t._uU(77,"50"),t.qZA(),t.TgZ(78,"option",43),t._uU(79,"100"),t.qZA(),t.TgZ(80,"option",44),t._uU(81,"All"),t.qZA()()()(),t.TgZ(82,"div",45)(83,"div",46)(84,"pagination-controls",47),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(85,"div",48),t._uU(86),t.qZA()()()()()()()}2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(21),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries"))},dependencies:[g.sg,g.O5,_.yS,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,y.pW,M.LS,x.Rr,M._s,J.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var Q=a(30597);const D=JSON.parse(localStorage.getItem("auth"));let z;D&&D.map(c=>{"website"===c.content_type.app_label&&"staticpages"===c.content_type.model&&"view_staticpages"==c.codename&&(z=c.codename)});const K=[{path:"",component:H,canActivate:[Q.l],data:{allowedRoles:["view_staticpages"]}},{path:"details/:slug",loadChildren:()=>a.e(5810).then(a.bind(a,85810)).then(n=>n.StaticpageDetalsModule)}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(K),_.Bz]}),n})();var F=a(8468),j=a(3848),$=a(97392),V=a(95113),X=a(56709);let tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,W,F.I,j.Nh,$.Ps,V.LD,X.p9,x.rP,r.u5,F.I]}),n})()},30597:(L,P,a)=>{a.d(P,{l:()=>T});var g=a(94650),_=a(4392),r=a(97185),A=a(42917),h=a(80927);let T=(()=>{class p{constructor(u,C,t,f,v){this.router=u,this.Arout=C,this.toastr=t,this.profileService=f,this.coreService=v}canActivate(u,C){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),t){const f=u.data.allowedRoles;console.log(f,"allowedRoles");const v=t.some(b=>f.includes(b.codename));if(console.log(v),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const Z=b?.permission,y=this.profileService.getUserDetails();(!y||y.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(u){return new(u||p)(g.LFG(_.F0),g.LFG(_.gz),g.LFG(r._W),g.LFG(A.J),g.LFG(h.p))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);