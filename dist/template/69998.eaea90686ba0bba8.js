"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[69998],{69998:(ae,_,r)=>{r.r(_),r.d(_,{SaleReturnModule:()=>te});var h=r(36895),Z=r(4392),R=r(49671),p=r(24006),b=r(68675),M=r(54004),A=r(96166),D=r(12983),P=r.n(D),f=r(80574),w=r(94327),e=r(94650),L=r(42917),O=r(87719),U=r(43443),F=r(80927),y=r(54333),v=r(59549),m=r(99602),N=r(54040);function q(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",58)(1,"input",59,60),e.NdJ("change",function(a){const s=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.SelectedBranch(s.id,a.target.checked))}),e.qZA(),e.TgZ(3,"label",61),e.NdJ("click",function(a){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&o){const t=c.$implicit,n=c.index,a=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",a.selectData.includes(t.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(t.title)}}function J(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const B=function(){return{standalone:!0}};function I(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",51)(1,"div",52)(2,"button",53),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",54)(5,"li")(6,"input",55),e.NdJ("ngModelChange",function(a){e.CHM(t);const i=e.oxw();return e.KtG(i.searchBranch=a)})("ngModelChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,q,5,5,"a",56),e.qZA()()(),e.TgZ(9,"div",57),e.YNc(10,J,2,1,"span",36),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,B)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function k(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA()()),2&o){const t=c.$implicit,n=c.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(t.party_name.party_name),e.xp6(2),e.Oqu(t.voucher_no),e.xp6(2),e.Oqu(t.variant_name),e.xp6(2),e.Oqu(t.product_name),e.xp6(2),e.Oqu(t.lending_cost),e.xp6(2),e.Oqu(t.mrp),e.xp6(2),e.Oqu(t.qty),e.xp6(2),e.Oqu(t.deduction),e.xp6(2),e.Oqu(t.tax),e.xp6(2),e.Oqu(t.amount)}}const Y=function(o,c){return{itemsPerPage:o,currentPage:c}};function E(o,c){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,k,23,11,"tr",62),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.purchaseRegisterList,t.key,t.reverse),e.WLB(8,Y,t.itemsPerPage,t.p)))}}const z=[{path:"",component:(()=>{class o{constructor(t,n,a,i,s){this.cs=t,this.datepipe=n,this.reportService=a,this.commonService=i,this.coreService=s,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new p.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let l=localStorage.getItem("financialYear");console.warn(JSON.parse(l));let g=JSON.parse(l);this.fyID=g}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=n,this.cs.userDetails$.subscribe(l=>{this.isAdmin="admin"==l?.role,this.getBranch()}),this.cs.userDetails$.subscribe(l=>{this.userDetails=l,console.log(l),this.userName=l?.username});const a=new Date,i=new Date(a);i.setDate(a.getDate()-14);const s=this.formatDate(i),d=this.formatDate(a);this.purchaseRegisterForm=new p.cw({start:new p.NI(s,this.commonService.dateRangeValidator(this.financialYear)),end:new p.NI(d,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.purchaseRegisterForm,this.minDate,this.maxDate),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,b.O)(""),(0,M.U)(l=>{const g="string"==typeof l?l:l?.detail?.name;return g?this._filter(g):this.suppliers.slice()}))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const n=t?t.toLowerCase():"";return console.log(n),this.suppliers.filter(a=>a?.detail?.name.toLowerCase().includes(n)||a?.detail?.company_name?.toLowerCase().includes(n)||a?.account?.account_id?.toLowerCase().includes(n))}displayFn(t){return t&&t?.detail?.company_name?t?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const t=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),i=n?.status?.toLocaleLowerCase(),s=n?.payment_voucher_no.toLocaleLowerCase()||"";return!!(a.includes(t)||s.includes(t)||i.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(n=>n.isSelected=!t)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,n,a){const i=(t-1)*n;return`Showing ${i+1}\u2013${Math.min(i+n-1,a-1)+1} of ${a} results`}getPurchaseRegister(){this.reportService.getSaleReturn(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.purchaseRegister=t,this.purchaseRegisterList=t})}oncheckAccount(t){console.log(t),this.dataId=t,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const t=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){var t=this;return(0,R.Z)(function*(){const n=new A.default("landscape"),a=t.coreService.profileData$.value,i=yield t.cs.loadImageReport(),s=t.datepipe.transform(new Date,"yyyy-MM-dd");n.setFontSize(12),n.setTextColor(33,43,54),n.setFontSize(25);const d=n.internal.pageSize.width,l="Sale Return Report";n.setFontSize(16),n.setFont("helvetica","bold");const g=n.getStringUnitWidth(l)*n.internal.getFontSize()/n.internal.scaleFactor,C=(d-g)/2;n.text(l,C,25),n.addImage(i,"PNG",C+15,5,31,10),n.setFontSize(12),n.text(`Business Location: ${a?.branch}`,14,39),n.text(`From Date: ${t.formatDate(t.purchaseRegisterForm.get("start").value)}`,14,45),n.text(`User: ${a?.role}`,d-g,33),n.text(`Print Date: ${s}`,d-g,39),n.text(`To Date: ${t.formatDate(t.purchaseRegisterForm.get("end").value)}`,d-g,45),P()(n,{head:[["#","PartyName","VoucherNo","VariantName ","ProductName","Lending Cost","Mrp","Qty","Deduction","Tax","Amount"]],body:t.purchaseRegisterList.map((u,ne)=>[ne+1,u.party_name.party_name,u.voucher_no,u.variant_name,u.product_name,u.lending_cost,u.mrp,u.qty,u.deduction,u.tax,u.amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:49,margin:{top:49}}),n.save("sale_Return.pdf")})()}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const s=[];a.querySelectorAll("th").forEach(d=>{const l=d.textContent?.trim();l&&"Is Active"!==l&&"Action"!==l&&s.push(l)}),t.push(s)}n.querySelectorAll("tbody tr").forEach(s=>{const d=[];s.querySelectorAll("td").forEach(l=>{const g=l.textContent?.trim();g&&d.push(g)}),t.push(d)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=f.P6.aoa_to_sheet(t),a=f.P6.book_new();f.P6.book_append_sheet(a,n,"Sheet1");const i=f.cW(a,{bookType:"xlsx",type:"array"}),s=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,w.saveAs)(s,"salereturn.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const i=a.outerHTML,d=t.cloneNode(!0).outerHTML,g="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+d,C=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=g,window.print(),document.body.innerHTML=C}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,n){if(n)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(i=>i==t);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(L.J),e.Y36(h.uU),e.Y36(O.r),e.Y36(U.R),e.Y36(F.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sale-return"]],decls:97,vars:12,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5," Sale Return"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Sale Return"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,I,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()()()()(),e.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(36,"img",26),e.qZA()(),e.TgZ(37,"li")(38,"a",27),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(39,"img",28),e.qZA()(),e.TgZ(40,"li")(41,"a",29),e.NdJ("click",function(){return n.printTable()}),e._UZ(42,"img",30),e.qZA()()()()(),e.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"#"),e._UZ(49,"i",34),e.qZA(),e.TgZ(50,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Party Name "),e._UZ(52,"i",34),e.qZA(),e.TgZ(53,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Voucher No."),e._UZ(55,"i",34),e.qZA(),e.TgZ(56,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"Voucher Name"),e._UZ(58,"i",34),e.qZA(),e.TgZ(59,"th",35),e._uU(60,"Product Name >"),e.qZA(),e.TgZ(61,"th",35),e._uU(62,"Landing Cost"),e.qZA(),e.TgZ(63,"th",35),e._uU(64,"Mrp"),e.qZA(),e.TgZ(65,"th",35),e._uU(66,"Qty"),e.qZA(),e.TgZ(67,"th",35),e._uU(68,"Deduction "),e.qZA(),e.TgZ(69,"th",35),e._uU(70,"Tax "),e.qZA(),e.TgZ(71,"th",35),e._uU(72," Amount "),e.qZA()()(),e.YNc(73,E,4,11,"tbody",36),e.qZA(),e.TgZ(74,"div",6)(75,"div",37)(76,"div",38),e._uU(77," Show per page "),e.TgZ(78,"select",39,40),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s})("change",function(){e.CHM(a);const s=e.MAs(79);return e.KtG(n.changePg(s.value))}),e.TgZ(80,"option",41),e._uU(81,"10"),e.qZA(),e.TgZ(82,"option",42),e._uU(83,"20"),e.qZA(),e.TgZ(84,"option",43),e._uU(85,"30"),e.qZA(),e.TgZ(86,"option",44),e._uU(87,"50"),e.qZA(),e.TgZ(88,"option",45),e._uU(89,"100"),e.qZA(),e.TgZ(90,"option",46),e._uU(91,"All"),e.qZA()()()(),e.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(95,"div",50),e._uU(96),e.qZA()()()()()()()()()}if(2&t){const a=e.MAs(31);e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.purchaseRegisterForm),e.xp6(7),e.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",a)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",a),e.xp6(44),e.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[h.sg,h.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,p.On,p.sg,p.u,y.LS,v.KE,v.R9,m.nW,m.wx,m.zY,m.By,m._g,y._s,N.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.Bz.forChild(z),Z.Bz]}),o})();var Q=r(47957),$=r(44144),V=r(3056),G=r(87078),T=r(86323),x=r(92642),j=r(3238),K=r(95113),W=r(64155),X=r(6205),S=r(8468);const ee={User:x.n5m,UserCheck:x.uS3,FileText:x.acj,File:x.$BE};let te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[h.uU],imports:[h.ez,H,S.I,p.u5,p.UX,Q.Bb,v.lN,$.c,V.ZQ,G.T,m.FA,v.lN,j.XK,K.LD,W.vQ,S.I,X.X,T.p.pick(ee),T.p]}),o})()}}]);