import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Account } from 'src/app/interfaces/account';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-company-bank',
  templateUrl: './company-bank.component.html',
  styleUrls: ['./company-bank.component.scss']
})
export class CompanyBankComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account;
  filteredData: any;

  titlee: any;
  name:any
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  selectedBankName: any = '';
  selectedIsActive: any = '';
  // selectedAccoutType: any;
  constructor(private coreService: CoreService, private QueryService: QueryService,private cs:CompanyService) {
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
        this.coreService.deleteCompanyBank(id).subscribe(res => {
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
  select=false
   // active deactive
   deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this company bank!",
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
        this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Company Bank Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Company Bank!",
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
        this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Company Bank Is activate Successfully.',
        });
      }
    });
  }
  loader=true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  ngOnInit(): void {
    this.coreService.getCompanyBank().subscribe(res=>{
      this.tableData=res;
      this.filteredData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    // permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'add_companybank') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'change_companybank') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'delete_companybank') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

      // permission from profile api
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission?.map((res: any) => {
          if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'add_companybank') {
            this.isAdd = res.codename;
            // console.log(this.isAdd);
          } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'change_companybank') {
            this.isEdit = res.codename;
            // console.log(this.isEdit);
          }else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'delete_companybank') {
            this.isDelete = res.codename;
            // console.log(this.isDelete);
          }
        });
      });
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
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

  filterData() {
    this.tableData = this.filteredData;
    let filteredData = this.tableData.slice();
    if (this.selectedBankName) {
      filteredData = filteredData.filter(
        (item) => item?.name?.toLowerCase().includes(this.selectedBankName?.toLowerCase())
      );
    }
    // if (this.selectedAccoutType) {
    //   filteredData = filteredData.filter(
    //     (item) => item?.mode_type === this.selectedAccoutType
    //   );
    // }
    if(this.selectedIsActive) {
      let isActive = this.selectedIsActive === 'Active' ? true : false;
      filteredData = filteredData.filter(
        (item) => item?.is_active === isActive
      );
    }

    this.tableData = filteredData;
  }

  clearFilter() {
    this.selectedBankName = '';
    // this.selectedAccoutType = '';
    this.selectedIsActive = '';
    this.filterData();
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
      this.tableData = this.filteredData.filter(res => {
        const nameLower = res?.name?.toLocaleLowerCase();
        const companyNameLower = res?.account_holder_name.toLocaleLowerCase();
        const accountNo = res?.account_number.toLocaleLowerCase()
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (companyNameLower.includes(searchTerm) || accountNo.includes(searchTerm)) {
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
    const title = 'Company Bank';
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
          { header: 'Name' },
          { header: 'Accounts Holder Name' },
          { header: 'Account Number' },
          { header: 'Branch' },
          { header: 'Credit Balance' },
          { header: 'Debit Balance' },
          { header: 'Is Active' }
        ],
      })
    doc.save('companyBank.pdf');
 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Company Bank';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Name','Accounts Holder Name', 'Account Number','Branch','Credit Balance,Debit Balance']
    ],
    body: this.tableData.map((row:any, index:number ) => [
  
      index + 1,
      row.products?.name ,
      row.account_holder_name,
     row.account_number,
      row.branch_name,
     row.credit_balance,
      row.debit_balance,


    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Company Bank .pdf');
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
    const fileName = 'companyBank.xlsx';
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

    // Remove the "Is Active" column header from the cloned table
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(9)');
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
      const isActiveTd = row.querySelector('td:nth-child(9)');
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}
