import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrcomComponent } from './errcom.component';

describe('ErrcomComponent', () => {
  let component: ErrcomComponent;
  let fixture: ComponentFixture<ErrcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
