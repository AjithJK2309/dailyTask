import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAdsComponent } from './dynamic-ads.component';

describe('DynamicAdsComponent', () => {
  let component: DynamicAdsComponent;
  let fixture: ComponentFixture<DynamicAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
