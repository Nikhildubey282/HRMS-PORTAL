import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDeclarationsComponent } from './assets-declarations.component';

describe('AssetsDeclarationsComponent', () => {
  let component: AssetsDeclarationsComponent;
  let fixture: ComponentFixture<AssetsDeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDeclarationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
