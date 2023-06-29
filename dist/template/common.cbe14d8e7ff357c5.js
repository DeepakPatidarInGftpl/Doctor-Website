"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8592],{5062:($,c,s)=>{s.d(c,{y:()=>d});var i=s(2340),l=s(4650),u=s(529);let d=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${i.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,e){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,e){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,e){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,e){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,e)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,e){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${e}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(u.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3506:($,c,s)=>{s.d(c,{x:()=>d});var i=s(2340),l=s(4650),u=s(529);let d=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${i.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}updateDebitNotes(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(u.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},2559:($,c,s)=>{s.d(c,{K:()=>d});var i=s(2340),l=s(4650),u=s(529);let d=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${i.N.api}`}getVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getTrendingProducts(){return this.http.get(this.apiUrl+"/pv-api/trending_product/")}addTrendingProducts(t){return this.http.post(this.apiUrl+"/pv-api/trending_product/",t)}getTrendingProductsById(t){return this.http.get(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}TrendingProductsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`,e)}updateTrendingProducts(t,e){return this.http.put(`${this.apiUrl+"/pv-api/trending_product/?id="}${e}`,t)}deleteTrendingProducts(t){return this.http.delete(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}getBanner(){return this.http.get(this.apiUrl+"/pv-api/banner/")}getBannerbById(t){return this.http.get(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}addBanner(t){return this.http.post(this.apiUrl+"/pv-api/banner/",t)}updateBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/banner/?id="}${e}`,t)}deleteBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}bannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/banner/?id="}${t}`,e)}getFooterFeature(){return this.http.get(this.apiUrl+"/pv-api/footer_features/")}getFooterFeatureById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}footerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`,e)}addFooterFeature(t){return this.http.post(this.apiUrl+"/pv-api/footer_features/",t)}updateFooterFeature(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer_features/?id="}${e}`,t)}deleteFooterFeature(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}deletesize(t){return this.http.delete(`${this.apiUrl+"/pv-api/size/?id="}${t}`)}getDealOfTheDay(){return this.http.get(this.apiUrl+"/pv-api/deals_of_the_day/")}addDealOfTheDay(t){return this.http.post(this.apiUrl+"/pv-api/deals_of_the_day/",t)}getDealOfTheDayById(t){return this.http.get(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}DealOfTheDayIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`,e)}updateDealOfTheDay(t,e){return this.http.put(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${e}`,t)}deleteDealOfTheDay(t){return this.http.delete(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}getAddressStore(){return this.http.get(this.apiUrl+"/pv-api/store_address/")}addAddressStore(t){return this.http.post(this.apiUrl+"/pv-api/store_address/",t)}getAddressStoreById(t){return this.http.get(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}AddressStoreIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`,e)}updateAddressStore(t,e){return this.http.put(`${this.apiUrl+"/pv-api/store_address/?id="}${e}`,t)}deleteAddressStore(t){return this.http.delete(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}getFooter(){return this.http.get(this.apiUrl+"/pv-api/footer/")}addFooter(t){return this.http.post(this.apiUrl+"/pv-api/footer/",t)}getFooterById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}FooterIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer/?id="}${t}`,e)}updateFooter(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer/?id="}${e}`,t)}deleteFooter(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}getCoupon(){return this.http.get(this.apiUrl+"/pv-api/coupon_dashboard/")}addCoupon(t){return this.http.post(this.apiUrl+"/pv-api/coupon_dashboard/",t)}getCouponById(t){return this.http.get(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}CouponIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`,e)}updateCoupon(t,e){return this.http.put(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${e}`,t)}deleteCoupon(t){return this.http.delete(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}getReason(){return this.http.get(this.apiUrl+"/pv-api/reason/")}addReason(t){return this.http.post(this.apiUrl+"/pv-api/reason/",t)}getReasonById(t){return this.http.get(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}ReasonIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/reason/?id="}${t}`,e)}updateReason(t,e){return this.http.put(`${this.apiUrl+"/pv-api/reason/?id="}${e}`,t)}deleteReason(t){return this.http.delete(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}getaboutBanner(){return this.http.get(this.apiUrl+"/pv-api/about_banner/")}addaboutBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_banner/",t)}getaboutBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}aboutBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`,e)}updateaboutBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_banner/?id="}${e}`,t)}deleteaboutBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}getaboutFooterBanner(){return this.http.get(this.apiUrl+"/pv-api/about_footer_banner/")}addaboutFooterBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_footer_banner/",t)}getaboutFooterBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}aboutFooterBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`,e)}updateaboutFooterBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${e}`,t)}deleteaboutFooterBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}getnewArrivalBanner(){return this.http.get(this.apiUrl+"/pv-api/new_arrivals_banner/")}addnewArrivalBanner(t){return this.http.post(this.apiUrl+"/pv-api/new_arrivals_banner/",t)}getnewArrivalBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}newArrivalBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`,e)}updatenewArrivalBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${e}`,t)}deletenewArrivalBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(u.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7195:($,c,s)=>{s.d(c,{g:()=>u});var i=s(6895),l=s(4650);let u=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[i.ez]}),d})()},8468:($,c,s)=>{s.d(c,{I:()=>P});var i=s(6895),l=s(906),u=s(4006),d=s(8996),a=s(3162),m=s(3189),t=s(4333),e=s(4040),r=s(455),_=s(5415),f=s(6134),x=s(4650);let P=(()=>{class E{}return E.\u0275fac=function(U){return new(U||E)},E.\u0275mod=x.oAB({type:E}),E.\u0275inj=x.cJS({imports:[i.ez,d.Bz,l.ZU,u.u5,u.UX,a.Cv,m.h,t.JX,e.l,r.rP,_.T,f.ii,i.ez,d.Bz,l.ZU,u.u5,u.UX,a.Cv,m.h,t.JX,e.l,r.rP,_.T,f.ii]}),E})()},3512:($,c,s)=>{s.d(c,{Z:()=>i});const i={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}},3631:($,c,s)=>{s.d(c,{T:()=>d});var i=s(1135),l=s(4650),u=s(8996);let d=(()=>{class a{constructor(t){this.router=t,this.Loginvalue=new i.X(0),this.Createaccountvalue=new i.X(0),this.Forgotpasswordvalue=new i.X(0)}Createaccount(t){let e=localStorage.getItem("Loginusers"),r=[];r=JSON.parse(e||""),r.find(_=>{if(_.email==t.email)this.Createaccountvalue.next("This email are already exist");else{r.push(t);const f=JSON.stringify(r);localStorage.setItem("Loginusers",f),this.Login(t)}})}Login(t){let e={message:"",status:""},r=localStorage.getItem("Loginusers");const f=JSON.parse(r||"").find(({email:x})=>x===t.email);f?f.password===t.password?(this.Createtoken(t),this.Loginvalue.next("Login success"),this.router.navigate(["/index"]),this.Loginvalue.next(0)):(e.message="Incorrect password",e.status="password",this.Loginvalue.next(e)):(e.message="Email is  not valid",e.status="email",this.Loginvalue.next(e))}Createtoken(t){localStorage.setItem("LoginData","ABCDEFGHI"+t.email+"ghijklmnopqrsz01234567")}Deleteuser(){localStorage.removeItem("Loginusers"),localStorage.removeItem("LoginData")}Checkuser(){if(null===localStorage.getItem("Loginusers")){const r=JSON.stringify([{email:"admin@dreamguys.in",password:"123456"}]);localStorage.setItem("Loginusers",r)}}Forgotpassword(t){let e=localStorage.getItem("Loginusers"),r=[{email:""}];r=JSON.parse(e||"");const _=r.find(({email:f})=>f===t.email);this.Forgotpasswordvalue.next(_||"Email Not Valid")}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(u.F0))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3162:($,c,s)=>{s.d(c,{Cv:()=>U,pW:()=>E});var i=s(4650),l=s(6895),u=s(3238),d=s(1281),a=s(727),m=s(4968),t=s(9300);const e=["primaryValueBar"],r=(0,u.pj)(class{constructor(h){this._elementRef=h}},"primary"),_=new i.OlP("mat-progress-bar-location",{providedIn:"root",factory:function f(){const h=(0,i.f3M)(l.K0),v=h?h.location:null;return{getPathname:()=>v?v.pathname+v.search:""}}}),x=new i.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let P=0,E=(()=>{class h extends r{constructor(p,n,o,b,y,g){super(p),this._ngZone=n,this._animationMode=o,this._changeDetectorRef=g,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new i.vpe,this._animationEndSubscription=a.w0.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+P++;const M=b?b.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${M}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===o,y&&(y.color&&(this.color=this.defaultColor=y.color),this.mode=y.mode||this.mode)}get value(){return this._value}set value(p){this._value=A((0,d.su)(p)||0),this._changeDetectorRef?.markForCheck()}get bufferValue(){return this._bufferValue}set bufferValue(p){this._bufferValue=A(p||0),this._changeDetectorRef?.markForCheck()}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const p=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,m.R)(p,"transitionend").pipe((0,t.h)(n=>n.target===p)).subscribe(()=>{0!==this.animationEnd.observers.length&&("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return h.\u0275fac=function(p){return new(p||h)(i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(i.QbO,8),i.Y36(_,8),i.Y36(x,8),i.Y36(i.sBO))},h.\u0275cmp=i.Xpm({type:h,selectors:[["mat-progress-bar"]],viewQuery:function(p,n){if(1&p&&i.Gf(e,5),2&p){let o;i.iGM(o=i.CRH())&&(n._primaryValueBar=o.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(p,n){2&p&&(i.uIk("aria-valuenow","indeterminate"===n.mode||"query"===n.mode?null:n.value)("mode",n.mode),i.ekj("_mat-animation-noopable",n._isNoopAnimation))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[i.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(p,n){1&p&&(i.TgZ(0,"div",0),i.O4$(),i.TgZ(1,"svg",1)(2,"defs")(3,"pattern",2),i._UZ(4,"circle",3),i.qZA()(),i._UZ(5,"rect",4),i.qZA(),i.kcU(),i._UZ(6,"div",5)(7,"div",6,7)(9,"div",8),i.qZA()),2&p&&(i.xp6(3),i.Q6J("id",n.progressbarId),i.xp6(2),i.uIk("fill",n._rectangleFillValue),i.xp6(1),i.Q6J("ngStyle",n._bufferTransform()),i.xp6(1),i.Q6J("ngStyle",n._primaryTransform()))},dependencies:[l.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}'],encapsulation:2,changeDetection:0}),h})();function A(h,v=0,p=100){return Math.max(v,Math.min(p,h))}let U=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=i.oAB({type:h}),h.\u0275inj=i.cJS({imports:[l.ez,u.BQ,u.BQ]}),h})()},1572:($,c,s)=>{s.d(c,{Cq:()=>h});var i=s(1281),l=s(3353),u=s(531),d=s(6895),a=s(4650),m=s(3238),t=s(727);function e(p,n){if(1&p&&(a.O4$(),a._UZ(0,"circle",4)),2&p){const o=a.oxw(),b=a.MAs(1);a.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+o._spinnerAnimationLabel)("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(b)),a.uIk("r",o._getCircleRadius())}}function r(p,n){if(1&p&&(a.O4$(),a._UZ(0,"circle",4)),2&p){const o=a.oxw(),b=a.MAs(1);a.Udp("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(b)),a.uIk("r",o._getCircleRadius())}}const x=(0,m.pj)(class{constructor(p){this._elementRef=p}},"primary"),P=new a.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function E(){return{diameter:100}}});class U extends x{constructor(n,o,b,y,g,M,k,I){super(n),this._document=b,this._diameter=100,this._value=0,this._resizeSubscription=t.w0.EMPTY,this.mode="determinate";const B=U._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),B.has(b.head)||B.set(b.head,new Set([100])),this._noopAnimations="NoopAnimations"===y&&!!g&&!g._forceAnimations,"mat-spinner"===n.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),g&&(g.color&&(this.color=this.defaultColor=g.color),g.diameter&&(this.diameter=g.diameter),g.strokeWidth&&(this.strokeWidth=g.strokeWidth)),o.isBrowser&&o.SAFARI&&k&&M&&I&&(this._resizeSubscription=k.change(150).subscribe(()=>{"indeterminate"===this.mode&&I.run(()=>M.markForCheck())}))}get diameter(){return this._diameter}set diameter(n){this._diameter=(0,i.su)(n),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(n){this._strokeWidth=(0,i.su)(n)}get value(){return"determinate"===this.mode?this._value:0}set value(n){this._value=Math.max(0,Math.min(100,(0,i.su)(n)))}ngOnInit(){const n=this._elementRef.nativeElement;this._styleRoot=(0,l.kV)(n)||this._document.head,this._attachStyleNode(),n.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const n=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${n} ${n}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(n){const o=50*(n.currentScale??1);return`${o}% ${o}%`}_attachStyleNode(){const n=this._styleRoot,o=this._diameter,b=U._diameters;let y=b.get(n);if(!y||!y.has(o)){const g=this._document.createElement("style");g.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),g.textContent=this._getAnimationText(),n.appendChild(g),y||(y=new Set,b.set(n,y)),y.add(o)}}_getAnimationText(){const n=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*n).replace(/END_VALUE/g,""+.2*n).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}U._diameters=new WeakMap,U.\u0275fac=function(n){return new(n||U)(a.Y36(a.SBq),a.Y36(l.t4),a.Y36(d.K0,8),a.Y36(a.QbO,8),a.Y36(P),a.Y36(a.sBO),a.Y36(u.rL),a.Y36(a.R0b))},U.\u0275cmp=a.Xpm({type:U,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(n,o){2&n&&(a.uIk("aria-valuemin","determinate"===o.mode?0:null)("aria-valuemax","determinate"===o.mode?100:null)("aria-valuenow","determinate"===o.mode?o.value:null)("mode",o.mode),a.Udp("width",o.diameter,"px")("height",o.diameter,"px"),a.ekj("_mat-animation-noopable",o._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[a.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(n,o){1&n&&(a.O4$(),a.TgZ(0,"svg",0,1),a.YNc(2,e,1,11,"circle",2),a.YNc(3,r,1,9,"circle",3),a.qZA()),2&n&&(a.Udp("width",o.diameter,"px")("height",o.diameter,"px"),a.Q6J("ngSwitch","indeterminate"===o.mode),a.uIk("viewBox",o._getViewBox()),a.xp6(2),a.Q6J("ngSwitchCase",!0),a.xp6(1),a.Q6J("ngSwitchCase",!1))},dependencies:[d.RF,d.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let h=(()=>{class p{}return p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[m.BQ,d.ez,m.BQ]}),p})()}}]);