"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[76],{76:(se,x,i)=>{i.r(x),i.d(x,{PurchaseSummaryModule:()=>ie});var d=i(36895),Z=i(4392),b=i(49671),m=i(24006),A=i(94327),M=i(96166),w=i(12983),D=i.n(w),L=i(68675),U=i(54004),y=i(80574),e=i(94650),O=i(42917),J=i(87719),N=i(43443),q=i(77243),I=i(80927),T=i(54333),_=i(59549),g=i(99602),k=i(54040);function B(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",58)(1,"input",59,60),e.NdJ("change",function(r){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.SelectedBranch(s.id,r.target.checked))}),e.qZA(),e.TgZ(3,"label",61),e.NdJ("click",function(r){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onLabelClick(r))}),e._uU(4),e.qZA()()}if(2&o){const t=c.$implicit,a=c.index,r=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",r.selectData.includes(t.id))("id","checkboxCat-"+a),e.xp6(2),e.Q6J("for","checkboxCat-"+a),e.xp6(1),e.Oqu(t.title)}}function F(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const Y=function(){return{standalone:!0}};function E(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",51)(1,"div",52)(2,"button",53),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",54)(5,"li")(6,"input",55),e.NdJ("ngModelChange",function(r){e.CHM(t);const n=e.oxw();return e.KtG(n.searchBranch=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,B,5,5,"a",56),e.qZA()()(),e.TgZ(9,"div",57),e.YNc(10,F,2,1,"span",36),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,Y)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}const f=function(o){return{"font-size":o}};function Q(o,c){if(1&o&&(e.TgZ(0,"div",62)(1,"div",63)(2,"div",64)(3,"div",65)(4,"h4",66),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Total"),e.qZA()()()(),e.TgZ(9,"div",63)(10,"div",67)(11,"div",65)(12,"h4",66),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"h5"),e._uU(16,"Total Cash"),e.qZA()()()(),e.TgZ(17,"div",63)(18,"div",68)(19,"div",65)(20,"h4",66),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Total Bank"),e.qZA()()()(),e.TgZ(25,"div",63)(26,"div",69)(27,"div",65)(28,"h4",66),e._uU(29),e.ALo(30,"number"),e.qZA(),e.TgZ(31,"h5"),e._uU(32,"Cash Percentage"),e.qZA()()()(),e.TgZ(33,"div",63)(34,"div",68)(35,"div",65)(36,"h4",66),e._uU(37),e.ALo(38,"number"),e.qZA(),e.TgZ(39,"h5"),e._uU(40,"Bank Percentage"),e.qZA()()()()()),2&o){const t=e.oxw();let a,r,n,s,l;e.xp6(4),e.Q6J("ngStyle",e.VKq(25,f,(null==t.purchaseSummary||null==t.purchaseSummary.total||null==(a=t.purchaseSummary.total.toString())?null:a.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(6,10,null==t.purchaseSummary?null:t.purchaseSummary.total,"1.2-2"),""),e.xp6(7),e.Q6J("ngStyle",e.VKq(27,f,(null==t.purchaseSummary||null==t.purchaseSummary.total_cash||null==(r=t.purchaseSummary.total_cash.toString())?null:r.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(14,13,null==t.purchaseSummary?null:t.purchaseSummary.total_cash,"1.2-2"),""),e.xp6(7),e.Q6J("ngStyle",e.VKq(29,f,(null==t.purchaseSummary||null==t.purchaseSummary.total_bank||null==(n=t.purchaseSummary.total_bank.toString())?null:n.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(22,16,null==t.purchaseSummary?null:t.purchaseSummary.total_bank,"1.2-2"),""),e.xp6(7),e.Q6J("ngStyle",e.VKq(31,f,(null==t.purchaseSummary||null==t.purchaseSummary.cash_percentage||null==(s=t.purchaseSummary.cash_percentage.toString())?null:s.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(30,19,null==t.purchaseSummary?null:t.purchaseSummary.cash_percentage,"1.2-2"),""),e.xp6(7),e.Q6J("ngStyle",e.VKq(33,f,(null==t.purchaseSummary||null==t.purchaseSummary.bank_percentage||null==(l=t.purchaseSummary.bank_percentage.toString())?null:l.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(38,22,null==t.purchaseSummary?null:t.purchaseSummary.bank_percentage,"1.2-2"),"")}}function H(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"td",72),e._uU(2),e.qZA()()),2&o){const t=c.$implicit;e.xp6(2),e.Oqu(null==t.purchase_bill?null:t.purchase_bill.supplier_bill_no)}}function z(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"table",71)(15,"tbody"),e.YNc(16,H,3,1,"tr",70),e.qZA()()(),e.TgZ(17,"td"),e._uU(18),e.qZA()()),2&o){const t=c.$implicit,a=c.index;e.xp6(2),e.Oqu(a+1+"."),e.xp6(2),e.Oqu(t.supplier),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t.payment_type),e.xp6(2),e.Oqu(t.payment_voucher_no),e.xp6(2),e.Oqu(t.amount),e.xp6(4),e.Q6J("ngForOf",null==t?null:t.payment_cart),e.xp6(2),e.Oqu(t.note)}}const R=function(o,c){return{itemsPerPage:o,currentPage:c}};function V(o,c){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,z,19,8,"tr",70),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.purchaseSummaryList,t.key,t.reverse),e.WLB(8,R,t.itemsPerPage,t.p)))}}function $(o,c){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",73)(3,"p",74),e._uU(4,"Data not available"),e.qZA()()()())}const j=[{path:"",component:(()=>{class o{constructor(t,a,r,n,s,l){this.cs=t,this.datepipe=a,this.reportService=r,this.commonService=n,this._auth=s,this.coreService=l,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new m.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let u=localStorage.getItem("financialYear");console.warn(JSON.parse(u));let v=JSON.parse(u);this.fyID=v}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:a}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=a,this.cs.userDetails$.subscribe(u=>{this.isAdmin="admin"==u?.role,this.getBranch()}),this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const r=new Date,l=(r.getMonth(),r.getFullYear(),new Date(r));l.setDate(r.getDate()-14);const h=this.formatDate(l),p=this.formatDate(r);this.purchaseSummaryform=new m.cw({start:new m.NI(h,this.commonService.dateRangeValidator(this.financialYear)),end:new m.NI(p,this.commonService.dateRangeValidator(this.financialYear)),user_id:new m.NI,payment_type:new m.NI("")}),this.commonService.validateAndClearDates(this.purchaseSummaryform,this.minDate,this.maxDate),this.startDate=this.purchaseSummaryform.value?.start,this.endDate=this.purchaseSummaryform.value?.end,this.purchaseSummaryUserId=this.purchaseSummaryform.value?.user_id,this.purchaseSummaryPaymentType=this.purchaseSummaryform.value?.payment_type,this.getPurchaseSummary(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,L.O)(""),(0,U.U)(u=>{const v="string"==typeof u?u:u?.detail?.name;return v?this._filter(v):this.suppliers.slice()})),this.Logo_api()}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const a=t?t.toLowerCase():"";return console.log(a),this.suppliers.filter(r=>r?.detail?.name.toLowerCase().includes(a)||r?.detail?.company_name?.toLowerCase().includes(a)||r?.account?.account_id?.toLowerCase().includes(a))}displayFn(t){return t&&t?.detail?.company_name?t?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseSummary();else{const t=this.titlee.toLocaleLowerCase();this.purchaseSummaryList=this.purchaseSummaryList.filter(a=>{const r=a?.user?.party_name.toLocaleLowerCase(),n=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!r.includes(t)&&!n.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(t?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,a,r){const n=(t-1)*a;return`Showing ${n+1}\u2013${Math.min(n+a-1,r-1)+1} of ${r} results`}getPurchaseSummary(){this.reportService.getPurchaseSummary(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.purchaseSummary=t,this.purchaseSummaryList=t?.data})}Logo_api(){this._auth.getLogoApi().subscribe({next:t=>{this.logoPath=t.data?.base64_logo,console.log(t)},error:t=>{console.log(t)}})}oncheckAccount(t){console.log(t),this.dataId=t,this.purchaseSummaryform.patchValue({user_id:this.dataId}),console.warn(this.purchaseSummaryform.value),this.purchaseSummaryUserId=this.purchaseSummaryform.value?.user_id,this?.getPurchaseSummary()}getSelectedPurchaseSummaryDates(){console.log(this.purchaseSummaryform.value);const t=this.datepipe.transform(this.purchaseSummaryform.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.purchaseSummaryform.value.end,"yyyy-MM-dd");console.log(t),console.log(a),this.startDate=t,this.endDate=a,this?.getPurchaseSummary()}generatePDFAgain(){var t=this;return(0,b.Z)(function*(){const a=t.coreService.profileData$.value,r=yield t.cs.loadImageReport(),n=new M.default("p","mm","a4"),s=t.datepipe.transform(new Date,"yyyy-MM-dd");try{n.setFontSize(12),n.setTextColor(33,43,54),n.addImage(r,"PNG",86,5,31,10),n.setFontSize(25),n.text("Purchase Summary Report",52,25),n.setFontSize(12),n.text(`Business Location: ${a?.branch}`,14,39),n.text(`From Date: ${t.formatDate(t.purchaseSummaryform.get("start").value)}`,14,45),n.text(`User: ${a?.role}`,172,33),n.text(`Print Date: ${s}`,153,39),n.text(`To Date: ${t.formatDate(t.purchaseSummaryform.get("end").value)}`,157,45);const l=["#","Supplier","Date","Payment Type","Payment Voucher No.","Amount","Supplier Bill No.","Note"],h=t.purchaseSummaryList.map((p,u)=>[u+1,p.supplier,p.date,p.payment_type,p.payment_voucher_no,p.amount,p.supplier_bill_no,p.note]);D()(n,{head:[l],body:h,theme:"grid",startY:49,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]},margin:{top:49}}),n.save("Purchase_Summary.pdf")}catch(l){console.error("Error generating PDF:",l)}})()}getVisibleDataFromTable(){const t=[],a=document.getElementById("mytable");if(a){const r=a.querySelector("thead tr");if(r){const s=[];r.querySelectorAll("th").forEach(l=>{const h=l.textContent?.trim();h&&"Is Active"!==h&&"Action"!==h&&s.push(h)}),t.push(s)}a.querySelectorAll("tbody tr").forEach(s=>{const l=[];s.querySelectorAll("td").forEach(h=>{const p=h.textContent?.trim();p&&l.push(p)}),t.push(l)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),a=y.P6.aoa_to_sheet(t),r=y.P6.book_new();y.P6.book_append_sheet(r,a,"Sheet1");const n=y.cW(r,{bookType:"xlsx",type:"array"}),s=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(s,"purchaseSummary.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const r=document.querySelector(".titl");if(!r)return void console.error("Title element with class 'titl' not found.");const n=r.outerHTML,l=t.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+l,u=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=u}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.purchaseSummaryList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,a){if(a)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(n=>n==t);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.J),e.Y36(d.uU),e.Y36(J.r),e.Y36(N.R),e.Y36(q.u),e.Y36(I.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-purchase-summary"]],decls:97,vars:14,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],[4,"ngFor","ngForOf"],[1,"table"],[2,"width","15%"],["colspan","10"],[1,"text-center"]],template:function(t,a){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Supplier Wise Payment"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Purchase Summary"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,E,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return a.getSelectedPurchaseSummaryDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return a.getSelectedPurchaseSummaryDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()()()()(),e.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),e.NdJ("click",function(){return a.generatePDFAgain()}),e._UZ(36,"img",26),e.qZA()(),e.TgZ(37,"li")(38,"a",27),e.NdJ("click",function(){return a.exportToExcel()}),e._UZ(39,"img",28),e.qZA()(),e.TgZ(40,"li")(41,"a",29),e.NdJ("click",function(){return a.printTable()}),e._UZ(42,"img",30),e.qZA()()()()(),e.YNc(43,Q,41,35,"div",31),e.TgZ(44,"div",32)(45,"table",33)(46,"thead")(47,"tr")(48,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(49,"#"),e._UZ(50,"i",35),e.qZA(),e.TgZ(51,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(52,"Supplier "),e._UZ(53,"i",35),e.qZA(),e.TgZ(54,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(55,"Date "),e._UZ(56,"i",35),e.qZA(),e.TgZ(57,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(58,"Payment Type"),e._UZ(59,"i",35),e.qZA(),e.TgZ(60,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(61," Payment Voucher No. "),e._UZ(62,"i",35),e.qZA(),e.TgZ(63,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(64," Amount "),e._UZ(65,"i",35),e.qZA(),e.TgZ(66,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(67," Supplier Bill No. "),e._UZ(68,"i",35),e.qZA(),e.TgZ(69,"th",34),e.NdJ("click",function(){return a.sort("id")}),e._uU(70,"Note"),e._UZ(71,"i",35),e.qZA()()(),e.YNc(72,V,4,11,"tbody",36),e.YNc(73,$,5,0,"tbody",36),e.qZA(),e.TgZ(74,"div",6)(75,"div",37)(76,"div",38),e._uU(77," Show per page "),e.TgZ(78,"select",39,40),e.NdJ("ngModelChange",function(s){return a.itemsPerPage=s})("change",function(){e.CHM(r);const s=e.MAs(79);return e.KtG(a.changePg(s.value))}),e.TgZ(80,"option",41),e._uU(81,"10"),e.qZA(),e.TgZ(82,"option",42),e._uU(83,"20"),e.qZA(),e.TgZ(84,"option",43),e._uU(85,"30"),e.qZA(),e.TgZ(86,"option",44),e._uU(87,"50"),e.qZA(),e.TgZ(88,"option",45),e._uU(89,"100"),e.qZA(),e.TgZ(90,"option",46),e._uU(91,"All"),e.qZA()()()(),e.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),e.NdJ("pageChange",function(s){return a.p=s}),e.qZA(),e.TgZ(95,"div",50),e._uU(96),e.qZA()()()()()()()()()}if(2&t){const r=e.MAs(31);e.xp6(11),e.Q6J("ngIf",a.isAdmin),e.xp6(5),e.Q6J("formGroup",a.purchaseSummaryform),e.xp6(7),e.Q6J("formGroup",a.purchaseSummaryform)("rangePicker",r)("min",a.minDate)("max",a.maxDate),e.xp6(6),e.Q6J("for",r),e.xp6(14),e.Q6J("ngIf",a.purchaseSummary),e.xp6(29),e.Q6J("ngIf",(null==a.purchaseSummaryList?null:a.purchaseSummaryList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==a.purchaseSummaryList?null:a.purchaseSummaryList.length)),e.xp6(5),e.Q6J("ngModel",a.itemsPerPage),e.xp6(18),e.lnq(" Showing ",a.itemsPerPage," to ",null==a.purchaseSummaryList?null:a.purchaseSummaryList.length," of ",a.p," entries ")}},dependencies:[d.sg,d.O5,d.PC,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.On,m.sg,m.u,T.LS,_.KE,_.R9,g.nW,g.wx,g.zY,g.By,g._g,d.JJ,T._s,k.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.Bz.forChild(j),Z.Bz]}),o})();var G=i(47957),W=i(44144),X=i(3056),ee=i(87078),C=i(86323),S=i(92642),te=i(3238),ae=i(95113),ne=i(64155),re=i(6205),P=i(8468);const oe={User:S.n5m,UserCheck:S.uS3,FileText:S.acj,File:S.$BE};let ie=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[d.uU],imports:[d.ez,K,P.I,m.u5,m.UX,G.Bb,_.lN,W.c,X.ZQ,ee.T,g.FA,_.lN,te.XK,ae.LD,ne.vQ,P.I,re.X,C.p.pick(oe),C.p]}),o})()}}]);