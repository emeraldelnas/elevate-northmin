import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchmenComponent } from './watchmen.component';

describe('WatchmenComponent', () => {
  let component: WatchmenComponent;
  let fixture: ComponentFixture<WatchmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
