"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[18593],{18593:(ae,x,r)=>{r.r(x),r.d(x,{BrandWiseSaleModule:()=>ne});var g=r(36895),_=r(4392),M=r(49671),c=r(24006),W=r(68675),w=r(54004),A=r(96166),D=r(12983),L=r.n(D),u=r(80574),P=r(94327),e=r(94650),O=r(42917),F=r(80927),U=r(87719),J=r(43443),y=r(54333),C=r(47957),T=r(3238),v=r(59549),h=r(99602),N=r(54040);function I(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",62)(1,"input",63,64),e.NdJ("change",function(o){const l=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.SelectedBranch(l.id,o.target.checked))}),e.qZA(),e.TgZ(3,"label",65),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onLabelClick(o))}),e._uU(4),e.qZA()()}if(2&i){const t=s.$implicit,n=s.index,o=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",o.selectData.includes(t.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(t.title)}}function k(i,s){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const E=function(){return{standalone:!0}};function Y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56)(2,"button",57),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",58)(5,"li")(6,"input",59),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.searchBranch=o)})("ngModelChange",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,I,5,5,"a",60),e.qZA()()(),e.TgZ(9,"div",61),e.YNc(10,k,2,1,"span",40),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,E)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"mat-option",66),e.NdJ("blur",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.oncheckBrand(null==a?null:a.id))}),e._uU(1),e.qZA()}if(2&i){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij("",null==t?null:t.title," ")}}function H(i,s){if(1&i&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&i){const t=s.$implicit,n=s.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.total_qty),e.xp6(2),e.Oqu(t.total_amount)}}const Q=function(i,s){return{itemsPerPage:i,currentPage:s}};function $(i,s){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,H,9,4,"tr",67),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.brandWiseSaleList,t.key,t.reverse),e.WLB(8,Q,t.itemsPerPage,t.p)))}}const z=[{path:"",component:(()=>{class i{constructor(t,n,o,a,l){this.cs=t,this.datepipe=n,this.coreService=o,this.reportService=a,this.commonService=l,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new c.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let S=JSON.parse(m);this.fyID=S}this.financialYear=localStorage.getItem("financialYear");const{minDate:t,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=t,this.maxDate=n,this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m?.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const o=new Date,d=(o.getMonth(),o.getFullYear(),new Date(o));d.setDate(o.getDate()-14);const p=this.formatDate(d),f=this.formatDate(o);this.brandWiseSaleForm=new c.cw({start:new c.NI(p,this.commonService.dateRangeValidator(this.financialYear)),end:new c.NI(f,this.commonService.dateRangeValidator(this.financialYear)),brand:new c.NI("")}),this.commonService.validateAndClearDates(this.brandWiseSaleForm,this.minDate,this.maxDate),this.startDate=this.brandWiseSaleForm.value?.start,this.endDate=this.brandWiseSaleForm.value?.end,this.brand=this.brandWiseSaleForm.value?.brand,this.getBrandWiseSale(),this.getBrand(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,W.O)(""),(0,w.U)(m=>{const S="string"==typeof m?m:m?.title;return S?this._filter(S):this.brandList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter(t){const n=t?t.toLowerCase():"";return console.log(n),this.brandList.filter(o=>o?.title&&o.title.toLowerCase().includes(n))}displayFn(t){return t&&t?.title?t?.title:""}displayFn4(t){return t&&t?.item_code?t?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(t=>{console.log(t,"user"),this.productList=t})}search(){if(""===this.titlee)this.getBrandWiseSale();else{const t=this.titlee.toLocaleLowerCase();this.brandWiseSaleList=this.brandWiseSaleList.filter(n=>{const o=n?.user?.party_name.toLocaleLowerCase(),a=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(t)&&!a.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}selectAll(t){this.countryList.forEach(n=>n.isSelected=!t)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,n,o){const a=(t-1)*n;return`Showing ${a+1}\u2013${Math.min(a+n-1,o-1)+1} of ${o} results`}getBrandWiseSale(){console.log(this.brand),this.reportService.getBrandWiseSale(this.startDate,this.endDate,this.brand,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.brandWiseSale=t,this.brandWiseSaleList=t})}oncheckBrand(t){console.log(t),this.dataId=t,this.brandWiseSaleForm.patchValue({brand:this.dataId}),console.warn(this.brandWiseSaleForm.value),this.brand=this.brandWiseSaleForm.value?.brand,this?.getBrandWiseSale()}getSelectedBrandWiseSaleDates(){console.log(this.brandWiseSaleForm.value);const t=this.datepipe.transform(this.brandWiseSaleForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.brandWiseSaleForm.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,this?.getBrandWiseSale()}getBrand(){this.coreService.getBrand().subscribe(t=>{console.log(t),this.brandList=t})}generatePDFAgain(){var t=this;return(0,M.Z)(function*(){const n=t.coreService.profileData$.value,o=yield t.cs.loadImageReport(),a=new A.default("p","mm","a4"),l=t.datepipe.transform(new Date,"yyyy-MM-dd");try{a.setFontSize(12),a.setTextColor(33,43,54),a.addImage(o,"PNG",86,5,31,10),a.setFontSize(25),a.text("Brand Wise Sale Report",52,25),a.setFontSize(12),a.text(`Business Location: ${n?.branch}`,14,39),a.text(`From Date: ${t.formatDate(t.brandWiseSaleForm.get("start").value)}`,14,45),a.text(`User: ${n?.role}`,172,33),a.text(`Print Date: ${l}`,153,39),a.text(`To Date: ${t.formatDate(t.brandWiseSaleForm.get("end").value)}`,157,45),L()(a,{head:[["#","Name","Total Qty.","Total Amount"]],body:t.brandWiseSaleList.map((d,p)=>[p+1,d.name,d.total_qty,d.total_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:49,margin:{top:49}}),a.save("Brand_Wise_Sale .pdf")}catch(d){console.log("error in pdf download ",d)}})()}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const l=[];o.querySelectorAll("th").forEach(d=>{const p=d.textContent?.trim();p&&"Is Active"!==p&&"Action"!==p&&l.push(p)}),t.push(l)}n.querySelectorAll("tbody tr").forEach(l=>{const d=[];l.querySelectorAll("td").forEach(p=>{const f=p.textContent?.trim();f&&d.push(f)}),t.push(d)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=u.P6.aoa_to_sheet(t),o=u.P6.book_new();u.P6.book_append_sheet(o,n,"Sheet1");const a=u.cW(o,{bookType:"xlsx",type:"array"}),l=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,P.saveAs)(l,"Stockalert.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const a=o.outerHTML,d=t.cloneNode(!0).outerHTML,f="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+d,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=f,window.print(),document.body.innerHTML=m}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.brandWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,n){if(n)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(a=>a==t);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(O.J),e.Y36(g.uU),e.Y36(F.p),e.Y36(U.r),e.Y36(J.R))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-brand-wise-sale"]],decls:92,vars:18,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-4","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["autob","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[4,"ngFor","ngForOf"]],template:function(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Brand Wise Sale"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Brand Wise Sale"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,Y,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return n.getSelectedBrandWiseSaleDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return n.getSelectedBrandWiseSaleDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()(),e.TgZ(32,"div",14)(33,"div",24)(34,"strong"),e._uU(35,"Select Brand"),e.qZA(),e._UZ(36,"input",25),e.TgZ(37,"mat-autocomplete",26,27),e.YNc(39,q,2,2,"mat-option",28),e.ALo(40,"async"),e.qZA()()()()()(),e.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(45,"img",31),e.qZA()(),e.TgZ(46,"li")(47,"a",32),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(48,"img",33),e.qZA()(),e.TgZ(49,"li")(50,"a",34),e.NdJ("click",function(){return n.printTable()}),e._UZ(51,"img",35),e.qZA()()()()(),e.TgZ(52,"div",36)(53,"table",37)(54,"thead")(55,"tr")(56,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"#"),e._UZ(58,"i",39),e.qZA(),e.TgZ(59,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(60," Name "),e._UZ(61,"i",39),e.qZA(),e.TgZ(62,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Total Qty "),e._UZ(64,"i",39),e.qZA(),e.TgZ(65,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(66,"Total Amount "),e._UZ(67,"i",39),e.qZA()()(),e.YNc(68,$,4,11,"tbody",40),e.qZA(),e.TgZ(69,"div",6)(70,"div",41)(71,"div",42),e._uU(72," Show per page "),e.TgZ(73,"select",43,44),e.NdJ("ngModelChange",function(l){return n.itemsPerPage=l})("change",function(){e.CHM(o);const l=e.MAs(74);return e.KtG(n.changePg(l.value))}),e.TgZ(75,"option",45),e._uU(76,"10"),e.qZA(),e.TgZ(77,"option",46),e._uU(78,"20"),e.qZA(),e.TgZ(79,"option",47),e._uU(80,"30"),e.qZA(),e.TgZ(81,"option",48),e._uU(82,"50"),e.qZA(),e.TgZ(83,"option",49),e._uU(84,"100"),e.qZA(),e.TgZ(85,"option",50),e._uU(86,"All"),e.qZA()()()(),e.TgZ(87,"div",51)(88,"div",52)(89,"pagination-controls",53),e.NdJ("pageChange",function(l){return n.p=l}),e.qZA(),e.TgZ(90,"div",54),e._uU(91),e.qZA()()()()()()()()()}if(2&t){const o=e.MAs(31),a=e.MAs(38);e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.brandWiseSaleForm),e.xp6(7),e.Q6J("formGroup",n.brandWiseSaleForm)("rangePicker",o)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",o),e.xp6(7),e.Q6J("formControl",n.brandControl)("matAutocomplete",a),e.xp6(1),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(40,16,n.filteredBrand)),e.xp6(29),e.Q6J("ngIf",(null==n.brandWiseSaleList?null:n.brandWiseSaleList.length)>=0),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.brandWiseSaleList?null:n.brandWiseSaleList.length," of ",n.p," entries ")}},dependencies:[g.sg,g.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.oH,c.sg,c.u,y.LS,C.XC,C.ZL,T.ey,v.KE,v.R9,h.nW,h.wx,h.zY,h.By,h._g,g.Ov,y._s,N.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})()}];let R=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(z),_.Bz]}),i})();var G=r(44144),j=r(3056),K=r(87078),Z=r(86323),b=r(92642),V=r(95113),X=r(64155),ee=r(6205),B=r(8468);const te={User:b.n5m,UserCheck:b.uS3,FileText:b.acj,File:b.$BE};let ne=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[g.uU],imports:[g.ez,R,B.I,c.u5,c.UX,C.Bb,v.lN,G.c,j.ZQ,K.T,h.FA,v.lN,T.XK,V.LD,X.vQ,B.I,ee.X,Z.p.pick(te),Z.p]}),i})()}}]);