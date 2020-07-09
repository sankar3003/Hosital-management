import { DefaultComponent } from './default.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-appointment',
        pathMatch: 'full',
      },
      {
        path: 'add-appointment',
        loadChildren: () =>
          import('src/app/pages/add-appointment/add-appointment.module').then(
            (m) => m.AddAppointmentModule
          ),
      },
      {
        path: 'add-doctor',
        loadChildren: () =>
          import('src/app/pages/add-doctor/add-doctor.module').then(
            (m) => m.AddDoctorModule
          ),
      },
      {
        path: 'add-hospital',
        loadChildren: () =>
          import('src/app/pages/add-hospital/add-hospital.module').then(
            (m) => m.AddHospitalModule
          ),
      },
      {
        path: 'view-appointment',
        loadChildren: () =>
          import('src/app/pages/view-appointment/view-appointment.module').then(
            (m) => m.ViewAppointmentModule
          ),
      },
      {
        path: 'view-doctor',
        loadChildren: () =>
          import('src/app/pages/view-doctor/view-doctor.module').then(
            (m) => m.ViewDoctorModule
          ),
      },
      {
        path: 'view-hospital',
        loadChildren: () =>
          import('src/app/pages/view-hospital/view-hospital.module').then(
            (m) => m.ViewHospitalModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('src/app/wildcard/wildcard.module').then(
            (m) => m.WildcardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultroutingModule {}
