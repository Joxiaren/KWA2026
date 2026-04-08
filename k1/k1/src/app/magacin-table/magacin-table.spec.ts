import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagacinTable } from './magacin-table';

describe('MagacinTable', () => {
  let component: MagacinTable;
  let fixture: ComponentFixture<MagacinTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagacinTable],
    }).compileComponents();

    fixture = TestBed.createComponent(MagacinTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
