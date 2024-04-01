import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-company-drive',
  templateUrl: './company-drive.component.html',
  styleUrls: ['./company-drive.component.scss']
})
export class CompanyDriveComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  companyDriveForm!: FormGroup;
  get f() {
    return this.companyDriveForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  startDate: string = '';
  endDate: string = '';
  selectedBranch: string = ''
  navigateData: any
  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private profileService: CompanyService) {
    this.navigateData = this.router.getCurrentNavigation()?.extras?.state?.['id']
    if (this.navigateData) {
      this.editForm(this.navigateData)
    }
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
        this.coreService.deleteCompanyDrive(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
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
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Company Drive!",
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
        this.coreService.CompanyDriveIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deactivate!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          } else {

          }
        })
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this financial year!",
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
        this.coreService.CompanyDriveIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: this.delRes.msg,
        });
      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  ngOnInit(): void {
    this.companyDriveForm = this.fb.group({
      document_name: new FormControl('', [Validators.required]),
      attachment: new FormControl('',),
      remarks: new FormControl('', [Validators.required]),
    })

    this.coreService.getCompanyDrive().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res?.content_type.app_label === 'master' && res?.content_type.model === 'companydrive' && res?.codename == 'add_companydrive') {
          this.isAdd = res?.codename;
          // console.log(this.isAdd);
        } else if (res?.content_type.app_label === 'master' && res?.content_type.model === 'companydrive' && res?.codename == 'change_companydrive') {
          this.isEdit = res?.codename;
          // console.log(this.isEdit);
        } else if (res?.content_type.app_label === 'master' && res?.content_type.model === 'companydrive' && res?.codename == 'delete_companydrive') {
          this.isDelete = res?.codename;
          // console.log(this.isDelete); 
        }
      });
    });
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

  url: any;
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result as string;
    }
    this.companyDriveForm.patchValue({
      attachment: file
    })
    this.companyDriveForm.get('attachment')?.updateValueAndValidity();
  }

  addRes: any
  loaders = false;
  submit() {
    if (this.companyDriveForm.valid) {
      this.loaders = true;
      let formData= new FormData();
      formData.append('attachment', this.companyDriveForm.get('attachment')?.value);
      formData.append('document_name', this.companyDriveForm.get('document_name')?.value);
      formData.append('remarks', this.companyDriveForm.get('remarks')?.value);

      this.coreService.addCompanyDrive(formData).subscribe(res => {
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.companyDriveForm.reset();
          this.ngOnInit();
          this.url='';
        }
      }, err => {
        this.toastr.error(err.message);
      })
    } else {
      this.companyDriveForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields');
    }
  }

  update() {
    if (this.companyDriveForm.valid) {
      this.loaders = true;
      let formData= new FormData();
      formData.append('attachment', this.companyDriveForm.get('attachment')?.value);
      formData.append('document_name', this.companyDriveForm.get('document_name')?.value);
      formData.append('remarks', this.companyDriveForm.get('remarks')?.value);

      this.coreService.updateCompanyDrive(formData, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg);
          this.companyDriveForm.reset();
          this.addForm = true
          // window.location.reload()
          this.ngOnInit();
          this.url='';
        }
      }, err => {
        this.toastr.error(err.message);
      })
    } else {
      this.companyDriveForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  get document_name() {
    return this.companyDriveForm.get('document_name')
  }
  get remarks() {
    return this.companyDriveForm.get('remarks')
  }

  addForm = true
  id: any
  editFormdata: any;
  updateData: any;
  editForm(id: number) {
    this.id = id
    this.coreService.getCompanyDriveById(id).subscribe((res:any) => {
      
      // res.map((data: any) => {
        // console.log(data);
        this.updateData = res
          if (id == this.updateData.id) {
            console.log(this.updateData);
            
            this.addForm = false
            this.companyDriveForm.patchValue({
              document_name: this.updateData.document_name,
              remarks: this.updateData.remarks
            });
            this.editFormdata = res
          }
       
    },err=>{
      this.toastr.error(err.message);
    })
  }
  openaddForm() {
    this.addForm = true;
    this.companyDriveForm.reset();
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res.document_name.toString().toLocaleLowerCase();
        return nameLower.includes(searchTerm);
      });
    }
  }
  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate).getTime();
      const endDate = new Date(this.endDate).getTime();
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item.document_name).getTime();
        return receiptDate >= startDate && receiptDate <= endDate;
      });
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.startDate = null;
    this.endDate = null
    this.filterData();
  }
  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Company Drive';

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
          { header: 'Attechment' },
          { header: 'Document Name' },
          { header: 'Remarks' },
          { header: 'Is Active' }
        ],
      })
    doc.save('companyDrive.pdf');

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
    const fileName = 'companyDrive.xlsx';
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}

