import { Injectable } from '@angular/core';
import { Bill } from 'src/app/interfaces/bill';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function for UUID generation

@Injectable({
  providedIn: 'root'
})
export class BillHoldService {
  private heldBills: any[] = [];

  constructor() { }

  addToHold(bill: any) {
    bill.id = uuidv4(); // Generate UUID for the new bill
    this.heldBills.push(bill);
  }

  removeFromHold(billId: number) {
    this.heldBills = this.heldBills.filter((bill) => bill.id !== billId);
  }

  getHeldBills(): any[] {
    return this.heldBills;
  }
}
