import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-detail-production-voucher',
  templateUrl: './detail-production-voucher.component.html',
  styleUrls: ['./detail-production-voucher.component.scss']
})
export class DetailProductionVoucherComponent implements OnInit {
  constructor(private Arout: ActivatedRoute, private CoreService: CoreService,private location:Location) { }
  imgUrl = 'https://pv.greatfuturetechno.com';
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
 
  productionDetail: any
  getdata() {
    this.CoreService.getProductionVoucherById(this.id).subscribe(res => {
        if(this.id==res.id){
          this.productionDetail = res;
          this.filteredData = this.productionDetail?.logs.slice(); 
          this.filterData(); 
        }
    })
  }

  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
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
    let filteredData = this.productionDetail?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }
  }
}





