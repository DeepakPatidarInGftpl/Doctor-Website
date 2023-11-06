import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-about-footer-banner-details',
  templateUrl: './about-footer-banner-details.component.html',
  styleUrls: ['./about-footer-banner-details.component.scss']
})
export class AboutFooterBannerDetailsComponent implements OnInit {

  
  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private webiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  aboutFooterBannerDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.webiteService.getaboutFooterBannerById(this.id).subscribe((res:any) => {
      res?.map((res:any)=>{
        if(res.id==this.id){
          this.aboutFooterBannerDetails = res;
          this.filteredData = this.aboutFooterBannerDetails?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.aboutFooterBannerDetails?.logs.slice();
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
    this.router.navigate(['//website/aboutFooterBanner'], { state: { id: this.id } })
  }
}
