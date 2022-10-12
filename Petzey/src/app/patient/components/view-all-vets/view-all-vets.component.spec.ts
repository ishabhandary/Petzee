import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVetsComponent } from './view-all-vets.component';

describe('ViewAllVetsComponent', () => {
  let component: ViewAllVetsComponent;
  let fixture: ComponentFixture<ViewAllVetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllVetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
