import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reaktivna-forma',
  imports: [ReactiveFormsModule],
  templateUrl: './reaktivna-forma.html',
  styleUrl: './reaktivna-forma.css',
})
export class ReaktivnaForma {
  forma = new FormGroup({
    brojIndeksa: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl() ,
    godinaUpisa: new FormControl(),
    smer: new FormControl() ,
    prosecnaOcena: new FormControl() 

  });
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
  compare(smer1: any, smer2: any){
    if(smer1 != undefined && smer2 != undefined){
      return smer1["akronim"] === smer2["akronim"];
    }
    return false;
  }

  dodajStudenta(){
    console.log(this.forma.value); 
  }
}
