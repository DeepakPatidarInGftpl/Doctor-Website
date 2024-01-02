import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.scss']
})
export class AddTargetComponent implements OnInit {

  targetForm!: FormGroup;
  get f() {
    return this.targetForm.controls;
  }
  constructor(private fb: FormBuilder, private hrmService: HrmServiceService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.targetForm = this.fb.group({
      department: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      target_value: new FormControl('', [Validators.required]),
      cart: this.fb.array([])
    })
    this.getDepartment();
    // this.addCart()

  }
  cart(): FormGroup {
    return this.fb.group({
      month_and_year: (''),
      percent_of_total_target: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      estimated_sale_value: ('')
    });
  }
  getCart(): FormArray {
    return this.targetForm.get('cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.cart())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }

  onCheck() {
    const startDate = new Date(this.targetForm.get('start_date').value);
    const endDate = new Date(this.targetForm.get('end_date').value);
    const variants = this.targetForm.get('cart') as FormArray;
    variants.clear(); 
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth() + 1;
    if (months) {
      for (let i = 0; i < months; i++) {
        this.addCart();
        const formattedDate = `${startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12)}-${(startDate.getMonth() + i) % 12 + 1}-01`;
        variants.at(i).get('month_and_year').patchValue(formattedDate);
      }
    }
  }


  // onCheck() {
  //   const startDate = new Date(this.targetForm.get('start_date').value);
  //   const endDate = new Date(this.targetForm.get('end_date').value);
  //   const variants = this.targetForm.get('cart') as FormArray;
  //   variants.clear();
  //   const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth() + 1;
  //   if (months) {
  //     for (let i = 0; i < months; i++) {
  //       this.addCart();
  //     // Calculate the month_and_year value based on the current iteration
  //       const currentDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
  //       const formattedDate = this.formatMonthAndYear(currentDate);
  //       variants.at(i).get('month_and_year').patchValue(formattedDate);
  //     }
  //   }
  // }

  formatMonthAndYear(date: Date): string {
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${year}`;
  }

  get department() {
    return this.targetForm.get('department')
  }
  get start_date() {
    return this.targetForm.get('start_date')
  }
  get end_date() {
    return this.targetForm.get('end_date')
  }
  get target_value() {
    return this.targetForm.get('target_value')
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('percent_of_total_target');
  }
  departmentList: any
  getDepartment() {
    this.hrmService.getDepartment().subscribe(res => {
      // console.log(res);
      this.departmentList = res
    })
  }

  calculateSaleValue(index: any) {
    const targetControl = this.targetForm.get('target_value');
    const cartItem = this.getCart().controls[index];
    const percentage = +cartItem.get('percent_of_total_target').value || 0;
    const saleValue = +cartItem.get('estimated_sale_value').value || 0;
    if (percentage && targetControl) {
      const target = +targetControl.value || 0;
      const calculateAmount = target * percentage / 100;
      console.log(calculateAmount, 'calculateAmount');
      cartItem.get('estimated_sale_value').patchValue(calculateAmount);
      console.log(cartItem.get('percent_of_total_target')?.value > 100);
      if (cartItem.get('percent_of_total_target')?.value > 100) {
        this.toastrService.error('Enter Percentage (%) Between 1-100')
      }
    }
  }
  calculatePercentage(index: any) {
    const targetControl = this.targetForm.get('target_value');
    const cartItem = this.getCart().controls[index];
    const saleValue = +cartItem.get('estimated_sale_value').value || 0;
    if (targetControl && saleValue) {
      const target = +targetControl.value || 0;
      const calculatePercentage = saleValue * 100 / target;
      console.log(calculatePercentage, 'calculatePercentage');
      cartItem.get('percent_of_total_target').patchValue(calculatePercentage)
      if (cartItem.get('estimated_sale_value')?.value !==target) {
        this.toastrService.error('Target Value & sale Value should Be Equal')
      }
    }
  }

  saleValue(): number {
    let totalValue = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const saleControl = this.getCart().controls[i].get('estimated_sale_value');
      if (saleControl) {
        totalValue += +saleControl.value || 0;
      }
    }
    return totalValue;
  }
  percentageValue(): number {
    let totalPercentage = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const percentageControl = this.getCart().controls[i].get('percent_of_total_target');
      if (percentageControl) {
        totalPercentage += +percentageControl.value || 0;
      }
    }
    return totalPercentage;
  }
  
  addRes: any;
  loaders = false;
  targetValue:number;
  submit() {
    console.log(this.targetForm.value);
    this.targetValue=this.targetForm.get('target_value')?.value;
    console.log(this.saleValue());
    console.log(this.targetValue);
    
    if(this.saleValue()==this.targetValue){
      if(this.percentageValue()<=100){
    if (this.targetForm.valid) {
      let formdata: any = new FormData();
        formdata.append('department', this.targetForm.get('department')?.value);
        formdata.append('start_date', this.targetForm.get('start_date')?.value);
        formdata.append('end_date', this.targetForm.get('end_date')?.value);
        formdata.append('target_value', this.targetForm.get('target_value')?.value);

        const cartArray = this.targetForm.get('cart') as FormArray;
        const cartData = [];
        cartArray.controls.forEach((address) => {
          const cartGroup = address as FormGroup;
          const cartObject: any = {};
          Object.keys(cartGroup.controls).forEach((key) => {
            const control = cartGroup.controls[key];
           if (!isNaN(control.value)) {
              cartObject[key] = parseFloat(control.value);
            } else {
              cartObject[key] = control.value;
            }
          });
          cartData.push(cartObject);
        });
        formdata.append('cart', JSON.stringify(cartData));
      this.loaders = true;
      this.hrmService.addTarget(formdata).subscribe(res => {
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['hrm/list-target']);
        }
      })
    } else {
      this.targetForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }else{
    this.toastrService.error('Total Percentage (%) should be less than and Equal to 100')
    this.targetForm.markAllAsTouched()
  }
  }else{
    this.toastrService.error('Target Value and Sale Value total should be same')
    this.targetForm.markAllAsTouched()
  }
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
