import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private contactService: ContactService,private location:Location) { }

  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }

  ngAfterViewInit() {
    this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js")
    this.LoadScript("assets/js/product-details.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  supplierDetail: any
  getdata() {
    this.contactService.getSupplierById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.supplierDetail = res

        this.filteredData = this.supplierDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData();
        // console.log(res); 
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

  isBatch = true;
  showBatch() {
    this.isBatch = false;
  }
  hideBatch() {
    this.isBatch = true;
  }

  goBack(){
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
    let filteredData = this.supplierDetail?.logs.slice();
    // if (this.supplierType) {
    //   filteredData = filteredData.filter((item) => item?.supplier_type === this.supplierType);
    // }
 
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

