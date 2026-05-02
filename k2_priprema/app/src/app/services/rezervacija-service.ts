import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { Rezervacija } from 'model/rezervacija';

@Injectable({
  providedIn: 'root',
})
export class RezervacijaService extends BaseService<Rezervacija> {
  override resource = "rezervacije";
}
