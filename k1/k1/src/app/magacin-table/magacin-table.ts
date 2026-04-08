import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-magacin-table',
  imports: [CommonModule],
  templateUrl: './magacin-table.html',
  styleUrl: './magacin-table.css',
})
export class MagacinTable {
  @Input()
  magacini = signal<Magacin[]>([]);
  @Input()
  robas: Roba[] = [];

  @Output()
  deleteEmit = new EventEmitter<number>();

  @Output()
  editEmit = new EventEmitter<number>();

  editEvent(index: number){
    this.editEmit.emit(index);
  }
  deleteEvent(index:number){
    this.deleteEmit.emit(index);
  }

  getCapacity(magacin :Magacin) : number {
    let capacity = 0;
    this.robas.forEach(roba => {
      if(roba.magacin_id == magacin.id) capacity += roba.kolicina;
    })
    return capacity;
  }

  progressClass(magacin: Magacin){
    let capacity = this.getCapacity(magacin) / magacin.kapacitet * 100;

    if(capacity <= 50) return "low";
    else if(capacity <= 75) return "mid";

    return "high";
  }
}
