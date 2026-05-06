import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseDetailView } from 'app/components/base-components/base-detail-view/base-detail-view';
import { OrderDetailView } from 'app/components/order-detail-view/order-detail-view';
import { OrderControl } from 'app/controls/order-control';
import { Order } from 'model/order';

@Component({
  selector: 'app-order-detail-view-page',
  imports: [OrderDetailView],
  templateUrl: './order-detail-view-page.html',
  styleUrl: './order-detail-view-page.css',
})
export class OrderDetailViewPage {
  activatedRoute = inject(ActivatedRoute)

  orderControl = inject(OrderControl)

  itemShow : WritableSignal<Order | null> = signal(null)

  constructor(){
    this.activatedRoute.params.subscribe((params) => {
      this.orderControl.getItem(params['id'], this.itemShow);
    })
  }

  nextStatus(status: number){
    if(this.itemShow() == undefined) return;
    
    this.orderControl.patchItem(this.itemShow()!.id, {"status": status})
    this.orderControl.getItem(this.itemShow()!.id, this.itemShow);
    console.log(status);
  }
}
