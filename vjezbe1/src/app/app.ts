import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('primer1');
  title: string|null|number = "Primer 1";
  niz: string[] = [];

  student : Student = {
    ime:"Marko",
    prezime:"Makrkovic",
    brojIndeksa: "129",
    godinaUpisa: 2025,
    smer: "SIIT",
    prosecnaOcena: 8.7
  };

  //student2: Student = new Student("Jovan", "Jovanovic", "12312", "PR", 2012, 2.2);


  metoda() {
    this.title = 123;
    this.niz.push("123");
    this.niz.push("222");
    this.niz.push("333");
  }
}
