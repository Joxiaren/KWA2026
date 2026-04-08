import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobaForm } from './roba-form';

describe('RobaForm', () => {
  let component: RobaForm;
  let fixture: ComponentFixture<RobaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RobaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
