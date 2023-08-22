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
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.scss']
})
export class FinancialYearComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  FinancialYearForm!: FormGroup;
  get f() {
    return this.FinancialYearForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  filteredData: any[]; // The filtered data
  startDate: string = '';
  endDate: string = '';
  selectedBranch:string=''

  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private profileService:CompanyService) {
   
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
        this.coreService.deleteFinancialYear(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          }else{
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
     text: "Do you want to Deactivate this financial year!",
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
       this.coreService.financialYearIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FinancialYear Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Financial Year Is Deactivate Successfully.',
       });
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
       this.coreService.financialYearIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FinancialYear Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'FinancialYear Is Active Successfully.',
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
    this.FinancialYearForm = this.fb.group({
      start_year: new FormControl('', [Validators.required]),
      close_year: new FormControl('', [Validators.required]),   
    })
   
    this.coreService.getFinancialYear().subscribe(res=>{
      this.loader=false;
      this.tableData=res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })

    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'website' && res.content_type.model === 'financialyear' && res.codename=='add_financialyear') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'website' && res.content_type.model === 'financialyear' && res.codename=='change_financialyear') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if(res.content_type.app_label === 'website' && res.content_type.model === 'financialyear' && res.codename=='delete_financialyear'){
    //       this.isDelete=res.codename;
    //       console.log(this.isDelete); 
    //     }
    //   });
    // }

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res?.content_type.app_label === 'website' && res?.content_type.model === 'financialyear' && res?.codename=='add_financialyear') {
          this.isAdd = res?.codename;
          // console.log(this.isAdd);
        } else if (res?.content_type.app_label === 'website' && res?.content_type.model === 'financialyear' && res?.codename=='change_financialyear') {
          this.isEdit = res?.codename;
          // console.log(this.isEdit);
        } else if(res?.content_type.app_label === 'website' && res?.content_type.model === 'financialyear' && res?.codename=='delete_financialyear'){
          this.isDelete=res?.codename;
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
    this.coreService.deletesize(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Deleted successfully") {
        window.location.reload()
      }
    })
  }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // console.log(file);
    this.FinancialYearForm.patchValue({
      image: file
    })
    this.FinancialYearForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders=false;
 submit() {
  // console.log(this.FinancialYearForm.value);
  // console.log(this.id);

  if (this.FinancialYearForm.valid) {
    this.loaders=true;
    this.coreService.addFinancialYear(this.FinancialYearForm.value).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.FinancialYearForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
  } else {
    this.FinancialYearForm.markAllAsTouched()
    // console.log('forms invalid');
  }
}

update(){
  if (this.FinancialYearForm.valid) {
    this.loaders=true;
    this.coreService.updateFinancialYear(this.FinancialYearForm.value, this.id).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Finincial Year Updated Sucessfully") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.FinancialYearForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
  } else {
    this.FinancialYearForm.markAllAsTouched()
    // console.log('forms invalid');
  }
}

  get start_year() {
    return this.FinancialYearForm.get('start_year')
  }
  get close_year() {
    return this.FinancialYearForm.get('close_year')
  }
 
  addForm = true
  id: any
  editFormdata: any;
  resData:any;
  editForm(id: number) {
    this.id = id
    this.coreService.getFinancialYearById(id).subscribe(res => {
      this.resData=res
      this.resData.map((data: any) => {
        // console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.FinancialYearForm.patchValue({
            start_year:data.start_year,
            close_year:data.close_year
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.FinancialYearForm.reset();
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
        // console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.start_year.match(this.titlee));
  //       return res.start_year.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res.start_year.toString().toLocaleLowerCase(); 
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


   // filter data
   filterData() {
    let filteredData = this.tableData.slice();
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate).getTime();
      const endDate = new Date(this.endDate).getTime();
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item.start_year).getTime();
        return receiptDate >= startDate && receiptDate <= endDate;
      });
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.startDate = null;
    this.endDate=null
    this.filterData();
  }
  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Financial Year';

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
          { header: ' Start Year' },
          { header: 'Close Year' },
          { header: 'Is Active' }
        ],
      })
    doc.save('financialYear.pdf');

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
    const fileName = 'financialYear.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(5)');
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
      const isActiveTd = row.querySelector('td:nth-child(5)');
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

