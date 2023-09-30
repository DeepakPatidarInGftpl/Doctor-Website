import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebitNoteComponent } from './add-debit-note.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddDebitNoteComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_debitnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDebitNoteRoutingModule { }
