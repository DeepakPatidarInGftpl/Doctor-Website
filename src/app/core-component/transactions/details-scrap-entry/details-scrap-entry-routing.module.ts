import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsScrapEntryComponent } from './details-scrap-entry.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:DetailsScrapEntryComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_receiptvoucher']}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsScrapEntryRoutingModule { }
