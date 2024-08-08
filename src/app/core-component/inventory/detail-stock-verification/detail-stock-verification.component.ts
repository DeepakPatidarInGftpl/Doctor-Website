import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { StockService } from 'src/app/Services/stockService/stock.service';

@Component({
  selector: 'app-detail-stock-verification',
  templateUrl: './detail-stock-verification.component.html',
  styleUrls: ['./detail-stock-verification.component.scss']
})
export class DetailStockVerificationComponent implements OnInit {
  userDetails: any;
  constructor(private Arout: ActivatedRoute,private toastr:ToastrService, private stockService: StockService, private location:Location, private coreService: CoreService) { }
  id: any;
  printDetails: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
  }
  stockVerifactionDetail: any
  totalPurchase: any[] = [];
  totalPurchaseRate = 0;
  totalmrp: any[] = [];
  totalMrp = 0;
  totallanding: any[] = [];
  totalLandingCost = 0;
  getdata() {
    this.stockService.getStockVerificationById(this.id).subscribe(res => {
      // res.map((res)=>{
        if (this.id == res.id) {
          this.stockVerifactionDetail = res;
        }
      // });
    })
  }
  goBack() {
    this.location.back();
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending-status-badge';
      case 'Approved':
        return 'approve-status-badge';
      case 'Rejected':
        return 'reject-status-badge';
      default:
        return '';
    }
  }

  approve() {
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Approved')
    this.stockService.stockVerificationStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closeApprovalModal');
      closeModal.click();
    })
  }

  reject() {
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Rejected')

    this.stockService.stockVerificationStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closeRejectModal');
      closeModal.click();
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
        pdf.save('stockVerification.pdf');
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

  
}
