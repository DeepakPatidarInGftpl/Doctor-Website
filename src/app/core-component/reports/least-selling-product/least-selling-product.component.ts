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
import { ReportService } from 'src/app/Services/report/report.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-least-selling-product',
  templateUrl: './least-selling-product.component.html',
  styleUrls: ['./least-selling-product.component.scss']
})
export class LeastSellingProductComponent implements OnInit {

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
    //product Day Book form
    productDayBookform!: FormGroup;
    from_Date: any;
    to_Date: any;
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
      const from_Date = new Date(today);
      from_Date.setDate(today.getDate() - 14);
  
      const formattedStartDate = this.formatDate(from_Date);
      const formattedToday = this.formatDate(today);
  
      // product DayBook form
      this.productDayBookform = new FormGroup({
        start: new FormControl(formattedStartDate),
        end: new FormControl(formattedToday),
        
      });
      this.from_Date = this.productDayBookform.value?.start;
      this.to_Date = this.productDayBookform.value?.end;
      this.getproductDayBook();
     
    }
    // getproductDayBook() {
    //   throw new Error('Method not implemented.');
    // }
    private formatDate(date: Date): string {
      return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
    }
  
    key = 'id'
    reverse: boolean = false;
    sort(key: any) {
      this.key = key;
      this.reverse = !this.reverse
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
  productDayBookList:any
    getproductDayBook() {
      this.reportService.getLeastSellingProduct(this.from_Date, this.to_Date).subscribe((res:any) => {
        console.log(res);
        this.productDayBookList = res?.data;
      })
  
    }
  
    // api call
    getSelectedProductDayBookDates() {
      console.log(this.productDayBookform.value);
      const start = this.datepipe.transform(this.productDayBookform.value.start, 'yyyy-MM-dd');
      const end = this.datepipe.transform(this.productDayBookform.value.end, 'yyyy-MM-dd');
      console.log(start);
      console.log(end);
      this.from_Date = start;
      this.to_Date = end;
      this?.getproductDayBook();
    }
    // convert to pdf
    UserName: any;
   
    generatePDFAgain() {
      const doc = new jsPDF();
      const subtitle = 'PV';
      const title = 'Least Selling Product Report';
      const heading2 = `Date Range From: ${this.from_Date} - ${this.to_Date}`
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
          ['#', 'ProductName', 'No.OfBills', 'SaleQty', 'SaleAmount','Sale(%)']
        ],
        body: this.productDayBookList.map((row:any, index:number ) => [
          index + 1,
          row.product_name,
          row.no_of_bills,
          row.sale_qty,
          row.sale_amount,
          row.sale_percentage,

        ]),
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        startY: 25, // margin top 
    
    
      });
    
      doc.save('Least_Selling_Product.pdf');
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
      const fileName = 'leastsellingproduct.xlsx';
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

    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.productDayBookList?.length;
      }
    }
  }
