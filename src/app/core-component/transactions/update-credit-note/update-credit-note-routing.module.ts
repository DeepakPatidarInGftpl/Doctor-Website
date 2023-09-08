import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCreditNoteComponent } from './update-credit-note.component';

const routes: Routes = [
  {path:'',component:UpdateCreditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCreditNoteRoutingModule { }
