import { Component, ElementRef, OnInit, ViewChild, effect } from '@angular/core';
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
  allTest: any;
  constructor(public _service : DoctorserviceService,private router: Router){
    effect(()=>{
      let id = this._service.id$()
      let len = this.allCatogory.length;
      let r : any = this.allCatogory.filter((item)=>item._id === id);
      if ( r.length > 0) this.carToData.push(r[0])

      for (const iterator of this.carToData) {
        console.log(iterator.testPrice)
      }
      // this.carToData.forEach(item =>{
      //   item.testPrice = item.testPrice.length*item.testPrice;
        
      // })

     
      
    
    console.log('deepak', this.carToData);
    })
  }
  
  ngOnInit(): void {
    this.GetAllLoction();
    this.GetCategory();
    this.GetAlTest();
   
  }

  GetAllLoction() {
    this._service.getAlllocation().subscribe({
      next: (res: any) => {
        console.log(res)
        this.allLocation = res
      }
    })
  }
  GetCategory(){
    this._service.getAllCategory().subscribe({
      next : (res:any)=>{
        console.log("Category",res)
        this.allCatogory = res;
        this.allCatogory.forEach((i:any)=>i.__v = 'Add')

      }
    })
  }
  GetAlTest(){
    this._service.getAllTests().subscribe({
      next :(res:any)=>{
        console.log("Test",res)
        this.allTest =res;
      }
    })
  }

hendalclick(index : string,str : string){
  ((str === 'Remove' ) ?  this.show = false : this.show = true);
  this.openCart(true);
 this.allCatogory.forEach((i:any)=>{
    if(this.show === true && i._id == index) {
    this._service.id$.set(index)
     this._service.addToCard$.update((i:number)=>i+1);
     i.__v= 'Remove'

   }

   if (this.show === false && i._id == index && str === 'Remove')
   {
     this._service.addToCard$.update((i:number)=>i-1);
     i.__v= 'Add'

   }

 })
 

}
openCart(val?: boolean){
  
  if (val) {
    this.divshow = val
  }else{
    this.divshow = !this.divshow
  }
}
addtouser(){
  this.router.navigate(["/userdetails"]);
}
}
