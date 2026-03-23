import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-transakcija-form',
  imports: [ReactiveFormsModule],
  templateUrl: './transakcija-form.html',
  styleUrl: './transakcija-form.css',
})
export class TransakcijaForm implements OnChanges{

  beforeTodayValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const dateInput = new Date(control.value);
      const isBefore = dateInput.getTime() < new Date().getTime();
      return isBefore ? {beforeToday: {value: control.value}} : null;
    }
  }

  form = new FormGroup({
    id : new FormControl(),
    tip : new FormControl(),
    iznos: new FormControl(),
    datumTransakcije: new FormControl<Date>(new Date(), 
      this.beforeTodayValidator()
    ),
    klijentId: new FormControl(),
    racunId: new FormControl()
  });

  mode = signal<string>("add");
  
  datumWarning = signal<boolean>(false);

  @Input()
  klijenti: Klijent[] = [];
  @Input()
  racuni: Racun[] = [];
  @Input()
  receive: Transakcija | null = null;
  
  ngOnChanges(changes: SimpleChanges): void{
    if(changes['receive'] == undefined) return;
    if(changes['receive'].currentValue != changes['receive'].previousValue){
      if(this.receive === null){
        this.form.reset();
        this.mode.set("add");
      }
      else{
        this.form.setValue(this.receive);
        this.mode.set("edit");
      }
    }
  }

  @Output()
  editEmit = new EventEmitter<any>();
  @Output()
  addEmit = new EventEmitter<any>();

  addEvent(){
    if(!this.form.get('datumTransakcije')?.valid){
      this.datumWarning.set(true);
      return;
    }
    this.datumWarning.set(false);

    if(this.mode() == "add"){
      this.addEmit.emit(this.form.value);
    }
    else{
      this.editEmit.emit(this.form.value);
    }
  }
}
