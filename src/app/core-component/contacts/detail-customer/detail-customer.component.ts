import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {
  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private Arout: ActivatedRoute, private hrmService: HrmServiceService, private coreService: ContactService, private location: Location) { }
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.getLoyaltyPoints()
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
  productDetail: any;
  firstLatter:any;
  getdata() {
    this.coreService.getCustomerById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.productDetail = res;
        let words = res.name.split(" ");
        let combined = words.map(word => word.charAt(0)).join('');
        this.firstLatter=combined
        this.filteredData = this.productDetail?.logs.slice();
        this.filterData();
      }
    })
  }
  LoyaltyList: any;
  getLoyaltyPoints() {
    this.hrmService.getLoyalPoints(this.id).subscribe((res: any) => {
      console.log(res);
      this.LoyaltyList = res;
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
    let filteredData = this.productDetail?.logs.slice();
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

  openModalMembershp(id:number) {
    const modal = document.getElementById('membershipModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      // this.getMemberShip();
      this.getMemberShipById(id);
    }
  }
  closeModalMembership() {
    const modal = document.getElementById('membershipModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  loader=true;
  membershipList:any;
  getMemberShip(){
    this.hrmService.getMembership().subscribe(res => {
      this.membershipList = res;
      this.loader=false;
    });
  }
  memberDetails:any
  getMemberShipById(id:number){
    this.hrmService.getMembershipById(id).subscribe(res => {
      this.memberDetails = res;
      this.loader=false;
    });
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}

