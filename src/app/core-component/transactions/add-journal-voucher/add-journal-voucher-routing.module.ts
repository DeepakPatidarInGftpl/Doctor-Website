import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJournalVoucherComponent } from './add-journal-voucher.component';

const routes: Routes = [
  {path:'',component:AddJournalVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddJournalVoucherRoutingModule { }
