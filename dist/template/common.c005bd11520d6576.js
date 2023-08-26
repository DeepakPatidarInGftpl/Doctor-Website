"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8592],{76396:(U,_,a)=>{a.d(_,{u:()=>P});const h={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const u=new Uint8Array(16);function i(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(u)}const n=[];for(let s=0;s<256;++s)n.push((s+256).toString(16).slice(1));const f=function v(s,d,g){if(h.randomUUID&&!d&&!s)return h.randomUUID();const $=(s=s||{}).random||(s.rng||i)();if($[6]=15&$[6]|64,$[8]=63&$[8]|128,d){g=g||0;for(let S=0;S<16;++S)d[g+S]=$[S];return d}return function t(s,d=0){return(n[s[d+0]]+n[s[d+1]]+n[s[d+2]]+n[s[d+3]]+"-"+n[s[d+4]]+n[s[d+5]]+"-"+n[s[d+6]]+n[s[d+7]]+"-"+n[s[d+8]]+n[s[d+9]]+"-"+n[s[d+10]]+n[s[d+11]]+n[s[d+12]]+n[s[d+13]]+n[s[d+14]]+n[s[d+15]]).toLowerCase()}($)};var x=a(94650);let P=(()=>{class s{constructor(){this.heldBills=[]}addToHold(g){g.id=f(),this.heldBills.push(g)}removeFromHold(g){this.heldBills=this.heldBills.filter($=>$.id!==g)}getHeldBills(){return this.heldBills}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275prov=x.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},25062:(U,_,a)=>{a.d(_,{y:()=>u});var o=a(92340),h=a(94650),c=a(80529);let u=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${o.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,e){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,e){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,e){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,e){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,e)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,e){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${e}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,e){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,e)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}}return i.\u0275fac=function(t){return new(t||i)(h.LFG(c.eN))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},53506:(U,_,a)=>{a.d(_,{x:()=>u});var o=a(92340),h=a(94650),c=a(80529);let u=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${o.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}updateDebitNotes(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}}return i.\u0275fac=function(t){return new(t||i)(h.LFG(c.eN))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},54270:(U,_,a)=>{a.d(_,{v:()=>u});var o=a(80529),h=a(92340),c=a(94650);let u=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${h.N.api}`,this.currentItems=[],this.cartItems=[],this.orders=[];const e=localStorage.getItem("orders"),r=localStorage.getItem("cartItems");r&&(this.cartItems=JSON.parse(r)),e&&(this.orders=JSON.parse(e))}getCurrentItems(){return this.currentItems}getCartItems(){return this.cartItems}getOrders(){return this.orders}addToCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e?this.currentItems[e].quantity+=1:this.currentItems.push(t)}increaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(this.currentItems[e].quantity+=1)}decreaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(1==this.currentItems[e].quantity?this.removeFromCurrent(t):this.currentItems[e].quantity-=1)}removeFromCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&this.currentItems.splice(e,1)}clearCurrent(){this.currentItems=[]}addToCart(t){const e=this.cartItems.find(r=>r.id===t.id);e?e.quantity+=t.quantity:this.cartItems.push(t),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}increase(t){this.cartItems.find(r=>r.id===t.id).quantity+=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}decrease(t){const e=this.cartItems.find(r=>r.id===t.id);1==e.quantity?this.removeFromCart(e):(e.quantity-=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems)))}removeFromCart(t){const e=this.cartItems.findIndex(r=>r.id===t.id);-1!==e&&this.cartItems.splice(e,1),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}clearCart(){this.cartItems=[],localStorage.removeItem("cartItems")}generateOrder(t){this.orders.push(t),localStorage.setItem("orders",JSON.stringify(this.orders))}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/pos/Addcustomers/",t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCustomer(t){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/?search="+t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/",{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getTaxes(){return this.http.get(this.apiUrl+"/pv-api/pos/tax_pos/",{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyBank(){return this.http.get(this.apiUrl+"/pv-api/pos/company_bank/",{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCustomers(){return this.http.get(this.apiUrl+"/pv-api/customer/")}searchCustomert(t){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/?search="+t)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/pos/payment_terms_pos/",{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}generateOrderNew(t){return this.http.post(this.apiUrl+"/pv-api/pos/pos_new_order/",t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}receiptPayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/receipt_advance_payment_or_againest_bill/",t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}purchasePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/party_advance_payment_or_againest_bill/",t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}expensePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/expance/",t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getReceiptDueOrder(t){return this.http.get(this.apiUrl+"/pv-api/pos/receipt_due_order/?customer_id="+t,{headers:new o.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getReceiptOrder(t){return this.http.get(`${this.apiUrl+"/pv-api/pos/receipt_due_order/?customer_id="}${t}`)}getRecipt(){return this.http.get(this.apiUrl+"/pv-api/pos/all_receipts/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/pos/all_payments/")}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/pos/all_payments?id="}${t}`)}getExpense(){return this.http.get(this.apiUrl+"/pv-api/pos/expance/")}deleteExpence(t){return this.http.delete(`${this.apiUrl+"/pv-api/pos/expance/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(c.LFG(o.eN))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1809:(U,_,a)=>{a.d(_,{r:()=>i});var o=a(39646),h=a(94650),c=a(97185),u=a(80529);let i=(()=>{class n{constructor(e,r){this.toastr=e,this.http=r,this.apiUrl="https://my-api.com/data"}getData(){if(navigator.onLine)return this.http.get(this.apiUrl);{const e=localStorage.getItem("my-data");return(0,o.of)(JSON.parse(e))}}syncData(e){return navigator.onLine?this.http.post(this.apiUrl,e):(localStorage.setItem("my-data",JSON.stringify(e)),(0,o.of)(e))}saveDataLocal(){this.toastr.error("You are in offline mode","Offline",{timeOut:5e3})}syncData1(){this.toastr.success("Your connection is restored","Online",{timeOut:5e3})}checkOnlineStatus(){window.addEventListener("online",()=>{this.syncData1()}),window.addEventListener("offline",()=>{this.saveDataLocal()})}}return n.\u0275fac=function(e){return new(e||n)(h.LFG(c._W),h.LFG(u.eN))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},92559:(U,_,a)=>{a.d(_,{K:()=>u});var o=a(92340),h=a(94650),c=a(80529);let u=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${o.N.api}`}getVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getTrendingProducts(){return this.http.get(this.apiUrl+"/pv-api/trending_product/")}addTrendingProducts(t){return this.http.post(this.apiUrl+"/pv-api/trending_product/",t)}getTrendingProductsById(t){return this.http.get(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}TrendingProductsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`,e)}updateTrendingProducts(t,e){return this.http.put(`${this.apiUrl+"/pv-api/trending_product/?id="}${e}`,t)}deleteTrendingProducts(t){return this.http.delete(`${this.apiUrl+"/pv-api/trending_product/?id="}${t}`)}getBanner(){return this.http.get(this.apiUrl+"/pv-api/banner/")}getBannerbById(t){return this.http.get(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}addBanner(t){return this.http.post(this.apiUrl+"/pv-api/banner/",t)}updateBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/banner/?id="}${e}`,t)}deleteBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/banner/?id="}${t}`)}bannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/banner/?id="}${t}`,e)}getFooterFeature(){return this.http.get(this.apiUrl+"/pv-api/footer_features/")}getFooterFeatureById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}footerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`,e)}addFooterFeature(t){return this.http.post(this.apiUrl+"/pv-api/footer_features/",t)}updateFooterFeature(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer_features/?id="}${e}`,t)}deleteFooterFeature(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer_features/?id="}${t}`)}deletesize(t){return this.http.delete(`${this.apiUrl+"/pv-api/size/?id="}${t}`)}getDealOfTheDay(){return this.http.get(this.apiUrl+"/pv-api/deals_of_the_day/")}addDealOfTheDay(t){return this.http.post(this.apiUrl+"/pv-api/deals_of_the_day/",t)}getDealOfTheDayById(t){return this.http.get(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}DealOfTheDayIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`,e)}updateDealOfTheDay(t,e){return this.http.put(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${e}`,t)}deleteDealOfTheDay(t){return this.http.delete(`${this.apiUrl+"/pv-api/deals_of_the_day/?id="}${t}`)}getAddressStore(){return this.http.get(this.apiUrl+"/pv-api/store_address/")}addAddressStore(t){return this.http.post(this.apiUrl+"/pv-api/store_address/",t)}getAddressStoreById(t){return this.http.get(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}AddressStoreIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`,e)}updateAddressStore(t,e){return this.http.put(`${this.apiUrl+"/pv-api/store_address/?id="}${e}`,t)}deleteAddressStore(t){return this.http.delete(`${this.apiUrl+"/pv-api/store_address/?id="}${t}`)}getFooter(){return this.http.get(this.apiUrl+"/pv-api/footer/")}addFooter(t){return this.http.post(this.apiUrl+"/pv-api/footer/",t)}getFooterById(t){return this.http.get(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}FooterIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/footer/?id="}${t}`,e)}updateFooter(t,e){return this.http.put(`${this.apiUrl+"/pv-api/footer/?id="}${e}`,t)}deleteFooter(t){return this.http.delete(`${this.apiUrl+"/pv-api/footer/?id="}${t}`)}getCoupon(){return this.http.get(this.apiUrl+"/pv-api/coupon_dashboard/")}addCoupon(t){return this.http.post(this.apiUrl+"/pv-api/coupon_dashboard/",t)}getCouponById(t){return this.http.get(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}CouponIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`,e)}updateCoupon(t,e){return this.http.put(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${e}`,t)}deleteCoupon(t){return this.http.delete(`${this.apiUrl+"/pv-api/coupon_dashboard/?id="}${t}`)}getReason(){return this.http.get(this.apiUrl+"/pv-api/reason/")}addReason(t){return this.http.post(this.apiUrl+"/pv-api/reason/",t)}getReasonById(t){return this.http.get(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}ReasonIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/reason/?id="}${t}`,e)}updateReason(t,e){return this.http.put(`${this.apiUrl+"/pv-api/reason/?id="}${e}`,t)}deleteReason(t){return this.http.delete(`${this.apiUrl+"/pv-api/reason/?id="}${t}`)}getaboutBanner(){return this.http.get(this.apiUrl+"/pv-api/about_banner/")}addaboutBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_banner/",t)}getaboutBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}aboutBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`,e)}updateaboutBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_banner/?id="}${e}`,t)}deleteaboutBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_banner/?id="}${t}`)}getaboutFooterBanner(){return this.http.get(this.apiUrl+"/pv-api/about_footer_banner/")}addaboutFooterBanner(t){return this.http.post(this.apiUrl+"/pv-api/about_footer_banner/",t)}getaboutFooterBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}aboutFooterBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`,e)}updateaboutFooterBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${e}`,t)}deleteaboutFooterBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/about_footer_banner/?id="}${t}`)}getnewArrivalBanner(){return this.http.get(this.apiUrl+"/pv-api/new_arrivals_banner/")}addnewArrivalBanner(t){return this.http.post(this.apiUrl+"/pv-api/new_arrivals_banner/",t)}getnewArrivalBannerById(t){return this.http.get(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}newArrivalBannerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`,e)}updatenewArrivalBanner(t,e){return this.http.put(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${e}`,t)}deletenewArrivalBanner(t){return this.http.delete(`${this.apiUrl+"/pv-api/new_arrivals_banner/?id="}${t}`)}getratingAndReview(){return this.http.get(this.apiUrl+"/pv-api/rating_and_review_dashboard/")}updateratingAndReview(t,e){return this.http.put(`${this.apiUrl+"/pv-api/rating_and_review_dashboard/?id="}${e}`,t)}getProductOrder(){return this.http.get(this.apiUrl+"/pv-api/website_orders_dashboard/")}getProductOrderById(t){return this.http.get(`${this.apiUrl+"/pv-api/website_orders_dashboard/?id="}${t}`)}}return i.\u0275fac=function(t){return new(t||i)(h.LFG(c.eN))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},37195:(U,_,a)=>{a.d(_,{g:()=>c});var o=a(36895),h=a(94650);let c=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=h.oAB({type:u}),u.\u0275inj=h.cJS({imports:[o.ez]}),u})()},8468:(U,_,a)=>{a.d(_,{I:()=>P});var o=a(36895),h=a(30906),c=a(24006),u=a(88996),i=a(73162),n=a(43189),t=a(54333),e=a(54040),r=a(90455),v=a(65415),f=a(96134),x=a(94650);let P=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=x.oAB({type:s}),s.\u0275inj=x.cJS({imports:[o.ez,u.Bz,h.ZU,c.u5,c.UX,i.Cv,n.h,t.JX,e.l,r.rP,v.T,f.ii,o.ez,u.Bz,h.ZU,c.u5,c.UX,i.Cv,n.h,t.JX,e.l,r.rP,v.T,f.ii]}),s})()},3512:(U,_,a)=>{a.d(_,{Z:()=>o});const o={type:"doc",content:[{type:"heading",attrs:{level:1,align:null},content:[{type:"text",text:"Hello"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This is editable text. "},{type:"text",marks:[{type:"text_color",attrs:{color:"#d93f0b"}}],text:"You can focus it and start typing"},{type:"text",text:"."}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"code"}],text:"code block"}]},{type:"blockquote",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is "},{type:"text",marks:[{type:"text_background_color",attrs:{backgroundColor:"#fbca04"}}],text:"simply dummy"},{type:"text",text:" text of the printing and typesetting industry. "},{type:"text",marks:[{type:"em"}],text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{type:"text",text:", when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}]},{type:"heading",attrs:{level:2,align:null},content:[{type:"text",text:"The code block is a code editor"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"This editor has been wired up to render code blocks as instances of the "},{type:"text",marks:[{type:"link",attrs:{href:"https://codemirror.net",title:"https://codemirror.net",target:"_blank"}}],text:"CodeMirror"},{type:"text",text:" code editor, which provides "},{type:"text",marks:[{type:"link",attrs:{href:"https://en.wikipedia.org",title:"",target:"_blank"}}],text:"syntax highlighting"},{type:"text",text:", auto-indentation, and similar."}]},{type:"code_block",content:[{type:"text",text:"function max(a, b) {\n  return a > b ? a : b\n}"}]},{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."}]},{type:"heading",attrs:{level:4,align:"center"},content:[{type:"text",text:"Mr. Bean"}]},{type:"paragraph",attrs:{align:"center"},content:[{type:"text",text:"The image is resizable. Include "},{type:"text",marks:[{type:"strong"}],text:"image"},{type:"text",text:" plugin to enable image resizing"}]},{type:"heading",attrs:{level:3,align:"center"},content:[{type:"image",attrs:{src:"https://wallpapercave.com/wp/wp2318909.png",alt:"Bean",title:"Mr. Bean",width:"98px"}}]},{type:"heading",attrs:{level:3,align:null},content:[{type:"text",text:"Bullet list"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"bullet_list",content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]},{type:"heading",attrs:{level:4,align:null},content:[{type:"text",text:"Ordered List"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",marks:[{type:"strong"}],text:"Lorem Ipsum"},{type:"text",text:"\xa0is simply dummy text of the printing and typesetting industry"}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 1"},{type:"text",text:") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]},{type:"ordered_list",attrs:{order:1},content:[{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"("},{type:"text",marks:[{type:"strong"}],text:"depth 2"},{type:"text",text:") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}]}]}]}]}]}]},{type:"list_item",content:[{type:"paragraph",attrs:{align:null},content:[{type:"text",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}]}]}]}]}},83631:(U,_,a)=>{a.d(_,{T:()=>u});var o=a(61135),h=a(94650),c=a(88996);let u=(()=>{class i{constructor(t){this.router=t,this.Loginvalue=new o.X(0),this.Createaccountvalue=new o.X(0),this.Forgotpasswordvalue=new o.X(0)}Createaccount(t){let e=localStorage.getItem("Loginusers"),r=[];r=JSON.parse(e||""),r.find(v=>{if(v.email==t.email)this.Createaccountvalue.next("This email are already exist");else{r.push(t);const f=JSON.stringify(r);localStorage.setItem("Loginusers",f),this.Login(t)}})}Login(t){let e={message:"",status:""},r=localStorage.getItem("Loginusers");const f=JSON.parse(r||"").find(({email:x})=>x===t.email);f?f.password===t.password?(this.Createtoken(t),this.Loginvalue.next("Login success"),this.router.navigate(["/index"]),this.Loginvalue.next(0)):(e.message="Incorrect password",e.status="password",this.Loginvalue.next(e)):(e.message="Email is  not valid",e.status="email",this.Loginvalue.next(e))}Createtoken(t){localStorage.setItem("LoginData","ABCDEFGHI"+t.email+"ghijklmnopqrsz01234567")}Deleteuser(){localStorage.removeItem("Loginusers"),localStorage.removeItem("LoginData")}Checkuser(){if(null===localStorage.getItem("Loginusers")){const r=JSON.stringify([{email:"admin@dreamguys.in",password:"123456"}]);localStorage.setItem("Loginusers",r)}}Forgotpassword(t){let e=localStorage.getItem("Loginusers"),r=[{email:""}];r=JSON.parse(e||"");const v=r.find(({email:f})=>f===t.email);this.Forgotpasswordvalue.next(v||"Email Not Valid")}}return i.\u0275fac=function(t){return new(t||i)(h.LFG(c.F0))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},51572:(U,_,a)=>{a.d(_,{Cq:()=>$});var o=a(21281),h=a(83353),c=a(30531),u=a(36895),i=a(94650),n=a(3238),t=a(50727);function e(m,l){if(1&m&&(i.O4$(),i._UZ(0,"circle",4)),2&m){const p=i.oxw(),I=i.MAs(1);i.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+p._spinnerAnimationLabel)("stroke-dashoffset",p._getStrokeDashOffset(),"px")("stroke-dasharray",p._getStrokeCircumference(),"px")("stroke-width",p._getCircleStrokeWidth(),"%")("transform-origin",p._getCircleTransformOrigin(I)),i.uIk("r",p._getCircleRadius())}}function r(m,l){if(1&m&&(i.O4$(),i._UZ(0,"circle",4)),2&m){const p=i.oxw(),I=i.MAs(1);i.Udp("stroke-dashoffset",p._getStrokeDashOffset(),"px")("stroke-dasharray",p._getStrokeCircumference(),"px")("stroke-width",p._getCircleStrokeWidth(),"%")("transform-origin",p._getCircleTransformOrigin(I)),i.uIk("r",p._getCircleRadius())}}const x=(0,n.pj)(class{constructor(m){this._elementRef=m}},"primary"),P=new i.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function s(){return{diameter:100}}});class g extends x{constructor(l,p,I,E,y,A,b,D){super(l),this._document=I,this._diameter=100,this._value=0,this._resizeSubscription=t.w0.EMPTY,this.mode="determinate";const M=g._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),M.has(I.head)||M.set(I.head,new Set([100])),this._noopAnimations="NoopAnimations"===E&&!!y&&!y._forceAnimations,"mat-spinner"===l.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),y&&(y.color&&(this.color=this.defaultColor=y.color),y.diameter&&(this.diameter=y.diameter),y.strokeWidth&&(this.strokeWidth=y.strokeWidth)),p.isBrowser&&p.SAFARI&&b&&A&&D&&(this._resizeSubscription=b.change(150).subscribe(()=>{"indeterminate"===this.mode&&D.run(()=>A.markForCheck())}))}get diameter(){return this._diameter}set diameter(l){this._diameter=(0,o.su)(l),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(l){this._strokeWidth=(0,o.su)(l)}get value(){return"determinate"===this.mode?this._value:0}set value(l){this._value=Math.max(0,Math.min(100,(0,o.su)(l)))}ngOnInit(){const l=this._elementRef.nativeElement;this._styleRoot=(0,h.kV)(l)||this._document.head,this._attachStyleNode(),l.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const l=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${l} ${l}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(l){const p=50*(l.currentScale??1);return`${p}% ${p}%`}_attachStyleNode(){const l=this._styleRoot,p=this._diameter,I=g._diameters;let E=I.get(l);if(!E||!E.has(p)){const y=this._document.createElement("style");y.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),y.textContent=this._getAnimationText(),l.appendChild(y),E||(E=new Set,I.set(l,E)),E.add(p)}}_getAnimationText(){const l=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*l).replace(/END_VALUE/g,""+.2*l).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}g._diameters=new WeakMap,g.\u0275fac=function(l){return new(l||g)(i.Y36(i.SBq),i.Y36(h.t4),i.Y36(u.K0,8),i.Y36(i.QbO,8),i.Y36(P),i.Y36(i.sBO),i.Y36(c.rL),i.Y36(i.R0b))},g.\u0275cmp=i.Xpm({type:g,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(l,p){2&l&&(i.uIk("aria-valuemin","determinate"===p.mode?0:null)("aria-valuemax","determinate"===p.mode?100:null)("aria-valuenow","determinate"===p.mode?p.value:null)("mode",p.mode),i.Udp("width",p.diameter,"px")("height",p.diameter,"px"),i.ekj("_mat-animation-noopable",p._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[i.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(l,p){1&l&&(i.O4$(),i.TgZ(0,"svg",0,1),i.YNc(2,e,1,11,"circle",2),i.YNc(3,r,1,9,"circle",3),i.qZA()),2&l&&(i.Udp("width",p.diameter,"px")("height",p.diameter,"px"),i.Q6J("ngSwitch","indeterminate"===p.mode),i.uIk("viewBox",p._getViewBox()),i.xp6(2),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1))},dependencies:[u.RF,u.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let $=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=i.oAB({type:m}),m.\u0275inj=i.cJS({imports:[n.BQ,u.ez,n.BQ]}),m})()}}]);