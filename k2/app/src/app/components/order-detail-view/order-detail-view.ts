import { Component, EventEmitter, Output } from '@angular/core';
import { BaseDetailView } from 'app/components/base-components/base-detail-view/base-detail-view';
import { Status } from 'app/components/status/status';
import { Order } from 'model/order';

@Component({
  selector: 'app-order-detail-view',
  imports: [Status],
  templateUrl: './order-detail-view.html',
  styleUrl: './order-detail-view.css',
})
export class OrderDetailView extends BaseDetailView<Order>{
  @Output()
  nextStatusEmit = new EventEmitter<number>();

  nextStatusEvent(){
    this.nextStatusEmit.emit(this.itemShow!.status + 1);
  }
}
