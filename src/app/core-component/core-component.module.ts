import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';
import { FormsModule } from '@angular/forms';
import { SidebarOneComponent } from '../common-component/sidebar-one/sidebar-one.component';
import { SidebarTwoComponent } from '../common-component/sidebar-two/sidebar-two.component';
import { SidebarThreeComponent } from '../common-component/sidebar-three/sidebar-three.component';
import { SidebarFourComponent } from '../common-component/sidebar-four/sidebar-four.component';
import { SidebarFiveComponent } from '../common-component/sidebar-five/sidebar-five.component';
import { HeaderComponent } from '../common-component/header/header.component';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { WarehouseListComponent } from './product/warehouse-list/warehouse-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    CoreComponentComponent,
    HeaderComponent,
    SidebarOneComponent,
    SidebarTwoComponent,
    SidebarThreeComponent,
    SidebarFourComponent,
    SidebarFiveComponent,
  ],
  imports: [
    CommonModule,
    CoreComponentRoutingModule,
    FormsModule,
    PerfectScrollbarModule,

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class CoreComponentModule { }
