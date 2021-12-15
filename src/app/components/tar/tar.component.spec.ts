import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarComponent } from './tar.component';

describe('TarComponent', () => {
  let component: TarComponent;
  let fixture: ComponentFixture<TarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
