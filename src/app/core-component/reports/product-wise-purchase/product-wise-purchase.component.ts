import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ReportService } from 'src/app/Services/report/report.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-product-wise-purchase',
  templateUrl: './product-wise-purchase.component.html',
  styleUrls: ['./product-wise-purchase.component.scss']
})
export class ProductWisePurchaseComponent implements OnInit {
  loader = true;
  public tableData: any
  id: any;
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public countryList: any = [];

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  filteredSuppliers: Observable<any[]> | undefined;
  supplierControl: FormControl = new FormControl('');
  
  filteredProduct: Observable<any[]> | undefined;
  productControl: FormControl = new FormControl('');
  userName: any;
  
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService:TransactionService, private coreService:CoreService, private cs:CompanyService, private datepipe: DatePipe, private reportService:ReportService) {
  }
  //product Wise purchase form
 productWisePurchaseForm!: FormGroup;
  startDate: any;
  endDate: any;
  product: any;
   productWisePurchaseList: any;


  userDetails: any;
  ngOnInit(): void {
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName=userDetails?.username
    });
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // product Wise Sale form
    this.productWisePurchaseForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
      product: new FormControl(),
      
    });
    this.startDate = this.productWisePurchaseForm.value?.start;
    this.endDate = this.productWisePurchaseForm.value?.end;
    this.product = this.productWisePurchaseForm.value?.product;
    this. getProductWisePurchase();
    this.getProduct();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter(title as string) : this.suppliers.slice();
      }),
    );
    //product name'
    this.filteredProduct = this.productControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter2(title as string) : this.suppliers.slice();
      }),
    );
  }
  
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }

  private _filter(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.suppliers.filter((option: any) => 
    (option?.title && option.title.toLowerCase().includes(filterValue)) || 
    (option?.name && option.name.toLowerCase().includes(filterValue))
  );
  }
  displayFn(user: any): string {
    return user && user?.title || user?.name ? user?.title || user?.name  : '';
  }
  //product name
  private _filter2(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.suppliers.filter((option: any) => 
    (option?.title && option.title.toLowerCase().includes(filterValue)) || 
    (option?.name && option.name.toLowerCase().includes(filterValue))
  );
  }
  displayFn2(user: any): string {
    return user && user?.title || user?.name ? user?.title || user?.name : '';
  }
  suppliers: any[] = [];
  getProduct() {
    this.coreService.getProducts().subscribe((res: any) => {
      console.log(res, 'user');
      this.suppliers = res;
      // this.variants=res;
    })
  }
 

  search() {
    if (this.titlee === "") {
      this. getProductWisePurchase();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.productWisePurchaseList = this.productWisePurchaseList.filter((res: any) => {
        const nameLower = res?.user?.party_name.toLocaleLowerCase();
        const usernameLower = res?.payment_voucher_no.toLocaleLowerCase() || "";
        // return nameLower.includes(searchTerm);
        if (nameLower.includes(searchTerm) || usernameLower.includes(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.countryList.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.countryList.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }
  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[] = [];
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }
  calculateProductRange(currentPage: number, productsPerPage: number, totalProducts: number): string {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);
    return `Showing ${startIndex + 1}–${endIndex + 1} of ${totalProducts} results`;
  }
productWisePurchase:any
   getProductWisePurchase() {
    this.reportService. getProductWisePurchase(this.startDate, this.endDate, this.product).subscribe((res) => {
      console.log(res);
      this.productWisePurchase=res;
      this.productWisePurchaseList = res?.data;
    })

  }

  // api call
  dataId: any;
  oncheckAccount(data: any) {
    console.log(data);
    this.dataId = data;
   this.productWisePurchaseForm.patchValue({product:this.dataId});
   console.warn(this.productWisePurchaseForm.value);
   this.product = this.productWisePurchaseForm.value?.product;
   this?. getProductWisePurchase();
  }
  getSelectedProductWisePurchaseDates() {
    console.log(this.productWisePurchaseForm.value);
    const start = this.datepipe.transform(this.productWisePurchaseForm.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.productWisePurchaseForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?. getProductWisePurchase();
  }

  getProductoncheckAccount(data: any) {
   this.productWisePurchaseForm.patchValue({productName:data});
   console.warn(this.productWisePurchaseForm.value);
   this?. getProductWisePurchase();
  }
              // convert to pdf
                
UserName: any;
generatePDFAgain() {
  const doc = new jsPDF('landscape');
  const subtitle = 'PV';
  const title = 'Product Wise Purchase Report';
  const heading2 = `Date Range From: ${this.startDate} - ${this.endDate}`
  const heading = `User: ${this.userName}`;

  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(subtitle, 86, 5);
  doc.text(title, 82, 10);
  doc.text(heading, 10, 18);
  doc.text(heading2, 10, 22)

  doc.text('', 10, 25); //,argin x, y

  
    // Pass tableData to autoTable
    const headers =['#', 'User','Check Gst', 'Total','Bill Date','Variant Name','Qty','Unit Cost','Mrp','Discount','Tax','Landing Cost','Total']

    const data: any = [];

    let customerIndex = 1;
    this.productWisePurchaseList.forEach((list: any) => {
      console.warn(list);
      
      const user = list.user.party_name;
      const check_gst = list.check_gst;
      const total = list.total;
      const bill_date = list.bill_date;
      let isFirstInvoice = true;
      list.data.forEach((res:any,index: number) => {
        console.log(res);
        
        const invoiceNumber = isFirstInvoice ? customerIndex : '';
        data.push([
          invoiceNumber, // row no of each cstmr
          isFirstInvoice ? user : '',
          isFirstInvoice ? check_gst : '',
          isFirstInvoice ? total : '',
this.formatDate(isFirstInvoice ? bill_date : '',),

          res.barcode.variant_name,
         
          res.qty , 
          res.unit_cost , 
          res.mrp , 
          res.discount ,
          res.tax , 
          res.landing_cost , 
          res.total , 

        ]);
        isFirstInvoice = false;
      });
      customerIndex++;
    });
    autoTable(doc, {
      head: [headers],
      body: data,
      theme: 'grid',
      startY: 32, 
      headStyles: {
        fillColor: [255, 159, 67], // Header color
        textColor: [255, 255, 255] // Header text color
      }
    });


  doc.save('Product_wise_Purchase .pdf');
}
              // excel export only filtered data
              getVisibleDataFromTable(): any[] {
                const visibleData = [];
                const table = document.getElementById('mytable');
                if (table) {
                  const headerRow = table.querySelector('thead tr');
                  if (headerRow) {
                    const headerData: string[] = [];
                    headerRow.querySelectorAll('th').forEach(cell => {
                      const columnHeader = cell.textContent?.trim(); // Add null check here
                      if (columnHeader && columnHeader !== 'Is Active' && columnHeader !== 'Action') {
                        headerData.push(columnHeader);
                      }
                    });
                    visibleData.push(headerData);
                  }
              
                  // Include visible data rows
                  const dataRows = table.querySelectorAll('tbody tr');
                  dataRows.forEach(row => {
                    const rowData: string[] = [];
                    row.querySelectorAll('td').forEach(cell => {
                      const cellData = cell.textContent?.trim(); // Add null check here
                      if (cellData) {
                        rowData.push(cellData);
                      }
                    });
                    visibleData.push(rowData);
                  });
                }
                return visibleData;
              }
              
                  // Modify your exportToExcel() function
              exportToExcel(): void {
                const visibleDataToExport = this.getVisibleDataFromTable();
                const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
                const wb: XLSX.WorkBook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                // Create a Blob from the workbook and initiate a download
                const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
                const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const fileName = 'ProductHistory.xlsx';
                saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
              }
            
              printTable(): void {
                // Get the table element and its HTML content
                const tableElement = document.getElementById('mytable');
                if (!tableElement) {
                  console.error("Table element with ID 'mytable' not found.");
                  return;
                }
              
                const tableHTML = tableElement.outerHTML;
              
                // Get the title element and its HTML content
                const titleElement = document.querySelector('.titl');
                if (!titleElement) {
                  console.error("Title element with class 'titl' not found.");
                  return;
                }
              
                const titleHTML = titleElement.outerHTML;
              
                // Clone the table element to manipulate
                const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
            
              
                // Get the modified table's HTML content
                const modifiedTableHTML = clonedTable.outerHTML;
              
                // Apply styles to add some space from the top after the title
                const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
              
                // Combine the title and table content
                const combinedContent = styledTitleHTML + modifiedTableHTML;
              
                // Store the original contents
                const originalContents = document.body.innerHTML;
              
                // Replace the content of the body with the combined content
                document.body.innerHTML = combinedContent;
                window.print();
              
                // Restore the original content of the body
                document.body.innerHTML = originalContents;
              }
            }
  
  
  




  



  





  

