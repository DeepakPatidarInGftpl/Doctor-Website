import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitNoteComponent } from './debit-note.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DebitNoteComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_debitnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitNoteRoutingModule { }