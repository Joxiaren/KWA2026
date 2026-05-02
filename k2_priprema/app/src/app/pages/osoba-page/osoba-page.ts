import { Component, inject } from '@angular/core';
import { OsobaControl } from 'app/controls/osoba-control';
import { OsobaForm } from "app/components/osoba-form/osoba-form";
import { OsobaTable } from "app/components/osoba-table/osoba-table";
import { BaseControl } from 'app/controls/base-control';
import { Osoba } from 'model/osoba';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-osoba-page',
  imports: [OsobaTable],
  templateUrl: './osoba-page.html',
  styleUrl: './osoba-page.css',
})
export class OsobaPage {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  osobaControl : BaseControl<Osoba> = inject(OsobaControl)

  constructor(){
    this.dataRefresh()
    this.osobaControl.itemEditEmit.subscribe(e => {
      this.router.navigate([`${e}/edit`], {relativeTo: this.activatedRoute})
    });
  }

  dataRefresh(){
    this.osobaControl.getAllItems();
  }
  add(){
    this.router.navigate(['add'], {relativeTo: this.activatedRoute})
  }
}
