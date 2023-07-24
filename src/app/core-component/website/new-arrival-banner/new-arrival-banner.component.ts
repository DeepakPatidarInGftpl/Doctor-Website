import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';

@Component({
  selector: 'app-new-arrival-banner',
  templateUrl: './new-arrival-banner.component.html',
  styleUrls: ['./new-arrival-banner.component.scss']
})
export class NewArrivalBannerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any
  imgUrl = 'https://pv.greatfuturetechno.com';
  bannerForm!: FormGroup;
  get f() {
    return this.bannerForm.controls;
  }

    //editor 
    editordoc = jsonDoc;
    editor: Editor | any;
    toolbar: Toolbar = [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['code', 'blockquote'],
      ['ordered_list', 'bullet_list'],
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      // ['link', 'image'],
      // ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
  titlee: any;
  p: number = 1
  pageSize: number = 5;

  itemsPerPage = 5;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService,) {
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
        this.websiteService.deletenewArrivalBanner(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "About Footer Banner Deleted successfully") {
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
      text: "Do you want to Deactivate this new arrival banner!",
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
        this.websiteService.newArrivalBannerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "New Arrival Banner Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'New Arrival Banner Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this New Arrival Banner!",
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
        this.websiteService.newArrivalBannerIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "New Arrival Banner active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'New Arrival Banner Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  ngOnInit(): void {
    this.editor = new Editor();
    this.bannerForm = this.fb.group({
      image: new FormControl(''),
      title1: new FormControl('', [Validators.required]),
      title2: new FormControl('', [Validators.required]),
      design: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      short_description: new FormControl('', [Validators.required]),
    })
   
    this.websiteService.getnewArrivalBanner().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'website'  && res.content_type.model === 'newarrivalsbanner' && res.codename=='add_newarrivalsbanner') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'newarrivalsbanner' && res.codename=='change_newarrivalsbanner') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'website' && res.content_type.model === 'newarrivalsbanner' && res.codename=='delete_newarrivalsbanner') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }
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
url:any;
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
    this.bannerForm.patchValue({
      image: file
    })
    this.bannerForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders = false;
  imgError:any;
  submit() {
    console.log(this.bannerForm.value);
    if (this.bannerForm.valid) {
      console.log('valid');
      this.loaders = true;
      var formdata: any = new FormData()
      formdata.append('title1', this.bannerForm.get('title1')?.value);
      formdata.append('title2', this.bannerForm.get('title2')?.value);
      formdata.append('design', this.bannerForm.get('design')?.value);
      formdata.append('short_description', this.bannerForm.get('short_description')?.value);
      formdata.append('image', this.bannerForm.get('image')?.value);
      this.websiteService.addnewArrivalBanner(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "NEW ARRIVALS BANNER CREATED SUCESSFULLY") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.bannerForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }else{
          this.loaders=false;
        }
      }, err => {
        console.log(err.error);
        this.loaders=false;
        this.imgError=err.error.image;
        setTimeout(() => {
          this.imgError=''
        }, 5000);
      })
    } else {
      this.bannerForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.id);
    if (this.bannerForm.valid) {
      this.loaders=true;
      var formdata: any = new FormData()
      formdata.append('title1', this.bannerForm.get('title1')?.value);
      formdata.append('title2', this.bannerForm.get('title2')?.value);
      formdata.append('design', this.bannerForm.get('design')?.value);
      formdata.append('short_description', this.bannerForm.get('short_description')?.value);
      // formdata.append('image', this.bannerForm.get('image')?.value);
      const imageFile = this.bannerForm.get('image')?.value;
      if (imageFile && imageFile instanceof File) {
        formdata.append('image', imageFile);
        this.websiteService.updatenewArrivalBanner(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "New Arrivals Banner Updated Sucessfully") {
            this.loaders=false;
            this.updateData=''
            this.toastr.success(this.addRes.msg)
            this.bannerForm.reset()
            this.addForm = true;
            // window.location.reload()
            this.ngOnInit()
          }else{
            this.loaders=false;
          }
        }, err => {
          console.log(err.error);
          this.loaders=false;
          this.imgError=err.error.image;
          setTimeout(() => {
            this.imgError=''
          }, 5000);
        })
      }else{
        this.websiteService.updatenewArrivalBanner(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "New Arrivals Banner Updated Sucessfully") {
            this.loaders=false;
            this.updateData=''
            this.toastr.success(this.addRes.msg)
            this.bannerForm.reset()
            this.addForm = true;
            // window.location.reload()
            this.ngOnInit()
          }else{
            this.loaders=false;
          }
        }, err => {
          console.log(err.error);
          this.loaders=false;
          this.imgError=err.error.image;
          setTimeout(() => {
            this.imgError=''
          }, 5000);
        })
      }
  

    } else {
      this.bannerForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get image() {
    return this.bannerForm.get('image')
  }
  get title1() {
    return this.bannerForm.get('title1')
  }
  get title2() {
    return this.bannerForm.get('title2')
  }
  get description() {
    return this.bannerForm.get('short_description')
  }
  get design() {
    return this.bannerForm.get('design')
  }
  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  updateData:any;
  editForm(id: number) {
    this.id = id;
    this.url=''
    this.websiteService.getnewArrivalBannerById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
      this.resEdit.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          console.log(data);
          this.updateData=data;
          this.addForm = false
          this.bannerForm.patchValue({
            title1:data.title1,
            title2:data.title2,
            short_description:data.short_description,
            design:data.design
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.updateData=''
    this.addForm = true;
    this.bannerForm.reset();
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title1.toLocaleLowerCase());
        console.log(res.title1.match(this.titlee));
        return res.title1.match(this.titlee);
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


