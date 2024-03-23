import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrapEntryListComponent } from './scrap-entry-list.component';

const routes: Routes = [{
  path:'',component:ScrapEntryListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrapEntryListRoutingModule { }
