import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastBorrowingsComponent } from './past-borrowings.component';

describe('PastBorrowingsComponent', () => {
  let component: PastBorrowingsComponent;
  let fixture: ComponentFixture<PastBorrowingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastBorrowingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastBorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
