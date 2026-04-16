import { Component } from '@angular/core';
import { GenericTable } from 'app/components/generics/generic-table/generic-table';

@Component({
  selector: 'app-racun-tabela',
  imports: [],
  templateUrl: './racun-tabela.html',
  styleUrl: './racun-tabela.css',
})
export class RacunTabela extends GenericTable<Racun>{

  stanjeOdFilter : number | null = null;
  stanjeDoFilter : number | null = null;

  setIdFilter(value: string | null){
    if(value == "" || value == undefined){
      this.setFilter("id", null);
      return;
    } 

    this.setFilter("id",  (racun) => racun.id.toString().includes(value))    
  }
  setBrojRacuna(value: string | null){
    if(value == "" || value == undefined){
      this.setFilter("brojRacuna", null);
      return;
    } 

    this.setFilter("brojRacuna", (racun) => racun.brojRacuna.includes(value))
  }
  setStanjeOd(value: string | null){
    if(value == "" || value == undefined){
      this.stanjeOdFilter = null;
    } 
    else this.stanjeOdFilter = +value;

    this.setStanjeFilter();
  }
  setStanjeDo(value: string | null){
    if(value == "" || value == undefined){
      this.stanjeDoFilter = null;
    } 
    else this.stanjeDoFilter = +value;

    this.setStanjeFilter();
  }
  
  setStanjeFilter(){
    if(this.stanjeOdFilter === null && this.stanjeDoFilter === null) this.setFilter("stanje", null);
    else if(this.stanjeDoFilter === null) this.setFilter("stanje", (racun) => racun.stanje >= this.stanjeOdFilter!);
    else if(this.stanjeOdFilter === null) this.setFilter("stanje", (racun) => racun.stanje <= this.stanjeDoFilter!);
    else this.setFilter("stanje", (racun) => racun.stanje >= this.stanjeOdFilter! && racun.stanje <= this.stanjeDoFilter!);  
  }

  isNegative(index: number){
    if (this.itemsShow()[index]["stanje"] < 0) return true;
    return false;
  }
}
