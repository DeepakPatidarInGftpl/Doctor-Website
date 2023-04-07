import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  unitsForm!: FormGroup;
  get f() {
    return this.unitsForm.controls;
  }

  titlee: any;
  p:number=1
  pageSize: number = 5;
 
  itemsPerPage = 5;

  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
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
        this.coreService.deleteUnits(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Unit Deleted successfully") {
           this.ngOnInit()
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
    this.unitsForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
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

    // this.coreService.getUnits();
    // // this.tableData = this.QueryService.unitList;
    // // console.log(this.tableData);

    // this.coreService.unitBehavior.subscribe(() => {
    //   if (localStorage.getItem('unitList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("unitList")!))
    //   }
    // })
    
    this.coreService.getUnit().subscribe(res=>{
      this.tableData=res;
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
    this.coreService.deleteUnits(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Warehouse Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  addRes: any
  // submit() {
  //   console.log(this.unitsForm.value);
  //   console.log(this.id);
    
  //   if (this.unitsForm.valid) {
  //     if(this.id){
  //       this.coreService.updateUnits(this.unitsForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Unit updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.unitsForm.reset()
  //          window.location.reload()
  // }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }else{
  //     this.coreService.addUnits(this.unitsForm.value).subscribe(res => {
  //       console.log(res);
  //       this.addRes = res
  //       if (this.addRes.msg == "Data Created") {
  //         this.toastr.success(this.addRes.msg)
  //         this.unitsForm.reset()
  //         window.location.reload()
  //       }
  //     }, err => {
  //       console.log(err.error.gst);
  //     })
  //   }
  //   } else {
  //     this.unitsForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  openaddForm() {
    this.addForm = true;
    this.unitsForm.reset();
  }


 submit() {
    console.log(this.unitsForm.value);
    console.log(this.id);

    if (this.unitsForm.valid) {
      this.coreService.addUnits(this.unitsForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.unitsForm.reset()
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.unitsForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update(){
    if (this.unitsForm.valid) {
      this.coreService.updateUnits(this.unitsForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Unit updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.unitsForm.reset()
        //  window.location.reload()
        this.ngOnInit()
}
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.unitsForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  get title() {
    return this.unitsForm.get('title')
  }
addForm=true
id:any
  editForm(id: number) {
    this.id=id
    this.coreService.getUnitsById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.unitsForm.patchValue(data);
          
        }
      })
    })
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

