import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooketTicketComponent } from './booket-ticket.component';

describe('BooketTicketComponent', () => {
  let component: BooketTicketComponent;
  let fixture: ComponentFixture<BooketTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooketTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooketTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
