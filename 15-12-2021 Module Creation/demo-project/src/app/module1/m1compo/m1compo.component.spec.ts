import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1compoComponent } from './m1compo.component';

describe('M1compoComponent', () => {
  let component: M1compoComponent;
  let fixture: ComponentFixture<M1compoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1compoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1compoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
