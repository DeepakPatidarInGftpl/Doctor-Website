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
  selector: 'app-product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.scss']
})
export class ProductHistoryComponent implements OnInit {
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
  //product history form
  productHistoryform!: FormGroup;
  startDate: any;
  endDate: any;
  productId: any;
   productHistoryList: any;


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

    // product history form
    this.productHistoryform = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
      productId: new FormControl(),
      
    });
    this.startDate = this.productHistoryform.value?.start;
    this.endDate = this.productHistoryform.value?.end;
    this.productId = this.productHistoryform.value?.productId;
    this.getProductHistory();
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
  getproductHistory() {
    throw new Error('Method not implemented.');
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
      this.getproductHistory();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.productHistoryList = this.productHistoryList.filter((res: any) => {
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
productHistory:any
  getProductHistory() {
    this.reportService.getProductHistory(this.startDate, this.endDate, this.productId).subscribe((res) => {
      console.log(res);
      this.productHistory=res;
      this.productHistoryList = res;
    })

  }

  // api call
  dataId: any;
  oncheckAccount(data: any) {
    console.log(data);
    this.dataId = data;
   this.productHistoryform.patchValue({productId:this.dataId});
   console.warn(this.productHistoryform.value);
   this.productId = this.productHistoryform.value?.productId;
   this?.getProductHistory();
  }
  getSelectedProductHistoryDates() {
    console.log(this.productHistoryform.value);
    const start = this.datepipe.transform(this.productHistoryform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.productHistoryform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getProductHistory();
  }

  getProductoncheckAccount(data: any) {
   this.productHistoryform.patchValue({productName:data});
   console.warn(this.productHistoryform.value);
   this?.getProductHistory();
  }
              // convert to pdf
                
UserName: any;
generatePDF() {
  const doc = new jsPDF();
  const subtitle = 'PV';
  const title = 'Product History Report';
  const heading2 = `Date Range From: ${this.startDate} - ${this.endDate}`
  const heading = `User: ${this.userName}`;

  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(subtitle, 86, 5);
  doc.text(title, 82, 10);
  doc.text(heading, 10, 18);
  doc.text(heading2, 10, 22)

  doc.text('', 10, 25); //,argin x, y

  autoTable(doc, {
    html: '#mytable',
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 25, // margin top 
  });

  doc.save('Product History.pdf');
}
generatePDFAgain() {
  const doc = new jsPDF();
  const subtitle = 'PV';
  const title = 'Product History Report';
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
  autoTable(doc, {
    head: [
      ['#', 'Date', 'Name', 'Voucher Type', 'Voucher No. ','In Qty','Out Qty','Price']
    ],
    body: this.productHistoryList.map((row:any, index:number ) => [
      index + 1,
      this.formatDate(row.date),
      row.name,
      row.voucher_type,
      row.voucher_no,
      row.in_qty,
      row.out_qty,
      row.price
    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 25, // margin top 


  });

  doc.save('Product_History.pdf');
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
                //refresh
  window.addEventListener('afterprint', () => {
    console.log('afterprint');
   window.location.reload();
  });
  //end
                // Replace the content of the body with the combined content
                document.body.innerHTML = combinedContent;
                window.print();
              
                // Restore the original content of the body
                document.body.innerHTML = originalContents;
              }

              changePg(val: any) {
                console.log(val);
                if (val == -1) {
                  this.itemsPerPage = this.productHistoryList?.length;
                }
              }
            }
  
  
  




  



  





  


