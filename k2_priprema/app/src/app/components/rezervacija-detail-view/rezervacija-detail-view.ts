import { Component } from '@angular/core';
import { BaseDetailView } from 'app/components/base-components/base-detail-view/base-detail-view';
import { Rezervacija } from 'model/rezervacija';

@Component({
  selector: 'app-rezervacija-detail-view',
  imports: [],
  templateUrl: './rezervacija-detail-view.html',
  styleUrl: './rezervacija-detail-view.css',
})
export class RezervacijaDetailView extends BaseDetailView<Rezervacija>{
  
}
