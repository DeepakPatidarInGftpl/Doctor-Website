"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3577],{13577:($,T,i)=>{i.r(T),i.d(T,{AnalysisInventoryListModule:()=>Q});var g=i(36895),v=i(89299),r=i(24006),_=i(96166),b=i(12983),M=i.n(b),u=i(80574),I=i(94327),t=i(94650),x=i(97185),L=i(42917),P=i(60843),A=i(54333),f=i(59549),m=i(99602),U=i(54040);function O(a,d){if(1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&a){const e=d.$implicit,n=d.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.product_name),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.starting_inventory_qty),t.xp6(2),t.Oqu(e.ending_inventory_qty),t.xp6(2),t.Oqu(e.average_inventory),t.xp6(2),t.Oqu(e.inventory_turnover_ratio)}}const D=function(a,d){return{itemsPerPage:a,currentPage:d}};function w(a,d){if(1&a&&(t.TgZ(0,"tbody"),t.YNc(1,O,15,7,"tr",45),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productInventoryList,e.key,e.reverse),t.WLB(8,D,e.itemsPerPage,e.p)))}}function q(a,d){1&a&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",46)(3,"p",47),t._uU(4,"Data not available"),t.qZA()()()())}const N=[{path:"",component:(()=>{class a{constructor(e,n,o,s,l){this.Arout=e,this.toastr=n,this.cs=o,this.datepipe=s,this.dashboardService=l,this.loader=!0,this.p=1,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.query=this.Arout.snapshot.paramMap.get("query"),console.log(this.query),this.cs.userDetails$.subscribe(l=>{this.userDetails=l,console.log(l),this.userName=l?.username});const e=new Date,n=new Date(e);n.setDate(e.getDate()-14);const o=this.formatDate(n),s=this.formatDate(e);this.analysisForm=new r.cw({start:new r.NI(o),end:new r.NI(s)}),this.startDate=this.analysisForm.value?.start,this.endDate=this.analysisForm.value?.end,this.getproductDayBook()}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}sort(e){this.key=e,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,o){const s=(e-1)*n;return`Showing ${s+1}\u2013${Math.min(s+n-1,o-1)+1} of ${o} results`}getproductDayBook(){this.dashboardService.getAnalysisInventoryList(this.startDate,this.endDate).subscribe(e=>{"slow"==this.query?this.productInventoryList=e?.slow_product:"fast"==this.query?this.productInventoryList=e?.fast_product:"non"==this.query&&(this.productInventoryList=e?.non_product),console.log(this.productInventoryList)})}getSelectedProductDayBookDates(){console.log(this.analysisForm.value);const e=this.datepipe.transform(this.analysisForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.analysisForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getproductDayBook()}generatePDF(){const e=new _.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Inventory Analysis List",10,10),M()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]}}),e.save("inventoryAnalysis.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const l=[];o.querySelectorAll("th").forEach(c=>{const p=c.textContent?.trim();p&&"Is Active"!==p&&"Action"!==p&&l.push(p)}),e.push(l)}n.querySelectorAll("tbody tr").forEach(l=>{const c=[];l.querySelectorAll("td").forEach(p=>{const h=p.textContent?.trim();h&&c.push(h)}),e.push(c)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=u.P6.aoa_to_sheet(e),o=u.P6.book_new();u.P6.book_append_sheet(o,n,"Sheet1");const s=u.cW(o,{bookType:"xlsx",type:"array"}),l=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,I.saveAs)(l,"analysisInventory.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const s=o.outerHTML,c=e.cloneNode(!0).outerHTML,h="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+c,j=document.body.innerHTML;document.body.innerHTML=h,window.print(),document.body.innerHTML=j}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(v.gz),t.Y36(x._W),t.Y36(L.J),t.Y36(g.uU),t.Y36(P.s))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-analysis-inventory-list"]],decls:87,vars:9,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Inventory Analysis"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Inventory Analysis"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"strong"),t._uU(16,"Select Date"),t.qZA(),t.TgZ(17,"mat-form-field",12)(18,"mat-date-range-input",13)(19,"input",14),t.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),t.qZA(),t.TgZ(20,"span",15)(21,"span",16),t._uU(22,"to"),t.qZA()(),t.TgZ(23,"input",17),t.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),t.qZA()(),t._UZ(24,"mat-datepicker-toggle",18)(25,"mat-date-range-picker",null,19),t.qZA()()()()(),t.TgZ(27,"div",20)(28,"ul")(29,"li")(30,"a",21),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(31,"img",22),t.qZA()(),t.TgZ(32,"li")(33,"a",23),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(34,"img",24),t.qZA()(),t.TgZ(35,"li")(36,"a",25),t.NdJ("click",function(){return n.printTable()}),t._UZ(37,"img",26),t.qZA()()()()(),t.TgZ(38,"div",27)(39,"table",28)(40,"thead")(41,"tr")(42,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"#"),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Product Name"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"QTY"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Starting Inventory QTY "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Ending Inventory QTY"),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Average Inventory"),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",29),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"Inventory Turnover Ratio"),t._UZ(62,"i",30),t.qZA()()(),t.YNc(63,w,4,11,"tbody",31),t.YNc(64,q,5,0,"tbody",31),t.qZA(),t.TgZ(65,"div",9)(66,"div",32)(67,"div",33),t._uU(68," Show per page "),t.TgZ(69,"select",34),t.NdJ("ngModelChange",function(s){return n.itemsPerPage=s}),t.TgZ(70,"option",35),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",36),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",37),t._uU(75,"30"),t.qZA(),t.TgZ(76,"option",38),t._uU(77,"50"),t.qZA(),t.TgZ(78,"option",39),t._uU(79,"100"),t.qZA(),t.TgZ(80,"option",40),t._uU(81,"All"),t.qZA()()()(),t.TgZ(82,"div",41)(83,"div",42)(84,"pagination-controls",43),t.NdJ("pageChange",function(s){return n.p=s}),t.qZA(),t.TgZ(85,"div",44),t._uU(86),t.qZA()()()()()()()()()),2&e){const o=t.MAs(26);t.xp6(18),t.Q6J("formGroup",n.analysisForm)("rangePicker",o),t.xp6(6),t.Q6J("for",o),t.xp6(39),t.Q6J("ngIf",(null==n.productInventoryList?null:n.productInventoryList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.productInventoryList?null:n.productInventoryList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(17),t.lnq(" Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.p," entries ")}},dependencies:[g.sg,g.O5,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.On,r.sg,r.u,A.LS,f.KE,f.R9,m.nW,m.wx,m.zY,m.By,m._g,A._s,U.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),a})()}];let S=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.Bz.forChild(N),v.Bz]}),a})();var J=i(47957),k=i(44144),F=i(3056),B=i(87078),Z=i(86323),y=i(92642),E=i(3238),z=i(95113),H=i(64155),Y=i(6205),C=i(8468);const R={User:y.n5m,UserCheck:y.uS3,FileText:y.acj,File:y.$BE};let Q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,S,C.I,r.u5,r.UX,J.Bb,f.lN,k.c,F.ZQ,B.T,m.FA,f.lN,E.XK,z.LD,H.vQ,C.I,Y.X,Z.p.pick(R),Z.p]}),a})()}}]);