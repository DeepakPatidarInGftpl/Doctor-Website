"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8021],{48021:(U,p,a)=>{a.r(p),a.d(p,{DetailsProductLabelModule:()=>y});var r=a(36895),d=a(89299),t=a(94650),h=a(80927),s=a(24006),g=a(54333),u=a(3848),_=a(54040);function m(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr")(2,"td",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.sort("id"))}),t._uU(3),t.qZA(),t.TgZ(4,"td",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.sort("id"))}),t._uU(5),t.qZA(),t.TgZ(6,"td",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.sort("id"))}),t._uU(7),t.qZA(),t.TgZ(8,"td",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.sort("id"))}),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()}if(2&o){const e=n.$implicit,l=n.index;t.xp6(3),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function b(o,n){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",41)(3,"p",42),t._uU(4,"Data not available"),t.qZA()()()())}const f=function(o,n){return{itemsPerPage:o,currentPage:n}};function Z(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"mat-tab",19)(1,"div",11)(2,"div",1)(3,"div",20)(4,"table",21)(5,"thead")(6,"tr")(7,"th",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(8,"# "),t._UZ(9,"i",23),t.qZA(),t.TgZ(10,"th",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(11,"User "),t._UZ(12,"i",23),t.qZA(),t.TgZ(13,"th",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(14,"Operation Type "),t._UZ(15,"i",23),t.qZA(),t.TgZ(16,"th",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(17,"Date Time "),t._UZ(18,"i",23),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,m,11,7,"ng-container",24),t.ALo(21,"paginate"),t.ALo(22,"orderBy"),t.qZA(),t.YNc(23,b,5,0,"tbody",25),t.qZA(),t.TgZ(24,"div",9)(25,"div",26)(26,"div",27),t._uU(27," Show per page "),t.TgZ(28,"select",28,29),t.NdJ("ngModelChange",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.itemsPerPage=i)})("change",function(){t.CHM(e);const i=t.MAs(29),c=t.oxw();return t.KtG(c.changePg(i.value))}),t.TgZ(30,"option",30),t._uU(31,"10"),t.qZA(),t.TgZ(32,"option",31),t._uU(33,"20"),t.qZA(),t.TgZ(34,"option",32),t._uU(35,"30"),t.qZA(),t.TgZ(36,"option",33),t._uU(37,"50"),t.qZA(),t.TgZ(38,"option",34),t._uU(39,"100"),t.qZA(),t.TgZ(40,"option",35),t._uU(41,"All"),t.qZA()()()(),t.TgZ(42,"div",36)(43,"div",37)(44,"pagination-controls",38),t.NdJ("pageChange",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.p=i)}),t.qZA(),t.TgZ(45,"div",39),t._uU(46),t.qZA()()()()()()()()}if(2&o){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",t.xi3(21,6,t.Dn7(22,9,e.filteredData,e.key,e.reverse),t.WLB(13,f,e.itemsPerPage,e.p))),t.xp6(3),t.Q6J("ngIf",0==(null==e.filteredData?null:e.filteredData.length)),t.xp6(5),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const v=function(o,n,e){return{"bg-lightgreen":o,"bg-lightred":n,"bg-lightyellow":e}},D=[{path:"",component:(()=>{class o{constructor(e,l,i){this.Arout=e,this.CoreService=l,this.location=i,this.imgUrl="https://pv.greatfuturetechno.com",this.sho=!0,this.sho1=!1,this.sho2=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(e){var l=document.createElement("script");l.src=e,l.async=!1,document.body.appendChild(l)}LoadScript(e){var l=document.createElement("script");l.src=e,l.async=!1,document.body.appendChild(l)}getdata(){this.CoreService.getProductLabelById(this.id).subscribe(e=>{this.id==e.id&&(this.productLabelDetail=e,this.filteredData=this.productLabelDetail?.logs.slice(),this.filterData())})}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}goBack(){this.location.back()}sort(e){this.key=e,this.reverse=!this.reverse}filterData(){let e=this.productLabelDetail?.logs.slice();this.filterOpertion&&(e=e.filter(l=>l?.operation_type===this.filterOpertion)),this.filteredData=e}clearFilter(){this.filterOpertion=null,this.filterData()}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.gz),t.Y36(h.p),t.Y36(r.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-product-label"]],decls:41,vars:10,consts:[[1,"card","bg"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//product/product-label",1,"btn","btn-added"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["label","General Details"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"productdetails"],[1,"product-bar"],[1,"h4"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Logs",4,"ngIf"],["label","Logs"],[1,"table-responsive"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"td",3,"click"],["colspan","10"],[1,"center-textt"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Product Label Details"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Full details of a Product Label"),t.qZA()(),t.TgZ(8,"div",4)(9,"a",5),t._UZ(10,"img",6),t._uU(11,"Edit Product Label "),t.qZA()()(),t.TgZ(12,"mat-tab-group",7)(13,"mat-tab",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",1)(18,"div",12)(19,"ul",13)(20,"li")(21,"h4",14),t._uU(22,"Title"),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.qZA()(),t.TgZ(25,"li")(26,"h4",14),t._uU(27,"Incentive"),t.qZA(),t.TgZ(28,"h6"),t._uU(29),t.qZA()(),t.TgZ(30,"li")(31,"h4",14),t._uU(32,"Incentive Type"),t.qZA(),t.TgZ(33,"h6"),t._uU(34),t.qZA()()()()(),t.TgZ(35,"div",15)(36,"p",16),t._uU(37,"Is Active : "),t.qZA(),t.TgZ(38,"span",17),t._uU(39),t.qZA()()()()()(),t.YNc(40,Z,47,16,"mat-tab",18),t.qZA()()()),2&e&&(t.xp6(24),t.Oqu(null==l.productLabelDetail?null:l.productLabelDetail.title),t.xp6(5),t.Oqu(null==l.productLabelDetail?null:l.productLabelDetail.incentive),t.xp6(5),t.Oqu(null==l.productLabelDetail?null:l.productLabelDetail.incentive_type),t.xp6(4),t.Q6J("ngClass",t.kEZ(6,v,!0===(null==l.productLabelDetail?null:l.productLabelDetail.is_active),!1===(null==l.productLabelDetail?null:l.productLabelDetail.is_active),"Partial"===(null==l.productLabelDetail?null:l.productLabelDetail.is_active))),t.xp6(1),t.Oqu(null==l.productLabelDetail?null:l.productLabelDetail.is_active),t.xp6(1),t.Q6J("ngIf",(null==l.productLabelDetail||null==l.productLabelDetail.logs?null:l.productLabelDetail.logs.length)>0))},dependencies:[r.mk,r.sg,r.O5,d.yS,s.YN,s.Kr,s.EJ,s.JJ,s.On,g.LS,u.SP,u.uX,r.uU,g._s,_.T],styles:[".h4[_ngcontent-%COMP%]{font-weight:bolder}.th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),o})()}];let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(D),d.Bz]}),o})();var P=a(8468),T=a(32728),C=a(97392),A=a(95113),x=a(56709);let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,L,P.I,T.FP,u.Nh,C.Ps,A.LD,x.p9]}),o})()}}]);