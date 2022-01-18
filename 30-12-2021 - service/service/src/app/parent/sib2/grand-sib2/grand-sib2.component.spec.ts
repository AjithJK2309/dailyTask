import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSib2Component } from './grand-sib2.component';

describe('GrandSib2Component', () => {
  let component: GrandSib2Component;
  let fixture: ComponentFixture<GrandSib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandSib2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandSib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
