"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9499],{29499:(st,x,r)=>{r.r(x),r.d(x,{ProductWisePurchaseModule:()=>et});var g=r(36895),C=r(89299),c=r(24006),_=r(68675),A=r(54004),M=r(96166),O=r(12983),q=r.n(O),Z=r(80574),L=r(94327),t=r(94650),D=r(97185),F=r(71071),S=r(80927),N=r(42917),J=r(87719),b=r(54333),y=r(47957),U=r(3238),T=r(59549),f=r(99602),k=r(54040);function E(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",58),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckAccount(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&i){const e=l.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function I(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"td",61),t._uU(2),t.qZA(),t.TgZ(3,"td",62),t._uU(4),t.qZA(),t.TgZ(5,"td",63),t._uU(6),t.qZA(),t.TgZ(7,"td",64),t._uU(8),t.qZA(),t.TgZ(9,"td",61),t._uU(10),t.qZA(),t.TgZ(11,"td",61),t._uU(12),t.qZA(),t.TgZ(13,"td",63),t._uU(14),t.qZA(),t.TgZ(15,"td",65),t._uU(16),t.qZA(),t.TgZ(17,"td",65),t._uU(18),t.qZA(),t.TgZ(19,"td",66),t._uU(20),t.qZA(),t.TgZ(21,"td",66),t._uU(22),t.qZA(),t.TgZ(23,"td",67),t._uU(24),t.qZA(),t.TgZ(25,"td",68),t._uU(26),t.qZA(),t.TgZ(27,"td",67),t._uU(28),t.qZA()()),2&i){const e=l.$implicit;t.xp6(2),t.Oqu(null==e?null:e.barcode.variant_name),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.Oqu(e.barcode.product.title),t.xp6(2),t.Oqu(e.barcode.product.hsncode),t.xp6(2),t.Oqu(e.barcode.product.category),t.xp6(2),t.Oqu(e.barcode.product.subcategory),t.xp6(2),t.Oqu(e.barcode.product.brand),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.landing_cost),t.xp6(2),t.hij(" ",e.total,"")}}function Y(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",60)(14,"table")(15,"tbody"),t.YNc(16,I,29,14,"tr",59),t.qZA()()()()),2&i){const e=l.$implicit,o=l.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(t.xi3(9,6,e.total,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,9,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const H=function(i,l){return{itemsPerPage:i,currentPage:l}};function B(i,l){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,Y,17,12,"tr",59),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.productWisePurchaseList,e.key,e.reverse),t.WLB(8,H,e.itemsPerPage,e.p)))}}function Q(i,l){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),t._uU(4,"Data not available"),t.qZA()()()())}const z=[{path:"",component:(()=>{class i{constructor(e,o,n,a,d,p,s,u){this.router=e,this.fb=o,this.toastr=n,this.transactionService=a,this.coreService=d,this.cs=p,this.datepipe=s,this.reportService=u,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new c.NI(""),this.productControl=new c.NI(""),this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(s=>{this.userDetails=s,console.log(s),this.userName=s?.username});const e=new Date,a=(e.getMonth(),e.getFullYear(),new Date(e));a.setDate(e.getDate()-14);const d=this.formatDate(a),p=this.formatDate(e);this.productWisePurchaseForm=new c.cw({start:new c.NI(d),end:new c.NI(p),product:new c.NI}),this.startDate=this.productWisePurchaseForm.value?.start,this.endDate=this.productWisePurchaseForm.value?.end,this.product=this.productWisePurchaseForm.value?.product,this.getProductWisePurchase(),this.getProduct(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,_.O)(""),(0,A.U)(s=>{const u="string"==typeof s?s:s?.title;return u?this._filter(u):this.suppliers.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,_.O)(""),(0,A.U)(s=>{const u="string"==typeof s?s:s?.title;return u?this._filter2(u):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const o=e?e.toLowerCase():"";return console.log(o),this.suppliers.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter2(e){const o=e?e.toLowerCase():"";return console.log(o),this.suppliers.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn2(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.suppliers=e})}search(){if(""===this.titlee)this.getProductWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.productWisePurchaseList=this.productWisePurchaseList.filter(o=>{const n=o?.user?.party_name.toLocaleLowerCase(),a=o?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!a.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,n){const a=(e-1)*o;return`Showing ${a+1}\u2013${Math.min(a+o-1,n-1)+1} of ${n} results`}getProductWisePurchase(){this.reportService.getProductWisePurchase(this.startDate,this.endDate,this.product).subscribe(e=>{console.log(e),this.productWisePurchase=e,this.productWisePurchaseList=e?.data})}oncheckAccount(e){console.log(e),this.dataId=e,this.productWisePurchaseForm.patchValue({product:this.dataId}),console.warn(this.productWisePurchaseForm.value),this.product=this.productWisePurchaseForm.value?.product,this?.getProductWisePurchase()}getSelectedProductWisePurchaseDates(){console.log(this.productWisePurchaseForm.value);const e=this.datepipe.transform(this.productWisePurchaseForm.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.productWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getProductWisePurchase()}getProductoncheckAccount(e){this.productWisePurchaseForm.patchValue({productName:e}),console.warn(this.productWisePurchaseForm.value),this?.getProductWisePurchase()}generatePDFAgain(){const e=new M.default("landscape"),a=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Product Wise Purchase Report",82,10),e.text(d,10,18),e.text(a,10,22),e.text("",10,25);const s=[];let u=1;this.productWisePurchaseList.forEach(m=>{console.warn(m);const ot=m.user.party_name,nt=m.check_gst,it=m.total,rt=m.bill_date;let P=!0;m.data.forEach((h,lt)=>{console.log(h),s.push([P?u:"",P?ot:"",P?nt:"",P?it:"",this.formatDate(P?rt:""),h.barcode.variant_name,h.qty,h.unit_cost,h.mrp,h.discount,h.tax,h.landing_cost,h.total]),P=!1}),u++}),q()(e,{head:[["#","User","Check Gst","Total","Bill Date","Variant Name","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:s,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Product_wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const n=o.querySelector("thead tr");if(n){const d=[];n.querySelectorAll("th").forEach(p=>{const s=p.textContent?.trim();s&&"Is Active"!==s&&"Action"!==s&&d.push(s)}),e.push(d)}o.querySelectorAll("tbody tr").forEach(d=>{const p=[];d.querySelectorAll("td").forEach(s=>{const u=s.textContent?.trim();u&&p.push(u)}),e.push(p)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=Z.P6.aoa_to_sheet(e),n=Z.P6.book_new();Z.P6.book_append_sheet(n,o,"Sheet1");const a=Z.cW(n,{bookType:"xlsx",type:"array"}),d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,L.saveAs)(d,"ProductHistory.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const a=n.outerHTML,p=e.cloneNode(!0).outerHTML,u="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+p,m=document.body.innerHTML;document.body.innerHTML=u,window.print(),document.body.innerHTML=m}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.F0),t.Y36(c.qu),t.Y36(D._W),t.Y36(F.p),t.Y36(S.p),t.Y36(N.J),t.Y36(g.uU),t.Y36(J.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-wise-purchase"]],decls:119,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-left","10px","padding-right","20px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value","blur"],[4,"ngFor","ngForOf"],["colspan","14"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","8%"],[2,"width","6%"],[2,"width","7%"],[2,"width","10%"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Product Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Product Wise Purchase"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return o.getSelectedProductWisePurchaseDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedProductWisePurchaseDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"strong"),t._uU(31,"Select Product"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",24,25),t.YNc(35,E,2,2,"mat-option",26),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",27)(38,"ul")(39,"li")(40,"a",28),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(41,"img",29),t.qZA()(),t.TgZ(42,"li")(43,"a",30),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(44,"img",31),t.qZA()(),t.TgZ(45,"li")(46,"a",32),t.NdJ("click",function(){return o.printTable()}),t._UZ(47,"img",33),t.qZA()()()()(),t.TgZ(48,"div",34)(49,"table",35)(50,"thead")(51,"tr")(52,"th",36),t.NdJ("click",function(){return o.sort("id")}),t._uU(53,"#"),t._UZ(54,"i",37),t.qZA(),t.TgZ(55,"th",36),t.NdJ("click",function(){return o.sort("id")}),t._uU(56,"User "),t._UZ(57,"i",37),t.qZA(),t.TgZ(58,"th",36),t.NdJ("click",function(){return o.sort("id")}),t._uU(59,"Check Gst "),t._UZ(60,"i",37),t.qZA(),t.TgZ(61,"th",36),t.NdJ("click",function(){return o.sort("id")}),t._uU(62,"Total "),t._UZ(63,"i",37),t.qZA(),t.TgZ(64,"th",36),t.NdJ("click",function(){return o.sort("id")}),t._uU(65,"Bill Date "),t._UZ(66,"i",37),t.qZA(),t.TgZ(67,"th",38),t._uU(68,"Variant Name "),t.qZA(),t.TgZ(69,"th",39),t._uU(70,"Sku "),t.qZA(),t.TgZ(71,"th",40),t._uU(72,"Title"),t.qZA(),t.TgZ(73,"th",38),t._uU(74,"Hsn Code"),t.qZA(),t.TgZ(75,"th",41),t._uU(76,"Category"),t.qZA(),t.TgZ(77,"th",38),t._uU(78,"Sub category "),t.qZA(),t.TgZ(79,"th",42),t._uU(80,"Brand"),t.qZA(),t.TgZ(81,"th",42),t._uU(82,"Qty "),t.qZA(),t.TgZ(83,"th",43),t._uU(84,"Unit Cost "),t.qZA(),t.TgZ(85,"th",42),t._uU(86,"Mrp "),t.qZA(),t.TgZ(87,"th",42),t._uU(88,"Discount "),t.qZA(),t.TgZ(89,"th",42),t._uU(90,"Tax"),t.qZA(),t.TgZ(91,"th",38),t._uU(92,"Landing Cost "),t.qZA(),t.TgZ(93,"th",42),t._uU(94,"Total"),t.qZA()()(),t.YNc(95,B,4,11,"tbody",44),t.YNc(96,Q,5,0,"tbody",44),t.qZA(),t.TgZ(97,"div",10)(98,"div",45)(99,"div",46),t._uU(100," Show per page "),t.TgZ(101,"select",47),t.NdJ("ngModelChange",function(a){return o.itemsPerPage=a}),t.TgZ(102,"option",48),t._uU(103,"10"),t.qZA(),t.TgZ(104,"option",49),t._uU(105,"20"),t.qZA(),t.TgZ(106,"option",50),t._uU(107,"30"),t.qZA(),t.TgZ(108,"option",51),t._uU(109,"50"),t.qZA(),t.TgZ(110,"option",52),t._uU(111,"100"),t.qZA(),t.TgZ(112,"option",53),t._uU(113,"All"),t.qZA()()()(),t.TgZ(114,"div",54)(115,"div",55)(116,"pagination-controls",56),t.NdJ("pageChange",function(a){return o.p=a}),t.qZA(),t.TgZ(117,"div",57),t._uU(118),t.qZA()()()()()()()()()),2&e){const n=t.MAs(27),a=t.MAs(34);t.xp6(12),t.Q6J("formGroup",o.productWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",o.productWisePurchaseForm)("rangePicker",n),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",o.supplierControl)("matAutocomplete",a),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(36,14,o.filteredSuppliers)),t.xp6(60),t.Q6J("ngIf",(null==o.productWisePurchaseList?null:o.productWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.productWisePurchaseList?null:o.productWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(17),t.lnq(" Showing ",o.itemsPerPage," to ",o.itemsPerPage," of ",o.p," entries ")}},dependencies:[g.sg,g.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.oH,c.sg,c.u,b.LS,y.XC,y.ZL,U.ey,T.KE,T.R9,f.nW,f.wx,f.zY,f.By,f._g,g.Ov,g.JJ,g.uU,b._s,k.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})()}];let R=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[C.Bz.forChild(z),C.Bz]}),i})();var $=r(44144),j=r(3056),V=r(87078),W=r(86323),v=r(92642),G=r(95113),X=r(64155),K=r(6205),w=r(8468);const tt={User:v.n5m,UserCheck:v.uS3,FileText:v.acj,File:v.$BE};let et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,R,w.I,c.u5,c.UX,y.Bb,T.lN,$.c,j.ZQ,V.T,f.FA,T.lN,U.XK,G.LD,X.vQ,w.I,K.X,W.p.pick(tt),W.p]}),i})()}}]);