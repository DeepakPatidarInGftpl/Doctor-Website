import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-details-sale-bill',
  templateUrl: './details-sale-bill.component.html',
  styleUrls: ['./details-sale-bill.component.scss', '../commonDetails.scss']
})
export class DetailsSaleBillComponent implements OnInit {

  constructor(private companyService: CompanyService, private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  companyDetails: any;
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
  BillDetail: any;
  totalmrp: any[] = [];
  totalMrp = 0;
  additional_discount: any[] = [];
  totalAdditionalDiscount = 0;

  discount: any[] = [];
  totalDiscount = 0;

  totalDiscountRupees: any[] = [];
  discountRupees = 0;
  totaldiscountRupees = 0;

  // tax
  calculateTax = 0;
  totalTax: any[] = [];

  //addistional discount
  additionalDiscoun:any[]=[];
totalAdditionalDiscou=0;
  getdata() {
    this.saleService.getSalesBillById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.BillDetail = res
        // console.log(res);
        this.BillDetail?.cart?.forEach((item: any) => {
          // discount
          let d: any = (item.price.toFixed(2) * item.discount) / 100;
          console.log(item.price.toFixed(2) - d.toFixed(2));
          this.discountRupees = item.price.toFixed(2) - d.toFixed(2);
          this.totaldiscountRupees = 0;
          this.totalDiscountRupees.push(this.discount);
          console.log(this.totalDiscount);
          this.totalDiscountRupees?.forEach((number: any) => {
            this.discountRupees += number;
          });

          // mrp
          this.totalmrp.push(item?.price);
          this.totalMrp = 0;
          this?.totalmrp?.forEach((number: any) => {
            this.totalMrp += number;
          });
          //total discount
          this.discount.push(item?.discount);
          this.totalDiscount = 0;
          this?.discount?.forEach((number: any) => {
            this.totalDiscount += number;
          });
          //total additional discount

          this.additionalDiscoun.push(item?.additional_discount);
          this.totalAdditionalDiscou = 0;
          this?.additionalDiscoun?.forEach((number: any) => {
            this.totalAdditionalDiscou += number;
          });

          let ad: any = (item.price.toFixed(2) * item.additional_discount) / 100;
          console.log(item.price.toFixed(2) - ad.toFixed(2));
          let addDis = item.price.toFixed(2) - ad.toFixed(2);
          
          this.additional_discount.push(addDis);
          this.totalAdditionalDiscount = 0;
          this?.additional_discount?.forEach((number: any) => {
            this.totalAdditionalDiscount += number;
          });

          // calulating tax
          console.log(this.discountRupees);
          console.log(addDis);
          
          let totalDiscount:any=+item?.discount+ +item.additional_discount;
          console.log(totalDiscount);
          let taxIntoRupeesRupees=(item.price.toFixed(2) * totalDiscount) / 100;
          let taxpriceRupees:any=item.price.toFixed(2)-taxIntoRupeesRupees;
          let taxPrice: any = taxpriceRupees.toFixed(2) - (taxpriceRupees.toFixed(2) * (100 / (100 + item?.tax)));
          console.log(taxPrice, 'taxprice');
          this.totalTax.push(taxPrice || 0);
          console.log(this.totalTax);
          this.calculateTax = taxpriceRupees - taxPrice;
          console.log(this.calculateTax);

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
        pdf.save('salesBill.pdf');
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
}
