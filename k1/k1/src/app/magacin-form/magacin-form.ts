import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdresaForm } from 'app/adresa-form/adresa-form';

@Component({
  selector: 'app-magacin-form',
  imports: [ReactiveFormsModule, AdresaForm],
  templateUrl: './magacin-form.html',
  styleUrl: './magacin-form.css',
})
export class MagacinForm implements OnChanges{
  form = new FormGroup({
    id: new FormControl(),
    naziv: new FormControl(),
    adresa: new FormControl(),
    kapacitet: new FormControl()
});

  mode = signal<string>("add");

  @Input()
  receive : Magacin | null = null;

  adresaString = signal<string>("");
  adresaSend = signal<boolean>(false);

  ngOnChanges(changes: SimpleChanges): void{
    if(changes["receive"].currentValue != changes["receive"].previousValue){
      if(this.receive === null){
        this.form.reset();
        this.mode.set("add");
        this.adresaString.set("");
      }
      else{
        this.form.setValue(this.receive);
        this.mode.set("edit");
        this.adresaString.set(this.receive.adresa);
      }
    }
  }

  @Output()
  editEmit = new EventEmitter<any>();

  @Output()
  addEmit = new EventEmitter<any>();

  updateAdress(a : string){
    this.adresaString.set(a);
  }

  addEvent(){
    this.form.controls.adresa.setValue(this.adresaString());

    if(this.mode() === "add"){
      this.addEmit.emit(this.form.value);
    }
    else{
      this.editEmit.emit(this.form.value);
    }
  }
}
