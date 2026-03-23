import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-racun-form',
  imports: [ReactiveFormsModule],
  templateUrl: './racun-form.html',
  styleUrl: './racun-form.css',
})
export class RacunForm implements OnChanges{
  
  form = new FormGroup({
    id : new FormControl(),
    brojRacuna: new FormControl(),
    stanje: new FormControl()
  })
  
  mode = signal<string>("add");

  @Input()
  receive: Racun | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["receive"].currentValue != changes["receive"].previousValue){
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
    if(this.mode() == "add"){
      this.addEmit.emit(this.form.value);
    }
    else{
      this.editEmit.emit(this.form.value);
    }
  }
}
