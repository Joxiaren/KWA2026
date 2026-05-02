import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaFormPage } from './osoba-form-page';

describe('OsobaFormPage', () => {
  let component: OsobaFormPage;
  let fixture: ComponentFixture<OsobaFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
