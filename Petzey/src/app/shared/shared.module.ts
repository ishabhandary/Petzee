import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LandingScreenComponent,
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[SidebarComponent,NavbarComponent]
})
export class SharedModule { }
