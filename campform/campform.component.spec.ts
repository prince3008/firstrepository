import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampformComponent } from './campform.component';

describe('CampformComponent', () => {
  let component: CampformComponent;
  let fixture: ComponentFixture<CampformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
