"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8852],{53506:(w,C,n)=>{n.d(C,{x:()=>b});var x=n(92340),P=n(94650),c=n(80529);let b=(()=>{class T{constructor(e){this.http=e,this.apiUrl=`${x.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,a)}updatePurchase(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,a)}updateMaterial(e,a){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,a)}updatePurchaseBill(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,a)}updateDebitNotes(e,a){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,a)}updatePurchaseReturn(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,a,l,y){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return e&&v.push(`supplier=${e}`),a&&v.push(`category=${a}`),l&&v.push(`subcategory=${l}`),y&&v.push(`search=${y}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return T.\u0275fac=function(e){return new(e||T)(P.LFG(c.eN))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},98852:(w,C,n)=>{n.r(C),n.d(C,{TaxWisePurchaseReturnModule:()=>et});var x=n(36895),P=n(89299),c=n(24006),b=n(68675),T=n(54004),M=n(96166),e=n(12983),a=n.n(e),l=n(80574),y=n(94327),t=n(94650),v=n(97185),D=n(71071),N=n(53506),q=n(42917),L=n(87719),S=n(54333),A=n(59549),Z=n(99602),I=n(54040);function W(o,h){if(1&o&&(t.TgZ(0,"tr")(1,"td",51),t._uU(2),t.qZA(),t.TgZ(3,"td",51),t._uU(4),t.qZA(),t.TgZ(5,"td",51),t._uU(6),t.qZA(),t.TgZ(7,"td",51),t._uU(8),t.qZA(),t.TgZ(9,"td",51),t._uU(10),t.qZA(),t.TgZ(11,"td",51),t._uU(12),t.qZA(),t.TgZ(13,"td",51),t._uU(14),t.qZA(),t.TgZ(15,"td",51),t._uU(16),t.qZA(),t.TgZ(17,"td",51),t._uU(18),t.qZA(),t.TgZ(19,"td",51),t._uU(20),t.qZA(),t.TgZ(21,"td",51),t._uU(22),t.qZA(),t.TgZ(23,"td",51),t._uU(24),t.qZA()()),2&o){const r=h.$implicit;t.xp6(2),t.Oqu(r.date),t.xp6(2),t.Oqu(r.voucher_type),t.xp6(2),t.Oqu(r.voucher_no),t.xp6(2),t.Oqu(r.hsn_code),t.xp6(2),t.Oqu(r.taxable),t.xp6(2),t.Oqu(r.CGST_rate),t.xp6(2),t.Oqu(r.CGST_amount),t.xp6(2),t.Oqu(r.SGST_rate),t.xp6(2),t.Oqu(r.SGST_amount),t.xp6(2),t.Oqu(r.IGST_rate),t.xp6(2),t.Oqu(r.IGST_amount),t.xp6(2),t.hij(" ",r.Tax_amount,"")}}function F(o,h){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",50)(12,"table")(13,"tbody"),t.YNc(14,W,25,12,"tr",49),t.qZA()()()()),2&o){const r=h.$implicit,i=h.index;t.xp6(2),t.Oqu(i+1+"."),t.xp6(2),t.Oqu(r.date),t.xp6(2),t.Oqu(r.name),t.xp6(2),t.Oqu(r.voucher_no),t.xp6(2),t.Oqu(r.total_amount),t.xp6(4),t.Q6J("ngForOf",r.data)}}const B=function(o,h){return{itemsPerPage:o,currentPage:h}};function G(o,h){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,F,15,6,"tr",49),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.purchaseRegisterList,r.key,r.reverse),t.WLB(8,B,r.itemsPerPage,r.p)))}}function E(o,h){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",52)(3,"p",53),t._uU(4,"Data not available"),t.qZA()()()())}const J=[{path:"",component:(()=>{class o{constructor(r,i,s,p,d,g,u,f){this.router=r,this.fb=i,this.toastr=s,this.transactionService=p,this.purchaseService=d,this.cs=g,this.datepipe=u,this.reportService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new c.NI(""),this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const r=new Date,p=(r.getMonth(),r.getFullYear(),new Date(r));p.setDate(r.getDate()-14);const d=this.formatDate(p),g=this.formatDate(r);this.purchaseRegisterForm=new c.cw({start:new c.NI(d),end:new c.NI(g)}),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,b.O)(""),(0,T.U)(u=>{const f="string"==typeof u?u:u?.detail?.name;return f?this._filter(f):this.suppliers.slice()}))}formatDate(r){return this.datepipe.transform(r,"yyyy-MM-dd")||""}_filter(r){const i=r?r.toLowerCase():"";return console.log(i),this.suppliers.filter(s=>s?.detail?.name.toLowerCase().includes(i)||s?.detail?.company_name?.toLowerCase().includes(i)||s?.account?.account_id?.toLowerCase().includes(i))}displayFn(r){return r&&r?.detail?.company_name?r?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const r=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(i=>{const s=i?.user?.party_name.toLocaleLowerCase(),p=i?.payment_voucher_no.toLocaleLowerCase()||"";return!(!s.includes(r)&&!p.includes(r))})}}sort(r){this.key=r,this.reverse=!this.reverse}selectAll(r){this.countryList.forEach(r?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(r,i,s){const p=(r-1)*i;return`Showing ${p+1}\u2013${Math.min(p+i-1,s-1)+1} of ${s} results`}getPurchaseRegister(){this.reportService.getTaxWisePurchaseReturn(this.startDate,this.endDate).subscribe(r=>{console.log(r),this.purchaseRegister=r,this.purchaseRegisterList=r})}oncheckAccount(r){console.log(r),this.dataId=r,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const r=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),i=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(r),console.log(i),this.startDate=r,this.endDate=i,this?.getPurchaseRegister()}generatePDFAgain(){const r=new M.default("landscape"),p=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;r.setFontSize(12),r.setTextColor(33,43,54),r.text("PV",86,5),r.text("Tax Wise Purchase Return Report",82,10),r.text(d,10,18),r.text(p,10,22),r.text("",10,25);const u=[];let f=1;this.purchaseRegisterList.forEach(_=>{console.warn(_);const rt=_.date,at=_.name,it=_.voucher_no,nt=_.total_amount;let U=!0;_.data.forEach((m,lt)=>{console.log(m),u.push([U?f:"",U?rt:"",U?at:"",U?it:"",U?nt:"",m.date,m.voucher_type,m.voucher_no,m.hsn_code,m.taxable,m.CGST_rate,m.CGST_amount,m.SGST_rate,m.SGST_amount,m.IGST_rate,m.IGST_amount,m.Tax_amount]),U=!1}),f++}),a()(r,{head:[["#","Date","Name","Voucher No.","Total Amount","Date","Voucher Type","Voucher No.","Hsn Code","Taxable","CGST Rate","CGST Amount","SGST Rate","SGST Amount","IGST Rate","IGST Amount","Tax Amount"]],body:u,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),r.save("Tax_wise_Purchase_Return  .pdf")}getVisibleDataFromTable(){const r=[],i=document.getElementById("mytable");if(i){const s=i.querySelector("thead tr");if(s){const d=[];s.querySelectorAll("th").forEach(g=>{const u=g.textContent?.trim();u&&"Is Active"!==u&&"Action"!==u&&d.push(u)}),r.push(d)}i.querySelectorAll("tbody tr").forEach(d=>{const g=[];d.querySelectorAll("td").forEach(u=>{const f=u.textContent?.trim();f&&g.push(f)}),r.push(g)})}return r}exportToExcel(){const r=this.getVisibleDataFromTable(),i=l.P6.aoa_to_sheet(r),s=l.P6.book_new();l.P6.book_append_sheet(s,i,"Sheet1");const p=l.cW(s,{bookType:"xlsx",type:"array"}),d=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,y.saveAs)(d,"taxwisepurchasereturn.xlsx")}printTable(){const r=document.getElementById("mytable");if(!r)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const p=s.outerHTML,g=r.cloneNode(!0).outerHTML,f="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+g,_=document.body.innerHTML;document.body.innerHTML=f,window.print(),document.body.innerHTML=_}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(P.F0),t.Y36(c.qu),t.Y36(v._W),t.Y36(D.p),t.Y36(N.x),t.Y36(q.J),t.Y36(x.uU),t.Y36(L.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tax-wise-purchase-return"]],decls:106,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","padding-left","31px","padding-right","45px"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-right","60px"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","12"],[2,"width","10%"],["colspan","10"],[1,"text-center"]],template:function(r,i){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Tax Wise Purchase Return"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Tax Wise Purchase Return"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return i.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return i.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()()()()(),t.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return i.printTable()}),t._UZ(38,"img",27),t.qZA()()()()(),t.TgZ(39,"div",28)(40,"table",29)(41,"thead")(42,"tr")(43,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(44,"#"),t._UZ(45,"i",31),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(47,"Date "),t._UZ(48,"i",31),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(50,"Name"),t._UZ(51,"i",31),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(53,"Voucher No."),t._UZ(54,"i",31),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(56,"Total Amount"),t._UZ(57,"i",31),t.qZA(),t.TgZ(58,"th",32),t._uU(59,"Date "),t.qZA(),t.TgZ(60,"th",33),t._uU(61,"Voucher Type"),t.qZA(),t.TgZ(62,"th",34),t._uU(63,"Voucher No."),t.qZA(),t.TgZ(64,"th",34),t._uU(65,"Hsn Code"),t.qZA(),t.TgZ(66,"th",34),t._uU(67,"Taxable "),t.qZA(),t.TgZ(68,"th",34),t._uU(69,"CGST Rate "),t.qZA(),t.TgZ(70,"th",34),t._uU(71,"CGST Amount "),t.qZA(),t.TgZ(72,"th",34),t._uU(73,"SGST Rate "),t.qZA(),t.TgZ(74,"th",34),t._uU(75,"SGST Amount"),t.qZA(),t.TgZ(76,"th",34),t._uU(77,"IGST Rate "),t.qZA(),t.TgZ(78,"th",34),t._uU(79,"IGST Amount"),t.qZA(),t.TgZ(80,"th",34),t._uU(81,"Tax Amount"),t.qZA()()(),t.YNc(82,G,4,11,"tbody",35),t.YNc(83,E,5,0,"tbody",35),t.qZA(),t.TgZ(84,"div",10)(85,"div",36)(86,"div",37),t._uU(87," Show per page "),t.TgZ(88,"select",38),t.NdJ("ngModelChange",function(p){return i.itemsPerPage=p}),t.TgZ(89,"option",39),t._uU(90,"10"),t.qZA(),t.TgZ(91,"option",40),t._uU(92,"20"),t.qZA(),t.TgZ(93,"option",41),t._uU(94,"30"),t.qZA(),t.TgZ(95,"option",42),t._uU(96,"50"),t.qZA(),t.TgZ(97,"option",43),t._uU(98,"100"),t.qZA(),t.TgZ(99,"option",44),t._uU(100,"All"),t.qZA()()()(),t.TgZ(101,"div",45)(102,"div",46)(103,"pagination-controls",47),t.NdJ("pageChange",function(p){return i.p=p}),t.qZA(),t.TgZ(104,"div",48),t._uU(105),t.qZA()()()()()()()()()),2&r){const s=t.MAs(27);t.xp6(12),t.Q6J("formGroup",i.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",i.purchaseRegisterForm)("rangePicker",s),t.xp6(6),t.Q6J("for",s),t.xp6(57),t.Q6J("ngIf",(null==i.purchaseRegisterList?null:i.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.purchaseRegisterList?null:i.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq(" Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.p," entries ")}},dependencies:[x.sg,x.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,S.LS,A.KE,A.R9,Z.nW,Z.wx,Z.zY,Z.By,Z._g,S._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[P.Bz.forChild(J),P.Bz]}),o})();var H=n(47957),z=n(44144),V=n(3056),k=n(87078),O=n(86323),R=n(92642),Q=n(3238),j=n(95113),K=n(64155),X=n(6205),$=n(8468);const tt={User:R.n5m,UserCheck:R.uS3,FileText:R.acj,File:R.$BE};let et=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[x.uU],imports:[x.ez,Y,$.I,c.u5,c.UX,H.Bb,A.lN,z.c,V.ZQ,k.T,Z.FA,A.lN,Q.XK,j.LD,K.vQ,$.I,X.X,O.p.pick(tt),O.p]}),o})()}}]);