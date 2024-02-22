import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockVerificationComponent } from './stock-verification.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockVerificationComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_stockverification']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockVerificationRoutingModule { }
