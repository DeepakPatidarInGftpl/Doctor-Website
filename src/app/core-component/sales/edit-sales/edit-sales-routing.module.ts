import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSalesComponent } from './edit-sales.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{ path: '', component: EditSalesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_saleorder']} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSalesRoutingModule { }
