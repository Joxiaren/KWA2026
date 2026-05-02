import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaTable } from './osoba-table';

describe('OsobaTable', () => {
  let component: OsobaTable;
  let fixture: ComponentFixture<OsobaTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
