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

  images = [
    { image: 'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1', color: 'blue' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lp_vpjcJFZDWE_C0lyv5SjGWuZR3J_AtP7_ydmA2mqnRRlXdmwzVsdaCjp8LbIM-6Qk&usqp=CAU', color: 'red' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qTg6fFDyOZqICjlmXpRpHZvBH-ugax9FwjYYfWuJ&s', color: 'green' },
  ]
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



  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.getBatch();
  }
  batchList: any
  getBatch() {
    this.coreService.getBatch().subscribe(res => {
      this.batchList = res;
      console.log(res);
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
        console.log(res);
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
