"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9585],{29585:(A,f,a)=>{a.r(f),a.d(f,{StaticPagesModule:()=>k});var d=a(36895),u=a(88996),c=a(24006),C=a(35226),r=a.n(C),t=a(94650),m=a(80927),v=a(72326),p=a(97185),b=a(73162),_=a(54333),S=a(90455),T=a(54040);function y(o,l){1&o&&(t.TgZ(0,"div",46)(1,"a",47),t._UZ(2,"img",48),t._uU(3,"Add Static Page "),t.qZA()())}function M(o,l){if(1&o&&(t.TgZ(0,"a",59),t._UZ(1,"img",60),t.qZA()),2&o){const e=t.oxw().$implicit;t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}function x(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"a",61),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),n=s.index,g=s.$implicit,h=t.oxw(2);return t.KtG(h.confirmText(n,g.slug))}),t._UZ(1,"img",62),t.qZA()}}function I(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),t.NdJ("ngModelChange",function(s){const g=t.CHM(e).index,h=t.oxw(2);return t.KtG(h.selectedRows[g]=s)}),t.qZA(),t._UZ(4,"span",28),t.qZA()(),t.TgZ(5,"td",52)(6,"a",53),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"mat-slide-toggle",54),t.NdJ("click",function(){const s=t.CHM(e),n=s.$implicit,g=s.index,h=t.oxw(2);return t.KtG(n.is_active?h.deActivate(g,n.slug):h.Active(g,n.slug))})("ngModelChange",function(s){const g=t.CHM(e).$implicit;return t.KtG(g.is_active=s)}),t.qZA()(),t.TgZ(12,"td")(13,"a",55),t._UZ(14,"img",56),t.qZA(),t.YNc(15,M,2,1,"a",57),t.YNc(16,x,2,0,"a",58),t.qZA()()}if(2&o){const e=l.$implicit,i=l.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[i]),t.xp6(3),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.slug),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.Q6J("ngIf",s.isEdit),t.xp6(1),t.Q6J("ngIf",s.isDelete)}}const U=function(o,l){return{itemsPerPage:o,currentPage:l}};function D(o,l){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,I,17,8,"tr",49),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,U,e.pageSize,e.p)))}}function F(o,l){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),t._uU(4,"Data not available"),t.qZA()()()())}function w(o,l){1&o&&t._UZ(0,"mat-progress-bar",65)}let R=(()=>{class o{constructor(e,i,s,n,g){this.coreService=e,this.QueryService=i,this.fb=s,this.toastr=n,this.router=g,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){r().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(n=>{this.delRes=n,"Deleted successfully"==this.delRes.msg&&(this.ngOnInit(),r().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}))}),r().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})}deActivate(e,i){r().fire({title:"Are you sure?",text:"Do you want to Deactivate this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(n=>{this.delRes=n,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),r().fire({icon:"success",title:"Deactivate!",text:"Static Pages Is Deactivate Successfully."}))})}Active(e,i){r().fire({title:"Are you sure?",text:"Do you want to Active this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(n=>{this.delRes=n,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),r().fire({icon:"success",title:"Active!",text:"Static Page Is Active Successfully."}))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new c.NI("",[c.kI.required]),slug:new c.NI("",[c.kI.required]),description:new c.NI("",[c.kI.required])}),this.coreService.getStaicPages().subscribe(i=>{this.loader=!1,this.tableData=i,this.selectedRows=new Array(this.tableData.length).fill(!1)});const e=JSON.parse(localStorage.getItem("auth"));e&&e.permission&&e.permission.map(s=>{"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"add_staticpages"==s.codename?this.isAdd=s.codename:"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"change_staticpages"==s.codename?this.isEdit=s.codename:"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"delete_staticpages"==s.codename&&(this.isDelete=s.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.staticPgForm.value),console.log(this.id),this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Colour updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{console.log(i),i.map(s=>{console.log(s),e==s.id&&(this.addForm=!1,this.staticPgForm.patchValue(s),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.p),t.Y36(v._),t.Y36(c.qu),t.Y36(p._W),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-static-pages"]],decls:78,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-3",3,"href",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.YNc(6,y,4,0,"div",2),t.qZA(),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t.TgZ(14,"span"),t._UZ(15,"img",10),t.qZA()()(),t.TgZ(16,"div",11)(17,"a",12),t._UZ(18,"img",13),t.qZA(),t.TgZ(19,"div",14)(20,"label")(21,"input",15),t.NdJ("ngModelChange",function(n){return i.titlee=n})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",26),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",27),t.NdJ("ngModelChange",function(n){return i.allSelected=n})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",28),t.qZA(),t._UZ(41,"i",29),t.qZA(),t.TgZ(42,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Title "),t._UZ(44,"i",29),t.qZA(),t.TgZ(45,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Slug "),t._UZ(47,"i",29),t.qZA(),t.TgZ(48,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Is Active "),t._UZ(50,"i",29),t.qZA(),t.TgZ(51,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Action "),t._UZ(53,"i",29),t.qZA()()(),t.YNc(54,D,4,11,"tbody",30),t.YNc(55,F,5,0,"tbody",30),t.qZA(),t.TgZ(56,"div",31),t.YNc(57,w,1,0,"mat-progress-bar",32),t.qZA(),t.TgZ(58,"div",33)(59,"div",34)(60,"div",35),t._uU(61," Show per page "),t.TgZ(62,"select",36),t.NdJ("ngModelChange",function(n){return i.itemsPerPage=n}),t.TgZ(63,"option",37),t._uU(64,"5"),t.qZA(),t.TgZ(65,"option",38),t._uU(66,"10"),t.qZA(),t.TgZ(67,"option",39),t._uU(68,"20"),t.qZA(),t.TgZ(69,"option",40),t._uU(70,"50"),t.qZA(),t.TgZ(71,"option",41),t._uU(72,"All"),t.qZA()()()(),t.TgZ(73,"div",42)(74,"div",43)(75,"pagination-controls",44),t.NdJ("pageChange",function(n){return i.p=n}),t.qZA(),t.TgZ(76,"div",45),t._uU(77),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(15),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[d.sg,d.O5,u.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,b.pW,_.LS,S.Rr,_._s,T.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var O=a(30597);const P=JSON.parse(localStorage.getItem("auth"));let Z;P&&P.permission&&P.permission.map(l=>{"website"===l.content_type.app_label&&"staticpages"===l.content_type.model&&"view_staticpages"==l.codename&&(Z=l.codename,console.log(Z))});const J=[{path:"",component:R,canActivate:[O.l],data:{allowedRoles:[Z]}},{path:"details/:slug",loadChildren:()=>a.e(5810).then(a.bind(a,85810)).then(o=>o.StaticpageDetalsModule)}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(J),u.Bz]}),o})();var B=a(8468);let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,N,B.I]}),o})()},30597:(A,f,a)=>{a.d(f,{l:()=>C});var d=a(94650),u=a(88996),c=a(97185);let C=(()=>{class r{constructor(m,v,p){this.router=m,this.Arout=v,this.toastr=p}canActivate(m,v){const p=JSON.parse(localStorage.getItem("auth"));if(p&&p.user){const b=m.data.allowedRoles;console.log(b,"allowedRoles");const _=p.permission.some(S=>b.includes(S.codename));if(console.log(_),_)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return r.\u0275fac=function(m){return new(m||r)(d.LFG(u.F0),d.LFG(u.gz),d.LFG(c._W))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);