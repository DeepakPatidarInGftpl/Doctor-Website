import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateScrapEntryComponent } from './update-scrap-entry.component';

const routes: Routes = [{
  path:'',component:UpdateScrapEntryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateScrapEntryRoutingModule { }
