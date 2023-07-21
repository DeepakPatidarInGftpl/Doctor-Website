import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-features',
  templateUrl: './footer-features.component.html',
  styleUrls: ['./footer-features.component.scss']
})
export class FooterFeaturesComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  FooterFeaturesForm!: FormGroup;
  get f() {
    return this.FooterFeaturesForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {

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
        this.websiteService.deleteFooterFeature(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Footer Features Deleted successfully") {
            this.tableData
            this.ngOnInit();
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
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
      text: "Do you want to Deactivate this footer!",
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
        this.websiteService.footerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Footer Features Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Footer Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this footer!",
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
        this.websiteService.footerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Footer Features Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Footer Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd:any
  isEdit:any;
  isDelete:any;
  ngOnInit(): void {
    this.FooterFeaturesForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })


    this.websiteService.getFooterFeature().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'website'  && res.content_type.model === 'footerfeatures' && res.codename=='add_footerfeatures') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
          
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footerfeatures' && res.codename=='change_footerfeatures') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
          
        }else if (res.content_type.app_label === 'website' && res.content_type.model === 'footerfeatures' && res.codename=='delete_footerfeatures') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
          
        }
      });
    } 
  }
  //select table row
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
    this.websiteService.deletesize(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Footer Features Deleted successfully") {
        window.location.reload()
      }
    })
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
    this.FooterFeaturesForm.patchValue({
      image: file
    })
    this.FooterFeaturesForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders = false;
  submit() {
    console.log(this.FooterFeaturesForm.value);
    console.log(this.id);
    var formdata: any = new FormData()

    formdata.append('title', this.FooterFeaturesForm.get('title')?.value);
    formdata.append('image', this.FooterFeaturesForm.get('image')?.value);

    if (this.FooterFeaturesForm.valid) {
      this.loaders = true;
      this.websiteService.addFooterFeature(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.url=''
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.FooterFeaturesForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }
        else{
          this.url='';
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.FooterFeaturesForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.FooterFeaturesForm.valid) {
      this.loaders = true;
      var formdata: any = new FormData()

      formdata.append('title', this.FooterFeaturesForm.get('title')?.value);
      // formdata.append('image', this.FooterFeaturesForm.get('image')?.value);

      const imageFile = this.FooterFeaturesForm.get('image')?.value;
      if (imageFile && imageFile instanceof File) {
        formdata.append('image', imageFile);
        this.websiteService.updateFooterFeature(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Footer Features Updated Sucessfully") {
            this.loaders = false;
            this.updateData = '';
            this.toastr.success(this.addRes.msg)
            this.FooterFeaturesForm.reset()
            this.addForm = true
            // window.location.reload()
            this.ngOnInit()
          }
        }, err => {
          console.log(err.error.gst);
        })
      } else {
        this.websiteService.updateFooterFeature(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Footer Features Updated Sucessfully") {
            this.updateData = '';
            this.loaders = false;
            this.toastr.success(this.addRes.msg)
            this.FooterFeaturesForm.reset()
            this.addForm = true
            // window.location.reload()
            this.ngOnInit()
          }
        }, err => {
          console.log(err.error.gst);
        })
      }
    } else {
      this.FooterFeaturesForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.FooterFeaturesForm.get('title')
  }
  get image() {
    return this.FooterFeaturesForm.get('image')
  }

  addForm = true
  id: any
  editFormdata: any;
  resData: any;
  updateData: any;
  editForm(id: number) {
    this.id = id;
    this.url='';
    this.websiteService.getFooterFeatureById(id).subscribe(res => {
      this.resData = res
      this.resData.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm = false;
          this.updateData = data;
          this.FooterFeaturesForm.patchValue({
            title: data.title,
            // image: data.image
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.FooterFeaturesForm.reset();
    this.updateData='';
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
      })
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

}
