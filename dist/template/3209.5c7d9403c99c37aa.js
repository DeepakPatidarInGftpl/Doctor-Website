"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3209],{93209:(J,A,c)=>{c.r(A),c.d(A,{CitylistModule:()=>At});var p=c(36895),h=c(4392),r=c(24006),U=c(35226),m=c.n(U),F=c(96166),g=c(12983),q=c.n(g),_=c(80574),b=c(94327),t=c(94650),f=c(80927),y=c(97185),C=c(42917),S=c(73162),Z=c(54333),D=c(90455),w=c(54040);function k(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"a",75),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.openaddForm())}),t._UZ(1,"img",76),t._uU(2,"Add City "),t.qZA()}}function P(o,l){if(1&o&&(t.TgZ(0,"div",73),t.YNc(1,k,3,0,"a",74),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function O(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"th",30),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",34),t.qZA()}}function Q(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"a",87),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.editForm(n.id))}),t._UZ(1,"img",88),t.qZA()}}function Y(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"a",89),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),s=n.index,a=n.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(s,a.id))}),t._UZ(1,"img",90),t.qZA()}}function L(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",78)(3,"input",79),t.NdJ("ngModelChange",function(n){const a=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[a]=n)}),t.qZA(),t._UZ(4,"span",33),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",80)(8,"a",81),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"mat-slide-toggle",82),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,a=n.index,d=t.oxw(2);return t.KtG(s.is_active?d.deActivate(a,s.id):d.Active(a,s.id))})("ngModelChange",function(n){const a=t.CHM(e).$implicit;return t.KtG(a.is_active=n)}),t.qZA()(),t.TgZ(16,"td")(17,"a",83),t._UZ(18,"img",84),t.qZA(),t.YNc(19,Q,2,0,"a",85),t.YNc(20,Y,2,0,"a",86),t.qZA()()}if(2&o){const e=l.$implicit,i=l.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//places/city-details/",null==e?null:e.id,""),t.xp6(1),t.Oqu(null==e?null:e.city),t.xp6(2),t.Oqu(null==e?null:e.city_code),t.xp6(2),t.Oqu(null==e||null==e.state?null:e.state.state),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//places/city-details/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const R=function(o,l){return{itemsPerPage:o,currentPage:l}};function B(o,l){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,L,21,10,"tr",77),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,R,e.itemsPerPage,e.p)))}}function G(o,l){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",91)(3,"p",92),t._uU(4,"Data not available"),t.qZA()()()())}function H(o,l){1&o&&t._UZ(0,"mat-progress-bar",93)}function K(o,l){1&o&&(t.TgZ(0,"div")(1,"h4"),t._uU(2,"Add City "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create New City "),t.qZA()())}function j(o,l){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,K,5,0,"div",36),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(o,l){1&o&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Edit City"),t.qZA(),t.TgZ(3,"h6"),t._uU(4," Update City "),t.qZA()())}function W(o,l){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,z,5,0,"div",36),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function V(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Enter City Name"),t.qZA())}function $(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Enter City Code "),t.qZA())}function X(o,l){if(1&o&&(t.TgZ(0,"option",110),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",null==e?null:e.state," ")}}function tt(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Select State "),t.qZA())}function et(o,l){1&o&&(t.TgZ(0,"button",111),t._uU(1,"Submit"),t.qZA())}function it(o,l){1&o&&(t.TgZ(0,"button",112),t._UZ(1,"span",113),t._uU(2,"\xa0 Submit"),t.qZA())}const v=function(o){return{"is-invalid":o}};function ot(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",97),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.submit())}),t.TgZ(2,"div",0)(3,"div",98)(4,"div",99)(5,"label"),t._uU(6,"City*"),t.qZA(),t._UZ(7,"input",100),t.YNc(8,V,2,0,"span",68),t.qZA()(),t.TgZ(9,"div",98)(10,"div",99)(11,"label"),t._uU(12,"City Code*"),t.qZA(),t._UZ(13,"input",101),t.YNc(14,$,2,0,"span",68),t.qZA()(),t.TgZ(15,"div",98)(16,"div",99)(17,"label"),t._uU(18,"Select State*"),t.qZA(),t.TgZ(19,"select",102,103)(21,"option",104),t._uU(22,"Select State"),t.qZA(),t.YNc(23,X,2,2,"option",105),t.qZA(),t.YNc(24,tt,2,0,"span",68),t.qZA()(),t.TgZ(25,"div",106),t.YNc(26,et,2,0,"button",107),t.YNc(27,it,3,0,"button",108),t.qZA()()()()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.cityForm),t.xp6(6),t.Q6J("ngClass",t.VKq(10,v,e.f.city.touched&&e.f.city.invalid)),t.xp6(1),t.Q6J("ngIf",e.city&&e.city.invalid&&e.city.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(12,v,e.f.city_code.touched&&e.f.city_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.city_code&&e.city_code.invalid&&e.city_code.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(14,v,e.f.state.touched&&e.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",e.stateList),t.xp6(1),t.Q6J("ngIf",e.state&&e.state.invalid&&e.state.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function nt(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ot,28,16,"div",96),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function st(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Enter City Name "),t.qZA())}function lt(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Enter City Code "),t.qZA())}function at(o,l){if(1&o&&(t.TgZ(0,"option",110),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.state," ")}}function ct(o,l){if(1&o&&(t.TgZ(0,"span",109),t._uU(1),t.qZA()),2&o){const e=t.oxw(4);t.xp6(1),t.Oqu(e.stateError)}}function rt(o,l){1&o&&(t.TgZ(0,"span",109),t._uU(1,"Select State "),t.qZA())}function dt(o,l){1&o&&(t.TgZ(0,"button",111),t._uU(1,"Submit"),t.qZA())}function _t(o,l){1&o&&(t.TgZ(0,"button",112),t._UZ(1,"span",113),t._uU(2," \xa0 Submit"),t.qZA())}function pt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",97),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.update())}),t.TgZ(2,"div",0)(3,"div",98)(4,"div",99)(5,"label"),t._uU(6,"City*"),t.qZA(),t._UZ(7,"input",100),t.YNc(8,st,2,0,"span",68),t.qZA()(),t.TgZ(9,"div",98)(10,"div",99)(11,"label"),t._uU(12,"City Code*"),t.qZA(),t._UZ(13,"input",101),t.YNc(14,lt,2,0,"span",68),t.qZA()(),t.TgZ(15,"div",98)(16,"div",99)(17,"label"),t._uU(18,"Select State*"),t.qZA(),t.TgZ(19,"select",102,103)(21,"option",104),t._uU(22,"Select State"),t.qZA(),t.YNc(23,at,2,2,"option",105),t.qZA(),t.YNc(24,ct,2,1,"span",68),t.YNc(25,rt,2,0,"span",68),t.qZA()(),t.TgZ(26,"div",106),t.YNc(27,dt,2,0,"button",107),t.YNc(28,_t,3,0,"button",108),t.qZA()()()()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.cityForm),t.xp6(6),t.Q6J("ngClass",t.VKq(11,v,e.f.city.touched&&e.f.city.invalid)),t.xp6(1),t.Q6J("ngIf",e.city&&e.city.invalid&&e.city.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(13,v,e.f.city_code.touched&&e.f.city_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.city_code&&e.city_code.invalid&&e.city_code.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(15,v,e.f.state.touched&&e.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",e.stateList),t.xp6(1),t.Q6J("ngIf",e.stateError),t.xp6(1),t.Q6J("ngIf",e.state&&e.state.invalid&&e.state.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function ut(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,pt,29,17,"div",96),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function mt(o,l){if(1&o&&(t.TgZ(0,"div",94)(1,"div",2),t.YNc(2,j,2,1,"div",95),t.YNc(3,W,2,1,"div",95),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,nt,2,1,"div",36),t.YNc(6,ut,2,1,"div",36),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function gt(o,l){1&o&&(t.TgZ(0,"p",114),t._uU(1," Please select an Excel file (.xlsx format) "),t.qZA())}function ft(o,l){1&o&&(t.TgZ(0,"p",109),t._uU(1,"Please select a valid .xlsx file."),t.qZA())}function ht(o,l){1&o&&(t.TgZ(0,"p",109),t._uU(1,'The Excel file must contain "state", "city" and "city_code" columns.'),t.qZA())}function yt(o,l){if(1&o&&(t.TgZ(0,"p",115),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.selectedFileName)}}let Ct=(()=>{class o{constructor(e,i,n,s,a){this.coreService=e,this.router=i,this.fb=n,this.toastr=s,this.cs=a,this.dtOptions={},this.initChecked=!1,this.fileFormatError=!1,this.missingFieldsError=!1,this.filteredData=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.stateError=null,this.addForm=!0,this.key="id",this.reverse=!0,this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.id,this.navigateData&&this.editForm(this.navigateData)}get f(){return this.cityForm.controls}confirmText(e,i){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deletecity(i).subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}deActivate(e,i){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this city!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.cityIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"City Is Deactivate Successfully."}))})}Active(e,i){m().fire({title:"Are you sure?",text:"Do you want to Active this city!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.cityIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.cityForm=this.fb.group({city:new r.NI("",[r.kI.required]),city_code:new r.NI("",[r.kI.required]),state:new r.NI("",[r.kI.required])}),this.coreService.getcity().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.getstate(),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"places"===n.content_type.app_label&&"city"===n.content_type.model&&"add_city"==n.codename?this.isAdd=n.codename:"places"===n.content_type.app_label&&"city"===n.content_type.model&&"change_city"==n.codename?this.isEdit=n.codename:"places"===n.content_type.app_label&&"city"===n.content_type.model&&"delete_city"==n.codename&&(this.isDelete=n.codename)})})}openModal(){this.fileName="",this.missingFieldsError=!1,this.fileFormatError=!1}triggerFileInput(){const e=document.getElementById("fileInput");e&&e.click()}onFileChange(e){const i=e.target.files[0];i&&(this.selectedFile=i,this.selectedFileName=i.name,"xlsx"!==this.getFileExtension(i.name)?(this.fileFormatError=!0,this.missingFieldsError=!1):(this.fileFormatError=!1,this.readExcelFile(i)))}getFileExtension(e){return e.split(".").pop()?.toLowerCase()||""}readExcelFile(e){const i=new FileReader;i.onload=n=>{const s=new Uint8Array(n.target.result),a=_.ij(s,{type:"array"}),T=_.P6.sheet_to_json(a.Sheets[a.SheetNames[0]]);this.validateColumns(T)?(this.missingFieldsError=!1,this.filteredData=T.map(x=>({state:x.state,city:x.city,city_code:x.city_code})),console.log("Filtered Data:",this.filteredData)):this.missingFieldsError=!0},i.readAsArrayBuffer(e)}validateColumns(e){if(!e||0===e.length)return!1;const i=["state","city","city_code"],n=Object.keys(e[0]);for(const s of i)if(!n.includes(s))return!1;return!0}createFilteredExcelFile(e){const i=_.P6.json_to_sheet(e),n=_.P6.book_new();_.P6.book_append_sheet(n,i,"Sheet1");const s=_.cW(n,{bookType:"xlsx",type:"array"});return new Blob([s],{type:"application/octet-stream"})}uploadFile(){const e=new FormData,i=this.createFilteredExcelFile(this.filteredData);if(e.append("file",i,this.selectedFileName),this.loaders=!0,this.fileFormatError||this.missingFieldsError||!this.fileName)return this.loaders=!1,this.toastr.error("Please Upload a valid File"),void console.error("No file selected");this.coreService.importCity(e).subscribe(n=>{console.log(n),this.toastr.success(n?.msg),this.loaders=!1,this.missingFieldsError=!1,this.fileFormatError=!1,document.querySelector(".closeModal").click()},n=>{this.toastr.error(n?.error?.msg),console.error(n?.error?.msg)})}download(){this.coreService.sampleCityFileExport().subscribe(e=>{const i=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(i,"sampleCityFile.xlsx")},e=>{console.error("Error downloading the file:",e),this.toastr.error("Error downloading the file")})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecity(e).subscribe(i=>{this.delRes=i,"City Deleted successfully"==this.delRes.msg&&window.location.reload()})}getstate(){this.coreService.getstateD().subscribe(e=>{this.stateList=e})}submit(){this.cityForm.valid?(this.loaders=!0,this.coreService.addcity(this.cityForm.value).subscribe(e=>{this.addRes=e,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.cityForm.reset(),this.ngOnInit()):this.loaders=!1},e=>{this.loaders=!1})):(this.loaders=!1,this.cityForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.cityForm.valid?(this.loaders=!0,this.coreService.updatecity(this.cityForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.cityForm.reset(),this.addForm=!0,this.ngOnInit()):this.loaders=!1},e=>{this.loaders=!1,e.error.state&&(this.stateError="Select State",setTimeout(()=>{this.stateError=""},3e3))})):(this.loaders=!1,this.cityForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get city(){return this.cityForm.get("city")}get city_code(){return this.cityForm.get("city_code")}get state(){return this.cityForm.get("state")}editForm(e){this.id=e,this.coreService.getcityById(e).subscribe(i=>{i.map(n=>{e==n.id&&(this.addForm=!1,this.cityForm.patchValue(n),this.cityForm.get("state").patchValue(n.state?.id),this.editFormdata=n)})})}openaddForm(){this.addForm=!0,this.cityForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.city.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new F.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("City List",10,10),q()(e,{head:[["Sr No.","City","City Code","State","Is Active"]],body:this.tableData.map((n,s)=>[s+1,n.city,n.city_code,n.state?.state,n.is_active?"Yes":"No"]),theme:"grid",headStyles:{fillColor:[255,159,67]}}),e.save("city.pdf")}generatePDFAgain(){const e=new F.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("city List",82,10),e.text("",10,15),q()(e,{head:[["#","City","City Code","State"]],body:this.tableData.map((n,s)=>[s+1,n.city,n.city_code,n.state?.state]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("city  .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),n=i.querySelector("thead tr"),s=i.querySelectorAll("tbody tr"),a=[];return n.querySelectorAll("th").forEach(d=>{const u=d.textContent.trim();"Is Active"!==u&&"Action"!==u&&a.push(u)}),e.push(a),s.forEach(d=>{const u=[];d.querySelectorAll("td").forEach(T=>{u.push(T.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=_.P6.aoa_to_sheet(e),n=_.P6.book_new();_.P6.book_append_sheet(n,i,"Sheet1");const s=_.cW(n,{bookType:"xlsx",type:"array"}),a=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(a,"city.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,a=e.cloneNode(!0),d=a.querySelector("th.thone:nth-child(6)");d&&d.remove();const u=a.querySelector("th.thone:last-child");u&&u.remove(),a.querySelectorAll("tr").forEach(N=>{const E=N.querySelector("td:nth-child(6)");E&&E.remove();const I=N.querySelector("td:last-child");I&&I.remove()});const x=a.outerHTML,Ft="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+x,qt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=Ft,window.print(),document.body.innerHTML=qt}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.p),t.Y36(h.F0),t.Y36(r.qu),t.Y36(y._W),t.Y36(C.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-citylist"]],decls:118,vars:17,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-toggle","modal","data-bs-target","#import_file_modal","data-bs-placement","top","title","import",3,"click"],[1,"fas","fa-cloud-upload-alt","upload-icon"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],["id","import_file_modal","role","dialog",1,"modal","custom-modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","closeModal","d-none"],["aria-hidden","true"],[1,"text-primary","text-decoration-underline",3,"click"],[1,"modal-body"],["type","file","id","fileInput","accept",".xlsx",1,"d-none",3,"ngModel","ngModelChange","change"],["fileInput",""],[1,"file-upload-button","d-flex","align-items-center","justify-content-center",3,"click"],[1,"fas","fa-cloud-upload-alt","upload-btn-icon","ms-2"],["class","text-secondary mt-2 mb-1",4,"ngIf"],["class","text-danger",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"submit-section","d-flex","justify-content-end","align-items-center"],["data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-danger","me-3"],[1,"btn","btn-primary",3,"click"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","city","placeholder","Enter City Name","id","city",3,"ngClass"],["type","text","formControlName","city_code","placeholder","Enter City Code","id","city_code",3,"ngClass"],["formControlName","state","required","","id","state",3,"ngClass"],["stateValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"text-secondary","mt-2","mb-1"],[1,"mt-2"]],template:function(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"City list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your City"),t.qZA()(),t.YNc(8,P,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.TgZ(16,"span"),t._UZ(17,"img",13),t.qZA()()(),t.TgZ(18,"div",14)(19,"a",15),t._UZ(20,"img",16),t.qZA(),t.TgZ(21,"div",17)(22,"label")(23,"input",18),t.NdJ("ngModelChange",function(a){return i.titlee=a})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(28,"img",21),t.qZA()(),t.TgZ(29,"li")(30,"a",22),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(31,"img",23),t.qZA()(),t.TgZ(32,"li")(33,"a",24),t.NdJ("click",function(){return i.printTable()}),t._UZ(34,"img",25),t.qZA()(),t.TgZ(35,"li")(36,"a",26),t.NdJ("click",function(){return i.openModal()}),t._UZ(37,"i",27),t.qZA()()()()(),t.TgZ(38,"div",28)(39,"table",29)(40,"thead")(41,"tr")(42,"th",30),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(43,"label",31),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(44,"input",32),t.NdJ("ngModelChange",function(a){return i.allSelected=a})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(45,"span",33),t.qZA(),t._UZ(46,"i",34),t.qZA(),t.TgZ(47,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(48,"Sr. No. "),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(51,"City"),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(54,"City Code "),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(57,"State "),t._UZ(58,"i",34),t.qZA(),t.TgZ(59,"th",30),t.NdJ("click",function(){return i.sort("id")}),t._uU(60,"Is Active "),t._UZ(61,"i",34),t.qZA(),t.YNc(62,O,3,0,"th",35),t.qZA()(),t.YNc(63,B,4,11,"tbody",36),t.YNc(64,G,5,0,"tbody",36),t.qZA(),t.TgZ(65,"div",37),t.YNc(66,H,1,0,"mat-progress-bar",38),t.qZA(),t.TgZ(67,"div",0)(68,"div",39)(69,"div",40),t._uU(70," Show per page "),t.TgZ(71,"select",41,42),t.NdJ("ngModelChange",function(a){return i.itemsPerPage=a})("change",function(){t.CHM(n);const a=t.MAs(72);return t.KtG(i.changePg(a.value))}),t.TgZ(73,"option",43),t._uU(74,"10"),t.qZA(),t.TgZ(75,"option",44),t._uU(76,"20"),t.qZA(),t.TgZ(77,"option",45),t._uU(78,"30"),t.qZA(),t.TgZ(79,"option",46),t._uU(80,"50"),t.qZA(),t.TgZ(81,"option",47),t._uU(82,"100"),t.qZA(),t.TgZ(83,"option",48),t._uU(84,"All"),t.qZA()()()(),t.TgZ(85,"div",49)(86,"div",50)(87,"pagination-controls",51),t.NdJ("pageChange",function(a){return i.p=a}),t.qZA(),t.TgZ(88,"div",52),t._uU(89),t.qZA()()()()()()()(),t.YNc(90,mt,7,4,"div",53),t.qZA(),t.TgZ(91,"div",54)(92,"div",55)(93,"div",56)(94,"div",57)(95,"h5",58),t._uU(96,"Import City File"),t.qZA(),t.TgZ(97,"button",59)(98,"span",60),t._uU(99,"\xd7"),t.qZA()(),t.TgZ(100,"a",61),t.NdJ("click",function(){return i.download()}),t._uU(101,"Download Sample"),t.qZA()(),t.TgZ(102,"div",62)(103,"div")(104,"input",63,64),t.NdJ("ngModelChange",function(a){return i.fileName=a})("change",function(a){return i.onFileChange(a)}),t.qZA(),t.TgZ(106,"div",65),t.NdJ("click",function(){return i.triggerFileInput()}),t._uU(107,"Upload File "),t._UZ(108,"i",66),t.qZA(),t.YNc(109,gt,2,0,"p",67),t.YNc(110,ft,2,0,"p",68),t.YNc(111,ht,2,0,"p",68),t.YNc(112,yt,2,1,"p",69),t.qZA(),t.TgZ(113,"div",70)(114,"button",71),t._uU(115,"Cancel"),t.qZA(),t.TgZ(116,"button",72),t.NdJ("click",function(){return i.uploadFile()}),t._uU(117,"Submit"),t.qZA()()()()()()}2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(21),t.Q6J("ngModel",i.allSelected),t.xp6(18),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit),t.xp6(14),t.Q6J("ngModel",i.fileName),t.xp6(5),t.Q6J("ngIf",!i.fileFormatError&&!i.missingFieldsError&&!i.fileName),t.xp6(1),t.Q6J("ngIf",i.fileFormatError),t.xp6(1),t.Q6J("ngIf",i.missingFieldsError),t.xp6(1),t.Q6J("ngIf",!i.fileFormatError&&!i.missingFieldsError&&i.fileName))},dependencies:[p.mk,p.sg,p.O5,h.yS,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.Q7,r.On,r.sg,r.u,S.pW,Z.LS,D.Rr,Z._s,w.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}.file-upload-button[_ngcontent-%COMP%]{padding:24px;text-align:center;border:1px dashed black;border-radius:8px;cursor:pointer}.upload-icon[_ngcontent-%COMP%]{color:#000;font-size:20px}.upload-btn-icon[_ngcontent-%COMP%]{color:#000;font-size:18px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var vt=c(30597);const M=JSON.parse(localStorage.getItem("auth")),bt=[];M&&M.map(l=>{"places"===l.content_type.app_label&&"city"===l.content_type.model&&bt.push(l.codename)});const Zt=[{path:"",component:Ct,canActivate:[vt.l],data:{allowedRoles:["add_city","change_city","delete_city","view_city"]}}];let Tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(Zt),h.Bz]}),o})();var xt=c(8468);let At=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,Tt,xt.I]}),o})()},30597:(J,A,c)=>{c.d(A,{l:()=>F});var p=c(94650),h=c(4392),r=c(97185),U=c(42917),m=c(80927);let F=(()=>{class g{constructor(_,b,t,f,y){this.router=_,this.Arout=b,this.toastr=t,this.profileService=f,this.coreService=y}canActivate(_,b){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),t){const f=_.data.allowedRoles;console.log(f,"allowedRoles");const y=t.some(C=>f.includes(C.codename));if(console.log(y),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const S=C?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==S.length)&&(this.profileService.setUserPermission(S),window.location.reload())}),y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(_){return new(_||g)(p.LFG(h.F0),p.LFG(h.gz),p.LFG(r._W),p.LFG(U.J),p.LFG(m.p))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);