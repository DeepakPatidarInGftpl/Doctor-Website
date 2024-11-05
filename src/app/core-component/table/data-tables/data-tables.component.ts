

import { Component, OnInit } from '@angular/core';
import editorConfig from '../../../helpers/AngularEditorConfig';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})

export class DataTablesComponent implements OnInit {
  htmlContent = ''
  editorConfig = editorConfig
constructor(private _fb : FormBuilder){}
  form : FormGroup
ngOnInit(): void {
  this.form = this._fb.group({
    texts  : ['']
  })
}
ok(){

  return this.form.value
}
  
 // Import jsPDF library


  createInvoicePDF() {
 
            const doc :any = new jsPDF("p", "pt", "a4");

            doc.setLineWidth(0.5);
            doc.rect(30, 30, 540, 90);
            doc.setFontSize(18);
            doc.text("PRAMOD VASTRALAY", 40, 50);
            doc.setFontSize(10);
            doc.text("Khata No -2837, Khesra No 7284, Landlord - Virendra Prasad Singh,", 40, 70);
            doc.text("Main Road, Singhiya, Samastipur-848209, Bihar, India", 40, 85);
            doc.text("GSTIN: 10AHPS0912M1ZC", 40, 100);
            doc.text("Mobile: 7764913933, Email Id: mypramodvastralay@gmail.com", 40, 115);

            doc.setFontSize(12);
            doc.text("TAX INVOICE", 420, 50);
            doc.text("ORIGINAL FOR RECIPIENT", 420, 65);
            doc.setFontSize(10);
            doc.text("Invoice #: PB/24-25/108", 420, 90);
            doc.text("Date: 26 September 2024", 420, 105);
            doc.text("Place of Supply: 10-Bihar", 420, 120);
            doc.text("Due Date: 26 October 2024", 420, 135);
            doc.text("Transporter: Self", 420, 150);
            doc.text("PO No #: PB/24-25/75", 420, 165);

            doc.rect(30, 130, 540, 120);
            doc.setFontSize(10);
            doc.text("Customer Details:", 40, 150);
            doc.text("Fashion House", 40, 165);
            doc.text("GSTIN: 27AACBR1718E1ZP", 40, 180);
            doc.text("Adhar/Pan: AABCR1718E", 40, 195);
            doc.text("Billing Address:", 40, 210);
            doc.text("Main Road, Gurga Chowk, Bhihra (Rusera), Samastipur,", 40, 225);
            doc.text("Bihar-848209 , India", 40, 240);
            doc.text("Shipping Address:", 300, 210);
            doc.text("Main Road, Gurga Chowk, Bhihra (Rusera), Samastipur,", 300, 225);
            doc.text("Bihar-848209 , India", 300, 240);

            doc.rect(30, 260, 540, 160);
            autoTable(doc,{
                startY: 270,
                head: [['#', 'Item', 'HSN', 'Brand', 'MRP', 'Rate', 'Qty', 'CD%', 'GST', 'Amount']],
                body: [
                    ['1', 'Men Jockey Solid RN Tshirt (US57) Red-M\nSKU: DFGD2434E234', '61099110', 'JOCKEY', '5499.00', '3400.00', '1 PCS', '2%', '12%', '3808.00'],
                    ['2', 'Vinayak Printed Shirting (236456) Yellow -60"\nSKU: AFDCG245DGH1234', '54789110', 'VINAYAK', '1040.00', '650.00', '2 PCS', '5%', '12%', '2320.50'],
                    ['3', 'Men Integrity Mid Wash Jeans (GR2456C) Grey-30\nSKU: DFGD2434E234', '62039110', 'INTEGRITY', '1899.00', '1600.00', '1 PCS', '', '12%', '1792.00'],
                ],
                theme: 'grid',
                styles: { fontSize: 8, cellPadding: 3 },
                headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
                columnStyles: {
                    0: { cellWidth: 20 },
                    1: { cellWidth: 120 },
                    2: { cellWidth: 50 },
                    3: { cellWidth: 50 },
                    4: { cellWidth: 50 },
                    5: { cellWidth: 50 },
                    6: { cellWidth: 40 },
                    7: { cellWidth: 40 },
                    8: { cellWidth: 40 },
                    9: { cellWidth: 50 },
                },
            });

            const finalY = doc.lastAutoTable.finalY + 10;
            doc.rect(30, finalY - 10, 540, 120);
            doc.text("Total Quantity/Items: 2 / 2", 40, finalY);
            doc.text("Total Amount (In Words): INR Seven Thousand five hundred rupees only.", 40, finalY + 15);
            doc.text("Bank Details:", 40, finalY + 50);
            doc.text("Bank: State Bank of India", 40, finalY + 65);
            doc.text("Account #: 396028542380", 40, finalY + 80);
            doc.text("IFSC: SBIN003580", 40, finalY + 95);
            doc.text("Branch: SINGHIA", 40, finalY + 110);

            const termsStartY = finalY + 140;
            doc.rect(30, termsStartY - 10, 540, 90);
            doc.text("Terms and conditions:", 40, termsStartY);
            doc.text("1. Goods once sold can't be taken back or exchanged.", 40, termsStartY + 15);
            doc.text("2. Please notify us on any discrepancies within 3 days of receipt.", 40, termsStartY + 30);
            doc.text("3. We are not manufacturers, company will stand for warranty as per their terms and conditions.", 40, termsStartY + 45);
            doc.text("4. Interest @24% p.a. will be charged for unclear bills beyond 30 days.", 40, termsStartY + 60);
            doc.text("5. Subject to Rusera Jurisdiction.", 40, termsStartY + 75);

            const footerY = termsStartY + 100;
            doc.rect(30, footerY, 540, 60);
            doc.text("Prepared By: Rajnish Singh", 40, footerY + 20);
            doc.text("Checked By:", 200, footerY + 20);
            doc.text("Counted By:", 360, footerY + 20);
            doc.text("Thank you for the Business.", 200, footerY + 50);

            doc.save("invoice.pdf");
}


 
}
