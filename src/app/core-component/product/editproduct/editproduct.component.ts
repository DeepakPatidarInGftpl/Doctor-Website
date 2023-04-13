import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  productForm!: FormGroup;
  
  public measurable: boolean = false; 
  get f() {
    return this.productForm.controls;
  }
  colors: any = [];
  variants: any = [];
  sizes: any = [];
  ischeck = true;
  uncheck = false;


  editordoc = jsonDoc;
  editor: Editor | any;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


 
  get doc(): any {
    // return this.form.get('editorContent');
    return this.productForm.get('description')
  }

  constructor(private coreService: CoreService, private router: Router, private fb: FormBuilder,
    private toastr: ToastrService, private Aroute: ActivatedRoute) { }
  id: any
  dat: any
  ngOnInit(): void {
    this.editor = new Editor();

    this.id = this.Aroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      features_subcategory: new FormControl('', [Validators.required]),
      subcategory_group: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      unit_conversion: new FormControl(''),
      description: new FormControl(''),
      product_store: new FormControl('', [Validators.required]),
      style_code:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      is_measurable:new FormControl(''),
      color: new FormArray([], [Validators.required]),
      size: new FormArray([], [Validators.required]),
      variant: new FormArray([]),   
    })
    this.coreService.getProductById(this.id).subscribe(res => {
      // this.productShow(res)
      if (this.id == res.id) {
        console.log(res.color);
        console.log(res.variant);
        // this.colors = res.color
        this.colors = res.color.map((res: any) => res.id);
        // console.log(this.colors, 'thiscolors');
        this.variants = res.variant.map((res: any) => res.id);
        // console.log(this.variants, 'thisVariant');
        this.sizes = res.size.map((res: any) => res.id)
        // console.log(this.variants, 'thisSize');
        this.productForm.patchValue({
          title: res.title,
          description: res.description,
          product_store: res.product_store,
          style_code:res.style_code,
          is_measurable:res.is_measurable
        })
      }
    })

    this.getCategory()
    this.getSubCategory()
    this.getBrand()
    this.getFeatureSubCat()
    this.getSubcatGroup()
    this.getColor()
    this.getSize()
    this.getVariant()
    this.getUnit()
    this.getUnitConversion()
  }

  // this working
  arraySubCat: any = []
  onSelectionChange(subCat: any, isChecked: any) {
    this.arraySubCat.push(subCat.id)
    console.log(this.arraySubCat);
    if (isChecked.checked) {
      this.colors.push(subCat.id);
    } else {
      this.colors = this.colors.filter((id: any) => id !== subCat.id);
    }
  }

  categoryList: any
  getCategory() {
    this.coreService.getCategory().subscribe(res => {
      this.categoryList = res
    })
  }
  subcatList: any
  getSubCategory() {
    this.coreService.getSubcategory().subscribe(res => {
      console.log(res);
      this.subcatList = res;
    })
  }
  brandList: any
  getBrand() {
    this.coreService.getBrand().subscribe(res => {
      console.log(res);
      this.brandList = res
    })
  }
  featureSubCatList: any
  getFeatureSubCat() {
    this.coreService.getFuature_groupD().subscribe(res => {
      this.featureSubCatList = res
    })
  }
  subcatGroupList: any
  getSubcatGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      this.subcatGroupList = res
    })
  }

  colorList: any
  getColor() {
    this.coreService.getColor().subscribe(res => {
      this.colorList = res;
      setTimeout(() => {
        this.colorList.map((map: any) => {
          if (this.colors.includes(map.id)) {
            console.log(map.id, 'mapid');
            const formArray: any = this.productForm.get('color') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 2000);
    })
  }
  sizeList: any
  getSize() {
    this.coreService.getSize().subscribe(res => {
      console.log(res);
      this.sizeList = res
      setTimeout(() => {
        this.sizeList.map((map: any) => {
          console.log(this.sizes.includes(map.id), 'size');
          if (this.sizes.includes(map.id)) {
            const formArray = this.productForm.get('size') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 2000);
    })
  }
  varantList: any
  getVariant() {
    this.coreService.getVariantd().subscribe(res => {
      this.varantList = res
      setTimeout(() => {
        this.varantList.map((map: any) => {
          console.log(this.variants.includes(map.id));
          console.log(map);
          if (this.variants.includes(map.id)) {
            console.log(map.id, 'mapid');
            const formArray: any = this.productForm.get('variant') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 2000);
    })
  }
  unitList: any
  getUnit() {
    this.coreService.getUnit().subscribe(res => {
      this.unitList = res
    })
  }
  unitConversionList: any
  getUnitConversion() {
    this.coreService.getunitconversion().subscribe(res => {
      this.unitConversionList = res
    })
  }
  subcatbyCategory: any;
  getSubcategoryByCategory(val:any) {
    this.coreService.getSubcategoryByCategory(val).subscribe(res => {
      this.subcatbyCategory = res;
    })
  }
  brandBySubcat:any;
  selectBrand(val:any){
    this.coreService.getBrandBySubcategory(val).subscribe(res=>{
      this.brandBySubcat=res;
    })
  }
  check: any
  selectedColor=0;
  onCheckColor(event: any) {
    const formArray: any = this.productForm.get('color') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray;
     this.selectedColor++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedColor--;
          return;
        }
        i++;
      });
    }
  }
  selectedSize=0;
  onCheckSize(event: any) {
    const formArray: any = this.productForm.get('size') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray;
this.selectedSize++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSize--;
          return;
        }
        i++;
      });
    }
  }
  selectedVariant=0;
  onCheckVariant(event: any) {
    const formArray: any = this.productForm.get('variant') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
     this.selectedVariant++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedVariant--
          return;       
        }
        i++;
      });
    }
  }
  submit() {
    console.log(this.productForm.value);
    console.log(this.arraySubCat);

    let formdata: any = new FormData();

    formdata.append('title', this.productForm.get('title')?.value);
    formdata.append('category', this.productForm.get('category')?.value);
    formdata.append('subcategory', this.productForm.get('subcategory')?.value);
    formdata.append('brand', this.productForm.get('brand')?.value);
    formdata.append('features_subcategory', this.productForm.get('features_subcategory')?.value);
    formdata.append('subcategory_group', this.productForm.get('subcategory_group')?.value);
    formdata.append('unit', this.productForm.get('unit')?.value);
    formdata.append('unit_conversion', this.productForm.get('unit_conversion')?.value);
    formdata.append('description', this.productForm.get('description')?.value);
    formdata.append('product_store', this.productForm.get('product_store')?.value);
    formdata.append('color', JSON.stringify(this.productForm.get('color')?.value));
    formdata.append('size', JSON.stringify(this.productForm.get('size')?.value));
    formdata.append('variant', JSON.stringify(this.productForm.get('variant')?.value));
    formdata.append('style_code',this.productForm.get('style_code')?.value);
    formdata.append('is_measurable',this.productForm.get('is_measurable')?.value);


    if (this.productForm.valid) {
      this.coreService.updateProduct(formdata, this.id).subscribe(res => {
        if (res.msg == "Product updated successfully") {
          this.toastr.success(res.msg);
          this.router.navigate(['//product/productlist'])
        } else {
          console.log('res api error');
        }
      })
    } else {
      this.productForm.markAllAsTouched();
      console.log('forms invalid');
    }
  }

  get title() {
    return this.productForm.get('title')
  }
  get category() {
    return this.productForm.get('category')
  }
  get subcategory() {
    return this.productForm.get('subcategory')
  }
  get brand() {
    return this.productForm.get('brand')
  }
  get features_subcategory() {
    return this.productForm.get('features_subcategory')
  }
  get subcategory_group() {
    return this.productForm.get('subcategory_group')
  }
  get unit() {
    return this.productForm.get('unit')
  }
  get unit_conversion() {
    return this.productForm.get('unit_conversion')
  }
  get description() {
    return this.productForm.get('description')
  }
  get product_store() {
    return this.productForm.get('product_store')
  }
  get color() {
    return this.productForm.get('color') as FormArray
  }
  get size() {
    return this.productForm.get('size')
  }
  get variant() {
    return this.productForm.get('variant');
  }
  get style_code(){
    return this.productForm.get('style_code')
  }
  get is_measurable(){
    return this.productForm.get('is_measurable')
  }

}
