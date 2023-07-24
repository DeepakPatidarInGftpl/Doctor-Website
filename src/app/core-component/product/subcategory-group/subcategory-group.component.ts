import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-subcategory-group',
  templateUrl: './subcategory-group.component.html',
  styleUrls: ['./subcategory-group.component.scss']
})
export class SubcategoryGroupComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false

  apiUrl = environment.api

  public tableData: any = []
  imgUrl = 'https://pv.greatfuturetechno.com';
  form: FormGroup
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private QueryService: QueryService, private coreServ: CoreService, private toastr: ToastrService) {
    this.QueryService.filterToggle()
  }
  delRes: any;
  confirmText(index: any, id) {
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
        this.coreServ.deleteSubCategGroup(id).subscribe(res => {
          console.log(res)
          this.delRes = res;
          if (this.delRes == 'Subcategory Group Deleted successfully') {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
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
      text: "Do you want to Deactivate this subcategory group!",
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
        this.coreServ.subcategoryGroupIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Subcategory Group Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Subcategory Group Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this subcategory group!",
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
        this.coreServ.subcategoryGroupIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Subcategory Group Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Subcategory Group Is Active Successfully.',
        });
      }
    });
  }
  editMode;

  categories;

  featureGroup;

  subCategory

  get f() {
    return this.form.controls
  }

  subcatEdit
  featureCategoryEdit

  selectedSubCats = [];
  selectedFeature = []

  errormessFSubC
  errormessFFG;
  loader = true;
  updateData:any;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  ngOnInit() {
    // this.coreServ.subCategoryGroupGet()

    // this.coreServ.subCategoriesGroup.subscribe(() => {
    //   if (localStorage.getItem("subCategories")) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("subCategories")))
    //   }
    // })

    this.coreServ.getSubcategoryGroup().subscribe(res => {
      this.tableData = res;
      this.loader = false
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    let eTitle = ''
    let eCategory = ''
    let subCategory
    let featureCategory


    this.coreServ.getCategory().subscribe(res => {
      this.categories = res
    })

    this.coreServ.getFeatureGroup().subscribe(res => {
      this.featureGroup = res
    })

    this.coreServ.subCategory().subscribe((res: any) => {
      this.subCategory = res

    })

    this.coreServ.editThings.subscribe((res: any) => {

      this.editMode = res
      console.log(res);


      if (this.editMode != null) {
        eTitle = res.title
        eCategory = res?.category?.id
        this.subcatEdit = res.subcategories
        this.featureCategoryEdit = res.feature_group;
        this.updateData=res;
        console.log(this.updateData);
        
        // this.selectedSubCats = this.subcatEdit.map(res => res.id,
        //   console.log(res));
        this.selectedSubCats = res.subcategories.map(res => res.id,
          console.log(res));
        this.selectedFeature = this.featureCategoryEdit.map(res => res.id)
      }

      this.form = new FormGroup({
        title: new FormControl(eTitle, Validators.required),
        category: new FormControl(eCategory, Validators.required),
        subcategories: new FormControl(subCategory),
        feature_group: new FormControl(featureCategory),
        image: new FormControl('')
      })
    })

    console.log(this.subcategories);

    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename=='add_subcategorygroup') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename=='change_subcategorygroup') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename=='delete_subcategorygroup') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }
  arraySubCat = []
  selectedSubCat = 0;
  onSelectionChange(subCat, isChecked) {
    this.arraySubCat.push(subCat.id)
    if (isChecked.checked) {
      this.selectedSubCats.push(subCat.id);
      this.selectedSubCat++;

    } else {
      this.selectedSubCats = this.selectedSubCats.filter(id => id !== subCat.id,
        this.selectedSubCat--
      );
    }
  }


  arrayFeatutreGroup = [];
  selectedFeatureGrp = 0;
  selectFeatureGroup(fGroup, isChecked) {
    this.arrayFeatutreGroup.push(fGroup.id)
    if (isChecked.checked) {
      this.selectedFeature.push(fGroup.id);
      this.selectedFeatureGrp++;
    } else {
      this.selectedFeature = this.selectedFeature.filter(id => id !== fGroup.id,
        this.selectedFeatureGrp--);
    }
  }

  selectedCat;
  selectCate(id) {
    this.selectedCat = id.target.value
    console.log(this.form.controls['category'].value);
  }

  subcatbyCategory: any;
  getSubcategoryByCategory(val: any) {
    this.coreServ.getSubcategoryByCategory(val).subscribe(res => {
      this.subcatbyCategory = res;
    })
  }

  url: any;
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.form.patchValue({
      image: file
    })
    this.form.get('image')?.updateValueAndValidity();
  }

  loaders = false;
  submitForm() {
    console.log(this.form.value);
    if (this.form.controls['category'].value == 'Category Type') {
      this.form.controls['category'].invalid
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      console.log('forms invalid');
    } else {
      this.loaders = true;
      var formdata: any = new FormData();
      if (this.editMode) {
        formdata.append("title", this.form.controls['title'].value);
        formdata.append("category", this.form.controls['category'].value);
        // formdata.append("image", this.form.controls['image'].value);
        formdata.append("subcategories", `[${this.selectedSubCats}]`);
        formdata.append("feature_group", `[${this.selectedFeature}]`);
        
        const imageFile = this.form.get('image')?.value;
        if (imageFile && imageFile instanceof File) {
          formdata.append('image', imageFile);
          this.coreServ.editSubCategoryGroup(formdata, this.editMode.id).subscribe((res: any) => {
            if (res.msg == 'SubCategory Group updated successfully') {
              this.loaders = false;
              this.editMode = false;
              this.url='';
              this.updateData='';
              this.coreServ.editThings.unsubscribe()
              this.selectedSubCats = []
              this.selectedFeature = []
              this.addForm = true;
              this.form.reset()
              this.toastr.success(res.msg)
              this.ngOnInit()
              this.selectedSubCat = 0;
              this.selectedFeatureGrp = 0;
            }
          })
        }else{
          this.coreServ.editSubCategoryGroup(formdata, this.editMode.id).subscribe((res: any) => {
            if (res.msg == 'SubCategory Group updated successfully') {
              this.loaders = false;
              this.url='';
              this.updateData='';
              this.editMode = false
              this.coreServ.editThings.unsubscribe()
              this.selectedSubCats = []
              this.selectedFeature = []
              this.addForm = true;
              this.form.reset()
              this.toastr.success(res.msg)
              this.ngOnInit()
              this.selectedSubCat = 0;
              this.selectedFeatureGrp = 0;
            }
          })
        }
      } else {
        formdata.append("title", this.form.controls['title'].value);
        formdata.append("category", this.form.controls['category'].value);
        formdata.append("image", this.form.controls['image'].value);
        formdata.append("subcategories", `[${this.selectedSubCats}]`);
        formdata.append("feature_group", `[${this.selectedFeature}]`);
        this.coreServ.postCategoriesGroup(formdata).subscribe((res: any) => {
          if (res.msg == 'Data Created') {
            this.url='';
            this.updateData='';
            this.loaders = false;
            this.form.reset()
            this.selectedSubCats = []
            this.selectedFeature = []
            this.addForm = true;
            this.errormessFSubC = null
            this.errormessFFG = null
            this.toastr.success(res.msg)
            this.ngOnInit()
            this.selectedSubCat = 0;
            this.selectedFeatureGrp = 0;
          }
        },
          err => {
            console.log(err.error.msg);
            if (err.error.msg == 'Your Selected subcategories is Not Avaliable') {
              this.errormessFSubC = 'This Field Is Required'
            }
            if (err.error.msg == 'Your Selected FeatureGroup is Not Avaliable') {
              this.errormessFFG = 'This Field Is Required'
            }
          }
        )
      }
    }
  }
  id: any;
  editThis(prod) {
    this.url='';
    this.updateData='';
    this.id = prod.id;
    this.coreServ.editThisData(prod)
    this.editForm()
    this.id
    this.coreServ.getSubcategoryGroupById(this.id).subscribe(res => {
      console.log(res);
      this.getSubcategoryByCategory(res.category.id)
    })

  }

  ngOnDestroy() {
    this.coreServ.editThisData(null)
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

  get title() {
    return this.form.get('title')
  }

  get category() {
    return this.form.get('category')
  }

  get subcategories() {
    return this.form.get('subcategories')
  }

  get feature_group() {
    return this.form.get('feature_group')
  }

  openaddForm() {
    this.updateData='';
    this.url=''
    this.addForm = true;
    this.form.reset();
  }
  addForm = true
  editForm() {
    this.url='';
    this.updateData='';
    this.addForm = false
  }
  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
      })
    }
  }
  key = 'title'
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
}
