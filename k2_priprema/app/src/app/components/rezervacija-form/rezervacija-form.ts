import { Component, Input, signal, Signal, SimpleChanges } from '@angular/core';
import { BaseForm } from 'app/components/base-components/base-form/base-form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Rezervacija } from 'model/rezervacija';
import { Osoba } from 'model/osoba';

@Component({
  selector: 'app-rezervacija-form',
  imports: [ReactiveFormsModule],
  templateUrl: './rezervacija-form.html',
  styleUrl: './rezervacija-form.css',
})
export class RezervacijaForm extends BaseForm<Rezervacija>{
  override form = new FormGroup({
    id: new FormControl(),
    idOsobe: new FormControl(),
    brojSobe: new FormControl(),
    opis: new FormControl(),
    cena: new FormControl(),
    pocetakRezervacije: new FormControl(),
    krajRezervacije: new FormControl()
  });

  @Input()
  osobe: Signal<Osoba[]> = signal([]);

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (this.editItem != undefined){
      this.form.controls.pocetakRezervacije.setValue(this.editItem.pocetakRezervacije?.toISOString().slice(0, -14));
      this.form.controls.krajRezervacije.setValue(this.editItem.krajRezervacije?.toISOString().slice(0, -14));
    }
  }
}
