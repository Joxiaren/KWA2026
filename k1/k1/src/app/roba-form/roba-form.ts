import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-roba-form',
  imports: [ReactiveFormsModule],
  templateUrl: './roba-form.html',
  styleUrl: './roba-form.css',
})
export class RobaForm implements OnChanges{

  form = new FormGroup({
    id : new FormControl(),
    naziv: new FormControl(),
    opis: new FormControl(),
    cena: new FormControl(),
    kolicina: new FormControl(),
    jedinica: new FormControl(),
    magacin_id : new FormControl()
  });

  mode = signal<string>("add");

  @Input()
  magacini: Magacin[] = [];
  @Input()
  receive: Roba | null = null;

  ngOnChanges(changes: SimpleChanges): void {
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
    if(this.mode() == "add"){
      this.addEmit.emit(this.form.value);
    }
    else{
      this.editEmit.emit(this.form.value);
    }
  }
}
