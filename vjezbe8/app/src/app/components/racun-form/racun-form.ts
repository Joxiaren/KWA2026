import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GenericForm } from 'app/components/generics/generic-form/generic-form';

@Component({
  selector: 'app-racun-form',
  imports: [ReactiveFormsModule],
  templateUrl: './racun-form.html',
  styleUrl: './racun-form.css',
})
export class RacunForm extends GenericForm<Racun>{
  
  override form = new FormGroup({
    id : new FormControl(),
    brojRacuna: new FormControl(),
    stanje: new FormControl()
  })
}
