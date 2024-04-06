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
        this.coreService.deleteBatchNewApi(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });

          } else {
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
  isAdd: any
  isEdit: any
  isDelete: any
  loader = true;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    // this.getBatch();

    //permission from localstorage data
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData) {
      const permission = localStorageData;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename == 'add_batch') {
          this.isAdd = res.codename;
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename == 'change_batch') {
          this.isEdit = res.codename;
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'batch' && res.codename == 'delete_batch') {
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

  productDetail: any;
  totalPrice=0
  price:any[]=[];
  totalINqty=0;
  iNqty:any[]=[];
  totalOutQty=0;
  outQty:any[]=[]
  getdata() {
    this.coreService.getProductById(this?.id).subscribe(res => {
      if (this?.id == res?.id) {
        this.productDetail = res;
        this.filteredData = this.productDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 
        this.loader = false;
        this?.productDetail?.product_ledger_product.map((res: any) => {
          this.price.push(res.price == null ? 0 : res.price);
          this.iNqty.push(res.in_qty);
          this.outQty.push(res.out_qty)
        })
        this.price.forEach((price:number)=>{
          this.totalPrice+=price;
          console.log(this.totalPrice);
        });
        this.iNqty.forEach((price:number)=>{
          this.totalINqty+=price;
          console.log(this.totalINqty);
        });
        this.outQty.forEach((price:number)=>{
          this.totalOutQty+=price;
          console.log(this.totalOutQty);
        });
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
          if (this.delRes.success) {
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
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: this.delRes.msg,
        });
      }
    });
  }
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  pp: number = 1
  pagesize: number = 3;
  itemsperPage = 3;
  keyy = 'id'
  reversee: boolean = false;
  sortt(key) {
    this.keyy = key;
    this.reversee = !this.reversee
  }
    // filter data
    filteredData: any[]; 
    filterOpertion:any;
    filterData() {
      let filteredData = this.productDetail?.logs.slice();
      if (this.filterOpertion) {
        filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
      }
      this.filteredData = filteredData;
    }
    clearFilter() {
      this.filterOpertion=null;
      this.filterData();
    }
    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.productDetail?.product_ledger_product?.length;
      }
    }
    changePg1(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.productDetail?.logs?.length;
      }
    }
    
}
