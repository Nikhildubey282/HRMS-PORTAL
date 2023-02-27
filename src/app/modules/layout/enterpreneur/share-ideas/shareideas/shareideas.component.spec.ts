import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareideasComponent } from './shareideas.component';

describe('ShareideasComponent', () => {
  let component: ShareideasComponent;
  let fixture: ComponentFixture<ShareideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareideasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
