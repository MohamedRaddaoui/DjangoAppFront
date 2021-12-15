import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarComponent } from './add-tar.component';

describe('AddTarComponent', () => {
  let component: AddTarComponent;
  let fixture: ComponentFixture<AddTarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
