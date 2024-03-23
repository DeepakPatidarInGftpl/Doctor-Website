import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsScrapEntryComponent } from './details-scrap-entry.component';

const routes: Routes = [{
  path:'',component:DetailsScrapEntryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsScrapEntryRoutingModule { }
