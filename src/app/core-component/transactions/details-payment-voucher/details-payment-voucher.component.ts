import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-details-payment-voucher',
  templateUrl: './details-payment-voucher.component.html',
  styleUrls: ['./details-payment-voucher.component.scss']
})
export class DetailsPaymentVoucherComponent implements OnInit {
  userDetails: any;
  companyDetails:any;
  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location, private coreService: CoreService, private companyService: CompanyService ) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }
  
  paymentVoucherDetail: any
  getdata() {
    this.transactionService.getPaymentVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.paymentVoucherDetail = res;
        this.filteredData = this.paymentVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 
        }
    })
  }

  goBack() {
    this.location.back();
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending-status-badge';
      case 'Paid':
        return 'approve-status-badge';
      default:
        return '';
    }
  }

  paidPaymentVoucher() {
    let id: any = Number(this.id)

    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Paid')

    this.transactionService.paymentVoucherStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closePaidPaymentModal');
      closeModal.click();
    })
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
      let filteredData = this.paymentVoucherDetail?.logs.slice();
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
        this.itemsPerPage = this.filteredData?.length;
      }
    }
}

