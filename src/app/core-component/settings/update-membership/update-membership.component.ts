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
      this.editRes=res;
      this.membershipForm.patchValue(this.editRes)
    });

    this.membershipForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      points_per_100: new FormControl('', [Validators.required]),
      purchase_from: new FormControl('', [Validators.required]),
      purchase_to: new FormControl('', [Validators.required]),
      validity_of_points: new FormControl('', [Validators.required]),
      maximum_redemption_points: new FormControl('', [Validators.required])
    });
  }

  dateError = null
  addRes: any;
  loader = false;
  errUser: any;
  submit() {
    if (this.membershipForm.valid) {
      this.loader = true;
      this.hrmService.updateMembership(this.membershipForm.value,this.id).subscribe(res => {
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
}


