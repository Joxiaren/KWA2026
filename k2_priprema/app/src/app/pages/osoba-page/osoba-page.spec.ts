import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaPage } from './osoba-page';

describe('OsobaPage', () => {
  let component: OsobaPage;
  let fixture: ComponentFixture<OsobaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
