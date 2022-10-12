import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';

const routes: Routes = [{path:'login',component:LandingScreenComponent},{ path: 'vets', loadChildren: () => import('./vet/vet.module').then(m => m.VetModule) }, { path: 'patients', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }, { path: 'vet', loadChildren: () => import('./vet/vet.module').then(m => m.VetModule) }];

const config:ExtraOptions={
  useHash:false
}

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
