"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9585],{29585:(X,_,a)=>{a.r(_),a.d(_,{StaticPagesModule:()=>$});var h=a(36895),u=a(88996),g=a(24006),Z=a(35226),m=a.n(Z),y=a(53583),A=a(12983),x=a.n(A),p=a(80574),M=a(94327),t=a(94650),D=a(80927),w=a(72326),U=a(97185),F=a(42917),I=a(73162),b=a(54333),J=a(90455),k=a(54040);function N(o,l){1&o&&(t.TgZ(0,"div",47)(1,"a",48),t._UZ(2,"img",49),t._uU(3,"Add Static Page "),t.qZA()())}function q(o,l){if(1&o&&(t.TgZ(0,"a",60),t._UZ(1,"img",61),t.qZA()),2&o){const e=t.oxw().$implicit;t.MGl("href","/website/updateStaticPage/",e.slug,"",t.LSH)}}function B(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"a",62),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),n=s.index,c=s.$implicit,r=t.oxw(2);return t.KtG(r.confirmText(n,c.slug))}),t._UZ(1,"img",63),t.qZA()}}function R(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",51)(3,"input",52),t.NdJ("ngModelChange",function(s){const c=t.CHM(e).index,r=t.oxw(2);return t.KtG(r.selectedRows[c]=s)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",53)(8,"a",54),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"mat-slide-toggle",55),t.NdJ("click",function(){const s=t.CHM(e),n=s.$implicit,c=s.index,r=t.oxw(2);return t.KtG(n.is_active?r.deActivate(c,n.slug):r.Active(c,n.slug))})("ngModelChange",function(s){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=s)}),t.qZA()(),t.TgZ(14,"td")(15,"a",56),t._UZ(16,"img",57),t.qZA(),t.YNc(17,q,2,1,"a",58),t.YNc(18,B,2,0,"a",59),t.qZA()()}if(2&o){const e=l.$implicit,i=l.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.slug),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//website/staticPage/details/",e.slug,""),t.xp6(2),t.Q6J("ngIf",s.isEdit),t.xp6(1),t.Q6J("ngIf",s.isDelete)}}const L=function(o,l){return{itemsPerPage:o,currentPage:l}};function O(o,l){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,R,19,9,"tr",50),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,L,e.pageSize,e.p)))}}function E(o,l){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),t._uU(4,"Data not available"),t.qZA()()()())}function Y(o,l){1&o&&t._UZ(0,"mat-progress-bar",66)}let H=(()=>{class o{constructor(e,i,s,n,c,r){this.coreService=e,this.QueryService=i,this.fb=s,this.toastr=n,this.router=c,this.cs=r,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.staticPgForm.controls}confirmText(e,i){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.deleteStaticPage(i).subscribe(n=>{this.delRes=n,"Deleted successfully"==this.delRes.msg&&(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}))}),m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})}deActivate(e,i){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(n=>{this.delRes=n,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Static Pages Is Deactivate Successfully."}))})}Active(e,i){m().fire({title:"Are you sure?",text:"Do you want to Active this static page!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.staticPageIsActive(i,"").subscribe(n=>{this.delRes=n,"Static Pages Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Static Page Is Active Successfully."}))})}ngOnInit(){this.staticPgForm=this.fb.group({title:new g.NI("",[g.kI.required]),slug:new g.NI("",[g.kI.required]),description:new g.NI("",[g.kI.required])}),this.coreService.getStaicPages().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission.map(s=>{"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"add_staticpages"==s.codename?(this.isAdd=s.codename,console.log(this.isAdd)):"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"change_staticpages"==s.codename?(this.isEdit=s.codename,console.log(this.isEdit)):"website"===s.content_type.app_label&&"staticpages"===s.content_type.model&&"delete_staticpages"==s.codename&&(this.isDelete=s.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.staticPgForm.value),console.log(this.id),this.staticPgForm.valid?this.coreService.addcolor(this.staticPgForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.staticPgForm.valid?this.coreService.updatecolor(this.staticPgForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Colour updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.staticPgForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.staticPgForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.staticPgForm.get("title")}get slug(){return this.staticPgForm.get("slug")}get description(){return this.staticPgForm.get("description")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{console.log(i),i.map(s=>{console.log(s),e==s.id&&(this.addForm=!1,this.staticPgForm.patchValue(s),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.staticPgForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new y.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Static Pages List",10,10),x()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Slug"},{header:"Is Active"}]}),e.save("staticPages.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),s=i.querySelector("thead tr"),n=i.querySelectorAll("tbody tr"),c=[];return s.querySelectorAll("th").forEach(r=>{const d=r.textContent.trim();"Is Active"!==d&&"Action"!==d&&c.push(d)}),e.push(c),n.forEach(r=>{const d=[];r.querySelectorAll("td").forEach(S=>{d.push(S.textContent.trim())}),e.push(d)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=p.P6.aoa_to_sheet(e),s=p.P6.book_new();p.P6.book_append_sheet(s,i,"Sheet1");const n=p.cW(s,{bookType:"xlsx",type:"array"}),c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,M.saveAs)(c,"staticPages.xlsx")}printTable(){const e=document.getElementById("mytable"),n=document.querySelector(".titl").outerHTML,c=e.cloneNode(!0),r=c.querySelector("th.thone:nth-child(5)");r&&r.remove();const d=c.querySelector("th.thone:last-child");d&&d.remove(),c.querySelectorAll("tr").forEach(T=>{const C=T.querySelector("td:nth-child(5)");C&&C.remove();const P=T.querySelector("td:last-child");P&&P.remove()});const K=c.outerHTML,W="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+K,V=document.body.innerHTML;document.body.innerHTML=W,window.print(),document.body.innerHTML=V}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(D.p),t.Y36(w._),t.Y36(g.qu),t.Y36(U._W),t.Y36(u.F0),t.Y36(F.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-static-pages"]],decls:81,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["href","/website/addStaticPage",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-3",3,"href",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"href"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Static Page list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Static Page"),t.qZA()(),t.YNc(6,N,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(n){return i.titlee=n})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return i.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(n){return i.allSelected=n})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Sr. No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title "),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Slug "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",30),t.qZA()()(),t.YNc(57,O,4,11,"tbody",31),t.YNc(58,E,5,0,"tbody",31),t.qZA(),t.TgZ(59,"div",32),t.YNc(60,Y,1,0,"mat-progress-bar",33),t.qZA(),t.TgZ(61,"div",34)(62,"div",35)(63,"div",36),t._uU(64," Show per page "),t.TgZ(65,"select",37),t.NdJ("ngModelChange",function(n){return i.itemsPerPage=n}),t.TgZ(66,"option",38),t._uU(67,"5"),t.qZA(),t.TgZ(68,"option",39),t._uU(69,"10"),t.qZA(),t.TgZ(70,"option",40),t._uU(71,"20"),t.qZA(),t.TgZ(72,"option",41),t._uU(73,"50"),t.qZA(),t.TgZ(74,"option",42),t._uU(75,"All"),t.qZA()()()(),t.TgZ(76,"div",43)(77,"div",44)(78,"pagination-controls",45),t.NdJ("pageChange",function(n){return i.p=n}),t.qZA(),t.TgZ(79,"div",46),t._uU(80),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(18),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[h.sg,h.O5,u.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,I.pW,b.LS,J.Rr,b._s,k.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var Q=a(30597);const f=JSON.parse(localStorage.getItem("auth"));let v;f&&f.permission&&f.permission.map(l=>{"website"===l.content_type.app_label&&"staticpages"===l.content_type.model&&"view_staticpages"==l.codename&&(v=l.codename,console.log(v))});const z=[{path:"",component:H,canActivate:[Q.l],data:{allowedRoles:["view_staticpages"]}},{path:"details/:slug",loadChildren:()=>a.e(5810).then(a.bind(a,85810)).then(o=>o.StaticpageDetalsModule)}];let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(z),u.Bz]}),o})();var G=a(8468);let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,j,G.I]}),o})()}}]);