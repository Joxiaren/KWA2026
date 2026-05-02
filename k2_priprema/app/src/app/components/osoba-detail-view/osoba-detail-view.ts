import { Component } from '@angular/core';
import { BaseDetailView } from 'app/components/base-components/base-detail-view/base-detail-view';
import { Osoba } from 'model/osoba';

@Component({
  selector: 'app-osoba-detail-view',
  imports: [],
  templateUrl: './osoba-detail-view.html',
  styleUrl: './osoba-detail-view.css',
})
export class OsobaDetailView extends BaseDetailView<Osoba> {

}
