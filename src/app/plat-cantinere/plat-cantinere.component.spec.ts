import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatCantinereComponent } from './plat-cantinere.component';

describe('PlatCantinereComponent', () => {
  let component: PlatCantinereComponent;
  let fixture: ComponentFixture<PlatCantinereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatCantinereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatCantinereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
