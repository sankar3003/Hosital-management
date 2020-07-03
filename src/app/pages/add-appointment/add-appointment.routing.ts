import { AddAppointmentComponent } from './add-appointment.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddAppointmentComponent,
  },
];

export const AddAppointmentRoutes = RouterModule.forChild(routes);
