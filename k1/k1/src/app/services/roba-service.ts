import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class RobaService extends GenericService<number, Roba> {
  override resource: string = "roba";
}
