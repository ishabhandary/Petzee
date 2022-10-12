import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAllPetsComponent } from './components/view-all-pets/view-all-pets.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProfileComponent,
    ViewAllPetsComponent
  ],
  imports: [
    CommonModule,
    VetRoutingModule,MatCardModule
  ],
  exports:[ProfileComponent,ViewAllPetsComponent]
})
export class VetModule { }
