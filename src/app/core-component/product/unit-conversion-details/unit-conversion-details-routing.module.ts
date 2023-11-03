import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitConversionDetailsComponent } from './unit-conversion-details.component';

const routes: Routes = [
  {path:'',component:UnitConversionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitConversionDetailsRoutingModule { }
