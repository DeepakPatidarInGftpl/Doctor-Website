import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

@Component({
  selector: 'app-print-material-inward',
  templateUrl: './print-material-inward.component.html',
  styleUrls: ['./print-material-inward.component.scss']
})
export class PrintMaterialInwardComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data,private purchaseService: PurchaseServiceService, private Arout: ActivatedRoute) { }
  constructor(private purchaseService: PurchaseServiceService, private Arout: ActivatedRoute) { }

  id: any;
  printDetails: any;
  supplierAddress:any;
  selectedAddressBilling:any;
  selectedAddressShipping:any;
  ngOnInit(): void {
    // console.log(this.data);  
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.purchaseService.getMaterialById(this.id).subscribe(res => {
      this.printDetails = res;
      console.log(res);
      this.supplierAddress = res;
      console.log(this.selectedAddressBilling);
      this.supplierAddress?.party?.address.map((res: any) => {
        if (res.address_type == 'Billing') {
          this.selectedAddressBilling = res;
          console.log(this.selectedAddressBilling);
        } else if (res.address_type == 'Shipping') {
          this.selectedAddressShipping = res;
          console.log(this.selectedAddressShipping);
        }
      })
    })
  }

  // print and save 
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
        pdf.save('addMaterialInward.pdf');
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
