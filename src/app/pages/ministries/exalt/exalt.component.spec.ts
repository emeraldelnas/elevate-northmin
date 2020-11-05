import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaltComponent } from './exalt.component';

describe('ExaltComponent', () => {
  let component: ExaltComponent;
  let fixture: ComponentFixture<ExaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
