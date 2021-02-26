import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastBorrowingComponent } from './past-borrowing.component';

describe('PastBorrowingComponent', () => {
  let component: PastBorrowingComponent;
  let fixture: ComponentFixture<PastBorrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastBorrowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
