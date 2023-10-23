import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CoreComponentComponent } from './core-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    component:CoreComponentComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'blank-page',
        loadChildren: () =>
          import('./blank-page/blank-page.module').then(
            (m) => m.BlankPageModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then((m) => m.SalesModule),
      },
      // {
      //   path: 'pos',
      //   loadChildren: () =>
      //     import('./pos/pos.module').then((m) => m.PosModule),
      // },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./purchase/purchase.module').then((m) => m.PurchaseModule),
      },
      {
        path: 'expense',
        loadChildren: () =>
          import('./expense/expense.module').then((m) => m.ExpenseModule),
      },
      {
        path: 'quotation',
        loadChildren: () =>
          import('./quotation/quotation.module').then((m) => m.QuotationModule),
      },
      {
        path: 'transfer',
        loadChildren: () =>
          import('./transfer/transfer.module').then((m) => m.TransferModule),
      },
      {
        path: 'return',
        loadChildren: () =>
          import('./return/return.module').then((m) => m.ReturnModule),
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./people/people.module').then((m) => m.PeopleModule),
      },
      {
        path: 'places',
        loadChildren: () =>
          import('./places/places.module').then((m) => m.PlacesModule),
      },

      {
        path: 'element',
        loadChildren: () =>
          import('./element/element.module').then((m) => m.ElementModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'application',
        loadChildren: () =>
          import('./application/application.module').then(
            (m) => m.ApplicationModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./report/report.module').then((m) => m.ReportModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },

      {path: 'activities',loadChildren: () =>import('./activities/activities.module').then((m) => m.ActivitiesModule),},


      
      {path:'website',loadChildren:()=>import('./website/website.module').then((m)=>m.WebsiteModule)},
      {path:'contacts',loadChildren:()=>import('./contacts/contacts.module').then((m)=>m.ContactsModule)},
      {path:'masters',loadChildren:()=>import('./master/master.module').then((m)=>m.MasterModule)},
      {path:'newpos',loadChildren:()=>import('./newpos/newpos.module').then((m)=>m.NewposModule)},
      {path:'bank',loadChildren:()=>import('./bank/bank.module').then((m)=>m.BankModule)},
      {path:'account',loadChildren:()=>import('./accounts/accounts.module').then((m)=>m.AccountsModule)},
      {path:'transaction',loadChildren:()=>import('./transactions/transactions.module').then((m)=>m.TransactionsModule)},
      {path: 'inventory',loadChildren: () =>import('./inventory/inventory.module').then((m) => m.InventoryModule),},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreComponentRoutingModule {}
