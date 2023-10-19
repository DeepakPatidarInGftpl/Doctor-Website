import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-details-material-inward',
  templateUrl: './details-material-inward.component.html',
  styleUrls: ['./details-material-inward.component.scss','../commonDetails.scss']
})
export class DetailsMaterialInwardComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location,
    private companyService:CompanyService) { }

  id: any;
  companyDetails:any;
  materialDetail: any
  printDetails: any;
  supplierAddress:any;
  selectedAddressBilling:any;
  selectedAddressShipping:any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();

    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }

  totalPurchase:any[]=[];
  totalPurchaseRate=0;
  totalmrp:any[]=[];
  totalMrp=0;
  totallanding:any[]=[];
  totalLandingCost=0;
  getdata() {
    this.purchaseService.getMaterialById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.materialDetail = res
        this.supplierAddress = res;
        console.log(this.supplierAddress);
        
        this.supplierAddress?.party?.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            console.log(this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            console.log(this.selectedAddressShipping);
          }
        })

            // calculation
            this.materialDetail?.cart?.forEach((res:any)=>{
              this.totalPurchase.push(res?.qty);
              this.totalPurchaseRate =0
              this?.totalPurchase?.forEach((number: any) => {
                this.totalPurchaseRate += number;
              })
              // mrp
              this.totalmrp.push(res?.mrp);
              this.totalMrp=0;
              this?.totalmrp?.forEach((number: any) => {
                this.totalMrp += number;
              })
              //landing cost
              this.totallanding.push(res?.po_qty);
              this.totalLandingCost=0;
              this?.totallanding?.forEach((number: any) => {
                this.totalLandingCost += number;
              })
              // total deduction
              
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
        pdf.save('MaterialInward.pdf');
      });
    }
  }
   
  // generatePdf() {
  //   this.loaderPdf = true;
  //   const elementToCapture = document.getElementById('debitNote');
  //   if (elementToCapture) {
  //     html2canvas(elementToCapture).then((canvas) => {
  //       // Enable image smoothing for better text rendering
  //       const ctx = canvas.getContext('2d');
  //       ctx.imageSmoothingEnabled = true;
  
  //       this.loaderPdf = false;
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p', 'mm', 'a4');
  //       const width = pdf.internal.pageSize.getWidth();
  //       const height = pdf.internal.pageSize.getHeight();
  //       pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
  //       pdf.save('addMaterialInward.pdf');
  //     });
  //   }
  // }
  
  // print

  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

}

