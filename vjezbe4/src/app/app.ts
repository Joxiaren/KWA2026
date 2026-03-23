import { Component, inject, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Forma } from 'app/forma/forma';
import { ReaktivnaForma } from 'app/reaktivna-forma/reaktivna-forma';
import { StudentService } from 'app/student-service';
import { Tabela } from 'app/tabela/tabela';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Tabela, Forma, ReaktivnaForma],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('primer1');
  title: string|null|number = "Primer 1";
  niz: string[] = [];
  indexZaIzmenu: number | null = null;

  studentService: StudentService = inject(StudentService);
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
    prosecnaOcena: 2.7
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

  
  studentZaIzmenu: any = {};

  constructor(){
    this.studentService.getAll().subscribe(data => {
      console.log(data);
    })
  }
  metoda() {
    this.title = 123;
    this.niz.push("123");
    this.niz.push("222");
    this.niz.push("333");
  }

  dodajStudenta(student: any){
    //this.studenti.push({...student});
    this.studentService.create(student).subscribe(r => {
      this.studentService.getAll().subscribe(data => { this.studenti = data;})
    })
  }

  izmeniStudenta(student: any){
    if(this.indexZaIzmenu != null) this.studenti[this.indexZaIzmenu] = {...student};
  }

  // dodajStudenta(){
  //   console.log(this.noviStudent);

  //   if(this.indexZaIzmenu != null){
  //     this.studenti[this.indexZaIzmenu] = {... this.noviStudent};
  //     this.indexZaIzmenu = null;
  //   }
  //   else{
  //     this.studenti.push({...this.noviStudent});
  //   }
  // }

  postaviZaIzmenu(index: number){
    this.indexZaIzmenu = index;
    this.studentZaIzmenu =  {...this.studenti[index]}; 
  }
  obrisiStudenta(index: number){
    this.studenti.splice(index, 1);

    this.studentService.delete(index).subscribe(r => {
      this.studentService.getAll().subscribe(data => { this.studenti = data;})
    })
  }
}
