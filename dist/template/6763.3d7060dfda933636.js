"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6763],{6763:(tt,Z,s)=>{s.r(Z),s.d(Z,{LossQtyModule:()=>X});var m=s(36895),_=s(89299),d=s(24006),x=s(96166),b=s(12983),L=s.n(b),h=s(80574),M=s(94327),t=s(94650),D=s(97185),A=s(71071),Q=s(80927),k=s(42917),U=s(87719),v=s(54333),f=s(59549),g=s(99602),O=s(54040);function P(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"a",57)(1,"input",58,59),t.NdJ("change",function(a){const l=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.SelectedBranch(l.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",60),t.NdJ("click",function(a){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&i){const e=p.$implicit,o=p.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(e.title)}}function B(i,p){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const q=function(){return{standalone:!0}};function w(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",51)(2,"button",52),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",53)(5,"li")(6,"input",54),t.NdJ("ngModelChange",function(a){t.CHM(e);const n=t.oxw();return t.KtG(n.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,P,5,5,"a",55),t.qZA()()(),t.TgZ(9,"div",56),t.YNc(10,B,2,1,"span",35),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,q)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function N(i,p){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()()),2&i){const e=p.$implicit,o=p.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.title),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.category),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.subcategory),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.brand),t.xp6(2),t.Oqu(e.variant),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Oqu(e.voucher_type),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty)}}const J=function(i,p){return{itemsPerPage:i,currentPage:p}};function S(i,p){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,N,25,12,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productDayBookList,e.key,e.reverse),t.WLB(8,J,e.itemsPerPage,e.p)))}}function I(i,p){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),t._uU(4,"Data not available"),t.qZA()()()())}const F=[{path:"",component:(()=>{class i{constructor(e,o,a,n,l,r,c,u){this.router=e,this.fb=o,this.toastr=a,this.transactionService=n,this.coreService=l,this.cs=r,this.datepipe=c,this.reportService=u,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.productControl=new d.NI(""),this.isAdmin=!1,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let c=localStorage.getItem("financialYear");console.warn(JSON.parse(c));let u=JSON.parse(c);this.fyID=u}this.cs.userDetails$.subscribe(c=>{this.isAdmin="admin"==c.role,this.getBranch()}),this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const e=new Date,n=(e.getMonth(),e.getFullYear(),new Date(e));n.setDate(e.getDate()-14);const l=this.formatDate(n),r=this.formatDate(e);this.productDayBookform=new d.cw({start:new d.NI(l),end:new d.NI(r)}),this.startDate=this.productDayBookform.value?.start,this.endDate=this.productDayBookform.value?.end,this.getproductDayBook()}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}sort(e){this.key=e,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,a){const n=(e-1)*o;return`Showing ${n+1}\u2013${Math.min(n+o-1,a-1)+1} of ${a} results`}getproductDayBook(){this.reportService.getLossQty(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.productDayBookList=e})}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const e=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getproductDayBook()}generatePDFAgain(){const e=new x.default("landscape"),n=`Date Range From: ${this.startDate} - ${this.endDate}`,l=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Loss Qty Report",82,10),e.text(l,10,18),e.text(n,10,22),e.text("",10,25),L()(e,{head:[["#","Title","Category","Subcategory","Brand","Variant","Date","Price","Voucher Type","Voucher No.","IN Qty","Out Qty"]],body:this.productDayBookList.map((r,c)=>[c+1,r.product.title,r.product.category,r.product.subcategory,r.product.brand,r.variant,r.date,r.price,r.voucher_type,r.voucher_no,r.in_qty,r.out_qty]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Loss_Qty .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const a=o.querySelector("thead tr");if(a){const l=[];a.querySelectorAll("th").forEach(r=>{const c=r.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&l.push(c)}),e.push(l)}o.querySelectorAll("tbody tr").forEach(l=>{const r=[];l.querySelectorAll("td").forEach(c=>{const u=c.textContent?.trim();u&&r.push(u)}),e.push(r)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=h.P6.aoa_to_sheet(e),a=h.P6.book_new();h.P6.book_append_sheet(a,o,"Sheet1");const n=h.cW(a,{bookType:"xlsx",type:"array"}),l=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,M.saveAs)(l,"journalBook.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const n=a.outerHTML,r=e.cloneNode(!0).outerHTML,u="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+r,W=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=u,window.print(),document.body.innerHTML=W}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.productDayBookList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,o){if(o)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(n=>n==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.F0),t.Y36(d.qu),t.Y36(D._W),t.Y36(A.p),t.Y36(Q.p),t.Y36(k.J),t.Y36(m.uU),t.Y36(U.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-loss-qty"]],decls:108,vars:11,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Loss Qty"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Loss Qty"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,w,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return o.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(51,"Title "),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(54,"Category "),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(57,"Subcategory "),t._UZ(58,"i",34),t.qZA(),t.TgZ(59,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(60,"Brand "),t._UZ(61,"i",34),t.qZA(),t.TgZ(62,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(63,"Variant "),t._UZ(64,"i",34),t.qZA(),t.TgZ(65,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(66,"Date "),t._UZ(67,"i",34),t.qZA(),t.TgZ(68,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(69,"price "),t._UZ(70,"i",34),t.qZA(),t.TgZ(71,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(72,"Voucher Type "),t._UZ(73,"i",34),t.qZA(),t.TgZ(74,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(75,"Voucher No. "),t._UZ(76,"i",34),t.qZA(),t.TgZ(77,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(78,"In Qty "),t._UZ(79,"i",34),t.qZA(),t.TgZ(80,"th",33),t.NdJ("click",function(){return o.sort("id")}),t._uU(81,"Out Qty "),t._UZ(82,"i",34),t.qZA()()(),t.YNc(83,S,4,11,"tbody",35),t.YNc(84,I,5,0,"tbody",35),t.qZA(),t.TgZ(85,"div",6)(86,"div",36)(87,"div",37),t._uU(88," Show per page "),t.TgZ(89,"select",38,39),t.NdJ("ngModelChange",function(l){return o.itemsPerPage=l})("change",function(){t.CHM(a);const l=t.MAs(90);return t.KtG(o.changePg(l.value))}),t.TgZ(91,"option",40),t._uU(92,"10"),t.qZA(),t.TgZ(93,"option",41),t._uU(94,"20"),t.qZA(),t.TgZ(95,"option",42),t._uU(96,"30"),t.qZA(),t.TgZ(97,"option",43),t._uU(98,"50"),t.qZA(),t.TgZ(99,"option",44),t._uU(100,"100"),t.qZA(),t.TgZ(101,"option",45),t._uU(102,"All"),t.qZA()()()(),t.TgZ(103,"div",46)(104,"div",47)(105,"pagination-controls",48),t.NdJ("pageChange",function(l){return o.p=l}),t.qZA(),t.TgZ(106,"div",49),t._uU(107),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",o.isAdmin),t.xp6(5),t.Q6J("formGroup",o.productDayBookform),t.xp6(7),t.Q6J("formGroup",o.productDayBookform)("rangePicker",a),t.xp6(6),t.Q6J("for",a),t.xp6(54),t.Q6J("ngIf",(null==o.productDayBookList?null:o.productDayBookList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.productDayBookList?null:o.productDayBookList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.productDayBookList?null:o.productDayBookList.length," of ",o.p," entries ")}},dependencies:[m.sg,m.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,v.LS,f.KE,f.R9,g.nW,g.wx,g.zY,g.By,g._g,v._s,O.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})()}];let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(F),_.Bz]}),i})();var E=s(47957),H=s(44144),z=s(3056),R=s(87078),T=s(86323),y=s(92642),V=s(3238),$=s(95113),j=s(64155),G=s(6205),C=s(8468);const K={User:y.n5m,UserCheck:y.uS3,FileText:y.acj,File:y.$BE};let X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[m.uU],imports:[m.ez,Y,C.I,d.u5,d.UX,E.Bb,f.lN,H.c,z.ZQ,R.T,g.FA,f.lN,V.XK,$.LD,j.vQ,C.I,G.X,T.p.pick(K),T.p]}),i})()}}]);