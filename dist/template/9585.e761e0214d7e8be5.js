"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9585],{9585:(U,y,a)=>{a.r(y),a.d(y,{StaticPagesModule:()=>I});var p=a(6895),Z=a(8996),g=a(4006),A=a(5226),P=a.n(A),t=a(4650),l=a(927),o=a(2326),d=a(7185),u=a(3162),c=a(4333),m=a(455),v=a(5415),b=a(4040);function f(s,h){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",48)(3,"input",49),t.NdJ("ngModelChange",function(n){const _=t.CHM(e).index,S=t.oxw();return t.KtG(S.selectedRows[_]=n)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",50)(6,"a",51),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"mat-slide-toggle",52),t.NdJ("click",function(){const n=t.CHM(e),r=n.$implicit,_=n.index,S=t.oxw();return t.KtG(r.is_active?S.deActivate(_,r.slug):S.Active(_,r.slug))})("ngModelChange",function(n){const _=t.CHM(e).$implicit;return t.KtG(_.is_active=n)}),t.qZA()(),t.TgZ(12,"td")(13,"a",53),t._UZ(14,"img",54),t.qZA(),t.TgZ(15,"a",55),t._UZ(16,"img",56),t.qZA(),t.TgZ(17,"a",57),t.NdJ("click",function(){const n=t.CHM(e),r=n.index,_=n.$implicit,S=t.oxw();return t.KtG(S.confirmText(r,_.slug))}),t._UZ(18,"img",58),t.qZA()()()}if(2&s){const e=h.$implicit,i=h.index,n=t.oxw();t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(3),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.slug),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}function T(s,h){1&s&&t._UZ(0,"mat-progress-bar",59)}const C=function(s,h){return{itemsPerPage:s,currentPage:h}},M=[{path:"",component:(()=>{class s{constructor(e,i,n,r,_){this.coreService=e,this.QueryService=i,this.fb=n,this.toastr=r,this.router=_,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){P().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(r=>{this.delRes=r,"Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),P().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}deActivate(e,i){P().fire({title:"Are you sure?",text:"Do you want to Deactivate this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(r=>{this.delRes=r,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),P().fire({icon:"success",title:"Deactivate!",text:"Static Pages Is Deactivate Successfully."}))})}Active(e,i){P().fire({title:"Are you sure?",text:"Do you want to Active this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(r=>{this.delRes=r,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),P().fire({icon:"success",title:"Active!",text:"Static Page Is Active Successfully."}))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new g.NI("",[g.kI.required]),slug:new g.NI("",[g.kI.required]),description:new g.NI("",[g.kI.required])}),this.coreService.getStaicPages().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.staticPgForm.value),console.log(this.id),this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Colour updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{console.log(i),i.map(n=>{console.log(n),e==n.id&&(this.addForm=!1,this.staticPgForm.patchValue(n),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>(console.log(e),console.log(e.title.toLocaleLowerCase()),console.log(e.title.match(this.titlee)),e.title.match(this.titlee)))}sort(e){this.key=e,this.reverse=!this.reverse}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.p),t.Y36(o._),t.Y36(g.qu),t.Y36(d._W),t.Y36(Z.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-static-pages"]],decls:83,vars:19,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"me-3",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Static Page "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(r){return i.titlee=r})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(r){return i.allSelected=r})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Slug "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",31),t.qZA()()(),t.TgZ(57,"tbody"),t.YNc(58,f,19,7,"tr",32),t.ALo(59,"paginate"),t.ALo(60,"orderBy"),t.qZA()(),t.TgZ(61,"div",33),t.YNc(62,T,1,0,"mat-progress-bar",34),t.qZA(),t.TgZ(63,"div",35)(64,"div",36)(65,"div",37),t._uU(66," Show per page "),t.TgZ(67,"select",38),t.NdJ("ngModelChange",function(r){return i.itemsPerPage=r}),t.TgZ(68,"option",39),t._uU(69,"5"),t.qZA(),t.TgZ(70,"option",40),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",41),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",42),t._uU(75,"50"),t.qZA(),t.TgZ(76,"option",43),t._uU(77,"All"),t.qZA()()()(),t.TgZ(78,"div",44)(79,"div",45)(80,"pagination-controls",46),t.NdJ("pageChange",function(r){return i.p=r}),t.qZA(),t.TgZ(81,"div",47),t._uU(82),t.qZA()()()()()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",i.titlee),t.xp6(13),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.allSelected),t.xp6(16),t.Q6J("ngForOf",t.xi3(59,9,t.Dn7(60,12,i.tableData,i.key,i.reverse),t.WLB(16,C,i.pageSize,i.p))),t.xp6(4),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[p.sg,p.O5,Z.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,u.pW,c.LS,m.Rr,v.G,c._s,b.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})()},{path:"details/:slug",loadChildren:()=>a.e(5810).then(a.bind(a,5810)).then(s=>s.StaticpageDetalsModule)}];let x=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[Z.Bz.forChild(M),Z.Bz]}),s})();var D=a(8468);let I=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,x,D.I]}),s})()},5415:(U,y,a)=>{a.d(y,{G:()=>g,T:()=>P});var p=a(4650),g=function(){function t(l,o,d){this.el=l,this.vcr=o,this.renderer=d,this.dtOptions={}}return t.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe(function(o){l.displayTable(o)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(l){var o=this;l&&(this.dtOptions=l),this.dtInstance=new Promise(function(d,u){Promise.resolve(o.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",o.el.nativeElement).length?u("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(b,f,T){if(c.columns){var C=c.columns;o.applyNgPipeTransform(b,C),o.applyNgRefTemplate(b,C,f)}c.rowCallback&&c.rowCallback(b,f,T)}};v=Object.assign({},c,v),o.dt=$(o.el.nativeElement).DataTable(v),d(o.dt)})})})},t.prototype.applyNgPipeTransform=function(l,o){o.filter(function(u){return u.ngPipeInstance&&!u.ngTemplateRef}).forEach(function(u){var c=u.ngPipeInstance,m=u.ngPipeArgs||[],v=o.findIndex(function(C){return C.data===u.data}),b=l.childNodes.item(v),f=$(b).text(),T=c.transform.apply(c,function(t,l,o){if(o||2===arguments.length)for(var c,d=0,u=l.length;d<u;d++)(c||!(d in l))&&(c||(c=Array.prototype.slice.call(l,0,d)),c[d]=l[d]);return t.concat(c||Array.prototype.slice.call(l))}([f],m,!1));$(b).text(T)})},t.prototype.applyNgRefTemplate=function(l,o,d){var u=this;o.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var v=m.ngTemplateRef,b=v.ref,f=v.context,T=o.findIndex(function(x){return x.data===m.data}),C=l.childNodes.item(T);$(C).html("");var F=Object.assign({},f,f?.userData,{adtData:d}),M=u.vcr.createEmbeddedView(b,F);u.renderer.appendChild(C,M.rootNodes[0])})},t.\u0275fac=function(o){return new(o||t)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},t.\u0275dir=p.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),A=a(6895),P=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[A.ez]}),t}()}}]);