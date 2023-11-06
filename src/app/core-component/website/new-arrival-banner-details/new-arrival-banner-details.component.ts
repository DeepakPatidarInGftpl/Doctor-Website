import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-new-arrival-banner-details',
  templateUrl: './new-arrival-banner-details.component.html',
  styleUrls: ['./new-arrival-banner-details.component.scss']
})
export class NewArrivalBannerDetailsComponent implements OnInit {

  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private websiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  newArrivalBannerDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.websiteService.getnewArrivalBannerById(this.id).subscribe((res:any) => {
      res?.map((res:any)=>{
        if(res.id==this.id){
          this.newArrivalBannerDetails = res;
          this.filteredData = this.newArrivalBannerDetails?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
        }
      })
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
    let filteredData = this.newArrivalBannerDetails?.logs.slice();
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
    this.router.navigate(['//website/newArrivalBanner'], { state: { id: this.id } })
  }
}

