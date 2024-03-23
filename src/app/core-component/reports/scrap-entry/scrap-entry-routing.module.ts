import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrapEntryComponent } from './scrap-entry.component';

const routes: Routes = [{
  path:'',component:ScrapEntryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrapEntryRoutingModule { }
