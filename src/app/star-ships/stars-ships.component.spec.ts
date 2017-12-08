import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsShipsComponent } from './stars-ships.component';

describe('StarsShipsComponent', () => {
  let component: StarsShipsComponent;
  let fixture: ComponentFixture<StarsShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
