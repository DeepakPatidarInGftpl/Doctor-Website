import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-account-sub-type',
  templateUrl: './account-sub-type.component.html',
  styleUrls: ['./account-sub-type.component.scss']
})
export class AccountSubTypeComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  accountSubTypeForm!: FormGroup;
  get f() {
    return this.accountSubTypeForm.controls;
  }

  //filter
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedAccountType: string = '';
  selectedAlias: any;
  //filter

  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,
    private CS: CompanyService,) {
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
        this.coreService.deleteAccountSubType(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })

        // this.tableData.splice(index, 1);
      }
    });
  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Account Subtype!",
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
        this.coreService.AccountSubTypeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Account Subtype Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Account Subtype!",
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
        this.coreService.AccountSubTypeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Account Subtype Is Active Successfully.',
        });
      }
    });
  }
  form!: FormGroup;
  loader = true
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      img: new FormControl('')
    })

    this.accountSubTypeForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('',),
      alias: new FormControl('',),
    })

    this.coreService.getAccountSubType().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
    this.getAccountType();

    // from localstorag permission
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master'  && res.content_type.model === 'accountsubtypes' && res.codename=='add_accountsubtypes') {
    //       this.isAdd = res.codename;
          // console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename=='change_accountsubtypes') {
    //       this.isEdit = res.codename;
          // console.log(this.isEdit);  
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename=='delete_accountsubtypes') {
    //       this.isDelete = res.codename;
          // console.log(this.isDelete);  
    //     }
    //   });
    // }
    //from profile api permission 
    this.CS.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename == 'add_accountsubtypes') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename == 'change_accountsubtypes') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename == 'delete_accountsubtypes') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      // console.log(res);
      this.accountType = res;
    })
  }
  // add() {
  //   console.log('jj');
  //   console.log(this.form.value);
  // }
  //select table row
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

  addRes: any

  loaders = false;
  submit() {
    // console.log(this.accountSubTypeForm.value);
    // console.log(this.id);
    if (this.accountSubTypeForm.valid) {
      this.loaders = true;
      this.coreService.addAccountSubType(this.accountSubTypeForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.msg == "ACCOUNT SUBTYPE CREATED SUCESSFULLY") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.accountSubTypeForm.reset()
          // window.location.reload();
          this.ngOnInit()
        } else {
          this.loader = false
        }
      }, err => {
        this.loader = false
        // console.log(err.error.gst);
      })
    } else {
      this.accountSubTypeForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  update() {
    if (this.accountSubTypeForm.valid) {
      let formdata = new FormData();
      formdata.append('title', this.accountSubTypeForm.get('title')?.value)
      this.loaders = true;
      this.coreService.updateAccountSubType(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Account Subtype Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.accountSubTypeForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        } else {
          this.loader = false
        }
      }, err => {
        this.loaders = false;
        // console.log(err.error.gst);
      })
    } else {
      this.accountSubTypeForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  get title() {
    return this.accountSubTypeForm.get('title')
  }
  get accounts_type() {
    return this.accountSubTypeForm.get('accounts_type')
  }
  get alias() {
    return this.accountSubTypeForm.get('alias')
  }
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getAccountSubTypeById(id).subscribe(res => {
      // console.log(res);
      if (id == res.id) {
        this.addForm = false;
        this.accountSubTypeForm.patchValue(res);
        this.accountSubTypeForm.get('accounts_type')?.patchValue(res.accounts_type)
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.accountSubTypeForm.reset();
  }
  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
        // console.log(res);
        // console.log(res.title.toLocaleLowerCase());
        // console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase();
        return nameLower.includes(searchTerm);
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
    const title = 'Account Sub Type List';

    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    // autoTable(doc, { html: '#mytable' }); // here all table field downloaded
    autoTable(doc, {
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
      ],
    });

    const fileName = 'accountSubType.pdf'; // Change the filename as needed
    doc.save(fileName);
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
    const fileName = 'accountSubType.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }
  //print table
  //   printTable(): void {
  //     const printContents = document.getElementById('mytable').outerHTML;
  //     const originalContents = document.body.innerHTML;
  //     document.body.innerHTML = printContents;
  //     window.print();
  //     document.body.innerHTML = originalContents;
  //   }

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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(6)');
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
      const isActiveTd = row.querySelector('td:nth-child(6)');
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


  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectedAccountType) {
      // console.log(this.selectedAccountType);
      filteredData = filteredData.filter((item) => item?.accounts_type === this.selectedAccountType);
    } if (this.selectedAlias) {
      const searchTerm = this.selectedAlias.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.alias.toLowerCase();
        return aliasLower.includes(searchTerm);
      });
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.selectedAccountType = null;
    this.selectedAlias = null;
    this.filterData();
  }
}
