import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedTrainingComponent } from './requested-training.component';

describe('RequestedTrainingComponent', () => {
  let component: RequestedTrainingComponent;
  let fixture: ComponentFixture<RequestedTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
