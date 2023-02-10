import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBxComponent } from './search-bx.component';

describe('SearchBxComponent', () => {
  let component: SearchBxComponent;
  let fixture: ComponentFixture<SearchBxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
