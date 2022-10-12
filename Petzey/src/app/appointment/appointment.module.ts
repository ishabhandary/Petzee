import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { AppointmentGridViewComponent } from './components/dashboard/appointment-grid-view/appointment-grid-view.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NewAppointmentComponent,
    ViewAppointmentComponent,AppointmentGridViewComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  exports:[ViewAppointmentComponent,DashboardComponent,AppointmentGridViewComponent]
})
export class AppointmentModule { }
