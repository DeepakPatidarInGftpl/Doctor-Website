import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-details-estimate',
  templateUrl: './details-estimate.component.html',
  styleUrls: ['./details-estimate.component.scss','../commonDetails.scss']
})
export class DetailsEstimateComponent implements OnInit {

  constructor(private companyService:CompanyService,private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  companyDetails:any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }
  estimateDetail: any;
  totalmrp:any[]=[];
  totalMrp=0;
  getdata() {
    this.saleService.getSalesEstimateById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.estimateDetail = res
          // mrp
          this.estimateDetail?.cart?.forEach((res:any)=>{
            // mrp
            this.totalmrp.push(res?.price);
            this.totalMrp=0;
            this?.totalmrp?.forEach((number: any) => {
              this.totalMrp += number;
            })
          })
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
        pdf.save('salesEstimate.pdf');
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

