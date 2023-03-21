import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSRComponent } from './dsr.component';

describe('DSRComponent', () => {
  let component: DSRComponent;
  let fixture: ComponentFixture<DSRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
