import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-details-debitnotes',
  templateUrl: './details-debitnotes.component.html',
  styleUrls: ['./details-debitnotes.component.scss','../commonDetails.scss']
})
export class DetailsDebitnotesComponent implements OnInit {

  constructor(private companyService:CompanyService,private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  companyDetails:any;
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
  purchaseBillDetail: any
  totalPurchase:any[]=[];
  totalPurchaseRate=0;
  totalmrp:any[]=[];
  totalMrp=0;
  totallanding:any[]=[];
  totalLandingCost=0;
  getdata() {
    this.purchaseService.getPurchaseReturnById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.purchaseBillDetail = res
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
         this.purchaseBillDetail?.cart?.forEach((res:any)=>{
          this.totalPurchase.push(res?.unit_cost);
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
          this.totallanding.push(res?.landing_cost);
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
        pdf.save('purchaseReturn.pdf');
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

  pp: number = 1
  pageSizee: number = 10;
  itemsPerPagee = 10;
  keyy = 'id';
  reversee: boolean = false;
  sortt(key) {
    this.keyy = key;
    this.reversee = !this.reversee
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.purchaseBillDetail?.logs?.length;
    }
  }
}


