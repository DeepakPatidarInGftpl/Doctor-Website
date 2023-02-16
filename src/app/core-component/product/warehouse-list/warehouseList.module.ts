import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { DataTablesModule } from "angular-datatables";
import { DatepickerModule } from "ng2-datepicker";
import { WarehouselistRoutingModule } from "./warehouse.routing";
import { WarehouseListComponent } from "./warehouse-list.component";

@NgModule({
  declarations: [
    WarehouseListComponent
  ],
  imports: [
    CommonModule,
    WarehouselistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module,
    DataTablesModule
  ]
})
export class WarehouselistModule { }
