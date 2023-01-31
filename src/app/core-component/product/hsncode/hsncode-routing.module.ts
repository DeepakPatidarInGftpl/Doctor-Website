import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsncodeComponent } from './hsncode.component';

const routes: Routes = [{path:'',component:HsncodeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsncodeRoutingModule { }
