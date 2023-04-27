import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';
import { MatTabGroup } from '@angular/material/tabs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  @ViewChild('tabGroups') tabGroup: MatTabGroup;

  selectTab(index: number) {
    this.tabGroup.selectedIndex = index;
  }
  productNamme: any
  productForm!: FormGroup;

  public measurable: boolean = false;
  get f() {
    return this.productForm.controls;
  }
  colors: any = [];
  // variants: any = [];
  sizes: any = [];
  colorTitle: any = [];
  sizeTitle: any = [];
  updatedVariants: any;
  updateImages: any;
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
    private toastr: ToastrService, private Aroute: ActivatedRoute, private location: Location) { }
  id: any
  dat: any
  editRes: any;
  imgUrl = 'https://pv.greatfuturetechno.com';
  ngOnInit(): void {
    this.editor = new Editor();

    this.id = this.Aroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      subcategory_group: new FormControl('', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      color: new FormArray([], [Validators.required]),
      // color: new FormControl('', [Validators.required]),
      size: new FormArray([], [Validators.required]),
      // size: new FormControl('', [Validators.required]),
      product_store: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      purchase_tax_including: new FormControl(''),
      is_measurable: new FormControl(''),
      sales_tax_including: new FormControl(''),
      is_active: new FormControl(''),
      // tax_slab: new FormControl(''),
      description: new FormControl(''),
      // hsncode: new FormControl(''),

      product_features: this.fb.array([]),
      variant_product: this.fb.array([]),
      product_images: this.fb.array([])
    })

    this.coreService.getProductById(this.id).subscribe(res => {

      if (this.id == res.id) {
        this.editRes = res
        // this.colors = res.color
        this.colors = res.color.map((res: any) => res.id);
        // console.log(this.colors, 'thiscolors');
        this.sizes = res.size.map((res: any) => res.id)
        this.colorTitle = res.color.map((res: any) => res.title)
        this.sizeTitle = res.size.map((res: any) => res.title)
        // console.log(this.variants, 'thisSize');
        this.productForm.patchValue({
          title: res.title,
          description: res.description,
          product_store: res.product_store,
          style_code: res.style_code,
          is_measurable: res.is_measurable,
          purchase_tax_including: res.purchase_tax_including,
          sale_tax_including: res.sale_tax_including,
          is_active: res.is_active,
          category: res.category.id,
          subcategory_group: res.subcategory_group.id,
          subcategory: res.subcategory.id,
          brand: res.brand.id,
          unit: res.unit.id,
          sales_tax_including: res.sales_tax_including
        })
        // this.productForm.setControl('product_features', this.udateFeature(this.editRes?.product_feature_product));
        // this.productForm.setControl('product_images', this.updateImage(this.editRes?.product_images));

        // Patch the `product_features` form array
        const productFeaturesFormArray = this.productForm.get('product_features') as FormArray;
        productFeaturesFormArray.clear(); // Remove existing form groups
        res.product_feature_product.forEach((feature: any) => {
          const featureFormGroup = this.fb.group({
            feature_group: feature.feature_group,
            feature: feature.feature.id
          });
          productFeaturesFormArray.push(featureFormGroup); // Add new form group to form array
        });

        // Patch the `product_images` form array
        const productImagesFormArray = this.productForm.get('product_images') as FormArray;
        productImagesFormArray.clear(); // Remove existing form groups
        res.product_images.forEach((image: any) => {
          const imageFormGroup = this.fb.group({
            product_colour: image.product_colour,
            image: image.image
          });
          productImagesFormArray.push(imageFormGroup); // Add new form group to form array
        });

        this.getSubcategoryGroupByCategory(res.category.id);
        this.oncheck(res.subcategory_group.id);
        this.checkSubact(res.subcategory.id);

        console.log(this.editRes.variant_product);
        console.log(this.colorTitle, 'colorarray ');
        console.log(this.sizeTitle, 'sizearray');
        this.updatedVariants = this.editRes.variant_product
        this.variantLive();
        if (this.editRes.product_images) {
       
            this.updateImages = this.editRes.product_images;
            console.log(this.updateImages);
         
        }


      }
    })

    // add form
    // this.addFeature();
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

    this.getUnit()
    this.getUnitConversion()
    this.getTaxSlab()
    this.getFeatureData()
    this.getFeatureGroup()


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
  udateFeature(add: any): FormArray {
    console.log(add);
    let formarr = new FormArray([]);
    add.forEach((j: any) => {
      formarr.push(this.fb.group({
        feature_group: j.feature_group,
        feature: j.feature.title,
      }))
    })
    return formarr
  }
  updateImage(add: any): FormArray {
    let formArr = new FormArray([]);
    add.forEach((i: any) => {
      formArr.push(this.fb.group({
        product_colour: i.product_colour,
        image: i.image
      }))
    })
    return formArr;
  }

  // udateVariant(add: any): FormArray {
  //   console.log(add);
  //   let formarr = new FormArray([]);
  //   add.forEach((k: any) => {
  //     formarr.push(this.fb.group({
  //       id:k.id,
  //     product_title: k.product_title,
  //     variant_name: k.variant_name,
  //     mrp: k.mrp,
  //     cost_price:k.cost_price,
  //     selling_price: k.selling_price,
  //     stock:k.stock,
  //     minimum_stock_threshold: k.minimum_stock_threshold,
  //     selling_price_dealer: k.selling_price_dealer,
  //     selling_price_employee: k.selling_price_employee,
  //     // barcode: k.barcode,
  //     sku: k.sku,
  //     max_order_quantity: k.max_order_quantity,
  //     }))
  //   })
  //   return formarr
  // }

  features(): FormGroup {
    return this.fb.group({
      feature_group: (''),
      feature: (''),
    });
  }

  getFeature(): FormArray {
    return this.productForm.get('product_features') as FormArray;
  }
  addFeature() {
    this.getFeature().push(this.features())
  }
  removeAmount(i: any) {
    this.getFeature().removeAt(i)
  }

  variants(): FormGroup {
    return this.fb.group({
      id: (''),
      product_title: (''),
      variant_name: (''),
      mrp: (''),
      cost_price: (''),
      // selling_price: (''),
      selling_price_online: (''),
      selling_price_offline: (''),
      stock: (''),
      minimum_stock_threshold: (''),
      selling_price_dealer: (''),
      selling_price_employee: (''),
      // barcode: (''),
      sku: (''),
      max_order_quantity: (''),

    })
  }

  getVarinatsForm(): FormArray {
    return this.productForm.get('variant_product') as FormArray;
  }
  addVariant() {
    this.getVarinatsForm().push(this.variants())
  }
  removeVariant(k: any) {
    this.getVarinatsForm().removeAt(k)
  }

  productImage(): FormGroup {
    return this.fb.group({
      product_colour: (''),
      image: ('')
    })
  }
  getproductImage(): FormArray {
    return this.productForm.get('product_images') as FormArray;
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
  subcatGroupByCategory: any;
  getSubcategoryGroupByCategory(val: any) {
    this.coreService.getSubcatGraoupByCategory(val).subscribe(res => {
      this.subcatGroupByCategory = res;
    })
  }
  taxSlabList: any
  getTaxSlab() {
    this.coreService.getTaxSlab().subscribe(res => {
      this.taxSlabList = res
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
  // varantList: any
  // getVariant() {
  //   this.coreService.getVariantd().subscribe(res => {
  //     this.varantList = res
  //     setTimeout(() => {
  //       this.varantList.map((map: any) => {
  //         console.log(this.variants.includes(map.id));
  //         console.log(map);
  //         if (this.variants.includes(map.id)) {
  //           console.log(map.id, 'mapid');
  //           const formArray: any = this.productForm.get('variant') as FormArray;
  //           formArray.push(new FormControl(map.id));
  //         }
  //       })
  //     }, 2000);
  //   })
  // }
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
  getSubcategoryByCategory(val: any) {
    this.coreService.getSubcategoryByCategory(val).subscribe(res => {
      this.subcatbyCategory = res;
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
  // subcategory wise hsn code
  hsncodeBysubcatList: any;
  getHsncodeBySubcategory(val: any) {
    this.coreService.getHsncodeBySubcategory(val).subscribe(res => {
      console.log(res);
      this.hsncodeBysubcatList = res;
    })
  }

  // subcategory wise tax slab
  taxSlabBysubcatList: any;
  getTaxslabBySubcategory(val: any) {
    this.coreService.getTaxslabBySubcategory(val).subscribe(res => {
      console.log(res);
      this.taxSlabBysubcatList = res;
    })
  }

  // subcategory wise tax slab
  featureGrpBysubcatGroupList: any;
  featureData: any;
  getFeaturegroupBySubcategory(val: any) {
    this.coreService.getFeaturegroupBySubcategoryGroup(val).subscribe(res => {
      console.log(res);
      // this.featureGrpBysubcatGroupList = res;
      // // open feature form 
      // const feature = this.productForm.get('product_features') as FormArray;
      // feature.clear();
      // for (let i = 0; i < this.featureGrpBysubcatGroupList.feature_group.length; i++) {
      //   this.addFeature();
      // }
      // this.featureGrpBysubcatGroupList.feature_group.forEach((res, index) => {
      //   console.log(res);
      //   const imageGroup = (this.productForm.get('product_features') as FormArray).at(index) as FormGroup;
      //   imageGroup.patchValue({
      //     feature_group: res.id
      //   });
      // })
    })
  }

  subcatbySubCategoryGroup: any
  getSubcategoryBySubcategoryGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      this.subcatbySubCategoryGroup = res.subcategories;
    })
  }
  // open feature or subact after select subcatGroup 
  oncheck(val: any) {
    this.getSubcategoryBySubcategoryGroup(val)
    this.getFeaturegroupBySubcategory(val);
    // this.getHsncodeBySubcategory(val)
  }
  // open hsn or taxslab or brand after select subcat
  checkSubact(val: any) {
    this.selectBrand(val);
    // this.getTaxslabBySubcategory(val);
    // this.getHsncodeBySubcategory(val);
  }

  check: any;
  checkcolor: any;
  selectedColor = 0;
  onCheckColor(event: any, title: any) {
    console.log(title);
    const formArray: any = this.productForm.get('color') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.checkcolor = formArray;
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
    if (this.colorTitle.length == 0) {
      this.colorTitle.push(title)
      console.log(this.colorTitle);
    } else {
      if (!this.colorTitle.includes(title)) {
        this.colorTitle.push(title)

      } else {
        this.colorTitle = this.colorTitle.filter(item => item !== title)
      }
    }
    console.log(this.colorTitle, 'currentcullor');
    this.variantLive()
  }
  selectedSize = 0;
  onCheckSize(event: any, title) {
    if (this.sizeTitle.length == 0) {
      this.sizeTitle.push(title)
    } else {
      if (!this.sizeTitle.includes(title)) {
        this.sizeTitle.push(title)
      } else {
        this.sizeTitle = this.sizeTitle.filter(item => item !== title)
      }
    }
    let formArray: any = this.productForm.get('size') as FormArray;
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
    console.log(this.sizeTitle, 'currentsizes');
    this.variantLive()
  }

  varantArray: any[] = [];
  variantLive() {
    this.varantArray = [];

    if (this.colorTitle.length > 0 && this.sizeTitle.length == 0) {
      for (let i = 0; i < this.colorTitle.length; i++) {
        this.varantArray.push({ color: this.colorTitle[i] });
        this.productColor = this.colorTitle[i];
        console.log(this.productColor, 'productcolor');
        this.varantArray.push({ color: this.colorTitle[i] });
        this.productColor = this.colorTitle[i];
      }
    } else if (this.sizeTitle.length > 0 && this.colorTitle.length == 0) {
      for (let i = 0; i < this.sizeTitle.length; i++) {
        this.varantArray.push({ size: this.sizeTitle[i] });
      }
    } else {
      for (let i = 0; i < this.sizeTitle.length; i++) {
        for (let j = 0; j < this.colorTitle.length; j++) {
          this.varantArray.push({ size: this.sizeTitle[i], color: this.colorTitle[j] });
        }
      }
    }
    console.log(this.varantArray, 'variantArray hai');
    // add form
    const variants = this.productForm.get('variant_product') as FormArray;
    variants.clear();
    for (let i = 0; i < this.varantArray.length; i++) {
      this.getVarinatsForm().push(this.variants());
    }

    const userArray = this.productForm.get('variant_product') as FormArray;

    this.varantArray.map((user, index) => {
      console.log(user);
      const userGroup = userArray.at(index) as FormGroup;
      console.log(userGroup);
      userGroup.patchValue({
        variant_name: user.color == undefined ? user.size : user.size == undefined ? user.color : `${user.color} - ${user.size}`
      });
    });
    // display updated value
    console.log(this.updatedVariants);
    this.updatedVariants.map((user, index) => {
      console.log(user, 'variiant user data');
      const variantGroup = userArray.at(index) as FormGroup;
      // console.log(variantGroup);
      variantGroup.patchValue({
        product_title: user.product_title,
        variant_name: user.variant_name,
        mrp: user.mrp,
        cost_price: user.cost_price,
        selling_price: user.selling_price,
        stock: user.stock,
        minimum_stock_threshold: user.minimum_stock_threshold,
        selling_price_dealer: user.selling_price_dealer,
        selling_price_employee: user.selling_price_employee,
        // barcode: k.barcode,
        sku: user.sku,
        max_order_quantity: user.max_order_quantity,
      });
    });
  }

  selectedVariant = 0;
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
    // formdata.append('features_subcategory', this.productForm.get('features_subcategory')?.value);
    formdata.append('subcategory_group', this.productForm.get('subcategory_group')?.value);
    formdata.append('unit', this.productForm.get('unit')?.value);
    // formdata.append('hsncode', this.productForm.get('hsncode')?.value);
    formdata.append('description', this.productForm.get('description')?.value);
    formdata.append('product_store', this.productForm.get('product_store')?.value);
    formdata.append('color', JSON.stringify(this.productForm.get('color')?.value));
    formdata.append('size', JSON.stringify(this.productForm.get('size')?.value));
    // formdata.append('tax_slab', this.productForm.get('tax_slab')?.value);
    // formdata.append('style_code', this.productForm.get('style_code')?.value);
    formdata.append('is_measurable', this.productForm.get('is_measurable')?.value);
    formdata.append('purchase_tax_including', this.productForm.get('purchase_tax_including')?.value);
    formdata.append('sales_tax_including', this.productForm.get('sales_tax_including')?.value);
    formdata.append('is_active', this.productForm.get('is_active')?.value);

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

    const variantsArray = this.productForm.get('variant_product') as FormArray;
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
    formdata.append('variant_product', JSON.stringify(variantsData));

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

    const featuresArray = this.productForm.get('product_features') as FormArray;
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
    formdata.append('product_features', JSON.stringify(featuresData));

    // product image
    const product_imageArray = this.productForm.get('product_images') as FormArray;
    product_imageArray.controls.forEach((product_image) => {
      const product_imageGroup = product_image as FormGroup;
      Object.keys(product_imageGroup.controls).forEach((key) => {
        const control = product_imageGroup.controls[key];
        // formdata.append(`product_image[${product_imageArray.controls.indexOf(product_image)}].[${key}]`, control.value);
        formdata.append(`product_images[${product_imageArray.controls.indexOf(product_image)}].${key}`, control.value);
      });
    });

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
  get style_code() {
    return this.productForm.get('style_code')
  }
  get is_measurable() {
    return this.productForm.get('is_measurable')
  }
  get tax_slab() {
    return this.productForm.get('tax_slab')
  }
  get hsn_code() {
    return this.productForm.get('hsncode')
  }

  currentSizes: any = [];
  currentColors: any = [];
  currentVariants: any = [];
  productColor: any;
  liveColor: any[] = [];
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
        this.currentVariants.push({ color: this.currentColors[i] });
        this.productColor = this.currentColors[i];
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

    const userArray = this.productForm.get('variant_product') as FormArray;
    this.currentVariants.map((user, index) => {
      console.log(user);
      const userGroup = userArray.at(index) as FormGroup;
      console.log(userGroup);
      userGroup.patchValue({
        variant_name: user.color == undefined ? user.size : user.size == undefined ? user.color : `${user.color} - ${user.size}`
      });
    });
  }

  variantForm() {
    const variants = this.productForm.get('variant_product') as FormArray;
    variants.clear();
    for (let i = 0; i < this.currentVariants.length; i++) {
      this.getVarinatsForm().push(this.variants());
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

  url: any[] = [];
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    const productImage = this.productForm.get('product_images') as FormArray;
    const imagesarray = productImage.at(0) as FormGroup;
    imagesarray.patchValue({
      image: file
    });
    imagesarray.get('image')?.updateValueAndValidity();
  }
  p_img: any[] = []
  Show = true;
  onImageSelected(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    if (file) {
      this.Show = false;
      this.p_img[index];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url[index] = reader.result as string;
      };
    }
    const imageGroup = (this.productForm.get('product_images') as FormArray).at(index) as FormGroup;
    reader.onload = () => {
      const imageValue = reader.result.toString().split(',')[1];
      imageGroup.patchValue({
        image: imageValue
      });
    };
    reader.readAsDataURL(file);
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

  goBack() {
    this.location.back();
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  // variant calculation 

  coastPriceError: any;
  variantProducts: { mrp: number, coastPrice: number, sellingPrice: number, sellingPriceOffline: number, dealerPrice: number, employeePrice: number }[] = [];
  price(index: number) {
    const mrp = this.getVarinatsForm().at(index).get('mrp').value;
    let discount: number;
    if (mrp >= 100) {
      discount = (mrp * 10) / 100;
    } else if (mrp >= 1000) {
      discount = (mrp * 20) / 100;
    } else if (mrp >= 5000) {
      discount = (mrp * 30) / 100;
    } else if (mrp >= 10000) {
      discount = (mrp * 50) / 100;
    } else if (mrp >= 20000) {
      discount = (mrp * 40) / 100;
    } else {
      discount = 0;
    }
    // price calculation
    // price calculation
    const coastPrice = mrp - discount;
    if (coastPrice > mrp) {
      this.coastPriceError = 'Coast price less than Mrp price';
      setTimeout(() => {
        this.coastPriceError = '';
      }, 3000);
    }
    const sellingPrice = mrp;
    const dealerPrice = mrp - discount;
    const employeePrice = mrp;
    const sellingPriceOffline = mrp;
    this.variantProducts[index] = { mrp, coastPrice, sellingPrice, sellingPriceOffline, dealerPrice, employeePrice };

  }
  // get price 
  getMrp(index: number): number {
    return this.variantProducts[index]?.mrp || this.updatedVariants[index].mrp;
  }
  getCoastPrice(index: number): number {
    return this.variantProducts[index]?.coastPrice || this.updatedVariants[index].cost_price;
    // return this.variantProducts[index]?.coastPrice || 0;
  }
  getSellingPrice(index: number): number {
    return this.variantProducts[index]?.sellingPrice || this.updatedVariants[index].selling_price_online;
  }
  getSellingPriceOffline(index: number): number {
    return this.variantProducts[index]?.sellingPriceOffline || this.updatedVariants[index].selling_price_offline;
  }
  getDealerPrice(index: number): number {
    return this.variantProducts[index]?.dealerPrice || this.updatedVariants[index].selling_price_dealer;
  }
  getEmployeePrice(index: number): number {
    return this.variantProducts[index]?.employeePrice || this.updatedVariants[index].selling_price_employee;
  }
}
