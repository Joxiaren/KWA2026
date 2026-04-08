import { Component } from '@angular/core';
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { KlijentForm } from 'app/components/klijent-form/klijent-form';
import { KlijentTabela } from 'app/components/klijent-tabela/klijent-tabela';
import { KlijentService } from 'app/services/klijent-service';
import { inject } from '@angular/core';
import { KlijentControl } from 'app/controls/klijent-control/klijent-control';

@Component({
  selector: 'app-klijent-page',
  imports: [KlijentForm, KlijentTabela],
  templateUrl: './klijent-page.html',
  styleUrl: './klijent-page.css',
})
export class KlijentPage {
  klijentControl = inject(KlijentControl);

  constructor(){
    this.dataRefresh();
  }

  dataRefresh(){
    this.klijentControl.getAllItems();
  }
}
