"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[82960],{82960:(he,C,r)=>{r.r(C),r.d(C,{TaxWiseSaleReturnModule:()=>le});var _=r(36895),y=r(4392),D=r(49671),u=r(24006),U=r(68675),O=r(54004),P=r(96166),L=r(12983),q=r.n(L),Z=r(80574),W=r(94327),e=r(94650),F=r(42917),N=r(87719),I=r(43443),J=r(80927),A=r(54333),v=r(59549),m=r(99602),G=r(54040);function B(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"a",60)(1,"input",61,62),e.NdJ("change",function(a){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.SelectedBranch(s.id,a.target.checked))}),e.qZA(),e.TgZ(3,"label",63),e.NdJ("click",function(a){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&o){const t=l.$implicit,n=l.index,a=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",a.selectData.includes(t.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(t.title)}}function k(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const Y=function(){return{standalone:!0}};function E(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",53)(1,"div",54)(2,"button",55),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",56)(5,"li")(6,"input",57),e.NdJ("ngModelChange",function(a){e.CHM(t);const i=e.oxw();return e.KtG(i.searchBranch=a)})("ngModelChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,B,5,5,"a",58),e.qZA()()(),e.TgZ(9,"div",59),e.YNc(10,k,2,1,"span",38),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,Y)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function H(o,l){if(1&o&&(e.TgZ(0,"tr")(1,"td",66),e._uU(2),e.qZA(),e.TgZ(3,"td",66),e._uU(4),e.qZA(),e.TgZ(5,"td",67),e._uU(6),e.qZA(),e.TgZ(7,"td",67),e._uU(8),e.qZA(),e.TgZ(9,"td",67),e._uU(10),e.qZA(),e.TgZ(11,"td",67),e._uU(12),e.qZA(),e.TgZ(13,"td",66),e._uU(14),e.qZA(),e.TgZ(15,"td",66),e._uU(16),e.qZA(),e.TgZ(17,"td",67),e._uU(18),e.qZA(),e.TgZ(19,"td",67),e._uU(20),e.qZA(),e.TgZ(21,"td",66),e._uU(22),e.qZA(),e.TgZ(23,"td",66),e._uU(24),e.qZA()()),2&o){const t=l.$implicit;e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t.voucher_type),e.xp6(2),e.Oqu(t.voucher_no),e.xp6(2),e.Oqu(t.hsn_code),e.xp6(2),e.Oqu(t.taxable),e.xp6(2),e.Oqu(t.CGST_rate),e.xp6(2),e.Oqu(t.CGST_amount),e.xp6(2),e.Oqu(t.SGST_rate),e.xp6(2),e.Oqu(t.SGST_amount),e.xp6(2),e.Oqu(t.IGST_rate),e.xp6(2),e.Oqu(t.IGST_amount),e.xp6(2),e.hij(" ",t.Tax_amount,"")}}function z(o,l){if(1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",65)(12,"table")(13,"tbody"),e.YNc(14,H,25,12,"tr",64),e.qZA()()()()),2&o){const t=l.$implicit,n=l.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.voucher_no),e.xp6(2),e.Oqu(t.total_amount),e.xp6(4),e.Q6J("ngForOf",t.data)}}const Q=function(o,l){return{itemsPerPage:o,currentPage:l}};function V(o,l){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,z,15,6,"tr",64),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.purchaseRegisterList,t.key,t.reverse),e.WLB(8,Q,t.itemsPerPage,t.p)))}}function $(o,l){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",68)(3,"p",69),e._uU(4,"Data not available"),e.qZA()()()())}const j=[{path:"",component:(()=>{class o{constructor(t,n,a,i,s){this.cs=t,this.datepipe=n,this.reportService=a,this.commonService=i,this.coreService=s,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new u.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let d=localStorage.getItem("financialYear");console.warn(JSON.parse(d));let f=JSON.parse(d);this.fyID=f}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=n,this.cs.userDetails$.subscribe(d=>{this.isAdmin="admin"==d?.role,this.getBranch()}),this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.userName=d?.username});const a=new Date,c=(a.getMonth(),a.getFullYear(),new Date(a));c.setDate(a.getDate()-14);const g=this.formatDate(c),h=this.formatDate(a);this.purchaseRegisterForm=new u.cw({start:new u.NI(g,this.commonService.dateRangeValidator(this.financialYear)),end:new u.NI(h,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.purchaseRegisterForm,this.minDate,this.maxDate),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,O.U)(d=>{const f="string"==typeof d?d:d?.detail?.name;return f?this._filter(f):this.suppliers.slice()}))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const n=t?t.toLowerCase():"";return console.log(n),this.suppliers.filter(a=>a?.detail?.name.toLowerCase().includes(n)||a?.detail?.company_name?.toLowerCase().includes(n)||a?.account?.account_id?.toLowerCase().includes(n))}displayFn(t){return t&&t?.detail?.company_name?t?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const t=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),i=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(t)&&!i.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(n=>n.isSelected=!t)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,n,a){const i=(t-1)*n;return`Showing ${i+1}\u2013${Math.min(i+n-1,a-1)+1} of ${a} results`}getPurchaseRegister(){this.reportService.getTaxWiseSaleReturn(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.purchaseRegister=t,this.purchaseRegisterList=t})}oncheckAccount(t){console.log(t),this.dataId=t,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const t=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){var t=this;return(0,D.Z)(function*(){const n=new P.default("landscape"),a=t.coreService.profileData$.value,i=yield t.cs.loadImageReport(),s=t.datepipe.transform(new Date,"yyyy-MM-dd");n.setFontSize(12),n.setTextColor(33,43,54),n.setFontSize(25);const c=n.internal.pageSize.width,g="Tax Wise Sale Return Report";n.setFontSize(16),n.setFont("helvetica","bold");const h=n.getStringUnitWidth(g)*n.internal.getFontSize()/n.internal.scaleFactor,d=(c-h)/2;n.text(g,d,25),n.addImage(i,"PNG",d+15,5,31,10),n.setFontSize(12),n.text(`Business Location: ${a?.branch}`,14,39),n.text(`From Date: ${t.formatDate(t.purchaseRegisterForm.get("start").value)}`,14,45),n.text(`User: ${a?.role}`,c-h+20,33),n.text(`Print Date: ${s}`,c-h+20,39),n.text(`To Date: ${t.formatDate(t.purchaseRegisterForm.get("end").value)}`,c-h+20,45);const M=[];let w=1;t.purchaseRegisterList.forEach(T=>{console.warn(T);const ce=T.date,de=T.name,ue=T.voucher_no,pe=T.total_amount;let x=!0;T.data.forEach((p,fe)=>{console.log(p),M.push([x?w:"",t.formatDate(x?ce:""),x?de:"",x?ue:"",x?pe:"",p.date,p.voucher_type,p.voucher_no,p.hsn_code,p.taxable,p.CGST_rate,p.CGST_amount,p.SGST_rate,p.SGST_amount,p.IGST_rate,p.IGST_amount,p.Tax_amount]),x=!1}),w++}),q()(n,{head:[["#","Date","Name","Voucher No.","Total Amount","Date","Voucher Type","Voucher No.","Hsn Code","Taxable","CGST Rate","CGST Amount","SGST Rate","SGST Amount","IGST Rate","IGST Amount","Tax Amount"]],body:M,theme:"grid",startY:49,margin:{top:49},headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),n.save("Tax_wise_Sale_Return .pdf")})()}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const s=[];a.querySelectorAll("th").forEach(c=>{const g=c.textContent?.trim();g&&"Is Active"!==g&&"Action"!==g&&s.push(g)}),t.push(s)}n.querySelectorAll("tbody tr").forEach(s=>{const c=[];s.querySelectorAll("td").forEach(g=>{const h=g.textContent?.trim();h&&c.push(h)}),t.push(c)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=Z.P6.aoa_to_sheet(t),a=Z.P6.book_new();Z.P6.book_append_sheet(a,n,"Sheet1");const i=Z.cW(a,{bookType:"xlsx",type:"array"}),s=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,W.saveAs)(s,"taxwisesalereturn.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const i=a.outerHTML,c=t.cloneNode(!0).outerHTML,h="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+c,d=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=h,window.print(),document.body.innerHTML=d}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,n){if(n)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(i=>i==t);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(F.J),e.Y36(_.uU),e.Y36(N.r),e.Y36(I.R),e.Y36(J.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tax-wise-sale-return"]],decls:111,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","padding-left","31px","padding-right","45px"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-right","60px"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","12"],[2,"width","10%"],[2,"width","8%"],["colspan","10"],[1,"text-center"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Tax Wise Sale Return"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Tax Wise Sale Return"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,E,11,5,"div",8),e.qZA()()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()()()()(),e.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(36,"img",26),e.qZA()(),e.TgZ(37,"li")(38,"a",27),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(39,"img",28),e.qZA()(),e.TgZ(40,"li")(41,"a",29),e.NdJ("click",function(){return n.printTable()}),e._UZ(42,"img",30),e.qZA()()()()(),e.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"#"),e._UZ(49,"i",34),e.qZA(),e.TgZ(50,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Date "),e._UZ(52,"i",34),e.qZA(),e.TgZ(53,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Name"),e._UZ(55,"i",34),e.qZA(),e.TgZ(56,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"Voucher No."),e._UZ(58,"i",34),e.qZA(),e.TgZ(59,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Total Amount"),e._UZ(61,"i",34),e.qZA(),e.TgZ(62,"th",35),e._uU(63,"Date "),e.qZA(),e.TgZ(64,"th",36),e._uU(65,"Voucher Type "),e.qZA(),e.TgZ(66,"th",37),e._uU(67,"Voucher No."),e.qZA(),e.TgZ(68,"th",37),e._uU(69,"Hsn Code"),e.qZA(),e.TgZ(70,"th",37),e._uU(71,"Taxable "),e.qZA(),e.TgZ(72,"th",37),e._uU(73,"CGST Rate "),e.qZA(),e.TgZ(74,"th",37),e._uU(75,"CGST Amount "),e.qZA(),e.TgZ(76,"th",37),e._uU(77,"SGST Rate "),e.qZA(),e.TgZ(78,"th",37),e._uU(79,"SGST Amount"),e.qZA(),e.TgZ(80,"th",37),e._uU(81,"IGST Rate "),e.qZA(),e.TgZ(82,"th",37),e._uU(83,"IGST Amount"),e.qZA(),e.TgZ(84,"th",37),e._uU(85,"Tax Amount"),e.qZA()()(),e.YNc(86,V,4,11,"tbody",38),e.YNc(87,$,5,0,"tbody",38),e.qZA(),e.TgZ(88,"div",6)(89,"div",39)(90,"div",40),e._uU(91," Show per page "),e.TgZ(92,"select",41,42),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s})("change",function(){e.CHM(a);const s=e.MAs(93);return e.KtG(n.changePg(s.value))}),e.TgZ(94,"option",43),e._uU(95,"10"),e.qZA(),e.TgZ(96,"option",44),e._uU(97,"20"),e.qZA(),e.TgZ(98,"option",45),e._uU(99,"30"),e.qZA(),e.TgZ(100,"option",46),e._uU(101,"50"),e.qZA(),e.TgZ(102,"option",47),e._uU(103,"100"),e.qZA(),e.TgZ(104,"option",48),e._uU(105,"All"),e.qZA()()()(),e.TgZ(106,"div",49)(107,"div",50)(108,"pagination-controls",51),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(109,"div",52),e._uU(110),e.qZA()()()()()()()()}if(2&t){const a=e.MAs(31);e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.purchaseRegisterForm),e.xp6(7),e.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",a)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",a),e.xp6(57),e.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.sg,u.u,A.LS,v.KE,v.R9,m.nW,m.wx,m.zY,m.By,m._g,A._s,G.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.Bz.forChild(j),y.Bz]}),o})();var X=r(47957),ee=r(44144),te=r(3056),ne=r(87078),b=r(86323),S=r(92642),ae=r(3238),oe=r(95113),ie=r(64155),re=r(6205),R=r(8468);const se={User:S.n5m,UserCheck:S.uS3,FileText:S.acj,File:S.$BE};let le=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[_.uU],imports:[_.ez,K,R.I,u.u5,u.UX,X.Bb,v.lN,ee.c,te.ZQ,ne.T,m.FA,v.lN,ae.XK,oe.LD,ie.vQ,R.I,re.X,b.p.pick(se),b.p]}),o})()}}]);