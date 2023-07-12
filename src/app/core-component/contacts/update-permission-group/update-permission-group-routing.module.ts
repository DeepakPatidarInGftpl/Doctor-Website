import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePermissionGroupComponent } from './update-permission-group.component';

const routes: Routes = [
  {
    path:'',component:UpdatePermissionGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePermissionGroupRoutingModule { }
