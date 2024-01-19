import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.scss']
})
export class AddAttendanceComponent implements OnInit {

  attendanceForm!: FormGroup;
  get f() {
    return this.attendanceForm.controls;
  }
  constructor(private fb: FormBuilder, private hrmService: HrmServiceService,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    console.log(lastDayOfMonth);
    this.attendanceForm = this.fb.group({
      total_day_of_month: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      attendance: this.fb.array([])
    })
    this.getEmployee();
   
  }
  attendance(): FormGroup {
    return this.fb.group({
      employee: new FormControl('', [Validators.required]),
      total_present_day: new FormControl('', [Validators.required]),
    });
  }
  getattendance(): FormArray {
    return this.attendanceForm.get('attendance') as FormArray;
  }
  addAttendance() {
    this.getattendance().push(this.attendance())
  }
  removeAttendance(i: any) {
    this.getattendance().removeAt(i)
  }
  get total_day_of_month() {
    return this.attendanceForm.get('total_day_of_month')
  }
  get date() {
    return this.attendanceForm.get('date')
  }
  employee(index: number) {
    return this.getattendance().controls[index].get('employee');
  }
  total_present_day(index: number) {
    return this.getattendance().controls[index].get('total_present_day');
  }

  onCheck() {
    let date = new Date(this.attendanceForm.get('date')?.value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    console.log(lastDayOfMonth);
    this.attendanceForm.get('total_day_of_month')?.patchValue(lastDayOfMonth);
  }

  employeeList: any
  getEmployee() {
    this.contactService.getEmployee().subscribe(res => {
      this.employeeList = res;
      const variants = this.attendanceForm.get('attendance') as FormArray;
      variants.clear(); 
      this.employeeList.forEach((res:any,index:any)=>{
        this.addAttendance();
        variants.at(index)?.get('employee')?.patchValue(res?.id);
      })
    })
  }

  addRes: any;
  loaders = false;
  submit() {
    console.log(this.attendanceForm.value);
    if (this.attendanceForm.valid) {
      let formdata: any = new FormData();
      formdata.append('date', this.attendanceForm.get('date')?.value);
      formdata.append('total_day_of_month', this.attendanceForm.get('total_day_of_month')?.value);
      const attendanceArray = this.attendanceForm.get('attendance') as FormArray;
      const attendanceData = [];
      attendanceArray.controls.forEach((address) => {
        const attendanceGroup = address as FormGroup;
        const attendanceObject: any = {};
        Object.keys(attendanceGroup.controls).forEach((key) => {
          const control = attendanceGroup.controls[key];
          if (!isNaN(control.value)) {
            attendanceObject[key] = parseFloat(control.value);
          } else {
            attendanceObject[key] = control.value;
          }
        });
        attendanceData.push(attendanceObject);
      });
      formdata.append('attendance', JSON.stringify(attendanceData));

      this.loaders = true;
      this.hrmService.addAttendance(formdata).subscribe(res => {
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['hrm/list-attendance']);
        }
      },err=>{
        this.loaders = false;
      })
    } else {
      this.attendanceForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }

  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
