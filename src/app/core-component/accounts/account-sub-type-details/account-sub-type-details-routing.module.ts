import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSubTypeDetailsComponent } from './account-sub-type-details.component';

const routes: Routes = [
  {path:'',component:AccountSubTypeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSubTypeDetailsRoutingModule { }
