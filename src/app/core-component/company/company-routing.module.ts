import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'companylist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'companylist',
        loadChildren: () =>
          import('./companylist/companylist.module').then(
            (m) => m.CompanylistModule
          ),
      },
    ],
  },
  {
    path: 'addcompany',
    loadChildren: () =>
      import('./addcompany/addcompany.module').then(
        (m) => m.AddcompanyModule
      ),
  },
  {
    path: 'editcompany/:id',
    loadChildren: () =>
      import('./editcompany/editcompany.module').then(
        (m) => m.EditcompanyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
