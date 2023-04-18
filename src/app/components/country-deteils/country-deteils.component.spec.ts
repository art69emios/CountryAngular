import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDeteilsComponent } from './country-deteils.component';

describe('CountryDeteilsComponent', () => {
  let component: CountryDeteilsComponent;
  let fixture: ComponentFixture<CountryDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDeteilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
