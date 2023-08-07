import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbrandComponent } from './editbrand.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{ path: '', component: EditbrandComponent,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['change_brands'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditbrandRoutingModule { }
