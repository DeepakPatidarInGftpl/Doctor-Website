import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-dealer',
  templateUrl: './detail-dealer.component.html',
  styleUrls: ['./detail-dealer.component.scss']
})
export class DetailDealerComponent implements OnInit {


  constructor(private Arout: ActivatedRoute, private contactService: ContactService, private location: Location, private coreService: CoreService) { }

  id: any;
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
  dealerDetail: any
  userID:number;
  getdata() {
    this.contactService.getDealerById(this?.id).subscribe(res => {
      if (this?.id == res?.id) {
        this.dealerDetail = res;
        this.userID = res?.userid;
        this.getCreditLimit(this.userID);
        this.filteredData = this.dealerDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData();
      }
    })
  };



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
    this.dealerDetail?.address.forEach((item: any) => {
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
  this.dealerDetail?.address.forEach((item: any) => {
    if (item.id === address.id) {
      item.is_default = false;
    }
  });
}


    });


   


  

  }
  billable_amount:any;
  Current_bala :string;
  getCreditLimit(userId :any) {
    this.contactService.getCreditLimitByUserId(userId).subscribe((res)=> {
      this.creditLimit = res?.credit_Limit;
      this.billable_amount = res?.billable_amount;
      this.Current_bala = res?.closing_balance_type + " " + res?.closing_balance;
    })
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

  filterOpertion: any;
  filterData() {
    let filteredData = this.dealerDetail?.logs.slice();
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
}

