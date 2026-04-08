import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunPage } from './racun-page';

describe('RacunPage', () => {
  let component: RacunPage;
  let fixture: ComponentFixture<RacunPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacunPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacunPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
