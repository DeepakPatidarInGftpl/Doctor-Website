import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss']
})
export class FeatureGroupComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  featureForm!: FormGroup;
  get f() {
    return this.featureForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  navigateData:any;
  constructor(private coreService: CoreService, private router: Router, private fb: FormBuilder, private toastr: ToastrService, private cs: CompanyService) {
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
        this.coreService.deleteFuature_group(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
            this.ngOnInit();
            this.tableData.splice(index, 1);

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
      text: "Do you want to Deactivate this feature group!",
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
        this.coreService.featureGroupIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Feature Group Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this feature group!",
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
        this.coreService.featureGroupIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Feature Group Is Active Successfully.',
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
    this.featureForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      feature: new FormArray([], [Validators.required]),
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
    // this.coreService.getFuature_group();
    // // this.tableData = this.QueryService.fuature_groupList;
    // console.log(this.tableData);
    // this.coreService.featureGroupBehavior.subscribe(() => {
    //   if (localStorage.getItem('fuature_groupList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("fuature_groupList")!))
    //   }
    // })
    this.coreService.getFuature_groupD().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getFeature();

    //permission from localstorage data
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename=='add_featuregroup') {
    //       this.isAdd = res.codename;
          // console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename=='change_featuregroup') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename=='delete_featuregroup') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename == 'add_featuregroup') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename == 'change_featuregroup') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename == 'delete_featuregroup') {
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
  deleteId(id: number) {
    this.coreService.deleteFuature_group(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "FeatureGroup Deleted successfully") {
        window.location.reload()
      }

    })
  }

  featureList: any[] = []; 
  filteredFeatureList: any[] = [];
  searchTerm: string = '';
  features: any = [];

  getFeature() {
    this.coreService.getfeature().subscribe((res: any) => {
      this.featureList = res;
      // console.log(this.featureList);
      this.filteredFeatureList = [...this.featureList];
      if (!this.addForm) {
        this.featureList.map((map: any) => {
          // console.log(this.features);
          // console.log(this.features.includes(map.id));
          this.selectedFeature = this.features.length
          if (this.features.includes(map.id)) {
            let formArray: any = this.featureForm.get('feature') as FormArray;
            formArray.push(new FormControl(map.id))
          }
        })
      }
    })
  }
  
  filterFeatures() {
    if (this.searchTerm.trim() === '') {
      this.filteredFeatureList = [...this.featureList];
    } else {
      this.filteredFeatureList = this.featureList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  check: any
  selectedFeatureIds: any[] = []
  selectedFeature = 0;
  onCheckChange(event: any) {
    const formArray: any = this.featureForm.get('feature') as FormArray;
    /* Selected */
    if (event.target.checked) {
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedFeature++;
      this.selectedFeatureIds=formArray.value
    }
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedFeature--;
          return;
        }
        i++;
      });
    }
  }

  addRes: any
  // submit() {
  //   console.log(this.featureForm.value);
  //   console.log(this.id);

  //   if (this.featureForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateFuature_group(this.featureForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "FeatureGroup updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.featureForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addFuature_group(this.featureForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "FeatureGroup Successfuly Added") {
  //           this.toastr.success(this.addRes.msg)
  //           this.featureForm.reset()
  //           window.location.reload();
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.featureForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loaders = false;
  submit() {
    // console.log(this.featureForm.value);
    // console.log(this.id);

    var formData: any = new FormData();
    formData.append("title", this.featureForm.get('title')?.value);
    formData.append('feature', JSON.stringify(this.featureForm.get('feature')?.value));

    if (this.featureForm.valid) {
      this.loaders = true;
      this.coreService.addFuature_group(formData).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.selectedFeature = 0
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.featureForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
      })
    } else {
      this.featureForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  update() {
    // console.log(this.featureForm.value);
    
    var formData: any = new FormData();
    formData.append("title", this.featureForm.get('title')?.value);
    formData.append('feature', JSON.stringify(this.featureForm.get('feature')?.value));

    if (this.featureForm.valid) {
      this.loaders = true;
      this.coreService.updateFuature_group(formData, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.selectedFeature = 0
          this.toastr.success(this.addRes.msg)
          this.featureForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
      })
    } else {
      this.featureForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  get title() {
    return this.featureForm.get('title')
  }
  get feature() {
    return this.featureForm.get('feature');
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getFuature_groupById(id).subscribe(res => {
      // console.log(res);
      if (id == res.id) {
        this.getFeature()
        this.addForm = false
        this.featureForm.patchValue(res);
        // this.featureForm.get('feature').patchValue(res?.feature?.id)
        this.editFormdata = res
        this.features = res?.feature.map((res: any) => res.id);
      }
    })
  }
  openaddForm() {
    this.selectedFeature = 0
    this.addForm = true;
    this.featureForm.reset();
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
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Feature Group List';
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
          { header: 'Feature Group' },
          { header: 'Is Active' }
        ],
      })
    doc.save('featuregroup.pdf');

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
    const fileName = 'featuregroup.xlsx';
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
