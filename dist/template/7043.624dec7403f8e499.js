"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7043],{57043:(X,y,a)=>{a.r(y),a.d(y,{BankBookModule:()=>j});var m=a(36895),B=a(89299),l=a(24006),Z=a(96166),C=a(12983),b=a.n(C),f=a(80574),D=a(94327),t=a(94650),M=a(97185),x=a(71071),_=a(80927),P=a(42917),A=a(87719),h=a(59549),g=a(99602),v=a(54333),U=a(54040);function O(i,p){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA()()),2&i){const e=p.$implicit,o=p.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(t.xi3(5,8,e.date,"dd-MM-yyyy")),t.xp6(3),t.Oqu(e.particulars),t.xp6(2),t.Oqu(e.voucher_type),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.debit),t.xp6(2),t.Oqu(e.credit)}}const N=function(i,p){return{itemsPerPage:i,currentPage:p}};function S(i,p){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,O,18,11,"tr",46),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productDayBookList,e.key,e.reverse),t.WLB(8,N,e.itemsPerPage,e.p)))}}function J(i,p){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",47)(3,"p",48),t._uU(4,"Data not available"),t.qZA()()()())}const L=[{path:"",component:(()=>{class i{constructor(e,o,n,s,c,r,d,u){this.router=e,this.fb=o,this.toastr=n,this.transactionService=s,this.coreService=c,this.cs=r,this.datepipe=d,this.reportService=u,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new l.NI(""),this.productControl=new l.NI(""),this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.userName=d?.username});const e=new Date,s=(e.getMonth(),e.getFullYear(),new Date(e));s.setDate(e.getDate()-14);const c=this.formatDate(s),r=this.formatDate(e);this.productDayBookform=new l.cw({start:new l.NI(c),end:new l.NI(r)}),this.startDate=this.productDayBookform.value?.start,this.endDate=this.productDayBookform.value?.end,this.getproductDayBook()}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}sort(e){this.key=e,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,n){const s=(e-1)*o;return`Showing ${s+1}\u2013${Math.min(s+o-1,n-1)+1} of ${n} results`}getproductDayBook(){this.reportService.getBankBook(this.startDate,this.endDate).subscribe(e=>{console.log(e),this.productDayBookList=e})}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const e=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getproductDayBook()}generatePDFAgain(){const e=new Z.default,s=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Bank Book Report",82,10),e.text(c,10,18),e.text(s,10,22),e.text("",10,25),b()(e,{head:[["#","Date","Particulars","Voucher Type","Voucher No.","Description","Debit","Credit"]],body:this.productDayBookList.map((r,d)=>[d+1,this.formatDate(r.date),r.particulars,r.voucher_type,r.voucher_no,r.description,r.debit,r.credit]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Bank_Book.pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const n=o.querySelector("thead tr");if(n){const c=[];n.querySelectorAll("th").forEach(r=>{const d=r.textContent?.trim();d&&"Is Active"!==d&&"Action"!==d&&c.push(d)}),e.push(c)}o.querySelectorAll("tbody tr").forEach(c=>{const r=[];c.querySelectorAll("td").forEach(d=>{const u=d.textContent?.trim();u&&r.push(u)}),e.push(r)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=f.P6.aoa_to_sheet(e),n=f.P6.book_new();f.P6.book_append_sheet(n,o,"Sheet1");const s=f.cW(n,{bookType:"xlsx",type:"array"}),c=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,D.saveAs)(c,"bankBook.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const s=n.outerHTML,r=e.cloneNode(!0).outerHTML,u="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+r,V=document.body.innerHTML;document.body.innerHTML=u,window.print(),document.body.innerHTML=V}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(B.F0),t.Y36(l.qu),t.Y36(M._W),t.Y36(x.p),t.Y36(_.p),t.Y36(P.J),t.Y36(m.uU),t.Y36(A.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-bank-book"]],decls:91,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Bank Book"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Bank Book"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()()()()(),t.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return o.printTable()}),t._UZ(38,"img",27),t.qZA()()()()(),t.TgZ(39,"div",28)(40,"table",29)(41,"thead")(42,"tr")(43,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(44,"#"),t._UZ(45,"i",31),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(47,"Date "),t._UZ(48,"i",31),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(50,"Particulars "),t._UZ(51,"i",31),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(53," Voucher Type "),t._UZ(54,"i",31),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(56," Voucher No. "),t._UZ(57,"i",31),t.qZA(),t.TgZ(58,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(59," Description "),t._UZ(60,"i",31),t.qZA(),t.TgZ(61,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(62,"Debit"),t._UZ(63,"i",31),t.qZA(),t.TgZ(64,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(65,"Credit"),t._UZ(66,"i",31),t.qZA()()(),t.YNc(67,S,4,11,"tbody",32),t.YNc(68,J,5,0,"tbody",32),t.qZA(),t.TgZ(69,"div",10)(70,"div",33)(71,"div",34),t._uU(72," Show per page "),t.TgZ(73,"select",35),t.NdJ("ngModelChange",function(s){return o.itemsPerPage=s}),t.TgZ(74,"option",36),t._uU(75,"10"),t.qZA(),t.TgZ(76,"option",37),t._uU(77,"20"),t.qZA(),t.TgZ(78,"option",38),t._uU(79,"30"),t.qZA(),t.TgZ(80,"option",39),t._uU(81,"50"),t.qZA(),t.TgZ(82,"option",40),t._uU(83,"100"),t.qZA(),t.TgZ(84,"option",41),t._uU(85,"All"),t.qZA()()()(),t.TgZ(86,"div",42)(87,"div",43)(88,"pagination-controls",44),t.NdJ("pageChange",function(s){return o.p=s}),t.qZA(),t.TgZ(89,"div",45),t._uU(90),t.qZA()()()()()()()()()),2&e){const n=t.MAs(27);t.xp6(12),t.Q6J("formGroup",o.productDayBookform),t.xp6(7),t.Q6J("formGroup",o.productDayBookform)("rangePicker",n),t.xp6(6),t.Q6J("for",n),t.xp6(42),t.Q6J("ngIf",(null==o.productDayBookList?null:o.productDayBookList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.productDayBookList?null:o.productDayBookList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(17),t.lnq(" Showing ",o.itemsPerPage," to ",o.itemsPerPage," of ",o.p," entries ")}},dependencies:[m.sg,m.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.On,l.sg,l.u,h.KE,h.R9,g.nW,g.wx,g.zY,g.By,g._g,v.LS,m.uU,v._s,U.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[B.Bz.forChild(L),B.Bz]}),i})();var q=a(47957),F=a(44144),Y=a(3056),E=a(87078),T=a(86323),k=a(92642),I=a(3238),z=a(95113),H=a(64155),R=a(6205),Q=a(8468);const $={User:k.n5m,UserCheck:k.uS3,FileText:k.acj,File:k.$BE};let j=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[m.uU],imports:[m.ez,w,l.u5,l.UX,q.Bb,h.lN,F.c,Y.ZQ,E.T,g.FA,h.lN,I.XK,z.LD,H.vQ,Q.I,R.X,T.p.pick($),T.p]}),i})()}}]);