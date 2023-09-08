import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCreditNoteComponent } from './details-credit-note.component';

const routes: Routes = [
  {path:'',component:DetailsCreditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCreditNoteRoutingModule { }
