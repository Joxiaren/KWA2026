import { TestBed } from '@angular/core/testing';

import { OsobaControl } from './osoba-control';

describe('OsobaControl', () => {
  let service: OsobaControl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsobaControl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
