import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.scss']
})
export class BrandlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = []

  brandForm!: FormGroup;
  get f() {
    return this.brandForm.controls;
  }

  imgUrl = 'https://pv.greatfuturetechno.com';
  
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
        this.coreService.deletebrand(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Brands Deleted successfully") {
            this.tableData
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

  titlee: any;
p:number=1
pageSize: number = 10;
itemsPerPage:number=10;
  ngOnInit(): void {
    this.brandForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      code: new FormControl(''),
      image: new FormControl('', Validators.required),
      discount: new FormControl('',Validators.pattern(/^[0-9]*$/)),
      subcategory_group: new FormArray<any>([], [Validators.required]),
      subcategory: new FormArray([], [Validators.required]),
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
    // this.coreService.getbrand();
    

    // this.coreService.brandBehavior.subscribe(() => {
    //   if (localStorage.getItem('brandsList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("brandsList")!))
    //   }
    // })
    this.coreService.getBrand().subscribe(res=>{
      this.tableData=res;
    })
    this.getSubcatGroup();
  
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
    this.coreService.deletebrand(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Brands Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  onSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);

    this.brandForm.patchValue({
      image: file
    });

    this.brandForm.get('image')?.updateValueAndValidity()
  }

  subcatGroupList: any

  getSubcatGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      this.subcatGroupList = res;
      if(!this.addForm){
      setTimeout(() => {
        this.subcatGroupList.map((map: any) => {
          console.log(this.subcatGroup.includes(map.id), 'subcategory_group');
          if (this.subcatGroup.includes(map.id)) {
            console.log(map.id);
            
            const formArray = this.brandForm.get('subcategory_group') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 1000);
    }
    })
  }
 
  subcategories:any=[];
 

  subcatbySubcatGroup: any;
  getSubcategoryBySubcatGroup(val:any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      console.log(res.subcategories); 
      this.subcatbySubcatGroup = res.subcategories;

      setTimeout(() => {
        this.subcatbySubcatGroup.map((map: any) => {
          console.log(this.selectSubcat.includes(map.id), 'subcategory');
          if (this.selectSubcat.includes(map.id)) {
     
            const formArray = this.brandForm.get('subcategory') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 2000);
    })
  }


  check: any
  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.brandForm.get('subcategory') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubcat++;
    }
    /* unselected */
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
  selectedSubCatGrp = 0;

  onCheckSize(event: any) {
    const formArray: any = this.brandForm.get('subcategory_group') as FormArray;

    /* Selected */
    if (event.target.checked) {

      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubCatGrp++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {

          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubCatGrp--;
          return;
        }
        i++;
      });
    }
  }
  addRes: any
  // submit() {
  //   console.log(this.brandForm.value);
  //   console.log(this.id);

  //   var formData: any = new FormData();
    
  
  //   formData.append("title",this.brandForm.get('title')?.value);
  //   formData.append("image",this.brandForm.get('image')?.value);
  //   formData.append("code",this.brandForm.get('code')?.value);

  //   console.log(formData);

  //   if (this.brandForm.valid) {
  //     if (this.id) {
  //       this.coreService.updatebrand(formData, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Brands updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.brandForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addbrand(formData).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.brandForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.brandForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }


  submit() {
    console.log(this.brandForm.value);
    console.log(this.id);
    var formData: any = new FormData();

    formData.append("title",this.brandForm.get('title')?.value);
    formData.append("image",this.brandForm.get('image')?.value);
    formData.append("code",this.brandForm.get('code')?.value);
    formData.append("discount",this.brandForm.get('discount')?.value);
    formData.append('subcategory_group', JSON.stringify(this.brandForm.get('subcategory_group')?.value));
    formData.append('subcategory', JSON.stringify(this.brandForm.get('subcategory')?.value));

    if (this.brandForm.valid) {
    
      this.coreService.addbrand(formData).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.brandForm.reset()
          // window.location.reload()
          this.ngOnInit()
          this.selectedSubcat=0;
          this.selectedSubCatGrp=0;
        }
      }, err => {
        console.log(err.error.gst);
      })
      
    } else {
      this.brandForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  show=true;
  hid=false;
  hide(){
this.show=!this.show;

  }
  update(){
    var formData: any = new FormData();
    formData.append("title",this.brandForm.get('title')?.value);
    formData.append("image",this.brandForm.get('image')?.value);
    formData.append("code",this.brandForm.get('code')?.value);
    formData.append("discount",this.brandForm.get('discount')?.value);
    formData.append('subcategory_group', JSON.stringify(this.brandForm.get('subcategory_group')?.value));
    formData.append('subcategory', JSON.stringify(this.brandForm.get('subcategory')?.value));

    if (this.brandForm.valid) {
      this.coreService.updatebrand(formData, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Brands updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.brandForm.reset()
          this.addForm=true
          // window.location.reload()
          this.ngOnInit()
          this.selectedSubcat=0;
          this.selectedSubCatGrp=0;
        }
      }, err => {
        console.log(err.error.gst);
      })
     
    } else {
      this.brandForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.brandForm.get('title')
  }
  get image() {
    return this.brandForm.get('image')
  }
  get code() {
    return this.brandForm.get('code')
  }
  get subcategory_group(){
    return this.brandForm.get('subcategory_group')
  }
  get subcategory(){
    return this.brandForm.get('subcategory');
  }
  get discount(){
    return this.brandForm.get('discount')
  }
  addForm = true
  id: any;
  subcatGroup:any=[];
  selectSubcat:any=[];
subcatId:any;
  editForm(id: number) {
    this.id = id
    this.coreService.getbrandById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        if (id == data.id) {
          console.log(data);
          this.subcatId=data.subcategory_group[0].id
          console.log(this.subcatId);
          
            this.subcatGroup = data.subcategory_group.map((res: any) => res.id);
            this.selectSubcat = data.subcategory.map((res:any)=>res.id);

          // this.brandForm.patchValue(data);
          this.addForm = false
          this.brandForm.patchValue({
            title: data.title,
            code: data.code,
           discount:data.discount
          })
          this.getSubcategoryBySubcatGroup(this.subcatId)
        }
      })
     
    })
    this.getSubcatGroup();
   
  }
  openaddForm() {
    this.addForm = true;
    this.brandForm.reset();
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
