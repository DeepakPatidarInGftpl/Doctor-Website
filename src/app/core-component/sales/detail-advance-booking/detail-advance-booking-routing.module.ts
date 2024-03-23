import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAdvanceBookingComponent } from './detail-advance-booking.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:DetailAdvanceBookingComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_advancebooking']} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailAdvanceBookingRoutingModule { }
