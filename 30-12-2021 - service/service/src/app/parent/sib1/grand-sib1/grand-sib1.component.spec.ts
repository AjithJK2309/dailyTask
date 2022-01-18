import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSib1Component } from './grand-sib1.component';

describe('GrandSib1Component', () => {
  let component: GrandSib1Component;
  let fixture: ComponentFixture<GrandSib1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandSib1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandSib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
