import { Component, Input, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { GenericForm } from 'app/components/generics/generic-form/generic-form';

@Component({
  selector: 'app-transakcija-form',
  imports: [ReactiveFormsModule],
  templateUrl: './transakcija-form.html',
  styleUrl: './transakcija-form.css',
})
export class TransakcijaForm extends GenericForm<Transakcija>{

  beforeTodayValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const dateInput = new Date(control.value);
      const isBefore = dateInput < new Date();
      return isBefore ? {beforeToday: {value: control.value}} : null;
    }
  }

  override form = new FormGroup({
    id : new FormControl(),
    tip : new FormControl(),
    iznos: new FormControl(),
    datumTransakcije: new FormControl<Date>(new Date(), 
      this.beforeTodayValidator()
    ),
    klijentId: new FormControl(),
    racunId: new FormControl()
  });

  datumWarning = signal<boolean>(false);

  @Input()
  klijenti: Klijent[] = [];
  @Input()
  racuni: Racun[] = [];

  override addEvent(){
    if(!this.form.get('datumTransakcije')?.valid){
      this.datumWarning.set(true);
      return;
    }
    this.datumWarning.set(false);

    super.addEvent();
  }
}
