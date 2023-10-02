import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-sale-bill-list',
  templateUrl: './sale-bill-list.component.html',
  styleUrls: ['./sale-bill-list.component.scss']
})
export class SaleBillListComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  filteredData: any[]; // The filtered data
  supplierType: string = '';
  selectedCompany: string = '';

  constructor(private saleService: SalesService, private cs:CompanyService) {}

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
        this.saleService.deleteSalesBill(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
           this.ngOnInit();
           Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: this.delRes.msg,
          });
          this.tableData.splice(index, 1);
          }else {
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
      text: "Do you want to Deactivate this sale bill!",
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
        this.saleService.SalesBillIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Sale Bill Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this sale bill!",
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
        this.saleService.SalesBillIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Sale Bill Is Active Successfully.',
        });
      }
    });
  }
loader=true;
isAdd:any;
isEdit:any;
isDelete:any;
userDetails:any;
  ngOnInit(): void {
    this.saleService.getSalesBill().subscribe(res => {
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })

    //permission from profile api
  
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'sale'  && res.content_type.model === 'salebill' && res.codename=='add_salebill') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salebill' && res.codename=='change_salebill') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salebill' && res.codename=='delete_salebill') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
    });
  })
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

select=false
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
        const nameLower = res?.customer?.name.toLocaleLowerCase();
        const companyNameLower = res?.customer_bill_no.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (companyNameLower.match(searchTerm)) {
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
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Sale Bill List';

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
          { header: 'Company Name' },
          { header: 'Sale Bill Date' },
          { header: 'Due Date' },
          { header: 'customer bill no' },
          { header: 'Payment Terms' },
          { header: 'Sale Order' },
          { header: 'Sub Total' },
          { header: 'Total' },
          { header: 'Is Active' }
        ],
      })
    doc.save('saleBill.pdf');
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
    const fileName = 'saleBill.xlsx';
    saveAs(blob, fileName); 
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;

    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(11)');
    if (isActiveTh) {
      isActiveTh.remove();
    }

    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(11)');
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

  // filter data
  date: any
  espireDate:any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.date) {
      const selectedDate = new Date(this.date).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.bill_date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.espireDate) {
      const selectedDate = new Date(this.espireDate).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.due_date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.date = null;
    this.espireDate = null;
    this.filterData();
  }
}

