import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DboardingComponent } from './dboarding.component';

describe('DboardingComponent', () => {
  let component: DboardingComponent;
  let fixture: ComponentFixture<DboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
