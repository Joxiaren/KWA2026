import { Component, inject, signal } from '@angular/core';
import { KlijentForm } from 'app/components/klijent-form/klijent-form';
import { KlijentService } from 'app/services/klijent-service';
import { KlijentTabela } from 'app/components/klijent-tabela/klijent-tabela';
import { RacunForm } from 'app/components/racun-form/racun-form';
import { RacunService } from 'app/services/racun-service';
import { RacunTabela } from 'app/components/racun-tabela/racun-tabela';
import { TransakcijaForm } from 'app/components/transakcija-form/transakcija-form';
import { TransakcijaService } from 'app/services/transakcija-service';
import { TransakcijaTabela } from 'app/components/transakcija-tabela/transakcija-tabela';
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
