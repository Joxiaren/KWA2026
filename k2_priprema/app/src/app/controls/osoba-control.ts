import { inject, Injectable } from '@angular/core';
import { BaseControl } from './base-control';
import { Osoba } from 'model/osoba';
import { BaseService } from 'app/services/base-service';
import { OsobaService } from 'app/services/osoba-service';

@Injectable({
  providedIn: 'root',
})
export class OsobaControl extends BaseControl<Osoba>{
  override service = inject(OsobaService);
  
}
