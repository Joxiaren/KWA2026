import { Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.css',
})
export class Status {
  @Input()
  status : number = 0;
}
