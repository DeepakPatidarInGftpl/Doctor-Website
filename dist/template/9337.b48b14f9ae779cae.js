"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9337],{53506:(L,C,o)=>{o.d(C,{x:()=>w});var P=o(92340),b=o(94650),d=o(80529);let w=(()=>{class x{constructor(i){this.http=i,this.apiUrl=`${P.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let t=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(i&&c.push(`financial_year=${i}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}updatePurchase(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let t=this.apiUrl+"/pv-api/material_inward/";const c=[];if(i&&c.push(`financial_year=${i}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}updateMaterial(i,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let t=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(i&&c.push(`financial_year=${i}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}updatePurchaseBill(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,n){console.log(n,"branch"),console.log(n.length,"branch");let t=this.apiUrl+"/pv-api/debit_note/";const c=[];if(i&&c.push(`financial_year=${i}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}updateDebitNotes(i,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,n){console.log(n,"branch"),console.log(n.length,"branch");let t=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(i&&c.push(`financial_year=${i}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}updatePurchaseReturn(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,n,t,c){let u=this.apiUrl+"/pv-api/purchase_product_filter/";const Z=[];return i&&Z.push(`supplier=${i}`),n&&Z.push(`category=${n}`),t&&Z.push(`subcategory=${t}`),c&&Z.push(`search=${c}`),Z.length>0&&(u+="?"+Z.join("&")),this.http.get(u)}}return x.\u0275fac=function(i){return new(i||x)(b.LFG(d.eN))},x.\u0275prov=b.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},79337:(L,C,o)=>{o.r(C),o.d(C,{DiscountWisePurchaseModule:()=>at});var P=o(36895),b=o(89299),d=o(24006),w=o(96166),x=o(12983),A=o.n(x),i=o(80574),n=o(94327),t=o(94650),c=o(97185),u=o(71071),Z=o(53506),$=o(42917),q=o(80927),B=o(87719),N=o(43443),W=o(54333),U=o(59549),T=o(99602),F=o(54040);function I(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"a",67)(1,"input",68,69),t.NdJ("change",function(s){const h=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(h.id,s.target.checked))}),t.qZA(),t.TgZ(3,"label",70),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(s))}),t._uU(4),t.qZA()()}if(2&a){const e=p.$implicit,r=p.index,s=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",s.selectData.includes(e.id))("id","checkboxCat-"+r),t.xp6(2),t.Q6J("for","checkboxCat-"+r),t.xp6(1),t.Oqu(e.title)}}function J(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const k=function(){return{standalone:!0}};function E(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",60)(1,"div",61)(2,"button",62),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",63)(5,"li")(6,"input",64),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=s)})("ngModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,I,5,5,"a",65),t.qZA()()(),t.TgZ(9,"div",66),t.YNc(10,J,2,1,"span",45),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,k)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function Y(a,p){if(1&a&&(t.TgZ(0,"tr")(1,"td",73),t._uU(2),t.qZA(),t.TgZ(3,"td",74),t._uU(4),t.qZA(),t.TgZ(5,"td",75),t._uU(6),t.qZA(),t.TgZ(7,"td",73),t._uU(8),t.qZA(),t.TgZ(9,"td",73),t._uU(10),t.qZA(),t.TgZ(11,"td",75),t._uU(12),t.qZA(),t.TgZ(13,"td",76),t._uU(14),t.qZA(),t.TgZ(15,"td",77),t._uU(16),t.qZA(),t.TgZ(17,"td",78),t._uU(18),t.qZA(),t.TgZ(19,"td",79),t._uU(20),t.qZA(),t.TgZ(21,"td",80),t._uU(22),t.qZA(),t.TgZ(23,"td",81),t._uU(24),t.qZA(),t.TgZ(25,"td",79),t._uU(26),t.qZA()()),2&a){const e=p.$implicit;t.xp6(2),t.hij(" ",null==e?null:e.barcode.variant_name,""),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.hij(" ",e.barcode.product.title,""),t.xp6(2),t.hij(" ",e.barcode.product.category,""),t.xp6(2),t.hij(" ",e.barcode.product.subcategory,""),t.xp6(2),t.hij("",e.barcode.product.brand," "),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.hij(" ",e.landing_cost,""),t.xp6(2),t.hij(" ",e.total,"")}}function R(a,p){if(1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"td",72)(15,"table")(16,"tbody"),t.YNc(17,Y,27,13,"tr",71),t.qZA()()()()),2&a){const e=p.$implicit,r=p.index;t.xp6(2),t.Oqu(r+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(e.total_discount),t.xp6(2),t.Oqu(t.xi3(13,7,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const j=function(a,p){return{itemsPerPage:a,currentPage:p}};function H(a,p){if(1&a&&(t.TgZ(0,"tbody"),t.YNc(1,R,18,10,"tr",71),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.discountWisePurchaseList,e.key,e.reverse),t.WLB(8,j,e.itemsPerPage,e.p)))}}function Q(a,p){1&a&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class a{constructor(e,r,s,l,h,m,f,v,g,D){this.router=e,this.fb=r,this.toastr=s,this.transactionService=l,this.purchaseService=h,this.cs=m,this.datepipe=f,this.coreService=v,this.reportService=g,this.commonService=D,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let g=localStorage.getItem("financialYear");console.warn(JSON.parse(g));let D=JSON.parse(g);this.fyID=D}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:r}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=r,this.cs.userDetails$.subscribe(g=>{this.isAdmin="admin"==g.role,this.getBranch()}),this.cs.userDetails$.subscribe(g=>{this.userDetails=g,console.log(g),this.userName=g?.username});const s=new Date,m=(s.getMonth(),s.getFullYear(),new Date(s));m.setDate(s.getDate()-14);const f=this.formatDate(m),v=this.formatDate(s);this.discountWisePurchaseForm=new d.cw({start:new d.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(v,this.commonService.dateRangeValidator(this.financialYear)),discount:new d.NI("")}),this.commonService.validateAndClearDates(this.discountWisePurchaseForm,this.minDate,this.maxDate),this.startDate=this.discountWisePurchaseForm.value?.start,this.endDate=this.discountWisePurchaseForm.value?.end,this.discount=this.discountWisePurchaseForm.value?.discount,this.getDiscountWisePurchase(),this.getProduct()}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const r=e?e.toLowerCase():"";return console.log(r),this.brandList.filter(s=>s?.title&&s.title.toLowerCase().includes(r))}displayFn(e){return e&&e?.title?e?.title:""}displayFn2(e){return e&&e?.title?e?.title:""}playFn3(e){return e&&e?.title?e?.title:""}displayFn4(e){return e&&e?.item_code?e?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getDiscountWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.discountWisePurchaseList=this.discountWisePurchaseList.filter(r=>{const s=r?.user?.party_name.toLocaleLowerCase(),l=r?.payment_voucher_no.toLocaleLowerCase()||"";return!(!s.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,r,s){const l=(e-1)*r;return`Showing ${l+1}\u2013${Math.min(l+r-1,s-1)+1} of ${s} results`}getDiscountWisePurchase(){this.reportService.getDiscountWisePurchase(this.startDate,this.endDate,this.discount,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.discountWisePurchase=e,this.discountWisePurchaseList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.discountWisePurchaseForm.patchValue({brand:this.dataId}),console.warn(this.discountWisePurchaseForm.value),this?.getDiscountWisePurchase()}oncheckDiscount(e){this.discountWisePurchaseForm.patchValue({Price:e}),console.warn(this.discountWisePurchaseForm.value),this.discount=this.discountWisePurchaseForm.value?.discount,this?.getDiscountWisePurchase()}getSelectedDiscountWisePurchaseDates(){console.log(this.discountWisePurchaseForm.value);const e=this.datepipe.transform(this.discountWisePurchaseForm.value.start,"yyyy-MM-dd"),r=this.datepipe.transform(this.discountWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(r),this.startDate=e,this.endDate=r,this?.getDiscountWisePurchase()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}generatePDFAgain(){const e=new w.default("landscape"),l=`Date Range From: ${this.startDate} - ${this.endDate}`,h=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Discount Wise Purchase Report",82,10),e.text(h,10,18),e.text(l,10,22),e.text("",10,25);const f=[];let v=1;this.discountWisePurchaseList.forEach(g=>{console.warn(g);const D=g.user.party_name,ot=g.check_gst,lt=g.total,ct=g.total_discount,ut=g.bill_date;let y=!0;g.data.forEach((_,pt)=>{console.log(_),f.push([y?v:"",y?D:"",y?ot:"",y?lt:"",y?ct:"",this.formatDate(y?ut:""),_.barcode.variant_name,_.barcode.sku,_.barcode.product.title,_.barcode.product.category,_.barcode.product.subcategory,_.barcode.product.brand,_.qty,_.unit_cost,_.mrp,_.discount,_.tax,_.landing_cost,_.total]),y=!1}),v++}),A()(e,{head:[["#","User","Check Gst","Total","Total Discount","Bill Date","Variant Name","Sku","Title","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:f,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Discount_wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],r=document.getElementById("mytable");if(r){const s=r.querySelector("thead tr");if(s){const h=[];s.querySelectorAll("th").forEach(m=>{const f=m.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&h.push(f)}),e.push(h)}r.querySelectorAll("tbody tr").forEach(h=>{const m=[];h.querySelectorAll("td").forEach(f=>{const v=f.textContent?.trim();v&&m.push(v)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),r=i.P6.aoa_to_sheet(e),s=i.P6.book_new();i.P6.book_append_sheet(s,r,"Sheet1");const l=i.cW(s,{bookType:"xlsx",type:"array"}),h=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(h,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const l=s.outerHTML,m=e.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+m,g=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=v,window.print(),document.body.innerHTML=g}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.discountWisePurchaseList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,r){if(r)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const s=this.selectData.findIndex(l=>l==e);console.log(s),-1!==s&&this.selectData.splice(s,1),this.ngOnInit(),console.log(this.selectData)}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(b.F0),t.Y36(d.qu),t.Y36(c._W),t.Y36(u.p),t.Y36(Z.x),t.Y36($.J),t.Y36(P.uU),t.Y36(q.p),t.Y36(B.r),t.Y36(N.R))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-discount-wise-purchase"]],decls:122,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-6","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","number","placeholder","Enter discount","formControlName","discount",1,"form-control",3,"input"],["val",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","padding-left","10px","padding-right","8px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","13"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","6%","padding-right","45px"],[2,"width","7%","padding-right","60px"],[2,"width","6%"],[2,"width","10%"],[2,"width","10%","padding-right","20px"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Discount Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Discount Wise Purchase"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,E,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return r.getSelectedDiscountWisePurchaseDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return r.getSelectedDiscountWisePurchaseDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Discount"),t.qZA(),t.TgZ(36,"input",26,27),t.NdJ("input",function(){t.CHM(s);const h=t.MAs(37);return t.KtG(r.oncheckDiscount(h.value))}),t.qZA()()()()()(),t.TgZ(38,"div",28)(39,"ul")(40,"li")(41,"a",29),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(42,"img",30),t.qZA()(),t.TgZ(43,"li")(44,"a",31),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(45,"img",32),t.qZA()(),t.TgZ(46,"li")(47,"a",33),t.NdJ("click",function(){return r.printTable()}),t._UZ(48,"img",34),t.qZA()()()()(),t.TgZ(49,"div",35)(50,"table",36)(51,"thead")(52,"tr")(53,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",38),t.qZA(),t.TgZ(56,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(57,"User "),t._UZ(58,"i",38),t.qZA(),t.TgZ(59,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(60,"Check Gst "),t._UZ(61,"i",38),t.qZA(),t.TgZ(62,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(63,"Total "),t._UZ(64,"i",38),t.qZA(),t.TgZ(65,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(66,"Total Discount"),t._UZ(67,"i",38),t.qZA(),t.TgZ(68,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(69,"Bill Date "),t._UZ(70,"i",38),t.qZA(),t.TgZ(71,"th",39),t._uU(72,"Variant Name"),t.qZA(),t.TgZ(73,"th",40),t._uU(74,"Sku "),t.qZA(),t.TgZ(75,"th",41),t._uU(76,"Title"),t.qZA(),t.TgZ(77,"th",42),t._uU(78,"Category "),t.qZA(),t.TgZ(79,"th",39),t._uU(80,"Sub category "),t.qZA(),t.TgZ(81,"th",43),t._uU(82,"Brand"),t.qZA(),t.TgZ(83,"th",43),t._uU(84,"Qty "),t.qZA(),t.TgZ(85,"th",44),t._uU(86,"Unit Cost "),t.qZA(),t.TgZ(87,"th",43),t._uU(88,"Mrp "),t.qZA(),t.TgZ(89,"th",43),t._uU(90,"Discount "),t.qZA(),t.TgZ(91,"th",43),t._uU(92,"Tax"),t.qZA(),t.TgZ(93,"th",39),t._uU(94,"Landing Cost "),t.qZA(),t.TgZ(95,"th",43),t._uU(96,"Total"),t.qZA()()(),t.YNc(97,H,4,11,"tbody",45),t.YNc(98,Q,5,0,"tbody",45),t.qZA(),t.TgZ(99,"div",6)(100,"div",46)(101,"div",47),t._uU(102," Show per page "),t.TgZ(103,"select",48,49),t.NdJ("ngModelChange",function(h){return r.itemsPerPage=h})("change",function(){t.CHM(s);const h=t.MAs(104);return t.KtG(r.changePg(h.value))}),t.TgZ(105,"option",50),t._uU(106,"10"),t.qZA(),t.TgZ(107,"option",51),t._uU(108,"20"),t.qZA(),t.TgZ(109,"option",52),t._uU(110,"30"),t.qZA(),t.TgZ(111,"option",53),t._uU(112,"50"),t.qZA(),t.TgZ(113,"option",54),t._uU(114,"100"),t.qZA(),t.TgZ(115,"option",55),t._uU(116,"All"),t.qZA()()()(),t.TgZ(117,"div",56)(118,"div",57)(119,"pagination-controls",58),t.NdJ("pageChange",function(h){return r.p=h}),t.qZA(),t.TgZ(120,"div",59),t._uU(121),t.qZA()()()()()()()()()}if(2&e){const s=t.MAs(31);t.xp6(11),t.Q6J("ngIf",r.isAdmin),t.xp6(5),t.Q6J("formGroup",r.discountWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",r.discountWisePurchaseForm)("rangePicker",s)("min",r.minDate)("max",r.maxDate),t.xp6(6),t.Q6J("for",s),t.xp6(68),t.Q6J("ngIf",(null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq(" Showing ",r.itemsPerPage," to ",null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length," of ",r.p," entries ")}},dependencies:[P.sg,P.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,W.LS,U.KE,U.R9,T.nW,T.wx,T.zY,T.By,T._g,P.uU,W._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:super}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})()}];let z=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[b.Bz.forChild(V),b.Bz]}),a})();var G=o(47957),K=o(44144),X=o(3056),tt=o(87078),S=o(86323),M=o(92642),et=o(3238),it=o(95113),nt=o(64155),rt=o(6205),O=o(8468);const st={User:M.n5m,UserCheck:M.uS3,FileText:M.acj,File:M.$BE};let at=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[P.uU],imports:[P.ez,z,O.I,d.u5,d.UX,G.Bb,U.lN,K.c,X.ZQ,tt.T,T.FA,U.lN,et.XK,it.LD,nt.vQ,O.I,rt.X,S.p.pick(st),S.p]}),a})()}}]);