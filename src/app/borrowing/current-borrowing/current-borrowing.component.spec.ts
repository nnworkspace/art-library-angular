import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBorrowingComponent } from './current-borrowing.component';

describe('CurrentBorrowingComponent', () => {
  let component: CurrentBorrowingComponent;
  let fixture: ComponentFixture<CurrentBorrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBorrowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
