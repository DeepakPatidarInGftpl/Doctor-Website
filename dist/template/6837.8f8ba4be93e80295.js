"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6837],{36837:(nt,x,l)=>{l.r(x),l.d(x,{SaleItemRegisterModule:()=>tt});var h=l(36895),T=l(89299),c=l(24006),b=l(96166),S=l(12983),D=l.n(S),f=l(80574),A=l(94327),t=l(94650),M=l(97185),I=l(71071),k=l(80927),U=l(42917),R=l(87719),B=l(43443),v=l(54333),_=l(59549),u=l(99602),O=l(54040);function P(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"a",57)(1,"input",58,59),t.NdJ("change",function(a){const s=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.SelectedBranch(s.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",60),t.NdJ("click",function(a){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&i){const e=d.$implicit,n=d.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function q(i,d){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const N=function(){return{standalone:!0}};function J(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",51)(2,"button",52),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",53)(5,"li")(6,"input",54),t.NdJ("ngModelChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,P,5,5,"a",55),t.qZA()()(),t.TgZ(9,"div",56),t.YNc(10,q,2,1,"span",35),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,N)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function w(i,d){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA()()),2&i){const e=d.$implicit,n=d.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.bill.bill_date),t.xp6(2),t.Oqu(e.bill.customer_bill_no),t.xp6(2),t.Oqu(e.bill.gst),t.xp6(2),t.Oqu(e.data.barcode),t.xp6(2),t.Oqu(e.data.item_name),t.xp6(2),t.Oqu(e.data.qty),t.xp6(2),t.Oqu(e.data.price),t.xp6(2),t.Oqu(e.data.taxtable_amount.taxtable_amounnt),t.xp6(2),t.Oqu(e.data.taxtable_amount.total_tax.toFixed(2)),t.xp6(2),t.Oqu(e.data.discount),t.xp6(2),t.Oqu(e.data.additional_discount),t.xp6(2),t.Oqu(e.data.tax),t.xp6(2),t.Oqu(e.data.total)}}const L=function(i,d){return{itemsPerPage:i,currentPage:d}};function F(i,d){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,w,29,14,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productDayBookList,e.key,e.reverse),t.WLB(8,L,e.itemsPerPage,e.p)))}}function Y(i,d){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),t._uU(4,"Data not available"),t.qZA()()()())}const E=[{path:"",component:(()=>{class i{constructor(e,n,a,o,s,r,m,p,g){this.router=e,this.fb=n,this.toastr=a,this.transactionService=o,this.coreService=s,this.cs=r,this.datepipe=m,this.reportService=p,this.commonService=g,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new c.NI(""),this.productControl=new c.NI(""),this.isAdmin=!1,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let g=localStorage.getItem("financialYear");console.warn(JSON.parse(g));let et=JSON.parse(g);this.fyID=et}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=n,this.cs.userDetails$.subscribe(g=>{this.isAdmin="admin"==g.role,this.getBranch()}),this.cs.userDetails$.subscribe(g=>{this.userDetails=g,console.log(g),this.userName=g?.username});const a=new Date,r=(a.getMonth(),a.getFullYear(),new Date(a));r.setDate(a.getDate()-14);const m=this.formatDate(r),p=this.formatDate(a);this.productDayBookform=new c.cw({start:new c.NI(m,this.commonService.dateRangeValidator(this.financialYear)),end:new c.NI(p,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.productDayBookform,this.minDate,this.maxDate),this.startDate=this.productDayBookform.value?.start,this.endDate=this.productDayBookform.value?.end,this.getproductDayBook()}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}sort(e){this.key=e,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,a){const o=(e-1)*n;return`Showing ${o+1}\u2013${Math.min(o+n-1,a-1)+1} of ${a} results`}getproductDayBook(){this.reportService.getSaleItemRegister(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.productDayBookList=e})}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const e=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getproductDayBook()}generatePDFAgain(){const e=new b.default("landscape"),o=`Date Range From: ${this.startDate} - ${this.endDate}`,s=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Sale Item Register Report",82,10),e.text(s,10,18),e.text(o,10,22),e.text("",10,25),D()(e,{head:[["#","BillDate","CustomerBillNo.","Gst","Barcode","ItemName","Qty","Price","TaxableAmount","TotalTax","Discount","AdditionalDiscount","Tax","Total"]],body:this.productDayBookList.map((r,m)=>[m+1,this.formatDate(r.bill.bill_date),r.bill.customer_bill_no,r.bill.gst,r.data.barcode,r.data.item_name,r.data.qty,r.data.price,r.data.taxtable_amount.taxtable_amounnt,r.data.taxtable_amount.total_tax.toFixed(2),r.data.discount,r.data.additional_discount,r.data.tax,r.data.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Sale_Item_Register.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const s=[];a.querySelectorAll("th").forEach(r=>{const m=r.textContent?.trim();m&&"Is Active"!==m&&"Action"!==m&&s.push(m)}),e.push(s)}n.querySelectorAll("tbody tr").forEach(s=>{const r=[];s.querySelectorAll("td").forEach(m=>{const p=m.textContent?.trim();p&&r.push(p)}),e.push(r)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=f.P6.aoa_to_sheet(e),a=f.P6.book_new();f.P6.book_append_sheet(a,n,"Sheet1");const o=f.cW(a,{bookType:"xlsx",type:"array"}),s=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(s,"journalBook.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const o=a.outerHTML,r=e.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+r,g=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=g}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.productDayBookList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(o=>o==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.F0),t.Y36(c.qu),t.Y36(M._W),t.Y36(I.p),t.Y36(k.p),t.Y36(U.J),t.Y36(h.uU),t.Y36(R.r),t.Y36(B.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sale-item-register"]],decls:114,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-12","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sale Item Register"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sale Item Register"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,J,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(51," Bill Date "),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Customer Bill No. "),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Gst"),t._UZ(58,"i",34),t.qZA(),t.TgZ(59,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Barcode "),t._UZ(61,"i",34),t.qZA(),t.TgZ(62,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Item Name "),t._UZ(64,"i",34),t.qZA(),t.TgZ(65,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Qty "),t._UZ(67,"i",34),t.qZA(),t.TgZ(68,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(69,"Price"),t._UZ(70,"i",34),t.qZA(),t.TgZ(71,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(72,"Taxable Amount"),t._UZ(73,"i",34),t.qZA(),t.TgZ(74,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(75,"Total Tax"),t._UZ(76,"i",34),t.qZA(),t.TgZ(77,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(78,"Discount"),t._UZ(79,"i",34),t.qZA(),t.TgZ(80,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(81,"Additional Discount"),t._UZ(82,"i",34),t.qZA(),t.TgZ(83,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(84," Tax"),t._UZ(85,"i",34),t.qZA(),t.TgZ(86,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(87,"Total"),t._UZ(88,"i",34),t.qZA()()(),t.YNc(89,F,4,11,"tbody",35),t.YNc(90,Y,5,0,"tbody",35),t.qZA(),t.TgZ(91,"div",6)(92,"div",36)(93,"div",37),t._uU(94," Show per page "),t.TgZ(95,"select",38,39),t.NdJ("ngModelChange",function(s){return n.itemsPerPage=s})("change",function(){t.CHM(a);const s=t.MAs(96);return t.KtG(n.changePg(s.value))}),t.TgZ(97,"option",40),t._uU(98,"10"),t.qZA(),t.TgZ(99,"option",41),t._uU(100,"20"),t.qZA(),t.TgZ(101,"option",42),t._uU(102,"30"),t.qZA(),t.TgZ(103,"option",43),t._uU(104,"50"),t.qZA(),t.TgZ(105,"option",44),t._uU(106,"100"),t.qZA(),t.TgZ(107,"option",45),t._uU(108,"All"),t.qZA()()()(),t.TgZ(109,"div",46)(110,"div",47)(111,"pagination-controls",48),t.NdJ("pageChange",function(s){return n.p=s}),t.qZA(),t.TgZ(112,"div",49),t._uU(113),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.productDayBookform),t.xp6(7),t.Q6J("formGroup",n.productDayBookform)("rangePicker",a)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",a),t.xp6(60),t.Q6J("ngIf",(null==n.productDayBookList?null:n.productDayBookList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.productDayBookList?null:n.productDayBookList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.productDayBookList?null:n.productDayBookList.length," of ",n.p," entries ")}},dependencies:[h.sg,h.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,v.LS,_.KE,_.R9,u.nW,u.wx,u.zY,u.By,u._g,v._s,O.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})()}];let H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[T.Bz.forChild(E),T.Bz]}),i})();var Q=l(47957),z=l(44144),$=l(3056),G=l(87078),y=l(86323),Z=l(92642),j=l(3238),K=l(95113),V=l(64155),X=l(6205),C=l(8468);const W={User:Z.n5m,UserCheck:Z.uS3,FileText:Z.acj,File:Z.$BE};let tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[h.uU],imports:[h.ez,H,C.I,c.u5,c.UX,Q.Bb,_.lN,z.c,$.ZQ,G.T,u.FA,_.lN,j.XK,K.LD,V.vQ,C.I,X.X,y.p.pick(W),y.p]}),i})()}}]);