"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[559],{20559:(V,P,n)=>{n.r(P),n.d(P,{LeastSellingProductModule:()=>j});var u=n(36895),v=n(89299),c=n(24006),S=n(96166),Z=n(12983),L=n.n(Z),f=n(80574),D=n(94327),t=n(94650),_=n(97185),x=n(71071),M=n(80927),A=n(42917),B=n(87719),C=n(54333),h=n(59549),m=n(99602),O=n(54040);function k(i,g){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&i){const e=g.$implicit,o=g.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(e.product_name),t.xp6(2),t.Oqu(e.no_of_bills),t.xp6(2),t.Oqu(e.sale_qty),t.xp6(2),t.Oqu(e.sale_amount),t.xp6(2),t.Oqu(e.sale_percentage)}}const U=function(i,g){return{itemsPerPage:i,currentPage:g}};function w(i,g){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,k,13,6,"tr",47),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productDayBookList,e.key,e.reverse),t.WLB(8,U,e.itemsPerPage,e.p)))}}function N(i,g){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",48)(3,"p",49),t._uU(4,"Data not available"),t.qZA()()()())}const J=[{path:"",component:(()=>{class i{constructor(e,o,l,a,r,d,s,p){this.router=e,this.fb=o,this.toastr=l,this.transactionService=a,this.coreService=r,this.cs=d,this.datepipe=s,this.reportService=p,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new c.NI(""),this.productControl=new c.NI(""),this.isAdmin=!1,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let s=localStorage.getItem("financialYear");console.warn(JSON.parse(s));let p=JSON.parse(s);this.fyID=p}this.cs.userDetails$.subscribe(s=>{this.isAdmin="admin"==s.role}),this.cs.userDetails$.subscribe(s=>{this.userDetails=s,console.log(s),this.userName=s?.username});const e=new Date,a=(e.getMonth(),e.getFullYear(),new Date(e));a.setDate(e.getDate()-14);const r=this.formatDate(a),d=this.formatDate(e);this.productDayBookform=new c.cw({start:new c.NI(r),end:new c.NI(d)}),this.from_Date=this.productDayBookform.value?.start,this.to_Date=this.productDayBookform.value?.end,this.getproductDayBook()}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}sort(e){this.key=e,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,l){const a=(e-1)*o;return`Showing ${a+1}\u2013${Math.min(a+o-1,l-1)+1} of ${l} results`}getproductDayBook(){this.reportService.getLeastSellingProduct(this.from_Date,this.to_Date,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.productDayBookList=e?.data})}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const e=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.from_Date=e,this.to_Date=o,this?.getproductDayBook()}generatePDFAgain(){const e=new S.default,a=`Date Range From: ${this.from_Date} - ${this.to_Date}`,r=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Least Selling Product Report",82,10),e.text(r,10,18),e.text(a,10,22),e.text("",10,25),L()(e,{head:[["#","ProductName","No.OfBills","SaleQty","SaleAmount","Sale(%)"]],body:this.productDayBookList.map((d,s)=>[s+1,d.product_name,d.no_of_bills,d.sale_qty,d.sale_amount,d.sale_percentage]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Least_Selling_Product.pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const l=o.querySelector("thead tr");if(l){const r=[];l.querySelectorAll("th").forEach(d=>{const s=d.textContent?.trim();s&&"Is Active"!==s&&"Action"!==s&&r.push(s)}),e.push(r)}o.querySelectorAll("tbody tr").forEach(r=>{const d=[];r.querySelectorAll("td").forEach(s=>{const p=s.textContent?.trim();p&&d.push(p)}),e.push(d)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=f.P6.aoa_to_sheet(e),l=f.P6.book_new();f.P6.book_append_sheet(l,o,"Sheet1");const a=f.cW(l,{bookType:"xlsx",type:"array"}),r=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,D.saveAs)(r,"leastsellingproduct.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const l=document.querySelector(".titl");if(!l)return void console.error("Title element with class 'titl' not found.");const a=l.outerHTML,d=e.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+d,G=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=G}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.productDayBookList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,o){if(o)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const l=this.selectData.findIndex(a=>a==e);console.log(l),-1!==l&&this.selectData.splice(l,1),this.ngOnInit(),console.log(this.selectData)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v.F0),t.Y36(c.qu),t.Y36(_._W),t.Y36(x.p),t.Y36(M.p),t.Y36(A.J),t.Y36(u.uU),t.Y36(B.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-least-selling-product"]],decls:86,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-12","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Least Selling Product"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Least Selling Product"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedProductDayBookDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()()()()(),t.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return o.printTable()}),t._UZ(38,"img",27),t.qZA()()()()(),t.TgZ(39,"div",28)(40,"table",29)(41,"thead")(42,"tr")(43,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(44,"#"),t._UZ(45,"i",31),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(47,"Product Name "),t._UZ(48,"i",31),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(50,"No.Of Bills "),t._UZ(51,"i",31),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(53," Sale Qty "),t._UZ(54,"i",31),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(56," Sale Amount "),t._UZ(57,"i",31),t.qZA(),t.TgZ(58,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(59," Sale(%)"),t._UZ(60,"i",31),t.qZA()()(),t.YNc(61,w,4,11,"tbody",32),t.YNc(62,N,5,0,"tbody",32),t.qZA(),t.TgZ(63,"div",10)(64,"div",33)(65,"div",34),t._uU(66," Show per page "),t.TgZ(67,"select",35,36),t.NdJ("ngModelChange",function(r){return o.itemsPerPage=r})("change",function(){t.CHM(l);const r=t.MAs(68);return t.KtG(o.changePg(r.value))}),t.TgZ(69,"option",37),t._uU(70,"10"),t.qZA(),t.TgZ(71,"option",38),t._uU(72,"20"),t.qZA(),t.TgZ(73,"option",39),t._uU(74,"30"),t.qZA(),t.TgZ(75,"option",40),t._uU(76,"50"),t.qZA(),t.TgZ(77,"option",41),t._uU(78,"100"),t.qZA(),t.TgZ(79,"option",42),t._uU(80,"All"),t.qZA()()()(),t.TgZ(81,"div",43)(82,"div",44)(83,"pagination-controls",45),t.NdJ("pageChange",function(r){return o.p=r}),t.qZA(),t.TgZ(84,"div",46),t._uU(85),t.qZA()()()()()()()()()}if(2&e){const l=t.MAs(27);t.xp6(12),t.Q6J("formGroup",o.productDayBookform),t.xp6(7),t.Q6J("formGroup",o.productDayBookform)("rangePicker",l),t.xp6(6),t.Q6J("for",l),t.xp6(36),t.Q6J("ngIf",(null==o.productDayBookList?null:o.productDayBookList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.productDayBookList?null:o.productDayBookList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.productDayBookList?null:o.productDayBookList.length," of ",o.p," entries ")}},dependencies:[u.sg,u.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,C.LS,h.KE,h.R9,m.nW,m.wx,m.zY,m.By,m._g,C._s,O.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})()}];let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.Bz.forChild(J),v.Bz]}),i})();var F=n(47957),q=n(44144),Y=n(3056),E=n(87078),T=n(86323),y=n(92642),z=n(3238),H=n(95113),R=n(64155),Q=n(6205),b=n(8468);const $={User:y.n5m,UserCheck:y.uS3,FileText:y.acj,File:y.$BE};let j=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[u.uU],imports:[u.ez,I,b.I,c.u5,c.UX,F.Bb,h.lN,q.c,Y.ZQ,E.T,m.FA,h.lN,z.XK,H.LD,R.vQ,b.I,Q.X,T.p.pick($),T.p]}),i})()}}]);