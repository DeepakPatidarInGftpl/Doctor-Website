import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  featureForm!: FormGroup;
  get f() {
    return this.featureForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 5;
 
  itemsPerPage = 5;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,) {
    this.QueryService.filterToggle();
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
        this.coreService.deleteFeature(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Feature Deleted successfully") {
            this.tableData
            this.ngOnInit();
            this.tableData.splice(index, 1);
      
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
      
        // this.tableData.splice(index, 1);
      }
    });
  }

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this feature!",
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
       this.coreService.featureIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Feature Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Feature Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this feature!",
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
       this.coreService.featureIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Feature Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Feature Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
  ngOnInit(): void {
    this.featureForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      // feature_group: new FormControl('', [Validators.required])
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
    // this.coreService.getFeature();
    // // this.tableData = this.QueryService.fuatureList;
    // // console.log(this.tableData);

    // this.coreService.featureBehavior.subscribe(() => {
    //   if (localStorage.getItem('featureList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("featureList")!))
    //   }
    // })
    this.coreService.getfeature().subscribe(res=>{
      this.tableData=res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getFeatureGroup();
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures' && res.codename=='add_productfeatures') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures' && res.codename=='change_productfeatures') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures' && res.codename=='delete_productfeatures') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }
  }

  //select table row
 allSelected: boolean = false;
 selectedRows:boolean[]
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
    this.coreService.deleteFuature_group(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Feature Deleted successfully") {
        this.ngOnInit();
      }

    })
  }
  featureGroup: any
  getFeatureGroup() {
    this.coreService.getFuature_groupD().subscribe(res => {
      this.featureGroup = res
    })
  }
  addRes: any
  // submit() {
  //   console.log(this.featureForm.value);
  //   console.log(this.id);

  //   if (this.featureForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateFeature(this.featureForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Feature updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.featureForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addFeature(this.featureForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Feature Successfuly Added") {
  //           this.toastr.success(this.addRes.msg)
  //           this.featureForm.reset()
  //           window.location.reload();
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.featureForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loaders=false
 submit() {
  console.log(this.featureForm.value);
  console.log(this.id);

  if (this.featureForm.valid) {
    this.loaders=true;
    this.coreService.addFeature(this.featureForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Feature Successfuly Added") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.featureForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.featureForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.featureForm.valid) {
    this.loaders=true;
    this.coreService.updateFeature(this.featureForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Feature updated successfully") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.featureForm.reset()
        this.addForm=true;
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.featureForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get title() {
    return this.featureForm.get('title')
  }
  get feature_group() {
    return this.featureForm.get('feature_group')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getFeatureById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm = false
        this.featureForm.patchValue(res);
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.featureForm.reset();
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
        const nameLower = res.title.toLocaleLowerCase(); 
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

