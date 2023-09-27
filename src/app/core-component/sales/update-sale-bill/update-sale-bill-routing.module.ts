import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSaleBillComponent } from './update-sale-bill.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateSaleBillComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_salebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSaleBillRoutingModule { }
