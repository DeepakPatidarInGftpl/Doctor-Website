import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  colorForm!: FormGroup;
  get f() {
    return this.colorForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 10;
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
        this.coreService.deletecolor(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Colour Deleted successfully") {
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
  ngOnInit(): void {
    this.colorForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      color_code: new FormControl('', [Validators.required]),   
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
   
    // this.coreService.getcolor();
    // // this.tableData = this.QueryService.colorsList;
    // // console.log(this.tableData);

    // this.coreService.colorBehavior.subscribe(() => {
    //   if (localStorage.getItem('colorsList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("colorsList")!))
    //   }
    // })
    this.coreService.getColor().subscribe(res=>{
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
    this.coreService.deletecolor(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Colors Deleted successfully") {
        window.location.reload()
      }
    })
  }

  addRes: any

  // submit() {
  //   console.log(this.colorForm.value);
  //   console.log(this.id);

  //   if (this.colorForm.valid) {
  //     if (this.id) {
  //       this.coreService.updatecolor(this.colorForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Colour updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.colorForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addcolor(this.colorForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.colorForm.reset()
  //           window.location.reload();
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.colorForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  
 submit() {
  console.log(this.colorForm.value);
  console.log(this.id);

  if (this.colorForm.valid) {
    this.coreService.addcolor(this.colorForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.toastr.success(this.addRes.msg)
        this.colorForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })   
  } else {
    this.colorForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.colorForm.valid) {
    this.coreService.updatecolor(this.colorForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Colour updated successfully") {
        this.toastr.success(this.addRes.msg)
        this.colorForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })  
  } else {
    this.colorForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get title() {
    return this.colorForm.get('title')
  }
  get color_code() {
    return this.colorForm.get('color_code')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getcolorById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false;
          this.colorForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.colorForm.reset();
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
