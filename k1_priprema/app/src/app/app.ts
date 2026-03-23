import { Component, inject, signal, WritableSignal } from '@angular/core';
import { KlijentForm } from 'app/klijent-form/klijent-form';
import { KlijentService } from 'app/klijent-service';
import { KlijentTabela } from 'app/klijent-tabela/klijent-tabela';
import { RacunForm } from 'app/racun-form/racun-form';
import { RacunService } from 'app/racun-service';
import { RacunTabela } from 'app/racun-tabela/racun-tabela';
import { TransakcijaForm } from 'app/transakcija-form/transakcija-form';
import { TransakcijaService } from 'app/transakcija-service';
import { TransakcijaTabela } from 'app/transakcija-tabela/transakcija-tabela';

@Component({
  selector: 'app-root',
  imports: [KlijentForm, KlijentTabela, RacunForm, RacunTabela, TransakcijaForm, TransakcijaTabela],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  racunService = inject(RacunService);
  transakcijaService = inject(TransakcijaService);
  klijentService = inject(KlijentService);

  klijenti : WritableSignal<Klijent[]> = signal<Klijent[]>([]);
  transakcije : WritableSignal<Transakcija[]> = signal<Transakcija[]>([]);
  racuni : WritableSignal<Racun[]> = signal<Racun[]>([]);

  klijentEdit = signal<Klijent | null>(null);
  racunEdit = signal<Racun | null>(null);
  transakcijaEdit = signal<Transakcija | null>(null);

  constructor(){
    this.dataRefresh();
  }

  getAllKlijent(){
    this.klijentService.getAll().subscribe(data => {
      this.klijenti.set(data);
    })
  }

  addKlijent(klijent: any){
    this.klijentService.create(klijent).subscribe(data => {
      this.getAllKlijent();
    });
  }
 
  setEditKlijent(index: number){
    this.klijentEdit.set(this.klijenti()[index]);
  }

  editKlijent(klijent: any){
    this.klijentService.update(klijent.id, klijent).subscribe(data => {
        this.getAllKlijent();
    });
    this.klijentEdit.set(null);
  }

  deleteKlijent(index: number){
    let id = this.klijenti()[index]["id"];
    this.klijentService.delete(id).subscribe(data => {
      this.getAllKlijent();
    })
    this.klijentEdit.set(null);
  }

  
  getAllRacun(){
    this.racunService.getAll().subscribe(data => {
      this.racuni.set(data);
    })
  }
  addRacun(racun: any){
    this.racunService.create(racun).subscribe(data => {
      this.getAllRacun();
    });
  }

  setEditRacun(index: number){
    this.racunEdit.set(this.racuni()[index]);
  }

  editRacun(racun: any){
    this.racunService.update(racun.id, racun).subscribe(data => {
      this.getAllRacun();
    });
    this.racunEdit.set(null);
  }

  deleteRacun(index: number){
    let id = this.racuni()[index]["id"];
    this.racunService.delete(id).subscribe(data => {
      this.getAllRacun();
    })
    this.racunEdit.set(null);
  }

  getAllTransakcija(){
    this.transakcijaService.getAll().subscribe(data => {
      this.transakcije.set(data);
    })
  }

  addTransakcija(transakcija: any){

    this.transakcijaService.create(transakcija).subscribe(data =>{
      this.getAllTransakcija();
    });
    
    let racun = this.racuni().filter(racun => racun.id === transakcija.racunId)[0];

    racun.stanje += transakcija.iznos;
    this.editRacun(racun);
  }

  setEditTransakcija(index: number){
    this.transakcijaEdit.set(this.transakcije()[index]);
  }

  editTransakcija(transakcija: any){
    this.transakcijaService.update(transakcija.id, transakcija).subscribe(data => {
      this.getAllTransakcija();
    });
    this.transakcijaEdit.set(null);
  }

  deleteTransakcija(index: number){
    let id = this.transakcije()[index]["id"];
    this.transakcijaService.delete(id).subscribe(data => {
      this.getAllTransakcija();
    })
    this.transakcijaEdit.set(null);
  }

  dataRefresh(){
    this.getAllKlijent();
    this.getAllRacun();
    this.getAllTransakcija();
  }

}
