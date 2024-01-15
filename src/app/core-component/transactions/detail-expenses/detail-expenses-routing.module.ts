import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailExpensesComponent } from './detail-expenses.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailExpensesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_expensesvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailExpensesRoutingModule { }
