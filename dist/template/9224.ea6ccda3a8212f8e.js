"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9224],{9224:(O,m,l)=>{l.r(m),l.d(m,{TaxSlabsListModule:()=>J});var p=l(6895),u=l(8996),_=l(5226),c=l.n(_),t=l(4650),b=l(927),g=l(4006),f=l(3162),h=l(4333),T=l(455),x=l(5415),C=l(4040);function Z(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.title+",")}}function v(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",36)(3,"input",37),t.NdJ("ngModelChange",function(s){const r=t.CHM(e).index,d=t.oxw();return t.KtG(d.selectedRows[r]=s)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,Z,3,1,"tr",32),t.qZA(),t.TgZ(9,"td")(10,"mat-slide-toggle",38),t.NdJ("click",function(){const s=t.CHM(e),o=s.$implicit,r=s.index,d=t.oxw();return t.KtG(o.is_active?d.isActive(r,o.id):d.Active(r,o.id))})("ngModelChange",function(s){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=s)}),t.qZA()(),t.TgZ(11,"td")(12,"a",39),t._UZ(13,"img",40),t.qZA(),t.TgZ(14,"a",39),t._UZ(15,"img",41),t.qZA(),t.TgZ(16,"a",42),t.NdJ("click",function(){const s=t.CHM(e),o=s.index,r=s.$implicit,d=t.oxw();return t.KtG(d.confirmText(o,r.id))}),t._UZ(17,"img",43),t.qZA()()()}if(2&n){const e=a.$implicit,i=a.index,s=t.oxw();t.xp6(3),t.Q6J("ngModel",s.selectedRows[i]),t.xp6(3),t.hij(" ",e.subcategory_group.title," "),t.xp6(2),t.Q6J("ngForOf",e.subcategory),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",e.id,""),t.xp6(2),t.MGl("routerLink","//product/taxSlabUpdate/",e.id,"")}}function S(n,a){1&n&&t._UZ(0,"mat-progress-bar",44)}function A(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",45)(1,"div",46)(2,"div",47),t._uU(3," Show per page "),t.TgZ(4,"select",48),t.NdJ("ngModelChange",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.itemsPerPage=s)}),t.TgZ(5,"option",49),t._uU(6,"5"),t.qZA(),t.TgZ(7,"option",50),t._uU(8,"10"),t.qZA(),t.TgZ(9,"option",51),t._uU(10,"20"),t.qZA(),t.TgZ(11,"option",52),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",53),t._uU(14,"All"),t.qZA()()()(),t.TgZ(15,"div",54)(16,"div",55)(17,"pagination-controls",56),t.NdJ("pageChange",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.p=s)}),t.qZA(),t.TgZ(18,"div",57),t._uU(19),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(15),t.lnq("Showing ",e.pageSize," to ",e.pageSize," of ",e.pageSize," entries")}}const M=function(n,a){return{itemsPerPage:n,currentPage:a}},y=[{path:"",component:(()=>{class n{constructor(e){this.coreService=e,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(e,i){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.coreService.deleteTaxSlab(i).subscribe(o=>{this.delRes=o,"Tax Slabs Deleted successfully"==this.delRes.msg?(this.ngOnInit(),c().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."})):c().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,i){c().fire({title:"Are you sure?",text:"Do you want to Deactivate this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.taxSlabIsActive(i,"").subscribe(o=>{this.delRes=o,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(e,i){c().fire({title:"Are you sure?",text:"Do you want to Active this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.taxSlabIsActive(i,"").subscribe(o=>{this.delRes=o,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deleteEmployee(e).subscribe(i=>{this.delRes=i})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>{if(console.log(e.subcategory_group.title),console.log(e.subcategory_group.title.match(this.titlee)),e.subcategory_group.title.match(this.titlee))return e.subcategory_group.title.match(this.titlee)})}sort(e){this.key=e,this.reverse=!this.reverse}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tax-slabs-list"]],decls:64,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Tax Slab list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Tax Slab list"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Tax Slab "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(o){return i.titlee=o})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(o){return i.allSelected=o})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Subcategory Group "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"SubCategory "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",31),t.qZA()()(),t.TgZ(57,"tbody"),t.YNc(58,v,18,6,"tr",32),t.ALo(59,"paginate"),t.ALo(60,"orderBy"),t.qZA()(),t.TgZ(61,"div",33),t.YNc(62,S,1,0,"mat-progress-bar",34),t.qZA(),t.YNc(63,A,20,4,"div",35),t.qZA()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",i.titlee),t.xp6(13),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.allSelected),t.xp6(16),t.Q6J("ngForOf",t.xi3(59,6,t.Dn7(60,9,i.tableData,i.key,i.reverse),t.WLB(13,M,i.pageSize,i.p))),t.xp6(4),t.Q6J("ngIf",i.loader),t.xp6(1),t.Q6J("ngIf",!i.loader))},dependencies:[p.sg,p.O5,u.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,f.pW,h.LS,T.Rr,x.G,h._s,C.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),n})();var U=l(8468);let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,L,U.I]}),n})()}}]);