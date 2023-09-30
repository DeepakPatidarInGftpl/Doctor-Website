import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsJournalVoucherComponent } from './details-journal-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsJournalVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_journalvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsJournalVoucherRoutingModule { }
