import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaViewPage } from './rezervacija-view-page';

describe('RezervacijaViewPage', () => {
  let component: RezervacijaViewPage;
  let fixture: ComponentFixture<RezervacijaViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervacijaViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijaViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
