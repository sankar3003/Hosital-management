import { ViewAppointmentComponent } from './view-appointment.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewAppointmentComponent,
  },
];

export const ViewAppointmentRoutes = RouterModule.forChild(routes);
