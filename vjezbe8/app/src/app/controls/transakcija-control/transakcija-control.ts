import { inject, Injectable } from '@angular/core';
import { GenericControl } from 'app/controls/generic-control/generic-control';
import { RacunControl } from 'app/controls/racun-control/racun-control';
import { TransakcijaService } from 'app/services/transakcija-service';

@Injectable({
  providedIn: 'root',
})
export class TransakcijaControl extends GenericControl<number, Transakcija> {
    override service = inject(TransakcijaService)
    racunControl = inject(RacunControl);

    override getAllItems(){
      this.service.getAll().subscribe(data => {
        data.map(d => {
          d.datumTransakcije = new Date(d.datumTransakcije);
        });
        this.items.set(data);
      });
    }

    override addItem(transakcija: any){
      this.service.create(transakcija).subscribe(data => {
        this.getAllItems();
      })

      let racun = this.racunControl.items().filter(racun => racun.id === transakcija.racunId)[0];

      racun.stanje += transakcija.iznos;
      this.racunControl.editItem(racun);
    }
}
