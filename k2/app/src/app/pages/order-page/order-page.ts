import { Component, inject } from '@angular/core';
import { OrderTable } from 'app/components/order-table/order-table';
import { OrderControl } from 'app/controls/order-control';

@Component({
  selector: 'app-order-page',
  imports: [OrderTable],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage {
  orderControl = inject(OrderControl);

  constructor(){
    this.dataRefresh();
  }
  dataRefresh(){
    this.orderControl.getAllItems();
  }
}
