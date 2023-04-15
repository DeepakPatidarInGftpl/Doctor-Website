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
  productNamme: any
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
      variants: this.fb.array([]),
      product_image: this.fb.array([])
    })

    // add form
    this.addFeature();
    // this.addVariant();
    this.addproductImage()
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
      max_order_quantity: (''),

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

  productImage(): FormGroup {
    return this.fb.group({
      color: (''),
      image: ('')
    })
  }
  getproductImage(): FormArray {
    return this.productForm.get('product_image') as FormArray;
  }
  addproductImage() {
    this.getproductImage().push(this.productImage())
  }
  removeProductImage(k: any) {
    this.getproductImage().removeAt(k)
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


  onCheckColor(event: any,) {

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

  selectedSize = 0;

  onCheckSize(event: any) {

    const formArray: any = this.productForm.get('size') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm

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

    // nested formdata 
    // working also
    // const variants = this.productForm.get('variants') as FormArray;
    // variants.controls.forEach((control, index) => {
    //   const variant = control.value;
    //   Object.keys(variant).forEach((key: string) => {
    //     console.log(key);
    //     console.log(index);

    //     const value = variant[key];
    //     formdata.append(`variants[${index}][${key}]`, value);
    //   });
    // });

    // const variantsArray = this.productForm.get('variants') as FormArray;
    // variantsArray.controls.forEach((variant) => {
    //   const variantGroup = variant as FormGroup;
    //   Object.keys(variantGroup.controls).forEach((key) => {
    //     const control = variantGroup.controls[key];
    //     formdata.append(`variants[${variantsArray.controls.indexOf(variant)}].${key}`, control.value);
    //   });
    // });
    // variant nested data send json format
    const variantsArray = this.productForm.get('variants') as FormArray;
    const variantsData = [];
    variantsArray.controls.forEach((variants) => {
      const featuresGroup = variants as FormGroup;
      const featureObj = {};
      Object.keys(featuresGroup.controls).forEach((key) => {
        const control = featuresGroup.controls[key];
        featureObj[key] = control.value;
      });
      variantsData.push(featureObj);
    });
    formdata.append('variants', JSON.stringify(variantsData));


    // feature
    // const featuresArray = this.productForm.get('features') as FormArray;
    // featuresArray.controls.forEach((features) => {
    //   const featuresGroup = features as FormGroup;
    //   Object.keys(featuresGroup.controls).forEach((key) => {
    //     const control = featuresGroup.controls[key];
    //     formdata.append(`features[${featuresArray.controls.indexOf(features)}].${key}`, control.value);
    //   });
    // }); 

    // feature send in json format 

    const featuresArray = this.productForm.get('features') as FormArray;
    const featuresData = [];
    featuresArray.controls.forEach((features) => {
      const featuresGroup = features as FormGroup;
      const featureObj = {};
      Object.keys(featuresGroup.controls).forEach((key) => {
        const control = featuresGroup.controls[key];
        featureObj[key] = control.value;
      });
      featuresData.push(featureObj);
    });
    formdata.append('features', JSON.stringify(featuresData));

    // product image
    const product_imageArray = this.productForm.get('product_image') as FormArray;
    product_imageArray.controls.forEach((product_image) => {
      const product_imageGroup = product_image as FormGroup;
      Object.keys(product_imageGroup.controls).forEach((key) => {
        const control = product_imageGroup.controls[key];
        // formdata.append(`product_image[${product_imageArray.controls.indexOf(product_image)}].[${key}]`, control.value);
        formdata.append(`product_image[${product_imageArray.controls.indexOf(product_image)}].${key}`, control.value);
      });
    });

    // variant nested data send json format
//     const product_imageArray = this.productForm.get('product_image') as FormArray;
//     const product_imageData = [];
//     product_imageArray.controls.forEach((product_image) => {
//       const product_imageGroup = product_image as FormGroup;
//       const featureObj = {};
//       Object.keys(product_imageGroup.controls).forEach((key) => {
//         const control = product_imageGroup.controls[key];
//         featureObj[key] = control.value;
//       });
//       product_imageData.push(featureObj);
//     });
//     formdata.append('product_image', JSON.stringify(product_imageData));

//     const product_imageArray = this.productForm.get('product_image') as FormArray;
// const product_imageData = [];

// product_imageArray.controls.forEach((product_image) => {
//   const product_imageGroup = product_image as FormGroup;
//   const featureObj = {};

//   Object.keys(product_imageGroup.controls).forEach((key) => {
//     const control = product_imageGroup.controls[key];
//     featureObj[key] = control.value;
//   });

//   product_imageData.push(featureObj);
// });

// const productImageDataJson = JSON.stringify(product_imageData);

// formdata.append('product_image', productImageDataJson);



    this.coreService.addProduct(formdata).subscribe(res => {
      if (res.msg == "Data Created") {
        this.toastr.success(res.msg);
        this.router.navigate(['//product/productlist'])
      } else {
        console.log('res api error');
      }
    })
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


  currentSizes: any = [];
  currentColors: any = [];
  currentVariants: any = [];
  productColor: any;

  onCheckSizes(e) {
    if (this.currentSizes.length == 0) {
      this.currentSizes.push(e);
    } else {
      if (!this.currentSizes.includes(e)) {
        this.currentSizes.push(e)
      } else { this.currentSizes = this.currentSizes.filter(item => item !== e); }
    } this.variantCheck();
  }

  onCheckColors(e) {
    if (this.currentColors.length == 0) {
      this.currentColors.push(e);
    } else {
      if (!this.currentColors.includes(e)) {
        this.currentColors.push(e)
      } else {
        this.currentColors = this.currentColors.filter(item => item !== e);
      }
    } this.variantCheck();
  }

  variantCheck() {
    this.currentVariants = [];
    if (this.currentColors.length > 0 && this.currentSizes.length == 0) {
      for (let i = 0; i < this.currentColors.length; i++) {
        this.currentVariants.push({ color: this.currentColors[i] });
        this.productColor = this.currentColors[i];
        console.log(this.productColor, 'productcolor');

      }
    } else if (this.currentSizes.length > 0 && this.currentColors.length == 0) {
      for (let i = 0; i < this.currentSizes.length; i++) {
        this.currentVariants.push({ size: this.currentSizes[i] });
      }
    } else {
      for (let i = 0; i < this.currentSizes.length; i++) {
        for (let j = 0; j < this.currentColors.length; j++) {
          this.currentVariants.push({ size: this.currentSizes[i], color: this.currentColors[j] });
        }
      }
    }
    this.variantForm();
    console.log(this.currentSizes, 'currSizes');
    console.log(this.currentColors, 'currColors');
    console.log(this.currentVariants, 'currVar');

    // this.currentColors.map((res:any)=>{
    //   console.log(res);
    //   // const variants = this.productForm.get('variants') as FormArray;
    //   const variants = this.productForm.get('variants') as FormArray;
    //   // variants.at(0).patchValue({
    //   //   variant: res
    //   // });
    //   // variants.controls.forEach(control => {
    //   //   control.patchValue({
    //   //     variant: res   
    //   //   });
    //   // });

    // })

    // const variants = this.productForm.get('variants') as FormArray;
    // variants.controls.forEach((control, index) => {
    //   control.patchValue({
    //     variant: this.currentColors[index],
    //   });
    // });
    const userArray = this.productForm.get('variants') as FormArray;
    this.currentVariants.map((user, index) => {
      console.log(user);

      const userGroup = userArray.at(index) as FormGroup;
      console.log(userGroup);

      userGroup.patchValue({
        variant: user.color == undefined ? user.size : user.size == undefined ? user.color : `${user.color} - ${user.size}`
      });
    });

  }
  newvariants(): FormGroup {
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
  variantForm() {
    const variants = this.productForm.get('variants') as FormArray;
    variants.clear();
    for (let i = 0; i < this.currentVariants.length; i++) {
      this.getVarinatsForm().push(this.newvariants());
    }
  }

  // selectImg(event: Event) {
  //   const file = (event.target as HTMLInputElement).files![0];
  //   console.log(file);

  //   const imageArray = this.productForm.get('product_image') as FormArray;
  //   const newImageGroup = this.fb.group({
  //     image: [''],

  //   });
  //   imageArray.push(newImageGroup);

  //   imageArray.controls.forEach((control, index) => {
  //     const imageGroup = control as FormGroup;
  //     imageGroup.patchValue({
  //       image: file
  //     });
  //     imageGroup.get('image')?.updateValueAndValidity();
  //   });
  // }


  // selectImg(event: Event) {
  //   const file = (event.target as HTMLInputElement).files![0];
  //   console.log(file);

  //   const productImage = this.productForm.get('product_image') as FormGroup;
  //   const imagesArray = productImage.get('images') as FormArray;

  //   imagesArray.controls.forEach((control, index) => {
  //     control.patchValue({
  //       image: file
  //     });
  //   });

  //   imagesArray.updateValueAndValidity();
  // }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    const productImage = this.productForm.get('product_image') as FormArray;
    const imagesarray = productImage.at(0) as FormGroup;
    imagesarray.patchValue({
      image: file
    });
    imagesarray.get('image')?.updateValueAndValidity();
  }

  onImageSelected(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files![0];
    const imageGroup = (this.productForm.get('product_image') as FormArray).at(index) as FormGroup;
    imageGroup.patchValue({
      image: file
    });
    imageGroup.get('file')?.updateValueAndValidity();
  }

  // base 64 
  // onImageSelected(event: Event, index: number) {
  //   const file = (event.target as HTMLInputElement).files![0];
  //   const reader = new FileReader();
  //   const imageGroup = (this.productForm.get('product_image') as FormArray).at(index) as FormGroup;
  
  //   reader.onload = () => {
  //     imageGroup.patchValue({
  //       image: reader.result as string
  //     });
  //   };
  
  //   reader.readAsDataURL(file);
  //   imageGroup.get('file')?.updateValueAndValidity();
  // }

}
