import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './generic-form.html',
  styleUrl: './generic-form.css',
})
export class GenericForm<Type> implements OnChanges{
  @Input()
  editItem : any | null = null;

  @Output() 
  editEmit = new EventEmitter<any>();
  @Output()
  addEmit = new EventEmitter<any>();
  
  form : FormGroup = new FormGroup({});

  mode = signal<string>("add");


  addEvent(){
    if(this.mode() === "add") this.addEmit.emit(this.form.value);
    else this.editEmit.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["editItem"] == undefined) return;
    if(changes["editItem"].currentValue != changes["editItem"].previousValue){
      if(this.editItem === null) {
        this.form.reset();
        this.mode.set("add");
      }
      else{
        this.form.setValue(this.editItem);
        this.mode.set("edit");
      }
    }
  }

}
