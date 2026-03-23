import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forma',
  imports: [FormsModule],
  templateUrl: './forma.html',
  styleUrl: './forma.css',
})
export class Forma {

  @Output()
  dodaj = new EventEmitter<any>();

  @Output()
  izmeni = new EventEmitter<any>();

  @Input()
  indexZaIzmenu: number | null = null;
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
  noviStudent = {
    ime:"dadada",
    prezime:"",
    brojIndeksa: "",
    godinaUpisa: 110,
    smer: "",
    prosecnaOcena: 0
  }

  dodajStudenta(){
    console.log(this.noviStudent);

    if(this.indexZaIzmenu != null){
      this.izmeni.emit({...this.noviStudent}); 
      this.indexZaIzmenu = null;
    }
    else{
      this.dodaj.emit({...this.noviStudent});
    }
  }

  postaviZaIzmenu(index: number){
    // this.noviStudent = {...this.studenti[index]};
    this.indexZaIzmenu = index;
  }

  compare(smer1: any, smer2: any){
    if(smer1 != undefined && smer2 != undefined){
      return smer1["akronim"] === smer2["akronim"];
    }
    return false;
  }
}
