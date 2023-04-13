import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-slabs',
  templateUrl: './tax-slabs.component.html',
  styleUrls: ['./tax-slabs.component.scss']
})
export class TaxSlabsComponent implements OnInit {

  taxSlabForm!: FormGroup;
  get f() {
    return this.taxSlabForm.controls;
  }
  constructor(private fb: FormBuilder, private coreService: CoreService) { }

  p: number = 1
  pageSize: number = 10;
  tableData:any=[
    {id:1,subcatg:'Shirt',subcat:'Top',amount: [{from:50,to:100,tax:5},{from:100,to:200,tax:5}]},
    {id:1,subcatg:'Paint',subcat:'shirt',amount: [{from:500,to:1000,tax:5},{from:1000,to:2000,tax:5}]},
  ]
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
        this.coreService.deleteProductSubcategory(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Product Subcategory Deleted successfully") {
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
    this.taxSlabForm = this.fb.group({
      subcategory_group: new FormControl('', [Validators.required]),
      subcategory: new FormArray([], [Validators.required]),
      amount: this.fb.array([])
    })
    this.addAmount()
    this.getSubcateGroup()
    this.getTax();
  }
  initChecked: boolean = false
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

  amount(): FormGroup {
    return this.fb.group({
      from_amount: (''),
      to_amount: (''),
      tax: ('')
    });
    
  }
  getAmount(): FormArray {
    return this.taxSlabForm.get('amount') as FormArray;
  }
  addAmount() {
    this.getAmount().push(this.amount())
  }
  removeAmount(i: any) {
    this.getAmount().removeAt(i)
  }

  get subcategory_group() {
    return this.taxSlabForm.get('subcategory_group')
  }
  get subcategory() {
    return this.taxSlabForm.get('subcategory')
  }
  get tax() {
    return this.taxSlabForm.get('tax')
  }

  subcatGroupList: any
  getSubcateGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      console.log(res);
      this.subcatGroupList = res
    })
  }
  taxList: any;
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      console.log(res);
      this.taxList = res
      console.log(this.taxList);

    })
  }
  subcatbySubcatGroup: any;
  selectSubcat: any = [];
  getSubcategoryBySubcatGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      console.log(res.subcategories);
      this.subcatbySubcatGroup = res.subcategories;

      setTimeout(() => {
        this.subcatbySubcatGroup.map((map: any) => {
          console.log(this.selectSubcat.includes(map.id), 'subcategory');
          if (this.selectSubcat.includes(map.id)) {

            const formArray = this.taxSlabForm.get('subcategory') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 2000);
    })
  }

  check: any
  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.taxSlabForm.get('subcategory') as FormArray;

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
  submit() {
    console.log(this.taxSlabForm.value);

  }


  // pagination
  
  titlee:any;
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
