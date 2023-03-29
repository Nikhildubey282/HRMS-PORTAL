import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDocumentsComponent } from './common-documents.component';

describe('CommonDocumentsComponent', () => {
  let component: CommonDocumentsComponent;
  let fixture: ComponentFixture<CommonDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
