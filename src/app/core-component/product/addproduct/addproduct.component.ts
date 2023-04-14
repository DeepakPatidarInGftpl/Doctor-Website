import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';


import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productForm!: FormGroup;

  public measurable: boolean = false;

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
  get f() {
    return this.productForm.controls;
  }
  constructor(private coreService: CoreService, private router: Router, private fb: FormBuilder,
    private toastr: ToastrService) { }

  disable = true

  ngOnInit(): void {
    this.editor = new Editor();
    this.productForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      subcategory_group: new FormControl('', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      color: new FormArray([], [Validators.required]),
      size: new FormArray([], [Validators.required]),
      product_store: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      purchase_tax_including: new FormControl(''),
      is_measurable: new FormControl(''),
      sales_tax_including: new FormControl(''),
      is_active: new FormControl(''),
      tax_slab: new FormControl(''),
      description: new FormControl(''),

      // features_subcategory: new FormControl('', [Validators.required]),
      // unit_conversion: new FormControl(''),  
      // style_code: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      // variant: new FormArray([]),

      features: this.fb.array([]),
      variants: this.fb.array([])
    })

    // add form
    this.addFeature();
    // this.addVariant();
    //add form

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
    this.getTaxSlab()
    this.getFeatureData()
    this.getFeatureGroup()
  }

  features(): FormGroup {
    return this.fb.group({
      featureGroup: (''),
      feature: (''),
    });
  }

  getFeature(): FormArray {
    return this.productForm.get('features') as FormArray;
  }
  addFeature() {
    this.getFeature().push(this.features())
  }
  removeAmount(i: any) {
    this.getFeature().removeAt(i)
  }

  variants(): FormGroup {
    return this.fb.group({
      product: (''),
      variant: (''),
      mrp: (''),
      cost_price: (''),
      selling_price: (''),
      stock: (''),
      minimum_stock: (''),
      selling_price_dealer: (''),
      selling_price_employee: (''),
      barcode: (''),
      sku: (''),
      max_order_quantity: ('')
    })
  }
  getVarinatsForm(): FormArray {
    return this.productForm.get('variants') as FormArray;
  }
  addVariant() {
    this.getVarinatsForm().push(this.variants())
  }
  removeVariant(k: any) {
    this.getVarinatsForm().removeAt(k)
  }

  categoryList: any
  getCategory() {
    this.coreService.getCategory().subscribe(res => {
      this.categoryList = res
    })
  }
  taxSlabList: any
  getTaxSlab() {
    this.coreService.getTaxSlab().subscribe(res => {
      this.taxSlabList = res
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
      this.colorList = res
    })
  }
  sizeList: any
  getSize() {
    this.coreService.getSize().subscribe(res => {
      console.log(res);
      this.sizeList = res
    })
  }
  varantList: any
  getVariant() {
    this.coreService.getVariantd().subscribe(res => {
      this.varantList = res
    })
  }
  unitList: any
  getUnit() {
    this.coreService.getUnit().subscribe(res => {
      this.unitList = res
    })
  }
  subcatGroupByCategory: any;
  getSubcategoryGroupByCategory(val: any) {
    this.coreService.getSubcatGraoupByCategory(val).subscribe(res => {
      this.subcatGroupByCategory = res;
    })
  }
  subcatbyCategoryGroup: any
  getSubcategoryBySubcategoryGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      this.subcatbyCategoryGroup = res.subcategories;
    })
  }
  unitConversionList: any;
  getUnitConversion() {
    this.coreService.getunitconversion().subscribe(res => {
      this.unitConversionList = res
    })
  }

  brandBySubcat: any;
  selectBrand(val: any) {
    this.coreService.getBrandBySubcategory(val).subscribe(res => {
      this.brandBySubcat = res;
    })
  }

  featureList: any;
  getFeatureData() {
    this.coreService.getfeature().subscribe(res => {
      this.featureList = res;
    })
  }
  featureGroupList: any;
  getFeatureGroup() {
    this.coreService.getFeatureGroup().subscribe(res => {
      this.featureGroupList = res;
    })
  }
  check: any
  selectedColor = 0;
  checkedColors: any = [];
  checkedSizes: any = [];
  chekVarints = []
  onCheckColor(event: any,color) {
    console.log(color,'colorname');
    
    this.chekVarints = []
    const formArray: any = this.productForm.get('color') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      console.log(event.target.value);
      this.checkedColors.push(event.target.value);
      console.log(this.checkedColors, 'checkcolor');
      if (this.checkedSizes.length > 0 && this.checkedColors.length == 0) {
        for (let n = 0; n < this.checkedSizes.length; n++) {
          this.chekVarints.push({ size: n });
          console.log(this.chekVarints, 'sizeif');

        }

      }
      if (this.checkedColors.length > 0) {
        if (this.checkedSizes.length > 0) {
          for (let i = 0; i < this.checkedColors.length; i++) {
            for (let j = 0; j < this.checkedSizes.length; j++) {
              this.chekVarints.push({ color: i, size: j })
              console.log(this.chekVarints, 'checkvariants');
            }
          }
        } else {
          for (let k = 0; k < this.checkedColors.length; k++) {
            this.chekVarints.push({ color: k })
            console.log(this.chekVarints, 'else size');
          }
        }
      }

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
          this.checkedColors.pop(i);
          console.log(this.checkedColors, 'checkcolor');
          return;
        }
        i++;
      });
    }
  }

  selectedSize = 0;

  checkSizeColor() {
    if (this.checkedSizes.length > 0 && this.checkedColors.length == 0) {
      for (let n = 0; n < this.checkedSizes.length; n++) {
        this.chekVarints.push({ size: n });
        console.log(this.chekVarints, 'sizeif');
      }
    }
    if (this.checkedColors.length > 0) {
      if (this.checkedSizes.length > 0) {
        for (let i = 0; i < this.checkedColors.length; i++) {
          for (let j = 0; j < this.checkedSizes.length; j++) {
            this.chekVarints.push({ color: i, size: j })
            console.log(this.chekVarints, 'checkvariants');
          }
        }
      } else {
        for (let k = 0; k < this.checkedColors.length; k++) {
          this.chekVarints.push({ color: k })
          console.log(this.chekVarints, 'else size');
        }
      }
    }
  }

  sizeCheck=[]
  checkSize(e) {   
     //push and pop 
     console.log(e.target.value);
     
     if(this.sizeCheck.length<=0){
      this.sizeCheck.push(e.target.value);    
     }else{
      for (let i = 0; i <= this.sizeCheck.length; i++) {
        if(this.sizeCheck.includes(e.target.value)){
          this.sizeCheck.splice(i,1)
        }else{
          this.sizeCheck.push(e.target.value)
        }
      }
     }
      
        this.checkVariant(e); 
  }  
    checkColor(e) {    //push and pop   
      if(this.checkedColors.length > 0){
        this.checkedColors.push(e.target.value);   
       } else { 
         this.checkedColors.pop(e.target.value)  
      }   
        this.checkVariant(e);  
      } 
      checkVariant(e) {  
        console.log(e);
        
          console.log(this.checkedColors, 'colors');    
          console.log(this.sizeCheck, 'sizes'); 
         }

  onCheckSize(event: any,size) {
    console.log(size,'sizename');
    
    const formArray: any = this.productForm.get('size') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      this.checkedSizes.push(event.target.value);
      console.log(this.checkedSizes, 'checksizes');
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSize++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 1;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.checkedSizes.pop(i);
          console.log(this.checkedSizes, 'checksizes');
          this.selectedSize--;
          return;
        }
        i++;
      });
    }
  }
  selectedVariant = 0;
  onCheckVariant(event: any) {
    const formArray: any = this.productForm.get('variant') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray;

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
          this.selectedVariant--;
          return;
        }
        i++;
      });
    }
  }

  submit() {
    console.log(this.productForm.value);

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
    formdata.append('style_code', this.productForm.get('style_code')?.value);
    formdata.append('is_measurable', this.productForm.get('is_measurable')?.value);

    if (this.productForm.valid) {
      this.coreService.addProduct(formdata).subscribe(res => {
        if (res.msg == "Data Created") {
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
    return this.productForm.get('color')
  }
  get size() {
    return this.productForm.get('size')
  }
  get variant() {
    return this.productForm.get('variant')
  }
  get style_code() {
    return this.productForm.get('style_code')
  }
  get is_measurable() {
    return this.productForm.get('is_measurable')
  }

}
