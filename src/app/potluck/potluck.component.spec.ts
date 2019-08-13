import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotluckComponent } from './potluck.component';

describe('PotluckComponent', () => {
  let component: PotluckComponent;
  let fixture: ComponentFixture<PotluckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotluckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
