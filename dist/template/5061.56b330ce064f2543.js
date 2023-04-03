"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5061],{2917:(d,u,i)=>{i.d(u,{J:()=>c});var r=i(529),l=i(1135),t=i(2340),p=i(1571),m=i(4948);let c=(()=>{class s{constructor(e,n){this.http=e,this.HttpService=n,this.edit=new l.X(""),this.companyBehaviour=new l.X(null),this.apiUrl=`${t.N.api}`}editData(e){this.edit.next(e),console.log(e),localStorage.setItem("editCompany",JSON.stringify(e))}getCompany(){return this.http.get(this.apiUrl+"/pv-api/company/",{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyById(e){return this.http.get(`${this.apiUrl+"/pv-api/company/?id="}${e}`,{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}postCompany(e){return this.http.post(this.apiUrl+"/pv-api/company/",e,{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}updateCompany(e,n){return this.http.put(`${this.apiUrl+"/pv-api/company/?id="}${n}`,e,{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteCompany(e){return this.http.delete(`${this.apiUrl+"/pv-api/company/?id="}${e}`,{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}countryList(){return this.http.get(this.apiUrl+"/country/",{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}stateList(){return this.http.get(this.apiUrl+"/state/",{headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})})}deleteC(e,n){var o={body:{id:n},headers:new r.WM({Authorization:`token ${localStorage.getItem("token")}`})};return this.http.request("delete",`${this.apiUrl}${e}`,o)}}return s.\u0275fac=function(e){return new(e||s)(p.LFG(r.eN),p.LFG(m.Y))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5061:(d,u,i)=>{i.r(u),i.d(u,{CompanyDetailsModule:()=>h});var r=i(6895),l=i(1728),t=i(1571),p=i(2917);const c=[{path:"",component:(()=>{class e{constructor(o,a){this.companyService=o,this.Arout=a}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getId()}getId(){this.companyService.getCompanyById(this.id).subscribe(o=>{this.companyDetails=o})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(o){var a=document.createElement("script");a.src=o,a.async=!1,document.body.appendChild(a)}LoadScript(o){var a=document.createElement("script");a.src=o,a.async=!1,document.body.appendChild(a)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.J),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-company-details"]],decls:62,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"row"],[1,"col-lg-8","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Company Details"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Full details of a Company"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"ul",7)(12,"li")(13,"h4"),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"h6"),t._uU(16),t.qZA()(),t.TgZ(17,"li")(18,"h4"),t._uU(19,"Phone"),t.qZA(),t.TgZ(20,"h6"),t._uU(21),t.qZA()(),t.TgZ(22,"li")(23,"h4"),t._uU(24,"Email"),t.qZA(),t.TgZ(25,"h6"),t._uU(26),t.qZA()(),t.TgZ(27,"li")(28,"h4"),t._uU(29,"Country"),t.qZA(),t.TgZ(30,"h6"),t._uU(31),t.qZA()(),t.TgZ(32,"li")(33,"h4"),t._uU(34,"State"),t.qZA(),t.TgZ(35,"h6"),t._uU(36),t.qZA()(),t.TgZ(37,"li")(38,"h4"),t._uU(39,"Pincode"),t.qZA(),t.TgZ(40,"h6"),t._uU(41),t.qZA()(),t.TgZ(42,"li")(43,"h4"),t._uU(44,"Financial Year"),t.qZA(),t.TgZ(45,"h6"),t._uU(46),t.qZA()(),t.TgZ(47,"li")(48,"h4"),t._uU(49,"GST"),t.qZA(),t.TgZ(50,"h6"),t._uU(51),t.qZA()(),t.TgZ(52,"li")(53,"h4"),t._uU(54,"Currency"),t.qZA(),t.TgZ(55,"h6"),t._uU(56),t.qZA()(),t.TgZ(57,"li")(58,"h4"),t._uU(59,"Is Active"),t.qZA(),t.TgZ(60,"h6"),t._uU(61),t.qZA()()()()()()()()),2&o&&(t.xp6(16),t.Oqu(a.companyDetails.name),t.xp6(5),t.Oqu(a.companyDetails.phone),t.xp6(5),t.Oqu(a.companyDetails.email),t.xp6(5),t.Oqu(a.companyDetails.country),t.xp6(5),t.Oqu(a.companyDetails.state),t.xp6(5),t.Oqu(a.companyDetails.pincode),t.xp6(5),t.Oqu(a.companyDetails.financial_year),t.xp6(5),t.Oqu(a.companyDetails.gst),t.xp6(5),t.Oqu(a.companyDetails.currency),t.xp6(5),t.Oqu(a.companyDetails.is_active))}}),e})()}];let s=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(c),l.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,s]}),e})()}}]);