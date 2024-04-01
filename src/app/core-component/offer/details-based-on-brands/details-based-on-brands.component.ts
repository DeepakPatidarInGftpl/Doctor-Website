import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfferService } from 'src/app/Services/offer/offer.service';

@Component({
  selector: 'app-details-based-on-brands',
  templateUrl: './details-based-on-brands.component.html',
  styleUrls: ['./details-based-on-brands.component.scss']
})
export class DetailsBasedOnBrandsComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private OfferService: OfferService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  brandOfferDetail: any
  getdata() {
    this.OfferService.getDiscountById(this.id).subscribe((res:any) => {
        if (this.id == res.id) {
          this.brandOfferDetail = res;
          console.log(this.brandOfferDetail);
          
          this.filteredData = this.brandOfferDetail?.logs.slice(); // Initialize filteredData with the original data
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
      let filteredData = this.brandOfferDetail?.logs.slice();
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

