"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5626],{65626:(R,c,t)=>{t.r(c),t.d(c,{StockTransferRequestDetailsModule:()=>v});var a=t(36895),l=t(88996),r=t(94650);const m=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-stock-transfer-request-details"]],decls:2,vars:0,template:function(s,i){1&s&&(r.TgZ(0,"p"),r._uU(1,"stock-transfer-request-details works!"),r.qZA())}}),e})(),canActivate:[t(30597).l],data:{allowedRoles:["view_transferrequest"]}}];let n=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[l.Bz.forChild(m),l.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[a.ez,n]}),e})()},30597:(R,c,t)=>{t.d(c,{l:()=>m});var a=t(94650),l=t(88996),r=t(97185),f=t(42917),h=t(80927);let m=(()=>{class n{constructor(e,o,s,i,u){this.router=e,this.Arout=o,this.toastr=s,this.profileService=i,this.coreService=u}canActivate(e,o){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(i=>{this.userDetails=i,this.permissions=this.userDetails?.permission}),s){const i=e.data.allowedRoles;console.log(i,"allowedRoles");const u=s.some(d=>i.includes(d.codename));if(console.log(u),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const D=d?.permission,p=this.profileService.getUserDetails();(!p||p.length!==D.length)&&(this.profileService.setUserPermission(D),window.location.reload())}),u)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(l.F0),a.LFG(l.gz),a.LFG(r._W),a.LFG(f.J),a.LFG(h.p))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);