import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.scss']
})
export class BannerDetailsComponent implements OnInit {

 
  constructor(private websiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  bannerDetails: any;
  id: any;
  imgUrl = 'https://pv.greatfuturetechno.com';
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.websiteService.getBannerbById(this.id).subscribe((res:any) => {
      res?.map((res:any)=>{
        if(res.id==this.id){
          this.bannerDetails = res;
          this.filteredData = this.bannerDetails?.logs.slice(); 
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
    let filteredData = this.bannerDetails?.logs.slice();
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
    this.router.navigate(['//website/banner'], { state: { id: this.id } })
  }
}

