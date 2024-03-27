import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScrapEntryComponent } from './add-scrap-entry.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{  path:'',component:AddScrapEntryComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_scarpentry']}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddScrapEntryRoutingModule { }
