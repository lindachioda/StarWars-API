import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Speci } from './speci';

describe('Speci', () => {
  let component: Speci;
  let fixture: ComponentFixture<Speci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Speci],
    }).compileComponents();

    fixture = TestBed.createComponent(Speci);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
