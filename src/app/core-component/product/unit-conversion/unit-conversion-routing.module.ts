import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitConversionComponent } from './unit-conversion.component';

const routes: Routes = [{path:'',component:UnitConversionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitConversionRoutingModule { }
