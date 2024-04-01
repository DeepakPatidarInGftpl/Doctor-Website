import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})
export class CreditNoteComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedpaymentTerms: string = '';
  date: any

  constructor( private transactionService: TransactionService,private cs: CompanyService,) { }

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
        this.transactionService.deleteCreditNote(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.filteredData.splice(index, 1);
            this.ngOnInit();
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
      text: "Do you want to Deactivate this Credit Note!",
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
        this.transactionService.CreditNoteIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deactivate!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not-Deactivate!',
              text: this.delRes.error,
            });
          }
        })
      
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Credit Note!",
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
        this.transactionService.CreditNoteIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Active!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not-Active!',
              text: this.delRes.error,
            });
          }
          
        })
      
      }
    });
  }

  loader = true;
  isAdd: any
  isEdit: any;
  isDelete: any;
  userDetails: any;
  ngOnInit(): void {
    this.transactionService.getCreditNote().subscribe(res => {
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
        if (res.content_type.app_label === 'transactions' && res.content_type.model === 'creditnote' && res.codename == 'add_creditnote') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'creditnote' && res.codename == 'change_creditnote') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'creditnote' && res.codename == 'delete_creditnote') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
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
        const nameLower = res?.account?.account_id.toLocaleLowerCase();
        const companyNameLower = res?.credit_note_no.toLocaleLowerCase();
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
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Credit Note';
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
          { header: 'Company Name ' },
          { header: 'Credit Note Date' },
          { header: 'Credit Note No' },
          { header: 'Sale Bill' },
          { header: 'Reason' },
          { header: 'Round off' },
          { header: 'Tax' },
          { header: 'Total' },
          { header: 'Status' },
          { header: 'Is Active' }
        ],
      })
    doc.save('creditNote.pdf');
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
  // Modify your exportToExcel() function
  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // Create a Blob from the workbook and initiate a download
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'creditNote.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }

  printTable(): void {
    // Get the table element and its HTML content
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(12)');
    if (isActiveTh) {
      isActiveTh.remove();
    }

    // Remove the "Action" column header from the cloned table
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }

    // Loop through each row and remove the "Is Active" column and "Action" column data cells
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      // Remove the "Is Active" column data cell
      const isActiveTd = row.querySelector('td:nth-child(12)');
      if (isActiveTd) {
        isActiveTd.remove();
      }

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
    // Replace the content of the body with the combined content
    document.body.innerHTML = combinedContent;
    window.print();
    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }
  selectedAmount:any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.date) {
      const selectedDate = new Date(this.date).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.selectedAmount) {
      filteredData = filteredData.filter((item) => item?.total <= this.selectedAmount);
    }
    this.filteredData = filteredData;
  }
  clearFilters() {
    this.selectedAmount = null;
    this.date = null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}