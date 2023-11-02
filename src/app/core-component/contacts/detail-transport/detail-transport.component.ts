import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-detail-transport',
  templateUrl: './detail-transport.component.html',
  styleUrls: ['./detail-transport.component.scss']
})
export class DetailTransportComponent implements OnInit {

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
  transportDetail: any
  getdata() {
    this.contactService.getTransportById(this.id).subscribe(res => {
        if(this.id==res.id){
          this.transportDetail = res
          this.filteredData = this.transportDetail?.logs.slice(); // Initialize filteredData with the original data
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
  goBack(){
    this.location.back()
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
     let filteredData = this.transportDetail?.logs.slice();
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

