"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2441],{53506:(w,b,p)=>{p.d(b,{x:()=>v});var y=p(92340),S=p(94650),u=p(80529);let v=(()=>{class _{constructor(r){this.http=r,this.apiUrl=`${y.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(r,o){console.log(o,"branch"),console.log(o.length,"branch");let a=this.apiUrl+"/pv-api/purchase_order/";const d=[];if(r&&d.push(`financial_year=${r}`),o&&o.length>0){const t=JSON.stringify(o);console.log(t),console.log(t?.length),d.push(`branch=${t}`)}return d.length>0&&(a+="?"+d.join("&")),this.http.get(a)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,o)}updatePurchase(r,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${o}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,o){console.log(o,"branch"),console.log(o.length,"branch");let a=this.apiUrl+"/pv-api/material_inward/";const d=[];if(r&&d.push(`financial_year=${r}`),o&&o.length>0){const t=JSON.stringify(o);console.log(t),console.log(t?.length),d.push(`branch=${t}`)}return d.length>0&&(a+="?"+d.join("&")),this.http.get(a)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,o)}updateMaterial(r,o){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${o}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,o){console.log(o,"branch"),console.log(o.length,"branch");let a=this.apiUrl+"/pv-api/purchase_bill/";const d=[];if(r&&d.push(`financial_year=${r}`),o&&o.length>0){const t=JSON.stringify(o);console.log(t),console.log(t?.length),d.push(`branch=${t}`)}return d.length>0&&(a+="?"+d.join("&")),this.http.get(a)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,o)}updatePurchaseBill(r,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${o}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,o){console.log(o,"branch"),console.log(o.length,"branch");let a=this.apiUrl+"/pv-api/debit_note/";const d=[];if(r&&d.push(`financial_year=${r}`),o&&o.length>0){const t=JSON.stringify(o);console.log(t),console.log(t?.length),d.push(`branch=${t}`)}return d.length>0&&(a+="?"+d.join("&")),this.http.get(a)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,o)}updateDebitNotes(r,o){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,o){console.log(o,"branch"),console.log(o.length,"branch");let a=this.apiUrl+"/pv-api/purchase_return/";const d=[];if(r&&d.push(`financial_year=${r}`),o&&o.length>0){const t=JSON.stringify(o);console.log(t),console.log(t?.length),d.push(`branch=${t}`)}return d.length>0&&(a+="?"+d.join("&")),this.http.get(a)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,o)}updatePurchaseReturn(r,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${o}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,o,a,d){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const C=[];return r&&C.push(`supplier=${r}`),o&&C.push(`category=${o}`),a&&C.push(`subcategory=${a}`),d&&C.push(`search=${d}`),C.length>0&&(t+="?"+C.join("&")),this.http.get(t)}}return _.\u0275fac=function(r){return new(r||_)(S.LFG(u.eN))},_.\u0275prov=S.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},32441:(w,b,p)=>{p.r(b),p.d(b,{StockRegisterModule:()=>st});var y=p(36895),S=p(89299),u=p(24006),v=p(68675),_=p(54004),Z=p(96166),r=p(12983),o=p.n(r),a=p(80574),d=p(94327),t=p(94650),C=p(97185),N=p(71071),$=p(53506),R=p(42917),J=p(80927),B=p(87719),D=p(72170),T=p(47957),U=p(3238),x=p(59549),L=p(44144),A=p(99602),M=p(54333),I=p(54040);function F(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",61),t.NdJ("blur",function(){const s=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.oncheckproduct(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&l){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function q(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",64),t.NdJ("onSelectionChange",function(){t.CHM(e);const n=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.oncheckVariant(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&l){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function E(l,g){if(1&l&&(t.ynx(0),t.YNc(1,q,2,2,"mat-option",63),t.BQk()),2&l){const e=g.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function Q(l,g){if(1&l&&(t.ynx(0),t.YNc(1,E,2,1,"ng-container",62),t.BQk()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function Y(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",61),t.NdJ("blur",function(){const s=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.oncheckCategory(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&l){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function V(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",61),t.NdJ("blur",function(){const s=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.oncheckSubCategory(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&l){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function H(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",61),t.NdJ("blur",function(){const s=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.oncheckBrand(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&l){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function j(l,g){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&l){const e=g.$implicit,i=g.index;t.xp6(2),t.Oqu(i+1+"."),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.product_title),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.variant_name),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.sku),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty),t.xp6(2),t.Oqu(e.closing)}}const z=function(l,g){return{itemsPerPage:l,currentPage:g}};function W(l,g){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,j,15,7,"tr",62),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,z,e.itemsPerPage,e.p)))}}function K(l,g){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",65)(3,"p",66),t._uU(4,"Data not available"),t.qZA()()()())}const G=[{path:"",component:(()=>{class l{constructor(e,i,n,s,h,f,c,m,k,at){this.router=e,this.fb=i,this.toastr=n,this.transactionService=s,this.purchaseService=h,this.cs=f,this.datepipe=c,this.coreService=m,this.reportService=k,this.saleService=at,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new u.NI(""),this.categoryControl=new u.NI(""),this.subCategoryControl=new u.NI(""),this.itemCodeControl=new u.NI(""),this.supplierControl=new u.NI(""),this.productControl=new u.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.selectBrand=[],this.selectCategory=[],this.selectSubCat=[],this.selectProduct=[],this.selectVariant=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let c=localStorage.getItem("financialYear");console.warn(JSON.parse(c));let m=JSON.parse(c);this.fyID=m}this.cs.userDetails$.subscribe(c=>{this.isAdmin="admin"==c.role}),this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const e=new Date,s=(e.getMonth(),e.getFullYear(),new Date(e));s.setDate(e.getDate()-14);const h=this.formatDate(s),f=this.formatDate(e);this.stockAlertform=new u.cw({start:new u.NI(h),end:new u.NI(f),category:new u.NI,subcategory:new u.NI(""),brand:new u.NI(""),product:new u.NI(""),variant:new u.NI("")}),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,v.O)(""),(0,_.U)(c=>{const m="string"==typeof c?c:c?.title;return m?this._filter(m):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,v.O)(""),(0,_.U)(c=>{const m="string"==typeof c?c:c?.title;return m?this._filter2(m):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,v.O)(""),(0,_.U)(c=>{const m="string"==typeof c?c:c?.title;return m?this._filter3(m):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,v.O)(""),(0,_.U)(c=>{const m="string"==typeof c?c:c?.title;return m?this._filter5(m):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,v.O)(""),(0,_.U)(c=>{const m="string"==typeof c?c:c?.title;return m?this._filter6(m):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const i=e?e.toLowerCase():"";return console.log(i),this.brandList.filter(n=>n?.title&&n.title.toLowerCase().includes(i))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const i=e?e.toLowerCase():"";return this.categoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(i))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const i=e?e.toLowerCase():"";return console.log(i),this.subCategoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(i))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(n=>n?.item_code&&n.item_code.toLowerCase().includes(i))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}_filter6(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(i)||n?.name&&n.name.toLowerCase().includes(i))}displayFn6(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter5(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(i)||n?.name&&n.name.toLowerCase().includes(i))}displayFn5(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(i=>{const n=i?.user?.party_name.toLocaleLowerCase(),s=i?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!s.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,i,n){const s=(e-1)*i;return`Showing ${s+1}\u2013${Math.min(s+i-1,n-1)+1} of ${n} results`}getStockAlert(){this.reportService.getStockRegister(this.startDate,this.endDate,this.categoryArray,this.subCatArray,this.brandArray,this.productsArray,this.variantsArray,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){const i=this.selectBrand.indexOf(e);-1!==i?this.selectBrand.splice(i,1):this.selectBrand.push(e),console.log(this.selectBrand,"selected data"),this.selectBrand.length>0&&(this.brandArray=JSON.stringify(this.selectBrand),console.log(this.brandArray,"brandArray"),this.brandControl.reset(),this.getStockAlert())}oncheckCategory(e){const i=this.selectCategory.indexOf(e);-1!==i?this.selectCategory.splice(i,1):this.selectCategory.push(e),console.log(this.selectCategory,"selected data"),this.selectCategory.length>0&&(this.categoryArray=JSON.stringify(this.selectCategory),console.log(this.categoryArray,"categoryArray"),this.categoryControl.reset(),this.getStockAlert())}oncheckSubCategory(e){const i=this.selectSubCat.indexOf(e);-1!==i?this.selectSubCat.splice(i,1):this.selectSubCat.push(e),console.log(this.selectSubCat,"selected data"),this.selectSubCat.length>0&&(this.subCatArray=JSON.stringify(this.selectSubCat),console.log(this.subCatArray,"subCatArray"),this.subCategoryControl.reset(),this.getStockAlert())}oncheckproduct(e){const i=this.selectProduct.indexOf(e);-1!==i?this.selectProduct.splice(i,1):this.selectProduct.push(e),console.log(this.selectProduct,"selected data"),this.selectProduct.length>0&&(this.productsArray=JSON.stringify(this.selectProduct),console.log(this.productsArray,"productsArray"),this.productControl.reset(),this.getStockAlert())}oncheckVariant(e){const i=this.selectVariant.indexOf(e);-1!==i?this.selectVariant.splice(i,1):this.selectVariant.push(e),console.log(this.selectVariant,"selected data"),this.selectVariant.length>0&&(this.variantsArray=JSON.stringify(this.selectVariant),console.log(this.variantsArray,"variantsArray"),this.supplierControl.reset(),this.getStockAlert())}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),i=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(i),this.startDate=e,this.endDate=i,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}getVariant(e){this.searchLength=e,this.isSearch=!0,e.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",e).subscribe(i=>{console.log(i),this.isSearch=!1,this.variantList=i,console.log(this.variantList)})}generatePDFAgain(){const e=new Z.default,s=`Date Range From: ${this.startDate} - ${this.endDate}`,h=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Register Report",82,10),e.text(h,10,18),e.text(s,10,22),e.text("",10,25),o()(e,{head:[["#","ProductTitle","VariantName","Sku","IN Qty","Out Qty","Closing"]],body:this.stockAlertList.map((f,c)=>[c+1,f.product.product_title,f.product.variant_name,f.product.sku,f.in_qty,f.out_qty,f.closing]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock _Register .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable");if(i){const n=i.querySelector("thead tr");if(n){const h=[];n.querySelectorAll("th").forEach(f=>{const c=f.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&h.push(c)}),e.push(h)}i.querySelectorAll("tbody tr").forEach(h=>{const f=[];h.querySelectorAll("td").forEach(c=>{const m=c.textContent?.trim();m&&f.push(m)}),e.push(f)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=a.P6.aoa_to_sheet(e),n=a.P6.book_new();a.P6.book_append_sheet(n,i,"Sheet1");const s=a.cW(n,{bookType:"xlsx",type:"array"}),h=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,d.saveAs)(h,"Stockregister.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const s=n.outerHTML,f=e.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+f,k=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=m,window.print(),document.body.innerHTML=k}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,i){if(i)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(s=>s==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(S.F0),t.Y36(u.qu),t.Y36(C._W),t.Y36(N.p),t.Y36($.x),t.Y36(R.J),t.Y36(y.uU),t.Y36(J.p),t.Y36(B.r),t.Y36(D.M))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-stock-register"]],decls:133,vars:37,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],[1,"col-lg-2","col-sm-6","col-12"],["autoc","matAutocomplete"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autosc","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value","blur"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Register"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Register"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return i.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return i.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"strong"),t._uU(31,"Select Product"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",24,25),t.YNc(35,F,2,2,"mat-option",26),t.ALo(36,"async"),t.qZA()()(),t.TgZ(37,"div",21)(38,"div",22)(39,"strong"),t._uU(40,"Select Variant"),t.qZA(),t.TgZ(41,"input",27),t.NdJ("input",function(h){return i.getVariant(h.target.value)}),t.qZA(),t.TgZ(42,"mat-autocomplete",null,28),t.YNc(44,Q,2,1,"ng-container",29),t.qZA()()(),t.TgZ(45,"div",30)(46,"div",22)(47,"strong"),t._uU(48,"Select Category"),t.qZA(),t._UZ(49,"input",23),t.TgZ(50,"mat-autocomplete",24,31),t.YNc(52,Y,2,2,"mat-option",26),t.ALo(53,"async"),t.qZA()()(),t.TgZ(54,"div",30)(55,"div",22)(56,"strong"),t._uU(57,"Select Sub Category"),t.qZA(),t._UZ(58,"input",32),t.TgZ(59,"mat-autocomplete",24,33),t.YNc(61,V,2,2,"mat-option",26),t.ALo(62,"async"),t.qZA()()(),t.TgZ(63,"div",30)(64,"div",22)(65,"strong"),t._uU(66,"Select Brand"),t.qZA(),t._UZ(67,"input",34),t.TgZ(68,"mat-autocomplete",24,35),t.YNc(70,H,2,2,"mat-option",26),t.ALo(71,"async"),t.qZA()()()()()(),t.TgZ(72,"div",36)(73,"ul")(74,"li")(75,"a",37),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(76,"img",38),t.qZA()(),t.TgZ(77,"li")(78,"a",39),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(79,"img",40),t.qZA()(),t.TgZ(80,"li")(81,"a",41),t.NdJ("click",function(){return i.printTable()}),t._UZ(82,"img",42),t.qZA()()()()(),t.TgZ(83,"div",43)(84,"table",44)(85,"thead")(86,"tr")(87,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(88,"#"),t._UZ(89,"i",46),t.qZA(),t.TgZ(90,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(91,"ProductTitle "),t._UZ(92,"i",46),t.qZA(),t.TgZ(93,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(94,"VariantName "),t._UZ(95,"i",46),t.qZA(),t.TgZ(96,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(97,"Sku "),t._UZ(98,"i",46),t.qZA(),t.TgZ(99,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(100,"In Qty "),t._UZ(101,"i",46),t.qZA(),t.TgZ(102,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(103,"Out Qty "),t._UZ(104,"i",46),t.qZA(),t.TgZ(105,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(106,"Closing "),t._UZ(107,"i",46),t.qZA()()(),t.YNc(108,W,4,11,"tbody",29),t.YNc(109,K,5,0,"tbody",29),t.qZA(),t.TgZ(110,"div",10)(111,"div",47)(112,"div",48),t._uU(113," Show per page "),t.TgZ(114,"select",49,50),t.NdJ("ngModelChange",function(h){return i.itemsPerPage=h})("change",function(){t.CHM(n);const h=t.MAs(115);return t.KtG(i.changePg(h.value))}),t.TgZ(116,"option",51),t._uU(117,"10"),t.qZA(),t.TgZ(118,"option",52),t._uU(119,"20"),t.qZA(),t.TgZ(120,"option",53),t._uU(121,"30"),t.qZA(),t.TgZ(122,"option",54),t._uU(123,"50"),t.qZA(),t.TgZ(124,"option",55),t._uU(125,"100"),t.qZA(),t.TgZ(126,"option",56),t._uU(127,"All"),t.qZA()()()(),t.TgZ(128,"div",57)(129,"div",58)(130,"pagination-controls",59),t.NdJ("pageChange",function(h){return i.p=h}),t.qZA(),t.TgZ(131,"div",60),t._uU(132),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(27),s=t.MAs(34),h=t.MAs(43),f=t.MAs(51),c=t.MAs(60),m=t.MAs(69);t.xp6(12),t.Q6J("formGroup",i.stockAlertform),t.xp6(7),t.Q6J("formGroup",i.stockAlertform)("rangePicker",n),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",s),t.xp6(1),t.Q6J("displayWith",i.displayFn5),t.xp6(2),t.Q6J("ngForOf",t.lcZ(36,29,i.filteredSuppliers)),t.xp6(6),t.Q6J("formControl",i.productControl)("matAutocomplete",h),t.xp6(3),t.Q6J("ngIf",(null==i.productControl.value?null:i.productControl.value.length)>=1&&(null==i.productControl.value?null:i.productControl.value.length)>0),t.xp6(5),t.Q6J("formControl",i.categoryControl)("matAutocomplete",f),t.xp6(1),t.Q6J("displayWith",i.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(53,31,i.filteredCategory)),t.xp6(6),t.Q6J("formControl",i.subCategoryControl)("matAutocomplete",c),t.xp6(1),t.Q6J("displayWith",i.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(62,33,i.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",i.brandControl)("matAutocomplete",m),t.xp6(1),t.Q6J("displayWith",i.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(71,35,i.filteredBrand)),t.xp6(38),t.Q6J("ngIf",(null==i.stockAlertList?null:i.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.stockAlertList?null:i.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq(" Showing ",i.itemsPerPage," to ",null==i.stockAlertList?null:i.stockAlertList.length," of ",i.p," entries ")}},dependencies:[y.sg,y.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,T.XC,T.ZL,U.ey,x.KE,x.R9,L.Nt,A.nW,A.wx,A.zY,A.By,A._g,M.LS,y.Ov,M._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let X=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[S.Bz.forChild(G),S.Bz]}),l})();var tt=p(3056),et=p(87078),O=p(86323),P=p(92642),it=p(95113),rt=p(64155),ot=p(6205),nt=p(8468);const lt={User:P.n5m,UserCheck:P.uS3,FileText:P.acj,File:P.$BE};let st=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[y.uU],imports:[y.ez,X,u.u5,u.UX,T.Bb,x.lN,L.c,tt.ZQ,et.T,A.FA,x.lN,U.XK,it.LD,rt.vQ,nt.I,ot.X,O.p.pick(lt),O.p]}),l})()}}]);