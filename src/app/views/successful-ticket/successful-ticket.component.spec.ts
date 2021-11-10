import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTicketComponent } from './successful-ticket.component';

describe('SuccessfulTicketComponent', () => {
  let component: SuccessfulTicketComponent;
  let fixture: ComponentFixture<SuccessfulTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
