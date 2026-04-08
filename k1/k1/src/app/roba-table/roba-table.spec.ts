import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobaTable } from './roba-table';

describe('RobaTable', () => {
  let component: RobaTable;
  let fixture: ComponentFixture<RobaTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobaTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RobaTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
