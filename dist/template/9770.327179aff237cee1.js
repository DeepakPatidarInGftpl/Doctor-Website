"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9770],{29770:(g,h,n)=>{n.r(h),n.d(h,{SettingsModule:()=>P});var m=n(36895),s=n(4392),t=n(94650);const M=[{path:"",redirectTo:"generalsettings",pathMatch:"full"},{path:"",children:[{path:"generalsettings",loadChildren:()=>n.e(5387).then(n.bind(n,45387)).then(l=>l.GeneralsettingsModule)},{path:"emailsettings",loadChildren:()=>n.e(7840).then(n.bind(n,37840)).then(l=>l.EmailsettingsModule)},{path:"paymentsettings",loadChildren:()=>Promise.all([n.e(2454),n.e(2326),n.e(8085)]).then(n.bind(n,48085)).then(l=>l.PaymentsettingsModule)},{path:"currencysettings",loadChildren:()=>Promise.all([n.e(2454),n.e(2326),n.e(5611)]).then(n.bind(n,75611)).then(l=>l.CurrencysettingsModule)},{path:"grouppermissions",loadChildren:()=>Promise.all([n.e(2454),n.e(2326),n.e(5764)]).then(n.bind(n,45764)).then(l=>l.GrouppermissionsModule)},{path:"taxrates",loadChildren:()=>Promise.all([n.e(2454),n.e(2326),n.e(7974)]).then(n.bind(n,7974)).then(l=>l.TaxratesModule)},{path:"finncialYear",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(4356),n.e(5226),n.e(9853)]).then(n.bind(n,89853)).then(l=>l.FinancialYearModule)},{path:"closingFinancialYear",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(4356),n.e(6418)]).then(n.bind(n,6418)).then(l=>l.ClosingFinancialYearModule)},{path:"closingFinancialYear/stock-preview",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(7651)]).then(n.bind(n,7651)).then(l=>l.StockPreviewModule)},{path:"closingFinancialYear/account-ledger-preview",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(1071)]).then(n.bind(n,81071)).then(l=>l.AccountLedgerPreviewModule)}]},{path:"createpermission",loadChildren:()=>Promise.all([n.e(2326),n.e(3449)]).then(n.bind(n,33449)).then(l=>l.CreatepermissionModule)},{path:"editpermission",loadChildren:()=>Promise.all([n.e(2326),n.e(7791)]).then(n.bind(n,37791)).then(l=>l.EditpermissionModule)},{path:"paymentTerms",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(5226),n.e(3838)]).then(n.bind(n,33838)).then(l=>l.PaymentTermsModule)},{path:"permissionGroup",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(6166),n.e(2983),n.e(2502),n.e(5226),n.e(4141)]).then(n.bind(n,64141)).then(l=>l.PermissionGroupModule)},{path:"addPermissionGroup",loadChildren:()=>n.e(4039).then(n.bind(n,84039)).then(l=>l.AddPermissionGroupModule)},{path:"updatePermissionGroup/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(1374)]).then(n.bind(n,73795)).then(l=>l.UpdatePermissionGroupModule)},{path:"detailsPermissionGroup/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(7392),n.e(3979)]).then(n.bind(n,13979)).then(l=>l.DetailsPermissionGroupModule)},{path:"additionalCharge",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(5226),n.e(8513)]).then(n.bind(n,98513)).then(l=>l.AdditionalChargeModule)},{path:"user",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(2454),n.e(2326),n.e(1031)]).then(n.bind(n,31031)).then(l=>l.UserModule)},{path:"addUser",loadChildren:()=>n.e(6405).then(n.bind(n,36405)).then(l=>l.AddUserModule)},{path:"updateUser/:id",loadChildren:()=>n.e(6114).then(n.bind(n,76114)).then(l=>l.UpdateUserModule)},{path:"terms",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(5226),n.e(4948)]).then(n.bind(n,89901)).then(l=>l.TermsModule)},{path:"user-details/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(8448)]).then(n.bind(n,28448)).then(l=>l.UserDetailsModule)},{path:"additional-charges-details/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(1574)]).then(n.bind(n,51574)).then(l=>l.AdditionalChargeDetailsModule)},{path:"payment-terms-details/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(6374)]).then(n.bind(n,76374)).then(l=>l.PaymentTermsDetailsModule)},{path:"terms-details/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(6438)]).then(n.bind(n,46438)).then(l=>l.TermsDetailsModule)},{path:"financial-year-details/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(7147)]).then(n.bind(n,57147)).then(l=>l.FinancialYearDetailsModule)},{path:"membership",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(6166),n.e(5113),n.e(2983),n.e(2502),n.e(1173),n.e(7957),n.e(6709),n.e(3848),n.e(7392),n.e(2454),n.e(8592),n.e(5080)]).then(n.bind(n,45080)).then(l=>l.MembershipModule)},{path:"add-membership",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(8592),n.e(945)]).then(n.bind(n,60945)).then(l=>l.AddMembershipModule)},{path:"update-membership/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(8592),n.e(8313)]).then(n.bind(n,98313)).then(l=>l.UpdateMembershipModule)},{path:"detail-membership/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(8592),n.e(2259)]).then(n.bind(n,44313)).then(l=>l.DetailMembershipModule)},{path:"company-drive",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(6166),n.e(2983),n.e(2502),n.e(5226),n.e(9922)]).then(n.bind(n,69922)).then(l=>l.CompanyDriveModule)},{path:"detail-company-drive/:id",loadChildren:()=>Promise.all([n.e(906),n.e(3238),n.e(6134),n.e(455),n.e(8468),n.e(531),n.e(4241),n.e(5113),n.e(6709),n.e(3848),n.e(7392),n.e(7755)]).then(n.bind(n,37755)).then(l=>l.DetailCompanyDriveModule)}];let C=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[s.Bz.forChild(M),s.Bz]}),l})(),P=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez,C]}),l})()}}]);