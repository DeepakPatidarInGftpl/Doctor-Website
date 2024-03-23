import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScrapEntryComponent } from './add-scrap-entry.component';

const routes: Routes = [{
  path:'',component:AddScrapEntryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddScrapEntryRoutingModule { }
