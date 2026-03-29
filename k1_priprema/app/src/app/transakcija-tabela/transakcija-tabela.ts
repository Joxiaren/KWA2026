import { Component, computed, Signal} from '@angular/core';
import { GenericTable } from 'app/generic-table/generic-table';
import { SortableHeader } from 'app/directives/sortable-header';

@Component({
  selector: 'app-transakcija-tabela',
  imports: [SortableHeader],
  templateUrl: './transakcija-tabela.html',
  styleUrl: './transakcija-tabela.css',
})
export class TransakcijaTabela extends GenericTable<Transakcija>{

  iznosDirection : Signal<boolean | null> = computed(
    () => this.findSortDirection("iznos")
    
  );
  datumDirection : Signal<boolean | null> = computed(
    () => this.findSortDirection("datumTransakcije")
  );
}

