import { Injectable } from '@angular/core';
import { Osoba } from 'model/osoba';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root',
})
export class OsobaService extends BaseService<Osoba>{
  override resource = "osobe";
}
