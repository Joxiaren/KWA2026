import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-klijent-tabela',
  imports: [],
  templateUrl: './klijent-tabela.html',
  styleUrl: './klijent-tabela.css',
})
export class KlijentTabela {
  @Input()
  klijenti = signal<Klijent[]>([]);

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
