import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaDetailView } from './osoba-detail-view';

describe('OsobaVDetailiew', () => {
  let component: OsobaDetailView;
  let fixture: ComponentFixture<OsobaDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaDetailView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaDetailView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
