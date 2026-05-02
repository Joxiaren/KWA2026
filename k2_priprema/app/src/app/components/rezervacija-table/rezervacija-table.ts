import { Component } from '@angular/core';
import { Rezervacija } from 'model/rezervacija';
import { BaseTable } from 'app/components/base-components/base-table/base-table';
import { ClickStopPropagation } from 'app/directives/click-stop-propagation';

@Component({
  selector: 'app-rezervacija-table',
  imports: [ClickStopPropagation],
  templateUrl: './rezervacija-table.html',
  styleUrl: './rezervacija-table.css',
})
export class RezervacijaTable extends BaseTable<Rezervacija>{

}
