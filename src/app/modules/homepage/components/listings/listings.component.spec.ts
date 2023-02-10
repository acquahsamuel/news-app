import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiListingsComponent } from './listings.component';

describe('LiListingsComponent', () => {
  let component: LiListingsComponent;
  let fixture: ComponentFixture<LiListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
