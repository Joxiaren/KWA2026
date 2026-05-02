import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaFormPage } from './rezervacija-form-page';

describe('RezervacijaFormPage', () => {
  let component: RezervacijaFormPage;
  let fixture: ComponentFixture<RezervacijaFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervacijaFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijaFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
