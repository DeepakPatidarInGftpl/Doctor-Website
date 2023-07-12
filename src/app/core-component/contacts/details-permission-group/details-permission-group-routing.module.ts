import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPermissionGroupComponent } from './details-permission-group.component';

const routes: Routes = [
  {path:'',component:DetailsPermissionGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPermissionGroupRoutingModule { }
