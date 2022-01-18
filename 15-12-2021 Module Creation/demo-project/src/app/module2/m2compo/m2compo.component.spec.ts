import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2compoComponent } from './m2compo.component';

describe('M2compoComponent', () => {
  let component: M2compoComponent;
  let fixture: ComponentFixture<M2compoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2compoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M2compoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
