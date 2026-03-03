import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('primer1');
  title: string|null|number = "Primer 1";
  niz: string[] = [];
  indexZaIzmenu: number | null = null;
  noviStudent = {
    ime:"dadada",
    prezime:"",
    brojIndeksa: "",
    godinaUpisa: 110,
    smer: "",
    prosecnaOcena: 0
  }

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
  studenti : any[] = [{
    ime:"Marko",
    prezime:"Makrkovic",
    brojIndeksa: "129",
    godinaUpisa: 2025,
    smer: this.smerovi[1],
    prosecnaOcena: 8.7
  },
  {
    ime:"Gojko",
    prezime:"Dikic",
    brojIndeksa: "12478",
    godinaUpisa: 2023,
    smer: this.smerovi[0],
    prosecnaOcena: 10.0
  },
  {
    ime:"Dusan",
    prezime: "Krstic",
    brojIndeksa: "12229",
    godinaUpisa: 2023,
    smer: "SIIT",
    prosecnaOcena: 10.1
  }];

  

  // student : Student = {
  //   ime:"Marko",
  //   prezime:"Makrkovic",
  //   brojIndeksa: "129",
  //   godinaUpisa: 2025,
  //   smer: "SIIT",
  //   prosecnaOcena: 8.7
  // };

  //student2: Student = new Student("Jovan", "Jovanovic", "12312", "PR", 2012, 2.2);


  metoda() {
    this.title = 123;
    this.niz.push("123");
    this.niz.push("222");
    this.niz.push("333");
  }

  dodajStudenta(){
    console.log(this.noviStudent);

    if(this.indexZaIzmenu != null){
      this.studenti[this.indexZaIzmenu] = {... this.noviStudent};
      this.indexZaIzmenu = null;
    }
    else{
      this.studenti.push({...this.noviStudent});
    }
    // this.studenti.splice( 1, 0,  {
    //   ime:"UBACEN",
    //   prezime: "ELEMENT",
    //   brojIndeksa: "12229",
    //   godinaUpisa: 2023,
    //   smer: "SIIT",
    //   prosecnaOcena: 10.1
    // });
  }

  postaviZaIzmenu(index: number, student: any){
    this.noviStudent = student;
    this.indexZaIzmenu = index;
  }
  obrisiStudenta(index: number){
    this.studenti.splice(index, 1);
  }
}
