import { ViewDoctorComponent } from './view-doctor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewDoctorComponent,
  },
];

export const ViewDoctorRoutes = RouterModule.forChild(routes);
