"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9224],{9224:(k,m,o)=>{o.r(m),o.d(m,{TaxSlabsListModule:()=>J});var h=o(6895),u=o(8996),T=o(5226),g=o.n(T),t=o(4650),x=o(927),b=o(5415),r=o(4006),p=o(4333),f=o(455),_=o(4040);function C(s,a){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&s){const i=a.$implicit;t.xp6(2),t.Oqu(i.title+",")}}function Z(s,a){if(1&s){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",46)(3,"input",47),t.NdJ("ngModelChange",function(n){const c=t.CHM(i).index,d=t.oxw();return t.KtG(d.selectedRows[c]=n)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,C,3,1,"tr",32),t.qZA(),t.TgZ(9,"td")(10,"mat-slide-toggle",48),t.NdJ("click",function(){const n=t.CHM(i),l=n.$implicit,c=n.index,d=t.oxw();return t.KtG(l.is_active?d.isActive(c,l.id):d.Active(c,l.id))})("ngModelChange",function(n){const c=t.CHM(i).$implicit;return t.KtG(c.is_active=n)}),t.qZA()(),t.TgZ(11,"td")(12,"a",49),t._UZ(13,"img",50),t.qZA(),t.TgZ(14,"a",49),t._UZ(15,"img",51),t.qZA(),t.TgZ(16,"a",52),t.NdJ("click",function(){const n=t.CHM(i),l=n.index,c=n.$implicit,d=t.oxw();return t.KtG(d.confirmText(l,c.id))}),t._UZ(17,"img",53),t.qZA()()()}if(2&s){const i=a.$implicit,e=a.index,n=t.oxw();t.xp6(3),t.Q6J("ngModel",n.selectedRows[e]),t.xp6(3),t.hij(" ",i.subcategory_group.title," "),t.xp6(2),t.Q6J("ngForOf",i.subcategory),t.xp6(2),t.Q6J("ngModel",i.is_active),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",i.id,""),t.xp6(2),t.MGl("routerLink","//product/taxSlabUpdate/",i.id,"")}}const v=function(s,a){return{itemsPerPage:s,currentPage:a}},S=[{path:"",component:(()=>{class s{constructor(i){this.coreService=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(i,e){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteTaxSlab(e).subscribe(l=>{this.delRes=l,"Tax Slabs Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1))})}isActive(i,e){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(e,"").subscribe(l=>{this.delRes=l,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(i,e){g().fire({title:"Are you sure?",text:"Do you want to Active this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(e,"").subscribe(l=>{this.delRes=l,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(i=>{this.tableData=i,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?e=>{e.isSelected=!1}:e=>{e.isSelected=!0})}deleteId(i){this.coreService.deleteEmployee(i).subscribe(e=>{this.delRes=e})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(i=>{if(console.log(i.subcategory_group.title),console.log(i.subcategory_group.title.match(this.titlee)),i.subcategory_group.title.match(this.titlee))return i.subcategory_group.title.match(this.titlee)})}sort(i){this.key=i,this.reverse=!this.reverse}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(x.p))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tax-slabs-list"]],decls:81,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Tax Slab list"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Tax Slab "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(l){return e.titlee=l})("ngModelChange",function(){return e.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return e.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return e.selectAll(e.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(l){return e.allSelected=l})("change",function(){return e.selectAlll()}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return e.sort("id")}),t._uU(46,"Subcategory Group "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return e.sort("id")}),t._uU(49,"SubCategory "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return e.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return e.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",31),t.qZA()()(),t.TgZ(57,"tbody"),t.YNc(58,Z,18,6,"tr",32),t.ALo(59,"paginate"),t.ALo(60,"orderBy"),t.qZA()(),t.TgZ(61,"div",33)(62,"div",34)(63,"div",35),t._uU(64," Show per page "),t.TgZ(65,"select",36),t.NdJ("ngModelChange",function(l){return e.itemsPerPage=l}),t.TgZ(66,"option",37),t._uU(67,"5"),t.qZA(),t.TgZ(68,"option",38),t._uU(69,"10"),t.qZA(),t.TgZ(70,"option",39),t._uU(71,"20"),t.qZA(),t.TgZ(72,"option",40),t._uU(73,"50"),t.qZA(),t.TgZ(74,"option",41),t._uU(75,"All"),t.qZA()()()(),t.TgZ(76,"div",42)(77,"div",43)(78,"pagination-controls",44),t.NdJ("pageChange",function(l){return e.p=l}),t.qZA(),t.TgZ(79,"div",45),t._uU(80),t.qZA()()()()()()()),2&i&&(t.xp6(24),t.Q6J("ngModel",e.titlee),t.xp6(13),t.Q6J("dtOptions",e.dtOptions),t.xp6(5),t.Q6J("ngModel",e.allSelected),t.xp6(16),t.Q6J("ngForOf",t.xi3(59,8,t.Dn7(60,11,e.tableData,e.key,e.reverse),t.WLB(15,v,e.pageSize,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(15),t.lnq("Showing ",e.pageSize," to ",e.pageSize," of ",e.pageSize," entries"))},dependencies:[h.sg,u.yS,b.G,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,p.LS,f.Rr,_.T,p._s],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})()}];let A=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]}),s})();var M=o(906),y=o(6134),L=o(3189),U=o(6709);let J=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.ez,A,b.T,r.u5,M.ZU,y.ii,L.h,_.l,p.JX,f.rP,U.p9]}),s})()}}]);