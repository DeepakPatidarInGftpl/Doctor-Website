import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.scss']
})
export class StatelistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  fileName: string;
  selectedFile: File;
  selectedFileName: string;
  fileFormatError = false;
  missingFieldsError = false;
  filteredData: any[] = [];
  stateForm!: FormGroup;
  get f() {
    return this.stateForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  navigateData: any
  constructor(private coreService: CoreService, private router: Router, private fb: FormBuilder, private toastr: ToastrService,
    private Service: CompanyService) {
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
        this.coreService.deletestate(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
            // console.log(this.delRes);
            // this.toastr.error(this.delRes.error)
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
      text: "Do you want to Deactivate this state!",
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
        this.coreService.stateIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'State Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this state!",
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
        this.coreService.stateIsActive(id, '').subscribe(res => {
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
  isEdit: any;
  isAdd: any;
  isDelete: any;
  userDetails: any;
  ngOnInit(): void {
    this.stateForm = this.fb.group({
      state: new FormControl('', [Validators.required]),
      state_code: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
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

    // this.coreService.getstate();

    // this.coreService.stateBehavior.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('stateList')!)
    // })
    this.coreService.getstate().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    // console.log(this.tableData);
    this.getCountryList();
    //permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='add_state') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='change_state') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='delete_state') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

    // permission from profile api
    this.Service.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename == 'add_state') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename == 'change_state') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename == 'delete_state') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }

  openModal() {
    this.fileName = '';
    this.missingFieldsError = false;
    this.fileFormatError = false;
  }

  download() {
    this.coreService.sampleStateFileExport().subscribe(
      (res: Blob) => {
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'sampleStateFile.xlsx');
      },
      (error) => {
        console.error('Error downloading the file:', error);
        this.toastr.error('Error downloading the file');
      }
    );
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

      // Validate the columns
      if (this.validateColumns(jsonSheet)) {
        this.missingFieldsError = false;
        // Process the data here (only extract required fields)
        this.filteredData = jsonSheet.map((row: any) => ({
          country: row['country'],
          state: row['state'],
          state_code: row['state_code']
        }));
        console.log('Filtered Data:', this.filteredData);
        // Further processing with filteredData
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

    const requiredFields = ['country', 'state', 'state_code'];
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
    const filteredExcelBlob = this.createFilteredExcelFile(this.filteredData);
    formData.append('file', filteredExcelBlob, this.selectedFileName);

    this.loaders = true;
    if (!this.fileFormatError && !this.missingFieldsError && this.fileName) {
      this.coreService.importState(formData).subscribe((res) => {
        console.log(res);
        this.toastr.success(res?.msg);
        this.loaders = false;
        this.missingFieldsError = false;
        this.fileFormatError = false;
        let closeModal = <HTMLElement>document.querySelector('.closeModal');
        closeModal.click();
      }, (err) => {
        this.toastr.error(err?.error?.msg);
        console.error(err?.error?.msg);
      })
    } else {
      this.loaders = false;
      this.toastr.error('Please Upload a valid File');
      console.error('No file selected');
      return;
    }
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
    this.coreService.deletestate(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "State Deleted successfully") {
        // window.location.reload()
        this.ngOnInit()
      }

    })
  }
  countryList: any
  getCountryList() {
    this.coreService.getCountry().subscribe(res => {
      this.countryList = res
    })
  }
  addRes: any;
  loaders = false;
  submit() {
    // console.log(this.stateForm.value);
    // console.log(this.id);

    if (this.stateForm.valid) {
      this.loaders = true;
      this.coreService.addstate(this.stateForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.stateForm.reset()
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
      })

    } else {
      this.stateForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields');
    }
  }
  countryError = null;
  update() {
    if (this.stateForm.valid) {
      this.loaders = true;
      this.coreService.updatestate(this.stateForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.stateForm.reset();
          this.addForm = true;
          this.ngOnInit()
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
        if (err.error.country) {
          this.countryError = 'Select Country';
          setTimeout(() => {
            this.countryError = ''
          }, 3000);
        }
      })

    } else {
      this.loaders = false;
      this.stateForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields');
    }
  }
  countryy: any
  getCountry() {
    this.Service.countryList().subscribe(res => {
      this.countryy = res
    })
  }
  get state() {
    return this.stateForm.get('state')
  }
  get state_code() {
    return this.stateForm.get('state_code')
  }
  get country() {
    return this.stateForm.get('country')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getstateById(id).subscribe(res => {
      // console.log(res);
      res.map((data: any) => {
        if (id == data.id) {
          this.addForm = false
          this.stateForm.patchValue(data);
          this.stateForm.patchValue({
            country: data?.country?.id
          })
          this.editFormdata = data
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.stateForm.reset();
  }


  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  // console.log(res);
  //       console.log(res.state.toLocaleLowerCase());
  //       console.log(res.state.match(this.titlee));
  //       return res.state.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.state.toLocaleLowerCase();
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
    const title = 'State List';

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
          { header: 'State' },
          { header: 'State Code' },
          { header: 'Country' },
          { header: 'Is Active' }
        ],
      })
    doc.save('state.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'State List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'State', 'State Code', 'Country']
      ],
      body: this.tableData.map((row: any, index: number) => [

        index + 1,
        row.state,
        row.state_code,
        row.country.country_name,


      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('State  .pdf');
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
    const fileName = 'state.xlsx';
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

