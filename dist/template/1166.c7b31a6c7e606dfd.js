"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1166],{53506:($,y,a)=>{a.d(y,{x:()=>S});var f=a(92340),v=a(94650),u=a(80529);let S=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${f.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,t,O){let P=this.apiUrl+"/pv-api/purchase_product_filter/";const m=[];return e&&m.push(`supplier=${e}`),r&&m.push(`category=${r}`),t&&m.push(`subcategory=${t}`),O&&m.push(`search=${O}`),m.length>0&&(P+="?"+m.join("&")),this.http.get(P)}}return g.\u0275fac=function(e){return new(e||g)(v.LFG(u.eN))},g.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},51166:($,y,a)=>{a.r(y),a.d(y,{CustomerOutstandingSaleModule:()=>G});var f=a(36895),v=a(89299),u=a(24006),S=a(94327),g=a(96166),b=a(12983),e=a.n(b),r=a(80574),t=a(94650),O=a(97185),P=a(71071),m=a(53506),D=a(42917),w=a(87719),L=a(80927),Z=a(54333),T=a(59549),C=a(99602),N=a(54040);function I(s,h){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const i=h.$implicit,n=h.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(null==i.user_detail||null==i.user_detail.party_name?null:i.user_detail.party_name.name),t.xp6(2),t.Oqu(i.Credit),t.xp6(2),t.Oqu(i.Debit),t.xp6(2),t.Oqu(i.closing)}}const F=function(s,h){return{itemsPerPage:s,currentPage:h}};function B(s,h){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,I,11,5,"tr",50),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.customerOutstandingList,i.key,i.reverse),t.WLB(8,F,i.itemsPerPage,i.p)))}}function E(s,h){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",51)(3,"p",52),t._uU(4,"Data not available"),t.qZA()()()())}const J=[{path:"",component:(()=>{class s{constructor(i,n,l,o,p,d,c,_,M){this.router=i,this.fb=n,this.toastr=l,this.transactionService=o,this.purchaseService=p,this.cs=d,this.datepipe=c,this.reportService=_,this.coreService=M,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.categoryControl=new u.NI(""),this.subCategoryControl=new u.NI(""),this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const i=new Date,o=(i.getMonth(),i.getFullYear(),new Date(i));o.setDate(i.getDate()-14);const p=this.formatDate(o),d=this.formatDate(i);this.customerOutstandingForm=new u.cw({start:new u.NI(p),end:new u.NI(d),customer_type:new u.NI}),this.startDate=this.customerOutstandingForm.value?.start,this.endDate=this.customerOutstandingForm.value?.end,this.customer_type=this.customerOutstandingForm.value?.customer_type,this.getCategoryWiseSale()}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}search(){if(""===this.titlee)this.getCategoryWiseSale();else{const i=this.titlee.toLocaleLowerCase();this.customerOutstandingList=this.customerOutstandingList.filter(n=>{const l=n?.user?.party_name.toLocaleLowerCase(),o=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!l.includes(i)&&!o.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,n,l){const o=(i-1)*n;return`Showing ${o+1}\u2013${Math.min(o+n-1,l-1)+1} of ${l} results`}getCategoryWiseSale(){this.reportService.getCustomerOutstandingSale(this.startDate,this.endDate,this.customer_type).subscribe(i=>{console.log(i),this.customerOutstandingList=i})}onCheckType(i){const n=this.customerOutstandingForm.value.customer_type;console.log(n),this.customer_type=n,this?.getCategoryWiseSale()}getSelectedCategoryWiseSaleDates(){console.log(this.customerOutstandingForm.value);const i=this.datepipe.transform(this.customerOutstandingForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.customerOutstandingForm.value.end,"yyyy-MM-dd");console.log(i),console.log(n),this.startDate=i,this.endDate=n,this?.getCategoryWiseSale()}generatePDFAgain(){const i=new g.default,o=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Customer Outstanding Sale Report",82,10),i.text(p,10,18),i.text(o,10,22),i.text("",10,25),e()(i,{head:[["#","User","Credit","Debit","Closing"]],body:this.customerOutstandingList.map((d,c)=>[c+1,d.user_detail?.party_name?.name,d.Credit,d.Debit,d.closing]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Category_outstanding_sale .pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable");if(n){const l=n.querySelector("thead tr");if(l){const p=[];l.querySelectorAll("th").forEach(d=>{const c=d.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&p.push(c)}),i.push(p)}n.querySelectorAll("tbody tr").forEach(p=>{const d=[];p.querySelectorAll("td").forEach(c=>{const _=c.textContent?.trim();_&&d.push(_)}),i.push(d)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=r.P6.aoa_to_sheet(i),l=r.P6.book_new();r.P6.book_append_sheet(l,n,"Sheet1");const o=r.cW(l,{bookType:"xlsx",type:"array"}),p=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,S.saveAs)(p,"customer_outstanding_sale.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const l=document.querySelector(".titl");if(!l)return void console.error("Title element with class 'titl' not found.");const o=l.outerHTML,d=i.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+d,M=document.body.innerHTML;document.body.innerHTML=_,window.print(),document.body.innerHTML=M}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(v.F0),t.Y36(u.qu),t.Y36(O._W),t.Y36(P.p),t.Y36(m.x),t.Y36(D.J),t.Y36(f.uU),t.Y36(w.r),t.Y36(L.p))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-outstanding-sale"]],decls:90,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-4","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],["formControlName","customer_type",3,"change"],["val",""],["value","Supplier"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,n){if(1&i){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Customer Outstanding Sale"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Customer Outstanding Sale"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return n.getSelectedCategoryWiseSaleDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedCategoryWiseSaleDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",21)(30,"strong"),t._uU(31,"Select Customer Type"),t.qZA(),t.TgZ(32,"select",22,23),t.NdJ("change",function(){t.CHM(l);const p=t.MAs(33);return t.KtG(n.onCheckType(p.value))}),t.TgZ(34,"option",24),t._uU(35,"Supplier"),t.qZA()()()()()()(),t.TgZ(36,"div",25)(37,"ul")(38,"li")(39,"a",26),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(40,"img",27),t.qZA()(),t.TgZ(41,"li")(42,"a",28),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(43,"img",29),t.qZA()(),t.TgZ(44,"li")(45,"a",30),t.NdJ("click",function(){return n.printTable()}),t._UZ(46,"img",31),t.qZA()()()()(),t.TgZ(47,"div",32)(48,"table",33)(49,"thead")(50,"tr")(51,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"#"),t._UZ(53,"i",35),t.qZA(),t.TgZ(54,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"User "),t._UZ(56,"i",35),t.qZA(),t.TgZ(57,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Credit"),t._UZ(59,"i",35),t.qZA(),t.TgZ(60,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"Debit"),t._UZ(62,"i",35),t.qZA(),t.TgZ(63,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(64,"Closing"),t._UZ(65,"i",35),t.qZA()()(),t.YNc(66,B,4,11,"tbody",36),t.YNc(67,E,5,0,"tbody",36),t.qZA(),t.TgZ(68,"div",10)(69,"div",37)(70,"div",38),t._uU(71," Show per page "),t.TgZ(72,"select",39),t.NdJ("ngModelChange",function(p){return n.itemsPerPage=p}),t.TgZ(73,"option",40),t._uU(74,"10"),t.qZA(),t.TgZ(75,"option",41),t._uU(76,"20"),t.qZA(),t.TgZ(77,"option",42),t._uU(78,"30"),t.qZA(),t.TgZ(79,"option",43),t._uU(80,"50"),t.qZA(),t.TgZ(81,"option",44),t._uU(82,"100"),t.qZA(),t.TgZ(83,"option",45),t._uU(84,"All"),t.qZA()()()(),t.TgZ(85,"div",46)(86,"div",47)(87,"pagination-controls",48),t.NdJ("pageChange",function(p){return n.p=p}),t.qZA(),t.TgZ(88,"div",49),t._uU(89),t.qZA()()()()()()()()()}if(2&i){const l=t.MAs(27);t.xp6(12),t.Q6J("formGroup",n.customerOutstandingForm),t.xp6(7),t.Q6J("formGroup",n.customerOutstandingForm)("rangePicker",l),t.xp6(6),t.Q6J("for",l),t.xp6(41),t.Q6J("ngIf",(null==n.customerOutstandingList?null:n.customerOutstandingList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.customerOutstandingList?null:n.customerOutstandingList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(17),t.lnq(" Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.p," entries ")}},dependencies:[f.sg,f.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.sg,u.u,Z.LS,T.KE,T.R9,C.nW,C.wx,C.zY,C.By,C._g,Z._s,N.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})()}];let R=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.Bz.forChild(J),v.Bz]}),s})();var Y=a(47957),W=a(44144),k=a(3056),z=a(87078),x=a(86323),U=a(92642),H=a(3238),q=a(95113),Q=a(64155),j=a(6205),A=a(8468);const K={User:U.n5m,UserCheck:U.uS3,FileText:U.acj,File:U.$BE};let G=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[f.uU],imports:[f.ez,R,A.I,u.u5,u.UX,Y.Bb,T.lN,W.c,k.ZQ,z.T,C.FA,T.lN,H.XK,q.LD,Q.vQ,A.I,j.X,x.p.pick(K),x.p]}),s})()}}]);