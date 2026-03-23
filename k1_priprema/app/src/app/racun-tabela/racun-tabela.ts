import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-racun-tabela',
  imports: [],
  templateUrl: './racun-tabela.html',
  styleUrl: './racun-tabela.css',
})
export class RacunTabela {
  @Input()
  racuni = signal<Racun[]>([]);

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

  isNegative(index: number){
    if (this.racuni()[index]["stanje"] < 0) return true;
    return false;
  }
}
