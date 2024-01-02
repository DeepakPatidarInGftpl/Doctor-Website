import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAttendanceComponent } from './update-attendance.component';

const routes: Routes = [
  {path:'',component:UpdateAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAttendanceRoutingModule { }
