import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocumentComponent } from './policy-document.component';

describe('PolicyDocumentComponent', () => {
  let component: PolicyDocumentComponent;
  let fixture: ComponentFixture<PolicyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
