import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySessionComponent } from './security-session.component';

describe('SecuritySessionComponent', () => {
  let component: SecuritySessionComponent;
  let fixture: ComponentFixture<SecuritySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritySessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
