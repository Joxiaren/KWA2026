import { Component } from '@angular/core';
import { BaseTable } from 'app/components/base-components/base-table/base-table';
import { ClickStopPropagation } from 'app/directives/click-stop-propagation';
import { Osoba } from 'model/osoba';

@Component({
  selector: 'app-osoba-table',
  imports: [ClickStopPropagation],
  templateUrl: './osoba-table.html',
  styleUrl: './osoba-table.css',
})
export class OsobaTable extends BaseTable<Osoba> {

}
