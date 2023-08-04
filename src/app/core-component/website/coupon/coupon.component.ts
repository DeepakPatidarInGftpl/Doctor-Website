import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';


 // vaidation for future date
 function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return { pastDate: true };
    }
    return null;
  };
}


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any
  imgUrl = 'https://pv.greatfuturetechno.com';
  couponForm!: FormGroup;
  get f() {
    return this.couponForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 5;
  itemsPerPage = 5;

  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService,private cs:CompanyService) {
  }

  delRes: any
  confirmText(index: any, id: any) {
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
        this.websiteService.deleteCoupon(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Coupon Deleted successfully") {
            this.tableData
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.ngOnInit();
          }
        })
        Swal.fire({
          icon: 'error',
          title: 'Not Deleted!',
          text: this.delRes.error,
        });
        this.tableData.splice(index, 1);
      }
    });
  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this banner!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.websiteService.bannerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Banner Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Banner Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this banner!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.websiteService.bannerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Banner active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Banner Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  ngOnInit(): void {
    this.couponForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      expiry_date: new FormControl('', [Validators.required, futureDateValidator()]),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/), Validators.required]),
    })
    this.websiteService.getCoupon().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    //permission from ocalstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product'  && res.content_type.model === 'coupon' && res.codename=='add_coupon') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename=='change_coupon') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }
    //     else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename=='delete_coupon') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

       // permission from profile api
       this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission.map((res: any) => {
          if (res.content_type.app_label === 'product'  && res.content_type.model === 'coupon' && res.codename=='add_coupon') {
            this.isAdd = res.codename;
            console.log(this.isAdd);
          } else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename=='change_coupon') {
            this.isEdit = res.codename;
            console.log(this.isEdit);
          }
          else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename=='delete_coupon') {
            this.isDelete = res.codename;
            console.log(this.isDelete);
          }
        });
      });
  }
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
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
  deleteId(id: number) {
    this.websiteService.deleteBanner(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Banner Deleted successfully") {
        window.location.reload()
      }
    })
  }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    this.couponForm.patchValue({
      image: file
    })
    this.couponForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders = false;
  submit() {
    console.log(this.couponForm.value);
    if (this.couponForm.valid) {
      console.log('valid');
      this.loaders = true;
      var formdata: any = new FormData()
      formdata.append('title', this.couponForm.get('title')?.value);
      formdata.append('code', this.couponForm.get('code')?.value);
      formdata.append('expiry_date', this.couponForm.get('expiry_date')?.value);
      formdata.append('discount', this.couponForm.get('discount')?.value);
      this.websiteService.addCoupon(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "COUPON CREATED SUCESSFULLY") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.couponForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }else{
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
        console.log(err.error);
      })
    } else {
      this.couponForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.id);
    if (this.couponForm.valid) {
      this.loaders = true;
      var formdata: any = new FormData()
      formdata.append('title', this.couponForm.get('title')?.value);
      formdata.append('code', this.couponForm.get('code')?.value);
      formdata.append('expiry_date', this.couponForm.get('expiry_date')?.value);
      formdata.append('discount', this.couponForm.get('discount')?.value);
      this.websiteService.updateCoupon(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Coupon Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.couponForm.reset()
          this.addForm = true;
          // window.location.reload()
          this.ngOnInit()
        }else{
          this.loaders=false
        }
      }, err => {
        this.loaders = false;
        console.log(err.error);
      })
    } else {
      this.couponForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get expiry_date() {
    return this.couponForm.get('expiry_date')
  }
  get title() {
    return this.couponForm.get('title')
  }
  get code() {
    return this.couponForm.get('code')
  }
  get discount() {
    return this.couponForm.get('discount')
  }
  addForm = true
  id: any
  editFormdata: any;
  resEdit: any
  editForm(id: number) {
    this.id = id
    this.websiteService.getCouponById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
      this.resEdit.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          console.log(data);
          this.addForm = false
          this.couponForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.couponForm.reset();
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.title.toString().toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
      });
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}
