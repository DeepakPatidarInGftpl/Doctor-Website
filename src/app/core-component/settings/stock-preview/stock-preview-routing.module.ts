import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPreviewComponent } from './stock-preview.component';

const routes: Routes = [
  {
    path: '',
    component: StockPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockPreviewRoutingModule { }
