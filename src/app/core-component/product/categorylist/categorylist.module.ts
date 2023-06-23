import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorylistRoutingModule } from './categorylist-routing.module';
import { CategorylistComponent } from './categorylist.component';
import { AddcategoryModule } from "../addcategory/addcategory.module";
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
    declarations: [
        CategorylistComponent
    ],
    imports: [
        CommonModule,
        CategorylistRoutingModule,
        AddcategoryModule,
       SharedModuleModule
    ]
})
export class CategorylistModule { }
