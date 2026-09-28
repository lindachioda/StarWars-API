import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starship } from './starship';

describe('Starship', () => {
  let component: Starship;
  let fixture: ComponentFixture<Starship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starship],
    }).compileComponents();

    fixture = TestBed.createComponent(Starship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
