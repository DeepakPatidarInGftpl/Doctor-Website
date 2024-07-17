import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-add-subcategory-group',
  templateUrl: './add-subcategory-group.component.html',
  styleUrls: ['./add-subcategory-group.component.scss'],

})
export class AddSubcategoryGroupComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private coreService: CoreService, private toastr: ToastrService) { }
  subCategoryGroupForm!: FormGroup;
  subCategoryGroup = new FormControl('', [Validators.required]);
  subCategoryGroupList: any;
  allsubCategoryGroupData: any;
  get f() {
    return this.subCategoryGroupForm.controls
  }
  ngOnInit(): void {
    this.subCategoryGroupForm = this.fb.group({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subcategories: new FormArray([]),
      // feature_group: new FormArray([]),
      image: new FormControl('')
    })
    this.getCategory()
    this.getFeatureGroup();
    this.getSubCategoryGroup();

    this.subCategoryGroup.valueChanges.subscribe((res) => {
      console.log(res);
      this._filterBrands(res);
    });
  }
  categories: any;
  getCategory() {
    this.coreService.getCategory().subscribe(res => {
      this.categories = res
    })
  }

  filteredFeatureGroupData: any[];
  searchFeatureGroup: string = '';
  featureGroup: any[] = []
  getFeatureGroup() {
    this.coreService.getFeatureGroup().subscribe((res: any) => {
      this.featureGroup = res
      this.filteredFeatureGroupData = this.featureGroup.slice();
      // console.log(this.filteredFeatureGroupData);

      this.filterFeatureGroupData();
    })
  }
  filterFeatureGroupData() {
    let filteredData = this.featureGroup.slice();
    if (this.searchFeatureGroup) {
      const searchTerm = this.searchFeatureGroup.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.title.toLowerCase();
        return aliasLower.includes(searchTerm);
      });
    }
    this.filteredFeatureGroupData = filteredData;
  }

  private _filterBrands(value: string): any {
    const filterValue = value?.toLowerCase();
    this.subCategoryGroupList = this.allsubCategoryGroupData.filter(subcategorygroup => subcategorygroup?.title?.toLowerCase().includes(filterValue));
  }

  subcatbyCategory: any[] = []
  filteredSubcategoryData: any[];
  searchSubcategory: string = '';
  getSubcategoryByCategory(val: any) {
    this.coreService.getSubcategoryByCategory(val).subscribe(res => {
      this.subcatbyCategory = res;
      this.filteredSubcategoryData = this.subcatbyCategory.slice();
      this.filterSubcategoryData();
    })
  }
  filterSubcategoryData() {
    let filteredData = this.subcatbyCategory.slice();
    if (this.searchSubcategory) {
      const searchTerm = this.searchSubcategory.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.title.toLowerCase();
        return aliasLower.includes(searchTerm);
      });
    }
    this.filteredSubcategoryData = filteredData;
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
    this.subCategoryGroupForm.patchValue({
      image: file
    })
    this.subCategoryGroupForm.get('image')?.updateValueAndValidity();
  }

  selectedSubcat = 0;
  selectedSubCategoryIds: any[] = []
  onCheckChange(event: any) {
    const formArray: any = this.subCategoryGroupForm.get('subcategories') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))

      this.selectedSubcat++;
      this.selectedSubCategoryIds = formArray.value
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
  arrayFeatutreGroup = [];
  selectedFeatureGrp = 0;
  selectedFeatureIds: any[] = []


  getSubCategoryGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      this.subCategoryGroupList = res;
      this.allsubCategoryGroupData = res;
    })
  }

  onCheckFeature(event: any) {
    const formArray: any = this.subCategoryGroupForm.get('feature_group') as FormArray;
    /* Selected */
    if (event.target.checked) {
      formArray.push(new FormControl(parseInt(event.target.value)));
      this.selectedFeatureGrp++;
      this.selectedFeatureIds = formArray.value
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
  loaders = false;
  errormessFFG: any
  errormessFSubC: any
  submit() {
    // console.log(this.subCategoryGroupForm.value);
    if (this.subCategoryGroupForm.valid) {
      this.loaders = true;
      let formdata: any = new FormData();
      formdata.append("title", this.subCategoryGroupForm.controls['title'].value);
      formdata.append("category", this.subCategoryGroupForm.controls['category'].value);
      formdata.append("image", this.subCategoryGroupForm.controls['image'].value);
      formdata.append('subcategories', JSON.stringify(this.subCategoryGroupForm.get('subcategories')?.value));
      // formdata.append('feature_group', JSON.stringify(this.subCategoryGroupForm.get('feature_group')?.value));

      this.coreService.postCategoriesGroup(formdata).subscribe((res: any) => {
        if (res.success) {
          this.toastr.success(res.msg)
          this.loaders = false
          this.router.navigate(['/product/subCategoryGroup'])
        }
      },
        err => {
          this.loaders = false
          // console.log(err.error.msg);
          if (err.error.msg == 'Your Selected subcategories is Not Avaliable') {
            this.errormessFSubC = 'This Field Is Required'
            setTimeout(() => {
              this.errormessFSubC = '';
            }, 3000);
          }
          if (err.error.msg == 'Your Selected FeatureGroup is Not Avaliable') {
            this.errormessFFG = 'This Field Is Required'
            setTimeout(() => {
              this.errormessFFG = ''
            }, 3000);
          }
        }
      )
    } else {
      this.loaders = false
      this.subCategoryGroupForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')

    }

  }


  get title() {
    return this.subCategoryGroupForm.get('title')
  }
  get category() {
    return this.subCategoryGroupForm.get('category')
  }
  get subcategories() {
    return this.subCategoryGroupForm.get('subcategories')
  }
  get feature_group() {
    return this.subCategoryGroupForm.get('feature_group')
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
