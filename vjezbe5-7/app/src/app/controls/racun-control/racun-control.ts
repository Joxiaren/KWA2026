import { inject, Injectable } from '@angular/core';
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { RacunService } from 'app/services/racun-service';

@Injectable({
  providedIn: 'root',
})
export class RacunControl extends GenericControl<number, Racun>{
  override service = inject(RacunService);
}
