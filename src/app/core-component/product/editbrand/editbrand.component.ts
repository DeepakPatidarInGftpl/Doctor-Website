import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent implements OnInit {

  show: boolean = false

  imgUrl = 'https://pv.greatfuturetechno.com';

  brandForm!: FormGroup;
  get f() {
    return this.brandForm.controls;
  }

  //
  dropdownList = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  //
  constructor(private coreService: CoreService, private fb: FormBuilder, private Arout: ActivatedRoute, private toastr: ToastrService, private router: Router, private cs: CompanyService) { }
  // edit
  subcatGroup: any = [];
  selectSubcat: any = [];
  selectCat: any = [];
  subcatId: any;
  updateData: any;
  id: any;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id')

    this.brandForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      code: new FormControl(''),
      image: new FormControl(''),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      category: new FormArray([]),
      subcategory_group: new FormArray<any>([], [Validators.required]),
      subcategory: new FormArray([], [Validators.required]),
    })

    //dropdown list
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'product_title',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    // display updated data
    this.coreService.getbrandById(this.id).subscribe(res => {
      console.log(res);
      this.url = ''
      if (this.id == res.id) {
        console.log(res);
        this.updateData = res;
        this.subcatId = res.subcategory_group[0].id
        console.log(this.subcatId);
        this.subcatGroup = res?.subcategory_group.map((res: any) => res.id);
        this.selectSubcat = res?.subcategory.map((res: any) => res.id);
        this.selectCat = res?.category.map((res: any) => res?.id)
        // this.brandForm.patchValue(res);
        this.brandForm.patchValue({
          title: res.title,
          code: res.code,
          discount: res.discount
        })
        if (res?.category.length > 0) {
          console.log('categry');
          this.getSubcatGroupByCategory(this.selectCat)
        } else {
          this.getSubcatGroup()
        }
        this.getSubcategoryBySubcatGroup(this.subcatGroup)
        this.getCategory();
      }
    })
    
  }

  ///
  onItemSelect(item: any) {
    console.log(item);
    let formArray: any = this.brandForm.get('variant') as FormArray;
    formArray.push(new FormControl(item.id))
  }
  onItemDeselect(item: any): void {
    // Handle the deselection of the item
    console.log('Item deselected:', item);
    let formArray: FormArray = this.brandForm.get('variant') as FormArray;
    console.log(formArray);
    const index = formArray.controls.findIndex(control => control.value === item.id);
    console.log(index);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  onSelectAll(items: any) {
    console.log(items);
    let formArray: any = this.brandForm.get('variant') as FormArray;
    items.forEach((item: any) => {
      formArray.push(new FormControl(item.id));
    });
  }
  onDeselectAll(items: any) {
    console.log('All items deselected:', items);
    let formArray: any = this.brandForm.get('variant') as FormArray;
    formArray.clear();
  }
  //


  categoryList: any
  getCategory() {
    this.coreService.getCategory().subscribe(res => {
      this.categoryList = res;
      this.categoryList.map((map: any) => {
        console.log(this.selectCat);
       
        console.log(this.selectCat.includes(map?.id), 'category');
        if (this.selectCat.includes(map.id)) {
          const formArray = this.brandForm.get('category') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
    })
  }

  //check Category
  selectedCat = 0
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

  getSubcatGroupByCategory(val: number[]) {
    console.log(val);
    const idString = JSON.stringify(val);
    this.coreService.getSubcategoryGroupByCategoryid(idString).subscribe(res => {
      console.log(res);
      this.subcatGroupList = res;
      // update then display
      this.subcatGroupList.map((map: any) => {
        console.log(this.subcatGroup.includes(map.id), 'subcategory_group');
        if (this.subcatGroup.includes(map.id)) {
          console.log(map.id);
          const formArray = this.brandForm.get('subcategory_group') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
      // end  

    })
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

  subcatGroupList: any
  getSubcatGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      this.subcatGroupList = res;
      // update then display
      this.subcatGroupList.map((map: any) => {
        console.log(this.subcatGroup.includes(map.id), 'subcategory_group');
        if (this.subcatGroup.includes(map.id)) {
          console.log(map.id);
          const formArray = this.brandForm.get('subcategory_group') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
      // // end  
    })
  }

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

  subcategories: any = [];
  subcatbySubcatGroup: any;
  getSubcategoryBySubcatGroup(val: any) {
    const idString = JSON.stringify(val);
    this.coreService.getSubcategoryBySubcatGroupid(idString).subscribe(res => {
      console.log(res);
      this.subcatbySubcatGroup = res;
      this.subcatbySubcatGroup.map((map: any) => {
        console.log(this.selectSubcat);
        
        console.log(this.selectSubcat.includes(map.id), 'subcategory');
        if (this.selectSubcat.includes(map.id)) {
          const formArray = this.brandForm.get('subcategory') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })
    })
  }

  check: any
  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.brandForm.get('subcategory') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubcat++;
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
  selectedSubCatGrp = 0;


  loaders = false
  addRes: any;
  update() {
    console.log(this.brandForm.value);

    var formData: any = new FormData();
    formData.append("title", this.brandForm.get('title')?.value);
    // formData.append("image", this.brandForm.get('image')?.value);
    formData.append("code", this.brandForm.get('code')?.value);
    formData.append("discount", this.brandForm.get('discount')?.value);
    formData.append("category", JSON.stringify(this.brandForm.get('category')?.value));
    formData.append('subcategory_group', JSON.stringify(this.brandForm.get('subcategory_group')?.value));
    formData.append('subcategory', JSON.stringify(this.brandForm.get('subcategory')?.value));

    if (this.brandForm.valid) {
      this.loaders = true;

      const imageFile = this.brandForm.get('image')?.value;
      if (imageFile && imageFile instanceof File) {
        formData.append('image', imageFile);
        this.coreService.updatebrand(formData, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Brands updated successfully") {
            this.loaders = false;
            this.toastr.success(this.addRes.msg)
            this.router.navigate(['//product/brandlist'])
            this.updateData = '';
            this.url = '';

            this.brandForm.reset()
            this.selectedSubcat = 0;
            this.selectedSubCatGrp = 0;
          } else {
            this.loaders = false;
          }
        }, err => {
          console.log(err.error.gst);
        })
      } else {
        this.coreService.updatebrand(formData, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Brands updated successfully") {
            this.loaders = false;
            this.updateData = '';
            this.url = '';
            this.toastr.success(this.addRes.msg)
            this.router.navigate(['//product/brandlist'])
            this.brandForm.reset()
            this.selectedSubcat = 0;
            this.selectedSubCatGrp = 0;
          } else {
          }
        }, err => {
          console.log(err.error.gst);
        })
      }

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
    event.stopPropagation();
  }
}
