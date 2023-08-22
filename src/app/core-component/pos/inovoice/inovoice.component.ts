import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ActivatedRoute } from '@angular/router';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
@Component({
  selector: 'app-inovoice',
  templateUrl: './inovoice.component.html',
  styleUrls: ['./inovoice.component.scss']
})
export class InovoiceComponent implements OnInit {
  @ViewChild('invoice')
  invoiceElement!: ElementRef;
  order: any;
  loading: boolean = false;
  constructor( private renderer: Renderer2, private route: ActivatedRoute, private api: PosCartService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      const orderId = params['id'];
      // console.log(orderId);
      // this.api.company_details().subscribe({
      //   next: (res: any) => {
      //     this.company = res;
      //     console.log(res, 'company');
      //   },
      //   error: (error) => {
      //     console.log('error in company');
      //   }
      // })
      this.api.getPOSOrderDetails(orderId).subscribe({
        next: (res: any) => {
          this.order = res;
          // console.log(res, this.order);
        },
        error: (error) => {
          // console.log('error');
        },
        complete: () => {
          this.loading = false;
        }
      })
    });
  }

  getSubTotal(cart:any){
    let total = 0
    for (let index = 0; index < cart?.length; index++) {
      const element = cart[index];
      total += element?.unit_cost
    }
    return total;
  }

  getTaxTotal(cart:any){
    let total = 0
    for (let index = 0; index < cart?.length; index++) {
      const element = cart[index];
      total += element?.tax_amount
    }
    return total;
  }

  getTotalQty(cart:any){
    let total = 0
    for (let index = 0; index < cart?.length; index++) {
      const element = cart[index];
      total += element?.qty
    }
    return total;
  }

  getTotalMrp(cart:any){
    let total = 0
    for (let index = 0; index < cart?.length; index++) {
      const element = cart[index];
      total += element?.mrp
    }
    return total;
  }

  getTotalNet(cart:any){
    let total = 0
    for (let index = 0; index < cart?.length; index++) {
      const element = cart[index];
      total += element?.net_cost
    }
    return total;
  }

  getTotal(order:any){
    let additional_charge = order?.additional_charge;
    let subTotal = this.getSubTotal(order?.cart);
    let taxTotal = order?.total_tax;
    let total = additional_charge + subTotal + taxTotal;
    return Number(total).toFixed(2);
  }

  getDateForOrders(timestamp:any){
    const dateObject = new Date(timestamp);
  
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Note: Months are zero-based, so we add 1 to get the correct month number.
  const day = dateObject.getDate();
  
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  return formattedDate;
  }

  printInvoice() {
    // Make the element temporarily visible
    //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'block');

    // Access the element and retrieve its width
    const elementWidth = this.invoiceElement.nativeElement.offsetWidth;
    const elementHeight = this.invoiceElement.nativeElement.offsetHeight;
    // console.log('Element width:', elementWidth);

    // Hide the element again
    //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'none');

    const invoice = this.invoiceElement.nativeElement;

    const htmlWidth = elementWidth;
    const htmlHeight = elementHeight;

    const topLeftMargin = 15;

    let pdfWidth = htmlWidth + (topLeftMargin * 2);
    let pdfHeight = (pdfWidth * 1.5) + (topLeftMargin * 2);

    const canvasImageWidth = htmlWidth;
    const canvasImageHeight = htmlHeight;

    const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;

    html2canvas(invoice).then(canvas => {

      // canvas.getContext('2d');
      // const imgData = canvas.toDataURL("image/jpeg", 1.0);
      // let pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
      // pdf.addImage(imgData, 'png', topLeftMargin, topLeftMargin, canvasImageWidth, canvasImageHeight);

      // for (let i = 1; i <= totalPDFPages; i++) {
      //   pdf.addPage([pdfWidth, pdfHeight], 'p');
      //   pdf.addImage(imgData, 'png', topLeftMargin, - (pdfHeight * i) + (topLeftMargin * 4), canvasImageWidth, canvasImageHeight);
      // }

      // pdf.save(`Document ${new Date().toLocaleString()}.pdf`);
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save(`invoice_1`); // Generated PDF
      //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'none');

    });
  }

}
