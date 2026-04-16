import { inject, Injectable } from '@angular/core';
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { KlijentService } from 'app/services/klijent-service';

@Injectable({
  providedIn: 'root',
})
export class KlijentControl extends GenericControl<number, Klijent>{
  override service = inject(KlijentService);
}
