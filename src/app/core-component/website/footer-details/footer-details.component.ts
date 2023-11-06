import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.scss']
})
export class FooterDetailsComponent implements OnInit {

  constructor(private websiteService: WebsiteService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  footerDetails: any;
  id: any;
  imgUrl = 'https://pv.greatfuturetechno.com';
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.websiteService.getFooterById(this.id).subscribe((res:any) => {
      res?.map((res:any)=>{
        if(res.id==this.id){
          this.footerDetails = res;
          this.filteredData = this.footerDetails?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.footerDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }
}

