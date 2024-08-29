import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-detail-advance-booking',
  templateUrl: './detail-advance-booking.component.html',
  styleUrls: ['./detail-advance-booking.component.scss','../commonDetails.scss']
})
export class DetailAdvanceBookingComponent implements OnInit {

  constructor(private companyService: CompanyService, private Arout: ActivatedRoute, private saleService: SalesService, private location: Location, private coreService: CoreService) { }
  id: any;
  companyDetails: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  isSyncLoading = false;
  userDetails: any;
  totalItems: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    })
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
  }
  estimateDetail: any;
  totalmrp: any[] = [];
  totalMrp: any = 0;
  totalDiscount: any[] = [];
  discount = 0;
  totaldiscount = 0;

  // tax
  calculateTax: any = 0;
  totalTax: any[] = [];

  getdata() {
    this.saleService.getAdvanceBookingById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.estimateDetail = res;
        // calculation
        this.estimateDetail?.cart?.forEach((item: any) => {
          // discount
          this.totalItems = this.estimateDetail?.cart?.length;
          let d: any = (item?.price * item?.discount) / 100;
          console.log(item?.price - d.toFixed(2));
          this.discount = item?.price - d.toFixed(2);
          this.totaldiscount = 0;
          let totaldiscount = 0;
          this.totalDiscount.push(d);
          console.log(this.totalDiscount);
          this.totalDiscount?.forEach((number: any) => {
            totaldiscount += number;
          });
          this.totaldiscount = totaldiscount;

          // calulating tax
          let dis: any = (item?.price * item?.discount) / 100;
          this.discount = item?.price - dis.toFixed(2);
          
          let taxPrice: any = (this.discount * item?.tax) / 100;
          this.totalTax.push(taxPrice * item?.qty || 0);
          console.log(this.totalTax);
          let calculatedTax:any = 0;
          this.totalTax.forEach((val)=> {
            calculatedTax += parseFloat(val);
          })
          this.calculateTax = calculatedTax.toFixed(2);
          
          
          // mrp
          let mrp = 0;
          this.totalmrp.push(item?.price);
          this.totalMrp = 0;
          this?.totalmrp?.forEach((number: any) => {
            mrp += parseFloat(number);
          })
          this.totalMrp = mrp.toFixed(2) ;
        });
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
      case 'Booked':
        return 'approve-status-badge';
      default:
        return '';
    }
  }

  advanceBooking() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Booked')
    this.saleService.advanceBookingStatusUpdate(formData).subscribe((res)=> {
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.closeAdvanceBookingModal');
        closeModal.click();
      }, 500);
      console.log(res);
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
        pdf.save('AdvanceBooking.pdf');
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
      this.itemsPerPage = this.estimateDetail?.logs?.length;
    }
  }
  
}

