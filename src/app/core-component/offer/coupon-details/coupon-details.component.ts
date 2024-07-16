import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/Services/offer/offer.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.scss']
})
export class CouponDetailsComponent implements OnInit {

  tableData: any;
  constructor(private location: Location, private router: Router, private offerService: OfferService) { }

  ngOnInit(): void {
    this.getAllCoupons();
  }

  getAllCoupons() {
    this.offerService.getAllCoupons().subscribe((res) => {
      console.log(res);
      this.tableData = res[0];
    })
  }

  navigate() {
    this.router.navigate(['//offer/coupon-list']);
  }

  goBack() {
    this.location.back();
  }
}
