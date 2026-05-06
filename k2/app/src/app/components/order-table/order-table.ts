import { Component, computed, Signal } from '@angular/core';
import { BaseTable } from 'app/components/base-components/base-table/base-table';
import { Status } from 'app/components/status/status';
import { SortableHeader } from 'app/directives/sortable-header';
import { Order } from 'model/order';

@Component({
  selector: 'app-order-table',
  imports: [SortableHeader, Status],
  templateUrl: './order-table.html',
  styleUrl: './order-table.css',
})
export class OrderTable extends BaseTable<Order> {
    
  prioritetDirection : Signal<boolean | null> = computed(
    () => this.findSortDirection("prioritet")  
  );
}
