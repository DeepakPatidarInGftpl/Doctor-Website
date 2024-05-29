import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderReturnRoutingModule } from './order-return-routing.module';
import { OrderReturnComponent } from './order-return.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [OrderReturnComponent,
  ],
  imports: [
    CommonModule,
    OrderReturnRoutingModule,
    SharedModuleModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [
    DatePipe,
  ],
})
export class OrderReturnModule { }
