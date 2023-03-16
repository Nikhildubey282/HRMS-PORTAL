import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytrainingComponent } from './mytraining.component';

describe('MytrainingComponent', () => {
  let component: MytrainingComponent;
  let fixture: ComponentFixture<MytrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
