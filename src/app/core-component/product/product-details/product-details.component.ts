import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private coreService: CoreService, private location: Location) { }

  id: any
  imgUrl = 'https://pv.greatfuturetechno.com';

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
        this.coreService.deleteBatch(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Batch Deleted successfully") {
            this.ngOnInit()
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
         
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })

      }
    });
  }
isAdd:any
isEdit:any
isDelete:any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    // this.getBatch();

      //permission from localstorage data
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData) {
      const permission = localStorageData;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename=='add_batch') {
          this.isAdd = res.codename;
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename=='change_batch') {
          this.isEdit = res.codename;
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename=='delete_batch') {
          this.isDelete = res.codename;
        }
      });
    }

   
  }
  batchList: any
  getBatch() {
    this.coreService.getBatch().subscribe(res => {
      this.batchList = res;
      // console.log(res);
    })
  }
  ngAfterViewInit() {
    this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js")
    this.LoadScript("assets/js/product-details.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

  productDetail: any
  getdata() {
    this.coreService.getProductById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.productDetail = res
        // console.log(res);
        // console.log(res.variant_product);
      }
    })
  }

  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }

  addbatch: boolean[] = [];

  openBatch(index: number) {
    this.addbatch[index] = true;
  }
  closeBatch(index: number) {
    this.addbatch[index] = false
  }
  goBack() {
    this.location.back();
  }

  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this batch!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.BatchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Batch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Batch Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this batch!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.BatchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Batch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Batch Is Active Successfully.',
        });
      }
    });
  }


}
