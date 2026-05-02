import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OsobaForm } from 'app/components/osoba-form/osoba-form';
import { OsobaControl } from 'app/controls/osoba-control';

@Component({
  selector: 'app-osoba-form-page',
  imports: [OsobaForm],
  templateUrl: './osoba-form-page.html',
  styleUrl: './osoba-form-page.css',
})
export class OsobaFormPage {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);

  osobaControl = inject(OsobaControl);

  constructor(){
    this.activatedRoute.params.subscribe((params) => {
      if(params['osobaId'] == null){
        this.osobaControl.itemEdit.set(null);
        return;
      }

      this.osobaControl.getItem(params['osobaId'], this.osobaControl.itemEdit);
    })
  }
  submitEvent(success: boolean){
    if(success) this.location.back();
  }
  cancel(){
    this.location.back();
  }
}
