import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJournalVoucherComponent } from './add-journal-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddJournalVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_journalvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddJournalVoucherRoutingModule { }
