"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1222],{53506:(Z,b,o)=>{o.d(b,{x:()=>P});var v=o(92340),x=o(94650),g=o(80529);let P=(()=>{class _{constructor(t){this.http=t,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(t){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+t)}getPurchaseFY(t,n){console.log(n,"branch"),console.log(n.length,"branch");let e=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(t&&c.push(`financial_year=${t}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(e+="?"+c.join("&")),this.http.get(e)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,n)}updatePurchase(t,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,n){console.log(n,"branch"),console.log(n.length,"branch");let e=this.apiUrl+"/pv-api/material_inward/";const c=[];if(t&&c.push(`financial_year=${t}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(e+="?"+c.join("&")),this.http.get(e)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getMaterialByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${t}`)}MaterialIsActive(t,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,n)}updateMaterial(t,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,n){console.log(n,"branch"),console.log(n.length,"branch");let e=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(t&&c.push(`financial_year=${t}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(e+="?"+c.join("&")),this.http.get(e)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getPurchaseBillByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${t}`)}PurchaseBillIsActive(t,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,n)}updatePurchaseBill(t,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,n){console.log(n,"branch"),console.log(n.length,"branch");let e=this.apiUrl+"/pv-api/debit_note/";const c=[];if(t&&c.push(`financial_year=${t}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(e+="?"+c.join("&")),this.http.get(e)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,n)}updateDebitNotes(t,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,n){console.log(n,"branch"),console.log(n.length,"branch");let e=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(t&&c.push(`financial_year=${t}`),n&&n.length>0){const u=JSON.stringify(n);console.log(u),console.log(u?.length),c.push(`branch=${u}`)}return c.length>0&&(e+="?"+c.join("&")),this.http.get(e)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,n)}updatePurchaseReturn(t,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,n,e,c){let u=this.apiUrl+"/pv-api/purchase_product_filter/";const O=[];return t&&O.push(`supplier=${t}`),n&&O.push(`category=${n}`),e&&O.push(`subcategory=${e}`),c&&O.push(`search=${c}`),O.length>0&&(u+="?"+O.join("&")),this.http.get(u)}}return _.\u0275fac=function(t){return new(t||_)(x.LFG(g.eN))},_.\u0275prov=x.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},31222:(Z,b,o)=>{o.r(b),o.d(b,{SaleOverdueModule:()=>ne});var v=o(36895),x=o(4392),g=o(24006),P=o(94327),_=o(96166),C=o(12983),t=o.n(C),n=o(80574),e=o(94650),c=o(97185),u=o(71071),O=o(53506),A=o(42917),$=o(87719),w=o(43443),T=o(54333),B=o(54040);function N(a,d){if(1&a){const i=e.EpF();e.TgZ(0,"a",51)(1,"input",52,53),e.NdJ("change",function(s){const p=e.CHM(i).$implicit,h=e.oxw(2);return e.KtG(h.SelectedBranch(p.id,s.target.checked))}),e.qZA(),e.TgZ(3,"label",54),e.NdJ("click",function(s){e.CHM(i);const l=e.oxw(2);return e.KtG(l.onLabelClick(s))}),e._uU(4),e.qZA()()}if(2&a){const i=d.$implicit,r=d.index,s=e.oxw(2);e.xp6(1),e.Q6J("value",i.id)("checked",s.selectData.includes(i.id))("id","checkboxCat-"+r),e.xp6(2),e.Q6J("for","checkboxCat-"+r),e.xp6(1),e.Oqu(i.title)}}function I(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const i=e.oxw(2);e.xp6(1),e.Oqu(i.selectData.length+" Selected")}}const L=function(){return{standalone:!0}};function J(a,d){if(1&a){const i=e.EpF();e.TgZ(0,"div",44)(1,"div",45)(2,"button",46),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",47)(5,"li")(6,"input",48),e.NdJ("ngModelChange",function(s){e.CHM(i);const l=e.oxw();return e.KtG(l.searchBranch=s)})("ngModelChange",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,N,5,5,"a",49),e.qZA()()(),e.TgZ(9,"div",50),e.YNc(10,I,2,1,"span",29),e.qZA()()}if(2&a){const i=e.oxw();e.xp6(6),e.Q6J("ngModel",i.searchBranch)("ngModelOptions",e.DdM(4,L)),e.xp6(2),e.Q6J("ngForOf",i.filteredBranchList),e.xp6(2),e.Q6J("ngIf",i.selectData.length>0)}}const F=function(a){return{"font-size":a}};function Y(a,d){if(1&a&&(e.TgZ(0,"div",55)(1,"div",56)(2,"div",57)(3,"div",58)(4,"h4",59),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Total Overdue Amount"),e.qZA()()()()()),2&a){const i=e.oxw();let r;e.xp6(4),e.Q6J("ngStyle",e.VKq(5,F,(null==i.saleOverDue||null==i.saleOverDue.Total_Overdue_Amount||null==(r=i.saleOverDue.Total_Overdue_Amount.toString())?null:r.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(6,2,null==i.saleOverDue?null:i.saleOverDue.Total_Overdue_Amount,"1.2-2"),"")}}function q(a,d){if(1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&a){const i=d.$implicit,r=d.index;e.xp6(2),e.Oqu(r+1+"."),e.xp6(2),e.Oqu(i.bill_date),e.xp6(2),e.Oqu(i.due_date),e.xp6(2),e.Oqu(i.customer_bill_no),e.xp6(2),e.Oqu(i.pending_amount),e.xp6(2),e.Oqu(i.over_due_days)}}const E=function(a,d){return{itemsPerPage:a,currentPage:d}};function R(a,d){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,q,13,6,"tr",60),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.saleOverDueList,i.key,i.reverse),e.WLB(8,E,i.itemsPerPage,i.p)))}}function k(a,d){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),e._uU(4,"Data not available"),e.qZA()()()())}const H=[{path:"",component:(()=>{class a{constructor(i,r,s,l,p,h,f,m,y){this.router=i,this.fb=r,this.toastr=s,this.transactionService=l,this.purchaseService=p,this.cs=h,this.datepipe=f,this.reportService=m,this.commonService=y,this.loader=!0,this.p=1,this.itemsPerPage=10,this.minDate="",this.maxDate="",this.isAdmin=!1,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let y=JSON.parse(m);this.fyID=y}this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const i=new Date,l=(i.getMonth(),i.getFullYear(),new Date(i));l.setDate(i.getDate()-14);const p=this.formatDate(l);this.formatDate(i),this.saleOverDueform=new g.cw({date:new g.NI(p)}),this.date=this.saleOverDueform.value.date,this.getsaleOverDue();const f=localStorage.getItem("financialYear");this.dateValidation(f)}dateValidation(i){const r=this.saleOverDueform.get("date"),{formattedMinDate:s,formattedMaxDate:l}=this.commonService.setMinMaxDates(r,i);this.minDate=s,this.maxDate=l}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}sort(i){this.key=i,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,r,s){const l=(i-1)*r;return`Showing ${l+1}\u2013${Math.min(l+r-1,s-1)+1} of ${s} results`}getsaleOverDue(){this.reportService.getSaleOverDue(this.date,this.fyID,this.selectData).subscribe(i=>{console.log(i?.salebill),this.saleOverDueList=i?.salebill,this.saleOverDue=i,console.log(this.saleOverDue?.Total_Overdue_Amount)})}getSelectedSaleOverDueDates(){console.log(this.saleOverDueform.value);const i=this.datepipe.transform(this.saleOverDueform.value.date,"yyyy-MM-dd");console.log(i),this.date=i,this.getsaleOverDue()}generatePDF(){const i=new _.default,l=`Date Range From: ${this.date}`,p=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Sale Overdue Report",82,10),i.text(p,10,18),i.text(l,10,22),i.text("",10,25),t()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("SaleOverdue.pdf")}generatePDFAgain(){const i=new _.default,l=`Date Range From: ${this.date}`,p=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Sale Overdue Report",82,10),i.text(p,10,18),i.text(l,10,22),i.text("",10,25),t()(i,{head:[["#","Bill Date","Due Date","Customer Bill No.","Pending Amount","Over Due Days"]],body:this.saleOverDueList.map((h,f)=>[f+1,h.bill_date,h.due_date,h.customer_bill_no,h.pending_amount,h.over_due_days]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Sale_Overdue .pdf")}getVisibleDataFromTable(){const i=[],r=document.getElementById("mytable");if(r){const s=r.querySelector("thead tr");if(s){const p=[];s.querySelectorAll("th").forEach(h=>{const f=h.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&p.push(f)}),i.push(p)}r.querySelectorAll("tbody tr").forEach(p=>{const h=[];p.querySelectorAll("td").forEach(f=>{const m=f.textContent?.trim();m&&h.push(m)}),i.push(h)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),r=n.P6.aoa_to_sheet(i),s=n.P6.book_new();n.P6.book_append_sheet(s,r,"Sheet1");const l=n.cW(s,{bookType:"xlsx",type:"array"}),p=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,P.saveAs)(p,"SaleOverdue.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const l=s.outerHTML,h=i.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+h,y=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=m,window.print(),document.body.innerHTML=y}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.saleOverDueList?.length)}getBranch(){this.reportService.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,r){if(r)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const s=this.selectData.findIndex(l=>l==i);console.log(s),-1!==s&&this.selectData.splice(s,1),this.ngOnInit(),console.log(this.selectData)}}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(x.F0),e.Y36(g.qu),e.Y36(c._W),e.Y36(u.p),e.Y36(O.x),e.Y36(A.J),e.Y36(v.uU),e.Y36($.r),e.Y36(w.R))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sale-overdue"]],decls:82,vars:11,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-12","col-sm-6","col-12"],[1,"search-input","mx-3"],["type","date","formControlName","date",3,"change"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-3","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,r){if(1&i){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Sale OverDue"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Sale OverDue"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,J,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"input",16),e.NdJ("change",function(){return r.getSelectedSaleOverDueDates()}),e.qZA()()()()()(),e.TgZ(23,"div",17)(24,"ul")(25,"li")(26,"a",18),e.NdJ("click",function(){return r.generatePDFAgain()}),e._UZ(27,"img",19),e.qZA()(),e.TgZ(28,"li")(29,"a",20),e.NdJ("click",function(){return r.exportToExcel()}),e._UZ(30,"img",21),e.qZA()(),e.TgZ(31,"li")(32,"a",22),e.NdJ("click",function(){return r.printTable()}),e._UZ(33,"img",23),e.qZA()()()()(),e.YNc(34,Y,9,7,"div",24),e.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(40,"#"),e._UZ(41,"i",28),e.qZA(),e.TgZ(42,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(43,"Bill Date "),e._UZ(44,"i",28),e.qZA(),e.TgZ(45,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(46," Due Date "),e._UZ(47,"i",28),e.qZA(),e.TgZ(48,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(49,"Customer Bill No."),e._UZ(50,"i",28),e.qZA(),e.TgZ(51,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(52," Pending Amount "),e._UZ(53,"i",28),e.qZA(),e.TgZ(54,"th",27),e.NdJ("click",function(){return r.sort("id")}),e._uU(55,"Over Due Days"),e._UZ(56,"i",28),e.qZA()()(),e.YNc(57,R,4,11,"tbody",29),e.YNc(58,k,5,0,"tbody",29),e.qZA(),e.TgZ(59,"div",6)(60,"div",30)(61,"div",31),e._uU(62," Show per page "),e.TgZ(63,"select",32,33),e.NdJ("ngModelChange",function(p){return r.itemsPerPage=p})("change",function(){e.CHM(s);const p=e.MAs(64);return e.KtG(r.changePg(p.value))}),e.TgZ(65,"option",34),e._uU(66,"10"),e.qZA(),e.TgZ(67,"option",35),e._uU(68,"20"),e.qZA(),e.TgZ(69,"option",36),e._uU(70,"30"),e.qZA(),e.TgZ(71,"option",37),e._uU(72,"50"),e.qZA(),e.TgZ(73,"option",38),e._uU(74,"100"),e.qZA(),e.TgZ(75,"option",39),e._uU(76,"All"),e.qZA()()()(),e.TgZ(77,"div",40)(78,"div",41)(79,"pagination-controls",42),e.NdJ("pageChange",function(p){return r.p=p}),e.qZA(),e.TgZ(80,"div",43),e._uU(81),e.qZA()()()()()()()()()}2&i&&(e.xp6(11),e.Q6J("ngIf",r.isAdmin),e.xp6(5),e.Q6J("formGroup",r.saleOverDueform),e.xp6(6),e.uIk("min",r.minDate)("max",r.maxDate),e.xp6(12),e.Q6J("ngIf",r.saleOverDue),e.xp6(23),e.Q6J("ngIf",(null==r.saleOverDueList?null:r.saleOverDueList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==r.saleOverDueList?null:r.saleOverDueList.length)),e.xp6(5),e.Q6J("ngModel",r.itemsPerPage),e.xp6(18),e.lnq(" Showing ",r.itemsPerPage," to ",null==r.saleOverDueList?null:r.saleOverDueList.length," of ",r.p," entries "))},dependencies:[v.sg,v.O5,v.PC,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.sg,g.u,T.LS,v.JJ,T._s,B.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})()}];let j=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[x.Bz.forChild(H),x.Bz]}),a})();var Q=o(47957),D=o(59549),z=o(44144),V=o(3056),K=o(87078),M=o(86323),S=o(92642),G=o(99602),W=o(3238),X=o(95113),ee=o(64155),te=o(6205),U=o(8468);const ie={User:S.n5m,UserCheck:S.uS3,FileText:S.acj,File:S.$BE};let ne=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[v.uU],imports:[v.ez,j,U.I,g.u5,g.UX,Q.Bb,D.lN,z.c,V.ZQ,K.T,G.FA,D.lN,W.XK,X.LD,ee.vQ,U.I,te.X,M.p.pick(ie),M.p]}),a})()}}]);