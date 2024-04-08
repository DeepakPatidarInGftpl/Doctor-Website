import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMaterialConsumptionComponent } from './update-material-consumption.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateMaterialConsumptionComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_materialconsumption']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMaterialConsumptionRoutingModule { }
