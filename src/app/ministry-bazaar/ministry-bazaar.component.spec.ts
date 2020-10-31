import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryBazaarComponent } from './ministry-bazaar.component';

describe('MinistryBazaarComponent', () => {
  let component: MinistryBazaarComponent;
  let fixture: ComponentFixture<MinistryBazaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryBazaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryBazaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
