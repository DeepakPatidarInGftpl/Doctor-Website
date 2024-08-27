import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';

@Component({
  selector: 'app-sales-return-list',
  templateUrl: './sales-return-list.component.html',
  styleUrls: ['./sales-return-list.component.scss']
})
export class SalesReturnListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  supplierType: string = '';
  selectedCompany: string = '';
  dueDateForm!: FormGroup;
  saleReturnDateForm!: FormGroup;
  minDate: Date;
  maxDate: Date;
  financialYear!: string;

  constructor(private saleService: SalesService, private cs: CompanyService,private datePipe:DatePipe, private dashboardservice : DashboardService, private commonService: CommonServiceService) { }

  delRes: any
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
        this.saleService.deleteSaleReturn(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
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
      text: "Do you want to Deactivate this sale return!",
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
        this.saleService.SalesMaterialOutwardIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deactivate!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }
        })

      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this sale return!",
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
        this.saleService.SaleReturnIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Active!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }
        })

      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  isAdmin = false;

  ngOnInit(): void {
    // this.saleService.getSaleReturn().subscribe(res => {
    //   this.tableData = res;
    //   this.loader = false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
    //   this.filterData();
    // })
   //18-5
   if (localStorage.getItem('financialYear')) {
    let fy = localStorage.getItem('financialYear');
    console.warn(JSON.parse(fy));
    let fyId = JSON.parse(fy);
    this.getSaleReturnFy(fyId);
  }
  this.cs.userDetails$.subscribe((res: any) => {
    if (res.role == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  });

  this.financialYear = localStorage.getItem('financialYear');
    const { minDate, maxDate } = this.commonService.determineMinMaxDates(this.financialYear);
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.dueDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.saleReturnDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.commonService.validateAndClearDates(this.dueDateForm, this.minDate, this.maxDate);
    this.commonService.validateAndClearDates(this.saleReturnDateForm, this.minDate, this.maxDate);
//18-5
    //permission from profile api
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'sale' && res.content_type.model === 'salereturn' && res.codename == 'add_salereturn') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salereturn' && res.codename == 'change_salereturn') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salereturn' && res.codename == 'delete_salereturn') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
    this.getSellBill();
    this.getBranch();

  }

  //18-5
  getSaleReturnFy(fy:any){
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    console.log(idString?.length);
    this.saleService.getSaleReturnfy(fy,this.selectData).subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
  }
  //18-5 end
  saleBillList: any;
  getSellBill() {
    this.saleService.getSalesBill().subscribe(res => {
      this.saleBillList = res;
    })
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }

  search() {
    const searchTerm = this.titlee.toLocaleLowerCase();
    if (!searchTerm) {
      this.filteredData = this.tableData;
    } else {
      this.filteredData = this.tableData.filter(res => {
        const nameLower = res?.customer?.name.toLocaleLowerCase();
        const status = res?.status?.toLocaleLowerCase();
        const usernameLower = res?.customer?.username.toLocaleLowerCase() || "";
        const companyNameLower = res?.sale_return_bill_no.toLocaleLowerCase();
        return nameLower.includes(searchTerm) || 
                   usernameLower.includes(searchTerm) || 
                   status.includes(searchTerm) || 
                   companyNameLower.includes(searchTerm);
      });
    }
  }

  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Sales Return List';
    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    autoTable(doc,
      {
        html: '#mytable',
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        columns: [
          { header: 'Sr No.' },
          { header: 'User Name ' },
          { header: 'Bill Date' },
          { header: 'Bill No.' },
          { header: 'Sales Bill' },
          { header: 'Sub Total' },
          { header: 'Total' },
          { header: 'Status' },
          { header: 'Is Active' }
        ],
      })
    doc.save('salesReturn.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Sales Return List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15); 
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#','User Name','Bill Date', 'Bill No.','Sales Bill','Sub Total','Total','Status']
      ],
      body: this.tableData.map((row:any, index:number ) => [
    
        index + 1,
        row?.customer?.name + ' (' + row?.customer?.username + ')',
       this.formatDate( row?.bill_date),
        row.sale_return_bill_no,
        row.sale_bill?.customer_bill_no,
        row.subtotal,
        row.total,
    row.status,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15, 
    });
    doc.save('Sales Return .pdf');
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

    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
    return visibleData;
  }
  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'saleReturn.xlsx';
    saveAs(blob, fileName);
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const titleElement = document.querySelector('.titl'); 
    if (!tableElement) {
        console.error('Table not found');
        return;
    }
  
    if (!titleElement) {
      console.error('Title not found');
      return;
  }
  
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(1)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
    const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
  
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        const isActiveTd = row.querySelector('td:nth-child(1)');
        if (isActiveTd) {
          isActiveTd.remove();
        }
        const actionTd = row.querySelector('td:last-child');
        if (actionTd) {
          actionTd.remove();
        }
      });
  
    const printContainer = document.createElement('div');
    clonedTitle.classList.add('spaced-title');
    printContainer.appendChild(clonedTitle);
    printContainer.appendChild(clonedTable);
  
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
            .spaced-title {
                margin-top: 60px;
                margin-bottom: 20px;
            }
        }
    `;
    document.head.appendChild(style);
  
    printContainer.id = 'printContainer';
    document.body.appendChild(printContainer);
  
    window.print();
  
    window.addEventListener('afterprint', () => {
      this.clearData();
    });

    setTimeout(() => {
      this.clearData();
    }, 2000);
  }

  clearData() {
    const printContainer = document.getElementById('printContainer');
    const style = document.getElementById('printStyle');
    if (printContainer) {
      document.body.removeChild(printContainer);
    }
    if (style) {
      document.head.removeChild(style);
    }
  }
  // filter data
  date: any
  espireDate: any;
  selectSellBillNo: any;
  selectedAmount: any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.dueDateForm.get('start').value && this.dueDateForm.get('end').value) {
      const startDate = new Date(this.dueDateForm.get('start').value);
      const endDate = new Date(this.dueDateForm.get('end').value);
      filteredData = filteredData.filter((item) => {
        const supplierBillDate = new Date(item?.return_date);
        return supplierBillDate >= startDate && supplierBillDate <= endDate;
      });
    }

    if (this.saleReturnDateForm.get('start').value && this.saleReturnDateForm.get('end').value) {
      const startDate = new Date(this.saleReturnDateForm.get('start').value);
      const endDate = new Date(this.saleReturnDateForm.get('end').value);
      filteredData = filteredData.filter((item) => {
        const supplierBillDate = new Date(item?.bill_date);
        return supplierBillDate >= startDate && supplierBillDate <= endDate;
      });
    }

    if (this.selectSellBillNo) {
      filteredData = filteredData.filter((item) => item?.sale_bill?.customer_bill_no === this.selectSellBillNo);
    }
    if (this.selectedAmount) {
      filteredData = filteredData.filter((item) => item?.total <= this.selectedAmount);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.date = null;
    this.selectedAmount = null;
    this.selectSellBillNo = null;
    this.saleReturnDateForm.reset();
    this.dueDateForm.reset();
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
  //18-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.dashboardservice.getBranch().subscribe((res: any) => {
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
}





