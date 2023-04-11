import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-static-pages',
  templateUrl: './static-pages.component.html',
  styleUrls: ['./static-pages.component.scss']
})
export class StaticPagesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  staticPgForm!: FormGroup;
  get f() {
    return this.staticPgForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.QueryService.filterToggle();
  }

  delRes: any
  confirmText(index: any, slug: any) {
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
        this.coreService.deleteStaticPage(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deleted successfully") {
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
    this.staticPgForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      slug: new FormControl('', [Validators.required]),   
      description:new FormControl('',[Validators.required])
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
    // this.coreService.getStaicPages();
    // // this.tableData = this.QueryService.colorsList;
    // // console.log(this.tableData);

    // this.coreService.StaticPageBehaveSub.subscribe(() => {
    //   if (localStorage.getItem('staticPages')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("staticPages")!))
    //     console.log(this.tableData);   
    //   }
    // })
  this.coreService.getStaicPages().subscribe(res=>{
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
  
  
 submit() {
  console.log(this.staticPgForm.value);
  console.log(this.id);

  if (this.staticPgForm.valid) {
    this.coreService.addcolor(this.staticPgForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.toastr.success(this.addRes.msg)
        this.staticPgForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
    
    
  } else {
    this.staticPgForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.staticPgForm.valid) {
    this.coreService.updatecolor(this.staticPgForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Colour updated successfully") {
        this.toastr.success(this.addRes.msg)
        this.staticPgForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
   
  } else {
    this.staticPgForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get title() {
    return this.staticPgForm.get('title')
  }
  get slug() {
    return this.staticPgForm.get('slug')
  }
  get description(){
    return this.staticPgForm.get('description')
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
          this.staticPgForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.staticPgForm.reset();
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
