import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { WebsiteService } from 'src/app/Services/website/website.service';
@Component({
  selector: 'app-adddeal-of-the-day',
  templateUrl: './adddeal-of-the-day.component.html',
  styleUrls: ['./adddeal-of-the-day.component.scss']
})
export class AdddealOfTheDayComponent implements OnInit {

  constructor(private websiteService:WebsiteService) { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  ngOnInit() {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];

    this.websiteService.getTrendingProducts().subscribe((res:any)=>{
      console.log(res);
      this.dropdownList=res;

      this.selectedItems = this.dropdownList.map((res: any) => {
        return {id: res.id,
          discount: res.discount
        };
      });

    })
    // this.selectedItems = [
    //   { id: 7, discount: 120 },
    //   { id: 8, discount: 120 }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'discount',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
