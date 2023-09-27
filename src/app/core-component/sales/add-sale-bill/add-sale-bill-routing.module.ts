import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSaleBillComponent } from './add-sale-bill.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddSaleBillComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_salebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSaleBillRoutingModule { }
