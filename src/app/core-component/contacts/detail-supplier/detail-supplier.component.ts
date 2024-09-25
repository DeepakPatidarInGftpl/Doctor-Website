import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private contactService: ContactService, private location: Location, private coreService: CoreService) { }

  id: any;
  filterAddressData: any[];
  filterBankData: any[];
  filterProductData: any[];
  profileDetails: any;
  creditLimit: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.coreService.profileDetails.subscribe((res) => {
      this.profileDetails = res;
    })
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
  userID:number;
  getdata() {
    this.contactService.getSupplierById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.supplierDetail = res;
        // const userId = res?.userid?.id;
        this.userID = res?.userid?.id;
        this.getCreditLimit(this.userID);
        this.filterProductData = this.supplierDetail?.products.slice();
        this.filteredData = this.supplierDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData();
        // console.log(res); 
      }
    })
  }
  billable_amount:any;
  getCreditLimit(userId) {
    this.contactService.getCreditLimitByUserId(userId).subscribe((res)=> {
      this.creditLimit = res?.credit_Limit;
      this.billable_amount = res?.billable_amount;
    })
  }

  onChange(address :any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to make this address as default ??",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make it default!'
    }).then((result) => {
if(result.isConfirmed){ 
  const formData :any  = new FormData();
  formData.append('user_id',this.userID)
  formData.append('address_id',address.id)
 this.contactService.UpdateDefaultAddress(formData).subscribe({
    next: (res) => {
    this.supplierDetail?.address.forEach((item: any) => {
  if (item.address_type === address.address_type) {
    item.is_default = item.id === address.id;
  }
});
    },
    error: (err) => {
      console.log(err);
    }
  })
}else{
  this.supplierDetail?.address.forEach((item: any) => {
    if (item.id === address.id) {
      item.is_default = false;
    }
  });
}


    });


   


  

  }
  formatDate(utcDate: string): string {
    const date = new Date(utcDate);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  }

  getInitial(name: string): string {
    if (!name) return '';
    const userName = name.split(' ');
    const initials = userName.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  }

  get isSupplierDetailEmpty(): boolean {
    return !this.supplierDetail || Object.keys(this.supplierDetail).length === 0;
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

  filterOpertion: any;
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
    this.filterOpertion = null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }

  changeProductPg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filterProductData?.length;
    }
  }

}

