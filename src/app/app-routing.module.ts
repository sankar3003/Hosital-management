import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./layouts/default/default.module').then((m) => m.DefaultModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'view_register',
    loadChildren: () =>
      import('./pages/view_register/view_register.module').then(
        (m) => m.View_registerModule
      ),
  },
  {
    path: 'add-doctor',
    loadChildren: () =>
      import('./pages/add-doctor/add-doctor.module').then(
        (m) => m.AddDoctorModule
      ),
  },
  {
    path: 'add-hospital',
    loadChildren: () =>
      import('./pages/add-hospital/add-hospital.module').then(
        (m) => m.AddHospitalModule
      ),
  },
  {
    path: 'add-appointment',
    loadChildren: () =>
      import('./pages/add-appointment/add-appointment.module').then(
        (m) => m.AddAppointmentModule
      ),
  },
  {
    path: 'view-hospital',
    loadChildren: () =>
      import('./pages/view-hospital/view-hospital.module').then(
        (m) => m.ViewHospitalModule
      ),
  },
  {
    path: 'view-appointment',
    loadChildren: () =>
      import('./pages/view-appointment/view-appointment.module').then(
        (m) => m.ViewAppointmentModule
      ),
  },
  {
    path: 'view-doctor',
    loadChildren: () =>
      import('./pages/view-doctor/view-doctor.module').then(
        (m) => m.ViewDoctorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
