import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.scss']
})
export class AddbrandComponent implements OnInit {

  brandForm!: FormGroup;
  get f() {
    return this.brandForm.controls;
  }


  imgUrl = 'https://pv.greatfuturetechno.com';

  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private cs: CompanyService) { }

  subcatGroup: any = [];
  selectSubcat: any = [];
  subcatId: any;
  updateData: any;

  ngOnInit(): void {
    this.brandForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      code: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      category: new FormArray([]),
      subcategory_group: new FormArray<any>([],),
      subcategory: new FormArray([]),

    })
    this.getSubcatGroup();
    this.getCategory();

  }

  url: any;
  onSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.brandForm.patchValue({
      image: file
    });

    this.brandForm.get('image')?.updateValueAndValidity()
  }

 
  getSubcatGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      // this.subcatGroupList = res;
    })
  }

  categoryList: any[] = [];
  filteredCategoryList: any[] = [];
  searchCategory: string = '';
  getCategory() {
    this.coreService.getCategory().subscribe((res: any) => {
      this.categoryList = res;
      this.filteredCategoryList = [...this.categoryList];
    })
  }
  filterCategory() {
    if (this.searchCategory.trim() === '') {
      this.filteredCategoryList = [...this.categoryList];
    } else {
      this.filteredCategoryList = this.categoryList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
    }
  }

  //check Category
  selectedCat = 0
  selectedCategoryIds:any[]=[]
  onCheckCategory(event: any) {
    const formArray: any = this.brandForm.get('category') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedCat++;
      this.getSubcatGroupByCategory(formArray.value);
      this.selectedCategoryIds=formArray.value
      console.log( this.selectedCategoryIds);
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedCat--;
          this.getSubcatGroupByCategory(formArray.value);
          return;
        }
        i++;
      });
    }
  }

  subcatGroupList: any[] = [];
  filteredSubCategoryGroupList: any[] = [];
  searchSubCategoryGroup:string=''
  getSubcatGroupByCategory(val: number[]) {
    console.log(val);
    const idString = JSON.stringify(val);
    this.coreService.getSubcategoryGroupByCategoryid(idString).subscribe(res => {
      console.log(res);
      this.subcatGroupList = res;
      this.filteredSubCategoryGroupList = [...this.subcatGroupList];
    })
  }

  filterSubCategoryGroup() {
    if (this.searchSubCategoryGroup.trim() === '') {
      this.filteredSubCategoryGroupList = [...this.subcatGroupList];
    } else {
      this.filteredSubCategoryGroupList = this.subcatGroupList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchSubCategoryGroup.toLowerCase())
      );
    }
  }

  selectedSubCategoryGroupIds: any[] = [];

  selectedSubCatGrp = 0;

  onCheckSize(event: any) {
    const formArray: any = this.brandForm.get('subcategory_group') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubCatGrp++;
      this.getSubcategoryBySubcatGroup(formArray.value);
      this.selectedSubCategoryGroupIds=formArray.value
      console.log( this.selectedSubCategoryIds);
      
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {

          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubCatGrp--;
          this.getSubcategoryBySubcatGroup(formArray.value);
          return;
        }
        i++;
      });
    }
  }

  subcategories: any[] = [];
  filteredSubCategoryList: any[] = [];
  searchSubCategory: string = '';
  id: any = []
  subcatbySubcatGroup: any;
  getSubcategoryBySubcatGroup(val: number[]) {
    console.log(val);
    const idString = JSON.stringify(val);
    this.coreService.getSubcategoryBySubcatGroupid(idString).subscribe(res => {
      console.log(res);
      // this.subcatbySubcatGroup = res;
      this.subcatbySubcatGroup = this.filterDuplicates(res);
      this.filteredSubCategoryList = [...this.subcatbySubcatGroup];
    })
  }
  //filter duplicate data
  filterDuplicates(data: any[]): any[] {
    const uniqueIds = {};
    const filteredData = [];

    for (const item of data) {
      if (!uniqueIds[item.id]) {
        uniqueIds[item.id] = true;
        filteredData.push(item);
      }
    }

    return filteredData;
  }

  filterSubCategory() {
    if (this.searchSubCategory.trim() === '') {
      this.filteredSubCategoryList = [...this.subcatbySubcatGroup];
    } else {
      this.filteredSubCategoryList = this.subcatbySubcatGroup.filter(subcat =>
        subcat.title.toLowerCase().includes(this.searchSubCategory.toLowerCase())
      );
    }
  }
  check: any
  selectedSubcat = 0;
  selectedSubCategoryIds:any[]=[]
  onCheckChange(event: any) {
    const formArray: any = this.brandForm.get('subcategory') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubcat++;
      this.selectedSubCategoryIds=formArray.value
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
  addRes: any;

  submit() {
    console.log(this.brandForm.value);
    var formData: any = new FormData();
    formData.append("title", this.brandForm.get('title')?.value);
    formData.append("image", this.brandForm.get('image')?.value);
    formData.append("code", this.brandForm.get('code')?.value);
    formData.append("discount", this.brandForm.get('discount')?.value);
    formData.append('category', JSON.stringify(this.brandForm.get('category')?.value));
    formData.append('subcategory_group', JSON.stringify(this.brandForm.get('subcategory_group')?.value));
    formData.append('subcategory', JSON.stringify(this.brandForm.get('subcategory')?.value));
    if (this.brandForm.valid) {
      this.loaders = true;
      this.coreService.addbrand(formData).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.router.navigate(['//product/brandlist'])
          this.url = '';
          this.loaders = false
          this.brandForm.reset()
          this.selectedSubcat = 0;
          this.selectedSubCatGrp = 0;
        }
      }, err => {
        console.log(err.error.gst);
      })

    } else {
      this.brandForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.brandForm.get('title')
  }
  get image() {
    return this.brandForm.get('image')
  }
  get code() {
    return this.brandForm.get('code')
  }
  get subcategory_group() {
    return this.brandForm.get('subcategory_group')
  }
  get subcategory() {
    return this.brandForm.get('subcategory');
  }
  get discount() {
    return this.brandForm.get('discount')
  }
  get category() {
    return this.brandForm.get('category')
  }

  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
