import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCantinereComponent } from './menu-cantinere.component';

describe('MenuCantinereComponent', () => {
  let component: MenuCantinereComponent;
  let fixture: ComponentFixture<MenuCantinereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCantinereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCantinereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
