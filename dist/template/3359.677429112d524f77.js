"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3359],{3359:(k,C,r)=>{r.r(C),r.d(C,{TaxModule:()=>Me});var m=r(36895),h=r(89299),c=r(24006),U=r(35226),u=r.n(U),A=r(96166),g=r(12983),y=r.n(g),_=r(80574),v=r(94327),e=r(94650),f=r(80927),x=r(97185),T=r(42917),F=r(73162),b=r(54333),P=r(90455),I=r(47957),Q=r(3238),q=r(59549),J=r(44144),O=r(54040);function Y(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",85),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.openaddForm())}),e._UZ(1,"img",86),e._uU(2,"Add Tax "),e.qZA()}}function L(n,l){if(1&n&&(e.TgZ(0,"div",83),e.YNc(1,Y,3,0,"a",84),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isAdd)}}function B(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"th",40),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sort("id"))}),e._uU(1,"Action "),e._UZ(2,"i",44),e.qZA()}}function R(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",97),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.editForm(o.id))}),e._UZ(1,"img",98),e.qZA()}}function G(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",99),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),a=o.index,s=o.$implicit,d=e.oxw(2);return e.KtG(d.confirmText(a,s.id))}),e._UZ(1,"img",100),e.qZA()}}function H(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",88)(3,"input",89),e.NdJ("ngModelChange",function(o){const s=e.CHM(t).index,d=e.oxw(2);return e.KtG(d.selectedRows[s]=o)}),e.qZA(),e._UZ(4,"span",43),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",90)(8,"a",91),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"mat-slide-toggle",92),e.NdJ("click",function(){const o=e.CHM(t),a=o.$implicit,s=o.index,d=e.oxw(2);return e.KtG(a.is_active?d.deActivate(s,a.id):d.Active(s,a.id))})("ngModelChange",function(o){const s=e.CHM(t).$implicit;return e.KtG(s.is_active=o)}),e.qZA()(),e.TgZ(14,"td")(15,"a",93),e._UZ(16,"img",94),e.qZA(),e.YNc(17,R,2,0,"a",95),e.YNc(18,G,2,0,"a",96),e.qZA()()}if(2&n){const t=l.$implicit,i=l.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[i]),e.xp6(3),e.Oqu(i+1),e.xp6(2),e.MGl("routerLink","//product/tax-details/",null==t?null:t.id,""),e.xp6(1),e.Oqu(t.title),e.xp6(2),e.Oqu(t.tax_percentage),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//product/tax-details/",null==t?null:t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const K=function(n,l){return{itemsPerPage:n,currentPage:l}};function z(n,l){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,H,19,9,"tr",87),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,K,t.itemsPerPage,t.p)))}}function j(n,l){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",101)(3,"p",102),e._uU(4,"Data not available"),e.qZA()()()())}function V(n,l){1&n&&e._UZ(0,"mat-progress-bar",103)}function W(n,l){1&n&&(e.TgZ(0,"div")(1,"h4"),e._uU(2," Tax "),e.qZA(),e.TgZ(3,"h6"),e._uU(4,"Create new Tax "),e.qZA()())}function $(n,l){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,W,5,0,"div",46),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isAdd)}}function X(n,l){1&n&&(e.TgZ(0,"div")(1,"h4"),e._uU(2," Update Tax "),e.qZA()())}function ee(n,l){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,X,3,0,"div",46),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isEdit)}}function te(n,l){if(1&n&&(e.TgZ(0,"mat-option",119),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",null==t?null:t.title)("disabled",!0),e.xp6(1),e.Oqu(null==t?null:t.title)}}function ie(n,l){if(1&n&&(e.ynx(0),e.YNc(1,te,2,3,"mat-option",118),e.BQk()),2&n){const t=e.oxw(4);e.xp6(1),e.Q6J("ngForOf",t.taxList)}}function ne(n,l){1&n&&(e.TgZ(0,"mat-option",120),e._uU(1,"Please Enter 3 or more characters"),e.qZA())}function oe(n,l){1&n&&(e.TgZ(0,"mat-error",121),e._uU(1,"Tax name is required"),e.qZA())}function ae(n,l){1&n&&(e.TgZ(0,"span",122),e._uU(1,"Enter Tax Percentage "),e.qZA())}function le(n,l){1&n&&(e.TgZ(0,"button",123),e._uU(1,"Submit"),e.qZA())}function se(n,l){1&n&&(e.TgZ(0,"button",124),e._UZ(1,"span",125),e._uU(2," Submit"),e.qZA())}const M=function(n){return{"is-invalid":n}};function re(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"form",107),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.submit())}),e.TgZ(2,"div",0)(3,"div",108)(4,"div",32)(5,"label"),e._uU(6,"Tax Name*"),e.qZA(),e.TgZ(7,"mat-form-field",109),e._UZ(8,"input",110),e.TgZ(9,"mat-autocomplete",null,111),e.YNc(11,ie,2,1,"ng-container",46),e.ynx(12),e.YNc(13,ne,2,0,"mat-option",112),e.BQk(),e.qZA(),e.YNc(14,oe,2,0,"mat-error",113),e.qZA()()(),e.TgZ(15,"div",108)(16,"div",32)(17,"label"),e._uU(18,"Tax Percentage %*"),e.qZA(),e._UZ(19,"input",114),e.YNc(20,ae,2,0,"span",78),e.qZA()(),e.TgZ(21,"div",115),e.YNc(22,le,2,0,"button",116),e.YNc(23,se,3,0,"button",117),e.qZA()()()()}if(2&n){const t=e.MAs(10),i=e.oxw(3);e.xp6(1),e.Q6J("formGroup",i.taxForm),e.xp6(7),e.Q6J("formControl",i.taxCtrl)("matAutocomplete",t)("ngClass",e.VKq(11,M,i.taxCtrl.touched&&i.taxCtrl.invalid)),e.xp6(3),e.Q6J("ngIf",(null==i.taxCtrl.value?null:i.taxCtrl.value.length)>2),e.xp6(2),e.Q6J("ngIf",(null==i.taxCtrl.value?null:i.taxCtrl.value.length)<3),e.xp6(1),e.Q6J("ngIf",i.taxCtrl.touched&&i.taxCtrl.invalid),e.xp6(5),e.Q6J("ngClass",e.VKq(13,M,i.f.tax_percentage.touched&&i.f.tax_percentage.invalid)),e.xp6(1),e.Q6J("ngIf",i.tax_percentage&&i.tax_percentage.invalid&&i.tax_percentage.touched),e.xp6(2),e.Q6J("ngIf",!i.loaders),e.xp6(1),e.Q6J("ngIf",i.loaders)}}function ce(n,l){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,re,24,15,"div",106),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.addForm)}}function de(n,l){1&n&&(e.TgZ(0,"span",122),e._uU(1,"Enter Title "),e.qZA())}function _e(n,l){1&n&&(e.TgZ(0,"span",122),e._uU(1,"Enter Tax Percentage "),e.qZA())}function me(n,l){1&n&&(e.TgZ(0,"button",123),e._uU(1,"Submit"),e.qZA())}function pe(n,l){1&n&&(e.TgZ(0,"button",124),e._UZ(1,"span",125),e._uU(2," Submit"),e.qZA())}function ue(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"form",107),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.update())}),e.TgZ(2,"div",0)(3,"div",108)(4,"div",32)(5,"label"),e._uU(6,"Title*"),e.qZA(),e._UZ(7,"input",126),e.YNc(8,de,2,0,"span",78),e.qZA()(),e.TgZ(9,"div",108)(10,"div",32)(11,"label"),e._uU(12,"Tax Percentage*"),e.qZA(),e._UZ(13,"input",127),e.YNc(14,_e,2,0,"span",78),e.qZA()(),e.TgZ(15,"div",115),e.YNc(16,me,2,0,"button",116),e.YNc(17,pe,3,0,"button",117),e.qZA()()()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("formGroup",t.taxForm),e.xp6(6),e.Q6J("ngClass",e.VKq(7,M,t.f.title.touched&&t.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(9,M,t.f.tax_percentage.touched&&t.f.tax_percentage.invalid)),e.xp6(1),e.Q6J("ngIf",t.tax_percentage&&t.tax_percentage.invalid&&t.tax_percentage.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders)}}function ge(n,l){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ue,18,11,"div",106),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.addForm)}}function fe(n,l){if(1&n&&(e.TgZ(0,"div",104)(1,"div",2),e.YNc(2,$,2,1,"div",105),e.YNc(3,ee,2,1,"div",105),e.qZA(),e.TgZ(4,"div",6),e.YNc(5,ce,2,1,"div",46),e.YNc(6,ge,2,1,"div",46),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.addForm),e.xp6(1),e.Q6J("ngIf",!t.addForm),e.xp6(2),e.Q6J("ngIf",t.isAdd),e.xp6(1),e.Q6J("ngIf",t.isEdit)}}function he(n,l){1&n&&(e.TgZ(0,"p",128),e._uU(1," Please select an Excel file (.xlsx format) "),e.qZA())}function xe(n,l){1&n&&(e.TgZ(0,"p",122),e._uU(1,"Please select a valid .xlsx file."),e.qZA())}function Te(n,l){1&n&&(e.TgZ(0,"p",122),e._uU(1,"The Excel file must contain 'title','accounts_type','account_subtype','opening_balance', and 'opening_balance_type'. "),e.qZA())}function ve(n,l){if(1&n&&(e.TgZ(0,"p",129),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedFileName)}}let be=(()=>{class n{constructor(t,i,o,a,s){this.coreService=t,this.fb=i,this.toastr=o,this.cs=a,this.router=s,this.dtOptions={},this.initChecked=!1,this.taxCtrl=new c.NI("",[c.kI.required]),this.p=1,this.pageSize=10,this.itemsPerPage=10,this.fileFormatError=!1,this.missingFieldsError=!1,this.fieldfilteredData=[],this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.id,this.navigateData&&this.editForm(this.navigateData)}get f(){return this.taxForm.controls}confirmText(t,i){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deletetax(i).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(t,i){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Tax Is Deactivate Successfully."}))})}Active(t,i){u().fire({title:"Are you sure?",text:"Do you want to Active this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Tax Is Active Successfully."}))})}ngOnInit(){this.taxForm=this.fb.group({title:new c.NI("",[c.kI.required]),tax_percentage:new c.NI("",[c.kI.required,c.kI.pattern(/^[0-9]*$/)])}),this.coreService.gettaxd().subscribe(t=>{this.tableData=t,this.taxList=t,this.allTaxData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.taxCtrl.valueChanges.subscribe(t=>{console.log(t),this._filterBrands(t)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(o=>{"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"add_tax"==o.codename?this.isAdd=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"change_tax"==o.codename?this.isEdit=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"delete_tax"==o.codename&&(this.isDelete=o.codename)})})}filterData(){let t=this.tableData.slice();null!=this.selectActive&&(t=t.filter(i=>i?.is_active===this.selectActive)),this.filteredData=t}clearFilter(){this.selectActive=void 0,this.filterData()}_filterBrands(t){const i=t?.toLowerCase();this.taxList=this.allTaxData.filter(o=>o?.title?.toLowerCase().includes(i))}openModal(){this.fileName="",this.missingFieldsError=!1,this.fileFormatError=!1}triggerFileInput(){const t=document.getElementById("fileInput");t&&t.click()}onFileChange(t){const i=t.target.files[0];i&&(this.selectedFile=i,this.selectedFileName=i.name,"xlsx"!==this.getFileExtension(i.name)?(this.fileFormatError=!0,this.missingFieldsError=!1):(this.fileFormatError=!1,this.readExcelFile(i)))}getFileExtension(t){return t.split(".").pop()?.toLowerCase()||""}readExcelFile(t){const i=new FileReader;i.onload=o=>{const a=new Uint8Array(o.target.result),s=_.ij(a,{type:"array"}),Z=_.P6.sheet_to_json(s.Sheets[s.SheetNames[0]]);this.validateColumns(Z)?(this.missingFieldsError=!1,this.fieldfilteredData=Z.map(N=>({title:N.title,tax_percentage:N.tax_percentage})),console.log("Filtered Data:",this.fieldfilteredData)):this.missingFieldsError=!0},i.readAsArrayBuffer(t)}validateColumns(t){if(!t||0===t.length)return!1;const i=["title","tax_percentage"],o=Object.keys(t[0]);for(const a of i)if(!o.includes(a))return!1;return!0}createFilteredExcelFile(t){const i=_.P6.json_to_sheet(t),o=_.P6.book_new();_.P6.book_append_sheet(o,i,"Sheet1");const a=_.cW(o,{bookType:"xlsx",type:"array"});return new Blob([a],{type:"application/octet-stream"})}uploadFile(){const t=new FormData,i=this.createFilteredExcelFile(this.fieldfilteredData);if(t.append("file",i,this.selectedFileName),this.loader=!0,this.fileFormatError||this.missingFieldsError||!this.fileName)return this.loader=!1,this.toastr.error("Please Upload a valid File"),void console.error("No file selected");this.coreService.importTax(t).subscribe(o=>{console.log(o),this.toastr.success(o?.msg),this.loader=!1,this.missingFieldsError=!1,this.fileFormatError=!1,document.querySelector(".closeModal").click()},o=>{this.toastr.error(o?.error?.msg),console.error(o?.error?.msg)})}download(){this.coreService.sampleTaxFileExport().subscribe(t=>{const i=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,v.saveAs)(i,"sampleTaxFile.xlsx")},t=>{console.error("Error downloading the file:",t),this.toastr.error("Error downloading the file")})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(t){this.coreService.deletetax(t).subscribe(i=>{this.delRes=i,"Tax Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){this.taxForm.get("title").setValue(this.taxCtrl.value),this.taxForm.valid?(this.loaders=!0,this.coreService.addtax(this.taxForm.value).subscribe(t=>{this.addRes=t,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.taxCtrl.reset(),this.taxCtrl.markAsPristine(),this.ngOnInit()):(this.toastr.error(this.addRes.tax_percentage),this.loaders=!1)},t=>{this.loaders=!1})):(this.taxForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.taxForm.valid?(this.loaders=!0,this.coreService.updatetax(this.taxForm.value,this.id).subscribe(t=>{this.addRes=t,this.addRes.success&&(this.loaders=!1,this.addForm=!0,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit())},t=>{})):(this.taxForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.taxForm.get("title")}get tax_percentage(){return this.taxForm.get("tax_percentage")}editForm(t){this.id=t,this.coreService.gettaxById(t).subscribe(i=>{i.map(o=>{t==o.id&&(this.addForm=!1,this.taxForm.patchValue(o),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.taxForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(i=>i.title.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new A.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Tax List",10,10),y()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Tax Percentage"},{header:"Is Active"}]}),t.save("tax.pdf")}generatePDFAgain(){const t=new A.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Tax List",82,10),t.text("",10,15),y()(t,{head:[["#","Tax Name","Tax %"]],body:this.tableData.map((o,a)=>[a+1,o.title,o.tax_percentage]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Tax .pdf")}getVisibleDataFromTable(){const t=[],i=document.getElementById("mytable"),o=i.querySelector("thead tr"),a=i.querySelectorAll("tbody tr"),s=[];return o.querySelectorAll("th").forEach(d=>{const p=d.textContent.trim();"Is Active"!==p&&"Action"!==p&&s.push(p)}),t.push(s),a.forEach(d=>{const p=[];d.querySelectorAll("td").forEach(Z=>{p.push(Z.textContent.trim())}),t.push(p)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),i=_.P6.aoa_to_sheet(t),o=_.P6.book_new();_.P6.book_append_sheet(o,i,"Sheet1");const a=_.cW(o,{bookType:"xlsx",type:"array"}),s=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,v.saveAs)(s,"tax.xlsx")}printTable(){const t=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,s=t.cloneNode(!0),d=s.querySelector("th.thone:nth-child(5)");d&&d.remove();const p=s.querySelector("th.thone:last-child");p&&p.remove(),s.querySelectorAll("tr").forEach(S=>{const D=S.querySelector("td:nth-child(5)");D&&D.remove();const w=S.querySelector("td:last-child");w&&w.remove()});const N=s.outerHTML,Ne="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+N,Ue=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=Ne,window.print(),document.body.innerHTML=Ue}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.filteredData.length)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.p),e.Y36(c.qu),e.Y36(x._W),e.Y36(T.J),e.Y36(h.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tax"]],decls:134,vars:21,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Tax Name",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-toggle","modal","data-bs-target","#import_file_modal","data-bs-placement","top","title","import",3,"click"],[1,"fas","fa-cloud-upload-alt","upload-icon"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto","w-25"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],["id","import_file_modal","role","dialog",1,"modal","custom-modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","closeModal","d-none"],["aria-hidden","true"],[1,"text-primary","text-decoration-underline",3,"click"],[1,"modal-body"],["type","file","id","fileInput","accept",".xlsx",1,"d-none",3,"ngModel","ngModelChange","change"],["fileInput",""],[1,"file-upload-button","d-flex","align-items-center","justify-content-center",3,"click"],[1,"fas","fa-cloud-upload-alt","upload-btn-icon","ms-2"],["class","text-secondary mt-2 mb-1",4,"ngIf"],["class","text-danger",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"submit-section","d-flex","justify-content-end","align-items-center"],["data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-danger","me-3"],[1,"btn","btn-primary",3,"click"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Tax","aria-label","tax","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["class","is-loading",4,"ngIf"],["class","mt-3 error-msg",4,"ngIf"],["type","text","formControlName","tax_percentage","placeholder","Enter Tax Percentage","id","tax_percentage",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["style","color:#FF9F43",3,"value","disabled",4,"ngFor","ngForOf"],[2,"color","#FF9F43",3,"value","disabled"],[1,"is-loading"],[1,"mt-3","error-msg"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["type","text","formControlName","title","id","title",3,"ngClass"],["type","text","formControlName","tax_percentage","id","tax_percentage",3,"ngClass"],[1,"text-secondary","mt-2","mb-1"],[1,"mt-2"]],template:function(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Tax list"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Tax"),e.qZA()(),e.YNc(8,L,2,1,"div",5),e.qZA(),e.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),e._UZ(15,"img",12),e.TgZ(16,"span"),e._UZ(17,"img",13),e.qZA()()(),e.TgZ(18,"div",14)(19,"a",15),e._UZ(20,"img",16),e.qZA(),e.TgZ(21,"div",17)(22,"label")(23,"input",18),e.NdJ("ngModelChange",function(s){return i.titlee=s})("ngModelChange",function(){return i.search()}),e.qZA()()()()(),e.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),e.NdJ("click",function(){return i.generatePDFAgain()}),e._UZ(28,"img",21),e.qZA()(),e.TgZ(29,"li")(30,"a",22),e.NdJ("click",function(){return i.exportToExcel()}),e._UZ(31,"img",23),e.qZA()(),e.TgZ(32,"li")(33,"a",24),e.NdJ("click",function(){return i.printTable()}),e._UZ(34,"img",25),e.qZA()(),e.TgZ(35,"li")(36,"a",26),e.NdJ("click",function(){return i.openModal()}),e._UZ(37,"i",27),e.qZA()()()()(),e.TgZ(38,"div",28)(39,"div",29)(40,"div",0)(41,"div",30)(42,"div",0)(43,"div",31)(44,"div",32)(45,"label"),e._uU(46,"Is Active"),e.qZA(),e.TgZ(47,"select",33),e.NdJ("ngModelChange",function(s){return i.selectActive=s})("change",function(){return i.filterData()}),e.TgZ(48,"option",34),e._uU(49,"Select Active Status "),e.qZA(),e.TgZ(50,"option",35),e._uU(51,"Yes"),e.qZA(),e.TgZ(52,"option",35),e._uU(53,"No"),e.qZA()()()()(),e.TgZ(54,"div",36),e.NdJ("click",function(){return i.clearFilter()}),e.TgZ(55,"a",37),e._uU(56,"Clear Filter"),e.qZA()()()()()(),e.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),e.NdJ("click",function(){return i.sort("id")}),e.TgZ(62,"label",41),e.NdJ("click",function(){return i.selectAll(i.initChecked)}),e.TgZ(63,"input",42),e.NdJ("ngModelChange",function(s){return i.allSelected=s})("change",function(){return i.selectAlll()}),e.qZA(),e._UZ(64,"span",43),e.qZA(),e._UZ(65,"i",44),e.qZA(),e.TgZ(66,"th",40),e.NdJ("click",function(){return i.sort("id")}),e._uU(67,"Sr.No. "),e._UZ(68,"i",44),e.qZA(),e.TgZ(69,"th",40),e.NdJ("click",function(){return i.sort("id")}),e._uU(70,"Tax Name "),e._UZ(71,"i",44),e.qZA(),e.TgZ(72,"th",40),e.NdJ("click",function(){return i.sort("id")}),e._uU(73,"Tax % "),e._UZ(74,"i",44),e.qZA(),e.TgZ(75,"th",40),e.NdJ("click",function(){return i.sort("id")}),e._uU(76,"Is Active "),e._UZ(77,"i",44),e.qZA(),e.YNc(78,B,3,0,"th",45),e.qZA()(),e.YNc(79,z,4,11,"tbody",46),e.YNc(80,j,5,0,"tbody",46),e.qZA(),e.TgZ(81,"div",47),e.YNc(82,V,1,0,"mat-progress-bar",48),e.qZA(),e.TgZ(83,"div",0)(84,"div",49)(85,"div",50),e._uU(86," Show per page "),e.TgZ(87,"select",51,52),e.NdJ("ngModelChange",function(s){return i.itemsPerPage=s})("change",function(){e.CHM(o);const s=e.MAs(88);return e.KtG(i.changePg(s.value))}),e.TgZ(89,"option",53),e._uU(90,"10"),e.qZA(),e.TgZ(91,"option",54),e._uU(92,"20"),e.qZA(),e.TgZ(93,"option",55),e._uU(94,"30"),e.qZA(),e.TgZ(95,"option",56),e._uU(96,"50"),e.qZA(),e.TgZ(97,"option",57),e._uU(98,"100"),e.qZA(),e.TgZ(99,"option",58),e._uU(100,"All"),e.qZA()()()(),e.TgZ(101,"div",59)(102,"div",60)(103,"pagination-controls",61),e.NdJ("pageChange",function(s){return i.p=s}),e.qZA(),e.TgZ(104,"div",62),e._uU(105),e.qZA()()()()()()()(),e.YNc(106,fe,7,4,"div",63),e.qZA(),e.TgZ(107,"div",64)(108,"div",65)(109,"div",66)(110,"div",67)(111,"h5",68),e._uU(112,"Import Tax File"),e.qZA(),e.TgZ(113,"button",69)(114,"span",70),e._uU(115,"\xd7"),e.qZA()(),e.TgZ(116,"a",71),e.NdJ("click",function(){return i.download()}),e._uU(117,"Download Sample"),e.qZA()(),e.TgZ(118,"div",72)(119,"div")(120,"input",73,74),e.NdJ("ngModelChange",function(s){return i.fileName=s})("change",function(s){return i.onFileChange(s)}),e.qZA(),e.TgZ(122,"div",75),e.NdJ("click",function(){return i.triggerFileInput()}),e._uU(123,"Upload File "),e._UZ(124,"i",76),e.qZA(),e.YNc(125,he,2,0,"p",77),e.YNc(126,xe,2,0,"p",78),e.YNc(127,Te,2,0,"p",78),e.YNc(128,ve,2,1,"p",79),e.qZA(),e.TgZ(129,"div",80)(130,"button",81),e._uU(131,"Cancel"),e.qZA(),e.TgZ(132,"button",82),e.NdJ("click",function(){return i.uploadFile()}),e._uU(133,"Submit"),e.qZA()()()()()()}2&t&&(e.xp6(8),e.Q6J("ngIf",!i.addForm),e.xp6(15),e.Q6J("ngModel",i.titlee),e.xp6(24),e.Q6J("ngModel",i.selectActive),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngValue",!0),e.xp6(2),e.Q6J("ngValue",!1),e.xp6(11),e.Q6J("ngModel",i.allSelected),e.xp6(15),e.Q6J("ngIf",i.isEdit||i.isDelete),e.xp6(1),e.Q6J("ngIf",(null==i.filteredData?null:i.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==i.filteredData?null:i.filteredData.length)&&!i.loader),e.xp6(2),e.Q6J("ngIf",i.loader),e.xp6(5),e.Q6J("ngModel",i.itemsPerPage),e.xp6(18),e.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries"),e.xp6(1),e.Q6J("ngIf",i.isAdd||i.isEdit),e.xp6(14),e.Q6J("ngModel",i.fileName),e.xp6(5),e.Q6J("ngIf",!i.fileFormatError&&!i.missingFieldsError&&!i.fileName),e.xp6(1),e.Q6J("ngIf",i.fileFormatError),e.xp6(1),e.Q6J("ngIf",i.missingFieldsError),e.xp6(1),e.Q6J("ngIf",!i.fileFormatError&&!i.missingFieldsError&&i.fileName))},dependencies:[m.mk,m.sg,m.O5,h.yS,c._Y,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.JL,c.On,c.oH,c.sg,c.u,F.pW,b.LS,P.Rr,I.XC,I.ZL,Q.ey,q.TO,q.KE,J.Nt,b._s,O.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}  .mat-form-field-required-marker{color:#637381!important}  .mat-form-field-label{color:#637381!important}.error-msg[_ngcontent-%COMP%]{font-size:14px}.file-upload-button[_ngcontent-%COMP%]{padding:24px;text-align:center;border:1px dashed black;border-radius:8px;cursor:pointer}.upload-icon[_ngcontent-%COMP%]{color:#000;font-size:20px}.upload-btn-icon[_ngcontent-%COMP%]{color:#000;font-size:18px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var Ze=r(30597);const E=JSON.parse(localStorage.getItem("auth")),Ce=[];E&&E.map(l=>{"product"===l.content_type.app_label&&"tax"===l.content_type.model&&Ce.push(l.codename)});const Ae=[{path:"",component:be,canActivate:[Ze.l],data:{allowedRoles:["add_tax","change_tax","delete_tax","view_tax"]}}];let ye=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(Ae),h.Bz]}),n})();var Fe=r(8468);let Me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,ye,Fe.I,I.Bb,q.lN,J.c]}),n})()},30597:(k,C,r)=>{r.d(C,{l:()=>A});var m=r(94650),h=r(89299),c=r(97185),U=r(42917),u=r(80927);let A=(()=>{class g{constructor(_,v,e,f,x){this.router=_,this.Arout=v,this.toastr=e,this.profileService=f,this.coreService=x}canActivate(_,v){const e=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),e){const f=_.data.allowedRoles;console.log(f,"allowedRoles");const x=e.some(T=>f.includes(T.codename));if(console.log(x),this.coreService.getProfile().subscribe(T=>{this.userDetails=T,this.profileService.setUserDetails(this.userDetails);const F=T?.permission,b=this.profileService.getUserDetails();(!b||b.length!==F.length)&&(this.profileService.setUserPermission(F),window.location.reload())}),x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(_){return new(_||g)(m.LFG(h.F0),m.LFG(h.gz),m.LFG(c._W),m.LFG(U.J),m.LFG(u.p))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);