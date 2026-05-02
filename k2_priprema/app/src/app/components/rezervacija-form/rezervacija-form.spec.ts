import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaForm } from './rezervacija-form';

describe('RezervacijaForm', () => {
  let component: RezervacijaForm;
  let fixture: ComponentFixture<RezervacijaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervacijaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
