import { Component } from '@angular/core';
import { GenericTable } from 'app/generic-table/generic-table';

@Component({
  selector: 'app-klijent-tabela',
  imports: [],
  templateUrl: './klijent-tabela.html',
  styleUrl: './klijent-tabela.css',
})
export class KlijentTabela extends GenericTable<Klijent>{
}
