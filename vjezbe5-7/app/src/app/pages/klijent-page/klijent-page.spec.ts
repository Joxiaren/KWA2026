import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentPage } from './klijent-page';

describe('KlijentPage', () => {
  let component: KlijentPage;
  let fixture: ComponentFixture<KlijentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlijentPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlijentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
