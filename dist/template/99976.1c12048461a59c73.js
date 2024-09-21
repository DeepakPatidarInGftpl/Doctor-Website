"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[99976],{99976:(H,y,l)=>{l.r(y),l.d(y,{MaterialConsumptionModule:()=>I});var g=l(36895),T=l(4392),_=l(96166),C=l(12983),v=l.n(C),h=l(80574),M=l(94327),s=l(24006),t=l(94650),S=l(87719),A=l(43443),U=l(42917),D=l(80927),Z=l(54333),d=l(99602),f=l(59549),b=l(54040);function q(o,m){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&o){const e=m.$implicit,n=m.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(null==e||null==e.user?null:e.user.party_name),t.xp6(2),t.Oqu(null==e||null==e.barcode||null==e.barcode.product?null:e.barcode.product.title),t.xp6(2),t.Oqu(null==e?null:e.consumption_date),t.xp6(2),t.Oqu(null==e?null:e.consumption_no),t.xp6(2),t.Oqu(null==e?null:e.consumption_type),t.xp6(2),t.Oqu(null==e?null:e.qty),t.xp6(2),t.Oqu(null==e?null:e.price),t.xp6(2),t.Oqu(null==e?null:e.total_amount)}}const N=function(o,m){return{itemsPerPage:o,currentPage:m}};function J(o,m){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,q,19,9,"tr",48),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.saleSummaryList,e.key,e.reverse),t.WLB(8,N,e.itemsPerPage,e.p)))}}function x(o,m){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",49)(3,"p",50),t._uU(4,"Data not available"),t.qZA()()()())}const L=[{path:"",component:(()=>{class o{constructor(e,n,i,a,r){this._reportService=e,this.commonService=n,this.cs=i,this.datepipe=a,this._coreService=r,this.saleSummaryList=[],this.key="id",this.reverse=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10}ngOnInit(){if(localStorage.getItem("financialYear")){let u=localStorage.getItem("financialYear");console.warn(JSON.parse(u));let p=JSON.parse(u);this.fyID=p}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=n,this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u)});const i=new Date,a=new Date(i);a.setDate(i.getDate()-14);const r=this.formatDate(a),c=this.formatDate(i);this.saleSummaryform=new s.cw({start:new s.NI(r,this.commonService.dateRangeValidator(this.financialYear)),end:new s.NI(c,this.commonService.dateRangeValidator(this.financialYear)),user_id:new s.NI,payment_type:new s.NI("")}),this.startDate=this.saleSummaryform.get("start")?.value,this.endDate=this.saleSummaryform.get("end")?.value,this.getSaleSummary()}generatePDFAgain(){const e=new _.default,a=`User: ${this?.userDetails?.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Hsncode Wise Sale",82,10),e.text(a,10,18),e.text("",10,25),v()(e,{head:[["#","Hsncode","Total Qty","Total Amount"]],body:this.saleSummaryList.map((r,c)=>[c+1,r.hsncode,r.total_qty,r.total_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Hsncode Wise Sale.pdf")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const i=n.querySelector("thead tr");if(i){const r=[];i.querySelectorAll("th").forEach(c=>{const u=c.textContent?.trim();u&&"Is Active"!==u&&"Action"!==u&&r.push(u)}),e.push(r)}n.querySelectorAll("tbody tr").forEach(r=>{const c=[];r.querySelectorAll("td").forEach(u=>{const p=u.textContent?.trim();p&&c.push(p)}),e.push(c)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=h.P6.aoa_to_sheet(e),i=h.P6.book_new();h.P6.book_append_sheet(i,n,"Sheet1");const a=h.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,M.saveAs)(r,"saleSummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const i=document.querySelector(".titl");if(!i)return void console.error("Title element with class 'titl' not found.");const a=i.outerHTML,c=e.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+c,E=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=E}sort(e){this.key=e,this.reverse=!this.reverse}getSaleSummary(){console.log(this.startDate),this._reportService.getMaterialConsumptionList(this.startDate,this.endDate).subscribe(e=>{console.log(e),this.saleSummaryList=e,this.saleSummary=e})}getSelectedSaleSummaryDates(e){console.log(this.saleSummaryform.value);const n=this.datepipe.transform(this.saleSummaryform.value.start,"yyyy-MM-dd"),i=this.datepipe.transform(this.saleSummaryform.value.end,"yyyy-MM-dd");console.log(e),this.startDate=n,this.endDate=i,"end"==e&&this?.getSaleSummary()}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.saleSummaryList?.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S.r),t.Y36(A.R),t.Y36(U.J),t.Y36(g.uU),t.Y36(D.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-material-consumption"]],decls:96,vars:12,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,""],[3,"formGroup"],[1,"row"],[1,"col-lg-6","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-6","col-sm-6","col-12","mt-4"],[1,"wordset","d-flex","align-center","justify-content-end"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive","mt-3"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Material Consumption Report"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Material Consumption Report"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"form",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"strong"),t._uU(16,"Select Date"),t.qZA(),t.TgZ(17,"mat-form-field",12)(18,"mat-date-range-input",13)(19,"input",14),t.NdJ("dateChange",function(){return n.getSelectedSaleSummaryDates("start")}),t.qZA(),t.TgZ(20,"span",15)(21,"span",16),t._uU(22,"to"),t.qZA()(),t.TgZ(23,"input",17),t.NdJ("dateChange",function(){return n.getSelectedSaleSummaryDates("end")}),t.qZA()(),t._UZ(24,"mat-datepicker-toggle",18)(25,"mat-date-range-picker",null,19),t.qZA()()(),t.TgZ(27,"div",20)(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return n.printTable()}),t._UZ(38,"img",27),t.qZA()()()()()()()(),t.TgZ(39,"div",28)(40,"div",29)(41,"table",30)(42,"thead")(43,"tr")(44,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(45,"#"),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"User "),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"Product "),t._UZ(52,"i",32),t.qZA(),t.TgZ(53,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Consumption Date "),t._UZ(55,"i",32),t.qZA(),t.TgZ(56,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Consumption No"),t._UZ(58,"i",32),t.qZA(),t.TgZ(59,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Consumption Type "),t._UZ(61,"i",32),t.qZA(),t.TgZ(62,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Qty "),t._UZ(64,"i",32),t.qZA(),t.TgZ(65,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Price "),t._UZ(67,"i",32),t.qZA(),t.TgZ(68,"th",31),t.NdJ("click",function(){return n.sort("id")}),t._uU(69,"Total Amount "),t._UZ(70,"i",32),t.qZA()()(),t.YNc(71,J,4,11,"tbody",33),t.YNc(72,x,5,0,"tbody",33),t.qZA(),t.TgZ(73,"div",9)(74,"div",34)(75,"div",35),t._uU(76," Show per page "),t.TgZ(77,"select",36,37),t.NdJ("ngModelChange",function(r){return n.itemsPerPage=r})("change",function(){t.CHM(i);const r=t.MAs(78);return t.KtG(n.changePg(r.value))}),t.TgZ(79,"option",38),t._uU(80,"10"),t.qZA(),t.TgZ(81,"option",39),t._uU(82,"20"),t.qZA(),t.TgZ(83,"option",40),t._uU(84,"30"),t.qZA(),t.TgZ(85,"option",41),t._uU(86,"50"),t.qZA(),t.TgZ(87,"option",42),t._uU(88,"100"),t.qZA(),t.TgZ(89,"option",43),t._uU(90,"All"),t.qZA()()()(),t.TgZ(91,"div",44)(92,"div",45)(93,"pagination-controls",46),t.NdJ("pageChange",function(r){return n.p=r}),t.qZA(),t.TgZ(94,"div",47),t._uU(95),t.qZA()()()()()()()()()()}if(2&e){const i=t.MAs(26);t.xp6(11),t.Q6J("formGroup",n.saleSummaryform),t.xp6(7),t.Q6J("formGroup",n.saleSummaryform)("rangePicker",i)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",i),t.xp6(47),t.Q6J("ngIf",(null==n.saleSummaryList?null:n.saleSummaryList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.saleSummaryList?null:n.saleSummaryList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.saleSummaryList?null:n.saleSummaryList.length," of ",n.p," entries ")}},dependencies:[g.sg,g.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.sg,s.u,Z.LS,d.nW,d.wx,d.zY,d.By,d._g,f.KE,f.R9,Z._s,b.T]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(L),T.Bz]}),o})();var k=l(3238),w=l(87078),Y=l(8468);let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,P,Y.I,w.T,d.FA,f.lN,k.XK]}),o})()}}]);