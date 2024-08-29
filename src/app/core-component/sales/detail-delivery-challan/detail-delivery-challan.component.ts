import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-detail-delivery-challan',
  templateUrl: './detail-delivery-challan.component.html',
  styleUrls: ['./detail-delivery-challan.component.scss','../commonDetails.scss']
})
export class DetailDeliveryChallanComponent implements OnInit {

  constructor(private companyService:CompanyService,private Arout: ActivatedRoute, private saleService: SalesService, private location: Location, private coreService: CoreService) { }
  id: any;
  companyDetails:any;
  userDetails: any;
  printDetails: any;
  supplierAddress:any;
  selectedAddressBilling:any;
  selectedAddressShipping:any;
  totalItems: any;
  isSyncLoading = false;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
  }
  deliveryChallanDetail: any

  totalmrp: any[] = [];
  totalMrp: any = 0;
  getdata() {
    this.saleService.getDelivryChallanById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.deliveryChallanDetail = res;
           // address selected
           this.supplierAddress = res;
           this.supplierAddress?.customer?.detail?.address.map((res: any) => {
             if (res?.address_type == 'Billing') {
               this.selectedAddressBilling = res;
               console.log(this.selectedAddressBilling);
             } else if (res.address_type == 'Shipping') {
               this.selectedAddressShipping = res;
               console.log(this.selectedAddressShipping);
             }
           });
           this.totalItems = this.deliveryChallanDetail?.cart?.length;
           this.deliveryChallanDetail?.cart?.map((res:any)=>{
          this.totalmrp.push(res?.mrp);
          this.totalMrp = 0;
          let totalAmount = 0;
          this?.totalmrp?.forEach((number: any) => {
            totalAmount += Number(number);
          });
          this.totalMrp = totalAmount.toFixed(2);
           })
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
      case 'Delivered':
        return 'delivered-status-badge';
      case 'Partially Delivered':
        return 'pending-status-badge';
      case 'Cancelled':
          return 'cancelled-status-badge';
      default:
        return '';
    }
  }

  deliveredChallan() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Delivered')
    this.saleService.deliveryChallanStatusUpdate(formData).subscribe((res)=> {
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.deliveredChallanModal');
        closeModal.click();
      }, 500);
    }, (err) => {
    this.isSyncLoading = false;
    this.coreService.loaderBehaveSub.next(false);
    })
  }

  partiallyDeliveredChallan() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Partially Delivered')
    this.saleService.deliveryChallanStatusUpdate(formData).subscribe((res)=> {
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.partiallyDeliveredChallanModal');
        closeModal.click();
      }, 500);
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
      })
  }

  cancelledChallan() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Cancelled')
    this.saleService.deliveryChallanStatusUpdate(formData).subscribe((res)=> {
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.cancelledChallanModal');
        closeModal.click();
      }, 500);
      this.isSyncLoading = false;
      this.getdata();
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
      })
  }
  
  loaderPdf = false;
  generatePdf() {
    this.loaderPdf = true;
    const elementToCapture = document.getElementById('debitNote');
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        this.loaderPdf = false;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save('deliveryChallan.pdf');
      });
    }
  }
 
  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.deliveryChallanDetail?.logs?.length;
    }
  }
}
