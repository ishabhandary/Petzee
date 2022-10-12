import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AppointmentModule } from '../appointment/appointment.module';
import { ViewAllVetsComponent } from './components/view-all-vets/view-all-vets.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ViewAllVetsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AppointmentModule
  ],
  exports:[ViewAllVetsComponent,ProfileComponent]
})
export class PatientModule { }
