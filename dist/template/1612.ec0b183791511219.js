"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1612],{29585:(J,A,a)=>{a.r(A),a.d(A,{StaticPagesModule:()=>V});var f=a(36895),Z=a(88996),m=a(24006),x=a(35226),P=a.n(x),c=a(53583),d=a(12983),l=a.n(d),u=a(80574),h=a(94327),t=a(94650),_=a(80927),b=a(72326),T=a(97185),v=a(42917),S=a(73162),y=a(54333),M=a(90455),D=a(54040);function w(s,r){1&s&&(t.TgZ(0,"div",48)(1,"a",49),t._UZ(2,"img",50),t._uU(3,"Add Static Page "),t.qZA()())}function q(s,r){if(1&s&&(t.TgZ(0,"a",61),t._UZ(1,"img",62),t.qZA()),2&s){const e=t.oxw().$implicit;t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}function R(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"a",63),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),o=n.index,g=n.$implicit,p=t.oxw(2);return t.KtG(p.confirmText(o,g.slug))}),t._UZ(1,"img",64),t.qZA()}}function O(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",52)(3,"input",53),t.NdJ("ngModelChange",function(n){const g=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.selectedRows[g]=n)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",54)(8,"a",55),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"mat-slide-toggle",56),t.NdJ("click",function(){const n=t.CHM(e),o=n.$implicit,g=n.index,p=t.oxw(2);return t.KtG(o.is_active?p.deActivate(g,null==o?null:o.slug):p.Active(g,null==o?null:o.slug))})("ngModelChange",function(n){const g=t.CHM(e).$implicit;return t.KtG(g.is_active=n)}),t.qZA()(),t.TgZ(16,"td")(17,"a",57),t._UZ(18,"img",58),t.qZA(),t.YNc(19,q,2,1,"a",59),t.YNc(20,R,2,0,"a",60),t.qZA()()}if(2&s){const e=r.$implicit,i=r.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(null==e?null:e.title),t.xp6(2),t.Oqu(null==e?null:e.slug),t.xp6(2),t.Oqu(null==e?null:e.choice_type),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const B=function(s,r){return{itemsPerPage:s,currentPage:r}};function L(s,r){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,O,21,10,"tr",51),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function E(s,r){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",65)(3,"p",66),t._uU(4,"Data not available"),t.qZA()()()())}function Y(s,r){1&s&&t._UZ(0,"mat-progress-bar",67)}let H=(()=>{class s{constructor(e,i,n,o,g,p){this.coreService=e,this.QueryService=i,this.fb=n,this.toastr=o,this.router=g,this.cs=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){P().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(o=>{this.delRes=o,this.delRes.success&&(P().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.ngOnInit())}),P().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})}deActivate(e,i){P().fire({title:"Are you sure?",text:"Do you want to Deactivate this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),P().fire({icon:"success",title:"Deactivate!",text:"Static Pages Is Deactivate Successfully."}))})}Active(e,i){P().fire({title:"Are you sure?",text:"Do you want to Active this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),P().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new m.NI("",[m.kI.required]),slug:new m.NI("",[m.kI.required]),description:new m.NI("",[m.kI.required])}),this.coreService.getStaicPages().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"website"===n.content_type.app_label&&"staticpages"===n.content_type.model&&"add_staticpages"==n.codename?this.isAdd=n.codename:"website"===n.content_type.app_label&&"staticpages"===n.content_type.model&&"change_staticpages"==n.codename?this.isEdit=n.codename:"website"===n.content_type.app_label&&"staticpages"===n.content_type.model&&"delete_staticpages"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{}):this.staticPgForm.markAllAsTouched()}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{}):this.staticPgForm.markAllAsTouched()}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{i.map(n=>{e==n.id&&(this.addForm=!1,this.staticPgForm.patchValue(n),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new c.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Static Pages List",10,10),l()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Slug"},{header:"Is Active"}]}),e.save("staticPages.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),n=i.querySelector("thead tr"),o=i.querySelectorAll("tbody tr"),g=[];return n.querySelectorAll("th").forEach(p=>{const C=p.textContent.trim();"Is Active"!==C&&"Action"!==C&&g.push(C)}),e.push(g),o.forEach(p=>{const C=[];p.querySelectorAll("td").forEach(F=>{C.push(F.textContent.trim())}),e.push(C)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=u.P6.aoa_to_sheet(e),n=u.P6.book_new();u.P6.book_append_sheet(n,i,"Sheet1");const o=u.cW(n,{bookType:"xlsx",type:"array"}),g=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(g,"staticPages.xlsx")}printTable(){const e=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,g=e.cloneNode(!0),p=g.querySelector("th.thone:nth-child(5)");p&&p.remove();const C=g.querySelector("th.thone:last-child");C&&C.remove(),g.querySelectorAll("tr").forEach(N=>{const U=N.querySelector("td:nth-child(5)");U&&U.remove();const k=N.querySelector("td:last-child");k&&k.remove()});const K=g.outerHTML,X="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+K,tt=document.body.innerHTML;document.body.innerHTML=X,window.print(),document.body.innerHTML=tt}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_.p),t.Y36(b._),t.Y36(m.qu),t.Y36(T._W),t.Y36(Z.F0),t.Y36(v.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-static-pages"]],decls:86,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-3",3,"href",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.YNc(6,w,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(o){return i.titlee=o})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(o){return i.allSelected=o})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Sr. No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Slug"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Choice Type"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Is Active "),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(58,"Action"),t._UZ(59,"i",30),t.qZA()()(),t.YNc(60,L,4,11,"tbody",31),t.YNc(61,E,5,0,"tbody",31),t.qZA(),t.TgZ(62,"div",32),t.YNc(63,Y,1,0,"mat-progress-bar",33),t.qZA(),t.TgZ(64,"div",34)(65,"div",35)(66,"div",36),t._uU(67," Show per page "),t.TgZ(68,"select",37),t.NdJ("ngModelChange",function(o){return i.itemsPerPage=o}),t.TgZ(69,"option",38),t._uU(70,"10"),t.qZA(),t.TgZ(71,"option",39),t._uU(72,"20"),t.qZA(),t.TgZ(73,"option",40),t._uU(74,"30"),t.qZA(),t.TgZ(75,"option",41),t._uU(76,"50"),t.qZA(),t.TgZ(77,"option",42),t._uU(78,"100"),t.qZA(),t.TgZ(79,"option",43),t._uU(80,"All"),t.qZA()()()(),t.TgZ(81,"div",44)(82,"div",45)(83,"pagination-controls",46),t.NdJ("pageChange",function(o){return i.p=o}),t.qZA(),t.TgZ(84,"div",47),t._uU(85),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(21),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"))},dependencies:[f.sg,f.O5,Z.yS,m.YN,m.Kr,m.Fj,m.Wl,m.EJ,m.JJ,m.On,S.pW,y.LS,M.Rr,y._s,D.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})();var Q=a(30597);const I=JSON.parse(localStorage.getItem("auth"));let j;I&&I.map(r=>{"website"===r.content_type.app_label&&"staticpages"===r.content_type.model&&"view_staticpages"==r.codename&&(j=r.codename)});const z=[{path:"",component:H,canActivate:[Q.l],data:{allowedRoles:["view_staticpages"]}},{path:"details/:slug",loadChildren:()=>a.e(5810).then(a.bind(a,85810)).then(s=>s.StaticpageDetalsModule)}];let G=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[Z.Bz.forChild(z),Z.Bz]}),s})();var W=a(8468);let V=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.ez,G,W.I]}),s})()},65415:(J,A,a)=>{a.d(A,{G:()=>m,T:()=>P});var f=a(94650),m=function(){function c(d,l,u){this.el=d,this.vcr=l,this.renderer=u,this.dtOptions={}}return c.prototype.ngOnInit=function(){var d=this;this.dtTrigger?this.dtTrigger.subscribe(function(l){d.displayTable(l)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(d){var l=this;d&&(this.dtOptions=d),this.dtInstance=new Promise(function(u,h){Promise.resolve(l.dtOptions).then(function(t){0===Object.keys(t).length&&0===$("tbody tr",l.el.nativeElement).length?h("Both the table and dtOptions cannot be empty"):setTimeout(function(){var b={rowCallback:function(T,v,S){if(t.columns){var y=t.columns;l.applyNgPipeTransform(T,y),l.applyNgRefTemplate(T,y,v)}t.rowCallback&&t.rowCallback(T,v,S)}};b=Object.assign({},t,b),l.dt=$(l.el.nativeElement).DataTable(b),u(l.dt)})})})},c.prototype.applyNgPipeTransform=function(d,l){l.filter(function(h){return h.ngPipeInstance&&!h.ngTemplateRef}).forEach(function(h){var t=h.ngPipeInstance,_=h.ngPipeArgs||[],b=l.findIndex(function(y){return y.data===h.data}),T=d.childNodes.item(b),v=$(T).text(),S=t.transform.apply(t,function(c,d,l){if(l||2===arguments.length)for(var t,u=0,h=d.length;u<h;u++)(t||!(u in d))&&(t||(t=Array.prototype.slice.call(d,0,u)),t[u]=d[u]);return c.concat(t||Array.prototype.slice.call(d))}([v],_,!1));$(T).text(S)})},c.prototype.applyNgRefTemplate=function(d,l,u){var h=this;l.filter(function(_){return _.ngTemplateRef&&!_.ngPipeInstance}).forEach(function(_){var b=_.ngTemplateRef,T=b.ref,v=b.context,S=l.findIndex(function(w){return w.data===_.data}),y=d.childNodes.item(S);$(y).html("");var M=Object.assign({},v,v?.userData,{adtData:u}),D=h.vcr.createEmbeddedView(T,M);h.renderer.appendChild(y,D.rootNodes[0])})},c.\u0275fac=function(l){return new(l||c)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},c.\u0275dir=f.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),x=a(36895),P=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[x.ez]}),c}()}}]);