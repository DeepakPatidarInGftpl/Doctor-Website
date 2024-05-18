"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1590],{53506:(q,x,o)=>{o.d(x,{x:()=>B});var P=o(92340),y=o(94650),h=o(80529);let B=(()=>{class b{constructor(r){this.http=r,this.apiUrl=`${P.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let n=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(n+="?"+p.join("&")),this.http.get(n)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let n=this.apiUrl+"/pv-api/material_inward/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(n+="?"+p.join("&")),this.http.get(n)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let n=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(n+="?"+p.join("&")),this.http.get(n)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let n=this.apiUrl+"/pv-api/debit_note/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(n+="?"+p.join("&")),this.http.get(n)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let n=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(n+="?"+p.join("&")),this.http.get(n)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,n,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const Z=[];return r&&Z.push(`supplier=${r}`),i&&Z.push(`category=${i}`),n&&Z.push(`subcategory=${n}`),p&&Z.push(`search=${p}`),Z.length>0&&(t+="?"+Z.join("&")),this.http.get(t)}}return b.\u0275fac=function(r){return new(r||b)(y.LFG(h.eN))},b.\u0275prov=y.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},41590:(q,x,o)=>{o.r(x),o.d(x,{BrandWisePurchaseModule:()=>it});var P=o(36895),y=o(89299),h=o(24006),B=o(68675),b=o(54004),M=o(96166),r=o(12983),i=o.n(r),n=o(80574),p=o(94327),t=o(94650),Z=o(97185),L=o(71071),D=o(53506),N=o(42917),F=o(87719),J=o(80927),W=o(54333),w=o(47957),O=o(3238),C=o(59549),T=o(99602),I=o(54040);function E(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",58),t.NdJ("blur",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckBrand(null==l?null:l.id))}),t._uU(1),t.qZA()}if(2&s){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function R(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"td",61),t._uU(2),t.qZA(),t.TgZ(3,"td",62),t._uU(4),t.qZA(),t.TgZ(5,"td",63),t._uU(6),t.qZA(),t.TgZ(7,"td",64),t._uU(8),t.qZA(),t.TgZ(9,"td",61),t._uU(10),t.qZA(),t.TgZ(11,"td",61),t._uU(12),t.qZA(),t.TgZ(13,"td",63),t._uU(14),t.qZA(),t.TgZ(15,"td",65),t._uU(16),t.qZA(),t.TgZ(17,"td",65),t._uU(18),t.qZA(),t.TgZ(19,"td",66),t._uU(20),t.qZA(),t.TgZ(21,"td",66),t._uU(22),t.qZA(),t.TgZ(23,"td",67),t._uU(24),t.qZA(),t.TgZ(25,"td",68),t._uU(26),t.qZA(),t.TgZ(27,"td",67),t._uU(28),t.qZA()()),2&s){const e=g.$implicit;t.xp6(2),t.Oqu(null==e?null:e.barcode.variant_name),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.Oqu(e.barcode.product.title),t.xp6(2),t.Oqu(e.barcode.product.hsncode),t.xp6(2),t.Oqu(e.barcode.product.category),t.xp6(2),t.Oqu(e.barcode.product.subcategory),t.xp6(2),t.Oqu(e.barcode.product.brand),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.landing_cost),t.xp6(2),t.hij(" ",e.total,"")}}function Y(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",60)(14,"table")(15,"tbody"),t.YNc(16,R,29,14,"tr",59),t.qZA()()()()),2&s){const e=g.$implicit,a=g.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(t.xi3(9,6,e.total,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,9,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const k=function(s,g){return{itemsPerPage:s,currentPage:g}};function H(s,g){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,Y,17,12,"tr",59),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.brandWisePurchaseList,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function Q(s,g){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),t._uU(4,"Data not available"),t.qZA()()()())}const j=[{path:"",component:(()=>{class s{constructor(e,a,c,l,d,f,u,v,_){this.router=e,this.fb=a,this.toastr=c,this.transactionService=l,this.purchaseService=d,this.cs=f,this.datepipe=u,this.reportService=v,this.coreService=_,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new h.NI(""),this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[]}ngOnInit(){this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const e=new Date,l=(e.getMonth(),e.getFullYear(),new Date(e));l.setDate(e.getDate()-14);const d=this.formatDate(l),f=this.formatDate(e);this.brandWisePurchaseForm=new h.cw({start:new h.NI(d),end:new h.NI(f),brand:new h.NI}),this.startDate=this.brandWisePurchaseForm.value?.start,this.endDate=this.brandWisePurchaseForm.value?.end,this.brand=this.brandWisePurchaseForm.value?.brand,this.getBrandWisePurchase(),this.getBrand(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,B.O)(""),(0,b.U)(u=>{const v="string"==typeof u?u:u?.title;return v?this._filter2(v):this.brandList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const a=e?e.toLowerCase():"";return console.log(a),this.brandList.filter(c=>c?.title&&c.title.toLowerCase().includes(a))}displayFn2(e){return e&&e?.title?e?.title:""}displayFn3(e){return e&&e?.title?e?.title:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getBrandWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.brandWisePurchaseList=this.brandWisePurchaseList.filter(a=>{const c=a?.user?.party_name.toLocaleLowerCase(),l=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!c.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,a,c){const l=(e-1)*a;return`Showing ${l+1}\u2013${Math.min(l+a-1,c-1)+1} of ${c} results`}getBrandWisePurchase(){this.reportService.getBrandWisePurchase(this.startDate,this.endDate,this.brand).subscribe(e=>{console.log(e),this.brandWisePurchaseList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.brandWisePurchaseForm.patchValue({brand:e}),console.warn(this.brandWisePurchaseForm.value),this.brand=this.brandWisePurchaseForm.value?.brand,this?.getBrandWisePurchase()}getSelectedBrandWisePurchaseDates(){console.log(this.brandWisePurchaseForm.value);const e=this.datepipe.transform(this.brandWisePurchaseForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.brandWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(a),this.startDate=e,this.endDate=a,this?.getBrandWisePurchase()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}generatePDFAgain(){const e=new M.default("landscape"),l=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Brand Wise Purchase Report",82,10),e.text(d,10,18),e.text(l,10,22),e.text("",10,25);const u=[];let v=1;this.brandWisePurchaseList.forEach(_=>{console.warn(_);const at=_.user.party_name,nt=_.check_gst,ot=_.total,st=_.bill_date;let U=!0;_.data.forEach((m,ct)=>{console.log(m),u.push([U?v:"",U?at:"",U?nt:"",U?ot:"",this.formatDate(U?st:""),m.barcode.variant_name,m.barcode.sku,m.barcode.product.title,m.barcode.product.hsncode,m.barcode.product.category,m.barcode.product.subcategory,m.barcode.product.brand,m.qty,m.unit_cost,m.mrp,m.discount,m.tax,m.landing_cost,m.total]),U=!1}),v++}),i()(e,{head:[["#","User","Check Gst","Total","Bill Date","Variant Name","Sku","Title","HsnCode","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:u,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Brand_wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],a=document.getElementById("mytable");if(a){const c=a.querySelector("thead tr");if(c){const d=[];c.querySelectorAll("th").forEach(f=>{const u=f.textContent?.trim();u&&"Is Active"!==u&&"Action"!==u&&d.push(u)}),e.push(d)}a.querySelectorAll("tbody tr").forEach(d=>{const f=[];d.querySelectorAll("td").forEach(u=>{const v=u.textContent?.trim();v&&f.push(v)}),e.push(f)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),a=n.P6.aoa_to_sheet(e),c=n.P6.book_new();n.P6.book_append_sheet(c,a,"Sheet1");const l=n.cW(c,{bookType:"xlsx",type:"array"}),d=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(d,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const c=document.querySelector(".titl");if(!c)return void console.error("Title element with class 'titl' not found.");const l=c.outerHTML,f=e.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+f,_=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=v,window.print(),document.body.innerHTML=_}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.brandWisePurchaseList?.length)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(y.F0),t.Y36(h.qu),t.Y36(Z._W),t.Y36(L.p),t.Y36(D.x),t.Y36(N.J),t.Y36(P.uU),t.Y36(F.r),t.Y36(J.p))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-brand-wise-purchase"]],decls:120,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-left","10px","padding-right","20px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value","blur"],[4,"ngFor","ngForOf"],["colspan","14"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","8%"],[2,"width","6%"],[2,"width","7%"],[2,"width","10%"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(e,a){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Brand Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Brand Wise Purchase"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return a.getSelectedBrandWisePurchaseDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedBrandWisePurchaseDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",21)(30,"strong"),t._uU(31,"Select Brand"),t.qZA(),t._UZ(32,"input",22),t.TgZ(33,"mat-autocomplete",23,24),t.YNc(35,E,2,2,"mat-option",25),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(41,"img",28),t.qZA()(),t.TgZ(42,"li")(43,"a",29),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(44,"img",30),t.qZA()(),t.TgZ(45,"li")(46,"a",31),t.NdJ("click",function(){return a.printTable()}),t._UZ(47,"img",32),t.qZA()()()()(),t.TgZ(48,"div",33)(49,"table",34)(50,"thead")(51,"tr")(52,"th",35),t.NdJ("click",function(){return a.sort("id")}),t._uU(53,"#"),t._UZ(54,"i",36),t.qZA(),t.TgZ(55,"th",35),t.NdJ("click",function(){return a.sort("id")}),t._uU(56,"User "),t._UZ(57,"i",36),t.qZA(),t.TgZ(58,"th",35),t.NdJ("click",function(){return a.sort("id")}),t._uU(59,"Check Gst "),t._UZ(60,"i",36),t.qZA(),t.TgZ(61,"th",35),t.NdJ("click",function(){return a.sort("id")}),t._uU(62,"Total "),t._UZ(63,"i",36),t.qZA(),t.TgZ(64,"th",35),t.NdJ("click",function(){return a.sort("id")}),t._uU(65,"Bill Date "),t._UZ(66,"i",36),t.qZA(),t.TgZ(67,"th",37),t._uU(68,"Variant Name "),t.qZA(),t.TgZ(69,"th",38),t._uU(70,"Sku "),t.qZA(),t.TgZ(71,"th",39),t._uU(72,"Title"),t.qZA(),t.TgZ(73,"th",37),t._uU(74,"Hsn Code"),t.qZA(),t.TgZ(75,"th",40),t._uU(76,"Category"),t.qZA(),t.TgZ(77,"th",37),t._uU(78,"Sub category "),t.qZA(),t.TgZ(79,"th",41),t._uU(80,"Brand"),t.qZA(),t.TgZ(81,"th",41),t._uU(82,"Qty "),t.qZA(),t.TgZ(83,"th",42),t._uU(84,"Unit Cost "),t.qZA(),t.TgZ(85,"th",41),t._uU(86,"Mrp "),t.qZA(),t.TgZ(87,"th",41),t._uU(88,"Discount "),t.qZA(),t.TgZ(89,"th",41),t._uU(90,"Tax"),t.qZA(),t.TgZ(91,"th",37),t._uU(92,"Landing Cost "),t.qZA(),t.TgZ(93,"th",41),t._uU(94,"Total"),t.qZA()()(),t.YNc(95,H,4,11,"tbody",43),t.YNc(96,Q,5,0,"tbody",43),t.qZA(),t.TgZ(97,"div",10)(98,"div",44)(99,"div",45),t._uU(100," Show per page "),t.TgZ(101,"select",46,47),t.NdJ("ngModelChange",function(d){return a.itemsPerPage=d})("change",function(){t.CHM(c);const d=t.MAs(102);return t.KtG(a.changePg(d.value))}),t.TgZ(103,"option",48),t._uU(104,"10"),t.qZA(),t.TgZ(105,"option",49),t._uU(106,"20"),t.qZA(),t.TgZ(107,"option",50),t._uU(108,"30"),t.qZA(),t.TgZ(109,"option",51),t._uU(110,"50"),t.qZA(),t.TgZ(111,"option",52),t._uU(112,"100"),t.qZA(),t.TgZ(113,"option",53),t._uU(114,"All"),t.qZA()()()(),t.TgZ(115,"div",54)(116,"div",55)(117,"pagination-controls",56),t.NdJ("pageChange",function(d){return a.p=d}),t.qZA(),t.TgZ(118,"div",57),t._uU(119),t.qZA()()()()()()()()()}if(2&e){const c=t.MAs(27),l=t.MAs(34);t.xp6(12),t.Q6J("formGroup",a.brandWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",a.brandWisePurchaseForm)("rangePicker",c),t.xp6(6),t.Q6J("for",c),t.xp6(7),t.Q6J("formControl",a.brandControl)("matAutocomplete",l),t.xp6(1),t.Q6J("displayWith",a.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(36,14,a.filteredBrand)),t.xp6(60),t.Q6J("ngIf",(null==a.brandWisePurchaseList?null:a.brandWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.brandWisePurchaseList?null:a.brandWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq(" Showing ",a.itemsPerPage," to ",null==a.brandWisePurchaseList?null:a.brandWisePurchaseList.length," of ",a.p," entries ")}},dependencies:[P.sg,P.O5,h._Y,h.YN,h.Kr,h.Fj,h.EJ,h.JJ,h.JL,h.On,h.oH,h.sg,h.u,W.LS,w.XC,w.ZL,O.ey,C.KE,C.R9,T.nW,T.wx,T.zY,T.By,T._g,P.Ov,P.JJ,P.uU,W._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})()}];let z=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[y.Bz.forChild(j),y.Bz]}),s})();var G=o(44144),V=o(3056),K=o(87078),$=o(86323),A=o(92642),X=o(95113),tt=o(64155),et=o(6205),S=o(8468);const rt={User:A.n5m,UserCheck:A.uS3,FileText:A.acj,File:A.$BE};let it=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[P.uU],imports:[P.ez,z,S.I,h.u5,h.UX,w.Bb,C.lN,G.c,V.ZQ,K.T,T.FA,C.lN,O.XK,X.LD,tt.vQ,S.I,et.X,$.p.pick(rt),$.p]}),s})()}}]);