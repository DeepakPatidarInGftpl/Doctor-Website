import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVendorComponent } from './detail-vendor.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailVendorComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_vendor'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailVendorRoutingModule { }
