import { inject, Injectable } from '@angular/core';
import { BaseControl } from 'app/controls/base-control';
import { BaseService } from 'app/services/base-service';
import { OrderService } from 'app/services/order-service';
import { Order } from 'model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderControl extends BaseControl<Order> {
  override service: BaseService<Order> = inject(OrderService);
}
