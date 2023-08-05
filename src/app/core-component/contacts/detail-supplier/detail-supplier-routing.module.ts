import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailSupplierComponent } from './detail-supplier.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailSupplierComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_supplier'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailSupplierRoutingModule { }
