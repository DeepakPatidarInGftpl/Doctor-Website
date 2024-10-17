"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[49965],{47537:(c,u,p)=>{p.d(u,{b:()=>d});var l=p(80529),h=p(92340),o=p(94650);let d=(()=>{class s{constructor(t){this.http=t,this.apiUrl=`${h.N.api}`,this.currentItems=[],this.cartItems=[],this.orders=[];const e=localStorage.getItem("orders"),r=localStorage.getItem("cartItems");r&&(this.cartItems=JSON.parse(r)),e&&(this.orders=JSON.parse(e))}getCurrentItems(){return this.currentItems}getCartItems(){return this.cartItems}getOrders(){return this.orders}addToCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e?this.currentItems[e].quantity+=1:this.currentItems.push(t)}increaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(this.currentItems[e].quantity+=1)}decreaseCurrent(t){const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&(1==this.currentItems[e].quantity?this.removeFromCurrent(t):this.currentItems[e].quantity-=1)}removeFromCurrent(t){console.warn(t,"service");const e=this.currentItems.findIndex(r=>r.id===t.id&&r.batch[0].id===t.batch[0].id);-1!==e&&this.currentItems.splice(e,1)}clearCurrent(){this.currentItems=[]}addToCart(t){const e=this.cartItems.find(r=>r.id===t.id);e?e.quantity+=t.quantity:this.cartItems.push(t),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}increase(t){this.cartItems.find(r=>r.id===t.id).quantity+=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}decrease(t){const e=this.cartItems.find(r=>r.id===t.id);1==e.quantity?this.removeFromCart(e):(e.quantity-=1,localStorage.setItem("cartItems",JSON.stringify(this.cartItems)))}removeFromCart(t){const e=this.cartItems.findIndex(r=>r.id===t.id);-1!==e&&this.cartItems.splice(e,1),localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}clearCart(){this.cartItems=[],localStorage.removeItem("cartItems")}generateOrder(t){this.orders.push(t),localStorage.setItem("orders",JSON.stringify(this.orders))}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/pos/Addcustomers/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCustomer(t){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/?search="+t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAllCustomer(){return this.http.get(this.apiUrl+"/pv-api/pos/customer_filter/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAllProducts(){return this.http.get(this.apiUrl+"/pv-api/pos/all_products/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAllCustomers(){return this.http.get(this.apiUrl+"/pv-api/pos/all_customers/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getTaxes(){return this.http.get(this.apiUrl+"/pv-api/pos/tax_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getCompanyBank(){return this.http.get(this.apiUrl+"/pv-api/pos/company_bank/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/pos/payment_terms_pos/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}generateOrderNew(t){return this.http.post(this.apiUrl+"/pv-api/pos/pos_new_order/",t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}receiptPayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/receipt_advance_payment_or_againest_bill/",t)}purchasePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/party_advance_payment_or_againest_bill/",t)}expensePayment(t){return this.http.post(this.apiUrl+"/pv-api/pos/expance/",t)}getPOSOrders(t,e,r,i){let a=this.apiUrl+"/pv-api/pos/pos_orders/";const n=new URLSearchParams;return n.append("page",t),n.append("page_size",e),r&&n.append("product_id",String(r)),i&&n.append("start_date",String(i.s)),i&&n.append("end_date",String(i.e)),this.http.get(a+(n.toString()?"?"+n.toString():""))}getPOSOrderDetails(t){return this.http.get(this.apiUrl+"/pv-api/pos/pos_order_detail/?order_id="+t)}getExpensePayments(){return this.http.get(this.apiUrl+"/pv-api/pos/expance/")}getPurchasePayments(){return this.http.get(this.apiUrl+"/pv-api/pos/all_payments/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getSalesPayments(){return this.http.get(this.apiUrl+"/pv-api/pos/all_receipts/",{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}getReceiptDueOrder(t){return this.http.get(this.apiUrl+"/pv-api/pos/receipt_due_order/?customer_id="+t,{headers:new l.WM({Authorization:`token ${localStorage.getItem("token")}`})})}productSearch(t){return this.http.get(`${this.apiUrl+"/pv-api/pos/product_search/?search="}${t}`)}paymentModesLogo(){return this.http.get(""+(this.apiUrl+"/pv-api/web/payment_modes_logo/"))}addPosPaymentVoucher(t){return this.http.post(this.apiUrl+"/pv-api/pos/payment_voucher/",t)}addPosCreditNoteList(t){return this.http.post(this.apiUrl+"/pv-api/pos/credit_note/",t)}addPosExpenseVoucher(t){return this.http.post(this.apiUrl+"/pv-api/pos/expence_voucher/",t)}addPosRecieptVoucher(t){return this.http.post(this.apiUrl+"/pv-api/pos/recipt_voucher/",t)}getPosPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/pos/payment_voucher/")}getPosCreditNoteList(){return this.http.get(this.apiUrl+"/pv-api/pos/credit_note/")}getPosExpenseVoucher(){return this.http.get(this.apiUrl+"/pv-api/pos/expence_voucher/")}getPosRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/pos/recipt_voucher/")}getPosCreditNoteByAccountId(t){return this.http.get(this.apiUrl+"/pv-api/pos/credit_note/?account_id="+t)}getPosCreditLimitByUserId(t){return this.http.get(this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="+t)}posOrderReturn(t){return this.http.post(this.apiUrl+"/pv-api/pos/pos_order_return/",t)}}return s.\u0275fac=function(t){return new(t||s)(o.LFG(l.eN))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},72170:(c,u,p)=>{p.d(u,{M:()=>d});var l=p(92340),h=p(94650),o=p(80529);let d=(()=>{class s{constructor(t){this.http=t,this.apiUrl=`${l.N.api}`}getSalesOrderfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/sale_order/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getSalesOrder(){return this.http.get(this.apiUrl+"/pv-api/sale_order/")}getSalesOrderByUserId(t){return this.http.get(this.apiUrl+"/pv-api/sale_order/?user_id="+t)}getSalesOrderById(t){return this.http.get(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`)}SalesOrderIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`,e)}addSalesOrder(t){return this.http.post(this.apiUrl+"/pv-api/sale_order/",t)}updateSalesOrder(t,e){return this.http.put(`${this.apiUrl+"/pv-api/sale_order/?sale_order_id="}${e}`,t)}deleteSalesOrder(t){return this.http.delete(`${this.apiUrl+"/pv-api/sale_order/?id="}${t}`)}getSalesEstimatefy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/estimate/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getSalesEstimate(){return this.http.get(this.apiUrl+"/pv-api/estimate/")}getSalesEstimateByUserId(t){return this.http.get(this.apiUrl+"/pv-api/estimate/?user_id="+t)}getSalesEstimateById(t){return this.http.get(`${this.apiUrl+"/pv-api/estimate/?id="}${t}`)}SalesEstimateIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/estimate/?id="}${t}`,e)}addSalesEstimate(t){return this.http.post(this.apiUrl+"/pv-api/estimate/",t)}updateSalesEstimate(t,e){return this.http.put(`${this.apiUrl+"/pv-api/estimate/?estimate_id="}${e}`,t)}deleteSalesEstimate(t){return this.http.delete(`${this.apiUrl+"/pv-api/estimate/?id="}${t}`)}getSalesBillfyWithProductId(t,e,r){let i=this.apiUrl+"/pv-api/sale_bill/";const a=new URLSearchParams;return a.append("financial_year",t),a.append("product_id",String(e)),a.append("start_date",r.s),a.append("end_date",r.e),this.http.get(i+(a.toString()?"?"+a.toString():""))}getSalesBillfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/sale_bill/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getSalesBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?id="}${t}`)}getSalesBillByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/sale_bill/?user_id="}${t}`)}SalesBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/sale_bill/?id="}${t}`,e)}addSalesBill(t){return this.http.post(this.apiUrl+"/pv-api/sale_bill/",t)}updateSalesBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/sale_bill/?sale_bill_id="}${e}`,t)}deleteSalesBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/sale_bill/?id="}${t}`)}getSalesMaterialOutwardfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/material_outward/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getSalesMaterialOutward(){return this.http.get(this.apiUrl+"/pv-api/material_outward/")}getSalesMaterialOutwardById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_outward/?id="}${t}`)}SalesMaterialOutwardIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_outward/?id="}${t}`,e)}addSalesMaterialOutward(t){return this.http.post(this.apiUrl+"/pv-api/material_outward/",t)}updateSalesMaterialOutward(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_outward/?material_outward_id="}${e}`,t)}deleteSalesMaterialOutward(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_outward/?id="}${t}`)}getSaleReturnfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/sale_return/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getSaleReturn(){return this.http.get(this.apiUrl+"/pv-api/sale_return/")}getSaleReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/sale_return/?id="}${t}`)}SaleReturnIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/sale_return/?id="}${t}`,e)}addSaleReturn(t){return this.http.post(this.apiUrl+"/pv-api/sale_return/",t)}updateSaleReturn(t,e){return this.http.put(`${this.apiUrl+"/pv-api/sale_return/?sale_return_id="}${e}`,t)}deleteSaleReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/sale_return/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}filterVariant(t,e,r){let i=this.apiUrl+"/pv-api/sales_product_filter/";const a=[];return t&&a.push(`category=${t}`),e&&a.push(`subcategory=${e}`),r&&a.push(`search=${r}`),a.length>0&&(i+="?"+a.join("&")),this.http.get(i)}getSaleOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleOrder")}getSaleBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleBill")}getSaleReturnPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=SaleReturn")}getEstimatePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=Estimate")}getMaterialOutwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialOutward")}getAdvanceBookingPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=AdvanceBooking")}getUser(t){return this.http.get(this.apiUrl+"/pv-api/contact-user/?search="+t)}getAdvanceBookingfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/advance_booking/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getAdvanceBooking(){return this.http.get(this.apiUrl+"/pv-api/advance_booking/")}getAdvanceBookingById(t){return this.http.get(`${this.apiUrl+"/pv-api/advance_booking/?id="}${t}`)}AdvanceBookingIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/advance_booking/?id="}${t}`,e)}addAdvanceBooking(t){return this.http.post(this.apiUrl+"/pv-api/advance_booking/",t)}updateAdvanceBooking(t,e){return this.http.put(`${this.apiUrl+"/pv-api/advance_booking/?id="}${e}`,t)}deleteAdvanceBooking(t){return this.http.delete(`${this.apiUrl+"/pv-api/advance_booking/?id="}${t}`)}getDelivryChallanFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/delivery_challan/";const i=[];if(t&&i.push(`financial_year=${t}`),e&&e.length>0){const a=JSON.stringify(e);console.log(a),console.log(a?.length),i.push(`branch=${a}`)}return i.length>0&&(r+="?"+i.join("&")),this.http.get(r)}getDelivryChallan(){return this.http.get(this.apiUrl+"/pv-api/delivery_challan/")}getDelivryChallanById(t){return this.http.get(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${t}`)}DelivryChallanIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${t}`,e)}addDelivryChallan(t){return this.http.post(this.apiUrl+"/pv-api/delivery_challan/",t)}updateDelivryChallan(t,e){return this.http.put(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${e}`,t)}deleteDelivryChallan(t){return this.http.delete(`${this.apiUrl+"/pv-api/delivery_challan/?id="}${t}`)}advanceBookingStatusUpdate(t){return this.http.post(this.apiUrl+"/pv-api/advance_booking_status_update/",t)}deliveryChallanStatusUpdate(t){return this.http.post(this.apiUrl+"/pv-api/delivery_challan_status_update/",t)}}return s.\u0275fac=function(t){return new(t||s)(h.LFG(o.eN))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);