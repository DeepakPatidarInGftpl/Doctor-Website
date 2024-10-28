import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { DatePipe } from '@angular/common';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';

@Component({
  selector: 'app-pos-order',
  templateUrl: './pos-order.component.html',
  styleUrls: ['./pos-order.component.scss']
})
export class PosOrderComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  //filter
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  totalRecords: number = 0;
  pages: number[] = [];
  posOrders: any = [];
  posOrderData: any = [];
  data: any;
  page: number = 1;

  filteredData: any[]; // The filtered data
  selectedAccountType: string = '';
  selectedAccountSubType: string = '';
  selectedAccountId: string = '';
  ProductSerchas : FormControl = new FormControl('');
  variantList: any[] = [];
  constructor(private commonService: CommonServiceService,private saleService : SalesService,private datePipe : DatePipe ,private coreService: CoreService, private QueryService: QueryService, private cs: CompanyService, private cartService: PosCartService) {
    this.QueryService.filterToggle()
  }

  delRes: any;

  confirmText(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.deletePosOrder(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.posOrders.splice(index, 1);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
      }
    });
  }

 

  // active deactive
  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this pos!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.PosOrderIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'POS Order Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this pos Order!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.PosOrderIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'POS Order Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  //24-5
  isAdmin = false;
  fyID: any;
  searchLength:number =0;
  saleBillDateForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  //
  ngOnInit(): void {
    //24-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID = fyId;
    }
    this.cs.userDetails$.subscribe((res: any) => {
      this.isAdmin = (res?.role == 'admin')
    });
    // this.coreService.getPosOrder(this.fyID, this.selectData).subscribe(res => {
    //   // console.log(res);
    //   this.tableData = res;
    //   this.loader = false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
    //   this.filterData();
    // });
    const { minDate, maxDate } = this.commonService.determineMinMaxDates(this.fyID);
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.saleBillDateForm = new FormGroup({
      start : new FormControl(),
      end : new FormControl(),
      
    });

    this.commonService.validateAndClearDates(this.saleBillDateForm, this.minDate, this.maxDate);

    this.cartService.getPOSOrders(this.page, this.pageSize).subscribe({
      next: (response: any) => {
        // console.log(response, 'pos orders')
        this.posOrders = response?.data;
        this.selectedRows = new Array(this.posOrders.length).fill(false);
        console.log(this.posOrders);
        this.posOrderData = response?.data;
        this.clone_data =response?.data;
        this.loader = false;
        this.totalRecords = response?.total_data;
        this.data = Math.min(this.itemsPerPage * this.page, this.totalRecords);
        this.updatePageNumbers();
      },
      error: (error) => {
        // console.log('pos orders', error);
      }
    })

    this.getBranch();
    this.ProductSerchas.valueChanges.subscribe({
      next : (value : string) => {
        this.searchLength = value.length
        if (value.length >= 3) {
          this.getProduct(value)
        }
       
      },
    })
  
  
    
    //24-5
  }




  getProduct(val:string){
    this.saleService.filterVariant('','',val).subscribe({
      next : (value) =>{
        this.variantList = value
      },
    })
  }
  variantChanged(val:any){
    let id = val.id;
    let s = this.datePipe.transform( this.saleBillDateForm.value.start,'YYYY-MM-dd');
    let e = this.datePipe.transform(this.saleBillDateForm.value.end,'YYYY-MM-dd');
    let obj = {s,e}
    if (s && e) {
    this.cartService.getPOSOrders(this.page, this.pageSize,id,obj)
     .subscribe({
        next : (result :any)=> {
          this.posOrders = result.data
          this.clone_data = result.data
          
        },
      })
}

// console.log(val)
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
  selectAll(initChecked: boolean) {
    this.posOrders.forEach((f: any) => {
      f.isSelected = !initChecked;
    });
  }


 


  clone_data:any[] = []
  search(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    
    this.posOrders = this.clone_data.filter((res :any) => {
      const nameLower = res?.customer?.name?.toLocaleLowerCase();
      const bill = res?.products?.bill_no.toLocaleLowerCase();

      return nameLower?.includes(searchTerm) || bill?.includes(searchTerm);
    });
  }


  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'POS Order';
    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    // autoTable(doc, { html: '#mytable' }); // here all table field downloaded
    autoTable(doc,

      {
        html: '#mytable',
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        columns: [
          //remove action filed
          { header: 'Sr No.' },
          { header: 'User Id' },
          { header: 'Customer' },
          { header: 'Payment Mode' },
          { header: 'Due Amount' },
          { header: 'GST' },
          { header: 'SCFST' },
          { header: 'Supply GST' },
          { header: 'Supply State' },
          { header: 'Total Tax ' },
          { header: 'Total Amount' },
          { header: 'Is Active' }
        ],
      })
    doc.save('posOrder.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Pos Order';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Invoice No', 'Customer', 'Payment Mode', 'Due Amount', 'GST', 'SCFST', 'Supply GST', 'Supply State', 'Total Tax ', 'Total Amount']
      ],
      body: this.posOrders?.map((row: any, index: number) => [

        index + 1,
        row?.id,
        row?.customer.name,
        row?.payment_mode,
        row?.due_amount,
        row?.get_gst,
        row?.get_scgst,
        row?.place_of_supply_gst_code,
        row?.place_of_supply_state,
        row?.total_tax,
        row?.total_amount

      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Pos Order .pdf');
  }
  // excel export only filtered data
  getVisibleDataFromTable(): any[] {
    const visibleData = [];
    const table = document.getElementById('mytable');
    const headerRow = table.querySelector('thead tr');
    const dataRows = table.querySelectorAll('tbody tr');
    //table heading
    const headerData = [];
    headerRow.querySelectorAll('th').forEach(cell => {
      const columnHeader = cell.textContent.trim();
      if (columnHeader !== 'Is Active' && columnHeader !== 'Action') {
        headerData.push(columnHeader);
      }
    });
    visibleData.push(headerData);

    // Include visible data rows
    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
    return visibleData;
  }

  fetchOrderData(page: number, pageSize: number): void {
    this.cartService.getPOSOrders(page, pageSize).subscribe((response: any) => {
      this.posOrders = response.data;
      this.posOrderData = response?.data;
      this.totalRecords = response.total_data;
      this.data = Math.min(this.itemsPerPage * this.page, this.totalRecords);
    });
  }

  pageChange(newPage: number): void {
    this.page = newPage;
    this.fetchOrderData(this.page, this.pageSize);
    this.titlee = "";
    this.selectedAccountType = "";
  }

  updatePageNumbers(): void {
    const totalPages = Math.ceil(this.totalRecords / this.pageSize);
    this.pages = Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  getPageNumbers(): (number | string)[] {
    const totalPages = Math.ceil(this.totalRecords / this.pageSize);
    const pageNumbers: (number | string)[] = [];
    const delta = 3;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || (i >= this.page - delta && i <= this.page + delta)) {
        pageNumbers.push(i);
      } else if (i === this.page - delta - 1 || i === this.page + delta + 1) {
        pageNumbers.push('...');
      }
    }

    return pageNumbers.filter((value, index, self) => self.indexOf(value) === index);
  }

  getTotalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
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
    const fileName = 'posOrder.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }

  printTable(): void {
    // Get the table element and its HTML content
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;

    // Get the title element and its HTML content
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;

    // Clone the table element to manipulate
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;


    // Remove the "Action" column header from the cloned table
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }

    // Loop through each row and remove the "Is Active" column and "Action" column data cells
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {


      // Remove the "Action" column data cell
      const actionTd = row.querySelector('td:last-child');
      if (actionTd) {
        actionTd.remove();
      }
    });

    // Get the modified table's HTML content
    const modifiedTableHTML = clonedTable.outerHTML;
    // Apply styles to add some space from the top after the title
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
    // Combine the title and table content
    const combinedContent = styledTitleHTML + modifiedTableHTML;
    // Store the original contents
    const originalContents = document.body.innerHTML;
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
      window.location.reload();
    });
    // Replace the content of the body with the combined content
    document.body.innerHTML = combinedContent;
    window.print();
    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }

  // filter data
  filterData() {
    this.posOrders = this.posOrderData;
    let filteredData = this.posOrders.slice();
    if (this.selectedAccountType) {
      filteredData = this.posOrderData;
      filteredData = filteredData.filter((item) => item?.payment_mode === this.selectedAccountType);
    }
    this.posOrders = filteredData;
  }
  clearFilter() {
    this.selectedAccountType = "";
    this.filterData();
  }

  changePg(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    if (itemsPerPage === -1) {
      this.pageSize = this.totalRecords;
    } else {
      this.pageSize = itemsPerPage;
    }
    this.page = 1;
    this.fetchOrderData(this.page, this.pageSize);
  }

  //24-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.coreService.getBranch().subscribe((res: any) => {
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
  //24-5
  ngOnDestroy(): void {
    this.saleBillDateForm.removeControl('')
  }
}