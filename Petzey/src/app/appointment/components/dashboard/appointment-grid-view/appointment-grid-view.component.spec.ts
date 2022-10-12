import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGridViewComponent } from './appointment-grid-view.component';

describe('AppointmentgridviewComponent', () => {
  let component: AppointmentGridViewComponent;
  let fixture: ComponentFixture<AppointmentGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentGridViewComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
