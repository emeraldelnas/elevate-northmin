import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveBasketsComponent } from './twelve-baskets.component';

describe('TwelveBasketsComponent', () => {
  let component: TwelveBasketsComponent;
  let fixture: ComponentFixture<TwelveBasketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveBasketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveBasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
