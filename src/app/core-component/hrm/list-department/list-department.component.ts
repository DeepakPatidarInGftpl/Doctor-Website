import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})
export class ListDepartmentComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  departmentForm!: FormGroup;
  get f() {
    return this.departmentForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  navigateData:any
  constructor(private hrmService: HrmServiceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService,
    private cs :CompanyService) {
      this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.['id']
      if (this.navigateData){
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
        this.hrmService.deleteDepartment(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Department!",
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
        this.hrmService.departmentIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Department Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Department!",
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
        this.hrmService.departmentIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text:this.delRes.msg,
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
    this.departmentForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
    })


    this.hrmService.getDepartment().subscribe(res => {
      this.loader=false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

     // permission from profile api
     this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'contacts' && res.content_type.model === 'department' && res.codename=='add_department') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'department' && res.codename=='change_department') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'department' && res.codename=='delete_department') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }

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
 
  addRes: any;
  loaders=false;
  submit() {
    // console.log(this.departmentForm.value);
    // console.log(this.id);

    if (this.departmentForm.valid) {
      this.loaders=true;
      this.hrmService.addDepartment(this.departmentForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.departmentForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }else{
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.loaders = false;
      this.departmentForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields');
    }
  }

  stateError = null
  update() {
    if (this.departmentForm.valid) {
      this.loaders=true;
      this.hrmService.updateDepartment(this.departmentForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.departmentForm.reset();
          this.addForm = true;
          // window.location.reload()
          this.ngOnInit();
        }else{
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
        if (err.error.state) {
          this.stateError = 'Select State';
          setTimeout(() => {
            this.stateError = ''
          }, 3000);
        }
      })

    } else {
      this.loaders = false;
      this.departmentForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields');
    }
  }

  get title() {
    return this.departmentForm.get('title')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.hrmService.getDepartmentById(id).subscribe(res => {
      if (id == res.id) {
        this.addForm = false
        this.departmentForm.patchValue(res);
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.departmentForm.reset();
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase(); 
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

     // convert to pdf
     generatePDF() {
      // table data with pagination
      const doc = new jsPDF();
      const title = 'Department List';
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
            { header: 'Is Active' },
          ],
        })
      doc.save('department.pdf');
   }
   generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'department ';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15); 
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Title']
      ],
      body: this.tableData.map((row:any, index:number ) => [
    
        index + 1,
        row.title
  
  
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15, 
    });
    doc.save('department .pdf');
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
      const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const fileName = 'department.xlsx';
      saveAs(blob, fileName); 
    }
  
    printTable(): void {
      const tableElement = document.getElementById('mytable');
      const tableHTML = tableElement.outerHTML;
      const titleElement = document.querySelector('.titl');
      const titleHTML = titleElement.outerHTML;
      const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
      const isActiveTh = clonedTable.querySelector('th.thone:nth-child(4)');
      if (isActiveTh) {
        isActiveTh.remove();
      }
      const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        const isActiveTd = row.querySelector('td:nth-child(4)');
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
      window.addEventListener('afterprint', () => {
        console.log('afterprint');
       window.location.reload();
      });
      document.body.innerHTML = combinedContent;
      window.print();
      document.body.innerHTML = originalContents;
    }
    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.tableData.length;
      }
    }
}