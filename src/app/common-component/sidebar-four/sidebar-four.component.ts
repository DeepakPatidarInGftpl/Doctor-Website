import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-four',
  templateUrl: './sidebar-four.component.html',
  styleUrls: ['./sidebar-four.component.scss']
})
export class SidebarFourComponent implements OnInit {
  opendSubMenu: Array<any> = [];
  public externalIcons:any={}
  constructor() {
   }

  ngOnInit(): void {
  }
  showMenu(val: string): void {
    if (this.opendSubMenu[0] != val) {
      this.opendSubMenu[0] = val;
    } else {
      this.opendSubMenu[0] = '';
    }
  }

  showSubMenu(val: string): void {
    if (this.opendSubMenu[1] != val) {
      this.opendSubMenu[1] = val;
    } else {
      this.opendSubMenu[1] = '';
    }
  }
}
