"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[62787],{53506:($,k,c)=>{c.d(k,{x:()=>A});var S=c(92340),b=c(94650),d=c(80529);let A=(()=>{class y{constructor(r){this.http=r,this.apiUrl=`${S.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(r){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+r)}Ckqut(r,i){const s=this.apiUrl+"/pv-api/stock_check/",p=new URLSearchParams;return p.append("id",r),p.append("mrp",i),this.http.get(s+(p.toString()?"?"+p.toString():""))}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(r){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+r)}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getMaterialByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getPurchaseBillByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,s,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const C=[];return r&&C.push(`supplier=${r}`),i&&C.push(`category=${i}`),s&&C.push(`subcategory=${s}`),p&&C.push(`search=${p}`),C.length>0&&(t+="?"+C.join("&")),this.http.get(t)}purchaseReturnStatusUpdate(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",r)}}return y.\u0275fac=function(r){return new(r||y)(b.LFG(d.eN))},y.\u0275prov=b.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},62787:($,k,c)=>{c.r(k),c.d(k,{StockSummaryModule:()=>dt});var S=c(36895),b=c(4392),d=c(24006),A=c(68675),y=c(54004),U=c(96166),r=c(12983),i=c.n(r),s=c(80574),p=c(94327),t=c(94650),C=c(97185),J=c(71071),D=c(53506),I=c(42917),B=c(80927),q=c(87719),F=c(72170),Q=c(43443),M=c(54333),P=c(47957),L=c(3238),x=c(59549),w=c(44144),Z=c(99602),E=c(54040);function Y(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"a",71)(1,"input",72,73),t.NdJ("change",function(n){const u=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(u.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",74),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&l){const e=m.$implicit,o=m.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",n.selectData.includes(e.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(e.title)}}function V(l,m){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const R=function(){return{standalone:!0}};function H(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"div",64)(1,"div",65)(2,"button",66),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",67)(5,"li")(6,"input",68),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.searchBranch=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,Y,5,5,"a",69),t.qZA()()(),t.TgZ(9,"div",70),t.YNc(10,V,2,1,"span",32),t.qZA()()}if(2&l){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,R)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function j(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.oncheckproduct(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=m.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function z(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",78),t.NdJ("onSelectionChange",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.oncheckVariant(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&l){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function K(l,m){if(1&l&&(t.ynx(0),t.YNc(1,z,2,2,"mat-option",77),t.BQk()),2&l){const e=m.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function G(l,m){if(1&l&&(t.ynx(0),t.YNc(1,K,2,1,"ng-container",76),t.BQk()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function W(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.oncheckCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=m.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function X(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.oncheckSubCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=m.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function tt(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.oncheckBrand(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=m.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function et(l,m){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA()()),2&l){const e=m.$implicit,o=m.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.title),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.hsncode),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.category),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.subcategory),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.brand),t.xp6(2),t.Oqu(e.variant),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Oqu(e.voucher_type),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty)}}const ot=function(l,m){return{itemsPerPage:l,currentPage:m}};function rt(l,m){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,et,27,13,"tr",76),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,ot,e.itemsPerPage,e.p)))}}function it(l,m){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",79)(3,"p",80),t._uU(4,"Data not available"),t.qZA()()()())}const nt=[{path:"",component:(()=>{class l{constructor(e,o,n,a,u,g,_,v,h,f,mt){this.router=e,this.fb=o,this.toastr=n,this.transactionService=a,this.purchaseService=u,this.cs=g,this.datepipe=_,this.coreService=v,this.reportService=h,this.saleService=f,this.commonService=mt,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new d.NI(""),this.categoryControl=new d.NI(""),this.subCategoryControl=new d.NI(""),this.itemCodeControl=new d.NI(""),this.supplierControl=new d.NI(""),this.productControl=new d.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let h=localStorage.getItem("financialYear");console.warn(JSON.parse(h));let f=JSON.parse(h);this.fyID=f}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:o}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=o,this.cs.userDetails$.subscribe(h=>{this.isAdmin="admin"==h.role,this.getBranch()}),this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.userName=h?.username});const n=new Date,g=(n.getMonth(),n.getFullYear(),new Date(n));g.setDate(n.getDate()-14);const _=this.formatDate(g),v=this.formatDate(n);this.stockAlertform=new d.cw({start:new d.NI(_,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(v,this.commonService.dateRangeValidator(this.financialYear)),category:new d.NI,subcategory:new d.NI(""),brand:new d.NI(""),product:new d.NI(""),variant:new d.NI("")}),this.commonService.validateAndClearDates(this.stockAlertform,this.minDate,this.maxDate),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.reportService.getVariant().subscribe(h=>{console.log(h)}),this.filteredBrand=this.brandControl.valueChanges.pipe((0,A.O)(""),(0,y.U)(h=>{const f="string"==typeof h?h:h?.title;return f?this._filter(f):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,A.O)(""),(0,y.U)(h=>{const f="string"==typeof h?h:h?.title;return f?this._filter2(f):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,A.O)(""),(0,y.U)(h=>{const f="string"==typeof h?h:h?.title;return f?this._filter3(f):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,A.O)(""),(0,y.U)(h=>{const f="string"==typeof h?h:h?.title;return f?this._filter5(f):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,A.O)(""),(0,y.U)(h=>{const f="string"==typeof h?h:h?.title;return f?this._filter6(f):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const o=e?e.toLowerCase():"";return console.log(o),this.brandList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const o=e?e.toLowerCase():"";return this.categoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const o=e?e.toLowerCase():"";return console.log(o),this.subCategoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.item_code&&n.item_code.toLowerCase().includes(o))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}_filter6(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn6(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter5(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn5(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(o=>{const n=o?.user?.party_name.toLocaleLowerCase(),a=o?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!a.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,n){const a=(e-1)*o;return`Showing ${a+1}\u2013${Math.min(a+o-1,n-1)+1} of ${n} results`}getStockAlert(){console.log(this.brand),this.reportService.getStockSummary(this.startDate,this.endDate,this.category,this.subcategory,this.brand,this.product,this.variant,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({brand:this.dataId}),console.warn(this.stockAlertform.value),this.brand=this.stockAlertform.value?.brand,this?.getStockAlert()}oncheckCategory(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({category:this.dataId}),console.warn(this.stockAlertform.value),this.category=this.stockAlertform.value?.category,this?.getStockAlert()}oncheckSubCategory(e){console.log(e),this.stockAlertform.patchValue({subcategory:e}),console.warn(this.stockAlertform.value),this.subcategory=this.stockAlertform.value?.subcategory,this?.getStockAlert()}oncheckproduct(e){this.stockAlertform.patchValue({product:e}),console.warn(this.stockAlertform.value),this.product=this.stockAlertform.value?.product,this?.getStockAlert()}oncheckVariant(e){this.stockAlertform.patchValue({variant:e}),console.warn(this.stockAlertform.value),this.variant=this.stockAlertform.value?.variant,this?.getStockAlert()}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}getVariant(e){this.searchLength=e,this.isSearch=!0,e.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",e).subscribe(o=>{console.log(o),this.isSearch=!1,this.variantList=o,console.log(this.variantList)})}generatePDFAgain(){const e=new U.default("landscape"),a=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Summary Report",82,10),e.text(u,10,18),e.text(a,10,22),e.text("",10,25),i()(e,{head:[["#","Title","HsnCode","Category","Subcategory","Brand","Variant","Date","Price","Voucher Type","Voucher No.","IN Qty","Out Qty"]],body:this.stockAlertList.map((g,_)=>[_+1,g.product.title,g.product.hsncode,g.product.category,g.product.subcategory,g.product.brand,g.variant,g.date,g.price,g.voucher_type,g.voucher_no,g.in_qty,g.out_qty]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock _Summary .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const n=o.querySelector("thead tr");if(n){const u=[];n.querySelectorAll("th").forEach(g=>{const _=g.textContent?.trim();_&&"Is Active"!==_&&"Action"!==_&&u.push(_)}),e.push(u)}o.querySelectorAll("tbody tr").forEach(u=>{const g=[];u.querySelectorAll("td").forEach(_=>{const v=_.textContent?.trim();v&&g.push(v)}),e.push(g)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=s.P6.aoa_to_sheet(e),n=s.P6.book_new();s.P6.book_append_sheet(n,o,"Sheet1");const a=s.cW(n,{bookType:"xlsx",type:"array"}),u=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(u,"Stocksummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const a=n.outerHTML,g=e.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+g,h=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=v,window.print(),document.body.innerHTML=h}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,o){if(o)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(a=>a==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(b.F0),t.Y36(d.qu),t.Y36(C._W),t.Y36(J.p),t.Y36(D.x),t.Y36(I.J),t.Y36(S.uU),t.Y36(B.p),t.Y36(q.r),t.Y36(F.M),t.Y36(Q.R))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-stock-summary"]],decls:155,vars:40,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],[1,"col-lg-2","col-sm-6","col-12"],["autoc","matAutocomplete"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autosc","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Summary"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Summary"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,H,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Select Product"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",27,28),t.YNc(39,j,2,2,"mat-option",29),t.ALo(40,"async"),t.qZA()()(),t.TgZ(41,"div",24)(42,"div",25)(43,"strong"),t._uU(44,"Select Variant"),t.qZA(),t.TgZ(45,"input",30),t.NdJ("input",function(u){return o.getVariant(u.target.value)}),t.qZA(),t.TgZ(46,"mat-autocomplete",null,31),t.YNc(48,G,2,1,"ng-container",32),t.qZA()()(),t.TgZ(49,"div",33)(50,"div",25)(51,"strong"),t._uU(52,"Select Category"),t.qZA(),t._UZ(53,"input",26),t.TgZ(54,"mat-autocomplete",27,34),t.YNc(56,W,2,2,"mat-option",29),t.ALo(57,"async"),t.qZA()()(),t.TgZ(58,"div",33)(59,"div",25)(60,"strong"),t._uU(61,"Select Sub Category"),t.qZA(),t._UZ(62,"input",35),t.TgZ(63,"mat-autocomplete",27,36),t.YNc(65,X,2,2,"mat-option",29),t.ALo(66,"async"),t.qZA()()(),t.TgZ(67,"div",33)(68,"div",25)(69,"strong"),t._uU(70,"Select Brand"),t.qZA(),t._UZ(71,"input",37),t.TgZ(72,"mat-autocomplete",27,38),t.YNc(74,tt,2,2,"mat-option",29),t.ALo(75,"async"),t.qZA()()()()()(),t.TgZ(76,"div",39)(77,"ul")(78,"li")(79,"a",40),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(80,"img",41),t.qZA()(),t.TgZ(81,"li")(82,"a",42),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(83,"img",43),t.qZA()(),t.TgZ(84,"li")(85,"a",44),t.NdJ("click",function(){return o.printTable()}),t._UZ(86,"img",45),t.qZA()()()()(),t.TgZ(87,"div",46)(88,"table",47)(89,"thead")(90,"tr")(91,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(92,"#"),t._UZ(93,"i",49),t.qZA(),t.TgZ(94,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(95,"Title "),t._UZ(96,"i",49),t.qZA(),t.TgZ(97,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(98,"Hsn Code "),t._UZ(99,"i",49),t.qZA(),t.TgZ(100,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(101,"Category "),t._UZ(102,"i",49),t.qZA(),t.TgZ(103,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(104,"Subcategory "),t._UZ(105,"i",49),t.qZA(),t.TgZ(106,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(107,"Brand "),t._UZ(108,"i",49),t.qZA(),t.TgZ(109,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(110,"Variant "),t._UZ(111,"i",49),t.qZA(),t.TgZ(112,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(113,"Date "),t._UZ(114,"i",49),t.qZA(),t.TgZ(115,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(116,"price "),t._UZ(117,"i",49),t.qZA(),t.TgZ(118,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(119,"Voucher Type "),t._UZ(120,"i",49),t.qZA(),t.TgZ(121,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(122,"Voucher No. "),t._UZ(123,"i",49),t.qZA(),t.TgZ(124,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(125,"In Qty "),t._UZ(126,"i",49),t.qZA(),t.TgZ(127,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(128,"Out Qty "),t._UZ(129,"i",49),t.qZA()()(),t.YNc(130,rt,4,11,"tbody",32),t.YNc(131,it,5,0,"tbody",32),t.qZA(),t.TgZ(132,"div",6)(133,"div",50)(134,"div",51),t._uU(135," Show per page "),t.TgZ(136,"select",52,53),t.NdJ("ngModelChange",function(u){return o.itemsPerPage=u})("change",function(){t.CHM(n);const u=t.MAs(137);return t.KtG(o.changePg(u.value))}),t.TgZ(138,"option",54),t._uU(139,"10"),t.qZA(),t.TgZ(140,"option",55),t._uU(141,"20"),t.qZA(),t.TgZ(142,"option",56),t._uU(143,"30"),t.qZA(),t.TgZ(144,"option",57),t._uU(145,"50"),t.qZA(),t.TgZ(146,"option",58),t._uU(147,"100"),t.qZA(),t.TgZ(148,"option",59),t._uU(149,"All"),t.qZA()()()(),t.TgZ(150,"div",60)(151,"div",61)(152,"pagination-controls",62),t.NdJ("pageChange",function(u){return o.p=u}),t.qZA(),t.TgZ(153,"div",63),t._uU(154),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(31),a=t.MAs(38),u=t.MAs(47),g=t.MAs(55),_=t.MAs(64),v=t.MAs(73);t.xp6(11),t.Q6J("ngIf",o.isAdmin),t.xp6(5),t.Q6J("formGroup",o.stockAlertform),t.xp6(7),t.Q6J("formGroup",o.stockAlertform)("rangePicker",n)("min",o.minDate)("max",o.maxDate),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",o.supplierControl)("matAutocomplete",a),t.xp6(1),t.Q6J("displayWith",o.displayFn5),t.xp6(2),t.Q6J("ngForOf",t.lcZ(40,32,o.filteredSuppliers)),t.xp6(6),t.Q6J("formControl",o.productControl)("matAutocomplete",u),t.xp6(3),t.Q6J("ngIf",(null==o.productControl.value?null:o.productControl.value.length)>=1&&(null==o.productControl.value?null:o.productControl.value.length)>0),t.xp6(5),t.Q6J("formControl",o.categoryControl)("matAutocomplete",g),t.xp6(1),t.Q6J("displayWith",o.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(57,34,o.filteredCategory)),t.xp6(6),t.Q6J("formControl",o.subCategoryControl)("matAutocomplete",_),t.xp6(1),t.Q6J("displayWith",o.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(66,36,o.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",o.brandControl)("matAutocomplete",v),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(75,38,o.filteredBrand)),t.xp6(56),t.Q6J("ngIf",(null==o.stockAlertList?null:o.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.stockAlertList?null:o.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.stockAlertList?null:o.stockAlertList.length," of ",o.p," entries ")}},dependencies:[S.sg,S.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,M.LS,P.XC,P.ZL,L.ey,x.KE,x.R9,w.Nt,Z.nW,Z.wx,Z.zY,Z.By,Z._g,S.Ov,M._s,E.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let lt=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[b.Bz.forChild(nt),b.Bz]}),l})();var at=c(3056),st=c(87078),O=c(86323),T=c(92642),ct=c(95113),pt=c(64155),ut=c(6205),N=c(8468);const ht={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let dt=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[S.uU],imports:[S.ez,lt,N.I,d.u5,d.UX,P.Bb,x.lN,w.c,at.ZQ,st.T,Z.FA,x.lN,L.XK,ct.LD,pt.vQ,N.I,ut.X,O.p.pick(ht),O.p]}),l})()}}]);