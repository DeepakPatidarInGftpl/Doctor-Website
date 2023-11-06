import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-footer-feature-details',
  templateUrl: './footer-feature-details.component.html',
  styleUrls: ['./footer-feature-details.component.scss']
})
export class FooterFeatureDetailsComponent implements OnInit {


  constructor(private websiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  footerFeatureDetails: any;
  id: any;
  imgUrl = 'https://pv.greatfuturetechno.com';
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.websiteService.getFooterFeatureById(this.id).subscribe((res:any) => {
      res?.map((res:any)=>{
        if(res.id==this.id){
          this.footerFeatureDetails = res;
          this.filteredData = this.footerFeatureDetails?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.footerFeatureDetails?.logs.slice();
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
    this.router.navigate(['//website/footerFeature'], { state: { id: this.id } })
  }
}
