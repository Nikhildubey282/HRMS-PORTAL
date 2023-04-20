import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokedLeaveComponent } from './revoked-leave.component';

describe('RevokedLeaveComponent', () => {
  let component: RevokedLeaveComponent;
  let fixture: ComponentFixture<RevokedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevokedLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
