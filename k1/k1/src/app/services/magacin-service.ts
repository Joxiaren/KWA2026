import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class MagacinService extends GenericService<number, Magacin> {
  override resource: string = "magacin";
}
