"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8592],{76396:(v,d,a)=>{a.d(d,{u:()=>$});const n={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const h=new Uint8Array(16);function i(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(h)}const p=[];for(let s=0;s<256;++s)p.push((s+256).toString(16).slice(1));const g=function _(s,o,c){if(n.randomUUID&&!o&&!s)return n.randomUUID();const y=(s=s||{}).random||(s.rng||i)();if(y[6]=15&y[6]|64,y[8]=63&y[8]|128,o){c=c||0;for(let U=0;U<16;++U)o[c+U]=y[U];return o}return function t(s,o=0){return(p[s[o+0]]+p[s[o+1]]+p[s[o+2]]+p[s[o+3]]+"-"+p[s[o+4]]+p[s[o+5]]+"-"+p[s[o+6]]+p[s[o+7]]+"-"+p[s[o+8]]+p[s[o+9]]+"-"+p[s[o+10]]+p[s[o+11]]+p[s[o+12]]+p[s[o+13]]+p[s[o+14]]+p[s[o+15]]).toLowerCase()}(y)};var m=a(94650);let $=(()=>{class s{constructor(){this.heldBills=[]}addToHold(c){c.id=g(),this.heldBills.push(c)}removeFromHold(c){this.heldBills=this.heldBills.filter(y=>y.id!==c)}getHeldBills(){return this.heldBills}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},25062:(v,d,a)=>{a.d(d,{y:()=>h});var l=a(92340),n=a(94650),u=a(80529);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,e){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,e){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,e){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,e){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,e)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,e){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${e}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,e){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,e)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,e)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},53506:(v,d,a)=>{a.d(d,{x:()=>h});var l=a(92340),n=a(94650),u=a(80529);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}updateDebitNotes(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,e)}updatePurchaseReturn(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,e,r,_){let g=this.apiUrl+"/pv-api/purchase_product_filter/";const m=[];return t&&m.push(`supplier=${t}`),e&&m.push(`category=${e}`),r&&m.push(`subcategory=${r}`),_&&m.push(`search=${_}`),m.length>0&&(g+="?"+m.join("&")),this.http.get(g)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},54270:(v,d,a)=>{a.d(d,{v:()=>h});var l=a(80529),n=a(92340),u=a(94650);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${n.N.api}`,this.currentItems=[],this.cartItems=[],this.orders=[];const e=localStorage.getItem("orders"),r=localStorage.getItem("cartItems");r&&(this.cartItems=JSON.parse(r)),e&&(this.orders=JSON.parse(e))}getCurrentItems(){return this.currentItems}getCartItems(){return this.cartItems}getOrders(){return this.orders}addToCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e?this.currentItems[e].quantity+=1:this.currentItems.push(t)}increaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(this.currentItems[e].quantity+=1)}decreaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(1==this.currentItems[e].quantity?this.removeFromCurrent(t):this.currentItems[e].quantity-=1)}removeFromCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&this.currentItems.splice(e,1)}clearCurrent(){this.currentItems=[]}addToCart(t){const e=this.cartItems.find(r=>r.id===t.id);e?e.quantity+=t.quantity:this.cartItems.push(t),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}increase(t){this.cartItems.find(r=>r.id===t.id).quantity+=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}decrease(t){const e=this.cartItems.find(r=>r.id===t.id);1==e.quantity?this.removeFromCart(e):(e.quantity-=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems)))}removeFromCart(t){const e=this.cartItems.findIndex(r=>r.id===t.id);-1!==e&&this.cartItems.splice(e,1),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}clearCart(){this.cartItems=[],localStorage.removeItem("cartItems")}generateOrder(t){this.orders.push(t),localStorage.setItem("orders",JSON.stringify(this.orders))}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/pos/Addcustomers/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCustomer(t){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/?search="+t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getTaxes(){return this.http.get(this.apiUrl+"/pv-api/pos/tax_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyBank(){return this.http.get(this.apiUrl+"/pv-api/pos/company_bank/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCustomers(){return this.http.get(this.apiUrl+"/pv-api/customer/")}searchCustomert(t){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/?search="+t)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/pos/payment_terms_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}generateOrderNew(t){return this.http.post(this.apiUrl+"/pv-api/pos/pos_new_order/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}receiptPayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/receipt_advance_payment_or_againest_bill/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}purchasePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/party_advance_payment_or_againest_bill/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}expensePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/expance/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getReceiptDueOrder(t){return this.http.get(this.apiUrl+"/pv-api/pos/receipt_due_order/?customer_id="+t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getReceiptOrder(t){return this.http.get(`${this.apiUrl+"/pv-api/pos/receipt_due_order/?customer_id="}${t}`)}getRecipt(){return this.http.get(this.apiUrl+"/pv-api/pos/all_receipts/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/pos/all_payments/")}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/pos/all_payments?id="}${t}`)}getExpense(){return this.http.get(this.apiUrl+"/pv-api/pos/expance/")}deleteExpence(t){return this.http.delete(`${this.apiUrl+"/pv-api/pos/expance/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(u.LFG(l.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},72170:(v,d,a)=>{a.d(d,{M:()=>h});var l=a(92340),n=a(94650),u=a(80529);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSalesOrder(){return this.http.get(this.apiUrl+"/pv-api/sale_order/")}getSalesOrderById(t){return this.http.get(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`)}SalesOrderIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`,e)}addSalesOrder(t){return this.http.post(this.apiUrl+"/pv-api/sale_order/",t)}updateSalesOrder(t,e){return this.http.put(`${this.apiUrl+"/pv-api/sale_order/?id="}${e}`,t)}deleteSalesOrder(t){return this.http.delete(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1809:(v,d,a)=>{a.d(d,{r:()=>i});var l=a(39646),n=a(94650),u=a(97185),h=a(80529);let i=(()=>{class p{constructor(e,r){this.toastr=e,this.http=r,this.apiUrl="https://my-api.com/data"}getData(){if(navigator.onLine)return this.http.get(this.apiUrl);{const e=localStorage.getItem("my-data");return(0,l.of)(JSON.parse(e))}}syncData(e){return navigator.onLine?this.http.post(this.apiUrl,e):(localStorage.setItem("my-data",JSON.stringify(e)),(0,l.of)(e))}saveDataLocal(){this.toastr.error("You are in offline mode","Offline",{timeOut:5e3})}syncData1(){this.toastr.success("Your connection is restored","Online",{timeOut:5e3})}checkOnlineStatus(){window.addEventListener("online",()=>{this.syncData1()}),window.addEventListener("offline",()=>{this.saveDataLocal()})}}return p.\u0275fac=function(e){return new(e||p)(n.LFG(u._W),n.LFG(h.eN))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},71071:(v,d,a)=>{a.d(d,{p:()=>h});var l=a(92340),n=a(94650),u=a(80529);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNoteIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}addDebitNote(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}updateDebitNote(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}CreditNoteIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`,e)}addCreditNote(t){return this.http.post(this.apiUrl+"/pv-api/credit_note/",t)}updateCreditNote(t,e){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`,t)}deleteCreditNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},92559:(v,d,a)=>{a.d(d,{K:()=>h});var l=a(92340),n=a(94650),u=a(80529);let h=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getTrendingProducts(){return this.http.get(this.apiUrl+"/pv-api/trending_product/")}addTrendingProducts(t){return this.http.post(this.apiUrl+"/pv-api/trending_product/",t)}getTrendingProductsById(t){return this.http.get(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}TrendingProductsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`,e)}updateTrendingProducts(t,e){return this.http.put(`${this.apiUrl+"/pv-api/trending_product/?id="}${e}`,t)}deleteTrendingProducts(t){return this.http.delete(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}getBanner(){return this.http.get(this.apiUrl+"/pv-api/banner/")}getBannerbById(t){return this.http.get(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}addBanner(t){return this.http.post(this.apiUrl+"/pv-api/banner/",t)}updateBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/banner/?id="}${e}`,t)}deleteBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}bannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/banner/?id="}${t}`,e)}getFooterFeature(){return this.http.get(this.apiUrl+"/pv-api/footer_features/")}getFooterFeatureById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}footerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`,e)}addFooterFeature(t){return this.http.post(this.apiUrl+"/pv-api/footer_features/",t)}updateFooterFeature(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer_features/?id="}${e}`,t)}deleteFooterFeature(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}deletesize(t){return this.http.delete(`${this.apiUrl+"/pv-api/size/?id="}${t}`)}getDealOfTheDay(){return this.http.get(this.apiUrl+"/pv-api/deals_of_the_day/")}addDealOfTheDay(t){return this.http.post(this.apiUrl+"/pv-api/deals_of_the_day/",t)}getDealOfTheDayById(t){return this.http.get(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}DealOfTheDayIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`,e)}updateDealOfTheDay(t,e){return this.http.put(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${e}`,t)}deleteDealOfTheDay(t){return this.http.delete(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}getAddressStore(){return this.http.get(this.apiUrl+"/pv-api/store_address/")}addAddressStore(t){return this.http.post(this.apiUrl+"/pv-api/store_address/",t)}getAddressStoreById(t){return this.http.get(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}AddressStoreIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`,e)}updateAddressStore(t,e){return this.http.put(`${this.apiUrl+"/pv-api/store_address/?id="}${e}`,t)}deleteAddressStore(t){return this.http.delete(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}getFooter(){return this.http.get(this.apiUrl+"/pv-api/footer/")}addFooter(t){return this.http.post(this.apiUrl+"/pv-api/footer/",t)}getFooterById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}FooterIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer/?id="}${t}`,e)}updateFooter(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer/?id="}${e}`,t)}deleteFooter(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}getCoupon(){return this.http.get(this.apiUrl+"/pv-api/coupon_dashboard/")}addCoupon(t){return this.http.post(this.apiUrl+"/pv-api/coupon_dashboard/",t)}getCouponById(t){return this.http.get(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}CouponIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`,e)}updateCoupon(t,e){return this.http.put(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${e}`,t)}deleteCoupon(t){return this.http.delete(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}getReason(){return this.http.get(this.apiUrl+"/pv-api/reason/")}addReason(t){return this.http.post(this.apiUrl+"/pv-api/reason/",t)}getReasonById(t){return this.http.get(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}ReasonIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/reason/?id="}${t}`,e)}updateReason(t,e){return this.http.put(`${this.apiUrl+"/pv-api/reason/?id="}${e}`,t)}deleteReason(t){return this.http.delete(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}getaboutBanner(){return this.http.get(this.apiUrl+"/pv-api/about_banner/")}addaboutBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_banner/",t)}getaboutBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}aboutBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`,e)}updateaboutBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_banner/?id="}${e}`,t)}deleteaboutBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}getaboutFooterBanner(){return this.http.get(this.apiUrl+"/pv-api/about_footer_banner/")}addaboutFooterBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_footer_banner/",t)}getaboutFooterBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}aboutFooterBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`,e)}updateaboutFooterBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${e}`,t)}deleteaboutFooterBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}getnewArrivalBanner(){return this.http.get(this.apiUrl+"/pv-api/new_arrivals_banner/")}addnewArrivalBanner(t){return this.http.post(this.apiUrl+"/pv-api/new_arrivals_banner/",t)}getnewArrivalBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}newArrivalBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`,e)}updatenewArrivalBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${e}`,t)}deletenewArrivalBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}getratingAndReview(){return this.http.get(this.apiUrl+"/pv-api/rating_and_review_dashboard/")}updateratingAndReview(t,e){return this.http.put(`${this.apiUrl+"/pv-api/rating_and_review_dashboard/?id="}${e}`,t)}getProductOrder(){return this.http.get(this.apiUrl+"/pv-api/website_orders_dashboard/")}getProductOrderById(t){return this.http.get(`${this.apiUrl+"/pv-api/website_orders_dashboard/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},37195:(v,d,a)=>{a.d(d,{g:()=>u});var l=a(36895),n=a(94650);let u=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[l.ez]}),h})()},3512:(v,d,a)=>{a.d(d,{Z:()=>l});const l={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}},83631:(v,d,a)=>{a.d(d,{T:()=>h});var l=a(61135),n=a(94650),u=a(88996);let h=(()=>{class i{constructor(t){this.router=t,this.Loginvalue=new l.X(0),this.Createaccountvalue=new l.X(0),this.Forgotpasswordvalue=new l.X(0)}Createaccount(t){let e=localStorage.getItem("Loginusers"),r=[];r=JSON.parse(e||""),r.find(_=>{if(_.email==t.email)this.Createaccountvalue.next("This email are already exist");else{r.push(t);const g=JSON.stringify(r);localStorage.setItem("Loginusers",g),this.Login(t)}})}Login(t){let e={message:"",status:""},r=localStorage.getItem("Loginusers");const g=JSON.parse(r||"").find(({email:m})=>m===t.email);g?g.password===t.password?(this.Createtoken(t),this.Loginvalue.next("Login success"),this.router.navigate(["/index"]),this.Loginvalue.next(0)):(e.message="Incorrect password",e.status="password",this.Loginvalue.next(e)):(e.message="Email is  not valid",e.status="email",this.Loginvalue.next(e))}Createtoken(t){localStorage.setItem("LoginData","ABCDEFGHI"+t.email+"ghijklmnopqrsz01234567")}Deleteuser(){localStorage.removeItem("Loginusers"),localStorage.removeItem("LoginData")}Checkuser(){if(null===localStorage.getItem("Loginusers")){const r=JSON.stringify([{email:"admin@dreamguys.in",password:"123456"}]);localStorage.setItem("Loginusers",r)}}Forgotpassword(t){let e=localStorage.getItem("Loginusers"),r=[{email:""}];r=JSON.parse(e||"");const _=r.find(({email:g})=>g===t.email);this.Forgotpasswordvalue.next(_||"Email Not Valid")}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(u.F0))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);