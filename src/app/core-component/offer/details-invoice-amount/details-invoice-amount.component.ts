import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfferService } from 'src/app/Services/offer/offer.service';

@Component({
  selector: 'app-details-invoice-amount',
  templateUrl: './details-invoice-amount.component.html',
  styleUrls: ['./details-invoice-amount.component.scss']
})
export class DetailsInvoiceAmountComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private offerService: OfferService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  invoiceOfferDetail: any
  getdata() {
    this.offerService.getDiscountById(this.id).subscribe((res:any) => {
        if (this.id == res.id) {
          this.invoiceOfferDetail = res;
          console.log(this.invoiceOfferDetail);
          
          this.filteredData = this.invoiceOfferDetail?.logs.slice(); // Initialize filteredData with the original data
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
      let filteredData = this.invoiceOfferDetail?.logs.slice();
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

