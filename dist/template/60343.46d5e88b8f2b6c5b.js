"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[60343],{60343:(y,h,l)=>{l.r(h),l.d(h,{ContactsModule:()=>D});var m=l(36895),s=l(4392),t=l(94650);const C=[{path:"vendor",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(66131)]).then(l.bind(l,66131)).then(d=>d.VendorModule)},{path:"addVendor",loadChildren:()=>Promise.all([l.e(30906),l.e(5026)]).then(l.bind(l,5026)).then(d=>d.AddVendorModule)},{path:"updateVendor/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(71035)]).then(l.bind(l,71035)).then(d=>d.UpdateVendorModule)},{path:"vendorDetails/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(88961)]).then(l.bind(l,88961)).then(d=>d.DetailVendorModule)},{path:"supplier",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(14605)]).then(l.bind(l,14605)).then(d=>d.SupplierModule)},{path:"addSupplier",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(30531),l.e(74241),l.e(95113),l.e(35747)]).then(l.bind(l,35747)).then(d=>d.AddSupplierModule)},{path:"updateSupplier/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(60856)]).then(l.bind(l,60856)).then(d=>d.UpdateSupplierModule)},{path:"supplierDetails/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(73787)]).then(l.bind(l,73787)).then(d=>d.DetailSupplierModule)},{path:"employee",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(68592),l.e(41433)]).then(l.bind(l,41433)).then(d=>d.EmployeeModule)},{path:"addEmployee",loadChildren:()=>Promise.all([l.e(30906),l.e(24246)]).then(l.bind(l,24246)).then(d=>d.AddEmployeeModule)},{path:"updateEmployee/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(64042)]).then(l.bind(l,64042)).then(d=>d.UpdateEmployeeModule)},{path:"employeeDetails/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(24700)]).then(l.bind(l,24700)).then(d=>d.DetailEmployeeModule)},{path:"customer",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(68592),l.e(85937)]).then(l.bind(l,85937)).then(d=>d.CustomerModule)},{path:"addCustomer",loadChildren:()=>Promise.all([l.e(30906),l.e(80272)]).then(l.bind(l,80272)).then(d=>d.AddCustomerModule)},{path:"updateCustomer/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(65509)]).then(l.bind(l,65509)).then(d=>d.UpdateCustomerModule)},{path:"customerDetails/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(68592),l.e(37400)]).then(l.bind(l,37400)).then(d=>d.DetailCustomerModule)},{path:"transport",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(68905)]).then(l.bind(l,68905)).then(d=>d.TransportModule)},{path:"addTransport",loadChildren:()=>Promise.all([l.e(30906),l.e(87928)]).then(l.bind(l,87928)).then(d=>d.AddTransportModule)},{path:"transportUpdate/:id",loadChildren:()=>l.e(9198).then(l.bind(l,9198)).then(d=>d.UpdateTransportModule)},{path:"transportDetails/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(4433)]).then(l.bind(l,4433)).then(d=>d.DetailTransportModule)},{path:"dealerList",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(96166),l.e(12983),l.e(72502),l.e(2454),l.e(72326),l.e(64558)]).then(l.bind(l,64558)).then(d=>d.DealerListModule)},{path:"addDealer",loadChildren:()=>Promise.all([l.e(30906),l.e(8604)]).then(l.bind(l,8604)).then(d=>d.AddDealerModule)},{path:"updateDealer/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(64570)]).then(l.bind(l,64570)).then(d=>d.UpdateDealerModule)},{path:"detailDealer/:id",loadChildren:()=>Promise.all([l.e(30906),l.e(3238),l.e(96134),l.e(90455),l.e(8468),l.e(30531),l.e(74241),l.e(95113),l.e(56709),l.e(3848),l.e(97392),l.e(4859),l.e(65343),l.e(82378)]).then(l.bind(l,82378)).then(d=>d.DetailDealerModule)}];let M=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[s.Bz.forChild(C),s.Bz]}),d})();var P=l(97185);let D=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[m.ez,M,P.Rh]}),d})()}}]);