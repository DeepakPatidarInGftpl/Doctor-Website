import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, effect } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DoctorserviceService } from 'src/app/service/doctorservice.service';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.scss']
})
export class LabTestComponent implements OnInit{
   show : boolean = true
   divshow:boolean =false;
  carToData:any[] = []
  allLocation :any;
  allCatogory: any[] = [];
  filteredItems: any[] = [...this.allCatogory];
  allTest: any;
  Totalprice:any;
  allPackage: any;
  constructor(public _service : DoctorserviceService,private router: Router , private _cdk : ChangeDetectorRef){
    effect(()=>{
      let id = this._service.id$()
      let len = this.allCatogory.length;
      let r : any = this.allCatogory.filter((item)=>item._id === id);
      if ( r.length > 0) this.carToData.push(r[0])

    
      let price:any=0 ;
      this.carToData.forEach(item =>{
        price += +item.testPrice;

        this.Totalprice = price;
  
      })


    })
  }

  
  ngOnInit(): void {
    this.GetAllLoction();
    this.GetCategory();
    this.GetAlTest();
    this.GetAllPackage();
  }

  GetAllLoction() {
    this._service.getAlllocation().subscribe({
      next: (res: any) => {
        this.allLocation = res
      }
    })
  }
  GetCategory(){
    this._service.getAllCategory().subscribe({
      next : (res:any)=>{
        this.allCatogory = res;
        this.allCatogory.forEach((i:any)=>i.__v = 'Add')

      }
    })
  }
  GetAlTest(){
    this._service.getAllTests().subscribe({
      next :(res:any)=>{
        this.allTest =res;
      }
    })
  }
GetAllPackage(){
  this._service.getAllPackage().subscribe({
    next:(res:any)=>{
      this.allPackage =res;
      console.log(this.allPackage)
    }
  })
}
hendalclick(index : string,str : string,obj:any){
  ((str === 'Remove' ) ?  this.show = false : this.show = true);
  this.openCart(true);
 this.allCatogory.forEach((i:any)=>{
    if(this.show === true && i._id == index) {
    this._service.id$.set(index)
    this._service.cartData$.mutate((itr:any)=>itr.push(obj))
     this._service.addToCard$.update((i:number)=>i+1);
     i.__v= 'Remove'

   }

   if (this.show === false && i._id == index && str === 'Remove')
   {
     this._service.addToCard$.update((i:number)=>i-1);
     this.remove(index)
     i.__v= 'Add'
     

   }
 })
}
openCart(val?: boolean){
  
   (val === true) ? this.divshow = val : this.divshow = !this.divshow
  
}
removeItem(id:any){

  this.remove(id)
  this._service.addToCard$.update((i:number)=>i-1);
 
}


addTest(category: any){
  console.log(category);
  this.filteredItems = this.allCatogory.filter((item: any) => {
    return item.categories.includes(category.id);

    console.log("Category Filter",this.filteredItems)
  })
}
addtouser(){
  this.router.navigate(["/userdetails"]);
}

remove(id: any){
  this.carToData.map((item:any)=>{
    if(item._id === id){
    this.Totalprice = this.Totalprice - parseInt(item.testPrice)
    item.__v= 'Add'
    }
  })
  this.carToData =  this.carToData.filter((item:any)=>item._id !== id)
 
}
}
