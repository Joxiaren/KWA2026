import { Component, computed, inject, OnChanges, SimpleChanges } from '@angular/core';
import { RezervacijaControl } from 'app/controls/rezervacija-control';
import { RezervacijaTable } from "app/components/rezervacija-table/rezervacija-table";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rezervacija-page',
  imports: [RezervacijaTable],
  templateUrl: './rezervacija-page.html',
  styleUrl: './rezervacija-page.css',
})
export class RezervacijaPage {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  rezervacijaControl = inject(RezervacijaControl);
  
  constructor(){
    this.dataRefresh()
    this.rezervacijaControl.itemEditEmit.subscribe(e => {
      this.router.navigate([`${e}/edit`], {relativeTo: this.activatedRoute})
    });
  }

  dataRefresh(){
    this.rezervacijaControl.getAllItems();
  }
  add(){
    this.router.navigate([`add`], {relativeTo: this.activatedRoute});
  }
}
