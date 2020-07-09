import { ViewHospitalComponent } from './view-hospital.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewHospitalComponent,
  },
];

export const ViewHospitalRoutes = RouterModule.forChild(routes);
