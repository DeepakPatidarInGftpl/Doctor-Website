import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsncodedetailsComponent } from './hsncodedetails.component';

const routes: Routes = [{path:'',component:HsncodedetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsncodedetailsRoutingModule { }
