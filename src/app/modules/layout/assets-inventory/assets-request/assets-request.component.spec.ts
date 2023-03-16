import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsRequestComponent } from './assets-request.component';

describe('AssetsRequestComponent', () => {
  let component: AssetsRequestComponent;
  let fixture: ComponentFixture<AssetsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
