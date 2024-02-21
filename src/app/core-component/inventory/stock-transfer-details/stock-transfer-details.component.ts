import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { StockService } from 'src/app/Services/stockService/stock.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-stock-transfer-details',
  templateUrl: './stock-transfer-details.component.html',
  styleUrls: ['./stock-transfer-details.component.scss']
})
export class StockTransferDetailsComponent implements OnInit {

  constructor(private Arout: ActivatedRoute,private toastr:ToastrService, private stockService: StockService, private location: Location) { }
  id: any;
  printDetails: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  stockTransferDetail: any
  totalPurchase: any[] = [];
  totalPurchaseRate = 0;
  totalmrp: any[] = [];
  totalMrp = 0;
  totallanding: any[] = [];
  totalLandingCost = 0;
  getdata() {
    this.stockService.getStockTransferById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.stockTransferDetail = res;
      }
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
        pdf.save('stockTransfer.pdf');
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

  changeStatus() {
    this.stockService.stockTransferrecieved(this.id).subscribe(res => {
      console.log(res);
      if(res.success){
        this.toastr.success(res.msg);
        this.ngOnInit();
      }else{
        this.toastr.error(res.err);
      }
    })
  }
}
