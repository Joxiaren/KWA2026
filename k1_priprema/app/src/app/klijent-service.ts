import { Injectable, inject } from '@angular/core';
import { GenericService } from 'app/generic-service';

@Injectable({
  providedIn: 'root',
})
export class KlijentService extends GenericService<number, Klijent>{
  override resource: string = "klijenti";
}
