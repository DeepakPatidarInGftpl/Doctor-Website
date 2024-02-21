import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockListComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_stock','change_stock','delete_stock','view_stock'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockListRoutingModule { }
