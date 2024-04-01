import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrapEntryListComponent } from './scrap-entry-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:ScrapEntryListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_scarpentry']}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrapEntryListRoutingModule { }
