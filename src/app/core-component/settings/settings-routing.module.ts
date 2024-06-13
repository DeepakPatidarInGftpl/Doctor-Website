import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'generalsettings', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'generalsettings',
        loadChildren: () =>
          import('./generalsettings/generalsettings.module').then(
            (m) => m.GeneralsettingsModule
          ),
      },
      {
        path: 'emailsettings',
        loadChildren: () =>
          import('./emailsettings/emailsettings.module').then(
            (m) => m.EmailsettingsModule
          ),
      },
      {
        path: 'paymentsettings',
        loadChildren: () =>
          import('./paymentsettings/paymentsettings.module').then(
            (m) => m.PaymentsettingsModule
          ),
      },
      {
        path: 'currencysettings',
        loadChildren: () =>
          import('./currencysettings/currencysettings.module').then(
            (m) => m.CurrencysettingsModule
          ),
      },
      {
        path: 'grouppermissions',
        loadChildren: () =>
          import('./grouppermissions/grouppermissions.module').then(
            (m) => m.GrouppermissionsModule
          ),
      },
      {
        path: 'taxrates',
        loadChildren: () =>
          import('./taxrates/taxrates.module').then((m) => m.TaxratesModule),
      },
      //financial year
      {
        path: 'finncialYear',
        loadChildren: () => import('./financial-year/financial-year.module').then((m) => m.FinancialYearModule)
      },
      {
        path: 'closingFinancialYear',
        loadChildren: () => import('./closing-financial-year/closing-financial-year.module').then((m) => m.ClosingFinancialYearModule)
      }
    ],
  },
  {
    path: 'createpermission',
    loadChildren: () =>
      import('./createpermission/createpermission.module').then(
        (m) => m.CreatepermissionModule
      ),
  },
  {
    path: 'editpermission',
    loadChildren: () =>
      import('./editpermission/editpermission.module').then(
        (m) => m.EditpermissionModule
      ),
  },
  {
    path: 'paymentTerms',
    loadChildren: () => import('./payment-terms/payment-terms.module').then((m) => m.PaymentTermsModule)
  },
  {
    path: 'permissionGroup',
    loadChildren: () => import('./permission-group/permission-group.module').then((m) => m.PermissionGroupModule)
  },
  {
    path: 'addPermissionGroup',
    loadChildren: () => import('./add-permission-group/add-permission-group.module').then((m) => m.AddPermissionGroupModule)
  },
  {
    path: 'updatePermissionGroup/:id',
    loadChildren: () => import('./update-permission-group/update-permission-group.module').then((m) => m.UpdatePermissionGroupModule)
  },
  {
    path: 'detailsPermissionGroup/:id',
    loadChildren: () => import('./details-permission-group/details-permission-group.module').then((m) => m.DetailsPermissionGroupModule)
  },
  { path: 'additionalCharge', loadChildren: () => import('./additional-charge/additional-charge.module').then((m) => m.AdditionalChargeModule) },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'addUser',
    loadChildren: () => import('./add-user/add-user.module').then((m) => m.AddUserModule)
  },
  {
    path: 'updateUser/:id',
    loadChildren: () => import('./update-user/update-user.module').then((m) => m.UpdateUserModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then((m) => m.TermsModule)
  },
  {
    path: 'user-details/:id', loadChildren: () => import('./user-details/user-details.module').then((m) => m.UserDetailsModule)
  },
  {
    path: 'additional-charges-details/:id', loadChildren: () => import('./additional-charge-details/additional-charge-details.module').then((m) => m.AdditionalChargeDetailsModule)
  },
  {
    path: 'payment-terms-details/:id', loadChildren: () => import('./payment-terms-details/payment-terms-details.module').then((m) => m.PaymentTermsDetailsModule)
  },
  {
    path: 'terms-details/:id', loadChildren: () => import('./terms-details/terms-details.module').then((m) => m.TermsDetailsModule)
  },
  {
    path: 'financial-year-details/:id', loadChildren: () => import('./financial-year-details/financial-year-details.module').then((m) => m.FinancialYearDetailsModule)
  },
  { path: 'membership', loadChildren: () => import('./membership/membership.module').then((m) => m.MembershipModule) },
  { path: 'add-membership', loadChildren: () => import('./add-membership/add-membership.module').then((m) => m.AddMembershipModule) },
  { path: 'update-membership/:id', loadChildren: () => import('./update-membership/update-membership.module').then((m) => m.UpdateMembershipModule) },
  { path: 'detail-membership/:id', loadChildren: () => import('./detail-membership/detail-membership.module').then((m) => m.DetailMembershipModule) },

  //22-2
  { path: 'company-drive', loadChildren: () => import('./company-drive/company-drive.module').then((m) => m.CompanyDriveModule) },
  { path: 'detail-company-drive/:id', loadChildren: () => import('./detail-company-drive/detail-company-drive.module').then((m) => m.DetailCompanyDriveModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
