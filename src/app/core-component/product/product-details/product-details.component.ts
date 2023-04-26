import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private coreService: CoreService) { }

  images=[
    {image:'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1',color:'blue'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lp_vpjcJFZDWE_C0lyv5SjGWuZR3J_AtP7_ydmA2mqnRRlXdmwzVsdaCjp8LbIM-6Qk&usqp=CAU',color:'red'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qTg6fFDyOZqICjlmXpRpHZvBH-ugax9FwjYYfWuJ&s',color:'green'},
 ]
  id: any
  imgUrl='https://pv.greatfuturetechno.com'
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
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
        if(this.id==res.id){
          this.productDetail = res
          console.log(res); 
        }
    })
  }
}
