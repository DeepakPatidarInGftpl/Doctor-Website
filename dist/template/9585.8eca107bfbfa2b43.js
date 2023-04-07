"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9585],{9585:(O,u,n)=>{n.r(u),n.d(u,{StaticPagesModule:()=>y});var d=n(6895),g=n(1728),a=n(433),Z=n(5226),m=n.n(Z),t=n(1571),v=n(927),P=n(2326),C=n(7185),p=n(5415),h=n(4333),f=n(4040);const b=function(s,r,e){return{"bg-lightgreen":s,"bg-lightred":r,"bg-lightyellow":e}};function S(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",46)(3,"input",29),t.NdJ("ngModelChange",function(o){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=o)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",47)(6,"a",48),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"span",49),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"a",50),t._UZ(15,"img",51),t.qZA(),t.TgZ(16,"a",52),t._UZ(17,"img",53),t.qZA(),t.TgZ(18,"a",54),t.NdJ("click",function(){const o=t.CHM(e),l=o.index,c=o.$implicit,k=t.oxw();return t.KtG(k.confirmText(l,c.slug))}),t._UZ(19,"img",55),t.qZA()()()}if(2&s){const e=r.$implicit;t.xp6(3),t.Q6J("ngModel",e.is_active),t.xp6(3),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.slug),t.xp6(2),t.Q6J("ngClass",t.kEZ(8,b,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}const _=function(s,r){return{itemsPerPage:s,currentPage:r}},T=[{path:"",component:(()=>{class s{constructor(e,i,o,l,c){this.coreService=e,this.QueryService=i,this.fb=o,this.toastr=l,this.router=c,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(l=>{this.delRes=l,"Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new a.NI("",[a.kI.required]),slug:new a.NI("",[a.kI.required]),description:new a.NI("",[a.kI.required])}),this.coreService.getStaicPages().subscribe(e=>{this.tableData=e})}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.staticPgForm.value),console.log(this.id),this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Colour updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{console.log(i),i.map(o=>{console.log(o),e==o.id&&(this.addForm=!1,this.staticPgForm.patchValue(o),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>(console.log(e),console.log(e.title.toLocaleLowerCase()),console.log(e.title.match(this.titlee)),e.title.match(this.titlee)))}sort(e){this.key=e,this.reverse=!this.reverse}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(v.p),t.Y36(P._),t.Y36(a.qu),t.Y36(C._W),t.Y36(g.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-static-pages"]],decls:81,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"me-3",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Static Page "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(l){return i.initChecked=l}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Slug "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",31),t.qZA()()(),t.TgZ(57,"tbody"),t.YNc(58,S,20,12,"tr",32),t.ALo(59,"paginate"),t.ALo(60,"orderBy"),t.qZA()(),t.TgZ(61,"div",33)(62,"div",34)(63,"div",35),t._uU(64," Show per page "),t.TgZ(65,"select",36),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l}),t.TgZ(66,"option",37),t._uU(67,"5"),t.qZA(),t.TgZ(68,"option",38),t._uU(69,"10"),t.qZA(),t.TgZ(70,"option",39),t._uU(71,"20"),t.qZA(),t.TgZ(72,"option",40),t._uU(73,"50"),t.qZA(),t.TgZ(74,"option",41),t._uU(75,"All"),t.qZA()()()(),t.TgZ(76,"div",42)(77,"div",43)(78,"pagination-controls",44),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(79,"div",45),t._uU(80),t.qZA()()()()()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",i.titlee),t.xp6(13),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(16),t.Q6J("ngForOf",t.xi3(59,8,t.Dn7(60,11,i.tableData,i.key,i.reverse),t.WLB(15,_,i.pageSize,i.p))),t.xp6(7),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[d.mk,d.sg,g.yS,p.G,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,h.LS,h._s,f.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})()},{path:"details/:slug",loadChildren:()=>n.e(5810).then(n.bind(n,5810)).then(s=>s.StaticpageDetalsModule)}];let A=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.Bz.forChild(T),g.Bz]}),s})();var M=n(6134),U=n(906),F=n(3189);let y=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.ez,A,p.T,a.u5,a.UX,U.ZU,M.ii.forRoot(),F.h,h.JX,f.l]}),s})()}}]);