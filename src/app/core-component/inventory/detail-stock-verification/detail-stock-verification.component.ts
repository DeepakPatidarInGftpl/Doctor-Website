import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { StockService } from 'src/app/Services/stockService/stock.service';

@Component({
  selector: 'app-detail-stock-verification',
  templateUrl: './detail-stock-verification.component.html',
  styleUrls: ['./detail-stock-verification.component.scss']
})
export class DetailStockVerificationComponent implements OnInit {

  constructor(private Arout: ActivatedRoute,private toastr:ToastrService, private stockService: StockService, private location:Location) { }
  id: any;
  printDetails: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
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
      res.map((res)=>{
        if (this.id == res.id) {
          this.stockVerifactionDetail = res;
        }
      });
    })
  }
  goBack() {
    this.location.back();
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
