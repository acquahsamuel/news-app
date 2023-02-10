import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCheckComponent } from './type-check.component';

describe('TypeCheckComponent', () => {
  let component: TypeCheckComponent;
  let fixture: ComponentFixture<TypeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
