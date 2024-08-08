"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6699],{53506:(B,P,o)=>{o.d(P,{x:()=>A});var S=o(92340),C=o(94650),d=o(80529);let A=(()=>{class _{constructor(a){this.http=a,this.apiUrl=`${S.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(a){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+a)}getPurchaseFY(a,n){console.log(n,"branch"),console.log(n.length,"branch");let u=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(a&&c.push(`financial_year=${a}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(a){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+a)}addPurchase(a){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",a)}getPurchaseById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`)}PurchaseIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,n)}updatePurchase(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,a)}deletePurchase(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`)}searchProduct(a){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+a)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(a,n){console.log(n,"branch"),console.log(n.length,"branch");let u=this.apiUrl+"/pv-api/material_inward/";const c=[];if(a&&c.push(`financial_year=${a}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(a){return this.http.post(this.apiUrl+"/pv-api/material_inward/",a)}getMaterialById(a){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`)}getMaterialByUserId(a){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${a}`)}MaterialIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,n)}updateMaterial(a,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,a)}deleteMaterial(a){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`)}getPurchaseBillFY(a,n){console.log(n,"branch"),console.log(n.length,"branch");let u=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(a&&c.push(`financial_year=${a}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(a){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",a)}getPurchaseBillById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`)}getPurchaseBillByUserId(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${a}`)}PurchaseBillIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,n)}updatePurchaseBill(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,a)}deletePurchaseBill(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`)}getDebitNotes(a,n){console.log(n,"branch"),console.log(n.length,"branch");let u=this.apiUrl+"/pv-api/debit_note/";const c=[];if(a&&c.push(`financial_year=${a}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}addDebitNotes(a){return this.http.post(this.apiUrl+"/pv-api/debit_note/",a)}getDebitNotesById(a){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`)}DebitNotesIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,n)}updateDebitNotes(a,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,a)}deleteDebitNotes(a){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`)}getSearchProductById(a){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${a}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(a,n){console.log(n,"branch"),console.log(n.length,"branch");let u=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(a&&c.push(`financial_year=${a}`),n&&n.length>0){const h=JSON.stringify(n);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(a){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",a)}getPurchaseReturnById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`)}PurchaseReturnIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,n)}updatePurchaseReturn(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,a)}deletePurchaseReturn(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`)}filterVariant(a,n,u,c){let h=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return a&&v.push(`supplier=${a}`),n&&v.push(`category=${n}`),u&&v.push(`subcategory=${u}`),c&&v.push(`search=${c}`),v.length>0&&(h+="?"+v.join("&")),this.http.get(h)}purchaseReturnStatusUpdate(a){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",a)}}return _.\u0275fac=function(a){return new(a||_)(C.LFG(d.eN))},_.\u0275prov=C.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},61119:(B,P,o)=>{o.r(P),o.d(P,{SaleSummaryModule:()=>ct});var S=o(36895),C=o(4392),d=o(24006),A=o(94327),_=o(96166),w=o(12983),a=o.n(w),n=o(68675),u=o(54004),c=o(78372),h=o(80574),v=o(4159),J=o.n(v),t=o(94650),F=o(97185),q=o(71071),E=o(53506),Y=o(42917),R=o(87719),k=o(43443),L=o(54333),D=o(47957),O=o(3238),Z=o(59549),$=o(44144),U=o(99602),Q=o(54040);function z(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"a",64)(1,"input",65,66),t.NdJ("change",function(r){const p=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(p.id,r.target.checked))}),t.qZA(),t.TgZ(3,"label",67),t.NdJ("click",function(r){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(r))}),t._uU(4),t.qZA()()}if(2&s){const e=g.$implicit,i=g.index,r=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",r.selectData.includes(e.id))("id","checkboxCat-"+i),t.xp6(2),t.Q6J("for","checkboxCat-"+i),t.xp6(1),t.Oqu(e.title)}}function H(s,g){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const V=function(){return{standalone:!0}};function j(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"div",57)(1,"div",58)(2,"button",59),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",60)(5,"li")(6,"input",61),t.NdJ("ngModelChange",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,z,5,5,"a",62),t.qZA()()(),t.TgZ(9,"div",63),t.YNc(10,H,2,1,"span",42),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,V)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function K(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",69),t.NdJ("onSelectionChange",function(){t.CHM(e);const r=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==r?null:r.id))}),t._uU(1),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function G(s,g){if(1&s&&(t.ynx(0),t.YNc(1,K,2,2,"mat-option",68),t.BQk()),2&s){const e=g.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}const T=function(s){return{"font-size":s}};function W(s,g){if(1&s&&(t.TgZ(0,"div",70)(1,"div",71)(2,"div",72)(3,"div",73)(4,"h4",74),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total"),t.qZA()()()(),t.TgZ(9,"div",71)(10,"div",75)(11,"div",73)(12,"h4",74),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Cash"),t.qZA()()()(),t.TgZ(17,"div",71)(18,"div",76)(19,"div",73)(20,"h4",74),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Bank"),t.qZA()()()(),t.TgZ(25,"div",71)(26,"div",77)(27,"div",73)(28,"h4",74),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Cash Percentage"),t.qZA()()()(),t.TgZ(33,"div",71)(34,"div",76)(35,"div",73)(36,"h4",74),t._uU(37),t.ALo(38,"number"),t.qZA(),t.TgZ(39,"h5"),t._uU(40,"Bank Percentage"),t.qZA()()()()()),2&s){const e=t.oxw();let i,r,l,p,m;t.xp6(4),t.Q6J("ngStyle",t.VKq(25,T,(null==e.saleSummary||null==e.saleSummary.total||null==(i=e.saleSummary.total.toString())?null:i.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,10,null==e.saleSummary?null:e.saleSummary.total,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(27,T,(null==e.saleSummary||null==e.saleSummary.total_cash||null==(r=e.saleSummary.total_cash.toString())?null:r.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,13,null==e.saleSummary?null:e.saleSummary.total_cash,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(29,T,(null==e.saleSummary||null==e.saleSummary.total_abnk||null==(l=e.saleSummary.total_abnk.toString())?null:l.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,16,null==e.saleSummary?null:e.saleSummary.total_abnk,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(31,T,(null==e.saleSummary||null==e.saleSummary.cash_percentage||null==(p=e.saleSummary.cash_percentage.toString())?null:p.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(30,19,null==e.saleSummary?null:e.saleSummary.cash_percentage,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(33,T,(null==e.saleSummary||null==e.saleSummary.bank_percentage||null==(m=e.saleSummary.bank_percentage.toString())?null:m.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(38,22,null==e.saleSummary?null:e.saleSummary.bank_percentage,"1.2-2"),"")}}function X(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const e=g.$implicit,i=g.index;t.xp6(2),t.Oqu(i+1+"."),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.receipt_type),t.xp6(2),t.Oqu(e.receipt_voucher_no),t.xp6(2),t.Oqu(e.note)}}const tt=function(s,g){return{itemsPerPage:s,currentPage:g}};function et(s,g){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,X,11,5,"tr",28),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.saleSummaryList,e.key,e.reverse),t.WLB(8,tt,e.itemsPerPage,e.p)))}}function at(s,g){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",78)(3,"p",79),t._uU(4,"Data not available"),t.qZA()()()())}const nt=[{path:"",component:(()=>{class s{constructor(e,i,r,l,p,m,y,x,f){this.router=e,this.fb=i,this.toastr=r,this.transactionService=l,this.purchaseService=p,this.cs=m,this.datepipe=y,this.reportService=x,this.commonService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.userControl=new d.NI,this.isAdmin=!1,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.loaderPdf=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let f=localStorage.getItem("financialYear");console.warn(JSON.parse(f));let b=JSON.parse(f);this.fyID=b}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:i}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=i,this.cs.userDetails$.subscribe(f=>{this.isAdmin="admin"==f.role}),this.getBranch(),this.cs.userDetails$.subscribe(f=>{this.userDetails=f,console.log(f),this.userName=f?.username});const r=new Date,m=(r.getMonth(),r.getFullYear(),new Date(r));m.setDate(r.getDate()-14);const y=this.formatDate(m),x=this.formatDate(r);this.saleSummaryform=new d.cw({start:new d.NI(y,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(x,this.commonService.dateRangeValidator(this.financialYear)),user_id:new d.NI,payment_type:new d.NI("")}),this.commonService.validateAndClearDates(this.saleSummaryform,this.minDate,this.maxDate),this.startDate=this.saleSummaryform.value?.start,this.endDate=this.saleSummaryform.value?.end,this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this.saleSummaryPaymentType=this.saleSummaryform.value?.payment_type,this.getSaleSummary(),this.filteredusers=this.userControl.valueChanges.pipe((0,n.O)(""),(0,u.U)(f=>this._filter1(f,!0))),this.userControl.valueChanges.subscribe(f=>{f.length>=3?this.getUser(f):(this.users=[],this.filteredusers=this.userControl.valueChanges.pipe((0,n.O)(""),(0,u.U)(b=>this._filter1(b,!0))))}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,n.O)(""),(0,u.U)(f=>{const b="string"==typeof f?f:f?.detail?.name;return b?this._filter(b):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter1(e,i){const r="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.users.filter(i?p=>p?.name?.toLowerCase().includes(r)||p.username.toLowerCase().includes(r):p=>!p?.name?.toLowerCase().includes(r)||p.username.toLowerCase().includes(r));return!i&&0===l.length&&l.push({name:"No data found"}),l}getUser(e){this.reportService.getUser(e).pipe((0,c.b)(2e3)).subscribe(i=>{this.users=i?.data,this.filteredusers=this.userControl.valueChanges.pipe((0,n.O)(""),(0,u.U)(r=>this._filter1(r,!0)))})}_filter(e){const i=e?e.toLowerCase():"";return console.log(i),this.suppliers.filter(r=>r?.detail?.name.toLowerCase().includes(i)||r?.detail?.company_name?.toLowerCase().includes(i)||r?.account?.account_id?.toLowerCase().includes(i))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getSaleSummary();else{const e=this.titlee.toLocaleLowerCase();this.saleSummaryList=this.saleSummaryList?.filter(i=>{const r=i?.user?.party_name.toLocaleLowerCase(),l=i?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!r.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,i,r){const l=(e-1)*i;return`Showing ${l+1}\u2013${Math.min(l+i-1,r-1)+1} of ${r} results`}getSaleSummary(){this.reportService.getSaleSummaryList(this.startDate,this.endDate,this.saleSummaryUserId,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.saleSummaryList=e?.data,this.saleSummary=e})}oncheckAccount(e){console.log(e),this.userName=e?.detail?.company_name,this.dataId=e?.id,this.saleSummaryform.patchValue({user_id:this.dataId}),console.warn(this.saleSummaryform.value),this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this?.getSaleSummary()}selectUser(e){this.dataId=e,this.saleSummaryform.patchValue({user_id:this.dataId}),console.warn(this.saleSummaryform.value),this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this?.getSaleSummary()}getSelectedSaleSummaryDates(){console.log(this.saleSummaryform.value);const e=this.datepipe.transform(this.saleSummaryform.value.start,"yyyy-MM-dd"),i=this.datepipe.transform(this.saleSummaryform.value.end,"yyyy-MM-dd");console.log(e),console.log(i),this.startDate=e,this.endDate=i,this?.getSaleSummary()}generatePDFAgain(){const e=new _.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Sale Summary Report",82,10),e.text(p,10,18),e.text(l,10,22),e.text("",10,25),a()(e,{head:[["#","Date","Reciept Method","Reciept Voucher No. ","Note"]],body:this.saleSummaryList.map((m,y)=>[y+1,m.date,m.receipt_type,m.receipt_voucher_no,m.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("saleSummary.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable");if(i){const r=i.querySelector("thead tr");if(r){const p=[];r.querySelectorAll("th").forEach(m=>{const y=m.textContent?.trim();y&&"Is Active"!==y&&"Action"!==y&&p.push(y)}),e.push(p)}i.querySelectorAll("tbody tr").forEach(p=>{const m=[];p.querySelectorAll("td").forEach(y=>{const x=y.textContent?.trim();x&&m.push(x)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=h.P6.aoa_to_sheet(e),r=h.P6.book_new();h.P6.book_append_sheet(r,i,"Sheet1");const l=h.cW(r,{bookType:"xlsx",type:"array"}),p=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(p,"saleSummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const r=document.querySelector(".titl");if(!r)return void console.error("Title element with class 'titl' not found.");const l=r.outerHTML,m=e.cloneNode(!0).outerHTML,x="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+m,f=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=x,window.print(),document.body.innerHTML=f}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&J()(e).then(i=>{this.loaderPdf=!1;const r=i.toDataURL("image/png"),l=new _.default("p","mm","a4"),p=l.internal.pageSize.getWidth(),m=l.internal.pageSize.getHeight();l.addImage(r,"JPEG",0,0,p,m),l.save("saleSummary.pdf")})}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.saleSummaryList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,i){if(i)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(l=>l==e);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(C.F0),t.Y36(d.qu),t.Y36(F._W),t.Y36(q.p),t.Y36(E.x),t.Y36(Y.J),t.Y36(S.uU),t.Y36(R.r),t.Y36(k.R))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-sale-summary"]],decls:98,vars:19,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search UserName","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],["colspan","10"],[1,"text-center"]],template:function(e,i){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sale Summary"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sale Summary"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,j,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return i.getSelectedSaleSummaryDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return i.getSelectedSaleSummaryDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"label"),t._uU(35,"User Name"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",null,27),t.YNc(39,G,2,1,"ng-container",28),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(45,"img",31),t.qZA()(),t.TgZ(46,"li")(47,"a",32),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(48,"img",33),t.qZA()(),t.TgZ(49,"li")(50,"a",34),t.NdJ("click",function(){return i.printTable()}),t._UZ(51,"img",35),t.qZA()()()()(),t.TgZ(52,"div",36),t.YNc(53,W,41,35,"div",37),t.TgZ(54,"div",38)(55,"table",39)(56,"thead")(57,"tr")(58,"th",40),t.NdJ("click",function(){return i.sort("id")}),t._uU(59,"#"),t._UZ(60,"i",41),t.qZA(),t.TgZ(61,"th",40),t.NdJ("click",function(){return i.sort("id")}),t._uU(62,"Date "),t._UZ(63,"i",41),t.qZA(),t.TgZ(64,"th",40),t.NdJ("click",function(){return i.sort("id")}),t._uU(65,"Reciept Method"),t._UZ(66,"i",41),t.qZA(),t.TgZ(67,"th",40),t.NdJ("click",function(){return i.sort("id")}),t._uU(68," Reciept Voucher No. "),t._UZ(69,"i",41),t.qZA(),t.TgZ(70,"th",40),t.NdJ("click",function(){return i.sort("id")}),t._uU(71,"Note"),t._UZ(72,"i",41),t.qZA()()(),t.YNc(73,et,4,11,"tbody",42),t.YNc(74,at,5,0,"tbody",42),t.qZA(),t.TgZ(75,"div",6)(76,"div",43)(77,"div",44),t._uU(78," Show per page "),t.TgZ(79,"select",45,46),t.NdJ("ngModelChange",function(p){return i.itemsPerPage=p})("change",function(){t.CHM(r);const p=t.MAs(80);return t.KtG(i.changePg(p.value))}),t.TgZ(81,"option",47),t._uU(82,"10"),t.qZA(),t.TgZ(83,"option",48),t._uU(84,"20"),t.qZA(),t.TgZ(85,"option",49),t._uU(86,"30"),t.qZA(),t.TgZ(87,"option",50),t._uU(88,"50"),t.qZA(),t.TgZ(89,"option",51),t._uU(90,"100"),t.qZA(),t.TgZ(91,"option",52),t._uU(92,"All"),t.qZA()()()(),t.TgZ(93,"div",53)(94,"div",54)(95,"pagination-controls",55),t.NdJ("pageChange",function(p){return i.p=p}),t.qZA(),t.TgZ(96,"div",56),t._uU(97),t.qZA()()()()()()()()()()}if(2&e){const r=t.MAs(31),l=t.MAs(38);t.xp6(11),t.Q6J("ngIf",i.isAdmin),t.xp6(5),t.Q6J("formGroup",i.saleSummaryform),t.xp6(7),t.Q6J("formGroup",i.saleSummaryform)("rangePicker",r)("min",i.minDate)("max",i.maxDate),t.xp6(6),t.Q6J("for",r),t.xp6(7),t.Q6J("formControl",i.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(40,17,i.filteredusers)),t.xp6(14),t.Q6J("ngIf",i.saleSummary),t.xp6(20),t.Q6J("ngIf",(null==i.saleSummaryList?null:i.saleSummaryList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.saleSummaryList?null:i.saleSummaryList.length)),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq(" Showing ",i.itemsPerPage," to ",null==i.saleSummaryList?null:i.saleSummaryList.length," of ",i.p," entries ")}},dependencies:[S.sg,S.O5,S.PC,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,L.LS,D.XC,D.ZL,O.ey,Z.KE,Z.R9,$.Nt,U.nW,U.wx,U.zY,U.By,U._g,S.Ov,S.JJ,L._s,Q.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})()}];let it=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[C.Bz.forChild(nt),C.Bz]}),s})();var rt=o(3056),lt=o(87078),N=o(86323),M=o(92642),st=o(95113),ot=o(64155),ut=o(6205),I=o(8468);const pt={User:M.n5m,UserCheck:M.uS3,FileText:M.acj,File:M.$BE};let ct=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[S.uU],imports:[S.ez,it,I.I,d.u5,d.UX,D.Bb,Z.lN,$.c,rt.ZQ,lt.T,U.FA,Z.lN,O.XK,st.LD,ot.vQ,I.I,ut.X,N.p.pick(pt),N.p]}),s})()}}]);