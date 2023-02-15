import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAniversaryComponent } from './work-aniversary.component';

describe('WorkAniversaryComponent', () => {
  let component: WorkAniversaryComponent;
  let fixture: ComponentFixture<WorkAniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAniversaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
