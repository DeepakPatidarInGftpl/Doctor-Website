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
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';

@Component({
  selector: 'app-product-daybook',
  templateUrl: './product-daybook.component.html',
  styleUrls: ['./product-daybook.component.scss']
})
export class ProductDaybookComponent implements OnInit {
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
  financialYear!: string;
  minDate: Date;
  maxDate: Date;

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService,
    private transactionService: TransactionService, private coreService: CoreService, private cs: CompanyService,
    private datepipe: DatePipe, private reportService: ReportService, private commonService: CommonServiceService) {
  }
  //product Day Book form
  productDayBookform!: FormGroup;
  startDate: any;
  endDate: any;
  userDetails: any;

  //23-5
  isAdmin = false;
  fyID: any;
  ngOnInit(): void {
    //23-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID = fyId;
    }

    this.financialYear = localStorage.getItem('financialYear');
    const { minDate, maxDate } = this.commonService.determineMinMaxDates(this.financialYear);
    this.minDate = minDate;
    this.maxDate = maxDate;

    this.cs.userDetails$.subscribe((res: any) => {
      if (res.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
      this.getBranch();
    });
    //23   
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName = userDetails?.username
    });

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // product DayBook form
    this.productDayBookform = new FormGroup({
      start: new FormControl(formattedStartDate, this.commonService.dateRangeValidator(this.financialYear)),
      end: new FormControl(formattedToday, this.commonService.dateRangeValidator(this.financialYear))
    });

    this.commonService.validateAndClearDates(this.productDayBookform, this.minDate, this.maxDate);

    this.startDate = this.productDayBookform.value?.start;
    this.endDate = this.productDayBookform.value?.end;
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
  productDayBookList: any
  getproductDayBook() {
    this.reportService.getProductDaybook(this.startDate, this.endDate, this.fyID, this.selectData).subscribe((res: any) => {
      console.log(res);
      this.productDayBookList = res;
    })

  }

  // api call
  getSelectedProductDayBookDates() {
    console.log(this.productDayBookform.value);
    const start = this.datepipe.transform(this.productDayBookform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.productDayBookform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getproductDayBook();
  }
  // convert to pdf
  UserName: any;
  generatePDF() {
    const doc = new jsPDF();
    const subtitle = 'PV';
    const title = 'Product Day Book Report';
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

    doc.save('Product Day Book.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const subtitle = 'PV';
    const title = 'Product Day Book Report';
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
        ['#', 'Date', 'Name', 'Voucher Type', 'Voucher No.', 'In Qty', 'Out Qty', 'Price']
      ],
      body: this.productDayBookList.map((row: any, index: number) => [
        index + 1,
        this.formatDate(row.date),
        row.name,
        row.voucher_type,
        row.voucher_no,
        row.in_qty,
        row.out_qty,
        row.price,

      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 25, // margin top 


    });

    doc.save('Product_Daybook.pdf');
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
    const fileName = 'ProducrDayBook.xlsx';
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
      this.itemsPerPage = this.productDayBookList?.length;
    }
  }
  //23-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.reportService.getBranch().subscribe((res: any) => {
      this.branchList = res;
      this.filteredBranchList = [...this.branchList];
    });
  }
  filterBranch() {
    if (this.searchBranch.trim() === '') {
      this.filteredBranchList = [...this.branchList];
    } else {
      this.filteredBranchList = this.branchList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchBranch.toLowerCase())
      );
    }
  }
  // add remove branch 
  searchVariant = ''
  selectData: any[] = [];
  selectedCategoryIds: any[] = []
  SelectedBranch(variant: any, event: any) {
    if (event) {
      console.log(variant);
      this.selectData.push(variant)
      console.log(this.selectData, 'selected data');
      //close dropdown 
      this.searchVariant = '';
      this.ngOnInit();
    } else {
      const selectedIndex = this.selectData.findIndex(item => item == variant);
      console.log(selectedIndex);
      if (selectedIndex !== -1) {
        this.selectData.splice(selectedIndex, 1);
      }
      this.ngOnInit();
      console.log(this.selectData);
    }
  }
  //23-5
}



























