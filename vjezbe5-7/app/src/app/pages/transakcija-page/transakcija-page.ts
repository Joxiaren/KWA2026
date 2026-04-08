import { Component, inject } from '@angular/core';
import { RacunControl } from 'app/controls/racun-control/racun-control';
import { KlijentControl } from 'app/controls/klijent-control/klijent-control';
import { TransakcijaControl } from 'app/controls/transakcija-control/transakcija-control';
import { TransakcijaForm } from 'app/components/transakcija-form/transakcija-form';
import { TransakcijaTabela } from 'app/components/transakcija-tabela/transakcija-tabela';

@Component({
  selector: 'app-transakcija-page',
  imports: [TransakcijaForm, TransakcijaTabela],
  templateUrl: './transakcija-page.html',
  styleUrl: './transakcija-page.css',
})
export class TransakcijaPage {

  klijentControl = inject(KlijentControl)
  racunControl = inject(RacunControl)
  transakcijaControl = inject(TransakcijaControl)

  constructor(){
    this.dataRefresh();
  }
  dataRefresh(){
    this.klijentControl.getAllItems();
    this.racunControl.getAllItems();
    this.transakcijaControl.getAllItems();
  }

}
