import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpreneurComponent } from './enterpreneur.component';

describe('EnterpreneurComponent', () => {
  let component: EnterpreneurComponent;
  let fixture: ComponentFixture<EnterpreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
