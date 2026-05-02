import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaViewPage } from './osoba-view-page';

describe('OsobaViewPage', () => {
  let component: OsobaViewPage;
  let fixture: ComponentFixture<OsobaViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
