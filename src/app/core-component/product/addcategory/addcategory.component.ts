import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(private CoreServ: CoreService, private toastr: ToastrService, private route: Router) { }

  formaddCateg: FormGroup;
  categoryCtrl = new FormControl('', [Validators.required]);
  categoryList: any;
  allCategoryData: any;
  editImgUrl: any;

  get f() {
    return this.formaddCateg.controls;
  }

  token = localStorage.getItem('token')
  imgUrl = 'https://pv.greatfuturetechno.com';
  editRoute: any;
  @Output() onDataUpdate = new EventEmitter<Date>();
  updateData: any;
  isAdd: any;
  isEdit: any;
  ngOnInit() {
    let ftitle = ''
    let fimage = null
    let fdiscount = ''

    this.getAllCategory();

    this.categoryCtrl.valueChanges.subscribe((res) => {
      console.log(res);
      this._filterBrands(res);
    });

    this.CoreServ.editThings.subscribe((data: any) => {

      this.editRoute = data
      console.log(data);

      this.formaddCateg = new FormGroup({
        title: new FormControl('', [Validators.required]),
        // discount: new FormControl(fdiscount, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
        image: new FormControl('', [Validators.required])
      })
      // console.log(this.formaddCateg);

      if (this.editRoute) {
        ftitle = data?.title,
          this.formaddCateg.get('title').setValue(data?.title);
        this.editImgUrl = data?.image;
        // fdiscount = data.discount
        this.updateData = data;
      }
    })
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename == 'add_productcategory') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename == 'change_productcategory') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }
      });
    }
  }

  private _filterBrands(value: string): any {
    const filterValue = value?.toLowerCase();
    this.categoryList = this.allCategoryData.filter(category => category?.title?.toLowerCase().includes(filterValue));
  }

  url: any;
  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.formaddCateg.patchValue({
      image: file
    });

    this.formaddCateg.get('image')?.updateValueAndValidity()
  }

  getAllCategory() {
    this.CoreServ.getProductCategor().subscribe(res => {
      this.categoryList = res;
      this.allCategoryData = res;
    })
  }

  submitForm() {
    const imageFile = this.formaddCateg.get('image')?.value;
    if (this.editRoute && !imageFile) {
      this.formaddCateg.controls['image'].setValue(this.editImgUrl);
    }
    if (this.formaddCateg.invalid && !this.categoryCtrl.value) {
      this.formaddCateg.markAllAsTouched()
    } else {
      if (this.editRoute) {
        var formData: any = new FormData();
        formData.append("title", this.formaddCateg.get('title')?.value);
        // formData.append("discount", this.formaddCateg.get('discount')?.value);
        // formData.append("image", this.formaddCateg.get('image')?.value);

        const imageFile = this.formaddCateg.get('image')?.value;
        if (imageFile && imageFile instanceof File) {
          formData.append('image', imageFile);
          this.CoreServ.editHttp(formData, this.editRoute.id).subscribe((res: any) => {
            this.toastr.success(res.msg)
            if (res.success) {
              this.formaddCateg.reset();
              this.CoreServ.editThisData('');
              this.onDataUpdate.next(new Date());
              this.updateData = '';
              this.url = '';
              this.ngOnInit();
            }
            // console.log(res);
          })
        } else {
          this.CoreServ.editHttp(formData, this.editRoute.id).subscribe((res: any) => {
            this.toastr.success(res.msg)
            if (res.success) {
              this.formaddCateg.reset();
              this.CoreServ.editThisData('');
              this.onDataUpdate.next(new Date());
              this.updateData = '';
              this.url = '';
              this.ngOnInit();
            }
            // console.log(res);
          })
        }
      } else {
        this.formaddCateg.get('title').setValue(this.categoryCtrl.value);
        var formData: any = new FormData();
        formData.append("title", this.categoryCtrl.value);
        // formData.append("discount", this.formaddCateg.get('discount')?.value);
        formData.append("image", this.formaddCateg.get('image')?.value);
        this.CoreServ.addCategory(formData).subscribe((res: any) => {
          // console.log(res);
          this.toastr.success(res.msg)
          if (res.success) {
            this.formaddCateg.reset();
            this.updateData = '';
            this.url = '';
            this.onDataUpdate.next(new Date());
            this.categoryCtrl.reset();
            this.categoryCtrl.markAsPristine();
            this.ngOnInit();
          }
        })
      }
    }
  }

  get title() {
    return this.formaddCateg.get('title')
  }

  get image() {
    return this.formaddCateg.get('image')
  }
  get discount() {
    return this.formaddCateg.get('discount')
  }
}
