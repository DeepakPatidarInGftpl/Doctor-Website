import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitNoteRegisterComponent } from './debit-note-register.component';

const routes: Routes = [{
  path:'',component:DebitNoteRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitNoteRegisterRoutingModule { }
