import { AddHospitalComponent } from './add-hospital.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddHospitalComponent,
  },
];

export const AddHospitalRoutes = RouterModule.forChild(routes);
