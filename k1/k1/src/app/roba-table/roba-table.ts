import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-roba-table',
  imports: [],
  templateUrl: './roba-table.html',
  styleUrl: './roba-table.css',
})
export class RobaTable {
  @Input()
  robas = signal<Roba[]>([]);

  @Output()
  deleteEmit = new EventEmitter<number>();

  @Output()
  editEmit = new EventEmitter<number>();

  editEvent(index: number){
    this.editEmit.emit(index);
  }
  deleteEvent(index: number){
    this.deleteEmit.emit(index);
  }
}
