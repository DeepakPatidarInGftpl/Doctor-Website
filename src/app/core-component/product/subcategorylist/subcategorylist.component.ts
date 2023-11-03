import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.scss']
})
export class SubcategorylistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  subcategoryForm!: FormGroup;
  get f() {
    return this.subcategoryForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  navigateData: any;
  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,
    private cs: CompanyService) {
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
        this.coreService.deleteProductSubcategory(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
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
      text: "Do you want to Deactivate this subcategory!",
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
        this.coreService.subCategoryIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Subcategory Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this subcategory!",
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
        this.coreService.subCategoryIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Subcategory Is Active Successfully.',
        });
      }
    });
  }
  loaders = true;
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
    this.subcategoryForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('',),
      category_id: new FormControl('', [Validators.required]),
      // discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/), Validators.required]),
      // brand_id: new FormArray([],)
    })

    // this.coreService.getProductSubcategory();

    // this.coreService.subcategoryBehavior.subscribe(() => {
    //   if (localStorage.getItem('productsubcategroyList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("productsubcategroyList")!))
    //   }
    // })
    this.coreService.getproductSubcategory().subscribe(res => {
      this.tableData = res;
      this.loaders = false
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    this.productCategory();
    this.getbrand()
    // localstorege used permission
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename=='add_productsubcategory') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename=='change_productsubcategory') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename=='delete_productsubcategory') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename == 'add_productsubcategory') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename == 'change_productsubcategory') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename == 'delete_productsubcategory') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }
  // selected table roww
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
      if (this.delRes.msg == "Product Subcategory Deleted successfully") {
        // this.getcompanyList()
      }
    })
  }

  categoryList: any
  productCategory() {
    this.coreService.getProductcategory().subscribe(res => {
      // console.log(res);
      this.categoryList = res
    })
  }
  brandList: any
  getbrand() {
    this.coreService.getBrand().subscribe(res => {
      // console.log(res);
      this.brandList = res;
      if (this.addForm) {

      } else {
        this.brandList.map((map: any) => {
          // console.log(this.brands.includes(map.id));

          if (this.brands.includes(map.id)) {
            // console.log(map.id, 'map.id');

            let formArray: any = this.subcategoryForm.get('brand_id') as FormArray;
            formArray.push(new FormControl(map.id))
          }
        })
      }

    })
  }
  check: any
  selectBrand = 0;
  onCheckChange(event: any) {
    const formArray: any = this.subcategoryForm.get('brand_id') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectBrand++
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectBrand--
          return;

        }
        i++;
      });
    }
  }
  url: any;
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.subcategoryForm.patchValue({
      image: file
    })
    this.subcategoryForm.get('image')?.updateValueAndValidity();
  }

  // selectimg(event: Event, index: number) {
  //   const file = (event.target as HTMLInputElement).files![0];
  // console.log(file);
  //   const control = this.subcategoryForm.get('subcategories')?.at(index)?.get('image');
  //   control?.patchValue(file);
  //   control?.updateValueAndValidity();
  // }

  addRes: any
  data: any

  // submit() {
  //   console.log(this.subcategoryForm.value);
  //   console.log(this.id);
  //   console.log(this.check);
  //   console.log(this.subcategoryForm.get('brand_id')?.value);
  //   this.data = this.subcategoryForm.get('brand_id')?.value
  //   var formdata: any = new FormData()

  //   formdata.append('title', this.subcategoryForm.get('title')?.value);
  //   formdata.append('image', this.subcategoryForm.get('image')?.value);
  //   formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
  //   formdata.append('brand_id', JSON.stringify(this.subcategoryForm.get('brand_id')?.value));

  //   if (this.subcategoryForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateProductSubcategory(formdata, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Account updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.subcategoryForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addProductSubcategory(formdata).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.subcategoryForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.subcategoryForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loader = false
  submit() {
    // console.log(this.subcategoryForm.value);
    // console.log(this.id);
    // console.log(this.check);
    // console.log(this.subcategoryForm.get('brand_id')?.value);
    this.data = this.subcategoryForm.get('brand_id')?.value
    var formdata: any = new FormData()

    formdata.append('title', this.subcategoryForm.get('title')?.value);
    formdata.append('image', this.subcategoryForm.get('image')?.value);
    formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
    // formdata.append('discount', this.subcategoryForm.get('discount')?.value);


    if (this.subcategoryForm.valid) {
      this.loader = true;
      this.coreService.addProductSubcategory(formdata).subscribe(res => {
        // console.log(res);
        this.loader = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.subcategoryForm.reset()
          // window.location.reload()
          this.loader = false
          this.ngOnInit()
        }
      }, err => {
        // console.log(err.error.gst);
      })

    } else {
      this.subcategoryForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }
  imgError = false;
  update() {
    // console.log(this.subcategoryForm.value);

    var formdata: any = new FormData()

    formdata.append('title', this.subcategoryForm.get('title')?.value);
    // formdata.append('image', this.subcategoryForm.get('image')?.value);
    formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
    // formdata.append('discount', this.subcategoryForm.get('discount')?.value);

    if (this.subcategoryForm.valid) {
      this.loader = true;
      const imageFile = this.subcategoryForm.get('image')?.value;
      if (imageFile && imageFile instanceof File) {
        formdata.append('image', imageFile);
        this.coreService.updateProductSubcategory(formdata, this.id).subscribe(res => {
          // console.log(res);
          this.addRes = res
          this.loader = false;
          if (this.addRes.success) {
            this.toastr.success(this.addRes.msg);
            this.updateData = '';
            this.subcategoryForm.reset();
            this.addForm = true
            this.loader = false
            // window.location.reload()
            this.ngOnInit()
          }
        }, err => {
          // console.log(err.error.gst);
          if (err.error.image) {
            this.imgError = true
            // setTimeout(() => {
            //   this.imgError=false;
            // }, 3000);
          }
        })
      } else {
        this.coreService.updateProductSubcategory(formdata, this.id).subscribe(res => {
          // console.log(res);
          this.addRes = res
          this.loader = false;
          if (this.addRes.success) {
            this.toastr.success(this.addRes.msg);
            this.subcategoryForm.reset();
            this.updateData = ''
            this.addForm = true
            this.loader = false
            // window.location.reload()
            this.ngOnInit()
          }
        }, err => {
          // console.log(err.error.gst);
          if (err.error.image) {
            this.imgError = true
            // setTimeout(() => {
            //   this.imgError=false;
            // }, 3000);
          }
        })
      }




    } else {
      this.subcategoryForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  get title() {
    return this.subcategoryForm.get('title')
  }
  get image() {
    return this.subcategoryForm.get('image')
  }
  get category_id() {
    return this.subcategoryForm.get('category_id')
  }
  get brand_id() {
    return this.subcategoryForm.get('brand_id')
  }
  get discount() {
    return this.subcategoryForm.get('discount')
  }
  addForm = true
  id: any
  brandEdit: any;
  brands: any = [];
  updateData: any;
  editForm(id: number) {
    this.id = id
    this.coreService.getProductSubcategoryById(id).subscribe(res => {
      // console.log(res);

      if (id == res.id) {
        this.addForm = false;
        // this.getbrand()
        // this.brandEdit = res.brand_id;
        this.updateData = res;
        // console.log(res.category_id.title);
        // console.log(res?.discount);
        // this.brands = res.brand_id.map((res: any) => res.id);
        // console.log(this.brands, 'this.brands');

        this.subcategoryForm.patchValue({
          title: res.title,
          category_id: res.category_id.id,
          // discount: res?.discount,
          // image: res.image,
        });
      }
    })

  }
  openaddForm() {
    this.addForm = true;
    this.subcategoryForm.reset();
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

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Sub Category List';
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
          { header: 'Image' },
          { header: 'Title' },
          { header: 'Category' },
          { header: 'Is Active' }
        ],
      })
    doc.save('subcategory.pdf');

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
    const fileName = 'subcategory.xlsx';
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
}
