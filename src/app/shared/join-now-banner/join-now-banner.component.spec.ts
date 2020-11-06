import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinNowBannerComponent } from './join-now-banner.component';

describe('JoinNowBannerComponent', () => {
  let component: JoinNowBannerComponent;
  let fixture: ComponentFixture<JoinNowBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinNowBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinNowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
