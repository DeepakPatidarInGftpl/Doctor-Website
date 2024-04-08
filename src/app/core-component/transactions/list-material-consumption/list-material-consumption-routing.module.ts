import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMaterialConsumptionComponent } from './list-material-consumption.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListMaterialConsumptionComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_materialconsumption']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMaterialConsumptionRoutingModule { }
