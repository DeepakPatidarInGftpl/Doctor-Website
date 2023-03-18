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

  form: FormGroup


  constructor(private QueryService: QueryService, private coreServ: CoreService, private toastr: ToastrService) {
    this.QueryService.filterToggle()
  }
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
        this.coreServ.deleteSubCategGroup(id).subscribe( res => {
          console.log(res)
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
  errormessFFG
  ngOnInit() {


    this.coreServ.subCategoryGroupGet()

    this.coreServ.subCategoriesGroup.subscribe(() => {
      if (localStorage.getItem("subCategories")) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("subCategories")))
      }
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
        this.featureCategoryEdit = res.feature_group


        this.selectedSubCats = this.subcatEdit.map(res => res.id);
        this.selectedFeature = this.featureCategoryEdit.map(res => res.id)
      }

      this.form = new FormGroup({
        title: new FormControl(eTitle, Validators.required),
        category: new FormControl(eCategory, Validators.required),
        subcategories: new FormControl(subCategory),
        feature_group: new FormControl(featureCategory),
      })


    })

    console.log(this.subcategories);



    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: 'Search...',
        info: '_START_ - _END_ of _TOTAL_ items',
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.none');
        $('.dataTables_filter').appendTo('.search-input');
      },
    };
  }



  
  arraySubCat = []
  onSelectionChange(subCat, isChecked) {

    this.arraySubCat.push(subCat.id)
    if (isChecked.checked) {
      this.selectedSubCats.push(subCat.id);
    } else {
      this.selectedSubCats = this.selectedSubCats.filter(id => id !== subCat.id);
    }
  }


  arrayFeatutreGroup = []
  selectFeatureGroup(fGroup, isChecked) {
    this.arrayFeatutreGroup.push(fGroup.id)
    if (isChecked.checked) {
      this.selectedFeature.push(fGroup.id);
    } else {
      this.selectedFeature = this.selectedFeature.filter(id => id !== fGroup.id);
    }
  }

  selectedCat

  selectCate(id) {
    this.selectedCat = id.target.value
    console.log(this.form.controls['category'].value);
  }





  submitForm() {
    console.log(this.form.value);

    if (this.form.controls['category'].value == 'Category Type') {
      this.form.controls['category'].invalid
    }


    if (this.form.invalid) {
      this.form.markAllAsTouched()
      console.log('forms invalid');
    } else {

      var formdata: any = new FormData();
      formdata.append("title", this.form.controls['title'].value);
      formdata.append("category", this.form.controls['category'].value);
      formdata.append("subcategories", `[${this.selectedSubCats}]`);
      formdata.append("feature_group", `[${this.selectedFeature}]`);


      if (this.editMode) {
        this.coreServ.editSubCategoryGroup(formdata, this.editMode.id).subscribe((res: any) => {
          if (res.msg == 'SubCategory Group updated successfully') {
            this.editMode = false
            this.coreServ.editThings.unsubscribe()
            this.selectedSubCats = []
            this.selectedFeature = []
            this.addForm=true;
            this.form.reset()
            this.toastr.success(res.msg)
            this.ngOnInit()
          }
        })
      } else {
        this.coreServ.postCategoriesGroup(formdata).subscribe((res: any) => {
          if (res.msg == 'Data Created') {
            this.form.reset()
            this.selectedSubCats = []
            this.selectedFeature = []
            this.addForm=true;
            this.errormessFSubC = null
            this.errormessFFG = null
            this.toastr.success(res.msg)
            this.ngOnInit()
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


  editThis(prod) {
    this.coreServ.editThisData(prod)
    this.editForm()
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
    console.log('');
    
    this.addForm = true;
    this.form.reset();
  }
  addForm=true
  editForm(){
    this.addForm=false
  }
}
