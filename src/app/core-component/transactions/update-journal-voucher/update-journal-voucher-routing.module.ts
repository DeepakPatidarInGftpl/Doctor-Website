import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateJournalVoucherComponent } from './update-journal-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateJournalVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_journalvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateJournalVoucherRoutingModule { }
