import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'accountlist',pathMatch:'full'},
  {path:'',children:[
    {path:'accountlist',loadChildren:()=>import('./accountlist/accountlist.module').then((m)=>m.AccountlistModule)},
    {path:'addaccount',loadChildren:()=>import('./addaccount/addaccount.module').then((m)=>m.AddaccountModule)},
    {path:'editaccount/:id',loadChildren:()=>import('./editaccount/editaccount.module').then((m)=>m.EditaccountModule)},
    {path:'account-details/:id',loadChildren:()=>import('./accountdetails/accountdetails.module').then((m)=>m.AccountdetailsModule)},
  ],
},
{ path: 'account_subtype', loadChildren: () => import('./account-sub-type/account-sub-type.module').then((m) => m.AccountSubTypeModule) },
{path:'account-sub-type-details/:id',loadChildren:()=>import('./account-sub-type-details/account-sub-type-details.module').then((m)=>m.AccountSubTypeDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
