import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-hsncode',
  templateUrl: './hsncode.component.html',
  styleUrls: ['./hsncode.component.scss']
})
export class HsncodeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  hsncodeForm!: FormGroup;

  get f() {
    return this.hsncodeForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 10;

  itemsPerPage = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private cs: CompanyService) {
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
        this.coreService.deleteHSNcode(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "HSNCode Deleted successfully") {
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
      text: "Do you want to Deactivate this HSNCode!",
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
        this.coreService.hsncodeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "HSNCode Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'HSNCode Group Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this HSNCode!",
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
        this.coreService.hsncodeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "HSNCode Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'HSNCode Group Is Active Successfully.',
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
    this.hsncodeForm = this.fb.group({
      // title: new FormControl('', [Validators.required]),
      hsn_code: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      // tax: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      subcategory: new FormArray([], [Validators.required]),
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

    // this.coreService.getHSNcode();
    //   // this.tableData = this.QueryService.hsncodeList;
    // // console.log(this.tableData);
    // this.coreService.hsncodeBehavior.subscribe(() => {
    //   if (localStorage.getItem('hsncodeList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("hsncodeList")!))
    //   }
    // })
    this.coreService.getHSNCode().subscribe(res => {
      this.loader = false;
      this.tableData = res
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getSubcategory();
    this.getTax();

    //permission from localstorage data
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename=='add_hsncode') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename=='change_hsncode') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename=='delete_hsncode') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename == 'add_hsncode') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename == 'change_hsncode') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename == 'delete_hsncode') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
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
  deleteId(id: number) {
    this.coreService.deleteWarehouse(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Warehouse Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  // form submit
  check: any
  selectedSubcat = 0;
  selectedSubcategoryIds: any[] = []
  onCheckChange(event: any) {
    const formArray: any = this.hsncodeForm.get('subcategory') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubcat++;
      this.selectedSubcategoryIds = formArray.value

    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubcat--;
          return;
        }
        i++;
      });
    }
  }

  subcategoryList: any[] = []
  filteredFeatureList: any[] = [];
  searchTerm: string = '';
  getSubcategory() {
    this.coreService.getSubcategory().subscribe(res => {
      console.log(res);
      this.subcategoryList = res
      this.filteredFeatureList = [...this.subcategoryList];
      if (!this.addForm) {
        this.subcategoryList.map((map: any) => {
          console.log(this.subcategories.includes(map.id));
          console.log(map);
          this.selectedSubcat = this.subcategories.length
          if (this.subcategories.includes(map.id)) {
            let formArray: any = this.hsncodeForm.get('subcategory') as FormArray;
            formArray.push(new FormControl(map.id))
          }
        })
      }
    })
  }

  filterSubcategory() {
    if (this.searchTerm.trim() === '') {
      this.filteredFeatureList = [...this.subcategoryList];
    } else {
      this.filteredFeatureList = this.subcategoryList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  addRes: any
  data: any
  // submit() {
  //   console.log(this.hsncodeForm.value);
  //   var formdata: any = new FormData()

  //   formdata.append('title', this.hsncodeForm.get('title')?.value);
  //   formdata.append('tax', this.hsncodeForm.get('tax')?.value);
  //   formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
  //   formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));

  //   if (this.hsncodeForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateHSNcode(formdata, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "HSNCode updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.hsncodeForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addHSNcode(formdata).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "HSNCode Successfuly Added") {
  //           this.toastr.success(this.addRes.msg)
  //           this.hsncodeForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.hsncodeForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loaders = false;
  submit() {
    console.log(this.hsncodeForm.value);
    var formdata: any = new FormData()

    formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
    // formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));
    const subcategoryValue = this.hsncodeForm.get('subcategory')?.value;

    const nonNullSubcategories = subcategoryValue.filter(value => value !== null);

    if (nonNullSubcategories.length > 0) {
      formdata.append('subcategory', JSON.stringify(nonNullSubcategories));
    }


    if (this.hsncodeForm.valid) {
      this.loaders = true;
      this.coreService.addHSNcode(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "HSNCode Successfuly Added") {
          this.loaders = false;
          this.selectedSubcat = 0
          this.toastr.success(this.addRes.msg)
          this.hsncodeForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.hsncodeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.hsncodeForm.value);
    var formdata: any = new FormData()

    formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
    // formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));
    //remove null 
    // const subcategoryValue = this.hsncodeForm.get('subcategory')?.value;
    // const nonNullSubcategories = subcategoryValue.filter(value => value !== null); 
    // if (nonNullSubcategories.length > 0) {
    //   formdata.append('subcategory', JSON.stringify(nonNullSubcategories));
    // }
    //remove null or duplicate data
    const subcategoryValue = this.hsncodeForm.get('subcategory')?.value;
    const nonNullSubcategories = subcategoryValue.filter(value => value !== null);

    // Using Set to remove duplicates (excluding null values)
    const uniqueSubcategories = Array.from(new Set(nonNullSubcategories));

    if (uniqueSubcategories.length > 0) {
      formdata.append('subcategory', JSON.stringify(uniqueSubcategories));
    }

    if (this.hsncodeForm.valid) {
      this.loaders = true;
      this.coreService.updateHSNcode(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "HSNCode updated successfully") {
          this.loaders = false
          this.selectedSubcat = 0
          this.toastr.success(this.addRes.msg)
          this.hsncodeForm.reset()
          this.addForm = true;
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.hsncodeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  get hsn_code() {
    return this.hsncodeForm.get('hsn_code')
  }

  get subcategory() {
    return this.hsncodeForm.get('subcategory');
  }
  taxdata: any
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      this.taxdata = res
    })
  }

  addForm = true
  id: any
  brandEdit: any
  subcategories: any = [];

  editForm(id: number) {
    this.id = id
    this.coreService.getHSNcodeById(id).subscribe(res => {
      console.log(res);

      if (id == res.id) {
        this.addForm = false;
        this.getSubcategory();

        console.log(res);


        this.subcategories = res.subcategory.map((res: any) => res.id);

        this.hsncodeForm.patchValue({
          hsn_code: res.hsn_code
        });
      }
    })
  }

  openaddForm() {
    this.selectedSubcat = 0
    this.hsncodeForm.reset();
    this.addForm = true;

  }


  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
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
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.hsn_code.toString().toLocaleLowerCase();
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
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'HSN Code List';
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
          { header: 'Sr. No.' },
          { header: 'HSN Code' },
          { header: 'Subcategory' },
          { header: 'Is Active' }
        ],
      })
    doc.save('hsncode.pdf');

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
    const fileName = 'hsncode.xlsx';
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
