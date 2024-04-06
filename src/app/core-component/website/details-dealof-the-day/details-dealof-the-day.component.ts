import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-details-dealof-the-day',
  templateUrl: './details-dealof-the-day.component.html',
  styleUrls: ['./details-dealof-the-day.component.scss']
})
export class DetailsDealofTheDayComponent implements OnInit {

 
  constructor(private Arout: ActivatedRoute, private websiteService: WebsiteService, private location: Location,private router:Router) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  dealodtheDayDetail: any
  getdata() {
    this.websiteService.getDealOfTheDayById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.dealodtheDayDetail = res
        this.filteredData = this.dealodtheDayDetail?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.dealodtheDayDetail?.logs.slice();
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
    this.router.navigate(['//website/dealOfTheDay'], { state: { id: this.id } })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}