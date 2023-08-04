import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating-and-review',
  templateUrl: './rating-and-review.component.html',
  styleUrls: ['./rating-and-review.component.scss']
})
export class RatingAndReviewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  imgUrl = 'https://pv.greatfuturetechno.com';

  constructor(private websiteService: WebsiteService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService) {
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
        this.websiteService.deleteFooter(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Footer Deleted successfully") {
          
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
            this.ngOnInit();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
            this.tableData.splice(index, 1);
          }
        })

      }
    });
  }

  select = false
  // active deactive
  deActivate(status: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Reject this Rating!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.websiteService.updateratingAndReview({ status: status }, id).subscribe(res => {
          this.delRes = res
          console.log(this.delRes);
          if (this.delRes.error == "Rating And Reviews is not in New status") {
            Swal.fire({
              icon: 'error',
              title: 'Reject!',
              text: this.delRes.error,
            });
            this.ngOnInit()
          }
        }, (err: any) => {
          if (err.error.error) {
            Swal.fire({
              icon: 'error',
              title: 'Not Reject!',
              text: err.error.error,
            });
            this.ngOnInit();
          }
        })

      }
    });
  }
  Active(status: any, id: any) {
    let confirmationText = '';
    let confirmationTitle = '';
  
    if (status === 'New') {
      confirmationText = 'Do you want to Accept or Reject this Rating and Review?';
      confirmationTitle = 'Accept Confirmation';
    } else {
      confirmationText = 'Do you want to reject this Rating and Review?';
      confirmationTitle = 'Reject Confirmation';
    }
    Swal.fire({
      title: 'Are you sure?',
      text: confirmationText,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept',
      cancelButtonText: 'Reject',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.websiteService.updateratingAndReview({ status: 'Accept' }, id).subscribe((res) => {
            this.delRes = res;
            console.log(this.delRes);
            if (this.delRes.msg == 'Rating And Reviews Updated Sucessfully') {
              Swal.fire({
                icon: 'success',
                title: 'Accepted!',
                text: 'Rating and Review Accepted Sucessfully',
              });
              this.ngOnInit();
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.websiteService.updateratingAndReview({ status: 'Reject' }, id).subscribe((res) => {
            this.delRes = res;
            console.log(this.delRes);
            if (this.delRes.msg == 'Rating And Reviews Updated Sucessfully') {
              Swal.fire({
                icon: 'success',
                title: 'Rejected!',
                text: 'Rating and Review Rejected Sucessfully',
              });
              this.ngOnInit();
            }
          });
      }
    });
  }
  

  loader = true;
  isAdd:any;
  isEdit:any;
  userDetails:any
  ngOnInit(): void {
    this.websiteService.getratingAndReview().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    // permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product'  && res.content_type.model === 'ratingandreviewsonproduct' && res.codename=='add_ratingandreviewsonproduct') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'ratingandreviewsonproduct' && res.codename=='change_ratingandreviewsonproduct') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }
    //   });
    // }

      // permission from profile api
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission.map((res: any) => {
          if (res.content_type.app_label === 'product'  && res.content_type.model === 'ratingandreviewsonproduct' && res.codename=='add_ratingandreviewsonproduct') {
            this.isAdd = res.codename;
            console.log(this.isAdd);
          } else if (res.content_type.app_label === 'product' && res.content_type.model === 'ratingandreviewsonproduct' && res.codename=='change_ratingandreviewsonproduct') {
            this.isEdit = res.codename;
            console.log(this.isEdit);
          }
        });
      });
  }
  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[]
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
    this.websiteService.deleteAddressStore(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Colors Deleted successfully") {
        window.location.reload()
      }

    })
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.product?.title.toLocaleLowerCase());
        console.log(res.product?.title.match(this.titlee));
        return res.product?.title.match(this.titlee);
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
