import { Injectable } from '@angular/core';
import { GenericService } from 'app/services/generic-service';

@Injectable({
  providedIn: 'root',
})
export class TransakcijaService extends GenericService<number, Transakcija>{
  override resource: string = "transakcije"
}
