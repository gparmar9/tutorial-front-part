import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingCreateComponent } from './lending-create.component';

describe('LendingCreateComponent', () => {
  let component: LendingCreateComponent;
  let fixture: ComponentFixture<LendingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
