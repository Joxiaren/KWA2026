import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { RacunForm } from 'app/components/racun-form/racun-form';
import { RacunTabela } from 'app/components/racun-tabela/racun-tabela';
import { RacunControl } from 'app/controls/racun-control/racun-control';

@Component({
  selector: 'app-racun-page',
  imports: [RacunForm, RacunTabela],
  templateUrl: './racun-page.html',
  styleUrl: './racun-page.css',
})
export class RacunPage {
  racunControl = inject(RacunControl);

  constructor(){
    this.dataRefresh();
  }

  dataRefresh(){
    this.racunControl.getAllItems();
  }
}
