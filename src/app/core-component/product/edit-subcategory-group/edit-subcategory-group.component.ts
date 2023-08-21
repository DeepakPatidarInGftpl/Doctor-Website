import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-edit-subcategory-group',
  templateUrl: './edit-subcategory-group.component.html',
  styleUrls: ['./edit-subcategory-group.component.scss']
})
export class EditSubcategoryGroupComponent implements OnInit {

  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private fb: FormBuilder, private router: Router, private coreService: CoreService,
    private Arout: ActivatedRoute, private toastr: ToastrService) { }
  subCategoryGroupForm!: FormGroup;

  get f() {
    return this.subCategoryGroupForm.controls
  }
  id: any;
  selectedSubCats = [];
  selectedFeature = [];
  updateData: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id')

    this.subCategoryGroupForm = this.fb.group({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subcategories: new FormArray([]),
      feature_group: new FormArray([]),
      image: new FormControl('')
    })
    this.getCategory()


    this.coreService.getSubcategoryGroupById(this.id).subscribe(res => {
      console.log(res);
      this.updateData = res
      this.subCategoryGroupForm.patchValue({
        title: res.title,
      })
      this.subCategoryGroupForm.get('category').patchValue(res?.category?.id);
      this.getSubcategoryByCategory(res?.category?.id);
      this.selectedSubCats = res?.subcategories?.map(res => res.id);
      this.selectedFeature = res?.feature_group?.map(res => res.id);
      console.log(this.selectedFeature);
      this.getFeatureGroup()
    })
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
      console.log(this.filteredFeatureGroupData);
      this.filterFeatureGroupData();

      // update then display

      this.featureGroup.map((map: any) => {
        console.log(this.selectedFeature);

        this.selectedFeatureGrp = this.selectedFeature.length
        console.log(this.selectedFeatureGrp);
        if (this.selectedFeature.includes(map.id)) {
          console.log(map.id);
          const formArray = this.subCategoryGroupForm.get('feature_group') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
      // end  
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

  subcatbyCategory: any[] = []
  filteredSubcategoryData: any[];
  searchSubcategory: string = '';
  getSubcategoryByCategory(val: any) {
    this.coreService.getSubcategoryByCategory(val).subscribe(res => {
      this.subcatbyCategory = res;
      this.filteredSubcategoryData = this.subcatbyCategory.slice();
      this.filterSubcategoryData();
      // update then display
      console.log(this.selectedSubCats);
      this.selectedSubcat = this.selectedSubCats.length
      console.log(this.selectedSubcat);
      this.subcatbyCategory.map((map: any) => {

        if (this.selectedSubCats.includes(map.id)) {
          const formArray = this.subCategoryGroupForm.get('subcategories') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
      // end  
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
    console.log(file);
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
    console.log(this.subCategoryGroupForm.value);
    if (this.subCategoryGroupForm.valid) {
      this.loaders = true;
      let formdata: any = new FormData();

      formdata.append("title", this.subCategoryGroupForm.controls['title'].value);
      formdata.append("category", this.subCategoryGroupForm.controls['category'].value);
      // formdata.append("image", this.subCategoryGroupForm.controls['image'].value);
      formdata.append('subcategories', JSON.stringify(this.subCategoryGroupForm.get('subcategories')?.value));
      formdata.append('feature_group', JSON.stringify(this.subCategoryGroupForm.get('feature_group')?.value));


      const imageFile = this.subCategoryGroupForm.get('image')?.value;
      if (imageFile && imageFile instanceof File) {
        formdata.append('image', imageFile);
        this.coreService.editSubCategoryGroup(formdata, this.id).subscribe((res: any) => {
          if (res.msg == 'SubCategory Group updated successfully') {
            this.toastr.success(res.msg)
            this.loaders = false
            this.router.navigate(['/product/subCategoryGroup'])
          }
        },
          err => {
            this.loaders = false
            console.log(err.error.msg);
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
        this.coreService.editSubCategoryGroup(formdata, this.id).subscribe((res: any) => {
          if (res.msg == 'SubCategory Group updated successfully') {
            this.toastr.success(res.msg)
            this.loaders = false
            this.router.navigate(['/product/subCategoryGroup'])
          }
        },
          err => {
            this.loaders = false
            console.log(err.error.msg);
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
      }
    } else {
      this.loaders = false
      this.subCategoryGroupForm.markAllAsTouched()
      console.log('invalid form');

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

