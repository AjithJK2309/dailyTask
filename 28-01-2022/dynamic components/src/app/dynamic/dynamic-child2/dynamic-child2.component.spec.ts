import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChild2Component } from './dynamic-child2.component';

describe('DynamicChild2Component', () => {
  let component: DynamicChild2Component;
  let fixture: ComponentFixture<DynamicChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
