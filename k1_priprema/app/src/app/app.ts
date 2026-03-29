import { Component, inject, signal } from '@angular/core';
import { KlijentForm } from 'app/klijent-form/klijent-form';
import { KlijentService } from 'app/services/klijent-service';
import { KlijentTabela } from 'app/klijent-tabela/klijent-tabela';
import { RacunForm } from 'app/racun-form/racun-form';
import { RacunService } from 'app/services/racun-service';
import { RacunTabela } from 'app/racun-tabela/racun-tabela';
import { TransakcijaForm } from 'app/transakcija-form/transakcija-form';
import { TransakcijaService } from 'app/services/transakcija-service';
import { TransakcijaTabela } from 'app/transakcija-tabela/transakcija-tabela';
import { GenericControl } from 'app/generic-control/generic-control';

@Component({
  selector: 'app-root',
  imports: [KlijentForm, KlijentTabela, RacunForm, RacunTabela, TransakcijaForm, TransakcijaTabela],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  racunControl = new GenericControl<number, Racun>(inject(RacunService));
  transakcijaControl = new GenericControl<number, Transakcija>(inject(TransakcijaService));
  klijentControl = new GenericControl<number, Klijent>(inject(KlijentService));
  
  constructor(){
    this.overrider();
    this.dataRefresh();
  }

  dataRefresh(){
    this.klijentControl.getAllItems();
    this.racunControl.getAllItems();
    this.transakcijaControl.getAllItems();
  }

  overrider(){
    this.transakcijaControl.getAllItems = () => {
      this.transakcijaControl.service.getAll().subscribe(data => {
        data.map(d => {
          d.datumTransakcije = new Date(d.datumTransakcije);
        });

        this.transakcijaControl.items.set(data);
      })
    }

    this.transakcijaControl.addItem = (transakcija: any) => {
      this.transakcijaControl.service.create(transakcija).subscribe(data =>{
        this.transakcijaControl.getAllItems();
      });
      
      let racun = this.racunControl.items().filter(racun => racun.id === transakcija.racunId)[0];

      racun.stanje += transakcija.iznos;
      this.racunControl.editItem(racun);
    }
  }

}
