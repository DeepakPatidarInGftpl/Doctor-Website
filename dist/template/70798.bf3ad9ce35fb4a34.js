"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[70798],{70798:(E,T,i)=>{i.r(T),i.d(T,{HsncodeWisePurchaseModule:()=>k});var p=i(36895),_=i(4392),v=i(96166),A=i(12983),S=i.n(A),Z=i(80574),U=i(94327),c=i(24006),e=i(94650),q=i(87719),x=i(43443),b=i(42917),P=i(80927),y=i(54333),g=i(99602),f=i(59549),C=i(54040);function H(a,l){if(1&a&&(e.TgZ(0,"option",59),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(null==t?null:t.hsn_code)}}function D(a,l){if(1&a&&(e.TgZ(0,"tr")(1,"td",62),e._uU(2),e.qZA(),e.TgZ(3,"td",63),e._uU(4),e.qZA(),e.TgZ(5,"td",64),e._uU(6),e.qZA(),e.TgZ(7,"td",65),e._uU(8),e.qZA(),e.TgZ(9,"td",62),e._uU(10),e.qZA(),e.TgZ(11,"td",62),e._uU(12),e.qZA(),e.TgZ(13,"td",64),e._uU(14),e.qZA(),e.TgZ(15,"td",66),e._uU(16),e.qZA(),e.TgZ(17,"td",66),e._uU(18),e.qZA(),e.TgZ(19,"td",67),e._uU(20),e.qZA(),e.TgZ(21,"td",67),e._uU(22),e.qZA(),e.TgZ(23,"td",68),e._uU(24),e.qZA(),e.TgZ(25,"td",69),e._uU(26),e.qZA(),e.TgZ(27,"td",68),e._uU(28),e.qZA()()),2&a){const t=l.$implicit;e.xp6(2),e.hij(" ",null==t?null:t.barcode.variant_name,""),e.xp6(2),e.Oqu(null==t?null:t.barcode.sku),e.xp6(2),e.hij(" ",t.barcode.product.title,""),e.xp6(2),e.Oqu(t.barcode.product.hsncode),e.xp6(2),e.hij(" ",t.barcode.product.category,""),e.xp6(2),e.hij(" ",t.barcode.product.subcategory,""),e.xp6(2),e.hij(" ",t.barcode.product.brand,""),e.xp6(2),e.Oqu(t.qty),e.xp6(2),e.Oqu(t.unit_cost),e.xp6(2),e.Oqu(t.mrp),e.xp6(2),e.Oqu(t.discount),e.xp6(2),e.Oqu(t.tax),e.xp6(2),e.hij(" ",t.landing_cost,""),e.xp6(2),e.hij(" ",t.total,"")}}function w(a,l){if(1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td",61)(14,"table")(15,"tbody"),e.YNc(16,D,29,14,"tr",60),e.qZA()()()()),2&a){const t=l.$implicit,n=l.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(t.user.party_name),e.xp6(2),e.Oqu(t.check_gst),e.xp6(2),e.Oqu(e.xi3(9,6,t.total,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(12,9,t.bill_date,"yy/mm/dd")),e.xp6(5),e.Q6J("ngForOf",t.data)}}const W=function(a,l){return{itemsPerPage:a,currentPage:l}};function L(a,l){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,w,17,12,"tr",60),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.saleSummaryList,t.key,t.reverse),e.WLB(8,W,t.itemsPerPage,t.p)))}}function M(a,l){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",70)(3,"p",71),e._uU(4,"Data not available"),e.qZA()()()())}const J=[{path:"",component:(()=>{class a{constructor(t,n,o,s,r){this._reportService=t,this.commonService=n,this.cs=o,this.datepipe=s,this._coreService=r,this.saleSummaryList=[],this.hsnList=[],this.key="id",this.reverse=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let I=JSON.parse(m);this.fyID=I}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=n,this.pageLoadData(),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m)});const o=new Date,d=(o.getMonth(),o.getFullYear(),new Date(o));d.setDate(o.getDate()-14);const u=this.formatDate(d),h=this.formatDate(o);this.saleSummaryform=new c.cw({start:new c.NI(u,this.commonService.dateRangeValidator(this.financialYear)),end:new c.NI(h,this.commonService.dateRangeValidator(this.financialYear)),user_id:new c.NI,payment_type:new c.NI("")})}generatePDFAgain(){const t=new v.default,s=`User: ${this?.userDetails?.userName}`;t.setFontSize(12),t.setTextColor(33,43,54),t.text("PV",86,5),t.text("Hsncode Wise Sale",82,10),t.text(s,10,18),t.text("",10,25),S()(t,{head:[["#","Hsncode","Total Qty","Total Amount"]],body:this.saleSummaryList.map((r,d)=>[d+1,r.hsncode,r.total_qty,r.total_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),t.save("Hsncode Wise Sale.pdf")}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}pageLoadData(){this._coreService.getHSNCode().subscribe({next:t=>{this.hsnList=t,console.log(t)}})}handelChang(t){this.hsn_id=t.target.value,this.getSaleSummary(t.target.value)}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const r=[];o.querySelectorAll("th").forEach(d=>{const u=d.textContent?.trim();u&&"Is Active"!==u&&"Action"!==u&&r.push(u)}),t.push(r)}n.querySelectorAll("tbody tr").forEach(r=>{const d=[];r.querySelectorAll("td").forEach(u=>{const h=u.textContent?.trim();h&&d.push(h)}),t.push(d)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=Z.P6.aoa_to_sheet(t),o=Z.P6.book_new();Z.P6.book_append_sheet(o,n,"Sheet1");const s=Z.cW(o,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,U.saveAs)(r,"saleSummary.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const s=o.outerHTML,d=t.cloneNode(!0).outerHTML,h="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+d,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=h,window.print(),document.body.innerHTML=m}sort(t){this.key=t,this.reverse=!this.reverse}getSaleSummary(t){this._reportService.get_hsncode_wise_purchase_TaxList(this.startDate,this.endDate,t).subscribe(n=>{console.log(n),this.saleSummaryList=n,this.saleSummary=n})}getSelectedSaleSummaryDates(){console.log(this.saleSummaryform.value);const t=this.datepipe.transform(this.saleSummaryform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.saleSummaryform.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,t&&n&&this?.getSaleSummary(this.hsn_id)}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.saleSummaryList?.length)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(q.r),e.Y36(x.R),e.Y36(b.J),e.Y36(p.uU),e.Y36(P.p))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-hsncode-wise-purchase"]],decls:121,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,""],[3,"formGroup"],[1,"row"],[1,"col-lg-4","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],[1,"m-0"],["aria-label","Default select example",1,"form-select",3,"change"],["selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-6","col-12","mt-2"],[1,"wordset","d-flex","align-center","justify-content-end"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-left","10px","padding-right","20px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value"],[4,"ngFor","ngForOf"],["colspan","14"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","8%"],[2,"width","6%"],[2,"width","7%"],[2,"width","10%"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Hsncode Wise Purchase Report"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Hsncode Wise Purchase Report"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",7)(12,"form",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"strong"),e._uU(17,"Select Date"),e.qZA(),e.TgZ(18,"mat-form-field",12)(19,"mat-date-range-input",13)(20,"input",14),e.NdJ("dateChange",function(){return n.getSelectedSaleSummaryDates()}),e.qZA(),e.TgZ(21,"span",15)(22,"span",16),e._uU(23,"to"),e.qZA()(),e.TgZ(24,"input",17),e.NdJ("dateChange",function(){return n.getSelectedSaleSummaryDates()}),e.qZA()(),e._UZ(25,"mat-datepicker-toggle",18)(26,"mat-date-range-picker",null,19),e.qZA()()(),e.TgZ(28,"div",10)(29,"div",20)(30,"label",21),e._uU(31,"Select Hsncode"),e.qZA(),e.TgZ(32,"select",22),e.NdJ("change",function(r){return n.handelChang(r)}),e.TgZ(33,"option",23),e._uU(34," select Hsncode"),e.qZA(),e.YNc(35,H,2,2,"option",24),e.qZA()()(),e.TgZ(36,"div",25)(37,"div",26)(38,"ul")(39,"li")(40,"a",27),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(41,"img",28),e.qZA()(),e.TgZ(42,"li")(43,"a",29),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(44,"img",30),e.qZA()(),e.TgZ(45,"li")(46,"a",31),e.NdJ("click",function(){return n.printTable()}),e._UZ(47,"img",32),e.qZA()()()()()()()()(),e.TgZ(48,"div",33)(49,"div",34)(50,"table",35)(51,"thead")(52,"tr")(53,"th",36),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"#"),e._UZ(55,"i",37),e.qZA(),e.TgZ(56,"th",36),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"User "),e._UZ(58,"i",37),e.qZA(),e.TgZ(59,"th",36),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Check Gst "),e._UZ(61,"i",37),e.qZA(),e.TgZ(62,"th",36),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Total "),e._UZ(64,"i",37),e.qZA(),e.TgZ(65,"th",36),e.NdJ("click",function(){return n.sort("id")}),e._uU(66,"Bill Date "),e._UZ(67,"i",37),e.qZA(),e.TgZ(68,"th",38),e._uU(69,"Variant Name "),e.qZA(),e.TgZ(70,"th",39),e._uU(71,"Sku "),e.qZA(),e.TgZ(72,"th",40),e._uU(73,"Title"),e.qZA(),e.TgZ(74,"th",38),e._uU(75,"Hsn Code"),e.qZA(),e.TgZ(76,"th",41),e._uU(77,"Category"),e.qZA(),e.TgZ(78,"th",38),e._uU(79,"Sub category "),e.qZA(),e.TgZ(80,"th",42),e._uU(81,"Brand"),e.qZA(),e.TgZ(82,"th",42),e._uU(83,"Qty "),e.qZA(),e.TgZ(84,"th",43),e._uU(85,"Unit Cost "),e.qZA(),e.TgZ(86,"th",42),e._uU(87,"Mrp "),e.qZA(),e.TgZ(88,"th",42),e._uU(89,"Discount "),e.qZA(),e.TgZ(90,"th",42),e._uU(91,"Tax"),e.qZA(),e.TgZ(92,"th",38),e._uU(93,"Landing Cost "),e.qZA(),e.TgZ(94,"th",42),e._uU(95,"Total"),e.qZA()()(),e.YNc(96,L,4,11,"tbody",44),e.YNc(97,M,5,0,"tbody",44),e.qZA(),e.TgZ(98,"div",9)(99,"div",45)(100,"div",46),e._uU(101," Show per page "),e.TgZ(102,"select",47,48),e.NdJ("ngModelChange",function(r){return n.itemsPerPage=r})("change",function(){e.CHM(o);const r=e.MAs(103);return e.KtG(n.changePg(r.value))}),e.TgZ(104,"option",49),e._uU(105,"10"),e.qZA(),e.TgZ(106,"option",50),e._uU(107,"20"),e.qZA(),e.TgZ(108,"option",51),e._uU(109,"30"),e.qZA(),e.TgZ(110,"option",52),e._uU(111,"50"),e.qZA(),e.TgZ(112,"option",53),e._uU(113,"100"),e.qZA(),e.TgZ(114,"option",54),e._uU(115,"All"),e.qZA()()()(),e.TgZ(116,"div",55)(117,"div",56)(118,"pagination-controls",57),e.NdJ("pageChange",function(r){return n.p=r}),e.qZA(),e.TgZ(119,"div",58),e._uU(120),e.qZA()()()()()()()()()()}if(2&t){const o=e.MAs(27);e.xp6(12),e.Q6J("formGroup",n.saleSummaryform),e.xp6(7),e.Q6J("formGroup",n.saleSummaryform)("rangePicker",o)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",o),e.xp6(10),e.Q6J("ngForOf",n.hsnList),e.xp6(61),e.Q6J("ngIf",(null==n.saleSummaryList?null:n.saleSummaryList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.saleSummaryList?null:n.saleSummaryList.length)),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.saleSummaryList?null:n.saleSummaryList.length," of ",n.p," entries ")}},dependencies:[p.sg,p.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,y.LS,g.nW,g.wx,g.zY,g.By,g._g,f.KE,f.R9,p.JJ,p.uU,y._s,C.T]}),a})()}];let N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.Bz.forChild(J),_.Bz]}),a})();var O=i(3238),Y=i(87078),F=i(8468);let k=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,N,F.I,Y.T,g.FA,f.lN,O.XK]}),a})()}}]);