import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YlDatepickerComponent } from './yl-datepicker.component';

describe('YlDatepickerComponent', () => {
  let component: YlDatepickerComponent;
  let fixture: ComponentFixture<YlDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YlDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YlDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
