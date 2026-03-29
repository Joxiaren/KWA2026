import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GenericForm } from 'app/generic-form/generic-form';

@Component({
  selector: 'app-klijent-form',
  imports: [ReactiveFormsModule],
  templateUrl: './klijent-form.html',
  styleUrl: './klijent-form.css',
})
export class KlijentForm extends GenericForm<Klijent>{  
  override form = new FormGroup({
    id: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl()
  })
}
