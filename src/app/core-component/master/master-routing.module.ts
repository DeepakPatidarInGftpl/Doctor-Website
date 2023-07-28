import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'accountlist', loadChildren: () => import('../account/accountlist/accountlist.module').then((m) => m.AccountlistModule) },
  { path: 'addaccount', loadChildren: () => import('../account/addaccount/addaccount.module').then((m) => m.AddaccountModule) },
  { path: 'editaccount/:id', loadChildren: () => import('../account/editaccount/editaccount.module').then((m) => m.EditaccountModule) },
  { path: 'account-details/:id', loadChildren: () => import('../account/accountdetails/accountdetails.module').then((m) => m.AccountdetailsModule) },
  {
    path: 'companylist',
    loadChildren: () =>
      import('../company/companylist/companylist.module').then(
        (m) => m.CompanylistModule
      ),
  },
{
  path: 'addcompany',
  loadChildren: () =>
    import('../company/addcompany/addcompany.module').then(
      (m) => m.AddcompanyModule
    ),
},
{
  path: 'editcompany/:id',
  loadChildren: () =>
    import('../company/editcompany/editcompany.module').then(
      (m) => m.EditcompanyModule
    ),
},
{
  path: 'company-details/:id',
  loadChildren: () =>
    import('../company/company-details/company-details.module').then(
      (m) => m.CompanyDetailsModule
    ),
},
{path:'employeelist',loadChildren:()=>import('../employee/employee-list/employee-list.module').then((m)=>m.EmployeeListModule)},
{path:'addemployee',loadChildren:()=>import('../employee/addemployee/addemployee.module').then((m)=>m.AddemployeeModule)},
{path:'editemployee/:id',loadChildren:()=>import('../employee/editemployee/editemployee.module').then((m)=>m.EditemployeeModule)},
{path:'employee-details/:id',loadChildren:()=>import('../employee/employeedetails/employeedetails.module').then((m)=>m.EmployeedetailsModule)},
{path:'warehouse',loadChildren:()=>import('../warehouse/warehouse.module').then((m)=>m.WarehouseModule)},
  { path: 'branch', loadChildren: () => import('./branch/branch.module').then((m) => m.BranchModule) },
  { path: 'account_subtype', loadChildren: () => import('./account-sub-type/account-sub-type.module').then((m) => m.AccountSubTypeModule) },
  { path: 'addCompanyBank', loadChildren: () => import('./add-company-bank/add-company-bank.module').then((m) => m.AddCompanyBankModule) },
  { path: 'companyBank', loadChildren: () => import('./company-bank/company-bank.module').then((m) => m.CompanyBankModule) },
  { path: 'updateCompanyBank/:id', loadChildren: () => import('./update-company-bank/update-company-bank.module').then((m) => m.UpdateCompanyBankModule) },
  { path: 'detailsCompanyBank/:id', loadChildren: () => import('./details-company-bank/details-company-bank.module').then((m) => m.DetailsCompanyBankModule) },
  { path: 'additionalCharge', loadChildren: () => import('./additional-charge/additional-charge.module').then((m) => m.AdditionalChargeModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
