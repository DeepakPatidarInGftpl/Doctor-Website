import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { StockService } from 'src/app/Services/stockService/stock.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-transfer-list',
  templateUrl: './stock-transfer-list.component.html',
  styleUrls: ['./stock-transfer-list.component.scss']
})
export class StockTransferListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[];
  supplierType: string = '';
  selectedCompany: string = '';

  constructor(private stockService: StockService, private cs: CompanyService, private toastr: ToastrService) { }

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
        this.stockService.deleteStockTransfer(id).subscribe(res => {
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
      text: "Do you want to Deactivate this material outward!",
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
        this.stockService.StockTransferIsActive(id, '').subscribe(res => {
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
      text: "Do you want to Active this material outward!",
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
        this.stockService.StockTransferIsActive(id, '').subscribe(res => {
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
  ngOnInit(): void {
    this.stockService.getStockTransfer().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice();
      this.filterData();
    })

    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'inventory' && res.content_type.model === 'stocktransfer' && res.codename == 'add_stocktransfer') {
          this.isAdd = res.codename;
        } else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'stocktransfer' && res.codename == 'change_stocktransfer') {
          this.isEdit = res.codename;
        } else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'stocktransfer' && res.codename == 'delete_stocktransfer') {
          this.isDelete = res.codename;
        }
      });
    });

    this.getBranch();
  }

  fromBranch: any[]=[];
  filterfromBranch:any[]=[];
  toBranch: any[]=[];
  filtertoBranch:any[]=[];
  getBranch() {
    this.stockService.getBranch().subscribe((res:any) => {
      this.fromBranch=res;
      this.filterfromBranch = [...this.fromBranch];
      this.toBranch=res;
      this.filtertoBranch = [...this.toBranch];
    })
  }

  searchFromBranch: string = '';
  filterFromBranch() {
    if (this.searchFromBranch.trim() === '') {
      this.filterfromBranch = [...this.fromBranch];
    } else {
      this.filterfromBranch = this.fromBranch.filter(from =>
        from?.title.toLowerCase().includes(this.searchFromBranch.toLowerCase())
      );
    }
  }
  searchToBranch: string = '';
  filterToBranch() {
    if (this.searchToBranch.trim() === '') {
      this.filtertoBranch = [...this.toBranch];
    } else {
      this.filtertoBranch = this.toBranch.filter(from =>
        from?.title.toLowerCase().includes(this.searchToBranch.toLowerCase())
      );
    }
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
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.transfer_number.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } 
        return false;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  // convert to pdf
  generatePDF() {
    const doc = new jsPDF();
    const title = 'Stock Transfer List';
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
          { header: 'Transfer Number' },
          { header: 'Transfer Date' },
          { header: 'From Branch' },
          { header: 'To Branch' },
          { header: 'Total Qty' },
          { header: 'Total Product' },
          { header: 'Status' },
          { header: 'Is Active' }
        ],
      })
    doc.save('stockTransfer.pdf');
  }

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

  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'stockTransfer.xlsx';
    saveAs(blob, fileName);
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(10)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(10)');
      if (isActiveTd) {
        isActiveTd.remove();
      }
      const actionTd = row.querySelector('td:last-child');
      if (actionTd) {
        actionTd.remove();
      }
    });
    const modifiedTableHTML = clonedTable.outerHTML;
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
    const combinedContent = styledTitleHTML + modifiedTableHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }

  date: any
  espireDate: any;
  FromBranch: any;
  toBranchFilter: any;
  statusFilter:any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.date) {
      const selectedDate = new Date(this.date).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.transfer_date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.FromBranch) {
      filteredData = filteredData.filter((item) => item?.from_branch?.title === this.FromBranch);
    }
    if (this.toBranchFilter) {
      filteredData = filteredData.filter((item) => item?.to_branch?.title === this.toBranchFilter);
    }
    if (this.statusFilter) {
      filteredData = filteredData.filter((item) => item?.status === this.statusFilter);
    }
    this.filteredData = filteredData;
  }

  clearFilter() {
    this.date = null;
    this.FromBranch = null;
    this.toBranchFilter = null;
    this.statusFilter=null;
    this.filterData();
  }

  changeStatus(id: any) {
    this.stockService.stockTransferrecieved(id).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.toastr.success(res.msg);
        this.ngOnInit();
      } else {
        this.toastr.error(res.error);
      }
    })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}

