import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAdvanceBookingComponent } from './update-advance-booking.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:UpdateAdvanceBookingComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_advancebooking']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAdvanceBookingRoutingModule { }
