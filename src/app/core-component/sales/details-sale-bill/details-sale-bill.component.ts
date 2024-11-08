import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
@Component({
  selector: 'app-details-sale-bill',
  templateUrl: './details-sale-bill.component.html',
  styleUrls: ['./details-sale-bill.component.scss', '../commonDetails.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsSaleBillComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private Arout: ActivatedRoute,
    private saleService: SalesService,
    private location: Location,
    public _pdf : PdfgenService,
    private _datepipe : DatePipe
      ) { }
  
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  id: any;
  companyDetails: any;
  supplierAddress: any;
  totalItems: any;
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
totaltaxsummary = {}
  getdata() {
    this.saleService.getSalesBillById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.BillDetail = res
        console.log(res);




        res.TaxSummary.forEach((element:any) => {
          element.sumOfamount = 0;
          if ( element.igst > 0) {
            element.igst_amount =  element.igst;
            element.igst = element.tax;
            element.sumOfamount += element.total_tax
            
          }else{

            const taxs =( element.tax/2) || 0;
            const total_tax = (element.total_tax /2)

            element.cgst =  taxs;
            element.sgst =  taxs;
            element.cgst_amount = total_tax
            element.sgst_amount = total_tax
            element.sumOfamount += element.total_tax

          }

  
        });
        


       

        // console.log(res,'deepak')



        if (res.TaxSummary.length > 0) {
          ['cgst','cgst_amount' , 'igst','igst_amount', 'sgst','sgst_amount', 'sumOfamount', 'tax', 'taxable_value', 'total_tax', 'total_amount'].forEach((key:string) => {
            this.totaltaxsummary[key] = (this.totaltaxsummary[key] || 0) + res.TaxSummary.reduce((acc:number, element:any) => acc + element[key], 0);
          });
          console.log(this.totaltaxsummary,'deepak');
          console.log(res.TaxSummary,'deepak pa');
        }


        this.totalItems = this.BillDetail?.cart?.length;
        this.BillDetail?.cart?.forEach((item: any) => {
          // discount
          item.price = Number(item.price +'');
          let d: any = (item.price * item.discount) / 100;
          console.log(item.price - d.toFixed(2));
          // this.discountRupees = item.price - d.toFixed(2);
          this.totaldiscountRupees = 0;
          this.totalDiscountRupees.push(d);
          // this.totalDiscountRupees.push(item.discount);
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
          let discount: any = 0;
          this?.discount?.forEach((number: any) => {
            discount += parseFloat(number);
          });
          this.totalDiscount = discount.toFixed(2);
          //total additional discount

          if(item?.additional_discount){
            this.additionalDiscoun.push(item?.additional_discount);
          }
          console.log('deepak',item?.additional_discount)
          console.log('deepak',item)
          this.totalAdditionalDiscou = 0;
          if(this?.additionalDiscoun?.length > 0) {
            this?.additionalDiscoun?.forEach((number: any) => {
              this.totalAdditionalDiscou += number;
            });
          } else {
            this.totalAdditionalDiscou = 0;
          }

          let ad: any = (item.price.toFixed(2) * item.additional_discount) / 100;
          console.log(item.price.toFixed(2) - ad.toFixed(2));
          let addDis = item.price.toFixed(2) - ad.toFixed(2);
          
          this.additional_discount.push(addDis);
          this.totalAdditionalDiscount = 0;
          if(this?.additional_discount?.length > 0) {
            this?.additional_discount?.forEach((number: any) => {
              this.totalAdditionalDiscount += number;
            });
          } else {
            this.totalAdditionalDiscount = 0;
          }

          // calulating tax
          console.log(this.discountRupees);
          console.log(addDis);
          
          let totalDiscount:any=+item?.discount+ +item.additional_discount;
          console.log(totalDiscount);
          let taxIntoRupeesRupees=(item.price * totalDiscount) / 100;
          let taxpriceRupees:any=item.price-taxIntoRupeesRupees;
console.log(taxpriceRupees)

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
            console.log('bii',this.selectedAddressBilling);
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

generatePdf2() {
let p : number = parseFloat(this.totalMrp +'')
    let arr2 = new Array() ;
    this.BillDetail?.cart.forEach((cart : any,n : number) => {
     arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.item_name}`,`${cart?.barcode?.product?.subcategory?.title}`,`${cart?.barcode?.product?.brand?.title}`,`${cart?.barcode?.product?.hsncode?.hsn_code}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.total}`])
   });
   const obj = {
   'Type' : 'Invoice',
   'Fist_date' : this.BillDetail?.bill_date,
   'Secouand_date' : this.BillDetail?.bill_date ,
   'thead1' : ['Sale Bill No.','Party Name','Payment Terms','Sales Order','Sales Man','Sale Bill Date','Due date'],
   'tbody1' : [`${this.BillDetail?.customer_bill_no}`,`${this.BillDetail?.customer?.name+ ' (' + this.BillDetail?.customer?.user_type + ')'}`,`${this.BillDetail?.payment_terms?.title}`,`${this.BillDetail?.sale_order?.sale_order_no ?? ''}`,`${this.BillDetail?.sales_man?.name}`, `${this.BillDetail?.bill_date}`,`${this.BillDetail?.due_date}`],
   'table2head' : ['#','Barcode/SKU','Product Name','Sub_Category','Brand','HSN_Code','Price','QTY','Discount(%)','Tax(%)','Total'],
   'foot2' : [
     [
       {
         content : 'Total',
         colSpan:3,
         styles: { halign: 'center' }
       },
       {
         content : `${p.toFixed(2)}`,
         styles: { halign: 'center' }
       },
       {
         content : `${this.BillDetail?.total_qty}`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.totalDiscount}%`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.totalAdditionalDiscou}%`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.BillDetail?.total_tax}`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.BillDetail?.total}`,
         styles: { halign: 'center' }
         
       },
      
     ],
     [
       {
         content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
         colSpan : 8,
         styles : {halign : 'left'}
       }
       
     ],
     [
       {
         content : ``,
         colSpan : 5,
       },
       {
         content : `Sub Total `,
         colSpan : 2,
         styles : {halign : 'right'}
       },
       {
         content : `${this.BillDetail?.subtotal}`,
         colSpan : 1,
         styles : {halign : 'left'}
       }
   
     ],
     [
       {
         content : '',
         colSpan : 5,
         // styles : {halign : 'left'}
       },
      { content : 'Additional Charges ',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.BillDetail?.additional_charges}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
         colSpan : 5,
         styles : {halign : 'left'}
       },
      { content : 'Additional Discount(%)',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.BillDetail?.total_discount}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
         colSpan : 5,
         styles : {halign : 'left'}
       },
      { content : 'Round Off',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.BillDetail?.roundoff}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
         colSpan : 5,
         styles : {halign : 'left'}
       },
      { content : 'Total',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.BillDetail?.total}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
       colSpan : 5,
       },
       {
         content : '',
       colSpan : 3,
       },
     ]
   ],
   'company_name' : this.companyDetails?.name,
   'company_gst' : this.companyDetails?.gst,
   'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
   'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
   'top_left_phone' : this.companyDetails?.phone,
   'top_left_email' : this.companyDetails?.email,
   'BILLING_ADDRESS' : {
     'address_line_1' : this.selectedAddressBilling?.address_line_1 ?? '',
     'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +(this.selectedAddressShipping?.city?.city == null || undefined) ? '' : this.selectedAddressShipping?.city?.city,
     'address_line_3' : (this.selectedAddressBilling?.state?.state == null || undefined) ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + (this.selectedAddressBilling?.country?.country_name == null || undefined) ? '' : this.selectedAddressBilling?.country?.country_name ,
     'phone' : this.BillDetail?.customer?.phone_number ?? '',
     'email' : this.BillDetail?.customer?.email ?? ''
   },
   'SHIPPING_ADDRESS' : {
     'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
     'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +(this.selectedAddressShipping?.city?.city == null || undefined) ? '' : this.selectedAddressShipping?.city?.city,
    'address_line_3' : (this.selectedAddressBilling?.state?.state == null || undefined) ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + (this.selectedAddressBilling?.country?.country_name == null || undefined) ? '' : this.selectedAddressBilling?.country?.country_name ,
    'phone' : this.BillDetail?.customer?.phone_number ?? '',
     'email' : this.BillDetail?.customer?.emails ?? '',
   },
   'table2body' : arr2,
   'order_no' : this.BillDetail?.customer_bill_no,
   }
   
    this._pdf.generatePdf(obj);
   
}

generateNewPdf() {

const Invoice_Date  = this._datepipe.transform(this.BillDetail?.bill_date ,'dd-MMMM-yyyy');
const Due_date  = this._datepipe.transform(this.BillDetail?.due_date ,'dd-MMMM-yyyy');
  
  let p : number = parseFloat(this.totalMrp +'')
      let arr2 = new Array() ;
      this.BillDetail?.cart.forEach((cart : any,n : number) => {
       arr2.push([`1`,`${cart?.item_name}`,`${cart?.barcode?.sku}`,`${cart?.barcode?.product?.subcategory?.title}`,`${cart?.barcode?.product?.brand?.title}`,`${cart?.barcode?.product?.hsncode?.hsn_code}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`],
        [`2`,`${cart?.barcode?.sku}`, `${cart?.item_name}`,`${cart?.item_name}`,`${cart?.barcode?.product?.subcategory?.title}`,`${cart?.barcode?.product?.brand?.title}`,`${cart?.barcode?.product?.hsncode?.hsn_code}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`],
        [`3`,`${cart?.barcode?.sku}`, `${cart?.item_name}`,`${cart?.item_name}`,`${cart?.barcode?.product?.subcategory?.title}`,`${cart?.barcode?.product?.brand?.title}`,`${cart?.barcode?.product?.hsncode?.hsn_code}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`],
        [`4`,`${cart?.barcode?.sku}`, `${cart?.item_name}`,`${cart?.item_name}`,`${cart?.barcode?.product?.subcategory?.title}`,`${cart?.barcode?.product?.brand?.title}`,`${cart?.barcode?.product?.hsncode?.hsn_code}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`],
       )
     });
     const obj = {
     'Type' : 'Invoice',
     'Fist_date' : this.BillDetail?.bill_date,
     'Secouand_date' : this.BillDetail?.bill_date ,
     'head1' : [],
     'tbody1' : [
      [
        { content: `Customer Details:
${this.BillDetail?.customer?.name}`, colSpan: 8},
        { content: `Invoice #: ${this.BillDetail?.customer_bill_no}`, colSpan: 2},
        { content: `Date: ${Invoice_Date}`, colSpan: 2},
      ],
      [
        { content: `GSTIN: ${this.BillDetail?.customer?.detail?.gstin}`, colSpan: 8},
        { content: `Place of Supply: ${this.companyDetails?.state_code?.gst_code}-${this.companyDetails?.state?.state}`, colSpan: 2},
        { content: `Due Date: ${Due_date}`, colSpan: 2},
        
      ],
      [
        { content: 'Adhar/pan: AABCR1718E', colSpan: 8},
        { content: 'Transporter: self', colSpan: 2},
        { content: `SO No: ${this.BillDetail?.sale_order?.sale_order_no ?? 'nil'}`, colSpan: 2},
      ],
      [
      { content : `Billing Address: 
${this.selectedAddressBilling?.address_line_1==null?'':this.selectedAddressBilling?.address_line_1+ ' , ' +this.selectedAddressBilling?.address_line_2==null?'':this.selectedAddressBilling?.address_line_2+ ' , ' +this.selectedAddressBilling?.city?.city}
${this.selectedAddressBilling?.state?.state + ' , ' +this.selectedAddressBilling?.country?.country_name}\n
Shipping Address:
${this.selectedAddressShipping?.address_line_1==null?'':this.selectedAddressShipping?.address_line_1+ ' , ' +this.selectedAddressShipping?.address_line_2==null?'':this.selectedAddressShipping?.address_line_2+ ' , ' +this.selectedAddressShipping?.city?.city}
${this.selectedAddressBilling?.state?.state + ' , ' +this.selectedAddressBilling?.country?.country_name}`, colSpan: 8 },
{ content: `Dispatch From:
Khata No —2837,Khesra No 7284, Landlord-Virendra 
Prasad Singh, Main Road, Singhiya, Samastipur— 
848209, Bihar, India`, colSpan: 4},
      ],
  ],
    
     'table2head' : ['#','ITEM','HSN','BRAND','MRP','RATE','QTY','CD%','GST','AMOUNT'],
     'foot2' : [
       [
         {
           content : `Total Quantity /item: 2/2
Total Amount (In Amount)
INR Seven Thousand five hundred rupees only

Bank Details
Bank: State Bank of India 
Account: 396028542380
IFCA: SBIN003580
Branch: SINGHIA`,
           colSpan : 5,
         },
         {
           content : `Taxable Amount
           Additional changes
        Discount 
        Taxes
        Round off
        Total 

        Payment Status`,
           colSpan : 3,
           styles : {halign : 'right'}
         }, 
         {
          content : `78787
          7676
        2626
        4545
        7676
        7676

        Partially Paid`,
          colSpan : 2,
          styles : {halign : 'right'}
        }
       ],
      
//        [
//         {
//           content : `Total Amount (In Amount)
// INR Seven Thousand five hundred rupees only.`,
//           colSpan : 5,
//         },
//        { 
//         content : `Additional changes
//         Discount 
//         Taxes
//         Round off `,
//         colSpan : 3,
//          styles : {halign : 'right'}
//       }, 
//       { 
//         content : ` 7676
//         2626
//         4545
//         7676`,
//         colSpan : 1,
//          styles : {halign : 'right'}
//       }
//       ],
      
      
      // [
      //   {
      //     content : 'Bank Details',
      //     colSpan : 5,
      //     styles : {halign : 'left'}
      //   },
      //  { 
      //   content : `Total`,
      //   colSpan : 3,
      //   styles : {halign : 'right'}
      // }, 
      // { 
      //   content : `7676`,
      //   colSpan : 1,
      //   styles : {halign : 'right'}
      // }
      // ],
//       [
//         {
//           content : `Bank: State Bank of India 
// Account: 396028542380
// IFCA: SBIN003580
// Branch: SINGHIA`,
//           colSpan : 5,
//         },
//        { 
//         content : `Payment Status`,
//         colSpan : 3,
//         styles : {halign : 'right'}
//       },
//       { 
//         content : `Partially Paid`,
//         colSpan : 1,
//         styles : {halign : 'right'}
//       }
//       ],
    ],
    'table3head': [
      [
        { content: 'HSN / SAC', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
        { content: 'Taxable Value', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } },
        { content: 'State Tax', colSpan: 2, styles: { halign: 'center' } },
        { content: 'Centra Tax', colSpan: 2, styles: { valign: 'middle', halign: 'center' } },
        { content: 'Total Taxable Amount', rowSpan: 2, styles: { valign: 'middle', halign: 'center' } }
      ],
      [
        { content: 'Rate', styles: { halign: 'center' } },
        { content: 'Amount', styles: { halign: 'center' } },
        { content: 'Rate', styles: { halign: 'center' } },
        { content: 'Amount', styles: { halign: 'center' } }
      ],
      
    ],
    'table3body' : [
      {
        hsnSac: '9985',
        taxableValue: 10000,
        stateTaxRate: '9%',
        stateTaxAmount: 900,
        centralTaxRate: '9%',
        centralTaxAmount: 900,
        totalTaxableAmount: 11800
      },
      {
        hsnSac: '9967',
        taxableValue: 15000,
        stateTaxRate: '12%',
        stateTaxAmount: 1800,
        centralTaxRate: '12%',
        centralTaxAmount: 1800,
        totalTaxableAmount: 18600
      },
    ],
    'table4head' : [
      [
        {
          content : `Note: \t\t\t\t XYZ Offer applied (if any)`,
          colSpan : 12,
        }
      ]
    ],
     'table4body' : [
      [
        {
          content : `Terms and conditions:
1. Goods ones sold cant be taken back or exchanged.
2. Please notify us on any discrepancies within 3 days of receipt
3. We are not manufacturers, company will stand for warranty as per their terms and conditions.
4. Interest @24% p.a. will be charged for unclear bills beyond 30 days.
5. Subject to Ruer Jurisdiction.`,
          colSpan : 9,
          // styles : {halign : 'left'}
        },
       { content : `For PRAMOD VASTRALAY 
        \n \n \n \n 
        Authorized Signatory`,

        colSpan : 4,
        styles : {halign : 'right'}
      }
      ]
     ],
    
      
      
    'table4foot' : [
      [
        {
          content : `Prepared By: \t Rajnish Singh`,
          colSpan : 6,
        },
       { content : 'Checked By:',
        colSpan : 3,
        styles : {halign : 'left'}
      },
      { content : 'Counted By:',
        colSpan : 3,
        styles : {halign : 'left'}
      }
      ]
    ],
     'company_name' : this.companyDetails?.name ,
     'company_gst' : this.companyDetails?.gst,
     'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
     'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
     'top_left_phone' : this.companyDetails?.phone,
     'top_left_email' : this.companyDetails?.email,
    
    
     'table2body' : arr2,
     'order_no' : this.BillDetail?.customer_bill_no,
     }
     
      this._pdf.generateNewPdf(obj);
     
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

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.BillDetail?.logs?.length;
    }
  }
}
