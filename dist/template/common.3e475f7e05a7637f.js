"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8592],{5062:(c,n,i)=>{i.d(n,{y:()=>p});var l=i(2340),s=i(4650),o=i(529);let p=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,e){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,e){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,e){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,e){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}}return a.\u0275fac=function(t){return new(t||a)(s.LFG(o.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3506:(c,n,i)=>{i.d(n,{x:()=>p});var l=i(2340),s=i(4650),o=i(529);let p=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}}return a.\u0275fac=function(t){return new(t||a)(s.LFG(o.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7195:(c,n,i)=>{i.d(n,{g:()=>o});var l=i(6895),s=i(4650);let o=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=s.oAB({type:p}),p.\u0275inj=s.cJS({imports:[l.ez]}),p})()},3512:(c,n,i)=>{i.d(n,{Z:()=>l});const l={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}},3631:(c,n,i)=>{i.d(n,{T:()=>p});var l=i(1135),s=i(4650),o=i(8996);let p=(()=>{class a{constructor(t){this.router=t,this.Loginvalue=new l.X(0),this.Createaccountvalue=new l.X(0),this.Forgotpasswordvalue=new l.X(0)}Createaccount(t){let e=localStorage.getItem("Loginusers"),r=[];r=JSON.parse(e||""),r.find(d=>{if(d.email==t.email)this.Createaccountvalue.next("This email are already exist");else{r.push(t);const h=JSON.stringify(r);localStorage.setItem("Loginusers",h),this.Login(t)}})}Login(t){let e={message:"",status:""},r=localStorage.getItem("Loginusers");const h=JSON.parse(r||"").find(({email:m})=>m===t.email);h?h.password===t.password?(this.Createtoken(t),this.Loginvalue.next("Login success"),this.router.navigate(["/index"]),this.Loginvalue.next(0)):(e.message="Incorrect password",e.status="password",this.Loginvalue.next(e)):(e.message="Email is  not valid",e.status="email",this.Loginvalue.next(e))}Createtoken(t){localStorage.setItem("LoginData","ABCDEFGHI"+t.email+"ghijklmnopqrsz01234567")}Deleteuser(){localStorage.removeItem("Loginusers"),localStorage.removeItem("LoginData")}Checkuser(){if(null===localStorage.getItem("Loginusers")){const r=JSON.stringify([{email:"admin@dreamguys.in",password:"123456"}]);localStorage.setItem("Loginusers",r)}}Forgotpassword(t){let e=localStorage.getItem("Loginusers"),r=[{email:""}];r=JSON.parse(e||"");const d=r.find(({email:h})=>h===t.email);this.Forgotpasswordvalue.next(d||"Email Not Valid")}}return a.\u0275fac=function(t){return new(t||a)(s.LFG(o.F0))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);