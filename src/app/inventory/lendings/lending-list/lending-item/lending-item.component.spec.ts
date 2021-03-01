import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingItemComponent } from './lending-item.component';

describe('LendingItemComponent', () => {
  let component: LendingItemComponent;
  let fixture: ComponentFixture<LendingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
