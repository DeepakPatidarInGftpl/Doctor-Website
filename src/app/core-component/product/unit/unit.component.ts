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
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  fileName: string;
  selectedFile: File;
  selectedFileName: string;
  fileFormatError = false;
  missingFieldsError = false;
  fieldfilteredData: any[] = [];
  unitsForm!: FormGroup;
  selectActive: any;
  filteredData: any[];
  unitCtrl = new FormControl('', [Validators.required]);
  unitList: any;
  allunitData: any;
  get f() {
    return this.unitsForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 10;

  itemsPerPage = 10;
  navigateData: any
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private cs: CompanyService) {
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
        this.coreService.deleteUnits(id).subscribe(res => {
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Unit!",
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
        this.coreService.unitIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Unit Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Unit!",
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
        this.coreService.unitIsActive(id, '').subscribe(res => {
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
  userDetails: any
  ngOnInit(): void {
    this.unitsForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
    })

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

    // this.coreService.getUnits();
    // // this.tableData = this.QueryService.unitList;
    // console.log(this.tableData);

    // this.coreService.unitBehavior.subscribe(() => {
    //   if (localStorage.getItem('unitList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("unitList")!))
    //   }
    // })

    this.coreService.getUnit().subscribe(res => {
      this.tableData = res;
      this.unitList = res;
      this.allunitData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice();
      this.filterData();
    })

    this.unitCtrl.valueChanges.subscribe((res) => {
      console.log(res);
      this._filterBrands(res);
    });

    //permission from localstoarge data
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename=='add_unit') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename=='change_unit') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename=='delete_unit') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename == 'add_unit') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename == 'change_unit') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename == 'delete_unit') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }

  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectActive !== undefined && this.selectActive !== null) {
      filteredData = filteredData.filter(item => item?.is_active === this.selectActive);
    }
    this.filteredData = filteredData;
  }

  clearFilter() {
    this.selectActive = undefined;
    this.filterData();
  }

  private _filterBrands(value: string): any {
    const filterValue = value?.toLowerCase();
    this.unitList = this.allunitData.filter(unit => unit?.title?.toLowerCase().includes(filterValue));
  }

  openModal() {
    this.fileName = '';
    this.missingFieldsError = false;
    this.fileFormatError = false;
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
      const fileExtension = this.getFileExtension(file.name);
      if (fileExtension !== 'xlsx') {
        this.fileFormatError = true;
        this.missingFieldsError = false;
      } else {
        this.fileFormatError = false;
        this.readExcelFile(file);
      }
    }
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }

  readExcelFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonSheet = XLSX.utils.sheet_to_json(worksheet);

      if (this.validateColumns(jsonSheet)) {
        this.missingFieldsError = false;
        this.fieldfilteredData = jsonSheet.map((row: any) => ({
          title: row['title']
        }));
        console.log('Filtered Data:', this.fieldfilteredData);
      } else {
        this.missingFieldsError = true;
      }
    };
    reader.readAsArrayBuffer(file);
  }

  validateColumns(sheetData: any[]): boolean {
    if (!sheetData || sheetData.length === 0) {
      return false;
    }

    const requiredFields = ['title'];
    const sheetFields = Object.keys(sheetData[0]);

    for (const field of requiredFields) {
      if (!sheetFields.includes(field)) {
        return false;
      }
    }
    return true;
  }

  createFilteredExcelFile(data: any[]) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Blob([wbout], { type: 'application/octet-stream' });
  }

  uploadFile() {
    const formData = new FormData();
    const filteredExcelBlob = this.createFilteredExcelFile(this.fieldfilteredData);
    formData.append('file', filteredExcelBlob, this.selectedFileName);

    this.loader = true;
    if (!this.fileFormatError && !this.missingFieldsError && this.fileName) {
      this.coreService.importUnit(formData).subscribe((res) => {
        console.log(res);
        this.toastr.success(res?.msg);
        this.loader = false;
        this.missingFieldsError = false;
        this.fileFormatError = false;
        let closeModal = <HTMLElement>document.querySelector('.closeModal');
        closeModal.click();
      }, (err) => {
        this.toastr.error(err?.error?.msg);
        console.error(err?.error?.msg);
      })
    } else {
      this.loader = false;
      this.toastr.error('Please Upload a valid File');
      console.error('No file selected');
      return;
    }
  }

  download() {
    this.coreService.sampleUnitFileExport().subscribe(
      (res: Blob) => {
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'sampleUnitFile.xlsx');
      },
      (error) => {
        console.error('Error downloading the file:', error);
        this.toastr.error('Error downloading the file');
      }
    );
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
  deleteId(id: number) {
    this.coreService.deleteUnits(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Warehouse Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  addRes: any
  // submit() {
  //   console.log(this.unitsForm.value);
  //   console.log(this.id);

  //   if (this.unitsForm.valid) {
  //     if(this.id){
  //       this.coreService.updateUnits(this.unitsForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Unit updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.unitsForm.reset()
  //          window.location.reload()
  // }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }else{
  //     this.coreService.addUnits(this.unitsForm.value).subscribe(res => {
  //       console.log(res);
  //       this.addRes = res
  //       if (this.addRes.msg == "Data Created") {
  //         this.toastr.success(this.addRes.msg)
  //         this.unitsForm.reset()
  //         window.location.reload()
  //       }
  //     }, err => {
  //       console.log(err.error.gst);
  //     })
  //   }
  //   } else {
  //     this.unitsForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  openaddForm() {
    this.addForm = true;
    this.unitsForm.reset();
  }

  loaders = false;
  submit() {
    // console.log(this.unitsForm.value);
    // console.log(this.id);

    this.unitsForm.get('title').setValue(this.unitCtrl.value);

    if (this.unitsForm.valid) {
      this.loaders = true;
      this.coreService.addUnits(this.unitsForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.unitsForm.reset();
          this.unitCtrl.reset();
          this.unitCtrl.markAsPristine();
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
        this.loaders = false;
      })
    } else {
      this.unitsForm.markAllAsTouched();
      this.loaders = false;
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  update() {
    if (this.unitsForm.valid) {
      this.loaders = true;
      this.coreService.updateUnits(this.unitsForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.addForm = true
          this.toastr.success(this.addRes.msg)
          this.unitsForm.reset()
          //  window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
      })
    } else {
      this.unitsForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  get title() {
    return this.unitsForm.get('title')
  }
  addForm = true
  id: any
  editForm(id: number) {
    this.id = id
    this.coreService.getUnitsById(id).subscribe(res => {
      // console.log(res);
      res.map((data: any) => {
        // console.log(data);
        if (id == data.id) {
          this.addForm = false
          this.unitsForm.patchValue(data);

        }
      })
    })
  }


  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  // console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
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
    const title = 'Unit list';
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
          { header: 'Is Active' }
        ],
      })
    doc.save('unit.pdf');

  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Unit List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Units',]
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row.title,



      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Unit .pdf');
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
    const fileName = 'unit.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(4)');
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
      const isActiveTd = row.querySelector('td:nth-child(4)');
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
      this.itemsPerPage = this.filteredData.length;
    }
  }
}

