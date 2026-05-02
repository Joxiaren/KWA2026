import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaDetailView } from './rezervacija-detail-view';

describe('RezervacijaDetailView', () => {
  let component: RezervacijaDetailView;
  let fixture: ComponentFixture<RezervacijaDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervacijaDetailView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijaDetailView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
