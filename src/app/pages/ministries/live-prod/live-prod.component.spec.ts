import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProdComponent } from './live-prod.component';

describe('LiveProdComponent', () => {
  let component: LiveProdComponent;
  let fixture: ComponentFixture<LiveProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
