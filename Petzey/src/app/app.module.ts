import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientModule } from './patient/patient.module';
import { VetModule } from './vet/vet.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MatCardModule } from '@angular/material/card';
import { msalAngularConfig, msalConfig } from './app-config';
import { Configuration } from 'msal/lib-commonjs/Configuration';
import { MsalAngularConfiguration, MsalService, MSAL_CONFIG, MSAL_CONFIG_ANGULAR, MsalModule, MsalInterceptor } from '@azure/msal-angular';

function MSALConfigFactory(): Configuration {
  return msalConfig;
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return msalAngularConfig;
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatGridListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppointmentModule,
    SharedModule,
    PatientModule,
    VetModule,
    AuthenticationModule,
    ReactiveFormsModule,
    MsalModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MsalInterceptor,multi:true},{
    provide:MSAL_CONFIG,
    useFactory:MSALConfigFactory
  },{
    provide:MSAL_CONFIG_ANGULAR,
    useFactory:MSALAngularConfigFactory
  },MsalService],
  bootstrap: [AppComponent],
  exports: [MatCardModule, MatButtonModule, MatAutocompleteModule, MatDatepickerModule, MatDialogModule]
})


export class AppModule { }
