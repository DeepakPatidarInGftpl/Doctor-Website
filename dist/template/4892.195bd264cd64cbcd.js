"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4892],{94892:(ee,_,a)=>{a.r(_),a.d(_,{GeneralLedgerModule:()=>K});var g=a(36895),v=a(89299),s=a(24006),x=a(68675),b=a(54004),M=a(96166),A=a(12983),U=a.n(A),f=a(80574),P=a(94327),e=a(94650),k=a(97185),B=a(71071),O=a(80927),G=a(42917),N=a(87719),C=a(47957),T=a(3238),h=a(59549),Z=a(44144),u=a(99602),D=a(54333),w=a(54040);function S(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"mat-option",53),e.NdJ("onSelectionChange",function(){e.CHM(t);const i=e.oxw().$implicit,n=e.oxw();return e.KtG(n.selectUser(null==i?null:i.id))}),e._uU(1),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.Q6J("value",(null==t?null:t.name)+" "+(null==t?null:t.username)),e.xp6(1),e.hij(" ",(null==t?null:t.name)+" ("+(null==t?null:t.username)+")"," ")}}function J(r,p){if(1&r&&(e.ynx(0),e.YNc(1,S,2,2,"mat-option",52),e.BQk()),2&r){const t=p.$implicit;e.xp6(1),e.Q6J("ngIf",!0===t.is_active)}}function F(r,p){if(1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA()()),2&r){const t=p.$implicit,o=p.index;e.xp6(2),e.Oqu(o+1+"."),e.xp6(2),e.Oqu(e.xi3(5,8,t.date,"dd-MM-yyyy")),e.xp6(3),e.Oqu(t.particulars),e.xp6(2),e.Oqu(t.voucher_type),e.xp6(2),e.Oqu(t.voucher_no),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.Oqu(t.debit),e.xp6(2),e.Oqu(t.credit)}}const I=function(r,p){return{itemsPerPage:r,currentPage:p}};function q(r,p){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,F,18,11,"tr",25),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.productDayBookList,t.key,t.reverse),e.WLB(8,I,t.itemsPerPage,t.p)))}}function E(r,p){1&r&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",54)(3,"p",55),e._uU(4,"Data not available"),e.qZA()()()())}const Y=[{path:"",component:(()=>{class r{constructor(t,o,i,n,l,d,c,m){this.router=t,this.fb=o,this.toastr=i,this.transactionService=n,this.coreService=l,this.cs=d,this.datepipe=c,this.reportService=m,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new s.NI(""),this.userControl=new s.NI,this.productControl=new s.NI(""),this.users=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const t=new Date,n=(t.getMonth(),t.getFullYear(),new Date(t));n.setDate(t.getDate()-14);const l=this.formatDate(n),d=this.formatDate(t);this.productDayBookform=new s.cw({start:new s.NI(l),end:new s.NI(d),user_id:new s.NI}),this.startDate=this.productDayBookform.value?.start,this.endDate=this.productDayBookform.value?.end,this.UserId=this.productDayBookform.value?.user_id,this.getproductDayBook(),this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,x.O)(""),(0,b.U)(c=>this._filter1(c,!0)))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter1(t,o){const i="string"==typeof t?t.toLowerCase():t.toString().toLowerCase(),n=this.users.filter(o?l=>l?.name?.toLowerCase().includes(i)||l.username.toLowerCase().includes(i):l=>!l?.name?.toLowerCase().includes(i)||l.username.toLowerCase().includes(i));return!o&&0===n.length&&n.push({name:"No data found"}),n}getUser(){this.reportService.getUser().subscribe(t=>{this.users=t?.data})}sort(t){this.key=t,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,o,i){const n=(t-1)*o;return`Showing ${n+1}\u2013${Math.min(n+o-1,i-1)+1} of ${i} results`}getproductDayBook(){this.reportService.getGeneralLedger(this.startDate,this.endDate,this.UserId).subscribe(t=>{console.log(t),this.productDayBookList=t})}oncheckAccount(t){console.log(t),this.userName=t?.detail?.company_name,this.dataId=t?.id,this.productDayBookform.patchValue({user_id:this.dataId}),console.warn(this.productDayBookform.value),this.UserId=this.productDayBookform.value?.user_id,this?.getproductDayBook()}selectUser(t){this.dataId=t,this.productDayBookform.patchValue({user_id:this.dataId}),console.warn(this.productDayBookform.value),this.UserId=this.productDayBookform.value?.user_id,this?.getproductDayBook()}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const t=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(t),console.log(o),this.startDate=t,this.endDate=o,this?.getproductDayBook()}generatePDFAgain(){const t=new M.default,n=`Date Range From: ${this.startDate} - ${this.endDate}`,l=`User: ${this.userName}`;t.setFontSize(12),t.setTextColor(33,43,54),t.text("PV",86,5),t.text("General Ledger Report",82,10),t.text(l,10,18),t.text(n,10,22),t.text("",10,25),U()(t,{head:[["#","Date","Particulars","Voucher Type","Voucher No.","Description","Debit","Credit"]],body:this.productDayBookList.map((d,c)=>[c+1,this.formatDate(d.date),d.particulars,d.voucher_type,d.voucher_no,d.description,d.debit,d.credit]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),t.save("General_Ledger.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable");if(o){const i=o.querySelector("thead tr");if(i){const l=[];i.querySelectorAll("th").forEach(d=>{const c=d.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&l.push(c)}),t.push(l)}o.querySelectorAll("tbody tr").forEach(l=>{const d=[];l.querySelectorAll("td").forEach(c=>{const m=c.textContent?.trim();m&&d.push(m)}),t.push(d)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=f.P6.aoa_to_sheet(t),i=f.P6.book_new();f.P6.book_append_sheet(i,o,"Sheet1");const n=f.cW(i,{bookType:"xlsx",type:"array"}),l=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,P.saveAs)(l,"generalledger.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const i=document.querySelector(".titl");if(!i)return void console.error("Title element with class 'titl' not found.");const n=i.outerHTML,d=t.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+d,W=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=m,window.print(),document.body.innerHTML=W}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.productDayBookList?.length)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.F0),e.Y36(s.qu),e.Y36(k._W),e.Y36(B.p),e.Y36(O.p),e.Y36(G.J),e.Y36(g.uU),e.Y36(N.r))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-general-ledger"]],decls:101,vars:15,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search UserName","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"General Ledger"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your General Ledger"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),e._uU(17,"Select Date"),e.qZA(),e.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),e.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),e.qZA(),e.TgZ(21,"span",16)(22,"span",17),e._uU(23,"to"),e.qZA()(),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),e.qZA()(),e._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),e.qZA()()(),e.TgZ(28,"div",21)(29,"div",22)(30,"label"),e._uU(31,"User Name"),e.qZA(),e._UZ(32,"input",23),e.TgZ(33,"mat-autocomplete",null,24),e.YNc(35,J,2,1,"ng-container",25),e.ALo(36,"async"),e.qZA()()()()()(),e.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),e.NdJ("click",function(){return o.generatePDFAgain()}),e._UZ(41,"img",28),e.qZA()(),e.TgZ(42,"li")(43,"a",29),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(44,"img",30),e.qZA()(),e.TgZ(45,"li")(46,"a",31),e.NdJ("click",function(){return o.printTable()}),e._UZ(47,"img",32),e.qZA()()()()(),e.TgZ(48,"div",33)(49,"table",34)(50,"thead")(51,"tr")(52,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(53,"#"),e._UZ(54,"i",36),e.qZA(),e.TgZ(55,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(56,"Date "),e._UZ(57,"i",36),e.qZA(),e.TgZ(58,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(59,"Particulars "),e._UZ(60,"i",36),e.qZA(),e.TgZ(61,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(62," Voucher Type "),e._UZ(63,"i",36),e.qZA(),e.TgZ(64,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(65," Voucher No. "),e._UZ(66,"i",36),e.qZA(),e.TgZ(67,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(68," Description "),e._UZ(69,"i",36),e.qZA(),e.TgZ(70,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(71,"Debit"),e._UZ(72,"i",36),e.qZA(),e.TgZ(73,"th",35),e.NdJ("click",function(){return o.sort("id")}),e._uU(74,"Credit"),e._UZ(75,"i",36),e.qZA()()(),e.YNc(76,q,4,11,"tbody",37),e.YNc(77,E,5,0,"tbody",37),e.qZA(),e.TgZ(78,"div",10)(79,"div",38)(80,"div",39),e._uU(81," Show per page "),e.TgZ(82,"select",40,41),e.NdJ("ngModelChange",function(l){return o.itemsPerPage=l})("change",function(){e.CHM(i);const l=e.MAs(83);return e.KtG(o.changePg(l.value))}),e.TgZ(84,"option",42),e._uU(85,"10"),e.qZA(),e.TgZ(86,"option",43),e._uU(87,"20"),e.qZA(),e.TgZ(88,"option",44),e._uU(89,"30"),e.qZA(),e.TgZ(90,"option",45),e._uU(91,"50"),e.qZA(),e.TgZ(92,"option",46),e._uU(93,"100"),e.qZA(),e.TgZ(94,"option",47),e._uU(95,"All"),e.qZA()()()(),e.TgZ(96,"div",48)(97,"div",49)(98,"pagination-controls",50),e.NdJ("pageChange",function(l){return o.p=l}),e.qZA(),e.TgZ(99,"div",51),e._uU(100),e.qZA()()()()()()()()()}if(2&t){const i=e.MAs(27),n=e.MAs(34);e.xp6(12),e.Q6J("formGroup",o.productDayBookform),e.xp6(7),e.Q6J("formGroup",o.productDayBookform)("rangePicker",i),e.xp6(6),e.Q6J("for",i),e.xp6(7),e.Q6J("formControl",o.userControl)("matAutocomplete",n),e.xp6(3),e.Q6J("ngForOf",e.lcZ(36,13,o.filteredusers)),e.xp6(41),e.Q6J("ngIf",(null==o.productDayBookList?null:o.productDayBookList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==o.productDayBookList?null:o.productDayBookList.length)),e.xp6(5),e.Q6J("ngModel",o.itemsPerPage),e.xp6(18),e.lnq("Showing ",o.itemsPerPage," to ",null==o.productDayBookList?null:o.productDayBookList.length," of ",o.p," entries")}},dependencies:[g.sg,g.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.oH,s.sg,s.u,C.XC,C.ZL,T.ey,h.KE,h.R9,Z.Nt,u.nW,u.wx,u.zY,u.By,u._g,D.LS,g.Ov,g.uU,D._s,w.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),r})()}];let H=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.Bz.forChild(Y),v.Bz]}),r})();var z=a(3056),Q=a(87078),L=a(86323),y=a(92642),R=a(95113),$=a(64155),V=a(6205),j=a(8468);const X={User:y.n5m,UserCheck:y.uS3,FileText:y.acj,File:y.$BE};let K=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[g.uU],imports:[g.ez,H,s.u5,s.UX,C.Bb,h.lN,Z.c,z.ZQ,Q.T,u.FA,h.lN,T.XK,R.LD,$.vQ,j.I,V.X,L.p.pick(X),L.p]}),r})()}}]);