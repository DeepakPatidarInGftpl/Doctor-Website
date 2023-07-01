import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any
  imgUrl = 'https://pv.greatfuturetechno.com';
  bannerForm!: FormGroup;
  get f() {
    return this.bannerForm.controls;
  }

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
        this.websiteService.deleteBanner(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Banner Deleted successfully") {
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
  ngOnInit(): void {
    this.bannerForm = this.fb.group({
      image: new FormControl('',),
      title: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: "Search...",
    //     info: "_START_ - _END_ of _TOTAL_ items",
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.wordset');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },

    // };
    // this.websiteService.gettax();
    // // this.tableData = this.QueryService.taxList;
    // // console.log(this.tableData);
    // this.websiteService.taxBehavior.subscribe(() => {
    //   if (localStorage.getItem('taxList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("taxList")!))
    //   }
    // })
    this.websiteService.getBanner().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
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
  imgurl: any;
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgurl = reader.result as string;
      };
    }
    this.bannerForm.patchValue({
      image: file
    })
    this.bannerForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders = false;
  submit() {
    console.log(this.bannerForm.value);
    if (this.bannerForm.valid) {
      console.log('valid');
      this.loaders = true;
      var formdata: any = new FormData()
      formdata.append('title', this.bannerForm.get('title')?.value);
      formdata.append('url', this.bannerForm.get('url')?.value);
      formdata.append('image', this.bannerForm.get('image')?.value);


      this.websiteService.addBanner(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.bannerForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })

    } else {
      this.bannerForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.id);
  
    if (this.bannerForm.valid) {
      this.loaders = true;
      const formdata: FormData = new FormData();
      formdata.append('title', this.bannerForm.get('title')?.value);
      formdata.append('url', this.bannerForm.get('url')?.value);
  
      const imageFile = this.bannerForm.get('image')?.value;

      if (imageFile && imageFile instanceof File) {
        formdata.append('image', imageFile);
        this.websiteService.updateBanner(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res;
          if (this.addRes.msg == "Banner Updated Sucessfully") {   
            this.loaders = false;
            this.updateData='';
            this.toastr.success(this.addRes.msg);
            this.bannerForm.reset();
            this.addForm = true;
            this.ngOnInit();
          }else{
            this.loader=false;
          }
        }, err => {
          console.log(err.error.gst);
        });
      } else {
      //  formdata.append('image', ''); // Append an empty string for image if not selected
        this.websiteService.updateBanner(formdata, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res;
          if (this.addRes.msg == "Banner Updated Sucessfully") {
            this.loaders = false;
            this.updateData='';
            this.toastr.success(this.addRes.msg);
            this.bannerForm.reset();
            this.addForm = true;
            this.ngOnInit();
          }else{
            this.loader=false;
          }
        }, err => {
          console.log(err.error.gst);
        });
      }
    } else {
      this.bannerForm.markAllAsTouched();
      console.log('forms invalid');
    }
  }
  
  get image() {
    return this.bannerForm.get('image')
  }
  get title() {
    return this.bannerForm.get('title')
  }
  get url() {
    return this.bannerForm.get('url')
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  updateData: any;
  editForm(id: number) {
    this.imgurl=''
    this.id = id
    this.websiteService.getBannerbById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
      this.resEdit.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          console.log(data);
          this.updateData = data;
          this.addForm = false
          this.bannerForm.patchValue({
            title: data.title,
            url: data.url
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.bannerForm.reset();
    this.imgurl='';
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
