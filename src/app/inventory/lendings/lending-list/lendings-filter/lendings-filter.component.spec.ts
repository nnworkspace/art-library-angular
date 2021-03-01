import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingsFilterComponent } from './lendings-filter.component';

describe('LendingsFilterComponent', () => {
  let component: LendingsFilterComponent;
  let fixture: ComponentFixture<LendingsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
