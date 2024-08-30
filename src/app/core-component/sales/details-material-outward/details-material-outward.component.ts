import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-details-material-outward',
  templateUrl: './details-material-outward.component.html',
  styleUrls: ['./details-material-outward.component.scss','../commonDetails.scss']
})
export class DetailsMaterialOutwardComponent implements OnInit {

  constructor(private companyService:CompanyService,private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
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
  returnBillDetail: any
  totalPurchase:any[]=[];
  totalPurchaseRate=0;
  totalmrp:any[]=[];
  totalMrp=0;
  totallanding:any[]=[];
  totalLandingCost=0;

  // tax
  calculateTax = 0;
  discount = 0;
  totalTax: any[] = [];
  getdata() {
    this.saleService.getSalesMaterialOutwardById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.returnBillDetail = res;
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
        pdf.save('MaterialOutward.pdf');
      });
    }
  }
 
  printForm(): void {
    const formElement = document.getElementById('debitNote');
    if (!formElement) {
        console.error('Form not found');
        return;
    }

    const clonedForm = formElement.cloneNode(true) as HTMLElement;

    const printContainer = document.createElement('div');
    printContainer.id = 'printContainer';
    printContainer.appendChild(clonedForm);

    const style = document.createElement('style');
    style.id = 'printStyle';
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            #printContainer, #printContainer * {
                visibility: visible;
            }
            #printContainer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(printContainer);

    window.print();

    window.addEventListener('afterprint', () => {
      this.clearPrintContainer();
    });

    setTimeout(() => {
      this.clearPrintContainer();
    }, 2000);
}

clearPrintContainer(): void {
    const printContainer = document.getElementById('printContainer');
    const printStyle = document.getElementById('printStyle');

    if (printContainer) {
        printContainer.remove();
    }
    if (printStyle) {
        printStyle.remove();
    }
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
      this.itemsPerPage = this.returnBillDetail?.logs?.length;
    }
  }
}
