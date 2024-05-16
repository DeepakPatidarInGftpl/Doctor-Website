"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[925],{53506:($,C,a)=>{a.d(C,{x:()=>T});var _=a(92340),P=a(94650),c=a(80529);let T=(()=>{class f{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?financial_year="}${e}`)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?financial_year="}${e}`)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?financial_year="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?financial_year="}${e}`)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,o,U){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return e&&v.push(`supplier=${e}`),r&&v.push(`category=${r}`),o&&v.push(`subcategory=${o}`),U&&v.push(`search=${U}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return f.\u0275fac=function(e){return new(e||f)(P.LFG(c.eN))},f.\u0275prov=P.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},90925:($,C,a)=>{a.r(C),a.d(C,{SupplierOutstandingModule:()=>V});var _=a(36895),P=a(89299),c=a(24006),T=a(68675),f=a(54004),b=a(96166),e=a(12983),r=a.n(e),o=a(80574),U=a(94327),t=a(94650),v=a(97185),A=a(71071),D=a(53506),R=a(42917),L=a(87719),S=a(54333),O=a(59549),y=a(99602),w=a(54040);function N(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const i=g.$implicit,n=g.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(null==i.user_detail||null==i.user_detail.party_name?null:i.user_detail.party_name.name),t.xp6(2),t.Oqu(i.Debit),t.xp6(2),t.Oqu(i.Credit),t.xp6(2),t.Oqu(i.closing)}}const F=function(s,g){return{itemsPerPage:s,currentPage:g}};function I(s,g){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,N,11,5,"tr",47),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.purchaseRegisterList,i.key,i.reverse),t.WLB(8,F,i.itemsPerPage,i.p)))}}function B(s,g){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",48)(3,"p",49),t._uU(4,"Data not available"),t.qZA()()()())}const E=[{path:"",component:(()=>{class s{constructor(i,n,p,l,u,d,h,m){this.router=i,this.fb=n,this.toastr=p,this.transactionService=l,this.purchaseService=u,this.cs=d,this.datepipe=h,this.reportService=m,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new c.NI(""),this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.userName=h?.username});const i=new Date,l=(i.getMonth(),i.getFullYear(),new Date(i));l.setDate(i.getDate()-14);const u=this.formatDate(l),d=this.formatDate(i);this.purchaseRegisterForm=new c.cw({start:new c.NI(u),end:new c.NI(d)}),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,T.O)(""),(0,f.U)(h=>{const m="string"==typeof h?h:h?.detail?.name;return m?this._filter(m):this.suppliers.slice()}))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i){const n=i?i.toLowerCase():"";return console.log(n),this.suppliers.filter(p=>p?.detail?.name.toLowerCase().includes(n)||p?.detail?.company_name?.toLowerCase().includes(n)||p?.account?.account_id?.toLowerCase().includes(n))}displayFn(i){return i&&i?.detail?.company_name?i?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const i=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const p=n?.user?.party_name.toLocaleLowerCase(),l=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!p.includes(i)&&!l.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,n,p){const l=(i-1)*n;return`Showing ${l+1}\u2013${Math.min(l+n-1,p-1)+1} of ${p} results`}getPurchaseRegister(){this.reportService.getSupplierOutstanding(this.startDate,this.endDate).subscribe(i=>{console.log(i),this.purchaseRegister=i,this.purchaseRegisterList=i})}oncheckAccount(i){console.log(i),this.dataId=i,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const i=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(i),console.log(n),this.startDate=i,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){const i=new b.default("landscape"),l=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text(" Supplier Outstanding",82,10),i.text(u,10,18),i.text(l,10,22),i.text("",10,25),r()(i,{head:[["#","User Detail","Debit","Credit","Closing"]],body:this.purchaseRegisterList.map((d,h)=>[h+1,d.user_detail?.party_name?.name,d.Debit,d.Credit,d.closing]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Supplier_Outstanding.pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable");if(n){const p=n.querySelector("thead tr");if(p){const u=[];p.querySelectorAll("th").forEach(d=>{const h=d.textContent?.trim();h&&"Is Active"!==h&&"Action"!==h&&u.push(h)}),i.push(u)}n.querySelectorAll("tbody tr").forEach(u=>{const d=[];u.querySelectorAll("td").forEach(h=>{const m=h.textContent?.trim();m&&d.push(m)}),i.push(d)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=o.P6.aoa_to_sheet(i),p=o.P6.book_new();o.P6.book_append_sheet(p,n,"Sheet1");const l=o.cW(p,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,U.saveAs)(u,"purchaseRegister.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const p=document.querySelector(".titl");if(!p)return void console.error("Title element with class 'titl' not found.");const l=p.outerHTML,d=i.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+d,G=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=m,window.print(),document.body.innerHTML=G}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.purchaseRegisterList?.length)}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(P.F0),t.Y36(c.qu),t.Y36(v._W),t.Y36(A.p),t.Y36(D.x),t.Y36(R.J),t.Y36(_.uU),t.Y36(L.r))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-supplier-outstanding"]],decls:83,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,n){if(1&i){const p=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Supplier OutStanding"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Supplier OutStanding"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()()()()(),t.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return n.printTable()}),t._UZ(38,"img",27),t.qZA()()()()(),t.TgZ(39,"div",28)(40,"table",29)(41,"thead")(42,"tr")(43,"th",30),t.NdJ("click",function(){return n.sort("id")}),t._uU(44,"#"),t._UZ(45,"i",31),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return n.sort("id")}),t._uU(47,"User Detail"),t._UZ(48,"i",31),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return n.sort("id")}),t._uU(50,"Debit "),t._UZ(51,"i",31),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return n.sort("id")}),t._uU(53,"credit"),t._UZ(54,"i",31),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return n.sort("id")}),t._uU(56," closing "),t._UZ(57,"i",31),t.qZA()()(),t.YNc(58,I,4,11,"tbody",32),t.YNc(59,B,5,0,"tbody",32),t.qZA(),t.TgZ(60,"div",10)(61,"div",33)(62,"div",34),t._uU(63," Show per page "),t.TgZ(64,"select",35,36),t.NdJ("ngModelChange",function(u){return n.itemsPerPage=u})("change",function(){t.CHM(p);const u=t.MAs(65);return t.KtG(n.changePg(u.value))}),t.TgZ(66,"option",37),t._uU(67,"10"),t.qZA(),t.TgZ(68,"option",38),t._uU(69,"20"),t.qZA(),t.TgZ(70,"option",39),t._uU(71,"30"),t.qZA(),t.TgZ(72,"option",40),t._uU(73,"50"),t.qZA(),t.TgZ(74,"option",41),t._uU(75,"100"),t.qZA(),t.TgZ(76,"option",42),t._uU(77,"All"),t.qZA()()()(),t.TgZ(78,"div",43)(79,"div",44)(80,"pagination-controls",45),t.NdJ("pageChange",function(u){return n.p=u}),t.qZA(),t.TgZ(81,"div",46),t._uU(82),t.qZA()()()()()()()()()}if(2&i){const p=t.MAs(27);t.xp6(12),t.Q6J("formGroup",n.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",p),t.xp6(6),t.Q6J("for",p),t.xp6(33),t.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,S.LS,O.KE,O.R9,y.nW,y.wx,y.zY,y.By,y._g,S._s,w.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}"]}),s})()}];let J=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[P.Bz.forChild(E),P.Bz]}),s})();var Y=a(47957),z=a(44144),H=a(3056),k=a(87078),x=a(86323),M=a(92642),q=a(3238),Q=a(95113),j=a(64155),W=a(6205),Z=a(8468);const K={User:M.n5m,UserCheck:M.uS3,FileText:M.acj,File:M.$BE};let V=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,J,Z.I,c.u5,c.UX,Y.Bb,O.lN,z.c,H.ZQ,k.T,y.FA,O.lN,q.XK,Q.LD,j.vQ,Z.I,W.X,x.p.pick(K),x.p]}),s})()}}]);