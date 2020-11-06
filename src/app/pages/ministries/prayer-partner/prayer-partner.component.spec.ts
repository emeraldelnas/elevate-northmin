import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerPartnerComponent } from './prayer-partner.component';

describe('PrayerPartnerComponent', () => {
  let component: PrayerPartnerComponent;
  let fixture: ComponentFixture<PrayerPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
