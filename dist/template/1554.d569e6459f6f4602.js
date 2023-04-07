"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1554],{1554:(y,_,r)=>{r.r(_),r.d(_,{ProductlistModule:()=>q});var a=r(6895),d=r(9877),f=r(2454),m=r.n(f),t=r(1571),T=r(2326),C=r(927),h=r(5415),c=r(433),u=r(4333),Z=r(4040);const g=function(o,l,e){return{"bg-lightgreen":o,"bg-lightred":l,"bg-lightyellow":e}};function v(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",46)(3,"input",29),t.NdJ("ngModelChange",function(n){const p=t.CHM(e).$implicit;return t.KtG(p.isSelected=n)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",47)(6,"a",48),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t._UZ(24,"td",49),t.TgZ(25,"td")(26,"span",50),t._uU(27),t.qZA()(),t.TgZ(28,"td")(29,"span",50),t._uU(30),t.qZA()(),t.TgZ(31,"td")(32,"span",50),t._uU(33),t.qZA()(),t.TgZ(34,"td")(35,"a",51),t._UZ(36,"img",52),t.qZA(),t.TgZ(37,"a",51),t._UZ(38,"img",53),t.qZA(),t.TgZ(39,"a",54),t.NdJ("click",function(){const n=t.CHM(e),s=n.index,p=n.$implicit,M=t.oxw();return t.KtG(M.confirmText(s,p.id))}),t._UZ(40,"img",55),t.qZA()()()}if(2&o){const e=l.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(3),t.MGl("routerLink","//product/product-details/",e.id,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.category),t.xp6(2),t.Oqu(e.subcategory),t.xp6(2),t.Oqu(e.subcategory_group),t.xp6(2),t.Oqu(e.brand),t.xp6(2),t.Oqu(e.unit),t.xp6(2),t.Oqu(e.unit_conversion),t.xp6(2),t.Oqu(e.features_subcategory),t.xp6(2),t.Oqu(e.product_store),t.xp6(1),t.Q6J("innerHTML",e.description,t.oJD),t.xp6(2),t.Q6J("ngClass",t.kEZ(20,g,!0===e.is_approved,!1===e.is_approved,"Partial"===e.is_approved)),t.xp6(1),t.Oqu(e.is_approved),t.xp6(2),t.Q6J("ngClass",t.kEZ(24,g,!0===e.is_measurable,!1===e.is_measurable,"Partial"===e.is_measurable)),t.xp6(1),t.Oqu(e.is_measurable),t.xp6(2),t.Q6J("ngClass",t.kEZ(28,g,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active),t.xp6(2),t.MGl("routerLink","//product/product-details/",e.id,""),t.xp6(2),t.MGl("routerLink","//product/editproduct/",e.id,"")}}const b=function(o,l){return{itemsPerPage:o,currentPage:l}},P=[{path:"",component:(()=>{class o{constructor(e,i){this.QueryService=e,this.coreService=i,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(e,i){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteProduct(i).subscribe(s=>{this.delRes=s,"Prodct Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.coreService.getProducts().subscribe(e=>{this.tableData=e}),console.log(this.tableData)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>(console.log(e),console.log(e.title.toLocaleLowerCase()),console.log(e.title.match(this.titlee)),e.title.match(this.titlee)?e.title.match(this.titlee):e.category.match(this.titlee)?e.category.match(this.titlee):e.subcategory.match(this.titlee)?e.subcategory.match(this.titlee):void 0))}sort(e){this.key=e,this.reverse=!this.reverse}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T._),t.Y36(C.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-productlist"]],decls:111,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/addproduct",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","target","_blank","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","","id","printTable",1,"table",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"innerHTML"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Product List"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your products"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add New Product"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(s){return i.titlee=s})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(s){return i.initChecked=s}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Title "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Category "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Subcategory "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Subcategory group "),t._UZ(56,"i",31),t.qZA(),t.TgZ(57,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(58,"Brand "),t._UZ(59,"i",31),t.qZA(),t.TgZ(60,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(61,"Unit "),t._UZ(62,"i",31),t.qZA(),t.TgZ(63,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(64,"Unit Conversion "),t._UZ(65,"i",31),t.qZA(),t.TgZ(66,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(67,"Features Subcategory "),t._UZ(68,"i",31),t.qZA(),t.TgZ(69,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(70,"Product Store "),t._UZ(71,"i",31),t.qZA(),t.TgZ(72,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(73,"Description "),t._UZ(74,"i",31),t.qZA(),t.TgZ(75,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(76,"Is Approved "),t._UZ(77,"i",31),t.qZA(),t.TgZ(78,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(79,"Is Measurable "),t._UZ(80,"i",31),t.qZA(),t.TgZ(81,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(82,"Is Active "),t._UZ(83,"i",31),t.qZA(),t.TgZ(84,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(85,"Action "),t._UZ(86,"i",31),t.qZA()()(),t.TgZ(87,"tbody"),t.YNc(88,v,41,32,"tr",32),t.ALo(89,"paginate"),t.ALo(90,"orderBy"),t.qZA()(),t.TgZ(91,"div",33)(92,"div",34)(93,"div",35),t._uU(94," Show per page "),t.TgZ(95,"select",36),t.NdJ("ngModelChange",function(s){return i.itemsPerPage=s}),t.TgZ(96,"option",37),t._uU(97,"5"),t.qZA(),t.TgZ(98,"option",38),t._uU(99,"10"),t.qZA(),t.TgZ(100,"option",39),t._uU(101,"20"),t.qZA(),t.TgZ(102,"option",40),t._uU(103,"50"),t.qZA(),t.TgZ(104,"option",41),t._uU(105,"All"),t.qZA()()()(),t.TgZ(106,"div",42)(107,"div",43)(108,"pagination-controls",44),t.NdJ("pageChange",function(s){return i.p=s}),t.qZA(),t.TgZ(109,"div",45),t._uU(110),t.qZA()()()()()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",i.titlee),t.xp6(13),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(46),t.Q6J("ngForOf",t.xi3(89,8,t.Dn7(90,11,i.tableData,i.key,i.reverse),t.WLB(15,b,i.pageSize,i.p))),t.xp6(7),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[a.mk,a.sg,d.yS,h.G,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,u.LS,u._s,Z.T],styles:['.noon[_ngcontent-%COMP%]{display:none!important}.block[_ngcontent-%COMP%]{display:block!important}div.dt-buttons[_ngcontent-%COMP%]   .dt-button[_ngcontent-%COMP%]{display:none!important}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),o})();var A=r(6134),k=r(3189);let q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,U,h.T,c.u5,A.ii.forRoot(),k.h,u.JX,Z.l]}),o})()}}]);