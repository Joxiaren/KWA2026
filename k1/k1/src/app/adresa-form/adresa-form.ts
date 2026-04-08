import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-adresa-form',
  imports: [ReactiveFormsModule],
  templateUrl: './adresa-form.html',
  styleUrl: './adresa-form.css',
})
export class AdresaForm implements OnChanges{

  constructor(){
    this.form.valueChanges.subscribe(
      (value) => {
        let stringTest = (value.ulica == undefined ? "" : value.ulica) + ((value.ulica == undefined || value.mesto == undefined) ? "" : ',') + (value.mesto == undefined ? "" : value.mesto);
        this.adresaEmit.emit(stringTest);
      }
    )
  }

  @Input()
  adresaInput: string = "";

  @Output()
  adresaEmit = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("here")
    if(!(changes['adresaInput'] == undefined)) {
      if(changes['adresaInput'].currentValue != changes['adresaInput'].previousValue){
        if(this.adresaInput == "" || this.adresaInput === null) this.form.reset();
        else{
          let um = this.adresaInput.split(",");
          if(um.length == 2){
            console.log(changes['adresaInput']);
            console.log(this.adresaInput);
            console.log(um);
            this.form.setValue({
              ulica: um[0],
              mesto: um[1]
            });
          }
        }
      }
    }
  }

  form = new FormGroup({
      ulica: new FormControl(),
      mesto: new FormControl()
  });
  
  
}
