import { Injectable } from '@angular/core';
import { GenericService } from 'app/services/generic-service';

@Injectable({
  providedIn: 'root',
})
export class KlijentService extends GenericService<number, Klijent>{
  override resource: string = "klijenti";
  
}
