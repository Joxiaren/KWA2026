import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
    smerovi = [
    {
      naziv: "Softversko nesto",
      akronim: "SII"
    },
    {
      naziv: "Aj ti",
      akronim: "IT"
    },
  ]

  @Input()
  studenti : any[] = [];

  @Output()
  obrisi = new EventEmitter<number>();

  @Output()
  izmeni = new EventEmitter<number>();
  
  postaviZaIzmenu(index: number){
    this.izmeni.emit(index);
  }
  obrisiStudenta(index: number){
    this.obrisi.emit(index);
  }
}
