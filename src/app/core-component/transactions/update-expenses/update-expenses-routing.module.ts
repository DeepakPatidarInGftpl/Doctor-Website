import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateExpensesComponent } from './update-expenses.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateExpensesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_expensesvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateExpensesRoutingModule { }
