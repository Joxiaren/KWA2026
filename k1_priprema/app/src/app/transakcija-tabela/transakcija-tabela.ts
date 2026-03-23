import { Component, computed, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { TransakcijaForm } from 'app/transakcija-form/transakcija-form';

@Component({
  selector: 'app-transakcija-tabela',
  imports: [],
  templateUrl: './transakcija-tabela.html',
  styleUrl: './transakcija-tabela.css',
})
export class TransakcijaTabela {
  @Input()
  transakcije = signal<Transakcija[]>([]);

  transakcijeShow : Signal<Transakcija[]> = computed(() => this.transakcije().sort(
    (a,b) => {
      for(let i = 0; i < this.sortingFn.length; i++){
        if(this.sortingFn[i](a,b) != 0) return this.sortingFn[i](a,b);
      }
      return 0;
  }));

  sortingFn : ((a: Transakcija, b: Transakcija) => number)[] = [this.iznosCompareGen(false), this.datumCompareGen(true)];

  iznosCompareGen(desc : boolean){
    return (a: Transakcija, b: Transakcija) => {
      return (a.iznos < b.iznos ? 1 : (a.iznos > b.iznos ? -1 : 0)) * (desc ? -1 : 1);
    }
  }

  datumCompareGen(desc : boolean){
    return (a: Transakcija, b: Transakcija) => {
      let dateA = new Date(a.datumTransakcije);
      let dateB = new Date(b.datumTransakcije);

      return (dateA.getTime() < dateB.getTime() ? 1 : (dateA.getTime() > dateB.getTime() ? -1 : 0)) * (desc ? -1 : 1);
    }
  }

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
