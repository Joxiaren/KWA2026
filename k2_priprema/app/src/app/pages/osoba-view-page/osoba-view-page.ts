import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OsobaDetailView } from 'app/components/osoba-detail-view/osoba-detail-view';
import { OsobaControl } from 'app/controls/osoba-control';
import { Osoba } from 'model/osoba';

@Component({
  selector: 'app-osoba-view-page',
  imports: [OsobaDetailView],
  templateUrl: './osoba-view-page.html',
  styleUrl: './osoba-view-page.css',
})
export class OsobaViewPage {
  activatedRoute = inject(ActivatedRoute);

  osobaControl = inject(OsobaControl);

  itemShow : WritableSignal<Osoba | null> = signal(null);

  constructor(){
    this.activatedRoute.params.subscribe((params) => {
      this.osobaControl.getItem(params['osobaId'], this.itemShow);
    })
  }
  
}
