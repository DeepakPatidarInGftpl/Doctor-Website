import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  constructor(private QueryService: QueryService, private coreServ: CoreService) {
    this.QueryService.filterToggle()


  }
  confirmText(index: any) {
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
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }
  editMode
  ngOnInit() {

    this.coreServ.subCategoryGroupGet()

    this.coreServ.subCategoriesGroup.subscribe(() => {
      if (localStorage.getItem("subCategories")) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("subCategories")))
      }
    })


    let eTitle = ''
    let eCategory = ''
    let subCategory = ''
    let featureCategory = ''

    this.coreServ.editThings.subscribe((res: any) => {

      this.editMode = res
      console.log(res);

      if (this.editMode != null) {
        eTitle = res.title
        eCategory = res.category?.title
        subCategory = res.subcategories[0]?.title
        featureCategory = res.feature_group[0]?.title
      }
      this.form = new FormGroup({
        title: new FormControl(eTitle, Validators.required),
        category: new FormControl(eCategory, Validators.required),
        subcategories: new FormControl(subCategory, Validators.required),
        feature_group: new FormControl(featureCategory, Validators.required),
      })
    })


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

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      console.log('forms invalid');
    } else {
      if (this.editMode) {
      } else {

        this.coreServ.postCategoriesGroup(this.form.value).subscribe(res => {
          console.log(res);
        })
      }
    }
  }


  editThis(prod) {
    this.coreServ.editThisData(prod)
    this.editMode = true
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

}
