import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-inovoice',
  templateUrl: './inovoice.component.html',
  styleUrls: ['./inovoice.component.scss']
})
export class InovoiceComponent implements OnInit {
  @ViewChild('invoice')
  invoiceElement!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  printInvoice() {
    // Make the element temporarily visible
    //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'block');

    // Access the element and retrieve its width
    const elementWidth = this.invoiceElement.nativeElement.offsetWidth;
    const elementHeight = this.invoiceElement.nativeElement.offsetHeight;
    console.log('Element width:', elementWidth);

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
