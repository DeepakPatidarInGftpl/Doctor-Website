"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[94431],{35337:($,g,a)=>{a.d(g,{D:()=>T});var _=a(96166),u=a(12983),m=a.n(u),L=a(61135),C=a(94650),P=a(36895),y=a(42917);let T=(()=>{class c{constructor(i,f){this._date_pipe=i,this._com=f,this.loaderPdf=new L.X(!1)}generatePdf(i){this.loaderPdf.next(!0),this._com.loadImage().then(f=>{const e=new _.default("p","mm","a4"),x=document.createElement("canvas"),S=x.getContext("2d");x.width=200,x.height=200,S.clearRect(0,0,200,200),S.drawImage(f,0,0,200,200);const O=x.toDataURL("image/png",.9),F=this._date_pipe.transform(i.Fist_date,"dd-MMMM-yyyy"),E=this._date_pipe.transform(i.Secouand_date,"dd-MMMM-yyyy"),z=[i.thead1],B=[i.tbody1],U=[i.table2head],I=i.foot2;let w=21,W=I.length,R=i.table2body.length;if("Goods Received"!==i.Type)if("Invoice"===i.Type)w=18;else if("Purchase Return"===i.Type){w=18;let s=R%w,t=w-s;if(0!==s)for(let o=0;o<t;o++)i.table2body.push([])}else{let s=R%w,t=w-s;if(0!==s)for(let o=0;o<t;o++)i.table2body.push([])}let G=0;if(e.autoTable({head:U,body:i.table2body,foot:I,startY:"Goods Received"===i.Type?99:92,headStyles:{fontSize:7,textColor:[0,0,0],fillColor:[255,202,153]},bodyStyles:{fillColor:[255,255,255],fontSize:8},footStyles:{fillColor:[255,255,255],textColor:[0,0,0],fontSize:7,halign:"left"},margin:{top:"Goods Received"===i.Type?99:92},alternateRowStyles:{fillColor:[255,255,255]},didDrawCell:s=>{G+=s.row.height;const{cell:t,table:o}=s,{x:r,y:n,width:h,height:d}=t;s.column.index==o.columns.length-1?(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(t.x+t.width,t.y,t.x+t.width,t.y+t.height)):(e.setDrawColor(0,0,0),e.setLineWidth(.4),e.line(t.x+t.width,t.y,t.x+t.width,t.y+t.height)),"head"===s.section&&((0==s.row.index||1==s.row.index)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(t.x,t.y,t.x+t.width,t.y)),2==s.row.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(t.x,t.y,t.x+t.width,t.y)),4===s.column.index&&(e.setDrawColor(0,0,0),e.setLineWidth(0),e.line(t.x+t.width,t.y,t.x+t.width,t.y+t.height))),"foot"===s.section&&((0===s.row.index||1===s.row.index||s.row.index===W-1)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(r,n,r+h,n),e.line(r,n+d,r+h,n+d)),("Invoice"===i.Type||"Goods Received"===i.Type&&2===s.row.index)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(r,n,r+h,n),e.line(r,n+d,r+h,n+d))),0==s.column.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(t.x,t.y,t.x,t.y+t.height))}}),"Goods Received"===i.Type&&i.show){let s=Math.floor(G)-105;e.autoTable({head:i.Thead3,body:i.Tbody3,foot:i.Tfoot3,startY:s,headStyles:{fontSize:7,textColor:[0,0,0],fillColor:[255,202,153]},bodyStyles:{fillColor:[255,255,255],fontSize:8},footStyles:{fillColor:[255,255,255],textColor:[0,0,0],fontSize:7,halign:"left"},margin:{top:s},alternateRowStyles:{fillColor:[255,255,255]},didDrawCell:t=>{const{cell:o,table:r}=t,{x:n,y:h,width:d,height:l}=o;t.column.index==r.columns.length-1?(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(o.x+o.width,o.y,o.x+o.width,o.y+o.height)):(e.setDrawColor(0,0,0),e.setLineWidth(.4),e.line(o.x+o.width,o.y,o.x+o.width,o.y+o.height)),"head"===t.section&&((0==t.row.index||1==t.row.index)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(o.x,o.y,o.x+o.width,o.y)),2==t.row.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(o.x,o.y,o.x+o.width,o.y)),4===t.column.index&&(e.setDrawColor(0,0,0),e.setLineWidth(0),e.line(o.x+o.width,o.y,o.x+o.width,o.y+o.height))),"foot"===t.section&&((0===t.row.index||1===t.row.index||t.row.index===W-1)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(n,h,n+d,h),e.line(n,h+l,n+d,h+l)),("Invoice"===i.Type||"Goods Received"===i.Type&&2===t.row.index)&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(n,h,n+d,h),e.line(n,h+l,n+d,h+l))),0==t.column.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(o.x,o.y,o.x,o.y+o.height))}})}const M=e.getNumberOfPages();for(let s=1;s<=M;s++){e.setPage(s),e.setFontSize(9),e.setFontSize(8),s===M?i.table2body.length>=20?(e.text(`${i.company_name} - Proudly coded`,16,276.4),e.setTextColor(24,129,176),e.text("by GFTPL",60,276.4),e.setTextColor(0,0,0),e.text("Thank You For The Business",157,276.4)):(e.text(`${i.company_name} - Proudly coded`,16,275.5),e.setTextColor(24,129,176),e.text("by GFTPL",60,275.5),e.setTextColor(0,0,0),e.text("Thank You For The Business",157,275.5)):i.table2body.length>=20?e.text("Continued on next page",160,280.5):e.text("Continued on next page",190,275);let t=14;e.addImage(O,"PNG",t,8,31,10),e.setFontSize(18),e.setTextColor(256,112,8),e.text(`${i.company_name}`,51,15),e.setTextColor(256,112,8),e.setTextColor(0,0,0),e.setFontSize(9),e.text(`GST ${i.company_gst}`,t,23),e.text(`${i.top_left_address_line1}`,t,27),e.text(`${i.top_left_address_line2}`,t,31),e.text(`Phone: ${i.top_left_phone}`,t,39),e.text(`Email: ${i.top_left_email}`,t,35),e.setTextColor(256,112,8),e.setFontSize(11),e.text("BILLING ADDRESS",t,48),e.setTextColor(0,0,0),e.setFontSize(9),e.text(`${i.company_name}`,t,55),e.text(`${i.BILLING_ADDRESS.address_line_1} ,${i.BILLING_ADDRESS.address_line_2}`,t,59),e.text(`${i.BILLING_ADDRESS.address_line_3}`,t,63),e.text(`Phone: ${i.BILLING_ADDRESS.phone}`,t,67),e.text(`${i.BILLING_ADDRESS.email}`,t,71),e.setTextColor(0,0,0),e.setFontSize(19),e.text(`${i.Type}`,145,14),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,17,142,17),e.setFontSize(7),e.text(`${i.Type} DATE : ${F}`,145,20),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,22,142,22),e.text(`${i.Type} NO : ${i.order_no}`,145,25),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,27,142,27),e.text(`PAGE : ${s}`,145,30),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,32,142,32);let o=32;E&&(e.text(`Expiry Date : ${E}`,145,35),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,37,142,37),o=37),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(142,o,142,17),e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(197,o,197,17);let r=159;e.setTextColor(256,112,8),e.setFontSize(11),e.text("SHIPPING ADDRESS",r,48),e.setTextColor(0,0,0),e.setFontSize(9),e.text(`${i.company_name}`,r,55),e.text(`${i.SHIPPING_ADDRESS.address_line_1} ,${i.SHIPPING_ADDRESS.address_line_2}`,r,59),e.text(`${i.SHIPPING_ADDRESS.address_line_3}`,r,63),e.text(`Phone: ${i.SHIPPING_ADDRESS.phone}`,r,67),e.text(`${i.SHIPPING_ADDRESS.email}`,r,71);const n=e.internal.pageSize.getWidth(),h=5;e.setDrawColor(224,224,224),e.setLineWidth(.2),e.line(h,42,n-h,42),m()(e,{head:z,body:B,startY:75,headStyles:{fontSize:"Goods Received"===i.Type?8:9,textColor:[0,0,0],fillColor:[255,202,153]},alternateRowStyles:{fillColor:[255,255,255]},styles:{lineWidth:0,fillColor:void 0,halign:"center"},didDrawCell:d=>{if("body"===d.section||"head"===d.section){const{cell:l,table:A}=d;0==d.row.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(l.x,l.y,l.x+l.width,l.y)),d.row.index==A.body.length-1&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(l.x,l.y+l.height,l.x+l.width,l.y+l.height)),0==d.column.index&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(l.x,l.y,l.x,l.y+l.height)),d.column.index==A.columns.length-1&&(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(l.x+l.width,l.y,l.x+l.width,l.y+l.height))}}}),"Goods Received"===i.Type?(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(14,105.5,196,105.5)):(e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(14,98.5,196,98.5))}e.save(`${i.Type}.pdf`,{returnPromise:!0}).then(()=>{setTimeout(()=>{this.loaderPdf.next(!1)},1e3)})})}}return c.\u0275fac=function(i){return new(i||c)(C.LFG(P.uU),C.LFG(y.J))},c.\u0275prov=C.Yz7({token:c,factory:c.\u0275fac}),c})()},30597:($,g,a)=>{a.d(g,{l:()=>P});var _=a(94650),u=a(4392),m=a(97185),L=a(42917),C=a(80927);let P=(()=>{class y{constructor(c,p,i,f,e){this.router=c,this.Arout=p,this.toastr=i,this.profileService=f,this.coreService=e}canActivate(c,p){const i=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),i){const f=c.data.allowedRoles,e=i.some(x=>f.includes(x.codename));if(this.coreService.getProfile().subscribe(x=>{this.userDetails=x,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(x);const S=x?.permission,D=this.profileService.getUserDetails();(!D||D.length!==S.length)&&(this.profileService.setUserPermission(S),window.location.reload())}),e)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return y.\u0275fac=function(c){return new(c||y)(_.LFG(u.F0),_.LFG(u.gz),_.LFG(m._W),_.LFG(L.J),_.LFG(C.p))},y.\u0275prov=_.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()}}]);