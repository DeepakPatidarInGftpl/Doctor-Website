import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvanceBookingComponent } from './add-advance-booking.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:AddAdvanceBookingComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_advancebooking']}  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAdvanceBookingRoutingModule { }
