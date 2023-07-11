import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSubTypeComponent } from './account-sub-type.component';

const routes: Routes = [
  {path:'',component:AccountSubTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSubTypeRoutingModule { }
