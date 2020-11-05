import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsheringComponent } from './ushering.component';

describe('UsheringComponent', () => {
  let component: UsheringComponent;
  let fixture: ComponentFixture<UsheringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsheringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsheringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
