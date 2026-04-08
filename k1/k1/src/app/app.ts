import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MagacinService } from './services/magacin-service';
import { RobaService } from './services/roba-service';
import { RobaForm } from './roba-form/roba-form';
import { RobaTable } from './roba-table/roba-table';
import { MagacinForm } from './magacin-form/magacin-form';
import { MagacinTable } from './magacin-table/magacin-table';

@Component({
  selector: 'app-root',
  imports: [RobaForm, RobaTable, MagacinForm, MagacinTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  magacinService = inject(MagacinService);
  robaService = inject(RobaService);

  magacini : WritableSignal<Magacin[]> = signal<Magacin[]>([]);
  robas : WritableSignal<Roba[]> = signal<Roba[]>([]);

  magacinEdit = signal<Magacin | null>(null);
  robaEdit = signal<Roba | null>(null);

  constructor(){
    this.dataRefresh();
  }

  getAllMagacin(){
    this.magacinService.getAll().subscribe(data => {
      this.magacini.set(data);
    })
  }
  addMagacin(magacin: any){
    this.magacinService.create(magacin).subscribe(data=>{
      this.getAllMagacin();
    })
  }
  setEditMagacin(index: number){
    this.magacinEdit.set(this.magacini()[index]);
  }
  editMagacin(magacin: any){
    this.magacinService.update(magacin.id, magacin).subscribe(data=>{
      this.getAllMagacin();
    })
    this.magacinEdit.set(null);
  }
  deleteMagacin(index: number){
    let id = this.magacini()[index]["id"];
    this.magacinService.delete(id).subscribe(data => {
      this.getAllMagacin();
    });
    this.magacinEdit.set(null);
  }

  getAllRoba(){
    this.robaService.getAll().subscribe(data => {
      this.robas.set(data);
    });
  }
  addRoba(roba: any){
    this.robaService.create(roba).subscribe(data => {
      this.getAllRoba();
    });
  }
  setEditRoba(index: number){
    this.robaEdit.set(this.robas()[index]);
  }
  editRoba(roba: any){
    this.robaService.update(roba.id, roba).subscribe(data =>{
      this.getAllRoba();
    });
    this.robaEdit.set(null);
  }
  deleteRoba(index: number){
    let id = this.robas()[index]["id"];
    this.robaService.delete(id).subscribe(data=>{
      this.getAllRoba();
    });
    this.robaEdit.set(null);
  }


  dataRefresh(){
    this.getAllMagacin();
    this.getAllRoba();
  }
}
