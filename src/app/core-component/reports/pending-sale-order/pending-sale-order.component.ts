import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import { Observable, debounceTime, map, startWith } from 'rxjs';
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
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
@Component({
  selector: 'app-pending-sale-order',
  templateUrl: './pending-sale-order.component.html',
  styleUrls: ['./pending-sale-order.component.scss']
})
export class PendingSaleOrderComponent implements OnInit {

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

  constructor(
    private cs: CompanyService, private datepipe: DatePipe, private reportService: ReportService, private commonService: CommonServiceService,private coreService: CoreService) {
  }
  //Customer Wise Sale form
  customerWiseSaleForm!: FormGroup;
  startDate: any;
  endDate: any;
  product_id: any;
  customerWiseSaleUserId: any;
  customerWiseSaleList: any;
  filteredusers: Observable<any[]>;
  userControl = new FormControl();
  userDetails: any;
  UserName: any;
  financialYear!: string;
  minDate: Date;
  maxDate: Date;
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
     this.isAdmin = res?.role == 'admin'
      this.getBranch();
    });
    //23 
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.UserName = userDetails?.username
    });
    const today = new Date();
    
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // Customer Wise Sale form
    this.customerWiseSaleForm = new FormGroup({
      start: new FormControl(formattedStartDate, this.commonService.dateRangeValidator(this.financialYear)),
      end: new FormControl(formattedToday, this.commonService.dateRangeValidator(this.financialYear)),
      user_id: new FormControl(),
      product_id: new FormControl()
    });

    this.commonService.validateAndClearDates(this.customerWiseSaleForm, this.minDate, this.maxDate);

    this.startDate = this.customerWiseSaleForm.value?.start;
    this.endDate = this.customerWiseSaleForm.value?.end;
    this.customerWiseSaleUserId = this.customerWiseSaleForm.value?.user_id;
    this.product_id = this.customerWiseSaleForm.value?.product_id

    this.getCustomerWiseSale();
    this.getProduct()
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter2(title as string) : this.suppliers.slice();
      }),
    );
    this.filteredusers = this.userControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.userControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getUser(res);
      } else {
        this.users = [];
        this.filteredusers = this.userControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })
  }
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }
  displayFn(user: any): string {
    return user && user?.title || user?.title;
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredUsers = include
      ? this.users.filter(users => users?.name?.toLowerCase().includes(filterValue) || users.username.toLowerCase().includes(filterValue))
      : this.users.filter(users => !users?.name?.toLowerCase().includes(filterValue) || users.username.toLowerCase().includes(filterValue));
    if (!include && filteredUsers.length === 0) {
      // console.log("No results found");
      filteredUsers.push({ name: "No data found" });
    }
    return filteredUsers;
  }

  users: any[] = [];
  getUser(query) {
    this.reportService.getUser(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.users = res?.data;
      this.filteredusers = this.userControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }


  suppliers: any[] = [];
  getProduct() {
    this.reportService.getProducts().subscribe((res: any) => {
      console.log(res, 'user');
      this.suppliers = res;
      // this.variants=res;
    })
  }

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
  search() {
    if (this.titlee === "") {
      this.getCustomerWiseSale();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.customerWiseSaleList = this.customerWiseSaleList?.filter((res: any) => {
        const nameLower = res?.user?.party_name.toLocaleLowerCase();
        const usernameLower = res?.receipt_voucher_no.toLocaleLowerCase() || "";
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
    this.countryList.forEach((f: any) => f.isSelected = !initChecked)
   
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
  customerWiseSale: any
  getCustomerWiseSale() {
    this.reportService.getPendingSaleOrder(this.startDate, this.endDate, this.customerWiseSaleUserId, this.product_id, this.fyID, this.selectData).subscribe((res) => {
      console.log(res);
      this.customerWiseSale = res;
      this.customerWiseSaleList = res;
    })

  }

  // api call
  dataId: any;
  selectUser(data: any) {
    this.dataId = data;
    this.customerWiseSaleForm.patchValue({ user_id: this.dataId });
    console.warn(this.customerWiseSaleForm.value);
    this.customerWiseSaleUserId = this.customerWiseSaleForm.value?.user_id;
    this?.getCustomerWiseSale();
  }
  getProductoncheckAccount(data: any) {
    console.log(data);

    this.customerWiseSaleForm.patchValue({ product_id: data?.id });
    this.product_id = this.customerWiseSaleForm.value?.product_id;
    console.warn(this.customerWiseSaleForm.value);
    this?.getCustomerWiseSale();
  }
  getSelectedCustomerWiseSaleDates() {
    console.log(this.customerWiseSaleForm.value);
    const start = this.datepipe.transform(this.customerWiseSaleForm.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.customerWiseSaleForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getCustomerWiseSale();
  }

  // convert to pdf
  userName: any;


async  generatePDFAgain() {

    
    const doc  = new jsPDF('landscape');
    const result :any = this.coreService.profileData$.value;
    const img :any = await this.cs.loadImageReport();
    const printDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
   // Set up document
     doc.setFontSize(12);
     doc.setTextColor(33, 43, 54);
     doc.setFontSize(25);
    // Set up the centered permanent content
    const pageWidth = doc.internal.pageSize.width;
  const permanentContent = 'Pending Sale Order Report';
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  const textWidth = doc.getStringUnitWidth(permanentContent) * (doc as any).internal.getFontSize() / doc.internal.scaleFactor;
  const textX = (pageWidth - textWidth) / 2;
  doc.text(permanentContent, textX, 25);
  doc.addImage(img, "PNG", textX+15, 5, 31, 10);

  doc.setFontSize(12);
  doc.text(`Business Location: ${result?.branch}`, 14, 39);
  doc.text(`From Date: ${this.formatDate(this.customerWiseSaleForm.get('start').value)}`, 14, 45);
  doc.text(`User: ${result?.role}`, (pageWidth - textWidth), 33);
  doc.text(`Print Date: ${printDate}`, (pageWidth - textWidth), 39);
  doc.text(`To Date: ${this.formatDate(this.customerWiseSaleForm.get('end').value)}`, (pageWidth - textWidth), 45);
    // Pass tableData to autoTable
    // Pass tableData to autoTable
    const headers = ['#', 'Variant Name', 'Product', 'User', ' Order Qty', 'Order Price', 'Order Total', 'Pending Qty'];
    const data: any = [];

    let customerIndex = 1;
    this.customerWiseSaleList.forEach((list: any) => {
      console.warn(list);

      const variant = list.variant;
      const product = list.product;
      let isFirstInvoice = true;
      list.data.forEach((row: any, index: number) => {
        console.log(row);

        const invoiceNumber = isFirstInvoice ? customerIndex : '';
        data.push([
          invoiceNumber, // row no of each cstmr
          isFirstInvoice ? variant : '',
          isFirstInvoice ? product : '',
          row.user.party_name,
          row.order_qty,
          row.order_price,
          row.order_total,
          row.pending_qty
        ]);
        isFirstInvoice = false;
      });
      customerIndex++;
    });
    autoTable(doc, {
      head: [headers],
      body: data,
      theme: 'grid',
      startY: 49,
      margin:{top:49},
      headStyles: {
        fillColor: [255, 159, 67], // Header color
        textColor: [255, 255, 255] // Header text color
      }
    });
    doc.save('Pending_Sale_Order .pdf');
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
    const fileName = 'pendingsaleorder.xlsx';
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
      this.itemsPerPage = this.customerWiseSaleList?.length;
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
