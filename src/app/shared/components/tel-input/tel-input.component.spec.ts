import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTel, MyTelInput } from './tel-input.component';

describe('TelInputComponent', () => {
  let component: MyTelInput;
  let fixture: ComponentFixture<MyTelInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTelInput ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTelInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
