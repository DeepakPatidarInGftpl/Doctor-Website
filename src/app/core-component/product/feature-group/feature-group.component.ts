import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
        this.coreService.deleteFuature_group(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "FeatureGroup Deleted successfully") {
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

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this feature group!",
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
       this.coreService.featureGroupIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FeatureGroup Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Feature Group Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this feature group!",
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
       this.coreService.featureGroupIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FeatureGroup Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Feature Group Is Active Successfully.',
       });
     }
   });
 }
  ngOnInit(): void {
    this.featureForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      feature:new FormArray([], [Validators.required]),
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
    // this.coreService.getFuature_group();
    // // this.tableData = this.QueryService.fuature_groupList;
    // // console.log(this.tableData);
    // this.coreService.featureGroupBehavior.subscribe(() => {
    //   if (localStorage.getItem('fuature_groupList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("fuature_groupList")!))
    //   }
    // })
    this.coreService.getFuature_groupD().subscribe(res=>{
      this.tableData=res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getFeature();
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
      if (this.delRes.msg == "FeatureGroup Deleted successfully") {
        window.location.reload()
      }

    })
  }

  featureList:any;

  features: any = [];

  getFeature(){
    this.coreService.getfeature().subscribe(res=>{
      this.featureList=res;
      console.log(this.featureList);
      
      if(!this.addForm){
 
        this.featureList.map((map:any)=>{
          console.log(map);
          
          console.log(this.features.includes(map.id));
          
          if(this.features.includes(map.id)){
            let formArray:any=this.featureForm.get('feature') as FormArray;
            formArray.push(new FormControl(map.id))
          }
        })
      }
    })
  }

  
  check: any
  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.featureForm.get('feature') as FormArray;
    /* Selected */
    if (event.target.checked) {
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubcat++;
    }
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubcat--;
          return;
        }
        i++;
      });
    }
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

  var formData: any = new FormData();
  formData.append("title",this.featureForm.get('title')?.value);
  formData.append('feature', JSON.stringify(this.featureForm.get('feature')?.value));

  if (this.featureForm.valid) {
  
    this.coreService.addFuature_group(formData).subscribe(res => {
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
  var formData: any = new FormData();
  formData.append("title",this.featureForm.get('title')?.value);
  formData.append('feature', JSON.stringify(this.featureForm.get('feature')?.value));

  if (this.featureForm.valid) {
    this.coreService.updateFuature_group(formData, this.id).subscribe(res => {
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
 get feature(){
  return this.featureForm.get('feature');
 }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getFuature_groupById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.getFeature()
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
     //dropdown auto close stop
     onLabelClick(event: Event) {
      // Prevent the event from propagating to the dropdown menu
      event.stopPropagation();
    }
}
