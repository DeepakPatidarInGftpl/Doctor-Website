import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialConsumptionComponent } from './add-material-consumption.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddMaterialConsumptionComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_materialconsumption']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMaterialConsumptionRoutingModule { }
