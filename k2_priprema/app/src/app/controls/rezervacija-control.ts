import { computed, inject, Injectable, WritableSignal } from '@angular/core';
import { Rezervacija } from 'model/rezervacija';
import { BaseControl } from './base-control';
import { RezervacijaService } from 'app/services/rezervacija-service';
import { OsobaControl } from 'app/controls/osoba-control';

@Injectable({
  providedIn: 'root',
})
export class RezervacijaControl extends BaseControl<Rezervacija> {
  override service = inject(RezervacijaService)

  osobaControl = inject(OsobaControl);

  osobaItems = computed(() => this.osobaControl.items());

  override getAllItems(){
    this.osobaControl.getAllItems();
    this.service.getAll().subscribe((data) => {
      data.map((d) => {
        if(d.pocetakRezervacije == null || d.pocetakRezervacije.toString() == "") d.pocetakRezervacije = null;
        else d.pocetakRezervacije = new Date(d.pocetakRezervacije);

        if(d.krajRezervacije == null || d.krajRezervacije.toString() == "") d.krajRezervacije = null;
        else d.krajRezervacije = new Date(d.krajRezervacije);
      });
      this.items.set(data);
    })
  }
  override getItem(index: number, s: WritableSignal<Rezervacija | null>){
    this.osobaControl.getAllItems();
    this.service?.get(index).subscribe((data) => {
      
      if(data.krajRezervacije == null || data.krajRezervacije.toString() == "") data.krajRezervacije = null;
      else data.krajRezervacije = new Date(data.krajRezervacije);

      if(data.pocetakRezervacije == null || data.pocetakRezervacije.toString() == "") data.pocetakRezervacije = null;
      else data.pocetakRezervacije = new Date(data.pocetakRezervacije);
      
      s.set(data);
    })  
  }
}
