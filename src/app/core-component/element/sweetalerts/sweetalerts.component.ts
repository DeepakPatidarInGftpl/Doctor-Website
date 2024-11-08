import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

import Fuse from 'fuse.js';
@Component({
  selector: 'app-sweetalerts',
  templateUrl: './sweetalerts.component.html',
  styleUrls: ['./sweetalerts.component.scss']
})
export class SweetalertsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchControl = new FormControl();
  fuse: Fuse<any>;
  constructor(
    private _purchase : PurchaseServiceService
  ) { }

  ngOnInit(): void {
    this._purchase.getSearchProduct().subscribe({
      next : (products :any) => {
        console.log(products)
        this.products = products;

        this.fuse = new Fuse(this.products, {
          keys: ['product.title'],  // Fields to search within
          threshold: 0.4,                   // Sensitivity; lower for more exact matches
        });

      },
    });

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((searchTerm) => {
      this.filteredProducts = this.filterProducts(searchTerm);
    });
    
}

private filterProducts(searchTerm: string): any[] {
  if (!searchTerm) {
    return this.products;
  }
  // searchTerm = searchTerm.toLowerCase();
  return this.fuse.search(searchTerm).map(result => result.item);
 
}


}
