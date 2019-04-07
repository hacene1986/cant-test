import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsncriptionComponent } from './isncription.component';

describe('IsncriptionComponent', () => {
  let component: IsncriptionComponent;
  let fixture: ComponentFixture<IsncriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsncriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsncriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
