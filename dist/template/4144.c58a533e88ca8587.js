"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4144],{4144:(f,r,i)=>{i.r(r),i.d(r,{TaxSlabDetailModule:()=>C});var c=i(6895),l=i(8996),t=i(4650),d=i(927);function s(n,a){if(1&n&&(t.TgZ(0,"div",19)(1,"div",20)(2,"h6"),t._uU(3),t.qZA()()()),2&n){const e=a.$implicit;t.xp6(3),t.Oqu(e.title+",")}}function g(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.from_amount),t.xp6(2),t.Oqu(e.to_amount),t.xp6(2),t.Oqu(e.tax)}}const u=function(n,a,e){return{"bg-lightgreen":n,"bg-lightred":a,"bg-lightyellow":e}},p=[{path:"",component:(()=>{class n{constructor(e,o){this.Arout=e,this.coreService=o}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(e){var o=document.createElement("script");o.src=e,o.async=!1,document.body.appendChild(o)}LoadScript(e){var o=document.createElement("script");o.src=e,o.async=!1,document.body.appendChild(o)}getdata(){this.coreService.getTaxSlabById(this.id).subscribe(e=>{this.productDetail=e,console.log(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(d.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tax-slab-detail"]],decls:46,vars:10,consts:[[1,"card","bg"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"company-details-card","card"],[1,"ro-border"],["colspan","2",1,"f-500"],["colspan","6",1,"f-400"],["colspan","6",1,"f-400","p-0"],["class","row ro-6",4,"ngFor","ngForOf"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],[1,"row","ro-6"],[1,"col-sm-12"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Tax Slab Details"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Full details of a Tax Slab"),t.qZA()(),t.TgZ(8,"div",4)(9,"a",5),t._UZ(10,"img",6),t._uU(11,"Edit Tax Slab "),t.qZA()()(),t.TgZ(12,"div",7)(13,"table")(14,"tr",8)(15,"td",9),t._uU(16,"Sub Category Group"),t.qZA(),t.TgZ(17,"td",10)(18,"h6"),t._uU(19),t.qZA()()(),t.TgZ(20,"tr",8)(21,"td",9),t._uU(22,"Sub Category"),t.qZA(),t.TgZ(23,"td",11),t.YNc(24,s,4,1,"div",12),t.qZA()(),t.TgZ(25,"tr",8)(26,"td",9),t._uU(27,"Amount Tax Slabs"),t.qZA(),t.TgZ(28,"td",11)(29,"div",13)(30,"table",14)(31,"thead")(32,"tr")(33,"th"),t._uU(34,"From Amount "),t.qZA(),t.TgZ(35,"th"),t._uU(36,"To Amount "),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Tax "),t.qZA()()(),t.TgZ(39,"tbody"),t.YNc(40,g,7,3,"tr",15),t.qZA()()()()()()(),t.TgZ(41,"div",16)(42,"p",17),t._uU(43,"Is Active : "),t.qZA(),t.TgZ(44,"span",18),t._uU(45),t.qZA()()()()),2&e&&(t.xp6(9),t.MGl("routerLink","//product/taxSlabUpdate/",o.productDetail.id,""),t.xp6(10),t.Oqu(o.productDetail.subcategory_group.title),t.xp6(5),t.Q6J("ngForOf",o.productDetail.subcategory),t.xp6(16),t.Q6J("ngForOf",o.productDetail.amount_tax_slabs),t.xp6(4),t.Q6J("ngClass",t.kEZ(6,u,!0===o.productDetail.is_active,!1===o.productDetail.is_active,"Partial"===o.productDetail.is_active)),t.xp6(1),t.Oqu(o.productDetail.is_active))},dependencies:[c.mk,c.sg,l.yS],styles:[".second-list[_ngcontent-%COMP%]{width:70%}.second-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d8d8d8}.img-div[_ngcontent-%COMP%]{width:70%;text-align:center;padding-top:10px}.product-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border:1px solid #E9ECEF;padding:15px}.sub-card[_ngcontent-%COMP%]{margin:0;width:100%}.product-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#212b3c}.company-details-card[_ngcontent-%COMP%]{padding:20px}.sub-card[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], .sub-card[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%], .ro-6[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%]{padding:0}.ro-6[_ngcontent-%COMP%]{width:100%;margin:0}td[_ngcontent-%COMP%], .ro-6[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{border:1px solid #E9ECEF;padding:15px}.f-500[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#212b3c}.f-400[_ngcontent-%COMP%]{font-size:18px;font-weight:400;color:#212b3c}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(p),l.Bz]}),n})();var b=i(4006);let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,m,b.u5]}),n})()}}]);