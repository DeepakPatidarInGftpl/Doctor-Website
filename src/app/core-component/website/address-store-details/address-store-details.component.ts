import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-address-store-details',
  templateUrl: './address-store-details.component.html',
  styleUrls: ['./address-store-details.component.scss']
})
export class AddressStoreDetailsComponent implements OnInit {

  constructor(private websiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  addressStoreDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.websiteService.getAddressStoreById(this.id).subscribe((res:any) => {
      if(res.id==this.id){
        this.addressStoreDetails = res;
        this.filteredData = this.addressStoreDetails?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 
      }
    })
  }
  goBack() {
    this.location.back();
  }

  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  // filter data
  filteredData: any[]; 
  filterOpertion:any;
  filterData() {
    let filteredData = this.addressStoreDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }

  navigate(){
    this.router.navigate(['//places/statelist'], { state: { id: this.id } })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}

