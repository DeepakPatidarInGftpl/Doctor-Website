"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2854],{82854:(Z,u,a)=>{a.r(u),a.d(u,{CompanyDetailsModule:()=>l});var r=a(36895),c=a(88996),e=a(94650),d=a(42917);const n=[{path:"",component:(()=>{class o{constructor(s,t){this.companyService=s,this.Arout=t}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getId()}getId(){this.companyService.getCompanyById(this.id).subscribe(s=>{this.companyDetails=s})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(s){var t=document.createElement("script");t.src=s,t.async=!1,document.body.appendChild(t)}LoadScript(s){var t=document.createElement("script");t.src=s,t.async=!1,document.body.appendChild(t)}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(d.J),e.Y36(c.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-company-details"]],decls:62,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"row"],[1,"col-lg-8","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Company Details"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Full details of a Company"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"ul",7)(12,"li")(13,"h4"),e._uU(14,"Name"),e.qZA(),e.TgZ(15,"h6"),e._uU(16),e.qZA()(),e.TgZ(17,"li")(18,"h4"),e._uU(19,"Phone"),e.qZA(),e.TgZ(20,"h6"),e._uU(21),e.qZA()(),e.TgZ(22,"li")(23,"h4"),e._uU(24,"Email"),e.qZA(),e.TgZ(25,"h6"),e._uU(26),e.qZA()(),e.TgZ(27,"li")(28,"h4"),e._uU(29,"Country"),e.qZA(),e.TgZ(30,"h6"),e._uU(31),e.qZA()(),e.TgZ(32,"li")(33,"h4"),e._uU(34,"State"),e.qZA(),e.TgZ(35,"h6"),e._uU(36),e.qZA()(),e.TgZ(37,"li")(38,"h4"),e._uU(39,"Pincode"),e.qZA(),e.TgZ(40,"h6"),e._uU(41),e.qZA()(),e.TgZ(42,"li")(43,"h4"),e._uU(44,"Financial Year"),e.qZA(),e.TgZ(45,"h6"),e._uU(46),e.qZA()(),e.TgZ(47,"li")(48,"h4"),e._uU(49,"GST"),e.qZA(),e.TgZ(50,"h6"),e._uU(51),e.qZA()(),e.TgZ(52,"li")(53,"h4"),e._uU(54,"Currency"),e.qZA(),e.TgZ(55,"h6"),e._uU(56),e.qZA()(),e.TgZ(57,"li")(58,"h4"),e._uU(59,"Is Active"),e.qZA(),e.TgZ(60,"h6"),e._uU(61),e.qZA()()()()()()()()),2&s&&(e.xp6(16),e.Oqu(t.companyDetails.name),e.xp6(5),e.Oqu(t.companyDetails.phone),e.xp6(5),e.Oqu(t.companyDetails.email),e.xp6(5),e.Oqu(t.companyDetails.country),e.xp6(5),e.Oqu(t.companyDetails.state),e.xp6(5),e.Oqu(t.companyDetails.pincode),e.xp6(5),e.Oqu(t.companyDetails.financial_year),e.xp6(5),e.Oqu(t.companyDetails.gst),e.xp6(5),e.Oqu(t.companyDetails.currency),e.xp6(5),e.Oqu(t.companyDetails.is_active))}}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["view_company"]}}];let g=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(n),c.Bz]}),o})(),l=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,g]}),o})()},30597:(Z,u,a)=>{a.d(u,{l:()=>h});var r=a(94650),c=a(88996),e=a(97185),d=a(42917),m=a(80927);let h=(()=>{class n{constructor(l,o,i,s,t){this.router=l,this.Arout=o,this.toastr=i,this.profileService=s,this.coreService=t}canActivate(l,o){const i=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(s=>{this.userDetails=s,this.permissions=this.userDetails?.permission}),i){const s=l.data.allowedRoles;console.log(s,"allowedRoles");const t=i.some(p=>s.includes(p.codename));if(console.log(t),this.coreService.getProfile().subscribe(p=>{this.userDetails=p,this.profileService.setUserDetails(this.userDetails);const y=p?.permission,v=this.profileService.getUserDetails();(!v||v.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),t)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(r.LFG(c.F0),r.LFG(c.gz),r.LFG(e._W),r.LFG(d.J),r.LFG(m.p))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);