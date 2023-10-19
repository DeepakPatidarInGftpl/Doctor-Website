import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-detailspurchase-bill',
  templateUrl: './detailspurchase-bill.component.html',
  styleUrls: ['./detailspurchase-bill.component.scss', '../commonDetails.scss']
})
export class DetailspurchaseBillComponent implements OnInit {

  constructor(private companyService: CompanyService, private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  companyDetails: any;
  printDetails: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    })
  }
  purchaseBillDetail: any;
  totalPurchase: any[] = [];
  totalPurchaseRate = 0;
  totalmrp: any[] = [];
  totalMrp = 0;
  totallanding: any[] = [];
  totalLandingCost = 0;
  totalAdditional: any[] = [];
  totalAdditionalDiscount = 0;
  totalOnline: any[] = [];
  totalOnlinePrice = 0;
  totalOffline: any[] = [];
  totalOfflinePrice = 0;
  totalDealer: any[] = [];
  totalDealerPrice = 0;
  totalEmployee: any[] = [];
  totalEmployeePrice = 0;

  totalDiscount: any[] = [];
  totalDiscountt = 0

  totaltax: any[] = [];
  totalTax = 0;

  totalQty: any[] = [];
  totalQTY = 0;
  // tax rate

  TaxRate: any[] = [];
  totaltaxrate = 0;
  taxable_amount: any = [];
  totalTaxableAmount = 0;
  cgst_amount: any[] = [];
  totalCgstAmount = 0;
  igst_amount: any[] = [];
  totalIgstAmount = 0;
  sgst_amount: any[] = [];
  totalSgstAmount = 0;
  total_tax: any[] = [];
  totalTaxAmount=0;
  getdata() {
    this.purchaseService.getPurchaseBillById(this.id).subscribe(res => {
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
        // calculation cart
        this.purchaseBillDetail?.cart?.forEach((res: any) => {
          this.totalPurchaseRate=0;
          this.totalPurchase.push(res?.unit_cost);
          this?.totalPurchase?.forEach((number: any) => {
            this.totalPurchaseRate += number;
          })
          // mrp
          this.totalMrp=0;
          this.totalmrp.push(res?.mrp);
          this?.totalmrp?.forEach((number: any) => {
            this.totalMrp += number;
          })
          //landing cost
          this.totallanding.push(res?.landing_cost);
          this.totalLandingCost=0;
          this?.totallanding?.forEach((number: any) => {
          this.totalLandingCost += number;
          })
          // additional discount
          this.totalAdditional.push(res?.additional_discount);
          this.totalAdditionalDiscount=0;
          this?.totalAdditional?.forEach((number: any) => {
          this.totalAdditionalDiscount += number;
          })
          // online
          this.totalOnline.push(res?.selling_price_online);
          this.totalOnlinePrice=0;
          this?.totalOnline?.forEach((number: any) => {
          this.totalOnlinePrice += number;
          })
          // offline
          this.totalOffline.push(res?.selling_price_offline);
          this.totalOfflinePrice=0;
          this?.totalOffline?.forEach((number: any) => {
          this.totalOfflinePrice += number;
          })
          //dealer
          this.totalDealer.push(res?.dealer_price);
          this.totalDealerPrice=0;
          this?.totalDealer?.forEach((number: any) => {
          this.totalDealerPrice += number;
          })
          // employee
          this.totalEmployee.push(res?.employee_price);
          this.totalEmployeePrice=0;
          this?.totalEmployee?.forEach((number: any) => {
            this.totalEmployeePrice += number;
          })
          // discount
          this.totalDiscount.push(res?.discount);
          this.totalDiscountt=0;
          this?.totalDiscount?.forEach((number: any) => {
            this.totalDiscountt += number;
          })
          // tax
          this.totaltax.push(res?.tax);
          this.totalTax=0;
          this?.totaltax?.forEach((number: any) => {
            this.totalTax += number;
          })
          // qty
          this.totalQty.push(res?.qty);
          this.totalQTY =0;
          this?.totalQty?.forEach((number: any) => {
            this.totalQTY += number;
          })
        })

        // tax rate
        this.purchaseBillDetail?.tax_rate?.forEach((tax: any) => {
          // tax Rate
          this.totaltaxrate=0;
          this.TaxRate.push(tax?.tax_rate);
          console.log(this.TaxRate); 
          this?.TaxRate?.forEach((number: any) => {
            this.totaltaxrate += number;
          })
          // taxable amount
          this.totalTaxableAmount=0;
          this.taxable_amount.push(tax?.taxable_amount);
          this?.taxable_amount?.forEach((number: any) => {
            this.totalTaxableAmount += number;
          })
          // igst amount
          this.totalIgstAmount=0;
          this.igst_amount.push(tax?.igst_amount);
          this?.igst_amount?.forEach((number: any) => {
            this.totalIgstAmount += number;
          })
          //cgst amount
          this.totalCgstAmount=0;
          this.cgst_amount.push(tax?.cgst_amount);
          this?.cgst_amount?.forEach((number: any) => {
            this.totalCgstAmount += number;
          })
          // sgst amount
          this.totalSgstAmount=0;
          this.sgst_amount.push(tax?.sgst_amount);
          this?.sgst_amount?.forEach((number: any) => {
            this.totalSgstAmount += number;
          })
          // total tax 
          this.totalTaxAmount=0;
          this.total_tax.push(tax?.total_tax);
          this?.total_tax?.forEach((number: any) => {
            this.totalTaxAmount += number;
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
        pdf.save('goodsRecievedNotes.pdf');
      });
    }
  }

  loaderPrint=false;
  printForm(): void {
    this.loaderPrint=true;
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    this.loaderPrint=false;
    window.print();
    document.body.innerHTML = originalContents;
  }
}

