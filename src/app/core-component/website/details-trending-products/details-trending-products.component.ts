import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-details-trending-products',
  templateUrl: './details-trending-products.component.html',
  styleUrls: ['./details-trending-products.component.scss']
})
export class DetailsTrendingProductsComponent implements OnInit {


  constructor(private Arout: ActivatedRoute, private websiteService: WebsiteService, private location: Location,private router:Router) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    
  }
  trendingDetail: any
  getdata() {
    this.websiteService.getTrendingProductsById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.trendingDetail = res
        this.filteredData = this.trendingDetail?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.trendingDetail?.logs.slice();
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
    this.router.navigate(['//website/trendingProducts'], { state: { id: this.id } })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}


