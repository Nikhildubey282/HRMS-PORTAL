import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerydialogComponent } from './gallerydialog.component';

describe('GallerydialogComponent', () => {
  let component: GallerydialogComponent;
  let fixture: ComponentFixture<GallerydialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerydialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
