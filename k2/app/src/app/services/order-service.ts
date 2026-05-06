import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base-service';
import { Order } from 'model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<Order>{
  override resource = "orders";
  
}
