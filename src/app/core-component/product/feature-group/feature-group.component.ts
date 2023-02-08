import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss']
})
export class FeatureGroupComponent implements OnInit {

 
   
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  featureForm!: FormGroup;
  get f() {
    return this.featureForm.controls;
  }
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
        this.coreService.deleteFuature_group(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "FeatureGroup Deleted successfully") {
            this.tableData
            window.location.reload()
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
  ngOnInit(): void {
    this.featureForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
    })
    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: "Search...",
        info: "_START_ - _END_ of _TOTAL_ items",
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.wordset');
        $('.dataTables_filter').appendTo('.search-input');
      },

    };
    this.coreService.getFuature_group();
    // this.tableData = this.QueryService.fuature_groupList;
    // console.log(this.tableData);
    this.coreService.featureGroupBehavior.subscribe(() => {
      if (localStorage.getItem('fuature_groupList')) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("fuature_groupList")!))
      }
    })
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
      if (this.delRes.msg == "FeatureGroup Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  // submit() {
  //   console.log(this.featureForm.value);
  //   console.log(this.id);

  //   if (this.featureForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateFuature_group(this.featureForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "FeatureGroup updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.featureForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addFuature_group(this.featureForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "FeatureGroup Successfuly Added") {
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

  
 submit() {
  console.log(this.featureForm.value);
  console.log(this.id);

  if (this.featureForm.valid) {
  
    this.coreService.addFuature_group(this.featureForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "FeatureGroup Successfuly Added") {
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
    this.coreService.updateFuature_group(this.featureForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "FeatureGroup updated successfully") {
        this.toastr.success(this.addRes.msg)
        this.featureForm.reset()
        this.addForm=true
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
 
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getFuature_groupById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm=false
        this.featureForm.patchValue(res);
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.featureForm.reset();
  }

}
