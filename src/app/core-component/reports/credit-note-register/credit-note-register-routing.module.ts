import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditNoteRegisterComponent } from './credit-note-register.component';

const routes: Routes = [{
  path:'',component:CreditNoteRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditNoteRegisterRoutingModule { }
