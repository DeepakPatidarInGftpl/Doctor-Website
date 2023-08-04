import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticpageDetalsComponent } from './staticpage-detals.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StaticpageDetalsComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_staticpages']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpageDetalsRoutingModule { }
