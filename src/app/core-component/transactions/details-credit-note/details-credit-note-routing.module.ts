import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCreditNoteComponent } from './details-credit-note.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsCreditNoteComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_creditnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCreditNoteRoutingModule { }
