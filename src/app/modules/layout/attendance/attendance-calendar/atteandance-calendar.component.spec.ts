import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtteandanceCalendarComponent } from './atteandance-calendar.component';

describe('AtteandanceCalendarComponent', () => {
  let component: AtteandanceCalendarComponent;
  let fixture: ComponentFixture<AtteandanceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtteandanceCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtteandanceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
