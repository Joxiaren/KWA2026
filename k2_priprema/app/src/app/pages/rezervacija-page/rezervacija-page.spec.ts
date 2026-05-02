import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaPage } from './rezervacija-page';

describe('RezervacijaPage', () => {
  let component: RezervacijaPage;
  let fixture: ComponentFixture<RezervacijaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervacijaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
