"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6513],{6513:(w,u,i)=>{i.r(u),i.d(u,{CompanylistModule:()=>A});var l=i(6895),c=i(8996),m=i(2454),d=i.n(m),t=i(4650),h=i(2326),y=i(2917);const f=function(n,r,e){return{"green-dot":n,grey:r,"bg-lightyellow":e}};function v(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12)(4,"div")(5,"h5",13),t._uU(6,"Company Details "),t.O4$(),t.TgZ(7,"svg",14),t._UZ(8,"path",15)(9,"polyline",16)(10,"line",17)(11,"line",18)(12,"polyline",19),t.qZA()(),t.kcU(),t._UZ(13,"hr"),t.qZA(),t.TgZ(14,"div",1)(15,"div",20)(16,"div",21)(17,"p",22),t._uU(18,"Name"),t.qZA(),t.TgZ(19,"p",22),t._uU(20,"Phone Number"),t.qZA(),t.TgZ(21,"p",22),t._uU(22,"Email"),t.qZA(),t.TgZ(23,"p",22),t._uU(24,"Country"),t.qZA(),t.TgZ(25,"p",22),t._uU(26,"Financial Year"),t.qZA(),t.TgZ(27,"p",22),t._uU(28,"Currency"),t.qZA(),t.TgZ(29,"p",22),t._uU(30,"GST Number"),t.qZA(),t.TgZ(31,"p",22),t._uU(32,"Is Active"),t.qZA()(),t.TgZ(33,"div",23)(34,"p",24)(35,"a",25),t._uU(36),t.qZA()(),t.TgZ(37,"p",24),t._uU(38),t.qZA(),t.TgZ(39,"p",24),t._uU(40),t.qZA(),t.TgZ(41,"p",24),t._uU(42),t.qZA(),t.TgZ(43,"p",24),t._uU(44),t.qZA(),t.TgZ(45,"p",24),t._uU(46),t.qZA(),t.TgZ(47,"p",24),t._uU(48),t.qZA(),t.TgZ(49,"div",26),t._UZ(50,"div",27),t.TgZ(51,"p"),t._uU(52),t.qZA()()()()()()(),t.TgZ(53,"div",11)(54,"div",12)(55,"div",28)(56,"h5",13),t._uU(57,"Company Address "),t.O4$(),t.TgZ(58,"svg",29),t._UZ(59,"path",30)(60,"path",31),t.qZA()(),t.kcU(),t._UZ(61,"hr"),t.qZA(),t.TgZ(62,"div",1)(63,"p",32),t._uU(64),t.qZA(),t.TgZ(65,"p",24),t._uU(66),t.TgZ(67,"span"),t._uU(68),t.qZA()(),t.TgZ(69,"p",24),t._uU(70),t.qZA()()()()(),t.TgZ(71,"div")(72,"div",33)(73,"a",34)(74,"div",35),t.O4$(),t.TgZ(75,"svg",36),t._UZ(76,"path",37)(77,"path",38),t.qZA()()(),t.kcU(),t.TgZ(78,"a",39),t.NdJ("click",function(){const a=t.CHM(e),s=a.index,p=a.$implicit,g=t.oxw();return t.KtG(g.confirmText(s,p.id))})("click",function(){const a=t.CHM(e),s=a.$implicit,p=a.index,g=t.oxw();return t.KtG(g.delete(s,p))}),t.TgZ(79,"div",35),t.O4$(),t.TgZ(80,"svg",40),t._UZ(81,"path",41),t.qZA()()()()()()}if(2&n){const e=r.$implicit;t.xp6(35),t.MGl("routerLink","//company/company-details/",e.id,""),t.xp6(1),t.hij("",e.name," "),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.country.country_name),t.xp6(2),t.Oqu(e.financial_year.financial_year),t.xp6(2),t.Oqu(e.currency),t.xp6(2),t.Oqu(e.gst),t.xp6(2),t.Q6J("ngClass",t.kEZ(15,f,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(2),t.hij(" ",e.is_active,""),t.xp6(12),t.Oqu(e.address),t.xp6(2),t.hij("",e.pincode," , "),t.xp6(2),t.Oqu(e.state.state),t.xp6(2),t.Oqu(e.country.country_name),t.xp6(3),t.MGl("routerLink","//company/editcompany/",e.id,"")}}const Z=[{path:"",component:(()=>{class n{constructor(e,o,a){this.QueryService=e,this.companyService=o,this.router=a,this.dtOptions={},this.initChecked=!1,this.QueryService.filterToggle()}confirmText(e,o){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&this.companyService.deleteCompany(o).subscribe(s=>{this.delRes=s,"Company Deleted successfully"==this.delRes.msg?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,o)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}},this.companyService.getCompany().subscribe(e=>{this.tableData=e})}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(e){this.companyService.deleteCompany(e).subscribe(o=>{this.delRes=o})}delete(e,o){this.tableData.splice(o,1),this.companyService.deleteC("/pv-api/company/",e.id).subscribe(a=>{console.log(a)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h._),t.Y36(y.J),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-companylist"]],decls:14,vars:1,consts:[[1,"card","bg"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"page-header",2,"float","right"],[1,"page-btn"],["routerLink","//company/addcompany",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngFor","ngForOf"],[1,"company-details-card","card"],[1,"sub-card","row"],[1,"col-sm-6"],[1,"card"],[1,"card-title","my-3","mx-2"],["_ngcontent-kof-c71","","xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-file-text","addrss"],["_ngcontent-kof-c71","","d","M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"],["_ngcontent-kof-c71","","points","14 2 14 8 20 8"],["_ngcontent-kof-c71","","x1","16","y1","13","x2","8","y2","13"],["_ngcontent-kof-c71","","x1","16","y1","17","x2","8","y2","17"],["_ngcontent-kof-c71","","points","10 9 9 9 8 9"],[1,"d-flex"],[1,"card-h","mb-2"],[1,"grey-text"],[1,"card-p","mb-2"],[1,"bold-text"],[1,"bold-text",3,"routerLink"],[1,"bold-text","d-flex","align-items-center"],[1,"me-1",3,"ngClass"],[1,"w-100"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-geo-alt","addrss"],["d","M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"],["d","M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],[1,"bold-text","mb-1"],[1,"d-flex",2,"float","right"],[1,"me-3",3,"routerLink"],[1,"edit-icon"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil-square"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"],["href","javascript:void(0);",1,"confirm-text",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash3"],["d","M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Company list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"View/Search Company"),t.qZA()(),t.TgZ(8,"div",4)(9,"div",5)(10,"a",6),t._UZ(11,"img",7),t._uU(12,"Add Company "),t.qZA()()()(),t.YNc(13,v,82,19,"div",8),t.qZA()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",o.tableData))},dependencies:[l.mk,l.sg,c.yS],styles:[".company-details-card[_ngcontent-%COMP%]{border-radius:.625rem;box-shadow:.25rem .25rem .5rem #00000040;padding:30px 50px;border:1px solid #F9D9CC}.company-details-card[_ngcontent-%COMP%]   .bold-text[_ngcontent-%COMP%]{color:#000;font-size:18px;line-height:20px}.company-details-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{padding:0 20px}.company-details-card[_ngcontent-%COMP%]   .grey-text[_ngcontent-%COMP%]{color:#9c9c9c;line-height:20px;font-size:18px}.addrss[_ngcontent-%COMP%]{float:right;height:7%;width:7%;color:#ff9f43}.bg[_ngcontent-%COMP%]{background-color:#f2f3f9;border:none}.green[_ngcontent-%COMP%]{color:#90ee90;width:22%;height:22%}.grey[_ngcontent-%COMP%]{color:gray;width:22%;height:22%}.card-h[_ngcontent-%COMP%]{width:60%}.card-p[_ngcontent-%COMP%]{width:40%}.green-dot[_ngcontent-%COMP%]{width:10px;height:10px;background:#00FF00;border-radius:50%}.edit-icon[_ngcontent-%COMP%]{width:40px;height:40px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center}.edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:25px;width:25px;color:#9c9c9c}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(Z),c.Bz]}),n})();var x=i(5415),T=i(6134),b=i(4006),_=i(906);let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,C,x.T,b.u5,_.ZU,T.ii.forRoot()]}),n})()}}]);