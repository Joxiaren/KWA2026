import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RezervacijaDetailView } from 'app/components/rezervacija-detail-view/rezervacija-detail-view';
import { RezervacijaControl } from 'app/controls/rezervacija-control';
import { Rezervacija } from 'model/rezervacija';

@Component({
  selector: 'app-rezervacija-view-page',
  imports: [RezervacijaDetailView],
  templateUrl: './rezervacija-view-page.html',
  styleUrl: './rezervacija-view-page.css',
})
export class RezervacijaViewPage {
  activatedRoute = inject(ActivatedRoute);

  rezervacijaControl = inject(RezervacijaControl);

  itemShow : WritableSignal<Rezervacija | null> = signal(null);

  constructor(){
    this.activatedRoute.params.subscribe((params) => {
      this.rezervacijaControl.getItem(params['rezervacijaId'], this.itemShow);
    })
  }

  cancelReservation(){
    if(this.itemShow() == undefined) return;

    let r = {
      id: this.itemShow()!.id,
      idOsobe: this.itemShow()!.idOsobe,
      brojSobe: this.itemShow()!.brojSobe,
      opis: this.itemShow()!.opis,
      cena: this.itemShow()!.cena,
      pocetakRezervacije: null,
      krajRezervacije: null
    }

    this.rezervacijaControl.editItem(r);
    this.rezervacijaControl.getItem(this.itemShow()!.id, this.itemShow);
  }
}

