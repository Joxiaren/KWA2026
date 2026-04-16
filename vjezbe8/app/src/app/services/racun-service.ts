import { Injectable } from '@angular/core';
import { GenericService } from 'app/services/generic-service';

@Injectable({
  providedIn: 'root',
})
export class RacunService extends GenericService<number, Racun>{
  override resource: string = "racuni";
}
