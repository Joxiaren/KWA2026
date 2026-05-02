import { Component } from '@angular/core';
import { Osoba } from 'model/osoba';
import { BaseForm } from 'app/components/base-components/base-form/base-form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-osoba-form',
  imports: [ReactiveFormsModule],
  templateUrl: './osoba-form.html',
  styleUrl: './osoba-form.css',
})
export class OsobaForm extends BaseForm<Osoba>{
  override form = new FormGroup({
      id: new FormControl(),
      ime: new FormControl(),
      prezime: new FormControl()
  });
}
