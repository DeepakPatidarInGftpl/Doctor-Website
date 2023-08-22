import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDealofTheDayComponent } from './details-dealof-the-day.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsDealofTheDayComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_dealsoftheday']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDealofTheDayRoutingModule { }
