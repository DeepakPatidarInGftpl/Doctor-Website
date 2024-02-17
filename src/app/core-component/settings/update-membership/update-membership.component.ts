import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

@Component({
  selector: 'app-update-membership',
  templateUrl: './update-membership.component.html',
  styleUrls: ['./update-membership.component.scss']
})

export class UpdateMembershipComponent implements OnInit {
  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private Arout: ActivatedRoute, private fb: FormBuilder, private hrmService: HrmServiceService, private toastr: ToastrService, private router: Router) { }
  membershipForm!: FormGroup;

  get f() {
    return this.membershipForm.controls;
  }
  id: any;
  editRes:any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');

    this.hrmService.getMembershipById(this.id).subscribe((res: any) => {
      this.url = ''
      this.editRes=res;
      this.membershipForm.patchValue(this.editRes)
    });

    this.membershipForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      points_per_100: new FormControl('',[Validators.required]),
      purchase_from: new FormControl('',[Validators.required]),
      purchase_to: new FormControl('',),
      validity_of_points: new FormControl('',[Validators.required]),
      maximum_redemption_points: new FormControl('',[Validators.required]),
      attachment:new FormControl(''),
    });
  }

  dateError = null
  addRes: any;
  loader = false;
  errUser: any;
  submit() {
    if (this.membershipForm.valid) {
      this.loader = true;
      let formData = new FormData();
      formData.append('title',this.membershipForm.get('title')?.value);
      formData.append('points_per_100',this.membershipForm.get('points_per_100')?.value);
      formData.append('purchase_from',this.membershipForm.get('purchase_from')?.value);
      formData.append('purchase_to',this.membershipForm.get('purchase_to')?.value);
      formData.append('validity_of_points',this.membershipForm.get('validity_of_points')?.value);
      formData.append('maximum_redemption_points',this.membershipForm.get('maximum_redemption_points')?.value);
      formData.append('attachment',this.membershipForm.get('attachment')?.value);
      
      this.hrmService.updateMembership(formData,this.id).subscribe(res => {
        this.addRes = res
        if (this.addRes.success) {
          this.loader = false;
          this.toastr.success(this.addRes.msg)
          this.membershipForm.reset()
          this.router.navigate(['//settings/membership'])
        } else {
          this.loader = false;
        }
      }, err => {
        this.loader = false;
        this.toastr.error(err?.error?.error?.non_field_errors[0]);
        this.toastr.error(err?.error?.error?.attachment)
      })
    } else {
      this.membershipForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields');
    }
  }

  get title() {
    return this.membershipForm.get('title')
  }
  get points_per_100() {
    return this.membershipForm.get('points_per_100')
  }
  get purchase_from() {
    return this.membershipForm.get('purchase_from')
  }
  get purchase_to() {
    return this.membershipForm.get('purchase_to')
  }
  get validity_of_points() {
    return this.membershipForm.get('validity_of_points')
  }
  get maximum_redemption_points() {
    return this.membershipForm.get('maximum_redemption_points')
  }
  get attachment(){
    return this.membershipForm.get('attachment');
  }
  url: any;
  onSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.membershipForm.patchValue({
      attachment: file
    });

    this.membershipForm.get('attachment')?.updateValueAndValidity()
  }

  errorMsg(){
  let data = this.membershipForm.value;
    this.membershipForm.get('purchase_from')
    if(data.purchase_from>=data.purchase_to){
      this.toastr.error('Purchase from must be less than purchase to.')
    }
  }
}


