"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[235],{53506:(A,x,s)=>{s.d(x,{x:()=>y});var m=s(92340),O=s(94650),v=s(80529);let y=(()=>{class f{constructor(t){this.http=t,this.apiUrl=`${m.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let e=this.apiUrl+"/pv-api/purchase_order/";const u=[];if(t&&u.push(`financial_year=${t}`),i&&i.length>0){const c=JSON.stringify(i);console.log(c),console.log(c?.length),u.push(`branch=${c}`)}return u.length>0&&(e+="?"+u.join("&")),this.http.get(e)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,i)}updatePurchase(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let e=this.apiUrl+"/pv-api/material_inward/";const u=[];if(t&&u.push(`financial_year=${t}`),i&&i.length>0){const c=JSON.stringify(i);console.log(c),console.log(c?.length),u.push(`branch=${c}`)}return u.length>0&&(e+="?"+u.join("&")),this.http.get(e)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,i)}updateMaterial(t,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let e=this.apiUrl+"/pv-api/purchase_bill/";const u=[];if(t&&u.push(`financial_year=${t}`),i&&i.length>0){const c=JSON.stringify(i);console.log(c),console.log(c?.length),u.push(`branch=${c}`)}return u.length>0&&(e+="?"+u.join("&")),this.http.get(e)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,i)}updatePurchaseBill(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,i){console.log(i,"branch"),console.log(i.length,"branch");let e=this.apiUrl+"/pv-api/debit_note/";const u=[];if(t&&u.push(`financial_year=${t}`),i&&i.length>0){const c=JSON.stringify(i);console.log(c),console.log(c?.length),u.push(`branch=${c}`)}return u.length>0&&(e+="?"+u.join("&")),this.http.get(e)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,i)}updateDebitNotes(t,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,i){console.log(i,"branch"),console.log(i.length,"branch");let e=this.apiUrl+"/pv-api/purchase_return/";const u=[];if(t&&u.push(`financial_year=${t}`),i&&i.length>0){const c=JSON.stringify(i);console.log(c),console.log(c?.length),u.push(`branch=${c}`)}return u.length>0&&(e+="?"+u.join("&")),this.http.get(e)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,i)}updatePurchaseReturn(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,i,e,u){let c=this.apiUrl+"/pv-api/purchase_product_filter/";const _=[];return t&&_.push(`supplier=${t}`),i&&_.push(`category=${i}`),e&&_.push(`subcategory=${e}`),u&&_.push(`search=${u}`),_.length>0&&(c+="?"+_.join("&")),this.http.get(c)}}return f.\u0275fac=function(t){return new(t||f)(O.LFG(v.eN))},f.\u0275prov=O.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},10235:(A,x,s)=>{s.r(x),s.d(x,{PurchaseOverdueModule:()=>te});var m=s(36895),O=s(89299),v=s(24006),y=s(94327),f=s(96166),D=s(12983),t=s.n(D),i=s(80574),e=s(94650),u=s(97185),c=s(71071),_=s(53506),C=s(42917),M=s(87719),U=s(54333),$=s(54040);function S(a,d){if(1&a){const r=e.EpF();e.TgZ(0,"a",51)(1,"input",52,53),e.NdJ("change",function(o){const h=e.CHM(r).$implicit,g=e.oxw(2);return e.KtG(g.SelectedBranch(h.id,o.target.checked))}),e.qZA(),e.TgZ(3,"label",54),e.NdJ("click",function(o){e.CHM(r);const l=e.oxw(2);return e.KtG(l.onLabelClick(o))}),e._uU(4),e.qZA()()}if(2&a){const r=d.$implicit,n=d.index,o=e.oxw(2);e.xp6(1),e.Q6J("value",r.id)("checked",o.selectData.includes(r.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(r.title)}}function B(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const r=e.oxw(2);e.xp6(1),e.Oqu(r.selectData.length+" Selected")}}const L=function(){return{standalone:!0}};function N(a,d){if(1&a){const r=e.EpF();e.TgZ(0,"div",44)(1,"div",45)(2,"button",46),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",47)(5,"li")(6,"input",48),e.NdJ("ngModelChange",function(o){e.CHM(r);const l=e.oxw();return e.KtG(l.searchBranch=o)})("ngModelChange",function(){e.CHM(r);const o=e.oxw();return e.KtG(o.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,S,5,5,"a",49),e.qZA()()(),e.TgZ(9,"div",50),e.YNc(10,B,2,1,"span",29),e.qZA()()}if(2&a){const r=e.oxw();e.xp6(6),e.Q6J("ngModel",r.searchBranch)("ngModelOptions",e.DdM(4,L)),e.xp6(2),e.Q6J("ngForOf",r.filteredBranchList),e.xp6(2),e.Q6J("ngIf",r.selectData.length>0)}}const w=function(a){return{"font-size":a}};function I(a,d){if(1&a&&(e.TgZ(0,"div",55)(1,"div",56)(2,"div",57)(3,"div",58)(4,"h4",59),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Total Overdue Amount"),e.qZA()()()()()),2&a){const r=e.oxw();let n;e.xp6(4),e.Q6J("ngStyle",e.VKq(5,w,(null==r.purchaseOverDue||null==r.purchaseOverDue.Total_Overdue_Amount||null==(n=r.purchaseOverDue.Total_Overdue_Amount.toString())?null:n.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(6,2,null==r.purchaseOverDue?null:r.purchaseOverDue.Total_Overdue_Amount,"1.2-2"),"")}}function J(a,d){if(1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA()()),2&a){const r=d.$implicit,n=d.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(e.xi3(5,6,r.supplier_bill_date,"shortDate")),e.xp6(3),e.Oqu(e.xi3(8,9,r.due_date,"shortDate")),e.xp6(3),e.Oqu(r.supplier_bill_no),e.xp6(2),e.Oqu(r.pending_amount),e.xp6(2),e.Oqu(r.over_due_days)}}const F=function(a,d){return{itemsPerPage:a,currentPage:d}};function q(a,d){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,J,15,12,"tr",60),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,r.purchaseOverDueList,r.key,r.reverse),e.WLB(8,F,r.itemsPerPage,r.p)))}}function E(a,d){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),e._uU(4,"Data not available"),e.qZA()()()())}const Y=[{path:"",component:(()=>{class a{constructor(r,n,o,l,h,g,p,P){this.router=r,this.fb=n,this.toastr=o,this.transactionService=l,this.purchaseService=h,this.cs=g,this.datepipe=p,this.reportService=P,this.loader=!0,this.p=1,this.itemsPerPage=10,this.isAdmin=!1,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let p=localStorage.getItem("financialYear");console.warn(JSON.parse(p));let P=JSON.parse(p);this.fyID=P}this.cs.userDetails$.subscribe(p=>{this.isAdmin="admin"==p.role,this.getBranch()}),this.cs.userDetails$.subscribe(p=>{this.userDetails=p,console.log(p),this.userName=p?.username});const r=new Date,l=(r.getMonth(),r.getFullYear(),new Date(r));l.setDate(r.getDate()-14);const h=this.formatDate(l);this.formatDate(r),this.purchaseOverDueform=new v.cw({date:new v.NI(h)}),this.date=this.purchaseOverDueform.value.date,this.getPurchaseOverDue()}formatDate(r){return this.datepipe.transform(r,"yyyy-MM-dd")||""}sort(r){this.key=r,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(r,n,o){const l=(r-1)*n;return`Showing ${l+1}\u2013${Math.min(l+n-1,o-1)+1} of ${o} results`}getPurchaseOverDue(){this.reportService.getPurchaseOverDue(this.date,this.fyID,this.selectData).subscribe(r=>{console.log(r?.successsalebill),this.purchaseOverDueList=r?.salebill,this.purchaseOverDue=r,console.log(this.purchaseOverDue?.Total_Overdue_Amount),console.log(this.purchaseOverDueList)})}getSelectedpurchaseOverDueDates(){console.log(this.purchaseOverDueform.value);const r=this.datepipe.transform(this.purchaseOverDueform.value.date,"yyyy-MM-dd");console.log(r),this.date=r,this.getPurchaseOverDue()}generatePDFAgain(){const r=new f.default,l=`Date Range From: ${this.date}`,h=`User: ${this.userName}`;r.setFontSize(12),r.setTextColor(33,43,54),r.text("PV",86,5),r.text("Purchase Overdue Report",82,10),r.text(h,10,18),r.text(l,10,22),r.text("",10,25),t()(r,{head:[["#","SupplierBill Date","Due Date","Supplier Bill No.","Pending Amount","Over Due Days"]],body:this.purchaseOverDueList.map((g,p)=>[p+1,this.formatDate(g.supplier_bill_date),this.formatDate(g.due_date),g.supplier_bill_no,g.pending_amount,g.over_due_days]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),r.save("Purchase_Overdue .pdf")}getVisibleDataFromTable(){const r=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const h=[];o.querySelectorAll("th").forEach(g=>{const p=g.textContent?.trim();p&&"Is Active"!==p&&"Action"!==p&&h.push(p)}),r.push(h)}n.querySelectorAll("tbody tr").forEach(h=>{const g=[];h.querySelectorAll("td").forEach(p=>{const P=p.textContent?.trim();P&&g.push(P)}),r.push(g)})}return r}exportToExcel(){const r=this.getVisibleDataFromTable(),n=i.P6.aoa_to_sheet(r),o=i.P6.book_new();i.P6.book_append_sheet(o,n,"Sheet1");const l=i.cW(o,{bookType:"xlsx",type:"array"}),h=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,y.saveAs)(h,"purchaseOverdue.xlsx")}printTable(){const r=document.getElementById("mytable");if(!r)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const l=o.outerHTML,g=r.cloneNode(!0).outerHTML,P="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+g,re=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=P,window.print(),document.body.innerHTML=re}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.purchaseOverDueList?.length)}getBranch(){this.reportService.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,n){if(n)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(l=>l==r);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(O.F0),e.Y36(v.qu),e.Y36(u._W),e.Y36(c.p),e.Y36(_.x),e.Y36(C.J),e.Y36(m.uU),e.Y36(M.r))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-purchase-overdue"]],decls:82,vars:9,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-12","col-sm-6","col-12"],[1,"search-input","mx-3"],["type","date","formControlName","date",3,"change"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-3","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(r,n){if(1&r){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Purchase OverDue"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Purchase OverDue"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,N,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"input",16),e.NdJ("change",function(){return n.getSelectedpurchaseOverDueDates()}),e.qZA()()()()()(),e.TgZ(23,"div",17)(24,"ul")(25,"li")(26,"a",18),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(27,"img",19),e.qZA()(),e.TgZ(28,"li")(29,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(30,"img",21),e.qZA()(),e.TgZ(31,"li")(32,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(33,"img",23),e.qZA()()()()(),e.YNc(34,I,9,7,"div",24),e.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(40,"#"),e._UZ(41,"i",28),e.qZA(),e.TgZ(42,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(43," Supplier Bill Date "),e._UZ(44,"i",28),e.qZA(),e.TgZ(45,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(46," Due Date "),e._UZ(47,"i",28),e.qZA(),e.TgZ(48,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(49,"Supplier Bill No."),e._UZ(50,"i",28),e.qZA(),e.TgZ(51,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(52," Pending Amount "),e._UZ(53,"i",28),e.qZA(),e.TgZ(54,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(55,"Over Due Days"),e._UZ(56,"i",28),e.qZA()()(),e.YNc(57,q,4,11,"tbody",29),e.YNc(58,E,5,0,"tbody",29),e.qZA(),e.TgZ(59,"div",6)(60,"div",30)(61,"div",31),e._uU(62," Show per page "),e.TgZ(63,"select",32,33),e.NdJ("ngModelChange",function(h){return n.itemsPerPage=h})("change",function(){e.CHM(o);const h=e.MAs(64);return e.KtG(n.changePg(h.value))}),e.TgZ(65,"option",34),e._uU(66,"10"),e.qZA(),e.TgZ(67,"option",35),e._uU(68,"20"),e.qZA(),e.TgZ(69,"option",36),e._uU(70,"30"),e.qZA(),e.TgZ(71,"option",37),e._uU(72,"50"),e.qZA(),e.TgZ(73,"option",38),e._uU(74,"100"),e.qZA(),e.TgZ(75,"option",39),e._uU(76,"All"),e.qZA()()()(),e.TgZ(77,"div",40)(78,"div",41)(79,"pagination-controls",42),e.NdJ("pageChange",function(h){return n.p=h}),e.qZA(),e.TgZ(80,"div",43),e._uU(81),e.qZA()()()()()()()()()}2&r&&(e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.purchaseOverDueform),e.xp6(18),e.Q6J("ngIf",n.purchaseOverDue),e.xp6(23),e.Q6J("ngIf",(null==n.purchaseOverDueList?null:n.purchaseOverDueList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.purchaseOverDueList?null:n.purchaseOverDueList.length)),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseOverDueList?null:n.purchaseOverDueList.length," of ",n.p," entries "))},dependencies:[m.sg,m.O5,m.PC,v._Y,v.YN,v.Kr,v.Fj,v.EJ,v.JJ,v.JL,v.On,v.sg,v.u,U.LS,m.JJ,m.uU,U._s,$.T],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})()}];let R=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[O.Bz.forChild(Y),O.Bz]}),a})();var H=s(47957),b=s(59549),j=s(44144),k=s(3056),Q=s(87078),Z=s(86323),T=s(92642),K=s(99602),z=s(3238),V=s(95113),G=s(64155),W=s(6205),X=s(8468);const ee={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let te=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[m.uU],imports:[m.ez,R,v.u5,v.UX,H.Bb,b.lN,j.c,k.ZQ,Q.T,K.FA,b.lN,z.XK,V.LD,G.vQ,X.I,W.X,Z.p.pick(ee),Z.p]}),a})()}}]);