"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[79337],{53506:(B,U,l)=>{l.d(U,{x:()=>d});var v=l(92340),b=l(94650),w=l(80529);let d=(()=>{class P{constructor(i){this.http=i,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}CkGstType(i){return this.http.get(this.apiUrl+"/pv-api/GST-check/?address_id="+i)}sale_and_purchase_qty_for_purchase_order(i){return this.http.get(this.apiUrl+"/pv-api/sale_and_purchase_qty_for_purchase_order/?id="+i)}Ckqut(i,n){const s=this.apiUrl+"/pv-api/stock_check/",t=new URLSearchParams;return t.append("id",i),t.append("mrp",n),this.http.get(s+(t.toString()?"?"+t.toString():""))}getPurchaseFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const t=[];if(i&&t.push(`financial_year=${i}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),t.push(`branch=${h}`)}return t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(i){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+i)}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}updatePurchase(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const t=[];if(i&&t.push(`financial_year=${i}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),t.push(`branch=${h}`)}return t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getMaterialByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${i}`)}MaterialIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}updateMaterial(i,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const t=[];if(i&&t.push(`financial_year=${i}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),t.push(`branch=${h}`)}return t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getPurchaseBillByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${i}`)}PurchaseBillIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}updatePurchaseBill(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,n){console.log(n,"branch"),console.log(n.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const t=[];if(i&&t.push(`financial_year=${i}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),t.push(`branch=${h}`)}return t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}updateDebitNotes(i,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,n){console.log(n,"branch"),console.log(n.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const t=[];if(i&&t.push(`financial_year=${i}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),t.push(`branch=${h}`)}return t.length>0&&(s+="?"+t.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}updatePurchaseReturn(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,n,s,t){let h=this.apiUrl+"/pv-api/purchase_product_filter/";const x=[];return i&&x.push(`supplier=${i}`),n&&x.push(`category=${n}`),s&&x.push(`subcategory=${s}`),t&&x.push(`search=${t}`),x.length>0&&(h+="?"+x.join("&")),this.http.get(h)}purchaseReturnStatusUpdate(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",i)}}return P.\u0275fac=function(i){return new(i||P)(b.LFG(w.eN))},P.\u0275prov=b.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),P})()},79337:(B,U,l)=>{l.r(U),l.d(U,{DiscountWisePurchaseModule:()=>ut});var v=l(36895),b=l(4392),w=l(49671),d=l(24006),P=l(96166),A=l(12983),i=l.n(A),n=l(80574),s=l(94327),t=l(94650),h=l(97185),x=l(71071),F=l(53506),N=l(42917),I=l(80927),J=l(87719),k=l(43443),W=l(54333),C=l(59549),T=l(99602),E=l(54040);function Y(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"a",67)(1,"input",68,69),t.NdJ("change",function(a){const u=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",70),t.NdJ("click",function(a){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&o){const e=g.$implicit,r=g.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+r),t.xp6(2),t.Q6J("for","checkboxCat-"+r),t.xp6(1),t.Oqu(e.title)}}function R(o,g){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const j=function(){return{standalone:!0}};function z(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"div",60)(1,"div",61)(2,"button",62),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",63)(5,"li")(6,"input",64),t.NdJ("ngModelChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,Y,5,5,"a",65),t.qZA()()(),t.TgZ(9,"div",66),t.YNc(10,R,2,1,"span",45),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,j)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function H(o,g){if(1&o&&(t.TgZ(0,"tr")(1,"td",73),t._uU(2),t.qZA(),t.TgZ(3,"td",74),t._uU(4),t.qZA(),t.TgZ(5,"td",75),t._uU(6),t.qZA(),t.TgZ(7,"td",73),t._uU(8),t.qZA(),t.TgZ(9,"td",73),t._uU(10),t.qZA(),t.TgZ(11,"td",75),t._uU(12),t.qZA(),t.TgZ(13,"td",76),t._uU(14),t.qZA(),t.TgZ(15,"td",77),t._uU(16),t.qZA(),t.TgZ(17,"td",78),t._uU(18),t.qZA(),t.TgZ(19,"td",79),t._uU(20),t.qZA(),t.TgZ(21,"td",80),t._uU(22),t.qZA(),t.TgZ(23,"td",81),t._uU(24),t.qZA(),t.TgZ(25,"td",79),t._uU(26),t.qZA()()),2&o){const e=g.$implicit;t.xp6(2),t.hij(" ",null==e?null:e.barcode.variant_name,""),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.hij(" ",e.barcode.product.title,""),t.xp6(2),t.hij(" ",e.barcode.product.category,""),t.xp6(2),t.hij(" ",e.barcode.product.subcategory,""),t.xp6(2),t.hij("",e.barcode.product.brand," "),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.hij(" ",e.landing_cost,""),t.xp6(2),t.hij(" ",e.total,"")}}function Q(o,g){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"td",72)(15,"table")(16,"tbody"),t.YNc(17,H,27,13,"tr",71),t.qZA()()()()),2&o){const e=g.$implicit,r=g.index;t.xp6(2),t.Oqu(r+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(e.total_discount),t.xp6(2),t.Oqu(t.xi3(13,7,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const G=function(o,g){return{itemsPerPage:o,currentPage:g}};function V(o,g){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Q,18,10,"tr",71),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.discountWisePurchaseList,e.key,e.reverse),t.WLB(8,G,e.itemsPerPage,e.p)))}}function K(o,g){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}const X=[{path:"",component:(()=>{class o{constructor(e,r,a,c,u,m,p,_,D,S){this.router=e,this.fb=r,this.toastr=a,this.transactionService=c,this.purchaseService=u,this.cs=m,this.datepipe=p,this.coreService=_,this.reportService=D,this.commonService=S,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let p=localStorage.getItem("financialYear");console.warn(JSON.parse(p));let _=JSON.parse(p);this.fyID=_}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:r}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=r,this.cs.userDetails$.subscribe(p=>{this.isAdmin="admin"==p?.role,this.getBranch()}),this.cs.userDetails$.subscribe(p=>{this.userDetails=p,console.log(p),this.userName=p?.username});const a=new Date,c=new Date(a);c.setDate(a.getDate()-14);const u=this.formatDate(c),m=this.formatDate(a);this.discountWisePurchaseForm=new d.cw({start:new d.NI(u,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(m,this.commonService.dateRangeValidator(this.financialYear)),discount:new d.NI("")}),this.commonService.validateAndClearDates(this.discountWisePurchaseForm,this.minDate,this.maxDate),this.startDate=this.discountWisePurchaseForm.value?.start,this.endDate=this.discountWisePurchaseForm.value?.end,this.discount=this.discountWisePurchaseForm.value?.discount,this.getDiscountWisePurchase(),this.getProduct()}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const r=e?e.toLowerCase():"";return console.log(r),this.brandList.filter(a=>a?.title&&a.title.toLowerCase().includes(r))}displayFn(e){return e&&e?.title?e?.title:""}displayFn2(e){return e&&e?.title?e?.title:""}playFn3(e){return e&&e?.title?e?.title:""}displayFn4(e){return e&&e?.item_code?e?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getDiscountWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.discountWisePurchaseList=this.discountWisePurchaseList.filter(r=>{const a=r?.user?.party_name.toLocaleLowerCase(),c=r?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(e)&&!c.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(r=>{r.isSelected=!e})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,r,a){const c=(e-1)*r;return`Showing ${c+1}\u2013${Math.min(c+r-1,a-1)+1} of ${a} results`}getDiscountWisePurchase(){this.reportService.getDiscountWisePurchase(this.startDate,this.endDate,this.discount,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.discountWisePurchase=e,this.discountWisePurchaseList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.discountWisePurchaseForm.patchValue({brand:this.dataId}),console.warn(this.discountWisePurchaseForm.value),this?.getDiscountWisePurchase()}oncheckDiscount(e){this.discountWisePurchaseForm.patchValue({Price:e}),console.warn(this.discountWisePurchaseForm.value),this.discount=this.discountWisePurchaseForm.value?.discount,this?.getDiscountWisePurchase()}getSelectedDiscountWisePurchaseDates(){const e=this.datepipe.transform(this.discountWisePurchaseForm.value.start,"yyyy-MM-dd"),r=this.datepipe.transform(this.discountWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(r),this.startDate=e,this.endDate=r,this?.getDiscountWisePurchase()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}generatePDFAgain(){var e=this;return(0,w.Z)(function*(){const r=new P.default("landscape"),a=e.coreService.profileData$.value,c=yield e.cs.loadImageReport(),u=e.datepipe.transform(new Date,"yyyy-MM-dd");r.setFontSize(12),r.setTextColor(33,43,54),r.setFontSize(25);const m=r.internal.pageSize.width,p="Discount Wise Purchase Report";r.setFontSize(16),r.setFont("helvetica","bold");const _=r.getStringUnitWidth(p)*r.internal.getFontSize()/r.internal.scaleFactor,D=(m-_)/2;r.text(p,D,25),r.addImage(c,"PNG",D+15,5,31,10),r.setFontSize(12),r.text(`Business Location: ${a?.branch}`,14,39),r.text(`From Date: ${e.formatDate(e.discountWisePurchaseForm.get("start").value)}`,14,45),r.text(`User: ${a?.role}`,m-_+20,33),r.text(`Print Date: ${u}`,m-_+20,39),r.text(`To Date: ${e.formatDate(e.discountWisePurchaseForm.get("end").value)}`,m-_+20,45);const L=[];let q=1;e.discountWisePurchaseList.forEach(y=>{console.warn(y);const ht=y.user.party_name,pt=y.check_gst,dt=y.total,gt=y.total_discount,mt=y.bill_date;let Z=!0;y.data.forEach(f=>{console.log(f),L.push([Z?q:"",Z?ht:"",Z?pt:"",Z?dt:"",Z?gt:"",e.formatDate(Z?mt:""),f.barcode.variant_name,f.barcode.sku,f.barcode.product.title,f.barcode.product.category,f.barcode.product.subcategory,f.barcode.product.brand,f.qty,f.unit_cost,f.mrp,f.discount,f.tax,f.landing_cost,f.total]),Z=!1}),q++}),i()(r,{head:[["#","User","Check Gst","Total","Total Discount","Bill Date","Variant Name","Sku","Title","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:L,theme:"grid",startY:49,headStyles:{fillColor:[255,159,67],textColor:[255,255,255],fontSize:9},margin:{top:49}}),r.save("Discount_wise_Purchase .pdf")})()}getVisibleDataFromTable(){const e=[],r=document.getElementById("mytable");if(r){const a=r.querySelector("thead tr");if(a){const u=[];a.querySelectorAll("th").forEach(m=>{const p=m.textContent?.trim();p&&"Is Active"!==p&&"Action"!==p&&u.push(p)}),e.push(u)}r.querySelectorAll("tbody tr").forEach(u=>{const m=[];u.querySelectorAll("td").forEach(p=>{const _=p.textContent?.trim();_&&m.push(_)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),r=n.P6.aoa_to_sheet(e),a=n.P6.book_new();n.P6.book_append_sheet(a,r,"Sheet1");const c=n.cW(a,{bookType:"xlsx",type:"array"}),u=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,s.saveAs)(u,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const c=a.outerHTML,m=e.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+m,D=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=_,window.print(),document.body.innerHTML=D}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.discountWisePurchaseList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,r){if(r)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(c=>c==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.F0),t.Y36(d.qu),t.Y36(h._W),t.Y36(x.p),t.Y36(F.x),t.Y36(N.J),t.Y36(v.uU),t.Y36(I.p),t.Y36(J.r),t.Y36(k.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-discount-wise-purchase"]],decls:122,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-6","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","number","placeholder","Enter discount","formControlName","discount",1,"form-control",3,"input"],["val",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","padding-left","10px","padding-right","8px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","13"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%","white-space","pre-wrap"],[2,"width","6%","padding-right","45px"],[2,"width","7%","padding-right","60px"],[2,"width","6%"],[2,"width","10%"],[2,"width","10%","padding-right","20px"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Discount Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Discount Wise Purchase"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,z,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return r.getSelectedDiscountWisePurchaseDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return r.getSelectedDiscountWisePurchaseDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Discount"),t.qZA(),t.TgZ(36,"input",26,27),t.NdJ("input",function(){t.CHM(a);const u=t.MAs(37);return t.KtG(r.oncheckDiscount(u.value))}),t.qZA()()()()()(),t.TgZ(38,"div",28)(39,"ul")(40,"li")(41,"a",29),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(42,"img",30),t.qZA()(),t.TgZ(43,"li")(44,"a",31),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(45,"img",32),t.qZA()(),t.TgZ(46,"li")(47,"a",33),t.NdJ("click",function(){return r.printTable()}),t._UZ(48,"img",34),t.qZA()()()()(),t.TgZ(49,"div",35)(50,"table",36)(51,"thead")(52,"tr")(53,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",38),t.qZA(),t.TgZ(56,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(57,"User "),t._UZ(58,"i",38),t.qZA(),t.TgZ(59,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(60,"Check Gst "),t._UZ(61,"i",38),t.qZA(),t.TgZ(62,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(63,"Total "),t._UZ(64,"i",38),t.qZA(),t.TgZ(65,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(66,"Total Discount"),t._UZ(67,"i",38),t.qZA(),t.TgZ(68,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(69,"Bill Date "),t._UZ(70,"i",38),t.qZA(),t.TgZ(71,"th",39),t._uU(72,"Variant Name"),t.qZA(),t.TgZ(73,"th",40),t._uU(74,"Sku "),t.qZA(),t.TgZ(75,"th",41),t._uU(76,"Title"),t.qZA(),t.TgZ(77,"th",42),t._uU(78,"Category "),t.qZA(),t.TgZ(79,"th",39),t._uU(80,"Sub category "),t.qZA(),t.TgZ(81,"th",43),t._uU(82,"Brand"),t.qZA(),t.TgZ(83,"th",43),t._uU(84,"Qty "),t.qZA(),t.TgZ(85,"th",44),t._uU(86,"Unit Cost "),t.qZA(),t.TgZ(87,"th",43),t._uU(88,"Mrp "),t.qZA(),t.TgZ(89,"th",43),t._uU(90,"Discount "),t.qZA(),t.TgZ(91,"th",43),t._uU(92,"Tax"),t.qZA(),t.TgZ(93,"th",39),t._uU(94,"Landing Cost "),t.qZA(),t.TgZ(95,"th",43),t._uU(96,"Total"),t.qZA()()(),t.YNc(97,V,4,11,"tbody",45),t.YNc(98,K,5,0,"tbody",45),t.qZA(),t.TgZ(99,"div",6)(100,"div",46)(101,"div",47),t._uU(102," Show per page "),t.TgZ(103,"select",48,49),t.NdJ("ngModelChange",function(u){return r.itemsPerPage=u})("change",function(){t.CHM(a);const u=t.MAs(104);return t.KtG(r.changePg(u.value))}),t.TgZ(105,"option",50),t._uU(106,"10"),t.qZA(),t.TgZ(107,"option",51),t._uU(108,"20"),t.qZA(),t.TgZ(109,"option",52),t._uU(110,"30"),t.qZA(),t.TgZ(111,"option",53),t._uU(112,"50"),t.qZA(),t.TgZ(113,"option",54),t._uU(114,"100"),t.qZA(),t.TgZ(115,"option",55),t._uU(116,"All"),t.qZA()()()(),t.TgZ(117,"div",56)(118,"div",57)(119,"pagination-controls",58),t.NdJ("pageChange",function(u){return r.p=u}),t.qZA(),t.TgZ(120,"div",59),t._uU(121),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",r.isAdmin),t.xp6(5),t.Q6J("formGroup",r.discountWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",r.discountWisePurchaseForm)("rangePicker",a)("min",r.minDate)("max",r.maxDate),t.xp6(6),t.Q6J("for",a),t.xp6(68),t.Q6J("ngIf",(null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq(" Showing ",r.itemsPerPage," to ",null==r.discountWisePurchaseList?null:r.discountWisePurchaseList.length," of ",r.p," entries ")}},dependencies:[v.sg,v.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,W.LS,C.KE,C.R9,T.nW,T.wx,T.zY,T.By,T._g,v.uU,W._s,E.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:super}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[b.Bz.forChild(X),b.Bz]}),o})();var et=l(47957),it=l(44144),nt=l(3056),rt=l(87078),O=l(86323),M=l(92642),at=l(3238),st=l(95113),ot=l(64155),lt=l(6205),$=l(8468);const ct={User:M.n5m,UserCheck:M.uS3,FileText:M.acj,File:M.$BE};let ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[v.uU],imports:[v.ez,tt,$.I,d.u5,d.UX,et.Bb,C.lN,it.c,nt.ZQ,rt.T,T.FA,C.lN,at.XK,st.LD,ot.vQ,$.I,lt.X,O.p.pick(ct),O.p]}),o})()}}]);