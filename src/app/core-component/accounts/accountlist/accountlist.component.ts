import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

import { Router } from '@angular/router';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { employee } from 'src/app/interfaces/employee';
import { Account } from 'src/app/interfaces/account';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountlistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedAccountType: string = '';
  selectedAccountSubType: string = '';
  selectedAccountId: string = '';

  constructor(private coreService: CoreService, private QueryService: QueryService,
    private companyService: CompanyService) {
    this.QueryService.filterToggle()
  }

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
        this.coreService.deleteAccount(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Deleted successfully") {
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this account!",
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
        this.coreService.accountIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Account Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this account!",
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
        this.coreService.accountIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Account Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any
  ngOnInit(): void {
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: "Search...",
    //     info: "_START_ - _END_ of _TOTAL_ items",
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.wordset');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },
    // };
    // this.coreService.getAccount()
    // this.coreService.accountBehavior.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('accountList')!);
    // })

    this.coreService.getAccount().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })

    this.getAccountType()
    this.getAccountSubType()

    //from localstorage check permisison
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData) {
      const permission = localStorageData;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'account' && res.codename == 'add_account') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'account' && res.codename == 'change_account') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'account' && res.codename == 'delete_account') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }

  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res;
    })
  }
  subtype: any
  getAccountSubType() {
    this.coreService.getAccountSubType().subscribe(res => {
      console.log(res);
      this.subtype = res;
    })
  }
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }
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

  deleteId(id: number) {
    this.coreService.deleteEmployee(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Company Deleted successfully") {
        // this.getcompanyList()
      }
    })
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res.title);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       if(res.title.match(this.titlee)){
  //         return res.title.match(this.titlee);
  //       }else if(res.accounts_type.match(this.titlee)){
  //         return res.accounts_type.match(this.titlee);
  //       }
  //     })
  //     // this.tableData = this.tableData.filter(res => {
  //     //   console.log(res);
  //     //   console.log(res.title.toLocaleLowerCase());
  //     //   console.log(res.title.match(this.name));
  //     //   return res.title.match(this.name);
  //     // })
  //   }
  // }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase();
        const companyNameLower = res.accounts_type.toLocaleLowerCase();
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

  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectedAccountType) {
      console.log(this.selectedAccountType);
      filteredData = filteredData.filter((item) => item?.accounts_type === this.selectedAccountType);
    }
    if (this.selectedAccountSubType) {
      filteredData = filteredData.filter((item) => item?.account_subtype?.title === this.selectedAccountSubType);
    }
    

    if (this.selectedAccountId) {
      const searchTerm = this.selectedAccountId.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.account_id.toLowerCase();
        return aliasLower.includes(searchTerm);
      });
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.selectedAccountType = null;
    this.selectedAccountSubType = null;
    this.selectedAccountId = null;
    this.filterData();
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Account List';

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
          { header: 'Title' },
          { header: 'Accounts Type' },
          { header: 'Account Sub Type' },
          { header: 'Account Id' },
          { header: 'Opening Balance' },
          { header: 'Is Active' }
        ],
      })
    doc.save('account.pdf');

    //print complete data

    // const doc = new jsPDF();
    //   autoTable(doc, {
    //     // styles: { fillColor: [255, 0, 0] },
    //     theme: 'grid', 
    //     headStyles: {
    //       fillColor: [255, 159, 67] 
    //   },
    //     head: [['Sr No.', 'Title', 'GSTIN', 'Address', 'Is Active']], 
    //     body: this.tableData.map((product, index) => [
    //       index + 1,
    //       product.title,
    //       product.gstin,
    //       product.address,
    //       product.is_active ? 'Active' : 'Deactive'
    //     ]),
    //   });
    //   doc.save('table.pdf');
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
    const fileName = 'accounts.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }
  //print table
  // printTable(): void {
  //   const printContents = document.getElementById('mytable').outerHTML;
  //   const originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  // }

  printTable(): void {
    // Get the table element and its HTML content
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
  
    // Get the title element and its HTML content
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
  
    // Clone the table element to manipulate
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
  
    // Remove the "Is Active" column header from the cloned table
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(8)');
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
      const isActiveTd = row.querySelector('td:nth-child(8)');
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
  
}


