"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8586],{8586:(re,C,l)=>{l.r(C),l.d(C,{TimeWiseSaleModule:()=>ae});var h=l(36895),_=l(4392),M=l(49671),d=l(24006),W=l(94327),w=l(96166),A=l(12983),D=l.n(A),L=l(68675),P=l(54004),f=l(80574),e=l(94650),O=l(80927),U=l(42917),J=l(87719),N=l(43443),y=l(54333),T=l(59549),u=l(99602),I=l(54040);function B(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"a",59)(1,"input",60,61),e.NdJ("change",function(a){const s=e.CHM(t).$implicit,m=e.oxw(2);return e.KtG(m.SelectedBranch(s.id,a.target.checked))}),e.qZA(),e.TgZ(3,"label",62),e.NdJ("click",function(a){e.CHM(t);const i=e.oxw(2);return e.KtG(i.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&o){const t=c.$implicit,n=c.index,a=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",a.selectData.includes(t.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(t.title)}}function F(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const q=function(){return{standalone:!0}};function E(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",52)(1,"div",53)(2,"button",54),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",55)(5,"li")(6,"input",56),e.NdJ("ngModelChange",function(a){e.CHM(t);const i=e.oxw();return e.KtG(i.searchBranch=a)})("ngModelChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,B,5,5,"a",57),e.qZA()()(),e.TgZ(9,"div",58),e.YNc(10,F,2,1,"span",37),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,q)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function Y(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"td",35),e._uU(2),e.qZA(),e.TgZ(3,"td",67),e._uU(4),e.qZA(),e.TgZ(5,"td",35),e._uU(6),e.qZA()()),2&o){const t=c.$implicit;e.xp6(2),e.Oqu(t.start_time),e.xp6(2),e.Oqu(t.end_time),e.xp6(2),e.Oqu(t[" total_sale"])}}function k(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td",64),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td",64),e._uU(7),e.qZA(),e.TgZ(8,"td",65)(9,"table",66)(10,"tbody"),e.YNc(11,Y,7,3,"tr",63),e.qZA()()()()),2&o){const t=c.$implicit,n=c.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(e.xi3(5,4,t.date,"yy/MM/dd")),e.xp6(3),e.Oqu(t.total_sale),e.xp6(4),e.Q6J("ngForOf",null==t?null:t.time_wise_data)}}const H=function(o,c){return{itemsPerPage:o,currentPage:c}};function z(o,c){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,k,12,7,"tr",63),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.amountWiseSaleList,t.key,t.reverse),e.WLB(8,H,t.itemsPerPage,t.p)))}}function Q(o,c){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",68)(3,"p",69),e._uU(4,"Data not available"),e.qZA()()()())}const R=[{path:"",component:(()=>{class o{constructor(t,n,a,i,s){this.CoreService=t,this.cs=n,this.datepipe=a,this.reportService=i,this.commonService=s,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let r=localStorage.getItem("financialYear");console.warn(JSON.parse(r));let p=JSON.parse(r);this.fyID=p}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=n,this.cs.userDetails$.subscribe(r=>{this.isAdmin="admin"==r?.role,this.getBranch()}),this.cs.userDetails$.subscribe(r=>{this.userDetails=r,console.log(r),this.userName=r?.username});const a=new Date,i=new Date(a);i.setDate(a.getDate()-14);const s=this.formatDate(i),m=this.formatDate(a);this.amountWiseSaleform=new d.cw({start:new d.NI(s,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(m,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.amountWiseSaleform,this.minDate,this.maxDate),this.startDate=this.amountWiseSaleform.value?.start,this.endDate=this.amountWiseSaleform.value?.end,this.getamountWiseSale(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,L.O)(""),(0,P.U)(r=>{const p="string"==typeof r?r:r?.detail?.name;return p?this._filter(p):this.suppliers.slice()}))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const n=t?t.toLowerCase():"";return console.log(n),this.suppliers.filter(a=>a?.detail?.name.toLowerCase().includes(n)||a?.detail?.company_name?.toLowerCase().includes(n)||a?.account?.account_id?.toLowerCase().includes(n))}displayFn(t){return t&&t?.detail?.company_name?t?.detail?.company_name:""}search(){if(""===this.titlee)this.getamountWiseSale();else{const t=this.titlee.toLocaleLowerCase();this.amountWiseSaleList=this.amountWiseSaleList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),i=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(t)&&!i.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(n=>n.isSelected=!t)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,n,a){const i=(t-1)*n;return`Showing ${i+1}\u2013${Math.min(i+n-1,a-1)+1} of ${a} results`}getamountWiseSale(){this.reportService.getTimeWiseSale(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.amountWiseSale=t,this.amountWiseSaleList=t})}oncheckAccount(t){console.log(t),this.dataId=t,this.amountWiseSaleform.patchValue({user_id:this.dataId}),console.warn(this.amountWiseSaleform.value),this?.getamountWiseSale()}getSelectedAmountWiseSaleDates(){console.log(this.amountWiseSaleform.value);const t=this.datepipe.transform(this.amountWiseSaleform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.amountWiseSaleform.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,this.getamountWiseSale()}generatePDFAgain(){var t=this;return(0,M.Z)(function*(){const n=t.CoreService.profileData$.value,a=yield t.cs.loadImageReport(),i=new w.default("p","mm","a4"),s=t.datepipe.transform(new Date,"yyyy-MM-dd");try{i.setFontSize(12),i.setTextColor(33,43,54),i.addImage(a,"PNG",86,5,31,10),i.setFontSize(25),i.text("Time Wise Sale Report",52,25),i.setFontSize(12),i.text(`Business Location: ${n?.branch}`,14,39),i.text(`From Date: ${t.formatDate(t.amountWiseSaleform.get("start").value)}`,14,45),i.text(`User: ${n?.role}`,172,33),i.text(`Print Date: ${s}`,153,39),i.text(`To Date: ${t.formatDate(t.amountWiseSaleform.get("end").value)}`,157,45)}catch(g){console.log("error in pdf download",g)}const r=[];let p=1;t.amountWiseSaleList.forEach(g=>{const oe=g.date,le=g.total_sale;let S=!0;g.time_wise_data.forEach((x,de)=>{r.push([S?p:"",t.formatDate(S?oe:""),S?le:"",x.start_time,x.end_time,x[" total_sale"]]),S=!1}),p++}),D()(i,{head:[["#","Date","Total Sale","Start Time","End Time","Total Sale"]],body:r,theme:"grid",startY:49,margin:{top:49},headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),i.save("Time_Wise_Sale.pdf")})()}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const s=[];a.querySelectorAll("th").forEach(m=>{const r=m.textContent?.trim();r&&"Is Active"!==r&&"Action"!==r&&s.push(r)}),t.push(s)}n.querySelectorAll("tbody tr").forEach(s=>{const m=[];s.querySelectorAll("td").forEach(r=>{const p=r.textContent?.trim();p&&m.push(p)}),t.push(m)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=f.P6.aoa_to_sheet(t),a=f.P6.book_new();f.P6.book_append_sheet(a,n,"Sheet1");const i=f.cW(a,{bookType:"xlsx",type:"array"}),s=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,W.saveAs)(s,"timeWiseSale.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const i=a.outerHTML,m=t.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+m,g=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=g}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.amountWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,n){if(n)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(i=>i==t);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.p),e.Y36(U.J),e.Y36(h.uU),e.Y36(J.r),e.Y36(N.R))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-time-wise-sale"]],decls:87,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[2,"width","15%"],[2,"width","20%"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],[2,"vertical-align","text-top"],["colspan","5"],[1,"table"],[2,"width","25%"],["colspan","10"],[1,"text-center"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5," Time Wise Sale"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage Your Time Wise Sale "),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,E,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return n.getSelectedAmountWiseSaleDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return n.getSelectedAmountWiseSaleDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()()()()(),e.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(36,"img",26),e.qZA()(),e.TgZ(37,"li")(38,"a",27),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(39,"img",28),e.qZA()(),e.TgZ(40,"li")(41,"a",29),e.NdJ("click",function(){return n.printTable()}),e._UZ(42,"img",30),e.qZA()()()()(),e.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"#"),e._UZ(49,"i",34),e.qZA(),e.TgZ(50,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(51,"Date"),e._UZ(52,"i",34),e.qZA(),e.TgZ(53,"th",33),e.NdJ("click",function(){return n.sort("id")}),e._uU(54,"Total Sale "),e._UZ(55,"i",34),e.qZA(),e.TgZ(56,"th",35),e._uU(57,"Start Time"),e.qZA(),e.TgZ(58,"th",36),e._uU(59,"End Time"),e.qZA(),e.TgZ(60,"th",36),e._uU(61,"Total Sale (Time Wise)"),e.qZA()()(),e.YNc(62,z,4,11,"tbody",37),e.YNc(63,Q,5,0,"tbody",37),e.qZA(),e.TgZ(64,"div",6)(65,"div",38)(66,"div",39),e._uU(67," Show per page "),e.TgZ(68,"select",40,41),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s})("change",function(){e.CHM(a);const s=e.MAs(69);return e.KtG(n.changePg(s.value))}),e.TgZ(70,"option",42),e._uU(71,"10"),e.qZA(),e.TgZ(72,"option",43),e._uU(73,"20"),e.qZA(),e.TgZ(74,"option",44),e._uU(75,"30"),e.qZA(),e.TgZ(76,"option",45),e._uU(77,"50"),e.qZA(),e.TgZ(78,"option",46),e._uU(79,"100"),e.qZA(),e.TgZ(80,"option",47),e._uU(81,"All"),e.qZA()()()(),e.TgZ(82,"div",48)(83,"div",49)(84,"pagination-controls",50),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(85,"div",51),e._uU(86),e.qZA()()()()()()()()()}if(2&t){const a=e.MAs(31);e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.amountWiseSaleform),e.xp6(7),e.Q6J("formGroup",n.amountWiseSaleform)("rangePicker",a)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",a),e.xp6(33),e.Q6J("ngIf",(null==n.amountWiseSaleList?null:n.amountWiseSaleList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.amountWiseSaleList?null:n.amountWiseSaleList.length)),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.amountWiseSaleList?null:n.amountWiseSaleList.length," of ",n.p," entries ")}},dependencies:[h.sg,h.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,y.LS,T.KE,T.R9,u.nW,u.wx,u.zY,u.By,u._g,h.uU,y._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let $=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(R),_.Bz]}),o})();var G=l(47957),V=l(44144),j=l(3056),K=l(87078),b=l(86323),v=l(92642),X=l(3238),ee=l(95113),te=l(64155),ne=l(6205),Z=l(8468);const ie={User:v.n5m,UserCheck:v.uS3,FileText:v.acj,File:v.$BE};let ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[h.uU],imports:[h.ez,$,Z.I,d.u5,d.UX,G.Bb,T.lN,V.c,j.ZQ,K.T,u.FA,T.lN,X.XK,ee.LD,te.vQ,Z.I,ne.X,b.p.pick(ie),b.p]}),o})()}}]);