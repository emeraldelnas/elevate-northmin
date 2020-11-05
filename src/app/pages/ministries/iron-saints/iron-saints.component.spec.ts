import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronSaintsComponent } from './iron-saints.component';

describe('IronSaintsComponent', () => {
  let component: IronSaintsComponent;
  let fixture: ComponentFixture<IronSaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronSaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronSaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
