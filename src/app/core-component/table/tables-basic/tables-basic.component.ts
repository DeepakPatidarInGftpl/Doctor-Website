import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.scss']
})
export class TablesBasicComponent implements OnInit {
  
  taxForm: FormGroup;
  taxRate: number = 1; // For example, 10%

  constructor(private fb: FormBuilder) {
    this.taxForm = this.fb.group({
      items: this.fb.array([]),
    });

    // Recalculate tax whenever the form changes
    this.taxForm.valueChanges.subscribe(() => {
      this.calculateTax();
    });
  }
  ngOnInit(): void {
  
  }

  get items() {
    return this.taxForm.get('items') as FormArray;
  }

  addItem() {
    const item = this.fb.group({
      price: 0,
      quantity: 1,
      tax: 0,
    });
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }
  calculateTax() {
    this.items.controls.forEach((control) => {
      const price = control.get('price')?.value || 0;
      const quantity = control.get('quantity')?.value || 0;
      const tax = quantity*price * (this.taxRate / 100);
      // calculateTax() {
      //   this.taxAmount = 
      //   this.totalAmount = this.price + this.taxAmount;
      // }
      control.get('tax')?.setValue(tax ,{ emitEvent: false }); // Update the tax value in the tax field
    });
  }
}
