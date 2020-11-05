import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GospelSharingComponent } from './gospel-sharing.component';

describe('GospelSharingComponent', () => {
  let component: GospelSharingComponent;
  let fixture: ComponentFixture<GospelSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GospelSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GospelSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
