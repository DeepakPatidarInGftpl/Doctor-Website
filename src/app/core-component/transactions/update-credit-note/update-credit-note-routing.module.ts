import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCreditNoteComponent } from './update-credit-note.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateCreditNoteComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_creditnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCreditNoteRoutingModule { }
