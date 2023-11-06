import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-payment-terms-details',
  templateUrl: './payment-terms-details.component.html',
  styleUrls: ['./payment-terms-details.component.scss']
})
export class PaymentTermsDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  paymentTermsDetails: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.contactService.getPaymentTermsById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if(res.id==this.id){
          this.paymentTermsDetails = res;
          this.filteredData = this.paymentTermsDetails?.logs.slice(); 
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
    let filteredData = this.paymentTermsDetails?.logs.slice();
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
    this.router.navigate(['//settings/paymentTerms'], { state: { id: this.id } })
  }
}


