"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3471],{53506:(N,P,l)=>{l.d(P,{x:()=>A});var _=l(92340),T=l(94650),d=l(80529);let A=(()=>{class U{constructor(i){this.http=i,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let a=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(a+="?"+p.join("&")),this.http.get(a)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}updatePurchase(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let a=this.apiUrl+"/pv-api/material_inward/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(a+="?"+p.join("&")),this.http.get(a)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}updateMaterial(i,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let a=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(a+="?"+p.join("&")),this.http.get(a)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}updatePurchaseBill(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,r){console.log(r,"branch"),console.log(r.length,"branch");let a=this.apiUrl+"/pv-api/debit_note/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(a+="?"+p.join("&")),this.http.get(a)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}updateDebitNotes(i,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,r){console.log(r,"branch"),console.log(r.length,"branch");let a=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(a+="?"+p.join("&")),this.http.get(a)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}updatePurchaseReturn(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,r,a,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const Z=[];return i&&Z.push(`supplier=${i}`),r&&Z.push(`category=${r}`),a&&Z.push(`subcategory=${a}`),p&&Z.push(`search=${p}`),Z.length>0&&(t+="?"+Z.join("&")),this.http.get(t)}}return U.\u0275fac=function(i){return new(i||U)(T.LFG(d.eN))},U.\u0275prov=T.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"}),U})()},93471:(N,P,l)=>{l.r(P),l.d(P,{SupplierWiseModule:()=>rt});var _=l(36895),T=l(89299),d=l(24006),A=l(94327),U=l(96166),M=l(12983),i=l.n(M),r=l(68675),a=l(54004),p=l(80574),t=l(94650),Z=l(97185),D=l(71071),F=l(53506),I=l(42917),B=l(87719),W=l(54333),w=l(47957),O=l(3238),S=l(59549),$=l(44144),x=l(99602),J=l(54040);function E(o,h){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",60),t.NdJ("onSelectionChange",function(){t.CHM(e);const u=t.oxw().$implicit,s=t.oxw();return t.KtG(s.selectUser(null==u?null:u.id))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function R(o,h){if(1&o&&(t.ynx(0),t.YNc(1,E,2,2,"mat-option",59),t.BQk()),2&o){const e=h.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}function Y(o,h){if(1&o&&(t.TgZ(0,"tr")(1,"td",62),t._uU(2),t.qZA(),t.TgZ(3,"td",63),t._uU(4),t.qZA(),t.TgZ(5,"td",64),t._uU(6),t.qZA(),t.TgZ(7,"td",65),t._uU(8),t.qZA(),t.TgZ(9,"td",66),t._uU(10),t.qZA(),t.TgZ(11,"td",64),t._uU(12),t.qZA(),t.TgZ(13,"td",67),t._uU(14),t.qZA(),t.TgZ(15,"td",68),t._uU(16),t.qZA(),t.TgZ(17,"td",69),t._uU(18),t.qZA(),t.TgZ(19,"td",70),t._uU(20),t.qZA(),t.TgZ(21,"td",71),t._uU(22),t.qZA(),t.TgZ(23,"td",72),t._uU(24),t.qZA(),t.TgZ(25,"td",73),t._uU(26),t.qZA()()),2&o){const e=h.$implicit;t.xp6(2),t.Oqu(null==e?null:e.barcode.variant_name),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.Oqu(e.barcode.product.title),t.xp6(2),t.Oqu(e.barcode.product.category),t.xp6(2),t.Oqu(e.barcode.product.subcategory),t.xp6(2),t.Oqu(e.barcode.product.brand),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.landing_cost),t.xp6(2),t.hij(" ",e.total,"")}}function k(o,h){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",61)(13,"table")(14,"tbody"),t.YNc(15,Y,27,13,"tr",25),t.qZA()()()()),2&o){const e=h.$implicit,n=h.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(t.xi3(11,6,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const Q=function(o,h){return{itemsPerPage:o,currentPage:h}};function H(o,h){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,k,16,9,"tr",25),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.supplierWiseList,e.key,e.reverse),t.WLB(8,Q,e.itemsPerPage,e.p)))}}function j(o,h){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",74)(3,"p",75),t._uU(4,"Data not available"),t.qZA()()()())}const z=[{path:"",component:(()=>{class o{constructor(e,n,u,s,c,f,g,v){this.router=e,this.fb=n,this.toastr=u,this.transactionService=s,this.purchaseService=c,this.cs=f,this.datepipe=g,this.reportService=v,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.userControl=new d.NI,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(g=>{this.userDetails=g,console.log(g),this.userName=g?.username});const e=new Date,s=(e.getMonth(),e.getFullYear(),new Date(e));s.setDate(e.getDate()-14);const c=this.formatDate(s),f=this.formatDate(e);this.supplierWiseForm=new d.cw({start:new d.NI(c),end:new d.NI(f),user_id:new d.NI}),this.startDate=this.supplierWiseForm.value?.start,this.endDate=this.supplierWiseForm.value?.end,this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this.getSupplierWise(),this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,r.O)(""),(0,a.U)(g=>this._filter(g,!0)))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e,n){const u="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),s=this.users.filter(n?c=>c?.name?.toLowerCase().includes(u)||c.username.toLowerCase().includes(u):c=>!c?.name?.toLowerCase().includes(u)||c.username.toLowerCase().includes(u));return!n&&0===s.length&&s.push({name:"No data found"}),s}getUser(){this.reportService.getUser().subscribe(e=>{this.users=e?.data})}search(){if(""===this.titlee)this.getSupplierWise();else{const e=this.titlee.toLocaleLowerCase();this.supplierWiseList=this.supplierWiseList?.filter(n=>{const u=n?.user?.party_name.toLocaleLowerCase(),s=n?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!u.includes(e)&&!s.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,u){const s=(e-1)*n;return`Showing ${s+1}\u2013${Math.min(s+n-1,u-1)+1} of ${u} results`}getSupplierWise(){this.reportService.getSupplierWise(this.startDate,this.endDate,this.supplierWiseUserId).subscribe(e=>{console.log(e),this.supplierWiseList=e,this.supplierWise=e})}selectUser(e){this.dataId=e,this.supplierWiseForm.patchValue({user_id:this.dataId}),console.warn(this.supplierWiseForm.value),this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this?.getSupplierWise()}getSelectedSupplierWiseDates(){console.log(this.supplierWiseForm.value);const e=this.datepipe.transform(this.supplierWiseForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.supplierWiseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getSupplierWise()}generatePDFAgain(){const e=new U.default("landscape"),s=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Supplier Wise Purchase Report",82,10),e.text(c,10,18),e.text(s,10,22),e.text("",10,25);const g=[];let v=1;this.supplierWiseList.forEach(y=>{console.warn(y);const nt=y.user.party_name,at=y.total,lt=y.check_gst,ot=y.bill_date;let C=!0;y.data.forEach((m,ut)=>{console.log(m),console.log(m.barcode.product.category),g.push([C?v:"",C?nt:"",C?at:"",C?lt:"",this.formatDate(C?ot:""),m.barcode.variant_name,m.barcode.sku,m.barcode.product.title,m.barcode.product.category,m.barcode.product.subcategory,m.barcode.product.brand,m.qty,m.unit_cost,m.mrp,m.discount,m.tax,m.landing_cost,m.total]),C=!1}),v++}),i()(e,{head:[["#","User","Total","Check Gst","Bill Date","Variant Name","Sku","Title","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:g,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Supplier_Wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const u=n.querySelector("thead tr");if(u){const c=[];u.querySelectorAll("th").forEach(f=>{const g=f.textContent?.trim();g&&"Is Active"!==g&&"Action"!==g&&c.push(g)}),e.push(c)}n.querySelectorAll("tbody tr").forEach(c=>{const f=[];c.querySelectorAll("td").forEach(g=>{const v=g.textContent?.trim();v&&f.push(v)}),e.push(f)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=p.P6.aoa_to_sheet(e),u=p.P6.book_new();p.P6.book_append_sheet(u,n,"Sheet1");const s=p.cW(u,{bookType:"xlsx",type:"array"}),c=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(c,"saleSummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const u=document.querySelector(".titl");if(!u)return void console.error("Title element with class 'titl' not found.");const s=u.outerHTML,f=e.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+f,y=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=v,window.print(),document.body.innerHTML=y}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.supplierWiseList?.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.F0),t.Y36(d.qu),t.Y36(Z._W),t.Y36(D.p),t.Y36(F.x),t.Y36(I.J),t.Y36(_.uU),t.Y36(B.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-supplier-wise"]],decls:119,vars:15,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Name/Username","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","20px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","padding-left","10px","padding-right","8px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","13"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","10%","white-space","pre-wrap","padding-right","20px"],[2,"width","10%","white-space","pre-wrap","padding-right","37px"],[2,"width","6%","padding-right","11px"],[2,"width","7%","padding-right","35px"],[2,"width","6%","padding-right","20px"],[2,"width","10%","padding-right","25px"],[2,"width","10%","padding-right","20px"],[2,"width","10%","padding-right","23px","padding-left","0px"],[2,"width","10%"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const u=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Supplier Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Supplier Wise Purchase"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return n.getSelectedSupplierWiseDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedSupplierWiseDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"label"),t._uU(31,"User Name"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",null,24),t.YNc(35,R,2,1,"ng-container",25),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(41,"img",28),t.qZA()(),t.TgZ(42,"li")(43,"a",29),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(44,"img",30),t.qZA()(),t.TgZ(45,"li")(46,"a",31),t.NdJ("click",function(){return n.printTable()}),t._UZ(47,"img",32),t.qZA()()()()(),t.TgZ(48,"div",33)(49,"div",34)(50,"table",35)(51,"thead")(52,"tr")(53,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",37),t.qZA(),t.TgZ(56,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"User"),t._UZ(58,"i",37),t.qZA(),t.TgZ(59,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Total "),t._UZ(61,"i",37),t.qZA(),t.TgZ(62,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Check Gst "),t._UZ(64,"i",37),t.qZA(),t.TgZ(65,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Bill Date "),t._UZ(67,"i",37),t.qZA(),t.TgZ(68,"th",38),t._uU(69,"Variant Name"),t.qZA(),t.TgZ(70,"th",39),t._uU(71,"Sku "),t.qZA(),t.TgZ(72,"th",40),t._uU(73,"Title"),t.qZA(),t.TgZ(74,"th",41),t._uU(75,"Category"),t.qZA(),t.TgZ(76,"th",38),t._uU(77,"Sub category "),t.qZA(),t.TgZ(78,"th",42),t._uU(79,"Brand"),t.qZA(),t.TgZ(80,"th",42),t._uU(81,"Qty "),t.qZA(),t.TgZ(82,"th",43),t._uU(83,"Unit Cost "),t.qZA(),t.TgZ(84,"th",42),t._uU(85,"Mrp "),t.qZA(),t.TgZ(86,"th",42),t._uU(87,"Discount "),t.qZA(),t.TgZ(88,"th",42),t._uU(89,"Tax"),t.qZA(),t.TgZ(90,"th",38),t._uU(91,"Landing Cost "),t.qZA(),t.TgZ(92,"th",42),t._uU(93,"Total"),t.qZA()()(),t.YNc(94,H,4,11,"tbody",44),t.YNc(95,j,5,0,"tbody",44),t.qZA(),t.TgZ(96,"div",10)(97,"div",45)(98,"div",46),t._uU(99," Show per page "),t.TgZ(100,"select",47,48),t.NdJ("ngModelChange",function(c){return n.itemsPerPage=c})("change",function(){t.CHM(u);const c=t.MAs(101);return t.KtG(n.changePg(c.value))}),t.TgZ(102,"option",49),t._uU(103,"10"),t.qZA(),t.TgZ(104,"option",50),t._uU(105,"20"),t.qZA(),t.TgZ(106,"option",51),t._uU(107,"30"),t.qZA(),t.TgZ(108,"option",52),t._uU(109,"50"),t.qZA(),t.TgZ(110,"option",53),t._uU(111,"100"),t.qZA(),t.TgZ(112,"option",54),t._uU(113,"All"),t.qZA()()()(),t.TgZ(114,"div",55)(115,"div",56)(116,"pagination-controls",57),t.NdJ("pageChange",function(c){return n.p=c}),t.qZA(),t.TgZ(117,"div",58),t._uU(118),t.qZA()()()()()()()()()()}if(2&e){const u=t.MAs(27),s=t.MAs(34);t.xp6(12),t.Q6J("formGroup",n.supplierWiseForm),t.xp6(7),t.Q6J("formGroup",n.supplierWiseForm)("rangePicker",u),t.xp6(6),t.Q6J("for",u),t.xp6(7),t.Q6J("formControl",n.userControl)("matAutocomplete",s),t.xp6(3),t.Q6J("ngForOf",t.lcZ(36,13,n.filteredusers)),t.xp6(59),t.Q6J("ngIf",(null==n.supplierWiseList?null:n.supplierWiseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.supplierWiseList?null:n.supplierWiseList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.supplierWiseList?null:n.supplierWiseList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,W.LS,w.XC,w.ZL,O.ey,S.KE,S.R9,$.Nt,x.nW,x.wx,x.zY,x.By,x._g,_.Ov,_.uU,W._s,J.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:super}"]}),o})()}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(z),T.Bz]}),o})();var V=l(3056),K=l(87078),q=l(86323),b=l(92642),X=l(95113),tt=l(64155),et=l(6205),L=l(8468);const it={User:b.n5m,UserCheck:b.uS3,FileText:b.acj,File:b.$BE};let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,G,L.I,d.u5,d.UX,w.Bb,S.lN,$.c,V.ZQ,K.T,x.FA,S.lN,O.XK,X.LD,tt.vQ,L.I,et.X,q.p.pick(it),q.p]}),o})()}}]);