"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[83927],{83927:(oe,_,a)=>{a.r(_),a.d(_,{CustomerWiseSaleOrderModule:()=>ee});var g=a(36895),v=a(4392),y=a(49671),m=a(24006),x=a(94327),Z=a(96166),b=a(12983),M=a.n(b),W=a(68675),A=a(54004),h=a(80574),e=a(94650),D=a(42917),w=a(87719),L=a(43443),P=a(80927),O=a(54333),f=a(59549),p=a(99602),U=a(54040);function N(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"a",58)(1,"input",59,60),e.NdJ("change",function(i){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.SelectedBranch(s.id,i.target.checked))}),e.qZA(),e.TgZ(3,"label",61),e.NdJ("click",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onLabelClick(i))}),e._uU(4),e.qZA()()}if(2&r){const t=d.$implicit,o=d.index,i=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",i.selectData.includes(t.id))("id","checkboxCat-"+o),e.xp6(2),e.Q6J("for","checkboxCat-"+o),e.xp6(1),e.Oqu(t.title)}}function F(r,d){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const I=function(){return{standalone:!0}};function J(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"div",51)(1,"div",52)(2,"button",53),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",54)(5,"li")(6,"input",55),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.searchBranch=i)})("ngModelChange",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,N,5,5,"a",56),e.qZA()()(),e.TgZ(9,"div",57),e.YNc(10,F,2,1,"span",36),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,I)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function q(r,d){if(1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA()()),2&r){const t=d.$implicit,o=d.index;e.xp6(2),e.Oqu(o+1+"."),e.xp6(2),e.Oqu(null==t||null==t.customer?null:t.customer.party_name),e.xp6(2),e.Oqu(null==t?null:t.sale_order_date),e.xp6(2),e.Oqu(null==t?null:t.sale_order_no),e.xp6(2),e.Oqu(null==t?null:t.total_qty),e.xp6(2),e.Oqu(null==t?null:t.total),e.xp6(2),e.Oqu(null==t||null==t.invoice_detail?null:t.invoice_detail.total_qty),e.xp6(2),e.Oqu(null==t||null==t.invoice_detail?null:t.invoice_detail.total_amount)}}const B=function(r,d){return{itemsPerPage:r,currentPage:d}};function k(r,d){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,q,17,8,"tr",62),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.combinedList,t.key,t.reverse),e.WLB(8,B,t.itemsPerPage,t.p)))}}function Y(r,d){1&r&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),e._uU(4,"Data not available"),e.qZA()()()())}const E=[{path:"",component:(()=>{class r{constructor(t,o,i,n,s){this.cs=t,this.datepipe=o,this.reportService=i,this.commonService=n,this.coreService=s,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new m.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.combinedList=[],this.customerWiseSaleOrder=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let c=localStorage.getItem("financialYear");console.warn(JSON.parse(c));let u=JSON.parse(c);this.fyID=u}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:o}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=o,this.cs.userDetails$.subscribe(c=>{this.isAdmin="admin"==c?.role,this.getBranch()}),this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const i=new Date,n=new Date(i);n.setDate(i.getDate()-14);const s=this.formatDate(n),l=this.formatDate(i);this.customerWiseSaleOrderForm=new m.cw({start:new m.NI(s,this.commonService.dateRangeValidator(this.financialYear)),end:new m.NI(l,this.commonService.dateRangeValidator(this.financialYear)),user_id:new m.NI}),this.commonService.validateAndClearDates(this.customerWiseSaleOrderForm,this.minDate,this.maxDate),this.startDate=this.customerWiseSaleOrderForm.value?.start,this.endDate=this.customerWiseSaleOrderForm.value?.end,this.customerWiseSaleOrderUserId=this.customerWiseSaleOrderForm.value?.user_id,this.getCustomerWiseSaleOrder(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,W.O)(""),(0,A.U)(c=>{const u="string"==typeof c?c:c?.detail?.name;return u?this._filter(u):this.suppliers.slice()}))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const o=t?t.toLowerCase():"";return console.log(o),this.suppliers.filter(i=>i?.detail?.name.toLowerCase().includes(o)||i?.detail?.company_name?.toLowerCase().includes(o)||i?.account?.account_id?.toLowerCase().includes(o))}displayFn(t){return t&&t?.detail?.company_name?t?.detail?.company_name:""}search(){if(""===this.titlee)this.getCustomerWiseSaleOrder();else{const t=this.titlee.toLocaleLowerCase();this.customerWiseSaleOrderList=this.customerWiseSaleOrderList?.filter(o=>{const i=o?.user?.party_name.toLocaleLowerCase(),n=o?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!i.includes(t)&&!n.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(o=>o.isSelected=!t)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,o,i){const n=(t-1)*o;return`Showing ${n+1}\u2013${Math.min(n+o-1,i-1)+1} of ${i} results`}getCustomerWiseSaleOrder(){this.reportService.getCustomerWiseSaleOrder(this.startDate,this.endDate,this.customerWiseSaleOrderUserId,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.customerWiseSaleOrderList=t,this.customerWiseSaleOrder=t,this.customerWiseSaleOrder.map(o=>{this.customerWiseSaleOrderList.push(o)}),this.customerWiseSaleOrder.forEach(o=>{this.combinedList=this.combinedList.concat(o)}),console.log(this.combinedList)})}oncheckAccount(t){console.log(t),this.userName=t?.detail?.company_name,this.dataId=t?.id,this.customerWiseSaleOrderForm.patchValue({user_id:this.dataId}),console.warn(this.customerWiseSaleOrderForm.value),this.customerWiseSaleOrderUserId=this.customerWiseSaleOrderForm.value?.user_id,this?.getCustomerWiseSaleOrder()}getSelectedCustomerWiseSaleOrderDates(){console.log(this.customerWiseSaleOrderForm.value);const t=this.datepipe.transform(this.customerWiseSaleOrderForm.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.customerWiseSaleOrderForm.value.end,"yyyy-MM-dd");console.log(t),console.log(o),this.startDate=t,this.endDate=o,this?.getCustomerWiseSaleOrder()}generatePDFAgain(){var t=this;return(0,y.Z)(function*(){const o=t.coreService.profileData$.value,i=yield t.cs.loadImageReport(),n=new Z.default("p","mm","a4"),s=t.datepipe.transform(new Date,"yyyy-MM-dd");try{n.setFontSize(12),n.setTextColor(33,43,54),n.addImage(i,"PNG",86,5,31,10),n.setFontSize(25),n.text("Customer Wise Sale Order Report",52,25),n.setFontSize(12),n.text(`Business Location: ${o?.branch}`,14,39),n.text(`From Date: ${t.formatDate(t.customerWiseSaleOrderForm.get("start").value)}`,14,45),n.text(`User: ${o?.role}`,172,33),n.text(`Print Date: ${s}`,153,39),n.text(`To Date: ${t.formatDate(t.customerWiseSaleOrderForm.get("end").value)}`,157,45),M()(n,{head:[["#","Customer","Sale Order Date","Sale Order No. ","Total Qty","Total","Invoice Total Qty","Invoice Total Amount"]],body:t.combinedList.map((l,c)=>[c+1,l.customer?.party_name,l.sale_order_date,l.sale_order_no,l.total_qty,l.total,l.invoice_detail?.total_qty,l.invoice_detail?.total_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:49,margin:{top:49}}),n.save("Customer_wise_sale_Order.pdf")}catch(l){console.log(l)}})()}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable");if(o){const i=o.querySelector("thead tr");if(i){const s=[];i.querySelectorAll("th").forEach(l=>{const c=l.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&s.push(c)}),t.push(s)}o.querySelectorAll("tbody tr").forEach(s=>{const l=[];s.querySelectorAll("td").forEach(c=>{const u=c.textContent?.trim();u&&l.push(u)}),t.push(l)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=h.P6.aoa_to_sheet(t),i=h.P6.book_new();h.P6.book_append_sheet(i,o,"Sheet1");const n=h.cW(i,{bookType:"xlsx",type:"array"}),s=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(s,"saleSummary.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const i=document.querySelector(".titl");if(!i)return void console.error("Title element with class 'titl' not found.");const n=i.outerHTML,l=t.cloneNode(!0).outerHTML,u="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+l,te=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=u,window.print(),document.body.innerHTML=te}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.combinedList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,o){if(o)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const i=this.selectData.findIndex(n=>n==t);console.log(i),-1!==i&&this.selectData.splice(i,1),this.ngOnInit(),console.log(this.selectData)}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(D.J),e.Y36(g.uU),e.Y36(w.r),e.Y36(L.R),e.Y36(P.p))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-wise-sale-order"]],decls:97,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Customer Wise Sale Order"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Customer Wise Sale Order"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,J,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return o.getSelectedCustomerWiseSaleOrderDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return o.getSelectedCustomerWiseSaleOrderDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()()()()(),e.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),e.NdJ("click",function(){return o.generatePDFAgain()}),e._UZ(36,"img",26),e.qZA()(),e.TgZ(37,"li")(38,"a",27),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(39,"img",28),e.qZA()(),e.TgZ(40,"li")(41,"a",29),e.NdJ("click",function(){return o.printTable()}),e._UZ(42,"img",30),e.qZA()()()()(),e.TgZ(43,"div",31)(44,"div",32)(45,"table",33)(46,"thead")(47,"tr")(48,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(49,"#"),e._UZ(50,"i",35),e.qZA(),e.TgZ(51,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(52,"Customer"),e._UZ(53,"i",35),e.qZA(),e.TgZ(54,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(55,"Sale Order Date "),e._UZ(56,"i",35),e.qZA(),e.TgZ(57,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(58,"Sale Order No. "),e._UZ(59,"i",35),e.qZA(),e.TgZ(60,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(61,"Total Qty "),e._UZ(62,"i",35),e.qZA(),e.TgZ(63,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(64,"Total "),e._UZ(65,"i",35),e.qZA(),e.TgZ(66,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(67," Invoice Total QTY "),e._UZ(68,"i",35),e.qZA(),e.TgZ(69,"th",34),e.NdJ("click",function(){return o.sort("id")}),e._uU(70,"Invoice Total Amount "),e._UZ(71,"i",35),e.qZA()()(),e.YNc(72,k,4,11,"tbody",36),e.YNc(73,Y,5,0,"tbody",36),e.qZA(),e.TgZ(74,"div",6)(75,"div",37)(76,"div",38),e._uU(77," Show per page "),e.TgZ(78,"select",39,40),e.NdJ("ngModelChange",function(s){return o.itemsPerPage=s})("change",function(){e.CHM(i);const s=e.MAs(79);return e.KtG(o.changePg(s.value))}),e.TgZ(80,"option",41),e._uU(81,"10"),e.qZA(),e.TgZ(82,"option",42),e._uU(83,"20"),e.qZA(),e.TgZ(84,"option",43),e._uU(85,"30"),e.qZA(),e.TgZ(86,"option",44),e._uU(87,"50"),e.qZA(),e.TgZ(88,"option",45),e._uU(89,"100"),e.qZA(),e.TgZ(90,"option",46),e._uU(91,"All"),e.qZA()()()(),e.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),e.NdJ("pageChange",function(s){return o.p=s}),e.qZA(),e.TgZ(95,"div",50),e._uU(96),e.qZA()()()()()()()()()()}if(2&t){const i=e.MAs(31);e.xp6(11),e.Q6J("ngIf",o.isAdmin),e.xp6(5),e.Q6J("formGroup",o.customerWiseSaleOrderForm),e.xp6(7),e.Q6J("formGroup",o.customerWiseSaleOrderForm)("rangePicker",i)("min",o.minDate)("max",o.maxDate),e.xp6(6),e.Q6J("for",i),e.xp6(43),e.Q6J("ngIf",(null==o.combinedList?null:o.combinedList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==o.combinedList?null:o.combinedList.length)),e.xp6(5),e.Q6J("ngModel",o.itemsPerPage),e.xp6(18),e.lnq(" Showing ",o.itemsPerPage," to ",null==o.combinedList?null:o.combinedList.length," of ",o.p," entries ")}},dependencies:[g.sg,g.O5,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.On,m.sg,m.u,O.LS,f.KE,f.R9,p.nW,p.wx,p.zY,p.By,p._g,O._s,U.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})()}];let Q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.Bz.forChild(E),v.Bz]}),r})();var H=a(47957),z=a(44144),R=a(3056),$=a(87078),S=a(86323),C=a(92642),G=a(3238),V=a(95113),j=a(64155),K=a(6205),T=a(8468);const X={User:C.n5m,UserCheck:C.uS3,FileText:C.acj,File:C.$BE};let ee=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[g.uU],imports:[g.ez,Q,T.I,m.u5,m.UX,H.Bb,f.lN,z.c,R.ZQ,$.T,p.FA,f.lN,G.XK,V.LD,j.vQ,T.I,K.X,S.p.pick(X),S.p]}),r})()}}]);