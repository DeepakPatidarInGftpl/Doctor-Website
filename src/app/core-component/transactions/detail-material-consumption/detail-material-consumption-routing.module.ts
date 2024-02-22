import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMaterialConsumptionComponent } from './detail-material-consumption.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailMaterialConsumptionComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_newmaterialconsuption']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMaterialConsumptionRoutingModule { }
