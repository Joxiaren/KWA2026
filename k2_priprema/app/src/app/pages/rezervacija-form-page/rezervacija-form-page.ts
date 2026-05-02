import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RezervacijaForm } from 'app/components/rezervacija-form/rezervacija-form';
import { RezervacijaControl } from 'app/controls/rezervacija-control';

@Component({
  selector: 'app-rezervacija-form-page',
  imports: [RezervacijaForm],
  templateUrl: './rezervacija-form-page.html',
  styleUrl: './rezervacija-form-page.css',
})
export class RezervacijaFormPage {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  
  rezervacijaControl = inject(RezervacijaControl);

  constructor(){
    this.activatedRoute.params.subscribe((params) => {
      if(params['rezervacijaId'] == null) {
        this.rezervacijaControl.itemEdit.set(null);
        return;
      }
    
      this.rezervacijaControl.getItem(params['rezervacijaId'], this.rezervacijaControl.itemEdit)
    })
  }
  submitEvent(success: boolean){
    if(success) this.location.back();
  }
  cancel(){
    this.location.back();
  }
}
